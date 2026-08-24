// Sectieritme: elke verzameling krijgt een kop (serif-titel, optionele duiding,
// optionele tekstactie rechts) en daaronder een shelf OF een grid, nooit
// allebei. Zie HERKOMST.md schermregel 5 en 6.
//
// De shelf bloedt door tot de rand van het vel: de negatieve marge is gelijk
// aan de velvulling (20), zodat de volgende kaart aan de rand piept.

import { ScrollView, View, Pressable, type StyleProp, type ViewStyle } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import type { CardTone } from "./Card.tsx";

export type ContentSectionProps = {
  title: string;
  note?: string;
  action?: string;
  onAction?: () => void;
  children?: React.ReactNode;
};

export function ContentSection({ title, note, action, onAction, children }: ContentSectionProps) {
  return (
    <View style={{ gap: space[3] }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: space[3] }}>
        {/* gap 2 volgt de referentie (ContentSection.jsx: titel en duiding 2 uit elkaar) */}
        <View style={{ flexShrink: 1, gap: 2 }}>
          <AppText rol="h3">{title}</AppText>
          {note ? <AppText rol="bodySmall" kleur="secondary">{note}</AppText> : null}
        </View>
        {action ? (
          <Pressable accessibilityRole="button" onPress={onAction} style={({ pressed }) => ({ flexShrink: 0, opacity: pressed ? 0.7 : 1 })}>
            <AppText rol="labelButton" kleur="brand">{action}</AppText>
          </Pressable>
        ) : null}
      </View>
      {children}
    </View>
  );
}

export type ContentShelfProps = {
  /** Gelijk aan de velvulling, zodat de shelf tot de rand doorloopt. */
  bleed?: number;
  children?: React.ReactNode;
};

export function ContentShelf({ bleed = space[5], children }: ContentShelfProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: -bleed }}
      contentContainerStyle={{ paddingHorizontal: bleed, gap: space[3] }}
    >
      {children}
    </ScrollView>
  );
}

const TONEN: Record<CardTone, ViewStyle> = {
  white: { backgroundColor: colors.surfaceCard },
  primary: { backgroundColor: palette.primary50 },
  purple: { backgroundColor: palette.purple50 },
  sun: { backgroundColor: palette.weatherSun },
  coral: { backgroundColor: palette.coral50 },
  outline: { backgroundColor: colors.surfaceCard, borderWidth: 1, borderColor: colors.borderDefault },
};

export type ShelfCardProps = {
  tone?: CardTone;
  label?: string;
  title?: string;
  meta?: string;
  onPress?: () => void;
  children?: React.ReactNode;
};

export function ShelfCard({ tone = "white", label, title, meta, onPress, children }: ShelfCardProps) {
  const inhoud = (
    <>
      {label ? <AppText rol="labelOverline" kleur="secondary">{label}</AppText> : null}
      {title ? <AppText rol="h3">{title}</AppText> : null}
      {meta ? <AppText rol="bodySmall" kleur="secondary">{meta}</AppText> : null}
      {children}
    </>
  );
  // 18 en 6 zijn bewuste maten: kaartvulling 18/20 met interne gap 6, HERKOMST.md schermregel 4.
  const basis: StyleProp<ViewStyle> = [
    {
      width: 172,
      minHeight: 152,
      borderRadius: radius.md,
      paddingVertical: 18,
      paddingHorizontal: space[5],
      gap: 6,
      justifyContent: "flex-end",
    },
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
