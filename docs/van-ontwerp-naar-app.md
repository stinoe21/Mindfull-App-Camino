# Van ontwerp naar app

Alles wat er moet gebeuren om het design system uit `packages/ui` één op één in React Native te krijgen, in volgorde. Afvinken en doorgaan.

Het doel is letterlijk: **een scherm in de app moet niet lijken op het ontwerp, het moet het ontwerp zijn.** Dat lukt alleen als de onderdelen vooraf kloppen, want een afwijking van twee punten valt pas op als er twintig schermen staan.

---

## Het goede nieuws vooraf

**Alles wat we nodig hebben zit in Expo Go.** Geen development build, geen Xcode, geen Android Studio, geen aanpassing in `build.gradle`. Gecontroleerd in de documentatie van Expo, niet uit het hoofd:

| Waarvoor | Pakket | In Expo Go |
|---|---|---|
| De WebP-achtergronden en alle afbeeldingen | `expo-image` | ja |
| De drie lettertypes | `expo-font` | ja |
| De mascotte en de navigatiebalk (die zijn vectors) | `react-native-svg` | ja |
| De vervaging van de hero naar de crèmekleur | `expo-linear-gradient` | ja |

Dat maakt de Camino een stuk eenvoudiger: `npx expo start`, QR-code scannen, klaar. Geen build die over slechte wifi moet.

**Let op de grens.** Expo Go is genoeg om te bouwen en te bekijken. Voor een echte release naar de App Store en de Play Store is een development build of EAS Build nodig, en dat regelt Mind samen met ons ná de Camino. Zie `scope.md`.

---

## Deel 0: wat al klaar is

Niet opnieuw doen.

- [x] **De tokens** staan in `packages/ui/tokens`, als CSS en als `tokens.ts`.
- [x] **De assets** staan in `packages/ui/assets`, gecomprimeerd. Zes hero-achtergronden, vier mascottebeelden, het nav-icoon.
- [x] **De vijf lettertypes** staan als `.ttf` in `packages/ui/assets/fonts`, met hun OFL-licentie ernaast. Niemand hoeft ze te zoeken of te downloaden.
- [x] **Elke typerol wijst naar één echt fontbestand.** `type.h1.fontFamily` is `"AveriaSerifLibre-Regular"` en niet een familie plus een gewicht. Zie de uitleg bij stap 3.
- [x] **De volledige specificatie** van 41 schermen staat in `packages/ui/reference`.

## Deel 1: de scaffold, eenmalig door de eigenaar

- [ ] **Expo-app scaffolden** met expo-router en TypeScript, in `apps/mobile`. Dit is een eigen PR, want het raakt `package.json` en `app.config.ts`.
- [ ] **De monorepo werkend maken**: `packages/ui` importeerbaar vanuit `apps/mobile`, plus Metro die buiten `apps/mobile` mag kijken.
- [ ] **`npm run typecheck`, `npm run lint` en `npm test` laten bestaan en groen zijn.** Zonder die drie is de definition of done in `CLAUDE.md` sectie 7 niet af te vinken.
- [ ] **CI groen op alle drie de laptops.**

Zolang dit niet af is kan niemand een scherm bouwen. Dit is de flessenhals, en het is één taak van één persoon.

## Deel 2: de vier pakketten

- [ ] `npx expo install expo-image expo-font react-native-svg expo-linear-gradient`

Vier stuks, alle vier in Expo Go, alle vier onvermijdelijk. `expo-image` is niet alleen voor WebP: hij doet ook de schijfcache en de overgang bij het laden, en dat wil je toch bij een schermvullend beeldvlak.

Dit is per `CLAUDE.md` sectie 5 een dependency-besluit, dus het hoort in dezelfde PR als de scaffold en niet in een feature.

## Deel 3: de lettertypes laden

Dit is de grootste bedreiging voor een één-op-één-weergave, en tegelijk het makkelijkst om fout te doen.

**Waarom het misgaat.** Op het web kies je een snit met `font-weight: 600` en pakt de browser de juiste uit de familie. React Native doet dat niet bij een eigen lettertype: op Android is de bestandsnaam de familienaam, en een gewicht dat je erbovenop zet levert een **nagemaakte** vetdruk op. Dan staat er tekst die net iets anders is dan het ontwerp, op elk scherm, en niemand kan aanwijzen waarom het niet klopt.

