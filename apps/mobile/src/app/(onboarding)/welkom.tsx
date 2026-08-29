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

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  titel: "Het mentale weerbericht",
  ondertitel: "Hoe is je weer vandaag?",
  uitleg:
    "Vier korte vragen per dag. Je ziet jouw eigen weer, met één kleine tip. En je telt anoniem mee in het mentale weer van Nederland.",
  aanDeSlag: "Aan de slag",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "The mental weather forecast",
    ondertitel: "How's your weather today?",
    uitleg:
      "Check in every day with four short questions. You see your own weather, with a small tip for today, and you count anonymously towards the mental weather forecast of the Netherlands.",
    aanDeSlag: "Get started",
  },
};

export default function Welkom() {
  const router = useRouter();
  const t = useVertaling(teksten);
  return (
    <ScreenCanvas variant="overlay" state="default" sheetTop={140}>
      <MascotteVlieger state="intake" hoogte={150} />
      <AppText rol="h1" centreer>{t("titel")}</AppText>
      <AppText rol="subtitle" kleur="secondary" centreer>{t("ondertitel")}</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        {t("uitleg")}
      </AppText>
      <Button label={t("aanDeSlag")} fullWidth onPress={() => router.push("/leeftijd")} />
    </ScreenCanvas>
  );
}
