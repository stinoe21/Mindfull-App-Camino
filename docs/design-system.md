# Design system

Het grootste risico bij drie parallelle agents is niet een merge-conflict. Dat is zichtbaar en oplosbaar. Het echte risico is dat het beeld langzaam uit elkaar loopt zonder dat iemand het merkt, want aan een diff zie je niet dat een scherm lelijk is geworden.

---

## 0. Stand van zaken, lees dit eerst

**Sinds 20 augustus 2026 staat het design system in de repo, in `packages/ui`.** Overgenomen uit de Claude Design-export `Weerbericht Design System.zip`, opgebouwd uit het Figma-bestand *Back-to-Being, App Design Volledige appflow* met 41 uitgewerkte schermen.

Dat verandert het karakter van dit document. Grote delen hiervan beschreven vóór die datum een **plan**: welke tokens we zouden afleiden, welke componenten we zouden bouwen, hoe de Figma-structuur eruit zou moeten zien. Dat is nu grotendeels geen plan meer maar een gegeven.

Wat er nu ligt:

| | Status |
|---|---|
| Tokens: kleuren, typografie, spacing, radii | **Vastgelegd.** `packages/ui/tokens`, ook als TypeScript voor React Native. |
| Assets: mascotte, zes hero-achtergronden, nav-icoon | **In de repo**, gecomprimeerd. `packages/ui/assets`. |
| De vijf lettertypes die de typeschaal gebruikt | **In de repo**, met licentie. `packages/ui/assets/fonts`. |
| Schermregels, ontwerpprincipes, letterlijke teksten | **Vastgelegd.** `packages/ui/reference/HERKOMST.md`. |
| Componentspecificatie: maten, varianten, vectorpaden | **Vastgelegd** als React DOM. `packages/ui/reference/components`. |
| 41 schermen, klikbaar prototype | **Aanwezig.** `packages/ui/reference/ui_kits/mind-app/index.html`. |
| De app die dit alles toont | **Draait**, sinds 20 augustus 2026. `apps/mobile`, Expo SDK 57. |
| De vijf lettertypes geladen in de app | **Gedaan.** `apps/mobile/src/theme/fonts.ts` en de root layout. |
| De lint-regel tegen hardcoded waarden | **Staat aan**, sinds 20 augustus 2026. `eslint.config.js`. Kleur en typografie zijn een fout, losse maten een waarschuwing. |
| Het kitchen sink-scherm | **Staat er**, op `/_dev/kitchen-sink`: de typeschaal, alle kleuren, en een link naar elk scherm. |
| React Native-componenten | **Nog niet gebouwd.** `packages/ui/components` is leeg. Dat is het echte bouwwerk. |

De skill `mind-design` laadt automatisch en wijst je bij elke visuele vraag het juiste bestand aan. Gebruik die in plaats van te zoeken.

**Wat er moet gebeuren om dit in React Native te krijgen, staat als afvinklijst in `van-ontwerp-naar-app.md`.** Dat is de plek om te beginnen als je gaat bouwen.

**De belangrijkste gedragsregel is niet veranderd, alleen makkelijker geworden: verzin geen waarde, zoek hem op.** Vóór 20 augustus kon dat niet, want er was niets om op te zoeken. Nu wel, en daarmee vervalt het excuus.

---

## 1. Waar wat staat, en welke laag wint

Drie plekken, elk met één rol. Door elkaar halen is waar het misgaat.

| Waar | Rol |
|---|---|
| **Figma** | Waar het ontwerp gemaakt wordt. Bron voor wat er nog niet in de repo zit. |
| **Claude Design** | De gedeelde visuele bibliotheek die we alle drie zien. Hier is het design system samengesteld. |
| **De repo** | Bron voor de code. Tokens, assets en specificatie staan hier, en dit is wat de build gebruikt. |

