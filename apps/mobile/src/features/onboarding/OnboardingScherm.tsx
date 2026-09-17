// De vaste opbouw van een stap in de onboarding: terugknop en voortgang op
// één rij, de vlieger naast de kop alsof hij het zelf zegt, en daaronder de
// inhoud van de stap.
//
// Stijn, 17 september 2026, naast de onboarding van Ommetje: daar staat op
// elk scherm dezelfde persoon naast een korte kop, met een paar zinnen
// eronder en de knop onderaan. Bij ons stond de vlieger op elke stap groot in
// de hero, en dat kostte een kwart van het scherm: op Inloggen viel de knop
// er daardoor onder. Nu staat hij klein naast de kop en begint het vel
// bovenaan, zodat elke stap op één scherm past.
//
// Het vel (Stijn, 17 september 2026, tweede ronde): zonder hero was de band
// boven het vel leeg, met alleen een terugknop erin. Het vel begint nu vlak
// onder de statusbalk, en de terugknop staat op het vel op dezelfde rij als
// de stippen. Het vel staat vast: je kunt het niet meer los van de
// achtergrond heen en weer trekken.
//
// De vlieger (zelfde ronde): één mascotte in één kleur die je meeneemt, in
// plaats van per stap een andere kleur. Eerst de zittende vlieger in blauw,
// maar die was te passief; nu de staande mascotte, die per stap anders leunt,
// zodat hij beweegt zonder animatie. Het design system kent alleen de
// zittende en de staande pose; een vliegende pose moet eerst getekend worden.
// Het is decoratie, dus verborgen voor de schermlezer.
//
// De terugknop: het welkomscherm is het eerste scherm en heeft er geen. Op de
// andere stappen gaat hij een stap terug, en ligt er niets onder (een
// deeplink, zoals de link uit een mail), dan naar het welkomscherm. De gewone
// TerugNaarVorige valt terug op Home, en dat was hier een weg de app in
// zonder leeftijdscheck, account en toestemming.

import { useNavigation, useRouter } from "expo-router";
import type { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { TerugKnop, TERUGKNOP_MAAT } from "@mind/ui/components/TerugKnop";
import { MascotMain } from "@mind/ui/components/MascotMain";

import { OnboardingVoortgang } from "./OnboardingVoortgang";

const VLIEGER_HOOGTE = 112;

// De staande mascotte uit het design system (MascotMain): rechtop, duim
// omhoog, in zijn eigen blauw. Stijn, 17 september 2026: de zittende vlieger
// was te passief, "hij zit nu heel veel". Per stap leunt hij anders: naar de
// kop toe, ervan af, of op zijn tenen. Stap 0 is Welkom.
type Stand = { kantel: number; gespiegeld?: boolean; til?: number };
const PER_STAP: Record<number, Stand> = {
  0: { kantel: 8 },
  1: { kantel: -6, gespiegeld: true },
  2: { kantel: 12, til: space[1] },
  3: { kantel: -10 },
  4: { kantel: 6, gespiegeld: true, til: space[1] },
  5: { kantel: -4 },
};

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
  const insets = useSafeAreaInsets();
  const stand = PER_STAP[stap ?? 0] ?? PER_STAP[0];
  return (
    <ScreenCanvas state="default" vast sheetTop={insets.top + space[3]}>
      {/* De rij is er altijd, ook leeg op Welkom: zo staan vlieger en kop op
          elk scherm op dezelfde hoogte en zit de vlieger niet tegen de ronde
          bovenrand van het vel (Stijn, 17 september 2026). */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[4], minHeight: TERUGKNOP_MAAT }}>
        {zonderTerug ? null : <TerugInOnboarding />}
        {stap ? <OnboardingVoortgang stap={stap} /> : null}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          // De staart steekt bij het leunen links uit; een kleine marge houdt hem op het vel.
          style={{ marginLeft: space[2], transform: [{ translateY: -(stand.til ?? 0) }, { rotate: `${stand.kantel}deg` }, { scaleX: stand.gespiegeld ? -1 : 1 }] }}
        >
          <MascotMain hoogte={VLIEGER_HOOGTE} />
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
