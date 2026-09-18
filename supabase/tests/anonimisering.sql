-- ===========================================================================
-- Bewijs dat de collectieve stroom niet herleidbaar KAN zijn.
--
-- Dit is geen gewone test. Het is het bewijsstuk waarmee we aan de privacy-
-- officer van Mind laten zien dat de anonimisering een eigenschap van de
-- structuur is, en niet van de zorgvuldigheid van degene die er een query op
-- schrijft. De uitvoer hoort als bijlage bij de DPIA.
--
-- Sinds 13 augustus 2026 staan er totalen in weather_hourly: per dag, uurblok
-- en weerbeeld hoeveel inzendingen er waren. Er bestaat geen rij per
-- inzending, dus ook geen invoegvolgorde die iets over een inzending zegt,
-- en de totalen blijven staan: er is geen rollup en geen archieftabel meer.
-- Wat deze test bewaakt is dat zo'n totaal niets bevat waarmee je een
-- inzending aan iemand kunt koppelen, en dat de tijd erin grof genoeg is om
-- niet met de API-logs te kunnen joinen. Zie de kop van de migratie
-- weather_hourly_totals.
--
-- Draaien, tegen het gedeelde dev-project (we draaien Supabase niet lokaal,
-- zie CLAUDE.md sectie 9). De pooler-URI en het wachtwoord staan uitgelegd in
-- docs/backend-draaiboek.md sectie 4:
--   psql "<pooler-URI>" -f supabase/tests/anonimisering.sql
--
-- Elke assert die faalt, stopt het script met een foutmelding. Geen uitvoer met
-- "GESLAAGD" onderaan betekent dus dat er iets niet klopt.
-- ===========================================================================

\echo ''
\echo '=== 1. Welke kolommen heeft de collectieve tabel? ==='

select column_name, data_type, is_nullable
  from information_schema.columns
 where table_schema = 'public' and table_name = 'weather_hourly'
 order by ordinal_position;

do $$
declare
  v_cols  integer;
  v_risky text;
begin
  select count(*) into v_cols
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_hourly';
  -- Vijf sinds de provincie erbij kwam (10 september 2026): day, hour,
  -- weather, province, total.
  assert v_cols = 5,
    format('weather_hourly hoort 5 kolommen te hebben, gevonden: %s. Is er een kolom bijgekomen?', v_cols);

  -- Een uuid is een gebruiker. Een timestamp is een sleutel naar de logs, en
  -- daar is het hele ontwerp op gebouwd: het uur mag, de minuut niet.
  select string_agg(column_name || ' (' || data_type || ')', ', ') into v_risky
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_hourly'
     and (data_type in ('uuid', 'timestamp with time zone', 'timestamp without time zone',
                        'time with time zone', 'time without time zone')
          or column_name in ('id', 'user_id', 'device_id', 'code', 'session_id', 'created_at'));
  assert v_risky is null,
    format('weather_hourly bevat een kolom die naar een persoon of een exact moment kan wijzen: %s', v_risky);
end $$;

\echo ''
\echo '=== 2. Is de tijd grof genoeg? ==='

select conname, pg_get_constraintdef(oid) as definitie
  from pg_constraint
 where conrelid = 'public.weather_hourly'::regclass
   and contype = 'c'
 order by conname;

do $$
declare
  v_type text;
  v_check boolean;
begin
  select data_type into v_type
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_hourly' and column_name = 'hour';
  assert v_type = 'smallint',
    format('weather_hourly.hour hoort smallint te zijn, gevonden: %s. Een fijner type is een fijner tijdstip.', coalesce(v_type, 'de kolom bestaat niet'));

  -- Zonder deze check kan er alsnog iets anders dan een uurblok in, bijvoorbeeld
  -- minuten sinds middernacht. Dat ziet er hetzelfde uit en is het niet.
  select exists (
    select 1 from pg_constraint
     where conrelid = 'public.weather_hourly'::regclass
       and contype = 'c'
       and pg_get_constraintdef(oid) ilike '%hour%23%'
  ) into v_check;
  assert v_check,
    'Er staat geen check op weather_hourly.hour die hem tot 0..23 begrenst. Zonder die grens is niet af te dwingen dat het echt een uurblok is.';
end $$;

\echo 'de tijd in de collectieve tabel is een uurblok, begrensd op 0 tot en met 23'

\echo ''
\echo '=== 3. Wijst er een sleutel naar een inzending of naar auth.users? ==='

