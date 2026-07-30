# Datamodel

Dit bestand is het contract waar alle drie de werkstromen tegenaan bouwen. Het is ook onze privacyadministratie.

> **Regel: staat een veld hier niet in, dan bestaat het niet.** Een agent mag nooit eigenhandig een kolom, veld of analytics-event toevoegen omdat het handig lijkt. Elk stuk data over een gebruiker is een expliciete productbeslissing.

---

## Werkwijze

- Schemawijzigingen gaan **altijd** via een migratiebestand in `supabase/migrations/`. Nooit via de dashboard-UI, nooit via los SQL tegen productie.
- De Supabase MCP heet `supabase-mind` en staat op `read_only=true`. Dat is bewust.
- Het project heet **Mindfull-App-Camino** (`fpvvmgdzftmkyiqfvpjj`), organisatie **Back to Being**, regio `eu-central-1` (Frankfurt). De MCP is daarop gescoped en ziet dus geen andere projecten.
- TypeScript-types worden **gegenereerd** uit het schema, niet met de hand geschreven.
- Row Level Security staat aan op elke tabel met gebruikersdata. Een tabel zonder RLS is een bug, geen keuze.
- Een migratie is een eigen kleine pull request. Nooit bijvangst van een feature.

## Vastgelegde privacybesluiten

Afgestemd met de privacyofficer van Mind op 29 juli 2026 en verwerkt in het Figma-board. Wijk hier niet van af zonder dat het hier verandert. De besluitenlijst met de punten die nog open staan en wie daarvoor aan zet is, staat in `privacy-besluiten.md`.

> **Uitgangspunt: we slaan bewust geen tot een persoon herleidbare data over mentaal welzijn op.** Elk besluit hieronder volgt daaruit. Doen we dat wel, dan worden de beveiligingseisen van de app fors zwaarder.

| Onderwerp | Besluit |
|---|---|
| Leeftijd | 16+ is een harde toegangseis. De check komt **vóór** het aanmaken van een account en heeft **geen Skip**. Onder de 16 geen toegang. Daarmee is ouderlijke toestemming niet nodig. |
| Weer-check-in | Geen directe vragen naar mentale gezondheid of stress, maar een weer-metafoor, bijvoorbeeld "hoeveel druk voel je vandaag". Doel is buiten de bijzondere persoonsgegevens blijven. **Nog geen akkoord van Mind**, dus nog niet bouwen. |
| Collectieve store | **Geanonimiseerd**, niet gepseudonimiseerd. Er gaat alleen een weerstatus plus een tijdstip naartoe, en nadrukkelijk **geen gebruikerscode**. Zo'n code is een sleutel en daarmee blijft het een persoonsgegeven. |
| Bewaartermijn persoonsgegevens | Weg na 2 jaar inactiviteit, of eerder als de gebruiker zijn account zelf verwijdert. |
| Bewaartermijn collectieve data | Blijft bewaard. Het is geen persoonsgegeven, dus de 2 jaar geldt er niet voor. Verwijderen is er per definitie ook niet mogelijk, want we weten niet welke rijen van wie zijn. Dit moet expliciet in de consent-tekst en de privacyverklaring staan. |
| Analytics | Geen externe tool. Analyse en app-gebruik lopen via Supabase, met een beheerpagina buiten de app. |
| n8n | Er gaan **geen persoonsgegevens** door n8n. Het landelijke weerbericht komt rechtstreeks uit Supabase. |
| Crisis | Bewust **geen** proactieve escalatie bij structureel negatieve check-ins, want daarvoor zouden we juist de data moeten bewaren die we niet bewaren. Alleen de disclaimer en de hulpknop. Dit is een gedocumenteerde grens, geen omissie. |
| Hulplijn | De WhatsApp-knop is een doorverwijzing naar Mind. Er gaat geen identiteit vanuit de app mee. WhatsApp valt onder Minds eigen voorwaarden en verwerkersovereenkomst, niet onder die van deze app. |
| Apple login | Apple levert een private relay-adres in plaats van het echte e-mailadres. Behandel dat als het e-mailadres. |

### Twee stromen, niet één

Uit het besluit over de collectieve store volgt een consequentie die je in het schema moet terugzien:

1. **Persoonlijk.** De check-ins van een gebruiker, gekoppeld aan zijn account, met RLS, door hemzelf te verwijderen. Dit voedt "Mijn Mentale Weer" op het dashboard.
2. **Collectief.** Losse rijen zonder enige identifier, alleen weerstatus en tijdstip. Dit voedt het weerbericht van Nederland.

