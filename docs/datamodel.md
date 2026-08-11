# Datamodel

Dit bestand is het contract waar alle drie de werkstromen tegenaan bouwen. Het is ook onze privacyadministratie.

> **Regel: staat een veld hier niet in, dan bestaat het niet.** Een agent mag nooit eigenhandig een kolom, veld of analytics-event toevoegen omdat het handig lijkt. Elk stuk data over een gebruiker is een expliciete productbeslissing.

---

## Werkwijze

- Schemawijzigingen gaan **altijd** via een migratiebestand in `supabase/migrations/`. Nooit via de dashboard-UI, nooit via los SQL tegen productie.

  > Sinds 30 juli 2026 is dit geen hygiëne meer maar de overdracht zelf. Wij dragen de code over aan Mind en het schema moet daar opnieuw opgebouwd worden. **Wat niet in een migratie staat, bestaat straks niet in hun omgeving.** Eén tabel die iemand via het dashboard heeft aangeklikt, en de app werkt daar niet. Zie `privacy-besluiten.md`.

- De Supabase MCP heet `supabase-mind` en staat op `read_only=true`. Dat is bewust.
- Het project heet **Mindfull-App-Camino** (`fpvvmgdzftmkyiqfvpjj`), organisatie **Back to Being**, regio `eu-central-1` (Frankfurt). De MCP is daarop gescoped en ziet dus geen andere projecten. Het project gaat naar de organisatie van Mind, zie `privacy-besluiten.md`, dus zet geen GitHub-integratie op dit project aan: die blokkeert de transfer.
- TypeScript-types worden **gegenereerd** uit het schema, niet met de hand geschreven.
- Row Level Security staat aan op elke tabel met gebruikersdata. Een tabel zonder RLS is een bug, geen keuze.
- Een migratie is een eigen kleine pull request. Nooit bijvangst van een feature.

## Vastgelegde privacybesluiten

Afgestemd met de privacyofficer van Mind op 29 juli 2026 en verwerkt in het Figma-board. Wijk hier niet van af zonder dat het hier verandert. De besluitenlijst met de punten die nog open staan en wie daarvoor aan zet is, staat in `privacy-besluiten.md`.

> **Bijgewerkt op 11 augustus 2026** na de mailwisseling met Paul Bex van 7 en 10 augustus. Paul concludeerde daarin dat de app **niet DPIA-plichtig** is, en die conclusie steunt letterlijk op wat wij hem over de opslag hebben toegezegd: "het feit dat de gegevens lokaal worden opgeslagen en verder niet worden verwerkt beperkt privacyrechtelijke risico's aanzienlijk". Hij tekende er wel bij aan dat een weerbeeld in de context van deze app alsnog een **bijzonder persoonsgegeven** is zodra het aan een persoon te koppelen valt.
>
> Wat in die mail aan Paul staat, is daarmee bindend. Wijkt de app ervan af, dan vervalt zijn conclusie en moet je eerst terug naar hem. Dat is geen formaliteit maar het verschil tussen wel en geen verplichte DPIA.

> **Uitgangspunt: we slaan bewust geen tot een persoon herleidbare data over mentaal welzijn op.** Elk besluit hieronder volgt daaruit. Doen we dat wel, dan worden de beveiligingseisen van de app fors zwaarder.