select conname, pg_get_constraintdef(oid) as definitie
  from pg_constraint
 where conrelid = 'public.weather_hourly'::regclass
 order by conname;

do $$
declare
  v_fk  text;
  v_pk  text;
  v_key text;
begin
  select string_agg(conname, ', ') into v_fk
    from pg_constraint
   where conrelid = 'public.weather_hourly'::regclass
     and contype = 'f'
     and confrelid <> 'public.weather_type'::regclass;
  assert v_fk is null,
    format('De collectieve tabel verwijst naar iets anders dan weather_type: %s', v_fk);

  -- weather_hourly hoort precies EEN sleutel te hebben: de primary key op
  -- (day, hour, weather, province). Die wijst een totaal aan en geen
  -- inzending, en hij bestaat omdat het optellen een upsert is. Elke andere
  -- sleutel, of een primary key met andere kolommen, kan wel iets
  -- aanwijsbaars introduceren.
  select pg_get_constraintdef(oid) into v_pk
    from pg_constraint
   where conrelid = 'public.weather_hourly'::regclass
     and contype = 'p';
  assert v_pk = 'PRIMARY KEY (day, hour, weather, province)',
    format('weather_hourly hoort als enige sleutel PRIMARY KEY (day, hour, weather, province) te hebben, gevonden: %s', coalesce(v_pk, 'geen primary key'));

  select string_agg(indexrelid::regclass::text, ', ') into v_key
    from pg_index
   where indrelid = 'public.weather_hourly'::regclass
     and indisunique
     and not indisprimary;
  assert v_key is null,
    format('weather_hourly heeft naast de primary key nog een unieke index: %s. Daar is geen reden voor, en elke extra sleutel is verdacht.', v_key);
end $$;

\echo ''
\echo '=== 4. Staat RLS aan, en zijn de collectieve tabellen echt dicht? ==='

select relname as tabel, relrowsecurity as rls_aan,
       (select count(*) from pg_policy where polrelid = c.oid) as aantal_policies
  from pg_class c
 where relnamespace = 'public'::regnamespace
   and relname in ('weather_hourly', 'weather_type', 'profiles', 'usage_daily', 'usage_event')
 order by relname;

do $$
declare
  v_uit text;
  v_pol text;
begin
  select string_agg(relname, ', ') into v_uit
    from pg_class
   where relnamespace = 'public'::regnamespace
     and relkind = 'r'
     and not relrowsecurity;
  assert v_uit is null,
    format('Deze tabellen hebben geen RLS: %s. Een tabel zonder RLS is een bug.', v_uit);

  -- weather_hourly hoort NUL policies te hebben. RLS zonder policy weigert
  -- alles, en dat is hier precies de bedoeling.
  select string_agg(c.relname || ' (' || (select count(*) from pg_policy where polrelid = c.oid) || ')', ', ')
    into v_pol
    from pg_class c
   where c.relnamespace = 'public'::regnamespace
     and c.relname in ('weather_hourly', 'usage_daily', 'usage_event')
     and exists (select 1 from pg_policy where polrelid = c.oid);
  assert v_pol is null,
    format('Een collectieve tabel heeft policies: %s. Er hoort er geen een te zijn, alle toegang loopt via de functies.', v_pol);
end $$;

\echo ''
\echo '=== 5. Welke rechten hebben anon en authenticated? ==='

select grantee, table_name, string_agg(privilege_type, ', ' order by privilege_type) as rechten
  from information_schema.role_table_grants
 where table_schema = 'public'
   and grantee in ('anon', 'authenticated')
 group by grantee, table_name
 order by table_name, grantee;

do $$
declare
  v_grants text;
begin
  select string_agg(grantee || ' heeft ' || privilege_type || ' op ' || table_name, ', ') into v_grants
    from information_schema.role_table_grants
   where table_schema = 'public'
     and table_name in ('weather_hourly', 'usage_daily', 'usage_event')
     and grantee in ('anon', 'authenticated');
  assert v_grants is null,
    format('anon of authenticated heeft rechten op een collectieve tabel: %s. Die hoort onzichtbaar te zijn.', v_grants);

  -- profiles mag gelezen worden, maar nooit geschreven: anders zet iemand zijn
  -- eigen last_checkin_on of last_checkin_part terug en omzeilt hij het slot.
  select string_agg(grantee || ': ' || privilege_type, ', ') into v_grants
    from information_schema.role_table_grants
   where table_schema = 'public'
     and table_name = 'profiles'
     and grantee in ('anon', 'authenticated')
     and privilege_type <> 'SELECT';
  assert v_grants is null,
    format('Er is meer dan leesrecht op profiles: %s', v_grants);
