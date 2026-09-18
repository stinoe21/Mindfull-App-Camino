// De grens van 12.00 uur en de datumwissel, op de klok van het toestel.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { test } from "node:test";

import { dagdeelVan, datumISO, tijdVan } from "./dagdeel.ts";

// Maanden tellen in Date vanaf 0: 8 is september.
const op = (uur: number, minuut: number, dag = 18) => new Date(2026, 8, dag, uur, minuut);

test("voor 12.00 uur is dagdeel 1, vanaf 12.00 uur dagdeel 2", () => {
  assert.equal(dagdeelVan(op(0, 0)), 1);
  assert.equal(dagdeelVan(op(11, 59)), 1);
  assert.equal(dagdeelVan(op(12, 0)), 2);
  assert.equal(dagdeelVan(op(23, 59)), 2);
});

test("de datum is lokaal en met voorloopnullen", () => {
  assert.equal(datumISO(op(8, 15)), "2026-09-18");
  assert.equal(datumISO(new Date(2026, 0, 5, 8, 15)), "2026-01-05");
});

test("om middernacht wisselt de datum, zodat het weer van gisteren vervalt", () => {
  assert.equal(datumISO(op(23, 59, 18)), "2026-09-18");
  assert.equal(datumISO(op(0, 0, 19)), "2026-09-19");
  assert.notEqual(datumISO(op(23, 59, 18)), datumISO(op(0, 0, 19)));
});

test("het tijdstip heeft altijd twee cijfers voor uur en minuut", () => {
  assert.equal(tijdVan(op(8, 5)), "08:05");
  assert.equal(tijdVan(op(14, 30)), "14:30");
  assert.equal(tijdVan(op(0, 0)), "00:00");
});
