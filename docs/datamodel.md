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
>
> **Aangescherpt op 13 augustus 2026: de collectieve opslag is totalen per uurblok geworden, geen rij per inzending meer.** Iedere inzending telt direct op bij een totaal per (dag, uurblok, weerbeeld). Dat is strikt sterker dan de rij uit de mail van 7 augustus: de informatie is identiek, maar een totaal kent geen volgorde en geen geschiedenis, dus het restrisico van de invoegvolgorde is vervallen. Wat Paul nog niet kent: deze aanscherping, het uurblok, de geschrapte "willekeurige unieke code" en de slotvelden `last_checkin_on` en `last_checkin_part`. Tot hij die heeft gewogen, schrijf nergens op dat de app niet DPIA-plichtig is. Zie de secties "Waarom er totalen per uurblok staan" en "Wat het uurblok niet oplost", en `privacy-besluiten.md`.

> **Uitgangspunt: we slaan bewust geen tot een persoon herleidbare data over mentaal welzijn op.** Elk besluit hieronder volgt daaruit. Doen we dat wel, dan worden de beveiligingseisen van de app fors zwaarder.

| Onderwerp | Besluit |
|---|---|
| Leeftijd | 16+ is een harde toegangseis. De check komt **vóór** het aanmaken van een account en heeft **geen Skip**. Onder de 16 geen toegang. Daarmee is ouderlijke toestemming niet nodig. |
| Weer-check-in | Geen directe vragen naar mentale gezondheid of stress, maar een weer-metafoor. Doel is buiten de bijzondere persoonsgegevens blijven. **Akkoord van Paul op 6 augustus 2026**, letterlijk: "De weermetafoor als uitvraagmechanisme is wat mij betreft prima." Dit blokkeert onderdeel 3 uit `taakverdeling.md` dus niet meer. Wel met één aantekening van hem, en die is belangrijk: de metafoor beperkt het risico maar heft het niet op, want het resultaat blijft in de context van deze app een bijzonder persoonsgegeven. De waarborgen eromheen moeten dus staan, en dat is precies wat de rest van dit document regelt. |
| Collectieve store | **Geanonimiseerd**, niet gepseudonimiseerd. **Totalen per (dag, uurblok, weerbeeld)**, besloten op 13 augustus 2026: een inzending telt direct op bij een totaal en er bestaat geen rij die één inzending vertegenwoordigt. Geen gebruikerscode, geen id, geen tijdstempel, geen volgorde. De "willekeurige unieke code" uit de mail van 7 augustus is bewust geschrapt: elke code is een sleutel die een inzending aanwijst. Zie de secties hieronder over het uurblok en over waarom het totalen zijn geworden. |
| Check-in-vorm | Vier sliders binnen de weermetafoor: **temperatuur, wind, zicht en wisselvalligheid**. Die worden **op het toestel** gecombineerd tot één van vijf vaste weerbeelden. Vastgelegd in de mail aan Paul van 7 augustus 2026. |
| Sliderwaarden | Gaan **niet** naar de server en worden nergens als historie opgeslagen. Toegezegd aan Paul. Los van die toezegging: vier sliderwaarden vormen een vier-dimensionale vingerafdruk die veel unieker is dan één uit vijf weerbeelden, dus meesturen zou de anonimisering meetbaar verzwakken. |
| Persoonlijk weerbeeld | Blijft **lokaal op het toestel** en wordt aan het eind van de dag gewist. Er komt geen persoonlijke historie van eerdere weerbeelden, niet lokaal en niet op de server. Toegezegd aan Paul op 7 augustus 2026. **Sinds 15 september 2026 (besluit Stijn) mag iemand vaker per dag inchecken**: het toestel bewaart alleen de laatste, met het tijdstip ervan ("ingecheckt om 08.15"), en overschrijft de vorige. Nog steeds één record, geen historie. |
| Slot per dagdeel | **11 augustus 2026, aangepast op 15 september 2026.** Twee velden op het profiel die elke keer overschreven worden: `last_checkin_on` (datum) en `last_checkin_part` (1 = vóór 12.00 uur, 2 = vanaf 12.00 uur, Europe/Amsterdam). Daarmee kan iemand maximaal twee keer per dag bijdragen aan het landelijke beeld, één keer per dagdeel; extra check-ins in hetzelfde dagdeel werken alleen het eigen weer bij en vervangen de eerdere bijdrage niet. Er staat **geen weerbeeld** in en geen historie. Deze velden kent Paul nog niet, zie `privacy-besluiten.md`. |
| Bewaartermijn persoonsgegevens | Weg na 2 jaar inactiviteit, of eerder als de gebruiker zijn account zelf verwijdert. |
| Inactiviteit meten | **Besloten op 30 juli 2026: we slaan het moment van laatste activiteit op.** Zonder dat veld is "weg na 2 jaar inactiviteit" niet te handhaven en beloof je in de privacyverklaring iets wat niemand uitvoert. De minimale vorm is **één tijdstip op het profiel dat elke keer overschreven wordt**, dus geen geschiedenis van wat iemand wanneer deed. Dat onderscheid is het hele punt: een laatste-activiteitsstempel is bewaartermijnadministratie, een logboek van sessies is gedragsdata. |
| Bewaartermijn collectieve data | **Besloten op 13 augustus 2026: de uurtotalen blijven staan, zonder einddatum.** Ze zijn niet tot personen herleidbaar, dus er loopt geen termijn. De eerdere rollup naar dagtotalen (11 augustus) bestond als maatregel tegen het volgordelek van losse rijen, en dat lek bestaat niet meer; `weather_daily` en de rollup-functie zijn daarom geschrapt. Dagtotalen zijn voor de analyticspagina een group by op de uurtotalen. Wil Mind alsnog een termijn, dan is dat een kleine migratie; de vraag is aan Paul voorgelegd in de mail van 13 augustus. Verwijderen per gebruiker is er niet, want een totaal bevat geen losse inzendingen. Dit moet expliciet in de consent-tekst en de privacyverklaring staan. |
| Analytics | Geen externe tool. Analyse en app-gebruik lopen via Supabase, met een beheerpagina buiten de app. **Sinds 18 september 2026 (besluit Stijn) telt de app wat er gebeurt, als totalen per dag zonder gebruiker**, zie de sectie "Gebruikstotalen" en de tabellen `usage_event` en `usage_daily`. Paul kent dit nog niet, zie `privacy-besluiten.md`. |
| n8n | Er gaan **geen persoonsgegevens** door n8n. Het landelijke weerbericht komt rechtstreeks uit Supabase. |
| Crisis | Bewust **geen** proactieve escalatie bij structureel negatieve check-ins, want daarvoor zouden we juist de data moeten bewaren die we niet bewaren. Alleen de disclaimer en de hulpknop. Dit is een gedocumenteerde grens, geen omissie. |
| Hulplijn | De WhatsApp-knop is een doorverwijzing naar Mind. Er gaat geen identiteit vanuit de app mee. WhatsApp valt onder Minds eigen voorwaarden en verwerkersovereenkomst, niet onder die van deze app. |
| Apple login | Apple levert een private relay-adres in plaats van het echte e-mailadres. Behandel dat als het e-mailadres. |

