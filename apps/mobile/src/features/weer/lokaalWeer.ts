// Het persoonlijke weerbeeld blijft op het toestel en wordt aan het eind van
// de dag gewist: er is geen historie (toegezegd aan Paul, docs/datamodel.md).
//
// Praktisch: we bewaren precies een record met de datum erbij. Elke lezing
// controleert de datum; is die niet vandaag, dan wordt het record verwijderd
// en bestaat er dus nooit een weerbeeld van gisteren.

import AsyncStorage from "@react-native-async-storage/async-storage";

import type { WeatherCode } from "@mind/types";

const SLEUTEL = "mind.lokaalweer";

type Opgeslagen = { datum: string; weerbeeld: WeatherCode; gedeeld: boolean };

export function vandaagISO(): string {
  const nu = new Date();
  return [
    nu.getFullYear(),
    String(nu.getMonth() + 1).padStart(2, "0"),
    String(nu.getDate()).padStart(2, "0"),
  ].join("-");
}

export async function leesWeerVanVandaag(): Promise<Opgeslagen | null> {
  try {
    const raw = await AsyncStorage.getItem(SLEUTEL);
    if (!raw) return null;
    const data = JSON.parse(raw) as Opgeslagen;
    if (data.datum !== vandaagISO()) {
      await AsyncStorage.removeItem(SLEUTEL);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export async function bewaarWeerVanVandaag(weerbeeld: WeatherCode, gedeeld: boolean): Promise<void> {
  try {
    const data: Opgeslagen = { datum: vandaagISO(), weerbeeld, gedeeld };
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
