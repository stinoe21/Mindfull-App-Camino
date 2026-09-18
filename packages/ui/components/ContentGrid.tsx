// Het grid voor eindige verzamelingen: twee gelijke kolommen, gutter 12, een
// blok is een kolom of een volledige rij. Geen mozaiek, geen carrousel.
// Specificatie: packages/ui/reference/components/grid/ContentGrid.jsx

import { View, type StyleProp, type ViewStyle } from "react-native";

import { radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { TONEN, type CardTone } from "./Card.tsx";
import { PressableScale } from "./PressableScale.tsx";

export function ContentGrid({ children }: { children?: React.ReactNode }) {
  return <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[3] }}>{children}</View>;
}


export type ContentCardProps = {
  full?: boolean;
  tone?: CardTone;
  label?: string;
  title?: string;
  /** Een eigen achtergrondkleur uit het palet, bijvoorbeeld de kleur van het onderwerp (kaartKleurVoor); gaat voor tone. */
  kleur?: string;
  onPress?: () => void;
  /**
   * Een beeld bij de kaart, bijvoorbeeld de vlieger van het onderwerp. Op een
   * brede kaart staat het rechts naast de tekst, op een halve kaart rechtsonder.
   * Tot 17 september 2026 zette elk scherm de vlieger zelf absoluut neer met
   * een lege View als ruimte, en daardoor was de brede kaart voor de helft leeg
   * (Stijn: de overzichten "kunnen nog veel werk gebruiken").
   */
  beeld?: React.ReactNode;
  children?: React.ReactNode;
};

// De interne gap van een kaart: 6, een bewuste maat uit HERKOMST.md schermregel 4.
const KAART_GAP = 6;

export function ContentCard({ full = false, tone = "white", label, title, kleur, onPress, beeld, children }: ContentCardProps) {
  const tekst = (
    <>
      {label ? <AppText rol="labelOverline" kleur="brand">{label}</AppText> : null}
      {title ? <AppText rol="h3">{title}</AppText> : null}
      {children}
    </>
  );
  const inhoud = !beeld ? (
    tekst
  ) : full ? (
    <View style={{ flexDirection: "row", alignItems: "flex-end", gap: space[3] }}>
      <View style={{ flex: 1, gap: KAART_GAP }}>{tekst}</View>
      {beeld}
    </View>
  ) : (
    <>
      <View style={{ gap: KAART_GAP }}>{tekst}</View>
      <View style={{ alignSelf: "flex-end", marginTop: "auto" }}>{beeld}</View>
    </>
  );
  // 18 en 6 zijn bewuste maten: kaartvulling 18/20 met interne gap 6, HERKOMST.md schermregel 4.
  const basis: StyleProp<ViewStyle> = [
    {
      borderRadius: radius.lg,
      paddingVertical: 18,
      paddingHorizontal: space[5],
      gap: 6,
      minHeight: 120,
    },
    full ? { width: "100%" as const } : { flexGrow: 1, flexBasis: "45%" as const },
    TONEN[tone],
    kleur ? { backgroundColor: kleur } : null,
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
