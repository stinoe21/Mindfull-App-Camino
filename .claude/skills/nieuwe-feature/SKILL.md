---
name: nieuwe-feature
description: Voer een feature-taak van dit project uit van begin tot eind, binnen de afgesproken grenzen. Gebruik dit wanneer iemand aan een nieuwe feature, een nieuw scherm of een issue van het board begint, of vraagt om iets te bouwen in deze app. Bevat de definition of done, de regels over welke bestanden je niet mag aanraken, en de verplichte states en privacychecks.
---

# Een feature bouwen

Volg deze stappen op volgorde. Sla er geen over, ook niet als de taak klein lijkt.

---

## Stap 1: Begrijp de taak voordat je iets schrijft

Zoek het issue op en stel vast:

- Welk scherm of welke flow uit de userflow is dit?
- Welk Figma-frame hoort erbij? Lees dat via de Figma MCP als het er is.
- Welke data heeft het nodig, en staat die al in `docs/datamodel.md`?
- Welke bestanden ga je aanmaken, en welk bestaand bestand raak je aan?

**Schrijf dat laatste expliciet op voordat je begint.** De regel van dit project:

> Een taak bestaat uit nieuwe bestanden plus hooguit één bestaand bestand.

Kom je op meer dan één bestaand bestand, dan is de taak verkeerd gesneden. **Stop en meld dat.** Ga niet alsnog je gang, want er werken twee andere agents in dezelfde repo.

Is de scope onduidelijk of ontbreekt er informatie in `docs/scope.md`: vraag het. Verzin geen productbeslissingen.

## Stap 2: Zorg dat je op een schone branch zit

```bash
git checkout main && git pull
git checkout -b feat/<korte-naam>
```

Branch per taak, nooit op naam van een persoon.

## Stap 3: Bouw

Waar de code hoort:

```
apps/mobile/src/features/<feature>/     <- alle logica en losse onderdelen
apps/mobile/src/app/<route>.tsx         <- het scherm zelf (expo-router)
packages/domain/                        <- alleen als de logica echt gedeeld is
```

Terwijl je bouwt:

- **Zoek eerst in `packages/ui/components`** voordat je iets nieuws maakt. De kans is groot dat het er al is.
- **Nooit een hardcoded kleur, spacing, radius, fontgrootte of shadow.** Altijd via de tokens. De lint-regel weigert het anders alsnog.
- **Introduceer nooit zelf een icoon, illustratie of afbeelding**, ook niet als placeholder. De assetbibliotheek is gesloten, ook de weer-iconen. Mis je iets, dan is dat een blokkade die je meldt. Zie `docs/design-system.md` en `docs/assets-en-media.md`.
- Geen nieuwe dependency. Lukt het niet zonder, meld het.
- Raak geen bestand aan uit de verbodenlijst in `CLAUDE.md` sectie 5.

## Stap 4: Bouw alle states, niet alleen het gelukte pad

Dit is waar de meeste features half af blijven. Verplicht:

| State | Vraag |
|---|---|
| Loading | Wat ziet iemand terwijl het laadt? |
| Empty | Wat ziet iemand als er nog niets is? |
| Error | Wat ziet iemand als het misgaat, en kan diegene het opnieuw proberen? |
| Offline | Wat gebeurt er zonder netwerk? |
| Success | Het gelukte pad. |

Offline is bij dit project geen randgeval. De app wordt onder andere gebruikt door mensen die onderweg zijn.

## Stap 5: Privacycheck

Dit is een app over mentale gezondheid. Loop dit expliciet na:

- [ ] Ik log nergens gebruikersinvoer, ook niet tijdelijk om te debuggen
- [ ] Ik sla geen vrije tekst over iemands gemoedstoestand op die niet in `docs/datamodel.md` staat
- [ ] Ik heb geen analytics-event, tracking-veld of databasekolom toegevoegd die er niet stond
- [ ] Alles wat ik opsla is ook verwijderbaar
- [ ] Ik heb geen hulpteksten, telefoonnummers of doorverwijzingen zelf verzonnen
- [ ] Ik tel niets op de collectieve tabel. Die heeft geen gebruikerscode, dus een teller hoort aan de persoonlijke kant. Zie `docs/limieten-en-misbruik.md`

Twijfel je over één van deze punten: niet doen, en vragen.

## Stap 6: Controleer

```bash
npm run typecheck
npm run lint
npm test
```

Alle drie groen. Niet "bijna groen". Faalt er iets buiten jouw wijziging om, meld dat apart, want dan is `main` stuk.

Is er iets zichtbaars veranderd:

- Voeg de component toe aan `apps/mobile/src/app/_dev/kitchen-sink.tsx` met al zijn states
- Maak een screenshot of een korte opname voor de PR

## Stap 7: Definition of done

De taak is af als dit allemaal waar is:

- [ ] Loading, empty, error en offline state werken
- [ ] De vier vragen onderaan `docs/productprincipes.md` zijn nagelopen
- [ ] `typecheck`, `lint` en `test` zijn groen
- [ ] Geen hardcoded designwaarden
- [ ] Geen nieuwe dependency
- [ ] Geen verboden bestand aangeraakt
- [ ] Nieuwe of gewijzigde componenten staan in de kitchen sink
- [ ] Privacychecklist uit stap 5 is nagelopen
- [ ] Screenshot of opname in de PR bij zichtbare wijzigingen
- [ ] Geen em-dash in code, commits of UI-tekst

## Stap 8: Pull request

```bash
git sync                        # bijwerken op de nieuwste main
git push --force-with-lease
```

Open de PR met het template. Vul in wat je hebt aangeraakt en wat je bewust hebt laten liggen. Vraag een review. Reageert er binnen 12 uur niemand, dan merge je zelf met het label `self-merged`.

Op GitHub: **Squash and merge**. Daarna:

```bash
git checkout main && git pull
git branch -D feat/<korte-naam>
```

---

## Als je iets niet kunt afmaken

Meld precies wat wel af is en wat niet, en waarom. Een half afgemaakte taak die als af wordt gepresenteerd kost het team meer dan een taak die eerlijk als geblokkeerd wordt gemeld.
