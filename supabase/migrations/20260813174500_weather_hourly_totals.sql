-- ===========================================================================
-- Van losse rijen naar totalen per uurblok.
--
-- Besloten op 13 augustus 2026. Tot deze migratie was weather_entry een rij
-- per inzending: dag, uurblok, weerbeeld. Die rij bevatte zelf niets
-- herleidbaars, maar de opslag eromheen wel: de systeemkolommen ctid en xmin
-- verraden de invoegvolgorde, en wie zowel de database als de platformlogs
-- kan inzien, kon rijen binnen een uurblok op rangorde naast de logregels
-- leggen. Dat restrisico stond eerlijk in de kop van de vorige migratie.
--
-- De oplossing: er bestaat geen rij per inzending meer. Een inzending telt
-- direct op bij een totaal per (dag, uurblok, weerbeeld). Een totaal kent
-- geen volgorde en geen geschiedenis, dus er valt achteraf niets meer uit te
-- lijnen, ook niet binnen de bewaartermijn van de logs.
--
-- Wat dit Mind kost: niets. Een rij bevatte alleen dag, uurblok en weerbeeld,
-- dus de verzameling rijen bevatte exact dezelfde informatie als deze
-- totalen. Het verloop binnen de dag blijft, een misbruikpiek in een uurblok
-- blijft zichtbaar, en uitsplitsen kon toch alleen op deze drie dimensies.
-- Zie docs/datamodel.md, sectie "Waarom er totalen per uurblok staan".
--
-- Wat overblijft, en dat hoort in de DPIA: wie live meekijkt terwijl een
-- totaal ophoogt, ziet welk totaal net veranderde. Daar helpt geen schema
-- tegen; de maatregel is beperkte dashboardtoegang, en die is
-- organisatorisch.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- De nieuwe collectieve tabel
-- ---------------------------------------------------------------------------

-- GEEN id, GEEN tijdstempel, GEEN code, GEEN verwijzing naar auth.users, en
-- ook geen rij die een enkele inzending vertegenwoordigt. De primary key op
-- (day, hour, weather) wijst een totaal aan en geen inzending; hij bestaat
-- omdat het optellen een upsert is en die een conflictdoel nodig heeft.
--
-- Elke kolom die je hier toevoegt en die een gebruiker of een moment fijner
-- dan een uur kan aanduiden, breekt de anonimisering en daarmee de afspraak
-- met Mind.
create table public.weather_hourly (
  day     date     not null default (now() at time zone 'Europe/Amsterdam')::date,
  hour    smallint not null default extract(hour from (now() at time zone 'Europe/Amsterdam'))::smallint
                   check (hour between 0 and 23),
  weather text     not null references public.weather_type (code),
  total   integer  not null check (total >= 1),
  primary key (day, hour, weather)
);

comment on table public.weather_hourly is
  'Het landelijke weerbericht: totalen per dag, uurblok en weerbeeld. Een inzending telt op bij een totaal en krijgt geen eigen rij, dus er bestaat geen volgorde en geen geschiedenis. Zie docs/datamodel.md voordat je hier een kolom aan toevoegt.';

-- De tijdzone is niet cosmetisch. Postgres draait hier op UTC, dus zonder deze
-- conversie rolt de dag om 02:00 Nederlandse tijd om en klopt ook het uur niet.
comment on column public.weather_hourly.day is
  'De dag in Europe/Amsterdam, gezet door de database. Nooit door de client, want dan is hij te vervalsen.';

comment on column public.weather_hourly.hour is
  'Het uurblok 0 tot en met 23 in Europe/Amsterdam, gezet door de database. Bewust grof: fijner maakt het totaal joinbaar met de API-logs.';

comment on column public.weather_hourly.total is
  'Hoeveel inzendingen dit totaal telt. Een totaal kent zijn eigen verleden niet: achteraf is niet te zien wanneer hij ophoogde.';

