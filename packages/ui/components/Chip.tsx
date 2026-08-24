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
  onPress?: () => void;
};

export function Chip({ label, active = false, onPress }: ChipProps) {
  const inhoud = (
    <AppText rol="labelButton" style={{ color: active ? colors.textOnprimary : palette.primary800 }}>
      {label}
    </AppText>
  );
  const basis = {
    paddingVertical: space[2],
    paddingHorizontal: space[4],
    borderRadius: radius.pill,
    backgroundColor: active ? palette.primary700 : palette.primary50,
    alignSelf: "flex-start" as const,
  };
  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: active }}
        onPress={onPress}
        style={({ pressed }) => [basis, { opacity: pressed ? 0.7 : 1 }]}
      >
        {inhoud}
      </Pressable>
    );
  }
  return <View style={basis}>{inhoud}</View>;
}
