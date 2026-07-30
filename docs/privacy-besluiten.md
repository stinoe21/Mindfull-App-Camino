# Privacybesluiten en openstaande punten

Dit bestand is de administratie van het privacyoverleg met Stichting Mind: wat is besloten, wat staat nog open, en wie is daarvoor aan zet.

Waarom het bestaat: die afspraken leven nu in een mailwisseling, en een mailbox is geen bron voor een agent. De **inhoudelijke** besluiten staan in `datamodel.md` onder "Vastgelegde privacybesluiten", want daar bouwen we tegenaan. Hier staat het proces eromheen.

---

## Aanleiding

Op 29 juli 2026 hebben Eveline Dekkers en Paul namens Mind de user- en dataflow doorgenomen. Hun oordeel: over het algemeen zorgvuldig opgezet, met een aantal punten die aandacht nodig hebben omdat het om mentale-gezondheidsdata gaat.

De besluiten die daaruit volgden staan in `datamodel.md`. Het Figma-board is op 29 juli 2026 bijgewerkt zodat het diagram diezelfde besluiten toont, waaronder de correctie van "gepseudonimiseerd" naar "geanonimiseerd" en het weghalen van de gebruikerscode naar de collectieve store.

## Wat wij nodig hebben van Mind

| Wat | Van wie | Waarom dit blokkeert |
|---|---|---|
| **DPIA**: is die verplicht, wie bepaalt dat, wie voert hem uit, wat kost het, hoe lang duurt het | Eveline en Paul | Art. 35 AVG. Bij mentale gezondheid, een mogelijk kwetsbare doelgroep en een innovatieve verwerking is dit waarschijnlijk verplicht. Zolang dit onbekend is, weten we niet of er nog eisen bij komen. |
| **Akkoord op de weer-metafoor** | Eveline en Paul | Bepaalt of de check-in buiten de bijzondere persoonsgegevens blijft. Zonder akkoord bouwen we de check-in niet. Gaat in een aparte mail met onderbouwing. |
| **Apple Developer-account op naam van Mind** | Mind, organisatorisch | Ongeveer 100 euro per jaar. Vereist een D-U-N-S-nummer en verificatie door Apple, dat duurt weken. **Mind maakt dit aan en dient de app zelf in; wij komen er niet aan.** Het is daarmee niet het kritieke pad van ons bouwwerk, maar wel de poort naar livegang, en het blokkeert twee dingen die wij niet kunnen testen zonder: Sign in with Apple en TestFlight. Zie `scope.md`. |
| **Google Play developer-account op naam van Mind** | Mind, organisatorisch | Eenmalig 25 dollar. Belangrijker dan de kosten: een **persoonlijk** account moet voor de eerste productierelease 12 testers 14 dagen aaneengesloten laten testen. Een **organisatie**-account niet. Doen we dit onder een persoonlijk account, dan komt er twee weken wachttijd bij die niemand heeft ingepland. |
| **Verwerkersovereenkomsten** | Mind | Supabase, Apple App Store, Google Play Store. n8n is van deze lijst af, want daar gaan geen persoonsgegevens doorheen. |
| **Verwerkersovereenkomst met een e-mailprovider** | Mind | **Nieuw punt, 30 juli 2026.** De ingebouwde e-mailservice van Supabase mag niet in productie: die stuurt maar een paar mails per uur en is alleen te verhogen met een eigen SMTP. Inloggen per e-mail staat op het board, dus er komt een partij bij die e-mailadressen verwerkt. Zie `limieten-en-misbruik.md`. |
| **Een Supabase-organisatie op naam van Mind** | Mind, organisatorisch | **Nieuw punt, 30 juli 2026.** Het project staat nu in onze eigen organisatie Back to Being en moet naar die van Mind. Zie de sectie hieronder: dat is zelf te doen, maar het is veel eenvoudiger zolang er nog geen gebruikersdata in staat. |
| **Verwerkersovereenkomst tussen Mind en ons: alleen als wij ná livegang toegang houden** | Mind, juridisch | **Bijgesteld op 30 juli 2026.** Ik had dit als ontbrekend punt opgeschreven, maar het hangt af van één ding. Vóór de overdracht bestaat er geen gebruikersdata, dus verwerken wij niets en is er niets om af te spreken. Houden wij ná livegang toegang tot de productieomgeving voor onderhoud, dan verwerken wij vanaf dat moment wél persoonsgegevens namens Mind en hoort er een overeenkomst te liggen. Vraag dus niet om het contract, maar beslis eerst: blijven wij erbij of niet? |

## Overdracht aan Mind

Zo is het ingericht, vastgelegd op 30 juli 2026.

| Wie | Wat |
|---|---|
| Wij | Bouwen de app. Verder niets eromheen. |
| Mind | Is verwerkingsverantwoordelijke en regelt de rest: het Apple Developer-account, het Play-account, de overeenkomsten en de DPIA. |

