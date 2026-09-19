// Het beheer (apps/admin) biedt MIND alleen onderwerpen aan die de app kent.
// Die lijst wordt gegenereerd; deze test faalt als dat vergeten is.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { ONDERWERPEN } from "../../../../admin/src/lib/onderwerpen.ts";
import { HOUVAST } from "./data/houvast.ts";

test("de onderwerpen in het beheer zijn die van de app", () => {
  const app = HOUVAST.map((h) => h.slug).sort();
  const beheer = ONDERWERPEN.map((o) => o.slug).sort();
  assert.deepEqual(beheer, app, "Draai: node scripts/gen-admin-onderwerpen.mjs");
});

test("elke slug past in de vorm die de database toelaat", () => {
  for (const o of ONDERWERPEN) assert.match(o.slug, /^[a-z0-9][a-z0-9-]{1,79}$/, o.slug);
});
