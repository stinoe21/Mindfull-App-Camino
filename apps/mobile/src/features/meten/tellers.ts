// De tellers op het toestel, en wat daarvan in een batch mag.
//
// Puur, met de dag als argument, zodat het te testen is (npm test). Er staat
// hier geen tijdstip en geen volgorde: alleen per dag, event en item hoe vaak.
// Zie docs/datamodel.md, sectie "Gebruikstotalen".

import { datumISO } from "../weer/dagdeel.ts";

/** Sleutel "2026-09-18|topic_opened|piekeren", waarde het aantal. */
export type Tellers = Record<string, number>;

/** Eén regel in de batch, in de vorm die log_usage() verwacht. */
export type Regel = { d: string; e: string; i: string; n: number };

// Gelijk aan de grenzen in log_usage(): zeven afgesloten dagen, 200 per
// sleutel, 400 regels per batch.
export const MAX_DAGEN = 7;
export const MAX_PER_SLEUTEL = 200;
export const MAX_REGELS = 400;

const SCHEIDING = "|";

export function telOp(tellers: Tellers, dag: string, event: string, item: string): void {
  const sleutel = [dag, event, item].join(SCHEIDING);
  tellers[sleutel] = Math.min((tellers[sleutel] ?? 0) + 1, MAX_PER_SLEUTEL);
}

/** De dag een aantal dagen eerder, als "2026-09-11". */
export function dagenTerug(dag: string, aantal: number): string {
  const [jaar, maand, d] = dag.split("-").map(Number);
  return datumISO(new Date(jaar, maand - 1, d - aantal));
}

/**
 * Verdeelt de tellers in wat nu verstuurd mag worden en wat blijft staan.
 * Verstuurd worden alleen afgesloten dagen, hooguit zeven dagen terug. Wat
 * ouder is vervalt: de server zou het toch weigeren. Vandaag blijft staan.
 */
export function splits(tellers: Tellers, vandaag: string): { batch: Regel[]; rest: Tellers } {
  const oudste = dagenTerug(vandaag, MAX_DAGEN);
  const rest: Tellers = {};
  const kandidaten: Regel[] = [];
  for (const [sleutel, n] of Object.entries(tellers)) {
    const [d, e, ...deelItem] = sleutel.split(SCHEIDING);
    if (d === vandaag) rest[sleutel] = n;
    else if (d < vandaag && d >= oudste && n >= 1) kandidaten.push({ d, e, i: deelItem.join(SCHEIDING), n });
    // Een dag in de toekomst (de klok is teruggezet) of ouder dan zeven dagen: weg.
  }
  // Past het niet in een batch, dan gaat de oudste dag voor en wacht de rest.
  kandidaten.sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));
  const batch = kandidaten.slice(0, MAX_REGELS);
  for (const r of kandidaten.slice(MAX_REGELS)) rest[[r.d, r.e, r.i].join(SCHEIDING)] = r.n;
  return { batch, rest };
}

/** Haalt de verstuurde regels uit de tellers; wat intussen is bijgeteld blijft. */
export function zonderBatch(tellers: Tellers, batch: Regel[]): Tellers {
  const over: Tellers = { ...tellers };
  for (const r of batch) delete over[[r.d, r.e, r.i].join(SCHEIDING)];
  return over;
}

/** De ISO-week als "2026-W38". Een week begint op maandag. */
export function weekISO(moment: Date): string {
  const d = new Date(Date.UTC(moment.getFullYear(), moment.getMonth(), moment.getDate()));
  const weekdag = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - weekdag);
  const begin = Date.UTC(d.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - begin) / 86400000 + 1) / 7);
  return d.getUTCFullYear() + "-W" + String(week).padStart(2, "0");
}

/** Wanneer de app voor het laatst als "geopend" is geteld, per dag, week en maand. */
export type Geopend = { dag: string | null; week: string | null; maand: string | null };

/**
 * Actieve gebruikers zonder id: het toestel telt één keer per dag, per week
 * en per maand dat de app geopend is. Geeft terug welke van de drie nu
 * meetellen, en de nieuwe stand.
 */
export function eersteKeer(geopend: Geopend, moment: Date): { dag: boolean; week: boolean; maand: boolean; nieuw: Geopend } {
  const dag = datumISO(moment);
  const week = weekISO(moment);
  const maand = dag.slice(0, 7);
  return {
    dag: geopend.dag !== dag,
    week: geopend.week !== week,
    maand: geopend.maand !== maand,
    nieuw: { dag, week, maand },
  };
}

/**
 * Het routepatroon van expo-router, "/(app)/naslagwerk/houvast/[onderwerp]",
 * en nooit het pad met de waarde erin. null voor routes die niet meetellen:
 * het ontwikkelscherm en de 404.
 */
export function routePatroon(segmenten: readonly string[]): string | null {
  if (segmenten.some((s) => s.startsWith("_") || s.startsWith("+"))) return null;
  return "/" + segmenten.join("/");
}
