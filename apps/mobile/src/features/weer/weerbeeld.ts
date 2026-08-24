// Van vier sliderwaarden naar een van de vijf weerbeelden.
//
// VOORLOPIG: welke combinatie tot welk weerbeeld leidt is een open punt in
// docs/datamodel.md ("nog te besluiten door de drie"). Dit is de afgesproken
// tussenstap van 20 augustus 2026 ("de vertaling schrijven we onderweg",
// docs/van-ontwerp-naar-app.md): een klein, leesbaar scriptje op het toestel.
// De sliderwaarden zelf verlaten het toestel nooit.
//
// Het idee: elke dimensie stemt op het weerbeeld dat er het meest bij past,
// en het sterkste signaal wint. Alle vier mild: zonnig.

import type { WeatherCode } from "@mind/types";

export type SliderWaarden = {
  /** 0 = guur, 100 = lekker zacht */
  temperatuur: number;
  /** 0 = wind mee, 100 = wind tegen */
  wind: number;
  /** 0 = dichte mist, 100 = helder zicht */
  zicht: number;
  /** 0 = rustig, 100 = heel wisselvallig */
  wisselvallig: number;
};

export function bepaalWeerbeeld(w: SliderWaarden): WeatherCode {
  const signalen: Record<WeatherCode, number> = {
    mist: 100 - w.zicht,
    wind: w.wind,
    regen: 100 - w.temperatuur,
    wolken: w.wisselvallig,
    zonnig: (w.temperatuur + (100 - w.wind) + w.zicht + (100 - w.wisselvallig)) / 4 - 40,
  };
  let beste: WeatherCode = "zonnig";
  for (const code of Object.keys(signalen) as WeatherCode[]) {
    if (signalen[code] > signalen[beste]) beste = code;
  }
  return beste;
}
