// Online gids
//
// Een gids van MIND met praktische tips, zoals MIND het in de feedbacksessie
// vroeg (verwerkt 10 september 2026): kort beginnen, de leespagina als knop
// al hoog op het scherm, en de volledige tekst uit te klappen. De teksten
// zijn woordelijk van MIND en komen uit het gegenereerde gidsen.ts; de
// aanmeldpagina blijft erbij, zodat de mailroute van MIND blijft bestaan.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { GIDSEN } from "@/features/content/data/gidsen";
import { gidsenBijOnderwerp } from "@/features/content/gidsen";
import { InhoudBlokken } from "@/features/content/InhoudBlokken";

const nl = {
  nietGevonden: "Gids niet gevonden",
  nietGevondenUitleg: "Deze gids bestaat niet of is verplaatst.",
  terugNaslagwerk: "Terug naar het naslagwerk",
  overline: "ONLINE GIDS VAN MIND",
  alleenLink: "Deze gids staat op wijzijnmind.nl, met praktische tips en technieken.",
  bekijkGids: "Bekijk de online gids",
  leesAlles: "Lees alle tips",
  bron: "BRON: MIND",
  mailTitel: "Liever per e-mail?",
  mailUitleg: "Je kunt deze gids ook van MIND in je mailbox krijgen.",
  aanmelden: "Aanmelden bij MIND",
  meerTitel: "Meer over dit onderwerp",
  gids: "GIDS",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Guide not found",
    nietGevondenUitleg: "This guide doesn't exist or has been moved.",
    terugNaslagwerk: "Back to the reference library",
    overline: "ONLINE GUIDE BY MIND",
    alleenLink: "This guide is on wijzijnmind.nl, with practical tips and techniques.",
    bekijkGids: "Open the online guide",
    leesAlles: "Read all tips",
    bron: "SOURCE: MIND",
    mailTitel: "Rather by e-mail?",
    mailUitleg: "You can also get this guide from MIND in your inbox.",
    aanmelden: "Sign up with MIND",
    meerTitel: "More on this topic",
    gids: "GUIDE",
  },
};

export default function GidsScherm() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { gids: slug } = useLocalSearchParams<{ gids: string }>();
  const gids = GIDSEN.find((g) => g.slug === slug);
  const [uitgeklapt, zetUitgeklapt] = useState(false);

  if (!gids) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugNaslagwerk")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  // Kort beginnen: de intro en de eerste sectie (tot de tweede kop). De rest
  // komt pas na "Lees alle tips", zodat de knop naar de gids hoog blijft staan.
  const tweedeKop = gids.blokken.findIndex((b, i) => b.kop && gids.blokken.slice(0, i).some((v) => v.kop));
  const kort = tweedeKop > 0 ? gids.blokken.slice(0, tweedeKop) : gids.blokken;
  const rest = tweedeKop > 0 ? gids.blokken.slice(tweedeKop) : [];
  const meer = gids.onderwerp ? gidsenBijOnderwerp(gids.onderwerp).filter((g) => g.slug !== gids.slug) : [];

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      heroInhoud={gids.onderwerp ? <VliegerOnderwerp onderwerp={gids.onderwerp} hoogte={112} /> : <MascotteVlieger state="wolken" hoogte={112} />}
    >
      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="brand">{t("overline")}</AppText>
        <AppText rol="h1">{gids.titel}</AppText>
      </View>

      <AppText rol="bodyEmphasis">{gids.intro || t("alleenLink")}</AppText>

      {/* De leespagina hoog op het scherm, zoals MIND vroeg. */}
      <Button label={t("bekijkGids")} fullWidth onPress={() => Linking.openURL(gids.url)} />

      <InhoudBlokken blokken={uitgeklapt ? gids.blokken : kort} />

      {rest.length && !uitgeklapt ? (
        <View style={{ alignItems: "flex-start" }}>
          <Button label={t("leesAlles")} variant="secondary" onPress={() => zetUitgeklapt(true)} />
        </View>
      ) : null}

      <AppText rol="labelCaption" kleur="secondary">{t("bron")}</AppText>

      {gids.aanmeld ? (
        <Card tone="primary">
          <AppText rol="h3">{t("mailTitel")}</AppText>
          <AppText rol="bodySmall">{t("mailUitleg")}</AppText>
          <View style={{ alignItems: "flex-start" }}>
            <Button label={t("aanmelden")} variant="secondary" onPress={() => Linking.openURL(gids.aanmeld ?? gids.url)} />
          </View>
        </Card>
      ) : null}

      {meer.length ? (
        <ContentSection title={t("meerTitel")}>
          <ContentShelf>
            {meer.map((g) => (
              <ShelfCard
                key={g.slug}
                tone="coral"
                label={t("gids")}
                title={g.titel}
                onPress={() => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } })}
              />
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
