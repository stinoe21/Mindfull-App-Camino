# Limieten en misbruik

Rate limiting zit hier op vier lagen en ze lossen verschillende problemen op. Twee ervan volgen rechtstreeks uit onze eigen keuzes en kan niemand anders voor ons regelen.

Cijfers gecontroleerd op 30 juli 2026 in de Supabase-documentatie via de MCP.

---

## 1. Auth: doet Supabase, met één val

Deze limieten staan er standaard op en zijn instelbaar onder Authentication, Rate Limits.

| Endpoint | Beperkt op | Limiet |
|---|---|---|
| Alles wat e-mail verstuurt | Som van de requests | **Zeer laag op de ingebouwde SMTP.** Alleen te verhogen met een eigen SMTP. |
| OTP versturen | Som van de requests | 360 per uur |
| OTP of magic link opnieuw | Vorige request | 60 seconden wachten |
| Signup-bevestiging opnieuw | Vorige request | 60 seconden wachten |
| Wachtwoord vergeten opnieuw | Vorige request | 60 seconden wachten |
| Verificatie | IP-adres | 360 per uur, bursts tot 30 |
| Token verversen | IP-adres | 1800 per uur, bursts tot 30 |
| MFA-challenge | IP-adres | 15 per minuut |

### De val: de ingebouwde e-mailservice

De ingebouwde SMTP van Supabase is bedoeld om te testen, niet om te gebruiken. De limiet is een paar e-mails per uur en **je kunt die alleen verhogen door je eigen SMTP aan te sluiten**.

Twee gevolgen:

- **Tijdens ontwikkelen loop je er meteen tegenaan.** Drie mensen die een e-mail-login testen zijn binnen tien minuten door het uurquotum. Dat lijkt op een bug in de app en is het niet. Test daarom met Google of Apple; een lokale stack hebben we niet, zie `CLAUDE.md` sectie 9.
- **Voor livegang is een eigen SMTP verplicht**, want anders krijgt de helft van de gebruikers geen bevestigingsmail. Dat betekent een extra partij die e-mailadressen verwerkt, en dus **een verwerkersovereenkomst erbij**. Zie `privacy-besluiten.md`.

## 2. Eén check-in per dag, en die limiet moet aan de persoonlijke kant

Dit is de belangrijkste consequentie van het datamodel en het is geen implementatiedetail.

De collectieve store bestaat sinds 13 augustus 2026 uit totalen per (dag, uurblok, weerbeeld): **geen gebruikerscode, geen id, geen tijdstempel, en geen rij per inzending**. Zie `datamodel.md`. Dat betekent dat je aan de collectieve kant onmogelijk kunt zien of iemand vandaag al heeft ingestuurd. Er is niets om op te dedupliceren, en dat is precies de bedoeling.

Dus:

> **De teller staat in de persoonlijke stroom, de bijdrage gaat naar de anonieme pool.** Eerst vaststellen dat deze gebruiker vandaag nog niet heeft ingestuurd, dan pas het anonieme uurtotaal ophogen. Nooit andersom, en nooit met een sleutel die meegaat.

Bouw dit niet met een `count` op de collectieve tabel. Dat kan niet: er staan alleen totalen in, geen inzendingen. Een agent die het toch probeert, heeft een sleutel nodig en breekt daarmee de anonimisering.

**Concreet, sinds 11 augustus 2026:** het slot is `profiles.last_checkin_on`, één datum die elke keer overschreven wordt, en het zit in `submit_weather()`. Twee dingen daarbij die niet vrijblijvend zijn:

- **Het slot staat op de server en niet alleen lokaal.** Puur lokaal begrenzen wordt omzeild door de app opnieuw te installeren.
- **Slot en ophoging zitten in één transactie.** Dat moet, want laat je de client twee losse calls doen, dan slaat hij de eerste gewoon over en is het slot geen slot.

## 3. Het landelijke weerbericht is niet te dedupliceren, dus wel te beïnvloeden

Uit hetzelfde feit volgt een tweede punt, en dit is er een om open te benoemen in plaats van weg te poetsen.

Omdat de pool anoniem is, kunnen wij niet zien of duizend inzendingen van duizend mensen komen of van één iemand met veel accounts. De drempel voor tonen, pas boven een minimum aantal deelnemers, beschermt tegen **herleidbaarheid**. Hij beschermt niet tegen **manipulatie**.

Wat we er wel tegen hebben:

- Een account aanmaken kost een geverifieerd e-mailadres of een Apple- of Google-login. Dat maakt honderd accounts duur.
- De auth-limieten hierboven begrenzen hoe snel dat kan.
- De limiet uit punt 2 begrenst het tot één bijdrage per account per dag.

