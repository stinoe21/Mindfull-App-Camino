// De link uit de bevestigingsmail opent de app hier, met een eenmalige code.
// Lukt het inwisselen, dan ben je ingelogd en ga je verder met de onboarding.
// Lukt het niet, dan is het account meestal toch bevestigd (de klik op de
// link deed dat al bij Supabase): dan log je gewoon in.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, space } from "@mind/ui";
import { Button } from "@mind/ui/components/Button";

import { wisselCodeIn } from "@/features/auth/accountHerstel";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen } from "@/features/profiel/instellingen";

const nl = {
  bezigTitel: "Even kijken",
  titel: "Log in om verder te gaan",
  uitleg: "Heb je op de link in de mail getikt, dan is je e-mailadres bevestigd. Log in met je e-mailadres en je wachtwoord.",
  inloggen: "Inloggen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    bezigTitel: "One moment",
    titel: "Log in to continue",
    uitleg: "If you tapped the link in the email, your email address is confirmed. Log in with your email address and password.",
    inloggen: "Log in",
  },
};

export default function MailBevestigd() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { code } = useLocalSearchParams<{ code?: string }>();
  const [bezig, zetBezig] = useState(true);

  useEffect(() => {
    let actief = true;
    wisselCodeIn(typeof code === "string" ? code : undefined).then(async (uitkomst) => {
      if (!actief) return;
      if (uitkomst === "ok") {
        // De voorwaarden zijn geaccepteerd bij het aanmaken; zonder vinkje kwam er geen mail.
        await bewaarInstellingen({ consentVoorwaarden: true });
        router.replace("/naam");
        return;
      }
      zetBezig(false);
    });
    return () => {
      actief = false;
    };
  }, [code, router]);

  if (bezig) {
    return (
      <OnboardingScherm titel={t("bezigTitel")}>
        <View style={{ paddingVertical: space[6] }}>
          <ActivityIndicator color={colors.brandDefault} />
        </View>
      </OnboardingScherm>
    );
  }

  return (
    <OnboardingScherm titel={t("titel")} uitleg={t("uitleg")}>
      <Button label={t("inloggen")} fullWidth onPress={() => router.replace({ pathname: "/inloggen", params: { stand: "inloggen" } })} />
    </OnboardingScherm>
  );
}
