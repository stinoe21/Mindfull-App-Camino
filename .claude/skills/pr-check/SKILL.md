---
name: pr-check
description: Review een pull request van een teamgenoot tegen de afspraken van dit project. Gebruik dit wanneer iemand vraagt om een PR na te kijken, een review te doen, of te controleren of een branch klaar is om te mergen. Controleert de grenzen tussen de drie parallelle werkstromen, de designtokens, de states en de privacyregels.
---

# Een pull request reviewen

Wij zijn met drie mensen en we lopen overdag. Een review moet dus snel zijn en toch de dingen vangen die echt misgaan. Focus op deze vier, in deze volgorde. De rest is smaak en die laat je gaan.

---

## 1. Grenzen: raakt deze PR iets van iemand anders?

Dit is het belangrijkste en het snelst te controleren.

```bash
gh pr diff <nummer> --name-only
```

Zoek naar bestanden die er niet in horen:

- `package.json` of de lockfile
- `app.json` / `app.config.ts`
- `packages/ui/tokens/**`
- `supabase/migrations/**`
- `.github/workflows/**`
- `CLAUDE.md`, `.mcp.json`, `.claude/**`
- De root layout van expo-router
- Auth- of sessielogica

Zit daar iets tussen dat niet het onderwerp van de PR is: **vraag om het eruit te halen** en in een aparte PR te zetten. Dit is geen muggenziften. Dit is precies wat het werk van de andere twee breekt.

Kijk ook naar de omvang. Meer dan ongeveer 15 bestanden en het is te groot om goed te reviewen. Vraag om splitsen.

## 2. Design: gaat het beeld drift oplopen?

```bash
gh pr diff <nummer>
```

Zoek in de diff naar:

- Hexcodes (`#`), `rgb(`, `rgba(`
- Losse getallen in styling: `padding: 12`, `borderRadius: 8`, `fontSize: 16`
- Een nieuw gebouwde component die al bestaat in `packages/ui/components`
- Een gewijzigde component die niet in de kitchen sink is bijgewerkt

De lint-regel vangt het meeste, maar niet alles. Wat er doorheen glipt wordt over twee weken zichtbaar als een scherm dat net niet klopt.

## 3. States: is dit echt af, of alleen het gelukte pad?

Controleer of loading, empty, error en offline erin zitten. Ontbreekt er een: benoem welke, dat is genoeg.

Is er iets zichtbaars veranderd zonder screenshot in de PR: vraag erom. Aan een diff zie je niet dat iets lelijk is geworden.

## 4. Privacy: dit is een app over mentale gezondheid

Zoek expliciet naar:

- `console.log` of vergelijkbaar met gebruikersinvoer erin, ook "tijdelijk"
- Een nieuw databaseveld of een nieuwe kolom die niet in `docs/datamodel.md` staat
- Een analytics- of tracking-event dat er niet stond
- Opgeslagen data zonder een pad om die te verwijderen
- Zelfverzonnen hulpteksten, telefoonnummers of doorverwijzingen rond crisis

Elk van deze vier is een blokkerende opmerking, geen suggestie.

---

## Wat je verder controleert

- CI is groen. Is hij rood, dan hoef je verder niets te doen.
- Zit er een `git merge origin/main` in de historie in plaats van een rebase? Vraag om een `git sync` en een force-with-lease.
- Em-dashes in code, commits of UI-tekst.

## Wat je bewust laat gaan

Stijl, naamgeving, structuurvoorkeuren, "ik had het anders gedaan". Wij bouwen in een paar weken een app terwijl we lopen. Een review die op smaak blokkeert kost meer dan hij oplevert.

## De uitkomst

Schrijf een korte review met maximaal vijf punten, gesorteerd op belang, en zeg expliciet of het wat jou betreft kan mergen. Twijfel je: mergen. `main` is beschermd en CI is groen, en een revert is één commando.

Reageert er binnen 12 uur niemand op een PR, dan mag de auteur zelf mergen met het label `self-merged`. Wachten op een review mag het project nooit stilleggen.
