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
| ~~**DPIA**: is die verplicht~~ | Paul | **Beantwoord op 10 augustus 2026.** Niet DPIA-plichtig, omdat de risico's kleiner bleken dan gedacht. Paul voert er alsnog een korte uit na zijn vakantie (14 tot en met 23 augustus), niet omdat het moet maar om het compliance-proces vast te leggen bij een app die openbaar beschikbaar komt. Hij neemt daarin de lead en komt zelf ver met wat wij via mail en Figma hebben aangeleverd. Verwachte uitkomst: hooguit aanscherpingen, bijvoorbeeld rond uitdrukkelijke toestemming onder art. 9. |
| ~~**Akkoord op de weer-metafoor**~~ | Paul | **Gegeven op 6 augustus 2026**: "De weermetafoor als uitvraagmechanisme is wat mij betreft prima." Met één aantekening die blijft staan: het resultaat blijft in de context van deze app een bijzonder persoonsgegeven, dus de waarborgen eromheen moeten staan. Onderdeel 3 uit `taakverdeling.md` is hiermee niet meer geblokkeerd op Mind. |
| **Apple Developer-account op naam van Mind** | Mind, organisatorisch | Ongeveer 100 euro per jaar. Vereist een D-U-N-S-nummer en verificatie door Apple, dat duurt weken. **Mind maakt dit aan en dient de app zelf in; wij komen er niet aan.** Het is daarmee niet het kritieke pad van ons bouwwerk, maar wel de poort naar livegang, en het blokkeert twee dingen die wij niet kunnen testen zonder: Sign in with Apple en TestFlight. Zie `scope.md`. |
| **Google Play developer-account op naam van Mind** | Mind, organisatorisch | Eenmalig 25 dollar. Belangrijker dan de kosten: een **persoonlijk** account moet voor de eerste productierelease 12 testers 14 dagen aaneengesloten laten testen. Een **organisatie**-account niet. Doen we dit onder een persoonlijk account, dan komt er twee weken wachttijd bij die niemand heeft ingepland. |
| **Verwerkersovereenkomsten** | Mind | Supabase, Apple App Store, Google Play Store. n8n is van deze lijst af, want daar gaan geen persoonsgegevens doorheen. |
| **Verwerkersovereenkomst met een e-mailprovider** | Mind | **Nieuw punt, 30 juli 2026.** De ingebouwde e-mailservice van Supabase mag niet in productie: die stuurt maar een paar mails per uur en is alleen te verhogen met een eigen SMTP. Inloggen per e-mail staat op het board, dus er komt een partij bij die e-mailadressen verwerkt. Zie `limieten-en-misbruik.md`. |
| **Een Supabase-organisatie op naam van Mind** | Mind, organisatorisch | **Nieuw punt, 30 juli 2026.** Het project staat nu in onze eigen organisatie Back to Being en moet naar die van Mind. Zie de sectie hieronder: dat is zelf te doen, maar het is veel eenvoudiger zolang er nog geen gebruikersdata in staat. |
| **Verwerkersovereenkomst tussen Mind en ons: alleen als wij ná livegang toegang houden** | Mind, juridisch | **Bijgesteld op 30 juli 2026.** Ik had dit als ontbrekend punt opgeschreven, maar het hangt af van één ding. Vóór de overdracht bestaat er geen gebruikersdata, dus verwerken wij niets en is er niets om af te spreken. Houden wij ná livegang toegang tot de productieomgeving voor onderhoud, dan verwerken wij vanaf dat moment wél persoonsgegevens namens Mind en hoort er een overeenkomst te liggen. Vraag dus niet om het contract, maar beslis eerst: blijven wij erbij of niet? |

## Wat wij Paul nog schuldig zijn

Stand van 11 augustus 2026. Paul is met vakantie van 14 tot en met 23 augustus en doet daarna de korte DPIA, dus dit hoort vóór die datum bij hem te liggen. Anders schrijft hij die DPIA op verouderde informatie.

| # | Wat | Waarom het niet kan wachten |
|---|---|---|
| 1 | **Bevestigen dat de collectieve opslag een rij per inzending blijft, conform de mail van 7 augustus, met twee verfijningen: de willekeurige unieke code is geschrapt en er staat een uurblok in de rij.** Bevestigd op 13 augustus 2026: we houden de opzet uit de mail van Max aan. | Dit blijft het zwaarste punt van de zeven, niet omdat het een afzwakking is, maar omdat het uurblok en het restrisico nieuw voor hem zijn. Het schrappen van de code is een versterking: elke code is een sleutel die een inzending aanwijst, en een geordende code verraadt bovendien de volgorde. **Noem het restrisico expliciet**: `ctid` en `xmin` verraden de invoegvolgorde en zijn niet weg te halen, en de bewaartermijn van een jaar is de maatregel die dat eindig maakt. Verzwijg dat niet, het komt in een DPIA toch boven. |
| 2 | **Antwoord op zijn vraag over de lokale bewaartermijn.** Hij vroeg op 10 augustus letterlijk: "Is er een bewaartermijn gesteld voor deze lokale gegevens?" | Zelfde onderbouwing als punt 1: het is geen losse vraag maar de basis onder zijn conclusie. Let op dat het antwoord een **toezegging** is en geen waarneming, want de app bestaat nog niet en het lijstje met wat er lokaal staat is nog niet af. Zie `datamodel.md`. |
| 3 | **Melden dat er één datumveld per gebruiker bijkomt**, `profiles.last_checkin_on`. | Nieuw sinds 11 augustus 2026 en hij kent het niet. Het bevat geen weerbeeld en geen historie, alleen de datum van de laatste check-in, en het bestaat om manipulatie van het landelijke beeld te remmen. Het is dus privacy-positief, maar het is wél een gegeven over een gebruiker en daarmee zijn beslissing om te wegen, niet de onze om stil te bouwen. |
| 4 | **Bevestigen dat de vier sliderwaarden niet naar de server gaan.** | Staat zo in de mail van 7 augustus en is zo gebouwd. Dit is nu het punt waar hij op zal letten, want als de rij wél naar de server gaat, is de vraag gerechtvaardigd wat er nog meer meegaat. Het herbevestigen kost een zin. |
| 5 | **De uitdrukkelijke toestemming onder art. 9 AVG.** | Hij kondigde dit zelf aan als punt dat nog gefinetuned moet worden. Het valt samen met ons eigen openstaande punt "welke twee consents zijn het", zie `datamodel.md`, en blokkeert onderdeel 1 uit `taakverdeling.md`. |
| 6 | **Grondslag voor de 16+-eis.** | Stond op toestemming, en dat klopt waarschijnlijk niet meer nu het een toegangseis is. Al twee keer genoteerd als vraag voor hem en nog steeds onbeantwoord. |
| 7 | **De planning die Eveline op 30 juli vroeg**, inclusief wat wij van Mind verwachten. | Twee keer gevraagd, nog niet geleverd. Zie de sectie Planning hieronder. |

