// Versies vergelijken, puur en getest (npm test). De app vergelijkt zijn
// eigen versie met de minimale versie van de server; zie appStatus.ts.

/** "1.2.3" naar [1, 2, 3]; null als het geen versie van drie getallen is. */
export function leesVersie(versie: string | null | undefined): [number, number, number] | null {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec((versie ?? "").trim());
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

/**
 * Is deze versie ouder dan het minimum? Bij twijfel nee: een onleesbare versie
 * aan een van beide kanten mag de app nooit blokkeren.
 */
export function isTeOud(huidig: string | null | undefined, minimum: string | null | undefined): boolean {
  const h = leesVersie(huidig);
  const m = leesVersie(minimum);
  if (!h || !m) return false;
  for (let i = 0; i < 3; i++) {
    if (h[i] !== m[i]) return h[i] < m[i];
  }
  return false;
}
