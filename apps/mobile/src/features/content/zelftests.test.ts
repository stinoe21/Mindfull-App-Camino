// De score en de uitslag van een zelftest.
//
// Draaien:  npm test
//
// Twee soorten tests. De rekenregel zelf, op een kleine nagemaakte test. En
// een controle op de echte, gegenereerde tests van MIND: bij elke score die
// iemand kan halen hoort precies een uitslag. Een gat zou betekenen dat
// iemand na het invullen niets te zien krijgt.

import assert from "node:assert/strict";
import { test } from "node:test";

import { ZELFTESTS, type Zelftest } from "./data/zelftests.ts";
import { scoreVan, uitslagVoor, zelftestVoor } from "./zelftests.ts";

// Alleen de velden die de rekenregel leest.
function nagemaakt(scoring: "som" | "gemiddelde"): Zelftest {
  const opties = [0, 1, 2, 3].map((score) => ({ label: String(score), score }));
  return {
    scoring,
    vragen: [{ opties }, { opties }, { opties }],
    uitslagen: [
      { regels: [{ op: "<", waarde: 3 }] },
      { regels: [{ op: ">=", waarde: 3 }, { op: "<=", waarde: 6 }] },
      { regels: [{ op: ">", waarde: 6 }] },
    ],
  } as unknown as Zelftest;
}

test("som: de scores van de gekozen opties opgeteld", () => {
  assert.equal(scoreVan(nagemaakt("som"), [0, 1, 3]), 4);
  assert.equal(scoreVan(nagemaakt("som"), [3, 3, 3]), 9);
});

test("gemiddelde: gedeeld door het aantal beantwoorde vragen", () => {
  assert.equal(scoreVan(nagemaakt("gemiddelde"), [1, 2, 3]), 2);
  assert.equal(scoreVan(nagemaakt("gemiddelde"), [3, undefined, 1]), 2);
});

test("een onbeantwoorde vraag telt niet mee, en niets ingevuld is nul", () => {
  assert.equal(scoreVan(nagemaakt("som"), [2, undefined, 1]), 3);
  assert.equal(scoreVan(nagemaakt("som"), []), 0);
  assert.equal(scoreVan(nagemaakt("gemiddelde"), []), 0);
});

test("de uitslag is de eerste waarvan alle regels kloppen, ook op de grens", () => {
  const t = nagemaakt("som");
  assert.equal(uitslagVoor(t, 2), t.uitslagen[0]);
  assert.equal(uitslagVoor(t, 3), t.uitslagen[1]);
  assert.equal(uitslagVoor(t, 6), t.uitslagen[1]);
  assert.equal(uitslagVoor(t, 7), t.uitslagen[2]);
});

test("opzoeken op slug", () => {
  assert.equal(zelftestVoor("depressietest")?.slug, "depressietest");
  assert.equal(zelftestVoor("bestaat-niet"), undefined);
  assert.equal(zelftestVoor(undefined), undefined);
});

test("elke test van MIND: bij elke haalbare score hoort precies een uitslag", () => {
  assert.ok(ZELFTESTS.length > 0);
  for (const t of ZELFTESTS) {
    const laagste = t.vragen.reduce((som, v) => som + Math.min(...v.opties.map((o) => o.score)), 0);
    const hoogste = t.vragen.reduce((som, v) => som + Math.max(...v.opties.map((o) => o.score)), 0);
    for (let som = laagste; som <= hoogste; som++) {
      const score = t.scoring === "gemiddelde" ? som / t.vragen.length : som;
      const passend = t.uitslagen.filter((u) => uitslagVoor({ ...t, uitslagen: [u] }, score));
      assert.equal(passend.length, 1, t.slug + " bij score " + score);
    }
  }
});
