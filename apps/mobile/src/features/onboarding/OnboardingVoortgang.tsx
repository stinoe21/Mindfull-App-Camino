// Voortgang in de onboarding: alleen de stippen. Tot 17 september 2026 stond
// er links ook "STAP 2 van 5" bij; Stijn vond dat dubbelop, de stippen zeggen
// hetzelfde. De tekst bestaat nog wel als label voor de schermlezer, want
// stippen alleen zeggen die niets. Zonder dit hadden zes schermen met dezelfde mascotte
// geen begin en geen eind (UX-ronde 13 september 2026, Stijn: "je hebt niet
// zo overzicht van het geheel"). Welkom telt niet mee: dat is de intro.

import { View } from "react-native";

import { colors, radius, space } from "@mind/ui";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

/** Leeftijd, account, naam, onderwerpen, toestemming. */
export const ONBOARDING_STAPPEN = 5;

const nl = { stapVan: "Stap {x} van {y}" } as const;
const teksten: Woordenboek<typeof nl> = { nl, en: { stapVan: "Step {x} of {y}" } };

export function OnboardingVoortgang({ stap }: { stap: number }) {
  const t = useVertaling(teksten);
  const label = t("stapVan").replace("{x}", String(stap)).replace("{y}", String(ONBOARDING_STAPPEN));
  return (
    <View accessible accessibilityRole="progressbar" accessibilityLabel={label} accessibilityValue={{ min: 1, max: ONBOARDING_STAPPEN, now: stap }}>
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
