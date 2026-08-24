// De ene knop van het design system. Pilvorm, drie varianten.
// Specificatie: packages/ui/reference/components/buttons/Button.jsx
//
// primary   lime vulling, inkt tekst. Maximaal een per scherm.
// secondary inkt-rand van 1,5, transparant.
// link      kale tekst in petrol.
//
// Er is geen hover in het ontwerp; de ingedrukte staat is een lichte dim,
// en dat is onze conventie (zie HERKOMST.md, Animation/states).

import { ActivityIndicator, Pressable, type StyleProp, type ViewStyle } from "react-native";

import { colors, radius, space } from "../tokens/tokens.ts";

import { AppText } from "./AppText.tsx";

export type ButtonVariant = "primary" | "secondary" | "link";

export type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Laadstaat: toont een spinner en blokkeert de knop. */
  bezig?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  label,
  variant = "primary",
  fullWidth = false,
  disabled = false,
  bezig = false,
  onPress,
  style,
}: ButtonProps) {
  const isLink = variant === "link";
  const uit = disabled || bezig;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: uit, busy: bezig }}
      disabled={uit}
      onPress={onPress}
      style={({ pressed }) => [
        {
          borderRadius: radius.pill,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: space[2],
          height: isLink ? 36 : 48,
          paddingVertical: isLink ? space[2] : 14,
          paddingHorizontal: isLink ? space[2] : space[6],
          alignSelf: fullWidth ? "stretch" : "flex-start",
          opacity: disabled ? 0.45 : pressed ? 0.7 : 1,
        },
        variant === "primary" && { backgroundColor: colors.ctaDefault },
        variant === "secondary" && { borderWidth: 1.5, borderColor: colors.textPrimary },
        style,
      ]}
    >
      {bezig ? (
        <ActivityIndicator size="small" color={variant === "primary" ? colors.ctaText : colors.brandDefault} />
      ) : null}
      <AppText rol="labelButton" kleur={variant === "link" ? "brand" : "cta"} style={variant === "secondary" && { color: colors.textPrimary }}>
        {label}
      </AppText>
    </Pressable>
  );
}
