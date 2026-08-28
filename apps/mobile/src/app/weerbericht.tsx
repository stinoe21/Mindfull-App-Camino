// Het weerbericht van Nederland
//
// Het collectieve beeld, gelezen via de RPC weather_today. Nul rijen betekent
// onder de toondrempel: dat is de empty state ("Kom later terug"), geen fout.
// Specificatie: docs/datamodel.md, docs/limieten-en-misbruik.md, prototype
// reference/ui_kits/mind-app/index.html (Weerbericht).

import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";
import { WeerberichtIntro } from "@/features/weer/WeerberichtIntro";

const nl = {
  titel: "Weerbericht Nederland",
  ondertitel: "Het mentale weer van vandaag, samen opgeteld.",
  ophalen: "Het weerbericht wordt opgehaald.",
  leegTitel: "Nog even geduld",
  leegUitleg: "Er zijn vandaag nog te weinig check-ins om een landelijk beeld te tonen. Kom later terug.",
  logInTitel: "Log eerst in",
  logInUitleg:
    "Het landelijke weerbericht is er voor ingelogde gebruikers. Zo telt iedereen precies één keer per dag mee.",
  inloggen: "Inloggen",
  geenVerbindingTitel: "Geen verbinding",
  geenVerbindingUitleg:
    "Het weerbericht kon niet worden opgehaald. Controleer je verbinding en probeer het opnieuw.",
  probeerOpnieuw: "Probeer opnieuw",
  totaalMeta: "{n} check-ins vandaag, allemaal anoniem.",
  terugDashboard: "Terug naar dashboard",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Weather forecast Netherlands",
    ondertitel: "Today's mental weather, added up together.",
    ophalen: "Loading the weather forecast.",
    leegTitel: "Just a little longer",
    leegUitleg: "There are too few check-ins today to show a national picture. Come back later.",
    logInTitel: "Log in first",
    logInUitleg:
      "The national weather forecast is for logged-in users. That way everyone counts exactly once per day.",
    inloggen: "Log in",
    geenVerbindingTitel: "No connection",
    geenVerbindingUitleg:
      "The weather forecast couldn't be loaded. Check your connection and try again.",
    probeerOpnieuw: "Try again",
    totaalMeta: "{n} check-ins today, all anonymous.",
    terugDashboard: "Back to dashboard",
  },
};

export default function Weerbericht() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [stand, zetStand] = useState<WeerberichtStand | null>(null);

  const laad = useCallback(async (vernieuw = false) => {
    zetStand(null);
    zetStand(await haalWeerbericht(vernieuw));
  }, []);

  useEffect(() => {
    laad();
  }, [laad]);

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle" kleur="secondary">{t("ondertitel")}</AppText>
      </View>

      {/* De intro hoort bij een getoond weerbericht. Boven de lege staat zou
          "alle check-ins van vandaag" tegenspreken wat eronder staat, en die
          staat is sinds weather_today() alleen afgesloten uurblokken meetelt
          elke dag voor 01:00 in beeld. */}
      {stand?.staat === "geladen" ? <WeerberichtIntro /> : null}

      {stand === null ? (
        <Card tone="outline">
          <ActivityIndicator color={colors.brandDefault} />
          <AppText rol="bodySmall" kleur="secondary" centreer>{t("ophalen")}</AppText>
        </Card>
      ) : null}

      {stand?.staat === "leeg" ? (
        <Card tone="primary">
          <AppText rol="h3">{t("leegTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("leegUitleg")}
          </AppText>
        </Card>
      ) : null}

      {stand?.staat === "niet-ingelogd" ? (
        <Card tone="primary">
          <AppText rol="h3">{t("logInTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("logInUitleg")}
          </AppText>
          <Button label={t("inloggen")} variant="secondary" onPress={() => router.push("/inloggen")} />
        </Card>
      ) : null}

      {stand?.staat === "niet-verbonden" || stand?.staat === "fout" ? (
        <Card tone="outline">
          <AppText rol="h3">{t("geenVerbindingTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("geenVerbindingUitleg")}
          </AppText>
          <Button label={t("probeerOpnieuw")} variant="secondary" onPress={() => laad(true)} />
        </Card>
      ) : null}

      {stand?.staat === "geladen" ? (
        <View style={{ gap: space[3] }}>
          {stand.rijen.map((rij) => (
            <Card key={rij.weather} tone="outline" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <AppText rol="body">{rij.label}</AppText>
              <AppText rol="bodyEmphasis" kleur="secondary">{rij.share}%</AppText>
            </Card>
          ))}
          <AppText rol="bodySmall" kleur="secondary">
            {t("totaalMeta").replace("{n}", String(stand.rijen[0]?.total ?? 0))}
          </AppText>
        </View>
      ) : null}

      <Button label={t("terugDashboard")} variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
