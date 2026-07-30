# Productprincipes

Dit document gaat over **houding**, niet over functionaliteit. Wat de app doet staat in `scope.md`, hoe hij eruitziet in `design-system.md`, wat we met data doen in `datamodel.md`. Hier staat hoe de app zich gedraagt tegenover iemand die hem opent.

Waarom dit bestaat: drie agents kunnen alle drie een technisch correct scherm bouwen dat toch verkeerd voelt. Aan een diff zie je niet dat een app iemand zit te beoordelen. Deze regels zijn de enige manier om dat structureel te voorkomen.

Elk principe hieronder is terug te voeren op de userflow op het Figma-board. Ze zijn niet verzonnen als algemene wellness-wijsheid.

---

## De tien principes

### 1. De app voelt menselijk en rustig, niet klinisch

Geen medische taal, geen scores, geen voortgangsbalken die suggereren dat er een doel te halen is. De weermetafoor is er precies om dit te bereiken: weer is iets dat gebeurt, niet iets waar je in faalt.

### 2. De gebruiker wordt nooit gediagnosticeerd

Niet impliciet ook niet. Geen "je lijkt gestrest", geen conclusie uit een reeks check-ins, geen samenvatting van iemands gemoedstoestand in eigen woorden. De app spiegelt wat iemand zelf heeft ingevuld en gaat niet verder.

Dit is niet alleen ethiek. Het is de reden dat de check-in buiten de bijzondere persoonsgegevens kan blijven, zie `privacy-besluiten.md`. Een app die interpreteert, produceert een gezondheidsgegeven. Een app die alleen registreert wat iemand zelf koos, doet dat niet.

### 3. Een emotionele staat wordt niet als goed of slecht beoordeeld

Geen kleurcodering van rood naar groen, geen emoji van zuur naar blij, geen taal als "beter" of "slechter" tussen twee check-ins. Bewolkt is geen mislukte zon.

Dit heeft directe gevolgen voor de tokens: er is geen `color/mood/bad`. Weertypen krijgen neutrale, gelijkwaardige namen. Zie `design-system.md`.

### 4. Positieve antwoorden worden niet beloond, negatieve niet bestraft

Geen streaks, geen badges, geen confetti bij een zonnige dag, geen bemoedigende push als het even minder gaat. Beloning maakt van een check-in een test die je kunt halen, en dan gaan mensen invullen wat goed scoort.

Het board noemt dit expliciet als **No-guilt close**: iemand moet zonder wrijving kunnen stoppen. Dat is een feature, geen randgeval.

### 5. Iedere pagina heeft maximaal één duidelijke primaire actie

De rest is secundair of staat er niet. Twijfel je tussen twee even belangrijke knoppen, dan is het scherm te vol of moet het gesplitst.

### 6. Niet-essentiële stappen kunnen overgeslagen worden

Op het board staat dit op drie plekken: de voorkeuren en interesses hebben Skip, de contextuele tips bij eerste gebruik zijn niet blokkerend, en de weer-check-in is opt out.

> **De uitzonderingen, en die zijn hard.** Drie stappen hebben bewust **geen** Skip en die mag je nooit skipbaar maken, ook niet om een flow soepeler te laten voelen:
>
> | Stap | Waarom geen Skip |
> |---|---|
> | **Leeftijdscheck 16+** | Toegangseis, geen voorkeur. Onder de 16 geen toegang, en daarmee is ouderlijke toestemming niet nodig. Board node `74:230`. |
> | **Account en voorwaarden accepteren** | Grondslag overeenkomst. Board node `12:133`, gemarkeerd verplicht. |
> | **Disclaimer dat dit geen hulpverlening is** | Zonder dit klopt onze positie tegenover App Review en tegenover Mind niet. Board node `12:155`. |
>
> Bouw je een stap in de onboarding, controleer dan eerst of hij in dit lijstje staat. Twijfel je of iets essentieel is: essentieel betekent dat het in `scope.md` of `datamodel.md` als verplicht staat, niet dat het handig is.

### 7. De app vermijdt onnodige cognitieve belasting

Korte teksten, weinig keuzes per scherm, geen jargon. Het board zegt over de introschermen: maximaal één tot twee. Dat is de maat voor de rest.

Iemand opent deze app misschien op een dag dat lezen zwaar is. Dat is de gebruiker om wie het gaat, niet iemand die uitgerust een tutorial doorwerkt.

### 8. Bestaande componenten worden hergebruikt voordat nieuwe worden gemaakt

Zoek eerst in `packages/ui/components`. Een tweede Button die net iets anders is, is hoe een design system sterft. Dit staat ook in `design-system.md`, hier omdat het een productbeslissing is en niet alleen een technische.

### 9. De MIND Hulplijn blijft bereikbaar

Het board is hier specifieker dan een principe: de knop naar de **MIND Hulplijn via WhatsApp** is **persistent op elk scherm** (node `12:176`). Niet weggestopt in een menu, niet alleen op het dashboard.

Twee harde randvoorwaarden:

- **Verzin nooit zelf een hulptekst, telefoonnummer of doorverwijzing.** Alleen wat woordelijk in `scope.md` staat. Geen andere instantie erbij, hoe logisch die ook lijkt.
- **Er is bewust geen proactieve escalatie.** Bij structureel negatieve check-ins gebeurt er niets automatisch. Om dat te kunnen zouden we precies de persoonsgebonden data over mentaal welzijn moeten bewaren die we bewust niet bewaren. Zie `privacy-besluiten.md`.

### 10. De app voelt geloofwaardig en volwassen, niet als een generieke wellness- of AI-app

Het board maakt dit concreet bij Slim zoeken: dat **doorzoekt MIND-content, toont altijd de bronpagina, en is geen chat** (node `12:191`). Geen gegenereerde antwoorden over iemands mentale gezondheid, altijd herleidbaar naar een bron van Mind.

Ook: de dagelijkse quote is **voor iedereen gelijk** (node `12:179`). Niet gepersonaliseerd op gemoedstoestand. Dat is een bewuste keuze, geen gemiste kans.

---

## Wat dit betekent als je bouwt

Voordat je een scherm afrondt, loop deze vier langs:

1. Beoordeelt dit scherm de gebruiker, ook impliciet? Kleur, woordkeus, ordening.
2. Kan iemand hier verder zonder iets over zichzelf prijs te geven, tenzij dit een van de drie verplichte stappen is?
3. Is de Hulplijn-knop bereikbaar?
4. Zou dit scherm ook in een generieke moodtracker kunnen staan? Dan is het waarschijnlijk te weinig Mind en te veel app.

Botst een principe met wat je gevraagd is te bouwen, dan is dat geen detail dat je zelf oplost. Meld het. Zie `CLAUDE.md` sectie 12.

## Waar dit vandaan komt

De principes zijn op 30 juli 2026 vastgelegd op basis van een voorstel voor het agent-framework, en daarna gecontroleerd tegen de userflow op het Figma-board. Waar het board concreter was dan het principe, is het board gevolgd.

Wat bewust **niet** in dit document staat: welke schermen er zijn en hoe ze heten. Dat komt uit Figma en hoort in `scope.md`, zodra het daar is vastgelegd.
