-- ===========================================================================
-- Gebruikstotalen: wat er in de app gebeurt, geteld zonder gebruiker.
--
-- Besluit Stijn, 18 september 2026: MIND mag zien wat er in de app gebeurt
-- (schermweergaven, de trechter van onboarding en check-in, welke content
-- gebruikt wordt, actieve gebruikers per platform, de Hulplijn per kanaal en
-- of het insturen van het weer technisch lukt). Tot dan stond in scope.md
-- "geen enkel event". Paul wordt hierover ingelicht, zie privacy-besluiten.md.
--
-- De vorm is die van weather_hourly: een gebeurtenis telt op bij een totaal
-- en er bestaat geen rij per gebeurtenis en geen rij per gebruiker. De app
-- telt lokaal en stuurt een keer per dag de tellers van afgesloten dagen in
-- een batch. Het moment van die batch zegt daardoor niets over wanneer iemand
-- iets deed.
--
-- Wat erbij komt:
--   1. usage_event: de vaste lijst events, met per event welke items mogen.
--   2. usage_daily: totalen per (dag, event, item). Geen gebruiker, geen uur.
--   3. profiles.last_usage_on: het slot van een batch per account per dag.
--   4. log_usage(): neemt de batch aan. Eerst het slot, dan optellen.
--   5. usage_scrub(): herschrijft de recente totalen, zie de kop daar.
--
-- Wat er NIET in staat, en ook niet in mag: het weerbeeld, de provincie, een
-- zoekterm, een score, vrije tekst, of een tweede dimensie naast het item.
-- Lezen komt later, met de adminrol en de drempel van 10: deze migratie geeft
-- niemand leesrecht.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. De vaste lijst events
--
-- Een referentietabel en geen check-constraint, om dezelfde reden als
-- weather_type: een event erbij is een insert in een migratie, en het
-- dashboard kan de lijst lezen. De app kent de lijst als TypeScript-type en
-- leest deze tabel niet.
--
-- item_kind:
--   'none'  het event heeft geen item, de app stuurt ''.
--   'list'  het item moet letterlijk in items staan.
--   'slug'  het item is een vaste waarde uit de app (een slug, een
--           routepatroon, een domein) en moet aan de vorm hieronder voldoen.
-- ---------------------------------------------------------------------------

create table public.usage_event (
  code       text primary key check (code ~ '^[a-z][a-z0-9_]{2,47}$'),
  item_kind  text not null check (item_kind in ('none', 'list', 'slug')),
  items      text[],
  constraint usage_event_items_check check ((item_kind = 'list') = (items is not null))
);

comment on table public.usage_event is
  'De vaste lijst gebeurtenissen die de app mag tellen. Referentiedata, gaat over de app en niet over een persoon. Wijzigen gaat via een migratie.';

alter table public.usage_event enable row level security;
revoke all on public.usage_event from anon, authenticated;

