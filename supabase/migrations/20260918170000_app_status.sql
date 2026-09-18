-- ===========================================================================
-- De noodrem: een minimale versie van de app, en een onderhoudsbericht.
--
-- Besluit Stijn, 18 september 2026 (gatenlijst 17 september, "Minimale versie
-- en een noodrem"). submit_weather() is al twee keer van vorm veranderd. Staat
-- de app in de stores, dan draaien er oude versies die een volgende wijziging
-- niet overleven, en er was geen enkele manier om die te vragen bij te werken
-- of om tijdens onderhoud iets anders te tonen dan een foutmelding.
--
-- Wat er komt:
--
--   1. public.app_status: precies een rij, met de laagste versie van de app
--      die nog werkt en een optioneel onderhoudsbericht. GEEN gebruikersdata:
--      er staat niets in over een persoon, een toestel of een check-in, en de
--      app stuurt bij het lezen ook niets mee (geen versie, geen toestel).
--      De vergelijking met de eigen versie doet de app zelf.
--   2. public.get_app_status(): leest die rij. Alleen voor authenticated,
--      net als de rest: anon mag in dit schema niets aanroepen, en dat blijft
--      zo (supabase/tests/anonimisering.sql, sectie 9). Zonder account kom je
--      de app niet in, dus de controle na het inloggen dekt iedereen die een
--      serverfunctie kan raken.
--
-- Bedienen: de rij aanpassen is data en geen schema. Dat doet de eigenaar met
--   update public.app_status set min_version = '1.2.0', updated_at = now();
--   update public.app_status set maintenance_nl = 'Tekst', updated_at = now();
--   update public.app_status set maintenance_nl = null,  updated_at = now();
-- via de SQL-editor van het dashboard of `supabase db query --linked`. Zie
-- docs/backend-draaiboek.md.
--
-- De app faalt open: geen netwerk, geen antwoord of een onleesbare rij
-- betekent gewoon doorgaan. Een noodrem die de app blokkeert als de server
-- hapert is erger dan geen noodrem.
-- ===========================================================================

create table public.app_status (
  -- Een vaste sleutel die alleen true kan zijn: er past precies een rij in.
  id             boolean     primary key default true,
  min_version    text        not null default '0.0.0',
  maintenance_nl text,
  updated_at     timestamptz not null default now(),
  constraint app_status_een_rij check (id),
  constraint app_status_min_version_vorm check (min_version ~ '^[0-9]+\.[0-9]+\.[0-9]+$'),
  constraint app_status_maintenance_lengte check (maintenance_nl is null or char_length(maintenance_nl) between 1 and 500)
);

comment on table public.app_status is
  'De noodrem van de app: precies een rij. Geen gebruikersdata. Lezen via get_app_status(), aanpassen door de eigenaar.';
comment on column public.app_status.min_version is
  'Laagste versie van de app die nog werkt, als 1.2.3. Een oudere app toont "Werk de app bij".';
comment on column public.app_status.maintenance_nl is
  'Onderhoudsbericht in het Nederlands, of null. Staat er tekst, dan toont de app die in plaats van de tabs.';

insert into public.app_status default values;

-- Dicht, zoals elke tabel: alle toegang loopt via de functie.
alter table public.app_status enable row level security;
revoke all on public.app_status from anon, authenticated;

create function public.get_app_status()
returns table (
  min_version text,
  maintenance text
)
language sql
security definer
set search_path = ''
stable
as $$
  select s.min_version, s.maintenance_nl
    from public.app_status s
   limit 1;
$$;

comment on function public.get_app_status() is
  'De minimale versie van de app en het onderhoudsbericht (of null). Geen argumenten: de app stuurt niets over zichzelf mee.';

revoke execute on function public.get_app_status() from public, anon;
grant  execute on function public.get_app_status() to authenticated;
