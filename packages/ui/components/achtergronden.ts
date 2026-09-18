// De hero-achtergrond per weerstaat.
//
// Tot 14 september 2026 had elke weerstaat een eigen gradient-plaatje
// (hero-zonnig.webp, hero-wolken.webp, ...). Die vijf plaatjes hadden elk een
// eigen palet, en "zonnig" was een verzadigd paars dat nergens anders in de
// app voorkomt (Stijn: "dat paars past er niet zo goed bij"). Sindsdien is
// de standaardhero overal dezelfde tekening, en krijgt het weer zijn kleur
// als een zachte was uit het palet eroverheen: dezelfde vorm, een andere
// stemming. De weerstaten blijven de databasecodes uit docs/datamodel.md.
// De oude plaatjes staan nog in assets/backgrounds, maar worden niet meer
// geladen.

import { palette } from "../tokens/tokens.ts";

export type WeerStaat = "default" | "zonnig" | "wolken" | "mist" | "wind" | "regen";

/** De ene hero-tekening, achter elke weerstaat. */
export const HERO_BRON: number = require("../assets/backgrounds/hero-default.webp");

/** Een paletkleur ("rgb(r,g,b)") met een dekking, voor de was. */
export const metDekking = (kleur: string, dekking: number): string => kleur.replace("rgb(", "rgba(").replace(")", `,${dekking})`);

export type HeroWas = { boven: string; onder: string };

/**
 * De was per weerstaat, van boven naar beneden. Warm en licht bij zon, grijs
 * en blauw bij wolken, vlak en bleek bij mist, fris bij wind, koel en dieper
 * bij regen. Geen was op de standaardstaat.
 */
export const HERO_WAS: Record<WeerStaat, HeroWas | null> = {
  default: null,
  zonnig: { boven: metDekking(palette.yellow400, 0.8), onder: metDekking(palette.yellow200, 0.55) },
  wolken: { boven: metDekking(palette.neutral300, 0.7), onder: metDekking(palette.primary100, 0.55) },
  mist: { boven: metDekking(palette.neutral200, 0.85), onder: metDekking(palette.neutral100, 0.8) },
  wind: { boven: metDekking(palette.primary200, 0.7), onder: metDekking(palette.lime100, 0.55) },
  regen: { boven: metDekking(palette.primary400, 0.65), onder: metDekking(palette.purple300, 0.5) },
};
