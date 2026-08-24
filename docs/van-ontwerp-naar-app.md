# Van ontwerp naar app

Alles wat er moet gebeuren om het design system uit `packages/ui` één op één in React Native te krijgen, in volgorde. Afvinken en doorgaan.

Het doel is letterlijk: **een scherm in de app moet niet lijken op het ontwerp, het moet het ontwerp zijn.** Dat lukt alleen als de onderdelen vooraf kloppen, want een afwijking van twee punten valt pas op als er twintig schermen staan.

---

## Het goede nieuws vooraf

**Alles wat we nodig hebben zit in Expo Go.** Geen development build, geen Xcode, geen Android Studio, geen aanpassing in `build.gradle`. Gecontroleerd in de documentatie van Expo, niet uit het hoofd:

| Waarvoor | Pakket | In Expo Go |
|---|---|---|
| De WebP-achtergronden en alle afbeeldingen | `expo-image` | ja |
| De vijf lettertypes | `expo-font` | ja |
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

**Gedaan op 20 augustus 2026.** Expo SDK 57, React Native 0.86.

- [x] **Expo-app gescaffold** met expo-router en TypeScript, in `apps/mobile`.
- [x] **De monorepo werkt**: npm workspaces, `packages/ui` en `packages/types` importeerbaar als `@mind/ui` en `@mind/types`, en `apps/mobile/metro.config.js` laat Metro buiten `apps/mobile` kijken.
- [x] **`npm run typecheck`, `npm run lint` en `npm test` bestaan en zijn groen.** De definition of done in `CLAUDE.md` sectie 7 is dus vanaf nu af te vinken.
- [x] **De lint-regel tegen hardcoded designwaarden bestaat**, in `eslint.config.js`. Kleur en typografie zijn een fout, losse maten een waarschuwing. Waarom dat verschil staat in dat bestand.
- [x] **De routebestanden van de userflow staan er**, twintig stuks, allemaal leeg met een omschrijving en een verwijzing naar hun specificatie.
- [ ] **CI groen op alle drie de laptops.** Pas te controleren als Max en Caesar de repo hebben, zie `ONBOARDING.md`.

## Deel 2: de pakketten

**Gedaan op 20 augustus 2026.** Alles staat in `package-lock.json`, dus `npm install` is genoeg en niemand hoeft onderweg nog iets op te halen.

- [x] De vier voor het ontwerp: `expo-image`, `expo-font`, `react-native-svg`, `expo-linear-gradient`. Alle vier in Expo Go.
- [x] Navigatie: `expo-router`, `react-native-safe-area-context`, `react-native-screens`, `expo-linking`, `expo-constants`, `expo-splash-screen`, `@expo/metro-runtime`.
- [x] Data: `@supabase/supabase-js`, `@react-native-async-storage/async-storage` (de sessie moet een herstart overleven) en `react-native-url-polyfill`.

`expo-image` is niet alleen voor WebP: hij doet ook de schijfcache en de overgang bij het laden, en dat wil je bij een schermvullend beeldvlak.

De verbinding met Supabase staat in `apps/mobile/src/lib/supabase.ts`. Daar staat bewust **geen** inlog- of sessiecode: dat is een eigen taak van de eigenaar.

## Deel 3: de lettertypes laden

Dit is de grootste bedreiging voor een één-op-één-weergave, en tegelijk het makkelijkst om fout te doen.

**Waarom het misgaat.** Op het web kies je een snit met `font-weight: 600` en pakt de browser de juiste uit de familie. React Native doet dat niet bij een eigen lettertype: op Android is de bestandsnaam de familienaam, en een gewicht dat je erbovenop zet levert een **nagemaakte** vetdruk op. Dan staat er tekst die net iets anders is dan het ontwerp, op elk scherm, en niemand kan aanwijzen waarom het niet klopt.

**Daarom staat er in `tokens.ts` bij elke typerol wel een `fontFamily` en geen `fontWeight` en geen `fontStyle`.** De snit draagt die al. Zet ze er niet alsnog bij.

**Gedaan op 20 augustus 2026**, in `apps/mobile/src/theme/fonts.ts` en de root layout. Hieronder staat waarom het zo staat, want dit is het deel dat je het makkelijkst per ongeluk weer stukmaakt.

- [x] De vijf snitten laden, met precies deze namen als sleutel:

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

De sleutel moet letterlijk kloppen met wat `fontFaces` uit `tokens.ts` teruggeeft. Wijkt hij af, dan valt de tekst stil terug op het systeemfont en zie je dat pas op een telefoon. In `fonts.ts` staat daarom een `Record<FontFace, number>`: een snit vergeten of er een verzinnen is nu een typefout en geen verrassing achteraf.

- [x] **Niets tekenen voordat ze geladen zijn.** De root layout houdt het splashscherm vast tot `useFonts` klaar is. Anders zie je één tel het verkeerde lettertype, en dat is precies het soort detail waar deze app op beoordeeld wordt.
- [x] Dit staat in de root layout van expo-router (`apps/mobile/src/app/_layout.tsx`), een gedeeld bestand: wijzigen doet de eigenaar.