Vier dingen die daaruit volgen, en ze veranderen de rest van dit document:

- **De app gaat niet live voordat Mind alles in handen heeft.** De overdracht komt dus vóór de App Store, niet erna.
- **Wij komen niet aan het Apple Developer-account van Mind.** Zij maken het aan en zij dienen de app in.
- **Er komt geen gebruikersdata in Supabase voor de overdracht.** Alleen de code wordt overgedragen.
- **De DPIA wordt uitgevoerd vóór de overdracht en vóór livegang.**

### Wat dit eenvoudiger maakt

Het risico dat hier eerder stond, een productiedatabase met mentale-gezondheidsdata tussen twee accounts verplaatsen, bestaat niet. Er staat niets in dat mee hoeft. Dezelfde reden waarom de regiowissel van 29 juli nog kon.

Eén technische voorwaarde blijft staan: zet **geen GitHub-integratie** op het Supabase-project. Dat blokkeert een project transfer, en het is de enige voorwaarde uit die lijst die wij per ongeluk kunnen aanzetten. Gecontroleerd in de documentatie op 30 juli 2026.

### Wat dit lastiger maakt

**Het schema moet volledig reproduceerbaar zijn uit `supabase/migrations/`.** Die regel stond er al, maar was tot nu toe hygiëne. Nu ís het de overdracht: wat niet in een migratie staat, bestaat straks niet in de omgeving van Mind. Eén tabel die iemand via het dashboard heeft aangeklikt, en de app werkt daar niet.

**De DPIA komt laat en kan nog eisen opleveren.** Een beoordeling die vlak voor de overdracht wordt uitgevoerd, kan leiden tot een eis aan een app die al gebouwd is. Vraag of die beoordeling vroeger kan. Kan dat niet, vraag dan nu welke onderwerpen zij gaan toetsen, dan bouwen we daar meteen naartoe in plaats van het achteraf te repareren.

**Testen op een iPhone.** Sign in with Apple is niet te configureren zonder Apple Developer-account, en TestFlight ook niet. Zie `scope.md`.

### En de repo

De GitHub-repo gaat ook naar Mind. Dat verandert de URL, dus iedereen werkt daarna zijn remote bij, en `.github/CODEOWNERS` werkt alleen als wij daar collaborator zijn. Los daarvan is er geen bezwaar: de interne informatie over Mind die nu in de history staat, en de reden is dat de repo privé blijft, gaat dan naar Mind zelf.

## Wat wij nog moeten beslissen

| Wat | Waarom het nog niet vastligt |
|---|---|
| Grondslag voor de leeftijdscategorie | Stond op toestemming. Nu 16+ een toegangseis is en geen voorkeur, klopt dat waarschijnlijk niet meer. Juridische vraag voor Paul. |
| Wat de analyticspagina toont, en aan wie | Geaggregeerde cijfers voor het IT-departement is iets anders dan individuele check-ins kunnen inzien. Het tweede is een nieuwe verwerking en moet dan expliciet beschreven worden. |
| Welke analytics-events we vastleggen | Elk event is een expliciete productbeslissing en komt eerst in `datamodel.md` te staan. |
| Offline gedrag | Werkt de app offline, en zo ja, wat staat er dan lokaal op het toestel? |

## Planning

Wij leveren een planning inclusief de acties die we van Mind verwachten. Houd rekening met: Eveline is afwezig tot en met 16 augustus 2026, Marianne is terug vanaf 10 augustus 2026, en Mind is in dezelfde periode druk met de campagne "Leg je telefoon weg".

## Live-gang

De app gaat pas live in overleg met en na goedkeuring van Mind. Loopt een verwerkersovereenkomst of een assessment vertraging op, dan gaan we niet alsnog live. Dat is expliciet toegezegd.

## Grenzen die we bewust hebben getrokken

Deze staan hier zodat niemand ze later per ongeluk "oplost".

- **Geen proactieve crisis-escalatie.** Heeft iemand structureel zeer negatieve check-ins, dan gebeurt er niets automatisch. Alleen de disclaimer en de hulpknop. Om wel te kunnen escaleren zouden we precies de persoonsgebonden data over mentaal welzijn moeten bewaren die we bewust niet bewaren. De disclaimer blijft duidelijk dat de app geen hulpverlening is en geen vervanging voor zorg.
- **Geen verwijdering uit het landelijke weerbericht.** Die data is anoniem en dus niet herleidbaar, en daarmee ook niet te verwijderen. Dat is geen tekortkoming maar het directe gevolg van de keuze voor echte anonimisering. Het moet wel in de consent-tekst staan.
- **Geen externe analytics-tool.**
- **Geen persoonsgegevens door n8n.**
- **Geen toegang onder de 16.**
