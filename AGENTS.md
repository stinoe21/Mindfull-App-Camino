# AGENTS.md

**Lees eerst [CLAUDE.md](CLAUDE.md). Dat is het volledige contract voor dit project en het geldt voor jou net zo goed.**

Dit bestand bestaat omdat niet elke agent `CLAUDE.md` automatisch laadt. Wij gebruiken naast Claude Code ook **Cursor** en **Codex**, en die lezen `AGENTS.md`. Zonder dit bestand zou een agent daar zonder enige projectafspraak beginnen.

Dit is dus geen tweede regelset. Bij twijfel of tegenspraak wint `CLAUDE.md`.

---

## De regels die je in geen geval mag missen

Ook als je verder niets leest:

1. **Log nooit inhoudelijke gebruikersinvoer.** Niet naar de console, niet naar een crash reporter, niet naar analytics, ook niet tijdelijk om te debuggen. Dit is een app over mentale gezondheid.
2. **Push nooit naar `main`.** Werk op een branch, ga via een pull request. `main` is technisch beschermd.
3. **Voeg geen dependency toe.** Vraag ernaar.
4. **Geen hardcoded kleuren, spacing, radii, font sizes of shadows.** Altijd via de tokens uit `packages/ui/tokens`.
5. **Raak geen gedeelde bestanden aan** buiten de scope van je taak. De lijst staat in `CLAUDE.md` sectie 5.
6. **Verzin geen tabel, veld, analytics-event of hulptekst.** Staat het niet in `docs/datamodel.md` of `docs/scope.md`, dan bestaat het niet en vraag je ernaar.

Melden dat iets niet kan binnen deze grenzen is een geldig eindresultaat. Een taak half afmaken zonder het te melden is dat niet.

## Eigenaarschap is geen schrijfrecht

In `docs/taakverdeling.md` staat per gebied één eindverantwoordelijke. Dat betekent dat die persoon reviewt en de knopen doorhakt.

Het betekent **niet** dat alleen die persoon daar mag werken, en het betekent niet dat een wijziging van iemand anders geweigerd hoort te worden. We hebben daarom bewust geen verplichte Code Owner-review op de repo staan, zie `docs/setup-github.md`. Iedereen mag overal aan werken, met één review als kwaliteitscheck.

## Waar je de rest vindt

| Vraag | Document |
|---|---|
| Wat bouwen we wel en niet | `docs/scope.md` |
| Hoe de app zich hoort te gedragen | `docs/productprincipes.md` |
| Tokens, componenten, assets, Figma | `docs/design-system.md` |
| Welke data we opslaan en hoe lang | `docs/datamodel.md` |
| Wat met Mind is afgesproken over privacy | `docs/privacy-besluiten.md` |
| Wie waar eigenaar van is | `docs/taakverdeling.md` |
| De git-workflow | `.claude/skills/werkwijze/SKILL.md` |

## Voor je klaar bent

Rapporteer welke bestanden je hebt aangepast en welke aannames je hebt gedaan. Draai `npm run typecheck`, `npm run lint` en `npm test` als die er zijn. De volledige definition of done staat in `CLAUDE.md` sectie 7.
