# Scope v1: Mentale Weerbericht

> **Status: nog niet ingevuld.** Alles hieronder met `TODO` moet vastliggen voordat we vertrekken. Zolang dat niet zo is, mogen agents geen productbeslissingen nemen. Ontbreekt er informatie, vraag het dan in plaats van iets aan te nemen.

**Userflow (Figma board):**
https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow

Dit board is de bron. Alles hieronder is een vertaling daarvan naar bouwbare taken. Wijkt de code af van het board, dan wint het board, tenzij hier expliciet iets anders staat.

---

## Wat de app doet

> **Concept van 20 augustus 2026, vanaf het whiteboard en de toelichting van Stijn. Nog te bevestigen met z'n drieën; tot die tijd geldt dit niet als vastgestelde scope.**

**De app maakt mentale gezondheid bespreekbaar.** Twee kanten trekken hem:

- **Het mentale weerbericht** is de waarde voor Mind: anoniem inzicht in hoe Nederland zich voelt, via de dagelijkse check-in en het landelijke beeld.
- **De challenges zijn de USP voor de gebruiker**: de reden om de app te downloaden en terug te blijven komen.

Daaromheen ligt één funnel die de onderdelen aan elkaar rijgt: van het weerbericht naar de challenges, naar de content van Mind, naar de quote en de scheurkalender. Hoe die funnel technisch werkt zonder de anonimisering te raken, staat als voorstel in `datamodel.md` ("Voorstel: de funnel van weerbeeld naar challenges en content").

### Must-have en nice-to-have

Van het whiteboard van 20 augustus 2026, zelfde status: concept.

**Must-have voor v1:**

| Wat | Aantekening |
|---|---|
| Mentale weerbericht | Check-in plus landelijk beeld; backend staat al in main |
| Challenges | De USP; content komt uit de bibliotheek van MIND |
| Mind-content, waaronder de psychipedia | Uit de contentbibliotheek in `content/` |
| Hulplijn-integratie | De bestaande afspraak: doorverwijzing naar de MIND Hulplijn via WhatsApp, zonder identiteit vanuit de app, zie `privacy-besluiten.md` |
| Quote-scheurkalender | Dagelijkse quote op het dashboard staat al op het board (`12:179`); of er daarnaast een eigen pagina komt, is nog een open keuze |

**Nice-to-have, dus niet in v1:**

- Zelftests
- Ervaringsverhalen

Beide zitten al wél in de contentbibliotheek in `content/`. Nice-to-have betekent hier dus: niet tonen in v1; later toevoegen is contentwerk en geen verbouwing.

**Nog te verduidelijken uit het bord:** bij mind content staat "(windrichtingen)" tussen haakjes; wat daarmee bedoeld is, moet Stijn even toelichten voordat het hier landt.

## Voor wie

**TODO:** wie is de gebruiker precies? Dat bepaalt de content en de toon.

**De leeftijd ligt wel vast: 16+.** Dat is een harde toegangseis en geen aanbeveling. De check komt vóór het aanmaken van een account en heeft geen Skip. Onder de 16 geen toegang, en daarmee is ouderlijke toestemming niet nodig. Zie `datamodel.md`. Dit moet consistent zijn met de leeftijdsclassificatie die je in App Store Connect invult.

## Relatie met Stichting Mind

**Wat vastligt sinds 30 juli 2026:**

- **Wij bouwen de app, Mind regelt de rest.** Mind is verwerkingsverantwoordelijke en regelt de accounts, de overeenkomsten en de DPIA.
- **Wij dragen alles over aan Mind, en pas daarna gaat de app naar de App Store.** De overdracht is dus geen afronding maar een stap die vooraf gaat aan livegang.
- **Er komt geen gebruikersdata in Supabase voor de overdracht.** Naast de code verhuist ook het Supabase-project zelf naar de organisatie van Mind, zie `privacy-besluiten.md`. Dat kan juist doordat er dan nog geen gebruikersdata in staat.
- **Mind maakt het Apple Developer-account zelf aan en dient de app zelf in.** Wij komen daar niet aan. Hetzelfde geldt voor Google Play.
- **De DPIA wordt uitgevoerd vóór de overdracht en vóór livegang.**

Zie `privacy-besluiten.md` voor wat dit eenvoudiger maakt en wat het lastiger maakt.

**Nog TODO:**

- Is dit formeel een opdracht van Mind of een eigen initiatief? Dat bepaalt de contractvorm, niet de verwerkingsverantwoordelijkheid, want die ligt bij Mind.
- Mogen we de naam en het logo van Mind gebruiken, en wie tekent daarvoor?
- Houden wij ná livegang toegang tot de productieomgeving? Dat is de vraag die bepaalt of er een verwerkersovereenkomst tussen Mind en ons nodig is.

Een Apple Developer Program-account voor een organisatie vereist een D-U-N-S-nummer en verificatie door Apple. Dat kan weken duren. Dat account is nu een actie van Mind en niet van ons, dus het blokkeert ons bouwwerk niet meer. Het blijft wel de langste doorlooptijd naar livegang, en het blokkeert twee dingen die wij niet kunnen afmaken zolang het er niet is: zie de sectie hieronder.

