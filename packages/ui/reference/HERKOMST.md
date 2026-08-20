# MIND Design System

**MIND — Daily Mental Health Companion.** A low-threshold daily check-in app built for MIND (a Dutch mental health organisation). Users check in once a day using a weather metaphor (temperature, wind, visibility, changeability) instead of clinical scales, then get small, relevant support — mini-challenges, Psychipedia-style articles, and a route to MIND's Hulplijn — without ever being scored, diagnosed, or told their day was "good" or "bad".

Core loop: **check in → personal outcome (mascot + weather state + one gentle tip) → optional deeper content (challenges, naslagwerk/knowledge base) → always-visible route to real human help.**

## Sources
- Figma file: "Back-to-Being — App Design Volledige appflow" (mounted read-only; not a public URL). Pages used: `Foundations` (tokens, mascot, buttons, backgrounds, nav bar), `MIND-Prototype-volledige-appflow` (41 production screens — onboarding, dashboard, daily check-in, weather outcomes, challenges, naslagwerk, profile, auth), `App-flow-v2` (flow overview + the canonical check-in slider spec, 3b), `App-flow-v1/8` (system-wide states still to design), `MIND-Prototype-uitleg` (the written design principles), `App-designs-oud` / `App-designs-v2-oud` (earlier screens that consume the shared library).

*No frame, page or link named "App Design Principles" exists in the mounted file* — searched by name across all 11 pages and by keyword. The closest written guidance is `MIND-Prototype-uitleg`. If a separate principles document exists outside the .fig, attach it: it may override items marked *inferred* below.
- Uploaded reference images: `Mascotte main.svg`, `Temperatuur/Wind/Wisselvallig mascotte.png` — copied verbatim into `assets/mascot/`.
- No codebase or GitHub repo was attached to this project.

## Index
- `styles.css` — import entrypoint (tokens + fonts + fig-assets)
- `tokens/` — colors, typography, spacing/radii, fonts (Google Fonts import)
- `components/` — `buttons/Button`, `cards/Card`, `chips/Chip`, `inputs/Slider`, `grid/ContentGrid`, `MascotteVlieger`, `MascotteInput`, `ScreenCanvas`, `NavigationBar`, `BackgroundHeroBand`, `BackgroundHeroGradient`
- `guidelines/` — color, type, spacing/radii and mascot specimen cards
- `ui_kits/mind-app/` — clickable prototype: dashboard → 4-step check-in → confirmation → personal outcome → collective weerbericht → challenges → challenge detail/complete → naslagwerk → profile
- `assets/` — mascot art, weather hero backgrounds, nav home icon
- `SKILL.md` — portable skill file for reuse outside this product

## Components
- **Button** (`components/buttons`) — pill button, `primary` / `secondary` / `link`
- **Card** (`components/cards`) — one rounded card shape, five tone fills
- **Chip** (`components/chips`) — topic/category pill tag
- **Slider** (`components/inputs`) — the daily check-in's two-ended, non-judgmental input
- **ContentSection / ContentShelf / ShelfCard** (`components/grid`) — section rhythm: every collection gets a serif header with optional note and a right-aligned text action, then either a horizontal shelf (open-ended collections, next card peeking at the sheet edge) or a grid (finite sets). Sections at 28px gap are what keep a screen from reading as one flat wall of cards; the shelf `bleed` matches the container padding (20) so it runs to the sheet edge.
- **ContentGrid / ContentCard** (`components/grid`) — MIND's layout for content collections (challenges, naslagwerk, weerbericht stats). Two equal columns, one shared row height, gutter 12; a block is one column or a full-width row. No mosaic, no carousel.
- **MascotteVlieger** — kite mascot, 7 mood/weather states, used on outcome and celebratory screens (materialized from Figma, exact vector paths)
- **MascotteInput** — the *second, separate* mascot family: one pose per check-in question (temperatuur / wind / zicht / wisselvallig), from `/Foundations/Mascotte-Input-states` (552:1558). Don't substitute mood states here. The `zicht` artwork was never exported and currently falls back to `mascot-main.svg`.
- **ScreenCanvas** — the screen shell (`/Foundations/components/Screen/Canvas`, 474:1570): the hero gradient is the page background; the screen itself is one beige sheet card inset by an 8px margin (radius 20, `sheetTop` 56 by default) so a thin ring of gradient stays visible all around. Inside: sheet padding 20, a lead card, then sections at 28px gap (shelf or grid), header-to-content 12, cards pad 18/20, grid gutter 12.
- **NavigationBar** — 5-item floating bottom tab bar (materialized, exact vector paths)
- **BackgroundHeroBand** / **BackgroundHeroGradient** — the two hero-artwork treatments (200px band for standard screens, 480px gradient for result screens), 6 weather states each

