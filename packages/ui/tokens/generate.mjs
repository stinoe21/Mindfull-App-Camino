// Genereert tokens.ts uit de vier CSS-bestanden ernaast.
//
// De CSS is de bron, want dat is wat Claude Design en de webapp lezen.
// React Native kent geen CSS-variabelen, dus daar is een TS-object voor nodig.
// Dit script leidt het ene uit het andere af zodat er geen tweede handmatige
// kopie ontstaat die stilletjes uit elkaar loopt.
//
// Draaien:  node packages/ui/tokens/generate.mjs
// Alleen Node stdlib, geen dependency.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const read = (f) => readFileSync(join(here, f), "utf8");

/** Alle `--naam:waarde;` paren uit een CSS-bestand, in bronvolgorde. */
function vars(css) {
  const out = [];
  for (const m of css.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    out.push([m[1], m[2].trim()]);
  }
  return out;
}

const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

/** `var(--x)` doorvolgen tot een echte waarde. */
function resolve(value, table, seen = new Set()) {
  const m = /^var\(--([a-z0-9-]+)\)$/i.exec(value);
  if (!m) return value;
  if (seen.has(m[1])) throw new Error(`Cirkel in token --${m[1]}`);
  seen.add(m[1]);
  const next = table.get(m[1]);
  if (next === undefined) throw new Error(`Onbekend token --${m[1]}`);
  return resolve(next, table, seen);
}

const px = (v) => {
  const n = Number.parseFloat(v);
  if (Number.isNaN(n)) throw new Error(`Geen getal: ${v}`);
  return n;
};

// ---------------------------------------------------------------- kleuren

const colorVars = vars(read("colors.css"));
const colorTable = new Map(colorVars);

// Alles wat niet naar een ander token wijst is een primitieve waarde.
// Alles wat wel doorverwijst is de semantische laag, en die is wat de app gebruikt.
const primitives = [];
const semantic = [];
for (const [name, value] of colorVars) {
  (value.startsWith("var(") ? semantic : primitives).push([
    camel(name),
    resolve(value, colorTable),
  ]);
}

// ------------------------------------------------------------------ fonts