### Testen op iOS zonder het account van Mind

**Besloten op 30 juli 2026: we accepteren dat de Apple-login pas werkt als het account van Mind er is.** Na de DPIA en het aanmaken van dat account helpen wij met het klaarzetten. Vóór de overdracht hoeft die flow dus niet end to end te werken.

Wat wel kan is meer dan het lijkt, want wij hebben alle drie een MacBook en een iPhone:

- **De iOS Simulator** draait een ontwikkelbuild zonder betaald account. Dat dekt verreweg het meeste werk: schermen, navigatie, states, data, de hele flow behalve wat een echte Apple-identiteit nodig heeft.
- **Een fysieke iPhone** kan ook, via een lokale build met een gratis Apple ID. Eén beperking om te kennen: zo'n signing verloopt na zeven dagen en dan moet je opnieuw installeren. Prima om tussendoor te kijken, niet om iets een week op een toestel te laten staan.
- **TestFlight en Sign in with Apple** hebben het betaalde account wel echt nodig. Die twee blijven liggen tot Mind het geregeld heeft.

Wat dat betekent voor onderdeel 1:

> **Bouw de Apple-login zo dat er alleen nog een sleutel in hoeft.** Het scherm, de knop, de afhandeling en de foutstaten zijn gewoon af te maken. Wat ontbreekt is configuratie: een Service ID en een sleutel uit het account van Mind. Zet die achter omgevingsvariabelen, en zorg dat een ontbrekende waarde de rest van de onboarding niet blokkeert tijdens ontwikkelen. Dan is aanzetten later vijf minuten werk en geen verbouwing.

Dit is precies waarom die knop toch in v1 hoort: Apple eist Sign in with Apple zodra je Google aanbiedt, dus later toevoegen is geen optie. Zie de richtlijn hierboven.

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

**Dit wordt een webapp**, besloten op 30 juli 2026. Niet een scherm in de iOS-app achter een rol. Beide pagina's leven in `apps/admin` en zijn de reden dat de repo een monorepo is.

Onderschat dit niet: het is een eigen applicatie met een eigen rollenmodel en eigen RLS-policies. Reken er aparte taken voor, het is geen bijvangst van een feature. Wat de analyticspagina precies toont en aan wie ligt nog open, zie `privacy-besluiten.md`.

Twee dingen die hier nog niet vastliggen: **welk framework** de webapp krijgt, en of hij ook een eigen deploy en domein nodig heeft. Dat laatste is werk dat niemand nu heeft ingepland.

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

**Mind dient de app in, wij niet.** Dat verandert niets aan deze lijst, want een afwijzing gaat over onze code en komt bij ons terug. Het verandert wel de snelheid: er zit een schakel tussen, dus reken op langzamere rondes dan wanneer je zelf indient. Dat is een argument om deze lijst vóór de overdracht af te vinken en niet erna.

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

### Checklists van anderen

Er bestaan goed onderhouden lijsten met afwijzingsredenen uit de praktijk. Nuttig om vlak voor de eerste submit langs te lopen, niet om nu over te nemen:

- [lukylab/appstore-submission-checklist](https://github.com/lukylab/appstore-submission-checklist), praktische checklist op basis van meer dan tien live apps
- [jaywcjlove/app-rejection-fixes](https://github.com/jaywcjlove/app-rejection-fixes), afwijzingen met de bijbehorende oplossing
- [cruisediary/apple-app-review-skills](https://github.com/cruisediary/apple-app-review-skills), 31 checks over alle vijf de secties van de richtlijnen, als Claude Code-skill
- [safaiyeh/app-store-review-skill](https://github.com/safaiyeh/app-store-review-skill), valideert een codebase tegen de richtlijnen en heeft **patterns voor React Native en Expo**, dus die sluit het beste aan op onze stack

### Google Play, en een risico op het kritieke pad

Nieuwe **persoonlijke** developer-accounts moeten voor hun eerste productierelease een closed test doen met minimaal 12 testers die 14 dagen aaneengesloten meedoen. Voor **organisatie**-accounts geldt dat niet.

Dat is een extra reden om ook het Play-account op naam van Mind te zetten en niet alleen het Apple-account. Doen we het onder een persoonlijk account, dan komt er twee weken wachttijd bij die niemand had ingepland. Zie `privacy-besluiten.md`.

---

## Definition of done voor v1

**TODO:** wanneer is dit klaar? Bijvoorbeeld: alle schermen hierboven werken end-to-end, een testgebruiker kan de hele flow doorlopen zonder vast te lopen, en er is een installeerbare build waarmee iemand van Mind dat op een toestel kan controleren.

Let op bij het invullen: "de build staat in TestFlight" kan hier niet als eis staan zolang wij geen Apple Developer-account hebben, en "de Apple-login werkt" ook niet. Die twee horen bij de fase ná de overdracht. Wat er wél als eis in kan: de hele flow loopt door op de Simulator en op een toestel, en de Apple-login wacht alleen nog op een sleutel.
