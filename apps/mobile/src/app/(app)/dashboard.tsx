// Home
//
// De spil van de app, opgebouwd naar Dashboard v4 uit de Figma-styleguide
// (162:1695) en ontwerpscherm 03, sinds 29 augustus 2026: de begroeting en de
// mascotte staan op de hero, daaronder het vel met de check-in (of jouw weer
// van vandaag), de tips, het mentale weer van Nederland, de quote van de dag
// en de Hulplijn. Challenges hebben hun eigen tab en staan hier niet meer.
// Sinds 10 september 2026 (feedbacksessie MIND) staan de tips direct onder
// de check-in en is de quote klein: minder tekst, handelingsperspectief eerst.
// Elke slot heeft zijn eigen loading-, empty- en error-state. Het landelijke
// beeld wordt een keer per sessie opgehaald en gecachet
// (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfTegel } from "@mind/ui/components/ContentSection";
import { KaartNederland, type ProvincieCode } from "@mind/ui/components/KaartNederland";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN } from "@/features/content/data/artikelen";
import { GIDSEN } from "@/features/content/data/gidsen";
import { gidsenVoor } from "@/features/content/gidsen";
import { QuoteKaart } from "@/features/content/QuoteKaart";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { EersteKeerUitleg } from "@/features/onboarding/EersteKeerUitleg";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { isProvincie } from "@/features/weer/provincies";
import { WEER_NAMEN } from "@/features/weer/teksten";
import { haalWeerbericht, haalWeerberichtProvincies, type WeerberichtStand } from "@/features/weer/weerbericht";

import { WEATHER_CODES, type WeatherCode, type WeatherTodayProvince } from "@mind/types";

// De weertint per weerbeeld, voor de provincies op de kaart. Genoemd naar het
// weer en nooit naar een waardering (kitchen sink, Weertinten).
const KAARTKLEUR: Record<WeatherCode, string> = {
  zonnig: palette.weatherSun,
  wolken: palette.weatherCloud,
  mist: palette.weatherMist,
  wind: palette.purple200,
  regen: palette.weatherRain,
};

