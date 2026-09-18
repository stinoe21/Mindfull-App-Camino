// De volle hero die in de cremekleur vervaagt, voor uitkomst- en
// vieringsmomenten. 480 hoog, verloop vanaf 55 procent naar de achtergrond.
// Specificatie: packages/ui/reference/components/BackgroundHeroGradient.jsx
// Sinds 14 september 2026 één tekening met een kleurwas per weerstaat,
// zie achtergronden.ts.

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";

import { colors } from "../tokens/tokens.ts";

import { HERO_BRON, HERO_WAS, type WeerStaat } from "./achtergronden.ts";

// De transparante variant van de achtergrondkleur, afgeleid van de token zodat
// er geen losse kleurwaarde in dit bestand staat.
const TRANSPARANT = colors.surfaceBackground.replace("rgb(", "rgba(").replace(")", ",0)");

export type BackgroundHeroGradientProps = {
  state?: WeerStaat;
  height?: number;
  /**
   * Een eigen laag over de tekening, onder het verloop naar de achtergrond:
   * voor een was die live meebeweegt (de check-in, 17 september 2026).
   */
  laag?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function BackgroundHeroGradient({ state = "default", height = 480, laag, style }: BackgroundHeroGradientProps) {
  const was = HERO_WAS[state];
  return (
    <View style={[{ height, overflow: "hidden" }, style]}>
      <Image source={HERO_BRON} contentFit="cover" style={{ width: "100%", height: "100%" }} />
      {was ? <LinearGradient colors={[was.boven, was.onder]} style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }} /> : null}
      {laag}
      <LinearGradient
        colors={[TRANSPARANT, TRANSPARANT, colors.surfaceBackground]}
        locations={[0, 0.55, 1]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </View>
  );
}
