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

export default function ChallengeAfgerond() {
  const router = useRouter();
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();

  return (
    <ScreenCanvas variant="overlay" state="zonnig" sheetTop={200}>
      <MascotteVlieger state="zonnig" hoogte={100} />
      <AppText rol="h1" centreer>Mooi gedaan</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        Je hebt dit onderdeel afgerond. Kleine stappen tellen.
      </AppText>
      <Button
        label="Verder met de challenge"
        fullWidth
        onPress={() =>
          slug
            ? router.replace({ pathname: "/challenges/[challenge]", params: { challenge: slug } })
            : router.replace("/challenges")
        }
      />
      <Button label="Terug naar challenges" variant="link" onPress={() => router.replace("/challenges")} />
    </ScreenCanvas>
  );
}