**Daarom staat er in `tokens.ts` bij elke typerol wel een `fontFamily` en geen `fontWeight` en geen `fontStyle`.** De snit draagt die al. Zet ze er niet alsnog bij.

- [ ] De vijf snitten laden, met precies deze namen als sleutel:

```ts
import { useFonts } from "expo-font";
import { fontFaces } from "@mind/ui/tokens/tokens";

const [klaar] = useFonts({
  "AveriaSerifLibre-Regular": require("@mind/ui/assets/fonts/AveriaSerifLibre-Regular.ttf"),
  "AveriaSerifLibre-Italic":  require("@mind/ui/assets/fonts/AveriaSerifLibre-Italic.ttf"),
  "AveriaLibre-LightItalic":  require("@mind/ui/assets/fonts/AveriaLibre-LightItalic.ttf"),
  "OpenSans-Regular":         require("@mind/ui/assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-SemiBold":        require("@mind/ui/assets/fonts/OpenSans-SemiBold.ttf"),
});
```

De sleutel moet letterlijk kloppen met wat `fontFaces` uit `tokens.ts` teruggeeft. Wijkt hij af, dan valt de tekst stil terug op het systeemfont en zie je dat pas op een telefoon.

- [ ] **Niets tekenen voordat ze geladen zijn.** Toon het splashscherm tot `klaar` waar is. Anders zie je één tel het verkeerde lettertype, en dat is precies het soort detail waar deze app op beoordeeld wordt.
- [ ] Dit hoort in de root layout van expo-router, en dat is een gedeeld bestand: eigen taak van de eigenaar.

## Deel 4: de vertaaltabel

Hier wordt één op één gewonnen of verloren. De componenten in `packages/ui/reference` zijn React **DOM**. Dit is wat elk stukje wordt in React Native.

| In het ontwerp | In React Native | Waarom het anders is |
|---|---|---|
| `flexDirection: "row"` | **moet je opschrijven** | In CSS is `row` de standaard, in React Native is dat `column`. Dit is de fout die je het vaakst gaat maken. |
| `display: "flex"` | weglaten | Alles is al flex. |
| `flexShrink` niet genoemd | **`flexShrink: 0` opschrijven** | CSS krimpt standaard wel, React Native niet. Andersom dus ook: waar het ontwerp krimpt moet je het zeggen. |
| `boxShadow: "inset 0 0 0 1px X"` | `borderWidth: 1, borderColor: X` | Alle randen in dit ontwerp zijn inset-ringen, geen slagschaduwen. Er is nergens een echte schaduw, dus je hebt er geen bibliotheek voor nodig. |
| `boxShadow: "inset 0 0 0 1.5px X"` | `borderWidth: 1.5` | Dat is de secundaire knop. |
| `background: url(x) center / cover` | `<Image source={x} contentFit="cover" />` | uit `expo-image` |
| `objectFit: "contain"` | `contentFit="contain"` | idem |
| `linear-gradient(180deg, ...)` | `<LinearGradient colors={[...]} />` | uit `expo-linear-gradient`. Komt precies één keer voor: de hero die in de crèmekleur vervaagt. |
| `<svg><path d="..." />` | `<Svg><Path d="..." />` | uit `react-native-svg`. **De `d`-waarden zijn letterlijk over te nemen.** Dat is de mascotte en de navigatiebalk. |
| `lineHeight: "38px"` | `lineHeight: 38` | Al omgerekend in `tokens.ts`. |
| `letterSpacing: "0.06em"` | `letterSpacing: 0.66` | Al omgerekend in `tokens.ts`. |
| tekst op Android | **`includeFontPadding: false`** | Android zet standaard extra ruimte boven en onder tekst. Zonder dit staat elke regel een paar punten lager dan in het ontwerp. |
| `whiteSpace: "nowrap"` | `numberOfLines={1}` | |
| `position: "absolute"` met `left`/`top` | hetzelfde | Werkt, en de ouder is in React Native al `relative`. |
| `position: "fixed"` | bestaat niet | Komt in dit ontwerp niet voor. |
| `overflow: "hidden"` met `borderRadius` | hetzelfde | Werkt, maar controleer het op Android bij een absoluut geplaatst kind. |
| `gap: 12` | hetzelfde | Werkt vanaf React Native 0.71. |
| `rgb(...)` en `rgba(...)` | hetzelfde | Gewoon overnemen. |

- [ ] Zet `includeFontPadding: false` één keer centraal, in de tekstcomponent of het thema, niet per scherm.

## Deel 5: de componenten, in deze volgorde

