# Onboarding

Deel dit bestand met de andere twee teamleden. Werk het van boven naar beneden af. Reken op ongeveer 45 minuten, plus de download van Xcode.

Aan het eind heb je een draaiende app op je Simulator, met exact dezelfde MCP's, skills en projectinstructies als de rest van het team.

---

## De korte route: laat je agent het doen

Alles wat **in** de repo zit krijg je gratis mee met een `git clone`: `CLAUDE.md`, `AGENTS.md`, de zes skills in `.claude/`, de MCP-configuratie in `.mcp.json` en de exacte pakketversies in `package-lock.json`. Daar hoef je niets voor te doen.

Alles **buiten** de repo niet: Xcode, Expo Go, de `gh` en `supabase` CLI, de Figma-plugin, twee omgevingsvariabelen en je eigen `.env.local`. Dat is deze lijst.

Kloon de repo, start Claude Code in de map en plak dit:

> Lees ONBOARDING.md en zet mijn omgeving voor dit project volledig op.
>
> Doe zelf alles wat je kunt: controleer mijn Node-versie, draai `npm install`, controleer of `gh` en `supabase` geïnstalleerd zijn en installeer ze anders met Homebrew, zet de git-configuratie en de hook uit sectie 2, en draai daarna `npm run typecheck`, `npm run lint` en `npm test` om te bewijzen dat het werkt.
>
> Stop en vraag het aan mij bij alles wat een browserlogin, een wachtwoord of een keuze van mij vraagt: `gh auth login`, `supabase login`, het autoriseren van de MCP's, en de anon key voor `.env.local`. Verzin die waarden nooit zelf.
>
> Raak geen enkel bestand in de repo aan. Dit is een omgevingstaak, geen codetaak. Geef me aan het eind een lijst van wat er is gelukt en wat ik zelf nog moet doen.

Wat je agent **niet** voor je kan doen, en wat je dus zelf moet: Xcode installeren, Expo Go op je telefoon zetten, de browserlogins van GitHub, Supabase en Figma, en `.env.local` aanmaken. Dat zijn precies de stappen hieronder die met een browser of de App Store beginnen.

---

## 0. Wat je nodig hebt

- Een GitHub-account, en collaborator-toegang tot deze repo (vraag Stijn)
- **Node 24 of hoger** (`node --version`). Niet lager: `npm test` draait de testrunner van Node rechtstreeks op TypeScript, en dat kan pas vanaf 24 zonder extra vlag. Heb je een oudere versie, dan is `brew install node` genoeg.
- Git (`git --version`)
- Claude Code (`npm i -g @anthropic-ai/claude-code`), **plus een betaald Claude-abonnement**. Zonder abonnement werkt Claude Code niet. Reken er ook op dat je tegen usage limits aanloopt als je een hele dag een agent laat werken. Regel dit vóór vertrek en probeer het één keer uit, niet in een albergue met slechte wifi.
- Je kunt Claude Code als **CLI** in de terminal draaien of als **VSCode-extensie**. Beide mag, maar één ding moet via de CLI: het autoriseren van de Supabase-MCP, zie stap 3.
- Een Figma-account. De toegang tot het projectbestand is al geregeld, stand 13 augustus 2026.
- Een Supabase-account. De uitnodigingen voor de Supabase-organisatie zijn verstuurd en geaccepteerd, stand 13 augustus 2026. Zie je bij het autoriseren toch een leeg projectenlijstje, dan heb je bij het inloggen de verkeerde organisatie gekozen, zie stap 3.
- De **Supabase CLI**: `brew install supabase/tap/supabase`, daarna eenmalig `supabase login` (opent de browser). Hiermee push je migraties naar het dev-project en genereer je types.
- **Xcode**, uit de Mac App Store, met de iOS Simulator-runtime. We werken alle drie op een MacBook en testen in de Simulator, zie `docs/scope.md`. Dit is een download van ruim 10 GB: doe hem thuis op goede wifi, niet onderweg, en open Xcode één keer zodat hij de Simulator-runtime binnenhaalt.
- **Expo Go** op je eigen telefoon, uit de App Store of de Play Store. Dat is de snelste manier om te kijken: `npm start`, QR-code scannen, klaar. Alles wat deze app gebruikt zit in Expo Go, dus je hebt geen development build en geen Android Studio nodig. Zie `docs/van-ontwerp-naar-app.md`.
- **Docker heb je niet nodig.** Besloten op 13 augustus 2026: we draaien Supabase niet lokaal. Iedereen werkt tegen het gedeelde dev-project in de cloud, zie `CLAUDE.md` sectie 9.

