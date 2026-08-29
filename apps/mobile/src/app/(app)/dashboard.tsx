// Home
//
// De spil van de app, opgebouwd naar Dashboard v4 uit de Figma-styleguide
// (162:1695) en ontwerpscherm 03, sinds 29 augustus 2026: de begroeting en de
// mascotte staan op de hero, daaronder het vel met de check-in (of jouw weer
// van vandaag), het mentale weer van Nederland, de quote van de dag, tips en
// de Hulplijn. Challenges hebben hun eigen tab en staan hier niet meer.
// Elke slot heeft zijn eigen loading-, empty- en error-state. Het landelijke
// beeld wordt een keer per sessie opgehaald en gecachet
// (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN } from "@/features/content/data/artikelen";
import { QuoteKaart } from "@/features/content/QuoteKaart";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { EersteKeerUitleg } from "@/features/onboarding/EersteKeerUitleg";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";

import { WEATHER_CODES, type WeatherCode } from "@mind/types";

// Alleen interface-teksten. {share}, {total} en {n} worden op de plek ingevuld.
const nl = {
  nacht: "Hallo",
  morgen: "Goedemorgen",
  middag: "Goedemiddag",
  avond: "Goedenavond",
  hoeWeer: "Hoe is je weer vandaag?",
  jouwWeerOverline: "JOUW WEER VANDAAG",
  bekijkJeWeer: "Bekijk je weer",
  evenInchecken: "Even inchecken?",
  evenIncheckenSub: "Neem een momentje voor jezelf",
  evenIncheckenUitleg: "Kies het weer dat vandaag het best past. Jouw check-in telt anoniem mee in het mentale weer van Nederland.",
  evenIncheckenKnop: "Even inchecken",
  weerVanNederland: "Het mentale weer van Nederland",
  weerVanNederlandSub: "Dit weer zien we vandaag het vaakst",
  berichtMeta: "Op basis van {total} check-ins vandaag",
  nietIngelogd: "Log in om het weer van Nederland te zien.",
  teWeinig: "Nog te weinig check-ins voor een landelijk beeld. Later vandaag staat hier meer.",
  berichtFout: "Het landelijke beeld kon niet worden opgehaald. Zonder verbinding werkt de rest van de app gewoon.",
  bekijkWeerbericht: "Bekijk het weer van Nederland",
  allesBekijken: "Alles bekijken",
  tipsTitel: "Tips voor jou",
  tipsNote: "Artikelen van MIND, eerst over jouw onderwerpen.",
  bronMind: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nacht: "Hello",
    morgen: "Good morning",
    middag: "Good afternoon",
    avond: "Good evening",
    hoeWeer: "How's your weather today?",
    jouwWeerOverline: "YOUR WEATHER TODAY",
    bekijkJeWeer: "See your weather",
    evenInchecken: "Time to check in?",
    evenIncheckenSub: "Take a moment for yourself",
    evenIncheckenUitleg: "Pick the weather that fits today best. Your check-in counts anonymously towards the mental weather of the Netherlands.",
    evenIncheckenKnop: "Check in",
    weerVanNederland: "The mental weather of the Netherlands",
    weerVanNederlandSub: "The weather we see most today",
    berichtMeta: "Based on {total} check-ins today",
    nietIngelogd: "Log in to see the weather of the Netherlands.",
    teWeinig: "Not enough check-ins yet for a national picture. Later today there will be more here.",
    berichtFout: "The national picture couldn't be loaded. Without a connection the rest of the app still works.",
    bekijkWeerbericht: "See the weather of the Netherlands",
    allesBekijken: "See all",
    tipsTitel: "Tips for you",
    tipsNote: "Articles from MIND, your topics first.",
    bronMind: "SOURCE: MIND",
  },
};

