// Slim zoeken in de content van MIND, op het toestel.
//
// MIND wil (feedbacksessie, verwerkt 10 september 2026) dat je niet op
// trefwoorden hoeft te zoeken maar kunt typen wat er speelt, "ik slaap
// slecht", en dan de juiste gidsen, artikelen en challenges vindt. Geen
// chatbot: alleen bestaande content, altijd herleidbaar naar MIND.
//
// Dit is de eerste laag, zonder server: de vraag wordt in woorden geknipt,
// stopwoorden vallen weg, woorden worden op hun stam gebracht en via een
// synoniemenlijst aan de onderwerpen van de bibliotheek geknoopt. Daarna
// scoort elk stuk content op titel, onderwerp, intro en tekst. Dat dekt de
// meeste vragen en werkt zonder netwerk, en de zoekvraag verlaat het toestel
// niet (docs/limieten-en-misbruik.md). Een AI-laag op de server kan hier
// later bovenop, met dezelfde in- en uitvoer.

import { ARTIKELEN } from "./data/artikelen.ts";
import { CHALLENGES } from "./data/challenges.ts";
import { GIDSEN } from "./data/gidsen.ts";
import { ONDERWERP_PER_CHALLENGE } from "./challengeOnderwerp.ts";

export type ZoekResultaat = {
  soort: "gids" | "artikel" | "challenge";
  slug: string;
  titel: string;
  onderwerp?: string;
  score: number;
};

const STOPWOORDEN = new Set(
  "ik je jij u we wij ze zij hij het de een en of maar dat dit die dus ook al niet geen heel erg zo veel weinig soms vaak steeds altijd nooit wel kan kun kunt wil wilt moet moeten ben bent is zijn was waren heb hebt heeft hebben word wordt worden met van voor over bij naar in op om aan uit te er hier daar wat hoe wie waar wanneer waarom mijn me mij m'n zich zelf eigen iets niets iemand last gevoel voel voelt".split(" ")
);

// Woorden uit de spreektaal naar de onderwerpen en termen van de bibliotheek.
// De sleutel is een stam (zie stam()), de waarde een lijst extra zoektermen.
const SYNONIEMEN: Record<string, string[]> = {
  slaap: ["slaap", "slapeloosheid", "slapen"],
  slap: ["slaap", "slapeloosheid"],
  wakker: ["slaap", "slapeloosheid"],
  moe: ["slaap", "energie", "vermoeid"],
  vermoeid: ["energie", "slaap"],
  nacht: ["slaap"],
  pieker: ["piekeren", "gedachten"],
  zorg: ["piekeren", "angst"],
  maal: ["piekeren"],
  gedacht: ["piekeren", "gedachten"],
  stress: ["stress", "spanning", "druk"],
  druk: ["stress", "balans"],
  spann: ["stress"],
  gespann: ["stress"],
  werk: ["stress", "burn-out", "werk"],
  burnout: ["burn-out", "stress"],
  overspann: ["burn-out", "stress"],
  somber: ["somberheid", "depressie"],
  verdriet: ["somberheid", "rouw"],
  depress: ["depressie", "somberheid"],
  neerslacht: ["somberheid"],
  eenzaam: ["eenzaamheid", "somberheid"],
  alleen: ["eenzaamheid"],
  rouw: ["rouw", "verlies"],
  verlies: ["rouw"],
  angst: ["angst", "bang"],
  bang: ["angst"],
  paniek: ["paniekaanval", "angst"],
  zenuw: ["angst", "stress"],
  onzeker: ["faalangst", "angst"],
  faal: ["faalangst"],
  examen: ["examenstress", "stress"],
  toets: ["examenstress"],
  sociaal: ["sociale angst"],
  mensen: ["sociale angst", "grenzen"],
  energie: ["energie", "bewegen"],
  beweg: ["bewegen", "energie"],
  sport: ["bewegen", "energie"],
  balans: ["balans"],
  keuze: ["keuzestress", "balans"],
  fomo: ["fomo", "balans"],
  prikkel: ["overprikkeld", "balans"],
  overprikkeld: ["overprikkeld"],
  hooggevoel: ["hoogsensitiviteit"],
  sensitief: ["hoogsensitiviteit"],
  ontspan: ["ontspanning", "mindfulness"],
  rust: ["ontspanning", "mindfulness"],
  adem: ["ontspanning", "mindfulness", "ademhaling"],
  mindful: ["mindfulness", "ontspanning"],
  grens: ["grenzen", "grenzen stellen", "nee zeggen"],
  grenz: ["grenzen", "grenzen stellen"],
  nee: ["nee zeggen", "grenzen"],
  assertief: ["assertiviteit", "grenzen"],
  opkom: ["assertiviteit", "grenzen"],
  relatie: ["relatieproblemen", "relatiebreuk"],
  partner: ["relatieproblemen", "relatiebreuk"],
  uitmaak: ["relatiebreuk"],
  scheid: ["relatiebreuk"],
  prat: ["praten over hoe je je voelt"],
  praat: ["praten over hoe je je voelt"],
  hormon: ["hormonen"],
  herstel: ["herstel"],
  onrust: ["onrustige tijden", "piekeren"],
  nieuws: ["onrustige tijden"],
};