## 1. Repo clonen

Kies een pad **buiten** iCloud, Google Drive, Dropbox of OneDrive. Cloud-sync en git vechten om dezelfde bestanden en dat sloopt je checkout.

```bash
cd ~/Code            # of waar je je projecten bewaart, maar niet in een gesyncte map
git clone https://github.com/stinoe21/Mindfull-App-Camino.git mind-app
cd mind-app
```

Daarna de pakketten. Dit duurt een paar minuten en het is het enige moment waarop je goede wifi nodig hebt:

```bash
npm install
```

Doe dit **thuis en niet onderweg**. `package-lock.json` zit in de repo, dus je krijgt exact dezelfde versies als de rest van het team. Er is niets dat je zelf moet toevoegen: Expo, expo-router, de vier design-pakketten en de Supabase-client staan er allemaal al in.

Zie je een waarschuwing over `unrs-resolver` en install scripts, negeer die. Dat is een transitieve afhankelijkheid van ESLint die geen postinstall hoeft te draaien.

## 2. Git instellen

Draai deze regels één keer. Daarna kun je de workflow niet meer per ongeluk verkeerd doen.

```bash
git config --global pull.rebase true
git config --global rebase.autoStash true
git config --global push.autoSetupRemote true
git config --global alias.sync '!git fetch origin && git rebase origin/main'
```

En deze, in de projectmap zelf. Die activeert een hook die weigert naar `main` te pushen:

```bash
git config core.hooksPath .githooks
```

Vanaf nu is je dagelijkse commando om bij te blijven: `git sync`.

Test of de hook werkt:

```bash
git checkout main
git commit --allow-empty -m "test"
git push origin main
```

Dit **hoort** geweigerd te worden met een melding. Gebeurt dat niet, dan staat `core.hooksPath` niet goed. Ruim daarna op:

```bash
git reset --hard origin/main
```

Waarom rebase en geen merge staat uitgelegd in de skill `werkwijze`. Vraag je Claude gewoon: "leg de werkwijze van dit project uit".

## 3. MCP's activeren

Je hoeft **geen personal access token aan te maken**. Supabase en Figma autoriseer je via je browser, en GitHub hergebruikt het token dat de `gh` CLI al voor je beheert. De configuratie staat al in de repo, in `.mcp.json`. Voeg daar zelf niets aan toe: die wijziging krijgt de rest ook.

Waar we ze voor gebruiken:

| Server | Waar hij vandaan komt | Waarvoor |
|---|---|---|
| `github` | `.mcp.json` | Pull requests, issues, reviews. Vraagt één omgevingsvariabele, zie hieronder. |
| `supabase-mind` | `.mcp.json` | Database inspecteren, types genereren. Read-only. |
| `figma` | Een plugin, zie hieronder | **Designs ophalen.** Frames, componenten, variables en screenshots. Dit is onze route van design naar code: laat Claude het frame ophalen in plaats van een screenshot op het oog nabouwen. |

Start Claude Code in de projectmap:

```bash
cd mind-app
claude
```

Bij de eerste start vraagt Claude of je de project-MCP's vertrouwt. Antwoord ja. Daarna staan `github` en `supabase-mind` op "pending approval". Keur ze goed. Voor `supabase-mind` opent er dan een browservenster waarin je inlogt. `github` doet dat niet, die werkt met een omgevingsvariabele.

Controleer met:

```
/mcp
```

`supabase-mind` hoort nu op `connected` te staan. `github` en `figma` nog niet: die hebben allebei eerst een eigen stap hieronder nodig.

### GitHub: één omgevingsvariabele

De GitHub-MCP kan geen browserlogin doen. Die server ondersteunt geen dynamic client registration en wil een token in een header. In plaats van dat we alle drie een personal access token gaan aanmaken en verlengen, hergebruiken we het token dat de `gh` CLI al in je keyring heeft staan.

Log eerst in met `gh`, als je dat nog niet had gedaan:

```bash
gh auth login
```

