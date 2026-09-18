// Challenge, één dag
//
// Hier doe je de dag echt: de volledige inhoud van MIND (sinds 10 september
// 2026 akkoord voor in de app), met de opdrachten, tips en links, en onderaan
// de afronding. Alleen de eerstvolgende dag is af te ronden; eerdere dagen
// zijn hier terug te lezen. De teksten zijn woordelijk van MIND en komen uit
// het gegenereerde challenges.ts.

import * as Linking from "expo-linking";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";
import { ONDERWERP_PER_CHALLENGE } from "@/features/content/challengeOnderwerp";
import { aantalAfgerond, markeerAfgerond } from "@/features/content/voortgang";

const nl = {
  nietGevonden: "Dag niet gevonden",
  nietGevondenUitleg: "Deze dag bestaat niet of is verplaatst.",
  terug: "Terug naar de challenge",
  onderdeelVan: "DAG {x} van {y}",
  onderdeelAfronden: "Klaar voor vandaag",
  afgerond: "Deze dag heb je afgerond.",
  bron: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Day not found",
    nietGevondenUitleg: "This day doesn't exist or has been moved.",
    terug: "Back to the challenge",
    onderdeelVan: "DAY {x} of {y}",
    onderdeelAfronden: "Done for today",
    afgerond: "You've completed this day.",
    bron: "SOURCE: MIND",
  },
};

export default function ChallengeDag() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const params = useLocalSearchParams<{ challenge: string; dag: string }>();
  const challenge = CHALLENGES.find((c) => c.slug === params.challenge);
  const nummer = Number(params.dag);
  const dag = challenge && Number.isInteger(nummer) && nummer >= 1 && nummer <= challenge.dagen.length
    ? challenge.dagen[nummer - 1]
    : undefined;

  const [klaar, zetKlaar] = useState(0);
  useFocusEffect(
    useCallback(() => {
      if (challenge) zetKlaar(aantalAfgerond(challenge.slug));
    }, [challenge])
  );

  if (!challenge || !dag) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terug")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const totaal = challenge.dagen.length;
  const isVandaag = nummer === klaar + 1;
  const isAfgerond = nummer <= klaar;

  const rondAf = () => {
    markeerAfgerond(challenge.slug, nummer);
    router.replace({ pathname: "/challenges/[challenge]/afgerond", params: { challenge: challenge.slug } });
  };

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      heroInhoud={<VliegerOnderwerp onderwerp={ONDERWERP_PER_CHALLENGE[challenge.slug]} hoogte={96} />}
    >
      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="brand">
          {t("onderdeelVan").replace("{x}", String(nummer)).replace("{y}", String(totaal))}
        </AppText>
        <AppText rol="h1">{dag.titel}</AppText>
      </View>

      {dag.intro ? <AppText rol="bodyEmphasis">{dag.intro}</AppText> : null}

      {dag.blokken.map((blok, i) => {
        if (blok.kop) return <AppText key={i} rol="h3">{blok.kop}</AppText>;
        if (blok.lijst) {
          return (
            <View key={i} style={{ gap: space[2] }}>
              {blok.lijst.map((item) => (
                <View key={item} style={{ flexDirection: "row", gap: space[2] }}>
                  <AppText rol="body" kleur="brand">{"•"}</AppText>
                  <View style={{ flexShrink: 1 }}>
                    <AppText rol="body">{item}</AppText>
                  </View>
                </View>
              ))}
            </View>
          );
        }
        if (blok.linkLabel && blok.linkUrl) {
          const url = blok.linkUrl;
          return (
            <View key={i} style={{ alignItems: "flex-start" }}>
              <Button label={blok.linkLabel} variant="link" onPress={() => Linking.openURL(url)} />
            </View>
          );
        }
        if (blok.tekst) return <AppText key={i} rol="body">{blok.tekst}</AppText>;
        return null;
      })}

      <AppText rol="labelCaption" kleur="secondary">{t("bron")}</AppText>

      {isVandaag ? (
        <Button label={t("onderdeelAfronden")} fullWidth onPress={rondAf} />
      ) : isAfgerond ? (
        <AppText rol="bodySmall" kleur="secondary" centreer>{t("afgerond")}</AppText>
      ) : null}
    </ScreenCanvas>
  );
}
