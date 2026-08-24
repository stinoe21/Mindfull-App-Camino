// Welkom
//
// Het eerste scherm bij een verse installatie: de vlieger (intake-houding) en
// de kern van de app in een paar zinnen, in de taal van het design system.
// Maximaal een tot twee introschermen (productprincipes 7): dit is de ene.

import { useRouter } from "expo-router";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

export default function Welkom() {
  const router = useRouter();
  return (
    <ScreenCanvas variant="overlay" state="default" sheetTop={140}>
      <MascotteVlieger state="intake" hoogte={150} />
      <AppText rol="h1" centreer>Het mentale weerbericht</AppText>
      <AppText rol="subtitle" kleur="secondary" centreer>Dit is ongeveer mijn weer vandaag.</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        Check elke dag in met vier korte vragen. Je ziet jouw eigen weer, met een kleine tip voor
        vandaag, en je telt anoniem mee in het mentale weerbericht van Nederland.
      </AppText>
      <Button label="Aan de slag" fullWidth onPress={() => router.push("/leeftijd")} />
    </ScreenCanvas>
  );
}
