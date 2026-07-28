---
name: werkwijze
description: De git- en samenwerkingsworkflow van dit project met drie parallelle ontwikkelaars in één repo. Gebruik dit bij alles rond branches, rebasen, pull requests, mergen, conflicten, force-pushen, of als iemand vraagt hoe we samenwerken, hoe we pushen, of waarom iets niet direct naar main mag. Ook bij vragen als "hoe werkt rebase", "mijn push wordt geweigerd", "ik heb een merge conflict" of "hoe deel ik dit met de rest".
---

# Werkwijze: drie mensen, één repo

Wij zijn met drie mensen in één GitHub-repo. Iedereen heeft een eigen lokale clone en een eigen Claude Code-sessie. Er kunnen dus op elk moment drie agents tegelijk aan het werk zijn op verschillende branches.

Deze skill legt uit hoe dat zonder ongelukken verloopt.

---

## 1. Het model in één alinea

`main` is heilig en altijd werkend. Niemand pusht daar rechtstreeks naartoe. Al het werk gebeurt op een korte branch die bij één taak hoort. Je houdt die branch bij met **rebase**, niet met merge. Als je klaar bent gaat het via een pull request met **squash merge** naar `main`. Daarna gooi je de branch weg.

## 2. Waarom rebase en niet merge

Je begint 's ochtends vanaf `main`:

```
main:            A---B
                      \
jouw branch:           C---D
```

Iemand anders is eerder klaar, zijn PR wordt gemerged. `main` loopt door:

```
main:            A---B---E
                      \
jouw branch:           C---D        <- jij zit nog op de oude B
```

**Met merge** krijg je een extra commit die inhoudelijk niets doet:

```
main:            A---B---E
                      \   \
jouw branch:           C---D---M    <- M is boekhouding, geen werk
```

Met drie mensen krijg je daar tientallen van en wordt de historie een vlecht die je later niet meer kunt lezen.

**Met rebase** worden jouw commits opnieuw toegepast bovenop het nieuwe werk:

```
main:            A---B---E
                          \
jouw branch:               C'--D'   <- alsof je vanaf het begin op E werkte
```

Rechte lijn, geen ruis. `C'` en `D'` zijn nieuwe commits met nieuwe SHA's en dezelfde inhoud. Dat verklaart de force-push in stap 4 hieronder.

## 3. De cyclus per taak

```bash
# 1. Start vanaf de nieuwste main
git checkout main
git pull

# 2. Branch per TAAK, niet per persoon
git checkout -b feat/check-in

# 3. Werk. Commit vaak en klein, het wordt straks toch samengeperst.
git add .
git commit -m "add check-in form"

# 4. Blijf bij. Doe dit elke ochtend en vlak voordat je je PR uit draft haalt.
git sync                        # = git fetch origin && git rebase origin/main

# 5. Push. Force-with-lease omdat rebase je commits herschreef.
git push --force-with-lease

# 6. Pull request openen. Doe dit VROEG, als draft, niet pas als je klaar bent.

# 7. Na de squash merge op GitHub:
git checkout main
git pull
git branch -D feat/check-in
```

Is `git sync` niet ingesteld, draai dan eerst de vier regels uit `ONBOARDING.md` stap 2.

## 4. Force-push: de enige regel die telt

```bash
git push --force-with-lease     # ALTIJD dit
git push --force                # NOOIT dit
```

`--force-with-lease` weigert te pushen als iemand anders intussen naar jouw branch heeft gepusht. Gewone `--force` gooit dat werk zonder waarschuwing weg. Het verschil is onzichtbaar tot de dag dat je iemands halve dag wist.

Force-pushen doe je alleen naar je **eigen feature branch**. Nooit naar `main`.

## 5. Conflicten oplossen

Stopt de rebase met een conflict, dan noemt git het bestand:

```bash
# open het bestand, kies wat er moet blijven staan, haal de <<<< ==== >>>> markers weg
git add pad/naar/bestand.ts
git rebase --continue
```

Wil je eruit, om welke reden dan ook:

```bash
git rebase --abort
```

Dat zet alles exact terug zoals het was. Er gaat niets verloren. Dit is de belangrijkste knop om te kennen.

Ben je al klaar met rebasen en heb je spijt:

```bash
git reflog                      # toont elke staat waar je branch ooit in stond
git reset --hard HEAD@{3}       # zet je terug naar die staat
```

Git gooit 90 dagen lang niets weg. Zolang je niet force-pusht naar `main` kun je met rebase niets permanent kapotmaken.

**Diagnose:** krijg je bij elke rebase conflicten, dan is niet git het probleem maar de taakverdeling. Twee mensen zitten dan in dezelfde bestanden. Meld dat, dan snijden we de taken opnieuw.

## 6. Naar main via squash merge

De rebase brengt je code niet op `main`. Dat doet de pull request.

Op GitHub kies je **Squash and merge**. Alle commits van je PR worden één commit op `main`. Gevolg:

- `main` is een leesbare lijst van features, geen 200 losse "wip" en "fix typo" commits.
- Een feature terugdraaien is één `git revert <sha>`.
- Het maakt niet uit hoe rommelig je op je eigen branch commit.

In de repo-instellingen staan "Create a merge commit" en "Rebase and merge" uit. Squash is de enige optie.

## 7. Waarom conflicten bij ons zeldzaam zijn

De regel waar onze parallelle workflow op rust:

> Een taak bestaat uit **nieuwe bestanden plus hooguit één bestaand bestand**.

Klopt dat, dan kan er per definitie geen conflict ontstaan. Daarom:

- Alle schermen uit de userflow bestaan al als bestand op hun route. Een feature bouwen is dat bestand vullen en er nieuwe bestanden naast zetten.
- Feature-code blijft binnen `apps/mobile/src/features/<feature>/`.
- Gedeelde bestanden (`package.json`, tokens, migraties, config, app-layout) wijzig je in een **aparte kleine PR** die binnen een halfuur merget. Nooit als bijvangst.

Kun je je taak niet doen zonder een gedeeld bestand aan te raken: stop en meld het.

## 8. Pull requests

- **Open vroeg, als draft.** Dan zien de anderen waar je zit en bouwt niemand hetzelfde.
- **Houd ze klein.** Een PR die in tien minuten te reviewen is, is binnen een uur gemerged. Een PR van 40 bestanden blijft dagen liggen en dat kost meer dan het scheelt.
- **Eén reviewer volstaat.** Reageert er binnen 12 uur niemand, dan merge je zelf met het label `self-merged`. Wij lopen overdag, dus wachten op een review mag het project nooit stilleggen.
- Zichtbare wijziging? Screenshot of schermopname in de PR. Aan een diff zie je niet dat een scherm lelijk is geworden.

## 9. Dingen die je nooit doet

- Rechtstreeks naar `main` pushen
- `main` rebasen
- `git push --force` zonder `-with-lease`
- Een branch rebasen waar iemand anders ook op werkt
- Een branch op naam maken (`stijn-dev`). Branches horen bij taken, niet bij mensen.
- Een gedeeld bestand meenemen in een feature-PR
- Een dependency toevoegen om een probleem te omzeilen

## 10. Als je vastzit

Meld het. Een taak die niet lukt binnen de afgesproken grenzen is een geldig eindresultaat. Wat geen geldig eindresultaat is: de grenzen zelf oprekken om het toch af te krijgen.
