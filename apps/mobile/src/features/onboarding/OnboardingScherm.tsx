// De vaste opbouw van een stap in de onboarding: de voortgang, de vlieger
// naast de kop alsof hij het zelf zegt, en daaronder de inhoud van de stap.
//
// Stijn, 17 september 2026, naast de onboarding van Ommetje: daar staat op
// elk scherm dezelfde persoon naast een korte kop, met een paar zinnen
// eronder en de knop onderaan. Bij ons stond de vlieger op elke stap groot in
// de hero, en dat kostte een kwart van het scherm: op Inloggen viel de knop
// er daardoor onder. Nu staat hij klein naast de kop en begint het vel
// bovenaan, zodat elke stap op één scherm past.

import type { ReactNode } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";

import { OnboardingVoortgang } from "./OnboardingVoortgang";

const VLIEGER_HOOGTE = 96;

type Props = {
  /** De stap voor de voortgang. Zonder stap (Welkom) geen voortgang. */
  stap?: number;
  titel: string;
  /** Eén of twee korte zinnen onder de kop. */
  uitleg?: string;
  children: ReactNode;
};

export function OnboardingScherm({ stap, titel, uitleg, children }: Props) {
  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      {stap ? <OnboardingVoortgang stap={stap} /> : null}
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <MascotMain hoogte={VLIEGER_HOOGTE} />
        <View style={{ flex: 1 }}>
          <AppText rol="h2">{titel}</AppText>
        </View>
      </View>
      {uitleg ? <AppText rol="body" kleur="secondary">{uitleg}</AppText> : null}
      {children}
    </ScreenCanvas>
  );
}
