// Over deze app
//
// Drie dingen die een app in de stores hoort te kunnen laten zien, en die
// nergens stonden (gatenlijst 17 september 2026):
//
// 1. Welke versie dit is. Wie een probleem meldt, moet dat kunnen zeggen.
// 2. Dat dit geen hulpverlening is: dezelfde zin als op de Hulplijn-pagina,
//    met de vaste kaart naar de Hulplijn eronder.
// 3. De bronnen. De provinciegrenzen van het CBS en het Kadaster vallen onder
//    CC BY 4.0 en die licentie vraagt naamsvermelding; tot nu toe stond die
//    alleen in een codecommentaar. De lettertypes vallen onder de SIL Open
//    Font License (teksten in packages/ui/assets/fonts).
//
// Wie de app maakt staat hier bewust niet: in de interface geen credits
// (Stijn, 10 september 2026). De privacyverklaring en de voorwaarden krijgen
// hier een rij zodra MIND en Paul ze opleveren.

import Constants from "expo-constants";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  titel: "Over deze app",
  versie: "Weer MIND, versie {versie}",
  geenHulpTitel: "Geen hulpverlening",
  // Woordelijk dezelfde zin als onderaan de Hulplijn-pagina.
  geenHulp: "Deze app is geen hulpverlening en geen vervanging van professionele hulp.",
  bronnenTitel: "Bronnen",
  bronKaart:
    "De kaart van Nederland gebruikt de provinciegrenzen van het CBS en het Kadaster, via cartomap.github.io/nl, onder de licentie CC BY 4.0.",
  bronLetters:
    "De lettertypes Averia Serif Libre en Averia Libre (Dan Sayers) en Open Sans (The Open Sans Project Authors) vallen onder de SIL Open Font License 1.1.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "About this app",
    versie: "Weer MIND, version {versie}",
    geenHulpTitel: "Not a care service",
    geenHulp: "This app is not a care service and does not replace professional help.",
    bronnenTitel: "Sources",
    bronKaart:
      "The map of the Netherlands uses the provincial borders of CBS and Kadaster, via cartomap.github.io/nl, under the CC BY 4.0 licence.",
    bronLetters:
      "The typefaces Averia Serif Libre and Averia Libre (Dan Sayers) and Open Sans (The Open Sans Project Authors) are licensed under the SIL Open Font License 1.1.",
  },
};

export default function OverDezeApp() {
  const t = useVertaling(teksten);
  const versie = Constants.expoConfig?.version ?? "";

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        {versie ? <AppText rol="subtitle">{t("versie").replace("{versie}", versie)}</AppText> : null}
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("geenHulpTitel")}</AppText>
        <AppText rol="body">{t("geenHulp")}</AppText>
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("bronnenTitel")}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{t("bronKaart")}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{t("bronLetters")}</AppText>
      </View>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
