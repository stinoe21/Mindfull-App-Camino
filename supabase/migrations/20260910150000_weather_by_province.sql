-- ===========================================================================
-- Het mentale weer per provincie.
--
-- Uit de feedbacksessie met MIND (verwerkt 10 september 2026): de weerkaart
-- per provincie blijft onderdeel van het concept, en MIND heeft gezegd dat
-- de provincie bij de check-in mag worden meegeteld. Op Home komt een kaart
-- van Nederland met per provincie het weer dat daar het vaakst voorkomt.
--
-- Wat verandert:
--   1. weather_hourly krijgt een kolom province, onderdeel van de sleutel.
--      'onbekend' voor wie geen provincie koos. Het blijft een totaal: geen
--      rij per inzending, geen tijd fijner dan een uur, geen gebruiker.
--   2. submit_weather() krijgt een tweede argument p_province, met een
--      whitelist. Een onbekende waarde telt als 'onbekend' en breekt niets.
--   3. weather_today() blijft precies wat het was: landelijk, over alle
--      provincies opgeteld.
--   4. weather_today_by_province() is nieuw: per provincie het weerbeeld dat
--      het vaakst voorkomt, alleen voor provincies die de drempel halen.
--
-- Wat NIET verandert: het dagslot, de drempel van 10 en het weglaten van het
-- lopende uurblok. De drempel geldt per provincie apart, want een provincie
-- met drie inzendingen is weer herleidbaar. De provincie is een zelf gekozen
-- instelling en geen locatiebepaling: de app vraagt geen locatie op.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. De kolom
-- ---------------------------------------------------------------------------

alter table public.weather_hourly
  add column province text not null default 'onbekend';

alter table public.weather_hourly
  add constraint weather_hourly_province_check check (province in (
    'onbekend',
    'groningen', 'friesland', 'drenthe', 'overijssel', 'flevoland', 'gelderland',
    'utrecht', 'noord-holland', 'zuid-holland', 'zeeland', 'noord-brabant', 'limburg'
  ));

alter table public.weather_hourly drop constraint weather_hourly_pkey;
alter table public.weather_hourly add primary key (day, hour, weather, province);

comment on column public.weather_hourly.province is
  'De provincie die de gebruiker zelf koos in Instellingen, of onbekend. Geen locatiebepaling. Onderdeel van het totaal, nooit van een inzending.';


-- ---------------------------------------------------------------------------
-- 2. Insturen, nu met provincie
-- ---------------------------------------------------------------------------

drop function public.submit_weather(text);

create or replace function public.submit_weather(p_weather text, p_province text default 'onbekend')
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_today    date := (now() at time zone 'Europe/Amsterdam')::date;
  v_uid      uuid := auth.uid();
  v_province text := case
    when p_province in (
      'groningen', 'friesland', 'drenthe', 'overijssel', 'flevoland', 'gelderland',
      'utrecht', 'noord-holland', 'zuid-holland', 'zeeland', 'noord-brabant', 'limburg'
    ) then p_province
    else 'onbekend'
  end;
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

  -- De anonieme bijdrage: optellen bij het totaal van dit uurblok en deze
  -- provincie. Geen id, geen hash, geen tijdstip.
  insert into public.weather_hourly as h (weather, province, total)
  values (p_weather, v_province, 1)
  on conflict (day, hour, weather, province)
  do update set total = h.total + 1;
end;
$$;

comment on function public.submit_weather(text, text) is
  'Stuurt een weerbeeld in voor vandaag, met de zelf gekozen provincie of onbekend. Zet eerst het dagslot op het profiel, telt daarna anoniem op bij het uurtotaal. Nooit andersom.';

revoke execute on function public.submit_weather(text, text) from public, anon;
grant  execute on function public.submit_weather(text, text) to authenticated;


-- ---------------------------------------------------------------------------
-- 3. Lezen per provincie
--
-- Per provincie alleen het weerbeeld dat het vaakst voorkomt, met zijn
-- aandeel en het totaal van die provincie. Een provincie onder de drempel
-- komt niet terug: op de kaart blijft hij dan leeg. 'onbekend' doet niet mee
-- op de kaart, maar telt wel mee in weather_today().
-- ---------------------------------------------------------------------------

create or replace function public.weather_today_by_province()
returns table (
  province text,
  weather  text,
  label    text,
  share    integer,
  total    integer
)
language sql
security definer
set search_path = ''
stable
as $$
  with nu as (
    select (now() at time zone 'Europe/Amsterdam')::date                        as dag,
           extract(hour from (now() at time zone 'Europe/Amsterdam'))::smallint  as uur
  ),
  per_provincie as (
    select h.province,
           h.weather,
           t.label,
           sum(h.total)::integer as n
      from public.weather_hourly h
      join public.weather_type   t on t.code = h.weather
      join nu on true
     where h.day = nu.dag
       and h.hour < nu.uur
       and h.province <> 'onbekend'
     group by h.province, h.weather, t.label
  ),
  totalen as (
    select per_provincie.province, sum(per_provincie.n)::integer as total
      from per_provincie
     group by per_provincie.province
  ),
  gerangschikt as (
    select p.province, p.weather, p.label, p.n, tt.total,
           row_number() over (partition by p.province order by p.n desc, p.weather) as rang
      from per_provincie p
      join totalen tt on tt.province = p.province
  )
  select g.province,
         g.weather,
         g.label,
         round(100.0 * g.n / g.total)::integer,
         g.total
    from gerangschikt g
   where g.rang = 1
     -- Dezelfde drempel als landelijk, maar per provincie: zie docs/datamodel.md.
     and g.total >= 10
   order by g.province;
$$;

comment on function public.weather_today_by_province() is
  'Per provincie het weerbeeld van vandaag dat het vaakst voorkomt, over de afgesloten uurblokken. Alleen provincies met minstens 10 inzendingen; onbekend doet niet mee.';

revoke execute on function public.weather_today_by_province() from public, anon;
grant  execute on function public.weather_today_by_province() to authenticated;