Kies "Login with a web browser". Zet daarna het token in een omgevingsvariabele.

Windows, in PowerShell:

```powershell
setx GITHUB_MCP_TOKEN (gh auth token)
```

macOS of Linux, als regel in `~/.zshrc` of `~/.bashrc`:

```bash
export GITHUB_MCP_TOKEN=$(gh auth token)
```

**Herstart hierna Claude Code volledig**, en bij de VSCode-extensie VSCode zelf. Een nieuw venster of tabblad is niet genoeg: een omgevingsvariabele wordt gelezen op het moment dat het proces start. Daarna staat `github` op `connected`.

In `.mcp.json` staat alleen `${GITHUB_MCP_TOKEN}`, dus het token zelf gaat nooit de repo in. De `~/.zshrc`-variant is technisch de nettere, want die haalt het token bij elke shellstart uit de keyring en laat dus geen tweede kopie achter. `setx` schrijft het naar je gebruikersregister, wat hetzelfde beveiligingsniveau heeft als de tokens die Claude Code al lokaal bewaart.

Zie je `Authorization header is badly formatted`, dan is de variabele leeg of niet meegekomen met het proces. De `gh` CLI blijft daarnaast gewoon werken en is de terugvaloptie voor alles:

```bash
gh pr list
```

### Figma: één commando, en dit is verplicht

`github` en `supabase-mind` komen uit `.mcp.json` en heb je dus al na het clonen. **Figma niet.** Die komt uit een plugin en die installeert iedereen zelf:

```bash
claude plugin install figma@claude-plugins-official
```

Waarom het zo staat: de plugin brengt de Figma-MCP mee **plus** een stuk of twaalf skills, waaronder `figma-design-to-code` voor het omzetten van een frame naar code, `figma-use-figjam` voor het userflow-board en `figma-generate-library` voor het opzetten van een component library. Toen we de server ook nog in `.mcp.json` hadden staan, stond hij er twee keer onder dezelfde naam. Die dubbeling is eruit gehaald en de plugin is wat overblijft.

Sla je deze stap over, dan heb je **geen** Figma. Dat is de prijs van deze keuze, en het is de enige koppeling in dit project die niet automatisch meekomt.

**Herstart Claude Code daarna volledig**, net als bij de omgevingsvariabele hierboven: plugins en skills worden bij het starten geladen. Controleer met `/mcp` dat `figma` op `connected` staat, en met `/figma-use` dat de skills geladen zijn.

In de **VSCode-extensie** werkt de slash-command `/plugin` niet. Gebruik de `claude plugin`-CLI, zoals hierboven.

### Als iets niet verbindt

**figma** is een remote server met OAuth, meegeleverd door de plugin. Werkt hij niet, controleer dan eerst of je Claude Code echt volledig opnieuw hebt gestart. Blijft het misgaan, dan is er een lokaal alternatief: zet in de Figma **desktop-app** onder Preferences de Dev Mode MCP Server aan en voeg die toe met `claude mcp add figma-lokaal --scope local --transport http http://127.0.0.1:3845/mcp`. Nadeel: de desktop-app moet dan altijd openstaan. Doe dat met `--scope local`, dan raakt het de rest niet. We kunnen ook zonder Figma MCP werken, alleen minder prettig.

**supabase-mind** is de remote server `https://mcp.supabase.com/mcp`, waar je met je eigen Supabase-account op inlogt. Let goed op het venster dat opent: Supabase vraagt **voor welke organisatie** je toegang geeft. Kies de organisatie waar het project van deze app in staat. Kies je de verkeerde, dan verbindt de server wel maar ziet hij het project niet, en dat lijkt op een storing terwijl het er geen is. De uitnodigingen voor de organisatie zijn al geaccepteerd, dus een leeg projectenlijstje betekent hier vrijwel altijd: verkeerde organisatie gekozen bij het inloggen.

