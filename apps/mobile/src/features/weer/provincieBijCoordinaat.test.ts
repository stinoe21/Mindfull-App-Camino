// De provincie bij een coördinaat. De plaatsen hieronder zijn provinciehoofd-
// steden en een paar randgevallen: eilanden, en plekken net buiten Nederland.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { inRing, provincieBijCoordinaat } from "./provincieBijCoordinaat.ts";
import { PROVINCIE_NAMEN } from "./provincies.ts";

test("elke provinciehoofdstad valt in de eigen provincie", () => {
  const steden: [string, number, number, string][] = [
    ["Groningen", 53.22, 6.57, "groningen"],
    ["Leeuwarden", 53.2, 5.8, "friesland"],
    ["Assen", 52.99, 6.56, "drenthe"],
    ["Zwolle", 52.51, 6.09, "overijssel"],
    ["Lelystad", 52.52, 5.47, "flevoland"],
    ["Arnhem", 51.98, 5.91, "gelderland"],
    ["Utrecht", 52.09, 5.12, "utrecht"],
    ["Haarlem", 52.38, 4.64, "noord-holland"],
    ["Den Haag", 52.08, 4.31, "zuid-holland"],
    ["Middelburg", 51.5, 3.61, "zeeland"],
    ["Den Bosch", 51.69, 5.3, "noord-brabant"],
    ["Maastricht", 50.85, 5.69, "limburg"],
  ];
  assert.equal(steden.length, Object.keys(PROVINCIE_NAMEN).length);
  for (const [naam, lat, lon, code] of steden) {
    assert.equal(provincieBijCoordinaat(lat, lon), code, naam);
  }
});

test("de Waddeneilanden horen bij hun provincie", () => {
  assert.equal(provincieBijCoordinaat(53.05, 4.8), "noord-holland", "Texel");
  assert.equal(provincieBijCoordinaat(53.48, 6.16), "friesland", "Schiermonnikoog");
});

test("buiten Nederland is er geen provincie", () => {
  assert.equal(provincieBijCoordinaat(50.85, 4.35), null, "Brussel");
  assert.equal(provincieBijCoordinaat(50.94, 6.96), null, "Keulen");
  assert.equal(provincieBijCoordinaat(53.5, 3.0), null, "Noordzee");
  assert.equal(provincieBijCoordinaat(0, 0), null);
});

test("de even-oneven regel op een vierkant", () => {
  const vierkant: [number, number][] = [[0, 0], [10, 0], [10, 10], [0, 10]];
  assert.equal(inRing(5, 5, vierkant), true);
  assert.equal(inRing(15, 5, vierkant), false);
  assert.equal(inRing(5, -1, vierkant), false);
});
