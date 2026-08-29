// Challenge afgerond
//
// Vieringsscherm met de vlieger en meer lucht (lagere sheet, zie HERKOMST.md
// schermregel 2). Geen confetti, geen badges, geen streaks: een afronding is
// klaar, geen prestatie (productprincipes 4).

import { useLocalSearchParams, useRouter } from "expo-router";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  titel: "Dat was het voor vandaag",
  uitleg: "Morgen staat de volgende dag klaar, als je wilt.",
  verder: "Verder met de challenge",
  terug: "Terug naar challenges",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Well done",
    uitleg: "You've completed this part. Small steps count.",
    verder: "Continue with the challenge",
    terug: "Back to challenges",
  },
};

export default function ChallengeAfgerond() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();

  return (
    <ScreenCanvas variant="overlay" state="zonnig" sheetTop={200}>
      <MascotteVlieger state="zonnig" hoogte={100} />
      <AppText rol="h1" centreer>{t("titel")}</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        {t("uitleg")}
      </AppText>
      <Button
        label={t("verder")}
        fullWidth
        onPress={() =>
          slug
            ? router.replace({ pathname: "/challenges/[challenge]", params: { challenge: slug } })
            : router.replace("/challenges")
        }
      />
      <Button label={t("terug")} variant="link" onPress={() => router.replace("/challenges")} />
    </ScreenCanvas>
  );
}
