// Dashboard
//
// De spil van de app: begroeting, de check-in-CTA (of jouw weer van vandaag),
// het landelijke weerbericht, de dagelijkse quote, ingangen naar challenges en
// naslagwerk, en de Hulplijn. Elke slot heeft zijn eigen loading-, empty- en
// error-state. Het landelijke beeld wordt een keer per sessie opgehaald en
// gecachet (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN } from "@/features/content/data/artikelen";
import { CHALLENGES } from "@/features/content/data/challenges";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN } from "@/features/weer/teksten";
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";

import type { WeatherCode } from "@mind/types";

// De dagelijkse quote is voor iedereen gelijk (board 12:179). Dit is de quote
// uit het design system; een echte reeks van Mind is een openstaand punt.
// Blijft content en dus Nederlands, net als de weerbeeld-teksten en de namen
// uit de bibliotheek.
const QUOTE = "“Het lijkt altijd onmogelijk, totdat het gedaan is.”";

// Alleen interface-teksten. {share}, {total} en {n} worden op de plek ingevuld.
const nl = {
  nacht: "Goedenacht",
  morgen: "Goedemorgen",
  middag: "Goedemiddag",
  avond: "Goedenavond",
  hoeWeer: "Hoe is je weer vandaag?",
  jouwWeerOverline: "JOUW WEER VANDAAG",
  bekijkJeWeer: "Bekijk je weer",
  evenInchecken: "Even inchecken?",
  evenIncheckenUitleg:
    "Neem een momentje voor jezelf. Jouw check-in telt anoniem mee in het mentale weerbericht van Nederland.",
  evenIncheckenKnop: "Even inchecken",
  weerVanNederland: "Het mentale weer van Nederland",
  berichtMeta: "{share}% van de check-ins · {total} vandaag",
  nietIngelogd: "Log in om het landelijke weerbericht van vandaag te zien.",
  teWeinig: "Nog te weinig check-ins vandaag voor een landelijk beeld. Kom later terug.",
  berichtFout:
    "Het landelijke beeld kon niet worden opgehaald. Zonder verbinding werkt de rest van de app gewoon.",
  bekijkWeerbericht: "Bekijk het hele weerbericht",
  quoteBijschrift: "Dagelijkse quote · deel hem gerust",
  challengesTitel: "Challenges voor jou",
  challengesNote: "Kleine stappen, geen opdrachten.",
  allesBekijken: "Alles bekijken",
  labelChallenge: "CHALLENGE",
  labelThemaspecial: "THEMASPECIAL",
  onderdelenMeta: "{n} onderdelen · MIND",
  tipsTitel: "Tips voor jou",
  bronMind: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nacht: "Good night",
    morgen: "Good morning",
    middag: "Good afternoon",
    avond: "Good evening",
    hoeWeer: "How's your weather today?",
    jouwWeerOverline: "YOUR WEATHER TODAY",
    bekijkJeWeer: "See your weather",
    evenInchecken: "Time to check in?",
    evenIncheckenUitleg:
      "Take a moment for yourself. Your check-in counts anonymously towards the mental weather forecast of the Netherlands.",
    evenIncheckenKnop: "Check in",
    weerVanNederland: "The mental weather of the Netherlands",
    berichtMeta: "{share}% of the check-ins · {total} today",
    nietIngelogd: "Log in to see today's national weather forecast.",
    teWeinig: "Not enough check-ins yet today for a national picture. Come back later.",
    berichtFout:
      "The national picture couldn't be loaded. Without a connection the rest of the app still works.",
    bekijkWeerbericht: "See the full weather forecast",
    quoteBijschrift: "Daily quote · feel free to share it",
    challengesTitel: "Challenges for you",
    challengesNote: "Small steps, not assignments.",
    allesBekijken: "See all",
    labelChallenge: "CHALLENGE",
    labelThemaspecial: "THEME SPECIAL",
    onderdelenMeta: "{n} parts · MIND",
    tipsTitel: "Tips for you",
    bronMind: "SOURCE: MIND",
  },
};

