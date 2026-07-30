# Mentale Weerbericht

Projectinstructies voor Claude Code. Dit bestand laadt automatisch bij iedere sessie, bij alle drie de teamleden. Het is het contract waar we ons alle drie aan houden.

Lees bij twijfel het document dat bij je vraag hoort. Dit is de volledige lijst, er is niets daarbuiten.

| Je vraag | Document |
|---|---|
| Wat bouwen we wel en expliciet niet in v1 | `docs/scope.md` |
| Hoe de app zich hoort te gedragen: toon, houding, wat we nooit doen | `docs/productprincipes.md` |
| Tokens, componenten, assets, en hoe Figma en de repo zich verhouden | `docs/design-system.md` |
| Welke tabellen en velden bestaan, met bewaartermijn per veld | `docs/datamodel.md` |
| Wat met Mind is afgesproken over privacy, en wat nog open staat | `docs/privacy-besluiten.md` |
| Waar een afbeelding hoort, compressie, caching en egress | `docs/assets-en-media.md` |
| Rate limits, misbruik, en waarom de check-in-teller persoonlijk moet zijn | `docs/limieten-en-misbruik.md` |
| Wie waar eigenaar van is, hoe een taak eruitziet, dagritme | `docs/taakverdeling.md` |
| Eenmalige repo-instellingen, door de eigenaar | `docs/setup-github.md` |

**Staat het antwoord in geen van deze bestanden, dan is het niet afgesproken.** Vraag ernaar, vul het niet zelf in. Dat geldt ook voor iets dat logisch of onvermijdelijk lijkt.

Drie skills laden automatisch: `werkwijze` (de git-workflow), `nieuwe-feature` (een taak van begin tot eind, met de definition of done) en `pr-check` (een pull request van een teamgenoot reviewen).

`AGENTS.md` is een korte versie van dit bestand, voor agents die `CLAUDE.md` niet laden. Wijzigt hier een harde regel, werk die dan daar ook bij.

---

## 0. Stand van zaken, lees dit eerst

**Er staat nog geen code in deze repo.** Alleen documentatie en configuratie. `apps/`, `packages/`, `supabase/` en `package.json` bestaan nog niet. Alles hieronder beschrijft dus hoe we gaan werken zodra dat er wel is, niet wat je nu aantreft.

Wat dat concreet voor je betekent als je nu een taak oppakt:

- **`packages/ui/tokens` bestaat nog niet.** De regel "nooit een hardcoded designwaarde" blijft staan, maar tot het scaffolden gebeurd is kun je er niet aan voldoen. Bouw dus nog geen UI.
- **`npm run typecheck`, `npm run lint` en `npm test` bestaan nog niet.** De definition of done in sectie 7 is nog niet af te vinken. De CI weet dat en slaat die stappen over zolang er geen `package.json` is.
- **De routebestanden van de userflow bestaan nog niet.** Zie sectie 4.

Er staan twee dingen voor, in deze volgorde, en het zijn allebei geen agent-taken:

1. **`docs/scope.md` invullen** vanaf het Figma-board. Dat is een besluit van de drie samen. Zolang dat leeg is, mag je geen productbeslissing nemen en is stoppen en vragen het juiste antwoord.
2. **De Expo-app scaffolden.** Dat raakt `package.json`, `app.config.ts` en de tokens, dus het is per sectie 5 een eigen pull request van de eigenaar.

Pas daarna is een feature-taak uitvoerbaar. Word je gevraagd iets te bouwen en klopt bovenstaande nog steeds, zeg dat dan in plaats van alvast iets neer te zetten.

---

## 1. Wat dit project is

Een mobiele app voor **Stichting Mind**, werktitel "Mentale Weerbericht", gebouwd door drie mensen tijdens het lopen van de Camino, zomer 2026.