**De repo wint bij twijfel.** Dat is de omkering ten opzichte van hoe dit document er vóór 20 augustus stond, en het is bewust. Toen was er niets in de repo, dus won Figma. Nu is `packages/ui` het overgenomen resultaat van het ontwerpwerk, en is Figma de plek waar het volgende ontwerp gemaakt wordt. Wijkt een frame af van een token, dan is dat een gesprek en geen vrijbrief om het token te negeren.

De **build hangt nooit af van een live Figma-query of een live Claude Design-query.** Tokens en assets staan in git. Op de Camino heb je geen wifi te vertrouwen, en een agent die op een netwerkaanroep wacht om een kleur te weten, staat stil.

### Werkvolgorde als er iets wijzigt

```
ontwerp in Figma  ->  samenstellen in Claude Design  ->  overnemen in packages/ui  ->  bouwen
```

Eén richting op. Neem je iets over, doe dat dan in een **eigen kleine pull request** die binnen een halfuur gemerged wordt, nooit als bijvangst van een feature. `packages/ui/tokens/**` staat niet voor niets op de lijst in `CLAUDE.md` sectie 5.

---

## 2. Tokens

Alles staat in `packages/ui/tokens`. Dat is de enige plek. Zie `packages/ui/README.md` voor hoe je ze wijzigt en opnieuw genereert.

### Twee vormen, één bron

De CSS-bestanden zijn de bron. `tokens.ts` wordt eruit gegenereerd met `node packages/ui/tokens/generate.mjs`.

Waarom niet één: de adminwebapp en Claude Design lezen CSS-variabelen, React Native kan dat niet. Eén bron met een generator is beter dan twee lijsten die uit elkaar lopen zonder dat iemand het merkt. Wijzig `tokens.ts` dus nooit met de hand.

### Drie lagen, en componenten raken maar één daarvan

```
primitief              semantisch                 component
palette.primary700  -> colors.brandDefault     -> <Button variant="primary">
palette.accentLime  -> colors.ctaDefault
palette.baseCream   -> colors.surfaceBackground
```

Componentcode gebruikt **alleen de middelste kolom**. Zo kan een kleur wijzigen zonder dat er één component wordt aangeraakt.

De semantische laag telt nu elf namen. Dat is dun, en dat is oké: hij groeit als je merkt dat je een primitieve naam voor de tweede keer nodig hebt, niet vooraf. Het alternatief, vooraf vijftig rollen verzinnen, levert veertig namen op die niemand gebruikt en die wel onderhouden moeten worden.

### De naamgeving is die van de export, niet die van ons oude voorstel

Dit document stelde eerder `color/action/primary` voor, met schuine strepen. De export gebruikt `--primary-700` en `--cta-default`, en `tokens.ts` maakt daar `palette.primary700` en `colors.ctaDefault` van.

**De export wint.** Niet omdat die vorm beter is, maar omdat de tokens er al in staan en een hernoeming alleen maar kost. Eén naamruimte is het punt, welke van de twee is het niet.

### De enige tokenregel die niet onderhandelbaar is

**Er komt geen `mood/good` of `mood/bad`, in geen enkele vorm.** Weertypen zijn gelijkwaardig, zie `productprincipes.md` principe 3. De weertokens heten naar het weer, `weatherSun` en `weatherRain`, nooit naar een waardering.

De feedbackkleuren (`feedbackSuccess`, `feedbackWarning`, `feedbackError`) bestaan in de tokens maar komen in geen van de 41 schermen voor. Ze zijn er voor **systeemfeedback**: formuliervalidatie, een mislukte verbinding. Gebruik ze daar en nergens anders. Iemands stemming krijgt geen stoplichtkleur.

### Tokens gelden ook voor de webapp, componenten niet

De adminpagina en de analyticspagina worden een webapp, zie `scope.md`. De tokens zijn platte waarden en gelden daar net zo goed, en dat is precies waarom ze in een eigen package staan in plaats van in de app. Voor de webapp is `packages/ui/tokens/index.css` het startpunt.