/** Een grove Nederlandse stam: kleine letters, geen leestekens, veelvoorkomende uitgangen eraf. */
export function stam(woord: string): string {
  let w = woord.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôöùûüç-]/g, "");
  if (w.length <= 3) return w;
  for (const uitgang of ["heid", "ingen", "ing", "eren", "en", "je", "es", "e", "s", "t"]) {
    if (w.length - uitgang.length >= 4 && w.endsWith(uitgang)) {
      w = w.slice(0, -uitgang.length);
      break;
    }
  }
  return w;
}

/** De zoekvraag naar een lijst termen: eigen woorden plus synoniemen. */
export function zoektermen(vraag: string): string[] {
  const woorden = vraag.toLowerCase().split(/[\s,.;:!?/]+/).filter((w) => w.length >= 2 && !STOPWOORDEN.has(w));
  const termen = new Set<string>();
  for (const woord of woorden) {
    const s = stam(woord);
    if (s.length >= 3) termen.add(s);
    const extra = SYNONIEMEN[s] ?? SYNONIEMEN[woord];
    for (const e of extra ?? []) termen.add(e.toLowerCase());
  }
  return [...termen];
}

function scoreTekst(tekst: string, termen: string[], gewicht: number): number {
  const t = tekst.toLowerCase();
  let score = 0;
  for (const term of termen) {
    if (t.includes(term)) score += gewicht;
  }
  return score;
}

// Een titel die precies een zoekterm is ("Stress") wint van een titel die de
// term alleen bevat ("Examenstress").
function scoreTitel(titel: string, termen: string[]): number {
  const t = titel.toLowerCase();
  return scoreTekst(t, termen, 10) + (termen.includes(t) ? 15 : 0);
}

/**
 * Zoekt in gidsen, artikelen en challenges. Leeg bij minder dan twee tekens
 * (docs/limieten-en-misbruik.md), anders gerangschikt op score, hoogste eerst.
 */
export function zoek(vraag: string): ZoekResultaat[] {
  const schoon = vraag.trim();
  if (schoon.length < 2) return [];
  const termen = zoektermen(schoon);
  if (!termen.length) return [];

  const resultaten: ZoekResultaat[] = [];

  for (const g of GIDSEN) {
    const score =
      scoreTitel(g.titel, termen) +
      scoreTekst(g.onderwerp ?? "", termen, 6) +
      scoreTekst(g.intro, termen, 3) +
      scoreTekst(g.blokken.map((b) => b.kop ?? b.tekst ?? "").join(" "), termen, 1);
    if (score > 0) resultaten.push({ soort: "gids", slug: g.slug, titel: g.titel, onderwerp: g.onderwerp, score: score + 1 });
  }
  for (const a of ARTIKELEN) {
    const score =
      scoreTitel(a.titel, termen) +
      scoreTekst(a.onderwerp, termen, 6) +
      scoreTekst(a.blokken.map((b) => b.tekst).join(" "), termen, 1);
    if (score > 0) resultaten.push({ soort: "artikel", slug: a.slug, titel: a.titel, onderwerp: a.onderwerp, score });
  }
  for (const c of CHALLENGES) {
    const onderwerp = ONDERWERP_PER_CHALLENGE[c.slug];
    const score =
      scoreTitel(c.naam, termen) +
      scoreTekst(onderwerp ?? "", termen, 6) +
      scoreTekst(c.dagen.map((d) => d.titel + " " + d.intro).join(" "), termen, 1);
    if (score > 0) resultaten.push({ soort: "challenge", slug: c.slug, titel: c.naam, onderwerp, score });
  }

  return resultaten.sort((a, b) => b.score - a.score);
}
