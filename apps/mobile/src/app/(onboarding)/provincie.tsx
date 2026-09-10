// Provincie
//
// Eén vraag, vrijwillig: in welke provincie woon je? Voor het mentale weer
// per provincie op de kaart van Nederland (feedbacksessie MIND, verwerkt 10
// september 2026). De app vraagt nooit je locatie; dit is een instelling die
// je zelf kiest en altijd kunt wijzigen. Zonder keuze telt je check-in
// landelijk mee als "onbekend".

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Chip } from "@mind/ui/components/Chip";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen } from "@/features/profiel/instellingen";
import { PROVINCIE_CODES, PROVINCIE_NAMEN, type ProvincieCode } from "@/features/weer/provincies";

const nl = {
  titel: "Waar in Nederland ben je?",
  ondertitel: "Voor het mentale weer per provincie. Kiezen is vrijwillig, en de app vraagt nooit je locatie.",
  verder: "Verder",
  slaOver: "Liever niet",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Where in the Netherlands are you?",
    ondertitel: "For the mental weather per province. Choosing is voluntary, and the app never asks for your location.",
    verder: "Continue",
    slaOver: "Rather not",
  },
};

export default function Provincie() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [gekozen, zetGekozen] = useState<ProvincieCode | null>(null);

  const verder = async (bewaren: boolean) => {
    await bewaarInstellingen({ provincie: bewaren ? gekozen : null });
    router.push("/anonimiteit");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} heroInhoud={<MascotMain hoogte={112} />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {PROVINCIE_CODES.map((code) => (
          <Chip key={code} label={PROVINCIE_NAMEN[code]} active={gekozen === code} onPress={() => zetGekozen(gekozen === code ? null : code)} />
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <Button label={t("verder")} fullWidth disabled={!gekozen} onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
