# Design system

Het grootste risico bij drie parallelle agents is niet een merge-conflict. Dat is zichtbaar en oplosbaar. Het echte risico is dat het beeld langzaam uit elkaar loopt zonder dat iemand het merkt, want aan een diff zie je niet dat een scherm lelijk is geworden.

Daarom leunen we niet op review, maar op drie mechanismen die het structureel onmogelijk maken.

---

## 1. Eén tokenbestand, één eigenaar

Alle kleuren, spacing, radii, typografie, shadows en motion staan in `packages/ui/tokens`. Dat is de enige plek.

- Wie dat bestand wil wijzigen doet dat in een **aparte kleine pull request**, nooit als onderdeel van een feature.
- De eigenaar (zie `docs/taakverdeling.md`) reviewt elke wijziging daar.
- De **build** hangt nooit af van een live Figma-query. Tokens staan in git. Op de Camino heb je geen wifi te vertrouwen.

## 2. Een lint-regel die hardcoded waarden weigert

Ongeveer twintig regels ESLint-config, en verreweg de goedkoopste maatregel met de grootste opbrengst. Het maakt het voor een agent onmogelijk om "even snel `#4A7C59`" te schrijven.

Geweigerd in `apps/**` en `packages/ui/components/**`:

- hexcodes, `rgb()`, `rgba()`, `hsl()`
- losse getallen in `padding`, `margin`, `gap`, `borderRadius`, `fontSize`
- inline `shadowColor`, `shadowOffset` en vergelijkbaar

**TODO:** opzetten zodra de Expo-app gescaffold is. Dit is één van de eerste taken, vóór er features gebouwd worden. Anders sluit je de deur nadat het paard weg is.

## 3. Een kitchen sink-scherm

`apps/mobile/src/app/_dev/kitchen-sink.tsx`: één verborgen route waar elke component in elke state staat.

Eén screenshot en je ziet of er iets stuk is. Verplicht bij te werken zodra je een component maakt of wijzigt. Dit staat in de definition of done.

---

## Componenten

Elke component heeft **alle** states, niet alleen de mooie:

```
default    pressed    focused    disabled
loading    error      empty      success
```

Zoek altijd eerst in `packages/ui/components` voordat je iets nieuws bouwt. Een tweede Button die net iets anders is, is hoe een design system sterft.

**TODO:** de tien componenten voor v1 vastleggen en vóór vertrek bouwen, in alle states. Bouw ze niet onderweg, want dan bouwt iedereen tegelijk zijn eigen variant.

---

## Figma en Claude Design

We gebruiken drie plekken en die hebben elk één rol. Door elkaar halen is waar het misgaat.

| Waar | Rol |
|---|---|
| **Figma** | Bron voor userflow, dataflow en hoe schermen eruitzien. Leesbaar via de Figma MCP. |
| **De repo** | Bron voor de code. Tokens, componenten en assets staan hier en dit is wat de build gebruikt. |
| **Claude Design** | Gedeelde visuele bibliotheek die we alle drie zien, gesynchroniseerd via `/design-sync`. |

De volgorde is belangrijk: **tokens vaststellen in de repo, dan componenten bouwen, dan naar Claude Design pushen als gedeelde referentie.** Niet andersom, want dan wordt design de bottleneck en zit er iemand te wachten op een plaatje.

### Figma MCP gebruiken

Staat geconfigureerd in `.mcp.json`. Bij het eerste gebruik autoriseer je via de browser. Zie `ONBOARDING.md` stap 4.

Nuttig om te vragen:

- de variables uit het Foundations-bestand, om tokens uit af te leiden
- een specifiek frame, met de node-ID uit de Figma-URL
- welke componenten er in de library staan

Wat je er **niet** mee doet: rechtstreeks Figma-output als code in de repo plakken. Dat levert altijd hardcoded waarden op, en dan doet de lint-regel zijn werk en heb je het dubbel gedaan.

---

## Figma-bestandsstructuur

**TODO:** afstemmen met wat er al staat.

```
00 Foundations      kleuren, typografie, spacing, radii, motion
01 Components       met alle states
02 Patterns
03 Userflow
04 Dataflow
05 Screens
06 Prototype
07 Archive
```

Koppel elk scherm uit `docs/scope.md` aan zijn node-ID. Dan kan een agent het juiste frame ophalen zonder te zoeken.
