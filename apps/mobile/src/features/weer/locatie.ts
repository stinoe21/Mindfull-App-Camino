// Van locatie naar provincie, op het toestel.
//
// Sinds 13 september 2026 (Stijn) mag de app, met toestemming van het
// systeem, de locatie gebruiken om de provincie te bepalen, zodat niemand
// die zelf hoeft te kiezen. Wat er gebeurt en wat niet:
//
// - De locatie wordt grof opgevraagd (de laagste nauwkeurigheid; op iOS is
//   "bij benadering" genoeg) en alleen op het moment dat we hem nodig hebben.
// - De coördinaten gaan nergens heen: geen server, geen geocoder van Apple
//   of Google. De provincie wordt hier berekend met de CBS-grenzen in
//   data/provincieGrenzen.ts (punt-in-veelhoek).
// - We bewaren alleen de provinciecode in de lokale instellingen, nooit de
//   coördinaten, en de provincie gaat mee bij het optellen van een check-in
//   zoals een zelf gekozen provincie dat ook deed (docs/datamodel.md).
// - Buiten Nederland levert het niets op: dan telt de check-in als "onbekend".

import * as Location from "expo-location";

import { PROVINCIE_GRENZEN } from "./data/provincieGrenzen.ts";
import type { ProvincieCode } from "./provincies.ts";

// Even-oneven regel: het aantal keren dat een straal naar rechts een rand kruist.
function inRing(lon: number, lat: number, ring: [number, number][]): boolean {
  let binnen = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const kruist = yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi;
    if (kruist) binnen = !binnen;
  }
  return binnen;
}

/** De provincie waar een coördinaat in valt, of null buiten Nederland. */
export function provincieBijCoordinaat(lat: number, lon: number): ProvincieCode | null {
  for (const p of PROVINCIE_GRENZEN) {
    const [minLon, minLat, maxLon, maxLat] = p.vak;
    if (lon < minLon || lon > maxLon || lat < minLat || lat > maxLat) continue;
    if (p.ringen.some((ring) => inRing(lon, lat, ring))) return p.code;
  }
  return null;
}

export type LocatieUitkomst =
  | { status: "ok"; provincie: ProvincieCode }
  | { status: "geweigerd" }
  | { status: "buiten-nederland" }
  | { status: "mislukt" };

/**
 * Vraagt (eenmalig) toestemming, haalt een grove locatie op en vertaalt die
 * naar een provincie. Duurt hooguit een paar seconden; daarna geven we op.
 */
export async function bepaalProvincieViaLocatie(): Promise<LocatieUitkomst> {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return { status: "geweigerd" };
    const positie = await Promise.race([
      Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest }),
      new Promise<null>((los) => setTimeout(() => los(null), 8000)),
    ]);
    if (!positie) return { status: "mislukt" };
    const provincie = provincieBijCoordinaat(positie.coords.latitude, positie.coords.longitude);
    return provincie ? { status: "ok", provincie } : { status: "buiten-nederland" };
  } catch {
    return { status: "mislukt" };
  }
}
