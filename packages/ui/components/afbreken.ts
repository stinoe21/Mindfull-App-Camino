// Zachte afbreekpunten in lange woorden, zodat een kop netjes breekt.
//
// React Native breekt een woord dat niet op de regel past op de letter af:
// op een smalle kaart stond er "Assertiviteitst" met "est" eronder, en
// "Zelfvertrouwe" met "ntest" (Stijn, 17 september 2026: "sommige heb je
// zelfs maar één of twee letters die je in een rij eronder ziet"). Een zacht
// afbreekteken (U+00AD) is onzichtbaar tot de regel daar breekt; dan staat er
// een gewoon koppelteken: "Assertiviteits-" en "test".
//
// Geen volledige Nederlandse woordafbreking, dat is een woordenboek van
// megabytes. Wel de naden van de samenstellingen die in de app voorkomen
// (test, stoornis, stress, gedachten, ...). Alleen in woorden van tien
// letters of meer, en nooit met minder dan drie letters aan een kant, zodat
// een kort woord nooit breekt en er nooit een los staartje overblijft.
// AppText past dit toe op de koprollen; lopende tekst breekt op spaties.

const ZACHT = "­";
const MIN_WOORD = 10;
const MIN_KANT = 3;

// Het deel waarvóór het woord mag breken. "heid" alleen als uitgang, want
// midden in een woord is het vaak geen naad ("afscheiden").
const DELEN = [
  "sensitiviteit",
  "prikkeling",
  "problemen",
  "oefening",
  "gedachten",
  "gewoonten",
  "vertrouwen",
  "elastiekje",
  "kwartier",
  "stoornis",
  "prikkeld",
  "techniek",
  "tiviteit",
  "begaafd",
  "gebruik",
  "ritueel",
  "fulness",
  "spanning",
  "stigma",
  "stress",
  "aanval",
  "punten",
  "zitten",
  "angst",
  "blues",
  "breuk",
  "plaat",
  "test",
];
const UITGANGEN = ["heid"];

function breekWoord(woord: string): string {
  if (woord.length < MIN_WOORD || woord.includes("-") || woord.includes(ZACHT)) return woord;
  const klein = woord.toLowerCase();
  const naden = new Set<number>();
  const magOp = (i: number) => i >= MIN_KANT && woord.length - i >= MIN_KANT;
  for (const deel of DELEN) {
    for (let i = klein.indexOf(deel); i >= 0; i = klein.indexOf(deel, i + 1)) {
      if (magOp(i)) naden.add(i);
    }
  }
  for (const uitgang of UITGANGEN) {
    if (klein.endsWith(uitgang) && magOp(woord.length - uitgang.length)) naden.add(woord.length - uitgang.length);
  }
  if (!naden.size) return woord;
  // Twee naden vlak op elkaar ("sensi|tiviteit" binnen "sensitiviteit") geven
  // een stukje van een paar letters; de eerste wint.
  const gekozen: number[] = [];
  for (const naad of [...naden].sort((a, b) => a - b)) {
    if (!gekozen.length || naad - gekozen[gekozen.length - 1] >= MIN_KANT + 1) gekozen.push(naad);
  }
  let uit = "";
  let vorige = 0;
  for (const naad of gekozen) {
    uit += woord.slice(vorige, naad) + ZACHT;
    vorige = naad;
  }
  return uit + woord.slice(vorige);
}

/** Zet zachte afbreekpunten in de lange woorden van een kop. De tekst zelf verandert niet. */
export function afbreken(tekst: string): string {
  return tekst.replace(/\p{L}{10,}/gu, breekWoord);
}
