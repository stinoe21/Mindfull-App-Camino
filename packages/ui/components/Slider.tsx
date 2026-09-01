// De check-in-slider: een gelabelde schuif tussen twee tegenpolen.
// Specificatie: packages/ui/reference/components/inputs/Slider.jsx en
// HERKOMST.md, Canonical check-in copy.
//
// Altijd lime op een licht neutraal spoor, nooit rood/groen: de twee uiteinden
// zijn niet goed/slecht, alleen verschillend (productprincipes 3).
//
// Kaart 150 hoog, vulling 20/20/18, spoor 4 hoog, duim 20 met inktring 1,5.

import { useRef, useState } from "react";
import { PanResponder, View } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

const DUIM = 20;

export type SliderProps = {
  /** 0 tot 100. */
  value: number;
  onChange: (waarde: number) => void;
  leftLabel: string;
  rightLabel: string;
  hint?: string;
};

export function Slider({ value, onChange, leftLabel, rightLabel, hint = "Schuif naar wat vandaag het best past." }: SliderProps) {
  const [breedte, zetBreedte] = useState(0);
  const breedteRef = useRef(0);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const naarWaarde = (x: number) => {
    const b = breedteRef.current;
    if (b <= DUIM) return 50;
    const pct = ((x - DUIM / 2) / (b - DUIM)) * 100;
    return Math.round(Math.min(100, Math.max(0, pct)));
  };

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => onChangeRef.current(naarWaarde(e.nativeEvent.locationX)),
      onPanResponderMove: (e) => onChangeRef.current(naarWaarde(e.nativeEvent.locationX)),
    })
  ).current;

  const vulBreedte = breedte > DUIM ? DUIM / 2 + ((breedte - DUIM) * value) / 100 : 0;
  const duimLinks = breedte > DUIM ? ((breedte - DUIM) * value) / 100 : 0;

  return (
    <View
      style={{
        minHeight: 150,
        borderRadius: radius.md,
        backgroundColor: colors.surfaceCard,
        borderWidth: 1,
        borderColor: colors.borderDefault,
        paddingTop: space[5],
        paddingHorizontal: space[5],
        // 20/20/18 en gap 10 volgen de slider-spec, HERKOMST.md Canonical check-in copy.
        paddingBottom: 18,
        gap: space[4],
        justifyContent: "center",
      }}
    >
      {hint ? <AppText rol="bodySmall" kleur="secondary">{hint}</AppText> : null}
      {/* gap 10 volgt de referentie (Slider.jsx) */}
      <View style={{ gap: 10 }}>
        <View
          {...responder.panHandlers}
          onLayout={(e) => {
            breedteRef.current = e.nativeEvent.layout.width;
            zetBreedte(e.nativeEvent.layout.width);
          }}
          accessible
          accessibilityRole="adjustable"
          accessibilityLabel={leftLabel + " tot " + rightLabel}
          accessibilityValue={{ min: 0, max: 100, now: value }}
          // Extra hoogte als raakvlak; het getekende spoor blijft 4.
          style={{ height: 32, justifyContent: "center" }}
        >
          <View style={{ position: "absolute", left: 0, right: 0, height: 4, borderRadius: radius.pill, backgroundColor: palette.sliderTrackBase }} />
          <View style={{ position: "absolute", left: 0, width: vulBreedte, height: 4, borderRadius: radius.pill, backgroundColor: colors.ctaDefault }} />
          <View
            style={{
              position: "absolute",
              left: duimLinks,
              width: DUIM,
              height: DUIM,
              borderRadius: radius.pill,
              backgroundColor: colors.ctaDefault,
              borderWidth: 1.5,
              borderColor: colors.textPrimary,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText rol="labelCaption" kleur="secondary">{leftLabel}</AppText>
          <AppText rol="labelCaption" kleur="secondary">{rightLabel}</AppText>
        </View>
      </View>
    </View>
  );
}
