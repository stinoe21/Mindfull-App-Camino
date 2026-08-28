// Inloggen
//
// Apple (verplicht naast Google, richtlijn 4.8), Google, of e-mail.
// De Apple- en Google-knop zijn gebouwd "op een sleutel na" (docs/scope.md):
// scherm, knop en foutafhandeling staan er, de configuratie komt uit
// omgevingsvariabelen, en een ontbrekende waarde blokkeert de onboarding niet.
// E-mail loopt via e-mailadres en wachtwoord. Bestaat het account nog niet,
// dan kan de gebruiker het met dezelfde gegevens aanmaken. Let op de
// SMTP-limiet tijdens testen: docs/limieten-en-misbruik.md sectie 1.
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
import { getSupabase } from "@/features/backend/client";

// De sleutels van Mind, zodra die er zijn. Zie docs/scope.md: aanzetten is dan
// configuratie, geen verbouwing.
const APPLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_APPLE_SERVICE_ID);
const GOOGLE_KLAAR = Boolean(process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID);

const MIN_WACHTWOORD = 6;

export default function Inloggen() {
  const router = useRouter();
  const [email, zetEmail] = useState("");
  const [wachtwoord, zetWachtwoord] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);
  const [aanmakenMogelijk, zetAanmakenMogelijk] = useState(false);

  const client = getSupabase();

  const socialNogNiet = (naam: string) => {
    zetMelding("Inloggen met " + naam + " is in deze testversie nog niet beschikbaar. Dat wordt aangezet zodra de sleutels van Mind er zijn.");
  };

  const controleerInvoer = (): boolean => {
    zetMelding(null);
    zetAanmakenMogelijk(false);
    if (!client) {
      zetMelding("Er is geen verbinding met de server. Probeer het later opnieuw.");
      return false;
    }
    if (!email.includes("@")) {
      zetMelding("Vul een e-mailadres in.");
      return false;
    }
    if (wachtwoord.length < MIN_WACHTWOORD) {
      zetMelding("Vul een wachtwoord in van minstens " + MIN_WACHTWOORD + " tekens.");
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
        zetMelding("Dit e-mailadres en wachtwoord horen niet bij elkaar. Nog geen account? Maak er dan een aan met deze gegevens.");
        zetAanmakenMogelijk(true);
      } else if (error.message.toLowerCase().includes("not confirmed")) {
        zetMelding("Dit e-mailadres is nog niet bevestigd. Kijk in je mail voor de bevestigingslink.");
      } else {
        zetMelding("Inloggen is niet gelukt. Probeer het over een minuut opnieuw.");
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
      zetMelding("Het account kon niet worden aangemaakt. Probeer het over een minuut opnieuw.");
      return;
    }
    if (data.session) {
      router.push("/naam");
      return;
    }
    zetMelding("We hebben een bevestigingsmail gestuurd naar " + email.trim() + ". Klik op de link en log daarna hier in.");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Inloggen</AppText>
        <AppText rol="subtitle" kleur="secondary">Zodat jouw check-in één keer per dag meetelt.</AppText>
      </View>

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
      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={wachtwoord}
          onChangeText={zetWachtwoord}
          placeholder="Wachtwoord"
          placeholderTextColor={colors.textSecondary}
          autoCapitalize="none"
          autoComplete="password"
          secureTextEntry
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel="Wachtwoord"
        />
      </Card>
      <Button label="Inloggen" fullWidth bezig={bezig} onPress={logIn} />

      {melding ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{melding}</AppText>
        </Card>
      ) : null}

      {aanmakenMogelijk ? (
        <Button label="Account aanmaken" variant="secondary" fullWidth bezig={bezig} onPress={maakAccount} />
      ) : null}

    </ScreenCanvas>
  );
}
