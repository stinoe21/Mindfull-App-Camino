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

// De hulproute. Eén vraag in de tests van MIND gaat over gedachten aan de
// dood of aan jezelf pijn doen: vraag 9 van de depressietest. Wie daar iets
// anders antwoordt dan het laagste, krijgt direct onder de vraag en bovenaan
// de uitslag de weg naar 113 en de Hulplijn te zien, los van de totaalscore:
// iemand kan laag scoren en op deze ene vraag toch ja zeggen. Het antwoord
// bestaat alleen in het geheugen van het scherm, net als de rest.
//
// De data is gegenereerd en mag niet met de hand worden aangevuld, daarom
// staat de verwijzing hier. De test in zelftests.test.ts bewaakt dat de index
// nog naar dezelfde vraag wijst als MIND de test ooit aanpast.
export const HULPVRAGEN: Record<string, { vraag: number; vanafScore: number }[]> = {
  depressietest: [{ vraag: 8, vanafScore: 1 }],
};

/** Hoort bij dit antwoord op deze vraag de hulproute? */
export function isHulpantwoord(test: Zelftest, vraag: number, antwoord: number | undefined): boolean {
  if (antwoord === undefined) return false;
  const score = test.vragen[vraag]?.opties[antwoord]?.score;
  if (score === undefined) return false;
  return (HULPVRAGEN[test.slug] ?? []).some((h) => h.vraag === vraag && score >= h.vanafScore);
}

/** Hoort bij deze reeks antwoorden de hulproute, los van de totaalscore? */
export function vraagtOmHulproute(test: Zelftest, antwoorden: (number | undefined)[]): boolean {
  return (HULPVRAGEN[test.slug] ?? []).some((h) => isHulpantwoord(test, h.vraag, antwoorden[h.vraag]));
}

/** De uitslag bij een score: de eerste waarvan alle regels kloppen. */
export function uitslagVoor(test: Zelftest, score: number): ZelftestUitslag | undefined {
  return test.uitslagen.find((u) => u.regels.every((r) => klopt(r, score)));
}
