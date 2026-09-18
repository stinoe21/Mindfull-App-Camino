// Zoeken in gidsen, artikelen en challenges: lokaal, op woordstam en synoniem.
//
// Draaien:  npm test
//
// De tests leunen op de contentbibliotheek zoals die is gegenereerd. Ze vragen
// daarom alleen dingen die bij elke redelijke versie van de content waar
// blijven: dat "stress" de gids Stress bovenaan zet, niet hoeveel treffers er zijn.

import assert from "node:assert/strict";
import { test } from "node:test";

import { stam, zoek, zoektermen } from "./zoeken.ts";

test("een stam is klein geschreven, zonder leestekens en zonder uitgang", () => {
  assert.equal(stam("Zorgen"), "zorg");
  assert.equal(stam("eenzaamheid"), "eenzaam");
  // Grof met opzet: "stress" verliest zijn laatste s. De stam zit nog steeds in
  // het woord, en zoeken kijkt of een tekst de stam bevat.
  assert.equal(stam("Stress!"), "stres");
});

test("korte woorden houden hun vorm", () => {
  assert.equal(stam("moe"), "moe");
  assert.equal(stam("bang"), "bang");
});

test("stopwoorden tellen niet mee als zoekterm", () => {
  assert.deepEqual(zoektermen("de het een"), []);
});

test("een zoekvraag levert de eigen stam en de synoniemen", () => {
  const termen = zoektermen("Ik kan niet slapen");
  assert.ok(termen.includes("slap"));
  assert.ok(termen.includes("slaap"));
});

test("minder dan twee tekens, alleen stopwoorden of alleen leestekens geeft niets", () => {
  assert.deepEqual(zoek(""), []);
  assert.deepEqual(zoek(" a "), []);
  assert.deepEqual(zoek("de het een"), []);
  assert.deepEqual(zoek("(.*"), []);
});

test("een titel die precies de zoekterm is staat bovenaan", () => {
  assert.equal(zoek("stress")[0]?.titel, "Stress");
  assert.equal(zoek("piekeren")[0]?.titel, "Piekeren");
  assert.equal(zoek("eenzaam")[0]?.titel, "Eenzaamheid");
});

test("resultaten staan op score, hoogste eerst, en hebben een geldige soort", () => {
  const resultaten = zoek("stress");
  assert.ok(resultaten.length > 0);
  for (let i = 1; i < resultaten.length; i++) {
    assert.ok(resultaten[i - 1].score >= resultaten[i].score);
  }
  for (const r of resultaten) {
    assert.ok(["gids", "artikel", "challenge"].includes(r.soort));
    assert.ok(r.score > 0);
    assert.ok(r.slug.length > 0);
  }
});

test("hoofdletters en spaties eromheen maken niet uit", () => {
  assert.deepEqual(zoek("  STRESS "), zoek("stress"));
});
