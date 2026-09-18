// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { isTeOud, leesVersie } from "./versie.ts";

test("een versie van drie getallen wordt gelezen, de rest niet", () => {
  assert.deepEqual(leesVersie("1.2.3"), [1, 2, 3]);
  assert.deepEqual(leesVersie(" 0.1.0 "), [0, 1, 0]);
  assert.equal(leesVersie("1.2"), null);
  assert.equal(leesVersie("v1.2.3"), null);
  assert.equal(leesVersie(""), null);
  assert.equal(leesVersie(undefined), null);
});

test("ouder dan het minimum is te oud, gelijk of nieuwer niet", () => {
  assert.equal(isTeOud("1.2.3", "1.2.4"), true);
  assert.equal(isTeOud("1.2.3", "1.3.0"), true);
  assert.equal(isTeOud("1.9.9", "2.0.0"), true);
  assert.equal(isTeOud("1.2.3", "1.2.3"), false);
  assert.equal(isTeOud("1.2.4", "1.2.3"), false);
  assert.equal(isTeOud("2.0.0", "1.9.9"), false);
});

test("getallen worden als getal vergeleken, niet als tekst", () => {
  assert.equal(isTeOud("1.10.0", "1.9.0"), false);
  assert.equal(isTeOud("1.9.0", "1.10.0"), true);
});

test("bij een onleesbare versie blokkeert de app nooit", () => {
  assert.equal(isTeOud(undefined, "1.0.0"), false);
  assert.equal(isTeOud("1.0.0", null), false);
  assert.equal(isTeOud("1.0", "9.9.9"), false);
  assert.equal(isTeOud("0.1.0", "0.0.0"), false);
});
