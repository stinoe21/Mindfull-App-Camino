# Design system

Het grootste risico bij drie parallelle agents is niet een merge-conflict. Dat is zichtbaar en oplosbaar. Het echte risico is dat het beeld langzaam uit elkaar loopt zonder dat iemand het merkt, want aan een diff zie je niet dat een scherm lelijk is geworden.

Daarom leunen we niet op review, maar op drie mechanismen die het structureel onmogelijk maken.

---

## 1. Eén tokenbestand, één eigenaar

Alle kleuren, spacing, radii, typografie, shadows en motion staan in `packages/ui/tokens`. Dat is de enige plek.

- Wie dat bestand wil wijzigen doet dat in een **aparte kleine pull request**, nooit als onderdeel van een feature.
- De eigenaar (zie `docs/taakverdeling.md`) reviewt elke wijziging daar.
- De **build** hangt nooit af van een live Figma-query. Tokens staan in git. Op de Camino heb je geen wifi te vertrouwen.

### Namen zijn semantisch, niet letterlijk

Een token heet naar zijn **rol**, niet naar zijn waarde. Dus niet `color/green500` maar:

```
color/background/default
color/text/primary
color/text/muted
color/action/primary
color/border/subtle
gradient/weather/cloudy
spacing/16
radius/card
```

Waarom dit hard is: zonder afgesproken naamruimte verzinnen drie agents er drie, en dan heb je `colors.primary`, `color/action/primary` en `brand.green` naast elkaar staan. De lint-regel vangt hardcoded waarden, geen inconsistente namen. Dat kan alleen een afspraak.

Eén naam die er expliciet **niet** komt: er is geen `color/mood/good` of `color/mood/bad`. Weertypen zijn gelijkwaardig, zie `productprincipes.md` principe 3. Een weertype krijgt een neutrale naam naar het weer zelf, nooit naar een waardering.

**De definitieve lijst wordt afgeleid uit het Figma-bestand**, niet hier verzonnen. Het patroon hierboven is de vorm, de inhoud komt uit Foundations. Zodra dat is uitgelezen komt de volledige lijst in `packages/ui/tokens` en is dit document daar de beschrijving van.

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

## 4. Assets zijn een bibliotheek, geen map

Dit is het mechanisme dat we bijna vergaten, en juist bij deze app het meest kan kosten. De hele app rust op een weermetafoor, dus iconen, gradients en achtergronden zijn geen decoratie maar de kern van de betekenis. Een agent die er zelf een weericoon bij tekent in een andere stijl, breekt de metafoor waarvoor we nog goedkeuring van Mind moeten krijgen.

Wat onder beheer staat:

| Soort | Regel |
|---|---|
| Navigatie-iconen | Vaste set, als component of instance. Geen losse SVG's ernaast. |
| Actie-iconen | Idem. |
| Weer-iconen | **De set is gesloten.** Er is er precies één per weertype uit `datamodel.md`. Geen tussenvormen, geen varianten. |
| Achtergrondillustraties en textures | Vaste namen, vaste toepassingsregels. |
| Gradients | Als token, niet als losse CSS. Zie `gradient/weather/*`. |
| Onboarding-illustraties | Vaste set, hoort bij de schermen uit de flow. |

Harde regels voor een agent:

- **Introduceer nooit een nieuwe iconstijl** en meng geen twee sets.
- **Zet nooit een willekeurige afbeelding of stockfoto in de app.** Ook niet als placeholder, want placeholders blijven staan.
- Mis je een asset, dan is dat een blokkade die je meldt, geen probleem dat je zelf oplost.
- Assets staan in de repo, niet in een live Figma-query. Zelfde reden als de tokens.

---

## Componenten

Elke component heeft **alle** states, niet alleen de mooie:

```
default    pressed    focused    disabled
loading    error      empty      success
```

Zoek altijd eerst in `packages/ui/components` voordat je iets nieuws bouwt. Een tweede Button die net iets anders is, is hoe een design system sterft.

Een component legt zijn varianten vast als properties, niet als losse copieën:

```
Button
  type:  primary | secondary | ghost
  size:  small | default
  state: default | pressed | disabled
  icon:  none | left | right
```

### De set voor v1

Vóór vertrek bouwen, in alle states. Bouw ze niet onderweg, want dan bouwt iedereen tegelijk zijn eigen variant.

| Component | Waarvoor | Board |
|---|---|---|
| Button | Overal | |
| Input | Inloggen, zoeken | `12:149`, `12:191` |
| Navigation | Zeven bestemmingen vanaf het dashboard | `12:173` |
| Card | Basis voor de drie kaarten hieronder | |
| Weather option | De keuze in de weer-check-in | `12:182` |
| Challenge card | Challenges op weekbasis, kernfunctie | `12:185` |
| Content card | Persoonlijk naslagwerk | `12:188` |
| Quote card | Dagelijkse quote, voor iedereen gelijk | `12:179` |
| Search result | **Toont altijd de bronpagina.** Geen chat, geen gegenereerd antwoord. | `12:191` |
| Collective weather | Het weerbericht van Nederland | `12:202` |
| Consent row | Twee losse consents, apart intrekbaar | `12:136`, `12:139` |
| Settings row | Profiel en instellingen | `12:194` |
| Support CTA | De MIND Hulplijn, **persistent op elk scherm** | `12:176` |
| Gate screen | De verplichte stappen zonder Skip | `74:230`, `12:155` |
| Bottom sheet | | |
| Toast | Feedback en foutmeldingen | |

