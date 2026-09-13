// Genereert apps/mobile/src/features/weer/data/provincieGrenzen.ts: de
// provinciegrenzen in lengte- en breedtegraad, zodat de app op het toestel
// zelf kan bepalen in welke provincie een locatie valt. Er gaat geen
// coördinaat naar een server of een geocoder van Apple of Google; alleen de
// provincie gaat mee bij het optellen van een check-in (Stijn, 13 september
// 2026: met toestemming mag de app de locatie weten en de provincie loggen).
//
// Bron: de gegeneraliseerde provinciegrenzen van het CBS via
// cartomap.github.io/nl (CC BY 4.0, bron CBS/Kadaster), dezelfde bron als de
// kaart in packages/ui/components/KaartNederland.tsx. Dit script haalt het
// GeoJSON op bij het draaien en vereenvoudigt de ringen licht (Douglas-Peucker,
// 0.002 graden, ongeveer 150 meter), ruim genoeg voor een provinciegrens.
//
// Draaien: node scripts/gen-provincies.mjs

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOEL = join(ROOT, "apps/mobile/src/features/weer/data/provincieGrenzen.ts");
const BRON = "https://cartomap.github.io/nl/wgs84/provincie_2023.geojson";
const EPS = 0.002;

const CODE_PER_NAAM = {
  Groningen: "groningen",
  "Fryslân": "friesland",
  Drenthe: "drenthe",
  Overijssel: "overijssel",
  Flevoland: "flevoland",
  Gelderland: "gelderland",
  Utrecht: "utrecht",
  "Noord-Holland": "noord-holland",
  "Zuid-Holland": "zuid-holland",
  Zeeland: "zeeland",
  "Noord-Brabant": "noord-brabant",
  Limburg: "limburg",
};

function afstandTotLijn(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

function vereenvoudig(punten, eps) {
  if (punten.length <= 2) return punten;
  let maxAfstand = 0;
  let index = 0;
  for (let i = 1; i < punten.length - 1; i++) {
    const d = afstandTotLijn(punten[i], punten[0], punten[punten.length - 1]);
    if (d > maxAfstand) {
      maxAfstand = d;
      index = i;
    }
  }
  if (maxAfstand <= eps) return [punten[0], punten[punten.length - 1]];
  return [...vereenvoudig(punten.slice(0, index + 1), eps).slice(0, -1), ...vereenvoudig(punten.slice(index), eps)];
}

const antwoord = await fetch(BRON);
if (!antwoord.ok) throw new Error(`ophalen mislukt: ${antwoord.status}`);
const geo = await antwoord.json();

const provincies = geo.features.map((f) => {
  const code = CODE_PER_NAAM[f.properties.statnaam];
  if (!code) throw new Error("onbekende provincie: " + f.properties.statnaam);
  const polygonen = f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : [f.geometry.coordinates];
  // Alleen de buitenring van elk deel; gaten (er zijn er geen) laten we weg.
  const ringen = polygonen
    .map((poly) => vereenvoudig(poly[0].map(([lon, lat]) => [Number(lon.toFixed(4)), Number(lat.toFixed(4))]), EPS))
    .filter((ring) => ring.length >= 4);
  const lons = ringen.flat().map((p) => p[0]);
  const lats = ringen.flat().map((p) => p[1]);
  return {
    code,
    vak: [Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)].map((n) => Number(n.toFixed(4))),
    ringen,
  };
});

const kop = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: gegeneraliseerde provinciegrenzen van het CBS via cartomap.github.io/nl
// (CC BY 4.0, bron CBS/Kadaster). Opnieuw genereren: node scripts/gen-provincies.mjs
//
// Lengte- en breedtegraad (WGS84), per provincie een of meer buitenringen en
// een omhullend vak voor een snelle eerste toets. Gebruikt door
// features/weer/locatie.ts om op het toestel te bepalen in welke provincie
// een locatie valt; de coördinaten zelf verlaten het toestel nooit.

import type { ProvincieCode } from "@mind/ui/components/KaartNederland";

export type ProvincieGrens = {
  code: ProvincieCode;
  /** [minLon, minLat, maxLon, maxLat] */
  vak: [number, number, number, number];
  /** Buitenringen als [lon, lat]-paren; de laatste sluit op de eerste aan. */
  ringen: [number, number][][];
};

export const PROVINCIE_GRENZEN: ProvincieGrens[] = `;

writeFileSync(DOEL, kop + JSON.stringify(provincies) + ";\n");
for (const p of provincies) console.log(`${p.code}: ${p.ringen.length} ringen, ${p.ringen.reduce((n, r) => n + r.length, 0)} punten`);
