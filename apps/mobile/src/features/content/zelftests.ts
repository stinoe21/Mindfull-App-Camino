// De zelftests van MIND: opzoeken en de score uitrekenen.
//
// De data staat in data/zelftests.ts (gegenereerd). De score wordt hier op
// het toestel berekend zoals het formulier van MIND dat doet (som of
// gemiddelde) en nergens bewaard: antwoorden, score en uitslag bestaan alleen
// zolang het scherm open is. Zie docs/datamodel.md ("Zelftests").

import { ZELFTESTS, type Zelftest, type ZelftestRegel, type ZelftestUitslag } from "./data/zelftests.ts";

export function zelftestVoor(slug: string | undefined): Zelftest | undefined {
  return ZELFTESTS.find((t) => t.slug === slug);
}

/** De tests bij een onderwerp van de bibliotheek (Stress, Angst, ...). */
export function zelftestsBijOnderwerp(onderwerp: string): Zelftest[] {
  return ZELFTESTS.filter((t) => t.onderwerp === onderwerp);
}

/** De score van een reeks antwoorden: per vraag de index van de gekozen optie. Onbeantwoord telt niet mee. */
export function scoreVan(test: Zelftest, antwoorden: (number | undefined)[]): number {
  const scores = test.vragen.map((v, i) => (antwoorden[i] === undefined ? undefined : v.opties[antwoorden[i]]?.score)).filter((s): s is number => s !== undefined);
  const som = scores.reduce((a, b) => a + b, 0);
  if (test.scoring === "gemiddelde") return scores.length ? som / scores.length : 0;
  return som;
}

const klopt = (r: ZelftestRegel, score: number): boolean =>
  r.op === "<" ? score < r.waarde : r.op === "<=" ? score <= r.waarde : r.op === ">" ? score > r.waarde : score >= r.waarde;

/** De uitslag bij een score: de eerste waarvan alle regels kloppen. */
export function uitslagVoor(test: Zelftest, score: number): ZelftestUitslag | undefined {
  return test.uitslagen.find((u) => u.regels.every((r) => klopt(r, score)));
}
