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
- Een Supabase-account, en een uitnodiging voor de Supabase-organisatie van dit project (vraag Stijn). Zonder die uitnodiging kun je de `supabase-mind`-MCP wel autoriseren, maar ziet hij het project niet.
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

Je hoeft **geen tokens aan te maken**. Alle drie de MCP's zijn remote servers die je via je browser autoriseert met je eigen account. De configuratie staat al in de repo, in `.mcp.json`. Voeg daar zelf niets aan toe: die wijziging krijgt de rest ook.

Waar we ze voor gebruiken:

| Server | Waarvoor |
|---|---|
| `github` | Pull requests, issues, reviews |
| `supabase-mind` | Database inspecteren, types genereren. Read-only. |
| `figma` | **Designs ophalen.** Frames, componenten, variables en screenshots. Dit is onze route van design naar code: laat Claude het frame ophalen in plaats van een screenshot op het oog nabouwen. |

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

**supabase-mind** is de remote server `https://mcp.supabase.com/mcp`, waar je met je eigen Supabase-account op inlogt. Let goed op het venster dat opent: Supabase vraagt **voor welke organisatie** je toegang geeft. Kies de organisatie waar het project van deze app in staat. Kies je de verkeerde, dan verbindt de server wel maar ziet hij het project niet, en dat lijkt op een storing terwijl het er geen is. Zie je een leeg projectenlijstje, dan heb je waarschijnlijk je uitnodiging voor de organisatie nog niet geaccepteerd.

Draait hij via `npx`? Dan is je `.mcp.json` oud. De stdio-variant (`npx @supabase/mcp-server-supabase`) kan geen browserlogin en faalt met een `-32000`-fout omdat hij een personal access token mist. `git sync` haalt de goede config binnen.

Hij staat op `read_only=true`, dat is bewust: schemawijzigingen gaan altijd via een migratiebestand. De URL is nog niet gescoped op één project met `?project_ref=<ref>`, dus voorlopig zie je alle projecten van de organisaties waarvoor je toegang gaf.

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

## 7. Je eerste taak

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
