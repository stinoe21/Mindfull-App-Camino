# Scope v1: Mentale Weerbericht

> **Status: grotendeels ingevuld, nog te bevestigen met z'n drieën.** Alles hieronder met `TODO` moet vastliggen voordat we vertrekken. Zolang dat niet zo is, mogen agents daar geen productbeslissingen over nemen. Ontbreekt er informatie, vraag het dan in plaats van iets aan te nemen.

**Drie bronnen, en ze vullen elkaar aan.**

| Bron | Wat het vastlegt |
|---|---|
| Het **design system** in `packages/ui/reference` | 41 uitgewerkte schermen, de kernlus, de ontwerpprincipes en de letterlijke teksten. Sinds 20 augustus 2026 in de repo. |
| Het **Figma-board** ([userflow](https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow)) | De volgorde tussen de schermen en de secties die buiten de app vallen. |
| Het **whiteboard van 20 augustus 2026**, met de toelichting van Stijn | De kern van de app, must-have en nice-to-have, in de sectie "Wat de app doet". Status: concept, nog te bevestigen met z'n drieën. |

**Bij twijfel wint het design system**, want dat is uitgewerkt tot op de tekst en het board niet. Wijkt de code af van allebei, dan winnen zij van de code.

Wat hieronder is ingevuld vanuit het design system is als zodanig gemarkeerd. Wat niet uit een van deze bronnen af te leiden was, staat er nog als `TODO`, want dat is een besluit en geen afleiding.

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
| Quote-scheurkalender | Dagelijkse quote op het dashboard staat al op het board (`12:179`) en valt daarmee onder het dashboard-scherm uit de schermenlijst hieronder; of er daarnaast een eigen pagina komt, is nog een open keuze, en die pagina staat dus bewust niet in de twintig schermen |

**Nice-to-have, dus niet in v1:**

- Zelftests
- Ervaringsverhalen

Beide zitten al wél in de contentbibliotheek in `content/`. Nice-to-have betekent hier dus: niet tonen in v1; later toevoegen is contentwerk en geen verbouwing. Ze staan daarom ook in de tabel "Niet in v1" verderop; wijzigt hier iets, pas dan beide plekken aan.

**Geparkeerd:** "windrichtingen" (van het whiteboard, bij mind content) is bewust doorgeschoven naar een eventuele latere versie. Besloten door Stijn op 20 augustus 2026: het raakt de kern van de app niet. Niemand hoeft hiernaar te vragen of het uit te werken voor v1.

## Voor wie

> **Afgeleid uit het design system op 20 augustus 2026, nog te bevestigen.**

Wat het ontwerp hierover vastlegt, en dat is meer dan het lijkt:

- **Iedereen die zich niet ziek voelt maar wel iets wil doen met hoe het gaat.** Het hele ontwerp vermijdt klinische taal: geen schalen, geen labels, geen diagnose. De doelstelling in `HERKOMST.md` is letterlijk dat de gebruiker nooit gescoord of verteld wordt dat zijn dag "goed" of "slecht" was. Dat is een keuze voor een brede groep en niet voor mensen die al in zorg zitten.
- **Iemand die dit dagelijks doet, in een halve minuut.** De check-in is met opzet vier sliders en geen vragenlijst. Ontwerpprincipe: *"Kort en visueel. Keep it short enough to do every day."*
- **Nederlandstalig, informeel aangesproken.** "Je" en "jij", nooit "u", en de voornaam zodra die bekend is ("Goedemorgen, Maria"). Zie `HERKOMST.md`, Content fundamentals.

**TODO:** blijft over: is er binnen die groep een leeftijd of levensfase waar de content op mikt? Dat bepaalt welke challenges en welke artikelen uit de bibliotheek van Mind we tonen. Het ontwerp zegt daar niets over, dus dit is een vraag aan Mind en niet iets om af te leiden.

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

