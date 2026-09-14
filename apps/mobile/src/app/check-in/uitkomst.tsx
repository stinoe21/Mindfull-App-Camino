// Jouw weer
//
// Het persoonlijke weerbeeld: vlieger, weerstaat en een zachte tip. Nooit een
// score, nooit goed of fout (productprincipes 1 tot en met 4). De teksten voor
// "mist" zijn canoniek uit het prototype; zie features/weer/teksten.ts.
//
// Sinds de feedback van Mind van 27 augustus 2026 kom je hier direct na de
// check-in (zonder tussenscherm) en staat de bevestiging of melding over het
// meetellen hier, via de melding-parameter.
//
// Sinds 14 september 2026 (Stijn: de check-in was "een huisstijlbreuk") is
// dit hetzelfde vel als elk ander scherm: de vlieger op de hero, in de kleur
// van het weer, en daaronder links uitgelijnd de naam van het weer, de
// duiding, de tip op het vel en de leestips als lijst. De volle gradient
// zonder vel met alles gecentreerd (variant "overlay") is hier weg.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Share, View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Verschijn } from "@mind/ui/components/Verschijn";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { houvastVoorArtikel } from "@/features/content/houvast";
import { tipsBijWeer } from "@/features/content/weerNaarTips";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";

import type { WeatherCode } from "@mind/types";

// Interface-teksten. De weerbeeld-uitkomsten (UITKOMSTEN) en de privacy-uitleg
// zijn canonieke content en blijven Nederlands; de statusmeldingen en de
// bediening hieronder zijn wel bediening. {melding}-sleutels lopen gelijk aan
// de insturenuitkomst; "niet-gedeeld" krijgt bewust geen regel.
const nl = {
  meldingGelukt:
    "Dankjewel voor je check-in. Jouw weer telt anoniem mee in het mentale weer van Nederland.",
  meldingNietVerbonden:
    "Geen verbinding: deze check-in telt niet mee in het mentale weer van Nederland. Jouw weer staat hier.",
  meldingNietIngelogd:
    "Je was niet ingelogd: deze check-in telt niet mee in het mentale weer van Nederland. Jouw weer staat hier.",
  leegTitel: "Nog geen check-in vandaag",
  leegUitleg: "Na je check-in staat hier jouw weer van vandaag.",
  evenInchecken: "Inchecken",
  terugDashboard: "Terug naar Home",
  jouwWeer: "JOUW WEER VANDAAG",
  voorVandaag: "Voor vandaag",
  lezenAlsJeWilt: "Lezen, als je wilt",
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
    terugDashboard: "Back to Home",
    jouwWeer: "YOUR WEATHER TODAY",
    voorVandaag: "For today",
    lezenAlsJeWilt: "Read, if you like",
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
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} heroInhoud={<MascotteVlieger state="wolken" hoogte={112} />}>
        <View style={{ gap: space[1] }}>
          <AppText rol="h1">{t("leegTitel")}</AppText>
          <AppText rol="subtitle">{t("leegUitleg")}</AppText>
        </View>
        <View style={{ gap: space[3] }}>
          <Button label={t("evenInchecken")} fullWidth onPress={() => router.replace("/check-in/1")} />
          <Button label={t("terugDashboard")} variant="link" fullWidth onPress={() => router.replace("/dashboard")} />
        </View>
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
        " Dit is ongeveer mijn weer vandaag, via Weer MIND.",
    });
  };

  return (
    <ScreenCanvas
      state={weerbeeld ?? "default"}
      terugKnop={<TerugNaarVorige />}
      kopTitel={weerbeeld ? WEER_NAMEN[weerbeeld] : undefined}
      heroInhoud={
        weerbeeld ? (
          // De vlieger landt: schaal 0,9 naar 1 met een spring. Erkennen, niet vieren.
          <Verschijn landing>
            <MascotteVlieger state={weerbeeld} hoogte={112} />
          </Verschijn>
        ) : undefined
      }
    >
      {/* Eerst het weer zelf, zoals in scherm 07 van het ontwerp: overline,
          de naam van het weerbeeld groot, dan de duiding. */}
      {tekst && weerbeeld ? (
        <View style={{ gap: space[2] }}>
          <AppText rol="labelOverline" kleur="brand">{t("jouwWeer")}</AppText>
          <AppText rol="h1">{WEER_NAMEN[weerbeeld]}</AppText>
          <AppText rol="subtitle">{tekst.kop}</AppText>
          <AppText rol="body">{tekst.duiding}</AppText>
        </View>
      ) : null}
      {/* De tip op het vel, zonder kaart (Stijn: inhoud op het vel). */}
      {tekst ? (
        <View style={{ gap: space[2] }}>
          <AppText rol="h3">{t("voorVandaag")}</AppText>
          <AppText rol="bodyEmphasis">{tekst.tip}</AppText>
        </View>
      ) : null}
      {weerbeeld ? (
        <View style={{ gap: space[2] }}>
          <AppText rol="h3">{t("lezenAlsJeWilt")}</AppText>
          <Lijst>
            {tipsBijWeer(weerbeeld).map((a) => {
              // Op het onderwerp uit Houvast als het artikel er een heeft (uitleg
              // plus wat kan helpen), anders op het artikel zelf.
              const h = houvastVoorArtikel(a.slug);
              return (
                <LijstRij
                  key={a.slug}
                  titel={h?.titel ?? a.titel}
                  meta={a.onderwerp !== a.titel ? a.onderwerp : undefined}
                  beeld={<VliegerOnderwerp onderwerp={a.onderwerp} slug={h?.slug ?? a.slug} hoogte={40} />}
                  onPress={() => {
                    if (h) router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } });
                    else router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } });
                  }}
                />
              );
            })}
          </Lijst>
        </View>
      ) : null}
      {melding && MELDINGEN[melding] ? (
        <AppText rol="bodySmall" kleur="secondary">{MELDINGEN[melding]}</AppText>
      ) : null}
      {/* Eén primaire knop (productprincipe 5). Het mentale weer van Nederland
          staat op Home, direct onder jouw weer; een tweede knop ernaartoe was
          dubbelop (Stijn, UX-ronde 13 september 2026). */}
      <View style={{ gap: space[3] }}>
        <Button label={t("terugDashboard")} fullWidth onPress={() => router.replace("/dashboard")} />
        <Button label={t("deelJeWeer")} variant="secondary" fullWidth onPress={deel} />
      </View>
    </ScreenCanvas>
  );
}
