// Inloggen
//
// Apple (verplicht naast Google, richtlijn 4.8), Google, of e-mail.
// De Apple- en Google-knop zijn gebouwd "op een sleutel na" (docs/scope.md):
// scherm, knop en foutafhandeling staan er, de configuratie komt uit
// omgevingsvariabelen, en een ontbrekende waarde blokkeert de onboarding niet.
// E-mail loopt via e-mailadres en wachtwoord, met een expliciete keuze tussen
// inloggen en een account aanmaken. Staat "Confirm email" aan in Supabase, dan
// levert aanmaken nog geen sessie op en komt er eerst een bevestigingsmail.
// Let op de SMTP-limiet tijdens testen: docs/limieten-en-misbruik.md sectie 1.
// Zonder account kom je de app niet in: er is geen doorgang langs dit scherm.

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
import { getSupabase } from "@/features/backend/client";

// De sleutels van Mind, zodra die er zijn. Zie docs/scope.md: aanzetten is dan
// configuratie, geen verbouwing.
const APPLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_APPLE_SERVICE_ID);
const GOOGLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID);

const MIN_WACHTWOORD = 6;

// Alleen interface-teksten. {naam}, {n} en {email} worden op de plek ingevuld.
const nl = {
  titel: "Inloggen",
  ondertitel: "Met een account telt je check-in één keer per dag mee. Anoniem.",
  socialNogNiet:
    "Inloggen met {naam} werkt in deze testversie nog niet. Gebruik voorlopig je e-mailadres.",
  geenVerbinding: "Geen verbinding. Probeer het later opnieuw.",
  vulEmail: "Vul een e-mailadres in.",
  vulWachtwoord: "Vul een wachtwoord in van minstens {n} tekens.",
  verkeerdeCombinatie:
    "E-mailadres en wachtwoord horen niet bij elkaar. Nog geen account? Maak er hieronder een aan.",
  bestaatAl: "Er is al een account met dit e-mailadres. Je kunt daarmee inloggen.",
  nietBevestigd: "Dit e-mailadres is nog niet bevestigd. Kijk in je mail voor de bevestigingslink.",
  inloggenMislukt: "Inloggen is niet gelukt. Probeer het over een minuut opnieuw.",
  aanmakenMislukt: "Het account kon niet worden aangemaakt. Probeer het over een minuut opnieuw.",
  bevestigingsmail:
    "We hebben een bevestigingsmail gestuurd naar {email}. Klik op de link en log daarna hier in.",
  verderMetApple: "Verder met Apple",
  verderMetGoogle: "Verder met Google",
  emailPlaceholder: "E-mailadres",
  emailLabel: "E-mailadres",
  wachtwoordPlaceholder: "Wachtwoord",
  wachtwoordKiezen: "Kies een wachtwoord (minstens {n} tekens)",
  wachtwoordLabel: "Wachtwoord",
  inloggen: "Inloggen",
  accountAanmaken: "Account aanmaken",
  hebAlAccount: "Ik heb al een account",
  nogGeenAccount: "Nog geen account? Maak er een aan",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Log in",
    ondertitel: "So your check-in counts once per day.",
    socialNogNiet:
      "Logging in with {naam} isn't available yet in this test version. It's switched on as soon as Mind's keys are in place.",
    geenVerbinding: "There's no connection to the server. Please try again later.",
    vulEmail: "Enter an email address.",
    vulWachtwoord: "Enter a password of at least {n} characters.",
    verkeerdeCombinatie:
      "This email address and password don't match. No account yet? Choose create account below.",
    bestaatAl: "There is already an account with this email address. Log in with it.",
    nietBevestigd: "This email address hasn't been confirmed yet. Check your mail for the confirmation link.",
    inloggenMislukt: "Logging in failed. Please try again in a minute.",
    aanmakenMislukt: "The account couldn't be created. Please try again in a minute.",
    bevestigingsmail:
      "We've sent a confirmation email to {email}. Click the link and then log in here.",
    verderMetApple: "Continue with Apple",
    verderMetGoogle: "Continue with Google",
    emailPlaceholder: "Or enter your email address",
    emailLabel: "Email address",
    wachtwoordPlaceholder: "Password",
    wachtwoordKiezen: "Choose a password (at least {n} characters)",
    wachtwoordLabel: "Password",
    inloggen: "Log in",
    accountAanmaken: "Create account",
    hebAlAccount: "I already have an account",
    nogGeenAccount: "No account yet? Create one",
  },
};

