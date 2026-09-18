// Het contrast van elke combinatie van tekst en vlak die de app gebruikt.
//
// Bekijken:  node scripts/contrast.mjs
// Bewaken:   npm test (contrast.test.ts)
//
// De eis is WCAG 2.1 AA: 4,5 op 1 voor gewone tekst, 3 op 1 voor grote tekst
// (vanaf 24 punten, of 18,66 en vet) en voor wat geen tekst is maar wel iets
// betekent, zoals de rand van een knop. Dit bestand leest de tokens zelf, dus
// een gewijzigde kleur geeft meteen een nieuwe uitkomst. Het wijzigt niets:
// wat zakt, is een besluit voor wie over de tokens gaat.
//
// De lijst is met de hand samengesteld uit de componenten. Komt er een nieuwe
// combinatie bij (een nieuwe kaarttoon, een nieuwe tekstkleur op een vlak),
// zet hem er dan bij. De weertinten zijn die van
// apps/mobile/src/features/weer/kaartKleuren.ts; wijzigen ze daar, dan hier ook.

import { colors, palette } from "./tokens.ts";

function rgb(kleur: string): [number, number, number] {
  const m = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(kleur);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  const h = /^#([0-9a-f]{6})$/i.exec(kleur);
  if (h) return [parseInt(h[1].slice(0, 2), 16), parseInt(h[1].slice(2, 4), 16), parseInt(h[1].slice(4, 6), 16)];
  throw new Error("Onbekende kleurnotatie: " + kleur);
}
const lineair = (c: number): number => (c / 255 <= 0.03928 ? c / 255 / 12.92 : ((c / 255 + 0.055) / 1.055) ** 2.4);
function helderheid(kleur: string): number {
  const [r, g, b] = rgb(kleur).map(lineair);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
/** De contrastverhouding volgens WCAG, van 1 (gelijk) tot 21 (zwart op wit). */
export function contrast(a: string, b: string): number {
  const [licht, donker] = [helderheid(a), helderheid(b)].sort((x, y) => y - x);
  return (licht + 0.05) / (donker + 0.05);
}

const VLAKKEN: Record<string, string> = {
  "het vel (surfaceBackground)": colors.surfaceBackground,
  "zandkaart (Card white, yellow100)": palette.yellow100,
  "blauwe kaart (Card primary, primary50)": palette.primary50,
  "paarse kaart (Card purple, purple50)": palette.purple50,
  "Hulplijnkaart (Card sun, weatherSun)": palette.weatherSun,
  "koraalkaart (Card coral, coral50)": palette.coral50,
  "witte kaart (Card outline, surfaceCard)": colors.surfaceCard,
};
const WEERTINT_LICHT: Record<string, string> = { zonnig: palette.yellow200, wolken: palette.primary50, mist: palette.neutral100, wind: palette.lime100, regen: palette.primary200 };
const KAARTKLEUR: Record<string, string> = { zonnig: palette.yellow400, wolken: palette.primary100, mist: palette.neutral200, wind: palette.lime200, regen: palette.primary400 };

// [wat, tekstkleur, vlak, eis]. Eis 0 is ter informatie.
const PAREN: [string, string, string, number][] = [];
for (const [naam, vlak] of Object.entries(VLAKKEN)) {
  PAREN.push(["gewone tekst (textPrimary) op " + naam, colors.textPrimary, vlak, 4.5]);
  PAREN.push(["secundaire tekst (textSecondary) op " + naam, colors.textSecondary, vlak, 4.5]);
  PAREN.push(["link, overline en secundaire knop (brandDefault) op " + naam, colors.brandDefault, vlak, 4.5]);
}
PAREN.push(["label op de primaire knop (ctaText op ctaDefault)", colors.ctaText, colors.ctaDefault, 4.5]);
// Ter informatie, zonder eis: een knop met een goed leesbaar label hoeft zich
// volgens WCAG 1.4.11 niet ook nog met zijn vlak van de achtergrond te
// onderscheiden. De lime knop doet dat ook nauwelijks; het label draagt hem.
PAREN.push(["ter info: het vlak van de primaire knop tegen het vel", colors.ctaDefault, colors.surfaceBackground, 0]);
PAREN.push(["actieve chip (textOnprimary op primary700)", colors.textOnprimary, palette.primary700, 4.5]);
PAREN.push(["chip in rust (primary800 op primary50)", palette.primary800, palette.primary50, 4.5]);
PAREN.push(["placeholder in een invoerveld (textSecondary op yellow100)", colors.textSecondary, palette.yellow100, 4.5]);
PAREN.push(["rand van de secundaire knop tegen het vel (geen tekst)", colors.brandDefault, colors.surfaceBackground, 3]);
for (const [weer, tint] of Object.entries(WEERTINT_LICHT)) {
  PAREN.push(["weernaam op de weerkaart van Home, " + weer + " (textPrimary)", colors.textPrimary, tint, 4.5]);
  PAREN.push(["overline en pijltje op de weerkaart van Home, " + weer + " (brandDefault)", colors.brandDefault, tint, 4.5]);
}
for (const [weer, kleur] of Object.entries(KAARTKLEUR)) {
  PAREN.push(["inktlijn van het weericoon op de kaart van Nederland, " + weer + " (geen tekst)", palette.baseInk, kleur, 3]);
}

export type Meting = { wat: string; ratio: number; eis: number; haalt: boolean };

export const METINGEN: Meting[] = PAREN.map(([wat, tekst, vlak, eis]) => {
  const ratio = contrast(tekst, vlak);
  return { wat, ratio: Math.round(ratio * 100) / 100, eis, haalt: ratio >= eis };
});