### Twee stromen, niet één

Uit het besluit over de collectieve store volgt een consequentie die je in het schema moet terugzien:

1. **Persoonlijk.** Het weerbeeld van de gebruiker zelf, dat "Mijn Mentale Weer" op het dashboard voedt. Dit staat **lokaal op het toestel** en gaat niet naar de server. Op de server staat aan deze kant alleen `profiles`, en daar staat geen weerbeeld in.
2. **Collectief.** Totalen per dag, uurblok en weerbeeld, zonder enige identifier: een inzending telt op bij een totaal. Dit voedt het weerbericht van Nederland en het overzicht voor Mind.

Er loopt **geen sleutel** tussen die twee. Schrijf je vanuit stroom 1 naar stroom 2, dan gaat er geen id, geen hash en geen code mee.

### Waarom het tijdstip een uurblok is

Tot 11 augustus 2026 stond hier dat er een weerstatus **plus een tijdstip** naar de collectieve store gaat. Dat was een fout, en het is precies de fout waar Eveline en Paul in hun eerste mail voor waarschuwden.

Een rij met een exact tijdstip is namelijk herleidbaar, ook zonder één identifier in de tabel:

1. De rij staat er met `created_at = 14:32:07.412`.
2. De Supabase API- en auth-logs bevatten bij elke request het `sub`-veld uit de JWT, dus het gebruikers-id, plus een tijdstempel.
3. Joinen op tijd. Dat is twee regels SQL voor iedereen met dashboardtoegang.

Onder overweging 26 AVG telt wat de verwerkingsverantwoordelijke redelijkerwijs kan doen. Kan Mind dit joinen, dan is de data **pseudoniem en niet anoniem**, en dan geldt de hele redenering waarop Pauls DPIA-oordeel rust niet meer. Een exact tijdstip is dus dezelfde sleutel die we zeiden niet op te slaan, in een ander alfabet.

**De oplossing is de tijd grofmaken, niet weglaten.** In de rij staat alleen het uur, 0 tot en met 23. In één uurblok zitten bij enig volume honderden rijen, en geen daarvan wijst nog naar één logregel.

Vier varianten van hetzelfde lek, zodat niemand ze per ongeluk opnieuw introduceert:

- Een oplopende `id` verraadt de invoegvolgorde, ook zonder tijdstip. **`uuid v7` ook**, want die is tijdgeordend. `weather_hourly` heeft daarom alleen de sleutel (dag, uurblok, weerbeeld), en die wijst een totaal aan en geen inzending.
- De systeemkolommen `ctid` en `xmin` verraden op elke tabel de invoegvolgorde van rijen, en die kun je niet weghalen. Dit was de reden om van losse rijen naar totalen te gaan: zonder rij per inzending is er geen volgorde die iets over een inzending zegt. Zie hieronder.
- WAL en point-in-time recovery leggen elke insert vast met zijn transactietijd, op de milliseconde. **PITR staat daarom uit op dit project en moet uit blijven.**
- Realtime zendt inserts live uit met een tijdstempel. **Realtime staat daarom uit op de collectieve tabel.**

### Waarom er totalen per uurblok staan

Dit ontwerp is in drie stappen gegaan, en elke stap legt een afweging vast:

1. **Dagtellers** (11 augustus, eerste opzet). Privacytechnisch sterk, want een teller heeft geen geschiedenis. Maar Mind verliest het verloop binnen de dag en de misbruikdetectie: een dagteller op 500 ziet er hetzelfde uit of dat nu 500 mensen zijn of één script.
2. **Een rij per inzending met een uurblok** (11 augustus, tweede opzet). Geeft Mind het uurverloop, maar introduceert een restrisico: de systeemkolommen `ctid` en `xmin` verraden de invoegvolgorde, en wie zowel databasetoegang als de platformlogs heeft, kan rijen binnen een uurblok op rangorde naast de logregels leggen en ze zo alsnog uitlijnen.
3. **Totalen per (dag, uurblok, weerbeeld)** (13 augustus). Het beste van allebei, en het inzicht is simpel: een rij bevatte alleen dag, uurblok en weerbeeld, dus de verzameling rijen bevatte exact dezelfde informatie als deze totalen. Het verloop binnen de dag blijft, een misbruikpiek in een uurblok blijft zichtbaar tegen de basislijn (zie `limieten-en-misbruik.md` sectie 3), en uitsplitsing achteraf kon toch alleen op deze drie dimensies. Wat verdwijnt is precies het lek: **een totaal kent geen volgorde en geen geschiedenis.**

### Wat het uurblok niet oplost

Dit hoort in de DPIA en het hoort niet weggepoetst te worden.

**Wie live meekijkt, ziet welk totaal ophoogt.** Iemand met dashboardtoegang die op het moment zelf de tabel observeert en de platformlogs ernaast houdt, kan een inzending aan een account koppelen zolang die logs bewaard blijven, en dat is een kwestie van dagen. Daar helpt geen schema tegen: elk ontwerp met serveropslag heeft dit venster, ook het oude met losse rijen. Wat het begrenst:

- **De logbewaartermijn van het platform.** Na afloop daarvan bestaat de aanvullende informatie niet meer en valt er niets te reconstrueren, door niemand: een totaal kent zijn eigen verleden niet.
- **Wie er bij het dashboard kan.** Dat is een organisatorische maatregel en hoort daarom in de DPIA en niet in dit document.

**Wie het weerbericht ververst, zag tot 26 augustus 2026 een inzending binnenkomen.** Dit is een tweede venster, en het had geen dashboardtoegang nodig: `weather_today()` telde live op, dus een huisgenoot die het dashboard ververste op het moment dat iemand naast hem inchecke, zag de percentages verschuiven. De drempel van 10 en de afronding dempten dat, maar losten het niet op. Sinds de migratie `security_hardening` van 26 augustus 2026 telt `weather_today()` **alleen afgesloten uurblokken** mee. Een blok komt in één keer met al zijn inzendingen in beeld, en geen daarvan is nog aan een moment te koppelen. De prijs: voor 01:00 is er nooit een weerbericht en overdag loopt het beeld tot een uur achter. Dat is bewust, en het is de reden dat de app het beeld één keer per sessie ophaalt in plaats van bij elke keer dat het scherm in beeld komt.

**Wees hier eerlijk over richting Paul.** Ten opzichte van de mail van 7 augustus is dit een aanscherping en geen afzwakking: de willekeurige code is geschrapt, en de losse rij is vervangen door een totaal waarmee het volgorde-restrisico is vervallen. Maar het uurblok, de totalen en het live-venster hierboven kent hij nog niet, en hij moet ze zelf kunnen wegen.