-- Dicht, net als de rest van de collectieve stroom: RLS aan, rechten weg, en
-- BEWUST geen enkele policy. RLS zonder policy weigert alles, ook lezen. Alle
-- toegang loopt via de functies hieronder.
alter table public.weather_hourly enable row level security;
revoke all on public.weather_hourly from anon, authenticated;


-- ---------------------------------------------------------------------------
-- Overzetten en opruimen
--
-- Op dev staat op dit moment niets in weather_entry, maar deze migratie moet
-- ook kloppen als dat ooit anders is: eerst optellen, dan pas weg.
-- ---------------------------------------------------------------------------

insert into public.weather_hourly (day, hour, weather, total)
select e.day, e.hour, e.weather, count(*)::integer
  from public.weather_entry e
 group by e.day, e.hour, e.weather;

drop table public.weather_entry;


-- ---------------------------------------------------------------------------
-- Insturen: zelfde contract als voorheen, nu een optelling
--
-- Het dagslot staat aan de persoonlijke kant en gaat VOOR het optellen. Beide
-- handelingen zitten in een transactie. Dat moet: laat je de client twee
-- losse calls doen, dan slaat hij de eerste gewoon over en is het slot geen
-- slot. De functie ziet dus zowel auth.uid() als het weerbeeld, maar ze kan
-- die koppeling niet wegschrijven, want weather_hourly heeft er geen kolom
-- en geen rij voor.
-- ---------------------------------------------------------------------------