end $$;

\echo ''
\echo '=== 5b. Staat er op het profiel echt geen weerbeeld? ==='

select column_name, data_type
  from information_schema.columns
 where table_schema = 'public' and table_name = 'profiles'
 order by ordinal_position;

do $$
declare
  v_kolommen text;
  v_weer     text;
  v_check    boolean;
begin
  -- Het slot per dagdeel (sinds 15 september 2026) is een datum en een
  -- dagdeel, meer niet. Het slot van de gebruikstotalen (sinds 18 september
  -- 2026) is alleen een datum. Elke kolom die een slot koppelt aan WAT iemand
  -- invulde of deed, breekt de scheiding tussen de stromen.
  select string_agg(column_name, ', ' order by ordinal_position) into v_kolommen
    from information_schema.columns
   where table_schema = 'public' and table_name = 'profiles';
  assert v_kolommen = 'id, last_active_at, last_checkin_on, last_checkin_part, last_usage_on',
    format('profiles hoort precies id, last_active_at, last_checkin_on, last_checkin_part en last_usage_on te hebben, gevonden: %s', v_kolommen);

  select string_agg(column_name, ', ') into v_weer
    from information_schema.columns
   where table_schema = 'public' and table_name = 'profiles'
     and (column_name ilike '%weather%' or column_name ilike '%weer%' or column_name ilike '%mood%'
          or column_name ilike '%event%' or column_name ilike '%item%');
  assert v_weer is null,
    format('profiles heeft een kolom die naar een weerbeeld wijst: %s', v_weer);

  -- Het dagdeel is 1 of 2 en niets fijners: geen uur, geen tijdstip.
  select exists (
    select 1 from pg_constraint
     where conrelid = 'public.profiles'::regclass
       and contype = 'c'
       and pg_get_constraintdef(oid) ilike '%last_checkin_part%'
  ) into v_check;
  assert v_check,
    'Er staat geen check op profiles.last_checkin_part die hem tot 1 of 2 begrenst.';
end $$;

\echo 'profiles kent alleen een datum en een dagdeel van de laatste bijdrage en de datum van de laatste batch, geen weerbeeld en geen gebeurtenis'

\echo ''
\echo '=== 6. Staat realtime uit op de collectieve tabel? ==='

do $$
declare
  v_aan text;
begin
  select string_agg(tablename, ', ') into v_aan
    from pg_publication_tables
   where pubname = 'supabase_realtime'
     and schemaname = 'public'
     and tablename in ('weather_hourly', 'usage_daily');
  assert v_aan is null,
    format('Deze tabel staat in de publicatie supabase_realtime: %s. Realtime zendt elke ophoging live uit met het moment erbij, en elke ophoging is een inzending.', v_aan);
end $$;

\echo 'realtime staat uit op weather_hourly en usage_daily'

\echo ''
\echo '=== 7. Hebben de security definer-functies een vast search_path? ==='

select p.proname as functie,
       p.prosecdef as security_definer,
       coalesce(array_to_string(p.proconfig, ', '), 'GEEN') as config
  from pg_proc p
 where p.pronamespace = 'public'::regnamespace
 order by p.proname;

do $$
declare
  v_los text;
begin
  -- Let op de schrijfwijze: Postgres slaat `set search_path = ''` op als
  -- search_path="" met aanhalingstekens, niet als search_path=. Vergelijken met
  -- die kale string gaf hier een test die faalde terwijl de functies klopten.
  select string_agg(p.proname, ', ') into v_los
    from pg_proc p
   where p.pronamespace = 'public'::regnamespace
     and p.prosecdef
     and not exists (
       select 1
         from unnest(coalesce(p.proconfig, '{}'::text[])) as cfg
        where cfg ~ '^search_path=("")?$'
     );
  assert v_los is null,
    format('Deze security definer-functies hebben geen leeg search_path: %s. Daarmee zijn ze te kapen via de zoekvolgorde.', v_los);
end $$;

\echo ''
\echo '=== 8. Tellen de leesfuncties alleen afgesloten uurblokken? ==='

do $$
declare
  v_def text;
