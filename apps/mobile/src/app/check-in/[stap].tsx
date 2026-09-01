// Check-in, stap 1 tot 4
//
// De vier sliders. Vraagteksten en labelparen liggen woordelijk vast in
// HERKOMST.md (Canonical check-in copy): niet parafraseren. Voortgang leest
// "STAP 2 van 4" met kleine v. De sliderwaarden blijven op het toestel.
// "Sla vandaag over" is de eerlijke uitweg (no-guilt, productprincipes 4 en 6).
//
// Eén check-in per dag: staat er al een weerbeeld van vandaag op het toestel,
// dan komen de sliders niet, maar een scherm dat zegt dat je vandaag al bent
// geweest, met de weg naar jouw weer. Dat geldt voor elke ingang (tabbalk,
// dashboard, deeplink), omdat het hier in het scherm zelf zit.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { MascotteInput } from "@mind/ui/components/MascotteInput";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Slider } from "@mind/ui/components/Slider";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWaarden, resetWaarden, zetWaarde } from "@/features/weer/checkinSessie";
import { bewaarWeerVanVandaag, leesWeerVanVandaag } from "@/features/weer/lokaalWeer";

import type { WeatherCode } from "@mind/types";
import { CHECKIN_STAPPEN, GERUSTSTELLING } from "@/features/weer/teksten";
import { bepaalWeerbeeld } from "@/features/weer/weerbeeld";
import { stuurWeerIn } from "@/features/weer/weerbericht";

// Alleen interface-teksten. De vraagteksten, de labelparen en GERUSTSTELLING
// zijn canonieke check-in-copy (HERKOMST.md) en blijven bewust Nederlands.
const nl = {
  stapVan: "STAP {x} van {y}",
  bekijkJeWeer: "Bekijk je weer",
  verder: "Verder",
  slaOver: "Sla vandaag over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    stapVan: "STEP {x} of {y}",
    bekijkJeWeer: "See your weather",
    verder: "Continue",
    slaOver: "Skip today",
  },
};

export default function CheckInStap() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ stap: string }>();
  const nummer = Number(params.stap);
  const index = Number.isInteger(nummer) && nummer >= 1 && nummer <= CHECKIN_STAPPEN.length ? nummer - 1 : 0;
  const stap = CHECKIN_STAPPEN[index];
  const laatste = index === CHECKIN_STAPPEN.length - 1;

  const [waarde, zetLokaleWaarde] = useState(leesWaarden()[stap.key]);
  const [bezig, zetBezig] = useState(false);
  // undefined: nog aan het lezen; null: vandaag nog niet ingecheckt.
  const [vandaag, zetVandaag] = useState<WeatherCode | null | undefined>(undefined);

  useEffect(() => {
    leesWeerVanVandaag().then((data) => zetVandaag(data?.weerbeeld ?? null));
  }, []);

  if (vandaag === undefined) {
    // Even wachten op het toestel, zonder de sliders alvast te tonen.
    return <View style={{ flex: 1, backgroundColor: colors.surfaceBackground }} />;
  }

  if (vandaag) {
    return (
      <ScreenCanvas variant="overlay" state={vandaag} sheetTop={200}>
        <MascotteVlieger state={vandaag} hoogte={90} />
        <AppText rol="h2" centreer>Je hebt vandaag al ingecheckt</AppText>
        <AppText rol="body" kleur="secondary" centreer>
          Eén keer per dag is genoeg. Morgen kun je weer.
        </AppText>
        <Button label="Bekijk je weer" fullWidth onPress={() => router.replace("/check-in/uitkomst")} />
        <Button label="Terug naar Home" variant="link" onPress={() => router.replace("/dashboard")} />
      </ScreenCanvas>
    );
  }

  const verder = async () => {
    zetWaarde(stap.key, waarde);
    if (!laatste) {
      router.push(`/check-in/${index + 2}`);
      return;
    }
    // Laatste stap: lokaal het weerbeeld bepalen, bewaren, en de anonieme
    // bijdrage insturen als daarvoor toestemming is gegeven.
    zetBezig(true);
    const weerbeeld = bepaalWeerbeeld(leesWaarden());
    const instellingen = await leesInstellingen();
    let resultaat: string = "niet-gedeeld";
    if (instellingen.consentWeerbericht) {
      resultaat = await stuurWeerIn(weerbeeld);
    }
    const geteld = resultaat === "gelukt" || resultaat === "al-ingecheckt";
    await bewaarWeerVanVandaag(weerbeeld, geteld);
    resetWaarden();
    zetBezig(false);
    // Direct door naar de uitkomst, zonder tussenscherm: feedback van Mind
    // van 27 augustus 2026. De bevestiging en een eventuele melding staan op
    // het uitkomstscherm zelf.
    router.replace({ pathname: "/check-in/uitkomst", params: { melding: resultaat } });
  };

  const slaOver = () => {
    resetWaarden();
    router.replace("/dashboard");
  };

  return (
    <View style={{ flex: 1 }}>
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.surfaceBackground }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: insets.top + 28,
        paddingHorizontal: space[6],
        paddingBottom: insets.bottom + 28,
        gap: space[4],
      }}
    >
      <View style={{ height: 136, alignItems: "center", justifyContent: "flex-end" }}>
        <MascotteInput state={stap.key} hoogte={128} />
      </View>
      <AppText rol="labelOverline" kleur="secondary">
        {t("stapVan").replace("{x}", String(index + 1)).replace("{y}", String(CHECKIN_STAPPEN.length))}
      </AppText>
      <AppText rol="h3">{stap.vraag}</AppText>
      <AppText rol="bodySmall" kleur="secondary">{GERUSTSTELLING}</AppText>
      {/* Geen hint in de kaart: de geruststelling erboven zegt het al. */}
      <Slider value={waarde} onChange={zetLokaleWaarde} leftLabel={stap.links} rightLabel={stap.rechts} hint="" />
      <View style={{ flex: 1 }} />
      <Button label={laatste ? t("bekijkJeWeer") : t("verder")} fullWidth bezig={bezig} onPress={verder} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={slaOver} />
    </ScrollView>
    {/* Zelfde plek als op ScreenCanvas-schermen: net onder de statusbalk. */}
    <View style={{ position: "absolute", top: insets.top + space[1], left: space[3] }}>
      <TerugNaarVorige />
    </View>
    </View>
  );
}
