---
name: backend-draaiboek
description: Het draaiboek voor al het werk aan de backend, dus Supabase, migraties, RLS, database-functies en het pushen naar het gedeelde dev-project. Gebruik dit bij elke taak die supabase/** raakt of het schema wijzigt, en bij vragen als "hoe maak ik een tabel", "hoe push ik naar Supabase", "hoe test ik de anonimisering", "hoe genereer ik types" of "mag dit veld erbij".
---

# Backend-draaiboek: werken aan Supabase

Dit is een app over mentale gezondheid. De backend is zo gebouwd dat de anonimisering een eigenschap van de **structuur** is, niet van de zorgvuldigheid van degene die er een query op schrijft. Alles in deze skill dient dat ene doel.

Dit is de werkinstructie voor jou als agent. Het overzicht voor mensen, met de eenmalige setup en de platforminstellingen, staat in `docs/backend-draaiboek.md`.

We draaien Supabase **niet lokaal**: geen Docker, geen `supabase start`. Alles gebeurt tegen het gedeelde dev-project, zie `CLAUDE.md` sectie 9.

---

## 1. De twee stromen, en de regels die nooit wijken

Het persoonlijke weerbeeld blijft op het toestel en wordt aan het eind van de dag gewist. De server kent alleen twee dingen: een anonieme rij per inzending in de collectieve pool, en op het profiel de datum van de laatste check-in. Tussen die twee loopt geen verbinding, en dat is toegezegd aan de privacyofficer van Mind. Zie `docs/datamodel.md`.

Daaruit volgen vijf regels. Ze staan ook in de bestanden zelf, maar hier op een rij:

1. **`weather_entry` en `weather_daily` krijgen er nooit een kolom bij.** Elke kolomwens is een productbesluit dat eerst `docs/datamodel.md` in moet, langs het team. Niets in die tabellen mag een gebruiker kunnen aanduiden of een moment fijner dan een uurblok.
2. **Het dagslot zit aan de persoonlijke kant**, in `submit_weather()`, in dezelfde transactie als de insert. Tel nooit op de collectieve tabel, zie `docs/limieten-en-misbruik.md`.
3. **De app praat alleen via `submit_weather()` en `weather_today()` met de data**, plus lezen van `weather_type` en de eigen rij in `profiles`. Nieuwe directe toegang op een tabel is een besluit, geen implementatiedetail.
4. **Realtime blijft uit op de collectieve tabellen en PITR blijft uit op het project.** Allebei zenden ze anders elke insert uit met een exact moment erbij, en dat is precies het lek dat het uurblok dichthoudt.
5. **Er komt geen pg_cron, extensie of trigger bij zonder teambesluit.**

## 2. Waar wat staat

| Bestand | Wat het is |
|---|---|
| `supabase/migrations/` | Elke schemawijziging is hier een bestand. Er bestaat geen andere route. |
| `supabase/tests/anonimisering.sql` | Het bewijsstuk dat de collectieve stroom niet herleidbaar kan zijn. Draaien na elke push; de uitvoer is een bijlage bij de DPIA. |
| `supabase/seed.sql` | Draait alleen bij een lokale reset, en die hebben we niet. Referentiedata waar de app van afhangt hoort dus in een **migratie**, zoals de weertypen in `20260811090612_seed_weather_types.sql`. |
| `supabase/config.toml` | Lokale projectconfig. Niet aanraken. |

## 3. Vaste patronen in elke migratie

Kijk naar `20260811082814_weather_anonymous_aggregate.sql` als voorbeeld; dat bestand is de huisstijl. De patronen:

- **Elke nieuwe tabel: RLS aan én revoke.** `enable row level security` plus `revoke all ... from anon, authenticated`. Die revoke is nodig en niet defensief: Supabase geeft nieuwe tabellen in `public` standaard rechten aan beide rollen.
- **Daarna pas openzetten, zo smal mogelijk.** Grant per handeling, policy per doel. Een tabel die de app niet hoort te zien krijgt nul policies: RLS zonder policy weigert alles.
- **Elke functie: `security definer` met `set search_path = ''`**, en expliciete rechten: revoke van `public` en `anon`, grant aan `authenticated` alleen als de app hem aanroept.
- **Dag en uur zet de database, in Europe/Amsterdam.** Nooit de client, want dan zijn ze te vervalsen. Postgres staat op UTC, dus zonder conversie rolt de dag om 02:00 Nederlandse tijd om.
- **Getallen met beleidswaarde staan in de migratie zelf**, zoals de toondrempel en de bewaartermijn. Wijzigen is dan een migratie en krijgt een review, en dat is de bedoeling.
- **Commentaar bij elke tabel en elk veld**: wat erin staat, de bewaartermijn, en waarom het zo moet. De volgende die het leest is een teamgenoot op een bergpas zonder context.

## 4. De cyclus, stap voor stap

0. **Staat wat je gaat bouwen in `docs/datamodel.md`, met bewaartermijn?** Nee: stop en vraag. Een tabel of veld verzinnen is het ergste wat je hier kunt doen, zie `CLAUDE.md` sectie 8.
1. **Branch en bestand.** Branch `chore/<naam>`, dan `supabase migration new <naam>`. Dat zet een leeg bestand in `supabase/migrations/` met een timestamp ervoor.
2. **Open meteen een draft-PR.** Migraties zijn gedeelde bestanden: dit is altijd een eigen kleine PR die dezelfde dag merget, nooit bijvangst van een feature.
3. **Controleer vóór het pushen of dev en repo gelijk lopen:** `supabase migration list --linked`. Staat er op remote een migratie die lokaal niet bestaat, stop dan en meld het. Wat er dan moet gebeuren is een teambesluit, zie `docs/backend-draaiboek.md` sectie 2.
4. **Zeg tegen de andere twee dat je pusht**, en dan `supabase db push`. Dat mag vanaf je branch: dev heeft geen echte gebruikers en is de plek om te proberen. De regel is niet "alleen vanaf main" maar: **alles wat op dev staat, staat in minstens een open PR, en die merget dezelfde dag.** Er staat nooit iets op dev dat met de hand in het dashboard is getypt.
5. **Draai het bewijsstuk:**

   ```bash
   psql "<pooler-URI>" -f supabase/tests/anonimisering.sql
   ```

   De pooler-URI staat in `docs/backend-draaiboek.md` sectie 4. Geen psql beschikbaar: draai de controles uit dat bestand stuk voor stuk via de read-only MCP. Kijk daarna ook naar de security advisors van het project.
6. **Types genereren** zodra `packages/types` bestaat: `supabase gen types typescript --linked`. Nooit met de hand schrijven.
7. **Review en squash merge, dezelfde dag.** Zie de skill `werkwijze`.

**Ging een gepushte migratie fout?** Niet terugdraaien en niet het bestand aanpassen: een migratie die al op dev staat is geschiedenis. Schrijf een nieuwe migratie die corrigeert. Is het echt een puinhoop, dan is een reset van dev een teambesluit en geen agent-actie.

## 5. Wat je nooit doet

- Schema wijzigen via de dashboard-UI of met een los `execute_sql`-commando. Altijd een migratiebestand.
- Een service role key gebruiken, opvragen of ergens neerzetten. Zie `CLAUDE.md` sectie 9 voor waarom dit hier erger is dan elders.
- Een kolom toevoegen aan `weather_entry` of `weather_daily`.
- Realtime aanzetten, PITR aanzetten, een extensie of pg_cron installeren.
- Een migratiebestand wijzigen of verwijderen dat al gepusht of gemerged is.
- `supabase db reset --linked` draaien. Dat wist het hele dev-project en is aan het team, niet aan een agent.
- Een tabel, veld of analytics-event bedenken dat niet in `docs/datamodel.md` staat.

## 6. Als je vastloopt

Melden dat iets niet kan binnen deze grenzen is een geldig eindresultaat. De grenzen oprekken om het toch af te krijgen is dat niet. Zie `CLAUDE.md` sectie 12.
