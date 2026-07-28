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

Je hoeft **geen tokens aan te maken**. Alle drie de MCP's autoriseren via je browser met je eigen account. De configuratie staat al in de repo, in `.mcp.json`.

Start Claude Code in de projectmap:

```bash
cd mentale-weerbericht
claude
```

Bij de eerste start vraagt Claude of je de project-MCP's vertrouwt. Antwoord ja. Daarna staan `github`, `supabase-mind` en `figma` op "pending approval". Keur ze goed, dan opent er per server een browservenster waarin je inlogt.

Controleer met:

```
/mcp
```

Alle drie horen op `connected` te staan.

### Als iets niet verbindt

**figma** is een remote server met OAuth. Werkt hij niet, dan is er een lokaal alternatief: zet in de Figma **desktop-app** onder Preferences de Dev Mode MCP Server aan, en vervang in `.mcp.json` de figma-URL door `http://127.0.0.1:3845/mcp`. Nadeel: de desktop-app moet dan altijd openstaan. Commit die wijziging niet. We kunnen ook zonder Figma MCP werken, alleen minder prettig.

**supabase-mind** heeft nu nog geen `--project-ref`, dus hij ziet alle Supabase-projecten van jouw eigen account. Zodra het project voor deze app bestaat, wordt de config gescoped op dat ene project. Hij staat op `--read-only`, dat is bewust: schemawijzigingen gaan altijd via een migratiebestand.

**Heb je al een user-scope MCP met dezelfde naam?** Dan botst dat. De project-servers heten daarom `supabase-mind` en niet `supabase`. Zie je toch een waarschuwing over "conflicting scopes", draai dan `claude mcp list` en meld wat er staat.

## 4. Tokens voor de app zelf

Alleen nodig zodra de Expo-app er staat, dus nu nog niet.

```bash
cp .env.example .env
```

`.env` staat in `.gitignore` en wordt nooit gecommit.

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
