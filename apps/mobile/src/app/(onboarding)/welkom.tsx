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

// De uitleg van de weermetafoor, eenmalig en voor de eerste check-in, in
// twee, drie zinnen: gevraagd door MIND in de feedbacksessie (verwerkt 10
// september 2026). Het is interface-copy; MIND doet later een eigen slag.
const nl = {
  titel: "Weer MIND",
  ondertitel: "Hoe is je weer vandaag?",
  uitleg:
    "In deze app is het weer een vergelijking voor hoe je je voelt. Zonnig, bewolkt of regen: het zegt niets over wie je bent, alleen hoe vandaag voelt. Elke dag vier korte vragen, en je telt anoniem mee in het mentale weer van Nederland.",
  aanDeSlag: "Aan de slag",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Weer MIND",
    ondertitel: "How's your weather today?",
    uitleg:
      "In this app the weather is a way of describing how you feel. Sunny, cloudy or rain: it says nothing about who you are, only how today feels. Four short questions a day, and you count anonymously towards the mental weather of the Netherlands.",
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
      <AppText rol="subtitle" centreer>{t("ondertitel")}</AppText>
      <AppText rol="body" kleur="secondary" centreer>
        {t("uitleg")}
      </AppText>
      <Button label={t("aanDeSlag")} fullWidth onPress={() => router.push("/leeftijd")} />
    </ScreenCanvas>
  );
}
