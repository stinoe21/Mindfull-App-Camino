// De terug-knop linksboven op subpagina's: een rond chipje dat over de
// hero-gradient zweeft, in de geest van de zwevende navigatiepil onderin.
// Het teken "‹" volgt het precedent van de "›"-disclosure in Profiel
// (zie HERKOMST.md: die affordance is van ons, niet van de bron).
//
// Deze component is puur visueel. Wat er bij een tik gebeurt bepaalt de
// app; in apps/mobile is dat TerugNaarVorige, die router.back() doet.

import { Pressable } from "react-native";

import { colors, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

/** Vaste maat van het chipje; ScreenCanvas rekent hiermee. */
export const TERUGKNOP_MAAT = space[10];

export type TerugKnopProps = {
  onPress: () => void;
};

export function TerugKnop({ onPress }: TerugKnopProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Terug"
      hitSlop={space[1]}
      style={({ pressed }) => ({
        width: TERUGKNOP_MAAT,
        height: TERUGKNOP_MAAT,
        borderRadius: radius.pill,
        backgroundColor: colors.surfaceBackground,
        borderWidth: 1,
        borderColor: colors.borderDefault,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <AppText rol="h3">{"‹"}</AppText>
    </Pressable>
  );
}