const isWeerCode = (code: string): code is WeatherCode => (WEATHER_CODES as readonly string[]).includes(code);

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
  const topCode = topBericht && isWeerCode(topBericht.weather) ? topBericht.weather : null;

  // Op de hero: begroeting links, de vlieger rechts. Na de check-in staat hij
  // in het weer van vandaag; ervoor de hoofdmascotte.
  const hero = (
    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", alignSelf: "stretch", paddingHorizontal: space[5], gap: space[3] }}>
      <View style={{ flexShrink: 1, gap: space[1] }}>
        <AppText rol="h1">{begroeting() + (naam ? ", " + naam : "")}</AppText>
        <AppText rol="subtitle">{t("hoeWeer")}</AppText>
      </View>
      {weerbeeld ? <MascotteVlieger state={weerbeeld} hoogte={72} /> : <MascotMain hoogte={96} />}
    </View>
  );

  return (
    <ScreenCanvas state={weerbeeld ?? "default"} heroInhoud={hero} metNavRuimte>
      {/* Slot 1: de check-in, direct op het vel (ontwerp 03), of jouw weer van vandaag */}
      {!weerGeladen ? (
        <ActivityIndicator color={colors.brandDefault} />
      ) : weerbeeld ? (
        <Card tone="white" onPress={() => router.push("/check-in/uitkomst")}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
            <MascotteVlieger state={weerbeeld} hoogte={56} />
            {/* gap 2: overline en titel dicht op elkaar, zoals in de sectiekop van de referentie */}
            <View style={{ flexShrink: 1, gap: 2 }}>
              <AppText rol="labelOverline" kleur="brand">{t("jouwWeerOverline")}</AppText>
              <AppText rol="h3">{WEER_NAMEN[weerbeeld]}</AppText>
              <AppText rol="bodySmall">{UITKOMSTEN[weerbeeld].kop}</AppText>
            </View>
          </View>
          <AppText rol="labelButton" kleur="brand">{t("bekijkJeWeer")}</AppText>
        </Card>
      ) : (
        <View style={{ gap: space[3] }}>
          <View style={{ gap: space[1] }}>
            <AppText rol="h2">{t("evenInchecken")}</AppText>
            <AppText rol="body">{t("evenIncheckenSub")}</AppText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
            <AppText rol="bodySmall" style={{ flex: 1 }}>{t("evenIncheckenUitleg")}</AppText>
            <MascotMain hoogte={120} />
          </View>
          <Button label={t("evenIncheckenKnop")} onPress={() => router.push("/check-in/1")} />
        </View>
      )}

      {/* Eenmalige rondleiding, onder de check-in: die blijft de hoofdrol houden. */}
      <EersteKeerUitleg />

      {/* Slot 2: het mentale weer van Nederland, NL-weerkaart uit Figma (168:3854):
          blauw primary100, witte icoontegel, limoenpil. */}
      <Card tone="primary" style={{ backgroundColor: palette.primary100, gap: space[4] }}>
        <View style={{ gap: space[1] }}>
          <AppText rol="quote">{t("weerVanNederland")}</AppText>
          <AppText rol="bodySmall">{t("weerVanNederlandSub")}</AppText>
        </View>
        {bericht === null ? (
          <ActivityIndicator color={colors.brandDefault} />
        ) : bericht.staat === "geladen" && topBericht ? (
          <>
            <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
              <View style={{ width: 96, height: 96, borderRadius: radius.md, backgroundColor: colors.surfaceBackground, alignItems: "center", justifyContent: "center" }}>
                {topCode ? <MascotteVlieger state={topCode} hoogte={64} /> : null}
              </View>
              <View style={{ flexShrink: 1, gap: space[1] }}>
                <AppText rol="h3">{topBericht.label}</AppText>
                <AppText rol="h3">{topBericht.share + "%"}</AppText>
              </View>
            </View>
            <AppText rol="body">{t("berichtMeta").replace("{total}", String(topBericht.total))}</AppText>
          </>
        ) : bericht.staat === "niet-ingelogd" ? (
          <AppText rol="body">{t("nietIngelogd")}</AppText>
        ) : bericht.staat === "leeg" ? (
          <AppText rol="body">{t("teWeinig")}</AppText>
        ) : (
          <AppText rol="body">{t("berichtFout")}</AppText>
        )}
        <Button label={t("bekijkWeerbericht")} onPress={() => router.push("/weerbericht")} />
      </Card>

      {/* Slot 3: de quote van de dag, voor iedereen gelijk */}
      <QuoteKaart />

      {/* Slot 4: tips */}
      <ContentSection title={t("tipsTitel")} note={t("tipsNote")} action={t("allesBekijken")} onAction={() => router.push("/naslagwerk")}>
        <ContentShelf>
          {tips.map((a) => (
            <ShelfCard
              key={a.slug}
              tone="white"
              label={t("bronMind")}
              title={a.titel}
              meta={a.onderwerp === a.titel ? undefined : a.onderwerp}
              onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
