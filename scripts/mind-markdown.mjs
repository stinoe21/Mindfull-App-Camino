// Gedeelde parser voor de Markdown-pagina's in content/mind: één pagina van
// wijzijnmind.nl naar { intro, blokken }, woordelijk, met deze uitzonderingen:
// - afbeeldingen en hun bijschriften vervallen (externe URL's bundelen we
//   niet, zie docs/assets-en-media.md); een YouTube-thumbnail wordt een link;
// - de website-huishouding vervalt: "Deel of rapporteer", "Help mee!",
//   "Advies of hulp nodig?" (de Hulplijn heeft in de app een eigen plek met
//   vaste tekst), de mail-tips van de challenges en het "Ga snel naar:"-blok;
// - inline links in lopende tekst houden alleen hun tekst; losse links op een
//   eigen regel blijven een tastbare link.
//
// Gebruikt door scripts/gen-challenges.mjs en scripts/gen-gidsen.mjs.

import { readFileSync } from "node:fs";
import { join } from "node:path";

// Kopjes waarvan de hele sectie huishouding is en niet in de app hoort.
const HUISHOUDING = [
  /^deel of rapporteer/i,
  /^tip voor de challenges/i,
  /^heb jij een tip/i,
  /^help mee/i,
  /^advies of hulp nodig/i,
];

// Losse alinea's die restjes van de website zijn: bijschriften bij vervallen
// afbeeldingen en de cookie-teksten rond YouTube-embeds.
const RESTJES = [/^figuur[.:]\s/i, /^foto:\s/i, /marketing cookies/i, /^werkt het filmpje niet\?/i, /^er zijn geen resultaten gevonden/i];

export function slugify(naam) {
  return naam
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Inline markdown naar platte tekst: bold/italic weg, links naar hun tekst. */
export function plat(tekst) {
  return tekst
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/__/g, "") // een los opmaakteken zonder wederhelft
    .replace(/(^|\s)_+(?=\S)/g, "$1") // idem, enkel, aan het begin van een woord
    .replace(/_+(?=\s|$)/g, "") // idem, aan het eind van een woord
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s*_([^_]+)_\s*/g, " $1 ")
    .replace(/\s+/g, " ")
    .trim();
}

/** De frontmatter van een pagina als object (title, bron, opgehaald). */
export function leesFrontmatter(pad) {
  const md = readFileSync(pad, "utf8");
  const blok = md.match(/^---\n([\s\S]*?)\n---\n/);
  const uit = {};
  if (!blok) return uit;
  for (const regel of blok[1].split("\n")) {
    const m = regel.match(/^(\w+):\s*(.*)$/);
    if (m) uit[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
  }
  return uit;
}

/**
 * De tabel in GIDSEN.md naar een lijst { titel, url, slug, bestand, aanmeld }.
 * bestand is het absolute pad van de lokale pagina, of null als de gids alleen
 * als link bestaat. Gedeeld door gen-gidsen.mjs en gen-houvast.mjs.
 */
export function parseGidsenLijst(map, overslaan = new Set()) {
  const md = readFileSync(join(map, "GIDSEN.md"), "utf8");
  const gidsen = [];
  for (const regel of md.split("\n")) {
    const rij = regel.match(/^\| (.+?) \| (https:\/\/\S+) \| (.*?) \| (\S*) \|$/);
    if (!rij) continue;
    const [, titel, url, bestand, aanmeld] = rij;
    const slug = url.replace(/\/$/, "").split("/").pop();
    if (overslaan.has(slug)) continue;
    const lokaal = bestand.match(/\]\(([^)]+)\)/);
    gidsen.push({ titel: titel.trim(), url, slug, bestand: lokaal ? join(map, lokaal[1]) : null, aanmeld: aanmeld || undefined });
  }
  return gidsen;
}

/** Eén pagina naar { intro, blokken }. De H1 vervalt: de titel komt uit de lijst. */
export function parsePagina(pad) {
  const md = readFileSync(pad, "utf8");
  const zonderFrontmatter = md.replace(/^---\n[\s\S]*?\n---\n/, "");
  const regels = zonderFrontmatter.split("\n");

  const blokken = [];
  let paragraaf = [];
  let lijst = null;
  let overslaan = false; // binnen een huishouding-sectie
  let itemLooptDoor = false; // de vorige regel was een lijstitem, zonder witregel erna
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
      if (kop[1] === "#") continue;
      const tekst = plat(kop[2]);
      overslaan = HUISHOUDING.some((p) => p.test(tekst));
      if (!overslaan && tekst) blokken.push({ kop: tekst });
      continue;
    }
    if (overslaan) continue;

    // Opsommingen met een streepje of sterretje, en genummerde stappen
    // ("1.  Bedenk je dat..."): de nummering is die van de app.
    const item = r.match(/^(?:[*-]|\d+\.)\s+(.*)$/);
    if (item) {
      sluitParagraaf();
      lijst = lijst ?? [];
      lijst.push(item[1]);
      itemLooptDoor = true;
      continue;
    }
    if (!r.trim()) {
      sluitParagraaf();
      // Een lege regel binnen een lijst laat de lijst doorlopen: MIND zet
      // witregels tussen de items.
      itemLooptDoor = false;
      continue;
    }
    // Een tekstregel direct onder een item, zonder witregel, hoort bij dat
    // item ("1. Waar sta ik nu?" met de toelichting op de regel eronder).
    if (lijst && itemLooptDoor) {
      lijst[lijst.length - 1] += " " + r.trim();
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
