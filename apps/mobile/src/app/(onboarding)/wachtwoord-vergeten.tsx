// Wachtwoord vergeten, stap 1: de mail aanvragen.
//
// Het antwoord is altijd hetzelfde, of het adres nu een account heeft of
// niet: anders is dit scherm een manier om uit te zoeken wie de app gebruikt,
// en dat is bij deze app een gegeven over iemands mentale gezondheid.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { TextInput } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { lijktOpEmail, vraagHerstelmailAan, type MailUitkomst } from "@/features/auth/accountHerstel";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";

const nl = {
  titel: "Wachtwoord vergeten",
  uitleg: "Vul je e-mailadres in. Je krijgt een mail met een link om een nieuw wachtwoord te kiezen.",
  emailPlaceholder: "E-mailadres",
  emailLabel: "E-mailadres",
  knop: "Stuur me de link",
  vulEmail: "Vul een geldig e-mailadres in.",
  verstuurd:
    "Is er een account met {email}, dan staat de mail er zo. Open de link op deze telefoon. Niets ontvangen? Kijk ook bij ongewenste mail.",
  opnieuw: "Stuur opnieuw",
  terug: "Terug naar inloggen",
  geenVerbinding: "Geen verbinding. Probeer het later opnieuw.",
  teVaak: "Er zijn net te veel mails aangevraagd. Probeer het over een uur opnieuw.",
  mislukt: "Het versturen is niet gelukt. Probeer het later opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Forgot password",
    uitleg: "Enter your email address. You'll get an email with a link to choose a new password.",
    emailPlaceholder: "Email address",
    emailLabel: "Email address",
    knop: "Send me the link",
    vulEmail: "Enter a valid email address.",
    verstuurd:
      "If there is an account for {email}, the email is on its way. Open the link on this phone. Nothing received? Check your spam folder too.",
    opnieuw: "Send again",
    terug: "Back to log in",
    geenVerbinding: "There's no connection. Please try again later.",
    teVaak: "Too many emails were requested just now. Try again in an hour.",
    mislukt: "Sending didn't work. Please try again later.",
  },
};

export default function WachtwoordVergeten() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { email: start } = useLocalSearchParams<{ email?: string }>();
  const [email, zetEmail] = useState(typeof start === "string" ? start : "");
  const [bezig, zetBezig] = useState(false);
  const [uitkomst, zetUitkomst] = useState<MailUitkomst | "vulEmail" | null>(null);

  const verstuur = async () => {
    if (!lijktOpEmail(email)) {
      zetUitkomst("vulEmail");
      return;
    }
    zetBezig(true);
    zetUitkomst(await vraagHerstelmailAan(email));
    zetBezig(false);
  };

  const verstuurd = uitkomst === "verstuurd";

  return (
    <OnboardingScherm titel={t("titel")} uitleg={t("uitleg")}>
      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={email}
          onChangeText={zetEmail}
          placeholder={t("emailPlaceholder")}
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("emailLabel")}
        />
      </Card>

      <Button label={verstuurd ? t("opnieuw") : t("knop")} variant={verstuurd ? "secondary" : "primary"} fullWidth bezig={bezig} onPress={verstuur} />

      {uitkomst ? (
        <AppText rol="bodySmall" kleur="secondary">
          {uitkomst === "verstuurd" ? t("verstuurd").replace("{email}", email.trim()) : t(uitkomst)}
        </AppText>
      ) : null}

      <Button label={t("terug")} variant="link" fullWidth onPress={() => router.back()} />
    </OnboardingScherm>
  );
}
