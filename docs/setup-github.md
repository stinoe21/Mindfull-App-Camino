# GitHub instellen

Eenmalig, door de repo-eigenaar. Dit is wat de werkwijze uit `.claude/skills/werkwijze/SKILL.md` technisch afdwingt. Zonder deze instellingen is het een afspraak. Met deze instellingen is het onmogelijk om het verkeerd te doen.

---

## 1. Collaborators toevoegen

Settings, Collaborators, Add people. Beide teamleden krijgen **Write**.

> **Er valt niets te kiezen, en dat is goed om te weten.** Deze repo staat onder een persoonlijk account. Op een persoonlijke repo bestaan rollen niet: iedere collaborator krijgt push-rechten en verder niets. Admin, maintain en triage bestaan alleen op repo's van een **organisatie**. Probeer je het toch via de API met `permission=admin`, dan krijg je een 204 en gebeurt er niets. Gecontroleerd op 30 juli 2026.
>
> Dat heeft één gevolg dat verderop terugkomt: **niemand behalve de eigenaar kan een ruleset omzeilen.** Wil je dat wel, dan moet de repo naar een organisatie. Besloten op 30 juli 2026: dat doen we niet, we blijven op een persoonlijk account. Een organisatie komt er pas bij de overdracht aan Mind, zie `privacy-besluiten.md`. Wat dat betekent voor het mergen staat bij "De ontsnapping".

Stuur ze daarna `ONBOARDING.md`.

## 2. Merge-instellingen

Settings, General, Pull Requests:

- [x] **Allow squash merging** (en zet als default commit message: "Pull request title and description")
- [ ] Allow merge commits -> **uit**
- [ ] Allow rebase merging -> **uit**
- [x] Automatically delete head branches

Squash als enige optie betekent dat `main` een leesbare lijst van features wordt en dat het niet uitmaakt hoe rommelig iemand op zijn eigen branch commit.

## 3. Branch protection op main

> **Besloten op 30 juli 2026: we nemen GitHub Pro.** Branch protection en rulesets vereisen op een **private** repo een betaald plan, 4 dollar per maand. Elke poging geeft anders een 403. Zolang Pro niet actief is, is `main` technisch niet beschermd en leunen we op de drie lagen hieronder.

### De drie lagen die er lokaal onder liggen

Deze stonden er eerst omdat er geen branch protection was. Ze blijven staan nu die er wel is, want ze vangen de fout **voordat** je pusht in plaats van erna. Niet waterdicht tegen moedwil, wel tegen de fout die je op een berg om half elf 's avonds maakt.

**Laag 1: een pre-push hook.** Staat in `.githooks/pre-push` en weigert elke push naar `main`. Iedereen activeert die met `git config core.hooksPath .githooks`, zie `ONBOARDING.md` stap 2. Te omzeilen met `--no-verify`, en dat doe je dus niet.

**Laag 2: Claude Code permissions.** `.claude/settings.json` blokkeert `git push --force` en `git push origin main` voor alle drie de agents. Dit werkt ook als een agent de instructies negeert.

**Laag 3: de afspraak.** Staat in `CLAUDE.md`, in `README.md` en in de skill `werkwijze`. Alle drie de agents kennen hem.

### Wat je kunt doen om het wel af te dwingen

- **GitHub Pro nemen**, 4 dollar per maand. **Dit is wat we doen.** Draai daarna het commando onderaan dit bestand en je hebt echte branch protection.
- **Zo laten.** Met drie mensen die dit gelezen hebben en drie lagen die het ongeluk vangen is dit verdedigbaar. Het blijft de terugvaloptie als Pro om wat voor reden dan ook niet doorgaat.

### De repo publiek maken is geen optie meer

Dat stond hier eerder wel als de gratis route, met als enige kanttekening "overleg het met Mind". Die afweging klopt niet meer.

Sinds `docs/privacy-besluiten.md` bestaat, staan in deze repo de namen van medewerkers van Mind, wanneer zij afwezig zijn, dat hun DPIA nog niet is uitgevoerd en dat de verwerkersovereenkomsten nog niet rond zijn. Dat is interne informatie van een derde partij, inclusief persoonsgegevens.

Het weghalen in een nieuwe commit lost dat niet op: bij een publieke repo is de **history** net zo goed leesbaar, en die informatie zit er vanaf commit `34a2019` in.

Zou je dit ooit alsnog willen, dan is de volgorde: eerst met Mind afstemmen, dan anonimiseren naar rollen in plaats van namen, dan de history herschrijven, en dan pas de zichtbaarheid omzetten. Niet andersom. Vier dollar per maand is goedkoper.

### De ruleset staat aan

Toegepast op 30 juli 2026 als `protect-main`, id `20028996`. Actief op `main` zijn nu: `deletion`, `non_fast_forward` en `pull_request` met één verplichte review, alleen squash, en approvals die vervallen zodra er nieuw werk gepusht wordt.

Opnieuw toepassen of op een verse repo aanzetten gaat zo:

```bash
gh api -X POST repos/stinoe21/Mindfull-App-Camino/rulesets --input docs/ruleset.json
```

