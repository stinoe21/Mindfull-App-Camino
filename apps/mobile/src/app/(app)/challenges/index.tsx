// Challenges
//
// De USP voor de gebruiker: de challenges en themaspecials van MIND, in een
// grid (eindige set, dus grid en geen shelf: HERKOMST.md schermregel 6).

import { useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Card } from "@mind/ui/components/Card";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";

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
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Challenges",
    ondertitel: "Small steps from MIND, big difference.",
    leegTitel: "No challenges yet",
    leegUitleg: "There are no challenges ready yet. Come back later.",
    challengesTitel: "Challenges",
    challengesNote: "At your own pace, part by part.",
    labelChallenge: "CHALLENGE",
    specialsTitel: "Theme specials",
    specialsNote: "A few days of attention for one theme.",
    labelThemaspecial: "THEME SPECIAL",
    onderdelenMeta: "{n} days · MIND",
  },
};

export default function Challenges() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const challenges = CHALLENGES.filter((c) => c.soort === "challenge");
  const specials = CHALLENGES.filter((c) => c.soort === "themaspecial");

  // Oneven aantal: alle kaarten volle breedte, anders blijft er een losse
  // brede kaart onder twee halve hangen (design audit, 28 augustus 2026).
  const open = (slug: string) =>
    router.push({ pathname: "/challenges/[challenge]", params: { challenge: slug } });

  return (
    <ScreenCanvas state="default" metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle" kleur="secondary">{t("ondertitel")}</AppText>
      </View>

      {CHALLENGES.length === 0 ? (
        <Card tone="outline">
          <AppText rol="h3">{t("leegTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("leegUitleg")}
          </AppText>
        </Card>
      ) : null}

      {challenges.length ? (
        <ContentSection title={t("challengesTitel")} note={t("challengesNote")}>
          <ContentGrid>
            {challenges.map((c) => (
              <ContentCard key={c.slug} full={challenges.length % 2 === 1} tone="purple" label={t("labelChallenge")} title={c.naam} onPress={() => open(c.slug)}>
                <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}

      {specials.length ? (
        <ContentSection title={t("specialsTitel")} note={t("specialsNote")}>
          <ContentGrid>
            {specials.map((c) => (
              <ContentCard key={c.slug} full={specials.length % 2 === 1} tone="coral" label={t("labelThemaspecial")} title={c.naam} onPress={() => open(c.slug)}>
                <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
