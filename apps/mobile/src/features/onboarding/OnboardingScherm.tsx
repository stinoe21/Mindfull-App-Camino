// De vaste opbouw van een stap in de onboarding: de voortgang, de vlieger
// naast de kop alsof hij het zelf zegt, en daaronder de inhoud van de stap.
//
// Stijn, 17 september 2026, naast de onboarding van Ommetje: daar staat op
// elk scherm dezelfde persoon naast een korte kop, met een paar zinnen
// eronder en de knop onderaan. Bij ons stond de vlieger op elke stap groot in
// de hero, en dat kostte een kwart van het scherm: op Inloggen viel de knop
// er daardoor onder. Nu staat hij klein naast de kop en begint het vel
// bovenaan, zodat elke stap op één scherm past.
//
// De terugknop (17 september 2026): het welkomscherm is het eerste scherm en
// heeft er geen. Op de andere stappen gaat hij een stap terug, en ligt er
// niets onder (een deeplink, zoals de link uit een mail), dan naar het
// welkomscherm. De gewone TerugNaarVorige valt terug op Home, en dat was hier
// een weg de app in zonder leeftijdscheck, account en toestemming.

import { useNavigation, useRouter } from "expo-router";
import type { ReactNode } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { TerugKnop } from "@mind/ui/components/TerugKnop";

import { OnboardingVoortgang } from "./OnboardingVoortgang";

const VLIEGER_HOOGTE = 96;

type Props = {
  /** De stap voor de voortgang. Zonder stap (Welkom) geen voortgang. */
  stap?: number;
  titel: string;
  /** Eén of twee korte zinnen onder de kop. */
  uitleg?: string;
  /** Het eerste scherm (Welkom): er is niets om naar terug te gaan. */
  zonderTerug?: boolean;
  children: ReactNode;
};

function TerugInOnboarding() {
  const navigation = useNavigation();
  const router = useRouter();
  return <TerugKnop onPress={() => (navigation.canGoBack() ? navigation.goBack() : router.replace("/welkom"))} />;
}

export function OnboardingScherm({ stap, titel, uitleg, zonderTerug = false, children }: Props) {
  return (
    <ScreenCanvas state="default" terugKnop={zonderTerug ? undefined : <TerugInOnboarding />}>
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
