-- ===========================================================================
-- Wie er in het beheer van MIND mag, en met welke rol.
--
-- Besluit Stijn, 18 september 2026: het beheer wordt een eigen webapp in
-- apps/admin, een statische site zonder server. Het logt in zoals de app dat
-- doet, met een gewoon account bij dezelfde Supabase. Wat een medewerker van
-- MIND meer mag dan een gebruiker, staat hier in de database en niet in de
-- webapp. Daardoor heeft het beheer geen service role key nodig: er bestaat
-- nergens een sleutel die Row Level Security omzeilt.
--
-- Wat erbij komt:
--   1. admin_users: welk account welke rol heeft. Alleen de eigenaar vult
--      deze tabel, via SQL. Er is geen scherm en geen functie waarmee iemand
--      zichzelf of een ander rechten kan geven.
--   2. has_admin_role(): de controle die elke beheerfunctie als eerste doet.
--      Niet aanroepbaar vanuit een app; alleen andere functies gebruiken hem.
--   3. admin_role(): het enige wat het beheer zelf aanroept om te weten wat
--      het mag tonen. Een gewone gebruiker krijgt null terug.
--
-- Wat er nog NIET in zit: de leesfuncties voor het dashboard. Die komen in een
-- eigen migratie, met de drempel van 10. Deze migratie geeft dus nog niemand
-- iets te zien.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. De tabel
--
-- De rollen lopen op: een redacteur mag wat een analist mag, een beheerder
-- mag alles.
--   analist    de cijfers bekijken
--   redacteur  cijfers bekijken, content schrijven en publiceren
--   beheerder  alles, plus de noodrem bedienen
-- ---------------------------------------------------------------------------

create table public.admin_users (
  user_id  uuid primary key references auth.users (id) on delete cascade,
  role     text not null check (role in ('analist', 'redacteur', 'beheerder')),
  added_on date not null default ((now() at time zone 'Europe/Amsterdam')::date)
);

comment on table public.admin_users is
  'Welk account in het beheer van MIND mag, en met welke rol. Alleen de eigenaar vult deze tabel, via SQL. Verdwijnt mee met het account.';
comment on column public.admin_users.added_on is
  'De dag waarop de rol is toegekend. Alleen een datum, voor de administratie van wie wanneer toegang kreeg.';

alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;


-- ---------------------------------------------------------------------------
-- 2. De rolcontrole voor andere functies
--
-- Geeft waar terug als het ingelogde account minstens deze rol heeft. Elke
-- beheerfunctie begint hiermee. Niet aanroepbaar vanuit een app: een functie
-- die security definer is en van dezelfde eigenaar, mag hem gewoon gebruiken.
-- ---------------------------------------------------------------------------

create function public.has_admin_role(p_min text)
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1
      from public.admin_users a
     where a.user_id = (select auth.uid())
       and array_position(array['analist', 'redacteur', 'beheerder'], a.role)
           >= array_position(array['analist', 'redacteur', 'beheerder'], p_min)
  );
$$;

comment on function public.has_admin_role(text) is
  'Waar als het ingelogde account minstens deze rol heeft (analist, redacteur, beheerder). Een onbekende rol geeft onwaar. Alleen voor andere functies, niet voor een app.';

revoke execute on function public.has_admin_role(text) from public, anon, authenticated;


-- ---------------------------------------------------------------------------
-- 3. Wat het beheer aanroept na het inloggen
--
-- Geeft de eigen rol terug, of null voor wie geen rol heeft. Een gewone
-- gebruiker van de app leert hier dus niets mee. Voor een medewerker werkt de
-- functie ook last_active_at bij: wie het beheer gebruikt geldt als actief,
-- en een beheeraccount dat twee jaar stilligt verdwijnt met zijn rechten via
-- purge_inactive_accounts(). Slapende accounts met extra rechten wil je niet.
-- ---------------------------------------------------------------------------

create function public.admin_role()
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid  uuid := auth.uid();
  v_role text;
begin
  if v_uid is null then
    return null;
  end if;

  select a.role into v_role from public.admin_users a where a.user_id = v_uid;

  if v_role is not null then
    update public.profiles set last_active_at = now() where id = v_uid;
  end if;

  return v_role;
end;
$$;

comment on function public.admin_role() is
  'De rol van het ingelogde account in het beheer, of null. Werkt voor een medewerker last_active_at bij, zodat een gebruikt beheeraccount niet als inactief wordt opgeruimd.';

revoke execute on function public.admin_role() from public, anon;
grant  execute on function public.admin_role() to authenticated;
