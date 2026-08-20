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

- **Onderdeel 3 is aan de achterkant het verst.** Het akkoord op de weer-metafoor kwam op 6 augustus 2026, de vijf weertypen liggen vast sinds 11 augustus, en het schema met `submit_weather()` en `weather_today()` staat in main. Wat de check-in zelf nog blokkeert zijn de vier sliders: de vraagteksten, de schaal, en welke combinatie tot welk weerbeeld leidt. Zie `datamodel.md`.
- **De mobiele app staat centraal, de adminwebapp komt erbij.** Besloten op 30 juli 2026. Onderdeel 7 en 8 zijn samen één CMS-webapp in `apps/admin`: Mind zet er content in en de app leest die uit Supabase. Eigen rollenmodel, eigen RLS-policies, een framework dat nog gekozen moet worden en een eigen deploy. Dat is werk dat je niet tussendoor doet, en het is niet waar de app op beoordeeld wordt.
- **Zet de content dan wel als seed neer, niet met de hand.** Onderdeel 5 leest content die straks via de admin binnenkomt. Komt die admin later, dan moet die content tijdens het bouwen ergens vandaan komen. Zet hem in een seed naast de migraties, niet als rijen die iemand in het dashboard heeft getypt. Twee redenen: iedereen heeft dan dezelfde content op zijn eigen machine, en het komt mee in de overdracht. Met de hand ingevoerde rijen bestaan straks niet bij Mind, zie `datamodel.md`.

## Hoe pak ik mijn onderdeel aan

Dit is het antwoord op de vraag "oké, hoe doe ik het dashboard" of "hoe doe ik de challenges-pagina": per onderdeel waar je begint, wat er al ligt, wat je blokkeert en waar je niet in moet trappen. Het is **aanpak, geen scope**: wat een onderdeel inhoudelijk doet, komt uit het board en `scope.md`. En alles hier veronderstelt dat de app gescaffold is en de routebestanden bestaan; zolang dat niet zo is, is dit het denkwerk en nog niet het bouwwerk.

Voor elk onderdeel geldt dezelfde start: lees je board-sectie, snijd het op in taken van nieuwe bestanden plus één routebestand, en zet de taken op het board volgens het sjabloon hieronder. Een slot of component die je voor iemand anders levert, is bij uitstek een taak die je overdag via Remote Control kunt wegzetten.

**1. Onboarding, auth en consent.** Begin met de volgorde van de flow, die ligt vast: 16+-check vóór het account, zonder Skip. Bouw de Apple-login "op een sleutel na" (zie `scope.md`): scherm, knop en foutafhandeling af, de Service ID en sleutel achter omgevingsvariabelen, en een ontbrekende waarde blokkeert de rest van de onboarding niet. Test met Google of Apple en niet met e-mail, want de ingebouwde SMTP is binnen tien minuten door zijn quotum (`limieten-en-misbruik.md`). Je blokkeert op de teksten van de twee consents en de art. 9-toestemming: die liggen bij Paul, dus bouw de structuur met twee apart intrekbare consents en verzin de teksten niet. Valkuil: de auth- en sessielogica zelf is gedeelde materie, die hoort in een eigen kleine PR en niet als bijvangst van een onboardingscherm.

**2. Dashboard, Mijn Mentale Weer.** Dit is het enige echte raakpunt, dus de aanpak is anders dan bij de rest: **bouw eerst alleen de container, en dat is in één dag te doen.** Eén persoon zet de layout neer met vaste slots (Mijn Mentale Weer, het landelijke weerbericht, de dagelijkse quote, de ingangen naar challenges en naslagwerk), elke slot met een eigen loading-, empty- en error-state. In de container-PR spreek je per slot de props af; daarna leveren de anderen (of hun agents, op een andere dag) de invulling als losse componenten in hun eigen feature-map, en de container importeert ze. Zo raakt niemand daarna nog het gedeelde bestand. Twee inhoudelijke ankers: Mijn Mentale Weer leest het **lokale** weerbeeld (dat staat niet op de server), en het landelijke weerbericht haal je één keer per sessie op en cache je (`limieten-en-misbruik.md` sectie 4); geeft `weather_today()` nul rijen terug, dan zit je onder de toondrempel en toon je de empty state.

**3. Weer-check-in en landelijk weerbericht.** Aan de achterkant het verste onderdeel: `submit_weather()` en `weather_today()` staan in main, inclusief het dagslot. De aanroepen staan in `backend-draaiboek.md`. Je blokkeert op de vraagteksten van de vier sliders en op welke combinatie tot welk van de vijf weerbeelden leidt (open punt in `datamodel.md`); de schermen en states eromheen kunnen wel vast. Drie ankers: het combineren van sliders naar weerbeeld gebeurt **op het toestel** en de sliderwaarden gaan nooit naar de server; de foutmelding "vandaag al ingecheckt" is een normale flow en geen bug, vang hem netjes af; en de check-in-knop staat uit als `last_checkin_on` vandaag is, dat lees je uit de eigen profielrij.

**4. Challenges.** De bouwstenen op het board: weekbasis, unlocken, no-guilt close. De teksten en opdrachten komen uit de contentbibliotheek van MIND in `content/` (PR #16). Hoe het weerbeeld challenges aanraadt en waar de voortgang staat, is het funnel-voorstel in `datamodel.md` (PR #17) en dat is **nog niet besloten**: tot die tijd bouw je geen opslag voor voortgang, want er staat geen challenge-tabel of voortgangsveld in het datamodel, en wat daar niet staat bestaat niet. Begin dus bij de schermen en de weekstructuur, niet bij de data.

**5. Naslagwerk en slim zoeken.** De content komt straks via de admin binnen, maar die komt later: zet de content nu als seed neer, niet als handmatig ingevoerde rijen (zie het punt hierboven). De bibliotheek zelf staat in `content/` (PR #16). Bij het zoeken: debounce op minimaal 300 milliseconden en geen query onder de twee tekens (`limieten-en-misbruik.md` sectie 4). Bronvermelding en externe links staan op het board. Let op de samenhang met het funnel-voorstel: als dat wordt aangenomen, is content ophalen weerblind (iedereen dezelfde bundel, lokaal filteren) en zijn interesses alleen lokaal.

**6. Profiel en instellingen.** Twee harde eisen trekken dit onderdeel: account verwijderen moet **in de app** (App Store-richtlijn 5.1.1(v), zie `scope.md`) en moet echt alles weghalen: het account weg uit auth, de profielrij gaat mee via de cascade, en de bijdrage aan het landelijke beeld blijft omdat die anoniem is; dat laatste staat in de consent-tekst, niet in een foutmelding. Consents zijn apart intrekbaar. Valkuilen: `profiles` is vanuit de app alleen-lezen, dus elk veld dat de gebruiker wil kunnen wijzigen (een gebruikersnaam bijvoorbeeld) bestaat nog niet, moet eerst in `datamodel.md` en krijgt dan een grant per kolom via een migratie langs Stijn.

**7 en 8. Admin en analytics.** Bewust later: eigen webapp in `apps/admin`, eigen rollenmodel en RLS, framework nog te kiezen. Begin hier niet aan zolang de mobiele app niet staat; de app wordt hierop niet beoordeeld.

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