begin
  select pg_get_functiondef('public.weather_today()'::regprocedure) into v_def;
  -- Het lopende uurblok mag niet meetellen: wie het dashboard ververst
  -- terwijl een huisgenoot incheckt, ziet anders de percentages verschuiven.
  assert v_def ~ 'h\.hour\s*<\s*nu\.uur',
    'weather_today() telt het lopende uurblok mee. Dan is een inzending live te zien binnenkomen.';

  -- Hetzelfde voor de kaart per provincie, waar de totalen kleiner zijn.
  select pg_get_functiondef('public.weather_today_by_province()'::regprocedure) into v_def;
  assert v_def ~ 'h\.hour\s*<\s*nu\.uur',
    'weather_today_by_province() telt het lopende uurblok mee. Dan is een inzending live te zien binnenkomen.';
end $$;

\echo 'weather_today() en weather_today_by_province() tellen alleen afgesloten uurblokken'

\echo ''
\echo '=== 9. Wie mag welke functie aanroepen? ==='

select r.routine_name as functie, r.grantee, r.privilege_type
  from information_schema.routine_privileges r
 where r.routine_schema = 'public'
   and r.grantee in ('anon', 'authenticated', 'PUBLIC')
 order by r.routine_name, r.grantee;

do $$
declare
  v_fout text;
begin
  -- anon mag helemaal niets aanroepen.
  select string_agg(routine_name, ', ') into v_fout
    from information_schema.routine_privileges
   where routine_schema = 'public' and grantee in ('anon', 'PUBLIC');
  assert v_fout is null,
    format('anon of PUBLIC mag functies aanroepen: %s', v_fout);

  -- De opruiming is niet voor de app.
  select string_agg(routine_name, ', ') into v_fout
    from information_schema.routine_privileges
   where routine_schema = 'public' and grantee = 'authenticated'
     and routine_name in ('purge_inactive_accounts', 'handle_new_user', 'usage_scrub');
  assert v_fout is null,
    format('authenticated mag beheerfuncties aanroepen: %s', v_fout);

  -- weather_type is dicht voor anon.
  select string_agg(privilege_type, ', ') into v_fout
    from information_schema.role_table_grants
   where table_schema = 'public' and table_name = 'weather_type' and grantee = 'anon';
  assert v_fout is null,
    format('anon heeft rechten op weather_type: %s', v_fout);
end $$;

\echo 'anon kan niets aanroepen, de opruiming is niet voor de app'

\echo ''
\echo '=== 10. Staat er in de noodrem niets over een persoon? ==='

-- app_status (18 september 2026) is de minimale versie van de app en een
-- onderhoudsbericht. Er hoort niets in te staan dat naar een persoon, een
-- toestel of een check-in wijst, en de leesfunctie hoort geen argumenten te
-- hebben: de app stuurt niets over zichzelf mee.
select column_name, data_type
  from information_schema.columns
 where table_schema = 'public' and table_name = 'app_status'
 order by ordinal_position;

do $$
declare
  v_cols  text;
  v_args  integer;
  v_rijen integer;
begin
  select string_agg(column_name, ', ' order by column_name) into v_cols
    from information_schema.columns
   where table_schema = 'public' and table_name = 'app_status';
  assert v_cols = 'id, maintenance_nl, min_version, updated_at',
    format('app_status hoort alleen id, maintenance_nl, min_version en updated_at te hebben, gevonden: %s', v_cols);

  select p.pronargs into v_args
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
   where n.nspname = 'public' and p.proname = 'get_app_status';
  assert v_args = 0,
    format('get_app_status() hoort geen argumenten te hebben, gevonden: %s', v_args);

  select count(*) into v_rijen from public.app_status;
  assert v_rijen = 1,
    format('app_status hoort precies een rij te hebben, gevonden: %s', v_rijen);
end $$;

\echo 'de noodrem kent alleen een versie en een bericht, en vraagt niets van de app'

\echo ''
\echo '=== 11. Kunnen de gebruikstotalen naar een persoon of een moment wijzen? ==='

select column_name, data_type, is_nullable
  from information_schema.columns
 where table_schema = 'public' and table_name = 'usage_daily'
 order by ordinal_position;

do $$
declare
  v_kolommen text;
  v_tijd     text;
  v_pk       text;
  v_fk       text;
  v_def      text;
