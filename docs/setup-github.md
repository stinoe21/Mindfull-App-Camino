# GitHub instellen

Eenmalig, door de repo-eigenaar. Dit is wat de werkwijze uit `.claude/skills/werkwijze/SKILL.md` technisch afdwingt. Zonder deze instellingen is het een afspraak. Met deze instellingen is het onmogelijk om het verkeerd te doen.

---

## 1. Collaborators toevoegen

Settings, Collaborators, Add people. Geef beide teamleden **Write**-rechten. Niet Admin, want dan kunnen ze branch protection omzeilen.

Stuur ze daarna `ONBOARDING.md`.

## 2. Merge-instellingen

Settings, General, Pull Requests:

- [x] **Allow squash merging** (en zet als default commit message: "Pull request title and description")
- [ ] Allow merge commits -> **uit**
- [ ] Allow rebase merging -> **uit**
- [x] Automatically delete head branches

Squash als enige optie betekent dat `main` een leesbare lijst van features wordt en dat het niet uitmaakt hoe rommelig iemand op zijn eigen branch commit.

## 3. Branch protection op main

> **Werkt op dit moment niet.** GitHub vereist een betaald plan (Pro, 4 dollar per maand) voor branch protection en rulesets op **private** repos. De poging is met een 403 geweigerd. Zolang dat zo is, is `main` technisch niet beschermd op de server.

### Wat we in plaats daarvan doen

Drie lagen die het ongeluk vangen. Niet waterdicht tegen moedwil, wel tegen de fout die je op een berg om half elf 's avonds maakt.

**Laag 1: een pre-push hook.** Staat in `.githooks/pre-push` en weigert elke push naar `main`. Iedereen activeert die met `git config core.hooksPath .githooks`, zie `ONBOARDING.md` stap 2. Te omzeilen met `--no-verify`, en dat doe je dus niet.

**Laag 2: Claude Code permissions.** `.claude/settings.json` blokkeert `git push --force` en `git push origin main` voor alle drie de agents. Dit werkt ook als een agent de instructies negeert.

**Laag 3: de afspraak.** Staat in `CLAUDE.md`, in `README.md` en in de skill `werkwijze`. Alle drie de agents kennen hem.

### Wat je kunt doen om het wel af te dwingen

Kies er één:

- **GitHub Pro nemen**, 4 dollar per maand. Draai daarna het commando onderaan dit bestand en je hebt echte branch protection.
- **Repo publiek maken.** Dan is branch protection gratis. Er staan geen secrets in (`.env` staat in `.gitignore`), maar `docs/scope.md` gaat wel details over Stichting Mind bevatten. Overleg dat met hen voordat je dit doet.
- **Zo laten.** Met drie mensen die dit gelezen hebben en drie lagen die het ongeluk vangen, is dit verdedigbaar. Het is de goedkoopste optie en `git revert` blijft één commando.

### Zodra branch protection wel kan

Er staat een kant-en-klare ruleset klaar in `docs/ruleset.json`. Toepassen:

```bash
gh api -X POST repos/stinoe21/mentale-weerbericht/rulesets --input docs/ruleset.json
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

Vul `.github/CODEOWNERS` in met de echte GitHub-usernames zodra die bekend zijn. GitHub wijst dan automatisch de juiste reviewer toe.

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
| Collaborators uitgenodigd (`@Cschoorl`, `@maxhelmantel-gif`) | Uitnodiging verstuurd, moeten zelf accepteren |
| Squash-only merge, branches auto-verwijderen | Gedaan |
| Labels | Gedaan |
| Branch protection | **Geblokkeerd**, vereist GitHub Pro. Zie sectie 3. |
| Issue board | Nog doen, sectie 5 |
| CODEOWNERS-verdeling bevestigen | Nog doen, is nu een voorstel |
