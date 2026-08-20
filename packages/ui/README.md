# packages/ui

Het design system van Mentale Weerbericht. Overgenomen op 20 augustus 2026 uit de Claude Design-export `Weerbericht Design System.zip`, die op zijn beurt is opgebouwd uit het Figma-bestand *Back-to-Being, App Design Volledige appflow* (41 uitgewerkte schermen).

**Dit vervangt het plan dat in `docs/design-system.md` stond.** De tokens zijn niet meer af te leiden of te verzinnen, ze liggen vast. Zie dat document voor de afspraken eromheen, dit bestand voor hoe je het gebruikt.

```
tokens/       de bron: kleuren, typografie, spacing, radii, fonts
  *.css       wat de webapp en Claude Design lezen
  tokens.ts   GEGENEREERD, wat React Native leest
  generate.mjs
assets/       mascotte, hero-achtergronden, nav-icoon
reference/    de export zelf: componentspecificatie, specimen, klikbaar prototype
components/   hier komen de React Native-componenten, zie de README daar
```

---

## De drie lagen

```
primitief        semantisch                component
palette.primary700  ->  colors.brandDefault  ->  <Button variant="primary">
palette.accentLime  ->  colors.ctaDefault
palette.baseCream   ->  colors.surfaceBackground
```

Componentcode gebruikt **alleen de middelste kolom**. Zo kan een kleur wijzigen zonder dat er één component wordt aangeraakt. `palette` staat er voor de gevallen waar het echt niet anders kan, en elke keer dat je hem aanroept is dat het bespreken waard.

De semantische laag telt nu elf namen: `surfaceBackground`, `surfaceCard`, `textPrimary`, `textSecondary`, `textOnprimary`, `borderDefault`, `brandDefault`, `brandPressed`, `brandSubtle`, `ctaDefault`, `ctaText`. Dat is dun. Kleuren die nu nog primitief worden aangeroepen (de weertinten, coral, purple) horen daar op termijn ook een rol te krijgen. Doe dat als je merkt dat je een primitieve naam voor de tweede keer nodig hebt, niet vooraf.

**Er is geen `mood/good` of `mood/bad`, en die komt er ook niet.** Weertypen zijn gelijkwaardig, zie `docs/productprincipes.md` principe 3. De weertokens heten naar het weer (`weatherSun`, `weatherRain`), nooit naar een waardering. Dat is de enige tokenregel die niet onderhandelbaar is.

## Iets wijzigen

De CSS is de bron. `tokens.ts` is afgeleid.

```bash
# 1. wijzig het juiste bestand in tokens/
# 2. genereer opnieuw
node packages/ui/tokens/generate.mjs
# 3. commit beide, in een eigen kleine pull request
```

Wijzig **nooit** `tokens.ts` met de hand: de volgende generatie gooit het weg. Het script draait op Node stdlib en heeft geen dependency nodig.

Waarom twee vormen en niet één: de adminwebapp en Claude Design lezen CSS-variabelen, React Native kan dat niet. Eén bron met een generator is beter dan twee lijsten die uit elkaar lopen zonder dat iemand het merkt.

## Wat React Native niet zomaar overneemt

| Uit de export | Wat er in de app moet gebeuren |
|---|---|
| `tokens/fonts.css` importeert Google Fonts over het netwerk | Werkt niet in een app en niet offline. De drie families moeten meegebundeld worden. Zie open punten. |
| `letterSpacing` in `em` | Al omgerekend naar punten in `tokens.ts` (`labelOverline` staat op `0.66`). |
| `shadow.card` is een `inset` schaduw | React Native kent geen inset. Dit wordt `borderWidth: 1` met `borderColor: colors.borderDefault`. De token staat er als beschrijving, niet om door te geven aan een `style`. |
| Componenten in `reference/components/` zijn React **DOM** | `<div>`, `className`, CSS-variabelen. Ze draaien niet in React Native. Lees ze als specificatie, niet als code om te kopiëren. |
| Kleuren staan als `rgb(...)`-string | Dat begrijpt React Native gewoon. Niets aan doen. |

## reference/

De export, ongewijzigd op de assetverwijzingen na. Dit is de **specificatie** waar de React Native-componenten uit gebouwd worden, en het is de plek om te kijken voordat je een waarde verzint.

| Wat | Waarvoor |
|---|---|
| `HERKOMST.md` | De volledige beschrijving van het systeem: schermregels, ontwerpprincipes, de letterlijke check-in-teksten. **Lees dit voordat je een scherm bouwt.** |
| `components/*.jsx` + `*.prompt.md` | Per component de exacte maten, varianten en vectorpaden. De mascotte en de navigatiebalk staan er als echte paden in, niet als plaatje. |
| `guidelines/*.card.html` | De specimen: kleurstalen, de typeschaal, de schermregels. Los in een browser te openen. **Werkt offline.** |
| `ui_kits/mind-app/index.html` | Het klikbare prototype: dashboard, de vier check-in-stappen, uitkomst, challenges, naslagwerk, profiel. |
| `components/*.card.html` | Interactieve voorbeelden per component. |

