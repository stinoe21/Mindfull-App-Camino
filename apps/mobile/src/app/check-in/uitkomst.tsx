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

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { tipsBijWeer } from "@/features/content/weerNaarTips";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";
import { WatIsHetWeerbericht } from "@/features/weer/WatIsHetWeerbericht";
import { UITLEG_ANONIMITEIT } from "@/features/weer/WeerberichtIntro";

import type { WeatherCode } from "@mind/types";

// Interface-teksten. De weerbeeld-uitkomsten (UITKOMSTEN) en de privacy-uitleg
// zijn canonieke content en blijven Nederlands; de statusmeldingen en de
// bediening hieronder zijn wel bediening. {melding}-sleutels lopen gelijk aan
// de insturenuitkomst; "niet-gedeeld" krijgt bewust geen regel.
const nl = {
  meldingGelukt:
    "Dankjewel voor je check-in. Jouw weer telt anoniem mee in het mentale weerbericht van Nederland.",
  meldingNietVerbonden:
    "Er was geen verbinding, dus deze check-in kon niet meetellen in het landelijke weerbericht. Je eigen weer staat hier gewoon.",
  meldingNietIngelogd:
    "Je was niet ingelogd, dus deze check-in telt niet mee in het landelijke weerbericht. Je eigen weer staat hier gewoon.",
  leegTitel: "Nog geen check-in vandaag",
  leegUitleg: "Doe eerst de check-in, dan staat hier jouw weer van vandaag.",
  evenInchecken: "Even inchecken",
  terugDashboard: "Terug naar dashboard",
  jouwWeer: "JOUW MENTALE WEERBERICHT",
  voorVandaag: "VOOR VANDAAG",
  lezenAlsJeWilt: "LEZEN, ALS JE WILT",
  bron: "Bron: MIND",
  bekijkWeerbericht: "Bekijk het weerbericht van Nederland",
  deelJeWeer: "Deel je weer",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    meldingGelukt:
      "Thank you for your check-in. Your weather counts anonymously towards the mental weather forecast of the Netherlands.",
    meldingNietVerbonden:
      "There was no connection, so this check-in couldn't count towards the national weather forecast. Your own weather is still here.",
    meldingNietIngelogd:
      "You weren't logged in, so this check-in doesn't count towards the national weather forecast. Your own weather is still here.",
    leegTitel: "No check-in yet today",
    leegUitleg: "Do the check-in first, then your weather of the day will appear here.",
    evenInchecken: "Check in",
    terugDashboard: "Back to dashboard",
    jouwWeer: "YOUR MENTAL WEATHER",
    voorVandaag: "FOR TODAY",
    lezenAlsJeWilt: "READ, IF YOU LIKE",
    bron: "Source: MIND",
    bekijkWeerbericht: "See the weather forecast of the Netherlands",
    deelJeWeer: "Share your weather",
  },
};

export default function CheckInUitkomst() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { melding } = useLocalSearchParams<{ melding?: string }>();
  const MELDINGEN: Record<string, string> = {
    gelukt: t("meldingGelukt"),
    "al-ingecheckt": t("meldingGelukt"),
    "niet-verbonden": t("meldingNietVerbonden"),
    "niet-ingelogd": t("meldingNietIngelogd"),
  };
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
        <AppText rol="h2" centreer>{t("leegTitel")}</AppText>
        <AppText rol="body" kleur="secondary" centreer>
          {t("leegUitleg")}
        </AppText>
        <Button label={t("evenInchecken")} fullWidth onPress={() => router.replace("/check-in/1")} />
        <Button label={t("terugDashboard")} variant="link" onPress={() => router.replace("/dashboard")} />
      </ScreenCanvas>
    );
  }

  const tekst = weerbeeld ? UITKOMSTEN[weerbeeld] : null;

  const deel = () => {
    if (!tekst) return;
    // Delen is een keuze van de gebruiker zelf; er gaat niets automatisch weg.
    Share.share({
      message:
        (weerbeeld ? WEER_NAMEN[weerbeeld] + ". " : "") +
        tekst.kop +
        " Dit is ongeveer mijn weer vandaag, via het Mentale Weerbericht van MIND.",
    });
  };

  return (
    <ScreenCanvas variant="overlay" state={weerbeeld ?? "default"} sheetTop={130}>
      {weerbeeld ? <MascotteVlieger state={weerbeeld} hoogte={90} /> : null}
      {/* Eerst het weer zelf, zoals in scherm 07 van het ontwerp: overline,
          de naam van het weerbeeld groot, dan de duiding. Zonder de naam las
          het scherm als een tip zonder weerbericht. */}
      {tekst && weerbeeld ? (
        <View style={{ gap: space[2], alignSelf: "stretch", alignItems: "center" }}>
          <AppText rol="labelOverline" kleur="secondary" centreer>{t("jouwWeer")}</AppText>
          <AppText rol="h1" centreer>{WEER_NAMEN[weerbeeld]}</AppText>
          <AppText rol="subtitle" centreer>{tekst.kop}</AppText>
          <AppText rol="bodySmall" kleur="secondary" centreer>{tekst.duiding}</AppText>
        </View>
      ) : null}
      {tekst ? (
        <Card tone="white" style={{ alignSelf: "stretch" }}>
          <AppText rol="labelOverline" kleur="secondary">{t("voorVandaag")}</AppText>
          <AppText rol="h3">{tekst.tip}</AppText>
        </Card>
      ) : null}
      {weerbeeld ? (
        <View style={{ gap: space[2], alignSelf: "stretch" }}>
          <AppText rol="labelOverline" kleur="secondary">{t("lezenAlsJeWilt")}</AppText>
          {tipsBijWeer(weerbeeld).map((a) => (
            <Card
              key={a.slug}
              tone="outline"
              onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
            >
              <View style={{ flexShrink: 1 }}>
                <AppText rol="bodyEmphasis">{a.titel}</AppText>
                <AppText rol="labelCaption" kleur="secondary">{a.onderwerp === a.titel ? t("bron") : a.onderwerp + " · " + t("bron")}</AppText>
              </View>
              <AppText rol="body" kleur="secondary">{"›"}</AppText>
            </Card>
          ))}
        </View>
      ) : null}
      {melding && MELDINGEN[melding] ? (
        <AppText rol="bodySmall" kleur="secondary" centreer>{MELDINGEN[melding]}</AppText>
      ) : null}
      {/* Dezelfde privacy-uitleg als in de onboarding en op het weerbericht:
          dit scherm is van jou, het landelijke beeld is anoniem. */}
      <Card tone="outline" style={{ alignSelf: "stretch" }}>
        <AppText rol="bodySmall" kleur="secondary">{UITLEG_ANONIMITEIT}</AppText>
        <WatIsHetWeerbericht />
      </Card>
      <Button
        label={t("bekijkWeerbericht")}
        variant="secondary"
        fullWidth
        onPress={() => router.push("/weerbericht")}
      />
      <Button label={t("terugDashboard")} fullWidth onPress={() => router.replace("/dashboard")} />
      <Button label={t("deelJeWeer")} variant="link" onPress={deel} />
    </ScreenCanvas>
  );
}
