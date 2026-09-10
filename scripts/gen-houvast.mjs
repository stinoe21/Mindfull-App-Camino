// Genereert apps/mobile/src/features/content/data/houvast.ts: de compacte
// kennislaag van de app, per onderwerp één pagina die de uitleg uit de
// psychipedia van MIND combineert met de tips en oefeningen uit de online
// gids over hetzelfde onderwerp.
//
// Vastgelegd door Stijn op 10 september 2026 (docs/scope.md, "Houvast"):
//   1. Kort uitgelegd        de kern uit de psychipedia, een paar regels
//   2. Meer over <onderwerp> de verdieping uit de psychipedia, uitklapbaar
//   3. Wat kan helpen        drie tot vijf tips uit de gids
//   4. Probeer dit eens      alleen als de gids echt een oefening bevat
//   5. Verder lezen bij MIND de volledige psychipedia-pagina en de gids
//
// Voor de gebruiker maakt de bronstructuur niet uit: begrijpen, praktisch
// houvast, verdieping. Klachten (piekeren), vaardigheden (nee zeggen) en
// hulpmiddelen (mindfulness) bestaan in hetzelfde componentsysteem.
//
// Welke psychipedia-pagina en welke gids bij een onderwerp horen is een
// redactionele keuze en staat hieronder in ONDERWERPEN. De teksten zelf zijn
// woordelijk van MIND; wat vervalt staat in scripts/mind-markdown.mjs en in
// PROMO hieronder (verwijzingen naar tests, challenges, de Hulplijn en
// "lees meer"-lijsten: die hebben in de app een eigen plek of geen doel).
//
// Draaien: node scripts/gen-houvast.mjs

import { existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { leesFrontmatter, parseGidsenLijst, parsePagina } from "./mind-markdown.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PSYCHIPEDIA = join(ROOT, "content/mind/psychische-klachten/psychipedia");
const GIDSEN_MAP = join(ROOT, "content/mind/psychische-klachten/flyers-en-informatie");
const DOEL = join(ROOT, "apps/mobile/src/features/content/data/houvast.ts");

// Per onderwerp: titel (interface), onderwerp uit de bibliotheek (dezelfde
// negen als de voorkeuren), psychipedia-bestand en/of gids-slug. Met "tips"
// kies je met de hand welke koppen uit de gids de tips zijn; zonder neemt het
// script de eerste vijf tipsecties. Met "oefening" kies je de kop van de
// oefening; zonder zoekt het script een kop met "oefening" erin. Heeft het
// onderwerp geen gids met tips, dan wijst "psychipediaTips" een sectie (of
// secties) van de psychipedia aan waar de tips uit komen, en
// "psychipediaOefening" een oefening; die secties verhuizen dan uit de
// verdieping naar "Wat kan helpen" en "Probeer dit eens".
const ONDERWERPEN = [
  // Piekeren
  { slug: "piekeren", titel: "Piekeren", onderwerp: "Piekeren", psychipedia: "piekeren", gids: "piekeren" },
  { slug: "helpende-gedachten", titel: "Helpende gedachten", onderwerp: "Piekeren", gids: "helpende-gedachten" },
  // Stress
  { slug: "stress", titel: "Stress", onderwerp: "Stress", psychipedia: "stress", gids: "stress" },
  { slug: "burn-out", titel: "Burn-out", onderwerp: "Stress", psychipedia: "burn-out" },
  { slug: "werkstress", titel: "Werkstress", onderwerp: "Stress", psychipedia: "werkstress", psychipediaTips: "Tips om werkstress te verminderen" },
  { slug: "examenstress", titel: "Examenstress", onderwerp: "Stress", psychipedia: "examenstress", gids: "examenstress" },
  // Slaap
  { slug: "slapeloosheid", titel: "Slapeloosheid", onderwerp: "Slaap", psychipedia: "slapeloosheid", gids: "slapeloosheid" },
  // Somberheid
  { slug: "somberheid", titel: "Somberheid", onderwerp: "Somberheid", psychipedia: "somberheid" },
  { slug: "depressie", titel: "Depressie", onderwerp: "Somberheid", psychipedia: "depressie", gids: "depressie" },
  { slug: "eenzaamheid", titel: "Eenzaamheid", onderwerp: "Somberheid", gids: "eenzaamheid" },
  { slug: "rouw", titel: "Rouw", onderwerp: "Somberheid", gids: "rouw" },
  { slug: "relatiebreuk", titel: "Relatiebreuk", onderwerp: "Somberheid", gids: "relatiebreuk" },
  // Angst
  { slug: "angst", titel: "Angst", onderwerp: "Angst", psychipedia: "angst", gids: "angst" },
  // De gids over paniekaanvallen was pdf: alleen de link en de aanmeldpagina.
  { slug: "paniekaanval", titel: "Paniekaanval", onderwerp: "Angst", psychipedia: "paniekaanval", gids: "paniekaanval" },
  { slug: "sociale-angst", titel: "Sociale angst", onderwerp: "Angst", psychipedia: "socialeangst", gids: "sociale-angst" },
  { slug: "faalangst", titel: "Faalangst", onderwerp: "Angst", psychipedia: "faalangst", gids: "faalangst" },
  // Energie
  { slug: "bewegen", titel: "Bewegen", onderwerp: "Energie", psychipedia: "bewegen-en-mentale-gezondheid", psychipediaTips: "Tips om te blijven bewegen" },
  { slug: "mentaal-fit", titel: "Mentaal fit", onderwerp: "Energie", psychipedia: "mentaal-fit", gids: "mentaal-fit-werk" },
  // Balans
  { slug: "fomo", titel: "FOMO", onderwerp: "Balans", psychipedia: "fomo", psychipediaTips: "Wat kan je doen als je last van FOMO hebt?" },
  { slug: "keuzestress", titel: "Keuzestress", onderwerp: "Balans", psychipedia: "keuzestress", psychipediaTips: "Wat kan je doen om met keuzestress om te gaan?" },
  { slug: "overprikkeld", titel: "Overprikkeld", onderwerp: "Balans", psychipedia: "overprikkeling", gids: "overprikkeld" },
  {
    slug: "hoogsensitiviteit",
    titel: "Hoogsensitiviteit",
    onderwerp: "Balans",
    psychipedia: "hoogsensitiviteit",
    gids: "hoogsensitiviteit",
    tips: ["Krijg inzicht in jezelf", "Omarm hoe je bent", "Leef het leven dat bij je past", "Zorg voor balans"],
  },
  { slug: "telefoongebruik", titel: "Je telefoon", onderwerp: "Balans", psychipedia: "telefoongebruik-en-mentale-gezondheid", psychipediaTips: "Alternatieven voor je smartphone" },
  // Ontspanning
  {
    slug: "mindfulness",
    titel: "Mindfulness",
    onderwerp: "Ontspanning",
    psychipedia: "mindfulness",
    gids: "mindfulness",
    // Een vaardigheid, geen klacht: waar het bij kan helpen en de vier korte
    // oefeningen als tips, de oefening van één minuut als "Probeer dit eens".
    tips: ["Hoe mindfulness kan helpen bij klachten", "4 korte oefeningen of 1 lange"],
    oefening: "Mindfulness oefening van één minuut",
  },
  {
    slug: "ontspanningsoefeningen",
    titel: "Ontspannen",
    onderwerp: "Ontspanning",
    psychipedia: "ontspanningsoefeningen",
    psychipediaTips: ["Snelle ontspanning: kijk om je heen", "Ontspan je hoofd en nek", "Ontspannen door te bewegen"],
    psychipediaOefening: "Ontspan je gezicht",
  },
  // Grenzen
  { slug: "grenzen-stellen", titel: "Grenzen stellen", onderwerp: "Grenzen", psychipedia: "grenzen-stellen", gids: "grenzen-stellen" },
  { slug: "nee-zeggen", titel: "Nee zeggen", onderwerp: "Grenzen", psychipedia: "assertiviteit", gids: "nee-zeggen" },
];

// Alinea's uit de psychipedia die in de app geen doel hebben: verwijzingen
// naar zelftests, challenges, de Hulplijn en de website-navigatie.
const PROMO = [
  /^doe de (zelf)?test/i,
  /^meld je (gratis )?aan/i,
  /\b(pieker|stress|slaap|angst|depressie|zelf)test\b/i,
  /challenge/i,
  /hulplijn/i,
  /online gids/i,
  /ervaringsverhalen/i,
  /mind atlas/i,
  /^wil je (minder lezen|meer lezen|meer weten)/i,
  /tot stand gekomen met de hulp van/i,
  /^vind je praten lastig/i,
];
// Hele secties uit de psychipedia die vervallen.
const PROMO_KOP = [/^lees meer/i, /^meer lezen/i, /challenge/i, /^advies nodig/i, /^meer hulp nodig/i, /vragen over .* aan de mind hulplijn/i, /^veelgestelde vragen/i, /^deel of rapporteer/i];

// Koppen in een gids die geen tip zijn.
const GEEN_TIP = [/\?$/, /oefening/i, /training/i, /test/i, /lees meer/i, /meer informatie/i, /hulp/i, /aanmeld/i, /^tips? voor/i, /^inleiding/i, /^wat is/i];

/** Blokken opknippen in secties: { kop, blokken } per kop, met een eventuele kopvrije eerste sectie. */
function secties(blokken) {
  const uit = [];
  let huidig = { kop: undefined, blokken: [] };
  for (const b of blokken) {
    if (b.kop) {
      if (huidig.kop || huidig.blokken.length) uit.push(huidig);
      huidig = { kop: b.kop, blokken: [] };
    } else {
      huidig.blokken.push(b);
    }
  }
  if (huidig.kop || huidig.blokken.length) uit.push(huidig);
  return uit;
}

function zonderPromo(blokken) {
  return secties(blokken)
    .filter((s) => !s.kop || !PROMO_KOP.some((p) => p.test(s.kop)))
    .flatMap((s) => {
      const inhoud = s.blokken.filter((b) => !(b.tekst && PROMO.some((p) => p.test(b.tekst))) && !b.linkUrl);
      if (!inhoud.length) return [];
      return s.kop ? [{ kop: s.kop }, ...inhoud] : inhoud;
    });
}

function leesPsychipedia(naam, keuze) {
  const pad = join(PSYCHIPEDIA, naam + ".md");
  if (!existsSync(pad)) throw new Error("psychipedia-pagina ontbreekt: " + naam);
  const { bron } = leesFrontmatter(pad);
  const { intro, blokken } = parsePagina(pad);
  let kort = intro;
  let rest = zonderPromo(blokken);
  // Een intro die eindigt op een dubbele punt hoort bij de lijst erna
  // ("Angst gaat gepaard met lichamelijke reacties, zoals:").
  if (/:$/.test(kort) && rest[0]?.lijst) {
    kort = kort + " " + rest[0].lijst.map((i) => i.replace(/[,.;]\s*$/, "")).join(", ") + ".";
    rest = rest.slice(1);
  }
  // De eerste kop ("Wat is piekeren?") hoort bij de intro die al getoond is.
  if (rest[0]?.kop && /^wat is/i.test(rest[0].kop)) rest = rest.slice(1);

  // Secties die als tips of oefening dienen verhuizen uit de verdieping.
  const gekozen = (koppen) => {
    const uit = [];
    for (const kop of [koppen].flat().filter(Boolean)) {
      const s = secties(rest).find((x) => x.kop === kop);
      if (!s) throw new Error(`psychipedia ${naam}: kop niet gevonden: ${kop}`);
      uit.push(s);
      rest = rest.filter((b) => b !== s.blokken[0] && !s.blokken.includes(b) && b.kop !== kop);
    }
    return uit;
  };
  const tipSecties = gekozen(keuze.psychipediaTips);
  // Een sectie met een opsomming: elk punt een tip. Anders elke alinea een tip.
  const tips = tipSecties
    .flatMap((s) => {
      const lijst = s.blokken.find((b) => b.lijst);
      if (lijst && tipSecties.length === 1) return lijst.lijst.map((tekst) => ({ blokken: [{ tekst }] }));
      if (tipSecties.length > 1) return [{ kop: s.kop, blokken: s.blokken.filter((b) => b.tekst || b.lijst).slice(0, 3) }];
      // Een aanloopzin ("Je kan meerdere dingen doen, bijvoorbeeld:") is geen tip.
      return s.blokken.filter((b) => b.tekst && !/:$/.test(b.tekst)).map((b) => ({ blokken: [b] }));
    })
    .slice(0, 5);
  const [oefeningSectie] = gekozen(keuze.psychipediaOefening);
  const oefening = oefeningSectie ? { kop: oefeningSectie.kop, blokken: oefeningSectie.blokken.filter((b) => b.tekst || b.lijst) } : undefined;

  return { kort, meer: rest, bron, tips, oefening };
}

function leesGids(slug, keuze) {
  const lijst = parseGidsenLijst(GIDSEN_MAP, new Set(["nalaten-aan-mind"]));
  const g = lijst.find((x) => x.slug === slug);
  if (!g) throw new Error("gids ontbreekt in GIDSEN.md: " + slug);
  const { intro, blokken } = g.bestand && existsSync(g.bestand) ? parsePagina(g.bestand) : { intro: "", blokken: [] };
  const alle = secties(blokken).filter((s) => s.kop);
  const inhoud = (s, max) => s.blokken.filter((b) => b.tekst || b.lijst).slice(0, max);

  let tipSecties;
  if (keuze.tips) {
    tipSecties = keuze.tips.map((kop) => {
      const s = alle.find((x) => x.kop === kop);
      if (!s) throw new Error(`gids ${slug}: tip-kop niet gevonden: ${kop}`);
      return s;
    });
  } else {
    tipSecties = alle.filter((s) => !GEEN_TIP.some((p) => p.test(s.kop))).slice(0, 5);
  }
  // Een met de hand gekozen tip mag langer zijn (de vier korte oefeningen
  // bij mindfulness); een automatisch gekozen tip blijft bij kop en eerste
  // alinea. "Tip 1:" als voorvoegsel vervalt, de nummering is die van de app.
  const tipKop = (kop) => kop.replace(/^tip\s*\d+:\s*/i, "");
  let tips = tipSecties.map((s) => ({ kop: tipKop(s.kop), blokken: inhoud(s, keuze.tips ? 6 : 2) })).filter((t) => t.blokken.length);
  // Een gids zonder tussenkoppen maar met een opsomming: elk punt is een tip.
  if (!tips.length) {
    const lijst = blokken.find((b) => b.lijst);
    if (lijst) tips = lijst.lijst.slice(0, 5).map((tekst) => ({ blokken: [{ tekst }] }));
  }

  const oefeningSectie = keuze.oefening
    ? alle.find((s) => s.kop === keuze.oefening)
    : alle.find((s) => /oefening/i.test(s.kop) && !/^tips? voor/i.test(s.kop) && inhoud(s, 9).length);
  const oefening = oefeningSectie ? { kop: oefeningSectie.kop, blokken: inhoud(oefeningSectie, 9) } : undefined;

  return { slug: g.slug, titel: g.titel, url: g.url, aanmeld: g.aanmeld, intro, tips, oefening };
}

const houvast = ONDERWERPEN.map((o) => {
  const p = o.psychipedia ? leesPsychipedia(o.psychipedia, o) : null;
  const g = o.gids ? leesGids(o.gids, o) : null;
  // De korte uitleg komt uit de psychipedia; is die pagina maar een stub van
  // een regel (examenstress, slapeloosheid), dan uit de intro van de gids.
  const kort = (p?.kort.length ?? 0) >= 120 ? p.kort : g?.intro || p?.kort || "";
  if (!kort) throw new Error(`onderwerp ${o.slug}: geen korte uitleg`);
  // Tips en oefening uit de gids; anders uit de aangewezen psychipedia-secties.
  const tips = g?.tips.length ? g.tips : (p?.tips ?? []);
  const oefening = g?.oefening ?? p?.oefening;
  return {
    slug: o.slug,
    titel: o.titel,
    onderwerp: o.onderwerp,
    kort,
    meer: p?.meer ?? [],
    bron: p?.bron,
    tips,
    oefening,
    gids: g ? { slug: g.slug, titel: g.titel, url: g.url, aanmeld: g.aanmeld } : undefined,
  };
});

const kop = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: de psychipedia en de online gidsen in content/mind. Opnieuw
// genereren: node scripts/gen-houvast.mjs (daar staat ook welke pagina en
// welke gids bij een onderwerp horen).
//
// Houvast is de compacte kennislaag van de app (Stijn, 10 september 2026,
// docs/scope.md): per onderwerp de uitleg uit de psychipedia van MIND plus de
// tips en oefeningen uit de online gids. De teksten zijn woordelijk van MIND.

import type { InhoudBlok } from "../InhoudBlokken.tsx";

export type HouvastTip = { kop?: string; blokken: InhoudBlok[] };
export type HouvastGids = {
  slug: string;
  titel: string;
  /** De leespagina op wijzijnmind.nl. */
  url: string;
  /** De aanmeldpagina van MIND, om de gids per mail te krijgen. */
  aanmeld?: string;
};
export type Houvast = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app (Slaap, Stress, ...). */
  onderwerp: string;
  /** Kort uitgelegd: de kern, een paar regels. */
  kort: string;
  /** Meer over dit onderwerp: de verdieping, uitklapbaar. */
  meer: InhoudBlok[];
  /** De psychipedia-pagina op wijzijnmind.nl, als die er is. */
  bron?: string;
  /** Wat kan helpen: drie tot vijf tips, uit de gids of anders uit de psychipedia. */
  tips: HouvastTip[];
  /** Probeer dit eens: alleen als er echt een oefening is. */
  oefening?: HouvastTip;
  /** De online gids over dit onderwerp, als die er is. */
  gids?: HouvastGids;
};

export const HOUVAST: Houvast[] = `;

writeFileSync(DOEL, kop + JSON.stringify(houvast, null, 2) + ";\n");

for (const h of houvast) {
  const oefening = h.oefening ? `, oefening: ${h.oefening.kop}` : "";
  console.log(`${h.slug} (${h.onderwerp}): kort ${h.kort.length} tekens, meer ${h.meer.length} blokken, ${h.tips.length} tips${oefening}${h.gids ? "" : ", geen gids"}`);
  for (const t of h.tips) console.log(`    - ${t.kop ?? t.blokken[0].tekst?.slice(0, 70)}`);
}
