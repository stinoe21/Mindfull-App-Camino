// Check-in, stap 1 tot 4
//
// De vier sliders. Vraagteksten en labelparen liggen woordelijk vast in
// HERKOMST.md (Canonical check-in copy): niet parafraseren. Voortgang leest
// "STAP 2 van 4" met kleine v. De sliderwaarden blijven op het toestel.
// "Sla vandaag over" is de eerlijke uitweg (no-guilt, productprincipes 4 en 6).

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { MascotteInput } from "@mind/ui/components/MascotteInput";
import { Slider } from "@mind/ui/components/Slider";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWaarden, resetWaarden, zetWaarde } from "@/features/weer/checkinSessie";
import { bewaarWeerVanVandaag } from "@/features/weer/lokaalWeer";
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
      <Slider value={waarde} onChange={zetLokaleWaarde} leftLabel={stap.links} rightLabel={stap.rechts} />
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