| Onderwerp | Besluit |
|---|---|
| Leeftijd | 16+ is een harde toegangseis. De check komt **vóór** het aanmaken van een account en heeft **geen Skip**. Onder de 16 geen toegang. Daarmee is ouderlijke toestemming niet nodig. |
| Weer-check-in | Geen directe vragen naar mentale gezondheid of stress, maar een weer-metafoor. Doel is buiten de bijzondere persoonsgegevens blijven. **Akkoord van Paul op 6 augustus 2026**, letterlijk: "De weermetafoor als uitvraagmechanisme is wat mij betreft prima." Dit blokkeert onderdeel 3 uit `taakverdeling.md` dus niet meer. Wel met één aantekening van hem, en die is belangrijk: de metafoor beperkt het risico maar heft het niet op, want het resultaat blijft in de context van deze app een bijzonder persoonsgegeven. De waarborgen eromheen moeten dus staan, en dat is precies wat de rest van dit document regelt. |
| Collectieve store | **Geanonimiseerd**, niet gepseudonimiseerd. **Herzien op 11 augustus 2026: geen losse rijen per inzending, maar dagtellers.** Eén rij per dag per weerbeeld, met een teller die opgehoogd wordt. Er gaat dus geen gebruikerscode naartoe, en ook geen tijdstip. Zie de sectie hieronder over waarom het tijdstip er niet meer in zit. |
| Check-in-vorm | Vier sliders binnen de weermetafoor: **temperatuur, wind, zicht en wisselvalligheid**. Die worden **op het toestel** gecombineerd tot één van vijf vaste weerbeelden. Vastgelegd in de mail aan Paul van 7 augustus 2026. |
| Sliderwaarden | Gaan **niet** naar de server en worden nergens als historie opgeslagen. Toegezegd aan Paul. Los van die toezegging: vier sliderwaarden vormen een vier-dimensionale vingerafdruk die veel unieker is dan één uit vijf weerbeelden, dus meesturen zou de anonimisering meetbaar verzwakken. |
| Persoonlijk weerbeeld | Blijft **lokaal op het toestel** en wordt aan het eind van de dag gewist. Er komt geen persoonlijke historie van eerdere weerbeelden, niet lokaal en niet op de server. Toegezegd aan Paul op 7 augustus 2026. |
| Dagslot | **Nieuw op 11 augustus 2026.** Eén datumveld op het profiel, `last_checkin_on`, dat elke keer overschreven wordt. Daarmee kan iemand maar één keer per dag bijdragen aan het landelijke beeld. Er staat **geen weerbeeld** in en geen historie. Dit veld kent Paul nog niet, zie `privacy-besluiten.md`. |
| Bewaartermijn persoonsgegevens | Weg na 2 jaar inactiviteit, of eerder als de gebruiker zijn account zelf verwijdert. |
| Inactiviteit meten | **Besloten op 30 juli 2026: we slaan het moment van laatste activiteit op.** Zonder dat veld is "weg na 2 jaar inactiviteit" niet te handhaven en beloof je in de privacyverklaring iets wat niemand uitvoert. De minimale vorm is **één tijdstip op het profiel dat elke keer overschreven wordt**, dus geen geschiedenis van wat iemand wanneer deed. Dat onderscheid is het hele punt: een laatste-activiteitsstempel is bewaartermijnadministratie, een logboek van sessies is gedragsdata. |
| Bewaartermijn collectieve data | Blijft bewaard. Het is geen persoonsgegeven, dus de 2 jaar geldt er niet voor. Verwijderen is er per definitie ook niet mogelijk, want we weten niet welke rijen van wie zijn. Dit moet expliciet in de consent-tekst en de privacyverklaring staan. |
| Analytics | Geen externe tool. Analyse en app-gebruik lopen via Supabase, met een beheerpagina buiten de app. |
| n8n | Er gaan **geen persoonsgegevens** door n8n. Het landelijke weerbericht komt rechtstreeks uit Supabase. |
| Crisis | Bewust **geen** proactieve escalatie bij structureel negatieve check-ins, want daarvoor zouden we juist de data moeten bewaren die we niet bewaren. Alleen de disclaimer en de hulpknop. Dit is een gedocumenteerde grens, geen omissie. |
| Hulplijn | De WhatsApp-knop is een doorverwijzing naar Mind. Er gaat geen identiteit vanuit de app mee. WhatsApp valt onder Minds eigen voorwaarden en verwerkersovereenkomst, niet onder die van deze app. |
| Apple login | Apple levert een private relay-adres in plaats van het echte e-mailadres. Behandel dat als het e-mailadres. |

### Twee stromen, niet één

Uit het besluit over de collectieve store volgt een consequentie die je in het schema moet terugzien:

1. **Persoonlijk.** Het weerbeeld van de gebruiker zelf, dat "Mijn Mentale Weer" op het dashboard voedt. Dit staat **lokaal op het toestel** en gaat niet naar de server. Op de server staat aan deze kant alleen `profiles`, en daar staat geen weerbeeld in.
2. **Collectief.** Dagtellers zonder enige identifier: per dag, per weerbeeld, hoeveel. Dit voedt het weerbericht van Nederland en het overzicht voor Mind.

Er loopt **geen sleutel** tussen die twee. Schrijf je vanuit stroom 1 naar stroom 2, dan gaat er geen id, geen hash en geen code mee.

### Waarom er geen tijdstip meer in de collectieve stroom zit

Tot 11 augustus 2026 stond hier dat er een weerstatus **plus een tijdstip** naar de collectieve store gaat. Dat was een fout, en het is precies de fout waar Eveline en Paul in hun eerste mail voor waarschuwden.

Een rij met een tijdstip is namelijk herleidbaar, ook zonder één identifier in de tabel:

1. De rij staat er met `created_at = 14:32:07.412`.
2. De Supabase API- en auth-logs bevatten bij elke request het `sub`-veld uit de JWT, dus het gebruikers-id, plus een tijdstempel.
3. Joinen op tijd. Dat is twee regels SQL voor iedereen met dashboardtoegang.

Onder overweging 26 AVG telt wat de verwerkingsverantwoordelijke redelijkerwijs kan doen. Kan Mind dit joinen, dan is de data **pseudoniem en niet anoniem**, en dan geldt de hele redenering waarop Pauls DPIA-oordeel rust niet meer. Een tijdstip is dus dezelfde sleutel die we zeiden niet op te slaan, in een ander alfabet.

Vier varianten van hetzelfde lek, zodat niemand ze per ongeluk opnieuw introduceert:

- Een oplopende `id` verraadt de invoegvolgorde, ook zonder tijdstip.
- De systeemkolommen `ctid` en `xmin` doen dat óók, op elke tabel, en die kun je niet weghalen.
- WAL en point-in-time recovery leggen elke insert vast met zijn transactietijd. **PITR staat daarom uit op dit project.**
- Realtime zendt inserts live uit met een tijdstempel. **Realtime staat daarom uit op de collectieve tabel.**

### Waarom dagtellers dit oplossen en losse rijen niet

Bij een teller bestaat er geen losse inzending. De vraag "welke rij is van mij" heeft geen onderwerp meer.

Belangrijker nog: **een teller heeft geen geschiedenis.** Achteraf is niet te zien wanneer hij ophoogde. Daarmee is de realistische aanval, achteraf correleren, niet moeilijk maar onmogelijk. Bij losse rijen blijft de invoegvolgorde fysiek afleesbaar en is die correlatie permanent mogelijk.

Dat geeft ook het antwoord op de vraag die Paul op 6 augustus stelde, "op welk moment worden de individuele weerberichten losgekoppeld": ze worden nooit losgekoppeld, want ze zijn nooit gekoppeld geweest.

Mind verliest hier niets mee. De verdeling per dag is precies het inzicht dat gevraagd is, en omdat elke dag zijn eigen rijen houdt, is het verloop over dagen er gratis bij. Wat je niet krijgt is een verloop bínnen een dag. Dat zou uurblokken vragen, en een uurblok met een lage telling is samen met de auth-logs weer herleidbaar. Uurblokken dus pas overwegen als de aantallen dat dragen, en niet zonder Paul.

### De begrenzing van één per dag

Zonder identifier in stroom 2 kun je daar niet afdwingen dat iemand maar één keer per dag meetelt. Die begrenzing hoort dus aan de kant van stroom 1, vóór het wegschrijven, en dat is `profiles.last_checkin_on`.

Puur lokaal begrenzen volstaat niet: opnieuw installeren omzeilt dat. Het slot staat daarom op de server, in dezelfde transactie als het ophogen van de teller. Dat moet ook wel, want laat je de client twee losse calls doen, dan slaat hij de eerste gewoon over.

