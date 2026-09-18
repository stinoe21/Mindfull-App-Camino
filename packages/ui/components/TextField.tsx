// Het ene invoerveld van het design system.
//
// Tot 18 september 2026 bouwde elk scherm zijn eigen veld: een zandkaart met
// een TextInput erin en de typografie met de hand erop. Zes keer dezelfde
// regels, en het wachtwoordveld op het inlogscherm had geen manier om te zien
// wat je typte. Nu is er één veld.
//
// De vorm is dezelfde gebleven: het zandvlak van Card (tone "white"), de
// tekst in de body-rol, geen rand (Stijn: nooit wit met een rand). Het veld
// heeft geen vaste hoogte, zodat het meegroeit met een grotere systeemletter.
//
// Een wachtwoordveld krijgt rechts "Toon" of "Verberg" als tekst. Geen oogje:
// de assetbibliotheek heeft er geen, en iconen verzinnen we niet. Het scherm
// geeft de twee woorden mee, zodat ze met de taal meegaan.

import { useState } from "react";
import { Pressable, TextInput, type TextInputProps } from "react-native";

import { colors, space, type } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { Card } from "./Card.tsx";

export type TextFieldProps = Omit<TextInputProps, "style" | "placeholderTextColor" | "secureTextEntry"> & {
  /** Een wachtwoordveld: verborgen, met rechts de knop om het te tonen. */
  wachtwoord?: boolean;
  /** De woorden op die knop. Verplicht bij een wachtwoordveld. */
  toonLabel?: string;
  verbergLabel?: string;
};

// De knop in het veld is een regel tekst van ongeveer 20 punten hoog. Met 12
// punten eromheen is het raakvlak 44, de ondergrens van Apple, zonder dat het
// veld er hoger van wordt.
const RAAK_MARGE = space[3];

export function TextField({ wachtwoord = false, toonLabel, verbergLabel, ...rest }: TextFieldProps) {
  const [zichtbaar, zetZichtbaar] = useState(false);
  const knop = wachtwoord && toonLabel && verbergLabel ? (zichtbaar ? verbergLabel : toonLabel) : null;
  return (
    <Card tone="white" style={{ paddingVertical: space[2], flexDirection: "row", alignItems: "center", gap: space[2] }}>
      <TextInput
        {...rest}
        secureTextEntry={wachtwoord && !zichtbaar}
        placeholderTextColor={colors.textSecondary}
        style={{ ...type.body, flex: 1, color: colors.textPrimary, includeFontPadding: false }}
      />
      {knop ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={knop}
          onPress={() => zetZichtbaar(!zichtbaar)}
          hitSlop={RAAK_MARGE}
        >
          <AppText rol="labelButton" kleur="brand">{knop}</AppText>
        </Pressable>
      ) : null}
    </Card>
  );
}
