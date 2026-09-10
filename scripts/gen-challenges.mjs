// Genereert apps/mobile/src/features/content/data/challenges.ts uit de
// contentbibliotheek van MIND: content/mind/psychische-klachten/challenges/.
//
// Bron van de volgorde en de titels: PROGRAMMAS.md (het Excel van MIND).
// Per dag wordt de volledige pagina meegenomen als blokken (kop, tekst,
// lijst, link), woordelijk, met de uitzonderingen uit scripts/mind-markdown.mjs
// (afbeeldingen en mail-huishouding vervallen).
//
// Draaien: node scripts/gen-challenges.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { parsePagina, plat, slugify } from "./mind-markdown.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRON = join(ROOT, "content/mind/psychische-klachten/challenges");
const DOEL = join(ROOT, "apps/mobile/src/features/content/data/challenges.ts");

/** PROGRAMMAS.md naar de lijst challenges met dagvolgorde en bestanden. */
function parseProgrammas() {
  const md = readFileSync(join(BRON, "PROGRAMMAS.md"), "utf8");
  const programmas = [];
  let soort = null;
  let huidig = null;

  for (const regel of md.split("\n")) {
    if (/^## Challenges/.test(regel)) soort = "challenge";
    else if (/^## Themaspecials/.test(regel)) soort = "themaspecial";
    const naam = regel.match(/^### (.*)$/);
    if (naam && soort) {
      huidig = { slug: slugify(naam[1]), naam: naam[1].trim(), soort, dagen: [] };
      programmas.push(huidig);
      continue;
    }
    if (!huidig) continue;
    const aanmeld = regel.match(/^- Aanmeldpagina: (\S+)$/);
    if (aanmeld) huidig.aanmeld = aanmeld[1];
    const rij = regel.match(/^\| \d+ \| (.*) \| \[[^\]]+\]\(([^)]+)\) \|$/);
    if (rij) huidig.dagen.push({ titel: plat(rij[1]), bestand: rij[2] });
  }
  return programmas;
}

const programmas = parseProgrammas().map((p) => ({
  slug: p.slug,
  naam: p.naam,
  soort: p.soort,
  aanmeld: p.aanmeld,
  dagen: p.dagen.map((d) => {
    const { intro, blokken } = parsePagina(join(BRON, d.bestand));
    return { titel: d.titel, intro, blokken };
  }),
}));

const kop = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/challenges/PROGRAMMAS.md en de
// dagpagina's. Opnieuw genereren: node scripts/gen-challenges.mjs
//
// Sinds 10 september 2026 staat de volledige daginhoud in de app: MIND heeft
// via Stijn akkoord gegeven op het opnemen van de challenge-inhoud in de app
// (daarvoor stond hier alleen de intro per dag, met de mailreeks als route).
// De teksten zijn woordelijk van MIND; wat vervalt (afbeeldingen en
// mail-huishouding) staat in de kop van scripts/mind-markdown.mjs.

export type ChallengeBlok = {
  kop?: string;
  tekst?: string;
  lijst?: string[];
  linkLabel?: string;
  linkUrl?: string;
};
export type ChallengeDag = { titel: string; intro: string; blokken: ChallengeBlok[] };
export type Challenge = {
  slug: string;
  naam: string;
  soort: "challenge" | "themaspecial";
  aanmeld?: string;
  dagen: ChallengeDag[];
};

export const CHALLENGES: Challenge[] = `;

writeFileSync(DOEL, kop + JSON.stringify(programmas, null, 2) + ";\n");

for (const p of programmas) {
  const blokken = p.dagen.reduce((n, d) => n + d.blokken.length, 0);
  console.log(`${p.slug}: ${p.dagen.length} dagen, ${blokken} blokken`);
}
