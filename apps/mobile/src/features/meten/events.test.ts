// Het trackingplan in de app hoort gelijk te lopen met usage_event in de
// database. Deze test leest de migraties en vergelijkt ze met EVENTS.
//
// Draaien:  npm test

import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";

import { EVENTS, schoonItem } from "./events.ts";

const MIGRATIES = new URL("../../../../../supabase/migrations/", import.meta.url);

// Een regel uit een insert in usage_event: ('code', 'soort', null of array[...]).
const REGEL = /\('([a-z][a-z0-9_]+)',\s*'(none|list|slug)',\s*(null|array\[([^\]]*)\])\)/g;

function eventsInDeDatabase(): Record<string, unknown> {
  const gevonden: Record<string, unknown> = {};
  for (const bestand of readdirSync(MIGRATIES).sort()) {
    const sql = readFileSync(new URL(bestand, MIGRATIES), "utf8");
    if (!sql.includes("public.usage_event")) continue;
    for (const [, code, soort, , lijst] of sql.matchAll(REGEL)) {
      gevonden[code] = soort === "list" ? (lijst ?? "").split(",").map((s) => s.trim().replace(/^'|'$/g, "")) : soort;
    }
  }
  return gevonden;
}

test("de lijst in de app is gelijk aan usage_event in de migraties", () => {
  assert.deepEqual(eventsInDeDatabase(), { ...EVENTS });
});

test("geen enkel event laat een weerbeeld als item toe", () => {
  for (const weer of ["zonnig", "wolken", "mist", "wind", "regen"]) {
    for (const [naam, soort] of Object.entries(EVENTS)) {
      if (Array.isArray(soort)) assert.ok(!soort.includes(weer), naam + " laat " + weer + " toe");
    }
  }
  assert.equal(schoonItem("checkin_completed", "regen"), null);
});

test("een item dat niet bij het event past, wordt niet geteld", () => {
  assert.equal(schoonItem("checkin_started", undefined), "");
  assert.equal(schoonItem("app_opened_day", "ios"), "ios");
  assert.equal(schoonItem("app_opened_day", "windows"), null);
  assert.equal(schoonItem("app_opened_day", undefined), null);
  assert.equal(schoonItem("bestaat_niet", undefined), null);
});

test("een slug gaat naar kleine letters, vrije tekst komt er niet in", () => {
  assert.equal(schoonItem("topic_opened", "Piekeren"), "piekeren");
  assert.equal(schoonItem("screen_viewed", "/(app)/naslagwerk/houvast/[onderwerp]"), "/(app)/naslagwerk/houvast/[onderwerp]");
  assert.equal(schoonItem("external_link_opened", "wijzijnmind.nl"), "wijzijnmind.nl");
  assert.equal(schoonItem("topic_opened", "ik voel me slecht"), null);
  assert.equal(schoonItem("topic_opened", ""), null);
  assert.equal(schoonItem("topic_opened", "a".repeat(81)), null);
});