insert into public.usage_event (code, item_kind, items) values
  -- App en actieve gebruikers
  ('app_opened_day',                'list', array['ios', 'android']),
  ('app_opened_week',               'none', null),
  ('app_opened_month',              'none', null),
  ('screen_viewed',                 'slug', null),
  -- Onboarding
  ('onboarding_step_completed',     'list', array['leeftijd', 'account', 'naam', 'voorkeuren', 'toestemming']),
  ('account_created',               'list', array['email', 'apple', 'google']),
  ('weather_consent_answered',      'list', array['ja', 'nee']),
  ('location_permission_answered',  'list', array['ja', 'nee']),
  -- Check-in en weerbericht. Nooit het weerbeeld: dat staat alleen in
  -- weather_hourly, en alleen van wie daar toestemming voor gaf.
  ('checkin_started',               'none', null),
  ('checkin_completed',             'none', null),
  ('checkin_skipped',               'none', null),
  ('weather_submit_result',         'list', array['gelukt', 'al-bijgedragen', 'mislukt', 'niet-verbonden', 'niet-ingelogd']),
  ('outcome_shared',                'none', null),
  ('weather_map_opened',            'none', null),
  -- Tips
  ('topic_opened',                  'slug', null),
  ('article_opened',                'slug', null),
  ('guide_opened',                  'slug', null),
  ('tip_saved',                     'slug', null),
  ('external_link_opened',          'slug', null),
  ('search_performed',              'none', null),
  ('search_no_results',             'none', null),
  -- Challenges, zelftests en quote. Bij een zelftest nooit de score.
  ('challenge_started',             'slug', null),
  ('challenge_day_completed',       'slug', null),
  ('challenge_completed',           'slug', null),
  ('selftest_started',              'slug', null),
  ('selftest_completed',            'slug', null),
  ('quote_shared',                  'none', null),
  -- Hulplijn en toestemming
  ('helpline_opened',               'none', null),
  ('helpline_channel_tapped',       'list', array['bellen', 'whatsapp', 'chat', 'mail', 'luisterlijn', '113']),
  ('weather_consent_withdrawn',     'none', null);


-- ---------------------------------------------------------------------------
-- 2. De totalen
--
-- De dag komt van het toestel en niet van de database, want de batch gaat pas
-- na afloop van de dag. log_usage() laat alleen de zeven afgesloten dagen voor
-- vandaag toe. Er is bewust geen uur: voor contentgebruik is een dag fijn
-- genoeg, en een uur zou de totalen kleiner en dus herleidbaarder maken.
-- ---------------------------------------------------------------------------

create table public.usage_daily (
  day    date    not null,
  event  text    not null references public.usage_event (code),
  item   text    not null default '',
  total  integer not null check (total >= 1),
  primary key (day, event, item)
);

comment on table public.usage_daily is
  'Gebruikstotalen per dag, event en item. Geen gebruiker, geen tijdstip, geen rij per gebeurtenis. Alle toegang loopt via functies.';
comment on column public.usage_daily.day is
  'De kalenderdag waarop het gebeurde, van het toestel. Alleen afgesloten dagen, hooguit zeven dagen terug.';
comment on column public.usage_daily.item is
  'Een vaste waarde uit de app: een slug, een routepatroon, ja of nee. Nooit vrije tekst, nooit een weerbeeld, nooit een score. Leeg voor events zonder item.';

alter table public.usage_daily enable row level security;
revoke all on public.usage_daily from anon, authenticated;


-- ---------------------------------------------------------------------------
-- 3. Het slot: een batch per account per dag
--
-- Zelfde soort veld als last_checkin_on: alleen een datum, wordt overschreven,
-- geen historie. Zonder dit slot kan iemand met een account de tellers
-- opblazen door steeds opnieuw in te sturen.
-- ---------------------------------------------------------------------------

alter table public.profiles
  add column last_usage_on date;

comment on column public.profiles.last_usage_on is
  'Datum van de laatste batch gebruikstotalen van dit account. Wordt overschreven. Geen inhoud, geen tijdstip, geen historie: alleen het slot van een batch per dag.';


-- ---------------------------------------------------------------------------
-- 4. Herschrijven van de recente totalen
--
-- Een batch werkt in een transactie meerdere totalen bij, en de systeemkolom
-- xmin verraadt achteraf welke rijen samen zijn bijgewerkt. Bij weather_hourly
-- is dat een rij per transactie en valt er niets te groeperen; hier zou het
-- de dag van een (naamloze) gebruiker bij elkaar leggen, zolang geen latere
-- batch dezelfde rijen raakt. Deze functie schrijft alle recente rijen in een
-- keer opnieuw, zodat ze dezelfde xmin krijgen en er niets meer te groeperen
-- valt. log_usage() roept hem bij ongeveer een op de tien batches aan; is er
-- ooit een planner (pg_cron), dan hoort hij daar elke nacht te draaien.
-- ---------------------------------------------------------------------------

