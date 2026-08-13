# Backend-draaiboek

Voor Caesar, Max en Stijn. Dit is het overzicht van hoe de backend in elkaar zit en de handelingen die je eraan doet. De agents hebben hun eigen versie: de skill `backend-draaiboek`, die laadt automatisch zodra een taak `supabase/**` raakt. Dit document is voor mensen, dus voor het begrip en voor de stappen die je zelf in de terminal doet.

De inhoudelijke besluiten staan niet hier: wat we opslaan staat in `datamodel.md`, wat met Mind is afgesproken in `privacy-besluiten.md`, en de werkafspraken in `CLAUDE.md` sectie 9. Dit document herhaalt daar niets van, het wijst ernaar.

---

## 1. Hoe de backend in elkaar zit

De hele backend is op dit moment twee migratiebestanden in `supabase/migrations/`. Dat is geen tussenstand maar het ontwerp: klein, leesbaar, en elke wijziging is een bestand met een review erop.

Het idee in één alinea: het persoonlijke weerbeeld blijft op het toestel en wordt aan het eind van de dag gewist. De server kent maar twee dingen. Eén: **anonieme totalen**, per dag, uurblok en weerbeeld hoeveel inzendingen er waren; een inzending telt op bij een totaal en krijgt geen eigen rij. Twee: op het profiel **de datum van de laatste check-in**, zodat iemand één keer per dag meetelt. Tussen die twee loopt geen verbinding, en de tabellen zijn zo gebouwd dat die verbinding er ook niet bij kán: er is in de collectieve tabel geen kolom die een gebruiker of een exact moment kan aanduiden, en geen rij die één inzending vertegenwoordigt.

### Wat de app mag aanraken

Dit is de volledige API van de backend. Alles wat hier niet staat, is voor de app onzichtbaar.

| Handeling | Hoe | Wat het doet |
|---|---|---|
| Insturen | `rpc('submit_weather', { p_weather: 'zonnig' })` | Zet eerst het dagslot op het profiel, telt dan anoniem op bij het uurtotaal. Eén transactie. Tweede keer op een dag: foutmelding "vandaag al ingecheckt". |
| Weerbericht lezen | `rpc('weather_today')` | De percentages van vandaag. Geeft **nul rijen** onder de toondrempel; dat is meteen de empty state. |
| Weertypen lezen | `select` op `weather_type` | De vijf weerbeelden met hun labels. |
| Eigen profiel lezen | `select` op de eigen rij in `profiles` | Voor `last_checkin_on`, zodat de check-in-knop uit kan staan als iemand al heeft ingecheckt. |

Schrijven op `profiles` kan niet vanuit de app, ook niet op je eigen rij: anders zet iemand zijn eigen dagslot terug. En `weather_hourly` is helemaal onzichtbaar: RLS staat aan en er is bewust geen enkele policy.

### De tabellen

| Tabel | Wat erin staat | Bewaartermijn |
|---|---|---|
| `weather_type` | De vijf weerbeelden: zonnig, wolken, mist, wind, regen | Referentiedata |
| `weather_hourly` | Totalen: per dag, uurblok (0 tot 23) en weerbeeld hoeveel inzendingen. Geen id, geen code, geen tijdstip, geen rij per inzending. | Blijft staan: niet herleidbaar, dus geen termijn. Dagtotalen zijn een group by. |
| `profiles` | `last_active_at` en `last_checkin_on`. Nergens staat wát iemand invulde. | Volgt het account |

Waarom er geen rij per inzending is en geen tijdstip, staat uitgelegd in `datamodel.md`. De korte versie: de platformlogs bevatten bij elk verzoek wie het deed en wanneer, dus alles wat een inzending aanwijsbaar maakt is een sleutel naar die logs: een tijdstip, een rij-id, en zelfs de invoegvolgorde van losse rijen. Een totaal kent geen volgorde en geen geschiedenis, dus die sleutel bestaat niet meer.

### Het bewijsstuk

`supabase/tests/anonimisering.sql` bewijst aan de tabeldefinities dat de collectieve stroom niet herleidbaar kan zijn: geen kolom die naar een persoon kan wijzen, geen rij per inzending, geen tijd fijner dan een uur, RLS dicht, realtime uit, functies met een vast `search_path`. Het script stopt op de eerste afwijking en eindigt anders met GESLAAGD. De uitvoer is een bijlage bij de DPIA van Paul. Draai het na elke push, zie sectie 4.

### Instellingen die geen SQL zijn

- **Point-in-time recovery staat uit en blijft uit.** De WAL zou anders elke insert vastleggen met zijn transactietijd.
- **Realtime staat op geen enkele tabel.** Uitzenden van inserts met een moment erbij is precies het lek dat het uurblok dichthoudt.
- **Geen GitHub-integratie op het Supabase-project.** Die blokkeert de overdracht aan Mind, zie `privacy-besluiten.md`.
- **Wie er in het dashboard kan is een privacymaatregel**, geen gemak. Na de overdracht is dat aan Mind.

