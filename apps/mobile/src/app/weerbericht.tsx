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
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";
import { WatIsHetWeerbericht } from "@/features/weer/WatIsHetWeerbericht";
import { UITLEG_ANONIMITEIT, WeerberichtIntro } from "@/features/weer/WeerberichtIntro";

const nl = {
  titel: "Het mentale weer van Nederland",
  ondertitel: "Het mentale weer van vandaag, samen opgeteld.",
  ophalen: "Even geduld.",
  leegTitel: "Nog te vroeg voor een beeld",
  leegUitleg: "Nog te weinig check-ins voor een landelijk beeld. Later vandaag staat hier meer.",
  logInTitel: "Hiervoor moet je ingelogd zijn",
  logInUitleg:
    "Zo telt iedereen één keer per dag mee.",
  inloggen: "Inloggen",
  geenVerbindingTitel: "Geen verbinding",
  geenVerbindingUitleg:
    "Het weerbericht kon niet worden opgehaald. Controleer je verbinding en probeer het opnieuw.",
  probeerOpnieuw: "Probeer opnieuw",
  totaalMeta: "{n} check-ins vandaag, allemaal anoniem.",
  terugDashboard: "Terug naar Home",
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
    terugDashboard: "Back to Home",
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
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
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
        <Card tone="primary" style={{ alignItems: "center", gap: space[3] }}>
          {/* Een beeld in de lege staat: de vlieger in de mist, want er is nog niets te zien. */}
          <MascotteVlieger state="mist" hoogte={72} />
          <AppText rol="h3" centreer>{t("leegTitel")}</AppText>
          <AppText rol="bodySmall" centreer>
            {t("leegUitleg")}
          </AppText>
        </Card>
      ) : null}

      {/* De lege staat liet driekwart scherm leeg; de uitleg hoort hier dan
          wel, zodat je niet voor niets bent gekomen. */}
      {stand?.staat === "leeg" ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{UITLEG_ANONIMITEIT}</AppText>
          <WatIsHetWeerbericht />
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

    </ScreenCanvas>
  );
}