De vraag die Paul op 6 augustus stelde, "op welk moment worden de individuele weerberichten losgekoppeld", heeft daarmee nog steeds hetzelfde antwoord: ze worden nooit losgekoppeld, want ze zijn nooit gekoppeld geweest. Er bestaat niet eens een rij per inzending.

### De begrenzing per dagdeel

Zonder identifier in stroom 2 kun je daar niet afdwingen hoe vaak iemand meetelt. Die begrenzing hoort dus aan de kant van stroom 1, vóór het wegschrijven, en dat zijn `profiles.last_checkin_on` en `profiles.last_checkin_part`.

De regel, sinds 15 september 2026 (besluit Stijn): **inchecken mag zo vaak je wilt, bijdragen aan het landelijke beeld maximaal één keer per dagdeel**, vóór en vanaf 12.00 uur. Het persoonlijke scherm toont altijd de laatste check-in; de kaart toont verzamelde momentopnamen. Een extra check-in in hetzelfde dagdeel vervangt de eerdere bijdrage niet: daarvoor zou de server die bijdrage moeten kunnen terugvinden, en die sleutel is precies wat we niet opslaan. Tot 15 september was het één keer per dag; dat was voor wie 's ochtends mist en 's middags zon voelde te star.

Puur lokaal begrenzen volstaat niet: opnieuw installeren omzeilt dat. Het slot staat daarom op de server, in dezelfde transactie als het optellen. Dat moet ook wel, want laat je de client twee losse calls doen, dan slaat hij de eerste gewoon over. Het slot begrenst alleen de bijdrage; de app hoeft de server niet te vragen of iemand mag inchecken.

Gevolg: de functie die instuurt ziet zowel `auth.uid()` als het weerbeeld. Ze kan die koppeling alleen niet wegschrijven, **want er is geen kolom voor**. Dat is de eigenlijke garantie in dit ontwerp, en je controleert hem aan de tabeldefinitie en niet aan de functie eromheen; `supabase/tests/anonimisering.sql` controleert sinds 15 september ook dat het profiel precies die twee slotvelden heeft en niets dat naar een weerbeeld wijst.

Een bijdrage is niet meteen zichtbaar: de leesfuncties tellen alleen afgesloten uurblokken, dus een check-in van 12.05 uur zit vanaf 13.00 uur in het beeld.

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

Zes tabellen, en wat er niet in staat, staat er bewust niet in. De rest van de dataflow, dus content, challenges en de twee consents, is nog niet ingevuld en staat onderaan bij de openstaande punten.

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

### weather_hourly

```
Tabel:            weather_hourly
Waarvoor:         Het landelijke weerbericht: totalen per dag, uurblok en weerbeeld.
RLS:              Aan, en zonder één policy. Dus niemand leest of schrijft rechtstreeks.
                  Alle toegang loopt via submit_weather() en weather_today().

Kolommen:
  day      date      verplicht   De dag, gezet door de database in Europe/Amsterdam
  hour     smallint  verplicht   Uurblok 0 t/m 23, gezet door de database, met een check erop
  weather  text      verplicht   Verwijst naar weather_type.code
  province text      verplicht   Provincie, alleen via de locatie van het toestel, of 'onbekend'; sinds 10 september 2026, whitelist van twaalf
  total    integer   verplicht   Hoeveel inzendingen dit totaal telt, minimaal 1

Bevat gevoelige data?     Nee, en dat is een eigenschap van de structuur en niet van de discipline
                          van wie er een query op schrijft. Er is geen kolom die een persoon kán
                          aanduiden, geen tijd fijner dan een uur, en geen rij die één inzending
                          vertegenwoordigt. De primary key (day, hour, weather, province) wijst
                          een totaal aan en geen inzending; hij bestaat omdat het optellen een
                          upsert is. De provincie (sinds 10 september 2026, op verzoek van MIND
                          voor de weerkaart) is een code die op het toestel wordt bepaald, via
                          de locatie of zelf gekozen, en nooit een coördinaat (zie "Wat we
                          bewust niet opslaan"); per provincie geldt dezelfde drempel van 10 voordat
                          weather_today_by_province() hem teruggeeft, want drie inzendingen in
                          Zeeland zijn weer herleidbaar.
                          Een totaal kent geen volgorde en geen geschiedenis, dus er valt achteraf
                          niets uit te lijnen. Zie "Wat het uurblok niet oplost" hierboven.
Bewaartermijn:            Geen: de totalen blijven staan, want ze zijn niet herleidbaar. Wil Mind
                          een termijn, dan is dat een kleine migratie; de vraag ligt bij Paul.
Verwijderbaar door user?  Nee, en dat kan ook niet: een totaal bevat geen losse inzendingen.
                          Dit moet in de consent-tekst en de privacyverklaring staan.
Welke schermen lezen dit? Dashboard (het landelijke weerbericht en de kaart per provincie), analyticspagina voor het IT-departement.
```

Twee platforminstellingen horen bij deze tabel en zijn net zo belangrijk als het schema: **PITR uit** en **realtime uit**. Ze wegen hier onverminderd zwaar: realtime zou elke ophoging live uitzenden met het moment erbij, en PITR zou elke ophoging in de WAL bewaren. In beide gevallen heeft een totaal dan alsnog een geschiedenis.

Het uur staat in de tabel **voor Mind, niet voor de app**. `weather_today()` geeft bewust geen uitsplitsing per uur terug: een uurblok met een laag totaal is wel weer herleidbaar, en de app toont het landelijke beeld van vandaag.

Er is bewust geen aparte archieftabel. `weather_daily` bestond als eindstation van een rollup na een jaar, maar die rollup was een maatregel tegen het volgordelek van losse rijen, en dat lek bestaat sinds de totalen niet meer. Dagtotalen voor de analyticspagina zijn een group by op `weather_hourly`.

### usage_event

```
Tabel:            usage_event
Waarvoor:         De vaste lijst gebeurtenissen die de app mag tellen, met per event welke items mogen.
RLS:              Aan, zonder policy. De app leest deze tabel niet: hij kent de lijst als TypeScript-type
                  (features/meten/events.ts). log_usage() gebruikt hem om een batch te controleren.

Kolommen:
  code       text    verplicht   Sleutel, object plus actie in de verleden tijd: topic_opened
  item_kind  text    verplicht   'none' (geen item), 'list' (item moet in items staan) of 'slug'
                                 (een vaste waarde uit de app in slugvorm)
  items      text[]  optioneel   De toegestane items bij 'list', anders leeg

Bevat gevoelige data?     Nee. Referentiedata, gaat over de app en niet over een persoon.
Bewaartermijn:            Blijft. Hoort bij het schema; een event erbij is een migratie.
Verwijderbaar door user?  Niet van toepassing.
Welke schermen lezen dit? Geen scherm in de app. Het dashboard van MIND, zodra dat er is.
```

