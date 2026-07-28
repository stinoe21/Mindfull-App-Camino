# Taakverdeling

Wij verdelen op twee assen tegelijk. Dat klinkt dubbel, maar het lost twee verschillende problemen op.

---

## As 1: systeemeigenaarschap (vast)

Ieder heeft één gebied waarvoor hij eindverantwoordelijk is. Dit betekent **niet** dat alleen die persoon daar mag werken. Het betekent dat wijzigingen in dat gebied door hem gereviewd worden, en dat hij de knopen doorhakt als er twijfel is.

| Eigenaar | GitHub | Verantwoordelijk voor | Reviewt |
|---|---|---|---|
| Stijn | `@stinoe21` | Architectuur, Supabase, datamodel, CI, releases, App Store | `supabase/**`, `.github/**`, `package.json`, auth |
| Caesar | `@Cschoorl` | Design system, componenten, visuele consistentie, interaction design | `packages/ui/**`, alles met een zichtbare wijziging |
| Max | `@maxhelmantel-gif` | Productlogica, userflow, content, teksten, functionele acceptatie | `apps/mobile/src/features/**`, alle UI-teksten |

> **Bevestig deze verdeling.** Wie van Caesar en Max op design en wie op product zit is een voorstel, geen beslissing. Draai het gerust om. Pas dan ook `.github/CODEOWNERS` aan, want daar staat dezelfde verdeling in en die bepaalt wie GitHub automatisch als reviewer toewijst.

## As 2: feature-eigenaarschap (per taak)

Het echte werk verdelen we **verticaal**, per complete gebruikersfunctie. Niet per laag.

Dus dit:

```
Feature: dagelijkse check-in       <- één persoon, van scherm tot database
  scherm + navigatie
  validatie
  opslag
  loading / empty / error / offline
  tests
  privacycheck
```

En nadrukkelijk niet dit:

```
Persoon 1: alle schermen
Persoon 2: alle tabellen
Persoon 3: knoopt het later aan elkaar          <- dit blokkeert altijd
```

Waarom: bij laagverdeling is een scherm pas af als drie mensen precies op elkaar aansluiten. Bij verticale verdeling kan iedereen doorwerken zonder op iemand te wachten. Dat is het hele punt van parallel werken op een wandeltocht.

---

## Hoe een taak eruitziet

Elk issue op het board bevat minimaal dit. Zonder deze velden is een taak niet klaar om opgepakt te worden.

```
Titel:        Themaselectie implementeren
Issue:        MIND-042
Eigenaar:     <naam>
Branch:       feat/theme-selection
Figma node:   1234:5678

Nieuwe bestanden:
  apps/mobile/src/features/theme-selection/**

Bestaand bestand dat geraakt wordt (max 1):
  apps/mobile/src/app/(tabs)/themes.tsx

Niet aanraken:
  tokens, migraties, package.json, root layout, auth

Acceptatie:
  - loading, empty, error en offline state werken
  - typecheck, lint en test groen
  - component staat in de kitchen sink
  - privacychecklist nagelopen

Reviewer:     <naam>
```

Dat veld "bestaand bestand dat geraakt wordt (max 1)" is niet cosmetisch. Zolang dat klopt, kan er structureel geen merge-conflict ontstaan tussen drie parallelle agents.

## Statussen op het board

```
Backlog  ->  Ready  ->  Claimed  ->  In progress  ->  PR open  ->  Merged
                                                          \
                                                           ->  Blocked
```

`Ready` betekent: alle velden hierboven zijn ingevuld en de taak kan zonder verdere vragen opgepakt worden. Alleen taken op `Ready` mag je claimen.

## Dagritme

We lopen overdag, dus het werk gebeurt in blokken.

**Voor het lopen, 15 minuten samen**
- `git sync` bij iedereen
- ieder claimt één taak
- controleren dat die drie taken elkaars bestanden niet raken
- hardop bevestigen wat "af" betekent voor die taak

**Tijdens en na het lopen, alleen**
- ieder praat tegen zijn eigen Claude-sessie
- kleine commits, draft PR meteen openen
- niet mergen

**'s Avonds, 30 minuten samen**
- CI-resultaten nakijken
- elkaars PR's reviewen en mergen
- EAS-build starten zodat hij 's ochtends klaar is
- taken voor de volgende dag op `Ready` zetten

## Integrator van de dag

Eén persoon per dag bewaakt `main` en bepaalt de mergevolgorde als twee PR's elkaar raken. Die rol rouleert. In de eerste week ligt hij bij Stijn.

## Maximaal drie taken tegelijk

Niet meer. Drie parallelle branches is precies wat drie mensen kunnen overzien tijdens het lopen. Meer betekent dat er PR's blijven liggen, en een PR die blijft liggen loopt achter op `main` en wordt elke dag duurder om te rebasen.
