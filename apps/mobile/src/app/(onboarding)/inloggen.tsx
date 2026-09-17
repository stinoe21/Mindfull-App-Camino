// Inloggen
//
// Apple (verplicht naast Google, richtlijn 4.8), Google, of e-mail.
// De Apple- en Google-knop zijn gebouwd "op een sleutel na" (docs/scope.md):
// het inloggen zelf staat in features/auth/socialLogin.ts en loopt via
// Supabase. De sleutels van Apple en Google staan alleen in het
// Supabase-dashboard; de twee omgevingsvariabelen hieronder zijn niet meer
// dan de schakelaar die de knop toont zodra de aanbieder daar is ingesteld.
// Een ontbrekende waarde blokkeert de onboarding niet: dan is er e-mail.
// E-mail loopt via e-mailadres en wachtwoord, met een expliciete keuze tussen
// inloggen en een account aanmaken. Staat "Confirm email" aan in Supabase, dan
// levert aanmaken nog geen sessie op en komt er eerst een bevestigingsmail.
// Let op de SMTP-limiet tijdens testen: docs/limieten-en-misbruik.md sectie 1.
// Zonder account kom je de app niet in: er is geen doorgang langs dit scherm.
//
// De voorwaarden en de disclaimer (geen hulpverlening) horen bij het account
// (grondslag overeenkomst, board 12:133) en staan sinds 13 september 2026
// (Stijn, UX-ronde) hier, bij het aanmaken en het inloggen, en niet meer
// drie schermen later. Zonder vinkje geen knop; geen Skip (productprincipes 6).
//
// Sinds 17 september 2026 (Stijn): het scherm opent op "Account aanmaken",
// want wie de onboarding doorloopt is bijna altijd nieuw, en de knoppen van
// Apple en Google staan er alleen als hun sleutel er is: een knop die niet
// werkt hoort niet op het scherm. Ze staan onder het vinkje van de
// voorwaarden en werken pas als dat is gezet, net als de knop voor e-mail.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { TextInput } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { logInMet, type Aanbieder } from "@/features/auth/socialLogin";
import { getSupabase } from "@/features/backend/client";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen } from "@/features/profiel/instellingen";

// De schakelaars, zie de kop van dit bestand. Zie docs/scope.md: aanzetten
// is configuratie, geen verbouwing.
const APPLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_APPLE_SERVICE_ID);
const GOOGLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID);

const AANBIEDER_NAAM: Record<Aanbieder, string> = { apple: "Apple", google: "Google" };

const MIN_WACHTWOORD = 6;

// Alleen interface-teksten. {naam}, {n} en {email} worden op de plek ingevuld.
const nl = {
  titel: "Inloggen",
  ondertitel: "Met een account telt je check-in één keer per dag mee. Anoniem.",
  socialMislukt: "Inloggen met {naam} is niet gelukt. Probeer het opnieuw, of gebruik je e-mailadres.",
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
    socialMislukt: "Logging in with {naam} failed. Try again, or use your email address.",
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
  const { stand: startStand } = useLocalSearchParams<{ stand?: string }>();
  const [stand, zetStand] = useState<"inloggen" | "aanmaken">(startStand === "inloggen" ? "inloggen" : "aanmaken");
  const [voorwaarden, zetVoorwaarden] = useState(false);
  const [socialBezig, zetSocialBezig] = useState<Aanbieder | null>(null);

  const client = getSupabase();
  const aanmaken = stand === "aanmaken";

  // Het venster sluiten zonder in te loggen is geen fout: dan geen melding.
  const logInVia = async (aanbieder: Aanbieder) => {
    zetMelding(null);
    zetSocialBezig(aanbieder);
    const uitkomst = await logInMet(aanbieder);
    zetSocialBezig(null);
    if (uitkomst === "ok") {
      await bewaarInstellingen({ consentVoorwaarden: true });
      router.push("/naam");
    } else if (uitkomst === "geenVerbinding") {
      zetMelding(t("geenVerbinding"));
    } else if (uitkomst === "mislukt") {
      zetMelding(t("socialMislukt").replace("{naam}", AANBIEDER_NAAM[aanbieder]));
    }
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
    await bewaarInstellingen({ consentVoorwaarden: true });
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
      await bewaarInstellingen({ consentVoorwaarden: true });
      router.push("/naam");
      return;
    }
    // Zonder sessie is het account wel aangemaakt maar nog niet bevestigd.
    // Een bestaand, al bevestigd adres komt hier ook terecht (Supabase verbergt dat).
    zetStand("inloggen");
    zetMelding(t("bevestigingsmail").replace("{email}", email.trim()));
  };

  return (
    <OnboardingScherm stap={2} titel={aanmaken ? t("accountAanmaken") : t("titel")} uitleg={t("ondertitel")}>

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
      {/* De voorwaarden-tekst is vastgelegd (scope.md) en blijft Nederlands. */}
      <KeuzeVak
        label="Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is"
        gekozen={voorwaarden}
        onPress={() => zetVoorwaarden(!voorwaarden)}
      />
      <Button
        label={aanmaken ? t("accountAanmaken") : t("inloggen")}
        fullWidth
        bezig={bezig}
        disabled={!voorwaarden}
        onPress={aanmaken ? maakAccount : logIn}
      />
      {APPLE_KLAAR ? (
        <Button
          label={t("verderMetApple")}
          variant="secondary"
          fullWidth
          bezig={socialBezig === "apple"}
          disabled={!voorwaarden || socialBezig !== null}
          onPress={() => logInVia("apple")}
        />
      ) : null}
      {GOOGLE_KLAAR ? (
        <Button
          label={t("verderMetGoogle")}
          variant="secondary"
          fullWidth
          bezig={socialBezig === "google"}
          disabled={!voorwaarden || socialBezig !== null}
          onPress={() => logInVia("google")}
        />
      ) : null}

      {melding ? (
        <Card tone="white">
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
    </OnboardingScherm>
  );
}
