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
// plaats van per stap een andere kleur. Hij wisselt per stap van gezicht en
// van stand: gekanteld en om en om gespiegeld, zodat hij beweegt zonder
// animatie. Alleen de lichte uitdrukkingen die er al waren (VliegerOnderwerp):
// energiek, in balans en ontspannen. Het design system kent alleen de
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

import { palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { TerugKnop, TERUGKNOP_MAAT } from "@mind/ui/components/TerugKnop";
import { VliegerOnderwerp, type Uitdrukking } from "@mind/ui/components/VliegerOnderwerp";

import { OnboardingVoortgang } from "./OnboardingVoortgang";

const VLIEGER_HOOGTE = 80;

// Eén kleur voor de hele onboarding: het blauw van de merkkleur.
const MASCOTTE_KLEUR = { lijf: palette.primary200, schaduw: palette.primary400 };

// Per stap een eigen gezicht en stand: leeftijd, account, naam, onderwerpen,
// toestemming. Stap 0 is Welkom. "standvastig" doet niet mee: strakke
// wenkbrauwen lazen op het accountscherm als boos (Stijn, 17 september 2026).
type Stand = { gezicht: Uitdrukking; kantel: number; gespiegeld?: boolean };
const PER_STAP: Record<number, Stand> = {
  0: { gezicht: "energiek", kantel: -8 },
  1: { gezicht: "in-balans", kantel: 6, gespiegeld: true },
  2: { gezicht: "ontspannen", kantel: -5 },
  3: { gezicht: "energiek", kantel: 8, gespiegeld: true },
  4: { gezicht: "in-balans", kantel: -7 },
  5: { gezicht: "ontspannen", kantel: 5, gespiegeld: true },
};

type Props = {
  /** De stap voor de voortgang. Zonder stap (Welkom) geen voortgang. */
  stap?: number;
  titel: string;
  /** Eén of twee korte zinnen onder de kop. */
  uitleg?: string;
  /** Het gezicht van de vlieger. Standaard dat van de stap. */
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
          style={{ transform: [{ rotate: `${stand.kantel}deg` }, { scaleX: stand.gespiegeld ? -1 : 1 }] }}
        >
          <VliegerOnderwerp uitdrukking={uitdrukking ?? stand.gezicht} hoogte={VLIEGER_HOOGTE} kleur={MASCOTTE_KLEUR} />
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
