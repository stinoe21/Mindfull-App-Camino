// Jouw weer
//
// Het persoonlijke weerbeeld: vlieger, weerstaat en een zachte tip. Nooit een
// score, nooit goed of fout (productprincipes 1 tot en met 4). De teksten voor
// "mist" zijn canoniek uit het prototype; zie features/weer/teksten.ts.
//
// Sinds de feedback van Mind van 27 augustus 2026 kom je hier direct na de
// check-in (zonder tussenscherm) en staat de bevestiging of melding over het
// meetellen hier, via de melding-parameter.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Share, View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { tipsBijWeer } from "@/features/content/weerNaarTips";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN } from "@/features/weer/teksten";

import type { WeatherCode } from "@mind/types";

// Wat het insturen opleverde, in gewone taal. "niet-gedeeld" (consent uit)
// krijgt bewust geen regel: wie niet meedoet, hoeft dat niet terug te lezen.
const MELDINGEN: Record<string, string> = {
  gelukt: "Dankjewel voor je check-in. Jouw weer telt anoniem mee in het mentale weerbericht van Nederland.",
  "al-ingecheckt": "Dankjewel voor je check-in. Jouw weer telt anoniem mee in het mentale weerbericht van Nederland.",
  "niet-verbonden":
    "Er was geen verbinding, dus deze check-in kon niet meetellen in het landelijke weerbericht. Je eigen weer staat hier gewoon.",
  "niet-ingelogd":
    "Je was niet ingelogd, dus deze check-in telt niet mee in het landelijke weerbericht. Je eigen weer staat hier gewoon.",
};

export default function CheckInUitkomst() {
  const router = useRouter();
  const { melding } = useLocalSearchParams<{ melding?: string }>();
  const [geladen, zetGeladen] = useState(false);
  const [weerbeeld, zetWeerbeeld] = useState<WeatherCode | null>(null);

  useEffect(() => {
    leesWeerVanVandaag().then((data) => {
      zetWeerbeeld(data?.weerbeeld ?? null);
      zetGeladen(true);
    });
  }, []);

  if (geladen && !weerbeeld) {
    // Empty state: nog geen check-in vandaag.
    return (
      <ScreenCanvas variant="overlay" state="default" sheetTop={200}>
        <MascotteVlieger state="wolken" hoogte={90} />
        <AppText rol="h2" centreer>Nog geen check-in vandaag</AppText>
        <AppText rol="body" kleur="secondary" centreer>
          Doe eerst de check-in, dan staat hier jouw weer van vandaag.
        </AppText>
        <Button label="Even inchecken" fullWidth onPress={() => router.replace("/check-in/1")} />
        <Button label="Terug naar dashboard" variant="link" onPress={() => router.replace("/dashboard")} />
      </ScreenCanvas>
    );
  }

  const tekst = weerbeeld ? UITKOMSTEN[weerbeeld] : null;

  const deel = () => {
    if (!tekst) return;
    // Delen is een keuze van de gebruiker zelf; er gaat niets automatisch weg.
    Share.share({ message: tekst.kop + " Dit is ongeveer mijn weer vandaag, via het Mentale Weerbericht van MIND." });
  };

  return (
    <ScreenCanvas variant="overlay" state={weerbeeld ?? "default"} sheetTop={130}>
      {weerbeeld ? <MascotteVlieger state={weerbeeld} hoogte={90} /> : null}
      {tekst ? (
        <View style={{ gap: space[2], alignSelf: "stretch", alignItems: "center" }}>
          <AppText rol="h3" centreer>{tekst.kop}</AppText>
          <AppText rol="bodySmall" kleur="secondary" centreer>{tekst.duiding}</AppText>
        </View>
      ) : null}
      {tekst ? (
        <Card tone="white" style={{ alignSelf: "stretch" }}>
          <AppText rol="labelOverline" kleur="secondary">VOOR VANDAAG</AppText>
          <AppText rol="h3">{tekst.tip}</AppText>
        </Card>
      ) : null}
      {weerbeeld ? (
        <View style={{ gap: space[2], alignSelf: "stretch" }}>
          <AppText rol="labelOverline" kleur="secondary">LEZEN, ALS JE WILT</AppText>
          {tipsBijWeer(weerbeeld).map((a) => (
            <Card
              key={a.slug}
              tone="outline"
              onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
            >
              <View style={{ flexShrink: 1 }}>
                <AppText rol="bodyEmphasis">{a.titel}</AppText>
                <AppText rol="labelCaption" kleur="secondary">{a.onderwerp + " · Bron: MIND"}</AppText>
              </View>
              <AppText rol="body" kleur="secondary">{"›"}</AppText>
            </Card>
          ))}
        </View>
      ) : null}
      {melding && MELDINGEN[melding] ? (
        <AppText rol="bodySmall" kleur="secondary" centreer>{MELDINGEN[melding]}</AppText>
      ) : null}
      <Button
        label="Bekijk het weerbericht van Nederland"
        variant="secondary"
        fullWidth
        onPress={() => router.push("/weerbericht")}
      />
      <Button label="Terug naar dashboard" fullWidth onPress={() => router.replace("/dashboard")} />
      <Button label="Deel je weer" variant="link" onPress={deel} />
    </ScreenCanvas>
  );
}
