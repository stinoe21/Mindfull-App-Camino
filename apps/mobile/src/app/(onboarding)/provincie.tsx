// Provincie
//
// Voor het mentale weer per provincie op de kaart van Nederland
// (feedbacksessie MIND, verwerkt 10 september 2026). Sinds 13 september
// 2026 (Stijn) bepaalt de app de provincie het liefst zelf via de locatie
// van het toestel, met toestemming van het systeem: één tik in plaats van
// een lijst van twaalf. De coördinaten blijven op het toestel, zie
// features/weer/locatie.ts. Wie dat niet wil kiest zelf, of slaat over:
// dan telt de check-in landelijk mee als "onbekend".

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen } from "@/features/profiel/instellingen";
import { bepaalProvincieViaLocatie } from "@/features/weer/locatie";
import { PROVINCIE_CODES, PROVINCIE_NAMEN, type ProvincieCode } from "@/features/weer/provincies";

const nl = {
  titel: "Waar in Nederland ben je?",
  ondertitel: "Voor het mentale weer per provincie. Je locatie blijft op je telefoon; alleen de provincie telt mee.",
  gebruikLocatie: "Gebruik mijn locatie",
  zelfKiezen: "Zelf kiezen",
  verder: "Verder",
  slaOver: "Liever niet",
  gevonden: "Je bent in {provincie}.",
  geweigerd: "Zonder toegang tot je locatie kun je hieronder zelf kiezen.",
  buiten: "We vinden geen Nederlandse provincie bij je locatie. Kies hieronder zelf, of sla over.",
  mislukt: "Je locatie kon niet worden bepaald. Kies hieronder zelf, of probeer het later opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Where in the Netherlands are you?",
    ondertitel: "For the mental weather per province. Your location stays on your phone; only the province counts.",
    gebruikLocatie: "Use my location",
    zelfKiezen: "Choose myself",
    verder: "Continue",
    slaOver: "Rather not",
    gevonden: "You are in {provincie}.",
    geweigerd: "Without access to your location you can choose below.",
    buiten: "We can't find a Dutch province at your location. Choose below, or skip.",
    mislukt: "Your location couldn't be determined. Choose below, or try again later.",
  },
};

export default function Provincie() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [gekozen, zetGekozen] = useState<ProvincieCode | null>(null);
  const [viaLocatie, zetViaLocatie] = useState(false);
  const [zelf, zetZelf] = useState(false);
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  const locatie = async () => {
    zetBezig(true);
    zetMelding(null);
    const uitkomst = await bepaalProvincieViaLocatie();
    zetBezig(false);
    if (uitkomst.status === "ok") {
      zetGekozen(uitkomst.provincie);
      zetViaLocatie(true);
      zetZelf(false);
      zetMelding(t("gevonden").replace("{provincie}", PROVINCIE_NAMEN[uitkomst.provincie]));
      return;
    }
    zetZelf(true);
    zetMelding(uitkomst.status === "geweigerd" ? t("geweigerd") : uitkomst.status === "buiten-nederland" ? t("buiten") : t("mislukt"));
  };

  const kiesZelf = (code: ProvincieCode | null) => {
    zetGekozen(code);
    zetViaLocatie(false);
    zetMelding(null);
  };

  const verder = async (bewaren: boolean) => {
    await bewaarInstellingen({ provincie: bewaren ? gekozen : null, provincieViaLocatie: bewaren && viaLocatie });
    router.push("/anonimiteit");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} heroInhoud={<MascotMain hoogte={112} />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      <View style={{ gap: space[3] }}>
        <Button label={t("gebruikLocatie")} fullWidth bezig={bezig} onPress={locatie} />
        {!zelf ? <Button label={t("zelfKiezen")} variant="secondary" fullWidth onPress={() => zetZelf(true)} /> : null}
      </View>

      {melding ? (
        <Card tone="white">
          <AppText rol="bodySmall">{melding}</AppText>
        </Card>
      ) : null}

      {zelf ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          {PROVINCIE_CODES.map((code) => (
            <Chip key={code} label={PROVINCIE_NAMEN[code]} active={gekozen === code} onPress={() => kiesZelf(gekozen === code ? null : code)} />
          ))}
        </View>
      ) : null}

      <View style={{ flex: 1 }} />
      <Button label={t("verder")} fullWidth disabled={!gekozen} onPress={() => verder(true)} />
      <Button label={t("slaOver")} variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