**Wat we wél kunnen: het achteraf herkennen.** De totalen staan per uurblok (sinds 13 augustus 2026, zie `datamodel.md`), en het behoud van dat uurverloop was precies de reden om niet op dagtellers uit te komen. Vierhonderd inzendingen in één uur waar de basislijn op veertig ligt, is zichtbaar. Bij een dagteller was dat niet te zien.

Verwacht er niet te veel van. Je ziet een piek, geen handtekening:

- Een uurblok is grof. Vierhonderd inzendingen binnen drie minuten en vierhonderd verspreid over het uur zien er identiek uit, en dat is de bedoeling, want fijner dan een uur maakt het totaal herleidbaar.
- Wie het rustig aan doet, verdwijnt in de ruis. Tien accounts die netjes één keer per dag insturen, zijn niet te onderscheiden van tien mensen.
- Er is geen alarm dat afgaat. Dit is iets wat je ziet als je kijkt, en niemand heeft nu de taak om te kijken.

Wat we er bewust **niet** tegen doen: een vingerafdruk van het toestel opslaan, of een hash die bijdragen aan elkaar knoopt. Dat zou werken, en het is precies de sleutel die we niet willen. Voor een app waarin het weerbericht een gespreksopener is en geen statistiek, is dit een acceptabele grens. Het hoort wel gemeld te worden als iemand het weerbericht ooit als onderzoeksdata wil gebruiken, want daarvoor is het niet geschikt.

## 4. De data-API heeft geen ingebouwde limiet per gebruiker

Supabase begrenst wel bursts op platformniveau, maar er is **geen** rate limiting per gebruiker op PostgREST. Een ingelogde gebruiker kan dus zo vaak lezen als hij wil, en dat is egress.

Waar dat hier concreet kan bijten:

- **Slim zoeken.** Zonder debounce is elke toetsaanslag een query. Debounce dit op minimaal 300 milliseconden en stuur geen query bij minder dan twee tekens.
- **Het dashboard.** Haal het landelijke weerbericht één keer per sessie op en cache het, niet bij elke keer dat het scherm in beeld komt. Het verandert per dag, niet per seconde.
- **Uploads.** Zet een maximale bestandsgrootte op de bucket, anders kan iemand een bestand van honderd megabyte uploaden en daarna downloaden.

## 5. Beveiligingschecklist na de externe review van 25 augustus 2026

Een security-engineer van buiten heeft de opzet doorgelicht. Hieronder elk punt, wat er al stond, en wat er op 26 augustus 2026 aan veranderd is. Wat een vinkje in het dashboard is, staat apart onderaan: dat komt niet mee in migraties en moet bij elke nieuwe omgeving opnieuw.

### Herleidbaarheid: de vier scenario's

| Scenario | Stand |
|---|---|
| **A. Via de platformlogs** | Bekend en het overgebleven venster, zie `datamodel.md` "Wat het uurblok niet oplost". Begrensd door de logbewaartermijn en door wie er in het dashboard kan. De app logt zelf niets inhoudelijks, en dat is een harde regel uit `CLAUDE.md` sectie 8. |
| **B. Een bucket met te weinig inzendingen** | `weather_today()` geeft nul rijen onder de drempel van 10, en de app krijgt alleen dagpercentages, nooit de uurblokken. |
| **C. Een huisgenoot die meekijkt op het dashboard** | **Was open, sinds 26 augustus dicht.** `weather_today()` telt alleen afgesloten uurblokken; het lopende blok is onzichtbaar. Zie `datamodel.md`. |
| **D. Het dagslot als record** | Bewust: `profiles.last_checkin_on` is één datum, zegt dát iemand heeft ingecheckt en niet wát. Alleen de eigenaar leest zijn eigen rij, niemand mag schrijven. |

### Supabase

- **Service role key**: nooit in de app, nooit op een laptop, nooit voor een agent. `CLAUDE.md` sectie 9.
- **`using (true)`** staat alleen op `weather_type`, de vijf labels, en sinds 26 augustus alleen nog voor `authenticated`. `weather_hourly` en `profiles` hebben geen enkele insert- of update-policy; schrijven kan alleen via `security definer`-functies met een leeg `search_path`. `WITH CHECK` is daardoor niet van toepassing: er is geen policy waar hij op zou horen.
- **Edge Functions** gebruiken we niet. Komen ze er ooit, dan draaien ze standaard met de service role en moeten ze zelf de JWT controleren.
- **Security advisor** meldt twee `security definer`-functies die door ingelogde gebruikers aan te roepen zijn: `submit_weather` en `weather_today`. Dat is het ontwerp, en `supabase/tests/anonimisering.sql` sectie 9 bewaakt dat `anon` niets kan en de beheerfuncties niet voor de app zijn.
- **Realtime** staat op geen enkele tabel en **PITR** staat uit. Zie `backend-draaiboek.md`.

