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

Settings, Rules, Rulesets, New branch ruleset. Target: `main`.

Aanzetten:

- [x] Restrict deletions
- [x] Block force pushes
- [x] Require a pull request before merging
  - Required approvals: **1**
  - [x] Dismiss stale approvals when new commits are pushed
  - [ ] Require review from Code Owners -> **uit**. Met drie mensen is dat te streng, de CODEOWNERS-toewijzing is genoeg.
- [x] Require status checks to pass
  - `ci` toevoegen zodra de eerste run heeft gedraaid
  - [x] Require branches to be up to date before merging

Bewust **niet** aanzetten:

- Merge queue. Bij drie PR's per dag lost `git sync` dat prima op en het kost alleen wachttijd.
- Require signed commits. Extra setup op drie laptops, geen opbrengst hier.
- Require linear history. Squash merge geeft dat al.

### De ontsnapping

Wij lopen overdag. Wachten op een review mag het project nooit stilleggen. Afspraak: **reageert er binnen 12 uur niemand, dan merge je zelf** met het label `self-merged`.

Technisch kan dat op twee manieren. Kies er één:

- **Optie A (aanbevolen):** laat "Required approvals: 1" staan en geef de repo-eigenaar het recht om de ruleset te bypassen. Andere twee vragen dan even om een merge.
- **Optie B:** zet required approvals op 0 en houd het als sociale afspraak. Vertrouwt op discipline, maar blokkeert nooit.

Begin met A. Merk je dat het blokkeert tijdens het lopen, schakel dan over naar B.

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

Test of het werkt door dit te proberen op een testbranch:

```bash
git checkout main
echo test >> README.md
git commit -am "test"
git push origin main
```

Dit **hoort** geweigerd te worden. Wordt het geaccepteerd, dan staat de branch protection niet goed.

```bash
git checkout main && git reset --hard origin/main
```
