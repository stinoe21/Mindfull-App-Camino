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
| **Apple Developer-account op naam van Mind** | Mind, organisatorisch | Ongeveer 100 euro per jaar. De aanvraag vereist een D-U-N-S-nummer en verificatie door Apple, dat duurt weken en ligt buiten onze controle. Dit is het langste kritieke pad in het project. |
| **Google Play developer-account op naam van Mind** | Mind, organisatorisch | Eenmalig 25 dollar. Belangrijker dan de kosten: een **persoonlijk** account moet voor de eerste productierelease 12 testers 14 dagen aaneengesloten laten testen. Een **organisatie**-account niet. Doen we dit onder een persoonlijk account, dan komt er twee weken wachttijd bij die niemand heeft ingepland. |
| **Verwerkersovereenkomsten** | Mind | Supabase, Apple App Store, Google Play Store. n8n is van deze lijst af, want daar gaan geen persoonsgegevens doorheen. |
| **Verwerkersovereenkomst met een e-mailprovider** | Mind | **Nieuw punt, 30 juli 2026.** De ingebouwde e-mailservice van Supabase mag niet in productie: die stuurt maar een paar mails per uur en is alleen te verhogen met een eigen SMTP. Inloggen per e-mail staat op het board, dus er komt een partij bij die e-mailadressen verwerkt. Zie `limieten-en-misbruik.md`. |
| **Een Supabase-organisatie op naam van Mind** | Mind, organisatorisch | **Nieuw punt, 30 juli 2026.** Het project staat nu in onze eigen organisatie Back to Being en moet naar die van Mind. Zie de sectie hieronder: dat is zelf te doen, maar het is veel eenvoudiger zolang er nog geen gebruikersdata in staat. |
| **Verwerkersovereenkomst tussen Mind en ons** | Mind, juridisch | **Nieuw punt, 30 juli 2026, en dit stond nog op geen enkele lijst.** Mind is verwerkingsverantwoordelijke en wij bouwen en beheren de omgeving waar die data in staat. Dan zijn wij verwerker en hoort daar een overeenkomst tussen te liggen. Alle andere overeenkomsten op deze lijst gaan over partijen onder ons, deze gaat over onszelf. Vraag voor Paul. |

## Overdracht aan Mind

Besloten op 30 juli 2026: **Mind is de verwerkingsverantwoordelijke, en de codebase én het Supabase-project worden aan Mind overgedragen.** Het project komt dus op hun eigen account te staan.

Dat is geen afsluitende handeling maar een eis die nu al gevolgen heeft.

### Het Supabase-project verplaatsen

Supabase heeft hier een zelf uit te voeren functie voor, project transfer tussen organisaties. Voorwaarden gecontroleerd in de documentatie op 30 juli 2026:

- Je moet **owner** zijn van de organisatie waar het project nu staat, en minimaal **member** van de organisatie waar het naartoe gaat.
- Er mag **geen actieve GitHub-integratie** op het project staan. Die hebben we niet, en dat is een reden om hem ook niet aan te zetten zolang de overdracht nog moet gebeuren.
- Geen log drains, en geen project-scoped roles.
- Een transfer verplaatst een project **niet** naar een andere regio. De regio staat al goed op `eu-central-1`, dus dat is geen probleem meer, maar het betekent ook dat je hem later niet meer kunt verschuiven.

> **Doe dit voordat er gebruikersdata in staat.** Nu is het een administratieve handeling. Na livegang verplaats je een productiedatabase met mentale-gezondheidsdata tussen twee accounts, en dan is het een verwerking die in de DPIA hoort en waar Mind apart naar moet kijken. Dit is dezelfde les als de regiowissel van 29 juli: die kon alleen omdat het project nog leeg was.

Twee dingen om bij de overdracht te bespreken, want ze bijten meteen:

- **Het abonnement zit op de organisatie, niet op het project.** Je kunt binnen één organisatie geen betaalde en gratis projecten mengen. Gaat Mind naar Pro voor dit project, dan geldt dat voor alles in die organisatie. Zie `assets-en-media.md` voor waarom Pro uitmaakt.
- **Jouw rechten na de transfer volgen uit je rol in de organisatie van Mind.** Zet Mind ons op read-only, dan kan niemand van ons nog een migratie uitvoeren. Spreek af welke rol wij houden tot de app live en stabiel is.

### En de repo

De GitHub-repo hoort uiteindelijk ook naar Mind. Dat verandert de URL, dus iedereen moet daarna zijn remote bijwerken, en `.github/CODEOWNERS` werkt alleen als wij daar ook collaborator zijn. Los daarvan is er geen bezwaar: de interne informatie over Mind die nu in de history staat en de reden is dat de repo privé blijft, gaat dan naar Mind zelf.

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