Gevolg: de functie die instuurt ziet zowel `auth.uid()` als het weerbeeld. Ze kan die koppeling alleen niet wegschrijven, **want er is geen kolom voor**. Dat is de eigenlijke garantie in dit ontwerp, en je controleert hem aan de tabeldefinitie en niet aan de functie eromheen.

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

Drie tabellen, en wat er niet in staat, staat er bewust niet in. De rest van de dataflow, dus content, challenges en de twee consents, is nog niet ingevuld en staat onderaan bij de openstaande punten.

### weather_type

```
Tabel:            weather_type
Waarvoor:         De vaste lijst weerbeelden waaruit de check-in kiest, met hun label.
RLS:              Aan. Iedereen mag lezen, niemand mag schrijven. Wijzigen gaat via een migratie.

Kolommen:
  code        text      verplicht   Sleutel, stabiel, komt nooit in beeld bij de gebruiker
  label       text      verplicht   Wat de gebruiker leest
  sort_order  smallint  verplicht   Volgorde in de check-in en in het weerbericht

Bevat gevoelige data?     Nee. Dit is referentiedata en gaat over de app, niet over een persoon.
Bewaartermijn:            Blijft. Hoort bij het schema.
Verwijderbaar door user?  Niet van toepassing.
Welke schermen lezen dit? Weer-check-in, dashboard, analyticspagina.
```

Bewust een referentietabel en geen Postgres-enum: de namen moeten nog van Mind komen, en zo is een weerbeeld erbij een seed-wijziging in plaats van een enum-migratie.

### weather_daily

```
Tabel:            weather_daily
Waarvoor:         Het landelijke weerbericht: per dag, per weerbeeld, hoeveel mensen dat insturen.
RLS:              Aan, en zonder één policy. Dus niemand leest of schrijft rechtstreeks.
                  Alle toegang loopt via submit_weather() en weather_today().

Kolommen:
  day      date     verplicht   De dag, gezet door de database in Europe/Amsterdam
  weather  text     verplicht   Verwijst naar weather_type.code
  count    integer  verplicht   Hoeveel keer dit weerbeeld die dag is ingestuurd

Bevat gevoelige data?     Nee, en dat is een eigenschap van de structuur en niet van de discipline
                          van wie er een query op schrijft. Er is geen kolom die een identifier
                          kán bevatten, geen id, geen tijdstip, geen verwijzing naar auth.users.
                          Er komt er alleen een bij via een migratie die iemand reviewt.
Bewaartermijn:            Blijft. Het is geen persoonsgegeven, dus de termijn van 2 jaar geldt niet.
Verwijderbaar door user?  Nee, en dat kan ook niet: we weten niet welke ophoging van wie was.
                          Dit moet in de consent-tekst en de privacyverklaring staan.
Welke schermen lezen dit? Dashboard (het landelijke weerbericht), analyticspagina voor het IT-departement.
```

Twee platforminstellingen horen bij deze tabel en zijn net zo belangrijk als het schema: **PITR uit** en **realtime uit**. Zie de sectie hierboven over het tijdstip.

### profiles

```
Tabel:            profiles
Waarvoor:         Het account, met alleen wat nodig is voor de bewaartermijn en het dagslot.
RLS:              Aan. De gebruiker mag zijn eigen rij lezen. Niemand mag schrijven, ook de
                  gebruiker niet: schrijven loopt via functies. Anders kan iemand zijn eigen
                  last_checkin_on terugzetten en het dagslot omzeilen.

Kolommen:
  id               uuid         verplicht  Verwijst naar auth.users, verdwijnt mee bij verwijderen
  last_active_at   timestamptz  verplicht  Laatste activiteit, wordt overschreven, geen historie
  last_checkin_on  date         optioneel  Datum van de laatste check-in. Geen weerbeeld, geen historie.

Bevat gevoelige data?     Persoonsgegevens ja, gezondheidsgegevens nee. Er staat nergens in deze
                          tabel wát iemand heeft ingevuld, alleen dát hij op een dag heeft ingecheckt.
Bewaartermijn:            Weg na 2 jaar inactiviteit, gemeten aan last_active_at, of eerder als de
                          gebruiker zijn account zelf verwijdert. De opruiming zelf bestaat nog niet,
                          zie de openstaande punten.
Verwijderbaar door user?  Ja, via Profiel en instellingen. Verwijdert hij zijn account, dan gaat deze
                          rij mee via de foreign key naar auth.users.
Welke schermen lezen dit? Profiel, instellingen, weer-check-in (voor het dagslot).
```