begin
  -- Sinds 18 september 2026: totalen per (dag, event, item). Een kolom erbij
  -- is een tweede dimensie, en een tweede dimensie maakt de cellen kleiner en
  -- kan alsnog iets over een persoon of over het weer zeggen.
  select string_agg(column_name, ', ' order by ordinal_position) into v_kolommen
    from information_schema.columns
   where table_schema = 'public' and table_name = 'usage_daily';
  assert v_kolommen = 'day, event, item, total',
    format('usage_daily hoort precies day, event, item en total te hebben, gevonden: %s', v_kolommen);

  -- Geen tijd fijner dan een dag, en geen uuid die naar iemand kan wijzen.
  select string_agg(column_name || ' (' || data_type || ')', ', ') into v_tijd
    from information_schema.columns
   where table_schema = 'public' and table_name = 'usage_daily'
     and data_type not in ('date', 'text', 'integer');
  assert v_tijd is null,
    format('usage_daily heeft een kolom die fijner is dan een dag of naar iemand kan wijzen: %s', v_tijd);

  select pg_get_constraintdef(oid) into v_pk
    from pg_constraint
   where conrelid = 'public.usage_daily'::regclass and contype = 'p';
  assert v_pk = 'PRIMARY KEY (day, event, item)',
    format('usage_daily hoort als enige sleutel PRIMARY KEY (day, event, item) te hebben, gevonden: %s', coalesce(v_pk, 'geen primary key'));

  -- De enige verwijzing is die naar de vaste lijst events.
  select string_agg(pg_get_constraintdef(oid), '; ') into v_fk
    from pg_constraint
   where conrelid = 'public.usage_daily'::regclass and contype = 'f'
     and confrelid <> 'public.usage_event'::regclass;
  assert v_fk is null,
    format('usage_daily verwijst naar iets anders dan usage_event: %s', v_fk);

  -- Het weerbeeld mag nooit een event of een toegestaan item zijn: dan telt
  -- het weer mee van wie daar geen toestemming voor gaf.
  select string_agg(code, ', ') into v_def
    from public.usage_event
   where items && array['zonnig', 'wolken', 'mist', 'wind', 'regen'];
  assert v_def is null,
    format('Een event laat een weerbeeld als item toe: %s', v_def);

  -- log_usage() hoort eerst het slot te zetten en alleen afgesloten dagen toe te laten.
  select pg_get_functiondef('public.log_usage(jsonb)'::regprocedure) into v_def;
  assert position('last_usage_on' in v_def) > 0 and position('last_usage_on' in v_def) < position('insert into public.usage_daily' in v_def),
    'log_usage() zet het slot niet voor het optellen.';
  assert v_def ilike '%generate_series(1, 7)%',
    'log_usage() laat meer toe dan de zeven afgesloten dagen voor vandaag.';
end $$;

\echo 'usage_daily kent alleen dag, event, item en totaal; het weerbeeld kan er niet in'

\echo ''
\echo '======================================================================'
\echo ' GESLAAGD. De collectieve tabel heeft geen kolom die naar een persoon'
\echo ' kan wijzen, geen rij per inzending, geen tijd fijner dan een uur, en'
\echo ' als enige sleutel de bucket (dag, uurblok, weerbeeld, provincie). Hij'
\echo ' is voor de app onzichtbaar, staat niet op realtime, en alle toegang'
\echo ' loopt via functies met een vast search_path. Het profiel kent alleen'
\echo ' de datum en het dagdeel van de laatste bijdrage, geen weerbeeld.'
\echo ' De gebruikstotalen kennen alleen dag, event, item en totaal: geen'
\echo ' gebruiker, geen tijd fijner dan een dag, en het weerbeeld kan er'
\echo ' niet in. Het profiel kent daarvan alleen de datum van de laatste batch.'
\echo ''
\echo ' De app ziet alleen afgesloten uurblokken, dus een inzending is via'
\echo ' het weerbericht niet live te zien binnenkomen.'
\echo ''
\echo ' Wat dit NIET bewijst: wie met DASHBOARDTOEGANG live meekijkt terwijl'
\echo ' een totaal ophoogt, ziet welk totaal net veranderde, zolang de'
\echo ' platformlogs bestaan. Dat venster sluit vanzelf; de maatregel is'
\echo ' beperkte dashboardtoegang.'
\echo ' Zie de kop van de migratie weather_hourly_totals en de DPIA.'
\echo '======================================================================'
\echo ''
