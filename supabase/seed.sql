-- ===========================================================================
-- Seed voor de LOKALE stack. Draait bij `supabase db reset` en gaat niet mee
-- met `supabase db push`, dus hier staat niets dat in productie terechtkomt.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- LET OP: dit zijn placeholders en geen echte weerbeelden.
--
-- De mail aan Paul Bex van 7 augustus 2026 zegt dat het er vijf zijn. De namen
-- staan nergens vastgelegd, en `docs/datamodel.md` heeft dit als openstaand
-- punt. Ze verzinnen is precies wat CLAUDE.md verbiedt, want dan bedenken drie
-- mensen drie verschillende sets.
--
-- Zodra Mind de vijf weerbeelden bevestigt: vervang de rijen hieronder, en zet
-- ze ook in `docs/datamodel.md`. Voor productie hoort dit in een migratie of in
-- de adminpagina, niet in deze seed.
--
-- Tot die tijd bestaan deze rijen om de RLS, het dagslot en de drempel lokaal
-- te kunnen verifieren. Ze zijn expres lelijk zodat niemand ze aanziet voor af.
-- ---------------------------------------------------------------------------

insert into public.weather_type (code, label, sort_order) values
  ('tbd_1', 'PLACEHOLDER 1, naam nog niet bevestigd', 1),
  ('tbd_2', 'PLACEHOLDER 2, naam nog niet bevestigd', 2),
  ('tbd_3', 'PLACEHOLDER 3, naam nog niet bevestigd', 3),
  ('tbd_4', 'PLACEHOLDER 4, naam nog niet bevestigd', 4),
  ('tbd_5', 'PLACEHOLDER 5, naam nog niet bevestigd', 5);
