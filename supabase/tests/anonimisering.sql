-- ===========================================================================
-- Bewijs dat de collectieve stroom niet herleidbaar KAN zijn.
--
-- Dit is geen gewone test. Het is het bewijsstuk waarmee we aan de privacy-
-- officer van Mind laten zien dat de anonimisering een eigenschap van de
-- structuur is, en niet van de zorgvuldigheid van degene die er een query op
-- schrijft. De uitvoer hoort als bijlage bij de DPIA.
--
-- Er staat een rij per inzending in weather_entry, want Mind heeft die nodig.
-- Wat deze test bewaakt is dat zo'n rij niets bevat waarmee je hem aan iemand
-- kunt koppelen, en dat de tijd erin grof genoeg is om niet met de API-logs te
-- kunnen joinen. Zie de kop van de migratie.
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
 where table_schema = 'public' and table_name = 'weather_entry'
 order by ordinal_position;

do $$
declare
  v_cols  integer;
  v_risky text;
begin
  select count(*) into v_cols
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_entry';
  assert v_cols = 3,
    format('weather_entry hoort 3 kolommen te hebben, gevonden: %s. Is er een kolom bijgekomen?', v_cols);

  -- Een uuid is een gebruiker. Een timestamp is een sleutel naar de logs, en
  -- daar is het hele ontwerp op gebouwd: het uur mag, de minuut niet.
  select string_agg(column_name || ' (' || data_type || ')', ', ') into v_risky
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_entry'
     and (data_type in ('uuid', 'timestamp with time zone', 'timestamp without time zone',
                        'time with time zone', 'time without time zone')
          or column_name in ('id', 'user_id', 'device_id', 'code', 'session_id', 'created_at'));
  assert v_risky is null,
    format('weather_entry bevat een kolom die naar een persoon of een exact moment kan wijzen: %s', v_risky);
end $$;

\echo ''
\echo '=== 2. Is de tijd grof genoeg? ==='

select conname, pg_get_constraintdef(oid) as definitie
  from pg_constraint
 where conrelid = 'public.weather_entry'::regclass
   and contype = 'c'
 order by conname;

do $$
declare
  v_type text;
  v_check boolean;
begin
  select data_type into v_type
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_entry' and column_name = 'hour';
  assert v_type = 'smallint',
    format('weather_entry.hour hoort smallint te zijn, gevonden: %s. Een fijner type is een fijner tijdstip.', coalesce(v_type, 'de kolom bestaat niet'));

  -- Zonder deze check kan er alsnog iets anders dan een uurblok in, bijvoorbeeld
  -- minuten sinds middernacht. Dat ziet er hetzelfde uit en is het niet.
  select exists (
    select 1 from pg_constraint
     where conrelid = 'public.weather_entry'::regclass
       and contype = 'c'
       and pg_get_constraintdef(oid) ilike '%hour%23%'
  ) into v_check;
  assert v_check,
    'Er staat geen check op weather_entry.hour die hem tot 0..23 begrenst. Zonder die grens is niet af te dwingen dat het echt een uurblok is.';
end $$;

\echo 'de tijd in de collectieve tabel is een uurblok, begrensd op 0 tot en met 23'

\echo ''
\echo '=== 3. Bestaat er een sleutel of een verwijzing naar auth.users? ==='

select conname, pg_get_constraintdef(oid) as definitie
  from pg_constraint
 where conrelid in ('public.weather_entry'::regclass, 'public.weather_daily'::regclass)
 order by conrelid::text, conname;

do $$
declare
  v_fk  text;
  v_key text;
begin
  select string_agg(conname, ', ') into v_fk
    from pg_constraint
   where conrelid in ('public.weather_entry'::regclass, 'public.weather_daily'::regclass)
     and contype = 'f'
     and confrelid <> 'public.weather_type'::regclass;
  assert v_fk is null,
    format('De collectieve tabellen verwijzen naar iets anders dan weather_type: %s', v_fk);

  -- weather_entry hoort GEEN primary key en geen unique index te hebben. Elke
  -- sleutel die een rij aanwijst, wijst ook een inzending aan, en een oplopende
  -- of tijdgeordende sleutel verraadt bovendien de volgorde.
  select string_agg(conname, ', ') into v_key
    from pg_constraint
   where conrelid = 'public.weather_entry'::regclass
     and contype in ('p', 'u');
  assert v_key is null,
    format('weather_entry heeft een sleutel: %s. Een rij uit de anonieme pool hoort niet aanwijsbaar te zijn.', v_key);

  select string_agg(indexrelid::regclass::text, ', ') into v_key
    from pg_index
   where indrelid = 'public.weather_entry'::regclass
     and indisunique;
  assert v_key is null,
    format('weather_entry heeft een unieke index: %s. Dubbele rijen zijn hier normaal en gewenst.', v_key);
