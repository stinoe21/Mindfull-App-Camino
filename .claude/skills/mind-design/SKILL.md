---
name: mind-design
description: Gebruik deze skill bij alles wat er in de app uitziet. Voor vragen als "welke kleur is de primaire knop", "hoe hoog is een kaart", "wat staat er letterlijk in de check-in", "hoe is een scherm opgebouwd", "welke component gebruik ik hiervoor", "welk font is dit", "welke weerstaten zijn er". Ook vóór het bouwen van een scherm of component, om de schermregels en de exacte maten op te halen in plaats van ze te schatten.
---

# Het design system van Mentale Weerbericht

Alles ligt vast in `packages/ui`. Verzin geen waarde, zoek hem op. De afspraken eromheen staan in `docs/design-system.md`.

## Waar je moet zijn

| Vraag | Bestand |
|---|---|
| Een kleur, maat, radius of typeschaal | `packages/ui/tokens/*.css`, of `tokens.ts` als je in de app zit |
| Hoe een scherm is opgebouwd | `packages/ui/reference/HERKOMST.md`, sectie **Screen layout rules** |
| Wat de app is en hoe hij klinkt | `packages/ui/reference/HERKOMST.md`, secties **Design principles** en **Content fundamentals** |
| De exacte teksten van de check-in | `packages/ui/reference/HERKOMST.md`, sectie **Canonical check-in copy** |
| Maten en varianten van één component | `packages/ui/reference/components/<Naam>.jsx` en `.prompt.md` |
| Hoe iets eruitziet | `packages/ui/reference/guidelines/*.card.html`, of het prototype in `reference/ui_kits/mind-app/index.html` |
| Welke afbeeldingen er zijn | `packages/ui/assets/` |
| Wat nog ontbreekt of open staat | `packages/ui/README.md`, sectie **Open punten** |

## De regels die je niet mag breken

**Tokens, nooit een letterlijke waarde.** Geen `#FEFEF4`, geen `padding: 18`. Gebruik `colors`, `type`, `space` en `radius` uit `packages/ui/tokens/tokens.ts`, en daarbinnen `colors` en niet `palette`.

**Eén kaartvorm en één knopvorm.** Kaarten radius 16, knoppen radius 999 in drie varianten (`primary` lime, `secondary` outline, `link` bare tekst). Een kaart verschilt alleen in kleur, nooit in vorm of padding. Bouw geen tweede variant die net iets anders is.

**De schermopbouw is een regelset, geen suggestie.** De weergradient is de paginaachtergrond. Alle inhoud staat in één beige vel, radius 20, met 8 pixels marge links, rechts en onder zodat er een randje gradient zichtbaar blijft. Vulling binnen het vel is 20. Secties staan 28 uit elkaar, kop naar inhoud is 12. Elke verzameling krijgt een `ContentSection`-kop. Een verzameling is een horizontale shelf (open einde) of een grid van twee gelijke kolommen (eindige set), nooit allebei en nooit een mozaïek.

**Nooit zelf een icoon, illustratie of mascottepose toevoegen.** De set is gesloten. Mis je iets, meld het, dat is een geldige uitkomst.

**Geen goed of fout weer.** Weertypen zijn gelijkwaardig. Er komt geen `mood/good`, geen stoplichtkleur op iemands stemming, en de feedbackkleuren zijn alleen voor systeemfeedback zoals formuliervalidatie.

**Neem teksten letterlijk over.** De check-invragen, de labelparen en de geruststelling staan woordelijk in `HERKOMST.md`. Herformuleer ze niet, ook niet als het mooier kan.

## De twee mascottefamilies

Haal ze niet door elkaar, het zijn verschillende beeldsets.

- **MascotteVlieger**: zeven stemmings- en weerstaten. Voor uitkomstschermen en felicitaties.
- **MascotteInput**: één pose per check-invraag (temperatuur, wind, zicht, wisselvallig). Alleen in de check-in. De pose voor `zicht` is nooit geëxporteerd en valt nu terug op `mascot-main.svg`, zie de open punten.

## Voordat je iets overneemt

Twee dingen die geen designvraag zijn:

- **Dit is een app over mentale gezondheid.** De toon is beschrijvend en nooit beoordelend, en niets wordt als falen geframed. Zie `docs/productprincipes.md`.
- **Wat hier niet staat, is niet afgesproken.** Vraag ernaar in plaats van het in te vullen, ook als het logisch lijkt. Dat geldt zeker voor teksten rond crisis of hulp: die staan in `docs/scope.md` en verzin je nooit zelf.