**Let op met wifi.** De specimen in `guidelines/` zijn gewone HTML en CSS en werken zonder netwerk, op de fonts na: die komen van Google Fonts, dus zonder verbinding zie je de juiste maten in het verkeerde lettertype. Het prototype en de componentkaarten halen React en Babel van unpkg en doen het zonder netwerk **helemaal niet**. Op de Camino is `HERKOMST.md` plus de `.jsx`-bestanden dus je echte naslag, en niet het plaatje.

## Wat er is gewijzigd bij het overnemen

Drie dingen, alle drie bewust:

**1. Assets: 45 MB naar 176 KB.** De export had drie kopieën van dezelfde afbeeldingen onder hashnamen, in PNG, op volle resolutie. Het nav-icoon was 1850 bij 2304 pixels en 2,1 MB voor een tabbar-icoontje van 32 punten. Nu: één kopie, WebP kwaliteit 82, leesbare namen, het nav-icoon terug naar 96 pixels. Dat is wat `docs/assets-en-media.md` voorschrijft. Visueel gecontroleerd, er is geen zichtbaar verlies.

De zesde hero-achtergrond zat alleen onder een hashnaam in de componentmap en niet in `assets/`. Die heet nu `hero-default.webp` en hoort bij `state=default` van `BackgroundHeroBand`.

**2. `tokens/typography.css` is aangevuld.** De export liet bij `display`, `quote`, `body`, `body-small` en de labels de familie en het gewicht weg en leunde op de CSS-cascade. React Native heeft geen cascade: een `Text` zonder `fontFamily` valt stil terug op het systeemfont, en dan is Averia weg zonder dat je het aan een diff ziet. Elke rol staat nu compleet, met de specimen-kaarten als bron. Het genereerscript weigert voortaan een typerol zonder familie.

**3. `styles.css` is `tokens/index.css` geworden**, en het deel dat alleen de voorbeeldkaarten nodig hebben staat apart in `reference/preview.css`. Zo importeert de app niet per ongeluk de assetklassen van de geleende kit mee.

De originele zip blijft buiten git: 45 MB is te veel om drie mensen op Camino-wifi te laten klonen. Hij staat op de laptop van Stijn en het systeem staat in Claude Design.

## Open punten

Deze staan hier omdat ze een beslissing van ons drieën zijn, niet omdat ze vergeten zijn.

1. **WebP vraagt om `expo-image`.** Bevestigd in de documentatie: `expo-image` ondersteunt WebP op iOS, Android en web. De ingebouwde `<Image>` van React Native ondersteunt het ook, maar op Android alleen met een extra Fresco-dependency in `android/app/build.gradle`, en dat betekent in Expo een config plugin. `expo-image` is één `npx expo install` en is toch al wat je wil voor schermvullende beeldvlakken. Het blijft een dependency-besluit, zie `CLAUDE.md` sectie 5. Zeggen we nee, dan gaan de zes achtergronden terug naar PNG en kost dat ongeveer 2,6 MB in plaats van 127 KB.
2. **De fonts moeten mee de bundle in.** Averia Serif Libre, Averia Libre en Open Sans staan nu als Google Fonts-import, en dat werkt niet in een app zonder netwerk. Dit vraagt `expo-font` plus de fontbestanden in de repo. Ook een dependency-besluit.
3. **De mascotte voor `zicht` is nooit geëxporteerd.** `MascotteInput` valt voor die vraag terug op `mascot-main.svg`. Eén van de vier check-in-vragen mist dus zijn eigen beeld. Dit is een blokkade voor de check-in, geen randgeval.
4. **De drie mascotte-poses staan op 354 bij 136 pixels** en worden op 128 punten hoog getoond. Dat is ongeveer 1x, dus op een retina-scherm wordt het zacht. Ze horen op 3x geëxporteerd te worden, of als SVG zoals `mascot-main.svg` al is.
5. **`accent-h2-italic` wordt nergens gebruikt** en heeft geen familie. Niet zelf ingevuld, zie `CLAUDE.md`: wat niet is afgesproken vullen we niet in.
6. **`--font-ui` (Inter) is dood.** `HERKOMST.md` noemt de Inter-specificatie op de knop verouderd en zegt dat de typeschaal wint. De token staat er nog; weghalen kan zodra iemand bevestigt dat er niets aan hangt.
7. **De feedbackkleuren komen in geen enkel scherm voor.** Ze bestaan voor echte systeemfeedback (formuliervalidatie, foutmeldingen). Gebruik ze daar en nergens anders: de stemming van iemand krijgt geen stoplichtkleur.
8. **De componenten moeten nog naar React Native.** `components/` is nu leeg. Dat is bewust: dat is bouwwerk, geen overname.