**Controleer het met je ogen, niet met een test.** Open `/_dev/kitchen-sink`. Staan de koppen daar in een licht handgetekende schreefletter, dan klopt het. Staat er een gewone systeemletter, dan is er iets mis en klopt straks geen enkel scherm.

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

- [ ] Zet `includeFontPadding: false` één keer centraal, in de tekstcomponent of het thema, niet per scherm. Dit staat er nog **niet**: er is nog geen eigen tekstcomponent. Het hoort bij de eerste componenttaak hieronder, en het is de reden om die component te maken in plaats van overal een kale `Text` te gebruiken.

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
- [x] **De lint-regel die letterlijke waarden weigert staat aan**, sinds 20 augustus 2026, in `eslint.config.js`. Zie `design-system.md` sectie 6.

---

## Beslist op 20 augustus 2026

- [x] **De check-in doet het met drie mascottehoudingen.** De pose voor `zicht` is nooit geëxporteerd en we vragen er niet om. Die vraag valt terug op `mascot-main.svg`, en dat is geen tijdelijke noodgreep maar de afspraak. Besloten door Stijn.
- [x] **De systeemstaten ontwerpen we zelf**, op basis van de huisstijl en het design system, op het moment dat het eerste scherm ze nodig heeft. We vragen ze niet op bij Mind. Besloten door Stijn. Het gaat om: fout en offline, leeg weerbericht ("Kom later terug"), geen zoekresultaten, content achter consent, verlopen sessie, eerste-keer-tips, challenge ontgrendeld en afgerond.
- [x] **De vertaling van vier sliderwaarden naar één weerbeeld schrijven we onderweg.** Het is een scriptje, geen ontwerpvraag, en het raakt het schema niet omdat die afbeelding op het toestel gebeurt. Besloten door Stijn. Zie `datamodel.md` regel 261.

## Nog te beslissen

Deze staan het bouwen niet in de weg, maar ze worden duurder naarmate je langer wacht.

- [ ] **De drie mascotte-poses staan op 354 bij 136 pixels** en worden op 128 punten hoog getoond. Dat is ongeveer 1x, dus op een telefoon wordt het zacht. Opnieuw exporteren op 3x, of als SVG. Dit is een vraag aan Mind.
- [ ] **Een link naar het Figma-bronbestand in de repo.** Zonder die link kunnen Max en Caesar niet bij het ontwerp zelf.
- [ ] **Donkere modus: wel of niet.** Nu beslissen is goedkoop, later betekent het elke kleur opnieuw langslopen. De app dwingt voorlopig licht af in `app.config.ts`, want een systeem dat zelf donker maakt levert onleesbare tekst op crèmekleur.
- [ ] **Waar de MIND Hulplijn zichtbaar is.** Systeembreed, maar niet per se op elk scherm.
- [ ] **Een app-icoon en een splash-illustratie.** Die zijn er niet. Voor Expo Go maakt dat niets uit, voor een build naar de stores wel, en een ontbrekend of verkeerd formaat is een afwijzingsreden. Het splashscherm heeft nu wel de goede crèmekleur, dus er flitst geen wit vlak.
- [ ] **De kleurtokens en de weercodes heten niet hetzelfde.** De achtergronden volgen de database (`zonnig`, `wolken`, `mist`, `wind`, `regen`), de kleurtokens zijn Engels en er is een `weather-storm` zonder tegenhanger terwijl `wind` er geen heeft. Zolang niemand een weerkleur per weerbeeld opzoekt is dat geen probleem, maar bij het uitkomstscherm wordt het er wel een.

---

## Over PNG, WebP en één op één

Een misverstand dat het waard is om weg te nemen, want het bepaalt anders een keuze op de verkeerde grond.

**Het bestandsformaat bepaalt niet of het ontwerp één op één na te maken is.** PNG en WebP zijn allebei manieren om dezelfde afbeelding op te slaan, allebei met transparantie, en allebei geven ze precies dezelfde pixels terug aan het scherm. Wat één op één in de weg zit is iets anders: het lettertype, de tokens, en of een component klopt.

Wat wel verschilt is de prijs. De zes achtergronden kosten 127 KB in WebP en ongeveer 2,6 MB in PNG, en dat merk je bij elke `git clone` op Camino-wifi. Er zit compressieverlies in WebP op kwaliteit 82, maar bij dit soort zachte kleurvlakken is dat niet te zien: ik heb het uitvergroot vergeleken.

En het kost ons niets, want `expo-image` zit in Expo Go. Zou dat niet zo zijn, dan was PNG de juiste keuze geweest, want een lastigere installatie voor drie mensen is duurder dan een paar megabyte.

Wil je het toch omgezet zien, dan is dat één opdracht: de originele zip staat nog op de laptop van Stijn.
