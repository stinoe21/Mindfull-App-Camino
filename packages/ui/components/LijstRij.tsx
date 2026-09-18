// Een lijst van rijen op het vel: titel, optioneel een regel eronder, links
// optioneel een beeld (de vlieger) en rechts een "›". Rijen worden gescheiden
// door een dunne lijn; geen kaart eromheen, de lijst staat direct op het vel
// (Stijn, 10 september 2026: inhoud op het vel, geen invulvakken).
//
// Gebouwd voor Houvast (14 september 2026, Stijn: "een lange scroll onder
// elkaar, niet per onderdeel opgedeeld"): de onderwerpen van een familie en
// de losse gidsen staan als rijen, zodat een lijst van vijf leest als een
// lijst en niet als vijf kaarten. InstellingenRij op Profiel is de oudere
// variant op een kaart; die blijft staan tot Profiel aan de beurt is.

import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { View } from "react-native";

import { colors, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";
import { PressableScale } from "./PressableScale.tsx";

export type LijstRijProps = {
  titel: string;
  /** Een regel onder de titel: aantal tips, een onderwerp, een duur. */
  meta?: string;
  /** Links van de tekst, bijvoorbeeld de vlieger van het onderwerp. */
  beeld?: ReactNode;
  /** Overline boven de titel, bijvoorbeeld "CHALLENGE". */
  label?: string;
  onPress?: () => void;
  /** Laatste rij van een lijst: geen lijn eronder. Lijst zet dit zelf. */
  laatste?: boolean;
};

export function LijstRij({ titel, meta, beeld, label, onPress, laatste = false }: LijstRijProps) {
  const inhoud = (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: space[4],
        paddingVertical: space[3],
        borderBottomWidth: laatste ? 0 : 1,
        borderBottomColor: colors.borderDefault,
      }}
    >
      {beeld ? <View style={{ flexShrink: 0 }}>{beeld}</View> : null}
      <View style={{ flex: 1, gap: space[1] }}>
        {label ? <AppText rol="labelOverline" kleur="brand">{label}</AppText> : null}
        <AppText rol="bodyEmphasis">{titel}</AppText>
        {meta ? <AppText rol="bodySmall" kleur="secondary">{meta}</AppText> : null}
      </View>
      {onPress ? <AppText rol="body" kleur="secondary">{"›"}</AppText> : null}
    </View>
  );
  if (!onPress) return inhoud;
  return (
    <PressableScale accessibilityRole="button" onPress={onPress} schaal={0.99}>
      {inhoud}
    </PressableScale>
  );
}

/** Zet de rijen onder elkaar en laat de lijn onder de laatste weg. */
export function Lijst({ children }: { children: ReactNode }) {
  const rijen = Children.toArray(children).filter((kind) => isValidElement<LijstRijProps>(kind));
  return (
    <View>
      {rijen.map((rij, i) => (i === rijen.length - 1 ? cloneElement(rij, { laatste: true }) : rij))}
    </View>
  );
}
