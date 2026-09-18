// Een rij in een Lijst die zijn inhoud uitklapt: de kop als titel, rechts een
// "+" die een "−" wordt, en de inhoud eronder zodra de rij open staat.
//
// Gebouwd voor de uitleg in Houvast (Stijn, 17 september 2026: "een aantal
// onderdelen hebben nog die ultra lange kopie"): de verdieping van een
// onderwerp stond na "Lees verder" als één lap onder elkaar. Nu staan de
// koppen als rijen en klapt alleen open wat iemand wil lezen. Dezelfde maten
// en lijn als LijstRij, zodat de twee in één Lijst kunnen staan.

import { useState, type ReactNode } from "react";
import { View } from "react-native";

import { colors, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { PressableScale } from "./PressableScale.tsx";

export type UitklapRijProps = {
  titel: string;
  /** De inhoud die onder de titel verschijnt als de rij open staat. */
  children: ReactNode;
  /** Open bij het eerste tonen. Standaard dicht. */
  startOpen?: boolean;
  /** Laatste rij van een lijst: geen lijn eronder. Lijst zet dit zelf. */
  laatste?: boolean;
};

export function UitklapRij({ titel, children, startOpen = false, laatste = false }: UitklapRijProps) {
  const [open, zetOpen] = useState(startOpen);
  return (
    <View style={{ borderBottomWidth: laatste ? 0 : 1, borderBottomColor: colors.borderDefault }}>
      <PressableScale accessibilityRole="button" accessibilityState={{ expanded: open }} onPress={() => zetOpen(!open)} schaal={0.99}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: space[4], paddingVertical: space[3] }}>
          <View style={{ flex: 1 }}>
            <AppText rol="bodyEmphasis">{titel}</AppText>
          </View>
          <AppText rol="body" kleur="secondary">{open ? "−" : "+"}</AppText>
        </View>
      </PressableScale>
      {open ? <View style={{ gap: space[4], paddingBottom: space[4] }}>{children}</View> : null}
    </View>
  );
}