**Krijg je `{"message":"resource: Resource must be a valid MCP endpoint"}`?** Dan gebruik je Claude Code als **VSCode-extensie**, en dat is een bug in de extensie, niet in onze configuratie. Hij verhaspelt het vraagteken in de MCP-URL bij het opbouwen van de OAuth-aanvraag (`?` wordt `%253F`), waarna Supabase de aanvraag terecht weigert. Zie [claude-code#34880](https://github.com/anthropics/claude-code/issues/34880).

De oplossing kost één minuut. Autoriseer via de **CLI** in plaats van de extensie:

```bash
cd mind-app
claude
```

Draai daar `/mcp`, kies `supabase-mind` en log in. De extensie mag gewoon openstaan. De inloggegevens worden per account opgeslagen, dus dit is eenmalig: daarna werkt `supabase-mind` ook in de extensie.

Draait hij via `npx`? Dan is je `.mcp.json` oud. De stdio-variant (`npx @supabase/mcp-server-supabase`) kan geen browserlogin en faalt met een `-32000`-fout omdat hij een personal access token mist. `git sync` haalt de goede config binnen.

Hij staat op `read_only=true`, dat is bewust: schemawijzigingen gaan altijd via een migratiebestand. De URL is gescoped op ons eigen project, dus je ziet alleen **Mindfull-App-Camino** en niet je eigen andere projecten.

**Heb je al een user-scope MCP met dezelfde naam?** Dan botst dat. De project-servers heten daarom `supabase-mind` en niet `supabase`. Zie je toch een waarschuwing over "conflicting scopes", draai dan `claude mcp list` en meld wat er staat.

## 4. Remote Control aanzetten

Hiermee stuur je een Claude Code-sessie op je laptop aan vanaf je telefoon, via de Claude-app of `claude.ai/code`.

Dit is voor dit project geen gadget. Wij lopen vijf tot zeven uur per dag met de laptop in de rugzak. Zonder dit moet al het werk in het albergue gebeuren. Met dit kun je onderweg een taak wegzetten die klaar is tegen de tijd dat je aankomt.

```bash
claude auth login
```

Controleer daarna:

```bash
claude doctor
```

Onder "Remote Control" hoort te staan: *"Control this session from claude.ai/code or the Claude mobile app"*. Staat er in plaats daarvan iets over een ontbrekende `user:profile` scope, dan ben je ingelogd met een long-lived token en moet `claude auth login` alsnog.

Installeer de Claude-app op je telefoon en log in met hetzelfde account.

### Hoe je dit onderweg gebruikt

- Laptop aan, sessie open in de projectmap, deksel dicht in je rugzak. De sessie blijft draaien.
- Onderweg pak je je telefoon en zet je een afgebakende taak weg. Kies iets dat geen beoordeling van jou vraagt tijdens de uitvoering.
- 's Avonds kijk je na, review je, en merge je.

Wat wel werkt onderweg: een scherm bouwen dat al in de userflow staat, tests schrijven, een refactor binnen één feature-map, documentatie.

Wat niet werkt onderweg: iets waarvoor je moet beslissen hoe het eruitziet, of iets dat een gedeeld bestand raakt. Dat doe je 's avonds samen.

Let op je accu. Een draaiende agent en een slapende laptop trekken meer dan je denkt op een dag zonder stopcontact.

## 5. De app draaien

### Eerst je eigen `.env.local`

Expo leest omgevingsvariabelen vanuit de map van de app, dus vanuit `apps/mobile` en niet vanuit de wortel van de repo. Maak daar dit bestand aan:

```bash
cd apps/mobile
cat > .env.local <<'EOF'
EXPO_PUBLIC_SUPABASE_URL=https://fpvvmgdzftmkyiqfvpjj.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=
EOF
```

De anon key vul je zelf in. Haal hem op in het Supabase-dashboard onder **Project Settings, API keys**, of laat je agent hem ophalen met de MCP `supabase-mind`. Hij staat met opzet niet in de repo: sleutels horen niet in bestanden die we delen, ook geen publieke.

Twee dingen die je moet weten over die key:

- **Hij is bewust publiek.** Hij wordt meegecompileerd in de app en is te lezen door iedereen die de app installeert. Dat is geen lek. Wat de data beschermt is Row Level Security, niet de geheimhouding van deze sleutel.
- **De service role key en het databasewachtwoord horen hier nooit in**, en op geen enkele laptop. Die omzeilen RLS volledig, en RLS is precies wat de persoonlijke check-ins gescheiden houdt van de anonieme collectieve pool. Zie `CLAUDE.md` sectie 9.

`.env.local` staat in `.gitignore` en gaat dus nooit de repo in. Stuur hem ook niet naar elkaar door: ieder maakt zijn eigen.

### Starten

```bash
cd ../..        # terug naar de wortel van de repo
npm start
```

Daarna heb je twee routes, en ze werken allebei:

- **Op je telefoon:** scan de QR-code met Expo Go. Dit is de snelste en werkt zonder Xcode.
- **In de Simulator:** druk op `i` in de terminal. Xcode moet dan wel geïnstalleerd zijn en één keer geopend, zodat hij de Simulator-runtime heeft binnengehaald.

Je ziet een app die je door de hele userflow laat lopen, met op elk scherm "NOG TE BOUWEN" en een omschrijving van wat daar hoort te komen. Dat is de bedoeling: de routes staan er, de schermen nog niet.

**Controleer meteen het lettertype.** De koppen horen in Averia Serif Libre te staan, een licht handgetekende schreefletter. Zie je een gewone schreefloze systeemletter, dan zijn de fonts niet geladen en moet je dat eerst oplossen, want dan klopt straks geen enkel scherm. Kijk in `apps/mobile/src/theme/fonts.ts`.

### Het kitchen sink-scherm

Ga naar `/_dev/kitchen-sink`. Daar staan de hele typeschaal, alle kleuren en een link naar elk scherm. Dat is je snelste controle of het design system goed doorkomt, en het is de plek waar elke component die je bouwt met al zijn states neergezet wordt.

## 6. Controleer of alles klopt

Eerst de drie commando's uit de definition of done. Alle drie horen groen te zijn op een verse clone. Zijn ze dat niet, dan ligt het aan je omgeving en niet aan de code, want de CI draait ze ook.

```bash
npm run typecheck
npm run lint
npm test
```

`npm test` controleert de invarianten van het design system: dat elke typerol een echt lettertypebestand heeft, dat geen enkele rol zelf een gewicht draagt, en dat geen token een gemoedstoestand waardeert. Acht tests, allemaal groen.

Draai daarna in Claude Code:

```
Lees CLAUDE.md en docs/scope.md en vat in vijf zinnen samen hoe wij in dit project werken.
```

Klopt het antwoord, dan staat je setup goed. Klopt het niet, dan laadt `CLAUDE.md` niet en moet je controleren of je Claude wel in de projectmap hebt gestart.

Draai daarna:

```
/werkwijze
```

Dat is de skill die de git-workflow uitlegt. Als die laadt, zijn de gedeelde skills actief.

## 7. Lees waar de afspraken staan

Je Claude kent deze bestanden en verwijst ernaar, maar lees deze vier zelf een keer door. Het zijn er vier omdat het de vier soorten fouten zijn die je niet aan een diff ziet.

| Lees dit | Waarom je het zelf moet weten |
|---|---|
| `CLAUDE.md` | Het contract. Bovenaan staat een tabel met alle andere documenten en wanneer je ze nodig hebt. |
| `docs/productprincipes.md` | Hoe de app zich hoort te gedragen. Je kunt een technisch perfect scherm bouwen dat toch verkeerd voelt. |
| `docs/taakverdeling.md` | Hoe we het werk verdelen, wat er in een taak hoort, en het dagritme onderweg. |
| `docs/datamodel.md` | Wat we wel en niet opslaan. Staat een veld daar niet in, dan bestaat het niet. |

De volledige index staat in `README.md`. Kom je iets tegen dat in geen enkel document staat, dan is het niet afgesproken: vraag ernaar en vul het niet zelf in. Dat is geen formaliteit maar de reden dat we met drie parallelle agents niet uit elkaar lopen.

## 8. Hoe branches je map veranderen

Hier struikelt iedereen een keer over. Lees dit voordat je je eerste branch maakt, dan schrik je straks niet.

### Je hebt één map, git wisselt de inhoud om

Een branch is **geen aparte map** en hij staat niet "op GitHub in plaats van bij jou". Het is een andere versie van dezelfde map.

Je map staat altijd op een branch. Ook nu, ook als je er nooit over nadenkt. Tot je eerste `git checkout -b` stond hij op `main`, en daarom viel het niet op.

Wissel je van branch, dan past git de inhoud van je map aan. Bestanden verschijnen en verdwijnen. **Dat is geen storing, dat is het hele punt.** Deed git het niet, dan lag al het werk van alle branches door elkaar in één map en kon je nooit meer zien wat bij welke taak hoort.

Denk aan één bureau en een archiefkast. Je legt één dossier tegelijk op het bureau. De rest ligt niet weg, die ligt in de kast.

### Er zijn drie plekken

| Plek | Wat er staat |
|---|---|
| Je zichtbare map | Eén versie tegelijk. Dit zie je in VSCode en dit bewerk je. |
| `.git`, verborgen in diezelfde map | Alle versies van alle branches. Staat lokaal op je laptop. |
| GitHub | Een kopie, zodat de andere twee erbij kunnen. |

De archiefkast is dus `.git`. Hij staat in je projectmap, je ziet hem alleen niet.

### Je branch bestaat op twee plekken

```bash
git branch -a
```

Je ziet je branch twee keer: `feat/iets` is die van jou, `remotes/origin/feat/iets` is die op GitHub. `git push` stuurt jouw versie erheen, `git pull` haalt hun versie op. Ze lopen tijdelijk uit de pas en dat is normaal.

Een branch ontstaat dus **bij jou**, niet bij het pushen. Pushen maakt er alleen een kopie van.

### De hele cyclus

1. Begin op `main` en haal het laatste op: `git checkout main` en `git pull`
2. Maak je branch: `git checkout -b feat/<korte-naam>`. Dit gebeurt op je laptop, GitHub weet er nog niets van.
3. Werk. Gewoon in je map, zoals altijd.
4. Commit. Nu ligt je werk vast in `.git`.
5. Push. **Nu pas** bestaat je branch ook op GitHub en kunnen de anderen hem zien.
6. Open een pull request. Dat is het verzoek: mag dit bij `main`?
7. Iemand mergt. Nu zit je werk in `main` op GitHub, maar nog niet bij jou.
8. Ga terug en haal op: `git checkout main` en `git pull`. **Nu** staat het ook in jouw map.

De commando's staan compleet in de skill `werkwijze`, met rebase erbij. Vraag je Claude ernaar.

**Stap 8 wordt het vaakst overgeslagen.** Sla je hem over, dan blijf je op je oude branch hangen, zie je het werk van de anderen niet, en lijkt er van alles kwijt.

### Twee dingen om te onthouden

**Zoek je een bestand dat er niet is, kijk eerst op welke branch je staat.**

```bash
git branch --show-current
```

Staat een map niet in `main`, dan is de PR waarschijnlijk nog niet gemerged. Er is dan niets kwijt: het bestaat gewoon nog niet in die versie.

**Zorg dat `git status` schoon is voordat je wisselt.** Heb je niet-gecommitte wijzigingen, dan weigert git de checkout of neemt hij ze mee naar de andere branch. Allebei verwarrend. Eerst committen, dan wisselen.

### Nee, je verliest niets

Zolang je gecommit hebt, staat alles in `.git`. Wisselen van branch gooit nooit iets weg, het legt alleen iets anders op je bureau. Twijfel je: commit eerst, dan kan er niets misgaan.

## 9. Je eerste taak

1. Pak een issue van het board dat op `Ready` staat en wijs jezelf toe. Staat er nog geen board, en dat is nu het geval, vraag dan aan Stijn welke taak je pakt.
2. Maak een branch: `git checkout -b feat/<korte-naam>`
3. Vraag je Claude: `/nieuwe-feature <issue-nummer>`
4. Open een draft pull request zodra je iets hebt. Niet aan het eind, maar meteen. Dan ziet de rest waar je mee bezig bent.
5. Vlak voor je hem uit draft haalt: `git sync` en `git push --force-with-lease`
6. Vraag een review. Reageert er binnen 12 uur niemand, dan merge je zelf met het label `self-merged`.

---

## Huisregels, kort

- Branch per **taak**, niet per persoon.
- Nooit rechtstreeks naar `main` pushen.
- Nooit `git push --force`. Altijd `--force-with-lease`.
- Nooit `main` rebasen.
- Kleine pull requests. Een PR die je in tien minuten kunt reviewen wordt binnen een uur gemerged. Een PR van 40 bestanden blijft dagen liggen.
- Raak geen gedeelde bestanden aan tijdens een feature. Zie sectie 5 van `CLAUDE.md`.
- Geen nieuwe dependencies zonder overleg.
- Log nooit gebruikersinvoer. Dit is een app over mentale gezondheid.
