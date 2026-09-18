// Pilvormige onderwerp-tag. Twee rollen, zie Chip.prompt.md: bladerhulp
// (onderwerpen in het naslagwerk) en meervoudige keuze (de voorkeuren-stap).
//
// De specificatie tekent 13/18; de typeschaal kent die maat niet en de
// lint-regel staat geen losse maat toe, dus dit is labelButton (14/20), de
// dichtstbijzijnde rol. Gemeld in de PR.

import { Pressable, View } from "react-native";

import { colors, palette, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

export type ChipProps = {
  label: string;
  active?: boolean;
  /** De kleur in rust, bijvoorbeeld de kleur van het onderwerp (kaartKleurVoor). Standaard lichtblauw. */
  kleur?: string;
  /**
   * De kleur als de chip aan staat, voor een meervoudige keuze: de chip houdt
   * zijn onderwerpkleur (dieper) en krijgt een vinkje, in plaats van de petrol
   * filterstand. Zonder deze prop is een actieve chip petrol met witte tekst.
   */
  gekozenKleur?: string;
  onPress?: () => void;
};

export function Chip({ label, active = false, kleur, gekozenKleur, onPress }: ChipProps) {
  const aangevinkt = active && gekozenKleur !== undefined;
  const inhoud = (
    <AppText rol="labelButton" style={{ color: active && !aangevinkt ? colors.textOnprimary : aangevinkt ? colors.textPrimary : palette.primary800 }}>
      {aangevinkt ? "✓ " + label : label}
    </AppText>
  );
  const basis = {
    paddingVertical: space[2],
    paddingHorizontal: space[4],
    borderRadius: radius.pill,
    backgroundColor: aangevinkt ? gekozenKleur : active ? palette.primary700 : (kleur ?? palette.primary50),
    alignSelf: "flex-start" as const,
  };
  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: active }}
        onPress={onPress}
        // De chip is ongeveer 36 hoog; met 4 erboven en eronder is het raakvlak 44.
        hitSlop={{ top: space[1], bottom: space[1] }}
        style={({ pressed }) => [basis, { opacity: pressed ? 0.7 : 1 }]}
      >
        {inhoud}
      </Pressable>
    );
  }
  return <View style={basis}>{inhoud}</View>;
}
