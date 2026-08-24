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

import { Pressable, View, type StyleProp, type ViewStyle } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

export type CardTone = "white" | "primary" | "purple" | "sun" | "coral" | "outline";

const TONEN: Record<CardTone, ViewStyle> = {
  white: { backgroundColor: colors.surfaceCard },
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
  borderRadius: radius.md,
  paddingVertical: 18,
  paddingHorizontal: space[5],
  gap: space[2],
};

export function Card({ tone = "white", children, onPress, style }: CardProps) {
  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [BASIS, TONEN[tone], { opacity: pressed ? 0.7 : 1 }, style]}
      >
        {children}
      </Pressable>
    );
  }
  return <View style={[BASIS, TONEN[tone], style]}>{children}</View>;
}
