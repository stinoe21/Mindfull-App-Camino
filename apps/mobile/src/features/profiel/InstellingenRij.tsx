// Gegroepeerde instellingenlijst, zoals iOS-instellingen: een kopje in
// kapitalen, daaronder één kaart met rijen, gescheiden door een lijn. Elke rij
// heeft een label, optioneel een regel uitleg eronder, en rechts een "›" of
// een eigen element (schakelaar, waarde). Gebruikt op Profiel en op de
// hulppagina. Een aparte pagina Instellingen is er niet meer: die route
// stuurt sinds 10 september 2026 door naar Profiel.
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
  /**
   * De waarde die rechts staat, als tekst, voor de schermlezer. De rij wordt
   * dan in één keer voorgelezen als "Naam, Stijn", zonder het pijltje.
   */
  waarde?: string;
};

export function InstellingenRij({ label, omschrijving, onPress, rechts, laatste = false, uit = false, waarde }: RijProps) {
  const voorgelezen = [label, waarde, omschrijving].filter(Boolean).join(", ");
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
      {/* Met een waarde rechts krimpt het label niet: bij een grote systeemletter
          brak "Voornaam" anders midden in het woord, terwijl de waarde ernaast
          gewoon korter kan ("Nog geen n..."). Zonder waarde mag het label de
          hele rij gebruiken en over regels lopen. */}
      <View style={rechts ? { flexShrink: 0, maxWidth: "70%", gap: space[1] } : { flexShrink: 1, gap: space[1] }}>
        <AppText rol="body">{label}</AppText>
        {omschrijving ? <AppText rol="labelCaption" kleur="secondary">{omschrijving}</AppText> : null}
      </View>
      {rechts ?? (onPress && !uit ? <AppText rol="body" kleur="secondary">{"›"}</AppText> : null)}
    </View>
  );

  if (!onPress || uit) return inhoud;

  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={voorgelezen} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
      {inhoud}
    </Pressable>
  );
}