create function public.usage_scrub()
returns void
language sql
security definer
set search_path = ''
as $$
  update public.usage_daily
     set total = total
   where day >= (now() at time zone 'Europe/Amsterdam')::date - 8;
$$;

comment on function public.usage_scrub() is
  'Herschrijft de totalen van de laatste dagen zodat xmin niet verraadt welke rijen uit dezelfde batch kwamen. Niet voor de app.';

revoke execute on function public.usage_scrub() from public, anon, authenticated;


-- ---------------------------------------------------------------------------
-- 5. Insturen
--
-- p_events is een lijst van { "d": "2026-09-17", "e": "topic_opened",
-- "i": "piekeren", "n": 3 }. Wat niet klopt wordt overgeslagen en breekt de
-- batch niet: een nieuwere app mag een event sturen dat deze server nog niet
-- kent. De dag wordt als tekst vergeleken met de toegestane dagen en nooit
-- gecast, zodat een onzindatum geen fout geeft.
-- ---------------------------------------------------------------------------

create function public.log_usage(p_events jsonb)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_today date := (now() at time zone 'Europe/Amsterdam')::date;
  v_uid   uuid := auth.uid();
  v_rows  integer;
begin
  if v_uid is null then
    raise exception 'niet ingelogd' using errcode = '42501';
  end if;

  if p_events is null or jsonb_typeof(p_events) <> 'array' or jsonb_array_length(p_events) > 400 then
    raise exception 'ongeldige batch' using errcode = '22023';
  end if;

  -- Slaagt deze update niet, dan stuurde dit account vandaag al een batch in.
  -- Eerst het slot, daarna het optellen. Nooit andersom.
  update public.profiles
     set last_usage_on  = v_today,
         last_active_at = now()
   where id = v_uid
     and (last_usage_on is null or last_usage_on < v_today);

  if not found then
    raise exception 'vandaag al ingestuurd' using errcode = 'P0001';
  end if;

  -- Het optellen. Geen id, geen hash, geen tijdstip: alleen dag, event, item
  -- en een aantal, met een plafond van 200 per sleutel per batch.
  with ruw as (
    select e ->> 'd'               as d,
           e ->> 'e'               as ev,
           coalesce(e ->> 'i', '') as it,
           case when e ->> 'n' ~ '^[0-9]{1,6}$' then (e ->> 'n')::integer end as n
      from jsonb_array_elements(p_events) as e
     where jsonb_typeof(e) = 'object'
  ),
  dagen as (
    select (v_today - g)::text as d, v_today - g as day
      from generate_series(1, 7) as g
  ),
  schoon as (
    select dagen.day, r.ev as event, r.it as item, sum(r.n) as n
      from ruw r
      join dagen                on dagen.d = r.d
      join public.usage_event u on u.code  = r.ev
     where r.n >= 1
       and (
             (u.item_kind = 'none' and r.it = '')
          or (u.item_kind = 'list' and r.it = any (u.items))
          or (u.item_kind = 'slug' and r.it ~ '^[a-z0-9/(\[][a-z0-9/_.()\[\]+-]{0,79}$')
           )
     group by dagen.day, r.ev, r.it
  )
  insert into public.usage_daily as t (day, event, item, total)
  select s.day, s.event, s.item, least(s.n, 200)::integer
    from schoon s
  on conflict (day, event, item)
  do update set total = t.total + excluded.total;

  get diagnostics v_rows = row_count;

  if random() < 0.1 then
    perform public.usage_scrub();
  end if;

  return v_rows;
end;
$$;

comment on function public.log_usage(jsonb) is
  'Neemt een batch gebruikstotalen van afgesloten dagen aan. Zet eerst het slot van een batch per account per dag en werkt last_active_at bij, telt daarna anoniem op. Geeft terug hoeveel totalen zijn bijgewerkt.';

revoke execute on function public.log_usage(jsonb) from public, anon;
grant  execute on function public.log_usage(jsonb) to authenticated;
