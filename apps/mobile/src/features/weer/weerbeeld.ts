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
//
// Alle vier de schuiven lopen dezelfde kant op (Stijn, 17 september 2026):
// links het zware weer, rechts het lichte. Tot die dag liepen wind en
// wisselvallig andersom, en dat las bij het schuiven als een fout.

import type { WeatherCode } from "@mind/types";

export type SliderWaarden = {
  /** 0 = guur, 100 = lekker zacht */
  temperatuur: number;
  /** 0 = wind tegen, 100 = wind mee */
  wind: number;
  /** 0 = dichte mist, 100 = helder zicht */
  zicht: number;
  /** 0 = heel wisselvallig, 100 = rustig */
  wisselvallig: number;
};

export function bepaalWeerbeeld(w: SliderWaarden): WeatherCode {
  const signalen: Record<WeatherCode, number> = {
    mist: 100 - w.zicht,
    wind: 100 - w.wind,
    regen: 100 - w.temperatuur,
    wolken: 100 - w.wisselvallig,
    zonnig: (w.temperatuur + w.wind + w.zicht + w.wisselvallig) / 4 - 40,
  };
  let beste: WeatherCode = "zonnig";
  for (const code of Object.keys(signalen) as WeatherCode[]) {
    if (signalen[code] > signalen[beste]) beste = code;
  }
  return beste;
}
