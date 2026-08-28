// Anonimiteit en toestemming
//
// Legt woordelijk uit wat er met een check-in gebeurt, met de canonieke
// zinnen uit het ontwerp: "Niemand kan zien wat jij hebt ingevuld." en
// "Je kunt dit altijd wijzigen in Instellingen." Twee apart intrekbare
// toestemmingen (docs/privacy-besluiten.md); de definitieve teksten liggen
// bij Paul, de labels hier beschrijven feitelijk wat de schakelaar doet.
// De voorwaarden-stap heeft geen Skip (productprincipes 6).

import { useRouter } from "expo-router";
import { useState } from "react";
import { Switch, View } from "react-native";

import { colors, palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { bewaarInstellingen } from "@/features/profiel/instellingen";
import { WatIsHetWeerbericht } from "@/features/weer/WatIsHetWeerbericht";
import { UITLEG_ANONIMITEIT, UITLEG_DETAIL } from "@/features/weer/WeerberichtIntro";

export default function Anonimiteit() {
  const router = useRouter();
  const [weerbericht, zetWeerbericht] = useState(true);
  const [voorwaarden, zetVoorwaarden] = useState(false);

  const klaar = async () => {
    await bewaarInstellingen({
      consentWeerbericht: weerbericht,
      consentVoorwaarden: voorwaarden,
      onboardingAfgerond: true,
    });
    router.dismissAll();
    router.replace("/dashboard");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Draag anoniem bij</AppText>
        <AppText rol="subtitle" kleur="secondary">Niemand kan zien wat jij hebt ingevuld.</AppText>
      </View>

      <Card tone="white">
        <AppText rol="body">{UITLEG_ANONIMITEIT}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{UITLEG_DETAIL}</AppText>
        <WatIsHetWeerbericht />
      </Card>

      <Card tone="white">
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
          <AppText rol="bodySmall" style={{ flexShrink: 1 }}>
            Mijn check-in telt anoniem mee in het mentale weerbericht van Nederland
          </AppText>
          <Switch
            value={weerbericht}
            onValueChange={zetWeerbericht}
            trackColor={{ true: colors.brandDefault, false: palette.neutral200 }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
          <AppText rol="bodySmall" style={{ flexShrink: 1 }}>
            Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is
          </AppText>
          <Switch
            value={voorwaarden}
            onValueChange={zetVoorwaarden}
            trackColor={{ true: colors.brandDefault, false: palette.neutral200 }}
          />
        </View>
      </Card>

      {!voorwaarden ? (
        <AppText rol="bodySmall" kleur="secondary">
          Accepteer de voorwaarden om verder te gaan. Meetellen in het weerbericht is en blijft een vrije
          keuze.
        </AppText>
      ) : null}

      <View style={{ flex: 1 }} />
      <Button label="Naar de app" fullWidth disabled={!voorwaarden} onPress={klaar} />
    </ScreenCanvas>
  );
}
