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

- **Tijdens ontwikkelen loop je er meteen tegenaan.** Drie mensen die een e-mail-login testen zijn binnen tien minuten door het uurquotum. Dat lijkt op een bug in de app en is het niet. Test daarom met Google of Apple, of met de lokale stack.
- **Voor livegang is een eigen SMTP verplicht**, want anders krijgt de helft van de gebruikers geen bevestigingsmail. Dat betekent een extra partij die e-mailadressen verwerkt, en dus **een verwerkersovereenkomst erbij**. Zie `privacy-besluiten.md`.

## 2. Eén check-in per dag, en die limiet moet aan de persoonlijke kant

Dit is de belangrijkste consequentie van het datamodel en het is geen implementatiedetail.

De collectieve store krijgt alleen een weerstatus en een tijdstip, **zonder gebruikerscode**. Zie `datamodel.md`. Dat betekent dat je aan de collectieve kant onmogelijk kunt zien of iemand vandaag al heeft ingestuurd. Er is niets om op te dedupliceren, en dat is precies de bedoeling.

Dus:

> **De teller staat in de persoonlijke stroom, de bijdrage gaat naar de anonieme pool.** Eerst vaststellen dat deze gebruiker vandaag nog niet heeft ingestuurd, dan de anonieme rij wegschrijven. Nooit andersom, en nooit met een sleutel die meegaat.

Bouw dit niet met een `count` op de collectieve tabel. Dat kan niet, en een agent die het toch probeert, heeft een sleutel nodig en breekt daarmee de anonimisering.

## 3. Het landelijke weerbericht is niet te dedupliceren, dus wel te beïnvloeden

Uit hetzelfde feit volgt een tweede punt, en dit is er een om open te benoemen in plaats van weg te poetsen.

Omdat de pool anoniem is, kunnen wij niet zien of duizend rijen van duizend mensen komen of van één iemand met veel accounts. De drempel voor tonen, pas boven een minimum aantal deelnemers, beschermt tegen **herleidbaarheid**. Hij beschermt niet tegen **manipulatie**.

Wat we er wel tegen hebben:

- Een account aanmaken kost een geverifieerd e-mailadres of een Apple- of Google-login. Dat maakt honderd accounts duur.
- De auth-limieten hierboven begrenzen hoe snel dat kan.
- De limiet uit punt 2 begrenst het tot één bijdrage per account per dag.

Wat we er bewust **niet** tegen doen: een vingerafdruk van het toestel opslaan, of een hash die bijdragen aan elkaar knoopt. Dat zou werken, en het is precies de sleutel die we niet willen. Voor een app waarin het weerbericht een gespreksopener is en geen statistiek, is dit een acceptabele grens. Het hoort wel gemeld te worden als iemand het weerbericht ooit als onderzoeksdata wil gebruiken, want daarvoor is het niet geschikt.

## 4. De data-API heeft geen ingebouwde limiet per gebruiker

Supabase begrenst wel bursts op platformniveau, maar er is **geen** rate limiting per gebruiker op PostgREST. Een ingelogde gebruiker kan dus zo vaak lezen als hij wil, en dat is egress.

Waar dat hier concreet kan bijten:

- **Slim zoeken.** Zonder debounce is elke toetsaanslag een query. Debounce dit op minimaal 300 milliseconden en stuur geen query bij minder dan twee tekens.
- **Het dashboard.** Haal het landelijke weerbericht één keer per sessie op en cache het, niet bij elke keer dat het scherm in beeld komt. Het verandert per dag, niet per seconde.
- **Uploads.** Zet een maximale bestandsgrootte op de bucket, anders kan iemand een bestand van honderd megabyte uploaden en daarna downloaden.

## Wat we niet bouwen

- Geen captcha. Zou de misbruikvraag uit punt 3 verkleinen, maar het is een extra partij die gedrag van bezoekers meet, en dat past niet bij deze app. Wel te heroverwegen als er echt manipulatie optreedt.
- Geen IP-logging om misbruik te herkennen. Een IP is een persoonsgegeven en staat niet in `datamodel.md`.
