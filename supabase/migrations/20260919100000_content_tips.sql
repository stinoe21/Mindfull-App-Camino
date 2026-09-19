-- ===========================================================================
-- Tips van MIND bij een onderwerp, vanuit het beheer in de app.
--
-- Besluit Stijn, 18 september 2026: MIND moet zelf content in de app kunnen
-- zetten, zonder ontwikkelaar en zonder nieuwe versie in de stores. Als eerste:
-- tips bij een onderwerp. De redacteur schrijft, bekijkt het voorbeeld en
-- publiceert zelf; intrekken kan altijd.
--
-- Hoe het loopt:
--   1. Een medewerker met de rol redacteur schrijft een tip in apps/admin.
--      Alles loopt via functies die eerst de rol controleren.
--   2. De app haalt met published_tips() alle gepubliceerde tips op: een aanroep
--      zonder argumenten, met voor iedereen hetzelfde antwoord. De app vraagt
--      dus nooit om een onderwerp. Dat is een eis en geen gemak: een vraag per
--      onderwerp zou in de platformlogs naast het account zetten wat iemand
--      las. Zie docs/datamodel.md, "de server blijft weerblind".
--   3. De app bewaart het antwoord lokaal en zet de tips achter de tips die hij
--      zelf bij zich heeft. Zonder netwerk verandert er niets.
--
-- Wat hier NIET in staat: iets over een gebruiker van de app. Het enige
-- persoonsgegeven is updated_by: welke medewerker van MIND de tip het laatst
-- wijzigde.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- 1. De tabel
--
-- topic is de slug van een onderwerp in de app (features/content/data). De
-- database kent die lijst niet en controleert alleen de vorm; het beheer biedt
-- alleen bestaande onderwerpen aan, en de app negeert een tip bij een
-- onderwerp dat hij niet kent.
--
-- body is een lijst blokken in de vorm die de app al tekent (InhoudBlok):
--   { "tekst": "..." }                          een alinea
--   { "lijst": ["...", "..."] }                 een opsomming
--   { "linkLabel": "...", "linkUrl": "https://..." }   een link
-- ---------------------------------------------------------------------------

