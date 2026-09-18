// Het contrast van tekst op de vlakken van de app, bewaakt.
//
// Draaien:  npm test
//
// Elke combinatie haalt WCAG AA, op de bekende uitzonderingen na. Die lijst is
// een geheugensteun en geen vrijbrief: staat er iets in, dan ligt er een
// besluit bij wie over de tokens gaat. Is het opgelost, dan faalt de tweede
// test tot de regel hier weg is.

import assert from "node:assert/strict";
import { test } from "node:test";

import { contrast, METINGEN } from "./contrast.ts";

// 18 september 2026: de overline van 11 punten en het pijltje in merkblauw op
// de regentint (primary200) halen 4,01 op 1. Voorstel aan Stijn: op de
// regenkaart de gewone tekstkleur voor de overline (9,99), of de regentint een
// stap lichter. Tokens wijzigt alleen Stijn.
const BEKEND = new Set(["overline en pijltje op de weerkaart van Home, regen (brandDefault)"]);

test("de rekenregel klopt op de uitersten", () => {
  assert.equal(Math.round(contrast("rgb(0,0,0)", "rgb(255,255,255)")), 21);
  assert.equal(contrast("rgb(120,120,120)", "rgb(120,120,120)"), 1);
  assert.equal(contrast("#000000", "#ffffff"), contrast("#ffffff", "#000000"));
});

test("elke combinatie van tekst en vlak haalt de eis", () => {
  const zakt = METINGEN.filter((m) => m.eis > 0 && !m.haalt && !BEKEND.has(m.wat));
  assert.deepEqual(zakt.map((m) => m.wat + ": " + m.ratio), []);
});

test("de bekende uitzonderingen bestaan nog en zakken nog", () => {
  for (const wat of BEKEND) {
    const m = METINGEN.find((x) => x.wat === wat);
    assert.ok(m, "staat niet meer in de metingen: " + wat);
    assert.equal(m.haalt, false, "haalt de eis inmiddels, haal hem uit BEKEND: " + wat);
  }
});