- **Doel:** zie `docs/scope.md`. Is de scope daar nog niet ingevuld, vraag er dan naar in plaats van iets aan te nemen.
- **Platform:** iOS en Android, via de App Store en de Play Store. Daarnaast een **webapp** voor de adminpagina van Mind en de analyticspagina voor het IT-departement. Die zitten dus niet in de app die gebruikers installeren, zie `docs/scope.md`.
- **Stack:** React Native met Expo en expo-router. Supabase voor backend, auth en database. Welk framework de webapp krijgt, staat nog open.
- **Repo:** een monorepo, besloten op 30 juli 2026 omdat er twee applicaties zijn die dezelfde tokens en hetzelfde datamodel delen.

  ```
  apps/mobile      de Expo-app die in de stores komt
  apps/admin       de webapp: Mind zet er content in, de app geeft die weer
  packages/ui      tokens en componenten
  packages/types   TypeScript-types, gegenereerd uit het Supabase-schema
  ```

  De adminwebapp is dus een **CMS**: Mind uploadt daar content en de app leest die uit Supabase. **De mobiele app staat centraal en de admin komt daarna**, zie `docs/taakverdeling.md`. De twee applicaties delen geen beeld, ze delen de database. Dat is precies waarom `packages/types` bestaat: één keer genereren uit het schema, en niet in twee applicaties een eigen kopie die uit elkaar loopt.

  Let op: de componenten in `packages/ui` zijn React Native-componenten en draaien niet zonder meer in een webapp. De **tokens** zijn platte waarden en gelden overal. Zie `docs/design-system.md`.
- **Domein:** mentale gezondheid. Dat heeft harde gevolgen voor wat je met data mag doen, zie sectie 8.

**Userflow (Figma board):**
https://www.figma.com/board/jwNUZRHmpKfqTCeUnFcVdP/MIND-Mentale-Weerbericht---User-Flow

Dit is de bron voor wat de app doet. Staat iets niet in `docs/scope.md`, lees dan dit board voordat je iets aanneemt.

## 2. Hoe we met drie mensen werken

Wij zijn met z'n drieën en we werken in **één gedeelde GitHub-repo**. Ieder heeft een eigen lokale clone op een eigen laptop en een eigen Claude Code-sessie.

Dat betekent voor jou als agent:

- Er werken op dit moment mogelijk **twee andere agents tegelijk** in dezelfde repo, op andere branches.
- Alles wat jij aanraakt buiten de scope van je taak, kan het werk van iemand anders breken.
- Je bent daarom **niet vrij** om code op te ruimen, te refactoren of te "verbeteren" buiten je taak. Zie sectie 5.

Werken we vanuit een gedeelde cloudmap (iCloud, Drive, Dropbox)? Nee. Nooit. De git-checkout staat altijd in een gewone lokale map.

## 3. Git-workflow: rebase en squash merge

Dit is de belangrijkste operationele afspraak. Zie de skill `werkwijze` voor de volledige uitleg en de commando's.

Kort:

| Wat | Hoe |
|---|---|
| Branch per taak | `feat/<korte-naam>`, `fix/<korte-naam>`, `chore/<korte-naam>`. Nooit een branch op naam van een persoon. |
| Bijwerken | `git fetch origin && git rebase origin/main`. Nooit `git merge origin/main`. |
| Pushen | `git push --force-with-lease`. **Nooit** gewoon `--force`. |
| Naar main | Alleen via een pull request, met **Squash and merge**. |
| main rebasen | Nooit. Door niemand. |

Je pusht als agent **nooit** rechtstreeks naar `main`. `main` is technisch beschermd, maar probeer het ook niet.

Krijg je bij het rebasen elke keer conflicten, meld dat. Dat is geen git-probleem maar een teken dat de taken verkeerd gesneden zijn.

## 4. Hoe taken gesneden zijn

De regel waar onze hele parallelle workflow op rust:

> **Een taak bestaat uit nieuwe bestanden plus hooguit één bestaand bestand.**

Als dat waar is, kan er per definitie geen merge-conflict ontstaan, ongeacht wie er tegelijk werkt.

Praktisch betekent dit:

