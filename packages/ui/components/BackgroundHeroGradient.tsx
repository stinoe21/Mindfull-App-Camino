// De volle hero die in de cremekleur vervaagt, voor uitkomst- en
// vieringsmomenten. 480 hoog, verloop vanaf 55 procent naar de achtergrond.
// Specificatie: packages/ui/reference/components/BackgroundHeroGradient.jsx

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View, type StyleProp, type ViewStyle } from "react-native";

import { colors } from "../tokens/tokens.ts";

import { HERO_BRONNEN, type WeerStaat } from "./achtergronden.ts";

// De transparante variant van de achtergrondkleur, afgeleid van de token zodat
// er geen losse kleurwaarde in dit bestand staat.
const TRANSPARANT = colors.surfaceBackground.replace("rgb(", "rgba(").replace(")", ",0)");

export type BackgroundHeroGradientProps = {
  state?: WeerStaat;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export function BackgroundHeroGradient({ state = "default", height = 480, style }: BackgroundHeroGradientProps) {
  return (
    <View style={[{ height, overflow: "hidden" }, style]}>
      <Image source={HERO_BRONNEN[state]} contentFit="cover" style={{ width: "100%", height: "100%" }} />
      <LinearGradient
        colors={[TRANSPARANT, TRANSPARANT, colors.surfaceBackground]}
        locations={[0, 0.55, 1]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </View>
  );
}