Bouw ze in deze volgorde, want elke rij leunt op de rij erboven. Specificatie per stuk in `packages/ui/reference/components`.

- [ ] **`ScreenCanvas`** eerst. Elk scherm zit erin, en zonder dit klopt geen enkele marge. Gradient als paginaachtergrond, één beige vel met radius 20 en 8 punten marge, 20 vulling.
- [ ] **`Button`, `Card`, `Chip`**. De drie primitieven waar de rest uit bestaat.
- [ ] **`BackgroundHeroBand` en `BackgroundHeroGradient`**. Zes weerstaten elk.
- [ ] **`Slider`**. De kernhandeling: vier hiervan vormen de hele check-in. Kaart 150 hoog, spoor 314 bij 4, duim 20 met een ring van 1,5.
- [ ] **`ContentSection`, `ContentShelf`, `ContentGrid`**. Het ritme van elk scherm met een verzameling erop.
- [ ] **`MascotteVlieger` en `MascotteInput`**. Twee verschillende families, niet door elkaar halen.
- [ ] **`NavigationBar`**. Vijf bestemmingen, de vectorpaden zijn er al.
- [ ] Elke component in **alle** states, en in het kitchen sink-scherm. Zie `design-system.md`.

## Deel 6: controleren of het echt één op één is

- [ ] **Zet het naast elkaar.** Open `packages/ui/reference/ui_kits/mind-app/index.html` in een browser op **402 punten breed**, want dat is de breedte waarop de schermen getekend zijn, en zet er een simulator naast.
- [ ] **Controleer de typografie het eerst.** Als Averia er niet staat, klopt de rest ook niet, en het is het minst opvallende dat het meest kapotmaakt.
- [ ] **Controleer op Android apart.** De tekstuitlijning, het knippen bij een ronde hoek en de nagemaakte vetdruk gaan daar mis, niet op iOS.
- [ ] **Zet de lint-regel aan** die letterlijke waarden weigert, zodra er twee schermen staan. Zie `design-system.md` sectie 6.

---

## Nog te beslissen

Deze staan het bouwen niet in de weg, maar ze worden duurder naarmate je langer wacht.

- [ ] **De mascotte voor `zicht` is nooit geëxporteerd.** Eén van de vier check-invragen mist zijn beeld, en de check-in is de kernhandeling. Dit blokkeert dat scherm.
- [ ] **De drie mascotte-poses staan op 354 bij 136 pixels** en worden op 128 punten hoog getoond. Dat is ongeveer 1x, dus op een telefoon wordt het zacht. Opnieuw exporteren op 3x, of als SVG.
- [ ] **Een link naar het Figma-bronbestand in de repo.** Zonder die link kunnen Max en Caesar niet bij het ontwerp zelf.
- [ ] **Donkere modus: wel of niet.** Nu beslissen is goedkoop, later betekent het elke kleur opnieuw langslopen.
- [ ] **Waar de MIND Hulplijn zichtbaar is.** Systeembreed, maar niet per se op elk scherm.
- [ ] **De systeemstaten** die het ontwerp zelf als gat benoemt: fout en offline, leeg weerbericht, geen zoekresultaten, content achter consent, verlopen sessie. De definition of done eist die per scherm.

---

## Over PNG, WebP en één op één

Een misverstand dat het waard is om weg te nemen, want het bepaalt anders een keuze op de verkeerde grond.

**Het bestandsformaat bepaalt niet of het ontwerp één op één na te maken is.** PNG en WebP zijn allebei manieren om dezelfde afbeelding op te slaan, allebei met transparantie, en allebei geven ze precies dezelfde pixels terug aan het scherm. Wat één op één in de weg zit is iets anders: het lettertype, de tokens, en of een component klopt.

Wat wel verschilt is de prijs. De zes achtergronden kosten 127 KB in WebP en ongeveer 2,6 MB in PNG, en dat merk je bij elke `git clone` op Camino-wifi. Er zit compressieverlies in WebP op kwaliteit 82, maar bij dit soort zachte kleurvlakken is dat niet te zien: ik heb het uitvergroot vergeleken.

En het kost ons niets, want `expo-image` zit in Expo Go. Zou dat niet zo zijn, dan was PNG de juiste keuze geweest, want een lastigere installatie voor drie mensen is duurder dan een paar megabyte.

Wil je het toch omgezet zien, dan is dat één opdracht: de originele zip staat nog op de laptop van Stijn.
