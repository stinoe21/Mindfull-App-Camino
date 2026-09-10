// Challenge, detail
//
// Een challenge als pad, niet als formulier (herontwerp Stijn, 10 september
// 2026): de vlieger van het onderwerp staat op de hero, de dagen vormen een
// zichtbaar pad, en de dag van vandaag staat direct op het vel, zonder kaart
// eromheen. Het huidige onderdeel staat open; de rest volgt één dag per
// kalenderdag (geen dwang, no-guilt: productprincipes 4). De dag zelf doe je
// op het dagscherm (dag/[dag].tsx), met de volledige inhoud van MIND; de
// mailreeks van MIND blijft als alternatief bereikbaar via de aanmeldknop.

import * as Linking from "expo-linking";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { PressableScale } from "@mind/ui/components/PressableScale";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";
import { ONDERWERP_PER_CHALLENGE } from "@/features/content/challengeOnderwerp";
import { aantalAfgerond, vandaagAlAfgerond } from "@/features/content/voortgang";

const nl = {
  nietGevonden: "Challenge niet gevonden",
  nietGevondenUitleg: "Deze challenge bestaat niet of is verplaatst.",
  terugNaarChallenges: "Terug naar challenges",
  onderdelenMeta: "{n} dagen · MIND",
  onderdeelVan: "DAG {x} van {y}",
  allesGehadTitel: "Dit was de laatste dag",
  allesGehadUitleg: "Je kunt altijd terugbladeren of een andere challenge kiezen.",
  onderdeelNr: "Dag {n}",
  afgerond: "Afgerond",
  startDag: "Start dag {n}",
  verderDag: "Ik ben klaar voor dag {n}",
  morgenVerder: "Goed bezig. Dag {n} staat morgen voor je klaar, dan heeft vandaag de tijd om in te dalen.",
  mailTitel: "Liever per e-mail?",
  mailUitleg: "Je kunt deze challenge ook als mailreeks van MIND in je mailbox krijgen.",
  aanmelden: "Aanmelden bij MIND",
  meerChallenges: "Meer challenges",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Challenge not found",
    nietGevondenUitleg: "This challenge doesn't exist or has been moved.",
    terugNaarChallenges: "Back to challenges",
    onderdelenMeta: "{n} days · MIND",
    onderdeelVan: "DAY {x} of {y}",
    allesGehadTitel: "You've done all the parts",
    allesGehadUitleg: "Well done. You can always look back or pick another challenge.",
    onderdeelNr: "Day {n}",
    afgerond: "Completed",
    startDag: "Start day {n}",
    verderDag: "I'm ready for day {n}",
    morgenVerder: "Well done. Day {n} will be ready for you tomorrow, so today has time to settle.",
    mailTitel: "Prefer email?",
    mailUitleg: "You can also get this challenge as an email series from MIND.",
    aanmelden: "Sign up with MIND",
    meerChallenges: "More challenges",
  },
};

