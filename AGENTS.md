# AGENTS.md

**Lees eerst [CLAUDE.md](CLAUDE.md). Dat is het volledige contract voor dit project en het geldt voor jou net zo goed.**

Wij werken met **Claude Code**, en die laadt `CLAUDE.md` zelf. Dit bestand is er voor het geval iemand een tool gebruikt die dat niet doet, zoals Cursor of Codex: die lezen `AGENTS.md` en zouden zonder dit bestand zonder enige projectafspraak beginnen. Het staat er dus als vangnet, niet omdat we die tools nodig hebben.

Dit is dus geen tweede regelset. Bij twijfel of tegenspraak wint `CLAUDE.md`.

---

## Stand van zaken

**De app is gebouwd en staat op `main`**, stand 18 september 2026: de backend in `supabase/`, het design system met tokens en componenten in `packages/ui`, en de app in `apps/mobile` (Expo SDK 57, expo-router) met alle schermen uit `docs/scope.md`. `npm run typecheck`, `npm run lint` en `npm test` zijn groen. In de interface heet de app Weertje.

**Sinds 10 september 2026 bouwt Stijn alleen verder.** Er is geen verplichte review meer, maar alles gaat nog steeds via een pull request met squash. Er draaien soms meerdere agentsessies tegelijk in dezelfde werkmap en tegen dezelfde database: werk in een eigen worktree en controleer je branch voor elke commit. Zie `CLAUDE.md` sectie 2.

De contentbibliotheek van Mind staat in `content/mind/`: 339 pagina's naslag om in te zoeken. Sinds 10 september 2026 mag de challenge-inhoud in de app; lees voor al het andere eerst `content/mind/LEESMIJ.md` voordat je er iets uit overneemt.

Wat open staat is vooral geen bouwwerk: de besluiten die bij MIND en Paul liggen, zie `docs/privacy-besluiten.md` en `docs/scope.md`. Een productbeslissing neemt Stijn, een juridische Paul, en geen van beide neemt een agent. Word je gevraagd zo'n beslissing te nemen, meld dat dan in plaats van hem zelf te nemen.

---

## De regels die je in geen geval mag missen

Ook als je verder niets leest:

1. **Log nooit inhoudelijke gebruikersinvoer.** Niet naar de console, niet naar een crash reporter, niet naar analytics, ook niet tijdelijk om te debuggen. Dit is een app over mentale gezondheid.
2. **Push nooit naar `main`.** Werk op een branch, ga via een pull request. `main` is technisch beschermd.
3. **Voeg geen dependency toe.** Vraag ernaar.
4. **Geen hardcoded kleuren, spacing, radii, font sizes of shadows.** Altijd via de tokens uit `packages/ui/tokens`.
5. **Raak geen gedeelde bestanden aan** buiten de scope van je taak. De lijst staat in `CLAUDE.md` sectie 5.
6. **Verzin geen tabel, veld, analytics-event of hulptekst.** Staat het niet in `docs/datamodel.md` of `docs/scope.md`, dan bestaat het niet en vraag je ernaar.
7. **Zet geen afbeelding in Supabase Storage die in de app bundle hoort.** Iconen, illustraties en gradients horen in de bundle, alleen content die Mind zelf toevoegt gaat naar Storage. Zie `docs/assets-en-media.md`.
8. **Tel check-ins nooit op de collectieve tabel.** Die heeft geen gebruikerscode, dus dat kan niet, en een poging daartoe breekt de anonimisering. De teller hoort in de persoonlijke stroom. Zie `docs/limieten-en-misbruik.md`.

## Media en caching, kort

Vier regels die egress en laadtijd bepalen. De onderbouwing en de cijfers staan in `docs/assets-en-media.md`.

- **Comprimeer en schaal vooraf**, nooit tijdens het opvragen. Image transformations bestaan niet op ons plan en de grootste winst zit in de afmeting, niet in het formaat.
- **Public bucket, geen signed URLs** voor content die niet per gebruiker afgeschermd hoeft te worden. Elk token in een signed URL is een eigen cache-entry, dus daarmee wordt de cache nooit warm en gaat elke aanvraag naar de origin.
- **Zet `cacheControl` hoog bij upload.** De standaard is één uur, en dat is te laag voor content die zelden wijzigt.
- **Wijzigt een afbeelding, upload naar een nieuw pad.** Overschrijven werkt niet betrouwbaar, want browsers verversen hun eigen cache niet als de CDN invalideert.

Melden dat iets niet kan binnen deze grenzen is een geldig eindresultaat. Een taak half afmaken zonder het te melden is dat niet.

## Wie beslist

Stijn. `docs/taakverdeling.md` beschrijft de verdeling over drie mensen tot 10 september 2026 en is sindsdien geschiedenis. Een agent mag een eigen pull request mergen als Stijn dat in de sessie heeft gezegd, pas als de CI groen is. Wat Stijn op beeld of op tekst wil beoordelen blijft open staan. Workflowbestanden, de ruleset en `supabase db push` doet Stijn zelf.

## Waar je de rest vindt

| Vraag | Document |
|---|---|
| Wat bouwen we wel en niet | `docs/scope.md` |
| Hoe de app zich hoort te gedragen | `docs/productprincipes.md` |
| Afspraken rond design: tokens, schermregels, assets, Figma | `docs/design-system.md` |
| Een concrete kleur, maat, component of schermopbouw | `packages/ui/README.md`, of `.claude/skills/mind-design/SKILL.md` |
| Iets opzoeken in de content van Mind: challenges, gidsen, zelftests, ervaringsverhalen | `content/mind/LEESMIJ.md`, of `.claude/skills/mind-content/SKILL.md` |
| Wat er moet gebeuren om het ontwerp in React Native te krijgen | `docs/van-ontwerp-naar-app.md` |
| Welke data we opslaan en hoe lang | `docs/datamodel.md` |
| Hoe de backend in elkaar zit en hoe je er iets aan wijzigt | `docs/backend-draaiboek.md` |
| Waar plaatjes horen, compressie en caching | `docs/assets-en-media.md` |
| Rate limits en misbruik | `docs/limieten-en-misbruik.md` |
| Wat met Mind is afgesproken over privacy | `docs/privacy-besluiten.md` |
| Wie waar eigenaar van was, tot 10 september 2026 | `docs/taakverdeling.md` |
| De git-workflow | `.claude/skills/werkwijze/SKILL.md` |

## Voor je klaar bent

Rapporteer welke bestanden je hebt aangepast en welke aannames je hebt gedaan. Draai `npm run typecheck`, `npm run lint` en `npm test` als die er zijn. De volledige definition of done staat in `CLAUDE.md` sectie 7.
