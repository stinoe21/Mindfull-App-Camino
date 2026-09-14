// Haalt de twaalf zelftests van MIND op en schrijft ze als compacte JSON in
// content/mind/psychische-klachten/zelftests/<slug>.json.
//
// De tests draaien op formulier.wijzijnmind.nl (het formulierplatform Novti,
// Form.io eronder). De pagina zelf bevat alleen de intro; de vragen, de
// scores per antwoord en de uitslagteksten staan in een openbaar JSON-bestand
// op de CDN van dat platform, dat de pagina in de browser ook ophaalt
// (initForm('https://cdn.novti.io/tenants/mind/forms/<id>.json')). Dit
// script leest dat bestand en houdt alleen over wat de app nodig heeft:
//
//   vragen      de stellingen op volgorde, met per antwoord het label en de
//               score (omgekeerd gescoorde stellingen hebben dat al in hun
//               waarden staan)
//   scoring     "som" of "gemiddelde", zoals het formulier zelf rekent
//   uitslagen   per uitslag de voorwaarden op de score (uit de JavaScript-
//               conditie van het formulier) en de tekst als HTML, woordelijk
//
// Wat vervalt: de contactvelden (geslacht, nieuwsbrief), de aanmeldknoppen
// en de afbeeldingen. Zie docs/scope.md ("Zelftests") en docs/datamodel.md.
// Besluit Stijn, 14 september 2026: de tests horen in de app zelf.
//
// Draaien: node scripts/fetch-zelftests.mjs
// Daarna: node scripts/gen-zelftests.mjs

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIJST = join(ROOT, "content/mind/psychische-klachten/zelftests-overzicht.md");
const DOEL = join(ROOT, "content/mind/psychische-klachten/zelftests");
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36";
const OPGEHAALD = new Date().toISOString().slice(0, 10);

const slaap = (ms) => new Promise((r) => setTimeout(r, ms));

async function haal(url) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}

// De tabel in zelftests-overzicht.md: | Test | Link |
function leesLijst() {
  const md = readFileSync(LIJST, "utf8");
  const uit = [];
  for (const regel of md.split("\n")) {
    const rij = regel.match(/^\| (.+?) \| (https:\/\/formulier\.wijzijnmind\.nl\/\S+) \|$/);
    if (rij) uit.push({ titel: rij[1].trim(), url: rij[2] });
  }
  return uit;
}

const ontHtml = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&eacute;/g, "é")
    .replace(/&euml;/g, "ë")
    .replace(/&[a-z]+;/g, "");
