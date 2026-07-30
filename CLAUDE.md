# Mentale Weerbericht

Projectinstructies voor Claude Code. Dit bestand laadt automatisch bij iedere sessie, bij alle drie de teamleden. Het is het contract waar we ons alle drie aan houden.

Lees bij twijfel ook `docs/scope.md` (wat bouwen we wel en niet), `docs/productprincipes.md` (hoe de app zich hoort te gedragen) en `docs/taakverdeling.md` (wie is waar eigenaar van).

---

## 1. Wat dit project is

Een mobiele app voor **Stichting Mind**, werktitel "Mentale Weerbericht", gebouwd door drie mensen tijdens het lopen van de Camino, zomer 2026.

- **Doel:** zie `docs/scope.md`. Is de scope daar nog niet ingevuld, vraag er dan naar in plaats van iets aan te nemen.
- **Platform:** iOS en Android, via de App Store en de Play Store.
- **Stack:** React Native met Expo en expo-router. Supabase voor backend, auth en database.
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

- Elk scherm uit de userflow bestaat al als bestand op de juiste route. Een feature bouwen is dat bestand vullen plus nieuwe bestanden ernaast zetten.
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

Zie `docs/design-system.md`.

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

Bij twijfel: niet opslaan, en vragen.

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

| Server | Waarvoor |
|---|---|
| `github` | Pull requests, issues, reviews. Heeft één omgevingsvariabele nodig, zie hieronder. |
| `supabase-mind` | Database inspecteren, types genereren. Staat op **read-only**. |
| `figma` | Designs ophalen: frames, componenten, variables en screenshots uit het designbestand |

`supabase-mind` en `figma` autoriseer je via de browser met je eigen account, zonder token. De Supabase-MCP draait dus **niet** via `npx`. Die stdio-variant kan geen browserlogin en verwacht een personal access token, en dat is precies wat we niet willen.

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