export default function ChallengeDetail() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();
  const challenge = CHALLENGES.find((c) => c.slug === slug);
  const [klaar, zetKlaar] = useState(0);
  const [wachtTotMorgen, zetWachtTotMorgen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (!challenge) return;
      zetKlaar(aantalAfgerond(challenge.slug));
      zetWachtTotMorgen(vandaagAlAfgerond(challenge.slug));
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
  const onderwerp = ONDERWERP_PER_CHALLENGE[challenge.slug];

  const openDag = (nummer: number) =>
    router.push({ pathname: "/challenges/[challenge]/dag/[dag]", params: { challenge: challenge.slug, dag: String(nummer) } });

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      // De vlieger van het onderwerp op de hero, zoals de check-in en het
      // artikel; klaar met alles: de zonnige vlieger.
      heroInhoud={allesKlaar ? <MascotteVlieger state="zonnig" hoogte={112} /> : <VliegerOnderwerp onderwerp={onderwerp} hoogte={112} />}
    >
      <View style={{ gap: space[2] }}>
        {/* Geen kicker: de naam zegt al "challenge" (ontdubbeling, 1 september 2026). */}
        <AppText rol="h1">{challenge.naam}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(totaal))}</AppText>
      </View>

      {/* Het pad: één segment per dag, gevuld wat af is. */}
      <View
        style={{ flexDirection: "row", gap: space[1] }}
        accessible
        accessibilityLabel={t("onderdeelVan").replace("{x}", String(Math.min(klaar + 1, totaal))).replace("{y}", String(totaal))}
      >
        {challenge.dagen.map((dag, i) => (
          <View
            key={dag.titel}
            style={{ flex: 1, height: space[2], borderRadius: radius.pill, backgroundColor: i < klaar ? colors.ctaDefault : palette.sliderTrackBase }}
          />
        ))}
      </View>

      {/* De dag van vandaag als opstap, direct op het vel: titel, een paar
          regels intro, en de knop naar het dagscherm waar je de dag echt doet.
          Na een afgeronde dag komt de volgende pas morgen vrij, en de knop
          vraagt om een bewuste stap ("Ik ben klaar voor dag n"): het tempo
          uit de feedbacksessie met MIND, zie voortgang.ts. */}
      {huidig ? (
        <View style={{ gap: space[3] }}>
          <View style={{ gap: space[2] }}>
            <AppText rol="labelOverline" kleur="brand">
              {t("onderdeelVan").replace("{x}", String(klaar + 1)).replace("{y}", String(totaal))}
            </AppText>
            <AppText rol="h2">{huidig.titel}</AppText>
            <AppText rol="body" numberOfLines={3}>{huidig.intro}</AppText>
          </View>
          {wachtTotMorgen ? (
            <AppText rol="bodySmall" kleur="secondary">{t("morgenVerder").replace("{n}", String(klaar + 1))}</AppText>
          ) : (
            <Button
              label={(klaar > 0 ? t("verderDag") : t("startDag")).replace("{n}", String(klaar + 1))}
              fullWidth
              onPress={() => openDag(klaar + 1)}
            />
          )}
        </View>
      ) : (
        <View style={{ gap: space[2] }}>
          <AppText rol="h2">{t("allesGehadTitel")}</AppText>
          <AppText rol="body" kleur="secondary">{t("allesGehadUitleg")}</AppText>
        </View>
      )}

      {/* De andere dagen als pad: nummer en titel, geen kaartjes. Afgeronde
          dagen krijgen een gevulde stip en zijn terug te lezen; wat nog komt
          staat er alvast, zonder druk. */}
      <View style={{ gap: space[3] }}>
        {challenge.dagen.map((dag, i) => {
          if (huidig && i === klaar) return null;
          const gedaan = i < klaar;
          const rij = (
            <>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: radius.pill,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: gedaan ? colors.ctaDefault : "transparent",
                  borderWidth: gedaan ? 0 : 1,
                  borderColor: colors.borderDefault,
                }}
              >
                <AppText rol="labelCaption" kleur={gedaan ? "primary" : "secondary"}>{String(i + 1)}</AppText>
              </View>
              <View style={{ flexShrink: 1 }}>
                <AppText rol="body" kleur={gedaan ? "primary" : "secondary"}>{dag.titel}</AppText>
              </View>
            </>
          );
          const label = t("onderdeelNr").replace("{n}", String(i + 1)) + ": " + dag.titel + (gedaan ? ", " + t("afgerond") : "");
          return gedaan ? (
            <PressableScale
              key={dag.titel}
              accessibilityRole="button"
              accessibilityLabel={label}
              onPress={() => openDag(i + 1)}
              style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}
            >
              {rij}
            </PressableScale>
          ) : (
            <View key={dag.titel} style={{ flexDirection: "row", alignItems: "center", gap: space[3] }} accessible accessibilityLabel={label}>
              {rij}
            </View>
          );
        })}
      </View>

      {challenge.aanmeld ? (
        <Card tone="primary">
          <AppText rol="h3">{t("mailTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("mailUitleg")}
          </AppText>
          <Button
            label={t("aanmelden")}
            onPress={() => challenge.aanmeld && Linking.openURL(challenge.aanmeld)}
          />
        </Card>
      ) : null}

      <Button label={t("meerChallenges")} variant="link" fullWidth onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
