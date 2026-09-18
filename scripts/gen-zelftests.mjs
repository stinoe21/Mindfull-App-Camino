// Genereert apps/mobile/src/features/content/data/zelftests.ts uit de
// zelftests in content/mind/psychische-klachten/zelftests (opgehaald met
// scripts/fetch-zelftests.mjs).
//
// Per test: intro, noot en instrument van de pagina, de vragen met de score
// per antwoord, de rekenregel en de uitslagen. De uitslagtekst (HTML van
// MIND) wordt hier omgezet in dezelfde blokken als de gidsen en challenges
// (InhoudBlokken): kop, alinea, opsomming, link. De links uit de tekst komen
// als losse linkblokken onder de tekst; de app opent een link naar een
// psychipedia-pagina of de MIND Hulplijn in de app zelf.
//
// Welke test bij welk onderwerp van de app hoort is een redactionele keuze
// en staat hieronder, net als bij de gidsen.
//
// Draaien: node scripts/gen-zelftests.mjs

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRON = join(ROOT, "content/mind/psychische-klachten/zelftests");
const DOEL = join(ROOT, "apps/mobile/src/features/content/data/zelftests.ts");

// Slug van de test naar een onderwerp uit de bibliotheek van de app.
const ONDERWERP_PER_ZELFTEST = {
  angsttest: "Angst",
  assertiviteit_stress: "Grenzen",
  stresstest_denkgewoonten: "Stress",
  depressietest: "Somberheid",
  "fomo-test": "Balans",
  herfst_winterblues_test: "Somberheid",
  mentaal_fit_op_je_werk_test: "Energie",
  "stresstest-ontspanning-en-herstel": "Ontspanning",
  piekertest: "Piekeren",
  stresstest: "Stress",
};

// De volgorde in de app: de tests bij de families in de volgorde van Houvast,
// daarna de twee zonder onderwerp.
const VOLGORDE = [
  "piekertest",
  "stresstest",
  "stresstest_denkgewoonten",
  "depressietest",
  "herfst_winterblues_test",
  "angsttest",
  "mentaal_fit_op_je_werk_test",
  "fomo-test",
  "stresstest-ontspanning-en-herstel",
  "assertiviteit_stress",
  "zelfvertrouwen",
  "zelfstigma-test",
];

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
const plat = (s) => ontHtml(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

function linkLabel(tekst, url) {
  const t = plat(tekst).replace(/^de /i, "");
  if (/mindhulplijn\.nl/.test(url)) return "MIND Hulplijn";
  if (/wijzijnmind\.nl/.test(url)) return "Lees meer over " + t.charAt(0).toLowerCase() + t.slice(1);
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// HTML van een uitslag naar blokken. De kop van de uitslag is de eerste h2/h3.
function naarBlokken(html) {
  const links = [];
  let s = html.replace(/<a\s[^>]*href="\s*([^"]+?)\s*"[^>]*>([\s\S]*?)<\/a>/g, (_, url, tekst) => {
    if (!links.some((l) => l.url === url)) links.push({ url, tekst });
    return tekst;
  });
  s = s
    .replace(/<img[^>]*>/g, "")
    .replace(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g, "\n\n## $1\n\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, "\n- $1")
    .replace(/<\/?(ul|ol)[^>]*>/g, "\n\n")
    .replace(/<\/p>|<\/div>/g, "\n\n")
    .replace(/<p[^>]*>|<div[^>]*>/g, "")
    .replace(/(<br\s*\/?>\s*){2,}/g, "\n\n")
    .replace(/<br\s*\/?>/g, " ");
  const blokken = [];
  let kop;
  for (const deel of s.split(/\n\s*\n/)) {
    const regels = deel.split("\n").map((r) => r.trim()).filter(Boolean);
    if (!regels.length) continue;
    if (regels[0].startsWith("## ")) {
      const k = plat(regels[0].slice(3));
      if (kop === undefined && blokken.length === 0) kop = k;
      else blokken.push({ kop: k });
      regels.shift();
    }
    const items = regels.filter((r) => r.startsWith("- ")).map((r) => plat(r.slice(2))).filter(Boolean);
    const tekst = plat(regels.filter((r) => !r.startsWith("- ")).join(" "));
    if (tekst) blokken.push({ tekst });
    if (items.length) blokken.push({ lijst: items });
  }
  for (const l of links) blokken.push({ linkLabel: linkLabel(l.tekst, l.url), linkUrl: l.url.trim() });
  return { kop, blokken };
}

const bestanden = readdirSync(BRON).filter((f) => f.endsWith(".json"));
const tests = bestanden
  .map((f) => JSON.parse(readFileSync(join(BRON, f), "utf8")))
  .map((t) => ({
    slug: t.slug,
    titel: t.titel,
    onderwerp: ONDERWERP_PER_ZELFTEST[t.slug],
    intro: t.intro,
    noot: t.noot || undefined,
    instrument: t.instrument || undefined,
    url: t.url,
    scoring: t.scoring,
    vragen: t.vragen.map((v) => ({ tekst: v.tekst, opties: v.opties })),
    uitslagen: t.uitslagen.map((u) => ({ regels: u.regels, ...naarBlokken(u.html) })),
  }))
  .sort((a, b) => VOLGORDE.indexOf(a.slug) - VOLGORDE.indexOf(b.slug));

for (const t of tests) {
  if (!t.vragen.length) throw new Error(`${t.slug}: geen vragen`);
  if (!t.uitslagen.length) throw new Error(`${t.slug}: geen uitslagen`);
  if (VOLGORDE.indexOf(t.slug) < 0) throw new Error(`${t.slug}: niet in VOLGORDE`);
}

const kop = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/zelftests, opgehaald met
// scripts/fetch-zelftests.mjs. Opnieuw genereren: node scripts/gen-zelftests.mjs
// (daar staat ook welke test bij welk onderwerp hoort).
//
// De zelftests van MIND in de app (besluit Stijn, 14 september 2026). De
// teksten zijn woordelijk van MIND. De score wordt op het toestel berekend en
// nergens bewaard of verstuurd, zie docs/datamodel.md ("Zelftests").

import type { InhoudBlok } from "../InhoudBlokken.tsx";

export type ZelftestOptie = { label: string; score: number };
export type ZelftestVraag = { tekst: string; opties: ZelftestOptie[] };
export type ZelftestRegel = { op: "<" | "<=" | ">" | ">="; waarde: number };
export type ZelftestUitslag = {
  /** Alle regels moeten kloppen voor de score; de eerste uitslag die klopt geldt. */
  regels: ZelftestRegel[];
  kop?: string;
  blokken: InhoudBlok[];
};
export type Zelftest = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app; zonder onderwerp alleen in de lijst van tests. */
  onderwerp?: string;
  intro: string;
  /** De vette noot op de pagina: "... is geen diagnose." */
  noot?: string;
  /** De bronregel van het instrument, bijvoorbeeld de PSWQ. */
  instrument?: string;
  /** De test op formulier.wijzijnmind.nl. */
  url: string;
  /** Som van de scores, of het gemiddelde over de vragen. */
  scoring: "som" | "gemiddelde";
  vragen: ZelftestVraag[];
  uitslagen: ZelftestUitslag[];
};

`;

writeFileSync(DOEL, kop + "export const ZELFTESTS: Zelftest[] = " + JSON.stringify(tests, null, 2) + ";\n");
for (const t of tests) console.log(`${t.slug}: ${t.onderwerp ?? "-"}, ${t.vragen.length} vragen, ${t.uitslagen.length} uitslagen (${t.scoring})`);