Komen er later velden bij die de gebruiker zelf mag wijzigen, dan geef je daar een grant **per kolom** op. Niet een update-policy op de hele tabel, want dan komt `last_checkin_on` er ongemerkt bij.

### Nog niet ingevuld

De twee consents, de content voor het naslagwerk en de challenges. Die blokkeren onderdeel 1, 4 en 5 uit `taakverdeling.md`. Voor elk daarvan hoort het sjabloon hierboven volledig ingevuld te worden voordat er een migratie voor geschreven wordt.

---

## Beslissingen die nog open staan

Deze blokkeren het bouwen van features die data opslaan. Beantwoord ze voordat we vertrekken.

- [x] Slaan we vrije tekst op over iemands gemoedstoestand? **Nee.** De check-in werkt met een weer-metafoor en vaste antwoordopties, juist om buiten de bijzondere persoonsgegevens te blijven. De precieze vraagvorm ligt nog bij Mind.
- [x] Wat is de bewaartermijn per tabel? Persoonsgegevens weg na 2 jaar inactiviteit. De collectieve, geanonimiseerde weerdata blijft.
- [x] Hoe verwijdert een gebruiker zijn account, en wat gebeurt er dan precies met zijn data? Zelf te verwijderen vanuit profiel en instellingen, waarna alles wat aan hem gekoppeld is weggaat. Zijn bijdrage aan het landelijke weerbericht blijft, want die is anoniem en dus niet terug te vinden. Dat laatste moet in de consent-tekst staan, anders beloof je iets wat je niet waarmaakt.
- [x] Doen we aan analytics? Geen externe tool, alles via Supabase met een beheerpagina buiten de app. **Welke events precies staat nog open.** Elk event komt hier eerst als veld te staan voordat het gebouwd wordt.
- [ ] **Welke weertypen bestaan er precies, en hoe heten ze?** Dit is nu een gat waar drie documenten naar verwijzen: `design-system.md` zegt dat de weer-iconenset gesloten is met "precies één per weertype uit `datamodel.md`", en die lijst staat hier niet. Het board noemt de check-in wel, maar somt de opties niet op. Zolang dit ontbreekt kan niemand de iconen, de tokens `gradient/weather/*` of de check-in bouwen, en is de kans groot dat drie mensen drie verschillende sets verzinnen. Dit hangt samen met de vraagvorm die nog bij Mind ligt. **Wat er sinds 7 augustus 2026 wel ligt: het zijn er vijf**, zo staat het in de mail aan Paul. De namen niet. Het schema wacht hier niet op, want `weather_type` is een referentietabel, maar de seed wel.
- [ ] **Wat is het minimumaantal deelnemers waarboven het landelijke weerbericht getoond mag worden?** Op het board staat bij connector `12:308` letterlijk "pas tonen boven een minimum aantal deelnemers", zonder getal. Gecontroleerd op 30 juli 2026. Dit is een privacymaatregel en geen designkeuze, dus het getal hoort hier te staan en niet in de code te worden bedacht. **Voorstel: 10.** Onder de drempel geeft `weather_today()` nul rijen terug en toont het dashboard de empty state. Bevestig het getal, dan staat het in de functie.
- [ ] **Wat is de uitdrukkelijke toestemming onder art. 9 AVG precies?** Paul kondigde op 10 augustus aan hier nog op te finetunen. Dit valt samen met het punt hieronder over de twee consents, en is daarmee blokkerend geworden in plaats van een losse vraag.
- [ ] **Welke twee consents zijn het, en wat staat er precies in?** Het board heeft twee losse, apart intrekbare consents (`12:136` en `12:139`) en `design-system.md` rekent op een Consent row met twee varianten. Waar ze over gaan en wat de tekst is, staat nergens. Dit blokkeert onderdeel 1 uit `taakverdeling.md`.
- [ ] **Wat ruimt de bewaartermijn daadwerkelijk op, en wanneer draait dat?** Het veld voor laatste activiteit is nu besloten, maar een termijn van 2 jaar bestaat pas als er iets is dat periodiek verwijdert. Zolang dat er niet is, staat er een belofte in de privacyverklaring die de app niet nakomt. Dit moet in een migratie staan, want anders komt het niet mee in de overdracht en gaat de app bij Mind live zonder opruiming. Zie `privacy-besluiten.md`.
- [ ] **Wat staat er lokaal op het toestel, en hoe lang?** Dit is niet meer alleen onze vraag: Paul stelde hem op 10 augustus letterlijk ("Is er een bewaartermijn gesteld voor deze lokale gegevens?") en hij staat nog open. Uit het ontwerp volgt het antwoord al grotendeels: het persoonlijke weerbeeld staat lokaal en wordt aan het eind van de dag gewist, en er is geen lokale historie. Wat nog benoemd moet worden is wat er verder lokaal staat, zoals de sessietokens, en wat er gebeurt bij uitloggen. Dit hangt samen met de vraag of de app offline werkt.
- [ ] **Wil Mind meer zien dan de dagverdeling?** De sliderwaarden of een verloop binnen de dag zijn allebei een nieuwe verwerking en verzwakken de anonimisering, zie de secties hierboven. Zolang dit niet expliciet is gevraagd én langs Paul is geweest, bouwen we alleen de dagverdeling.
- [ ] Verwerkersovereenkomst met Supabase getekend? Ligt bij Mind, zie `privacy-besluiten.md`.
- [ ] Wat is de grondslag voor de leeftijdscategorie nu 16+ een toegangseis is en geen voorkeur? Stond op toestemming, en dat klopt waarschijnlijk niet meer. Vraag voor Paul.
- [ ] Wat toont de analyticspagina precies, en aan wie? Geaggregeerde cijfers is iets anders dan individuele check-ins inzien door het IT-departement.
- [x] **In welke regio staat het Supabase-project?** `eu-central-1`, Frankfurt, dus binnen de EU. Op 29 juli 2026 verplaatst vanuit `eu-west-2`: die code begint weliswaar met `eu`, maar dat is een AWS-naam en geen juridische. Londen ligt in het Verenigd Koninkrijk, en dat is sinds Brexit een derde land waarvoor je op een adequaatheidsbesluit moet leunen. Dat wilden we niet uitleggen aan Mind. De regio van een Supabase-project kan niet gewijzigd worden, dus het project is opnieuw aangemaakt toen het nog leeg was.

## Wat we bewust niet opslaan

Deze lijst is net zo belangrijk als de tabellen zelf. Vul aan naarmate we beslissingen nemen.

- Locatiegegevens
- Contactgegevens van derden
- **Het tijdstip van een bijdrage aan het landelijke weerbericht.** Zie de sectie hierboven: dat is de sleutel, in een ander alfabet.
- **De vier sliderwaarden.** Die blijven op het toestel. Een vier-dimensionale waarde is een veel unievere vingerafdruk dan één uit vijf weerbeelden.
- **Een persoonlijke historie van weerbeelden**, niet op de server en niet lokaal.
- **Een vingerafdruk van het toestel of een hash die bijdragen aan elkaar knoopt.** Dat zou werken tegen manipulatie, en het is precies de sleutel die we niet willen. Zie `limieten-en-misbruik.md`.
- Alles wat we niet nodig hebben voor een functie die daadwerkelijk in v1 zit
