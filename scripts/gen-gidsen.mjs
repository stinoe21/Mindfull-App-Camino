// Genereert apps/mobile/src/features/content/data/gidsen.ts uit de
// contentbibliotheek van MIND: de online gidsen met praktische tips.
//
// Bron van de lijst, de titels en de URL's: GIDSEN.md in
// content/mind/psychische-klachten/flyers-en-informatie (de lijst die MIND op
// 10 september 2026 stuurde). Per gids komt de lokale pagina mee als blokken,
// woordelijk, met de uitzonderingen uit scripts/mind-markdown.mjs. Gidsen
// zonder lokale pagina (waren pdf) krijgen alleen titel en link.
//
// Welke gids bij welk onderwerp van de app hoort is een redactionele keuze en
// staat hieronder. Gidsen zonder onderwerp staan wel in het naslagwerk, maar
// worden nergens automatisch aangeboden.
//
// Draaien: node scripts/gen-gidsen.mjs

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { parsePagina } from "./mind-markdown.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRON = join(ROOT, "content/mind/psychische-klachten/flyers-en-informatie");
const DOEL = join(ROOT, "apps/mobile/src/features/content/data/gidsen.ts");

// Slug van de leespagina naar een onderwerp uit de bibliotheek van de app
// (dezelfde negen als de artikelen en de voorkeuren).
const ONDERWERP_PER_GIDS = {
  piekeren: "Piekeren",
  "helpende-gedachten": "Piekeren",
  stress: "Stress",
  examenstress: "Stress",
  "examenstress-ouders": "Stress",
  slapeloosheid: "Slaap",
  depressie: "Somberheid",
  eenzaamheid: "Somberheid",
  rouw: "Somberheid",
  relatiebreuk: "Somberheid",
  angst: "Angst",
  paniekaanval: "Angst",
  "sociale-angst": "Angst",
  faalangst: "Angst",
  "mentaal-fit-werk": "Energie",
  overprikkeld: "Balans",
  hoogsensitiviteit: "Balans",
  mindfulness: "Ontspanning",
  "grenzen-stellen": "Grenzen",
  "nee-zeggen": "Grenzen",
};

// Fondsenwerving, geen gids voor gebruikers.
const OVERSLAAN = new Set(["nalaten-aan-mind"]);

function parseLijst() {
  const md = readFileSync(join(BRON, "GIDSEN.md"), "utf8");
  const gidsen = [];
  for (const regel of md.split("\n")) {
    const rij = regel.match(/^\| (.+?) \| (https:\/\/\S+) \| (.*?) \| (\S*) \|$/);
    if (!rij) continue;
    const [, titel, url, bestand, aanmeld] = rij;
    const slug = url.replace(/\/$/, "").split("/").pop();
    if (OVERSLAAN.has(slug)) continue;
    const md = bestand.match(/\]\(([^)]+)\)/);
    gidsen.push({ titel: titel.trim(), url, slug, bestand: md ? join(BRON, md[1]) : null, aanmeld: aanmeld || undefined });
  }
  return gidsen;
}

const gidsen = parseLijst().map((g) => {
  const { intro, blokken } = g.bestand && existsSync(g.bestand) ? parsePagina(g.bestand) : { intro: "", blokken: [] };
  return {
    slug: g.slug,
    titel: g.titel,
    onderwerp: ONDERWERP_PER_GIDS[g.slug],
    url: g.url,
    aanmeld: g.aanmeld,
    intro,
    blokken,
  };
});

const kop = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/flyers-en-informatie/GIDSEN.md en de
// gidspagina's. Opnieuw genereren: node scripts/gen-gidsen.mjs
//
// De online gidsen van MIND staan sinds 10 september 2026 in de app, op
// verzoek van MIND (feedbacksessie): praktische tips per onderwerp, met de
// leespagina op wijzijnmind.nl als "Bekijk de online gids". De teksten zijn
// woordelijk van MIND; wat vervalt staat in scripts/mind-markdown.mjs.

export type GidsBlok = {
  kop?: string;
  tekst?: string;
  lijst?: string[];
  linkLabel?: string;
  linkUrl?: string;
};
export type Gids = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app; zonder onderwerp alleen in het naslagwerk. */
  onderwerp?: string;
  /** De leespagina op wijzijnmind.nl. */
  url: string;
  /** De aanmeldpagina van MIND, om de gids per mail te krijgen. */
  aanmeld?: string;
  /** Leeg als de gids alleen als link bestaat. */
  intro: string;
  blokken: GidsBlok[];
};

export const GIDSEN: Gids[] = `;

writeFileSync(DOEL, kop + JSON.stringify(gidsen, null, 2) + ";\n");

for (const g of gidsen) {
  console.log(`${g.slug}: ${g.onderwerp ?? "-"}, ${g.blokken.length} blokken${g.intro ? "" : " (alleen link)"}`);
}
