// De tips van MIND: wat de app aanneemt en waar ze komen te staan.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { MIND_VANAF, mindTipsVoor, positieVan, schoonAntwoord, zetMindTips } from "./mindTipsVorm.ts";

const ID = "0b6f3c1e-9a2d-4f7b-8c11-2e5d7a9b4c33";
const goed = (extra: Record<string, unknown> = {}) => ({
  id: ID,
  topic: "piekeren",
  title: "Het piekerkwartier",
  body: [{ tekst: "Kies een kwartier." }, { lijst: ["Schrijf op", "Klap dicht"] }, { linkLabel: "Lees meer", linkUrl: "https://wijzijnmind.nl/psychipedia/piekeren" }],
  ...extra,
});

test("een tip in de afgesproken vorm komt erdoor, als kop met blokken", () => {
  const [tip] = schoonAntwoord({ version: "x", tips: [goed()] });
  assert.equal(tip.topic, "piekeren");
  assert.equal(tip.tip.kop, "Het piekerkwartier");
  assert.equal(tip.tip.blokken.length, 3);
});

test("wat niet in de vorm past valt weg, in plaats van half getekend te worden", () => {
  const fout = [
    goed({ body: [{ tekst: "ok" }, { html: "<b>x</b>" }] }),
    goed({ body: [{ linkLabel: "x", linkUrl: "http://onveilig.nl" }] }),
    goed({ body: [{ linkLabel: "x", linkUrl: "javascript:alert(1)" }] }),
    goed({ body: [] }),
    goed({ body: [{ tekst: "a".repeat(1501) }] }),
    goed({ topic: "Geen Slug!" }),
    goed({ id: "geen-uuid" }),
    goed({ title: "" }),
    "geen object",
  ];
  assert.deepEqual(schoonAntwoord({ tips: fout }), []);
  assert.deepEqual(schoonAntwoord(null), []);
  assert.deepEqual(schoonAntwoord({ tips: "nee" }), []);
});

test("de positie is vast per tip en botst nooit met de tips uit de app", () => {
  assert.equal(positieVan(ID), positieVan(ID));
  assert.ok(positieVan(ID) >= MIND_VANAF);
  assert.notEqual(positieVan(ID), positieVan("1b6f3c1e-9a2d-4f7b-8c11-2e5d7a9b4c33"));
});

test("een onderwerp krijgt alleen zijn eigen tips", () => {
  zetMindTips(schoonAntwoord({ tips: [goed(), goed({ id: "1b6f3c1e-9a2d-4f7b-8c11-2e5d7a9b4c33", topic: "slaap", title: "Vaste tijden" })] }));
  assert.deepEqual(mindTipsVoor("piekeren").map((t) => t.tip.kop), ["Het piekerkwartier"]);
  assert.deepEqual(mindTipsVoor("stress"), []);
  zetMindTips([]);
});
