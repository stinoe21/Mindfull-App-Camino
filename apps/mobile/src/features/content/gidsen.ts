// De online gidsen van MIND, gekoppeld aan onderwerpen.
//
// MIND noemde de gidsen in de feedbacksessie (verwerkt 10 september 2026)
// het belangrijkste inhoudelijke onderdeel: praktische tips en technieken,
// meer handelingsperspectief dan de psychipedia. Daarom hangen ze aan het
// onderwerp waar iemand naar kijkt: op het artikel, in de tips op Home en in
// het naslagwerk. De koppeling zelf staat in scripts/gen-gidsen.mjs.

import { GIDSEN, type Gids } from "./data/gidsen.ts";

/** De gidsen bij één onderwerp, in de volgorde van de lijst van MIND. */
export function gidsenBijOnderwerp(onderwerp: string): Gids[] {
  return GIDSEN.filter((g) => g.onderwerp === onderwerp);
}

/**
 * Gidsen met een onderwerp, die van de gekozen voorkeuren eerst. Zonder
 * voorkeuren gewoon de volgorde van de lijst.
 */
export function gidsenVoor(voorkeuren: string[]): Gids[] {
  return GIDSEN.filter((g) => g.onderwerp).sort(
    (a, b) => Number(voorkeuren.includes(b.onderwerp ?? "")) - Number(voorkeuren.includes(a.onderwerp ?? ""))
  );
}
