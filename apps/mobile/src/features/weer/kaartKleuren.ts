// De weertint per weerbeeld, voor de provincies op de kaart van Nederland.
// Genoemd naar het weer en nooit naar een waardering (kitchen sink,
// Weertinten). Eén bron voor Home en de pagina van het mentale weer.
//
// Sinds 17 september 2026 dezelfde kleurfamilie als de was op de hero van de
// check-in (HERO_WAS in packages/ui/components/achtergronden.ts): geel bij
// zon, grijsblauw bij wolken, bleek bij mist, fris limoen bij wind, dieper
// blauw bij regen. Wind was paars en regen zo donker dat het inkt-icoon
// erop wegviel; nu herken je op de kaart het weer van je eigen check-in, en
// is elke tint licht genoeg voor het icoon.

import { palette } from "@mind/ui";

import type { WeatherCode } from "@mind/types";

export const KAARTKLEUR: Record<WeatherCode, string> = {
  zonnig: palette.yellow400,
  wolken: palette.primary100,
  mist: palette.neutral200,
  wind: palette.lime200,
  regen: palette.primary400,
};

// De lichte variant van dezelfde tinten, voor een groot vlak met tekst erop:
// de kaart "Jouw weer vandaag" op Home. Eén stap lichter in dezelfde
// kleurfamilie, zodat de overline en het bijschrift leesbaar blijven, ook bij
// regen (Stijn, 17 september 2026: de kaart van jouw weer moet de toon zetten).
export const WEERTINT_LICHT: Record<WeatherCode, string> = {
  zonnig: palette.yellow200,
  wolken: palette.primary50,
  mist: palette.neutral100,
  wind: palette.lime100,
  regen: palette.primary200,
};
