// Van weerbeeld naar leestips.
//
// De funnel uit docs/datamodel.md, uitgevoerd zoals daar voorgesteld: de
// koppeling staat in de appcode en draait op het toestel. De server weet van
// niets, en de content is weerblind. Per weerbeeld een paar onderwerpen, in
// volgorde van zachtheid; per onderwerp het eerste artikel uit de bibliotheek,
// zodat een regenachtige dag een stuk over somberheid oplevert en niet meteen
// het artikel over depressie (productprincipes: nooit een diagnose).
//
// Gebouwd na de feedback van Mind van 27 augustus 2026.

import { ARTIKELEN, type Artikel } from "./data/artikelen.ts";

import type { WeatherCode } from "@mind/types";

const ONDERWERPEN_BIJ_WEER: Record<WeatherCode, string[]> = {
  zonnig: ["Energie", "Balans", "Ontspanning"],
  wolken: ["Ontspanning", "Balans", "Energie"],
  mist: ["Piekeren", "Slaap", "Ontspanning"],
  wind: ["Stress", "Grenzen", "Ontspanning"],
  regen: ["Somberheid", "Ontspanning", "Energie"],
};

export function tipsBijWeer(weerbeeld: WeatherCode): Artikel[] {
  const tips: Artikel[] = [];
  for (const onderwerp of ONDERWERPEN_BIJ_WEER[weerbeeld]) {
    const artikel = ARTIKELEN.find((a) => a.onderwerp === onderwerp);
    if (artikel && !tips.includes(artikel)) tips.push(artikel);
  }
  return tips;
}