Drie daarvan hebben een eis die geen designkeuze is:

- **Collective weather** heeft een verplichte lege staat. Het landelijke weerbericht mag pas getoond worden **boven een minimum aantal deelnemers**, anders is een uitkomst herleidbaar naar personen. Zie het board, connector `12:308`, en `datamodel.md`. Die staat is dus geen randgeval maar een privacymaatregel, en hij moet in de kitchen sink staan.
- **Support CTA** is persistent op elk scherm en hoort dus in de root layout van expo-router. Dat is een gedeeld bestand: dat is een eigen taak van de eigenaar, geen bijvangst van een feature.
- **Search result** toont altijd de bron. Bouw hier nooit een variant zonder bronvermelding, zie `productprincipes.md` principe 10.

## Patterns

Tussen losse componenten en volledige schermen zit een laag die we misten. Een pattern is een vaste combinatie die meerdere keren terugkomt, met een vaste opbouw:

```
onboarding page      titel, illustratie, korte tekst, één primaire actie
gate page            verplichte stap, geen Skip, geen weg terug omheen
selection page       een keuze uit een gesloten set
consent page         uitleg, wat er gebeurt, wat er niet gebeurt, expliciete keuze
dashboard section    kop, inhoud, en een lege staat die niet leeg voelt
detail page          één onderwerp, één actie
settings list        rijen, groepen, en de destructieve actie onderaan
empty state          altijd ontworpen, nooit een lege lijst
error state          begrijpelijke taal, een uitweg, geen technische code
```

Bouw een nieuw scherm door een pattern te kiezen en te vullen, niet door componenten vanaf nul te stapelen. Past het scherm in geen enkel pattern, dan is dat het gesprek waard voordat je begint.

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

Staat geconfigureerd in `.mcp.json`. Bij het eerste gebruik autoriseer je via de browser. Zie `ONBOARDING.md` stap 3.

Nuttig om te vragen:

- de variables uit het Foundations-bestand, om tokens uit af te leiden
- een specifiek frame, met de node-ID uit de Figma-URL
- welke componenten er in de library staan

Wat je er **niet** mee doet: rechtstreeks Figma-output als code in de repo plakken. Dat levert altijd hardcoded waarden op, en dan doet de lint-regel zijn werk en heb je het dubbel gedaan.

---

## Figma-bestanden

**Userflow (board, FigJam):**
https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow

Dit is een **board**, geen design file, en dat vraagt een ander gereedschap. Gecontroleerd op 29 juli 2026: de MCP leest het board volledig uit, inclusief alle vormen, verbindingen en labels. Handmatig overtypen naar `docs/scope.md` is dus niet nodig.

Vraag het zo op, met de tool `get_figjam` en niet met `get_design_context`:

```
fileKey: jwNUZRHmpKfqTCeUnFcVdP
nodeId:  0:1        (de root, dus het hele board)
```

De blauwe cilinders op het board (`ENG_DATABASE`) markeren per stap welke data wordt opgeslagen. Dat is de bron voor `docs/datamodel.md`, inclusief de grondslag per veld.

**Design file:** TODO, nog aanmaken. Hier komen Foundations, Components en Screens.

## Figma-bestandsstructuur

De opbouw loopt één richting op: elke laag gebruikt alleen wat eronder al vastligt.

```
00 Foundations       kleuren, typografie, spacing, radii, motion
01 Assets            iconen, illustraties, textures, gradients
02 Components        met alle states
03 Patterns          vaste combinaties, zie hierboven
04 Reference Screens drie tot vijf volledig uitgewerkte schermen
05 Full Flow         de complete flow, samengesteld uit het bovenstaande
06 Agent Playground  waar nieuwe output landt
```

**TODO:** dit afstemmen met de styleguide die al bestaat. Wijkt die af, dan wint wat er staat: dit is de voorgestelde ordening, geen herindeling van iemands werk.

Koppel elk scherm uit `docs/scope.md` aan zijn node-ID. Dan kan een agent het juiste frame ophalen zonder te zoeken.

### Reference screens eerst

Werk drie tot vijf schermen volledig uit voordat de rest wordt ontworpen. Die schermen zijn daarna de visuele maat: elk volgend scherm wordt daaruit afgeleid in plaats van opnieuw bedacht.

Op basis van de userflow zijn dit de logische vijf:

| Scherm | Waarom dit een referentie is |
|---|---|
| Dashboard, Mijn Mentale Weer | De spil van de app, en het scherm met de meeste soorten inhoud naast elkaar |
| Weer-check-in | Hier gebeurt de kernhandeling, en de toon is hier het meest kwetsbaar |
| Challenge detail | Het patroon voor alle detailpagina's |
| Naslagwerk-artikel | Het patroon voor content en voor bronvermelding |
| Profiel en instellingen | Het patroon voor lijsten, en waar consent wordt ingetrokken |

### Agent Playground

Nieuwe output van een agent, of een variant waar nog niet over besloten is, landt op **06 Agent Playground**. Niet in Foundations, niet in Components, niet in de goedgekeurde reference screens.

Dat is dezelfde regel als onze branches, alleen in Figma: je werkt naast het goedgekeurde werk en het wordt pas onderdeel daarvan als de eigenaar het overzet. Zonder deze afspraak is één enthousiaste agent genoeg om een component library stil te laten wegdrijven.
