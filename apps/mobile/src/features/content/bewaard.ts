// Bewaarde tips: welke tips uit Houvast iemand heeft bewaard, alleen lokaal
// op het toestel (Stijn, 14 september 2026). Zie docs/datamodel.md, sectie
// "Bewaarde tips": nooit naar de server, want "dit account bewaarde een tip
// over angst" is een gegeven over mentale gezondheid aan een persoon
// gekoppeld. Verwijderen gaat mee met wisAlleLokaleData (account
// verwijderen) en met het wissen van de app.
//
// Een bewaarde tip is een verwijzing (onderwerp plus positie in de pager),
// geen kopie van de tekst: de tekst komt altijd uit data/houvast.ts.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { type Houvast, type HouvastTip } from "./data/houvast.ts";
import { houvastVoor } from "./houvast.ts";

const SLEUTEL = "mind.bewaardetips";

export type BewaardeTip = {
  /** Slug van het onderwerp in Houvast. */
  onderwerp: string;
  /** Positie in de pager: de tips op volgorde, de oefening als laatste. */
  tip: number;
};

export async function leesBewaard(): Promise<BewaardeTip[]> {
  try {
    const raw = await AsyncStorage.getItem(SLEUTEL);
    if (!raw) return [];
    const lijst = JSON.parse(raw) as unknown;
    return Array.isArray(lijst) ? lijst.filter(geldig) : [];
  } catch {
    return [];
  }
}

const geldig = (b: unknown): b is BewaardeTip =>
  typeof b === "object" && b !== null && typeof (b as BewaardeTip).onderwerp === "string" && typeof (b as BewaardeTip).tip === "number";

export function isBewaard(lijst: BewaardeTip[], onderwerp: string, tip: number): boolean {
  return lijst.some((b) => b.onderwerp === onderwerp && b.tip === tip);
}

/** Bewaart de tip, of haalt hem weer weg als hij al bewaard was. Geeft de nieuwe lijst terug. */
export async function wisselBewaard(onderwerp: string, tip: number): Promise<BewaardeTip[]> {
  const huidig = await leesBewaard();
  const nieuw = isBewaard(huidig, onderwerp, tip) ? huidig.filter((b) => !(b.onderwerp === onderwerp && b.tip === tip)) : [...huidig, { onderwerp, tip }];
  try {
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify(nieuw));
  } catch {
    // Niet kunnen bewaren mag de flow niet blokkeren.
  }
  return nieuw;
}

/** De tip in de pager op deze positie: een tip, of de oefening als laatste. */
export function tipOpPositie(houvast: Houvast, positie: number): HouvastTip | undefined {
  if (positie < houvast.tips.length) return houvast.tips[positie];
  return positie === houvast.tips.length ? houvast.oefening : undefined;
}

export type BewaardeTipMetInhoud = BewaardeTip & { houvast: Houvast; inhoud: HouvastTip; isOefening: boolean };

/** De bewaarde tips met hun onderwerp en tekst erbij; verwijzingen die niet meer bestaan vallen weg. */
export function metInhoud(lijst: BewaardeTip[]): BewaardeTipMetInhoud[] {
  const uit: BewaardeTipMetInhoud[] = [];
  for (const b of lijst) {
    const houvast = houvastVoor(b.onderwerp);
    const inhoud = houvast ? tipOpPositie(houvast, b.tip) : undefined;
    if (houvast && inhoud) uit.push({ ...b, houvast, inhoud, isOefening: b.tip === houvast.tips.length });
  }
  return uit;
}