### Intentional additions
**MascotteInput** (confirmed intentional addition) is a wrapper we authored around the delivered `Mascotte/Input states` artwork (`/Foundations/Mascotte-Input-states`, 552:1558). The states are the kit's; the component name is ours, because the kit ships the four poses as loose artwork rather than a named symbol.

**ContentGrid / ContentCard** is authored, not from the kit — confirmed as an intentional addition. It replaces the borrowed "Building blocks" ratio placeholders and the generic `Carousel`, which were scaffolding from another library and never MIND's own vocabulary. Content collections use equal grid cards in the existing card tones. **ContentSection / ContentShelf / ShelfCard** are authored additions too: a shelf is allowed for open-ended collections (the peeking card signals "there is more"), while finite sets stay in a grid. (An earlier bento variant was dropped: the varied spans read as chaotic.)

Card, Chip and Slider have no named Figma component — every screen in the source hand-builds its own card/tag/slider markup with identical values repeated across screens (radius 16, `18px 20px` padding; pill chips at primary-50; the lime two-thumb slider). They're extracted here as reusable primitives — confirmed intentional additions — because the repetition was already the pattern; no new visual language was introduced.

### Full component index
Primary (MIND product, `components/`): Button, Card, Chip, Slider, ContentGrid, ContentCard, ContentSection, ContentShelf, ShelfCard, MascotteVlieger, MascotteInput, ScreenCanvas, NavigationBar, BackgroundHeroBand, BackgroundHeroGradient.

Shared library (`components/library/`, borrowed generic controls): LibraryButton, ButtonGroup, InputField, TextareaField, IconButtonStandard, ChevronRight, ChevronDown, Star, StarsFilled, X, Close, CheckSmall, ContinueWithAppleCentreFixed, ContinueWithGoogleCentreFixed, FocusIndicator, ArrowUpRight, ArrowForward, IconsCheck24px, FormContact.

### Shared library (`components/library/`)
Generic controls borrowed from another kit and kept because real screens use them: Button, Button Group, Input Field, Textarea Field, Icon button, Chevron, Star/stars filled, X/close/check_small, Continue with Apple/Google, Focus indicator, Arrow icons, Form Contact. `Continue with Apple`/`Google` and `FormContact` are genuinely used by `/App-designs-oud` and `/App-designs-v2-oud` (onboarding, Psychopedia) — reach into `library/` for auth and generic form patterns.

**Removed on purpose.** The *Building blocks* ratio placeholders and `Carousel` were borrowed scaffolding, not MIND's design — content collections use **ContentGrid** instead. The iPhone device chrome (Battery, Data, Network, Time, Location, Status bar, Home Indicator, Minus, the 9:41 time label) only ever existed to dress up prototype mockups and is not part of the product; a real build gets these from the OS. `Generic avatar` is gone too — MIND has no profile pictures anywhere in the flow, so a three-state avatar placeholder had no job to do.

## Screen layout rules
These are rules, not suggestions — every MIND screen follows them.
1. **The gradient is the page background.** The hero gradient (weather state) fills the screen behind everything. Never place text directly on it on a standard screen.
2. **One beige sheet per screen.** All content lives in a single `--surface-background` sheet card, radius 20, inset by an **8px margin** on the left, right and bottom, so a thin ring of gradient stays visible all around. The sheet starts high (`sheetTop` 56); lower it only on result and celebratory screens, where more gradient should show.
3. **Sheet padding is 20.** Nothing sits closer than 20px to the sheet edge, except a shelf, which bleeds to the edge with `bleed` equal to the sheet padding.
4. **Cards pad 18/20 with a 6px internal gap.** One card shape (radius 16) recolored by tone; grid rows are at least 120 tall, shelf cards 172×152.
5. **Every collection has a section header.** `ContentSection` — serif title, optional one-line note, optional text action on the right. Sections sit 28px apart; header-to-content is 12.
6. **Shelf or grid, never both in one section.** Shelf (horizontal, next card peeking) for open-ended collections; grid (two equal columns, gutter 12) for a finite set the user should see in full. No mosaic or bento spans — a block is one column or a full-width row.
7. **Rhythm over variety.** A screen reads: title → one lead card → sections. Vary tone and section type, never card shape or padding.
8. **Spacing comes off the 4px scale** (4/8/12/16/20/24/28/32/40/48). No in-between values beyond the ones fixed above.

