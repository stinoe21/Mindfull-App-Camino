// Artikel
//
// Een artikel uit het naslagwerk van Mind. Bronvermelding is verplicht:
// "Bron: MIND" onder elk artikel (HERKOMST.md, Content fundamentals). Geen
// gegenereerde antwoorden: altijd herleidbaar naar de bronpagina.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { PressableScale } from "@mind/ui/components/PressableScale";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN } from "@/features/content/data/artikelen";
import { gidsenBijOnderwerp } from "@/features/content/gidsen";

const nl = {
  nietGevonden: "Artikel niet gevonden",
  nietGevondenUitleg: "Dit artikel bestaat niet of is verplaatst.",
  terugNaslagwerk: "Terug naar het naslagwerk",
  bron: "Bron: MIND",
  leesOp: "Lees verder op wijzijnmind.nl",
  terug: "Terug",
  meerTitel: "Meer uit het naslagwerk",
  gidsOverline: "AAN DE SLAG",
  gidsTitel: "Praktische tips van MIND",
  gidsUitleg: "In de online gids staan technieken die je vandaag kunt proberen.",
  gidsLabel: "Gids: {titel}",
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
    meerTitel: "More from the library",
    gidsOverline: "GET STARTED",
    gidsTitel: "Practical tips by MIND",
    gidsUitleg: "The online guide has techniques you can try today.",
    gidsLabel: "Guide: {titel}",
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

  const gidsen = gidsenBijOnderwerp(artikel.onderwerp).slice(0, 3);

  // Eerst artikelen uit hetzelfde onderwerp, dan de rest; nooit dit artikel zelf.
  const meer = [...ARTIKELEN]
    .filter((a) => a.slug !== artikel.slug)
    .sort((a, b) => Number(b.onderwerp === artikel.onderwerp) - Number(a.onderwerp === artikel.onderwerp))
    .slice(0, 4);

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      {/* Opbouw naar Figma Info-scherm (41:71): kicker, titel, beeldtegel,
          metaregel, de eerste alinea vet, dan de rest, dan een knop en
          een plank met meer uit hetzelfde onderwerp. */}
      <View style={{ gap: space[2] }}>
        {artikel.onderwerp !== artikel.titel ? <AppText rol="subtitle">{artikel.onderwerp}</AppText> : null}
        <AppText rol="h1">{artikel.titel}</AppText>
      </View>

      <View style={{ height: 160, borderRadius: radius.lg, backgroundColor: palette.purple50, alignItems: "center", justifyContent: "center" }}>
        <VliegerOnderwerp onderwerp={artikel.onderwerp} slug={artikel.slug} hoogte={96} />
      </View>

      <AppText rol="labelCaption" kleur="secondary">{t("bron") + " · " + artikel.onderwerp}</AppText>

      {/* De gidsen bij dit onderwerp boven de tekst, hoog op het scherm: MIND
          wil handelingsperspectief boven uitleg (feedbacksessie, verwerkt
          10 september 2026). */}
      {gidsen.length ? (
        <Card tone="coral">
          <AppText rol="labelOverline" kleur="brand">{t("gidsOverline")}</AppText>
          <AppText rol="h3">{t("gidsTitel")}</AppText>
          <AppText rol="bodySmall">{t("gidsUitleg")}</AppText>
          {gidsen.map((g) => (
            <PressableScale
              key={g.slug}
              accessibilityRole="button"
              onPress={() => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } })}
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3], paddingVertical: space[1] }}
            >
              <View style={{ flexShrink: 1 }}>
                <AppText rol="labelButton" kleur="brand">{t("gidsLabel").replace("{titel}", g.titel)}</AppText>
              </View>
              <AppText rol="body" kleur="brand">{"›"}</AppText>
            </PressableScale>
          ))}
        </Card>
      ) : null}

      {artikel.blokken.map((blok, i) => (
        <View key={i} style={{ gap: space[2] }}>
          {blok.kop ? <AppText rol="h3">{blok.kop}</AppText> : null}
          <AppText rol={i === 0 ? "bodyEmphasis" : "body"}>{blok.tekst}</AppText>
        </View>
      ))}

      {artikel.bron ? (
        <View style={{ alignItems: "flex-start" }}>
          <Button label={t("leesOp")} onPress={() => Linking.openURL(artikel.bron)} />
        </View>
      ) : null}

      {meer.length ? (
        <ContentSection title={t("meerTitel")}>
          <ContentShelf>
            {meer.map((a) => (
              <ShelfCard
                key={a.slug}
                tone="primary"
                title={a.titel}
                meta={a.onderwerp === a.titel ? undefined : a.onderwerp}
                onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
              />
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
