---
name: mind-content
description: Zoek iets op in de contentbibliotheek van MIND in content/mind, met de challenges, themaspecials, online gidsen, zelftests, psychipedia en ervaringsverhalen. Gebruik dit bij vragen als "welke challenges zijn er", "wat staat er in dag 3 van Aandacht voor Angst", "heeft MIND iets over piekeren", "welke zelftests zijn er", "zoek een ervaringsverhaal over borderline", of wanneer je tekst, opdrachten of tips van MIND nodig hebt om een scherm mee te vullen.
---

# De contentbibliotheek van MIND doorzoeken

341 Markdown-bestanden in `content/mind/`. Alles offline, dus dit werkt op een
berg zonder bereik. Lees `content/mind/LEESMIJ.md` als je wilt weten waar het
vandaan komt en wat er nog ontbreekt.

---

## Voordat je iets overneemt

Deze bibliotheek is **naslag voor ons drieën**, geen goedgekeurde contentbron
voor de app. MIND schrijft bij de challenges, themaspecials en gidsen letterlijk:
"linkjes niet verspreiden, dit is alleen om in te kijken, graag mensen verwijzen
naar de aanmeldpagina". De challenge is met opzet een mailreeks met een aanmelding.

Dus:

- Content opzoeken, citeren in een gesprek, gebruiken om een ontwerp te begrijpen: prima.
- Content in een scherm zetten, in Supabase laden of in een seed opnemen:
  **niet doen zolang dat niet in `docs/scope.md` staat.** Vraag het.

Verzin nooit zelf hulpteksten, telefoonnummers of doorverwijzingen rond crisis
of nood, ook niet als je iets in deze map ziet staan dat erop lijkt.
Zie `CLAUDE.md` sectie 8.

---

## De structuur

```
content/mind/
  INDEX.md                                      alle 339 pagina's, met titel
  LEESMIJ.md                                    herkomst, gaten, en de MIND-afspraak
  psychische-klachten/
    challenges/PROGRAMMAS.md                    <- begin hier voor challenges
    challenges/**                               36 dagpagina's
    flyers-en-informatie/GIDSEN.md              <- begin hier voor gidsen
    flyers-en-informatie/**                     41 online gidsen
    psychipedia/**                              ~190 pagina's over klachten en thema's
    zelftests-overzicht.md                      alle 12 tests met link
  ervaringsverhaal/**                           78 verhalen
  mind-atlas/
  _bron/                                        het xlsx en de scripts
```

Elk bestand begint met frontmatter:

```yaml
---
title: "Challenge 1: Check je slaapplek"
bron: https://wijzijnmind.nl/psychische-klachten/challenges/...
opgehaald: 2026-08-20
---
```

`bron` is de originele URL, `opgehaald` de datum. Noem die datum als je
inhoud citeert die kan verouderen.

---

## Zo zoek je

**Eerst de overzichten, dan pas grep.** De drie overzichtsbestanden bevatten de
structuur die nergens anders staat, met name de volgorde van de challengedagen.

```bash
# welke programma's zijn er, en welke dagen horen erbij
cat content/mind/psychische-klachten/challenges/PROGRAMMAS.md

# alle titels doorzoeken (sneller en preciezer dan volledige tekst)
grep -i "slaap" content/mind/INDEX.md

# volledige tekst, alleen bestandsnamen
grep -ril "ademhaling" content/mind/ | head -20

# volledige tekst met context
grep -rn -B2 -A6 -i "vier-vier-acht" content/mind/psychische-klachten/challenges/
```

Voor een gerichte vraag over één onderwerp: kijk eerst of er een psychipedia-pagina
is (`content/mind/psychische-klachten/psychipedia/<onderwerp>.md`), dan de online
gids (`flyers-en-informatie/<onderwerp>.md`). De psychipedia legt uit wat iets is,
de gids geeft de tips en oefeningen.

---

## De vijf soorten content

| Soort | Waar | Wat het is |
|---|---|---|
| **Challenges** | `challenges/PROGRAMMAS.md` | 3 stuks, 5 tot 7 onderdelen. Opdrachten met tips, bedoeld als reeks. |
| **Themaspecials** | zelfde bestand | 4 stuks, 4 tot 5 dagen. Meer informatief dan opdrachtgericht. |
| **Online gidsen** | `flyers-en-informatie/GIDSEN.md` | 46 onderwerpen. Vaak een versie voor jezelf en een voor naasten. |
| **Zelftests** | `zelftests-overzicht.md` | 12 tests. **Alleen de titel en de link**, de vragen zitten er niet in. |
| **Ervaringsverhalen** | `ervaringsverhaal/` | 78 verhalen van mensen zelf. Persoonlijk, geen advies. |

Plus de psychipedia, de encyclopedie met ongeveer 190 pagina's.

---

## Wat je hier niet vindt

- **De vragen van de zelftests.** Die laden met JavaScript op
  `formulier.wijzijnmind.nl` en zijn niet opgehaald. Alleen de introteksten.
- **Vijf gidsen die alleen als pdf bestaan.** Staan met link in `GIDSEN.md`.
- **De "Leg je telefoon weg challenge".** Wel genoemd op de overzichtspagina,
  maar zonder dagindeling, want die staat niet in het Excel van MIND.
- **Afbeeldingen.** Alleen als URL. Let op: een aantal challengedagen zet de
  opdracht in een plaatje, bijvoorbeeld de checklist bij "Check je slaapplek".
  Zie je een `![...]` en mis je de inhoud, dan is dat de reden.

Mis je iets anders, meld het. Vul het niet zelf aan en schrijf zelf geen
MIND-content bij.

---

## De bibliotheek bijwerken

Als MIND een nieuw Excel stuurt of er content bijkomt: leg het nieuwe xlsx in
`content/mind/_bron/` en draai de scripts uit `_bron/scripts/` op volgorde.
Ze slaan bestaande bestanden over en halen alleen op wat ontbreekt.
Zie `content/mind/_bron/scripts/README.md`.
