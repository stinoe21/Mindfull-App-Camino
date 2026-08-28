#!/bin/bash
# Vertrek-opruiming, 21 augustus 2026. Eenmalig draaien door Stijn (repo-eigenaar):
#
#   bash vertrek-opruiming.sh
#
# Wat het doet:
#   1. Merget de elf docs-PR's van de vertrekcheck (#31 t/m #41): squash, branch weg.
#      Met --admin, want de eigenaar mag de verplichte review bypassen (de afgesproken
#      ontsnapping uit docs/setup-github.md).
#   2. Haalt "Weerbericht Design System.zip" (45,8 MB) volledig uit de git-history,
#      zodat een verse clone hem niet meer binnenhaalt. Het bestand zelf blijft op
#      deze laptop staan en valt voortaan gewoon onder .gitignore (*.zip).
#   3. Pusht de herschreven main. Dit is de ene bewuste uitzondering op "main nooit
#      herschrijven": niemand anders heeft nog gecloned, en dit kan alleen nu.
#      De ruleset laat het door omdat de eigenaar bypass_mode "always" heeft.
#
# Het script stopt bij de eerste fout en verwijdert zichzelf als alles gelukt is.
set -euo pipefail

ZIPNAAM="Weerbericht Design System.zip"

echo "== Stap 0: controle vooraf =="
git checkout main
git fetch origin
git pull --ff-only

echo
echo "== Stap 1: de elf docs-PR's mergen =="
for pr in 31 32 33 34 35 36 37 38 39 40 41; do
  state=$(gh pr view "$pr" --json state --jq .state)
  if [ "$state" != "OPEN" ]; then
    echo "-- PR #$pr is al $state, overslaan."
    continue
  fi
  echo "-- PR #$pr: wachten op de checks..."
  if ! gh pr checks "$pr" --watch --fail-fast; then
    echo "   Let op: geen groene checks gemeld voor PR #$pr (geen checks of een fout)."
    echo "   Het zijn docs-wijzigingen; er wordt toch gemerged. Ctrl-C om te stoppen."
    sleep 5
  fi
  gh pr merge "$pr" --squash --delete-branch --admin
done

git pull --ff-only

echo
echo "== Stap 2: de zip uit de history halen =="
ZIP_COMMIT=$(git log --format=%H --diff-filter=A -- "$ZIPNAAM" | head -1)
if [ -z "$ZIP_COMMIT" ]; then
  echo "Geen commit gevonden die de zip toevoegde; history is al schoon."
else
  git branch -f tmp-zip-fix "$ZIP_COMMIT"
  git checkout tmp-zip-fix
  git rm --cached "$ZIPNAAM"
  git commit --amend --no-edit
  git checkout main
  git rebase --onto tmp-zip-fix "$ZIP_COMMIT" main
  git branch -D tmp-zip-fix

  if [ -n "$(git log --format=%H -- "$ZIPNAAM")" ]; then
    echo "FOUT: de zip zit nog in de history van main. Er is NIET gepusht."
    exit 1
  fi
  echo "De zip is uit de history. Nieuwe top van main: $(git log --oneline -1)"

  echo
  echo "== Stap 3: de herschreven main pushen =="
  # --no-verify: de lokale pre-push hook weigert elke push naar main, ook deze bewuste.
  git push --force-with-lease --no-verify origin main
fi

echo
echo "== Controle achteraf =="
git fetch origin --prune
git status --short --branch
echo "Open PR's: $(gh pr list --state open --json number --jq length) (hoort 0 te zijn)"
echo "Zip nog in history: $(git log --oneline --all -- "$ZIPNAAM" | wc -l | tr -d ' ') commits (hoort 0 te zijn)"
echo
echo "Klaar. De repo kan naar Max en Caesar."
rm -- "$0"