export default function Dashboard() {
  const router = useRouter();
  const t = useVertaling(teksten);

  const begroeting = (): string => {
    const uur = new Date().getHours();
    if (uur < 6) return t("nacht");
    if (uur < 12) return t("morgen");
    if (uur < 18) return t("middag");
    return t("avond");
  };
  const [weerbeeld, zetWeerbeeld] = useState<WeatherCode | null>(null);
  const [weerGeladen, zetWeerGeladen] = useState(false);
  const [bericht, zetBericht] = useState<WeerberichtStand | null>(null);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);
  const [naam, zetNaam] = useState("");

  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesWeerVanVandaag().then((data) => {
        if (!actief) return;
        zetWeerbeeld(data?.weerbeeld ?? null);
        zetWeerGeladen(true);
      });
      leesInstellingen().then((i) => {
        if (!actief) return;
        zetVoorkeuren(i.voorkeuren);
        zetNaam(i.naam);
      });
      haalWeerbericht().then((stand) => {
        if (actief) zetBericht(stand);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  // Artikelen uit de gekozen onderwerpen eerst, de rest erachter. Zonder
  // gekozen voorkeuren is de volgorde gewoon die van de bibliotheek.
  const tips = [...ARTIKELEN]
    .sort((a, b) => Number(voorkeuren.includes(b.onderwerp)) - Number(voorkeuren.includes(a.onderwerp)))
    .slice(0, 5);
  const topBericht = bericht?.staat === "geladen" ? [...bericht.rijen].sort((a, b) => b.share - a.share)[0] : null;

  return (
    <ScreenCanvas state={weerbeeld ?? "default"} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{begroeting() + (naam ? ", " + naam : "")}</AppText>
        <AppText rol="subtitle" kleur="secondary">{t("hoeWeer")}</AppText>
      </View>

      {/* Slot 1: check-in of jouw weer van vandaag */}
      {!weerGeladen ? (
        <Card tone="white">
          <ActivityIndicator color={colors.brandDefault} />
        </Card>
      ) : weerbeeld ? (
        <Card tone="white">
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
            <MascotteVlieger state={weerbeeld} hoogte={56} />
            {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
            <View style={{ flexShrink: 1, gap: 2 }}>
              <AppText rol="labelOverline" kleur="secondary">{t("jouwWeerOverline")}</AppText>
              <AppText rol="h3">{UITKOMSTEN[weerbeeld].kop}</AppText>
            </View>
          </View>
          <Button label={t("bekijkJeWeer")} variant="link" onPress={() => router.push("/check-in/uitkomst")} />
        </Card>
      ) : (
        <Card tone="white">
          <AppText rol="h3">{t("evenInchecken")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("evenIncheckenUitleg")}
          </AppText>
          <Button label={t("evenIncheckenKnop")} onPress={() => router.push("/check-in/1")} />
        </Card>
      )}

      {/* Slot 2: het landelijke weerbericht */}
      <Card tone="primary">
        <AppText rol="bodySmall" kleur="secondary">{t("weerVanNederland")}</AppText>
        {bericht === null ? (
          <ActivityIndicator color={colors.brandDefault} />
        ) : bericht.staat === "geladen" && topBericht ? (
          <>
            <AppText rol="h3">{topBericht.label}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("berichtMeta").replace("{share}", String(topBericht.share)).replace("{total}", String(topBericht.total))}
            </AppText>
          </>
        ) : bericht.staat === "niet-ingelogd" ? (
          <AppText rol="bodySmall" kleur="secondary">
            {t("nietIngelogd")}
          </AppText>
        ) : bericht.staat === "leeg" ? (
          <AppText rol="bodySmall" kleur="secondary">
            {t("teWeinig")}
          </AppText>
        ) : (
          <AppText rol="bodySmall" kleur="secondary">
            {t("berichtFout")}
          </AppText>
        )}
        <Button label={t("bekijkWeerbericht")} variant="link" onPress={() => router.push("/weerbericht")} />
      </Card>

      {/* Slot 3: de dagelijkse quote, voor iedereen gelijk */}
      <Card tone="purple" style={{ alignItems: "center" }}>
        <AppText rol="quote" centreer>{QUOTE}</AppText>
        <AppText rol="labelCaption" kleur="secondary">{t("quoteBijschrift")}</AppText>
      </Card>

      {/* Slot 4: challenges */}
      <ContentSection
        title={t("challengesTitel")}
        note={t("challengesNote")}
        action={t("allesBekijken")}
        onAction={() => router.push("/challenges")}
      >
        <ContentShelf>
          {CHALLENGES.slice(0, 4).map((c) => (
            <ShelfCard
              key={c.slug}
              tone={c.soort === "challenge" ? "purple" : "coral"}
              label={c.soort === "challenge" ? t("labelChallenge") : t("labelThemaspecial")}
              title={c.naam}
              meta={t("onderdelenMeta").replace("{n}", String(c.dagen.length))}
              onPress={() => router.push({ pathname: "/challenges/[challenge]", params: { challenge: c.slug } })}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      {/* Slot 5: naslagwerk */}
      <ContentSection title={t("tipsTitel")} action={t("allesBekijken")} onAction={() => router.push("/naslagwerk")}>
        <ContentShelf>
          {tips.map((a) => (
            <ShelfCard
              key={a.slug}
              tone="white"
              label={t("bronMind")}
              title={a.titel}
              meta={a.onderwerp}
              onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
