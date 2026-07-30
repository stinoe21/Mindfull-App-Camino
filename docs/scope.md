# Scope v1: Mentale Weerbericht

> **Status: nog niet ingevuld.** Alles hieronder met `TODO` moet vastliggen voordat we vertrekken. Zolang dat niet zo is, mogen agents geen productbeslissingen nemen. Ontbreekt er informatie, vraag het dan in plaats van iets aan te nemen.

**Userflow (Figma board):**
https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow

Dit board is de bron. Alles hieronder is een vertaling daarvan naar bouwbare taken. Wijkt de code af van het board, dan wint het board, tenzij hier expliciet iets anders staat.

---

## Wat de app doet

**TODO:** één alinea, af te leiden uit het Figma-board. Wat kan een gebruiker met deze app dat hij nu niet kan?

## Voor wie

**TODO:** wie is de gebruiker precies? Dat bepaalt de content en de toon.

**De leeftijd ligt wel vast: 16+.** Dat is een harde toegangseis en geen aanbeveling. De check komt vóór het aanmaken van een account en heeft geen Skip. Onder de 16 geen toegang, en daarmee is ouderlijke toestemming niet nodig. Zie `datamodel.md`. Dit moet consistent zijn met de leeftijdsclassificatie die je in App Store Connect invult.

## Relatie met Stichting Mind

**TODO, en dit blokkeert het App Store-traject:**

- Is dit een opdracht van Mind of een eigen initiatief?
- Onder welk Apple Developer-account komt de app te staan, dat van Mind of dat van ons?
- Wie is de verwerkingsverantwoordelijke voor de gebruikersdata?
- Mogen we de naam en het logo van Mind gebruiken, en wie tekent daarvoor?

Een Apple Developer Program-account voor een organisatie vereist een D-U-N-S-nummer en verificatie door Apple. Dat kan weken duren en ligt buiten onze controle. Dit is het langste kritieke pad in het hele project, dus het moet als eerste geregeld zijn.

---

## Schermen in v1

**TODO:** vul aan vanuit de userflow in Figma. Elk scherm hier krijgt vóór vertrek een leeg routebestand, zodat niemand tijdens het bouwen nog een gedeeld navigatiebestand hoeft aan te raken.

| # | Scherm | Route | Figma node | Eigenaar |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

## Expliciet niet in v1

Dit is de belangrijkste lijst van dit document. Zonder harde non-goals groeit de scope tijdens het bouwen vanzelf.

**TODO:** vul aan. Denk aan zaken als:

- Meertaligheid
- Push-notificaties
- Offline-first synchronisatie
- Delen met derden of hulpverleners
- Data-export
- Een webversie
- Accountherstel via e-mail

## Beheer, buiten de app

Dit zit niet in de app die gebruikers installeren, maar hoort wel bij het project. Het staat als aparte sectie op het Figma-board, onderaan.

- **Adminpagina voor Mind.** Content toevoegen aan de app, laagdrempelig, zonder tussenkomst van een ontwikkelaar.
- **Analyticspagina voor het IT-departement.** Overzicht van hoe de app ervoor staat. Leest uit Supabase.

Onderschat dit niet: het zijn eigen schermen met een eigen rollenmodel en eigen RLS-policies. Reken er aparte taken voor, het is geen bijvangst van een feature. Wat de analyticspagina precies toont en aan wie ligt nog open, zie `privacy-besluiten.md`.

---

## Privacy en veiligheid

Dit is een app in de mentale gezondheidshoek. Deze punten zijn geen formaliteit.

**TODO per punt:**

- Welke gebruikersdata slaan we op, en waarom? Elk veld staat in `docs/datamodel.md` met een bewaartermijn.
- Slaan we vrije tekst op over iemands gemoedstoestand? Zo ja: waar, hoe lang, en wie kan erbij?
- Hoe verwijdert een gebruiker zijn account en zijn data?
- Doen we aan analytics? Zo ja, op welk niveau, en nooit op inhoud.
- **Crisis-signposting:** wat tonen we als iemand in nood lijkt te zijn? De exacte tekst en doorverwijzing leggen we hier woordelijk vast en wordt door niemand geïmproviseerd, ook niet door een agent. Op het Figma-board staat de **MIND Hulplijn** via WhatsApp. Noem geen andere instantie en geen telefoonnummer tenzij het hier woordelijk staat. Er is bewust **geen** proactieve escalatie, zie `privacy-besluiten.md`.
- Verwerkersovereenkomst met Supabase geregeld? Ligt bij Mind, zie `privacy-besluiten.md`.
- Is er een privacyverklaring, en waar staat die? App Review vraagt erom.

## App Store-risico's

Apps in deze categorie krijgen strengere review. Reken op minimaal één afwijzing.

- Geen medische claims doen. Geen diagnose, geen behandeling, geen "helpt tegen".
- Duidelijk maken dat dit geen vervanging is voor professionele hulp.
- Leeftijdsclassificatie kloppend invullen, en consistent met onze 16+-eis.
- Privacy nutrition label in App Store Connect moet exact overeenkomen met wat de app werkelijk verzamelt.

### Twee harde eisen die code kosten

**Sign in with Apple is verplicht** zodra je een andere social login aanbiedt (richtlijn 4.8). Het board heeft dit al goed: Google, **Apple met private relay**, of e-mail. Bouw je alleen Google, dan is dat een afwijzing. De richtlijn eist ook dat je niet meer dan naam en e-mail opvraagt en dat de gebruiker zijn e-mail privé kan houden, en dat past bij onze privacykeuzes.

**Account verwijderen moet in de app** (richtlijn 5.1.1(v)). Een verwijzing naar "mail ons" of een webformulier is niet genoeg. Dit zit in het onderdeel Profiel en instellingen en het is geen bijvangst: het moet ook echt alle data weghalen, zie `datamodel.md`.

### "Het mag er niet uitzien als een vibe coded app"

Dat is geen enkele richtlijn maar het gevolg van 2.1 (completeness) en 4.2 (minimum functionality). Wat een reviewer concreet afkeurt:

- **Placeholder-content of lorem ipsum.** Let op: dat staat nu nog in de styleguide.
- Knoppen die niets doen, of schermen die leeg blijven.
- Een ontbrekende loading-, empty- of error-state. Onze definition of done dekt dit al, en dit is de reden dat die er staat.
- Een crash of een leeg scherm bij de eerste keer openen, dus met een leeg account en zonder data.
- Verkeerde of ontbrekende app-icon en splash formaten.
- Universal declareren en dan geen bruikbare iPad-layout hebben.

Dit is precies waarom we de states niet als extra maar als onderdeel van "af" behandelen.

### Google Play, en een risico op het kritieke pad

Nieuwe **persoonlijke** developer-accounts moeten voor hun eerste productierelease een closed test doen met minimaal 12 testers die 14 dagen aaneengesloten meedoen. Voor **organisatie**-accounts geldt dat niet.

Dat is een extra reden om ook het Play-account op naam van Mind te zetten en niet alleen het Apple-account. Doen we het onder een persoonlijk account, dan komt er twee weken wachttijd bij die niemand had ingepland. Zie `privacy-besluiten.md`.

---

## Definition of done voor v1

**TODO:** wanneer is dit klaar? Bijvoorbeeld: alle schermen hierboven werken end-to-end, een testgebruiker kan de hele flow doorlopen zonder vast te lopen, en de build staat in TestFlight.
