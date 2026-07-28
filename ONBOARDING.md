# Onboarding

Deel dit bestand met de andere twee teamleden. Werk het van boven naar beneden af. Reken op ongeveer 30 minuten.

Aan het eind heb je een werkende clone met exact dezelfde MCP's, skills en projectinstructies als de rest van het team.

---

## 0. Wat je nodig hebt

- Een GitHub-account, en collaborator-toegang tot deze repo (vraag Stijn)
- Node 20 of hoger (`node --version`)
- Git (`git --version`)
- Claude Code (`npm i -g @anthropic-ai/claude-code`)
- Een Figma-account met toegang tot het projectbestand
- Voor iOS-tests: de Expo Go-app op je telefoon. Een Mac is niet nodig, we bouwen via EAS in de cloud.

## 1. Repo clonen

Kies een pad **buiten** iCloud, Google Drive, Dropbox of OneDrive. Cloud-sync en git vechten om dezelfde bestanden en dat sloopt je checkout.

```bash
cd ~/Code            # of waar je je projecten bewaart, maar niet in een gesyncte map
git clone <repo-url> mind-app
cd mind-app
npm install
```

## 2. Git instellen

Draai deze vier regels één keer. Daarna kun je de workflow niet meer per ongeluk verkeerd doen.

```bash
git config --global pull.rebase true
git config --global rebase.autoStash true
git config --global push.autoSetupRemote true
git config --global alias.sync '!git fetch origin && git rebase origin/main'
```

Vanaf nu is je dagelijkse commando om bij te blijven: `git sync`.

Waarom rebase en geen merge staat uitgelegd in de skill `werkwijze`. Vraag je Claude gewoon: "leg de werkwijze van dit project uit".

## 3. Tokens aanmaken

Kopieer het voorbeeldbestand en vul je eigen waarden in:

```bash
cp .env.example .env
```

`.env` staat in `.gitignore` en wordt nooit gecommit. Deel je tokens met niemand, ook niet met elkaar. Iedereen maakt zijn eigen tokens aan.

**GITHUB_TOKEN**
1. Ga naar GitHub, Settings, Developer settings, Personal access tokens, Fine-grained tokens
2. Maak een token met toegang tot alleen deze repo
3. Permissions: Contents (read and write), Pull requests (read and write), Issues (read and write), Metadata (read)
4. Plak de waarde in `.env`

**SUPABASE_ACCESS_TOKEN**
1. Ga naar `supabase.com/dashboard/account/tokens`
2. Maak een personal access token
3. Plak de waarde in `.env`

**SUPABASE_PROJECT_REF**
Staat in de URL van het Supabase-project: `supabase.com/dashboard/project/<dit-stukje>`. Vraag Stijn welk project we gebruiken.

## 4. MCP's activeren

De MCP-configuratie staat al in de repo, in `.mcp.json`. Je hoeft niets toe te voegen. Start Claude Code in de projectmap:

```bash
cd mind-app
claude
```

Claude vraagt bij de eerste start of je de project-MCP's vertrouwt. Antwoord ja. Controleer daarna:

```
/mcp
```

Je hoort `github`, `supabase` en `figma` te zien staan.

### Figma apart autoriseren

De Figma MCP werkt via OAuth, niet via een token in `.env`. Bij de eerste keer dat Claude iets uit Figma probeert te lezen, opent er een browservenster waarin je inlogt en toegang geeft. Dat is eenmalig.

Werkt de remote server niet, dan is er een alternatief: zet in de Figma **desktop-app** onder Preferences de Dev Mode MCP Server aan, en vervang in `.mcp.json` de figma-URL door `http://127.0.0.1:3845/mcp`. Nadeel: de desktop-app moet dan altijd openstaan. Doe dit alleen als het echt nodig is, en commit die wijziging niet.

Werkt geen van beide, meld het. We kunnen zonder Figma MCP werken, alleen minder prettig.

## 5. Controleer of alles klopt

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

## 6. Je eerste taak

1. Pak een issue van het board dat op `Ready` staat en wijs jezelf toe.
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
