// Voorkeuren
//
// Keuze-chips, meervoudige selectie (HERKOMST.md, System states). Overslaan
// mag: dit is geen essentiele stap (productprincipes 6). De keuze blijft
// alleen op het toestel, zie het funnel-voorstel in docs/datamodel.md.

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
import { bewaarInstellingen, VOORKEUR_OPTIES } from "@/features/profiel/instellingen";

const nl = {
  titel: "Welke onderwerpen spreken je aan?",
  ondertitel: "Kies wat past. Aanpassen kan altijd in Instellingen.",
  verder: "Verder",
  slaOver: "Sla over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "What would you like to work on?",
    ondertitel: "Choose what fits. This stays on your phone, and you can always change it in Settings.",
    verder: "Continue",
    slaOver: "Skip",
  },
};

export default function Voorkeuren() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [gekozen, zetGekozen] = useState<string[]>([]);

  const wissel = (optie: string) => {
    zetGekozen((huidig) => (huidig.includes(optie) ? huidig.filter((o) => o !== optie) : [...huidig, optie]));
  };

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ voorkeuren: gekozen });
    router.push("/anonimiteit");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} heroInhoud={<MascotMain hoogte={112} />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">
          {t("ondertitel")}
        </AppText>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {VOORKEUR_OPTIES.map((o) => (
          <Chip key={o} label={o} active={gekozen.includes(o)} onPress={() => wissel(o)} />
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <Button label={t("verder")} fullWidth onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
