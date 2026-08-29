// De ene kaartvorm van het design system, herkleurd per toon.
// Specificatie: packages/ui/reference/components/cards/Card.jsx
//
// Toon volgt betekenis, geen decoratie: white = check-in, primary = collectief,
// purple = quote, sun = Hulplijn, coral = content, outline = formulier-achtig
// (invoervelden, zoekbalk). Een nieuwe toon heeft een reden nodig.
//
// De tonen komen uit de primitieve laag omdat de semantische laag er nog geen
// namen voor heeft, zie packages/ui/README.md: die rol krijgen ze pas als dat
// met z'n drieen is afgesproken.
//
// Sinds 29 augustus 2026 (designaudit): radius lg (24) in plaats van md, en
// de witte toon heeft een rand. Wit op het crème vel is met het oog niet te
// zien, en een schaduwtoken bestaat nog niet; de rand is de enige manier om
// een kaart van het vel los te maken. Indrukken schaalt licht (PressableScale).

import { View, type StyleProp, type ViewStyle } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { PressableScale } from "./PressableScale.tsx";

export type CardTone = "white" | "primary" | "purple" | "sun" | "coral" | "outline";

export const TONEN: Record<CardTone, ViewStyle> = {
  white: { backgroundColor: colors.surfaceCard, borderWidth: 1, borderColor: colors.borderDefault },
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
