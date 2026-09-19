// De vijf weerbeelden, in de volgorde van weather_type (docs/datamodel.md).

export const WEER = [
  { code: "zonnig", naam: "Zonnig" },
  { code: "wolken", naam: "Wolken" },
  { code: "mist", naam: "Mist" },
  { code: "wind", naam: "Wind" },
  { code: "regen", naam: "Regen" },
] as const;

export type WeerCode = (typeof WEER)[number]["code"];
