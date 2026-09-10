// Het ene aanvinkvakje van het design system.
//
// Sinds 10 september 2026 (Stijn): de twee toestemmingen in de onboarding
// hadden twee stijlen, een omrande keuzerij met een rondje en een
// systeemschakelaar. Dat las als twee formulieren. Nu is er één vorm voor
// alles wat je aanvinkt: een vierkant vakje met een vinkje in de inktlijn,
// de tekst ernaast, direct op het vel zonder kaart eromheen.
//
// Eén component voor twee rollen: als "checkbox" staat hij op zichzelf, als
// "radio" hoort hij bij een groep waarvan er één gekozen wordt. De vorm is
// gelijk; alleen de toegankelijkheidsrol verschilt, zodat een schermlezer
// weet dat "Ja" en "Nee" elkaar uitsluiten.

import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { PressableScale } from "./PressableScale.tsx";

export type KeuzeVakProps = {
  label: string;
  gekozen: boolean;
  onPress: () => void;
  rol?: "checkbox" | "radio";
};

export function KeuzeVak({ label, gekozen, onPress, rol = "checkbox" }: KeuzeVakProps) {
  return (
    <PressableScale
      accessibilityRole={rol}
      accessibilityState={{ checked: gekozen }}
      onPress={onPress}
      schaal={0.99}
      style={{ flexDirection: "row", alignItems: "flex-start", gap: space[3], paddingVertical: space[2] }}
    >
      <View
        style={{
          width: space[6],
          height: space[6],
          borderRadius: radius.sm,
          borderWidth: 1.5,
          borderColor: gekozen ? colors.brandDefault : colors.textPrimary,
          backgroundColor: gekozen ? colors.brandDefault : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gekozen ? (
          <Svg width={14} height={14} viewBox="0 0 14 14">
            <Path d="M2.5 7.5 L5.5 10.5 L11.5 3.5" stroke={palette.neutral0} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </Svg>
        ) : null}
      </View>
      <View style={{ flexShrink: 1, paddingTop: 2 }}>
        <AppText rol={gekozen ? "bodyEmphasis" : "body"}>{label}</AppText>
      </View>
    </PressableScale>
  );
}
