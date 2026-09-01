// De navigatiebalk uit het ontwerp, gebouwd zoals een echte app hem nodig
// heeft: een zwevende frosted pil met vijf bestemmingen, boven de
// home-indicator (geen tap-conflict met het home-gebaar), en een verloop naar
// de achtergrondkleur dat de zone onder de pil afdekt zodat er nooit losse
// content onder de balk zichtbaar is.
//
// Referentie: packages/ui/reference/components/NavigationBar.jsx (378:1557):
// pil van 82 hoog met 15 marge, frosted rgba(255,255,249,0.4) over blur. De
// blur komt van expo-blur (besloten door Stijn op 24 augustus 2026); de
// 0.4-laag en het verloop zijn afgeleid van tokens, geen losse kleuren.
//
// Afwijking van de referentie, besloten door Stijn op 26 augustus 2026 (zie
// docs/design-system.md, "Het ontwerp is een startpunt"): de pil is 64 in
// plaats van 82 en staat dichter op de onderrand, zodat er meer scherm
// overblijft voor de content. De 82 liet op toestellen met home-indicator
// een brede witte zone onderin over.
//
// Deze component is bewust dom: de items komen binnen als lijst, de navigatie
// zelf woont in de route-layout.

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

/** Hoogte van de pil; ScreenCanvas rekent hiermee voor de scrollruimte. */
export const NAV_PIL_HOOGTE = 64;

const TRANSPARANT = colors.surfaceBackground.replace("rgb(", "rgba(").replace(")", ",0)");
const BIJNA_DEKKEND = colors.surfaceBackground.replace("rgb(", "rgba(").replace(")", ",0.95)");

export type NavItem = {
  key: string;
  label: string;
  icoon: (kleur: string) => ReactNode;
  actief?: boolean;
  onPress: () => void;
};

export function NavigationBar({ items }: { items: NavItem[] }) {
  const insets = useSafeAreaInsets();
  // Dichter op de onderrand dan de referentie: de labels blijven boven de
  // home-indicator, maar de pil zakt erin mee in plaats van erboven te zweven.
  const bodem = Math.max(insets.bottom - space[3], space[2]);

  return (
    <View pointerEvents="box-none" style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
      {/* Dekt de zone onder en achter de pil af, zodat scrollende content
          in het verloop verdwijnt in plaats van onder de balk uit te steken. */}
      <LinearGradient
        pointerEvents="none"
        colors={[TRANSPARANT, BIJNA_DEKKEND, colors.surfaceBackground]}
        locations={[0, 0.5, 1]}
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: bodem + NAV_PIL_HOOGTE + space[6] }}
      />
      {/* 15 is de pilmarge uit de referentie (NavigationBar.jsx); bodem volgt
          de safe area en is daarom geen schaalwaarde. */}
      <View
        style={{
          marginHorizontal: 15,
          marginBottom: bodem,
          height: NAV_PIL_HOOGTE,
          borderRadius: radius.pill,
          overflow: "hidden",
        }}
      >
        <BlurView
          intensity={50}
          tint="light"
          style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: colors.surfaceCard,
            // Vrijwel dekkend wit met dunne scheidingslijnen, zoals de
            // navigatiebalk in Figma (83:543), sinds 1 september 2026. De blur
            // blijft eronder voor de rand van scrollende content.
            opacity: 0.95,
          }}
        />
        <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch", paddingHorizontal: space[2], paddingVertical: space[2] }}>
          {items.map((item, i) => (
            <View key={item.key} style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
            {i > 0 ? <View style={{ width: 1, marginVertical: space[3], backgroundColor: colors.borderDefault }} /> : null}
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: item.actief }}
              onPress={item.onPress}
              style={({ pressed }) => ({
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                gap: space[1],
                borderRadius: radius.pill,
                // De actieve tab krijgt een zachte pil achter icoon en label;
                // alleen een vet label was te weinig verschil.
                backgroundColor: item.actief ? colors.brandSubtle : "transparent",
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <View style={{ height: 28, justifyContent: "center", alignItems: "center" }}>
                {item.icoon(item.actief ? colors.brandDefault : colors.textSecondary)}
              </View>
              <AppText rol="labelCaption" kleur={item.actief ? "brand" : "secondary"}>
                {item.label}
              </AppText>
            </Pressable>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
