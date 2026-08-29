// De teksten van de check-in en de uitkomst.
//
// De vraagteksten en labelparen liggen woordelijk vast in HERKOMST.md onder
// "Canonical check-in copy": niet parafraseren. De uitkomstteksten voor "mist"
// staan letterlijk in het prototype; de andere vier zijn in dezelfde toon
// geschreven en zijn een VOORSTEL totdat ze in scope.md zijn bevestigd.
// Regels: geen oordeel, geen score, geen goed of slecht weer (productprincipes
// 2 en 3), een tip is zacht en klein.

import type { WeatherCode } from "@mind/types";

import type { SliderWaarden } from "./weerbeeld.ts";

export const CHECKIN_STAPPEN: {
  key: keyof SliderWaarden;
  vraag: string;
  links: string;
  rechts: string;
}[] = [
  { key: "temperatuur", vraag: "Hoe is het weer in je hoofd?", links: "Guur", rechts: "Lekker zacht" },
  { key: "wind", vraag: "Hoeveel wind staat er vandaag?", links: "Wind mee", rechts: "Wind tegen" },
  { key: "zicht", vraag: "Hoe ver kun je kijken?", links: "Dichte mist", rechts: "Helder zicht" },
  { key: "wisselvallig", vraag: "Hoe wisselvallig is je weer vandaag?", links: "Rustig", rechts: "Heel wisselvallig" },
];

export const GERUSTSTELLING = "Geen goed of fout. Kies wat nu het dichtst in de buurt komt.";

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
