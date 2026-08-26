// "Wat is het mentale weerbericht?": een tikbare regel met het info-icoon
// die de uitleg van het weerbericht uitklapt. Voor schermen die de term
// noemen voordat de gebruiker het weerbericht ooit gezien heeft, zoals het
// onboardingscherm Anoniem meetellen.
//
// De uitlegtekst is INTRO uit WeerberichtIntro.tsx: een keer vastgelegd,
// overal dezelfde zinnen. Zie daar voor de VOORSTEL-status van die copy.

import { useState } from "react";
import { Pressable, View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";

import { InfoIcoon } from "./infoIcoon";
import { INTRO } from "./WeerberichtIntro";

const VRAAG = "Wat is het mentale weerbericht?";

export function WatIsHetWeerbericht() {
  const [open, zetOpen] = useState(false);

  return (
    <View style={{ gap: space[2] }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={VRAAG}
        accessibilityState={{ expanded: open }}
        onPress={() => zetOpen(!open)}
        hitSlop={space[2]}
        style={({ pressed }) => ({
          flexDirection: "row",
          alignItems: "center",
          gap: space[2],
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <InfoIcoon />
        <AppText rol="bodySmall" kleur="brand" style={{ flexShrink: 1 }}>
          {VRAAG}
        </AppText>
      </Pressable>

      {open ? (
        <AppText rol="bodySmall" kleur="secondary">
          {INTRO}
        </AppText>
      ) : null}
    </View>
  );
}
