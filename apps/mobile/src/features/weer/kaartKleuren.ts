// De weertint per weerbeeld, voor de provincies op de kaart van Nederland.
// Genoemd naar het weer en nooit naar een waardering (kitchen sink,
// Weertinten). Eén bron voor Home en de pagina van het mentale weer.

import { palette } from "@mind/ui";

import type { WeatherCode } from "@mind/types";

export const KAARTKLEUR: Record<WeatherCode, string> = {
  zonnig: palette.weatherSun,
  wolken: palette.weatherCloud,
  mist: palette.weatherMist,
  wind: palette.purple200,
  regen: palette.weatherRain,
};
