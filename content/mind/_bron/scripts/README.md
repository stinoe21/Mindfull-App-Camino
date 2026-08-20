# Scripts waarmee de bibliotheek is aangevuld

Alleen standaardbibliotheek, geen dependencies. Draaien vanuit deze map,
in deze volgorde. Ze zijn idempotent: bestaande bestanden worden overgeslagen.

| Volgorde | Script | Wat het doet |
|---|---|---|
| 1 | `parse_excel.py` | Leest het xlsx uit `_bron/` en schrijft `excel.json`. Pakt ook de hyperlinks uit de cellen, want een deel van de URL's staat alleen in de link en niet in de celtekst. |
| 2 | `worklist.py` | Zet dat om in `worklist.json` (programma's, gidsen, tests, verhalen) en print de gapanalyse: wat staat er in het Excel maar niet in de contentboom. |
| 3 | `fetch.py` | Haalt de ontbrekende pagina's op en schrijft ze als Markdown. |
| 4 | `build_index.py` | Genereert de drie overzichtsbestanden met de volgorde uit het Excel. |
| 5 | `build_readme.py` | Genereert `INDEX.md` opnieuw. |

`html2md.py` is de converter die `fetch.py` gebruikt. Hij pakt het `<article>`-element
en zet dat om, met behoud van links, afbeeldings-URL's en tabellen.

Twee dingen om te weten als je dit opnieuw draait:

- **wijzijnmind.nl blokkeert onbekende user agents met een 403.** Daarom stuurt
  `fetch.py` een normale browser-user-agent mee. Krijg je 403 op alles, dan is dat
  de oorzaak en niet een afgeschermde pagina.
- Er zit **0,4 seconde tussen de requests**. Laat dat staan.
