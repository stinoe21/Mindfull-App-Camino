// Leeftijdscheck 16+
//
// Harde toegangseis, geen Skip (productprincipes 6, board 74:230). Komt voor
// het aanmaken van een account; onder de 16 geen toegang, en daarmee is
// ouderlijke toestemming niet nodig (docs/datamodel.md).

import { useRouter } from "expo-router";
import { useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { bewaarInstellingen } from "@/features/profiel/instellingen";

export default function Leeftijd() {
  const router = useRouter();
  const [teJong, zetTeJong] = useState(false);

  const bevestig = async () => {
    await bewaarInstellingen({ leeftijdBevestigd: true });
    router.push("/inloggen");
  };

  if (teJong) {
    return (
      <ScreenCanvas state="default">
        <AppText rol="h1">Tot later</AppText>
        <Card tone="white">
          <AppText rol="body">
            Deze app is voor iedereen van 16 jaar en ouder. Jonger? Dan kun je de app nu nog niet
            gebruiken.
          </AppText>
        </Card>
        <Button label="Terug" variant="link" onPress={() => zetTeJong(false)} />
      </ScreenCanvas>
    );
  }

  return (
    <ScreenCanvas state="default">
      <AppText rol="h1">Ben je 16 jaar of ouder?</AppText>
      <AppText rol="body" kleur="secondary">
        Deze app is voor iedereen van 16 jaar en ouder. We vragen dit een keer, voordat je een account
        maakt.
      </AppText>
      <Button label="Ja, ik ben 16 of ouder" fullWidth onPress={bevestig} />
      <Button label="Nee, ik ben jonger" variant="secondary" fullWidth onPress={() => zetTeJong(true)} />
    </ScreenCanvas>
  );
}
