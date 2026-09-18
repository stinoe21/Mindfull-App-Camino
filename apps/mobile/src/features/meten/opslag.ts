// Waar de tellers staan: één record in de lokale opslag, onder "mind.", zodat
// uitloggen en account verwijderen het vanzelf meenemen
// (features/profiel/instellingen.ts). Er staat geen tijdstip en geen volgorde
// in, alleen aantallen per dag. Zie docs/datamodel.md, "Gebruikstotalen".
//
// Bewust geen import uit features/profiel: instellingen.ts roept wisTellers()
// aan, en andersom zou een kringverwijzing geven.

import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Geopend, Tellers } from "./tellers.ts";

const SLEUTEL = "mind.meten";

export type Stand = {
  tellers: Tellers;
  geopend: Geopend;
  /** De dag waarop voor het laatst een batch is verstuurd of geweigerd als "al ingestuurd". */
  verzondenOp: string | null;
};

const leeg = (): Stand => ({ tellers: {}, geopend: { dag: null, week: null, maand: null }, verzondenOp: null });

let stand: Stand | null = null;
let laden: Promise<Stand> | null = null;
let wachtend: ReturnType<typeof setTimeout> | null = null;

/** De stand in het geheugen; de eerste keer uit de opslag. */
export function leesStand(): Promise<Stand> {
  if (stand) return Promise.resolve(stand);
  laden ??= AsyncStorage.getItem(SLEUTEL)
    .then((raw) => ({ ...leeg(), ...(raw ? (JSON.parse(raw) as Partial<Stand>) : {}) }))
    .catch(leeg)
    .then((gelezen) => {
      stand ??= gelezen;
      return stand;
    });
  return laden;
}

/** Schrijft de stand weg. Niet kunnen bewaren mag niets blokkeren. */
export async function bewaarNu(): Promise<void> {
  if (wachtend) clearTimeout(wachtend);
  wachtend = null;
  if (!stand) return;
  try {
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify(stand));
  } catch {
    // stil
  }
}

/** Schrijft even later weg, zodat tien metingen achter elkaar één keer schrijven is. */
export function bewaarStraks(): void {
  if (wachtend) return;
  wachtend = setTimeout(() => void bewaarNu(), 1000);
}

/** Alles weg, ook uit het geheugen: bij uitloggen, account verwijderen en meten uitzetten. */
export async function wisTellers(): Promise<void> {
  if (wachtend) clearTimeout(wachtend);
  wachtend = null;
  stand = leeg();
  laden = null;
  try {
    await AsyncStorage.removeItem(SLEUTEL);
  } catch {
    // stil
  }
}
