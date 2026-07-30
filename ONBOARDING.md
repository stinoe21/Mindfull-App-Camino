# Onboarding

Deel dit bestand met de andere twee teamleden. Werk het van boven naar beneden af. Reken op ongeveer 30 minuten.

Aan het eind heb je een werkende clone met exact dezelfde MCP's, skills en projectinstructies als de rest van het team.

---

## 0. Wat je nodig hebt

- Een GitHub-account, en collaborator-toegang tot deze repo (vraag Stijn)
- Node 20 of hoger (`node --version`)
- Git (`git --version`)
- Claude Code (`npm i -g @anthropic-ai/claude-code`), **plus een betaald Claude-abonnement**. Zonder abonnement werkt Claude Code niet. Reken er ook op dat je tegen usage limits aanloopt als je een hele dag een agent laat werken. Regel dit vóór vertrek en probeer het één keer uit, niet in een albergue met slechte wifi.
- Je kunt Claude Code als **CLI** in de terminal draaien of als **VSCode-extensie**. Beide mag, maar één ding moet via de CLI: het autoriseren van de Supabase-MCP, zie stap 3.
- Een Figma-account met toegang tot het projectbestand
- Een Supabase-account, en een uitnodiging voor de Supabase-organisatie van dit project (vraag Stijn). Zonder die uitnodiging kun je de `supabase-mind`-MCP wel autoriseren, maar ziet hij het project niet.
- Voor iOS-tests: de Expo Go-app op je telefoon. Een Mac is niet nodig, we bouwen via EAS in de cloud.

## 1. Repo clonen

Kies een pad **buiten** iCloud, Google Drive, Dropbox of OneDrive. Cloud-sync en git vechten om dezelfde bestanden en dat sloopt je checkout.

```bash
cd ~/Code            # of waar je je projecten bewaart, maar niet in een gesyncte map
git clone https://github.com/stinoe21/Mindfull-App-Camino.git mind-app
cd mind-app
```

Nog **geen** `npm install`. De Expo-app is nog niet gescaffold, dus er is nog geen `package.json` en het commando zou falen. Zodra die er staat komt dit erbij. De CI weet dat ook en slaat de checks tot die tijd over.

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

| Server | Waarvoor |
|---|---|
| `github` | Pull requests, issues, reviews. Vraagt één omgevingsvariabele, zie hieronder. |
| `supabase-mind` | Database inspecteren, types genereren. Read-only. |
| `figma` | **Designs ophalen.** Frames, componenten, variables en screenshots. Dit is onze route van design naar code: laat Claude het frame ophalen in plaats van een screenshot op het oog nabouwen. |

Start Claude Code in de projectmap:

```bash
cd mind-app
claude
```

Bij de eerste start vraagt Claude of je de project-MCP's vertrouwt. Antwoord ja. Daarna staan `github`, `supabase-mind` en `figma` op "pending approval". Keur ze goed. Voor `supabase-mind` en `figma` opent er dan een browservenster waarin je inlogt. `github` doet dat niet, die werkt met een omgevingsvariabele.

Controleer met:

```
/mcp
```

`supabase-mind` en `figma` horen nu op `connected` te staan. `github` nog niet, die heeft eerst de stap hieronder nodig.

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

### De Figma-plugin, aangeraden maar niet verplicht

De MCP hierboven komt uit `.mcp.json` en heb je dus al na het clonen. De **plugin** is iets anders en die komt niet mee uit de repo: die installeert iedereen zelf, één keer.

```bash
claude plugin install figma@claude-plugins-official
```

Wat je ermee krijgt zijn een stuk of twaalf skills bovenop de MCP, waaronder `figma-design-to-code` voor het omzetten van een frame naar code, `figma-use-figjam` voor het userflow-board en `figma-generate-library` voor het opzetten van een component library. Zonder de plugin werkt de MCP gewoon, je mist alleen die skills.

**Herstart Claude Code daarna volledig**, net als bij de omgevingsvariabele hierboven: skills worden bij het starten geladen.

Twee dingen om te weten:

- In de **VSCode-extensie** werkt de slash-command `/plugin` niet. Gebruik de `claude plugin`-CLI, zoals hierboven.
- De plugin brengt zijn eigen MCP-server mee die ook `figma` heet, met dezelfde URL als die in onze `.mcp.json`. Dat is dezelfde server, dus het werkt gewoon. Zie je een waarschuwing over conflicting scopes, dan komt hij daarvandaan en is er niets stuk.

### Als iets niet verbindt

**figma** is een remote server met OAuth. Werkt hij niet, dan is er een lokaal alternatief: zet in de Figma **desktop-app** onder Preferences de Dev Mode MCP Server aan, en vervang in `.mcp.json` de figma-URL door `http://127.0.0.1:3845/mcp`. Nadeel: de desktop-app moet dan altijd openstaan. Commit die wijziging niet. We kunnen ook zonder Figma MCP werken, alleen minder prettig.

**supabase-mind** is de remote server `https://mcp.supabase.com/mcp`, waar je met je eigen Supabase-account op inlogt. Let goed op het venster dat opent: Supabase vraagt **voor welke organisatie** je toegang geeft. Kies de organisatie waar het project van deze app in staat. Kies je de verkeerde, dan verbindt de server wel maar ziet hij het project niet, en dat lijkt op een storing terwijl het er geen is. Zie je een leeg projectenlijstje, dan heb je waarschijnlijk je uitnodiging voor de organisatie nog niet geaccepteerd.

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

## 5. Tokens voor de app zelf

Alleen nodig zodra de Expo-app er staat, dus nu nog niet.

```bash
cp .env.example .env
```

`.env` staat in `.gitignore` en wordt nooit gecommit.

## 6. Controleer of alles klopt

Draai in Claude Code:

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

## 8. Je eerste taak

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