### Auth en de app

- **PKCE** staat sinds 26 augustus expliciet aan in `apps/mobile/src/lib/supabase.ts` (`flowType: "pkce"`). De e-mailcode (OTP) gebruikt geen redirect en heeft er niets aan; het is voor de OAuth-flows van Apple en Google zodra die aangaan.
- **Custom scheme versus Universal/App Links.** De app heeft het custom scheme `mentaleweerbericht`. Een andere app op hetzelfde toestel kan dat scheme claimen en een redirect onderscheppen; met PKCE heeft die app aan de code niets zonder de verifier, dus het risico is klein, maar niet nul. Universal Links en App Links vragen een domein van Mind met een verificatiebestand erop, en dat domein is er nog niet. **Voorkeur voor de OAuth-taak: de native flows** (Sign in with Apple via `expo-apple-authentication`, Google via een id-token) met `signInWithIdToken`. Dan is er helemaal geen redirect en dus niets te onderscheppen. Beide zijn een nieuwe dependency en dus een aparte PR.
- **Tokens op het toestel** staan in AsyncStorage, en dat is niet versleuteld. Met een gerooted of gejailbreakt toestel is de sessie te kopiëren. `expo-secure-store` lost dat op en is een nieuwe dependency: te besluiten, en te doen in de auth-taak. Tot dan geldt: de sessie geeft toegang tot één ding, insturen, en tot niets wat je kunt teruglezen.
- **Sessies** verlopen na een uur en de refresh token roteert; dat is de standaard van Supabase en staat zo in het dashboard.
- **Accountverwijdering** doet sinds 26 augustus het echte werk via `delete_own_account()`; scherm 19 wist daarna pas het toestel, nooit andersom.
- **EAS Updates code signing** is niet van toepassing: de app gebruikt geen OTA-updates (`expo-updates` zit er niet in). Komt dat erin, dan gaat code signing tegelijk aan, want anders kan iedereen met publish-rechten of CI-toegang een JS-bundel naar alle gebruikers duwen.
- **Secrets**: `.env*` staat in `.gitignore`, alleen `.env.example` zit in de repo en bevat geen waarden. CI (`.github/workflows/ci.yml`) heeft geen secrets nodig. Zet in GitHub **secret scanning met push protection** aan; dat is een repo-instelling en staat als actie in `setup-github.md`.
- **Rate limiting en WAF**: sectie 1 tot en met 4 hierboven. Geen WAF, geen captcha, bewust. De bruteforce op de e-mailcode wordt begrensd door de verificatielimiet van Supabase (360 per uur per IP) en een code van zes cijfers die na tien minuten verloopt: zie de dashboardchecklist.

### Checklist dashboard (niet in migraties, bij elke omgeving opnieuw)

Onder **Authentication**:

- [ ] **Confirm email** aan: een account zonder bevestigd e-mailadres mag niet bestaan, anders is één script genoeg om accounts te maken en het landelijke beeld te sturen.
- [ ] **Leaked password protection** aan. Wij bieden geen wachtwoordlogin, maar de API wel; deze vlag kost niets. De security advisor meldt hem nu als uit.
- [ ] **E-mail OTP**: lengte 6, geldigheid **600 seconden** en niet de standaard van een uur. Korter is niet handig op slechte wifi.
- [ ] **Rate limits** op de standaardwaarden laten of strenger; nooit ruimer zonder reden. Zie sectie 1.
- [ ] **Wachtwoordlogin uit** zodra het dashboard dat toestaat, of anders een minimale wachtwoordlengte van 12 en de lekcheck hierboven. De app biedt geen wachtwoordveld, dus elke wachtwoordlogin is een script.
- [ ] **Redirect URLs**: alleen `mentaleweerbericht://**`. Geen wildcard op een domein dat niet van Mind is.

Onder **Database** en **Settings**:

- [ ] **PITR uit**, en uit laten.
- [ ] **Realtime**: geen tabel in de publicatie `supabase_realtime`. `anonimisering.sql` sectie 6 controleert het.
- [ ] **Network restrictions** op de directe databaseverbinding: niet nodig zolang niemand er direct op zit, wel zodra Mind een vaste beheerlocatie heeft.
- [ ] **Wie er in het dashboard kan.** Dat is de maatregel tegen scenario A, en na de overdracht is dat aan Mind.

## Wat we niet bouwen

- Geen captcha. Zou de misbruikvraag uit punt 3 verkleinen, maar het is een extra partij die gedrag van bezoekers meet, en dat past niet bij deze app. Wel te heroverwegen als er echt manipulatie optreedt.
- Geen IP-logging om misbruik te herkennen. Een IP is een persoonsgegeven en staat niet in `datamodel.md`.
