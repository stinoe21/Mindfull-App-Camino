// Challenges
//
// De USP voor de gebruiker: de challenges en themaspecials van MIND, in een
// grid (eindige set, dus grid en geen shelf: HERKOMST.md schermregel 6).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Card } from "@mind/ui/components/Card";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";
import { aantalAfgerond } from "@/features/content/voortgang";

const nl = {
  titel: "Challenges",
  ondertitel: "Kleine stappen, geen opdrachten.",
  leegTitel: "Nog geen challenges",
  leegUitleg: "Binnenkort staan ze hier.",
  challengesTitel: "Challenges",
  challengesNote: "In je eigen tempo, dag voor dag.",
  labelChallenge: "CHALLENGE",
  specialsTitel: "Themaspecials",
  specialsNote: "Een paar dagen aandacht voor een thema.",
  labelThemaspecial: "THEMASPECIAL",
  onderdelenMeta: "{n} dagen · MIND",
  dagVan: "Dag {x} van {y}",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Challenges",
    ondertitel: "Small steps, no assignments.",
    leegTitel: "No challenges yet",
    leegUitleg: "They will appear here soon.",
    challengesTitel: "Challenges",
    challengesNote: "At your own pace, day by day.",
    labelChallenge: "CHALLENGE",
    specialsTitel: "Theme specials",
    specialsNote: "A few days of attention for one theme.",
    labelThemaspecial: "THEME SPECIAL",
    onderdelenMeta: "{n} days · MIND",
    dagVan: "Day {x} of {y}",
  },
};

export default function Challenges() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const challenges = CHALLENGES.filter((c) => c.soort === "challenge");
  const specials = CHALLENGES.filter((c) => c.soort === "themaspecial");
  // Voortgang per challenge, opnieuw gelezen bij elke focus: je komt hier
  // terug vanaf een afgeronde dag.
  const [voortgang, zetVoortgang] = useState<Record<string, number>>({});
  useFocusEffect(
    useCallback(() => {
      zetVoortgang(Object.fromEntries(CHALLENGES.map((c) => [c.slug, aantalAfgerond(c.slug)])));
    }, [])
  );

  // De laatste kaart wordt breed als hij anders alleen zou hangen.
  const open = (slug: string) =>
    router.push({ pathname: "/challenges/[challenge]", params: { challenge: slug } });

  return (
    <ScreenCanvas state="default" metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      {CHALLENGES.length === 0 ? (
        <Card tone="outline">
          <AppText rol="h3">{t("leegTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("leegUitleg")}
          </AppText>
        </Card>
      ) : null}

      {/* Ritme in plaats van een raster (designaudit 29 augustus 2026): de
          eerste, of de challenge waar je mee bezig bent, staat breed in de
          zonkleur met voortgang; de rest half en wit. */}
      {/* Geen sectiekop: de h1 zegt al "Challenges" (ontdubbeling, 1 september 2026). */}
      {challenges.length ? (
        <View>
          <ContentGrid>
            {challenges.map((c, i) => {
              const klaar = voortgang[c.slug] ?? 0;
              const actief = i === 0;
              return (
                <ContentCard key={c.slug} full={actief || (i === challenges.length - 1 && (challenges.length - 1) % 2 === 1)} tone={actief ? "sun" : "white"} title={c.naam} onPress={() => open(c.slug)}>
                  <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
                  {klaar > 0 ? (
                    <View style={{ gap: space[1], marginTop: space[1] }}>
                      <View style={{ height: space[1], borderRadius: radius.pill, backgroundColor: palette.sliderTrackBase, overflow: "hidden" }}>
                        <View style={{ width: `${Math.min(100, Math.round((klaar / c.dagen.length) * 100))}%` as const, height: "100%", backgroundColor: colors.ctaDefault }} />
                      </View>
                      <AppText rol="labelCaption" kleur="brand">{t("dagVan").replace("{x}", String(Math.min(klaar, c.dagen.length))).replace("{y}", String(c.dagen.length))}</AppText>
                    </View>
                  ) : null}
                </ContentCard>
              );
            })}
          </ContentGrid>
        </View>
      ) : null}

      {specials.length ? (
        <ContentSection title={t("specialsTitel")} note={t("specialsNote")}>
          <ContentGrid>
            {specials.map((c, i) => (
              <ContentCard key={c.slug} full={i === 0 || (i === specials.length - 1 && (specials.length - 1) % 2 === 1)} tone={i === 0 ? "coral" : "white"} title={c.naam} onPress={() => open(c.slug)}>
                <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