- Elk scherm uit de userflow krijgt vóór vertrek een leeg routebestand op de juiste plek. Een feature bouwen is dan dat bestand vullen plus nieuwe bestanden ernaast zetten. **Die routebestanden bestaan nog niet**, zie de stand van zaken hierboven.
- Feature-code staat in `apps/mobile/src/features/<feature>/` en nergens anders.
- Moet je toch een gedeeld bestand wijzigen, dan is dat een **aparte, kleine pull request** die binnen een halfuur gemerged wordt. Niet als bijvangst van een feature.

Kun je een taak niet uitvoeren zonder een gedeeld bestand aan te raken, **stop dan en meld het**. Ga niet alsnog je gang.

## 5. Bestanden die je als agent niet aanraakt

Wijzig deze nooit als onderdeel van een feature-taak. Ze horen in een eigen pull request van hun eigenaar (zie `docs/taakverdeling.md`):

- `package.json` en de lockfile (dus: geen nieuwe dependencies zonder aparte PR)
- `app.json` / `app.config.ts` en alles wat de build configureert
- `packages/ui/tokens/**` (design tokens)
- `supabase/migrations/**`
- `.github/workflows/**`
- `CLAUDE.md`, `.mcp.json`, `.claude/**`
- Auth- en sessielogica
- De root layout van expo-router

Verder:

- Voeg **geen nieuwe dependency** toe. Vraag ernaar. Een package dat drie mensen moeten installeren op slechte wifi is duurder dan het lijkt.
- Verwijder geen bestaande code die buiten je taak valt, ook niet als die dood lijkt. Iemand anders is er misschien mee bezig op een andere branch.

## 6. Design en visuele consistentie

Het grootste risico bij drie parallelle agents is dat het beeld uit elkaar loopt. Daarom:

- **Nooit hardcoded kleuren, spacing, radii, font sizes of shadows.** Altijd via de tokens uit `packages/ui/tokens`. Er staat een lint-regel op die dit weigert.
- Bouw geen nieuwe component als er al een is. Zoek eerst in `packages/ui/components`.
- Elke nieuwe of gewijzigde component wordt toegevoegd aan het kitchen sink-scherm (`apps/mobile/src/app/_dev/kitchen-sink.tsx`) met al zijn states.
- **Introduceer nooit zelf een icoon, illustratie of afbeelding.** De assetbibliotheek staat vast, ook de weer-iconen. Mis je iets, meld het.
- Figma is de bron voor hoe iets eruitziet. De **build** hangt nooit af van een live Figma-query. Tokens en assets staan in de repo.

Zie `docs/design-system.md` voor tokens en componenten, en `docs/assets-en-media.md` voor waar een afbeelding hoort. Kort: iconen, illustraties en gradients zitten in de app bundle, alleen content die Mind zelf toevoegt gaat naar Supabase Storage. Comprimeer vooraf, gebruik een public bucket in plaats van signed URLs, en zet `cacheControl` hoog. Een signed URL per keer opnieuw genereren maakt de cache nooit warm en kost elke keer egress.

## 7. Definition of done

Een taak is pas af als dit allemaal klopt. Zie de skill `nieuwe-feature` voor de volledige checklist.

1. Loading, empty en error state zijn geïmplementeerd, niet alleen het gelukte pad.
2. Werkt zonder netwerk, of faalt netjes met een begrijpelijke melding.
3. De vier vragen onderaan `docs/productprincipes.md` zijn nagelopen.
4. `npm run typecheck`, `npm run lint` en `npm test` zijn groen.
5. Geen hardcoded designwaarden, en geen zelf toegevoegde assets.
6. Geen nieuwe dependency.
7. Geen gedeelde bestanden aangeraakt buiten de afspraak.
8. Er is een screenshot of opname in de pull request als er iets zichtbaars is veranderd.

## 8. Privacy: dit is een app over mentale gezondheid

Dit is geen formaliteit. Behandel het als een harde eis.

