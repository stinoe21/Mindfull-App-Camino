# Taakverdeling

Het belangrijkste feit voor dit document: **wij lopen samen terwijl we bouwen.** We kunnen elk moment overleggen, zonder ticket en zonder te wachten. Alles hieronder is er dus om te voorkomen dat we op elkaar wachten, niet om af te bakenen wie waar mag komen.

> **Iedereen heeft toegang tot alles.** Niets in dit document, en niets in `.github/CODEOWNERS`, blokkeert een wijziging omdat die "niet bij iemand hoort". Zie je iets dat beter kan, dan pak je het en je zegt het. We lopen naast elkaar, dus dat is één zin en geen procedure.
>
> Er staat bewust **geen** verplichte Code Owner-review op de repo. Eén review volstaat, van wie dan ook. Zie `docs/setup-github.md`.

---

## Zo verdelen we het werk: per onderdeel van de app

Ieder pakt een **compleet onderdeel**, van scherm tot database. Niet een laag.

Dus dit:

```
Onderdeel: weer-check-in           <- één persoon, van scherm tot database
  scherm en navigatie
  validatie
  opslag en RLS
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

Twee redenen, en de tweede is de praktische.

**Niemand zit te wachten.** Doet de een de schermen en de ander de database, dan is niets af totdat die twee precies op elkaar aansluiten. Er is dan altijd iemand geblokkeerd. Bij verdeling per onderdeel kan alle drie doorwerken.

**Het mergt eenvoudiger.** Twee branches die elk een eigen onderdeel bouwen, raken bijna geen gemeenschappelijke bestanden. Twee branches waarvan de een het design doet en de ander de backend, raken elkaar continu. Onze regel dat een taak bestaat uit nieuwe bestanden plus hooguit één bestaand bestand (zie `CLAUDE.md` sectie 4) is alleen haalbaar bij verdeling per onderdeel.

### De onderdelen

Afgeleid uit de userflow op het Figma-board. Twee per persoon, en de laatste twee zitten buiten de app.

| # | Onderdeel | Wat erin zit | Board |
|---|---|---|---|
| 1 | Onboarding, auth en consent | Intro, 16+-check, inloggen, voorkeuren, disclaimer, voorwaarden, de twee consents | `12:143` tot `12:139` |
| 2 | Dashboard, Mijn Mentale Weer | De spil, plus de dagelijkse quote | `12:173`, `12:179` |
| 3 | Weer-check-in en landelijk weerbericht | De check-in, de collectieve store, de drempel voor tonen | `12:182`, `12:197`, `12:202` |
| 4 | Challenges | Weekbasis, unlocken, no-guilt close | `12:185`, `12:208` tot `12:214` |
| 5 | Naslagwerk en slim zoeken | Interesses, bronvermelding, de externe links | `12:188`, `12:191` |
| 6 | Profiel en instellingen | Voorkeuren, privacy, consent intrekken, account verwijderen | `12:194` |
| 7 | Adminpagina voor Mind | Content toevoegen, eigen rollenmodel | `75:236` |
| 8 | Analytics voor IT | Los van de app, leest uit Supabase | `75:240` |

> **Het dashboard is het enige echte raakpunt.** Daar komt alles samen, dus wie onderdeel 2 doet bouwt de container en de anderen leveren wat erin komt. Doe dat vroeg en met één persoon, anders wordt het het bestand waar drie branches op botsen.

**Wie welk onderdeel doet, is nog niet verdeeld.** Dat is een gesprek van vijf minuten en het hoort vóór vertrek te gebeuren, want het bepaalt wie zich in welk deel van de userflow inleest. Twee dingen om mee te nemen bij die verdeling:

- **Onderdeel 3 kan nog niet beginnen.** De weer-check-in wacht op akkoord van Mind op de weer-metafoor, en de weertypen zelf staan nog nergens vastgelegd. Zie `datamodel.md`. Wie dit onderdeel pakt, moet dus iets anders hebben om aan te werken, of het akkoord moet er eerst zijn.
- **Onderdeel 7 en 8 zijn samen één webapp**, geen schermen in de iOS-app. Besloten op 30 juli 2026, zie `scope.md`. Het is een CMS: Mind zet er content in, en de app leest die uit Supabase. Die webapp staat in `apps/admin` in deze repo, met een eigen rollenmodel, eigen RLS-policies, een framework dat nog gekozen moet worden en een eigen deploy. Wie dit pakt bouwt dus iets anders dan de rest, en dat is geen werk dat je tussendoor doet. Reken het apart.
- **De adminpagina is een voorwaarde voor de contentschermen, niet een extraatje aan het eind.** Onderdeel 5 leest content die daar ingevoerd wordt. Wordt de admin als laatste gebouwd, dan werkt iedereen tot die tijd met content die met de hand in de database is gezet, en dan komt de eerste echte test van dat samenspel op de dag dat er geen tijd meer is.

## Wie waakt over het geheel

Naast een onderdeel houdt ieder iets in de gaten dat over alle onderdelen heen loopt. Dat is **een blik, geen gebied**: je reviewt het, je hakt de knoop door als er twijfel is, en je merkt het als het uit elkaar loopt. Je hoeft er niet als enige aan te werken en je hoeft er niet om gevraagd te worden.

| Wie | Waakt over | Wat dat concreet betekent |
|---|---|---|
| Stijn | Backend, Supabase, datamodel, CI, releases, App Store | Schemawijzigingen gaan via een migratie langs hem. Hij houdt in de gaten of RLS overal aan staat. |
| Max | Design, componenten, visuele consistentie, CSS-structuur | Hij merkt als het beeld uit elkaar loopt en beheert de tokens en de assetbibliotheek. |
| Caesar | Productlogica, userflow, content en teksten | Hij toetst of een onderdeel doet wat de flow belooft en of de toon klopt met `productprincipes.md`. |

Deze drie blikken zijn de reden dat we `.github/CODEOWNERS` hebben: GitHub stelt dan automatisch de juiste reviewer voor. Voorstellen, niet verplichten.

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

**Tijdens het lopen, via Remote Control**
- laptop draait in de rugzak, sessie open in de projectmap
- vanaf je telefoon zet je een afgebakende taak weg via de Claude-app of `claude.ai/code`
- alleen taken die geen beoordeling van jou vragen tijdens de uitvoering: een scherm dat al in de userflow staat, tests, documentatie
- niet: iets waarvoor je moet beslissen hoe het eruitziet, of iets dat een gedeeld bestand raakt
- let op je accu, een dag zonder stopcontact is zo voorbij

Opzetten staat in `ONBOARDING.md` stap 4. Zonder dit moet al het werk in het albergue gebeuren, en dat is het verschil tussen twee en zes productieve uren per dag.

**Na het lopen, alleen**
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
