// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: packages/ui/tokens/*.css. Opnieuw genereren met:
//   node packages/ui/tokens/generate.mjs
//
// Zie packages/ui/README.md voor wat elke laag betekent en wat React Native
// wel en niet met deze waarden kan.

/** De primitieve laag: rauwe waarden. Componentcode gebruikt deze NIET. */
export const palette = {
  baseCream: "rgb(254,254,244)",
  baseInk: "rgb(22,22,21)",
  primary50: "rgb(235,243,246)",
  primary100: "rgb(193,217,226)",
  primary200: "rgb(163,198,212)",
  primary300: "rgb(120,172,192)",
  primary400: "rgb(94,156,180)",
  primary500: "rgb(54,131,161)",
  primary600: "rgb(49,119,147)",
  primary700: "rgb(38,93,114)",
  primary800: "rgb(30,72,89)",
  primary900: "rgb(23,55,68)",
  neutral0: "rgb(255,255,255)",
  neutral50: "rgb(246,248,250)",
  neutral100: "rgb(237,241,245)",
  sliderTrackBase: "rgb(235,239,241)",
  neutral200: "rgb(221,228,235)",
  neutral300: "rgb(196,205,214)",
  neutral400: "rgb(155,166,178)",
  neutral500: "rgb(108,120,131)",
  neutral600: "rgb(78,89,102)",
  neutral700: "rgb(55,64,73)",
  neutral800: "rgb(35,42,49)",
  neutral900: "rgb(18,22,26)",
  coral50: "rgb(254,246,244)",
  coral100: "rgb(251,226,219)",
  coral200: "rgb(249,211,202)",
  coral300: "rgb(246,191,178)",
  coral400: "rgb(244,179,163)",
  coral500: "rgb(241,160,140)",
  coral600: "rgb(219,146,127)",
  coral700: "rgb(171,114,99)",
  coral800: "rgb(133,88,77)",
  coral900: "rgb(101,67,59)",
  purple50: "rgb(242,239,243)",
  purple100: "rgb(213,205,217)",
  purple200: "rgb(193,180,198)",
  purple300: "rgb(165,146,172)",
  purple400: "rgb(148,125,156)",
  purple500: "rgb(121,93,131)",
  accentLime: "rgb(207,230,52)",
  accentCoral: "rgb(241,160,140)",
  accentYellow: "rgb(254,225,149)",
  accentMagenta: "rgb(242,155,255)",
  accentPurple: "rgb(121,93,131)",
  weatherSun: "rgb(254,225,149)",
  weatherCloud: "rgb(163,198,212)",
  weatherRain: "rgb(54,131,161)",
  weatherStorm: "rgb(23,55,68)",
  weatherMist: "rgb(196,205,214)",
  feedbackSuccess: "rgb(63,169,123)",
  feedbackWarning: "rgb(229,169,60)",
  feedbackError: "rgb(181,87,87)",
} as const;

/** De semantische laag: dit is wat componentcode gebruikt. */
export const colors = {
  surfaceBackground: "rgb(254,254,244)",
  surfaceCard: "rgb(255,255,255)",
  textPrimary: "rgb(22,22,21)",
  textSecondary: "rgb(78,89,102)",
  textOnprimary: "rgb(255,255,255)",
  borderDefault: "rgb(221,228,235)",
  brandDefault: "rgb(38,93,114)",
  brandPressed: "rgb(30,72,89)",
  brandSubtle: "rgb(235,243,246)",
  ctaDefault: "rgb(207,230,52)",
  ctaText: "rgb(22,22,21)",
} as const;

/** Fontnamen zoals ze in Expo geladen moeten worden. */
export const fonts = {
  display: "Averia Serif Libre",
  displayAlt: "Averia Libre",
  body: "Open Sans",
  ui: "Inter",
} as const;

/** Volledige CSS-stack per familie, voor de webapp. React Native negeert dit. */
export const fontStacks = {
  display: "\"Averia Serif Libre\",ui-serif,Georgia,\"Times New Roman\",serif",
  displayAlt: "\"Averia Libre\",ui-serif,Georgia,serif",
  body: "\"Open Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif",
  ui: "\"Inter\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif",
} as const;

/**
 * De snitten die geladen moeten zijn voordat er iets getekend wordt.
 * De naam is precies de sleutel waaronder expo-font hem registreert, en dus
 * precies wat `type` als fontFamily gebruikt. De bestanden staan in
 * packages/ui/assets/fonts.
 */
export const fontFaces = [
  "AveriaLibre-LightItalic",
  "AveriaSerifLibre-Italic",
  "AveriaSerifLibre-Regular",
  "OpenSans-Regular",
  "OpenSans-SemiBold",
] as const;

/**
 * De typeschaal, klaar voor een React Native Text.
 *
 * Let op: hier staat bewust GEEN fontWeight en GEEN fontStyle. De snit in
 * fontFamily draagt die al. Zet je ze er alsnog bij, dan maakt Android er een
 * nagemaakte vetdruk of schuinstand bovenop, en dan klopt het beeld niet meer
 * met het ontwerp.
 *
 * letterSpacing staat in punten, al omgerekend uit de em-waarde in de CSS.
 */
export const type = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: "AveriaSerifLibre-Regular",
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "AveriaSerifLibre-Regular",
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "AveriaSerifLibre-Regular",
  },
  display: {
    fontSize: 44,
    lineHeight: 48,
    fontFamily: "AveriaSerifLibre-Regular",
  },
  accentH2Italic: {
    fontSize: 24,
    lineHeight: 30,
  },
  quote: {
    fontSize: 21,
    lineHeight: 28,
    fontFamily: "AveriaSerifLibre-Italic",
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "AveriaLibre-LightItalic",
  },
  bodyEmphasis: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "OpenSans-SemiBold",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "OpenSans-Regular",
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "OpenSans-Regular",
  },
  labelButton: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "OpenSans-SemiBold",
  },
  labelCaption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "OpenSans-SemiBold",
  },
  labelOverline: {
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.66,
    fontFamily: "OpenSans-SemiBold",
  },
} as const;

/** De 4px-schaal. Alles wat ertussen zit is een fout, geen keuze. */
export const space = {
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 20,
  "6": 24,
  "8": 32,
  "10": 40,
  "12": 48,
} as const;

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  pill: 999,
  xl: 28,
} as const;

/** CSS-schaduwen. Het zijn inset-randen: in RN worden dit borderWidth/borderColor. */
export const shadow = {
  card: "inset 0 0 0 1px rgba(0,0,0,0.08)",
  cardBorder: "inset 0 0 0 1px var(--border-default)",
} as const;

export type ColorToken = keyof typeof colors;
export type TypeToken = keyof typeof type;
export type SpaceToken = keyof typeof space;
export type RadiusToken = keyof typeof radius;