De componenten in `packages/ui/components` worden React Native-componenten en draaien **niet** in een gewone webapp. Wat je hergebruikt is de laag eronder: kleuren, spacing, typografie, radii. Dat is genoeg om de twee op elkaar te laten lijken en het is de enige laag die de overstap zonder gedoe overleeft.

Dat is ook geen verlies, want de webapp is een CMS voor medewerkers van Mind en niet iets dat een gebruiker ziet. Hij moet werkbaar zijn en niet stuk lijken. Alles wat daar in ontwerp in gaat zitten, gaat niet in de app zitten, en de app is wel wat beoordeeld wordt.

---

## 3. De schermregels

Dit is de sectie die er vóór de overname niet was, en het is de sectie die het beeld bij elkaar houdt. De volledige tekst staat in `packages/ui/reference/HERKOMST.md` onder *Screen layout rules*. Samengevat:

1. **De gradient is de paginaachtergrond.** Het weerbeeld vult het scherm achter alles. Zet op een gewoon scherm nooit tekst rechtstreeks op de gradient.
2. **Eén beige vel per scherm.** Alle inhoud zit in één kaart met radius 20, met 8 pixels marge links, rechts en onder, zodat er een randje gradient zichtbaar blijft. Het vel begint hoog; lager alleen op uitkomst- en felicitatieschermen.
3. **Vulling in het vel is 20.** Alleen een shelf loopt door tot de rand.
4. **Kaarten hebben 18 of 20 vulling, radius 16, 6 tussenruimte.** Eén kaartvorm, alleen hergekleurd.
5. **Elke verzameling krijgt een sectiekop.** Secties staan 28 uit elkaar, kop naar inhoud is 12.
6. **Shelf of grid, nooit allebei in één sectie.** Shelf voor een open einde, grid van twee gelijke kolommen voor een eindige set. Geen mozaïek.
7. **Ritme boven variatie.** Een scherm leest: titel, één leidende kaart, dan secties. Varieer de kleur en het sectietype, nooit de kaartvorm of de vulling.
8. **Spacing komt van de 4px-schaal.** Wat ertussen zit is een fout, geen keuze.

Dit zijn regels en geen suggesties. Ze zijn afgelezen uit 41 schermen die er al zijn, dus een scherm dat zich er niet aan houdt valt op.

**Bouw een nieuw scherm door deze opbouw te vullen, niet door componenten vanaf nul te stapelen.** Past het scherm er niet in, dan is dat het gesprek waard voordat je begint.

---

## 4. Componenten

Zoek altijd eerst in `packages/ui/components`, en daarna in `packages/ui/reference/components`. Een tweede Button die net iets anders is, is hoe een design system sterft.

### De set die uit het ontwerp komt

Deze vijftien staan als specificatie klaar in `reference/components`, met exacte maten en varianten. Ze moeten nog naar React Native.

| Component | Waarvoor |
|---|---|
| `ScreenCanvas` | Het schermomhulsel: gradient, vel, marges. Elk scherm zit erin. |
| `Button` | Pilvorm, `primary` (lime), `secondary` (outline), `link`. |
| `Card` | Eén vorm, radius 16, vijf kleurvullingen. |
| `Chip` | Onderwerp- en categorielabel. |
| `Slider` | De check-in-invoer. Twee uiteinden, geen oordeel. Vier hiervan vormen de hele check-in. |
| `ContentSection` | Sectiekop met serif-titel, optionele regel en actie rechts. |
| `ContentShelf` + `ShelfCard` | Horizontale rij voor een open verzameling, met de volgende kaart net zichtbaar. |
| `ContentGrid` + `ContentCard` | Twee gelijke kolommen voor een eindige set. |
| `MascotteVlieger` | De vlieger in zeven stemmings- en weerstaten. |
| `MascotteInput` | Eén pose per check-invraag. **Andere familie dan hierboven, niet door elkaar halen.** |
| `NavigationBar` | Zwevende tabbalk met vijf bestemmingen. |
| `BackgroundHeroBand` | De hero van 200 hoog voor gewone schermen, zes weerstaten. |
| `BackgroundHeroGradient` | De hero van 480 hoog voor uitkomstschermen, zes weerstaten. |

