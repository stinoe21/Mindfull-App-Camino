// De vertaling van vier schuiven naar een weerbeeld, vastgelegd op de grenzen.
//
// Draaien:  npm test
//
// LET OP: de regels in weerbeeld.ts zijn VOORLOPIG (open punt in
// docs/datamodel.md). Deze tests zeggen dus niet wat goed is, ze leggen vast
// wat de app nu doet, zodat een wijziging aan de regels een bewuste is. Past
// MIND de regels aan, pas dan deze tests mee aan.

import assert from "node:assert/strict";
import { test } from "node:test";

import { bepaalWeerbeeld, type SliderWaarden } from "./weerbeeld.ts";

const alles = (waarde: number): SliderWaarden => ({ temperatuur: waarde, wind: waarde, zicht: waarde, wisselvallig: waarde });
const licht = alles(100);

test("alle schuiven op licht weer geeft zonnig", () => {
  assert.equal(bepaalWeerbeeld(licht), "zonnig");
});

test("een schuif helemaal op zwaar weer geeft het weerbeeld van die schuif", () => {
  assert.equal(bepaalWeerbeeld({ ...licht, zicht: 0 }), "mist");
  assert.equal(bepaalWeerbeeld({ ...licht, wind: 0 }), "wind");
  assert.equal(bepaalWeerbeeld({ ...licht, temperatuur: 0 }), "regen");
  assert.equal(bepaalWeerbeeld({ ...licht, wisselvallig: 0 }), "wolken");
});

test("een schuif wint van zonnig onder de 52, en niet op 52", () => {
  // Met de andere drie op 100: signaal 100 - x tegenover zonnig 35 + x / 4.
  // Gelijk op x = 52, en bij gelijk blijft het zonnig.
  assert.equal(bepaalWeerbeeld({ ...licht, zicht: 52 }), "zonnig");
  assert.equal(bepaalWeerbeeld({ ...licht, zicht: 51 }), "mist");
  assert.equal(bepaalWeerbeeld({ ...licht, temperatuur: 52 }), "zonnig");
  assert.equal(bepaalWeerbeeld({ ...licht, temperatuur: 51 }), "regen");
});

test("alle schuiven gelijk: zonnig vanaf 70, daaronder mist", () => {
  // Alle vier op x: elk signaal 100 - x tegenover zonnig x - 40. Gelijk op 70.
  assert.equal(bepaalWeerbeeld(alles(70)), "zonnig");
  assert.equal(bepaalWeerbeeld(alles(69)), "mist");
  // Alles in het midden geeft dus mist: bij een gelijke stand wint de eerste
  // in de rij mist, wind, regen, wolken. Dat is een gevolg van de voorlopige
  // regels en geen besluit.
  assert.equal(bepaalWeerbeeld(alles(50)), "mist");
  assert.equal(bepaalWeerbeeld(alles(0)), "mist");
});

test("bij een gelijke stand tussen twee schuiven wint de vaste volgorde", () => {
  assert.equal(bepaalWeerbeeld({ ...licht, zicht: 20, wind: 20 }), "mist");
  assert.equal(bepaalWeerbeeld({ ...licht, wind: 20, temperatuur: 20 }), "wind");
  assert.equal(bepaalWeerbeeld({ ...licht, temperatuur: 20, wisselvallig: 20 }), "regen");
});

test("de laagste schuif bepaalt het weer", () => {
  assert.equal(bepaalWeerbeeld({ temperatuur: 40, wind: 30, zicht: 45, wisselvallig: 35 }), "wind");
  assert.equal(bepaalWeerbeeld({ temperatuur: 40, wind: 60, zicht: 45, wisselvallig: 10 }), "wolken");
});

test("elke stand van de schuiven geeft een van de vijf weerbeelden", () => {
  const geldig = new Set(["zonnig", "wolken", "mist", "wind", "regen"]);
  for (let t = 0; t <= 100; t += 25)
    for (let w = 0; w <= 100; w += 25)
      for (let z = 0; z <= 100; z += 25)
        for (let v = 0; v <= 100; v += 25) {
          assert.ok(geldig.has(bepaalWeerbeeld({ temperatuur: t, wind: w, zicht: z, wisselvallig: v })));
        }
});
