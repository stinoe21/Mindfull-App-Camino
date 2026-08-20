# MIND contentbibliotheek: wat dit is en hoe je het gebruikt

Dit is de content van Stichting MIND, als platte Markdown, zodat wij er onderweg
in kunnen zoeken zonder website en zonder netwerk. Het is **naslag voor ons**,
geen bron waar de app rechtstreeks uit leest.

## Waar het vandaan komt

Twee bronnen, samengevoegd.

1. **De scrape van 13 augustus 2026.** 259 pagina's van wijzijnmind.nl:
   de hele psychipedia, 78 ervaringsverhalen, en de overzichtspagina's.
2. **Het Excel van MIND**, `_bron/Overzicht voorlichtingsmaterialen voor back2being.xlsx`.
   Dat bevat vijf tabbladen met links naar materiaal dat MIND actief uitgeeft.

De scrape volgde de navigatie van de site. Het Excel wijst naar pagina's die
bewust **niet** in die navigatie staan. Daarom miste de scrape precies het
materiaal dat wij het hardst nodig hebben.

## Wat er op 20 augustus 2026 is bijgekomen

| Wat | Stond in de scrape | Toegevoegd |
|---|---|---|
| Challengedagen (3 challenges) | 0 van 17 | 17 |
| Themaspecialdagen (4 specials) | 0 van 19 | 19 |
| Online gidsen | 0 van 46 | 41, de andere 5 zijn alleen pdf |
| Zelftests | overzicht noemde er 3 van de 12 | lijst met alle 12 |

Totaal 77 nieuwe pagina's, plus drie overzichtsbestanden die de volgorde
vastleggen die alleen in het Excel stond.

## Wat er nog steeds niet in zit

- **De inhoud van de zelftests.** Die draaien op `formulier.wijzijnmind.nl` en
  laden hun vragen met JavaScript. Alleen de introtekst is op te halen.
- **Vijf gidsen die alleen als pdf bestaan**: mentaal fit op het werk, KOPP/KOV,
  paniekaanval, psychische klachten bij ouderen, PTSS in je omgeving.
  De links staan in `GIDSEN.md`.
- **De "Leg je telefoon weg challenge".** Die staat wel op de overzichtspagina
  `psychische-klachten/challenges.md`, maar niet in het Excel, dus we hebben geen
  dagindeling en geen aanmeldpagina. Omgekeerd staat de "Chill, je moet al zoveel
  challenge" wel in het Excel en niet op de overzichtspagina. Geen van beide
  bronnen is dus compleet.
- **Afbeeldingen.** Die staan als URL in de Markdown, niet als bestand. Een aantal
  challengedagen heeft de opdracht in een plaatje staan, bijvoorbeeld de checklist
  bij "Check je slaapplek". Zonder netwerk zie je die niet.

## Voordat dit de app in gaat

MIND schrijft bij drie van de vijf tabbladen letterlijk:

> Let op: linkjes niet verspreiden. Dit is alleen om in te kijken.
> Graag mensen verwijzen naar aanmeldpagina!

De dagpagina's staan technisch publiek op wijzijnmind.nl, maar ze staan bewust
niet in de navigatie. De challenge is een mailreeks: je meldt je aan en krijgt
om de dag een onderdeel. Dat ontwerp is de reden dat die pagina's onvindbaar zijn.

**Content uit deze map één op één in de app tonen haalt dat mechanisme weg.**
Dat is een besluit voor MIND, niet voor ons. Het staat nog niet in `docs/scope.md`,
en `scope.md` heeft ook nog openstaan of we de naam en het logo van MIND mogen
gebruiken en wie daarvoor tekent. Zolang dat niet rond is, is deze map naslag
en niets meer.

## Hoe je erin zoekt

Gebruik de skill `mind-content`, of gewoon:

```bash
grep -ril "piekeren" content/mind/ | head
grep -A5 -i "ademhaling" content/mind/psychische-klachten/challenges/aandacht-voor-angst/*.md
```

Elk bestand heeft frontmatter met `title`, `bron` en `opgehaald`, zodat je altijd
kunt terugvinden waar iets vandaan komt en hoe oud het is.

## Opnieuw opbouwen

Het script dat de aanvulling heeft gedaan staat in `_bron/`. Het leest het Excel,
kijkt wat er ontbreekt, haalt dat op en zet het om naar Markdown.