Daarnaast staat er in `reference/components/library` een set geleende generieke besturingselementen: invoervelden, iconen, "Ga verder met Apple", "Ga verder met Google", een contactformulier. Die worden echt gebruikt door de onboarding- en formulierschermen. Grijp daarnaar voor auth en generieke formulieren in plaats van iets nieuws te tekenen.

### Wat de app nodig heeft en het ontwerp nog niet levert

Drie eisen uit `scope.md` en `datamodel.md` hebben geen component in de export. Dat zijn geen designkeuzes maar productvereisten, en ze blijven staan:

- **Collectief weerbericht met een verplichte lege staat.** Het landelijke weerbericht mag pas getoond worden **boven een minimum aantal deelnemers**, anders is een uitkomst herleidbaar naar personen. Zie het board, connector `12:308`, en `datamodel.md`. Die staat is dus geen randgeval maar een privacymaatregel, en hij moet in de kitchen sink staan.
- **De MIND Hulplijn is een route die overal bereikbaar is.** `HERKOMST.md` noemt dit een systeembreed punt, met de nuance dat het niet op letterlijk elk scherm hoeft. Waar hij wel en niet staat is een besluit dat nog niet genomen is, zie de open punten. Landt hij in de root layout van expo-router, dan is dat een gedeeld bestand en dus een eigen taak van de eigenaar.
- **Een zoekresultaat toont altijd de bronpagina.** Geen chat, geen gegenereerd antwoord. Zie `productprincipes.md` principe 10. Bouw hier nooit een variant zonder bronvermelding.

### Systeemstaten die nog ontworpen moeten worden

`HERKOMST.md` noemt ze bij naam, als bekende gaten: fout- en offlinestaat, leeg weerbericht ("Kom later terug"), geen zoekresultaten, content achter consent, verlopen sessie, de tips bij het eerste gebruik, challenge ontgrendeld en afgerond.

Dat ze benoemd zijn is winst: het is een lijst en geen verrassing. Maar de definition of done in `CLAUDE.md` sectie 7 eist een loading-, lege en foutstaat per scherm, en die staan dus nog niet in het ontwerp. Bouw je een scherm en heb je zo'n staat nodig, dan is dat een blokkade die je meldt.

### Alle states, niet alleen de mooie

```
default    pressed    focused    disabled
loading    error      empty      success
```

Let op één ding uit de export: de knoppen van MIND definiëren **geen** hover- of pressed-staat, want de app is alleen aanraakbediend. De geleende bibliotheekknop doet dat wel. Er staat niets in de weg om ze toe te voegen, maar het is dan onze afspraak en geen overgenomen ontwerp. Zet zo'n keuze in de kitchen sink, dan ziet iedereen hem.

---

## 5. Assets

De hele app rust op een weermetafoor, dus iconen, gradients en achtergronden zijn geen decoratie maar de kern van de betekenis. Een agent die er zelf een weericoon bij tekent in een andere stijl, breekt de metafoor waarvoor we nog goedkeuring van Mind moeten krijgen.

Wat er is, in `packages/ui/assets`:

| Map | Wat |
|---|---|
| `backgrounds/` | Zes hero-achtergronden: `default`, `zonnig`, `wolken`, `mist`, `wind`, `regen`. |
| `mascot/` | `mascot-main.svg` plus drie check-in-poses. |
| `nav/` | Het home-icoon van de tabbalk. |