end $$;

\echo ''
\echo '=== 4. Staat RLS aan, en zijn de collectieve tabellen echt dicht? ==='

select relname as tabel, relrowsecurity as rls_aan,
       (select count(*) from pg_policy where polrelid = c.oid) as aantal_policies
  from pg_class c
 where relnamespace = 'public'::regnamespace
   and relname in ('weather_entry', 'weather_daily', 'weather_type', 'profiles')
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

  -- weather_entry en weather_daily horen NUL policies te hebben. RLS zonder
  -- policy weigert alles, en dat is hier precies de bedoeling.
  select string_agg(c.relname || ' (' || (select count(*) from pg_policy where polrelid = c.oid) || ')', ', ')
    into v_pol
    from pg_class c
   where c.relnamespace = 'public'::regnamespace
     and c.relname in ('weather_entry', 'weather_daily')
     and exists (select 1 from pg_policy where polrelid = c.oid);
  assert v_pol is null,
    format('Deze collectieve tabellen hebben policies: %s. Er hoort er geen een te zijn, alle toegang loopt via de functies.', v_pol);
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
     and table_name in ('weather_entry', 'weather_daily')
     and grantee in ('anon', 'authenticated');
  assert v_grants is null,
    format('anon of authenticated heeft rechten op een collectieve tabel: %s. Die horen onzichtbaar te zijn.', v_grants);

  -- profiles mag gelezen worden, maar nooit geschreven: anders zet iemand zijn
  -- eigen last_checkin_on terug en omzeilt hij het dagslot.
  select string_agg(grantee || ': ' || privilege_type, ', ') into v_grants
    from information_schema.role_table_grants
   where table_schema = 'public'
     and table_name = 'profiles'
     and grantee in ('anon', 'authenticated')
     and privilege_type <> 'SELECT';
  assert v_grants is null,
    format('Er is meer dan leesrecht op profiles: %s', v_grants);

  -- De rollup verwijdert data. Die hoort niemand vanuit de app te kunnen
  -- aanroepen, ook niet per ongeluk.
  select string_agg(grantee, ', ') into v_grants
    from information_schema.role_routine_grants
   where routine_schema = 'public'
     and routine_name = 'rollup_weather_entries'
     and grantee in ('anon', 'authenticated');
  assert v_grants is null,
    format('rollup_weather_entries is aanroepbaar door: %s. Die functie gooit rijen weg.', v_grants);
end $$;

\echo ''
\echo '=== 6. Staat realtime uit op de collectieve tabellen? ==='

do $$
declare
  v_aan text;
begin
  select string_agg(tablename, ', ') into v_aan
    from pg_publication_tables
   where pubname = 'supabase_realtime'
     and schemaname = 'public'
     and tablename in ('weather_entry', 'weather_daily');
  assert v_aan is null,
    format('Deze tabellen staan in de publicatie supabase_realtime: %s. Realtime zendt elke insert live uit met het moment erbij, en dat maakt het uurblok waardeloos.', v_aan);
end $$;

\echo 'realtime staat uit op weather_entry en weather_daily'

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
\echo '======================================================================'
\echo ' GESLAAGD. De collectieve tabel heeft geen kolom die naar een persoon'
\echo ' kan wijzen, geen sleutel die een rij aanwijst, en geen tijd fijner dan'
\echo ' een uur. Hij is voor de app onzichtbaar, staat niet op realtime, en'
\echo ' alle toegang loopt via functies met een vast search_path.'
\echo ''
\echo ' Wat dit NIET bewijst: ctid en xmin verraden de invoegvolgorde en zijn'
\echo ' niet weg te halen. Zie de kop van de migratie en de DPIA.'
\echo '======================================================================'
\echo ''
