// Anonimiteit en toestemming
//
// Legt woordelijk uit wat er met een check-in gebeurt, met de canonieke
// zinnen uit het ontwerp: "Niemand kan zien wat jij hebt ingevuld." en
// "Je kunt dit altijd wijzigen in Instellingen." Twee apart intrekbare
// toestemmingen (docs/privacy-besluiten.md). De toestemming voor het
// weerbericht is de tekst van Paul (28 augustus 2026), als expliciete keuze
// ja of nee zonder standaardwaarde; de voorwaarden zijn een schakelaar.
// De voorwaarden-stap heeft geen Skip (productprincipes 6).

import { useRouter } from "expo-router";
import { useState } from "react";
import { Switch, View } from "react-native";

import { colors, palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { bewaarInstellingen } from "@/features/profiel/instellingen";
import { ToestemmingKeuze } from "@/features/profiel/ToestemmingKeuze";

export default function Anonimiteit() {
  const router = useRouter();
  const [weerbericht, zetWeerbericht] = useState<boolean | null>(null);
  const [voorwaarden, zetVoorwaarden] = useState(false);
  const compleet = weerbericht !== null && voorwaarden;

  const klaar = async () => {
    await bewaarInstellingen({
      consentWeerbericht: weerbericht === true,
      consentVoorwaarden: voorwaarden,
      onboardingAfgerond: true,
    });
    router.dismissAll();
    router.replace("/dashboard");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} heroInhoud={<MascotMain hoogte={112} />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Draag anoniem bij</AppText>
        <AppText rol="subtitle">Niemand kan zien wat jij hebt ingevuld.</AppText>
      </View>

      {/* Eén formulier, twee velden. De uitleg over anonimiteit stond hier
          ook nog eens los boven de toestemming; die staat op het weerbericht
          zelf, met de infoknop (ontdubbeling, 1 september 2026). */}
      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="brand">1 VAN 2</AppText>
        <ToestemmingKeuze waarde={weerbericht} onKies={zetWeerbericht} metUitleg />
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="brand">2 VAN 2</AppText>
        <Card tone="white" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
          <AppText rol="body" style={{ flexShrink: 1 }}>
            Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is
          </AppText>
          <Switch
            value={voorwaarden}
            onValueChange={zetVoorwaarden}
            trackColor={{ true: colors.brandDefault, false: palette.neutral200 }}
          />
        </Card>
      </View>

      <View style={{ gap: space[3] }}>
        <Button label="Klaar" fullWidth disabled={!compleet} onPress={klaar} />
        {!compleet ? (
          <AppText rol="bodySmall" kleur="secondary" centreer>
            Kies ja of nee en zet de voorwaarden aan. Nee is een prima keuze; de app werkt dan net zo goed.
          </AppText>
        ) : null}
      </View>
    </ScreenCanvas>
  );
}
