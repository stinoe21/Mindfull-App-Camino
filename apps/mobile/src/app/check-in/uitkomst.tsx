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

import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Verschijn } from "@mind/ui/components/Verschijn";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { houvastVoorArtikel } from "@/features/content/houvast";
import { tipsBijWeer } from "@/features/content/weerNaarTips";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { dagdeelNu, leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";
import { WeerVlieger } from "@/features/weer/WeerVlieger";

import type { WeatherCode } from "@mind/types";

// Interface-teksten. De weerbeeld-uitkomsten (UITKOMSTEN) en de privacy-uitleg
// zijn canonieke content en blijven Nederlands; de statusmeldingen en de
// bediening hieronder zijn wel bediening. {melding}-sleutels lopen gelijk aan
// de insturenuitkomst; "niet-gedeeld" krijgt bewust geen regel. Sinds
// 15 september 2026 mag je vaker inchecken: "al-bijgedragen" zegt eerlijk
// dat het eigen weer is bijgewerkt maar de kaart dit dagdeel al had.
const nl = {
  meldingGelukt: "Je weer telt anoniem mee in het mentale weer van Nederland.",
  meldingAlBijgedragenOchtend: "Je weer is bijgewerkt. In het mentale weer van Nederland telde je vanochtend al mee.",
  meldingAlBijgedragenMiddag: "Je weer is bijgewerkt. In het mentale weer van Nederland telde je vanmiddag al mee.",
  opnieuw: "Opnieuw inchecken",
  meldingNietIngelogd: "Je bent niet ingelogd. Je weer telt nu niet mee in het mentale weer van Nederland.",
  leegTitel: "Nog geen check-in vandaag",
  leegUitleg: "Na je check-in staat hier jouw weer van vandaag.",
  evenInchecken: "Inchecken",
  terugDashboard: "Terug naar Home",
  jouwWeer: "JOUW WEER VANDAAG",
  voorVandaag: "VOOR VANDAAG",
  lezenAlsJeWilt: "LEZEN, ALS JE WILT",
  deelJeWeer: "Deel je weer",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    meldingGelukt: "Your weather counts anonymously towards the mental weather of the Netherlands.",
    meldingAlBijgedragenOchtend: "Your weather is updated. You already counted towards the mental weather of the Netherlands this morning.",
    meldingAlBijgedragenMiddag: "Your weather is updated. You already counted towards the mental weather of the Netherlands this afternoon.",
    opnieuw: "Check in again",
    meldingNietIngelogd: "You are not logged in. Your weather does not count towards the mental weather of the Netherlands right now.",
    leegTitel: "No check-in yet today",
    leegUitleg: "Do the check-in first, then your weather of the day will appear here.",
    evenInchecken: "Check in",
    terugDashboard: "Back to Home",
    jouwWeer: "YOUR WEATHER TODAY",
    voorVandaag: "FOR TODAY",
    lezenAlsJeWilt: "READ, IF YOU LIKE",
    deelJeWeer: "Share your weather",
  },
};

