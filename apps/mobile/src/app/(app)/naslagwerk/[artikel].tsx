// Artikel
//
// Een artikel uit het naslagwerk van Mind. Bronvermelding is verplicht:
// "Bron: MIND" onder elk artikel (HERKOMST.md, Content fundamentals). Geen
// gegenereerde antwoorden: altijd herleidbaar naar de bronpagina.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { ARTIKELEN } from "@/features/content/data/artikelen";

export default function Artikel() {
  const router = useRouter();
  const { artikel: slug } = useLocalSearchParams<{ artikel: string }>();
  const artikel = ARTIKELEN.find((a) => a.slug === slug);

  if (!artikel) {
    return (
      <ScreenCanvas state="default">
        <AppText rol="h1">Artikel niet gevonden</AppText>
        <AppText rol="body" kleur="secondary">Dit artikel bestaat niet of is verplaatst.</AppText>
        <Button label="Terug naar het naslagwerk" variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  return (
    <ScreenCanvas state="default">
      <View style={{ gap: space[2] }}>
        <Chip label={artikel.onderwerp} />
        <AppText rol="h1">{artikel.titel}</AppText>
      </View>

      {artikel.blokken.map((blok, i) => (
        <View key={i} style={{ gap: space[2] }}>
          {blok.kop ? <AppText rol="h3">{blok.kop}</AppText> : null}
          <AppText rol="body">{blok.tekst}</AppText>
        </View>
      ))}

      <Card tone="outline">
        <AppText rol="bodySmall" kleur="secondary">Bron: MIND</AppText>
        {artikel.bron ? (
          <Button label="Lees op wijzijnmind.nl" variant="link" onPress={() => Linking.openURL(artikel.bron)} />
        ) : null}
      </Card>

      <Button label="Terug" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
