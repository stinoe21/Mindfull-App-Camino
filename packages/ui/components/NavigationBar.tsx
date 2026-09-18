// De navigatiebalk uit het ontwerp, gebouwd zoals een echte app hem nodig
// heeft: vijf bestemmingen onderin, boven de home-indicator (geen
// tap-conflict met het home-gebaar), en een verloop naar de achtergrondkleur
// dat de zone achter en onder de balk afdekt zodat er nooit losse content
// door de iconen heen schemert.
//
// Referentie: packages/ui/reference/components/NavigationBar.jsx (378:1557):
// een frosted pil van 82 hoog met 15 marge over blur. Daar zijn we in twee
// stappen van afgestapt (zie docs/design-system.md, "Het ontwerp is een
// startpunt"): op 26 augustus 2026 werd de pil 64 hoog en zakte hij naar de
// onderrand, omdat de 82 op toestellen met home-indicator een brede witte
// zone overliet. Op 15 september 2026 ging de pil zelf eruit (Stijn): het
// witte vak stond los van de rest van het scherm. De iconen staan nu direct
// op het vel, en het verloop is de enige laag tussen balk en content. Op
// 17 september 2026 (Stijn) zakte de balk verder naar de onderrand, werd hij
// 56 hoog en verdween het zandkleurige vlak achter de actieve tab: actief is
// nu alleen kleur. NAV_PIL_HOOGTE en navOnderMarge zijn de maten waarmee
// ScreenCanvas de scrollruimte rekent.
//
// Deze component is bewust dom: de items komen binnen als lijst, de navigatie
// zelf woont in de route-layout.

import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

/** Hoogte van de balk; ScreenCanvas rekent hiermee voor de scrollruimte. */
export const NAV_PIL_HOOGTE = 56;

/**
 * Afstand van de balk tot de onderrand. De labels eindigen vlak boven de
 * home-indicator (die zit op 8 van de rand en is 5 hoog) in plaats van boven
 * de hele safe area: die liet een lege strook onder de balk over (Stijn,
 * 17 september 2026). Zonder home-indicator blijft er een kleine marge.
 */
export function navOnderMarge(insetOnder: number): number {
  return Math.max(insetOnder - space[5], space[2]);
}

const TRANSPARANT = colors.surfaceBackground.replace("rgb(", "rgba(").replace(")", ",0)");
/** Hoogte van het vervaagverloop boven de balk. */
const VERVAAG_HOOGTE = space[8];
/** Dekkende strook boven de iconen, zodat er geen halve letters tegenaan hangen. */
const KOPRUIMTE = space[3];
/** Hoe ver het icoon van een inactieve tab terugwijkt. */
const INACTIEF_DEKKING = 0.5;

export type NavItem = {
  key: string;
  label: string;
  icoon: (kleur: string) => ReactNode;
  actief?: boolean;
  onPress: () => void;
};

export function NavigationBar({ items }: { items: NavItem[] }) {
  const insets = useSafeAreaInsets();
  const bodem = navOnderMarge(insets.bottom);

  return (
    <View pointerEvents="box-none" style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
      {/* Dekt de zone achter en onder de balk volledig af en vervaagt alleen
          daarboven, zodat scrollende content in het verloop verdwijnt en
          nooit door de iconen heen schemert. Zonder pil is dit de enige laag
          die de balk van de content scheidt. */}
      <LinearGradient
        pointerEvents="none"
        colors={[TRANSPARANT, colors.surfaceBackground, colors.surfaceBackground]}
        locations={[0, VERVAAG_HOOGTE / (bodem + NAV_PIL_HOOGTE + KOPRUIMTE + VERVAAG_HOOGTE), 1]}
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: bodem + NAV_PIL_HOOGTE + KOPRUIMTE + VERVAAG_HOOGTE }}
      />
      {/* Sinds 15 september 2026 (Stijn) geen witte pil meer: de iconen staan
          direct op het vel, alleen het verloop erachter. Het witte vak stond
          los van de rest van het scherm. 15 is de zijmarge uit de referentie;
          bodem volgt de safe area en is daarom geen schaalwaarde. */}
      <View
        style={{
          marginHorizontal: 15,
          marginBottom: bodem,
          height: NAV_PIL_HOOGTE,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch", paddingHorizontal: space[2], paddingVertical: space[1] }}>
          {items.map((item) => (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              accessibilityState={{ selected: item.actief }}
              onPress={item.onPress}
              style={({ pressed }) => ({
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: space[1],
                opacity: pressed ? 0.7 : 1,
              })}
            >
              {/* De actieve tab is alleen kleur, geen vlak erachter (Stijn,
                  17 september 2026: de zandkleurige vlek was lelijk). Actief
                  is icoon en label in merkblauw; bij de rest wijkt het icoon
                  terug en blijft het label op volle sterkte, zodat het
                  leesbaar blijft. Er is geen lichtere tekstkleur in de
                  tokens, vandaar de dekking. */}
              <View style={{ height: 28, justifyContent: "center", alignItems: "center", opacity: item.actief ? 1 : INACTIEF_DEKKING }}>
                {item.icoon(item.actief ? colors.brandDefault : colors.textSecondary)}
              </View>
              <AppText rol="labelCaption" kleur={item.actief ? "brand" : "secondary"}>
                {item.label}
              </AppText>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
