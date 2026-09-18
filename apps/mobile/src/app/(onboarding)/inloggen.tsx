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

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";
import { TextField } from "@mind/ui/components/TextField";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { lijktOpEmail, MIN_WACHTWOORD, PAD_MAIL_BEVESTIGD, stuurBevestigingOpnieuw } from "@/features/auth/accountHerstel";
import { logInMet, type Aanbieder } from "@/features/auth/socialLogin";
import { getSupabase } from "@/features/backend/client";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen, instellingenAlsBekend } from "@/features/profiel/instellingen";

// De schakelaars, zie de kop van dit bestand. Zie docs/scope.md: aanzetten
// is configuratie, geen verbouwing.
const APPLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_APPLE_SERVICE_ID);
const GOOGLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID);

const AANBIEDER_NAAM: Record<Aanbieder, string> = { apple: "Apple", google: "Google" };


// Alleen interface-teksten. {naam}, {n} en {email} worden op de plek ingevuld.
const nl = {
  titel: "Inloggen",
  ondertitel: "Met een account tel je mee in het mentale weer van Nederland.",
  socialMislukt: "Inloggen met {naam} is niet gelukt. Probeer het opnieuw, of gebruik je e-mailadres.",
  geenVerbinding: "Geen verbinding. Probeer het later opnieuw.",
  vulEmail: "Vul een geldig e-mailadres in.",
  vulWachtwoordIn: "Vul je wachtwoord in.",
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
  toon: "Toon",
  verberg: "Verberg",
  inloggen: "Inloggen",
  accountAanmaken: "Account aanmaken",
  wachtwoordVergeten: "Wachtwoord vergeten?",
  stuurOpnieuw: "Stuur de mail opnieuw",
  opnieuwVerstuurd: "De mail is opnieuw verstuurd naar {email}. Kijk ook bij ongewenste mail.",
  opnieuwTeVaak: "Er zijn net te veel mails aangevraagd. Probeer het over een uur opnieuw.",
  opnieuwMislukt: "Het versturen is niet gelukt. Probeer het later opnieuw.",
  hebAlAccount: "Ik heb al een account",
  nogGeenAccount: "Nog geen account? Maak er een aan",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Log in",
    ondertitel: "With an account you count towards the mental weather of the Netherlands.",
    socialMislukt: "Logging in with {naam} failed. Try again, or use your email address.",
    geenVerbinding: "There's no connection to the server. Please try again later.",
    vulEmail: "Enter a valid email address.",
    vulWachtwoordIn: "Enter your password.",
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
    toon: "Show",
    verberg: "Hide",
    inloggen: "Log in",
    accountAanmaken: "Create account",
    wachtwoordVergeten: "Forgot password?",
    stuurOpnieuw: "Send the email again",
    opnieuwVerstuurd: "The email was sent again to {email}. Check your spam folder too.",
    opnieuwTeVaak: "Too many emails were requested just now. Try again in an hour.",
    opnieuwMislukt: "Sending didn't work. Please try again later.",
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
  // Wie de voorwaarden op dit toestel al accepteerde (de sessie verliep, de
  // onboarding was af) hoeft het vinkje niet opnieuw te zetten.
  const [voorwaarden, zetVoorwaarden] = useState(() => instellingenAlsBekend()?.consentVoorwaarden === true);
  const [socialBezig, zetSocialBezig] = useState<Aanbieder | null>(null);
  // Wacht er een bevestigingsmail? Dan staat de knop "Stuur de mail opnieuw" erbij.
  const [wachtOpMail, zetWachtOpMail] = useState(false);
  const [opnieuwBezig, zetOpnieuwBezig] = useState(false);

  const client = getSupabase();
  const aanmaken = stand === "aanmaken";

  // Wie de onboarding op dit toestel al had afgerond en alleen de sessie kwijt
  // was, gaat terug naar Home: naam, onderwerpen en toestemming staan er nog.
  // Iedereen anders gaat door met de onboarding (18 september 2026).
  // Wie met een bestaand account inlogt op een toestel zonder instellingen
  // (nieuw toestel, of eerder uitgelogd) moet naam, onderwerpen en toestemming
  // opnieuw geven: die staan alleen op het toestel. Het naamscherm zegt dan
  // in één zin waarom.
  const verderNaInloggen = async (bestaandAccount = false) => {
    const instellingen = await bewaarInstellingen({ consentVoorwaarden: true });
    if (instellingen.onboardingAfgerond) router.replace("/dashboard");
    else router.push(bestaandAccount ? { pathname: "/naam", params: { terug: "1" } } : "/naam");
  };

  // Het venster sluiten zonder in te loggen is geen fout: dan geen melding.
  const logInVia = async (aanbieder: Aanbieder) => {
    zetMelding(null);
    zetSocialBezig(aanbieder);
    const uitkomst = await logInMet(aanbieder);
    zetSocialBezig(null);
    if (uitkomst === "ok") {
      await verderNaInloggen();
    } else if (uitkomst === "geenVerbinding") {
      zetMelding(t("geenVerbinding"));
    } else if (uitkomst === "mislukt") {
      zetMelding(t("socialMislukt").replace("{naam}", AANBIEDER_NAAM[aanbieder]));
    }
  };

  const controleerInvoer = (): boolean => {
    zetMelding(null);
    zetWachtOpMail(false);
    if (!client) {
      zetMelding(t("geenVerbinding"));
      return false;
    }
    if (!lijktOpEmail(email)) {
      zetMelding(t("vulEmail"));
      return false;
    }
    // Het minimum geldt voor een nieuw wachtwoord. Wie inlogt met een ouder,
    // korter wachtwoord moet er gewoon in kunnen.
    if (aanmaken && wachtwoord.length < MIN_WACHTWOORD) {
      zetMelding(t("vulWachtwoord").replace("{n}", String(MIN_WACHTWOORD)));
      return false;
    }
    if (!aanmaken && wachtwoord.length === 0) {
      zetMelding(t("vulWachtwoordIn"));
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
      // Op de foutcode, niet meer op de Engelse tekst: die kan Supabase wijzigen.
      if (error.code === "invalid_credentials") {
        zetMelding(t("verkeerdeCombinatie"));
      } else if (error.code === "email_not_confirmed") {
        zetMelding(t("nietBevestigd"));
        zetWachtOpMail(true);
      } else {
        zetMelding(t("inloggenMislukt"));
      }
      return;
    }
    await verderNaInloggen(true);
  };

  const maakAccount = async () => {
    if (!controleerInvoer() || !client) return;
    zetBezig(true);
    const { data, error } = await client.auth.signUp({
      email: email.trim(),
      password: wachtwoord,
      // De link in de bevestigingsmail opent de app, zie mail-bevestigd.tsx.
      options: { emailRedirectTo: Linking.createURL(PAD_MAIL_BEVESTIGD) },
    });
    zetBezig(false);
    if (error) {
      if (error.code === "user_already_exists") {
        zetMelding(t("bestaatAl"));
        zetStand("inloggen");
      } else {
        zetMelding(t("aanmakenMislukt"));
      }
      return;
    }
    if (data.session) {
      await verderNaInloggen();
      return;
    }
    // Zonder sessie is het account wel aangemaakt maar nog niet bevestigd.
    // Een bestaand, al bevestigd adres komt hier ook terecht (Supabase verbergt dat).
    zetStand("inloggen");
    zetMelding(t("bevestigingsmail").replace("{email}", email.trim()));
    zetWachtOpMail(true);
  };

  const stuurOpnieuw = async () => {
    zetOpnieuwBezig(true);
    const uitkomst = await stuurBevestigingOpnieuw(email);
    zetOpnieuwBezig(false);
    if (uitkomst === "verstuurd") zetMelding(t("opnieuwVerstuurd").replace("{email}", email.trim()));
    else if (uitkomst === "teVaak") zetMelding(t("opnieuwTeVaak"));
    else if (uitkomst === "geenVerbinding") zetMelding(t("geenVerbinding"));
    else zetMelding(t("opnieuwMislukt"));
  };

  return (
    <OnboardingScherm stap={2} titel={aanmaken ? t("accountAanmaken") : t("titel")} uitleg={t("ondertitel")}>

      <TextField
        value={email}
        onChangeText={zetEmail}
        placeholder={t("emailPlaceholder")}
        autoCapitalize="none"
        autoComplete="email"
        textContentType={aanmaken ? "emailAddress" : "username"}
        keyboardType="email-address"
        accessibilityLabel={t("emailLabel")}
      />
      <TextField
        value={wachtwoord}
        onChangeText={zetWachtwoord}
        placeholder={aanmaken ? t("wachtwoordKiezen").replace("{n}", String(MIN_WACHTWOORD)) : t("wachtwoordPlaceholder")}
        autoCapitalize="none"
        autoComplete={aanmaken ? "new-password" : "current-password"}
        textContentType={aanmaken ? "newPassword" : "password"}
        wachtwoord
        toonLabel={t("toon")}
        verbergLabel={t("verberg")}
        accessibilityLabel={t("wachtwoordLabel")}
      />
      {/* De voorwaarden-tekst is vastgelegd (scope.md) en blijft Nederlands. */}
      <KeuzeVak
        label="Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is"
        gekozen={voorwaarden}
        onPress={() => zetVoorwaarden(!voorwaarden)}
      />
      {/* Wat je accepteert moet je kunnen lezen (Stijn, 17 september 2026). */}
      <View style={{ alignItems: "flex-start" }}>
        <Button label="Lees de voorwaarden" variant="link" onPress={() => router.push("/voorwaarden")} />
      </View>
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
      {wachtOpMail ? (
        <Button label={t("stuurOpnieuw")} variant="secondary" fullWidth bezig={opnieuwBezig} onPress={stuurOpnieuw} />
      ) : null}

      {!aanmaken ? (
        <Button
          label={t("wachtwoordVergeten")}
          variant="link"
          fullWidth
          onPress={() => router.push({ pathname: "/wachtwoord-vergeten", params: lijktOpEmail(email) ? { email: email.trim() } : {} })}
        />
      ) : null}

      <Button
        label={aanmaken ? t("hebAlAccount") : t("nogGeenAccount")}
        variant="link"
        fullWidth
        onPress={() => {
          zetMelding(null);
          zetWachtOpMail(false);
          zetStand(aanmaken ? "inloggen" : "aanmaken");
        }}
      />
    </OnboardingScherm>
  );
}
