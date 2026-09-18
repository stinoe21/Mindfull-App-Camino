// Zoekt iemand op een woord dat op nood wijst, dan staat de weg naar hulp
// boven elk zoekresultaat, ook als er niets gevonden is. Zoeken is de plek
// waar iemand zijn eigen woorden intikt, en dit zijn de woorden waarbij een
// lijstje artikelen niet het eerste antwoord mag zijn.
//
// Puur en zonder React Native, zodat het te testen is (npm test). De
// zoekvraag wordt hier alleen vergeleken: niet bewaard, niet gelogd, niet
// verstuurd (docs/limieten-en-misbruik.md, zoeken blijft op het toestel).
//
// De lijst is met opzet ruim. Een keer te vaak de Hulplijn bovenaan kost
// niets; een keer te weinig wel. "dood" staat erin terwijl iemand ook op
// rouw kan zoeken: de kaart staat er dan boven, de resultaten over rouw
// eronder. De lijst hoort nog langs MIND (113 heeft er richtlijnen voor).

// Hele woorden.
const WOORDEN = new Set(["dood", "doodgaan", "doodwens", "sterven", "113", "snijden", "krassen", "overdosis"]);

// Het begin van een woord, zodat verbuigingen en samenstellingen meetellen.
const WOORDBEGINNEN = ["zelfmoord", "zelfdod", "suicid", "zelfbeschadig", "automutil", "zelfverwond", "levensmoe"];

// Stukjes zin, in de genormaliseerde vraag (kleine letters, geen accenten).
const ZINSDELEN = [
  "niet meer leven",
  "niet meer willen leven",
  "wil niet meer",
  "einde aan mijn leven",
  "eind aan mijn leven",
  "leven beeindigen",
  "uit het leven stappen",
  "eruit stappen",
  "er niet meer zijn",
  "mezelf pijn doen",
  "mezelf iets aandoen",
  "mezelf wat aandoen",
  "beter dood",
  "dood willen",
  "wil dood",
];

/** Kleine letters, accenten en trema's eraf, leestekens worden spaties. */
function normaliseer(vraag: string): string {
  return vraag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/** Wijst deze zoekvraag op nood? Dan hoort de weg naar hulp bovenaan. */
export function isCrisisZoekopdracht(vraag: string): boolean {
  const schoon = normaliseer(vraag);
  if (!schoon) return false;
  if (ZINSDELEN.some((z) => schoon.includes(z))) return true;
  return schoon.split(" ").some((w) => WOORDEN.has(w) || WOORDBEGINNEN.some((b) => w.startsWith(b)));
}
