// De tekstcomponent van het design system.
//
// Waarom dit bestaat en niet een kale <Text>: Android zet standaard extra
// ruimte boven en onder tekst (includeFontPadding). Zonder deze component
// staat elke regel een paar punten lager dan in het ontwerp, zie
// docs/van-ontwerp-naar-app.md deel 4. De rol komt altijd als geheel uit de
// typeschaal; nooit een los fontgewicht erbovenop.

import { Text, type TextProps } from "react-native";

import { colors, type } from "../tokens/tokens.ts";

import { afbreken } from "./afbreken.ts";

type Rol = keyof typeof type;

type Kleur = "primary" | "secondary" | "onprimary" | "brand" | "cta";

const KLEUREN: Record<Kleur, string> = {
  primary: colors.textPrimary,
  secondary: colors.textSecondary,
  onprimary: colors.textOnprimary,
  brand: colors.brandDefault,
  cta: colors.ctaText,
};

export type AppTextProps = TextProps & {
  rol?: Rol;
  kleur?: Kleur;
  centreer?: boolean;
};

// Koppen staan vaak op een smalle kaart en breken dan midden in een woord;
// zie afbreken.ts. Lopende tekst heeft de ruimte en breekt op spaties.
const KOPROLLEN: ReadonlySet<Rol> = new Set<Rol>(["h1", "h2", "h3"]);

// Hoe ver een rol meegroeit met de systeemletter. iOS gaat tot ruim drie keer
// zo groot. Lopende tekst mag verdubbelen: dat is waar iemand de grote letter
// voor aanzet. Een kop is al groot; drie keer zo groot vult hij het hele
// scherm en breekt hij midden in een woord (gezien op 18 september 2026 met
// de grootste letter: "Goedemiddag" nam drie regels en het vel was weg).
// Koppen groeien daarom tot ongeveer 40 punten en niet verder. Een scherm dat
// het anders wil, geeft zelf maxFontSizeMultiplier mee.
const PLAFOND: Record<Rol, number> = {
  display: 1.1,
  h1: 1.3,
  h2: 1.5,
  h3: 1.6,
  accentH2Italic: 1.5,
  quote: 1.6,
  subtitle: 1.6,
  bodyEmphasis: 2,
  body: 2,
  bodySmall: 2,
  labelButton: 2,
  labelCaption: 2,
  labelOverline: 2,
};

export function AppText({ rol = "body", kleur = "primary", centreer = false, style, children, ...rest }: AppTextProps) {
  return (
    <Text
      // Een kop is voor de schermlezer ook een kop: met de rotor van VoiceOver
      // en de navigatie van TalkBack spring je dan van kop naar kop. Een scherm
      // dat iets anders wil, geeft zelf een accessibilityRole mee.
      accessibilityRole={KOPROLLEN.has(rol) ? "header" : undefined}
      maxFontSizeMultiplier={PLAFOND[rol]}
      {...rest}
      style={[
        type[rol],
        {
          color: KLEUREN[kleur],
          includeFontPadding: false,
          ...(centreer ? { textAlign: "center" as const } : null),
        },
        style,
      ]}
    >
      {typeof children === "string" && KOPROLLEN.has(rol) ? afbreken(children) : children}
    </Text>
  );
}
