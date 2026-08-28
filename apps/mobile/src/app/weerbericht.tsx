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
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";
import { WatIsHetWeerbericht } from "@/features/weer/WatIsHetWeerbericht";
import { UITLEG_ANONIMITEIT, WeerberichtIntro } from "@/features/weer/WeerberichtIntro";

export default function Weerbericht() {
  const router = useRouter();
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
        <AppText rol="h1">Weerbericht Nederland</AppText>
        <AppText rol="subtitle" kleur="secondary">Het mentale weer van vandaag, samen opgeteld.</AppText>
      </View>

      {/* De intro hoort bij een getoond weerbericht. Boven de lege staat zou
          "alle check-ins van vandaag" tegenspreken wat eronder staat, en die
          staat is sinds weather_today() alleen afgesloten uurblokken meetelt
          elke dag voor 01:00 in beeld. */}
      {stand?.staat === "geladen" ? <WeerberichtIntro /> : null}

      {stand === null ? (
        <Card tone="outline">
          <ActivityIndicator color={colors.brandDefault} />
          <AppText rol="bodySmall" kleur="secondary" centreer>Het weerbericht wordt opgehaald.</AppText>
        </Card>
      ) : null}

      {stand?.staat === "leeg" ? (
        <Card tone="primary">
          <AppText rol="h3">Nog even geduld</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Er zijn vandaag nog te weinig check-ins om een landelijk beeld te tonen. Kom later terug.
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
          <AppText rol="h3">Log eerst in</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Het landelijke weerbericht is er voor ingelogde gebruikers. Zo telt iedereen precies één
            keer per dag mee.
          </AppText>
          <Button label="Inloggen" variant="secondary" onPress={() => router.push("/inloggen")} />
        </Card>
      ) : null}

      {stand?.staat === "niet-verbonden" || stand?.staat === "fout" ? (
        <Card tone="outline">
          <AppText rol="h3">Geen verbinding</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Het weerbericht kon niet worden opgehaald. Controleer je verbinding en probeer het opnieuw.
          </AppText>
          <Button label="Probeer opnieuw" variant="secondary" onPress={() => laad(true)} />
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
            {String(stand.rijen[0]?.total ?? 0)} check-ins vandaag, allemaal anoniem.
          </AppText>
        </View>
      ) : null}

    </ScreenCanvas>
  );
}
