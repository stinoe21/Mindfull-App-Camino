// Voorkeuren
//
// Keuze-chips, meervoudige selectie (HERKOMST.md, System states). Overslaan
// mag: dit is geen essentiele stap (productprincipes 6). De keuze blijft
// alleen op het toestel, zie het funnel-voorstel in docs/datamodel.md.
//
// Minstens drie (Stijn, 17 september 2026): met één onderwerp blijft Houvast
// te smal om er iets aan te hebben. Verder werkt pas vanaf drie, en de knop
// telt zelf af, zodat er geen losse regel uitleg bij hoeft.

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { Button } from "@mind/ui/components/Button";
import { Chip } from "@mind/ui/components/Chip";
import { chipKleurGekozenVoor, kaartKleurVoor } from "@mind/ui/components/VliegerOnderwerp";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen, VOORKEUR_OPTIES } from "@/features/profiel/instellingen";

const MIN_ONDERWERPEN = 3;

const nl = {
  titel: "Waar wil je meer over weten?",
  ondertitel: "MIND heeft jarenlange kennis over mentale gezondheid. Kies minstens drie onderwerpen.",
  verder: "Verder",
  nogEen: "Kies er nog 1",
  nogMeer: "Kies er nog {n}",
  slaOver: "Sla over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "What would you like to know more about?",
    ondertitel: "MIND has years of knowledge about mental health. Choose at least three topics.",
    verder: "Continue",
    nogEen: "Choose 1 more",
    nogMeer: "Choose {n} more",
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

  const tekort = Math.max(0, MIN_ONDERWERPEN - gekozen.length);
  const verderLabel = tekort === 0 ? t("verder") : tekort === 1 ? t("nogEen") : t("nogMeer").replace("{n}", String(tekort));

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ voorkeuren: gekozen });
    router.push("/anonimiteit");
  };

  return (
    <OnboardingScherm stap={4} titel={t("titel")} uitleg={t("ondertitel")}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {VOORKEUR_OPTIES.map((o) => (
          <Chip key={o} label={o} active={gekozen.includes(o)} kleur={kaartKleurVoor(o)} gekozenKleur={chipKleurGekozenVoor(o)} onPress={() => wissel(o)} />
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <Button label={verderLabel} fullWidth disabled={tekort > 0} onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </OnboardingScherm>
  );
}
