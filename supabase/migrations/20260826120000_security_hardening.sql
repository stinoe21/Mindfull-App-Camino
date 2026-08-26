-- ===========================================================================
-- Beveiliging aangescherpt na de externe review van 25 augustus 2026.
--
-- Vier dingen, elk met zijn eigen kop hieronder:
--
--   1. weather_today() telt alleen AFGESLOTEN uurblokken mee. Wie het
--      dashboard ververst op het moment dat een huisgenoot incheckt, zag tot
--      nu toe de percentages verschuiven. Dat is een koppeling tussen een
--      persoon en een weerbeeld, zonder enige databasetoegang. Een blok dat
--      pas na afloop meetelt, telt in een keer honderden inzendingen op en
--      verraadt er geen enkele.
--   2. weather_type is alleen nog leesbaar voor ingelogde gebruikers. De app
--      leest de tabel niet voor het inloggen, en weather_today() geeft de
--      labels al mee. Een open deur die niemand gebruikt, gaat dicht.
--   3. delete_own_account(): de gebruiker verwijdert zijn eigen auth-account
--      vanuit de app. Tot nu toe wiste scherm 19 alleen het toestel en zei het
--      daar eerlijk bij. App Store-richtlijn 5.1.1(v) eist het echte werk.
--   4. purge_inactive_accounts(): de bewaartermijn van twee jaar inactiviteit
--      uit docs/datamodel.md bestaat vanaf nu als functie. Hij is BEWUST NIET
--      ingepland: pg_cron aanzetten is een eigen besluit. Zonder deze functie
--      stond er een belofte in de privacyverklaring die niets uitvoerde.
--
-- Wat hier NIET verandert: de tabel weather_hourly, het dagslot, de drempel
-- van 10. Zie docs/datamodel.md en docs/limieten-en-misbruik.md sectie 5.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. Lezen: alleen afgesloten uurblokken
--
-- Het lopende uurblok doet niet mee. Gevolg voor de app: voor 01:00 is er
-- nooit een weerbericht, en overdag loopt het beeld tot een uur achter. Dat is
-- de prijs, en hij is bewust: een totaal dat je live ziet ophogen is een
-- inzending die je live ziet binnenkomen. De drempel van 10 blijft, en geldt
-- over de som van de afgesloten blokken.
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
  with nu as (
    select (now() at time zone 'Europe/Amsterdam')::date                          as dag,
           extract(hour from (now() at time zone 'Europe/Amsterdam'))::smallint    as uur
  ),
  today as (
    select h.weather,
           t.label,
           t.sort_order,
           sum(h.total)::integer as n
      from public.weather_hourly h
      join public.weather_type   t on t.code = h.weather
      join nu on true
     where h.day = nu.dag
       -- Alleen blokken die voorbij zijn. Het lopende blok verandert nog, en
       -- elke verandering die je ziet is een inzending die je ziet.
       and h.hour < nu.uur
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
  'Het landelijke weerbericht van vandaag als percentages, over de afgesloten uurblokken. Het lopende uurblok telt niet mee, zodat niemand een inzending live kan zien binnenkomen. Geeft nul rijen zolang het totaal onder de drempel ligt.';


-- ---------------------------------------------------------------------------
-- 2. weather_type: dicht voor anon
-- ---------------------------------------------------------------------------

drop policy "weertypen zijn openbaar" on public.weather_type;
revoke select on public.weather_type from anon;

create policy "weertypen voor ingelogde gebruikers"
  on public.weather_type
  for select
  to authenticated
  using (true);


-- ---------------------------------------------------------------------------
-- 3. Eigen account verwijderen
--
-- De rij in auth.users gaat weg, en daarmee via de cascades het profiel, de
-- sessies en de refresh tokens. De bijdragen aan weather_hourly blijven: daar
-- staat niets in dat naar deze persoon wijst, dus er valt niets te verwijderen.
-- Dat staat zo in de consent-tekst en op scherm 19.
-- ---------------------------------------------------------------------------

create function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'niet ingelogd' using errcode = '42501';
  end if;

  delete from auth.users where id = v_uid;
end;
$$;

comment on function public.delete_own_account() is
  'Verwijdert het account van de aanroeper: de rij in auth.users, en via de cascade het profiel en de sessies. Anonieme bijdragen aan het weerbericht blijven, want die zijn niet te vinden.';

revoke execute on function public.delete_own_account() from public, anon;
grant  execute on function public.delete_own_account() to authenticated;


-- ---------------------------------------------------------------------------
-- 4. Opruimen na twee jaar inactiviteit
--
-- "Inactief" is hier: last_active_at ouder dan p_days. Dat veld wordt op dit
-- moment alleen bij een check-in bijgewerkt, dus wie de app opent maar nooit
-- incheckt, telt als inactief. Dat is de strengste lezing en de veiligste.
--
-- Niemand vanuit de app mag dit aanroepen. De functie is er voor een
-- geplande taak of voor een beheerder in het dashboard, en het inplannen is
-- een eigen besluit (pg_cron), geen bijvangst van deze migratie.
-- ---------------------------------------------------------------------------

create function public.purge_inactive_accounts(p_days integer default 730)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_deleted integer;
begin
  if p_days < 365 then
    raise exception 'bewaartermijn korter dan een jaar is niet de afspraak' using errcode = 'P0001';
  end if;

  delete from auth.users u
   using public.profiles p
   where p.id = u.id
     and p.last_active_at < now() - make_interval(days => p_days);

  get diagnostics v_deleted = row_count;
  return v_deleted;
end;
$$;

comment on function public.purge_inactive_accounts(integer) is
  'Verwijdert accounts waarvan last_active_at ouder is dan p_days (standaard 730, de twee jaar uit docs/datamodel.md). Niet aanroepbaar vanuit de app. Niet ingepland: dat is een eigen besluit.';

revoke execute on function public.purge_inactive_accounts(integer) from public, anon, authenticated;
