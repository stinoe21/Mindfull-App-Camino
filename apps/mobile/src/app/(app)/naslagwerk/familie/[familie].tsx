// Houvast: één familie
//
// De pagina achter een familiekaart op Houvast (Stijn, 14 september 2026):
// de vlieger van de familie op de hero, de naam, één regel, en daaronder de
// onderwerpen als lijst met per onderwerp wat je er vindt (tips, oefening).
// Onderaan de challenge over dit onderwerp, als die er is, zodat lezen en
// doen bij elkaar staan. Een familie met maar één onderwerp (Slaap) komt
// hier niet: het overzicht opent dan direct het onderwerp.

import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { challengeBijFamilie, familieVoor, losseGidsenBijFamilie } from "@/features/content/families";
import type { Houvast } from "@/features/content/data/houvast";
import { zelftestsBijOnderwerp } from "@/features/content/zelftests";
import { useTaal, useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  nietGevonden: "Onderwerp niet gevonden",
  nietGevondenUitleg: "Dit onderwerp bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar Houvast",
  onderwerpen: "Onderwerpen",
  tips: "{n} tips",
  eenTip: "1 tip",
  metOefening: "{tips}, met een oefening",
  alleenUitleg: "Kort uitgelegd",
  gids: "GIDS",
  gidsMeta: "Praktische tips van MIND",
  zelftest: "ZELFTEST",
  testMeta: "{n} vragen, geen diagnose",
  challenge: "CHALLENGE",
  dagen: "{n} dagen, een stap per dag",
  bekijkChallenge: "Bekijk de challenge",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Topic not found",
    nietGevondenUitleg: "This topic doesn't exist or has been moved.",
    terugOverzicht: "Back to Houvast",
    onderwerpen: "Topics",
    tips: "{n} tips",
    eenTip: "1 tip",
    metOefening: "{tips}, with an exercise",
    alleenUitleg: "Explained briefly",
    gids: "GUIDE",
    gidsMeta: "Practical tips from MIND",
    zelftest: "SELF-TEST",
    testMeta: "{n} questions, no diagnosis",
    challenge: "CHALLENGE",
    dagen: "{n} days, one step a day",
    bekijkChallenge: "See the challenge",
  },
};

export default function FamilieScherm() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { taal } = useTaal();
  const { familie: slug } = useLocalSearchParams<{ familie: string }>();
  const familie = familieVoor(slug);

  if (!familie) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugOverzicht")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  // Wat je in een onderwerp vindt, in één regel: het aantal tips en of er een oefening is.
  const meta = (h: Houvast): string => {
    if (!h.tips.length) return h.oefening ? t("metOefening").replace("{tips}", t("alleenUitleg")) : t("alleenUitleg");
    const tips = h.tips.length === 1 ? t("eenTip") : t("tips").replace("{n}", String(h.tips.length));
    return h.oefening ? t("metOefening").replace("{tips}", tips) : tips;
  };

  const gidsen = losseGidsenBijFamilie(familie.naam);
  const challenge = challengeBijFamilie(familie.naam);
  const tests = zelftestsBijOnderwerp(familie.naam);

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      heroInhoud={<VliegerOnderwerp onderwerp={familie.naam} hoogte={112} />}
      metNavRuimte
    >
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{familie.naam}</AppText>
        <AppText rol="subtitle">{familie.regel[taal]}</AppText>
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("onderwerpen")}</AppText>
        <Lijst>
          {familie.onderwerpen.map((h) => (
            <LijstRij
              key={h.slug}
              titel={h.titel}
              meta={meta(h)}
              beeld={<VliegerOnderwerp onderwerp={h.onderwerp} slug={h.slug} hoogte={40} />}
              onPress={() => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } })}
            />
          ))}
          {gidsen.map((g) => (
            <LijstRij
              key={g.slug}
              label={t("gids")}
              titel={g.titel.charAt(0).toUpperCase() + g.titel.slice(1)}
              meta={t("gidsMeta")}
              onPress={() => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } })}
            />
          ))}
          {tests.map((z) => (
            <LijstRij
              key={z.slug}
              label={t("zelftest")}
              titel={z.titel}
              meta={t("testMeta").replace("{n}", String(z.vragen.length))}
              onPress={() => router.push({ pathname: "/naslagwerk/zelftest/[test]", params: { test: z.slug } })}
            />
          ))}
        </Lijst>
      </View>

      {challenge ? (
        <Card tone="sun" onPress={() => router.push({ pathname: "/challenges/[challenge]", params: { challenge: challenge.slug } })}>
          <AppText rol="labelOverline" kleur="brand">{t("challenge")}</AppText>
          <AppText rol="h3">{challenge.naam}</AppText>
          <AppText rol="bodySmall">{t("dagen").replace("{n}", String(challenge.dagen.length))}</AppText>
          <AppText rol="labelButton" kleur="brand">{t("bekijkChallenge")}</AppText>
        </Card>
      ) : null}
    </ScreenCanvas>
  );
}
