// De teksten van de check-in en de uitkomst.
//
// De check-in-teksten zijn van Stijn, niet van MIND. Tot 17 september 2026
// lagen ze woordelijk vast in HERKOMST.md ("Canonical check-in copy"); op die
// dag heeft hij ze zelf herzien ("deze copy is echt slecht") en is dit bestand
// de bron. De labelparen zijn gebleven, de vragen zijn korter, de metafoor
// staat in de kopregel boven elke vraag, en de geruststelling "Geen goed of
// fout" is vervangen door een aanwijzing die alleen bij de eerste vraag staat.
// De uitkomstteksten voor "mist" staan letterlijk in het prototype; de andere
// vier zijn in dezelfde toon geschreven en zijn een VOORSTEL totdat ze in
// scope.md zijn bevestigd.
// Regels: geen oordeel, geen score, geen goed of slecht weer (productprincipes
// 2 en 3), een tip is zacht en klein. Alle woorden zijn weerwoorden, nooit
// een emotie of een label voor hoe iemand zich voelt.

import type { WeatherCode } from "@mind/types";

import type { SliderWaarden } from "./weerbeeld.ts";

/** De kopregel boven elke vraag: die draagt de metafoor, zodat de vraag kort kan. */
export const CHECKIN_KOPREGEL = "HET WEER IN JE HOOFD";

/** Alleen bij de eerste vraag: hoe het werkt, en dat ongeveer genoeg is. */
export const CHECKIN_AANWIJZING = "Schuif naar waar het nu ongeveer zit.";

export const CHECKIN_STAPPEN: {
  key: keyof SliderWaarden;
  vraag: string;
  links: string;
  rechts: string;
  /**
   * Het weerwoord dat meeverandert met de schuif, van links naar rechts in
   * vijf gelijke stukken. Het eerste en het laatste zijn de labels zelf.
   */
  woorden: [string, string, string, string, string];
}[] = [
  { key: "temperatuur", vraag: "Hoe warm voelt het?", links: "Guur", rechts: "Lekker zacht", woorden: ["Guur", "Koud", "Fris", "Zacht", "Lekker zacht"] },
  // Links het zware weer, rechts het lichte, bij alle vier (Stijn, 17 september 2026). De vraag wijst naar de rechterkant, net als "Hoe warm voelt het?".
  { key: "wind", vraag: "Hoeveel wind heb je mee?", links: "Wind tegen", rechts: "Wind mee", woorden: ["Wind tegen", "Briesje tegen", "Windstil", "Briesje mee", "Wind mee"] },
  { key: "zicht", vraag: "Hoe ver kun je kijken?", links: "Dichte mist", rechts: "Helder zicht", woorden: ["Dichte mist", "Mistig", "Heiig", "Vrij helder", "Helder zicht"] },
  { key: "wisselvallig", vraag: "Hoe rustig is het weer?", links: "Heel wisselvallig", rechts: "Rustig", woorden: ["Heel wisselvallig", "Wisselvallig", "Af en toe een bui", "Vrij rustig", "Rustig"] },
];

/** In welk van de vijf stukken van de schuif een waarde van 0 tot 100 valt. */
export function weerzone(waarde: number): 0 | 1 | 2 | 3 | 4 {
  return Math.min(4, Math.max(0, Math.floor(waarde / 20))) as 0 | 1 | 2 | 3 | 4;
}

/** Het weerwoord bij een schuifwaarde van 0 tot 100. */
export function weerwoord(woorden: readonly string[], waarde: number): string {
  return woorden[weerzone(waarde)];
}

// De naam van elk weerbeeld, zoals in de seed van weather_type
// (supabase/migrations/20260811090612_seed_weather_types.sql). Daar is de
// bron; wijzigt een label daar, dan hier ook. Lokaal gekopieerd omdat de
// uitkomst ook zonder netwerk moet werken.
export const WEER_NAMEN: Record<WeatherCode, string> = {
  zonnig: "Zonnige dag",
  wolken: "Wolkendag",
  mist: "Mistige dag",
  wind: "Winderige dag",
  regen: "Regenachtige dag",
};

export type UitkomstTekst = {
  kop: string;
  duiding: string;
  tip: string;
};

export const UITKOMSTEN: Record<WeatherCode, UitkomstTekst> = {
  zonnig: {
    kop: "Vandaag voelt het licht.",
    duiding: "Geniet ervan, zonder dat het iets moet opleveren.",
    tip: "Neem een moment om stil te staan bij wat vandaag goed voelt.",
  },
  wolken: {
    kop: "Een dag met wolken mag er zijn.",
    duiding: "Wolken drijven over, in hun eigen tempo.",
    tip: "Doe vandaag iets kleins waar je rustig van wordt.",
  },
  mist: {
    kop: "Even niet alles scherp zien is oké.",
    duiding: "In de mist loop je stap voor stap, en dat is genoeg.",
    tip: "Doe vandaag één ding tegelijk.",
  },
  wind: {
    kop: "Er staat vandaag wat wind.",
    duiding: "Tegenwind zegt niets over de richting die je op gaat.",
    tip: "Neem vandaag een korte adempauze op een rustig moment.",
  },
  regen: {
    kop: "Een regenachtige dag mag er zijn.",
    duiding: "Regen hoeft niet opgelost, hij trekt voorbij.",
    tip: "Wees vandaag zacht voor jezelf.",
  },
};
