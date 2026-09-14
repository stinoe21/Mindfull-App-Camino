// Segmentkeuze: twee tot vier panelen naast elkaar in één pil, waarvan er
// precies één actief is. Voor een pagina die anders één lange scroll zou
// zijn: de onderwerppagina van Houvast toont Uitleg, Wat kan helpen en
// Verder als drie panelen (Stijn, 14 september 2026: "lappen tekst onder
// elkaar", en het moet meer een app-ervaring worden).
//
// Vorm: het spoor in zand (yellow100, dezelfde tint als de basiskaart), het
// actieve segment in petrol met lichte tekst, net als een actieve Chip. Een
// schermlezer hoort de segmenten als tabbladen.

import { View } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { PressableScale } from "./PressableScale.tsx";

export type SegmentenProps = {
  /** De labels, in volgorde. */
  segmenten: string[];
  /** Index van het actieve segment. */
  actief: number;
  onKies: (index: number) => void;
};

export function Segmenten({ segmenten, actief, onKies }: SegmentenProps) {
  return (
    <View
      accessibilityRole="tablist"
      style={{ flexDirection: "row", backgroundColor: palette.yellow100, borderRadius: radius.pill, padding: space[1] }}
    >
      {segmenten.map((label, i) => {
        const aan = i === actief;
        return (
          <PressableScale
            key={label}
            accessibilityRole="tab"
            accessibilityState={{ selected: aan }}
            onPress={() => onKies(i)}
            schaal={0.97}
            style={{
              flex: 1,
              alignItems: "center",
              paddingVertical: space[2],
              paddingHorizontal: space[2],
              borderRadius: radius.pill,
              backgroundColor: aan ? palette.primary700 : undefined,
            }}
          >
            <AppText rol="labelButton" numberOfLines={1} style={{ color: aan ? colors.textOnprimary : palette.primary800 }}>
              {label}
            </AppText>
          </PressableScale>
        );
      })}
    </View>
  );
}
