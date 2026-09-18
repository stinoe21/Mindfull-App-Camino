// Het vangnet onder de hele app.
//
// Gaat er bij het tekenen van een scherm iets mis, dan toont React Native
// zonder dit een kale ontwikkelaarsfout, of in een productiebuild een wit
// scherm. expo-router tekent in plaats daarvan wat de root layout als
// ErrorBoundary exporteert, en dat is dit scherm.
//
// Twee dingen zijn hier bewust anders dan op een gewoon scherm:
//
// 1. De Hulplijn staat er direct op, met de knoppen zelf in plaats van de
//    kaart die naar /hulplijn navigeert. Zolang dit scherm staat is de
//    navigator eronder weg, dus navigeren kan niet; bellen en appen wel. Juist
//    als de app het niet doet moet de route naar echte hulp werken
//    (productprincipes 9).
// 2. Er wordt niets gelogd. Een foutmelding kan een stukje invoer van de
//    gebruiker bevatten (CLAUDE.md sectie 8). Alleen in een ontwikkelbuild
//    staat de melding op het scherm, voor onszelf.

import { type ErrorBoundaryProps } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { KANALEN, openKanaal } from "@/features/hulplijn/kanalen";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  titel: "Er ging iets mis",
  uitleg: "Dat ligt niet aan jou. Dit scherm kon even niet worden getoond.",
  opnieuw: "Probeer opnieuw",
  lukteNiet: "Dat lukt niet op dit toestel. Het nummer is 0900 - 1450.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Something went wrong",
    uitleg: "It's not you. This screen couldn't be shown just now.",
    opnieuw: "Try again",
    lukteNiet: "That doesn't work on this device. The number is 0900 - 1450.",
  },
};

export function Foutscherm({ error, retry }: ErrorBoundaryProps) {
  const t = useVertaling(teksten);
  const [lukteNiet, zetLukteNiet] = useState(false);
  // Bellen en WhatsApp: de twee kanalen waarmee je direct iemand spreekt.
  const direct = KANALEN.slice(0, 2);

  return (
    <ScreenCanvas state="default" heroInhoud={<MascotteVlieger state="wolken" hoogte={112} />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("uitleg")}</AppText>
      </View>

      <Button label={t("opnieuw")} fullWidth onPress={retry} />

      {/* Dezelfde woorden als op de HulplijnKaart en de Hulplijn-pagina; de
          tekst is van MIND en blijft Nederlands tot er een canonieke vertaling is. */}
      <Card tone="sun" style={{ gap: space[3] }}>
        <View style={{ gap: space[1] }}>
          <AppText rol="labelOverline" kleur="brand">PRATEN MET IEMAND VAN MIND</AppText>
          <AppText rol="h3">MIND Hulplijn</AppText>
        </View>
        <AppText rol="bodySmall" kleur="secondary">
          Gratis adviesgesprek van 30 minuten. Bereikbaar van maandag tot en met vrijdag van 9:00 tot 21:00 uur.
        </AppText>
        <View style={{ gap: space[2], alignItems: "flex-start" }}>
          {direct.map((k) => (
            <Button
              key={k.url}
              label={k.label}
              variant="secondary"
              onPress={async () => zetLukteNiet(!(await openKanaal(k)))}
            />
          ))}
        </View>
        {lukteNiet ? <AppText rol="bodySmall">{t("lukteNiet")}</AppText> : null}
      </Card>

      {__DEV__ ? (
        <AppText rol="bodySmall" kleur="secondary">{"Alleen in ontwikkeling: " + error.message}</AppText>
      ) : null}
    </ScreenCanvas>
  );
}
