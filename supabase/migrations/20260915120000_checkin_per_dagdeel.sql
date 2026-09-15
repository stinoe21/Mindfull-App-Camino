-- ===========================================================================
-- Inchecken mag vaker; bijdragen aan het landelijke beeld maximaal twee keer
-- per dag, per dagdeel.
--
-- Besluit Stijn, 15 september 2026. Tot nu toe dwong submit_weather() een
-- keer per dag af met profiles.last_checkin_on, en blokkeerde de app de
-- sliders zodra er een weerbeeld van vandaag op het toestel stond. Iemand
-- die 's ochtends mist voelde en 's middags zon, kon dat niet bijwerken.
--
-- Vanaf nu:
--
--   - De persoonlijke check-in is vrij. Dat raakt de server niet: het
--     weerbeeld staat op het toestel (docs/datamodel.md).
--   - De bijdrage aan de anonieme pool is beperkt tot een keer per dagdeel:
--     een keer voor 12.00 uur en een keer vanaf 12.00 uur, Europe/Amsterdam.
--     Dat is de rem tegen sturen van het beeld, zie
--     docs/limieten-en-misbruik.md sectie 2.
--   - Het slot blijft aan de persoonlijke kant, in dezelfde transactie als
--     het optellen, en er komt nog steeds GEEN weerbeeld bij te staan. Er
--     komt een kolom bij op het profiel: het dagdeel (1 of 2) van de laatste
--     bijdrage, naast de datum die er al stond. Beide worden overschreven;
--     samen zeggen ze alleen "dit account droeg in dit dagdeel al bij".
--   - Een tweede check-in in hetzelfde dagdeel werkt het eigen weer bij
--     (op het toestel) en voegt niets toe aan de pool. De eerdere bijdrage
--     wordt NIET vervangen: daarvoor zou de server de eerdere bijdrage
--     moeten kunnen terugvinden, en die sleutel bestaat bewust niet.
--
-- De functie geeft nu het dagdeel terug dat ze registreerde, zodat de app
-- niet op de klok van het toestel hoeft te vertrouwen om te weten of een
-- volgende poging zin heeft.
--
-- Overgang: een profiel met last_checkin_on = vandaag en last_checkin_part
-- null (ingecheckt voor het pushen van deze migratie) kan op de dag van het
-- pushen een keer extra bijdragen. Dat is eenmalig en aanvaardbaar.
--
-- Wat Paul hiervan nog niet kent: de nieuwe kolom. Zie docs/privacy-besluiten.md.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1. Het dagdeel op het profiel
-- ---------------------------------------------------------------------------

alter table public.profiles
  add column last_checkin_part smallint
  constraint profiles_last_checkin_part_check check (last_checkin_part in (1, 2));

comment on column public.profiles.last_checkin_on is
  'Datum van de laatste bijdrage aan het landelijke beeld, wordt overschreven. Geen weerbeeld, geen historie. Samen met last_checkin_part het slot van een bijdrage per dagdeel.';

comment on column public.profiles.last_checkin_part is
  'Dagdeel van de laatste bijdrage: 1 = voor 12.00 uur, 2 = vanaf 12.00 uur (Europe/Amsterdam). Wordt overschreven. Geen weerbeeld, geen historie, geen tijdstip.';

-- ---------------------------------------------------------------------------
-- 2. Insturen: slot per dagdeel, dan anoniem optellen
--
-- returns void wordt returns smallint, en dat kan niet met create or replace.
-- ---------------------------------------------------------------------------

drop function public.submit_weather(text, text);

create function public.submit_weather(p_weather text, p_province text default 'onbekend')
returns smallint
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_nu       timestamp := now() at time zone 'Europe/Amsterdam';
  v_today    date      := v_nu::date;
  v_part     smallint  := case when extract(hour from v_nu) < 12 then 1 else 2 end;
  v_uid      uuid      := auth.uid();
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

  -- Slaagt deze update niet, dan heeft deze gebruiker in dit dagdeel al
  -- bijgedragen. Een eerdere dag, of een eerder dagdeel van vandaag, mag.
  update public.profiles
     set last_checkin_on   = v_today,
         last_checkin_part = v_part,
         last_active_at    = now()
   where id = v_uid
     and (
       last_checkin_on is null
       or last_checkin_on < v_today
       or (last_checkin_on = v_today and coalesce(last_checkin_part, 0) < v_part)
     );

  if not found then
    raise exception 'dit dagdeel al bijgedragen' using errcode = 'P0001';
  end if;

  -- De anonieme bijdrage: optellen bij het totaal van dit uurblok en deze
  -- provincie. Geen id, geen hash, geen tijdstip. day en hour komen uit de
  -- defaults, dus van de database en niet van de client.
  insert into public.weather_hourly as h (weather, province, total)
  values (p_weather, v_province, 1)
  on conflict (day, hour, weather, province)
  do update set total = h.total + 1;

  return v_part;
end;
$$;
comment on function public.submit_weather(text, text) is
  'Stuurt een weerbeeld in, met de provincie van het toestel of onbekend. Zet eerst het slot per dagdeel op het profiel (datum plus 1 of 2), telt daarna anoniem op bij het uurtotaal. Nooit andersom. Geeft het dagdeel terug; tweede keer in hetzelfde dagdeel: "dit dagdeel al bijgedragen".';

revoke execute on function public.submit_weather(text, text) from public, anon;
grant  execute on function public.submit_weather(text, text) to authenticated;
