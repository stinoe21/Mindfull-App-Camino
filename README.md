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
| [docs/privacy-besluiten.md](docs/privacy-besluiten.md) | Wat is afgesproken met Mind, wat staat nog open, en wie is aan zet |
| [docs/design-system.md](docs/design-system.md) | Tokens, assets, componenten, patterns, en hoe Figma en de repo zich verhouden |
| [docs/setup-github.md](docs/setup-github.md) | Eenmalige repo-instellingen, door de eigenaar |

## Skills

Deze laden automatisch bij alle drie de teamleden. Aanroepen kan ook expliciet:

| Skill | Waarvoor |
|---|---|
| `/werkwijze` | De git-workflow: rebase, force-with-lease, squash merge, conflicten |
| `/nieuwe-feature` | Een feature bouwen van begin tot eind, met de definition of done |
| `/pr-check` | Een pull request van een teamgenoot reviewen |

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

Het samenwerkingsraamwerk staat. De app zelf nog niet. Eerstvolgende stappen:

- [ ] Apple Developer-account regelen (langste doorlooptijd, dus als eerste)
- [ ] **Kiezen: monorepo (`apps/mobile` plus `packages/ui`) of één platte Expo-app.** Nu gratis, na het scaffolden duur. Alle padverwijzingen in `CLAUDE.md`, `CODEOWNERS` en `design-system.md` gaan uit van de monorepo.
- [ ] Scope v1 vastleggen in `docs/scope.md`
- [ ] Expo-app scaffolden, CI groen krijgen op alle drie de laptops
- [ ] Design tokens plus de basiscomponenten, in alle states
- [ ] Elk scherm uit de userflow als leeg routebestand aanmaken
- [ ] Userflow vertalen naar 15 tot 20 taken op het board