- **Log nooit inhoudelijke gebruikersinvoer.** Niet naar de console, niet naar een crash reporter, niet naar analytics. Ook niet tijdelijk om te debuggen.
- Sla geen vrije tekst over iemands gemoedstoestand op zonder dat dit expliciet in `docs/datamodel.md` staat, met een bewaartermijn erbij.
- Voeg **nooit** eigenhandig een analytics-event, tracking-veld of databasekolom toe omdat het "handig" lijkt. Elk veld dat data over een gebruiker vastlegt, is een expliciete productbeslissing.
- Elk stuk gebruikersdata moet verwijderbaar zijn. Bouw je opslag, bouw dan ook het verwijderen.
- Verwerk je iets rond crisis of nood, wijk dan niet af van de tekst die in `docs/scope.md` is vastgelegd. Verzin zelf geen hulpteksten, telefoonnummers of doorverwijzingen.
- **Tel check-ins nooit op de collectieve tabel.** Daar staat geen gebruikerscode in, dus het kan niet, en een poging daartoe breekt de anonimisering. De begrenzing van één check-in per dag hoort aan de persoonlijke kant, vóór het wegschrijven. Zie `docs/limieten-en-misbruik.md`.

Bij twijfel: niet opslaan, en vragen.

Wat er met Mind is afgesproken, wat nog open staat en wie daarvoor aan zet is: `docs/privacy-besluiten.md`. De inhoudelijke besluiten waar je tegenaan bouwt staan in `docs/datamodel.md`.

## 9. Backend: Supabase

- Schema-wijzigingen gaan **altijd** via een migratiebestand in `supabase/migrations/`, nooit via de dashboard-UI en nooit via een los `execute_sql`-commando tegen productie.
- De Supabase MCP staat op `--read-only`. Dat is bewust. Wil je iets wijzigen, schrijf een migratie.
- TypeScript-types worden gegenereerd uit het schema, niet met de hand geschreven.
- Row Level Security staat aan op elke tabel met gebruikersdata. Een tabel zonder RLS is een bug.

### Als de MCP niet werkt

Er zijn drie routes, en welke je pakt hangt af van wat je wil doen. Geen ervan vraagt een service role key op je laptop.

| Wat je wil | Route |
|---|---|
| Kijken: schema, tabellen, policies, logs | De MCP. Werkt die niet, dan het Supabase-dashboard in de browser, of de `supabase` CLI na `supabase login` met je eigen account. |
| Types genereren | `supabase gen types typescript` via de CLI. Werkt zonder MCP. |
| Schema wijzigen | **Altijd** een migratiebestand plus `supabase db push`. De CLI authenticeert met jouw account, niet met een key die alles mag. |
| Vrij experimenteren, data schrijven, dingen stukmaken | **Lokale Supabase**, met `supabase start`. Daar heb je alle rechten en raak je geen productiedata. Dit is de plek waar je mag rommelen. |

> **Geen service role key op een laptop, en nooit voor een agent.** Die key omzeilt Row Level Security volledig, en RLS is precies het mechanisme dat de twee datastromen uit `datamodel.md` gescheiden houdt. Met zo'n key is één verkeerde join genoeg om de collectieve pool aan gebruikers-id's te koppelen, en dan is de anonimisering weg die we aan Mind hebben belegd.
>
> Drie laptops op wisselende wifi betekent drie kopieën van een sleutel die alles kan met mentale-gezondheidsdata, terwijl de DPIA nog loopt. De lokale stack lost hetzelfde probleem op zonder dat risico.
>
> De productie-service-role-key hoort alleen in de serveromgeving van de admin- en analyticspagina, en nooit in een `.env` naast de app.

## 10. MCP's

Zie `.mcp.json` in de repo. Iedereen krijgt na een `git clone` dezelfde koppelingen. Zet **nooit** een token, key of wachtwoord in `.mcp.json` of `.env.example`, die bestanden gaan de repo in. Is er een token nodig, dan staat in `.mcp.json` alleen de naam van een omgevingsvariabele.

