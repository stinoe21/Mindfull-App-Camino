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

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { getSupabase } from "@/features/backend/client";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { leesInstellingen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Profiel",
  evenKijken: "Even kijken...",
  ingelogdAls: "Ingelogd als {email}",
  ingelogd: "Ingelogd",
  nietIngelogd: "Niet ingelogd",
  logInUitleg: "Log in om anoniem mee te tellen in het weerbericht.",
  inloggen: "Inloggen",
  voorkeuren: "Voorkeuren en toestemmingen",
  accountVerwijderen: "Account verwijderen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Profile",
    evenKijken: "One moment...",
    ingelogdAls: "Logged in as {email}",
    ingelogd: "Logged in",
    nietIngelogd: "Not logged in",
    logInUitleg: "Log in to count anonymously towards the weather forecast.",
    inloggen: "Log in",
    voorkeuren: "Preferences and consents",
    accountVerwijderen: "Delete account",
  },
};

export default function Profiel() {
  const router = useRouter();
  const t = useVertaling(teksten);
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
    <ScreenCanvas state="default" metNavRuimte terugKnop={<TerugNaarVorige />}>
      <AppText rol="h1">{t("titel")}</AppText>

      <Card tone="primary" style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <MascotteVlieger state="wolken" hoogte={44} />
        {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
        <View style={{ flexShrink: 1, gap: 2 }}>
          {!geladen ? (
            <AppText rol="bodySmall" kleur="secondary">{t("evenKijken")}</AppText>
          ) : email ? (
            <>
              <AppText rol="h3">{naam || email}</AppText>
              <AppText rol="labelCaption" kleur="secondary">{naam ? t("ingelogdAls").replace("{email}", email) : t("ingelogd")}</AppText>
            </>
          ) : (
            <>
              <AppText rol="h3">{t("nietIngelogd")}</AppText>
              <AppText rol="labelCaption" kleur="secondary">
                {t("logInUitleg")}
              </AppText>
            </>
          )}
        </View>
      </Card>

      {geladen && !email ? (
        <Button label={t("inloggen")} variant="secondary" onPress={() => router.push("/inloggen")} />
      ) : null}

      <View style={{ gap: space[3] }}>
        <Card tone="outline" onPress={() => router.push("/profiel/instellingen")} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppText rol="body">{t("voorkeuren")}</AppText>
          <AppText rol="body" kleur="secondary">{"›"}</AppText>
        </Card>
        <Card tone="outline" onPress={() => router.push("/profiel/account-verwijderen")} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppText rol="body">{t("accountVerwijderen")}</AppText>
          <AppText rol="body" kleur="secondary">{"›"}</AppText>
        </Card>
      </View>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
