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

import { CHALLENGES } from "@/features/content/data/challenges";

export default function Challenges() {
  const router = useRouter();
  const challenges = CHALLENGES.filter((c) => c.soort === "challenge");
  const specials = CHALLENGES.filter((c) => c.soort === "themaspecial");

  // Oneven aantal: alle kaarten volle breedte, anders blijft er een losse
  // brede kaart onder twee halve hangen (design audit, 28 augustus 2026).
  const open = (slug: string) =>
    router.push({ pathname: "/challenges/[challenge]", params: { challenge: slug } });

  return (
    <ScreenCanvas state="default" metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Challenges</AppText>
        <AppText rol="subtitle" kleur="secondary">Kleine stappen van MIND, groot verschil.</AppText>
      </View>

      {CHALLENGES.length === 0 ? (
        <Card tone="outline">
          <AppText rol="h3">Nog geen challenges</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Er staan nog geen challenges klaar. Kom later terug.
          </AppText>
        </Card>
      ) : null}

      {challenges.length ? (
        <ContentSection title="Challenges" note="In je eigen tempo, onderdeel voor onderdeel.">
          <ContentGrid>
            {challenges.map((c) => (
              <ContentCard key={c.slug} full={challenges.length % 2 === 1} tone="purple" label="CHALLENGE" title={c.naam} onPress={() => open(c.slug)}>
                <AppText rol="bodySmall" kleur="secondary">{c.dagen.length + " onderdelen · MIND"}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}

      {specials.length ? (
        <ContentSection title="Themaspecials" note="Een paar dagen aandacht voor een thema.">
          <ContentGrid>
            {specials.map((c) => (
              <ContentCard key={c.slug} full={specials.length % 2 === 1} tone="coral" label="THEMASPECIAL" title={c.naam} onPress={() => open(c.slug)}>
                <AppText rol="bodySmall" kleur="secondary">{c.dagen.length + " onderdelen · MIND"}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
