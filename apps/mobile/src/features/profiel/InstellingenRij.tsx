// Gegroepeerde instellingenlijst, zoals iOS-instellingen: een kopje in
// kapitalen, daaronder één kaart met rijen, gescheiden door een lijn. Elke rij
// heeft een label, optioneel een regel uitleg eronder, en rechts een "›" of
// een eigen element (schakelaar, waarde). Gebruikt op Profiel, en straks op
// Instellingen zelf zodra die pagina vrij is (PR #62 raakt hem nu).
//
// Geen iconen per rij: de assetbibliotheek heeft ze niet, en we voegen er
// zelf geen toe. Komt er een set, dan krijgt de rij een "icoon"-prop.

import type { ReactNode } from "react";
import { Pressable, View } from "react-native";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Card } from "@mind/ui/components/Card";

type GroepProps = {
  titel: string;
  children: ReactNode;
};

export function InstellingenGroep({ titel, children }: GroepProps) {
  return (
    <View style={{ gap: space[2] }}>
      <AppText rol="labelOverline" kleur="secondary">{titel.toUpperCase()}</AppText>
      {/* De Card zet zelf gap tussen kinderen; hier willen we rijen strak op elkaar. */}
      <Card tone="white" style={{ gap: 0, paddingVertical: 0 }}>{children}</Card>
    </View>
  );
}

type RijProps = {
  label: string;
  omschrijving?: string;
  onPress?: () => void;
  /** Wat er rechts staat. Standaard een "›" als er een onPress is. */
  rechts?: ReactNode;
  /** Laatste rij van een groep: geen scheidingslijn eronder. */
  laatste?: boolean;
  /** Grijs en niet te tikken, met de omschrijving als uitleg waarom. */
  uit?: boolean;
};

export function InstellingenRij({ label, omschrijving, onPress, rechts, laatste = false, uit = false }: RijProps) {
  const inhoud = (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: space[3],
        paddingVertical: space[3],
        borderBottomWidth: laatste ? 0 : 1,
        borderBottomColor: colors.borderDefault,
        opacity: uit ? 0.5 : 1,
      }}
    >
      <View style={{ flexShrink: 1, gap: space[1] }}>
        <AppText rol="body">{label}</AppText>
        {omschrijving ? <AppText rol="labelCaption" kleur="secondary">{omschrijving}</AppText> : null}
      </View>
      {rechts ?? (onPress && !uit ? <AppText rol="body" kleur="secondary">{"›"}</AppText> : null)}
    </View>
  );

  if (!onPress || uit) return inhoud;

  return (
    <Pressable onPress={onPress} accessibilityRole="button" style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
      {inhoud}
    </Pressable>
  );
}