## Design principles
Stated explicitly in `/MIND-Prototype-uitleg` (three frames: *Wat bouwen we?*, *Waarom weer + vlieger?* — badged **DESIGNKEUZES** — and *Wat testen we nu?*). These are authoritative; the observations further down are inferred from screens.
- **Kort en visueel: vier sliders.** The whole daily check-in is four slider questions — temperatuur, wind, zicht, wisselvalligheid. Keep it short enough to do every day.
- **Geen labels.** The user never has to pick an emotion or a diagnosis. The target feeling is *"Dit is ongeveer mijn weer vandaag."*
- **Weer als taal.** Weather is the vocabulary for mental state — descriptive, everyday, non-clinical, and impossible to fail at.
- **Vlieger als gids.** The mascot depicts each question (hence the separate input-state family) and carries the emotional tone of the outcome.
- **App beweegt mee.** After the check-in, colour accents, mascot and atmosphere may subtly shift to reflect the user's weather. The app responds; it does not score.
- **Dagelijks moment.** One low-threshold moment per day, with an honest way to skip ("Sla vandaag over").

## Canonical check-in copy
From `/App-flow-v2/3b · Dagelijkse check-in — slider inputs` (542:1557 / 542:1558). Use verbatim; don't paraphrase.
- Progress reads **`STAP 2 van 4`** — lowercase "van".
- Questions: *Hoe is het weer in je hoofd?* / *Hoeveel wind staat er vandaag?* / *Hoe ver kun je kijken?* / *Hoe wisselvallig is je weer vandaag?*
- Slider label pairs: Guur–Lekker zacht · Wind mee–Wind tegen · Dichte mist–Helder zicht · Rustig–Heel wisselvallig.
- Standing reassurance: *Geen goed of fout. Kies wat nu het dichtst in de buurt komt.*
- Final CTA: **"Bekijk je weer"** (not "Afronden").
- Slider spec: card 150 tall, padding 20/20/18, 1px `neutral-200` border; track 314 wide × 4, base `--slider-track-base` `rgb(235,239,241)`; thumb 20 with a 1.5px ink inset ring on lime.

## System states still to design
`/App-flow-v1/8 · Systeembreed & nog te ontwerpen` (370:2336) names these as known gaps, not as omissions: error / no-internet, empty weerbericht ("Kom later terug"), no search results, consent-gated content, session expired, first-run tips overlay, challenge unlock + afgerond. The same frame specifies **keuze-chips (multi-select)** for the Voorkeuren step, and lists the **MIND Hulplijn** route as a system-wide concern (it recurs across the app, but is not required on literally every screen).

## Content fundamentals
- **Address:** informal Dutch "je/jij", first name once known ("Goedemorgen, Maria"). Never "u".
- **Non-judgmental framing:** questions are phrased as description, not evaluation — "Hoe is de temperatuur vandaag?" with the standing reassurance "Geen goed of fout. Kies wat nu het dichtst in de buurt komt." Weather outcomes are validated, not fixed: "Even niet alles scherp zien is oké. In de mist loop je stap voor stap, en dat is genoeg." Nothing is ever framed as failure.
- **Short, concrete sentences.** Body copy rarely exceeds two sentences per card: "Neem een momentje voor jezelf. Jouw check-in telt anoniem mee in het mentale weerbericht van Nederland."
- **Transparency about data:** every consent/anonymity moment states plainly what happens — "Niemand kan zien wat jij hebt ingevuld" — and that it's reversible — "Je kunt dit altijd wijzigen in Instellingen."
- **Collective framing softens individual pressure:** the check-in is tied to a shared, anonymous national result ("het mentale weerbericht van Nederland"), so a hard day reads as one data point in a shared pattern, not a personal verdict.
- **CTAs are verbs, specific and small:** "Even inchecken", "Start challenge", "Kom in contact", "Sla vandaag over" — always an honest way to say no/later, never a forced yes.
- **No emoji, no exclamation-heavy copy, no unicode icons in body text.** Warmth comes from word choice and the mascot, not decoration.
- **Sourcing is explicit** on knowledge content — every Naslagwerk article is credited ("Bron: MIND"), reinforcing credibility over a generic content-mill feel.