export default function CheckInUitkomst() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { melding } = useLocalSearchParams<{ melding?: string }>();
  const MELDINGEN: Record<string, string> = {
    gelukt: t("meldingGelukt"),
    "al-bijgedragen": dagdeelNu() === 1 ? t("meldingAlBijgedragenOchtend") : t("meldingAlBijgedragenMiddag"),
    // Lukte het meetellen niet, dan zeggen we daar niets over: het scherm gaat
    // over jouw weer, en met die zin kon je toch niets (Stijn, 17 september 2026).
    "niet-ingelogd": t("meldingNietIngelogd"),
  };
  const [geladen, zetGeladen] = useState(false);
  const [weerbeeld, zetWeerbeeld] = useState<WeatherCode | null>(null);

  // Bij elke focus opnieuw lezen: na "Opnieuw inchecken" kom je hier terug
  // met een ander weerbeeld.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesWeerVanVandaag().then((data) => {
        if (!actief) return;
        zetWeerbeeld(data?.weerbeeld ?? null);
        zetGeladen(true);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

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

  // Delen is een keuze van de gebruiker zelf; er gaat niets automatisch weg.
  // Sinds 18 september 2026 eerst het deelscherm: daar zie je het beeld dat je
  // deelt en staat dat het aan jou is. Pas dan opent het deelvenster.
  const deel = () => router.push({ pathname: "/delen", params: { soort: "weer" } });

  return (
    <ScreenCanvas
      state={weerbeeld ?? "default"}
      terugKnop={<TerugNaarVorige />}
      kopTitel={weerbeeld ? WEER_NAMEN[weerbeeld] : undefined}
      heroInhoud={
        weerbeeld ? (
          // De vlieger landt: schaal 0,9 naar 1 met een spring. Erkennen, niet vieren.
          <Verschijn landing>
            <WeerVlieger weerbeeld={weerbeeld} hoogte={112} />
          </Verschijn>
        ) : undefined
      }
    >
      {/* De hiërarchie (Stijn, 17 september 2026: "kan qua hiërarchie nog wat
          werk gebruiken"). Er stonden vijf tekststijlen op een rij bovenaan,
          en de tip, de sectiekoppen en de lijsttitels waren alle drie even
          zwaar. Nu drie niveaus: het weer als enige grote kop met zijn icoon
          (hetzelfde als op Home en de weerkaart), de tip als het ene grotere
          statement, en de rest als gewone tekst. Elke sectie begint met
          hetzelfde kleine opschrift. */}
      {tekst && weerbeeld ? (
        <View style={{ gap: space[4] }}>
          <View style={{ gap: space[1] }}>
            <AppText rol="labelOverline" kleur="brand">{t("jouwWeer")}</AppText>
            <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
              <WeerIcoon staat={weerbeeld} hoogte={40} />
              <View style={{ flexShrink: 1 }}>
                <AppText rol="h1">{WEER_NAMEN[weerbeeld]}</AppText>
              </View>
            </View>
          </View>
          <View style={{ gap: space[1] }}>
            <AppText rol="subtitle">{tekst.kop}</AppText>
            <AppText rol="body" kleur="secondary">{tekst.duiding}</AppText>
          </View>
        </View>
      ) : null}
      {/* De tip op het vel, zonder kaart (Stijn: inhoud op het vel). */}
      {tekst ? (
        <View style={{ gap: space[2] }}>
          <AppText rol="labelOverline" kleur="brand">{t("voorVandaag")}</AppText>
          <AppText rol="h3">{tekst.tip}</AppText>
        </View>
      ) : null}
      {weerbeeld ? (
        <View style={{ gap: space[1] }}>
          <AppText rol="labelOverline" kleur="brand">{t("lezenAlsJeWilt")}</AppText>
          <Lijst>
            {tipsBijWeer(weerbeeld).map((a) => {
              // Op het onderwerp uit Houvast als het artikel er een heeft (uitleg
              // plus wat kan helpen), anders op het artikel zelf.
              const h = houvastVoorArtikel(a.slug);
              return (
                <LijstRij
                  key={a.slug}
                  titel={h?.titel ?? a.titel}
                  // De vlieger van het onderwerp hoort erbij: hij trekt je naar de
                  // lijst toe. De regel met het onderwerp eronder ("Grenzen") kon
                  // weg (Stijn, 17 september 2026).
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
      {/* Of je meetelde, als voetnoot. De tijd van inchecken staat er niet
          meer bij: die zegt niets (Stijn, 17 september 2026), net als op Home. */}
      {melding && MELDINGEN[melding] ? (
        <AppText rol="bodySmall" kleur="secondary">{MELDINGEN[melding]}</AppText>
      ) : null}
      {/* Eén primaire knop (productprincipe 5). Het mentale weer van Nederland
          staat op Home, direct onder jouw weer; een tweede knop ernaartoe was
          dubbelop (Stijn, UX-ronde 13 september 2026). */}
      {/* Opnieuw inchecken kan altijd (Stijn, 15 september 2026); replace,
          zodat de stap-schermen niet op de terugstapel stapelen. */}
      <View style={{ gap: space[3] }}>
        <Button label={t("terugDashboard")} fullWidth onPress={() => router.replace("/dashboard")} />
        <Button label={t("opnieuw")} variant="secondary" fullWidth onPress={() => router.replace("/check-in/1")} />
        <Button label={t("deelJeWeer")} variant="link" fullWidth onPress={deel} />
      </View>
      {/* Altijd, bij elk weer: de app beoordeelt niet wie hem nodig heeft
          (productprincipes 2, 3 en 9). Onder de knoppen, zodat er één primaire
          actie blijft. */}
      <HulplijnKaart />
    </ScreenCanvas>
  );
}
