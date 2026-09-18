// Van een coördinaat naar een provincie: punt-in-veelhoek op de CBS-grenzen.
//
// Dit bestand is met opzet puur: geen expo-location, geen React Native. Zo
// kan de testrunner van Node het laden (npm test) en staat de rekenregel los
// van het opvragen van de locatie in locatie.ts. De coördinaten komen hier
// alleen langs als argument en worden nergens bewaard.

import { PROVINCIE_GRENZEN } from "./data/provincieGrenzen.ts";
import type { ProvincieCode } from "./provincies.ts";

// Even-oneven regel: het aantal keren dat een straal naar rechts een rand kruist.
export function inRing(lon: number, lat: number, ring: [number, number][]): boolean {
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
