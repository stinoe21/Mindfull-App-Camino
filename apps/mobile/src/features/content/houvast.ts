// Houvast: de compacte kennislaag van de app, per onderwerp één pagina
// (Stijn, 10 september 2026, docs/scope.md). De data staat in data/houvast.ts
// en wordt gegenereerd door scripts/gen-houvast.mjs; hier alleen het opzoeken.

import { HOUVAST, type Houvast } from "./data/houvast.ts";

export function houvastVoor(slug: string | undefined): Houvast | undefined {
  return HOUVAST.find((h) => h.slug === slug);
}

/** Alle onderwerpen binnen een onderwerp van de bibliotheek (Slaap, Stress, ...). */
export function houvastBijOnderwerp(onderwerp: string): Houvast[] {
  return HOUVAST.filter((h) => h.onderwerp === onderwerp);
}

/** Alle onderwerpen, de gekozen voorkeuren voorop; de volgorde daarbinnen blijft die van de lijst. */
export function houvastVoorVoorkeuren(voorkeuren: string[]): Houvast[] {
  const gekozen = (h: Houvast) => Number(voorkeuren.includes(h.onderwerp));
  return [...HOUVAST].sort((a, b) => gekozen(b) - gekozen(a));
}

/** Het onderwerp waar een online gids bij hoort, zodat een gids in de app op zijn onderwerp opent. */
export function houvastVoorGids(gidsSlug: string): Houvast | undefined {
  return HOUVAST.find((h) => h.gids?.slug === gidsSlug);
}

// Artikelen (psychipedia) die onder een andere naam een onderwerp zijn.
const ONDERWERP_PER_ARTIKEL: Record<string, string> = {
  "bewegen-en-mentale-gezondheid": "bewegen",
  assertiviteit: "nee-zeggen",
};

/** Het onderwerp waar een artikel uit de psychipedia bij hoort. */
export function houvastVoorArtikel(artikelSlug: string): Houvast | undefined {
  return houvastVoor(ONDERWERP_PER_ARTIKEL[artikelSlug] ?? artikelSlug);
}