De overige navigatie-iconen zijn **geen losse bestanden**: ze zitten als vectorpaden in `reference/components/NavigationBar.jsx`. Dat is geen omissie maar hoe ze zijn aangeleverd. Wie de tabbalk naar React Native brengt, haalt de paden daaruit.

Harde regels voor een agent:

- **Introduceer nooit zelf een icoon, illustratie of mascottepose.** De set is gesloten. Ook geen tussenvorm, ook geen variant.
- **Zet nooit een willekeurige afbeelding of stockfoto in de app.** Ook niet als placeholder, want placeholders blijven staan.
- Mis je een asset, dan is dat een blokkade die je meldt, geen probleem dat je zelf oplost. Dat geldt nu concreet voor de vierde check-in-pose, zie de open punten.
- Assets staan in de repo, niet in een live query. Zelfde reden als de tokens.

Comprimeer alles voordat het de repo in gaat, zie `assets-en-media.md`: iconen als SVG, illustraties als WebP op kwaliteit 80 tot 85, en niets groter dan de plek waar het staat. De export hield zich daar niet aan, en dat kostte 45 MB voor 176 KB aan beeld.

Content die **Mind zelf toevoegt** (artikelafbeeldingen, challenge-afbeeldingen) hoort niet hier maar in Supabase Storage. Dat is de scheiding uit `assets-en-media.md` en die verandert niet.

---

## 6. De lint-regel die hardcoded waarden weigert

Ongeveer twintig regels ESLint-config, en verreweg de goedkoopste maatregel met de grootste opbrengst. Het maakt het voor een agent onmogelijk om "even snel `#FEFEF4`" te schrijven.

Geweigerd in `apps/**` en `packages/ui/components/**`:

- hexcodes, `rgb()`, `rgba()`, `hsl()`
- losse getallen in `padding`, `margin`, `gap`, `borderRadius`, `fontSize`
- inline `shadowColor`, `shadowOffset` en vergelijkbaar

**TODO:** opzetten zodra de Expo-app gescaffold is. Dit is één van de eerste taken, vóór er features gebouwd worden. Anders sluit je de deur nadat het paard weg is.

`packages/ui/reference/**` valt hier expliciet buiten. Dat is overgenomen specificatie en geen code die meebouwt, en die staat vol letterlijke waarden omdat dat het punt ervan is.

## 7. Een kitchen sink-scherm

`apps/mobile/src/app/_dev/kitchen-sink.tsx`: één verborgen route waar elke component in elke state staat.

Eén screenshot en je ziet of er iets stuk is. Verplicht bij te werken zodra je een component maakt of wijzigt. Dit staat in de definition of done.

Tot dat scherm bestaat is `packages/ui/reference/ui_kits/mind-app/index.html` het dichtstbijzijnde: open dat in een browser en je ziet de hele flow.

---

## 8. Figma-bestanden

**Userflow (board, FigJam):**
https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow

Dit is een **board**, geen design file, en dat vraagt een ander gereedschap. Gecontroleerd op 29 juli 2026: de MCP leest het board volledig uit, inclusief alle vormen, verbindingen en labels.

Vraag het op met `get_figjam` en niet met `get_design_context`:

```
fileKey: jwNUZRHmpKfqTCeUnFcVdP
nodeId:  0:1        (de root, dus het hele board)
```

De blauwe cilinders op het board (`ENG_DATABASE`) markeren per stap welke data wordt opgeslagen. Dat is de bron voor `docs/datamodel.md`, inclusief de grondslag per veld.

**App Design Volledige appflow (design file):** het bestand waar het design system uit komt. Elf pagina's, waarvan `Foundations`, `MIND-Prototype-volledige-appflow` (41 schermen), `App-flow-v2`, `MIND-Prototype-uitleg` en twee pagina's met oudere schermen.

