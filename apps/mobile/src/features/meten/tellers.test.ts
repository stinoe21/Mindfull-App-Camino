// De tellers op het toestel: wat mag er in een batch, en wat blijft staan.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { MAX_PER_SLEUTEL, MAX_REGELS, dagenTerug, eersteKeer, routePatroon, splits, telOp, weekISO, zonderBatch, type Tellers } from "./tellers.ts";

test("optellen gaat per dag, event en item, met een plafond", () => {
  const t: Tellers = {};
  telOp(t, "2026-09-18", "topic_opened", "piekeren");
  telOp(t, "2026-09-18", "topic_opened", "piekeren");
  telOp(t, "2026-09-18", "checkin_started", "");
  assert.deepEqual(t, { "2026-09-18|topic_opened|piekeren": 2, "2026-09-18|checkin_started|": 1 });
  // deepEqual vernauwt het type van t, dus het plafond krijgt een eigen record.
  const veel: Tellers = {};
  for (let i = 0; i < 500; i++) telOp(veel, "2026-09-18", "screen_viewed", "/(app)/dashboard");
  assert.equal(veel["2026-09-18|screen_viewed|/(app)/dashboard"], MAX_PER_SLEUTEL);
});

test("dagen terug rekent over een maandgrens heen", () => {
  assert.equal(dagenTerug("2026-09-18", 7), "2026-09-11");
  assert.equal(dagenTerug("2026-10-03", 7), "2026-09-26");
  assert.equal(dagenTerug("2027-01-02", 7), "2026-12-26");
});

test("alleen afgesloten dagen gaan mee, vandaag blijft staan", () => {
  const { batch, rest } = splits(
    {
      "2026-09-18|topic_opened|piekeren": 3,
      "2026-09-17|topic_opened|piekeren": 2,
      "2026-09-11|checkin_started|": 1,
    },
    "2026-09-18",
  );
  assert.deepEqual(batch, [
    { d: "2026-09-11", e: "checkin_started", i: "", n: 1 },
    { d: "2026-09-17", e: "topic_opened", i: "piekeren", n: 2 },
  ]);
  assert.deepEqual(rest, { "2026-09-18|topic_opened|piekeren": 3 });
});

test("wat ouder is dan zeven dagen of in de toekomst ligt, vervalt", () => {
  const { batch, rest } = splits({ "2026-09-10|checkin_started|": 4, "2026-09-25|checkin_started|": 1 }, "2026-09-18");
  assert.deepEqual(batch, []);
  assert.deepEqual(rest, {});
});

test("een routepatroon met een sluisteken in het item komt heel terug", () => {
  const { batch } = splits({ "2026-09-17|challenge_day_completed|aandacht-voor-angst/3": 1 }, "2026-09-18");
  assert.equal(batch[0].i, "aandacht-voor-angst/3");
});

test("past het niet in een batch, dan gaat de oudste dag voor en wacht de rest", () => {
  const t: Tellers = {};
  for (let i = 0; i < MAX_REGELS; i++) t["2026-09-16|topic_opened|onderwerp-" + i] = 1;
  t["2026-09-17|checkin_started|"] = 1;
  const { batch, rest } = splits(t, "2026-09-18");
  assert.equal(batch.length, MAX_REGELS);
  assert.ok(batch.every((r) => r.d === "2026-09-16"));
  assert.deepEqual(rest, { "2026-09-17|checkin_started|": 1 });
});

test("na het versturen blijft staan wat intussen is bijgeteld", () => {
  const t: Tellers = { "2026-09-17|topic_opened|piekeren": 2, "2026-09-18|topic_opened|piekeren": 1 };
  const { batch } = splits(t, "2026-09-18");
  assert.deepEqual(zonderBatch(t, batch), { "2026-09-18|topic_opened|piekeren": 1 });
});

test("de week begint op maandag en loopt over de jaargrens", () => {
  assert.equal(weekISO(new Date(2026, 8, 18)), "2026-W38");
  assert.equal(weekISO(new Date(2026, 8, 20)), "2026-W38"); // zondag
  assert.equal(weekISO(new Date(2026, 8, 21)), "2026-W39"); // maandag
  assert.equal(weekISO(new Date(2027, 0, 1)), "2026-W53");
});

test("geopend telt één keer per dag, per week en per maand", () => {
  const leeg = { dag: null, week: null, maand: null };
  const eerste = eersteKeer(leeg, new Date(2026, 8, 18, 9, 0));
  assert.deepEqual([eerste.dag, eerste.week, eerste.maand], [true, true, true]);
  const zelfdeDag = eersteKeer(eerste.nieuw, new Date(2026, 8, 18, 21, 0));
  assert.deepEqual([zelfdeDag.dag, zelfdeDag.week, zelfdeDag.maand], [false, false, false]);
  const dagLater = eersteKeer(eerste.nieuw, new Date(2026, 8, 19, 9, 0));
  assert.deepEqual([dagLater.dag, dagLater.week, dagLater.maand], [true, false, false]);
  const nieuweMaand = eersteKeer(eerste.nieuw, new Date(2026, 9, 1, 9, 0));
  assert.deepEqual([nieuweMaand.dag, nieuweMaand.week, nieuweMaand.maand], [true, true, true]);
});

test("een schermweergave is het routepatroon, nooit het pad met de waarde", () => {
  assert.equal(routePatroon(["(app)", "naslagwerk", "houvast", "[onderwerp]"]), "/(app)/naslagwerk/houvast/[onderwerp]");
  assert.equal(routePatroon([]), "/");
  assert.equal(routePatroon(["_dev", "kitchen-sink"]), null);
  assert.equal(routePatroon(["+not-found"]), null);
});