> **De routebestanden staan er sinds 20 augustus 2026**, allemaal leeg, met per stuk een omschrijving en een verwijzing naar hun specificatie. Niemand hoeft tijdens het bouwen nog een gedeeld navigatiebestand aan te raken. De eigenaars hieronder zijn een voorstel op basis van `taakverdeling.md`, nog te verdelen.

Twintig schermen. De specificatie staat in `packages/ui/reference`: `HERKOMST.md` voor de regels en de teksten, `ui_kits/mind-app/index.html` voor het klikbare prototype, `components/` voor de maten.

### Onboarding, eenmalig

| # | Scherm | Route | Voorstel eigenaar |
|---|---|---|---|
| 1 | Welkom | `(onboarding)/welkom` | Caesar |
| 2 | Leeftijdscheck 16+ | `(onboarding)/leeftijd` | Caesar |
| 3 | Inloggen: Apple, Google, e-mail | `(onboarding)/inloggen` | Stijn |
| 4 | Voorkeuren, keuze-chips | `(onboarding)/voorkeuren` | Caesar |
| 5 | Anonimiteit en toestemming | `(onboarding)/anonimiteit` | Stijn |

Scherm 2 is een harde toegangseis zonder Skip, en hij komt vóór het aanmaken van een account. Scherm 3 bouwen we zo dat er alleen nog een sleutel in hoeft, zie de sectie hierboven.

### De kernlus, dagelijks

| # | Scherm | Route | Voorstel eigenaar |
|---|---|---|---|
| 6 | Dashboard | `(app)/dashboard` | Max |
| 7 | Check-in, stap 1 tot 4 | `check-in/[stap]` | Caesar |
| 8 | Check-in bevestigd | `check-in/bevestigd` | Caesar |
| 9 | Jouw weer, de uitkomst | `check-in/uitkomst` | Max |
| 10 | Het weerbericht van Nederland | `weerbericht` | Stijn |

Dit is waar de app om draait: **inchecken, je eigen weerbeeld zien met één zachte tip, en zien dat je meetelt in een gedeeld beeld.** De vier sliders leiden op het toestel tot één van vijf weerbeelden. Die vijf staan al in de database, zie `datamodel.md`. De sliderwaarden zelf verlaten het toestel nooit.

De teksten van de check-in liggen woordelijk vast in `HERKOMST.md` onder *Canonical check-in copy*. Niet parafraseren, ook niet als het beter klinkt.

### Verdieping

| # | Scherm | Route | Voorstel eigenaar |
|---|---|---|---|
| 11 | Challenges | `(app)/challenges` | Caesar |
| 12 | Challenge, detail | `(app)/challenges/[challenge]` | Caesar |
| 13 | Challenge afgerond | `(app)/challenges/[challenge]/afgerond` | Max |
| 14 | Naslagwerk, met zoeken | `(app)/naslagwerk` | Caesar |
| 15 | Artikel | `(app)/naslagwerk/[artikel]` | Caesar |
| 16 | MIND Hulplijn | `hulplijn` | Stijn |

De challenges zijn de reden dat iemand de app downloadt en terugkomt. Het naslagwerk en de artikelen komen uit de contentbibliotheek in `content/`, met bronvermelding "Bron: MIND" onder elk artikel.

### Profiel en beheer

| # | Scherm | Route | Voorstel eigenaar |
|---|---|---|---|
| 17 | Profiel | `(app)/profiel` | Max |
| 18 | Instellingen | `(app)/profiel/instellingen` | Stijn |
| 19 | Account verwijderen | `(app)/profiel/account-verwijderen` | Stijn |
| 20 | Route bestaat niet | `+not-found` | Max |

Scherm 19 is een harde eis van Apple, richtlijn 5.1.1(v), en hij moet echt alle data weghalen. Zie `datamodel.md`.

### Wat er nog naast moet

Deze zijn geen eigen scherm maar wel eigen werk, en ze staan in de definition of done:

- **De systeemstaten.** Fout en offline, leeg weerbericht, geen zoekresultaten, content achter consent, verlopen sessie, eerste-keer-tips, challenge ontgrendeld. Het ontwerp benoemt ze zelf als gat. **Besloten op 20 augustus 2026: we ontwerpen ze zelf**, uit de huisstijl, op het moment dat het eerste scherm ze nodig heeft.
- **De navigatiebalk.** Vijf bestemmingen met "Check in" in het midden, een zwevende pil met frosted achtergrond. De vectorpaden liggen klaar. Er staat nu een tijdelijke standaardbalk.

## Expliciet niet in v1

Dit is de belangrijkste lijst van dit document. Zonder harde non-goals groeit de scope tijdens het bouwen vanzelf.

> **Voorstel van 20 augustus 2026, afgeleid uit het design system, nog te bevestigen.** De redenering staat er bewust bij: een non-goal zonder reden wordt de volgende week weer ter discussie gesteld.

| Niet in v1 | Waarom |
|---|---|
| **Meertaligheid van de content** | De contentbibliotheek van MIND (challenges, naslagwerk, ervaringsverhalen) blijft Nederlands: die vertalen is geen bouwwerk maar redactiewerk. De **UI-taal** is hierop sinds 28 augustus 2026 een uitzondering (issue #47): de interface wordt schakelbaar NL/EN, met de systeemtaal als standaard en de keuze in Instellingen. Consent-, hulplijn- en check-in-teksten blijven Nederlands tot er canonieke Engelse teksten zijn via Paul en MIND; de i18n-laag valt daar terug op het Nederlands. |
| **Push-notificaties** | Er is geen enkel scherm voor toestemming of instellingen ervoor, en het ontwerp bouwt het dagelijkse moment expliciet **niet** op een herinnering maar op een eigen keuze ("Sla vandaag over"). Een notificatie die vraagt hoe je je voelt is bovendien precies het soort ding waar een DPIA vragen over stelt. |
| **Offline-first synchronisatie** | De app moet zonder netwerk netjes falen, en dat staat in de definition of done. Een wachtrij die check-ins later alsnog wegschrijft is iets anders, en die botst met de begrenzing van één check-in per dag. |
| **Delen met derden of hulpverleners** | Er is geen scherm voor, en het staat haaks op de belofte "Niemand kan zien wat jij hebt ingevuld". |
| **Data-export** | Verwijderen moet, exporteren niet. Geen scherm in het ontwerp. |
| **Een webversie van de app zelf** | De app is voor de telefoon ontworpen, 402 punten breed. `apps/admin` is iets anders: dat is een CMS voor Mind, zie hieronder. |
| **Accountherstel via e-mail** | Hangt aan de inlogkeuze, en die is Apple, Google of e-mail. **TODO:** dit is de enige uit deze lijst die echt een besluit is en geen afleiding, want zonder herstel is een vergeten e-mailinlog een doodlopende weg. |
| **Zelftests en ervaringsverhalen** | Nice-to-have, van het whiteboard van 20 augustus 2026. Ze zitten al wél in de contentbibliotheek, dus later toevoegen is contentwerk en geen verbouwing. |
| **Windrichtingen** | Geparkeerd door Stijn op 20 augustus 2026. Raakt de kern niet. |
| **Een iPad-layout** | `supportsTablet` staat op `false`. Universal declareren zonder een echte iPad-layout is een afwijzingsreden, zie hieronder. |
| **Donkere modus** | De app dwingt licht af. Nog geen besluit, en zolang dat zo is is dit de veilige kant: het systeem zelf donker laten maken levert onleesbare tekst op de crèmekleur. Zie `design-system.md`. |
| **Een profielfoto** | Bestaat nergens in de flow. De generieke avatar is bij de overname van het design system bewust verwijderd. |
| **Emoji en stoplichtkleuren** | Geen decoratie in bodytekst, en de feedbackkleuren rood, groen en oranje zijn alleen voor echte systeemfeedback. Iemands stemming krijgt nooit een kleurcode. Zie `productprincipes.md` principe 3. |
| **Proactieve escalatie bij zorgen** | Bewust niet, zie `privacy-besluiten.md`. De route naar de Hulplijn is er altijd, maar de app grijpt nooit zelf in. |

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

**Wat hiervan al vastligt, stand 20 augustus 2026:**

- **Welke gebruikersdata slaan we op?** Precies drie tabellen, allemaal in `datamodel.md` met een bewaartermijn per veld: `profiles` (id, laatst actief, datum van de laatste check-in), `weather_hourly` (uursaldo per weerbeeld, zonder enige gebruikerscode) en `weather_type` (de vijf weerbeelden). Meer niet. Een veld dat daar niet staat, bestaat niet.
- **Slaan we vrije tekst op over iemands gemoedstoestand?** Nee. De check-in is vier sliders en die waarden verlaten het toestel niet: alleen het resulterende weerbeeld gaat mee, en dat komt terecht in een uursaldo waar geen gebruiker aan hangt. Vastgelegd in de mail aan Paul van 7 augustus 2026.
- **Hoe verwijdert een gebruiker zijn account?** In de app zelf, scherm 19 hierboven. Verplicht volgens richtlijn 5.1.1(v), en het moet echt alles weghalen.
- **Doen we aan analytics?** Nee, geen enkel event. Elk veld dat data over een gebruiker vastlegt is een expliciete productbeslissing en geen bijvangst.

**TODO per punt:**
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

- **Placeholder-content of lorem ipsum.** Let op: dat stond nog in de oude Figma-styleguide, en die is sinds 20 augustus 2026 als bron vervallen, zie `design-system.md`.
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

> **Voorstel van 20 augustus 2026, nog te bevestigen.**

Let op bij het lezen: "de build staat in TestFlight" kan hier niet als eis staan zolang wij geen Apple Developer-account hebben, en "de Apple-login werkt" ook niet. Die twee horen bij de fase ná de overdracht.

**v1 is af als dit allemaal waar is:**

1. **De twintig schermen hierboven zijn gebouwd**, elk met zijn loading-, empty- en error-state. Niet alleen het gelukte pad.
2. **Een testgebruiker loopt de hele flow door zonder vast te lopen**, van een verse installatie tot en met het verwijderen van zijn account. Op de Simulator én op een echt toestel.
3. **De eerste keer openen is niet leeg.** Een vers account zonder één check-in toont een werkend dashboard, geen wit vlak. Dit is de meest voorkomende afwijzingsreden en het is precies wat wij het minst testen.
4. **Er staat nergens placeholder-tekst.** Geen lorem ipsum, geen knop die niets doet, geen "NOG TE BOUWEN". `apps/mobile/src/components/NogTeBouwen.tsx` is dan verwijderd: pas als niets hem meer importeert, is dit punt af. Vandaag importeren alle schermen hem nog, dat is de bedoeling van de scaffold.
5. **Het beeld klopt met het ontwerp.** Naast elkaar gecontroleerd op 402 punten breed, en apart op Android, want daar gaan de tekstuitlijning en de nagemaakte vetdruk mis. Zie `van-ontwerp-naar-app.md` deel 6.
6. **`npm run typecheck`, `npm run lint` en `npm test` zijn groen**, op alle drie de laptops en in de CI.
7. **De vier vragen onderaan `productprincipes.md` zijn per scherm nagelopen.**
8. **Geen enkel veld buiten `datamodel.md`**, en `supabase/tests/anonimisering.sql` draait schoon.
9. **De app doet iets begrijpelijks zonder netwerk.** Niet crashen, niet leeg blijven staan.
10. **De Apple-login wacht alleen nog op een sleutel.** Scherm, knop, afhandeling en foutstaten af; een ontbrekende Service ID blokkeert de rest van de onboarding niet.
11. **Er is een installeerbare build waarmee iemand van Mind het op een toestel kan bekijken.** Via Expo Go zolang er geen developer-account is.

**Wat expliciet géén eis is voor v1:** `apps/admin`. Die webapp is nodig voordat Mind zelf content kan toevoegen, maar hij blokkeert de app niet en de mobiele app is de prioriteit. Zie `taakverdeling.md`.
