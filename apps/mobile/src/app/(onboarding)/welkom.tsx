// Welkom
//
// Het eerste scherm bij een verse installatie: de vlieger zegt in twee korte
// alinea's wat de app is, en daarna begint het. Maximaal een tot twee
// introschermen (productprincipes 7): dit is de ene.
//
// De taalknop staat hier (Stijn, 17 september 2026): de app begint altijd in
// het Nederlands, en wie liever Engels leest hoeft daarvoor niet eerst de
// hele onboarding door naar Profiel. De knop noemt de andere taal in die
// taal zelf, zodat je hem ook herkent als je de huidige niet leest.
//
// Twee knoppen, zoals het eerste scherm van Ommetje: wie nieuw is kiest
// Start, wie al een account heeft komt straks op Inloggen uit in plaats van
// op Account aanmaken. De stappen ertussen blijven dezelfde, want de
// leeftijdscheck heeft geen Skip en staat alleen op het toestel.

import { useRouter } from "expo-router";
import { View } from "react-native";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";

import { useTaal, useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";

// De uitleg van de weermetafoor, eenmalig en voor de eerste check-in, in
// twee, drie zinnen: gevraagd door MIND in de feedbacksessie (verwerkt 10
// september 2026). Het is interface-copy; MIND doet later een eigen slag.
const nl = {
  titel: "Welkom bij Weertje",
  watIsHet:
    "In deze app is het weer een vergelijking voor hoe je je voelt. Zonnig, bewolkt of regen: het zegt niets over wie je bent, alleen hoe vandaag voelt.",
  watDoeJe: "Elke dag vier korte vragen, en je telt anoniem mee in het mentale weer van Nederland. Doe je mee?",
  andereTaal: "Switch to English",
  start: "Start",
  hebAlAccount: "Ik heb al een account",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Welcome to Weertje",
    watIsHet:
      "In this app the weather is a way of describing how you feel. Sunny, cloudy or rain: it says nothing about who you are, only how today feels.",
    watDoeJe: "Four short questions a day, and you count anonymously towards the mental weather of the Netherlands. Will you join?",
    andereTaal: "Terug naar Nederlands",
    start: "Start",
    hebAlAccount: "I already have an account",
  },
};

export default function Welkom() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { taal, kiesTaal } = useTaal();
  return (
    <OnboardingScherm titel={t("titel")} zonderTerug>
      <AppText rol="body">{t("watIsHet")}</AppText>
      <AppText rol="body">{t("watDoeJe")}</AppText>
      <View style={{ alignItems: "flex-start" }}>
        <Button label={t("andereTaal")} variant="link" onPress={() => kiesTaal(taal === "nl" ? "en" : "nl")} />
      </View>

      <View style={{ flex: 1 }} />
      <Button label={t("start")} fullWidth onPress={() => router.push("/leeftijd")} />
      <Button
        label={t("hebAlAccount")}
        variant="secondary"
        fullWidth
        onPress={() => router.push({ pathname: "/leeftijd", params: { stand: "inloggen" } })}
      />
    </OnboardingScherm>
  );
}
