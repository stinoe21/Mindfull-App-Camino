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
| **Verwerkersovereenkomsten** | Mind | Supabase, Apple App Store, Google Play Store. n8n is van deze lijst af, want daar gaan geen persoonsgegevens doorheen. |

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
