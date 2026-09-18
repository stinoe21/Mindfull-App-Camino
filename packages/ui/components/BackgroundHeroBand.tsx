// De 200 punten hoge hero-band achter vrijwel elk standaardscherm.
// Specificatie: packages/ui/reference/components/BackgroundHeroBand.jsx
// Sinds 14 september 2026 één tekening met een kleurwas per weerstaat,
// zie achtergronden.ts.

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { View, type StyleProp, type ViewStyle } from "react-native";

import { HERO_BRON, HERO_WAS, type WeerStaat } from "./achtergronden.ts";

export type BackgroundHeroBandProps = {
  state?: WeerStaat;
  style?: StyleProp<ViewStyle>;
};

export function BackgroundHeroBand({ state = "default", style }: BackgroundHeroBandProps) {
  const was = HERO_WAS[state];
  return (
    <View style={[{ height: 200, overflow: "hidden" }, style]}>
      <Image source={HERO_BRON} contentFit="cover" style={{ width: "100%", height: "100%" }} />
      {was ? <LinearGradient colors={[was.boven, was.onder]} style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }} /> : null}
    </View>
  );
}
