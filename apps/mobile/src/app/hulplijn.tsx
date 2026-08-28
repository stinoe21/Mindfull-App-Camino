// MIND Hulplijn
//
// De route naar echte hulp. De kaarttekst komt uit het design system; de
// beschrijvende zin komt woordelijk uit de content van MIND (psychipedia).
// Er staat hier bewust geen telefoonnummer en geen andere instantie: de
// crisis-signposting-tekst is een open punt in docs/scope.md en wordt door
// niemand geimproviseerd. De knop opent de hulp-en-adviespagina van MIND
// (bron: content/mind/help-mij.md).

import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";

const HULP_URL = "https://wijzijnmind.nl/help-mij";

export default function Hulplijn() {
  const router = useRouter();
  return (
    <ScreenCanvas state="zonnig" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">MIND Hulplijn</AppText>
        <AppText rol="subtitle" kleur="secondary">Praten helpt, en je hoeft niets alleen te doen.</AppText>
      </View>

      <Card tone="sun">
        <AppText rol="h3">Kom in contact</AppText>
        <AppText rol="body">
          Kom gratis met onze professionals in contact. Ook via WhatsApp.
        </AppText>
        <AppText rol="bodySmall" kleur="secondary">
          Je kan (anoniem) bellen, chatten, WhatsAppen of mailen met één van onze psychologen of
          maatschappelijk werkers.
        </AppText>
        <Button label="Kom in contact" onPress={() => Linking.openURL(HULP_URL)} />
      </Card>

      <Card tone="white">
        <AppText rol="bodySmall" kleur="secondary">
          Deze app is geen hulpverlening en geen vervanging van professionele hulp.
        </AppText>
      </Card>

      <Button label="Terug" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
