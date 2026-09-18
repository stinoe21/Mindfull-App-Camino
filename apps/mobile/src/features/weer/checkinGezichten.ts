// De gezichten van de vlieger in de check-in: per vraag vijf, één per
// weerwoord (teksten.ts), van links naar rechts op de schuif.
//
// Stijn, 17 september 2026: de vlieger bewoog te veel en dat zei weinig; hij
// moet met zijn gezicht laten zien welk weer je aanwijst ("als het guurder
// wordt, moet de gezichtsuitdrukking veranderen").
//
// De grens is productprincipe 3: geen emoji van zuur naar blij, want weer is
// niet goed of slecht. Deze gezichten laten daarom zien hoe de vlieger het
// WEER ervaart: ogen dichtknijpen tegen kou of wind, turen in de mist,
// omhoog kijken naar een wisselende lucht. Nooit een verdrietige mond, nooit
// een traan. De attributen zijn weer: rillijntjes, windstrepen, misslierten,
// druppels. Alles in dezelfde inktlijn als de gezichten van Houvast
// (VliegerOnderwerp), met dezelfde ogen en monden waar dat kan.

import { MOND, OGEN, type Gezicht } from "@mind/ui/components/VliegerOnderwerp";

import type { SliderWaarden } from "./weerbeeld";

// Attributen in het frame van 129 bij 99; de vlieger zit in het midden.
export const RILLING_BUITEN = [{ d: "M8 30 q-2.5 6 0 12" }, { d: "M103 30 q2.5 6 0 12" }];
const RILLING_BINNEN = [{ d: "M14 33 q-2 4.5 0 9" }, { d: "M97 33 q2 4.5 0 9" }];
const WARMTE = [{ d: "M70 56 q2 -1.5 4 0 t4 0" }, { d: "M72 60 q2 -1.5 4 0 t4 0" }];
// De vlieger zit met zijn benen naar links en kijkt dus naar links. Wind mee
// komt van achteren: strepen rechts van hem. Wind tegen waait in zijn gezicht:
// strepen links. Tot 17 september 2026 stond het andersom en las wind mee als
// wind tegen (Stijn).
const WIND_MEE = [{ d: "M105 30 h12" }, { d: "M108 38 h15" }, { d: "M106 46 h10" }];
export const WIND_TEGEN = [{ d: "M3 34 h11" }, { d: "M1 42 h15" }, { d: "M5 50 h10" }];
const FRONS = [{ d: "M48.5 33 l8 2", dik: 1.8 }, { d: "M75.5 33 l-8 2", dik: 1.8 }];
export const SLIERT_LINKS = { d: "M1 38 q4 -3 8 0 t8 0" };
export const SLIERT_RECHTS = { d: "M98 30 q4 -3 8 0 t8 0" };
export const SLIERT_LAAG = { d: "M100 46 q4 -3 8 0 t8 0" };
export const TWINKEL = { d: "M104 24 v6 M101 27 h6" };
export const DRUPPEL_A = { d: "M92 8 q-2.6 4.5 0 6.5 q2.6 -2 0 -6.5 Z", vul: true };
export const DRUPPEL_B = { d: "M104 18 q-2.6 4.5 0 6.5 q2.6 -2 0 -6.5 Z", vul: true };
export const ZONNETJE = { d: "M14 14 v6 M11 17 h6" };

export const CHECKIN_GEZICHTEN: Record<keyof SliderWaarden, [Gezicht, Gezicht, Gezicht, Gezicht, Gezicht]> = {
  // Guur, Koud, Fris, Zacht, Lekker zacht
  temperatuur: [
    { ogen: OGEN.knijp, mond: MOND.golvend, extra: [...RILLING_BUITEN, ...RILLING_BINNEN] },
    { ogen: OGEN.open, mond: MOND.golvend, extra: RILLING_BUITEN },
    { ogen: OGEN.open, mond: MOND.klein, extra: [] },
    { ogen: OGEN.open, mond: MOND.glimlach, extra: [] },
    { ogen: OGEN.dicht, mond: MOND.glimlach, extra: WARMTE },
  ],
  // Wind tegen, Briesje tegen, Windstil, Briesje mee, Wind mee
  wind: [
    { ogen: OGEN.knijp, mond: MOND.vlak, extra: [...WIND_TEGEN, ...FRONS] },
    { ogen: OGEN.open, mond: MOND.vlak, extra: [WIND_TEGEN[1]] },
    { ogen: OGEN.open, mond: MOND.klein, extra: [] },
    { ogen: OGEN.open, mond: MOND.glimlach, extra: [WIND_MEE[1]] },
    { ogen: OGEN.blij, mond: MOND.glimlach, extra: WIND_MEE },
  ],
  // Dichte mist, Mistig, Heiig, Vrij helder, Helder zicht
  zicht: [
    { ogen: OGEN.moe, mond: MOND.klein, extra: [SLIERT_LINKS, SLIERT_RECHTS, SLIERT_LAAG] },
    { ogen: OGEN.moe, mond: MOND.klein, extra: [SLIERT_RECHTS] },
    { ogen: OGEN.open, mond: MOND.klein, extra: [] },
    { ogen: OGEN.open, mond: MOND.glimlach, extra: [] },
    { ogen: [], rondeOgen: true, mond: MOND.glimlach, extra: [TWINKEL] },
  ],
  // Heel wisselvallig, Wisselvallig, Af en toe een bui, Vrij rustig, Rustig
  wisselvallig: [
    { ogen: [], rondeOgen: true, mond: MOND.golvend, extra: [DRUPPEL_A, DRUPPEL_B, ZONNETJE] },
    { ogen: OGEN.omhoog, mond: MOND.golvend, extra: [DRUPPEL_A, ZONNETJE] },
    { ogen: OGEN.omhoog, mond: MOND.klein, extra: [DRUPPEL_A] },
    { ogen: OGEN.open, mond: MOND.glimlach, extra: [] },
    { ogen: OGEN.dicht, mond: MOND.glimlach, extra: [] },
  ],
};
