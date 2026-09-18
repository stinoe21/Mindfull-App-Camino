// Naam
//
// Optionele voornaam, direct na het inloggen, voor de begroeting op het
// dashboard ("Goedemorgen, Maria", HERKOMST.md). Toegevoegd na de feedback van
// Mind van 27 augustus 2026. De naam blijft op het toestel: er is bewust geen
// naamveld in het datamodel. Overslaan mag, en later aanpassen kan in
// Instellingen.
//
// Wie met een bestaand account inlogt (nieuw toestel, of eerder uitgelogd)
// krijgt één zin waarom de vragen terugkomen: alles wat persoonlijk is staat
// alleen op het toestel. Overslaan van de stappen kan pas als die gegevens
// ergens anders bewaard worden, en dat is een databesluit dat niet genomen is.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { Button } from "@mind/ui/components/Button";
import { TextField } from "@mind/ui/components/TextField";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { meet } from "@/features/meten/meet";
import { bewaarInstellingen, NAAM_MAX, schoonNaam } from "@/features/profiel/instellingen";

const nl = {
  titel: "Wat is je naam?",
  welkomTerug: "Welkom terug. Je naam en je onderwerpen bewaren we alleen op je toestel, daarom vragen we ze nog een keer.",
  placeholder: "Je voornaam",
  verder: "Verder",
  slaOver: "Sla over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "What is your name?",
    welkomTerug: "Welcome back. We only keep your name and your topics on your device, so we ask for them once more.",
    placeholder: "Your first name",
    verder: "Continue",
    slaOver: "Skip",
  },
};

export default function Naam() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [naam, zetNaam] = useState("");
  const { terug } = useLocalSearchParams<{ terug?: string }>();

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ naam: schoonNaam(naam) });
    meet({ naam: "onboarding_step_completed", item: "naam" });
    router.push("/voorkeuren");
  };

  return (
    <OnboardingScherm stap={3} titel={t("titel")} uitleg={terug === "1" ? t("welkomTerug") : undefined}>
      <TextField
        value={naam}
        onChangeText={zetNaam}
        placeholder={t("placeholder")}
        maxLength={NAAM_MAX}
        autoCapitalize="words"
        autoCorrect={false}
        returnKeyType="done"
        onSubmitEditing={() => verder(true)}
        accessibilityLabel={t("placeholder")}
      />

      <View style={{ flex: 1 }} />
      <Button label={t("verder")} fullWidth onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </OnboardingScherm>
  );
}
