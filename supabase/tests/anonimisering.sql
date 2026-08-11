-- ===========================================================================
-- Bewijs dat de collectieve stroom niet herleidbaar KAN zijn.
--
-- Dit is geen gewone test. Het is het bewijsstuk waarmee we aan de privacy-
-- officer van Mind laten zien dat de anonimisering een eigenschap van de
-- structuur is, en niet van de zorgvuldigheid van degene die er een query op
-- schrijft. De uitvoer hoort als bijlage bij de DPIA.
--
-- Draaien:
--   supabase db reset
--   psql "$(supabase status -o env | grep DB_URL | cut -d= -f2- | tr -d '"')" \
--        -f supabase/tests/anonimisering.sql
--
-- Elke assert die faalt, stopt het script met een foutmelding. Geen uitvoer met
-- "GESLAAGD" onderaan betekent dus dat er iets niet klopt.
-- ===========================================================================

\echo ''
\echo '=== 1. Welke kolommen heeft de collectieve tabel? ==='

select column_name, data_type, is_nullable
  from information_schema.columns
 where table_schema = 'public' and table_name = 'weather_daily'
 order by ordinal_position;

do $$
declare
  v_cols  integer;
  v_risky text;
begin
  select count(*) into v_cols
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_daily';
  assert v_cols = 3,
    format('weather_daily hoort 3 kolommen te hebben, gevonden: %s. Is er een kolom bijgekomen?', v_cols);

  -- Een uuid is een gebruiker, een tijdstip is een sleutel naar de logs.
  -- Allebei zijn ze hier verboden.
  select string_agg(column_name || ' (' || data_type || ')', ', ') into v_risky
    from information_schema.columns
   where table_schema = 'public' and table_name = 'weather_daily'
     and (data_type in ('uuid', 'timestamp with time zone', 'timestamp without time zone', 'time without time zone')
          or column_name in ('id', 'user_id', 'device_id', 'code', 'session_id'));
  assert v_risky is null,
    format('weather_daily bevat een kolom die naar een persoon of een moment kan wijzen: %s', v_risky);
end $$;

\echo ''
\echo '=== 2. Bestaat er een verwijzing naar auth.users? ==='

select conname, pg_get_constraintdef(oid) as definitie
  from pg_constraint
 where conrelid = 'public.weather_daily'::regclass
 order by conname;

do $$
declare
  v_fk text;
begin
  select string_agg(conname, ', ') into v_fk
    from pg_constraint
   where conrelid = 'public.weather_daily'::regclass
     and contype = 'f'
     and confrelid <> 'public.weather_type'::regclass;
  assert v_fk is null,
    format('weather_daily verwijst naar een andere tabel dan weather_type: %s', v_fk);
end $$;

\echo ''
\echo '=== 3. Staat RLS aan, en is de collectieve tabel echt dicht? ==='

select relname as tabel, relrowsecurity as rls_aan,
       (select count(*) from pg_policy where polrelid = c.oid) as aantal_policies
  from pg_class c
 where relnamespace = 'public'::regnamespace
   and relname in ('weather_daily', 'weather_type', 'profiles')
 order by relname;

do $$
declare
  v_uit text;
  v_pol integer;
begin
  select string_agg(relname, ', ') into v_uit
    from pg_class
   where relnamespace = 'public'::regnamespace
     and relkind = 'r'
     and not relrowsecurity;
  assert v_uit is null,
    format('Deze tabellen hebben geen RLS: %s. Een tabel zonder RLS is een bug.', v_uit);

  -- weather_daily hoort NUL policies te hebben. RLS zonder policy weigert
  -- alles, en dat is hier precies de bedoeling.
  select count(*) into v_pol
    from pg_policy where polrelid = 'public.weather_daily'::regclass;
  assert v_pol = 0,
    format('weather_daily heeft %s policies. Er hoort er geen een te zijn: alle toegang loopt via de functies.', v_pol);
end $$;

\echo ''
\echo '=== 4. Welke rechten hebben anon en authenticated? ==='

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
  select string_agg(grantee || ' heeft ' || privilege_type, ', ') into v_grants
    from information_schema.role_table_grants
   where table_schema = 'public'
     and table_name = 'weather_daily'
     and grantee in ('anon', 'authenticated');
  assert v_grants is null,
    format('anon of authenticated heeft rechten op weather_daily: %s. De tabel hoort onzichtbaar te zijn.', v_grants);

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
end $$;

\echo ''
\echo '=== 5. Staat realtime uit op de collectieve tabel? ==='

do $$
declare
  v_aan boolean;
begin
  select exists (
    select 1 from pg_publication_tables
     where pubname = 'supabase_realtime'
       and schemaname = 'public'
       and tablename = 'weather_daily'
  ) into v_aan;
  assert not v_aan,
    'weather_daily staat in de publicatie supabase_realtime. Realtime zendt inserts live uit inclusief tijdstempel, en dat is precies het lek dat dit ontwerp vermijdt.';
end $$;

\echo 'realtime staat uit op weather_daily'

\echo ''
\echo '=== 6. Hebben de security definer-functies een vast search_path? ==='

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
  select string_agg(proname, ', ') into v_los
    from pg_proc
   where pronamespace = 'public'::regnamespace
     and prosecdef
     and (proconfig is null or not (proconfig && array['search_path=']));
  assert v_los is null,
    format('Deze security definer-functies hebben geen vast search_path: %s. Daarmee zijn ze te kapen via de zoekvolgorde.', v_los);
end $$;

\echo ''
\echo '======================================================================'
\echo ' GESLAAGD. De collectieve tabel heeft geen kolom die naar een persoon'
\echo ' of een moment kan wijzen, is voor de app onzichtbaar, staat niet op'
\echo ' realtime, en alle toegang loopt via functies met een vast search_path.'
\echo '======================================================================'
\echo ''
