// De ene kaartvorm van het design system, herkleurd per toon.
// Specificatie: packages/ui/reference/components/cards/Card.jsx
//
// Toon volgt betekenis, geen decoratie: white = de rustige basiskaart (zand),
// primary = collectief, purple = quote, sun = Hulplijn en uitgelicht, coral =
// content, outline = formulier-achtig (invoervelden, zoekbalk). Een nieuwe
// toon heeft een reden nodig.
//
// De tonen komen uit de primitieve laag omdat de semantische laag er nog geen
// namen voor heeft, zie packages/ui/README.md: die rol krijgen ze pas als dat
// met z'n drieen is afgesproken.
//
// Sinds 29 augustus 2026 (designaudit): radius lg (24) in plaats van md.
// Indrukken schaalt licht (PressableScale).
//
// Sinds 10 september 2026 (Stijn): de "white"-toon is niet meer wit met een
// rand maar warm zand (yellow100) zonder rand. Wit op het crème vel was met
// het oog niet te zien en de rand die dat oploste maakte van elke kaart een
// invulvak; het zand hoort bij het vel en laat de kaart toch los staan. De
// naam "white" blijft om de twintig aanroepen niet te hoeven aanraken. Alleen
// "outline" houdt de rand, want dat is een echt invoerveld.

import { View, type StyleProp, type ViewStyle } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { PressableScale } from "./PressableScale.tsx";

export type CardTone = "white" | "primary" | "purple" | "sun" | "coral" | "outline";

export const TONEN: Record<CardTone, ViewStyle> = {
  white: { backgroundColor: palette.yellow100 },
  primary: { backgroundColor: palette.primary50 },
  purple: { backgroundColor: palette.purple50 },
  sun: { backgroundColor: palette.weatherSun },
  coral: { backgroundColor: palette.coral50 },
  outline: { backgroundColor: colors.surfaceCard, borderWidth: 1, borderColor: colors.borderDefault },
};

export type CardProps = {
  tone?: CardTone;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

// 18 is een bewuste maat: kaartvulling 18/20, HERKOMST.md schermregel 4.
const BASIS: ViewStyle = {
  borderRadius: radius.lg,
  paddingVertical: 18,
  paddingHorizontal: space[5],
  gap: space[2],
};

export function Card({ tone = "white", children, onPress, style }: CardProps) {
  if (onPress) {
    return (
      <PressableScale accessibilityRole="button" onPress={onPress} style={[BASIS, TONEN[tone], style]}>
        {children}
      </PressableScale>
    );
  }
  return <View style={[BASIS, TONEN[tone], style]}>{children}</View>;
}
