// Profiel
//
// Overzicht. Geen profielfoto: die bestaat nergens in de flow (HERKOMST.md,
// Removed on purpose). Er is geen naamveld in het datamodel; de voornaam die
// hier kan staan komt uit de lokale instellingen en verlaat het toestel nooit.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { getSupabase } from "@/features/backend/client";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { InstellingenGroep, InstellingenRij } from "@/features/profiel/InstellingenRij";

export default function Profiel() {
  const router = useRouter();
  const [email, zetEmail] = useState<string | null>(null);
  const [naam, zetNaam] = useState("");
  const [geladen, zetGeladen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesInstellingen().then((i) => {
        if (actief) zetNaam(i.naam);
      });
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
    <ScreenCanvas state="default" metNavRuimte>
      {/* De ingang naar Instellingen rechtsboven. Nu als tekst; het tandwiel-
          icoon komt van de eigenaar en vervangt dan alleen deze knop. */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
        <AppText rol="h1">Profiel</AppText>
        <Button label="Instellingen" variant="link" onPress={() => router.push("/profiel/instellingen")} />
      </View>

      <Card tone="primary" style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <MascotteVlieger state="wolken" hoogte={44} />
        {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
        <View style={{ flexShrink: 1, gap: 2 }}>
          {!geladen ? (
            <AppText rol="bodySmall" kleur="secondary">Even kijken...</AppText>
          ) : email ? (
            <>
              <AppText rol="h3">{naam || email}</AppText>
              <AppText rol="labelCaption" kleur="secondary">{naam ? "Ingelogd als " + email : "Ingelogd"}</AppText>
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

      <InstellingenGroep titel="Jouw gegevens">
        <InstellingenRij
          label="Naam"
          omschrijving={naam ? naam + " · alleen voor de begroeting, blijft op je telefoon" : "Nog niet ingevuld, mag leeg blijven"}
          onPress={() => router.push("/profiel/instellingen")}
        />
        <InstellingenRij label="E-mailadres" omschrijving={email ?? "Niet ingelogd"} laatste />
      </InstellingenGroep>

      <InstellingenGroep titel="Voorkeuren">
        <InstellingenRij
          label="Onderwerpen"
          omschrijving="Bepaalt welke tips je als eerste ziet"
          onPress={() => router.push("/profiel/instellingen")}
          laatste
        />
      </InstellingenGroep>

      <InstellingenGroep titel="Privacy">
        <InstellingenRij
          label="Toestemmingen"
          omschrijving="Meetellen in het weerbericht, en de voorwaarden"
          onPress={() => router.push("/profiel/instellingen")}
        />
        <InstellingenRij
          label="Wat er met je check-in gebeurt"
          omschrijving="Hoe het anonieme weerbericht werkt"
          onPress={() => router.push("/weerbericht")}
        />
        <InstellingenRij label="Privacyverklaring" omschrijving="Volgt zodra MIND de tekst online heeft" uit laatste />
      </InstellingenGroep>

      <InstellingenGroep titel="Account">
        <InstellingenRij
          label="Account verwijderen"
          omschrijving="Haalt alles weg, op de server en op je telefoon"
          onPress={() => router.push("/profiel/account-verwijderen")}
          laatste
        />
      </InstellingenGroep>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
