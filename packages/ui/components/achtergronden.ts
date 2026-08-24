// De zes hero-achtergronden, gekoppeld aan hun weerstaat. De koppeling volgt
// packages/ui/reference/components/fig-assets.css en de databasecodes uit
// docs/datamodel.md. "default" is de neutrale band voor standaardschermen.

export type WeerStaat = "default" | "zonnig" | "wolken" | "mist" | "wind" | "regen";

export const HERO_BRONNEN: Record<WeerStaat, number> = {
  default: require("../assets/backgrounds/hero-default.webp"),
  zonnig: require("../assets/backgrounds/hero-zonnig.webp"),
  wolken: require("../assets/backgrounds/hero-wolken.webp"),
  mist: require("../assets/backgrounds/hero-mist.webp"),
  wind: require("../assets/backgrounds/hero-wind.webp"),
  regen: require("../assets/backgrounds/hero-regen.webp"),
};
