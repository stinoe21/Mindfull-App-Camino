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
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, NAAM_MAX, schoonNaam } from "@/features/profiel/instellingen";

const nl = {
  titel: "Hoe mogen we je noemen?",
  ondertitel: "Alleen voor de begroeting. Je naam blijft op je telefoon.",
  placeholder: "Je voornaam",
  verder: "Verder",
  slaOver: "Sla over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "What should we call you?",
    ondertitel: "Only for the greeting. Your name stays on your phone and never goes to the server.",
    placeholder: "Your first name",
    verder: "Continue",
    slaOver: "Skip",
  },
};

export default function Naam() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [naam, zetNaam] = useState("");

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ naam: schoonNaam(naam) });
    router.push("/voorkeuren");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">
          {t("ondertitel")}
        </AppText>
      </View>

      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={naam}
          onChangeText={zetNaam}
          placeholder={t("placeholder")}
          placeholderTextColor={colors.textSecondary}
          maxLength={NAAM_MAX}
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={() => verder(true)}
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("placeholder")}
        />
      </Card>

      <View style={{ flex: 1 }} />
      <Button label={t("verder")} fullWidth onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
