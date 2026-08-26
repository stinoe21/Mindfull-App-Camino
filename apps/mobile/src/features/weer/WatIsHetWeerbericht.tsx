// "Wat is het mentale weerbericht?": een tikbare regel met het info-icoon
// die de uitleg van het weerbericht in een popup opent. Voor schermen die
// de term noemen voordat de gebruiker het weerbericht ooit gezien heeft,
// zoals het onboardingscherm Anoniem meetellen.
//
// De uitlegtekst is INTRO uit WeerberichtIntro.tsx: een keer vastgelegd,
// overal dezelfde zinnen. Zie daar voor de VOORSTEL-status van die copy.

import { useState } from "react";
import { Pressable, View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";

import { InfoIcoon } from "./infoIcoon";
import { InfoPopup } from "./InfoPopup";
import { INTRO } from "./WeerberichtIntro";

const VRAAG = "Wat is het mentale weerbericht?";

export function WatIsHetWeerbericht() {
  const [open, zetOpen] = useState(false);

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={VRAAG}
        onPress={() => zetOpen(true)}
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

      <InfoPopup zichtbaar={open} kop={VRAAG} onSluiten={() => zetOpen(false)}>
        <AppText rol="body">{INTRO}</AppText>
      </InfoPopup>
    </View>
  );
}
