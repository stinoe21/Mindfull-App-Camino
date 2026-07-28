# Scope v1

> **Status: nog niet ingevuld.** Alles hieronder met `TODO` moet vastliggen voordat we vertrekken. Zolang dat niet zo is, mogen agents geen productbeslissingen nemen. Ontbreekt er informatie, vraag het dan in plaats van iets aan te nemen.

---

## Wat de app doet

**TODO:** één alinea. Wat kan een gebruiker met deze app dat hij nu niet kan?

## Voor wie

**TODO:** wie is de gebruiker? Leeftijd is hier geen detail, want het bepaalt de App Store-leeftijdsclassificatie, of we ouderlijke toestemming nodig hebben, en wat we mogen opslaan.

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

---

## Privacy en veiligheid

Dit is een app in de mentale gezondheidshoek. Deze punten zijn geen formaliteit.

**TODO per punt:**

- Welke gebruikersdata slaan we op, en waarom? Elk veld staat in `docs/datamodel.md` met een bewaartermijn.
- Slaan we vrije tekst op over iemands gemoedstoestand? Zo ja: waar, hoe lang, en wie kan erbij?
- Hoe verwijdert een gebruiker zijn account en zijn data?
- Doen we aan analytics? Zo ja, op welk niveau, en nooit op inhoud.
- **Crisis-signposting:** wat tonen we als iemand in nood lijkt te zijn? De exacte tekst en doorverwijzing (bijvoorbeeld 113 Zelfmoordpreventie) leggen we hier woordelijk vast en wordt door niemand geïmproviseerd, ook niet door een agent.
- Verwerkersovereenkomst met Supabase geregeld?
- Is er een privacyverklaring, en waar staat die? App Review vraagt erom.

## App Store-risico's

Apps in deze categorie krijgen strengere review. Reken op minimaal één afwijzing.

- Geen medische claims doen. Geen diagnose, geen behandeling, geen "helpt tegen".
- Duidelijk maken dat dit geen vervanging is voor professionele hulp.
- Leeftijdsclassificatie kloppend invullen.
- Privacy nutrition label in App Store Connect moet exact overeenkomen met wat de app werkelijk verzamelt.

---

## Definition of done voor v1

**TODO:** wanneer is dit klaar? Bijvoorbeeld: alle schermen hierboven werken end-to-end, een testgebruiker kan de hele flow doorlopen zonder vast te lopen, en de build staat in TestFlight.
