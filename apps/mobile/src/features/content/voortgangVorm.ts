// De vorm van de bewaarde challenge-voortgang, los van AsyncStorage zodat hij
// zonder toestel te testen is. Zie voortgang.ts voor het waarom.
//
// In de opslag: { "<slug>": { "dagen": [1, 2], "laatste": "Thu Sep 17 2026" } }.
// `laatste` is de kalenderdag waarop voor het laatst een dag is afgerond; die
// bepaalt of de volgende dag tot morgen wacht. Geen tijdstippen, geen tekst.

export type ChallengeVoortgang = { dagen: Set<number>; laatste: string };
export type Voortgang = Map<string, ChallengeVoortgang>;

export function naarOpslag(voortgang: Voortgang): string {
  const uit: Record<string, { dagen: number[]; laatste: string }> = {};
  for (const [slug, v] of voortgang) {
    uit[slug] = { dagen: [...v.dagen].sort((a, b) => a - b), laatste: v.laatste };
  }
  return JSON.stringify(uit);
}

/** Leest wat er staat en gooit weg wat niet klopt; kapotte opslag is lege voortgang. */
export function uitOpslag(raw: string | null): Voortgang {
  const voortgang: Voortgang = new Map();
  if (!raw) return voortgang;
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return voortgang;
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) return voortgang;
  for (const [slug, waarde] of Object.entries(data)) {
    if (typeof waarde !== "object" || waarde === null) continue;
    const { dagen, laatste } = waarde as { dagen?: unknown; laatste?: unknown };
    if (!Array.isArray(dagen)) continue;
    const geldig = dagen.filter((d): d is number => Number.isInteger(d) && d >= 1);
    if (geldig.length === 0) continue;
    voortgang.set(slug, { dagen: new Set(geldig), laatste: typeof laatste === "string" ? laatste : "" });
  }
  return voortgang;
}
