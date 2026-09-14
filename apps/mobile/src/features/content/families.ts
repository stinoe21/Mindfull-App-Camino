// De families van Houvast: de negen onderwerpen uit de bibliotheek (Stress,
// Somberheid, Angst, ...) waar de 27 onderwerpen van Houvast onder vallen.
//
// Sinds 14 september 2026 (Stijn: "de onderwerpen zijn een lange scroll
// onder elkaar, niet per onderdeel opgedeeld") is de familie de ingang van
// Houvast: negen kaarten in plaats van 27, en per familie een pagina met de
// onderwerpen als lijst. De indeling zelf staat al in data/houvast.ts (het
// veld onderwerp); hier staan alleen de volgorde, de regel per familie en
// de indeling van de losse gidsen.
//
// De regel per familie is interface-copy van ons, geen tekst van MIND: kort,
// zonder oordeel en zonder diagnose (productprincipes).

import { CHALLENGES, type Challenge } from "./data/challenges.ts";
import { GIDSEN, type Gids } from "./data/gidsen.ts";
import { HOUVAST, type Houvast } from "./data/houvast.ts";
import { ONDERWERP_PER_CHALLENGE } from "./challengeOnderwerp.ts";
import { houvastVoorGids } from "./houvast.ts";

export type Familie = {
  /** De naam zoals in de bibliotheek en in de voorkeuren: "Stress". */
  naam: string;
  /** Voor de route: "stress". */
  slug: string;
  regel: { nl: string; en: string };
  onderwerpen: Houvast[];
};

const REGEL: Record<string, { nl: string; en: string }> = {
  Piekeren: { nl: "Gedachten die maar blijven draaien.", en: "Thoughts that keep going round." },
  Stress: { nl: "Druk die niet meer wegzakt.", en: "Pressure that doesn't ease off." },
  Slaap: { nl: "Slecht inslapen of te vroeg wakker.", en: "Trouble falling asleep, or waking too early." },
  Somberheid: { nl: "Somber, eenzaam, of na een verlies.", en: "Low, lonely, or after a loss." },
  Angst: { nl: "Spanning, paniek en de angst om te falen.", en: "Tension, panic and the fear of failing." },
  Energie: { nl: "Bewegen en mentaal fit blijven.", en: "Moving, and staying mentally fit." },
  Balans: { nl: "Prikkels, keuzes en je telefoon.", en: "Stimuli, choices and your phone." },
  Ontspanning: { nl: "Tot rust komen, met aandacht.", en: "Coming to rest, with attention." },
  Grenzen: { nl: "Nee zeggen en ruimte houden voor jezelf.", en: "Saying no and keeping room for yourself." },
};

/** De families in de volgorde van de bibliotheek, elk met zijn onderwerpen. */
export const FAMILIES: Familie[] = [...new Set(HOUVAST.map((h) => h.onderwerp))].map((naam) => ({
  naam,
  slug: naam.toLowerCase(),
  regel: REGEL[naam] ?? { nl: "", en: "" },
  onderwerpen: HOUVAST.filter((h) => h.onderwerp === naam),
}));

export function familieVoor(slug: string | undefined): Familie | undefined {
  return FAMILIES.find((f) => f.slug === slug);
}

/** Alle families, de gekozen voorkeuren voorop; de volgorde daarbinnen blijft die van de bibliotheek. */
export function familiesVoorVoorkeuren(voorkeuren: string[]): Familie[] {
  const gekozen = (f: Familie) => Number(voorkeuren.includes(f.naam));
  return [...FAMILIES].sort((a, b) => gekozen(b) - gekozen(a));
}

/** De challenge over deze familie, als die er is (dezelfde koppeling als de vlieger). */
export function challengeBijFamilie(naam: string): Challenge | undefined {
  const slug = Object.keys(ONDERWERP_PER_CHALLENGE).find((s) => ONDERWERP_PER_CHALLENGE[s] === naam);
  return slug ? CHALLENGES.find((c) => c.slug === slug) : undefined;
}

/** Gidsen die bij deze familie horen maar geen eigen onderwerp in Houvast hebben (examenstress voor ouders). */
export function losseGidsenBijFamilie(naam: string): Gids[] {
  return GIDSEN.filter((g) => g.onderwerp === naam && !houvastVoorGids(g.slug));
}

// De gidsen zonder eigen onderwerp, in twee groepen: voor naasten (over
// iemand anders in je omgeving) en de andere onderwerpen van MIND. Welke
// gids voor naasten is staat hier met de hand, want de slug zegt het niet
// altijd (kopp-kov, mantelzorg, kind-met-autisme).
const NAASTEN = new Set([
  "naasten",
  "mantelzorg",
  "kopp-kov",
  "kind-met-autisme",
  "angststoornis-in-je-omgeving",
  "bipolaire-stoornis-in-je-omgeving",
  "borderline-naasten",
  "depressie-naasten",
  "eetstoornis-naasten",
  "narcisme-in-je-omgeving",
  "psychose-in-je-omgeving",
  "ptss-naasten",
  "verslaving-naasten",
]);

export type GidsGroep = "naasten" | "andere";

/** De gidsen van een groep, in de volgorde van de lijst van MIND; "naasten" eerst het algemene stuk. */
export function gidsenInGroep(groep: GidsGroep): Gids[] {
  const los = GIDSEN.filter((g) => !houvastVoorGids(g.slug) && !g.onderwerp);
  const naasten = los.filter((g) => NAASTEN.has(g.slug));
  if (groep === "andere") return los.filter((g) => !NAASTEN.has(g.slug));
  return [...naasten.filter((g) => g.slug === "naasten"), ...naasten.filter((g) => g.slug !== "naasten")];
}
