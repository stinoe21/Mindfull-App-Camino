# packages/ui/components

Hier komen de **React Native**-componenten. Nu nog leeg, en dat is geen achterstand maar de volgorde: het design system is overgenomen, het bouwen begint zodra de Expo-app gescaffold is.

Voordat je hier iets neerzet:

1. **Kijk in `../reference/`.** Elke component uit het ontwerp staat daar al, met exacte maten, varianten en vectorpaden. Die bestanden zijn React DOM en draaien hier niet, maar ze zijn de specificatie. Verzin geen waarde die daar al staat.
2. **Lees `../reference/HERKOMST.md`, sectie "Screen layout rules".** Dat zijn regels, geen suggesties: de gradient is de paginaachtergrond, alle inhoud staat in één beige vel met radius 20 en 8 pixels marge, elke verzameling krijgt een `ContentSection`-kop, en een verzameling is een shelf of een grid en nooit allebei.
3. **Gebruik `../tokens/tokens.ts`**, en daaruit `colors` en niet `palette`.
4. **Eén kaartvorm, één knopvorm.** Radius 16 voor kaarten, 999 voor knoppen, en de kaart verschilt alleen in kleur. Een tweede kaartvorm die net iets anders is, is hoe een design system doodgaat.

De volgorde waarin ze nodig zijn, afgeleid uit `reference/ui_kits/mind-app/index.html`:

| Eerst | Waarom |
|---|---|
| `ScreenCanvas` | Elk scherm zit erin. Zonder dit klopt geen enkele marge. |
| `Button`, `Card`, `Chip` | De drie primitieven waar de rest uit bestaat. |
| `Slider` | De kernhandeling: vier van deze vormen de hele check-in. |
| `ContentSection` + `ContentShelf` / `ContentGrid` | Het ritme van elk scherm met een verzameling erop. |
| `MascotteVlieger`, `MascotteInput` | De emotionele lijn. Let op: twee verschillende families, niet door elkaar halen. |
| `NavigationBar`, `BackgroundHeroBand`, `BackgroundHeroGradient` | Het omhulsel. |

Elke component krijgt al zijn states, niet alleen het gelukte pad, en gaat in het kitchen sink-scherm. Zie `docs/design-system.md`.