### Wat er bewust nog niet is

- **Er is geen rollup en geen bewaartermijn op de uurtotalen.** Vervallen op 13 augustus 2026: de totalen zijn niet herleidbaar, dus er hoeft niets periodiek te draaien en er kan niets vergeten worden. Wil Mind alsnog een termijn, dan is dat een kleine migratie.
- **De opruiming van inactieve accounts bestaat nog niet**, alleen het veld (`last_active_at`) om hem op te bouwen.
- **Een eigen SMTP is pas voor livegang**, met een verwerkersovereenkomst erbij, zie `limieten-en-misbruik.md`.

---

## 2. Dev gelijktrekken met de repo: uitgevoerd

**Uitgevoerd op 13 augustus 2026, door Stijn.** Het dev-project droeg tot die dag het proefschema van 31 juli: dertien migraties met onder meer `check_ins` (persoonlijke check-ins in de cloud, precies wat we Paul hebben toegezegd niet te doen), plus testdata. Het is gereset met `supabase db reset --linked` en draait nu precies de migraties uit deze repo.

Geverifieerd via de read-only MCP direct na de reset: de migratiehistorie bevat exact onze twee versies, alleen de vier tabellen bestaan en RLS staat overal aan, en de security advisors melden alleen de twee bewuste keuzes (nul policies op de collectieve tabellen, en de twee functies die authenticated mag aanroepen). Nog openstaand uit de nacontrole: het volledige bewijsstuk draaien via psql (sectie 4), en in het dashboard nakijken dat PITR uit staat en de realtime-publicatie leeg is.

Voor als dit ooit opnieuw nodig is: de reset is destructief, een teambesluit en een mensenhandeling. De agent-skill verbiedt agents expliciet om dit commando te draaien. En één les uit de uitvoering: **bij `supabase db reset --linked` draait ook `supabase/seed.sql` mee tegen het gekoppelde project.** Alleen `supabase db push` slaat de seed over. Zet er dus nooit iets in dat niet ook op dev mag belanden.

## 3. Eenmalig per laptop

De CLI-installatie en `supabase login` staan ook in `ONBOARDING.md`; hier het complete rijtje inclusief wat daar niet staat:

```bash
brew install supabase/tap/supabase    # de Supabase CLI
supabase login                        # browserlogin met je eigen account
cd mind-app
supabase link --project-ref fpvvmgdzftmkyiqfvpjj
brew install libpq && brew link --force libpq    # psql, voor het testscript
```

Bij het linken of de eerste push vraagt de CLI het **databasewachtwoord van het dev-project**. Dat krijg je mondeling van Stijn. Het staat nergens op schrift en gaat nooit een repo of een `.env` in. Dit is het gewone databasewachtwoord van een dev-project zonder echte gebruikers, niet een service role key: die laatste bestaat op onze laptops helemaal niet, zie `CLAUDE.md` sectie 9.

## 4. De handelingen

| Wat je wil | Hoe | Afspraak erbij |
|---|---|---|
| Kijken: schema, data, logs | De MCP `supabase-mind`, of het dashboard | Read-only, en dat blijft zo |
| Iets wijzigen aan het schema | Migratiebestand plus eigen kleine PR; je agent kent de stappen via de skill `backend-draaiboek` | Nooit via de dashboard-UI |
| Pushen naar dev | Zeg het hardop tegen de andere twee, dan `supabase db push` | Alles op dev staat in minstens een open PR, en die merget dezelfde dag |
| De anonimisering testen | `psql "<pooler-URI>" -f supabase/tests/anonimisering.sql` | Na elke push. Eindigt met GESLAAGD of stopt op de fout |
| Types genereren | `supabase gen types typescript --linked` | Zodra `packages/types` bestaat; nooit met de hand |

De pooler-URI vind je in het dashboard onder **Connect**, kies **Session pooler**, en vul het databasewachtwoord uit sectie 3 in.

## 5. Wie doet wat

Iedereen kan en mag alles, zie `taakverdeling.md`. Daarbovenop: schemawijzigingen lopen ter review langs Stijn, die waakt over backend en datamodel. De integrator van de dag bepaalt de mergevolgorde als twee backend-PR's elkaar raken, maar als het goed is bestaat die situatie niet: één migratie per PR, dezelfde dag gemerged.

## 6. Wat er nog beslist moet worden

Alleen de backendpunten; het volledige overzicht staat in `privacy-besluiten.md`.

- **De toondrempel (nu 10)** is een voorlopig getal dat Paul nog moet wegen.
- **Een bewaartermijn op de uurtotalen** is er sinds 13 augustus 2026 niet: ze zijn niet herleidbaar. Wil Mind er toch een, dan is dat een kleine migratie; de vraag ligt bij Paul.
- **De opruiming na twee jaar inactiviteit** moet nog gebouwd, inclusief wat "inactief" precies is.
- **De teksten van de twee consents** blokkeren de onboarding-flow; de vraag ligt bij Paul.
