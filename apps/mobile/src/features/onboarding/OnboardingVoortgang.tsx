// Voortgang in de onboarding: "STAP 2 van 5" met de stippen, dezelfde vorm
// als in de check-in. Zonder dit hadden zes schermen met dezelfde mascotte
// geen begin en geen eind (UX-ronde 13 september 2026, Stijn: "je hebt niet
// zo overzicht van het geheel"). Welkom telt niet mee: dat is de intro.

import { View } from "react-native";

import { colors, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

/** Leeftijd, account, naam, onderwerpen, toestemming. */
export const ONBOARDING_STAPPEN = 5;

const nl = { stapVan: "STAP {x} van {y}" } as const;
const teksten: Woordenboek<typeof nl> = { nl, en: { stapVan: "STEP {x} of {y}" } };

export function OnboardingVoortgang({ stap }: { stap: number }) {
  const t = useVertaling(teksten);
  const label = t("stapVan").replace("{x}", String(stap)).replace("{y}", String(ONBOARDING_STAPPEN));
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }} accessibilityLabel={label}>
      <AppText rol="labelOverline" kleur="brand">{label}</AppText>
      <View style={{ flexDirection: "row", gap: space[2] }}>
        {Array.from({ length: ONBOARDING_STAPPEN }, (_, i) => (
          <View
            key={i}
            style={{
              width: i + 1 === stap ? space[5] : space[2],
              height: space[2],
              borderRadius: radius.pill,
              backgroundColor: i + 1 === stap ? colors.brandDefault : colors.borderDefault,
            }}
          />
        ))}
      </View>
    </View>
  );
}
