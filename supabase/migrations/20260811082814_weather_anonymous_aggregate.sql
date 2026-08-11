-- ===========================================================================
-- Het landelijke weerbericht.
--
-- Achtergrond staat in docs/datamodel.md, sectie "Waarom het tijdstip een
-- uurblok is". Kort samengevat, omdat het bepaalt hoe je naar de rest van dit
-- bestand moet kijken:
--
--   Een exact tijdstip in de collectieve tabel is herleidbaar, ook zonder ook
--   maar een enkele identifier. De Supabase API-logs bevatten bij elke request
--   het sub-veld uit de JWT, dus het gebruikers-id, plus een tijdstempel.
--   Joinen op tijd en je weet wie welk weerbeeld instuurde. Onder overweging 26
--   AVG is de data daarmee pseudoniem in plaats van anoniem, en dat is precies
--   het onderscheid waarop het oordeel van de privacyofficer van Mind rust.
--
-- Mind heeft de losse rij nodig: dagritme, misbruik herkennen, en achteraf
-- kunnen uitsplitsen naar iets wat vandaag nog niemand bedacht heeft. Dat kan
-- niet met tellers. De oplossing is daarom niet de tijd weglaten maar hem
-- grofmaken: er staat een uurblok in en geen tijdstempel. In een uurblok zitten
-- honderden rijen, en geen ervan wijst nog naar een enkele logregel.
--
-- Wat dat NIET oplost, en dit hoort in de DPIA: de systeemkolommen ctid en xmin
-- verraden de invoegvolgorde en zijn niet weg te halen. Wie zowel database- als
-- logtoegang heeft, kan de rijen binnen een uurblok op rangorde uitlijnen naast
-- de logregels van datzelfde uur. Daar is in SQL niets tegen te doen. Wat het
-- begrenst is de bewaartermijn onderaan dit bestand plus het beperken van wie
-- er bij het dashboard kan, en dat laatste is een organisatorische maatregel.
--
-- De garantie in dit bestand zit niet in de functies maar in de tabel: er is
-- geen kolom die een gebruiker KAN aanduiden, en geen kolom die fijner is dan
-- een uur. Voeg er nooit een toe.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- Tabellen
-- ---------------------------------------------------------------------------

-- De vaste lijst weerbeelden. Bewust een referentietabel en geen enum: de namen
-- moeten nog van Mind komen, en zo is een weerbeeld erbij een seed-wijziging in
-- plaats van een enum-migratie.
create table public.weather_type (
  code       text     primary key,
  label      text     not null,
  sort_order smallint not null
);

comment on table public.weather_type is
  'De vaste lijst weerbeelden waaruit de check-in kiest. Wijzigen gaat via een migratie of een seed, nooit via de dashboard-UI.';


-- De collectieve stroom: een rij per inzending.
--
-- GEEN id, GEEN tijdstempel, GEEN code, GEEN verwijzing naar auth.users. Dat is
-- geen omissie maar de kern van het ontwerp:
--
--   - Een oplopende id verraadt de invoegvolgorde net zo goed als een tijd. Ook
--     uuid v7 doet dat, want die is tijdgeordend. Er is hier daarom helemaal
--     geen sleutel. Een rij uit de anonieme pool is per docs/privacy-besluiten.md
--     toch niet individueel verwijderbaar, dus er is ook niets om hem voor nodig
--     te hebben.
--   - Een willekeurige code per gebruiker is een pseudoniem. Dat is precies wat
--     we aan Mind hebben toegezegd niet te doen. Ook niet "voor deduplicatie":
--     daar dient het dagslot op profiles voor.
--
-- Elke kolom die je hier toevoegt en die een gebruiker of een moment fijner dan
-- een uur kan aanduiden, breekt de anonimisering en daarmee de afspraak met Mind.
create table public.weather_entry (
  day     date     not null default (now() at time zone 'Europe/Amsterdam')::date,
  hour    smallint not null default extract(hour from (now() at time zone 'Europe/Amsterdam'))::smallint
                   check (hour between 0 and 23),
  weather text     not null references public.weather_type (code)
);

comment on table public.weather_entry is
  'Het landelijke weerbericht: een rij per inzending, met een uurblok in plaats van een tijdstip. Bevat bewust geen id, geen code en geen verwijzing naar een gebruiker. Zie docs/datamodel.md voordat je hier een kolom aan toevoegt.';

-- De tijdzone is niet cosmetisch. Postgres draait hier op UTC, dus zonder deze
-- conversie rolt de dag om 02:00 Nederlandse tijd om en klopt ook het uur niet.
comment on column public.weather_entry.day is
  'De dag in Europe/Amsterdam, gezet door de database. Nooit door de client, want dan is hij te vervalsen.';

