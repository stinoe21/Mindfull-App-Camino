// De invarianten van het design system.
//
// Draaien:  npm test
//
// Dit test geen component maar de tokens zelf, en met opzet alleen dingen die
// stil fout kunnen gaan. Een verkeerde kleur zie je meteen. Een typerol zonder
// lettertype zie je pas op een toestel, en dan staat de app er al.
//
// Alleen de testrunner van Node, geen dependency. Node leest TypeScript zelf.

import { existsSync } from "node:fs";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
import { test } from "node:test";

import { colors, fontFaces, palette, radius, space, type } from "./tokens.ts";

const here = dirname(fileURLToPath(import.meta.url));

// `accent-h2-italic` komt in geen enkel scherm voor en heeft in de export geen
// familie gekregen. Niet zelf ingevuld: wat niet is afgesproken vullen we niet
// in. Zie open punt 4 in packages/ui/README.md. Zodra iemand die rol gebruikt of
// weghaalt, kan deze uitzondering weg, hier en in generate.mjs.
const ZONDER_FAMILIE = new Set(["accentH2Italic"]);

test("elke typerol heeft een lettertype", () => {
  for (const [rol, stijl] of Object.entries(type)) {
    if (ZONDER_FAMILIE.has(rol)) continue;
    assert.ok(
      "fontFamily" in stijl && stijl.fontFamily,
      `Typerol ${rol} heeft geen fontFamily. In React Native erft een Text die niet ` +
        `van zijn ouder, dus dit levert stil het systeemfont op.`
    );
  }
});

test("elke typerol wijst naar een snit die bestaat", () => {
  const bekend = new Set<string>(fontFaces);
  for (const [rol, stijl] of Object.entries(type)) {
    if (ZONDER_FAMILIE.has(rol)) continue;
    const familie = (stijl as { fontFamily?: string }).fontFamily;
    assert.ok(bekend.has(familie!), `Typerol ${rol} wijst naar onbekende snit ${familie}.`);
  }
});

test("elke snit heeft een bestand in assets/fonts", () => {
  for (const snit of fontFaces) {
    const pad = join(here, "..", "assets", "fonts", `${snit}.ttf`);
    assert.ok(existsSync(pad), `${snit}.ttf ontbreekt. De app valt dan terug op het systeemfont.`);
  }
});

test("geen typerol draagt zelf een gewicht of schuinstand", () => {
  // De snit draagt die al. Zet je ze er alsnog bij, dan maakt Android er een
  // nagemaakte vetdruk bovenop en klopt het beeld niet meer met het ontwerp.
  for (const [rol, stijl] of Object.entries(type)) {
    assert.ok(!("fontWeight" in stijl), `Typerol ${rol} heeft een fontWeight. Weghalen.`);
    assert.ok(!("fontStyle" in stijl), `Typerol ${rol} heeft een fontStyle. Weghalen.`);
  }
});

test("elke semantische kleur is een echte waarde en geen verwijzing", () => {
  for (const [naam, waarde] of Object.entries(colors)) {
    assert.match(
      waarde,
      /^rgba?\(/,
      `colors.${naam} is "${waarde}". React Native kent geen var(), dus dit hoort al ` +
        `doorgevolgd te zijn door generate.mjs.`
    );
  }
});

test("geen enkel token waardeert een gemoedstoestand", () => {
  // Weertypen zijn gelijkwaardig, zie docs/productprincipes.md principe 3.
  // Dit is de enige tokenregel die niet onderhandelbaar is.
  const verboden = /(^|[^a-z])(good|bad|positive|negative|happy|sad|mood)/i;
  for (const naam of [...Object.keys(palette), ...Object.keys(colors)]) {
    assert.doesNotMatch(
      naam,
      verboden,
      `Token "${naam}" waardeert een gemoedstoestand. Noem het naar het weer, niet naar goed of slecht.`
    );
  }
});

test("tokens.ts is bijgewerkt na de laatste wijziging in de CSS", () => {
  // Niet de generator opnieuw draaien, alleen controleren dat er niets is
  // toegevoegd aan de CSS zonder te genereren. Dat is de fout die je anders pas
  // merkt als een kleur ontbreekt in de app.
  const css = readFileSync(join(here, "colors.css"), "utf8");
  const ts = readFileSync(join(here, "tokens.ts"), "utf8");
  const camel = (s: string) => s.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

  for (const m of css.matchAll(/--([a-z0-9-]+)\s*:/gi)) {
    const naam = camel(m[1]);
    assert.ok(
      ts.includes(`${naam}:`),
      `--${m[1]} staat in colors.css maar niet in tokens.ts. Draai: npm run tokens`
    );
  }
});

test("de schaal is compleet en oplopend", () => {
  const waarden = Object.values(space);
  assert.deepEqual(
    waarden,
    [...waarden].sort((a, b) => a - b),
    "space loopt niet op. De sleutels zijn stappen, niet pixels."
  );
  assert.equal(radius.pill, 999, "Knoppen zijn volledig pil-vormig, zie HERKOMST.md.");
});
