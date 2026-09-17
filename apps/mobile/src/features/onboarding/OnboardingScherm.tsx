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
// De vlieger (Stijn, 17 september 2026): dezelfde zittende vlieger met een
// gezicht als in Houvast en de check-in, op elke stap met een andere lichte
// uitdrukking en kleur, in plaats van steeds dezelfde staande mascotte. Alleen
// de uitdrukkingen die er al waren (VliegerOnderwerp): energiek, in balans,
// standvastig en ontspannen. Het is decoratie, dus verborgen voor de
// schermlezer.
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
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { TerugKnop } from "@mind/ui/components/TerugKnop";
import { VliegerOnderwerp, type Uitdrukking } from "@mind/ui/components/VliegerOnderwerp";

import { OnboardingVoortgang } from "./OnboardingVoortgang";

const VLIEGER_HOOGTE = 80;

// Per stap een eigen gezicht: leeftijd, account, naam, onderwerpen, toestemming.
const PER_STAP: Record<number, Uitdrukking> = {
  1: "in-balans",
  2: "standvastig",
  3: "ontspannen",
  4: "energiek",
  5: "in-balans",
};

type Props = {
  /** De stap voor de voortgang. Zonder stap (Welkom) geen voortgang. */
  stap?: number;
  titel: string;
  /** Eén of twee korte zinnen onder de kop. */
  uitleg?: string;
  /** Het gezicht van de vlieger. Standaard dat van de stap, en zonder stap ontspannen. */
  uitdrukking?: Uitdrukking;
  /** Het eerste scherm (Welkom): er is niets om naar terug te gaan. */
  zonderTerug?: boolean;
  children: ReactNode;
};

function TerugInOnboarding() {
  const navigation = useNavigation();
  const router = useRouter();
  return <TerugKnop onPress={() => (navigation.canGoBack() ? navigation.goBack() : router.replace("/welkom"))} />;
}

export function OnboardingScherm({ stap, titel, uitleg, uitdrukking, zonderTerug = false, children }: Props) {
  const gezicht = uitdrukking ?? (stap ? PER_STAP[stap] : undefined) ?? "ontspannen";
  return (
    <ScreenCanvas state="default" terugKnop={zonderTerug ? undefined : <TerugInOnboarding />}>
      {stap ? <OnboardingVoortgang stap={stap} /> : null}
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <VliegerOnderwerp uitdrukking={gezicht} hoogte={VLIEGER_HOOGTE} />
        </View>
        <View style={{ flex: 1 }}>
          <AppText rol="h2">{titel}</AppText>
        </View>
      </View>
      {uitleg ? <AppText rol="body" kleur="secondary">{uitleg}</AppText> : null}
      {children}
    </ScreenCanvas>
  );
}