## Visual foundations
- **Color:** cream base (`#FEFEF4`) not stark white — softens the whole app. One brand hue (petrol-blue `primary`) for links/anonymity/collective content; a single saturated **lime accent** (`#CFE634`) reserved for the primary CTA and the check-in slider fill — it appears almost nowhere else, which is what makes it read as "the button color". Coral, purple and weather tones are content-card tints, not UI chrome. Feedback red/green/amber exist in tokens but appear in no screen we saw — *inferred:* mood is not traffic-light coded. The tokens are defined in `/Foundations/Kleuren`, so they are available for genuine system feedback (errors, form validation).
- **Type:** two families only. **Averia Serif Libre** (a slightly hand-drawn serif) for every heading, display line and quote — this is what gives the app its "human, not clinical" voice. **Open Sans** for all body copy, labels, buttons and captions — a plain, highly legible workhorse so the serif stays special. **Averia Libre Light Italic** is a third, narrow role: the one-line italic subtitle directly under a serif heading ("Hoe is je weer vandaag?"). **Contradiction in the source:** the `/Foundations/Button` symbol specifies Inter SemiBold 12, while `/Foundations/Typografie` defines "Label/Button · Open Sans SemiBold 14/20" and every production screen follows the type ramp. The ramp wins; the Inter-12 symbol is stale. `Button.jsx` now uses Open Sans SemiBold 14.
- **Spacing:** 4px base unit; screen padding is consistently 24px horizontal, cards pad 18–20px, stacked sections gap 16px. Nothing sits on a rigid 8pt-only grid — some paddings (14px, 18px, 28px) are deliberately in between.
- **Backgrounds:** every screen sits on a soft full-width **hero photograph** (hand-illustrated sky/cloud/weather art) cropped to a short 200px band behind standard screens, or washed full-height (480px, fading into the cream base) behind check-in results and celebratory moments. The photography is illustrated, painterly and pastel — never a stock photo, never sharp/high-contrast. The gradient is the page background; the screen content lives in a beige sheet card inset by 8px (radius 20), leaving a thin ring of gradient visible around it.
- **Mascot:** a friendly blue kite ("Vlieger") is the emotional throughline — it changes pose per weather state (calm/default, sunny, cloudy, misty, windy, rainy, an "intake" onboarding pose) but never changes color or gets a face full of exaggerated expression; body language does the work.
- **Cards:** *(inferred from screens; no card spec exists in Foundations)* radius 16 is the dominant shape but not universal — login fields use 14, uitleg cards 20, uitleg frames 32, badge pills 15. Tone→meaning (white = check-in, primary = collective, purple = quote, sun = Hulplijn) is read off usage, not specified. Otherwise: no drop shadow, no border on filled cards; a hairline 1px neutral-200 inset border is used only on white "form-like" cards (login fields, search bar) instead of a shadow. Color is the only variable between card types.
- **Buttons:** fully pill-shaped (999px radius) in all three variants; primary is a solid lime fill with dark ink text (no white-on-color button anywhere), secondary is a 1.5px ink outline on transparent, link is bare colored text. No drop shadows, no gradients on buttons.
- **Corners:** buttons 999 (pill), cards 16, the sheet/canvas top corners 24, small swatches 8.
- **Animation/states:** *inferred, not specified.* The pill product-button family defines no hover/press states (mobile-first, touch-only); the 18-variant shared-library `Button` **does** define Default/Hover/Disabled. Nothing in the file prohibits states — the opacity ~0.6–0.8 press dim is our convention, not a rule.
- **Transparency/blur:** *inferred* — observed once in the screens we read: the nav bar's pill background is a frosted `rgba(255,255,249,0.4)` panel over the hero art, giving the floating tab bar a glassy lift without a shadow.
- **Imagery mood:** warm, pastel, hand-illustrated weather scenes (soft clouds, gentle sun, muted mist) — never photographic, never desaturated/moody. Nothing feels overcast in a bleak way, even the "storm"/"mist" states stay soft.

## Iconography
The source defines no dedicated icon font or SVG icon sprite for the real product. The bottom nav's four non-Home icons are bespoke hand-drawn line illustrations (multi-path vectors baked directly into the `NavigationBar` component — not a swappable icon set), and Home uses a small raster illustration rather than a glyph. No icon usage was observed inside body copy, cards, or buttons in the 41 current-flow screens. *That is an observation, not a prohibition* — the shared library does carry an icon set (Chevron, Close, CheckSmall, Arrow, Star), used elsewhere in the file. When a new screen needs an icon MIND doesn't already have, favor a matching hand-drawn line illustration, or the shared-library glyph. The "›" disclosure affordance in Profiel is ours, not the source's.