**We hebben hier geen URL van in de repo, en dat is een gat.** De export vermeldt het bestand als read-only gekoppeld, zonder publieke link. Zolang die link ontbreekt kunnen Max en Caesar niet bij de bron, alleen bij wat wij hebben overgenomen. Zie de open punten.

**Styleguide (design file), achterhaald:**
https://www.figma.com/design/H1EUAgE86CsYg0LfYTNd0M/Stylguide-App-MIND

Dit was tot 20 augustus 2026 de bron voor de tokens. Eén pagina, met een palet in vijf families (Blue, Red, Purple, Yellow, Violet) met een licht- en donkervariant en uitgezochte contrastratio's per tekstgrootte, plus een aanzet tot rollen (`Primary`, `Secundary`, `Base`).

**Ontwerp hier niet meer tegenaan.** Het is een ander en ouder bestand dan waar het design system uit komt, met een ander opgebouwd palet. Wat er staat is niet fout, maar het is niet wat de app gebruikt, en twee palletten naast elkaar is precies hoe het beeld uit elkaar loopt.

Twee dingen uit dat bestand zijn het bewaren waard en horen alsnog een plek te krijgen: de **contrastmetingen per tekstgrootte**, want dat is normaal het werk dat blijft liggen tot iemand er bij App Review op valt, en de vraag of er een **donkere modus** komt. Het nieuwe systeem heeft er geen, de oude styleguide wel. Zie de open punten.

De acht community-libraries die aan de oude styleguide hangen (Material 3, Simple Design System, iOS, macOS, watchOS, visionOS) waren een risico zolang onbeslist was of we een kit als basis namen. **Die vraag is beantwoord door de overname:** MIND heeft eigen componenten. De geleende bibliotheek in `reference/components/library` is bewust beperkt tot generieke besturingselementen die echt gebruikt worden. Gebruik een kit verder als referentie en niet als bron.

### Nieuwe output landt naast het goedgekeurde werk

Een variant waar nog niet over besloten is, hoort niet in Foundations, niet tussen de componenten en niet in de goedgekeurde schermen. Zet er een aparte pagina voor aan.

Dat is dezelfde regel als onze branches, alleen in Figma: je werkt naast het goedgekeurde werk en het wordt pas onderdeel daarvan als de eigenaar het overzet. Zonder deze afspraak is één enthousiaste agent genoeg om een component library stil te laten wegdrijven.

---

## 9. Wat open staat

Dit zijn beslissingen van ons drieën, geen vergeten werk. De technische varianten hiervan staan met meer detail in `packages/ui/README.md`.

| Wat | Waarom het nu telt |
|---|---|
| **Vier pakketten toevoegen** | `expo-image`, `expo-font`, `react-native-svg` en `expo-linear-gradient`. Alle vier zitten in Expo Go, dus geen development build en geen native configuratie. Zie `van-ontwerp-naar-app.md` deel 2. |
| **De vierde check-in-pose** | De mascotte voor `zicht` is nooit geëxporteerd. Eén van de vier vragen mist zijn beeld. Dit blokkeert de check-in, en dat is de kernhandeling. |
| **De mascotte-poses op 3x** | Nu 354 bij 136 pixels voor een weergave van 128 hoog. Op een retina-scherm wordt dat zacht. |
| **Een link naar het bronbestand in Figma** | Zonder die link kunnen Max en Caesar niet bij het ontwerp, alleen bij wat is overgenomen. |
| **Donkere modus: wel of niet** | Het overgenomen systeem heeft er geen. De oude styleguide had wel een licht- en donkervariant. Nu beslissen is goedkoop, later betekent het elke kleur opnieuw langslopen. |
| **Waar de Hulplijn zichtbaar is** | Systeembreed, maar niet per se op elk scherm. Zolang dat niet vastligt bouwt iedereen het net anders in. |
| **Contrastcontrole** | De oude styleguide had ratio's per tekstgrootte, het nieuwe systeem niet. Voor App Review en voor de doelgroep is dit geen detail. |
