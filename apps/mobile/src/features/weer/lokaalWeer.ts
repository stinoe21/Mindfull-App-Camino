// Het persoonlijke weerbeeld blijft op het toestel en wordt aan het eind van
// de dag gewist: er is geen historie (toegezegd aan Paul, docs/datamodel.md).
//
// Praktisch: we bewaren precies een record met de datum erbij. Elke lezing
// controleert de datum; is die niet vandaag, dan wordt het record verwijderd
// en bestaat er dus nooit een weerbeeld van gisteren.
//
// Sinds 15 september 2026 (besluit Stijn) mag iemand vaker per dag inchecken.
// Het record is dan de laatste check-in, met het tijdstip ervan ("ingecheckt
// om 08.15"), en onthoudt welk dagdeel al meetelde voor het landelijke beeld
// (1 = voor 12.00, 2 = vanaf 12.00, 0 = nog niet). Dat laatste komt uit het
// antwoord van de server en dient alleen om een zinloze aanroep over te
// slaan; het slot zelf zit op de server (docs/limieten-en-misbruik.md).
// Nog steeds een record, geen historie; het tijdstip verlaat het toestel niet.

import AsyncStorage from "@react-native-async-storage/async-storage";

import type { WeatherCode } from "@mind/types";

const SLEUTEL = "mind.lokaalweer";

export type Dagdeel = 0 | 1 | 2;

export type Opgeslagen = {
  datum: string;
  weerbeeld: WeatherCode;
  /** Tijdstip van de laatste check-in, "08:15". */
  tijd: string;
  /** Het hoogste dagdeel van vandaag waarin een check-in meetelde. */
  bijgedragen: Dagdeel;
};

export function vandaagISO(): string {
  const nu = new Date();
  return [
    nu.getFullYear(),
    String(nu.getMonth() + 1).padStart(2, "0"),
    String(nu.getDate()).padStart(2, "0"),
  ].join("-");
}

/** Het dagdeel op de klok van het toestel: 1 voor 12.00, anders 2. */
export function dagdeelNu(): 1 | 2 {
  return new Date().getHours() < 12 ? 1 : 2;
}

function tijdNu(): string {
  const nu = new Date();
  return String(nu.getHours()).padStart(2, "0") + ":" + String(nu.getMinutes()).padStart(2, "0");
}

/** "08:15" naar "08.15", zoals de tijd in de app geschreven wordt. */
export function toonTijd(tijd: string): string {
  return tijd.replace(":", ".");
}

export async function leesWeerVanVandaag(): Promise<Opgeslagen | null> {
  try {
    const raw = await AsyncStorage.getItem(SLEUTEL);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<Opgeslagen>;
    if (data.datum !== vandaagISO() || !data.weerbeeld) {
      await AsyncStorage.removeItem(SLEUTEL);
      return null;
    }
    // Een record van voor 15 september 2026 heeft nog geen tijd of dagdeel.
    return { datum: data.datum, weerbeeld: data.weerbeeld, tijd: data.tijd ?? "", bijgedragen: data.bijgedragen ?? 0 };
  } catch {
    return null;
  }
}

/**
 * Bewaart de laatste check-in. bijgedragen is het dagdeel dat deze check-in
 * meetelde volgens de server, of 0 als hij niet meetelde; het hoogste dagdeel
 * van vandaag blijft staan, zodat een latere poging in hetzelfde dagdeel
 * weet dat ze niets toevoegt.
 */
export async function bewaarWeerVanVandaag(weerbeeld: WeatherCode, bijgedragen: Dagdeel): Promise<void> {
  try {
    const vorige = await leesWeerVanVandaag();
    const hoogste = Math.max(bijgedragen, vorige?.bijgedragen ?? 0) as Dagdeel;
    const data: Opgeslagen = { datum: vandaagISO(), weerbeeld, tijd: tijdNu(), bijgedragen: hoogste };
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify(data));
  } catch {
    // Niet kunnen bewaren is geen reden om de flow te blokkeren.
  }
}

export async function wisLokaalWeer(): Promise<void> {
  try {
    await AsyncStorage.removeItem(SLEUTEL);
  } catch {
    // stil
  }
}
