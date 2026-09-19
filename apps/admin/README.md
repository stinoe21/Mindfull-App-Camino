# Weertje beheer

De webapp voor MIND: eerst de cijfers, later ook content. Een statische site (Vite met React), zonder server. Het plan en de besluiten staan in `docs/scope.md` en `docs/datamodel.md` (tabel `admin_users`).

## Draaien

```bash
npm install                      # eenmalig, in de root
cp apps/admin/.env.example apps/admin/.env.local   # en invullen
npm run dev --workspace @mind/admin
```

In `.env.local` staan alleen de twee publieke waarden, dezelfde als in `apps/mobile`: het adres van het Supabase-project en de publishable key.

**Nooit de service role key, ook niet tijdelijk.** Het beheer heeft hem niet nodig. Het logt in met een gewoon account; wat een medewerker meer mag dan een gebruiker, staat in de database. Alles wat het beheer kan, is een functie in `supabase/migrations` die begint met de rolcontrole `has_admin_role()`.

## Iemand toegang geven

Dat doet de eigenaar, met één regel SQL. Er is bewust geen scherm voor. Zie `docs/backend-draaiboek.md`, "Iemand toegang geven tot het beheer".

## Huisstijl

Zwart op wit, met het oranje van MIND (`#f68100`) als enig accent. Alle kleur staat als variabele in `src/styles.css`; een component noemt nooit zelf een kleur. Het oranje is te licht voor tekst op wit en komt dus alleen op vlakken en staven. Grafieken zijn eigen SVG, zonder bibliotheek (`src/components/Staven.tsx`).

## Voorbeelddata

Tot de leesfuncties er zijn, toont het overzicht in de ontwikkelomgeving verzonnen getallen, duidelijk gemarkeerd, om de opbouw te kunnen beoordelen. In een gebouwde site komt dat nergens in beeld.