export default function Inloggen() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [email, zetEmail] = useState("");
  const [wachtwoord, zetWachtwoord] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);
  const [stand, zetStand] = useState<"inloggen" | "aanmaken">("inloggen");

  const client = getSupabase();
  const aanmaken = stand === "aanmaken";

  const socialNogNiet = (naam: string) => {
    zetMelding(t("socialNogNiet").replace("{naam}", naam));
  };

  const controleerInvoer = (): boolean => {
    zetMelding(null);
    if (!client) {
      zetMelding(t("geenVerbinding"));
      return false;
    }
    if (!email.includes("@")) {
      zetMelding(t("vulEmail"));
      return false;
    }
    if (wachtwoord.length < MIN_WACHTWOORD) {
      zetMelding(t("vulWachtwoord").replace("{n}", String(MIN_WACHTWOORD)));
      return false;
    }
    return true;
  };

  const logIn = async () => {
    if (!controleerInvoer() || !client) return;
    zetBezig(true);
    const { error } = await client.auth.signInWithPassword({ email: email.trim(), password: wachtwoord });
    zetBezig(false);
    if (error) {
      if (error.message.toLowerCase().includes("invalid login credentials")) {
        zetMelding(t("verkeerdeCombinatie"));
      } else if (error.message.toLowerCase().includes("not confirmed")) {
        zetMelding(t("nietBevestigd"));
      } else {
        zetMelding(t("inloggenMislukt"));
      }
      return;
    }
    router.push("/naam");
  };

  const maakAccount = async () => {
    if (!controleerInvoer() || !client) return;
    zetBezig(true);
    const { data, error } = await client.auth.signUp({ email: email.trim(), password: wachtwoord });
    zetBezig(false);
    if (error) {
      if (error.message.toLowerCase().includes("already registered")) {
        zetMelding(t("bestaatAl"));
        zetStand("inloggen");
      } else {
        zetMelding(t("aanmakenMislukt"));
      }
      return;
    }
    if (data.session) {
      router.push("/naam");
      return;
    }
    // Zonder sessie is het account wel aangemaakt maar nog niet bevestigd.
    // Een bestaand, al bevestigd adres komt hier ook terecht (Supabase verbergt dat).
    zetStand("inloggen");
    zetMelding(t("bevestigingsmail").replace("{email}", email.trim()));
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{aanmaken ? t("accountAanmaken") : t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      <Button
        label={t("verderMetApple")}
        variant="secondary"
        fullWidth
        onPress={() => (APPLE_KLAAR ? socialNogNiet("Apple") : socialNogNiet("Apple"))}
      />
      <Button
        label={t("verderMetGoogle")}
        variant="secondary"
        fullWidth
        onPress={() => (GOOGLE_KLAAR ? socialNogNiet("Google") : socialNogNiet("Google"))}
      />

      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={email}
          onChangeText={zetEmail}
          placeholder={t("emailPlaceholder")}
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("emailLabel")}
        />
      </Card>
      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={wachtwoord}
          onChangeText={zetWachtwoord}
          placeholder={aanmaken ? t("wachtwoordKiezen").replace("{n}", String(MIN_WACHTWOORD)) : t("wachtwoordPlaceholder")}
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
          autoComplete="password"
          secureTextEntry
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("wachtwoordLabel")}
        />
      </Card>
      <Button
        label={aanmaken ? t("accountAanmaken") : t("inloggen")}
        fullWidth
        bezig={bezig}
        onPress={aanmaken ? maakAccount : logIn}
      />

      {melding ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{melding}</AppText>
        </Card>
      ) : null}

      <Button
        label={aanmaken ? t("hebAlAccount") : t("nogGeenAccount")}
        variant="link"
        fullWidth
        onPress={() => {
          zetMelding(null);
          zetStand(aanmaken ? "inloggen" : "aanmaken");
        }}
      />

    </ScreenCanvas>
  );
}
