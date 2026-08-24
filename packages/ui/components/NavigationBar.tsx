// De echte navigatiebalk uit het ontwerp: een zwevende pil met vijf
// bestemmingen en "Check in" in het midden, over de hero-illustratie.
// Specificatie: packages/ui/reference/components/NavigationBar.jsx (378:1557).
//
// De frosted achtergrond volgt de referentie: rgba(255,255,249,0.4) over een
// blur. De blur komt van expo-blur (besloten door Stijn op 24 augustus 2026),
// de 0.4-laag is de kaartkleur-token met opacity, zodat er geen losse kleur
// in de code staat.
//
// Deze component is bewust dom: de items komen binnen als lijst, de navigatie
// zelf woont in de route-layout.

import { BlurView } from "expo-blur";
import type { ReactNode } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

export type NavItem = {
  key: string;
  label: string;
  icoon: (kleur: string) => ReactNode;
  actief?: boolean;
  onPress: () => void;
};

export function NavigationBar({ items }: { items: NavItem[] }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        left: 15,
        right: 15,
        bottom: insets.bottom > 0 ? insets.bottom : space[4],
        height: 82,
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
          opacity: 0.4,
        }}
      />
      <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
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
            <View style={{ height: 34, justifyContent: "center", alignItems: "center" }}>
              {item.icoon(item.actief ? colors.textPrimary : colors.textSecondary)}
            </View>
            <AppText rol="labelCaption" kleur={item.actief ? "primary" : "secondary"}>
              {item.label}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
