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
// Een wachtwoordveld krijgt rechts een oogje (Stijn, 18 september 2026: het
// woord "Toon" viel niet op, een oogje kent iedereen). Open oog: tik om te
// zien wat je typt. Oog met een streep erdoor: tik om het weer te verbergen.
// De assetbibliotheek heeft geen oog-icoon, dus het is hier in code getekend
// in dezelfde inktlijn als het vinkje van KeuzeVak. Komt er een oogje in
// Figma, dan vervangen die paden deze. De twee woorden die het scherm
// meegeeft zijn het label voor de schermlezer, zodat ze met de taal meegaan.

import { useState } from "react";
import { Pressable, TextInput, type TextInputProps } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import { colors, space, type } from "../tokens/tokens.ts";

import { Card } from "./Card.tsx";

export type TextFieldProps = Omit<TextInputProps, "style" | "placeholderTextColor" | "secureTextEntry"> & {
  /** Een wachtwoordveld: verborgen, met rechts de knop om het te tonen. */
  wachtwoord?: boolean;
  /** Wat de schermlezer bij het oogje zegt. Verplicht bij een wachtwoordveld. */
  toonLabel?: string;
  verbergLabel?: string;
};

// Het oogje is 24 punten. Met 12 punten eromheen is het raakvlak 48, boven de
// ondergrens van 44 van Apple, zonder dat het veld er hoger van wordt.
const OOG_MAAT = 24;
const RAAK_MARGE = space[3];

function Oogje({ doorgestreept }: { doorgestreept: boolean }) {
  const lijn = { stroke: colors.brandDefault, strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
  return (
    <Svg width={OOG_MAAT} height={OOG_MAAT} viewBox="0 0 24 24">
      <Path d="M2.5 12 C5.2 7.2 8.4 5 12 5 C15.6 5 18.8 7.2 21.5 12 C18.8 16.8 15.6 19 12 19 C8.4 19 5.2 16.8 2.5 12 Z" {...lijn} />
      <Circle cx={12} cy={12} r={3} {...lijn} />
      {doorgestreept ? <Path d="M4.5 3.5 L19.5 20.5" {...lijn} /> : null}
    </Svg>
  );
}

export function TextField({ wachtwoord = false, toonLabel, verbergLabel, ...rest }: TextFieldProps) {
  const [zichtbaar, zetZichtbaar] = useState(false);
  const knop = wachtwoord && toonLabel && verbergLabel ? (zichtbaar ? verbergLabel : toonLabel) : null;
  return (
    <Card tone="white" style={{ paddingVertical: space[2], flexDirection: "row", alignItems: "center", gap: space[2] }}>
      <TextInput
        {...rest}
        secureTextEntry={wachtwoord && !zichtbaar}
        // Hetzelfde plafond als lopende tekst in AppText: de invoer mag
        // verdubbelen met de systeemletter, niet verdrievoudigen.
        maxFontSizeMultiplier={2}
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
          <Oogje doorgestreept={zichtbaar} />
        </Pressable>
      ) : null}
    </Card>
  );
}
