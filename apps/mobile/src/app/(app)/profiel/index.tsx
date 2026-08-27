// Profiel
//
// Overzicht. Geen profielfoto: die bestaat nergens in de flow (HERKOMST.md,
// Removed on purpose). Er is ook geen naamveld in het datamodel, dus hier
// staat alleen wat er echt is: de inlogstatus en de ingangen naar instellingen.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { getSupabase } from "@/features/backend/client";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";

export default function Profiel() {
  const router = useRouter();
  const [email, zetEmail] = useState<string | null>(null);
  const [geladen, zetGeladen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let actief = true;
      const client = getSupabase();
      if (!client) {
        zetGeladen(true);
        return;
      }
      client.auth.getSession().then(({ data }) => {
        if (!actief) return;
        zetEmail(data.session?.user.email ?? null);
        zetGeladen(true);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  return (
    <ScreenCanvas state="default" metNavRuimte terugKnop={<TerugNaarVorige />}>
      <AppText rol="h1">Profiel</AppText>

      <Card tone="primary" style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <MascotteVlieger state="wolken" hoogte={44} />
        {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
        <View style={{ flexShrink: 1, gap: 2 }}>
          {!geladen ? (
            <AppText rol="bodySmall" kleur="secondary">Even kijken...</AppText>
          ) : email ? (
            <>
              <AppText rol="h3">{email}</AppText>
              <AppText rol="labelCaption" kleur="secondary">Ingelogd</AppText>
            </>
          ) : (
            <>
              <AppText rol="h3">Niet ingelogd</AppText>
              <AppText rol="labelCaption" kleur="secondary">
                Log in om anoniem mee te tellen in het weerbericht.
              </AppText>
            </>
          )}
        </View>
      </Card>

      {geladen && !email ? (
        <Button label="Inloggen" variant="secondary" onPress={() => router.push("/inloggen")} />
      ) : null}

      <View style={{ gap: space[3] }}>
        <Card tone="outline" onPress={() => router.push("/profiel/instellingen")} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppText rol="body">Voorkeuren en toestemmingen</AppText>
          <AppText rol="body" kleur="secondary">{"›"}</AppText>
        </Card>
        <Card tone="outline" onPress={() => router.push("/profiel/account-verwijderen")} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppText rol="body">Account verwijderen</AppText>
          <AppText rol="body" kleur="secondary">{"›"}</AppText>
        </Card>
      </View>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