### usage_daily

```
Tabel:            usage_daily
Waarvoor:         Wat er in de app gebeurt, als totalen per dag, event en item.
RLS:              Aan, en zonder één policy. Niemand leest of schrijft rechtstreeks.
                  Schrijven loopt via log_usage(). Lezen komt met het dashboard, via een
                  functie die de drempel van 10 toepast; tot dan leest niemand.

Kolommen:
  day    date     verplicht   De kalenderdag waarop het gebeurde, van het toestel. Alleen afgesloten
                              dagen, hooguit zeven dagen terug; log_usage() weigert de rest
  event  text     verplicht   Verwijst naar usage_event.code
  item   text     verplicht   Een vaste waarde uit de app: een slug, een routepatroon, ja of nee.
                              Leeg voor events zonder item. Nooit vrije tekst
  total  integer  verplicht   Hoe vaak, minimaal 1

Bevat gevoelige data?     Nee, om dezelfde reden als weather_hourly: er is geen kolom die een persoon
                          kán aanduiden, geen tijd fijner dan een dag, en geen rij die één gebeurtenis
                          of één gebruiker vertegenwoordigt. Een item kan wel een thema uit de
                          geestelijke gezondheid zijn ("topic_opened: angst"); dat is een gegeven over
                          de app en niet over een persoon zolang het een totaal is. Daarom de drempel
                          bij het lezen, en daarom nooit een tweede dimensie naast het item.
Bewaartermijn:            Geen: de totalen zijn niet herleidbaar. Wil MIND een termijn, dan is dat een
                          kleine migratie; zelfde vraag als bij weather_hourly.
Verwijderbaar door user?  Nee, en dat kan ook niet: een totaal bevat geen losse gebeurtenissen. Wie niet
                          wil meetellen zet het meten uit onder Profiel; dan wordt er ook lokaal niets
                          geteld. Dit moet in de privacyverklaring staan.
Welke schermen lezen dit? Geen scherm in de app. Het dashboard van MIND, zodra dat er is.
```

Dezelfde twee platforminstellingen als bij `weather_hourly` gelden hier: **PITR uit** en **realtime uit**.

### profiles

```
Tabel:            profiles
Waarvoor:         Het account, met alleen wat nodig is voor de bewaartermijn en het slot per dagdeel.
RLS:              Aan. De gebruiker mag zijn eigen rij lezen. Niemand mag schrijven, ook de
                  gebruiker niet: schrijven loopt via functies. Anders kan iemand zijn eigen
                  last_checkin_on of last_checkin_part terugzetten en het slot omzeilen.

Kolommen:
  id                 uuid         verplicht  Verwijst naar auth.users, verdwijnt mee bij verwijderen
  last_active_at     timestamptz  verplicht  Laatste activiteit, wordt overschreven, geen historie
  last_checkin_on    date         optioneel  Datum van de laatste bijdrage aan het landelijke beeld. Geen weerbeeld, geen historie.
  last_checkin_part  smallint     optioneel  Dagdeel van die bijdrage: 1 (vóór 12.00) of 2 (vanaf 12.00), Europe/Amsterdam.
                                             Sinds 15 september 2026. Wordt overschreven; geen tijdstip, geen historie.
  last_usage_on      date         optioneel  Datum van de laatste batch gebruikstotalen. Sinds 18 september 2026. Het slot van
                                             één batch per account per dag. Wordt overschreven; geen inhoud, geen tijdstip, geen historie.

Bevat gevoelige data?     Persoonsgegevens ja, gezondheidsgegevens nee. Er staat nergens in deze
                          tabel wát iemand heeft ingevuld of gedaan, alleen dát hij in een dagdeel heeft bijgedragen
                          en dát hij op een dag een batch gebruikstotalen instuurde.
Bewaartermijn:            Weg na 2 jaar inactiviteit, gemeten aan last_active_at, of eerder als de
                          gebruiker zijn account zelf verwijdert. De opruiming is de functie
                          purge_inactive_accounts() (sinds 26 augustus 2026), niet aanroepbaar
                          vanuit de app en nog NIET ingepland: zie de openstaande punten.
Verwijderbaar door user?  Ja, via Profiel en instellingen, scherm 19. Dat roept delete_own_account()
                          aan: de rij in auth.users gaat weg en deze rij en de sessies gaan mee via
                          de cascade.
Welke schermen lezen dit? Geen. De app leest deze rij niet; het slot werkt in submit_weather()
                          en de app onthoudt lokaal in welk dagdeel een check-in al telde.
```

Sinds 18 september 2026 werkt ook `log_usage()` `last_active_at` bij. Tot dan deed alleen een check-in dat, en wie geen toestemming gaf voor het weerbericht leek daardoor altijd inactief: zo iemand zou na twee jaar door de opruiming verdwijnen terwijl hij de app gewoon gebruikte. Wie het meten uitzet en ook niet bijdraagt aan het weerbericht, heeft dat probleem nog steeds; dat hoort opgelost te zijn voordat de opruiming wordt ingepland.

Komen er later velden bij die de gebruiker zelf mag wijzigen, dan geef je daar een grant **per kolom** op. Niet een update-policy op de hele tabel, want dan komen `last_checkin_on` en `last_checkin_part` er ongemerkt bij.

### app_status

```
Tabel:            app_status
Waarvoor:         De noodrem van de app: de laagste versie die nog werkt, en een optioneel onderhoudsbericht.
RLS:              Aan, zonder policies. Lezen alleen via get_app_status(), en alleen ingelogd. Aanpassen doet de eigenaar.

Kolommen:
  id              boolean      verplicht   Vaste sleutel die alleen true kan zijn: er past precies een rij in
  min_version     text         verplicht   Laagste versie van de app die nog werkt, als 1.2.3
  maintenance_nl  text         optioneel   Onderhoudsbericht in het Nederlands, of null
  updated_at      timestamptz  verplicht   Wanneer de rij voor het laatst is aangepast

Bevat gevoelige data?     Nee. Er staat niets in over een persoon, een toestel of een check-in. De app stuurt bij het lezen ook niets over zichzelf mee; de vergelijking met de eigen versie doet hij zelf.
Bewaartermijn:            Blijft. Hoort bij het schema.
Verwijderbaar door user?  Niet van toepassing.
Welke schermen lezen dit? De poort achter de onboarding (features/auth/Poort.tsx) en het scherm /bijwerken.
```

Sinds 18 september 2026 (besluit Stijn). `submit_weather()` is al twee keer van vorm veranderd; staat de app in de stores, dan is dit de enige manier om een oude versie te vragen bij te werken, of om tijdens onderhoud iets anders te tonen dan een foutmelding. De app faalt open: zonder netwerk of antwoord gaat hij gewoon door.
### Gebruikstotalen: wat er in de app gebeurt