| Server | Waar hij vandaan komt | Waarvoor |
|---|---|---|
| `github` | `.mcp.json` | Pull requests, issues, reviews. Heeft één omgevingsvariabele nodig, zie hieronder. |
| `supabase-mind` | `.mcp.json` | Database inspecteren, types genereren. Staat op **read-only**. |
| `figma` | De **Figma-plugin**, user scope | Designs ophalen: frames, componenten, variables en screenshots. Plus twaalf skills. |

`supabase-mind` en `figma` autoriseer je via de browser met je eigen account, zonder token. De Supabase-MCP draait dus **niet** via `npx`. Die stdio-variant kan geen browserlogin en verwacht een personal access token, en dat is precies wat we niet willen.

**Figma komt uit de plugin en niet uit `.mcp.json`**, besloten op 30 juli 2026. De plugin brengt dezelfde server mee plus de skills eromheen, dus twee keer definiëren leverde alleen een naamconflict op. Nadeel: het is de enige koppeling die niet automatisch meekomt met een `git clone`. Installeren is één commando en het staat als verplichte stap in `ONBOARDING.md`.

```bash
claude plugin install figma@claude-plugins-official
```

**GitHub is de uitzondering en heeft één token nodig.** Die server ondersteunt geen dynamic client registration en publiceert geen OAuth-metadata, dus browserlogin bestaat er niet. In plaats van drie personal access tokens aan te maken en te verlengen, hergebruiken we het token dat de `gh` CLI al voor je beheert.

Windows:

```powershell
setx GITHUB_MCP_TOKEN (gh auth token)
```

macOS of Linux, in `~/.zshrc` of `~/.bashrc`:

```bash
export GITHUB_MCP_TOKEN=$(gh auth token)
```

Herstart daarna Claude Code volledig, of VSCode als je de extensie gebruikt: een omgevingsvariabele wordt gelezen bij het starten van het proces. De variant met `~/.zshrc` is de nettere, want dan bestaat er geen tweede kopie van het token buiten je keyring. Werkt `github` niet en zie je `Authorization header is badly formatted`, dan is de variabele leeg of niet meegekomen.

**Figma is onze route van design naar code.** Haal een frame op met de MCP in plaats van een screenshot op het oog na te bouwen. De build hangt nooit af van een live Figma-query, zie sectie 6: tokens en assets staan in de repo.

De server heet `supabase-mind` en niet `supabase`, omdat dat laatste bij sommigen al een user-scope server is voor een ander project. Gelijke namen in verschillende scopes botsen.

Ieder verbindt zelf, met het eigen account. Daarvoor heb je wel toegang nodig tot wat eronder zit: de GitHub-repo, de Supabase-organisatie en het Figma-bestand. Zie je een server niet verbinden of een leeg projectenlijstje, dan mist waarschijnlijk je uitnodiging. Vraag Stijn. Stap voor stap staat het in `ONBOARDING.md`.

De `supabase-mind`-URL is gescoped met `?project_ref=fpvvmgdzftmkyiqfvpjj`, het project **Mindfull-App-Camino** in de organisatie **Back to Being** (regio `eu-central-1`, Frankfurt). De MCP ziet daardoor alleen dit project, ook als je zelf nog andere Supabase-projecten hebt.

## 11. Toon en taal

- Antwoord in het Nederlands.
- **Gebruik nooit een em-dash (het lange streepje).** Niet in tekst, niet in code, niet in commits, niet in UI-teksten. Gebruik een gewoon koppelteken, een dubbele punt, of herformuleer.
- Commit messages in het Engels, kort, in de gebiedende wijs: `add check-in screen`, niet `added check-in screen`.

## 12. Als je vastloopt

Stop en vraag. Doe niet het volgende:

- Een taak half afmaken en de rest "voor later" laten staan zonder het te melden.
- Een gedeeld bestand toch aanpassen omdat het anders niet lukt.
- Een dependency toevoegen om een probleem te omzeilen.
- Een tabel of veld verzinnen dat niet in `docs/datamodel.md` staat.

Melden dat iets niet kan binnen de afgesproken grenzen is een geldig eindresultaat.
