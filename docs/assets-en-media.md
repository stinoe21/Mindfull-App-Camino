# Assets en media

Waar plaatjes staan, hoe ze gecomprimeerd worden, en hoe we voorkomen dat de app bij elke start alles opnieuw downloadt.

Alle cijfers hieronder zijn op 30 juli 2026 gecontroleerd in de Supabase-documentatie via de MCP, niet uit het hoofd geschreven.

---

## De belangrijkste beslissing: twee soorten assets

Ze gaan **niet** naar dezelfde plek. Dit door elkaar halen is waar het duur en langzaam wordt.

| | In de app bundle | In Supabase Storage |
|---|---|---|
| **Wat** | Iconen, weer-iconen, gradients, achtergrondillustraties, onboarding-illustraties, logo | Content die Mind zelf toevoegt: artikelafbeeldingen, challenge-afbeeldingen, thumbnails |
| **Waarom daar** | Verandert alleen bij een release. Werkt offline. Nul egress, nul latency, geen flikkering bij het openen. | Verandert **zonder** release. Dat is precies waarom de adminpagina bestaat. |
| **Wie beheert** | Max, via `packages/ui` | Mind, via de adminpagina |

Het is verleidelijk om alles in Storage te zetten omdat het dan "beheerbaar" is. Doe dat niet. Een weericoon dat over het netwerk komt, betekent dat het kernbeeld van de app afhangt van een verbinding. Onze eigen definition of done eist dat de app zonder netwerk werkt, en dat kan niet als de iconen erin zitten.

### Uit Figma halen

De Figma MCP kan assets exporteren met `download_assets`. Doe dat **eenmalig naar de repo**, niet als stap in de build. Zie `design-system.md`: de build hangt nooit af van een live Figma-query, want op de Camino is er geen wifi om op te vertrouwen.

## Comprimeren

Op de Free en Pro plannen kun je niet leunen op transformaties, zie de sectie hieronder. Dus we comprimeren **vóór** upload en voor het in de bundle gaat.

| Soort | Formaat | Instelling |
|---|---|---|
| Iconen | **SVG** | Vector, dus één bestand voor alle schermdichtheden |
| Illustraties en foto's | **WebP** | Kwaliteit 80 tot 85, breedte maximaal 2x de weergavebreedte |
| Alles | | Geen bestand groter dan nodig voor de plek waar het staat |

Twee regels die het meeste opleveren:

1. **Schaal naar de weergavegrootte.** Een afbeelding van 2000 pixels breed in een kaart van 320 pixels is 40 keer te veel data. Dit is bijna altijd de grootste winst.
2. **Genereer varianten vooraf**, transformeer niet tijdens het opvragen. Dat is ook het expliciete advies in de Supabase-documentatie.

Batch-conversie doe je met een script in de repo. Let op: `sharp` of `squoosh` daarvoor is een **devDependency voor een script**, geen dependency in de app bundle. Dat is een wezenlijk verschil, maar het blijft een aparte pull request. Zie `CLAUDE.md` sectie 5.

## Caching, en waarom een reset niet alles opnieuw ophaalt

Vier maatregelen, van meest naar minst effectief.

### 1. Client-side cache op schijf

Dit is de maatregel die het probleem oplost. `expo-image` heeft een geheugen- en schijfcache ingebouwd:

```
cachePolicy: 'memory-disk'
```

Daarmee overleeft een afbeelding een reload **en** een herstart van de app. Bij ontwikkelen betekent het dat een reset niet alles opnieuw over de lijn trekt.

> `expo-image` is een nieuwe dependency en dus een aparte pull request. Het is wel de juiste: de standaard `Image` van React Native heeft geen schijfcache die je kunt sturen, en zonder deze cache is elke reset opnieuw egress.

### 2. Public bucket, geen signed URLs

Dit is het detail dat het makkelijkst misgaat. Elke signed URL bevat een uniek token, en de CDN behandelt **elk token als een eigen cache-entry**. Genereer je per keer een nieuwe signed URL, dan is de cache nooit warm en gaat elke aanvraag naar de origin. Dan betaal je het dure tarief voor iets dat gecached had kunnen zijn.

De content van Mind is niet persoonsgebonden, dus die hoort in een **public bucket**. Signed URLs zijn voor data die per gebruiker afgeschermd moet zijn, en dat hebben we hier niet. Gebruikersdata staat in tabellen met RLS, niet in Storage.

### 3. `cacheControl` hoog zetten bij upload

De standaard is **1 uur**, en dat is laag voor content die zelden wijzigt. Zet die hoger bij het uploaden vanuit de adminpagina.

Wijzigt een afbeelding, dan **upload je naar een nieuw pad** in plaats van hetzelfde bestand te overschrijven. Browsers verversen hun eigen cache niet als de CDN invalideert, dus een nieuwe naam is de betrouwbare manier. Zet de versie in het pad.

### 4. Smart CDN, maar alleen op Pro

| Plan | Egress (uncached / cached) | Smart CDN | Image Transformations |
|---|---|---|---|
| Free | 5 GB / 5 GB | Nee | Nee |
| Pro | 250 GB / 250 GB | Ja | 100 origin images, daarna 5 dollar per 1000 |

Cached egress kost 0,03 dollar per GB, uncached 0,09 dollar. Cached is dus **drie keer goedkoper**, en dat is de reden dat de cache hit rate uitmaakt.

Op **Free** is er geen Smart CDN, dus geen automatische invalidatie en een lagere hit rate. Consequentie voor ons: op Free is punt 3 hierboven geen optimalisatie maar noodzaak, en versienummers in paden zijn de enige betrouwbare manier om iets te verversen.

Bij een app die vooral eigen assets uit de bundle gebruikt en alleen Mind-content streamt, is 5 GB ruim genoeg. Bij een app die alle iconen uit Storage haalt, is het dat niet. Dat is nog een reden voor de splitsing bovenaan.

## Wat we niet doen

- **Geen transformaties tijdens het opvragen.** Niet beschikbaar op Free en op Pro is de quota 100 afbeeldingen per maand.
- **Geen afbeeldingen in de database.** Storage of bundle, nooit een kolom met base64.
- **Geen assets uit een externe CDN of stockservice.** Zie `design-system.md`: de assetbibliotheek is gesloten.
