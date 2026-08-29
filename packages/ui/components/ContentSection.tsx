// Sectieritme: elke verzameling krijgt een kop (serif-titel, optionele duiding,
// optionele tekstactie rechts) en daaronder een shelf OF een grid, nooit
// allebei. Zie HERKOMST.md schermregel 5 en 6.
//
// De shelf bloedt door tot de rand van het vel: de negatieve marge is gelijk
// aan de velvulling (20), zodat de volgende kaart aan de rand piept.

import { ScrollView, View, type StyleProp, type ViewStyle } from "react-native";

import { colors, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { TONEN, type CardTone } from "./Card.tsx";
import { PressableScale } from "./PressableScale.tsx";

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
          <PressableScale accessibilityRole="button" onPress={onAction} schaal={0.96} style={{ flexShrink: 0 }}>
            <AppText rol="labelButton" kleur="brand">{action}</AppText>
          </PressableScale>
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
      {label ? <AppText rol="labelOverline" kleur="brand">{label}</AppText> : null}
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
      borderRadius: radius.lg,
      paddingVertical: 18,
      paddingHorizontal: space[5],
      gap: 6,
      justifyContent: "flex-end",
    },
    TONEN[tone],
  ];
  if (onPress) {
    return (
      <PressableScale accessibilityRole="button" onPress={onPress} style={basis}>
        {inhoud}
      </PressableScale>
    );
  }
  return <View style={basis}>{inhoud}</View>;
}