comment on column public.weather_entry.hour is
  'Het uurblok 0 tot en met 23 in Europe/Amsterdam, gezet door de database. Bewust grof: fijner maakt de rij joinbaar met de API-logs.';

-- Een index, geen unique constraint. Dubbele rijen zijn normaal en gewenst:
-- honderd mensen met hetzelfde weerbeeld in hetzelfde uur zijn honderd rijen.
-- day staat vooraan, dus dezelfde index bedient zowel het dagelijkse weerbericht
-- als de uitsplitsing per uur.
create index weather_entry_day_hour_idx on public.weather_entry (day, hour);


-- Het archief. Hier landen de rijen als ze door de bewaartermijn heen zijn:
-- opgeteld tot dagtellers, waarna de rijen zelf weg gaan. Zie de rollup-functie
-- onderaan dit bestand.
create table public.weather_daily (
  day     date    not null,
  weather text    not null references public.weather_type (code),
  count   integer not null check (count >= 0),
  primary key (day, weather)
);

comment on table public.weather_daily is
  'Het archief van het landelijke weerbericht: per dag, per weerbeeld, hoeveel. Geen uur meer, dus onherroepelijk anoniem. Wordt gevuld door rollup_weather_entries().';


-- De persoonlijke kant. Alleen bewaartermijn-administratie en het dagslot.
-- Er staat nergens in deze tabel WAT iemand heeft ingevuld, alleen DAT hij op
-- een dag heeft ingecheckt.
create table public.profiles (
  id              uuid        primary key references auth.users (id) on delete cascade,
  last_active_at  timestamptz not null default now(),
  last_checkin_on date
);

comment on column public.profiles.last_active_at is
  'Wordt overschreven, geen historie. Bestaat om "weg na 2 jaar inactiviteit" te kunnen handhaven. De opruiming zelf bestaat nog niet, zie docs/datamodel.md.';

comment on column public.profiles.last_checkin_on is
  'Alleen de datum van de laatste check-in, zodat iemand maar een keer per dag meetelt. Geen weerbeeld, geen historie.';


-- ---------------------------------------------------------------------------
-- Rechten: alles dicht, daarna precies een deur open
--
-- Let op: Supabase zet default privileges die nieuwe tabellen in public
-- automatisch aan anon en authenticated geven. De revokes hieronder zijn dus
-- nodig en niet defensief bedoeld.
-- ---------------------------------------------------------------------------

alter table public.weather_type  enable row level security;
alter table public.weather_entry enable row level security;
alter table public.weather_daily enable row level security;
alter table public.profiles      enable row level security;

revoke all on public.weather_type  from anon, authenticated;
revoke all on public.weather_entry from anon, authenticated;
revoke all on public.weather_daily from anon, authenticated;
revoke all on public.profiles      from anon, authenticated;

-- weather_type: iedereen mag lezen, daar staan alleen labels in.
grant select on public.weather_type to anon, authenticated;

create policy "weertypen zijn openbaar"
  on public.weather_type
  for select
  to anon, authenticated
  using (true);

-- weather_entry en weather_daily krijgen BEWUST geen enkele policy. RLS zonder
-- policy weigert alles, ook lezen. Beide tabellen zijn daarmee onzichtbaar voor
-- de app, en alle toegang loopt via de functies onderaan dit bestand. Dat is
-- hier belangrijker dan bij de vorige opzet met tellers: een losse rij mag de
-- app niet kunnen uitlezen, want dan is de volgorde zichtbaar.

-- profiles: alleen de eigen rij, en alleen lezen.
grant select on public.profiles to authenticated;

create policy "eigen profiel lezen"
  on public.profiles
  for select
  to authenticated
  using ((select auth.uid()) = id);

-- Er komt hier bewust GEEN update-policy en geen update-grant. Anders kan een
-- gebruiker zijn eigen last_checkin_on terugzetten en het dagslot omzeilen.
-- Komen er later velden bij die hij wel zelf mag wijzigen, geef daar dan een
-- grant per kolom op en niet op de hele tabel.


-- ---------------------------------------------------------------------------
-- Een profiel bij een nieuw account
-- ---------------------------------------------------------------------------

create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

revoke execute on function public.handle_new_user() from public, anon, authenticated;