const fontVars = vars(read("fonts.css"));
// "Averia Serif Libre",ui-serif,Georgia,serif  ->  Averia Serif Libre
const firstFamily = (stack) => stack.split(",")[0].trim().replace(/^["']|["']$/g, "");
const fonts = fontVars.map(([n, v]) => [camel(n.replace(/^font-/, "")), firstFamily(v)]);
const fontStacks = fontVars.map(([n, v]) => [camel(n.replace(/^font-/, "")), v]);
const fontKeyByVar = new Map(fontVars.map(([n]) => [n, camel(n.replace(/^font-/, ""))]));

// ------------------------------------------------------------- typografie

const PROPS = new Set(["size", "line", "family", "weight", "style", "tracking"]);
const typeRoles = new Map();
const tracking = new Map(); // rol -> em, pas na het lezen om te rekenen naar punten
for (const [name, value] of vars(read("typography.css"))) {
  const bare = name.replace(/^text-/, "");
  const cut = bare.lastIndexOf("-");
  const prop = bare.slice(cut + 1);
  if (!PROPS.has(prop)) throw new Error(`Onbekende typografie-eigenschap in --${name}`);
  const role = camel(bare.slice(0, cut));
  if (!typeRoles.has(role)) typeRoles.set(role, {});
  const style = typeRoles.get(role);
  if (prop === "size") style.fontSize = px(value);
  else if (prop === "line") style.lineHeight = px(value);
  else if (prop === "weight") style.fontWeight = `"${value}"`;
  else if (prop === "style") style.fontStyle = `"${value}"`;
  else if (prop === "tracking") tracking.set(role, value);
  else if (prop === "family") {
    const ref = /^var\(--([a-z0-9-]+)\)$/i.exec(value);
    if (!ref) throw new Error(`Familie in --${name} verwijst niet naar een fonttoken`);
    style.fontFamily = `fonts.${fontKeyByVar.get(ref[1])}`;
  }
}

// CSS rekent letter-spacing in em, React Native in punten. Omrekenen kan pas
// als de fontSize van die rol bekend is, dus hier en niet in de lus hierboven.
for (const [role, value] of tracking) {
  const style = typeRoles.get(role);
  const em = /^(-?[\d.]+)em$/.exec(value);
  if (!em) throw new Error(`letter-spacing van ${role} staat niet in em: ${value}`);
  if (style.fontSize === undefined) throw new Error(`${role} heeft tracking maar geen size`);
  style.letterSpacing = Number((Number(em[1]) * style.fontSize).toFixed(3));
}

// In React Native erft een Text geen familie van zijn ouder. Een rol zonder
// fontFamily levert daar stil het systeemfont op, en dan is Averia weg zonder
// dat iemand het aan de diff ziet. Beter nu hard stuk dan straks subtiel lelijk.
const zonderFamilie = [...typeRoles]
  .filter(([, s]) => s.fontFamily === undefined)
  .map(([role]) => role);
if (zonderFamilie.length && zonderFamilie.join() !== "accentH2Italic") {
  throw new Error(`Typerol zonder familie: ${zonderFamilie.join(", ")}. Vul aan in typography.css.`);
}

// --------------------------------------------------- fontbestanden voor RN
//
// Op het web kies je een snit met font-weight en font-style, en de browser
// pakt de juiste uit de familie. React Native doet dat niet betrouwbaar bij een
// eigen font: op Android is de bestandsnaam de familienaam, en een gewicht dat
// je erbovenop zet levert een nagemaakte vetdruk op in plaats van de echte snit.
//
// Daarom krijgt elke rol hier het bestand dat er echt bij hoort, en zetten we
// fontWeight en fontStyle in `type` juist NIET: de snit draagt ze al.
const FACES = {
  "display|400|normal": "AveriaSerifLibre-Regular",
  "display|400|italic": "AveriaSerifLibre-Italic",
  "displayAlt|300|italic": "AveriaLibre-LightItalic",
  "body|400|normal": "OpenSans-Regular",
  "body|600|normal": "OpenSans-SemiBold",
};

const typeRN = new Map();
for (const [role, style] of typeRoles) {
  const out = { fontSize: style.fontSize, lineHeight: style.lineHeight };
  if (style.letterSpacing !== undefined) out.letterSpacing = style.letterSpacing;
  if (style.fontFamily !== undefined) {
    const familyKey = style.fontFamily.replace(/^fonts\./, "");
    const weight = (style.fontWeight ?? '"400"').replace(/"/g, "");
    const fontStyle = (style.fontStyle ?? '"normal"').replace(/"/g, "");
    const key = `${familyKey}|${weight}|${fontStyle}`;
    const face = FACES[key];
    if (!face) {
      throw new Error(
        `Geen fontbestand voor ${role} (${key}). Voeg de snit toe aan ` +
          `packages/ui/assets/fonts en aan FACES in dit script, of pas de rol aan.`
      );
    }
    out.fontFamily = `"${face}"`;
  }
  typeRN.set(role, out);
}

const usedFaces = [...new Set(Object.values(FACES))].sort();

// Een snit die in FACES staat maar niet als bestand bestaat, valt in de app stil
// terug op het systeemfont. Dat is precies het soort fout dat je pas op een
// telefoon ziet, dus vangen we hem hier.
const fontDir = join(here, "..", "assets", "fonts");
const ontbrekend = usedFaces.filter((f) => !existsSync(join(fontDir, `${f}.ttf`)));
if (ontbrekend.length) {
  throw new Error(`Fontbestand ontbreekt in assets/fonts: ${ontbrekend.join(", ")}`);
}

// ------------------------------------------------------- spacing en radii

const space = [];
const radius = [];
const shadow = [];
for (const [name, value] of vars(read("spacing.css"))) {
  if (name.startsWith("space-")) space.push([name.slice(6), px(value)]);
  else if (name.startsWith("radius-")) radius.push([camel(name.slice(7)), px(value)]);
  else if (name.startsWith("shadow-")) shadow.push([camel(name.slice(7)), value]);
  else throw new Error(`Onverwacht token --${name} in spacing.css`);
}

// ------------------------------------------------------------------ output

const lines = (pairs, fmt, indent = "  ") =>
  pairs.map(([k, v]) => `${indent}${/^[a-z][a-zA-Z0-9]*$/.test(k) ? k : `"${k}"`}: ${fmt(v)},`).join("\n");

// JSON.stringify en niet handmatig aanhalingstekens eromheen: de fontstacks
// bevatten zelf al dubbele quotes rond "Averia Serif Libre".
const str = (v) => JSON.stringify(String(v));
const raw = (v) => String(v);

const typeBlock = [...typeRN]
  .map(([role, style]) => {
    const inner = Object.entries(style)
      .map(([k, v]) => `    ${k}: ${v},`)
      .join("\n");
    return `  ${role}: {\n${inner}\n  },`;
  })
  .join("\n");

const faceBlock = usedFaces.map((f) => `  ${JSON.stringify(f)},`).join("\n");

const out = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: packages/ui/tokens/*.css. Opnieuw genereren met:
//   node packages/ui/tokens/generate.mjs
//
// Zie packages/ui/README.md voor wat elke laag betekent en wat React Native
// wel en niet met deze waarden kan.

/** De primitieve laag: rauwe waarden. Componentcode gebruikt deze NIET. */
export const palette = {
${lines(primitives, str)}
} as const;

/** De semantische laag: dit is wat componentcode gebruikt. */
export const colors = {
${lines(semantic, str)}
} as const;

/** Fontnamen zoals ze in Expo geladen moeten worden. */
export const fonts = {
${lines(fonts, str)}
} as const;

/** Volledige CSS-stack per familie, voor de webapp. React Native negeert dit. */
export const fontStacks = {
${lines(fontStacks, str)}
} as const;

/**
 * De snitten die geladen moeten zijn voordat er iets getekend wordt.
 * De naam is precies de sleutel waaronder expo-font hem registreert, en dus
 * precies wat \`type\` als fontFamily gebruikt. De bestanden staan in
 * packages/ui/assets/fonts.
 */
export const fontFaces = [
${faceBlock}
] as const;

/**
 * De typeschaal, klaar voor een React Native Text.
 *
 * Let op: hier staat bewust GEEN fontWeight en GEEN fontStyle. De snit in
 * fontFamily draagt die al. Zet je ze er alsnog bij, dan maakt Android er een
 * nagemaakte vetdruk of schuinstand bovenop, en dan klopt het beeld niet meer
 * met het ontwerp.
 *
 * letterSpacing staat in punten, al omgerekend uit de em-waarde in de CSS.
 */
export const type = {
${typeBlock}
} as const;

/** De 4px-schaal. Alles wat ertussen zit is een fout, geen keuze. */
export const space = {
${lines(space, raw)}
} as const;

export const radius = {
${lines(radius, raw)}
} as const;

/** CSS-schaduwen. Het zijn inset-randen: in RN worden dit borderWidth/borderColor. */
export const shadow = {
${lines(shadow, str)}
} as const;

export type ColorToken = keyof typeof colors;
export type TypeToken = keyof typeof type;
export type SpaceToken = keyof typeof space;
export type RadiusToken = keyof typeof radius;
`;

writeFileSync(join(here, "tokens.ts"), out);
console.log(
  `tokens.ts geschreven: ${primitives.length} primitieven, ${semantic.length} semantische kleuren, ` +
    `${typeRoles.size} typerollen, ${space.length} spacing-stappen, ${radius.length} radii.`
);
