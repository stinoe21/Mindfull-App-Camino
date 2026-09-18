// Wachtwoord vergeten, stap 2: de link uit de mail opent de app hier, met een
// eenmalige code. Die wordt ingewisseld voor een sessie, en met die sessie
// mag je een nieuw wachtwoord kiezen. Zie features/auth/accountHerstel.ts.
//
// Werkt de code niet (verlopen, al gebruikt, of geopend op een ander toestel
// dan waar de mail is aangevraagd), dan zegt het scherm dat en biedt het een
// nieuwe mail aan. Geen technische fout op het scherm.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { MIN_WACHTWOORD, wisselCodeIn, zetNieuwWachtwoord, type WachtwoordUitkomst } from "@/features/auth/accountHerstel";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";

const nl = {
  titel: "Kies een nieuw wachtwoord",
  uitleg: "Daarna ben je meteen ingelogd.",
  placeholder: "Nieuw wachtwoord (minstens {n} tekens)",
  label: "Nieuw wachtwoord",
  toon: "Toon wachtwoord",
  verberg: "Verberg wachtwoord",
  knop: "Bewaar en ga verder",
  teKort: "Kies een wachtwoord van minstens {n} tekens.",
  zelfde: "Dit is je oude wachtwoord. Kies een ander.",
  teZwak: "Dit wachtwoord is te makkelijk te raden. Kies een ander.",
  geenSessie: "Deze link is verlopen. Vraag een nieuwe aan.",
  mislukt: "Het bewaren is niet gelukt. Probeer het opnieuw.",
  geenVerbinding: "Geen verbinding. Probeer het later opnieuw.",
  linkTitel: "Deze link werkt niet meer",
  linkUitleg:
    "Een link werkt één keer, een uur lang, en alleen op de telefoon waarop je hem hebt aangevraagd. Vraag gerust een nieuwe aan.",
  nieuweLink: "Vraag een nieuwe link aan",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Choose a new password",
    uitleg: "You'll be logged in right after.",
    placeholder: "New password (at least {n} characters)",
    label: "New password",
    toon: "Show password",
    verberg: "Hide password",
    knop: "Save and continue",
    teKort: "Choose a password of at least {n} characters.",
    zelfde: "This is your old password. Choose a different one.",
    teZwak: "This password is too easy to guess. Choose a different one.",
    geenSessie: "This link has expired. Request a new one.",
    mislukt: "Saving didn't work. Please try again.",
    geenVerbinding: "There's no connection. Please try again later.",
    linkTitel: "This link no longer works",
    linkUitleg:
      "A link works once, for an hour, and only on the phone you requested it on. Feel free to request a new one.",
    nieuweLink: "Request a new link",
  },
};

export default function WachtwoordNieuw() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { code } = useLocalSearchParams<{ code?: string }>();
  const [stand, zetStand] = useState<"bezig" | "kies" | "ongeldig" | "geenVerbinding">("bezig");
  const [wachtwoord, zetWachtwoord] = useState("");
  const [zichtbaar, zetZichtbaar] = useState(false);
  const [bewaren, zetBewaren] = useState(false);
  const [melding, zetMelding] = useState<Exclude<WachtwoordUitkomst, "ok"> | "teKort" | null>(null);

  useEffect(() => {
    let actief = true;
    wisselCodeIn(typeof code === "string" ? code : undefined).then((uitkomst) => {
      if (actief) zetStand(uitkomst === "ok" ? "kies" : uitkomst);
    });
    return () => {
      actief = false;
    };
  }, [code]);

  const bewaar = async () => {
    if (wachtwoord.length < MIN_WACHTWOORD) {
      zetMelding("teKort");
      return;
    }
    zetBewaren(true);
    const uitkomst = await zetNieuwWachtwoord(wachtwoord);
    zetBewaren(false);
    if (uitkomst !== "ok") {
      zetMelding(uitkomst);
      return;
    }
    // De poort bij de start beslist: Home als de onboarding af is, anders verder waar je was.
    router.dismissAll();
    router.replace("/");
  };

  if (stand === "bezig") {
    return (
      <OnboardingScherm titel={t("titel")}>
        <View style={{ paddingVertical: space[6] }}>
          <ActivityIndicator color={colors.brandDefault} />
        </View>
      </OnboardingScherm>
    );
  }

  if (stand !== "kies") {
    return (
      <OnboardingScherm titel={stand === "ongeldig" ? t("linkTitel") : t("titel")} uitleg={stand === "ongeldig" ? t("linkUitleg") : t("geenVerbinding")}>
        <Button label={t("nieuweLink")} fullWidth onPress={() => router.replace("/wachtwoord-vergeten")} />
      </OnboardingScherm>
    );
  }

  return (
    <OnboardingScherm titel={t("titel")} uitleg={t("uitleg")}>
      <Card tone="white" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={wachtwoord}
          onChangeText={zetWachtwoord}
          placeholder={t("placeholder").replace("{n}", String(MIN_WACHTWOORD))}
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
          autoComplete="new-password"
          textContentType="newPassword"
          secureTextEntry={!zichtbaar}
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("label")}
        />
      </Card>
      <Button label={zichtbaar ? t("verberg") : t("toon")} variant="link" onPress={() => zetZichtbaar(!zichtbaar)} />

      <Button label={t("knop")} fullWidth bezig={bewaren} onPress={bewaar} />

      {melding ? (
        <AppText rol="bodySmall" kleur="secondary">{t(melding).replace("{n}", String(MIN_WACHTWOORD))}</AppText>
      ) : null}
      {melding === "geenSessie" ? (
        <Button label={t("nieuweLink")} variant="secondary" fullWidth onPress={() => router.replace("/wachtwoord-vergeten")} />
      ) : null}
    </OnboardingScherm>
  );
}
