// Challenge-voortgang, alleen voor deze sessie en alleen in het geheugen.
//
// Bewust GEEN opslag: waar de voortgang woont (lokaal of server) is onderdeel
// van het funnel-voorstel in docs/datamodel.md en dat is nog niet besloten.
// Tot die tijd bouwen we de schermen en de weekstructuur, niet de data
// (docs/taakverdeling.md, onderdeel 4). Zodra het besluit er is, vervangt een
// echte store dit bestand.

const afgerond = new Map<string, Set<number>>();

export function isAfgerond(challenge: string, dag: number): boolean {
  return afgerond.get(challenge)?.has(dag) ?? false;
}

export function markeerAfgerond(challenge: string, dag: number): void {
  if (!afgerond.has(challenge)) afgerond.set(challenge, new Set());
  afgerond.get(challenge)?.add(dag);
}

export function aantalAfgerond(challenge: string): number {
  return afgerond.get(challenge)?.size ?? 0;
}
