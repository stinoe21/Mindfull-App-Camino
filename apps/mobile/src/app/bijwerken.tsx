// Werk de app bij, of: even onderhoud.
//
// Hier komt iemand alleen via de poort, als de server zegt dat deze versie te
// oud is of dat er onderhoud is (features/systeem/appStatus.ts). Rustig van
// toon en zonder schuld: het ligt niet aan de gebruiker. De Hulplijn staat
// erbij, want juist als de app het niet doet moet die bereikbaar zijn
// (productprincipe 9); /hulplijn ligt buiten de poort.
//
// Er staat nog geen knop naar de store: de naam en het bundelnummer liggen
// nog niet vast. Zodra de app in de stores staat, komt die er hier bij.

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { controleerAppStatus, useAppStatus } from "@/features/systeem/appStatus";

const nl = {
  oudTitel: "Werk Weertje bij",
  oudTekst: "Deze versie van Weertje werkt niet meer goed samen met de rest. Werk de app bij in de App Store of in Google Play, dan kun je weer verder.",
  onderhoudTitel: "Even niet beschikbaar",
  opnieuw: "Probeer opnieuw",
  nogNiet: "Het is nog niet zover. Probeer het later nog eens.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    oudTitel: "Update Weertje",
    oudTekst: "This version of Weertje no longer works well with the rest. Update the app in the App Store or Google Play and you can continue.",
    onderhoudTitel: "Not available right now",
    opnieuw: "Try again",
    nogNiet: "Not yet. Please try again later.",
  },
};

export default function Bijwerken() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const status = useAppStatus();
  const [bezig, zetBezig] = useState(false);
  const [nogNiet, zetNogNiet] = useState(false);

  const opnieuw = async () => {
    zetBezig(true);
    const nieuw = await controleerAppStatus(true);
    zetBezig(false);
    if (nieuw.soort === "ok") router.replace("/");
    else zetNogNiet(true);
  };

  const onderhoud = status.soort === "onderhoud";
  return (
    <ScreenCanvas state="default">
      <View style={{ gap: space[2] }}>
        <AppText rol="h1">{onderhoud ? t("onderhoudTitel") : t("oudTitel")}</AppText>
        {/* Het onderhoudsbericht komt van MIND, uit de database, en is Nederlands. */}
        <AppText rol="body">{onderhoud ? status.bericht : t("oudTekst")}</AppText>
      </View>
      <Button label={t("opnieuw")} variant="secondary" fullWidth bezig={bezig} onPress={opnieuw} />
      {nogNiet ? <AppText rol="bodySmall" kleur="secondary" accessibilityLiveRegion="polite">{t("nogNiet")}</AppText> : null}
      <HulplijnKaart />
    </ScreenCanvas>
  );
}