Die zet aan: geen deletions, geen force push, PR verplicht, één review, stale approvals vervallen bij een nieuwe push, en alleen squash merge. De repo-eigenaar mag bypassen, dat is de ontsnapping voor als er 12 uur niemand reageert.

Voeg `ci` daarna toe als required status check, maar **pas nadat de eerste CI-run groen is geweest**. Doe je dat eerder, dan blokkeer je elke PR op een check die GitHub nog niet kent.

Bewust **niet** aanzetten, ook niet later:

- Merge queue. Bij drie PR's per dag lost `git sync` dat prima op en het kost alleen wachttijd.
- Require signed commits. Extra setup op drie laptops, geen opbrengst hier.
- Require review from Code Owners. Met drie mensen te streng, de automatische toewijzing is genoeg.
- Require linear history. Squash merge geeft dat al.

### De ontsnapping

Wij lopen overdag. Wachten op een review mag het project nooit stilleggen. Afspraak: **reageert er binnen 12 uur niemand, dan merge je zelf** met het label `self-merged`.

**Besloten op 30 juli 2026: de verplichte review blijft staan, en de repo blijft onder een persoonlijk account.** Dat kan omdat we naast elkaar lopen. Eén review vragen is bij ons één zin en geen procedure, dus die eis kost geen tijd.

Mergen kunnen alle drie, ook zonder admin-rechten. De volgorde is: jij opent een pull request, een van de andere twee klikt **Approve**, en daarna merg je zelf. De ruleset vraagt alleen dat er íemand anders heeft gekeken, niet wie er op de knop drukt.

```bash
gh pr merge <nummer> --squash --delete-branch
git checkout main && git pull
```

Of via de webinterface: open de PR, knop **Squash and merge**.

**Eén ding werkt alleen voor de eigenaar, en dat is bewust geaccepteerd.** De ontsnapping van 12 uur hierboven vraagt om het omzeilen van de ruleset, en dat kan op een persoonlijke repo alleen de eigenaar, zie sectie 1. Zit je vast en is er echt niemand: vraag Stijn, of wacht tot de wandeldag klaar is. Zolang we fysiek bij elkaar zijn is dat geen knelpunt. Wordt het dat wel, dan zijn er twee uitwegen: de verplichte review op nul zetten (`required_approving_review_count` in `ruleset.json`, daarna `gh api -X PUT repos/stinoe21/Mindfull-App-Camino/rulesets/20028996 --input docs/ruleset.json`), of de repo naar een organisatie verhuizen. Dat laatste gebeurt sowieso bij de overdracht aan Mind.

## 4. Labels

Settings, Labels. Maak minimaal:

| Label | Waarvoor |
|---|---|
| `self-merged` | Gemerged zonder review na 12 uur stilte |
| `shared-file` | Raakt een gedeeld bestand, dus met voorrang reviewen |
| `blocked` | Wacht op een beslissing of op iemand anders |
| `design` | Zichtbare wijziging, screenshot vereist |

## 5. Issue board

Projects, New project, Board. Kolommen:

```
Backlog  |  Ready  |  Claimed  |  In progress  |  PR open  |  Merged  |  Blocked
```

Alleen taken in `Ready` mogen geclaimd worden. `Ready` betekent dat alle velden uit het sjabloon in `docs/taakverdeling.md` zijn ingevuld, inclusief welke bestanden er geraakt worden.

## 6. CODEOWNERS

Staat ingevuld met de echte usernames. GitHub stelt daarmee automatisch een reviewer voor bij de paar plekken waar één iemand het overzicht houdt.

**Let op wat er bewust niet in staat:** feature-code en documentatie. `require_code_owner_review` staat uit in de ruleset, dus dit bestand blokkeert niets. Zou je het wel aanzetten, dan loopt elk onderdeel van de app langs één reviewer en is precies dat kapot wat `docs/taakverdeling.md` probeert te voorkomen.

---

## Controle achteraf

Test of de pre-push hook werkt. Dit hoort geweigerd te worden:

```bash
git config core.hooksPath .githooks     # eenmalig, per clone
git checkout main
git commit --allow-empty -m "test"
git push origin main
```

Je hoort de melding "GEBLOKKEERD" te zien. Gebeurt dat niet, dan staat `core.hooksPath` niet goed.

Opruimen:

```bash
git reset --hard origin/main
```

---

## Status

| Stap | Status |
|---|---|
| Repo aangemaakt, private | Gedaan |
| Collaborators (`@Cschoorl`, `@maxhelmantel-gif`) | **Gedaan.** Beiden hebben geaccepteerd en hebben Write, gecontroleerd op 30 juli 2026. |
| Squash-only merge, branches auto-verwijderen | Gedaan |
| Labels | Gedaan |
| Branch protection | **Actief** sinds 30 juli 2026. Ruleset `protect-main` (id `20028996`) via GitHub Pro. |
| Verplichte review | **Blijft op 1**, besloten 30 juli 2026. Alle drie kunnen mergen zodra iemand anders approvet. `docs/ruleset.json` en de live ruleset zijn gelijk. |
| Issue board | Nog doen, sectie 5 |
| CODEOWNERS-verdeling bevestigen | Gedaan, 30 juli 2026. Caesar op structuur en productlogica, Max op het design system. |