**Besloten door Stijn op 18 september 2026.** Tot dan stond in `scope.md` "geen enkel event". MIND wil kunnen zien wat werkt; zonder cijfers weet niemand welke tips gelezen worden, waar mensen afhaken in de onboarding of hoe vaak de Hulplijn geopend wordt. De migratie is `usage_daily_totals`. **Paul kent dit nog niet**, zie `privacy-besluiten.md`.

Het principe is dat van het weerbericht: **we tellen gebeurtenissen, geen mensen.**

1. **Een scherm roept één functie aan**, `meet()` in `features/meten`, en weet verder niets. Schermweergaven gaan automatisch, vanuit de root layout, op het routepatroon en nooit op het pad met de waarde erin.
2. **De app telt lokaal**, per dag, event en item. Er staat op het toestel geen tijdstip en geen volgorde, alleen tellers. Ze gaan mee met uitloggen, met account verwijderen en met het wissen van de app.
3. **Eén batch per dag, en alleen van afgesloten dagen.** Gaat de app naar de achtergrond en staat er een afgesloten dag klaar, dan gaan alle tellers in één aanroep naar `log_usage()`. Het moment van die aanroep staat in de platformlogs naast het account, maar zegt niets over wanneer iemand iets deed, en de inhoud staat er niet in: die zit in de body, en Postgres logt hier geen parameters (gecontroleerd op 18 september 2026: `log_statement = ddl`).
4. **De server telt op en vergeet.** Eerst het slot `profiles.last_usage_on` (één batch per account per dag, tegen opblazen), dan het optellen, in één transactie. Wat niet klopt wordt overgeslagen: een onbekend event, een item dat niet mag, een dag die niet afgesloten is of ouder dan zeven dagen, een aantal boven de 200 per sleutel wordt afgetopt.
5. **Lezen komt later, met een drempel van 10.** Deze migratie geeft niemand leesrecht. Het dashboard krijgt een eigen rol en leesfuncties die geen totaal onder de 10 teruggeven, en ook geen totaal waaruit je zo'n cel kunt terugrekenen.

**Toestemming.** Het meten staat aan, wordt in de onboarding en de privacy-uitleg in gewone taal genoemd, en kan uit onder Profiel (`instellingen.metenAan`). Staat het uit, dan wordt er ook lokaal niets geteld. De gedachte is dat dit onder de uitzondering voor privacyvriendelijke analytics uit artikel 11.7a Telecommunicatiewet valt: geen derde partij, geen id, geen profiel, alleen totalen. **Of dat hier opgaat is aan Paul**; zegt hij nee, dan wordt het een aparte vraag die standaard uit staat, en dat is één regel in de app.

**Wat er geteld wordt.** De vaste lijst staat in `usage_event` en in `features/meten/events.ts`; die twee horen gelijk te lopen. Namen zijn object plus actie in de verleden tijd.

| Deel | Events | Item |
|---|---|---|
| App | `app_opened_day`, `app_opened_week`, `app_opened_month`, `screen_viewed` | platform (`ios`, `android`) bij de dag; het routepatroon bij een schermweergave |
| Onboarding | `onboarding_step_completed`, `account_created`, `weather_consent_answered`, `location_permission_answered` | de stap; de inlogroute; ja of nee |
| Check-in | `checkin_started`, `checkin_completed`, `checkin_skipped`, `weather_submit_result`, `outcome_shared`, `weather_map_opened` | alleen bij het resultaat van het insturen: gelukt, al-bijgedragen, mislukt, niet-verbonden, niet-ingelogd |
| Tips | `topic_opened`, `article_opened`, `guide_opened`, `tip_saved`, `external_link_opened`, `search_performed`, `search_no_results` | de slug; bij een link het domein; bij zoeken niets |
| Challenges, zelftests, quote | `challenge_started`, `challenge_day_completed`, `challenge_completed`, `selftest_started`, `selftest_completed`, `quote_shared` | de slug; bij een challengedag `slug/dagnummer` |
| Hulplijn en toestemming | `helpline_opened`, `helpline_channel_tapped`, `weather_consent_withdrawn` | het kanaal: bellen, whatsapp, chat, mail, luisterlijn, 113 |

Actieve gebruikers tellen we zonder id: het toestel stuurt één keer per dag "vandaag voor het eerst geopend", en hetzelfde per week en per maand. De events van vóór het inloggen (de leeftijdsvraag, het begin van het account) wachten op het toestel en gaan mee na het inloggen. Wie vóór het account afhaakt, stuurt dus nooit iets in, en wie onder de 16 is ook niet: anonieme bezoekers mogen de server niet aanroepen, en dat blijft zo.

**Wat er nooit geteld wordt**, in geen enkele vorm:

- Het weerbeeld, buiten `weather_hourly` om. Ook niet als item bij `checkin_completed`: dat zou het weer meetellen van wie nee zei op het delen. `anonimisering.sql` controleert dat geen event een weerbeeld als item toelaat.
- De vier sliderwaarden, een zelftestscore of een uitslagcategorie.
- De zoekterm, de naam, of welke tekst dan ook die iemand intypt.
- De provincie bij een event, of iets fijner dan een dag.
- Een tweede dimensie naast het item, zoals "geopend vanaf de uitkomst". Wat op de uitkomst staat hangt af van het weer, dus die kruising zegt alsnog iets over het weer.
- Een id, een hash of een vingerafdruk die tellingen aan elkaar knoopt. Ook geen dagelijks wisselende: zie `limieten-en-misbruik.md`.