create or replace function public.submit_weather(p_weather text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_today date := (now() at time zone 'Europe/Amsterdam')::date;
  v_uid   uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'niet ingelogd' using errcode = '42501';
  end if;

  -- Slaagt deze update niet, dan heeft deze gebruiker vandaag al ingecheckt.
  update public.profiles
     set last_checkin_on = v_today,
         last_active_at  = now()
   where id = v_uid
     and (last_checkin_on is null or last_checkin_on < v_today);

  if not found then
    raise exception 'vandaag al ingecheckt' using errcode = 'P0001';
  end if;

  -- De anonieme bijdrage: optellen bij het totaal van dit uurblok. Hier gaat
  -- geen id, geen hash, geen code en geen tijdstip mee. day en hour komen uit
  -- de defaults, dus van de database en niet van de client. Een onbekend
  -- weerbeeld stuit op de foreign key.
  insert into public.weather_hourly as h (weather, total)
  values (p_weather, 1)
  on conflict (day, hour, weather)
  do update set total = h.total + 1;
end;
$$;

comment on function public.submit_weather(text) is
  'Stuurt een weerbeeld in voor vandaag. Zet eerst het dagslot op het profiel, telt daarna anoniem op bij het uurtotaal. Nooit andersom.';

revoke execute on function public.submit_weather(text) from public, anon;
grant  execute on function public.submit_weather(text) to authenticated;


-- ---------------------------------------------------------------------------
-- Lezen
--
-- Alleen percentages, en niets onder de drempel. Onder de drempel komen er nul
-- rijen terug: dat is meteen de empty state en geen aparte foutafhandeling.
--
-- Deze functie geeft bewust GEEN uitsplitsing per uur terug. Het uur staat in
-- de tabel voor Mind, niet voor de app. Een uurblok met een laag totaal is
-- namelijk wel weer herleidbaar, en de app toont het landelijke beeld van
-- vandaag.
-- ---------------------------------------------------------------------------

create or replace function public.weather_today()
returns table (
  weather text,
  label   text,
  share   integer,
  total   integer
)
language sql
security definer
set search_path = ''
stable
as $$
  with today as (
    select h.weather,
           t.label,
           t.sort_order,
           sum(h.total)::integer as n
      from public.weather_hourly h
      join public.weather_type   t on t.code = h.weather
     where h.day = (now() at time zone 'Europe/Amsterdam')::date
     group by h.weather, t.label, t.sort_order
  ),
  summed as (
    select sum(today.n)::integer as total from today
  )
  select today.weather,
         today.label,
         round(100.0 * today.n / summed.total)::integer,
         summed.total
    from today, summed
   -- De drempel voor tonen. Dit is een privacymaatregel en geen designkeuze:
   -- zie docs/datamodel.md. Het getal wijzigen is een migratie, en dat is de
   -- bedoeling, want dan komt er een review overheen.
   where summed.total >= 10
   order by today.sort_order;
$$;

comment on function public.weather_today() is
  'Het landelijke weerbericht van vandaag als percentages. Geeft nul rijen zolang het totaal onder de drempel ligt. Percentages tellen door afronding niet altijd precies tot 100 op.';

revoke execute on function public.weather_today() from public, anon;
grant  execute on function public.weather_today() to authenticated;


-- ---------------------------------------------------------------------------
-- Bewaartermijn: de rollup volgt de tabel
--
-- De uurtotalen blijven een jaar staan. Daarna worden ze per dag samengevat
-- in weather_daily en verdwijnen ze. Wat overblijft is een dagtotaal zonder
-- uur.
--
-- De reden is nu data-minimalisatie en niet meer het volgordelek: dat lek
-- bestond bij losse rijen en een totaal heeft het niet. Het getal staat op
-- een plek, de default hieronder, en wijzigen gaat via een migratie zodat er
-- een review overheen komt.
--
-- LET OP: deze functie is NIET ingepland. Er staat geen pg_cron op dit project
-- en die aanzetten is een eigen besluit, geen bijvangst van deze migratie. De
-- eerste totalen lopen pas in augustus 2027 af, dus dat heeft geen haast. Wat
-- wel haast heeft is dat het besluit genomen wordt en niet vergeten.
-- ---------------------------------------------------------------------------

drop function public.rollup_weather_entries(integer);

create function public.rollup_weather_hourly(p_older_than_days integer default 365)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_cutoff  date := (now() at time zone 'Europe/Amsterdam')::date - p_older_than_days;
  v_deleted integer;
begin
  insert into public.weather_daily as d (day, weather, count)
  select h.day, h.weather, sum(h.total)::integer
    from public.weather_hourly h
   where h.day < v_cutoff
   group by h.day, h.weather
  on conflict (day, weather) do update set count = d.count + excluded.count;

  delete from public.weather_hourly where day < v_cutoff;
  get diagnostics v_deleted = row_count;

  return v_deleted;
end;
$$;

comment on function public.rollup_weather_hourly(integer) is
  'Vat uurtotalen ouder dan de bewaartermijn samen tot dagtotalen in weather_daily en verwijdert ze daarna. Geeft terug hoeveel uurtotalen verdwenen. Nog niet ingepland, zie de migratie.';

revoke execute on function public.rollup_weather_hourly(integer) from public, anon, authenticated;

-- weather_daily zelf wijzigt niet, alleen wie hem vult.
comment on table public.weather_daily is
  'Het archief van het landelijke weerbericht: per dag, per weerbeeld, hoeveel. Geen uur meer, dus onherroepelijk anoniem. Wordt gevuld door rollup_weather_hourly().';


-- ---------------------------------------------------------------------------
-- Wat hier bewust NIET staat
--
-- - Realtime op weather_hourly. Realtime zendt elke wijziging live uit
--   inclusief het moment waarop hij binnenkwam, en elke ophoging is een
--   inzending. Voeg deze tabel dus niet toe aan de publicatie
--   supabase_realtime.
-- - Point-in-time recovery. Dat is een projectinstelling en geen SQL, maar
--   het hoort in hetzelfde rijtje: de WAL zou elke ophoging vastleggen met
--   zijn transactietijd, en dan heeft een totaal alsnog een geschiedenis.
--   PITR staat uit op dit project en moet uit blijven.
-- ---------------------------------------------------------------------------
