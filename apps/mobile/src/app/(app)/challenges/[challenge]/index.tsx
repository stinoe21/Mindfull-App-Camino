// Challenge, detail
//
// Een challenge als pad, niet als formulier (herontwerp Stijn, 10 september
// 2026): de vlieger van het onderwerp staat op de hero, de dagen vormen een
// zichtbaar pad, en de dag van vandaag staat direct op het vel, zonder kaart
// eromheen. Het huidige onderdeel staat open; de rest volgt in eigen tempo
// (weekbasis, geen dwang, no-guilt: productprincipes 4).
// De volledige inhoud zit in de mailreeks van MIND; de aanmeldknop verwijst
// daarnaar, precies zoals MIND vraagt (content/mind/LEESMIJ.md).

import * as Linking from "expo-linking";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES } from "@/features/content/data/challenges";
import { ONDERWERP_PER_CHALLENGE } from "@/features/content/challengeOnderwerp";
import { aantalAfgerond, markeerAfgerond } from "@/features/content/voortgang";

const nl = {
  nietGevonden: "Challenge niet gevonden",
  nietGevondenUitleg: "Deze challenge bestaat niet of is verplaatst.",
  terugNaarChallenges: "Terug naar challenges",
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
  leesVerder: "Lees verder",
  minder: "Minder",
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
    onderdeelAfronden: "Done for today",
    allesGehadTitel: "You've done all the parts",
    allesGehadUitleg: "Well done. You can always look back or pick another challenge.",
    onderdeelNr: "Day {n}",
    afgerond: "Completed",
    volledigeTitel: "Want the full challenge?",
    volledigeUitleg:
      "What you see here is a taster: the introduction for each part. You get the full challenge, with all the assignments and exercises, for free by email from MIND, at your own pace.",
    aanmelden: "Sign up with MIND",
    leesVerder: "Read more",
    minder: "Less",
    meerChallenges: "More challenges",
  },
};

export default function ChallengeDetail() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();
  const challenge = CHALLENGES.find((c) => c.slug === slug);
  const [klaar, zetKlaar] = useState(0);
  const [uitgeklapt, zetUitgeklapt] = useState(false);

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
  const onderwerp = ONDERWERP_PER_CHALLENGE[challenge.slug];

  const rondAf = () => {
    markeerAfgerond(challenge.slug, klaar + 1);
    router.push({ pathname: "/challenges/[challenge]/afgerond", params: { challenge: challenge.slug } });
  };

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

      {/* De dag van vandaag, direct op het vel: geen kaart, geen invulvak. */}
      {huidig ? (
        <View style={{ gap: space[3] }}>
          <View style={{ gap: space[2] }}>
            <AppText rol="labelOverline" kleur="brand">
              {t("onderdeelVan").replace("{x}", String(klaar + 1)).replace("{y}", String(totaal))}
            </AppText>
            <AppText rol="h2">{huidig.titel}</AppText>
            {/* De intro van MIND is soms lang; zes regels, en de rest op verzoek. */}
            <AppText rol="body" numberOfLines={uitgeklapt ? undefined : 6}>{huidig.intro}</AppText>
          </View>
          {huidig.intro.length > 320 ? (
            <View style={{ alignItems: "flex-start" }}>
              <Button label={uitgeklapt ? t("minder") : t("leesVerder")} variant="link" onPress={() => zetUitgeklapt(!uitgeklapt)} />
            </View>
          ) : null}
          <Button label={t("onderdeelAfronden")} fullWidth onPress={rondAf} />
        </View>
      ) : (
        <View style={{ gap: space[2] }}>
          <AppText rol="h2">{t("allesGehadTitel")}</AppText>
          <AppText rol="body" kleur="secondary">{t("allesGehadUitleg")}</AppText>
        </View>
      )}

      {/* De andere dagen als pad: nummer en titel, geen kaartjes. Afgeronde
          dagen krijgen een gevulde stip. */}
      <View style={{ gap: space[3] }}>
        {challenge.dagen.map((dag, i) => {
          if (huidig && i === klaar) return null;
          const gedaan = i < klaar;
          return (
            <View
              key={dag.titel}
              style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}
              accessible
              accessibilityLabel={t("onderdeelNr").replace("{n}", String(i + 1)) + ": " + dag.titel + (gedaan ? ", " + t("afgerond") : "")}
            >
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
            </View>
          );
        })}
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

      <Button label={t("meerChallenges")} variant="link" fullWidth onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
