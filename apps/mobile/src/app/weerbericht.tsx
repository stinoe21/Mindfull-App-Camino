// Het weerbericht van Nederland
//
// Het collectieve beeld, gelezen via de RPC weather_today. Nul rijen betekent
// onder de toondrempel: dat is de empty state ("Kom later terug"), geen fout.
// Specificatie: docs/datamodel.md, docs/limieten-en-misbruik.md, prototype
// reference/ui_kits/mind-app/index.html (Weerbericht). Sinds 13 september
// 2026 (Stijn, UX-ronde) staat de kaart per provincie ook hier, groot: Home
// had de kaart en deze pagina alleen vijf regels, en dat was andersom.
// Sinds 14 september 2026 (Stijn) staat hier geen uitleg over de anonimisering
// meer, ook niet achter een info-icoon: dat staat al in de voorwaarden en de
// toestemming, en een uitlegkaart op elke pagina kost meer dan hij oplevert.

import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { KaartNederland, type ProvincieCode } from "@mind/ui/components/KaartNederland";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { KAARTKLEUR } from "@/features/weer/kaartKleuren";
import { isProvincie } from "@/features/weer/provincies";
import { haalWeerbericht, haalWeerberichtProvincies, type WeerberichtStand } from "@/features/weer/weerbericht";

import { WEATHER_CODES, type WeatherCode, type WeatherTodayProvince } from "@mind/types";

const nl = {
  titel: "Het mentale weer van Nederland",
  ondertitel: "Samen opgeteld, zonder namen.",
  ophalen: "Even geduld.",
  leegTitel: "Nog te vroeg voor een beeld",
  leegUitleg: "Later vandaag staat hier meer.",
  logInTitel: "Hiervoor moet je ingelogd zijn",
  logInUitleg:
    "Zo telt iedereen één keer per dag mee.",
  inloggen: "Inloggen",
  geenVerbindingTitel: "Geen verbinding",
  geenVerbindingUitleg:
    "Het mentale weer kon niet worden opgehaald. Controleer je verbinding en probeer het opnieuw.",
  probeerOpnieuw: "Probeer opnieuw",
  totaalMeta: "{n} check-ins vandaag, allemaal anoniem.",
  kaartTitel: "Per provincie",
  kaartUitleg: "Het weer dat we vandaag het vaakst zien. Een provincie kleurt zodra er genoeg check-ins zijn.",
  landelijk: "Heel Nederland",
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
    kaartTitel: "Per province",
    kaartUitleg: "The weather we see most today. A province gets its colour once there are enough check-ins.",
    landelijk: "All of the Netherlands",
    terugDashboard: "Back to Home",
  },
};

export default function Weerbericht() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [stand, zetStand] = useState<WeerberichtStand | null>(null);
  const [provincies, zetProvincies] = useState<WeatherTodayProvince[]>([]);

  const laad = useCallback(async (vernieuw = false) => {
    zetStand(null);
    zetStand(await haalWeerbericht(vernieuw));
    zetProvincies(await haalWeerberichtProvincies(vernieuw));
  }, []);

  const isWeerCode = (code: string): code is WeatherCode => (WEATHER_CODES as readonly string[]).includes(code);
  const kaartKleuren: Partial<Record<ProvincieCode, string>> = {};
  for (const rij of provincies) {
    if (isProvincie(rij.province) && isWeerCode(rij.weather)) kaartKleuren[rij.province] = KAARTKLEUR[rij.weather];
  }

  useEffect(() => {
    laad();
  }, [laad]);

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      {stand === null ? (
        <Card tone="white">
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
        <Card tone="white">
          <AppText rol="h3">{t("geenVerbindingTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("geenVerbindingUitleg")}
          </AppText>
          <Button label={t("probeerOpnieuw")} variant="secondary" onPress={() => laad(true)} />
        </Card>
      ) : null}

      {stand?.staat === "geladen" ? (
        <>
          {/* De kaart, groot, met de legenda van de weertinten eronder. */}
          <Card tone="primary" style={{ backgroundColor: palette.primary100, alignItems: "center", gap: space[4] }}>
            <View style={{ alignSelf: "stretch", gap: space[1] }}>
              <AppText rol="h3">{t("kaartTitel")}</AppText>
              <AppText rol="bodySmall">{t("kaartUitleg")}</AppText>
            </View>
            <KaartNederland breedte={220} kleuren={kaartKleuren} />
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: space[3] }}>
              {WEATHER_CODES.map((code) => (
                <View key={code} style={{ flexDirection: "row", alignItems: "center", gap: space[1] }}>
                  <View style={{ width: space[3], height: space[3], borderRadius: radius.pill, backgroundColor: KAARTKLEUR[code] }} />
                  <WeerIcoon staat={code} hoogte={20} />
                </View>
              ))}
            </View>
          </Card>

          <View style={{ gap: space[3] }}>
            <AppText rol="h3">{t("landelijk")}</AppText>
            {stand.rijen.map((rij) => (
              <Card key={rij.weather} tone="white" style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
                {isWeerCode(rij.weather) ? <WeerIcoon staat={rij.weather} hoogte={28} /> : null}
                <AppText rol="body" style={{ flex: 1 }}>{rij.label}</AppText>
                <AppText rol="bodyEmphasis" kleur="secondary">{rij.share}%</AppText>
              </Card>
            ))}
            <AppText rol="bodySmall" kleur="secondary">
              {t("totaalMeta").replace("{n}", String(stand.rijen[0]?.total ?? 0))}
            </AppText>
          </View>
        </>
      ) : null}

    </ScreenCanvas>
  );
}
