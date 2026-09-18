// Genereert apps/mobile/src/features/content/data/challenges.ts uit de
// contentbibliotheek van MIND: content/mind/psychische-klachten/challenges/.
//
// Bron van de volgorde en de titels: PROGRAMMAS.md (het Excel van MIND).
// Per dag wordt de volledige pagina meegenomen als blokken (kop, tekst,
// lijst, link), woordelijk, met deze uitzonderingen:
// - afbeeldingen en hun bijschriften vervallen (externe URL's bundelen we
//   niet, zie docs/assets-en-media.md); een YouTube-thumbnail wordt een link;
// - de mail-huishouding vervalt: "Deel of rapporteer", "Tip voor de
//   challenges", "Heb jij een tip ..." en het "Ga snel naar:"-navigatieblok;
// - inline links in lopende tekst houden alleen hun tekst; losse links op een
//   eigen regel blijven een tastbare link.
//
// Draaien: node scripts/gen-challenges.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRON = join(ROOT, "content/mind/psychische-klachten/challenges");
const DOEL = join(ROOT, "apps/mobile/src/features/content/data/challenges.ts");

// Kopjes waarvan de hele sectie mail-huishouding is en niet in de app hoort.
const HUISHOUDING = [/^deel of rapporteer/i, /^tip voor de challenges/i, /^heb jij een tip/i];

// Losse alinea's die restjes van de website zijn: bijschriften bij vervallen
// afbeeldingen en de cookie-teksten rond YouTube-embeds.
const RESTJES = [/^figuur[.:]\s/i, /^foto:\s/i, /marketing cookies/i, /^werkt het filmpje niet\?/i];

function slugify(naam) {
  return naam
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Inline markdown naar platte tekst: bold/italic weg, links naar hun tekst. */
function plat(tekst) {
  return tekst
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s*_([^_]+)_\s*/g, " $1 ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Eén dagpagina naar { intro, blokken }. */
function parseDag(pad) {
  const md = readFileSync(pad, "utf8");
  const zonderFrontmatter = md.replace(/^---\n[\s\S]*?\n---\n/, "");
  const regels = zonderFrontmatter.split("\n");

  const blokken = [];
  let paragraaf = [];
  let lijst = null;
  let overslaan = false; // binnen een huishouding-sectie
  let navLijstVerwacht = false; // de lijst direct na "Ga snel naar:"

  const sluitParagraaf = () => {
    const tekst = plat(paragraaf.join(" "));
    paragraaf = [];
    if (!tekst) return;
    if (/^ga snel naar:?$/i.test(tekst)) {
      navLijstVerwacht = true;
      return;
    }
    if (RESTJES.some((p) => p.test(tekst))) return;
    blokken.push({ tekst });
  };
  const sluitLijst = () => {
    if (!lijst) return;
    const items = lijst.map(plat).filter(Boolean);
    lijst = null;
    if (navLijstVerwacht) {
      navLijstVerwacht = false;
      return;
    }
    if (items.length) blokken.push({ lijst: items });
  };

  for (const regel of regels) {
    const r = regel.trimEnd();

    const kop = r.match(/^(#{1,3})\s+(.*)$/);
    if (kop) {
      sluitParagraaf();
      sluitLijst();
      if (kop[1] === "#") continue; // H1 is de titel, die komt uit PROGRAMMAS.md
      const tekst = plat(kop[2]);
      overslaan = HUISHOUDING.some((p) => p.test(tekst));
      if (!overslaan && tekst) blokken.push({ kop: tekst });
      continue;
    }
    if (overslaan) continue;

    const item = r.match(/^[*-]\s+(.*)$/);
    if (item) {
      sluitParagraaf();
      lijst = lijst ?? [];
      lijst.push(item[1]);
      continue;
    }
    if (!r.trim()) {
      sluitParagraaf();
      // Een lege regel binnen een lijst laat de lijst doorlopen: MIND zet
      // witregels tussen de items.
      continue;
    }
    if (lijst) sluitLijst();

    // Een YouTube-thumbnail wordt een link naar de video.
    const video = r.match(/^!\[[^\]]*\]\(https:\/\/img\.youtube\.com\/vi\/([^/]+)\/[^)]*\)/);
    if (video) {
      blokken.push({ linkLabel: "Bekijk de video", linkUrl: `https://www.youtube.com/watch?v=${video[1]}` });
      continue;
    }
    if (/^!\[/.test(r)) continue; // overige afbeeldingen vervallen

    // Een losse link op een eigen regel blijft een link.
    const link = r.match(/^\[([^\]]+)\]\(([^)]+)\)\s*$/);
    if (link && !link[2].startsWith("#")) {
      blokken.push({ linkLabel: plat(link[1]), linkUrl: link[2] });
      continue;
    }
    if (link) continue; // ankerlink binnen de pagina, zonder doel in de app

    paragraaf.push(r);
  }
  sluitParagraaf();
  sluitLijst();

  // De intro is het eerste tekstblok (op de site de vetgedrukte openingsalinea).
  const eersteTekst = blokken.findIndex((b) => "tekst" in b);
  const intro = eersteTekst >= 0 ? blokken[eersteTekst].tekst : "";
  const rest = eersteTekst >= 0 ? blokken.filter((b, i) => i !== eersteTekst) : blokken;
  return { intro, blokken: rest };
}

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
    const { intro, blokken } = parseDag(join(BRON, d.bestand));
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
// mail-huishouding) staat in de kop van scripts/gen-challenges.mjs.

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
