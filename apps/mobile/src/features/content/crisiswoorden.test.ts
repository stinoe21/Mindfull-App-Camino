// Welke zoekvragen de weg naar hulp bovenaan zetten.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { isCrisisZoekopdracht } from "./crisiswoorden.ts";

test("woorden over zelfdoding, in elke schrijfwijze", () => {
  for (const vraag of ["zelfmoord", "Zelfmoordgedachten", "suïcide", "suicide", "suïcidaal", "zelfdoding", "113", "ik wil dood", "doodwens"]) {
    assert.equal(isCrisisZoekopdracht(vraag), true, vraag);
  }
});

test("zinnen in gewone woorden", () => {
  for (const vraag of ["ik wil niet meer leven", "Ik wil niet meer.", "een einde aan mijn leven maken", "ik zou er liever niet meer zijn", "ik ben beter dood"]) {
    assert.equal(isCrisisZoekopdracht(vraag), true, vraag);
  }
});

test("zelfbeschadiging", () => {
  for (const vraag of ["zelfbeschadiging", "automutilatie", "mezelf pijn doen", "snijden"]) {
    assert.equal(isCrisisZoekopdracht(vraag), true, vraag);
  }
});

test("dood als los woord telt, ook als iemand op rouw zoekt", () => {
  assert.equal(isCrisisZoekopdracht("de dood van mijn moeder"), true);
});

test("gewone zoekvragen niet", () => {
  for (const vraag of ["stress", "slapen", "doodmoe", "ik ben moe", "eenzaam", "rouw", "leven", "", "  ", "11", "1130"]) {
    assert.equal(isCrisisZoekopdracht(vraag), false, JSON.stringify(vraag));
  }
});
