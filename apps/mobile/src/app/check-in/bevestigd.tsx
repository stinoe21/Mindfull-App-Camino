// Check-in bevestigd
//
// Bevestiging dat de check-in is gedaan. De teksten komen uit het prototype
// (Bevestigd-scherm). Kon de bijdrage niet meetellen (offline of niet
// ingelogd), dan zegt het scherm dat eerlijk, zonder de flow te blokkeren.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";

import type { WeatherCode } from "@mind/types";

export default function CheckInBevestigd() {
  const router = useRouter();
  const { melding } = useLocalSearchParams<{ melding?: string }>();
  const [weerbeeld, zetWeerbeeld] = useState<WeatherCode | null>(null);

  useEffect(() => {
    leesWeerVanVandaag().then((data) => zetWeerbeeld(data?.weerbeeld ?? null));
  }, []);

  return (
    <ScreenCanvas variant="overlay" state={weerbeeld ?? "default"} sheetTop={200}>
      <MascotteVlieger state={weerbeeld ?? "wolken"} hoogte={90} />
      <AppText rol="h1" centreer>Dankjewel voor je check-in</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        Jouw weer telt anoniem mee in het mentale weerbericht van Nederland.
      </AppText>
      {melding === "niet-verbonden" ? (
        <AppText rol="bodySmall" kleur="secondary" centreer>
          Je bijdrage kon nog niet meetellen: er is geen verbinding. Je weer staat wel gewoon voor je klaar.
        </AppText>
      ) : null}
      {melding === "niet-ingelogd" ? (
        <AppText rol="bodySmall" kleur="secondary" centreer>
          Je bijdrage telt mee zodra je bent ingelogd. Je weer staat wel gewoon voor je klaar.
        </AppText>
      ) : null}
      <Button label="Bekijk je uitkomst" fullWidth onPress={() => router.replace("/check-in/uitkomst")} />
      <Button label="Terug naar dashboard" variant="secondary" fullWidth onPress={() => router.replace("/dashboard")} />
    </ScreenCanvas>
  );
}
