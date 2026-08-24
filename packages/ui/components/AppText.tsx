// De tekstcomponent van het design system.
//
// Waarom dit bestaat en niet een kale <Text>: Android zet standaard extra
// ruimte boven en onder tekst (includeFontPadding). Zonder deze component
// staat elke regel een paar punten lager dan in het ontwerp, zie
// docs/van-ontwerp-naar-app.md deel 4. De rol komt altijd als geheel uit de
// typeschaal; nooit een los fontgewicht erbovenop.

import { Text, type TextProps } from "react-native";

import { colors, type } from "../tokens/tokens.ts";

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

export function AppText({ rol = "body", kleur = "primary", centreer = false, style, ...rest }: AppTextProps) {
  return (
    <Text
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
    />
  );
}