// Alleen interface-teksten. {share}, {total} en {n} worden op de plek ingevuld.
const nl = {
  appNaam: "Weer MIND",
  nacht: "Hallo",
  morgen: "Goedemorgen",
  middag: "Goedemiddag",
  avond: "Goedenavond",
  hoeWeer: "Hoe is je weer vandaag?",
  jouwWeerOverline: "JOUW WEER VANDAAG",
  evenIncheckenUitleg: "Vier korte vragen, één minuut. Je check-in telt anoniem mee.",
  evenIncheckenKnop: "Even inchecken",
  weerVanNederland: "Het mentale weer van Nederland",
  weerVanNederlandSub: "Per provincie het weer dat we vandaag het vaakst zien",
  kaartLeeg: "Een provincie kleurt zodra er genoeg check-ins zijn.",
  berichtMeta: "Op basis van {total} check-ins vandaag",
  nietIngelogd: "Log in om het weer van Nederland te zien.",
  teWeinig: "Nog te weinig check-ins voor een landelijk beeld. Later vandaag staat hier meer.",
  berichtFout: "Het landelijke beeld kon niet worden opgehaald. Zonder verbinding werkt de rest van de app gewoon.",
  bekijkWeerbericht: "Bekijk het weer van Nederland",
  allesBekijken: "Alles bekijken",
  tipsTitel: "Tips voor jou",
  tipsNote: "Gidsen en artikelen van MIND, eerst over jouw onderwerpen.",
  bronMind: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    appNaam: "Weer MIND",
    nacht: "Hello",
    morgen: "Good morning",
    middag: "Good afternoon",
    avond: "Good evening",
    hoeWeer: "How's your weather today?",
    jouwWeerOverline: "YOUR WEATHER TODAY",
    evenIncheckenUitleg: "Four short questions, one minute. Your check-in counts anonymously.",
    evenIncheckenKnop: "Check in",
    weerVanNederland: "The mental weather of the Netherlands",
    weerVanNederlandSub: "Per province, the weather we see most today",
    kaartLeeg: "A province gets its colour once there are enough check-ins.",
    berichtMeta: "Based on {total} check-ins today",
    nietIngelogd: "Log in to see the weather of the Netherlands.",
    teWeinig: "Not enough check-ins yet for a national picture. Later today there will be more here.",
    berichtFout: "The national picture couldn't be loaded. Without a connection the rest of the app still works.",
    bekijkWeerbericht: "See the weather of the Netherlands",
    allesBekijken: "See all",
    tipsTitel: "Tips for you",
    tipsNote: "Guides and articles from MIND, your topics first.",
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
  const [provincies, zetProvincies] = useState<WeatherTodayProvince[]>([]);
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
      haalWeerberichtProvincies().then((rijen) => {
        if (actief) zetProvincies(rijen);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  // Tips: eerst de online gidsen van MIND (praktische tips, het belangrijkste
  // punt uit de feedbacksessie), dan de artikelen; binnen beide de gekozen
  // onderwerpen voorop. Zonder voorkeuren gewoon de volgorde van de lijst.
  const gekozen = (onderwerp?: string) => Number(voorkeuren.includes(onderwerp ?? ""));
  const tips = [
    ...gidsenVoor(voorkeuren).map((g) => ({
      slug: "gids-" + g.slug,
      titel: g.titel,
      onderwerp: g.onderwerp,
      open: () => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } }),
    })),
    // Een artikel met dezelfde titel als een gids (Slapeloosheid, Stress) valt af.
    ...ARTIKELEN.filter((a) => !GIDSEN.some((g) => g.titel === a.titel))
      .sort((a, b) => gekozen(b.onderwerp) - gekozen(a.onderwerp))
      .map((a) => ({
        slug: a.slug,
        titel: a.titel,
        onderwerp: a.onderwerp,
        open: () => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } }),
      })),
  ]
    .sort((a, b) => gekozen(b.onderwerp) - gekozen(a.onderwerp))
    .slice(0, 6);
  const topBericht = bericht?.staat === "geladen" ? [...bericht.rijen].sort((a, b) => b.share - a.share)[0] : null;
  const topCode = topBericht && isWeerCode(topBericht.weather) ? topBericht.weather : null;
  const kaartKleuren: Partial<Record<ProvincieCode, string>> = {};
  for (const rij of provincies) {
    if (isProvincie(rij.province) && isWeerCode(rij.weather)) kaartKleuren[rij.province] = KAARTKLEUR[rij.weather];
  }

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
    <ScreenCanvas state={weerbeeld ?? "default"} heroInhoud={hero} kopTitel={t("appNaam")} metNavRuimte>
      {/* Slot 1: de check-in, direct op het vel (ontwerp 03), of jouw weer van vandaag */}
      {!weerGeladen ? (
        <ActivityIndicator color={colors.brandDefault} />
      ) : weerbeeld ? (
        <Card tone="white" onPress={() => router.push("/check-in/uitkomst")} style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
          {/* Eén beeld en twee regels (Stijn, 10 september 2026): het weericoon
              links, overline en naam rechts, en de kaart zelf opent de uitkomst.
              gap 2: overline en titel dicht op elkaar, zoals in de sectiekop. */}
          <WeerIcoon staat={weerbeeld} hoogte={48} />
          <View style={{ flexShrink: 1, gap: 2 }}>
            <AppText rol="labelOverline" kleur="brand">{t("jouwWeerOverline")}</AppText>
            <AppText rol="h3">{WEER_NAMEN[weerbeeld]}</AppText>
          </View>
          <View style={{ flexGrow: 1 }} />
          <AppText rol="body" kleur="brand">{"›"}</AppText>
        </Card>
      ) : (
        // De vraag staat al op de hero, de mascotte ook. Hier alleen één regel
        // en de knop (ontdubbeling, 1 september 2026).
        <Card tone="white" style={{ gap: space[3] }}>
          <AppText rol="body">{t("evenIncheckenUitleg")}</AppText>
          <Button label={t("evenIncheckenKnop")} onPress={() => router.push("/check-in/1")} />
        </Card>
      )}

      {/* Eenmalige rondleiding, onder de check-in: die blijft de hoofdrol houden. */}
      <EersteKeerUitleg />

      {/* Slot 2: tips, direct onder de check-in. MIND (feedbacksessie, verwerkt
          10 september 2026): dit is inhoudelijk het relevantst voor de gebruiker,
          dus hoger dan het landelijke beeld en de quote. */}
      <ContentSection title={t("tipsTitel")} note={t("tipsNote")} action={t("allesBekijken")} onAction={() => router.push("/naslagwerk")}>
        {/* Kleine tegels zoals in Figma (162:1708); de vlieger staat erin tot MIND beelden levert. */}
        <ContentShelf>
          {tips.map((tip) => (
            <ShelfTegel
              key={tip.slug}
              label={tip.titel}
              beeld={<VliegerOnderwerp onderwerp={tip.onderwerp} slug={tip.slug} hoogte={56} />}
              onPress={tip.open}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      {/* Slot 3: het mentale weer van Nederland, NL-weerkaart uit Figma (168:3854):
          blauw primary100, witte icoontegel, limoenpil. */}
      <Card tone="primary" style={{ backgroundColor: palette.primary100, gap: space[4] }}>
        <View style={{ gap: space[1] }}>
          <AppText rol="quote">{t("weerVanNederland")}</AppText>
          <AppText rol="bodySmall">{t("weerVanNederlandSub")}</AppText>
        </View>
        {/* De kaart van Nederland per provincie (feedbacksessie MIND, verwerkt
            10 september 2026) staat er altijd, standaard heel Nederland en
            niet de provincie van de gebruiker; zonder data blijft hij neutraal.
            Rechts het landelijke beeld of de reden dat het er nog niet is. */}
        {bericht === null ? (
          <ActivityIndicator color={colors.brandDefault} />
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
            <KaartNederland breedte={132} kleuren={kaartKleuren} />
            <View style={{ flexShrink: 1, gap: space[2] }}>
              {bericht.staat === "geladen" && topBericht ? (
                <>
                  {topCode ? <WeerIcoon staat={topCode} hoogte={40} /> : null}
                  <AppText rol="h3">{topBericht.label}</AppText>
                  <AppText rol="h3">{topBericht.share + "%"}</AppText>
                  <AppText rol="bodySmall">{t("berichtMeta").replace("{total}", String(topBericht.total))}</AppText>
                </>
              ) : bericht.staat === "niet-ingelogd" ? (
                <AppText rol="body">{t("nietIngelogd")}</AppText>
              ) : bericht.staat === "leeg" ? (
                <AppText rol="body">{t("teWeinig")}</AppText>
              ) : (
                <AppText rol="body">{t("berichtFout")}</AppText>
              )}
            </View>
          </View>
        )}
        {bericht?.staat === "geladen" && provincies.length === 0 ? <AppText rol="bodySmall" kleur="secondary">{t("kaartLeeg")}</AppText> : null}
        <Button label={t("bekijkWeerbericht")} onPress={() => router.push("/weerbericht")} />
      </Card>

      {/* Slot 4: de quote van de dag, voor iedereen gelijk, klein onderaan */}
      <QuoteKaart />

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
