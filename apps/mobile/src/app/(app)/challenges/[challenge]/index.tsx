// Challenge, detail
//
// Een challenge met zijn onderdelen. Het huidige onderdeel staat open; de rest
// volgt in eigen tempo (weekbasis, geen dwang, no-guilt: productprincipes 4).
// De volledige inhoud zit in de mailreeks van MIND; de aanmeldknop verwijst
// daarnaar, precies zoals MIND vraagt (content/mind/LEESMIJ.md).

import * as Linking from "expo-linking";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";
import { aantalAfgerond, markeerAfgerond } from "@/features/content/voortgang";

const nl = {
  nietGevonden: "Challenge niet gevonden",
  nietGevondenUitleg: "Deze challenge bestaat niet of is verplaatst.",
  terugNaarChallenges: "Terug naar challenges",
  labelChallenge: "CHALLENGE",
  labelThemaspecial: "THEMASPECIAL",
  onderdelenMeta: "{n} dagen · MIND",
  onderdeelVan: "DAG {x} van {y}",
  onderdeelAfronden: "Klaar voor vandaag",
  allesGehadTitel: "Dit was de laatste dag",
  allesGehadUitleg: "Je kunt altijd terugbladeren of een andere challenge kiezen.",
  onderdeelNr: "Dag {n}",
  afgerond: "Afgerond",
  volledigeTitel: "Wil je de volledige challenge?",
  volledigeUitleg:
    "Dit is een voorproefje. De hele challenge krijg je gratis per e-mail van MIND.",
  aanmelden: "Aanmelden bij MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Challenge not found",
    nietGevondenUitleg: "This challenge doesn't exist or has been moved.",
    terugNaarChallenges: "Back to challenges",
    labelChallenge: "CHALLENGE",
    labelThemaspecial: "THEME SPECIAL",
    onderdelenMeta: "{n} days · MIND",
    onderdeelVan: "DAY {x} of {y}",
    onderdeelAfronden: "Done for today",
    allesGehadTitel: "You've done all the parts",
    allesGehadUitleg: "Well done. You can always look back or pick another challenge.",
    onderdeelNr: "Day {n}",
    afgerond: "Completed",
    volledigeTitel: "Want the full challenge?",
    volledigeUitleg:
      "What you see here is a taster: the introduction for each part. You get the full challenge, with all the assignments and exercises, for free by email from MIND, at your own pace.",
    aanmelden: "Sign up for the full challenge",
  },
};

export default function ChallengeDetail() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();
  const challenge = CHALLENGES.find((c) => c.slug === slug);
  const [klaar, zetKlaar] = useState(0);

  useFocusEffect(
    useCallback(() => {
      if (challenge) zetKlaar(aantalAfgerond(challenge.slug));
    }, [challenge])
  );

  if (!challenge) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugNaarChallenges")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const totaal = challenge.dagen.length;
  const allesKlaar = klaar >= totaal;
  const huidig = allesKlaar ? null : challenge.dagen[klaar];

  const rondAf = () => {
    markeerAfgerond(challenge.slug, klaar + 1);
    router.push({ pathname: "/challenges/[challenge]/afgerond", params: { challenge: challenge.slug } });
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[2] }}>
        {/* Kicker in italic serif, zoals "Kleine stap" op het Figma Challenge Screen (41:68). */}
        <AppText rol="subtitle">{challenge.soort === "challenge" ? "Challenge" : "Themaspecial"}</AppText>
        <AppText rol="h1">{challenge.naam}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(totaal))}</AppText>
      </View>

      {huidig ? (
        <Card tone="white">
          <AppText rol="labelOverline" kleur="secondary">
            {t("onderdeelVan").replace("{x}", String(klaar + 1)).replace("{y}", String(totaal))}
          </AppText>
          <AppText rol="h3">{huidig.titel}</AppText>
          {huidig.intro ? <AppText rol="body">{huidig.intro}</AppText> : null}
          <Button label={t("onderdeelAfronden")} onPress={rondAf} />
        </Card>
      ) : (
        <Card tone="primary">
          <AppText rol="h3">{t("allesGehadTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("allesGehadUitleg")}
          </AppText>
        </Card>
      )}

      <View style={{ gap: space[3] }}>
        {challenge.dagen.map((dag, i) => (
          <Card key={dag.titel} tone="outline" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexShrink: 1 }}>
              <AppText rol="labelCaption" kleur="secondary">{t("onderdeelNr").replace("{n}", String(i + 1))}</AppText>
              <AppText rol="bodyEmphasis">{dag.titel}</AppText>
            </View>
            {i < klaar ? <AppText rol="labelCaption" kleur="brand">{t("afgerond")}</AppText> : null}
          </Card>
        ))}
      </View>

      {challenge.aanmeld ? (
        <Card tone="primary">
          <AppText rol="h3">{t("volledigeTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("volledigeUitleg")}
          </AppText>
          <Button
            label={t("aanmelden")}
            onPress={() => challenge.aanmeld && Linking.openURL(challenge.aanmeld)}
          />
        </Card>
      ) : null}

      <Button label={t("terugNaarChallenges")} variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