-- ---------------------------------------------------------------------------
-- Insturen
--
-- Het dagslot staat aan de persoonlijke kant en gaat VOOR het wegschrijven.
-- Beide handelingen zitten in een transactie. Dat moet: laat je de client twee
-- losse calls doen, dan slaat hij de eerste gewoon over en is het slot geen
-- slot. De functie ziet dus zowel auth.uid() als het weerbeeld, maar ze kan die
-- koppeling niet wegschrijven, want weather_entry heeft er geen kolom voor.
-- ---------------------------------------------------------------------------

create function public.submit_weather(p_weather text)
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

  -- De anonieme bijdrage. Hier gaat geen id, geen hash, geen code en geen
  -- tijdstip mee. day en hour komen uit de defaults, dus van de database en
  -- niet van de client. Een onbekend weerbeeld stuit op de foreign key.
  insert into public.weather_entry (weather) values (p_weather);
end;
$$;

comment on function public.submit_weather(text) is
  'Stuurt een weerbeeld in voor vandaag. Zet eerst het dagslot op het profiel, schrijft daarna de anonieme rij weg. Nooit andersom.';

revoke execute on function public.submit_weather(text) from public, anon;
grant  execute on function public.submit_weather(text) to authenticated;


-- ---------------------------------------------------------------------------
-- Lezen
--
-- Alleen percentages, en niets onder de drempel. Onder de drempel komen er nul
-- rijen terug: dat is meteen de empty state en geen aparte foutafhandeling.
--
-- Deze functie geeft bewust GEEN uitsplitsing per uur terug. Het uur staat in de
-- tabel voor Mind, niet voor de app. Een uurblok met weinig rijen is namelijk
-- wel weer herleidbaar, en de app toont het landelijke beeld van vandaag.
-- ---------------------------------------------------------------------------

create function public.weather_today()
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
    select e.weather,
           t.label,
           t.sort_order,
           count(*)::integer as n
      from public.weather_entry e
      join public.weather_type  t on t.code = e.weather
     where e.day = (now() at time zone 'Europe/Amsterdam')::date
     group by e.weather, t.label, t.sort_order
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
-- Bewaartermijn
--
-- De losse rijen blijven een jaar staan. Daarna worden ze per dag opgeteld tot
-- weather_daily en verdwijnen ze. Wat overblijft is een dagteller zonder uur,
-- en die is onherroepelijk anoniem.
--
-- Waarom het aflopen moet: zolang de rijen bestaan, bestaat het restrisico uit
-- de kop van dit bestand, de invoegvolgorde via ctid en xmin. De bewaartermijn
-- is dus geen opruimhygiene maar de maatregel die dat risico eindig maakt.
--
-- Het getal staat op een plek: de default hieronder. Het is voorlopig, en
-- wijzigen gaat via een migratie zodat er een review overheen komt.
--
-- LET OP: deze functie is NIET ingepland. Er staat geen pg_cron op dit project
-- en die aanzetten is een eigen besluit, geen bijvangst van deze migratie. De
-- eerste rijen lopen pas in augustus 2027 af, dus dat heeft geen haast. Wat wel
-- haast heeft is dat het besluit genomen wordt en niet vergeten.
-- ---------------------------------------------------------------------------

create function public.rollup_weather_entries(p_older_than_days integer default 365)
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
  select e.day, e.weather, count(*)::integer
    from public.weather_entry e
   where e.day < v_cutoff
   group by e.day, e.weather
  on conflict (day, weather) do update set count = d.count + excluded.count;

  delete from public.weather_entry where day < v_cutoff;
  get diagnostics v_deleted = row_count;

  return v_deleted;
end;
$$;

comment on function public.rollup_weather_entries(integer) is
  'Telt rijen ouder dan de bewaartermijn op tot dagtellers in weather_daily en verwijdert ze daarna. Geeft terug hoeveel rijen verdwenen. Nog niet ingepland, zie de migratie.';

revoke execute on function public.rollup_weather_entries(integer) from public, anon, authenticated;


-- ---------------------------------------------------------------------------
-- Wat hier bewust NIET staat
--
-- - Realtime op weather_entry. Realtime zendt inserts live uit inclusief het
--   moment waarop ze binnenkwamen, en dat is exact het lek dat het uurblok
--   vermijdt. Voeg deze tabel dus niet toe aan de publicatie supabase_realtime.
--   Dit weegt zwaarder dan bij de vorige opzet met tellers: hier is elke insert
--   een inzending.
-- - Point-in-time recovery. Dat is een projectinstelling en geen SQL, maar het
--   hoort in hetzelfde rijtje: de WAL legt anders elke insert vast met zijn
--   transactietijd, op de milliseconde, en dat maakt het uurblok waardeloos.
--   PITR staat uit op dit project en moet uit blijven.
-- ---------------------------------------------------------------------------
