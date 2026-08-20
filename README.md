# Mentale Weerbericht

Een mobiele app voor Stichting Mind, gebouwd door drie mensen tijdens het lopen van de Camino, zomer 2026.

**Stack:** React Native met Expo en expo-router, Supabase voor backend en auth, iOS en Android.

**Team:** [@stinoe21](https://github.com/stinoe21) (architectuur, backend, releases), [@Cschoorl](https://github.com/Cschoorl) (structuur, pagina's, productlogica), [@maxhelmantel-gif](https://github.com/maxhelmantel-gif) (design system, visuele consistentie)

**Userflow:** [Figma board](https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow)

---

## Nieuw in dit project?

Lees **[ONBOARDING.md](ONBOARDING.md)**. Daar staat alles: clonen, git instellen, tokens aanmaken, MCP's activeren. Reken op een halfuur.

## Waar staat wat

| Bestand | Waarvoor |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Het projectcontract. Laadt automatisch in elke Claude Code-sessie. |
| [AGENTS.md](AGENTS.md) | Hetzelfde contract, kort, voor agents die `CLAUDE.md` niet laden (Cursor, Codex) |
| [ONBOARDING.md](ONBOARDING.md) | Setup voor een nieuw teamlid. Dit deel je. |
| [docs/scope.md](docs/scope.md) | Wat bouwen we wel en expliciet niet in v1 |
| [docs/productprincipes.md](docs/productprincipes.md) | Hoe de app zich hoort te gedragen: toon, houding, wat we nooit doen |
| [docs/taakverdeling.md](docs/taakverdeling.md) | Wie is waar eigenaar van, hoe een taak eruitziet, dagritme |
| [docs/datamodel.md](docs/datamodel.md) | Elke tabel en elk veld, met bewaartermijn en privacyverantwoording |
| [docs/backend-draaiboek.md](docs/backend-draaiboek.md) | Hoe de backend in elkaar zit en de handelingen eraan: migraties, pushen, testen |
| [content/mind/LEESMIJ.md](content/mind/LEESMIJ.md) | De contentbibliotheek van Mind: waar hij vandaan komt, wat er ontbreekt, en waarom hij nog niet de app in mag |
| [docs/privacy-besluiten.md](docs/privacy-besluiten.md) | Wat is afgesproken met Mind, wat staat nog open, en wie is aan zet |
| [docs/design-system.md](docs/design-system.md) | De afspraken rond het design system: tokens, schermregels, assets, en hoe Figma, Claude Design en de repo zich verhouden |
| [packages/ui/README.md](packages/ui/README.md) | Het design system zelf: hoe je tokens gebruikt en wijzigt, wat React Native niet zomaar overneemt, en wat er nog ontbreekt |
| [docs/van-ontwerp-naar-app.md](docs/van-ontwerp-naar-app.md) | De afvinklijst: alles wat er moet gebeuren om het ontwerp één op één in React Native te krijgen |
| [docs/assets-en-media.md](docs/assets-en-media.md) | Wat in de bundle hoort en wat in Storage, compressie, caching en egress |
| [docs/limieten-en-misbruik.md](docs/limieten-en-misbruik.md) | Rate limits, waarom de check-in-teller persoonlijk moet zijn, en wat de anonieme pool niet kan |
| [docs/setup-github.md](docs/setup-github.md) | Eenmalige repo-instellingen, door de eigenaar |

## Skills

Deze laden automatisch bij alle drie de teamleden. Aanroepen kan ook expliciet:

| Skill | Waarvoor |
|---|---|
| `/werkwijze` | De git-workflow: rebase, force-with-lease, squash merge, conflicten |
| `/nieuwe-feature` | Een feature bouwen van begin tot eind, met de definition of done |
| `/pr-check` | Een pull request van een teamgenoot reviewen |
| `/backend-draaiboek` | Al het werk aan Supabase: migraties, RLS en pushen naar dev |
| `/mind-content` | Iets opzoeken in de content van Mind: challenges, gidsen, zelftests, ervaringsverhalen |
| `/mind-design` | Iets opzoeken in het design system: kleuren, maten, schermopbouw, componenten, de letterlijke check-in-teksten |

Weet je niet hoe iets werkt, vraag het gewoon aan Claude in de projectmap. Hij kent deze afspraken.

## De vijf regels

1. Branch per **taak**, niet per persoon. Nooit rechtstreeks naar `main`.
2. `git sync` om bij te blijven, `git push --force-with-lease` om te pushen. Nooit `--force`.
3. Een taak is **nieuwe bestanden plus hooguit één bestaand bestand**. Lukt dat niet, meld het.
4. Nooit een hardcoded kleur, spacing of fontgrootte. Altijd via de tokens.
5. Nooit gebruikersinvoer loggen. Dit is een app over mentale gezondheid.

## Dagelijks

```bash
git sync                              # bijblijven
git checkout -b feat/<naam>           # nieuwe taak
# ... werken ...
git push --force-with-lease           # draft PR openen
```

## Status

Het samenwerkingsraamwerk staat, en de backend ook: sinds 13 augustus 2026 staat het Supabase-schema met de anonieme collectieve store in `supabase/`, inclusief het controlescript `supabase/tests/anonimisering.sql`. De app zelf nog niet. Verder bevat deze repo documentatie, configuratie, en sinds 20 augustus 2026 de contentbibliotheek van Mind in `content/mind/`: 339 pagina's als Markdown, zodat we er onderweg in kunnen zoeken zonder bereik. Let op: die is naslag en nog geen goedgekeurde contentbron voor de app, zie [content/mind/LEESMIJ.md](content/mind/LEESMIJ.md).

Sinds diezelfde dag staat ook het **design system** in `packages/ui`: tokens, assets, de vijf lettertypes en de volledige specificatie van 41 uitgewerkte schermen, overgenomen uit Claude Design. Er hoeft dus geen kleur of maat meer afgeleid of verzonnen te worden.

En sinds 20 augustus 2026 draait de **app** ook: `apps/mobile`, Expo SDK 57 met expo-router, als npm workspace naast `packages/ui` en `packages/types`. `npm install` en `npm start`, en hij loopt op Expo Go en op de Simulator. De twintig routebestanden van de userflow staan er leeg, met per stuk een omschrijving en een verwijzing naar hun specificatie. Wat er nog moet gebeuren staat als afvinklijst in [docs/van-ontwerp-naar-app.md](docs/van-ontwerp-naar-app.md), en hoe je je laptop klaarzet in [ONBOARDING.md](ONBOARDING.md).

**Deze twee blokkeren al het andere werk, in deze volgorde:**

- [ ] **Scope v1 vastleggen in `docs/scope.md`**, vanaf het Figma-board. Een sessie met z'n drieën. Zolang dit leeg is stopt elke agent terecht met een vraag in plaats van te bouwen.
- [x] ~~**Expo-app scaffolden**~~ **Gedaan op 20 augustus 2026.** Expo SDK 57, expo-router, npm workspaces, Metro ingesteld op de monorepo, de lettertypes geladen in de root layout, en de lint-regel tegen hardcoded designwaarden. CI groen op alle drie de laptops moet nog, dat kan pas als Max en Caesar de repo hebben.

Daarna pas:

- [ ] Mind vragen het Apple Developer-account vroeg aan te vragen (langste doorlooptijd; hun actie, niet de onze)
- [x] ~~Monorepo of één platte app~~ **Monorepo**, besloten 30 juli 2026: `apps/mobile`, `apps/admin`, `packages/ui` en `packages/types`. De admin is een CMS-webapp waar Mind content in zet, en de app geeft die weer. Ze delen de database en de gegenereerde types, niet het beeld.
- [ ] Kiezen welk framework `apps/admin` krijgt en waar die gedeployed wordt. Pas nodig als de mobiele app staat: die is de prioriteit.
- [x] ~~Kiezen: welke UI-kit is de basis, of bouwen we eigen componenten?~~ **Eigen componenten**, beantwoord door de overname van het design system op 20 augustus 2026. Een geleende set generieke besturingselementen blijft voor auth en formulieren, zie `packages/ui/reference/components/library`.
- [ ] Verdelen wie welk van de acht onderdelen doet, zie `docs/taakverdeling.md`
- [x] ~~Design tokens~~ **Staan in `packages/ui/tokens`** sinds 20 augustus 2026, als CSS en als TypeScript.
- [ ] De basiscomponenten naar React Native, in alle states. De specificatie ligt klaar in `packages/ui/reference`.
- [ ] De vier pakketten toevoegen die het ontwerp nodig heeft: `expo-image`, `expo-font`, `react-native-svg` en `expo-linear-gradient`. Alle vier zitten in Expo Go, dus geen development build nodig. Zie [docs/van-ontwerp-naar-app.md](docs/van-ontwerp-naar-app.md).
- [ ] Elk scherm uit de userflow als leeg routebestand aanmaken
- [ ] Userflow vertalen naar 15 tot 20 taken op het board
