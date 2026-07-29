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

- [ ] Slaan we vrije tekst op over iemands gemoedstoestand? Zo ja, versleuteld of niet, en hoe lang?
- [ ] Wat is de bewaartermijn per tabel?
- [ ] Hoe verwijdert een gebruiker zijn account, en wat gebeurt er dan precies met zijn data?
- [ ] Doen we aan analytics? Zo ja: alleen op gebeurtenisniveau, nooit op inhoud. Welke events dan?
- [ ] Werkt de app offline, en zo ja, wat staat er lokaal op het toestel opgeslagen?
- [ ] Verwerkersovereenkomst met Supabase getekend?
- [x] **In welke regio staat het Supabase-project?** `eu-central-1`, Frankfurt, dus binnen de EU. Op 29 juli 2026 verplaatst vanuit `eu-west-2`: die code begint weliswaar met `eu`, maar dat is een AWS-naam en geen juridische. Londen ligt in het Verenigd Koninkrijk, en dat is sinds Brexit een derde land waarvoor je op een adequaatheidsbesluit moet leunen. Dat wilden we niet uitleggen aan Mind. De regio van een Supabase-project kan niet gewijzigd worden, dus het project is opnieuw aangemaakt toen het nog leeg was.

## Wat we bewust niet opslaan

Deze lijst is net zo belangrijk als de tabellen zelf. Vul aan naarmate we beslissingen nemen.

- Locatiegegevens
- Contactgegevens van derden
- Alles wat we niet nodig hebben voor een functie die daadwerkelijk in v1 zit