Wat wij hem daarbij kunnen meesturen als onderbouwing: de uitvoer van `supabase/tests/anonimisering.sql`. Dat script controleert structureel dat de collectieve tabel geen kolom heeft die naar een persoon kan wijzen, geen sleutel heeft die een inzending aanwijst, en geen tijd bevat die fijner is dan een uur. Het sluit af met wat het **niet** bewijst, en dat hoort er net zo goed bij.

> **Tot Paul hierop gereageerd heeft, is zijn oordeel over de DPIA-plicht niet iets om op te leunen.** Bouwen mag doorgaan, want het schema staat, de hoofdlijn is conform de mail van 7 augustus en de anonimisering is zo sterk als hij binnen deze keuze kan zijn. Wat niet mag, is ergens opschrijven of tegen Mind zeggen dat de app niet DPIA-plichtig is: het uurblok, de geschrapte code en het dagslot heeft hij nog niet gewogen.

## Overdracht aan Mind

Zo is het ingericht, vastgelegd op 30 juli 2026.

| Wie | Wat |
|---|---|
| Wij | Bouwen de app. Verder niets eromheen. |
| Mind | Is verwerkingsverantwoordelijke en regelt de rest: het Apple Developer-account, het Play-account, de overeenkomsten en de DPIA. |

Vier dingen die daaruit volgen, en ze veranderen de rest van dit document:

- **De app gaat niet live voordat Mind alles in handen heeft.** De overdracht komt dus vóór de App Store, niet erna.
- **Wij komen niet aan het Apple Developer-account van Mind.** Zij maken het aan en zij dienen de app in.
- **Er komt geen gebruikersdata in Supabase voor de overdracht.** Zie hieronder wat er dan wél overgaat.
- **De DPIA wordt uitgevoerd vóór de overdracht en vóór livegang.**

### Hoe de omgeving meeverhuist

**Besloten op 11 augustus 2026.** Hiervoor stond er dat alleen de code overgaat. Dat klopte niet: het Supabase-project zelf verhuist mee.

| Wanneer | Waar het staat | Wat het is |
|---|---|---|
| Nu, tot na de Camino | Het account van Stijn, één project | **Development.** Hier bouwen we met z'n drieën. |
| Bij de overdracht | Verhuist naar de organisatie van Mind | Daarna maken we de privacykant helemaal af, en worden wij als administrator toegevoegd. |
| Daarna | Bij Mind, main en dev gescheiden | Pas dan is er een productieomgeving. |

Twee regels die daaruit volgen, en ze gelden vanaf nu:

- **Zet de GitHub-koppeling niet aan op het Supabase-project.** Een project transfer vereist dat die uit staat, gecontroleerd in de Supabase-documentatie op 11 augustus 2026. Hij staat nu uit, en dat moet zo blijven. Let op: dit gaat over de koppeling in het Supabase-dashboard, niet over met welk GitHub-account je op je laptop bent ingelogd. Dat laatste maakt niets uit.
- **Geen echte gebruikers op het dev-project.** Alleen wij drieën met testaccounts. Checkt er iemand van buiten in, dan staat er data over iemands mentale gezondheid op een persoonlijk account terwijl Mind nog geen verwerkingsverantwoordelijke is en de DPIA nog moet komen. Dat is het enige in dit plan dat echt fout kan gaan. Ruim die testaccounts op vóór de overdracht, anders erft Mind ze.

Twee dingen om te weten voordat het zover is:

- **Main en dev als échte Supabase-branches vragen het Pro-abonnement**, 25 dollar per maand plus kosten per branch. Dat is dan voor Mind. Twee losse gratis projecten doen praktisch hetzelfde voor nul.
- **Auth-instellingen komen niet mee in migraties.** Inloggen met Google of Apple, de e-mailteksten en de rest van de auth-configuratie staan niet in `supabase/migrations/`. Bij een project transfer verhuizen ze mee, maar bouw je ooit een omgeving opnieuw op, dan moet dat met de hand.

### Wat dit eenvoudiger maakt

Het risico dat hier eerder stond, een productiedatabase met mentale-gezondheidsdata tussen twee accounts verplaatsen, bestaat niet. Er staat niets in dat mee hoeft. Dezelfde reden waarom de regiowissel van 29 juli nog kon.

Eén technische voorwaarde blijft staan: zet **geen GitHub-integratie** op het Supabase-project. Zie de sectie hierboven, dat is de enige voorwaarde uit die lijst die wij per ongeluk kunnen aanzetten.

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
