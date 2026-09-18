// De vlieger van jouw weer: op de uitkomst en in de kaart op Home.
//
// Stijn, 17 september 2026: "het vliegertje moet aangepast worden op basis
// van het resultaat." Tot die dag was het MascotteVlieger met de staat van het
// weer: dezelfde zittende tekening in een andere kleur, altijd met dezelfde
// glimlach, ook op een regenachtige dag. Nu krijgt hij per weerbeeld een eigen
// gezicht en het weer om zich heen, met dezelfde ogen, monden en attributen
// als in de check-in (checkinGezichten.ts), zodat de uitkomst aansluit op wat
// je net zag terwijl je schoof.
//
// De grens blijft productprincipe 3: geen emoji van zuur naar blij. De
// vlieger laat zien hoe hij het WEER ervaart: ogen dichtknijpen tegen de
// wind, turen in de mist, omhoog kijken naar een wisselende lucht, wegduiken
// voor de regen. Nooit een verdrietige mond, nooit een traan, en geen boze
// wenkbrauwen.
//
// De kleur volgt de tinten die het weer in de app al heeft (kaartKleuren.ts),
// een stap dieper dan de kaart, zodat de vlieger op zijn eigen kaart staat.

import { palette } from "@mind/ui";
import { MOND, OGEN, VliegerMetGezicht, type Gezicht } from "@mind/ui/components/VliegerOnderwerp";

import type { WeatherCode } from "@mind/types";

import { DRUPPEL_A, DRUPPEL_B, RILLING_BUITEN, SLIERT_LAAG, SLIERT_LINKS, SLIERT_RECHTS, TWINKEL, WIND_TEGEN, ZONNETJE } from "./checkinGezichten";

// Een derde druppel en een tweede twinkel, in dezelfde lijn als de rest.
const DRUPPEL_C = { d: "M14 12 q-2.6 4.5 0 6.5 q2.6 -2 0 -6.5 Z", vul: true };
const TWINKEL_LINKS = { d: "M8 34 l3 3 M11 34 l-3 3" };

const GEZICHT: Record<WeatherCode, Gezicht> = {
  zonnig: { ogen: OGEN.blij, mond: MOND.breed, extra: [TWINKEL, TWINKEL_LINKS, ZONNETJE] },
  wolken: { ogen: OGEN.omhoog, mond: MOND.klein, extra: [DRUPPEL_A, ZONNETJE] },
  mist: { ogen: OGEN.moe, mond: MOND.klein, extra: [SLIERT_LINKS, SLIERT_RECHTS, SLIERT_LAAG] },
  wind: { ogen: OGEN.knijp, mond: MOND.vlak, extra: WIND_TEGEN },
  regen: { ogen: OGEN.dicht, mond: MOND.golvend, extra: [DRUPPEL_A, DRUPPEL_B, DRUPPEL_C, ...RILLING_BUITEN] },
};

const KLEUR: Record<WeatherCode, { lijf: string; schaduw: string }> = {
  zonnig: { lijf: palette.accentYellow, schaduw: palette.yellow600 },
  wolken: { lijf: palette.primary200, schaduw: palette.primary400 },
  mist: { lijf: palette.purple100, schaduw: palette.purple300 },
  wind: { lijf: palette.lime200, schaduw: palette.lime500 },
  // Een stap dieper dan de rest: de regenkaart is zelf al primary200.
  regen: { lijf: palette.primary400, schaduw: palette.primary600 },
};

export function WeerVlieger({ weerbeeld, hoogte = 112 }: { weerbeeld: WeatherCode; hoogte?: number }) {
  // Zonder label: de weernaam staat er op de uitkomst en op Home als tekst naast.
  return <VliegerMetGezicht gezicht={GEZICHT[weerbeeld]} kleur={KLEUR[weerbeeld]} hoogte={hoogte} />;
}