// Tags weg: een regeleinde of blok wordt een spatie (anders plakken zinnen
// aan elkaar), een inline tag (<b>, <u>, <span>) verdwijnt zonder spatie
// (anders komt er een spatie voor de punt).
const plat = (html) =>
  ontHtml(
    html
      .replace(/<(?:br|\/?p|\/?div|\/?h[1-6]|\/?li|\/?ul|\/?ol)\b[^>]*>/g, " ")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim();

// De intro op de pagina: de tekst in de content-container naast de titel,
// in drie delen: de gewone intro, de vetgedrukte noot ("... is geen
// diagnose") en de cursieve bronregel (het instrument). De kop van de
// pagina ("Doe de stress-test") staat in een h1 of h2 en loopt op sommige
// pagina's door tot na de intro; de kop zelf is de tekst tot de eerste <br>.
function leesIntro(html) {
  const m = html.match(/<div[^>]*class="content-container">([\s\S]*?)<\/div>\s*<\/div>\s*<div[^>]*class="cell image-holder"/);
  if (!m) return { titel: "", intro: "", noot: "", instrument: "" };
  let s = m[1];
  const kop = s.match(/<h[12][^>]*>((?:(?!<br|<\/h[12]|<p\b)[\s\S])*)/);
  const titel = kop ? plat(kop[1]) : "";
  if (kop) s = s.replace(kop[1], " ");
  // Het instrument is de cursieve bronregel: een hele zin, niet een los
  // cursief woord midden in de intro ("helemaal mee eens").
  const cursief = [...s.matchAll(/<i[^>]*>([\s\S]*?)<\/i>/g)].map((x) => x[1]).filter((x) => plat(x).length >= 40);
  const instrument = cursief.map(plat).join(" ");
  for (const c of cursief) s = s.replace(c, " ");
  // De noot zijn de zinnen over de diagnose ("Uit deze test volgt geen
  // diagnose. Alleen een psycholoog ..."). Op de site staan ze vet, maar
  // sommige pagina's zetten de hele intro vet, dus we kijken naar de zinnen.
  const zinnen = plat(s).match(/[^.!?]+[.!?]+(?:\s|$)/g) || [plat(s)];
  const noot = zinnen.filter((z) => /diagnose/i.test(z)).join("").replace(/\s+/g, " ").trim();
  const intro = zinnen.filter((z) => !/diagnose/i.test(z)).join("").replace(/\s+/g, " ").trim();
  return { titel, intro, noot, instrument };
}

function* loop(componenten) {
  for (const c of componenten) {
    yield c;
    if (c.components) yield* loop(c.components);
    if (c.columns) for (const kol of c.columns) yield* loop(kol.components || []);
    if (c.rows) for (const rij of c.rows) for (const cel of rij) yield* loop(cel.components || []);
  }
}

// "if (quiz_score >= 18 && quiz_score <= 23) show = true" naar regels.
function leesRegels(js) {
  const regels = [];
  for (const m of (js || "").matchAll(/(?:data\.)?(?:quiz_score|avg)\s*(<=|>=|<|>)\s*(-?\d+(?:\.\d+)?)/g)) {
    regels.push({ op: m[1], waarde: Number(m[2]) });
  }
  return regels;
}

function reduceer(form, meta) {
  const alles = [...loop(form.components)];
  const vragen = alles
    // Verborgen vragen (question_12 tot 15 in de piekertest) zijn restanten in
    // het formulier en tellen daar ook niet mee.
    .filter((c) => c.type === "radio" && /^question_\d+$/.test(c.key || "") && !c.hidden)
    .map((c) => ({
      sleutel: c.key,
      tekst: plat(c.label),
      opties: (c.values || []).map((v) => ({ label: plat(v.label), score: Number(v.value) })),
    }));
  const score = alles.find((c) => c.key === "quiz_score");
  const wells = alles.filter((c) => c.type === "well");
  const gemiddelde = /average|\/\s*\d+\s*$/m.test(score?.calculateValue || "") || wells.some((w) => /avg/.test(w.customConditional || ""));
  const uitslagen = wells
    .map((w) => ({
      sleutel: w.key,
      regels: leesRegels(w.customConditional),
      html: [...loop(w.components || [])]
        .filter((c) => c.type === "htmlelement")
        .map((c) => c.content || "")
        .join("\n"),
    }))
    .filter((u) => u.regels.length);
  return { ...meta, scoring: gemiddelde ? "gemiddelde" : "som", vragen, uitslagen };
}

mkdirSync(DOEL, { recursive: true });
const lijst = leesLijst();
const klaar = [];
for (const t of lijst) {
  const slug = t.url.replace(/\/$/, "").split("/").pop();
  const html = await haal(t.url);
  const formUrl = (html.match(/initForm\('([^']+)'/) || [])[1];
  if (!formUrl) throw new Error(`geen formulier gevonden op ${t.url}`);
  const form = JSON.parse(await haal(formUrl));
  // De titel is de kop van de pagina zonder de aansporing ("Doe de
  // angsttest" wordt "Angsttest"); ontbreekt de kop, dan de titel uit de lijst.
  const { titel: kop, ...intro } = leesIntro(html);
  const zonderDoe = kop.replace(/^doe de\s+/i, "");
  const titel = zonderDoe ? zonderDoe.charAt(0).toUpperCase() + zonderDoe.slice(1) : t.titel;
  const data = reduceer(form, { slug, titel, url: t.url, formulier: formUrl, opgehaald: OPGEHAALD, ...intro });
  writeFileSync(join(DOEL, `${slug}.json`), JSON.stringify(data, null, 2) + "\n");
  klaar.push({ slug, titel, vragen: data.vragen.length, uitslagen: data.uitslagen.length, scoring: data.scoring });
  console.log(`${slug}: ${data.vragen.length} vragen, ${data.uitslagen.length} uitslagen, ${data.scoring}`);
  await slaap(400);
}

writeFileSync(
  join(DOEL, "ZELFTESTS.md"),
  [
    "---",
    'title: "Zelftests van MIND, als data voor de app"',
    "bron: formulier.wijzijnmind.nl, via de formulier-JSON op cdn.novti.io",
    `opgehaald: ${OPGEHAALD}`,
    "---",
    "",
    "# Zelftests",
    "",
    "De twaalf zelftests van MIND, opgehaald met `scripts/fetch-zelftests.mjs` uit",
    "het formulier dat de testpagina zelf laadt. Per test: de intro van de pagina,",
    "de stellingen met de score per antwoord, hoe de score wordt berekend en de",
    "uitslagteksten met hun voorwaarden. Woordelijk van MIND; de contactvelden en",
    "de aanmeldknoppen zijn weggelaten. De app rekent de score op het toestel en",
    "bewaart antwoorden noch uitslag (zie `docs/datamodel.md`).",
    "",
    "| Test | Vragen | Uitslagen | Score | Bestand |",
    "|---|---|---|---|---|",
    ...klaar.map((k) => `| ${k.titel} | ${k.vragen} | ${k.uitslagen} | ${k.scoring} | [${k.slug}.json](${k.slug}.json) |`),
    "",
  ].join("\n")
);
console.log(`klaar: ${klaar.length} tests`);