Er loopt **geen sleutel** tussen die twee. Schrijf je vanuit stroom 1 naar stroom 2, dan gaat er geen id, geen hash en geen code mee. Anders is stroom 2 alsnog pseudoniem en klopt de belofte aan Mind niet meer.

Gevolg om rekening mee te houden: zonder identifier in stroom 2 kun je daar niet afdwingen dat iemand maar één keer per dag meetelt. Die begrenzing hoort dus aan de kant van stroom 1, vóór het wegschrijven.

## Sjabloon per tabel

Vul voor elke tabel dit blok in. De onderste vier vragen zijn niet optioneel.

```
Tabel:            <naam>
Waarvoor:         <in één zin>
RLS:              <wie mag lezen, wie mag schrijven>

Kolommen:
  <naam>  <type>  <verplicht?>  <wat het betekent>

Bevat gevoelige data?     ja / nee, en waarom
Bewaartermijn:            <hoe lang, en wat er daarna gebeurt>
Verwijderbaar door user?  ja / nee, en via welk scherm
Welke schermen lezen dit? <lijst>
```

---

## Tabellen

### profiles

**TODO.** Het account van de gebruiker. Minimale variant: alleen wat nodig is om in te loggen en de app te personaliseren. Elk extra veld hier moet je kunnen verdedigen.

### **TODO: overige tabellen**

Vul aan vanuit de dataflow in Figma. Voor elke tabel het sjabloon hierboven volledig invullen, inclusief de vier privacyvragen.

---

## Beslissingen die nog open staan

Deze blokkeren het bouwen van features die data opslaan. Beantwoord ze voordat we vertrekken.

- [x] Slaan we vrije tekst op over iemands gemoedstoestand? **Nee.** De check-in werkt met een weer-metafoor en vaste antwoordopties, juist om buiten de bijzondere persoonsgegevens te blijven. De precieze vraagvorm ligt nog bij Mind.
- [x] Wat is de bewaartermijn per tabel? Persoonsgegevens weg na 2 jaar inactiviteit. De collectieve, geanonimiseerde weerdata blijft.
- [x] Hoe verwijdert een gebruiker zijn account, en wat gebeurt er dan precies met zijn data? Zelf te verwijderen vanuit profiel en instellingen, waarna alles wat aan hem gekoppeld is weggaat. Zijn bijdrage aan het landelijke weerbericht blijft, want die is anoniem en dus niet terug te vinden. Dat laatste moet in de consent-tekst staan, anders beloof je iets wat je niet waarmaakt.
- [x] Doen we aan analytics? Geen externe tool, alles via Supabase met een beheerpagina buiten de app. **Welke events precies staat nog open.** Elk event komt hier eerst als veld te staan voordat het gebouwd wordt.
- [ ] Werkt de app offline, en zo ja, wat staat er lokaal op het toestel opgeslagen?
- [ ] Verwerkersovereenkomst met Supabase getekend? Ligt bij Mind, zie `privacy-besluiten.md`.
- [ ] Wat is de grondslag voor de leeftijdscategorie nu 16+ een toegangseis is en geen voorkeur? Stond op toestemming, en dat klopt waarschijnlijk niet meer. Vraag voor Paul.
- [ ] Wat toont de analyticspagina precies, en aan wie? Geaggregeerde cijfers is iets anders dan individuele check-ins inzien door het IT-departement.
- [x] **In welke regio staat het Supabase-project?** `eu-central-1`, Frankfurt, dus binnen de EU. Op 29 juli 2026 verplaatst vanuit `eu-west-2`: die code begint weliswaar met `eu`, maar dat is een AWS-naam en geen juridische. Londen ligt in het Verenigd Koninkrijk, en dat is sinds Brexit een derde land waarvoor je op een adequaatheidsbesluit moet leunen. Dat wilden we niet uitleggen aan Mind. De regio van een Supabase-project kan niet gewijzigd worden, dus het project is opnieuw aangemaakt toen het nog leeg was.

## Wat we bewust niet opslaan

Deze lijst is net zo belangrijk als de tabellen zelf. Vul aan naarmate we beslissingen nemen.

- Locatiegegevens
- Contactgegevens van derden
- Alles wat we niet nodig hebben voor een functie die daadwerkelijk in v1 zit
