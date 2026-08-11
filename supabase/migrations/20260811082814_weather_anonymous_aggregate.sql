-- ===========================================================================
-- Het landelijke weerbericht, geanonimiseerd bij constructie.
--
-- Achtergrond staat in docs/datamodel.md, sectie "Waarom er geen tijdstip meer
-- in de collectieve stroom zit". Kort samengevat, omdat het bepaalt hoe je naar
-- de rest van dit bestand moet kijken:
--
--   Een tijdstip in de collectieve tabel is herleidbaar, ook zonder ook maar
--   een enkele identifier. De Supabase API-logs bevatten bij elke request het
--   sub-veld uit de JWT, dus het gebruikers-id, plus een tijdstempel. Joinen op
--   tijd en je weet wie welk weerbeeld instuurde. Onder overweging 26 AVG is de
--   data daarmee pseudoniem in plaats van anoniem, en dat is precies het
--   onderscheid waarop het oordeel van de privacyofficer van Mind rust.
--
-- Daarom: geen rijen per inzending maar tellers per dag. Er bestaat dan geen
-- inzending om te herleiden, en een teller heeft geen geschiedenis, dus
-- achteraf correleren is onmogelijk in plaats van moeilijk.
--
-- De garantie in dit bestand zit niet in de functies maar in de tabel: er is
-- geen kolom die een identifier KAN bevatten. Voeg er nooit een toe.
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


-- De collectieve stroom.
--
-- GEEN id. GEEN tijdstip. GEEN verwijzing naar auth.users. Dat is geen omissie
-- maar de kern van het ontwerp. Elke kolom die je hier toevoegt en die een
-- gebruiker of een moment kan aanduiden, breekt de anonimisering en daarmee de
-- afspraak met Mind.
create table public.weather_daily (
  day     date    not null default (now() at time zone 'Europe/Amsterdam')::date,
  weather text    not null references public.weather_type (code),
  count   integer not null default 0 check (count >= 0),
  primary key (day, weather)
);

comment on table public.weather_daily is
  'Het landelijke weerbericht: per dag, per weerbeeld, hoeveel. Bevat bewust geen id, geen tijdstip en geen verwijzing naar een gebruiker. Zie docs/datamodel.md voordat je hier een kolom aan toevoegt.';

-- De tijdzone is niet cosmetisch. Postgres draait hier op UTC, dus zonder deze
-- conversie rolt de dag om 02:00 Nederlandse tijd om.
comment on column public.weather_daily.day is
  'De dag in Europe/Amsterdam, gezet door de database. Nooit door de client, want dan is hij te vervalsen.';


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
alter table public.weather_daily enable row level security;
alter table public.profiles      enable row level security;

revoke all on public.weather_type  from anon, authenticated;
revoke all on public.weather_daily from anon, authenticated;
revoke all on public.profiles      from anon, authenticated;

-- weather_type: iedereen mag lezen, daar staan alleen labels in.
grant select on public.weather_type to anon, authenticated;

create policy "weertypen zijn openbaar"
  on public.weather_type
  for select
  to anon, authenticated
  using (true);

-- weather_daily krijgt BEWUST geen enkele policy. RLS zonder policy weigert
-- alles, ook lezen. De tabel is daarmee onzichtbaar voor de app en alle toegang
-- loopt via de twee functies onderaan dit bestand.

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
-- koppeling niet wegschrijven, want weather_daily heeft er geen kolom voor.
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
  -- tijdstip mee. Een onbekend weerbeeld stuit op de foreign key.
  insert into public.weather_daily as w (day, weather, count)
  values (v_today, p_weather, 1)
  on conflict (day, weather) do update set count = w.count + 1;
end;
$$;

comment on function public.submit_weather(text) is
  'Stuurt een weerbeeld in voor vandaag. Zet eerst het dagslot op het profiel, hoogt daarna de anonieme dagteller op. Nooit andersom.';

revoke execute on function public.submit_weather(text) from public, anon;
grant  execute on function public.submit_weather(text) to authenticated;


-- ---------------------------------------------------------------------------
-- Lezen
--
-- Alleen percentages, en niets onder de drempel. Onder de drempel komen er nul
-- rijen terug: dat is meteen de empty state en geen aparte foutafhandeling.
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
    select d.weather, d.count, t.label, t.sort_order
      from public.weather_daily d
      join public.weather_type  t on t.code = d.weather
     where d.day = (now() at time zone 'Europe/Amsterdam')::date
  ),
  summed as (
    select sum(today.count)::integer as total from today
  )
  select today.weather,
         today.label,
         round(100.0 * today.count / summed.total)::integer,
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
-- Wat hier bewust NIET staat
--
-- - Realtime op weather_daily. Realtime zendt inserts live uit inclusief
--   tijdstempel, en dat is precies het lek dat dit bestand vermijdt. Voeg deze
--   tabel dus niet toe aan de publicatie supabase_realtime.
-- - Point-in-time recovery. Dat is een projectinstelling en geen SQL, maar het
--   hoort in hetzelfde rijtje: de WAL legt anders elke ophoging vast met zijn
--   transactietijd. PITR staat uit op dit project.
-- ---------------------------------------------------------------------------