**Nog niet besloten, en dus niet gebouwd:** `interest_selected` (interesses zijn hier thema's uit de geestelijke gezondheid), `crisis_term_searched` (alleen een teller, maar kleine aantallen) en `selftest_helproute_shown` (het gevoeligste getal van de lijst). Alle drie gaan eerst langs Paul. Uitstroom (`account_deleted`) kan de app niet tellen, want na het verwijderen is er geen account meer om een batch mee in te sturen; dat hoort, als MIND het wil, aan de serverkant.

#### Wat de dagtotalen niet oplossen

Net als bij het uurblok hoort dit in de DPIA en niet weggepoetst te worden.

- **Een batch werkt meerdere totalen tegelijk bij.** De systeemkolom `xmin` verraadt achteraf welke rijen in dezelfde transactie zijn bijgewerkt. Bij `weather_hourly` is dat één rij per transactie en valt er niets te groeperen. Hier zou het de dag van een naamloze gebruiker bij elkaar leggen (dit onderwerp, die zelftest, de Hulplijn), zolang geen latere batch dezelfde rijen raakt, en via de platformlogs is zo'n batch aan een account te koppelen zolang die logs bestaan. Daarom herschrijft `usage_scrub()` alle totalen van de laatste dagen in één keer, zodat ze dezelfde `xmin` krijgen. `log_usage()` doet dat bij ongeveer één op de tien batches. Dat sluit het venster niet, het maakt het kort. Komt er ooit een planner (pg_cron, zelfde besluit als bij de opruiming), dan hoort dit elke nacht te draaien.
- **Wie live meekijkt, ziet welke totalen ophogen.** Zelfde restrisico als bij het weer, met dezelfde begrenzing: de logbewaartermijn van het platform en wie er bij het dashboard van Supabase kan. Het verschil is dat hier een hele dag in één keer zichtbaar is. Dat is een reden te meer voor beperkte dashboardtoegang.
- **Een zeldzaam item is een kleine cel.** Een onderwerp dat op een dag één keer geopend is, staat er als totaal 1. De drempel bij het lezen verbergt dat voor MIND, niet voor wie in de database zelf kan kijken.
- **De tellers zijn een indicatie.** Het slot begrenst één account tot één batch per dag en 200 per sleutel, maar wie veel accounts maakt kan de cijfers sturen. Zelfde grens als bij het weerbericht, zie `limieten-en-misbruik.md` sectie 3.

### Nog niet ingevuld

De twee consents, de content voor het naslagwerk en de challenges. Die blokkeren onderdeel 1, 4 en 5 uit `taakverdeling.md`. Voor elk daarvan hoort het sjabloon hierboven volledig ingevuld te worden voordat er een migratie voor geschreven wordt.

### Voorstel: de funnel van weerbeeld naar challenges en content

**Status: voorstel van Stijn, 20 augustus 2026. Nog niet besloten.** Het vult de challenges en de content in die hierboven onder "Nog niet ingevuld" staan, en het is zo ontworpen dat het niets verandert aan de anonimisering en niets toevoegt aan het schema.

Wat we willen: het mentale weerbericht beïnvloedt welke challenges worden aangeraden, en samen bepalen weerbeeld en challenges welke Mind-content vooraan staat. Daar zit een kleine gamification-lus in. En dat alles zonder dat er iets over gemoedstoestand aan een persoon te koppelen valt.

Het principe: **de personalisatie gebeurt op het toestel, de server blijft weerblind.** Het scherm is persoonlijk, het verkeer is dat niet. Vier regels maken dat hard:

1. **De mapping van weerbeeld naar challenges en content is appcode, geen serverdata.** Een vaste configuratie die met de app meekomt. De server rekent niets per gebruiker uit en weet dus ook nooit waarom iemand iets te zien kreeg.
2. **Content ophalen is weerblind.** De app haalt voor iedereen dezelfde bundel op (de hele catalogus, of alle categorieën tegelijk) en filtert daarna lokaal. Nooit een query met het weerbeeld of een interesse als parameter: de request zelf is data, en belandt in de platformlogs naast het account. Dit sluit aan op `assets-en-media.md`: public bucket, hoge `cacheControl`, één keer ophalen en cachen.
3. **Challenge-voortgang blijft in v1 lokaal op het toestel.** Een challenge is aanbevolen op basis van het weerbeeld, dus "account X doet challenge Y" op de server is een weer-gecorreleerd gegeven over mentale gezondheid. De prijs is bekend en geaccepteerd: geen sync tussen toestellen, en bij herinstallatie is de voortgang weg. Dezelfde afweging als bij het persoonlijke weerbeeld. Wil Mind later wel servervoortgang, dan is dat een nieuwe verwerking: eerst het sjabloon hierboven invullen en langs Paul. **Sinds 17 september 2026 zo gebouwd** (besluit Stijn, tot dan stond de voortgang alleen in het werkgeheugen en begon iedereen na het sluiten van de app weer bij dag 1): `features/content/voortgang.ts` bewaart per challenge de afgeronde dagnummers en de kalenderdag van de laatste afronding in AsyncStorage, zonder tijdstip en zonder tekst. Het gaat mee met uitloggen, met account verwijderen en met het wissen van de app. Hoort in het antwoord aan Paul over wat er lokaal staat.
4. **Gamification telt lokaal.** Streaks en tellers zijn een historie en horen dus niet op de server. Lokaal mag het, met een kanttekening: een teller als "5 dagen op rij ingecheckt" is geen weerbeeld-historie en raakt de toezegging aan Paul dus niet, maar wat er lokaal staat is precies zijn open vraag van 10 augustus. Dit hoort dus in dat antwoord benoemd te worden, niet er stilletjes in te sluipen.

**Interesses.** De gebruiker kan periodiek (bijvoorbeeld een tweewekelijkse pop-up, frequentie nog te kiezen) interesses aangeven. Die worden alleen lokaal opgeslagen; de sortering combineert lokaal het weerbeeld van vandaag met de interesses. Twee grenzen:

- **Interesses per account op de server opslaan is uitgesloten.** In deze contentbibliotheek zijn interesses feitelijk mentale-gezondheidsthema's, dus dat zou een lijst "dit account is bezig met angst" opleveren: een bijzonder persoonsgegeven, aan een persoon gekoppeld, directer nog dan het weerbeeld.
- **De framing is een ontwerpvraag.** De weermetafoor bestaat juist om de directe vraag naar gemoedstoestand te vermijden; een interesse-picker met diagnose-labels als opties stelt die vraag alsnog. Liever "waar wil je aan werken" met neutrale categorieën (ontspanning, beweging, verhalen van anderen, praktische tips) dan thema's als labels.

**Bewaarde tips.** Sinds 14 september 2026 (besluit Stijn) kan iemand een tip uit de tab Tips (tot 17 september 2026 "Houvast") bewaren. Dat is een lijstje verwijzingen (onderwerp plus positie), **alleen lokaal op het toestel** (`features/content/bewaard.ts`), zonder bewaartermijn anders dan de app zelf: het gaat mee met account verwijderen (`wisAlleLokaleData`) en met het wissen van de app. Nooit naar de server, om dezelfde reden als de interesses: "dit account bewaarde een tip over angst" is een gegeven over mentale gezondheid aan een persoon gekoppeld. Hoort in het antwoord aan Paul over wat er lokaal staat.

**Zelftests.** Sinds 14 september 2026 (besluit Stijn) staan de twaalf zelftests van MIND in de app zelf, met dezelfde vragen, scores en uitslagteksten als op formulier.wijzijnmind.nl (`content/mind/psychische-klachten/zelftests`, opgehaald met `scripts/fetch-zelftests.mjs`). De antwoorden en de score zijn het gevoeligste wat iemand in deze app invult: een score op een depressie- of angstvragenlijst is een bijzonder persoonsgegeven zodra hij aan een persoon te koppelen is. Daarom: de score wordt **op het toestel** berekend, **niets wordt bewaard** (ook niet lokaal, ook geen "laatste uitslag") en **niets wordt verstuurd**; antwoorden bestaan alleen zolang het scherm open staat. De aanmeldvelden van het formulier (e-mail, nieuwsbrief) zijn weggelaten. Wil MIND later een uitslag kunnen bewaren of mailen, dan is dat een nieuwe verwerking: eerst het sjabloon hierboven invullen en langs Paul.

Wat de server in dit ontwerp ziet, en meer niet: een account dat in een dagdeel heeft bijgedragen (het slot: datum plus 1 of 2), de anonieme uurtotalen, en contentverkeer dat er voor iedereen identiek uitziet.

Nog te besluiten door de drie, deels op het board: welke interessecategorieën, de frequentie van de pop-up, welke challenge bij welk weerbeeld hoort, en hoe weerbeeld en interesses samen de sortering bepalen. De content-tabellen zelf (de catalogus die Mind via de admin vult) staan hier los van en volgen het sjabloon hierboven.

---

## Beslissingen die nog open staan

Deze blokkeren het bouwen van features die data opslaan. Beantwoord ze voordat we vertrekken.

- [x] Slaan we vrije tekst op over iemands gemoedstoestand? **Nee.** De check-in werkt met een weer-metafoor en vaste antwoordopties, juist om buiten de bijzondere persoonsgegevens te blijven. De precieze vraagvorm ligt nog bij Mind.
- [x] Wat is de bewaartermijn per tabel? Persoonsgegevens weg na 2 jaar inactiviteit. De collectieve, geanonimiseerde weerdata blijft.
- [x] Hoe verwijdert een gebruiker zijn account, en wat gebeurt er dan precies met zijn data? Zelf te verwijderen vanuit profiel en instellingen, waarna alles wat aan hem gekoppeld is weggaat. Zijn bijdrage aan het landelijke weerbericht blijft, want die is anoniem en dus niet terug te vinden. Dat laatste moet in de consent-tekst staan, anders beloof je iets wat je niet waarmaakt.
- [x] Doen we aan analytics? Geen externe tool, alles via Supabase met een beheerpagina buiten de app. **Welke events: besloten op 18 september 2026**, zie de sectie "Gebruikstotalen". Een event erbij komt eerst daar en in `usage_event` te staan voordat het gebouwd wordt.
- [ ] **Valt het meten onder de uitzondering voor privacyvriendelijke analytics?** Het staat aan en kan uit. Paul moet bevestigen dat dat mag; anders wordt het een aparte vraag die standaard uit staat.
- [ ] **De drie twijfelgevallen bij het meten:** `interest_selected`, `crisis_term_searched` en `selftest_helproute_shown`. Niet gebouwd tot Paul ze gewogen heeft.
- [ ] **Wat toont het dashboard bij een klein aantal op de Hulplijn?** Onder de drempel niets tonen is veilig, maar verbergt juist het cijfer waar MIND om vraagt.
- [x] **Welke weertypen bestaan er precies, en hoe heten ze?** **Beantwoord op 11 augustus 2026** vanaf het Figma-board, sectie "4 . Uitkomsten (weer-states)". Het zijn er vijf, wat klopt met de mail aan Paul van 7 augustus:

  | code | label | volgorde |
  |---|---|---|
  | `zonnig` | Zonnige dag | 1 |
  | `wolken` | Wolkendag | 2 |
  | `mist` | Mistige dag | 3 |
  | `wind` | Winderige dag | 4 |
  | `regen` | Regenachtige dag | 5 |

  De codes zijn stabiel en komen nooit in beeld. De labels komen uit de koppen op het board; wijzigt Mind een tekst, dan is dat een migratie en geen dashboard-edit. Dit deblokkeert de weer-iconenset uit `design-system.md` en de tokens `gradient/weather/*`. **Let op: er is geen onweer.** Wie een set met onweer heeft nagebouwd, zit fout.
- [ ] **Hoe luiden de vier sliders precies?** De assen liggen vast in de mail aan Paul: temperatuur, wind, zicht en wisselvalligheid. De vraagteksten en de schaal nog niet, en ook niet welke combinatie tot welk van de vijf weerbeelden leidt. Die afbeelding gebeurt lokaal op het toestel, dus het raakt het schema niet, maar zonder dit kan de check-in niet af.
- [ ] **Hoe werkt de funnel van weerbeeld naar challenges en content, en wat doen interesses daarin?** Er ligt sinds 20 augustus 2026 een voorstel, zie de sectie "Voorstel: de funnel van weerbeeld naar challenges en content" hierboven. Kern: personalisatie op het toestel, server blijft weerblind, voortgang en interesses alleen lokaal. Te besluiten door de drie; de lokale opslag hoort daarna in het antwoord aan Paul over de lokale bewaartermijn.
- [ ] **Wat is het minimumaantal inzendingen per provincie voordat die op de kaart kleurt?** Sinds 10 september 2026 staat de kaart per provincie op Home, met dezelfde drempel van 10 als landelijk, in `weather_today_by_province()`. MIND bevestigt het getal nog (feedbacksessie) en het moet zichtbaar zijn in het dashboard van MIND. Wijzigen is een migratie.
- [ ] **Wat is het minimumaantal deelnemers waarboven het landelijke weerbericht getoond mag worden?** Op het board staat bij connector `12:308` letterlijk "pas tonen boven een minimum aantal deelnemers", zonder getal. Gecontroleerd op 30 juli 2026. Dit is een privacymaatregel en geen designkeuze, dus het getal hoort hier te staan en niet in de code te worden bedacht. **Voorstel: 10.** Onder de drempel geeft `weather_today()` nul rijen terug en toont het dashboard de empty state. Bevestig het getal, dan staat het in de functie.
- [ ] **Wat is de uitdrukkelijke toestemming onder art. 9 AVG precies?** Paul kondigde op 10 augustus aan hier nog op te finetunen. Dit valt samen met het punt hieronder over de twee consents, en is daarmee blokkerend geworden in plaats van een losse vraag.
- [ ] **Welke twee consents zijn het, en wat staat er precies in?** Het board heeft twee losse, apart intrekbare consents (`12:136` en `12:139`) en `design-system.md` rekent op een Consent row met twee varianten. Waar ze over gaan en wat de tekst is, staat nergens. Dit blokkeert onderdeel 1 uit `taakverdeling.md`.
- [ ] **Wat ruimt de bewaartermijn daadwerkelijk op, en wanneer draait dat?** Het "wat" is er sinds 26 augustus 2026: `purge_inactive_accounts(p_days default 730)` verwijdert accounts waarvan `last_active_at` ouder is dan twee jaar, en komt als migratie mee in de overdracht. "Inactief" is daarin: geen check-in in twee jaar, want alleen een check-in werkt `last_active_at` bij. Het "wanneer" staat nog open: de functie is niet ingepland, en pg_cron aanzetten is een eigen besluit van de drie. Tot dan is het een handeling van een beheerder in het dashboard. Zie `privacy-besluiten.md`.
- [ ] **Wat staat er lokaal op het toestel, en hoe lang?** Dit is niet meer alleen onze vraag: Paul stelde hem op 10 augustus letterlijk ("Is er een bewaartermijn gesteld voor deze lokale gegevens?") en hij staat nog open. Uit het ontwerp volgt het antwoord al grotendeels: het persoonlijke weerbeeld staat lokaal en wordt aan het eind van de dag gewist, en er is geen lokale historie. Wat nog benoemd moet worden is wat er verder lokaal staat, zoals de sessietokens, en wat er gebeurt bij uitloggen. Dit hangt samen met de vraag of de app offline werkt.
- [x] **Wil Mind meer zien dan de dagverdeling?** **Ja, besloten op 11 augustus 2026.** Sinds 13 augustus zijn dat totalen per (dag, uurblok, weerbeeld): het verloop binnen de dag en misbruikdetectie blijven mogelijk, zonder losse rijen. De sliderwaarden gaan nog steeds **niet** mee: dat is een aparte toezegging aan Paul en een vier-dimensionale waarde is een veel unievere vingerafdruk. Wil Mind die alsnog, dan is dat een nieuwe verwerking en gaat het eerst langs Paul.
- [x] **Wie plant de rollup in, en waarmee?** **Vervallen op 13 augustus 2026: er is geen rollup meer.** De uurtotalen blijven staan omdat ze niet herleidbaar zijn; `weather_daily` en de rollup-functie zijn geschrapt, en daarmee is ook het pg_cron-besluit van tafel. Er kan dus ook niets vergeten worden. Wil Mind alsnog een bewaartermijn, dan is dat een kleine migratie.
- [ ] **Wil Mind een bewaartermijn op de uurtotalen?** Sinds 13 augustus 2026 is er geen: de totalen zijn niet herleidbaar, dus de AVG vraagt er geen. Het is daarmee een keuze over data-minimalisatie, aan Paul voorgelegd in de mail van 13 augustus. Wil hij een termijn, dan is dat een kleine migratie en hoort het getal hier.
- [ ] Verwerkersovereenkomst met Supabase getekend? Ligt bij Mind, zie `privacy-besluiten.md`.
- [ ] Wat is de grondslag voor de leeftijdscategorie nu 16+ een toegangseis is en geen voorkeur? Stond op toestemming, en dat klopt waarschijnlijk niet meer. Vraag voor Paul.
- [ ] Wat toont de analyticspagina precies, en aan wie? Geaggregeerde cijfers is iets anders dan individuele check-ins inzien door het IT-departement.
- [x] **In welke regio staat het Supabase-project?** `eu-central-1`, Frankfurt, dus binnen de EU. Op 29 juli 2026 verplaatst vanuit `eu-west-2`: die code begint weliswaar met `eu`, maar dat is een AWS-naam en geen juridische. Londen ligt in het Verenigd Koninkrijk, en dat is sinds Brexit een derde land waarvoor je op een adequaatheidsbesluit moet leunen. Dat wilden we niet uitleggen aan Mind. De regio van een Supabase-project kan niet gewijzigd worden, dus het project is opnieuw aangemaakt toen het nog leeg was.

## Wat we bewust niet opslaan

Deze lijst is net zo belangrijk als de tabellen zelf. Vul aan naarmate we beslissingen nemen.

- Locatiegegevens. De provincie in `weather_hourly` (sinds 10 september 2026) is een provinciecode, geen locatie. Sinds 13 september 2026 (besluit Stijn) mag de app, met toestemming van het systeem, de locatie van het toestel gebruiken om die provincie te bepalen. Dat gebeurt grof, op het moment van de check-in, en volledig op het toestel: de coördinaten worden vergeleken met de provinciegrenzen van het CBS in de app zelf (`features/weer/locatie.ts`), gaan nooit naar een server of een geocoder, en worden nergens bewaard. Alleen de provinciecode staat lokaal en gaat mee in het totaal. De locatievraag van het systeem komt in de onboarding, direct na een ja op de toestemming voor het weerbericht; wie nee zegt op die toestemming krijgt hem niet. Wie de locatie weigert of buiten Nederland is, telt als 'onbekend'. **Zelf een provincie kiezen kan sinds 14 september 2026 (besluit Stijn) niet meer.** Een vrije keuze maakte het te makkelijk om het beeld van een provincie te sturen: met de drempel van 10 waren tien accounts genoeg om een lege provincie te kleuren, zonder er ooit te zijn geweest. De locatie is niet waterdicht (een gesimuleerde locatie blijft mogelijk), maar de drempel ligt zo een stuk hoger en er zit geen knop meer in de app die ertoe uitnodigt. Dit is geen instelling in de app: de toestemming wordt in de onboarding gevraagd (en bij de check-in, voor wie de onboarding eerder deed), en wie niet per provincie wil meetellen zet de locatie uit in de instellingen van de telefoon. Er is geen scherm of rij voor in de app: het gebeurt op de achtergrond (besluit Stijn, 15 september 2026). Een provincie die voor die datum zelf gekozen was, wordt bij het insturen genegeerd (`provincieViaLocatie` moet waar zijn).
- Contactgegevens van derden
- **Het exacte tijdstip van een bijdrage aan het landelijke weerbericht.** Alleen het uurblok. Zie de sectie hierboven: een tijdstip is de sleutel, in een ander alfabet.
- **Een sleutel die een inzending aanwijst.** De collectieve tabel heeft alleen de sleutel (dag, uurblok, weerbeeld), en die wijst een totaal aan. Geen rij-id, geen `uuid v7`, geen unique index daarbuiten: een geordende sleutel zou bovendien de volgorde verraden.
- **Losse rijen per inzending.** Sinds 13 augustus 2026 telt een inzending direct op bij een totaal. Er bestaat geen rij die één inzending vertegenwoordigt, en daarmee ook geen invoegvolgorde die iets over een inzending zegt.
- **De vier sliderwaarden.** Die blijven op het toestel. Een vier-dimensionale waarde is een veel unievere vingerafdruk dan één uit vijf weerbeelden.
- **Een persoonlijke historie van weerbeelden**, niet op de server en niet lokaal. Ook niet nu inchecken vaker per dag mag (15 september 2026): het toestel bewaart één record met het laatste weerbeeld, het tijdstip ervan en het dagdeel dat al meetelde, en overschrijft dat bij elke check-in. Het tijdstip blijft op het toestel en gaat nooit mee.
- **Een vingerafdruk van het toestel of een hash die bijdragen aan elkaar knoopt.** Dat zou werken tegen manipulatie, en het is precies de sleutel die we niet willen. Zie `limieten-en-misbruik.md`.
- **Wat één persoon in de app doet.** De gebruikstotalen (sinds 18 september 2026) kennen geen gebruiker, geen tijdstip en geen volgorde; op het toestel staan alleen tellers per dag. Er is geen pad, geen sessie en geen geschiedenis per persoon, niet op de server en niet lokaal.
- **Een zoekterm, een zelftestscore of een weerbeeld als onderdeel van een telling.** Zie "Wat er nooit geteld wordt".
- Alles wat we niet nodig hebben voor een functie die daadwerkelijk in v1 zit
