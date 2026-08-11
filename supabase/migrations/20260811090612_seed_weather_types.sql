-- ===========================================================================
-- De vijf weerbeelden.
--
-- Bron: het Figma-board, sectie "4 . Uitkomsten (weer-states)", frames
-- v2-uitkomst-zonnig, -wolken, -mist, -wind en -regen. Dat komt overeen met de
-- mail aan Paul van 7 augustus 2026, waarin staat dat de vier sliders lokaal
-- tot een van vijf vaste weerbeelden leiden.
--
-- Waarom dit in een migratie staat en niet in seed.sql: seed.sql draait alleen
-- lokaal bij `supabase db reset` en gaat niet mee met `supabase db push`. Deze
-- rijen moeten wel in productie bestaan, want weather_daily verwijst ernaar met
-- een foreign key. Wat niet in een migratie staat, bestaat straks niet in de
-- omgeving van Mind. Zie docs/privacy-besluiten.md.
--
-- De codes zijn stabiel en komen nooit in beeld bij de gebruiker. De labels
-- wel: die zijn overgenomen uit de koppen op het board. Wijzigt Mind een tekst,
-- dan is dat een nieuwe migratie en geen dashboard-edit.
-- ===========================================================================

insert into public.weather_type (code, label, sort_order) values
  ('zonnig', 'Zonnige dag',      1),
  ('wolken', 'Wolkendag',        2),
  ('mist',   'Mistige dag',      3),
  ('wind',   'Winderige dag',    4),
  ('regen',  'Regenachtige dag', 5)
on conflict (code) do update
   set label      = excluded.label,
       sort_order = excluded.sort_order;
