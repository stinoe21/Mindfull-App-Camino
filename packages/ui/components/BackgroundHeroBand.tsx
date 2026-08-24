// De 200 punten hoge hero-band achter vrijwel elk standaardscherm.
// Specificatie: packages/ui/reference/components/BackgroundHeroBand.jsx

import { Image } from "expo-image";
import { View, type StyleProp, type ViewStyle } from "react-native";

import { HERO_BRONNEN, type WeerStaat } from "./achtergronden.ts";

export type BackgroundHeroBandProps = {
  state?: WeerStaat;
  style?: StyleProp<ViewStyle>;
};

export function BackgroundHeroBand({ state = "default", style }: BackgroundHeroBandProps) {
  return (
    <View style={[{ height: 200, overflow: "hidden" }, style]}>
      <Image source={HERO_BRONNEN[state]} contentFit="cover" style={{ width: "100%", height: "100%" }} />
    </View>
  );
}
