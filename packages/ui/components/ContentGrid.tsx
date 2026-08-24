// Het grid voor eindige verzamelingen: twee gelijke kolommen, gutter 12, een
// blok is een kolom of een volledige rij. Geen mozaiek, geen carrousel.
// Specificatie: packages/ui/reference/components/grid/ContentGrid.jsx

import { Pressable, View, type StyleProp, type ViewStyle } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import type { CardTone } from "./Card.tsx";

export function ContentGrid({ children }: { children?: React.ReactNode }) {
  return <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[3] }}>{children}</View>;
}

const TONEN: Record<CardTone, ViewStyle> = {
  white: { backgroundColor: colors.surfaceCard },
  primary: { backgroundColor: palette.primary50 },
  purple: { backgroundColor: palette.purple50 },
  sun: { backgroundColor: palette.weatherSun },
  coral: { backgroundColor: palette.coral50 },
  outline: { backgroundColor: colors.surfaceCard, borderWidth: 1, borderColor: colors.borderDefault },
};

export type ContentCardProps = {
  full?: boolean;
  tone?: CardTone;
  label?: string;
  title?: string;
  onPress?: () => void;
  children?: React.ReactNode;
};

export function ContentCard({ full = false, tone = "white", label, title, onPress, children }: ContentCardProps) {
  const inhoud = (
    <>
      {label ? <AppText rol="labelOverline" kleur="secondary">{label}</AppText> : null}
      {title ? <AppText rol="h3">{title}</AppText> : null}
      {children}
    </>
  );
  // 18 en 6 zijn bewuste maten: kaartvulling 18/20 met interne gap 6, HERKOMST.md schermregel 4.
  const basis: StyleProp<ViewStyle> = [
    {
      borderRadius: radius.md,
      paddingVertical: 18,
      paddingHorizontal: space[5],
      gap: 6,
      minHeight: 120,
    },
    full ? { width: "100%" as const } : { flexGrow: 1, flexBasis: "45%" as const },
    TONEN[tone],
  ];
  if (onPress) {
    return (
      <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [basis, { opacity: pressed ? 0.7 : 1 }]}>
        {inhoud}
      </Pressable>
    );
  }
  return <View style={basis}>{inhoud}</View>;
}
