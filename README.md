# Mentale Weerbericht

Een mobiele app voor Stichting Mind, in de interface "Weertje". Begonnen door drie mensen tijdens het lopen van de Camino, zomer 2026; sinds 10 september 2026 bouwt Stijn alleen verder.

**Stack:** React Native met Expo en expo-router, Supabase voor backend en auth, iOS en Android.

**Bouwer:** [@stinoe21](https://github.com/stinoe21). Tot 10 september 2026 met [@Cschoorl](https://github.com/Cschoorl) (structuur, pagina's, productlogica) en [@maxhelmantel-gif](https://github.com/maxhelmantel-gif) (design system, visuele consistentie).

**Userflow:** [Figma board](https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow)

---

## Nieuw in dit project?

Lees **[ONBOARDING.md](ONBOARDING.md)**. Daar staat alles: clonen, git instellen, tokens aanmaken, MCP's activeren. Reken op ongeveer 45 minuten.

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

**Stand 18 september 2026: de app is gebouwd en staat op `main`.**

- **De backend**: het Supabase-schema met de anonieme collectieve store in `supabase/`, zeven migraties, en het controlescript `supabase/tests/anonimisering.sql`.
- **Het design system** in `packages/ui`: tokens, assets, de vijf lettertypes, de specificatie van 41 uitgewerkte schermen, en de componenten.
- **De app** in `apps/mobile`: Expo SDK 57 met expo-router. Alle schermen uit `docs/scope.md`, plus wat er sindsdien bij kwam: Tips met gidsen en zelftests, challenges als pad, het mentale weer per provincie, accountherstel, hulp en uitleg, en een noodrem. `npm install` en `npm start`, en hij loopt op Expo Go en op de Simulator.
- **De controles**: `npm run typecheck`, `npm run lint` en `npm test`, lokaal en in de CI.

Wat er nog moet voor de stores staat niet in deze README maar in `docs/scope.md` en `docs/privacy-besluiten.md`. In het kort:

- [ ] **Bij MIND en Paul:** de ontwikkelaarsaccounts, de DPIA, de privacyverklaring, de voorwaarden, de naam en het bundelnummer, het akkoord op de content en de positionering van de zelftests.
- [ ] **Storeklaar:** een app-icoon, de bouwstraat naar de stores (EAS), het privacymanifest, de Android-ronde, een eigen mailserver, het productieproject bij MIND en het inplannen van het opruimen van inactieve accounts.
- [ ] **Testen** met echte mensen via TestFlight en de interne test van Google.
- [ ] Kiezen welk framework `apps/admin` krijgt en waar die gedeployed wordt.
