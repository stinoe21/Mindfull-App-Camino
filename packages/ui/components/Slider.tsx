// De check-in-slider: een gelabelde schuif tussen twee tegenpolen.
// Specificatie: packages/ui/reference/components/inputs/Slider.jsx en
// HERKOMST.md, Canonical check-in copy.
//
// Altijd lime op een licht neutraal spoor, nooit rood/groen: de twee uiteinden
// zijn niet goed/slecht, alleen verschillend (productprincipes 3).
//
// De witte kaart eromheen uit de referentie (Slider.jsx, 150 hoog) is bewust
// vervallen, besluit Stijn 10 september 2026: een invulvak leest als
// vragenlijst, en dat is precies wat de check-in niet wil zijn. De slider
// staat los op het vel.
//
// Sinds 17 september 2026 (Stijn: "het design van de vragenlijst mag echt
// veel beter, dynamischer") is de schuif groter dan de referentie (spoor 4,
// duim 20): het is de enige handeling op het scherm, dus hij mag voelen als
// iets dat je vastpakt. Spoor 8, duim 32 met dezelfde inktring, de duim veert
// op zolang je hem vasthoudt, en het label van de kant waar je naartoe
// schuift wordt sterker terwijl het andere terugwijkt.

import { useEffect, useRef, useState } from "react";
import { Animated, PanResponder, View } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { useMinderBeweging } from "./minderBeweging.ts";

const DUIM = space[8];
const SPOOR = space[2];
// Het raakvlak is hoger dan de duim, zodat je er niet precies op hoeft te mikken.
const RAAKVLAK = space[12];
/** Hoe ver het label van de andere kant terugwijkt. */
const LABEL_ZWAK = 0.45;

export type SliderProps = {
  /** 0 tot 100. */
  value: number;
  onChange: (waarde: number) => void;
  leftLabel: string;
  rightLabel: string;
  /**
   * Zodra iemand de duim vastpakt (true) en weer loslaat (false). Het scherm
   * zet daarmee het scrollen van het vel uit: een ScrollView van iOS luistert
   * niet naar de PanResponder en schoof anders mee onder je vinger.
   */
  onGreep?: (vast: boolean) => void;
};

export function Slider({ value, onChange, leftLabel, rightLabel, onGreep }: SliderProps) {
  const [breedte, zetBreedte] = useState(0);
  const breedteRef = useRef(0);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onGreepRef = useRef(onGreep);
  onGreepRef.current = onGreep;
  const minder = useMinderBeweging();
  const minderRef = useRef(minder);
  minderRef.current = minder;
  const greep = useRef(new Animated.Value(1)).current;
  const positie = useRef(new Animated.Value(value / 100)).current;

  useEffect(() => {
    positie.setValue(value / 100);
  }, [positie, value]);

  const naarWaarde = (x: number) => {
    const b = breedteRef.current;
    if (b <= DUIM) return 50;
    const pct = ((x - DUIM / 2) / (b - DUIM)) * 100;
    return Math.round(Math.min(100, Math.max(0, pct)));
  };

  const pak = (vast: boolean) => {
    onGreepRef.current?.(vast);
    if (minderRef.current) return;
    Animated.spring(greep, { toValue: vast ? 1.18 : 1, speed: 30, bounciness: 8, useNativeDriver: true }).start();
  };

  const responder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      // De schuif wint van de scroll van het vel zolang je hem vasthoudt.
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        pak(true);
        onChangeRef.current(naarWaarde(e.nativeEvent.locationX));
      },
      onPanResponderMove: (e) => onChangeRef.current(naarWaarde(e.nativeEvent.locationX)),
      onPanResponderRelease: () => pak(false),
      onPanResponderTerminate: () => pak(false),
    })
  ).current;

  const vulBreedte = breedte > DUIM ? DUIM / 2 + ((breedte - DUIM) * value) / 100 : 0;
  const duimLinks = breedte > DUIM ? ((breedte - DUIM) * value) / 100 : 0;

  return (
    <View style={{ gap: space[1] }}>
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
        accessibilityActions={[{ name: "increment" }, { name: "decrement" }]}
        onAccessibilityAction={(e) => {
          const stap = e.nativeEvent.actionName === "increment" ? 10 : -10;
          onChangeRef.current(Math.min(100, Math.max(0, value + stap)));
        }}
        style={{ height: RAAKVLAK, justifyContent: "center" }}
      >
        <View pointerEvents="none" style={{ position: "absolute", left: 0, right: 0, height: SPOOR, borderRadius: radius.pill, backgroundColor: palette.sliderTrackBase }} />
        <View pointerEvents="none" style={{ position: "absolute", left: 0, width: vulBreedte, height: SPOOR, borderRadius: radius.pill, backgroundColor: colors.ctaDefault }} />
        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: duimLinks,
            width: DUIM,
            height: DUIM,
            borderRadius: radius.pill,
            backgroundColor: colors.ctaDefault,
            // De inktring uit de referentie: 1,5 op lime.
            borderWidth: 1.5,
            borderColor: colors.textPrimary,
            transform: [{ scale: greep }],
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Animated.View style={{ opacity: positie.interpolate({ inputRange: [0, 1], outputRange: [1, LABEL_ZWAK] }) }}>
          <AppText rol="labelCaption" kleur="secondary">{leftLabel}</AppText>
        </Animated.View>
        <Animated.View style={{ opacity: positie.interpolate({ inputRange: [0, 1], outputRange: [LABEL_ZWAK, 1] }) }}>
          <AppText rol="labelCaption" kleur="secondary">{rightLabel}</AppText>
        </Animated.View>
      </View>
    </View>
  );
}
