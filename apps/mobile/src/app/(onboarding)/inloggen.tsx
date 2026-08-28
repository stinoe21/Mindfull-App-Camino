// Inloggen
//
// Apple (verplicht naast Google, richtlijn 4.8), Google, of e-mail.
// De Apple- en Google-knop zijn gebouwd "op een sleutel na" (docs/scope.md):
// scherm, knop en foutafhandeling staan er, de configuratie komt uit
// omgevingsvariabelen, en een ontbrekende waarde blokkeert de onboarding niet.
// E-mail loopt via een inlogcode (OTP). Let op de SMTP-limiet tijdens testen:
// docs/limieten-en-misbruik.md sectie 1.

import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { getSupabase } from "@/features/backend/client";

// De sleutels van Mind, zodra die er zijn. Zie docs/scope.md: aanzetten is dan
// configuratie, geen verbouwing.
const APPLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_APPLE_SERVICE_ID);
const GOOGLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID);

type Fase = "keuze" | "code" | "klaar";

export default function Inloggen() {
  const router = useRouter();
  const [fase, zetFase] = useState<Fase>("keuze");
  const [email, zetEmail] = useState("");
  const [code, zetCode] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  const client = getSupabase();

  const socialNogNiet = (naam: string) => {
    zetMelding("Inloggen met " + naam + " is in deze testversie nog niet beschikbaar. Dat wordt aangezet zodra de sleutels van Mind er zijn.");
  };

  const stuurCode = async () => {
    zetMelding(null);
    if (!client) {
      zetMelding("Er is geen verbinding met de server. Je kunt als testversie zonder account verdergaan.");
      return;
    }
    if (!email.includes("@")) {
      zetMelding("Vul een e-mailadres in.");
      return;
    }
    zetBezig(true);
    const { error } = await client.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: true } });
    zetBezig(false);
    if (error) {
      zetMelding("De inlogcode kon niet worden verstuurd. Probeer het over een minuut opnieuw.");
      return;
    }
    zetFase("code");
  };

  const controleerCode = async () => {
    zetMelding(null);
    if (!client) return;
    zetBezig(true);
    const { error } = await client.auth.verifyOtp({ email: email.trim(), token: code.trim(), type: "email" });
    zetBezig(false);
    if (error) {
      zetMelding("Die code klopt niet of is verlopen. Vraag zo nodig een nieuwe aan.");
      return;
    }
    router.push("/voorkeuren");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Inloggen</AppText>
        <AppText rol="subtitle" kleur="secondary">Zodat jouw check-in één keer per dag meetelt.</AppText>
      </View>

      {fase === "keuze" ? (
        <>
          <Button
            label="Verder met Apple"
            variant="secondary"
            fullWidth
            onPress={() => (APPLE_KLAAR ? socialNogNiet("Apple") : socialNogNiet("Apple"))}
          />
          <Button
            label="Verder met Google"
            variant="secondary"
            fullWidth
            onPress={() => (GOOGLE_KLAAR ? socialNogNiet("Google") : socialNogNiet("Google"))}
          />

          <Card tone="outline" style={{ paddingVertical: space[2] }}>
            <TextInput
              value={email}
              onChangeText={zetEmail}
              placeholder="Of vul je e-mailadres in"
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
              accessibilityLabel="E-mailadres"
            />
          </Card>
          <Button label="Stuur mij een inlogcode" fullWidth bezig={bezig} onPress={stuurCode} />
        </>
      ) : null}

      {fase === "code" ? (
        <>
          <Card tone="white">
            <AppText rol="body">
              {"We hebben een inlogcode gestuurd naar " + email.trim() + "."}
            </AppText>
          </Card>
          <Card tone="outline" style={{ paddingVertical: space[2] }}>
            <TextInput
              value={code}
              onChangeText={zetCode}
              placeholder="Inlogcode"
              placeholderTextColor={colors.textSecondary}
              keyboardType="number-pad"
              style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
              accessibilityLabel="Inlogcode"
            />
          </Card>
          <Button label="Log in" fullWidth bezig={bezig} onPress={controleerCode} />
          <Button label="Ander e-mailadres" variant="link" onPress={() => zetFase("keuze")} />
        </>
      ) : null}

      {melding ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{melding}</AppText>
        </Card>
      ) : null}

      {/* Testversie: zonder werkende sleutels of SMTP mag de onboarding niet
          doodlopen (docs/scope.md). Deze doorgang verdwijnt bij livegang. */}
      <Button label="Verder zonder account (testversie)" variant="link" fullWidth onPress={() => router.push("/voorkeuren")} />
    </ScreenCanvas>
  );
}
