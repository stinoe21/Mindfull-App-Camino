// Leeftijdscheck 16+
//
// Harde toegangseis, geen Skip (productprincipes 6, board 74:230). Komt voor
// het aanmaken van een account; onder de 16 geen toegang, en daarmee is
// ouderlijke toestemming niet nodig (docs/datamodel.md).

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen } from "@/features/profiel/instellingen";

const nl = {
  totLaterTitel: "Nog niet voor jou",
  totLaterUitleg:
    "Deze app is voor iedereen van 16 jaar en ouder. Jonger? Dan kun je de app nu nog niet gebruiken.",
  terug: "Terug",
  vraag: "Ben je 16 jaar of ouder?",
  uitleg:
    "Deze app is voor iedereen van 16 jaar en ouder. We vragen dit maar één keer.",
  ja: "Ja, ik ben 16 of ouder",
  nee: "Nee, ik ben jonger",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    totLaterTitel: "See you later",
    totLaterUitleg:
      "This app is for everyone aged 16 and older. Younger? Then you can't use the app just yet.",
    terug: "Back",
    vraag: "Are you 16 or older?",
    uitleg: "This app is for everyone aged 16 and older. We ask this once, before you create an account.",
    ja: "Yes, I'm 16 or older",
    nee: "No, I'm younger",
  },
};

export default function Leeftijd() {
  const router = useRouter();
  const t = useVertaling(teksten);
  // Wie op Welkom "Ik heb al een account" koos, neemt die keuze mee naar Inloggen.
  const { stand } = useLocalSearchParams<{ stand?: string }>();
  const [teJong, zetTeJong] = useState(false);

  const bevestig = async () => {
    await bewaarInstellingen({ leeftijdBevestigd: true });
    router.push({ pathname: "/inloggen", params: stand === "inloggen" ? { stand } : {} });
  };

  if (teJong) {
    return (
      <OnboardingScherm titel={t("totLaterTitel")}>
        <Card tone="white">
          <AppText rol="body">
            {t("totLaterUitleg")}
          </AppText>
        </Card>
        <Button label={t("terug")} variant="link" onPress={() => zetTeJong(false)} />
      </OnboardingScherm>
    );
  }

  return (
    <OnboardingScherm stap={1} titel={t("vraag")} uitleg={t("uitleg")}>
      <View style={{ flex: 1 }} />
      <Button label={t("ja")} fullWidth onPress={bevestig} />
      <Button label={t("nee")} variant="secondary" fullWidth onPress={() => zetTeJong(true)} />
    </OnboardingScherm>
  );
}