create table public.content_tips (
  id            uuid primary key default gen_random_uuid(),
  topic         text not null check (topic ~ '^[a-z0-9][a-z0-9-]{1,79}$'),
  title         text not null check (char_length(title) between 3 and 120),
  body          jsonb not null check (jsonb_typeof(body) = 'array'),
  status        text not null default 'concept' check (status in ('concept', 'gepubliceerd', 'ingetrokken')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  published_at  timestamptz,
  updated_by    uuid references auth.users (id) on delete set null
);

comment on table public.content_tips is
  'Tips die MIND vanuit het beheer bij een onderwerp in de app zet. Content, geen gebruikersdata. Alle toegang loopt via functies.';
comment on column public.content_tips.updated_by is
  'De medewerker van MIND die de tip het laatst wijzigde. Wordt leeg als dat account verdwijnt. Komt nooit in de app.';

create index content_tips_status_idx on public.content_tips (status, topic, published_at);

alter table public.content_tips enable row level security;
revoke all on public.content_tips from anon, authenticated;


-- ---------------------------------------------------------------------------
-- 2. De controle op de inhoud
--
-- Geeft een foutzin terug, of null als het klopt. Geen HTML, geen opmaak:
-- alleen platte tekst in een vaste vorm, zodat een tip in de app nooit iets
-- anders kan worden dan een kop met alinea's, een opsomming en een link.
-- ---------------------------------------------------------------------------

create function public.content_body_problem(p_body jsonb)
returns text
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_blok jsonb;
  v_keys text[];
  v_item jsonb;
begin
  if p_body is null or jsonb_typeof(p_body) <> 'array' then
    return 'de inhoud hoort een lijst blokken te zijn';
  end if;
  if jsonb_array_length(p_body) < 1 or jsonb_array_length(p_body) > 12 then
    return 'een tip heeft minstens 1 en hooguit 12 blokken';
  end if;

  for v_blok in select * from jsonb_array_elements(p_body) loop
    if jsonb_typeof(v_blok) <> 'object' then
      return 'een blok hoort een object te zijn';
    end if;
    select array_agg(k order by k) into v_keys from jsonb_object_keys(v_blok) as k;

    if v_keys = array['tekst'] then
      if jsonb_typeof(v_blok -> 'tekst') <> 'string'
         or char_length(btrim(v_blok ->> 'tekst')) not between 1 and 1500 then
        return 'een alinea heeft 1 tot 1500 tekens';
      end if;

    elsif v_keys = array['lijst'] then
      if jsonb_typeof(v_blok -> 'lijst') <> 'array'
         or jsonb_array_length(v_blok -> 'lijst') not between 1 and 12 then
        return 'een opsomming heeft 1 tot 12 punten';
      end if;
      for v_item in select * from jsonb_array_elements(v_blok -> 'lijst') loop
        if jsonb_typeof(v_item) <> 'string' or char_length(btrim(v_item #>> '{}')) not between 1 and 300 then
          return 'een punt in een opsomming heeft 1 tot 300 tekens';
        end if;
      end loop;

    elsif v_keys = array['linkLabel', 'linkUrl'] then
      if jsonb_typeof(v_blok -> 'linkLabel') <> 'string'
         or char_length(btrim(v_blok ->> 'linkLabel')) not between 1 and 80 then
        return 'de tekst van een link heeft 1 tot 80 tekens';
      end if;
      if jsonb_typeof(v_blok -> 'linkUrl') <> 'string'
         or (v_blok ->> 'linkUrl') !~ '^https://[a-z0-9.-]+\.[a-z]{2,}(/[^\s<>"]*)?$'
         or char_length(v_blok ->> 'linkUrl') > 300 then
        return 'een link begint met https:// en is hooguit 300 tekens';
      end if;

    else
      return 'een blok is een alinea (tekst), een opsomming (lijst) of een link (linkLabel en linkUrl)';
    end if;
  end loop;

  return null;
end;
$$;

comment on function public.content_body_problem(jsonb) is
  'Controleert de blokken van een tip. Geeft een foutzin terug, of null als het klopt. Alleen voor andere functies.';

revoke execute on function public.content_body_problem(jsonb) from public, anon, authenticated;


-- ---------------------------------------------------------------------------
-- 3. Het beheer: lezen, bewaren, publiceren, intrekken, weggooien
-- ---------------------------------------------------------------------------

create function public.admin_tips_list()
returns table (
  id           uuid,
  topic        text,
  title        text,
  body         jsonb,
  status       text,
  updated_at   timestamptz,
  published_at timestamptz
)
language plpgsql
security definer
set search_path = ''
stable
as $$
begin
  if not public.has_admin_role('analist') then
    raise exception 'geen toegang' using errcode = '42501';
  end if;
  return query
    select t.id, t.topic, t.title, t.body, t.status, t.updated_at, t.published_at
      from public.content_tips t
     order by t.updated_at desc;
end;
$$;

comment on function public.admin_tips_list() is
  'Alle tips van MIND, ook concepten en ingetrokken tips. Voor elke medewerker met een rol. Zonder updated_by: wie wat wijzigde is voor de eigenaar, niet voor het scherm.';

revoke execute on function public.admin_tips_list() from public, anon;
grant  execute on function public.admin_tips_list() to authenticated;


create function public.admin_tip_save(p_id uuid, p_topic text, p_title text, p_body jsonb)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_probleem text;
  v_id       uuid;
begin
  if not public.has_admin_role('redacteur') then
    raise exception 'geen toegang' using errcode = '42501';
  end if;

  if p_topic is null or p_topic !~ '^[a-z0-9][a-z0-9-]{1,79}$' then
    raise exception 'kies een onderwerp' using errcode = '22023';
  end if;
  if p_title is null or char_length(btrim(p_title)) not between 3 and 120 then
    raise exception 'de kop heeft 3 tot 120 tekens' using errcode = '22023';
  end if;
  v_probleem := public.content_body_problem(p_body);
  if v_probleem is not null then
    raise exception '%', v_probleem using errcode = '22023';
  end if;

  if p_id is null then
    insert into public.content_tips (topic, title, body, updated_by)
    values (p_topic, btrim(p_title), p_body, auth.uid())
    returning id into v_id;
  else
    -- De status blijft wat hij was: een tikfout herstellen in een tip die
    -- live staat, haalt hem niet uit de app.
    update public.content_tips
       set topic = p_topic, title = btrim(p_title), body = p_body,
           updated_at = now(), updated_by = auth.uid()
     where id = p_id
    returning id into v_id;
    if v_id is null then
      raise exception 'deze tip bestaat niet meer' using errcode = 'P0002';
    end if;
  end if;

  return v_id;
end;
$$;

comment on function public.admin_tip_save(uuid, text, text, jsonb) is
  'Bewaart een tip: nieuw als p_id leeg is, anders bijwerken. Controleert de rol (redacteur) en de inhoud. De status verandert niet.';

revoke execute on function public.admin_tip_save(uuid, text, text, jsonb) from public, anon;
grant  execute on function public.admin_tip_save(uuid, text, text, jsonb) to authenticated;


create function public.admin_tip_set_status(p_id uuid, p_status text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_admin_role('redacteur') then
    raise exception 'geen toegang' using errcode = '42501';
  end if;
  if p_status not in ('concept', 'gepubliceerd', 'ingetrokken') then
    raise exception 'onbekende status' using errcode = '22023';
  end if;

  update public.content_tips
     set status       = p_status,
         published_at = case when p_status = 'gepubliceerd' then coalesce(published_at, now()) else published_at end,
         updated_at   = now(),
         updated_by   = auth.uid()
   where id = p_id;

  if not found then
    raise exception 'deze tip bestaat niet meer' using errcode = 'P0002';
  end if;
end;
$$;

comment on function public.admin_tip_set_status(uuid, text) is
  'Publiceert een tip, trekt hem in, of zet hem terug naar concept. Rol redacteur. De eerste publicatiedatum blijft staan.';

revoke execute on function public.admin_tip_set_status(uuid, text) from public, anon;
grant  execute on function public.admin_tip_set_status(uuid, text) to authenticated;


create function public.admin_tip_delete(p_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_admin_role('redacteur') then
    raise exception 'geen toegang' using errcode = '42501';
  end if;

  -- Wat live staat gooi je niet weg: eerst intrekken. Dat voorkomt dat een
  -- misklik iets uit de app haalt.
  delete from public.content_tips where id = p_id and status <> 'gepubliceerd';

  if not found then
    raise exception 'trek de tip eerst in, of hij bestaat niet meer' using errcode = 'P0001';
  end if;
end;
$$;

comment on function public.admin_tip_delete(uuid) is
  'Gooit een concept of een ingetrokken tip weg. Een gepubliceerde tip moet eerst ingetrokken worden. Rol redacteur.';

revoke execute on function public.admin_tip_delete(uuid) from public, anon;
grant  execute on function public.admin_tip_delete(uuid) to authenticated;


-- ---------------------------------------------------------------------------
-- 4. De app: alle gepubliceerde tips, voor iedereen hetzelfde
--
-- Geen argumenten, en dat moet zo blijven: anonimisering.sql controleert het.
-- version verandert zodra er iets aan de gepubliceerde tips verandert, zodat
-- de app kan zien of wat hij bewaard heeft nog klopt.
-- ---------------------------------------------------------------------------

create function public.published_tips()
returns jsonb
language sql
security definer
set search_path = ''
stable
as $$
  with live as (
    select t.id, t.topic, t.title, t.body, t.published_at, t.updated_at
      from public.content_tips t
     where t.status = 'gepubliceerd'
  )
  select jsonb_build_object(
    'version', coalesce((select md5(string_agg(l.id::text || l.updated_at::text, ',' order by l.id)) from live l), 'leeg'),
    'tips', coalesce((
      select jsonb_agg(jsonb_build_object('id', l.id, 'topic', l.topic, 'title', l.title, 'body', l.body)
                       order by l.topic, l.published_at, l.id)
        from live l
    ), '[]'::jsonb)
  );
$$;

comment on function public.published_tips() is
  'Alle gepubliceerde tips van MIND, voor iedereen hetzelfde antwoord. Geen argumenten: de app vraagt nooit om een onderwerp, zodat het verkeer niets zegt over wat iemand leest.';

revoke execute on function public.published_tips() from public, anon;
grant  execute on function public.published_tips() to authenticated;
