// Naam
//
// Optionele voornaam, direct na het inloggen, voor de begroeting op het
// dashboard ("Goedemorgen, Maria", HERKOMST.md). Toegevoegd na de feedback van
// Mind van 27 augustus 2026. De naam blijft op het toestel: er is bewust geen
// naamveld in het datamodel. Overslaan mag, en later aanpassen kan in
// Instellingen.

import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { bewaarInstellingen, NAAM_MAX, schoonNaam } from "@/features/profiel/instellingen";

export default function Naam() {
  const router = useRouter();
  const [naam, zetNaam] = useState("");

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ naam: schoonNaam(naam) });
    router.push("/voorkeuren");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Hoe mogen we je noemen?</AppText>
        <AppText rol="subtitle" kleur="secondary">
          Alleen voor de begroeting. Je naam blijft op je telefoon en gaat nooit naar de server.
        </AppText>
      </View>

      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={naam}
          onChangeText={zetNaam}
          placeholder="Je voornaam"
          placeholderTextColor={colors.textSecondary}
          maxLength={NAAM_MAX}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={() => verder(true)}
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel="Je voornaam"
        />
      </Card>

      <View style={{ flex: 1 }} />
      <Button label="Verder" fullWidth onPress={() => verder(true)} />
      <Button label="Sla over" variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
