// Challenge-voortgang, alleen voor deze sessie en alleen in het geheugen.
//
// Bewust GEEN opslag: waar de voortgang woont (lokaal of server) is onderdeel
// van het funnel-voorstel in docs/datamodel.md en dat is nog niet besloten.
// Tot die tijd bouwen we de schermen en de weekstructuur, niet de data
// (docs/taakverdeling.md, onderdeel 4). Zodra het besluit er is, vervangt een
// echte store dit bestand.
//
// Tempo, sinds 10 september 2026 (feedbacksessie MIND): één dag per
// kalenderdag. MIND richtte de mailreeks bewust wekelijks in omdat sneller te
// snel ging, en wil dat stappen geleidelijk vrijkomen en dat iemand bewust
// bevestigt klaar te zijn voor de volgende. Eén per dag is de voorlopige
// keuze, zie docs/scope.md; het precieze tempo ligt nog bij MIND.

const afgerond = new Map<string, Set<number>>();
const laatsteDag = new Map<string, string>();

const vandaag = () => new Date().toDateString();

export function isAfgerond(challenge: string, dag: number): boolean {
  return afgerond.get(challenge)?.has(dag) ?? false;
}

export function markeerAfgerond(challenge: string, dag: number): void {
  if (!afgerond.has(challenge)) afgerond.set(challenge, new Set());
  afgerond.get(challenge)?.add(dag);
  laatsteDag.set(challenge, vandaag());
}

export function aantalAfgerond(challenge: string): number {
  return afgerond.get(challenge)?.size ?? 0;
}

/** Is er vandaag al een dag van deze challenge afgerond? Dan wacht de volgende tot morgen. */
export function vandaagAlAfgerond(challenge: string): boolean {
  return laatsteDag.get(challenge) === vandaag();
}
