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

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN } from "@/features/content/data/artikelen";

const nl = {
  nietGevonden: "Artikel niet gevonden",
  nietGevondenUitleg: "Dit artikel bestaat niet of is verplaatst.",
  terugNaslagwerk: "Terug naar het naslagwerk",
  bron: "Bron: MIND",
  leesOp: "Lees op wijzijnmind.nl",
  terug: "Terug",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Article not found",
    nietGevondenUitleg: "This article doesn't exist or has been moved.",
    terugNaslagwerk: "Back to the reference library",
    bron: "Source: MIND",
    leesOp: "Read on wijzijnmind.nl",
    terug: "Back",
  },
};

export default function Artikel() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { artikel: slug } = useLocalSearchParams<{ artikel: string }>();
  const artikel = ARTIKELEN.find((a) => a.slug === slug);

  if (!artikel) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugNaslagwerk")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
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
        <AppText rol="bodySmall" kleur="secondary">{t("bron")}</AppText>
        {artikel.bron ? (
          <Button label={t("leesOp")} variant="link" onPress={() => Linking.openURL(artikel.bron)} />
        ) : null}
      </Card>

      <Button label={t("terug")} variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
