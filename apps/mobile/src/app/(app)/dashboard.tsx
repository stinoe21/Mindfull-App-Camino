// Home
//
// De spil van de app, opgebouwd naar Dashboard v4 uit de Figma-styleguide
// (162:1695) en ontwerpscherm 03, sinds 29 augustus 2026: de begroeting en de
// mascotte staan op de hero, daaronder het vel met de check-in (of jouw weer
// van vandaag), de tips, het mentale weer van Nederland, de quote van de dag
// en de Hulplijn. Challenges hebben hun eigen tab en staan hier niet meer.
// Sinds 10 september 2026 (feedbacksessie MIND) staan de tips direct onder
// de check-in en is de quote klein: minder tekst, handelingsperspectief eerst.
// Sinds 13 september 2026 (Stijn, UX-ronde) zegt Home niets twee keer: de
// vraag staat op de hero en niet ook op de kaart, de eerste-keer-kaart is
// weg (welkom en de onboarding waren al de introductie), en de sectie heet
// Houvast, net als de tab.
// Elke slot heeft zijn eigen loading-, empty- en error-state. Het landelijke
// beeld wordt een keer per sessie opgehaald en gecachet
// (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfTegel } from "@mind/ui/components/ContentSection";
import { KaartNederland, type ProvincieCode } from "@mind/ui/components/KaartNederland";
import { MascotMain } from "@mind/ui/components/MascotMain";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { houvastVoorVoorkeuren } from "@/features/content/houvast";
import { QuoteKaart } from "@/features/content/QuoteKaart";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { KAARTKLEUR } from "@/features/weer/kaartKleuren";
import { leesWeerVanVandaag, toonTijd } from "@/features/weer/lokaalWeer";
import { isProvincie, PROVINCIE_NAMEN } from "@/features/weer/provincies";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";
import { haalWeerbericht, haalWeerberichtProvincies, type WeerberichtStand } from "@/features/weer/weerbericht";

import { WEATHER_CODES, type WeatherCode, type WeatherTodayProvince } from "@mind/types";

// Alleen interface-teksten. {share}, {total} en {n} worden op de plek ingevuld.
const nl = {
  appNaam: "Weer MIND",
  nacht: "Hallo",
  morgen: "Goedemorgen",
  middag: "Goedemiddag",
  avond: "Goedenavond",
  hoeWeer: "Hoe is je weer vandaag?",
  jouwWeerOverline: "JOUW WEER VANDAAG",
  ingechecktOm: "Ingecheckt om {tijd}",
  inchecken: "Inchecken",
  weerVanNederland: "Het mentale weer van Nederland",
  weerVanNederlandSub: "Per provincie het weer dat we vandaag het vaakst zien.",
  berichtRegel: "Vandaag vooral een {weer} in Nederland.",
  provincieRegel: "Vandaag vooral een {weer}.",
  provincieLeeg: "Nog te weinig check-ins voor een beeld.",
  nietIngelogd: "Log in om het mentale weer te zien.",
  teWeinig: "Nog te weinig check-ins voor een beeld. Later vandaag staat hier meer.",
  berichtFout: "Het mentale weer kon niet worden opgehaald. Zonder verbinding werkt de rest van de app gewoon.",
  allesBekijken: "Alles bekijken",
  tipsTitel: "Houvast voor jou",
  tipsNote: "Kort uitgelegd en wat kan helpen. Jouw onderwerpen eerst.",
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
    ingechecktOm: "Checked in at {tijd}",
    inchecken: "Check in",
    weerVanNederland: "The mental weather of the Netherlands",
    weerVanNederlandSub: "Per province, the weather we see most today.",
    berichtRegel: "Mostly a {weer} in the Netherlands today.",
    provincieRegel: "Mostly a {weer} today.",
    provincieLeeg: "Not enough check-ins yet for a picture.",
    nietIngelogd: "Log in to see the mental weather.",
    teWeinig: "Not enough check-ins yet for a picture. Later today there will be more here.",
    berichtFout: "The mental weather couldn't be loaded. Without a connection the rest of the app still works.",
    allesBekijken: "See all",
    tipsTitel: "Houvast for you",
    tipsNote: "Explained briefly and what can help. Your topics first.",
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
  const [tijd, zetTijd] = useState("");
  const [weerGeladen, zetWeerGeladen] = useState(false);
  const [bericht, zetBericht] = useState<WeerberichtStand | null>(null);
  const [provincies, zetProvincies] = useState<WeatherTodayProvince[]>([]);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);
  const [naam, zetNaam] = useState("");
  const [gekozenProvincie, zetGekozenProvincie] = useState<ProvincieCode | null>(null);
  // De kaart op de breedte van het vel, met een plafond zodat hij op een
  // tablet geen halve pagina wordt.
  const kaartBreedte = Math.min(useWindowDimensions().width - space[5] * 2 - space[4] * 2, 300);

  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesWeerVanVandaag().then((data) => {
        if (!actief) return;
        zetWeerbeeld(data?.weerbeeld ?? null);
        zetTijd(data?.tijd ?? "");
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

  // Tips: de onderwerpen uit Houvast (uitleg plus de tips uit de gids van
  // MIND, sinds 10 september 2026), de gekozen onderwerpen voorop. Zonder
  // voorkeuren gewoon de volgorde van de lijst.
  const tips = houvastVoorVoorkeuren(voorkeuren)
    .slice(0, 6)
    .map((h) => ({
      slug: h.slug,
      titel: h.titel,
      onderwerp: h.onderwerp,
      open: () => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } }),
    }));
  const topBericht = bericht?.staat === "geladen" ? [...bericht.rijen].sort((a, b) => b.share - a.share)[0] : null;
  const topCode = topBericht && isWeerCode(topBericht.weather) ? topBericht.weather : null;
  const kaartKleuren: Partial<Record<ProvincieCode, string>> = {};
  const kaartWeer: Partial<Record<ProvincieCode, WeatherCode>> = {};
  for (const rij of provincies) {
    if (isProvincie(rij.province) && isWeerCode(rij.weather)) {
      kaartKleuren[rij.province] = KAARTKLEUR[rij.weather];
      kaartWeer[rij.province] = rij.weather;
    }
  }
  const gekozenRij = gekozenProvincie ? provincies.find((r) => r.province === gekozenProvincie) : undefined;

  // Op de hero: begroeting links, de vlieger rechts. Na de check-in staat hij
  // in het weer van vandaag; ervoor de hoofdmascotte.
  const hero = (
    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", alignSelf: "stretch", paddingHorizontal: space[5], gap: space[3] }}>
      <View style={{ flexShrink: 1, gap: space[1] }}>
        <AppText rol="h1">{begroeting() + (naam ? ", " + naam : "")}</AppText>
        {/* Voor de check-in de vraag; erna de duiding van jouw weer, want de
            vraag naast de kaart met je weer was dubbelop (Stijn, 14 september 2026). */}
        <AppText rol="subtitle">{weerbeeld ? UITKOMSTEN[weerbeeld].kop : t("hoeWeer")}</AppText>
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
            {/* De laatste check-in; opnieuw inchecken kan op de uitkomstpagina
                en via de tab (Stijn, 15 september 2026). */}
            {tijd ? <AppText rol="labelCaption" kleur="secondary">{t("ingechecktOm").replace("{tijd}", toonTijd(tijd))}</AppText> : null}
          </View>
          <View style={{ flexGrow: 1 }} />
          <AppText rol="body" kleur="brand">{"›"}</AppText>
        </Card>
      ) : (
        // De vraag staat op de hero; hier alleen de knop, los op het vel, met
        // hetzelfde woord als de tab: "Inchecken". Tot 17 september 2026 stond
        // hier een zandkaart met de vijf weericonen als strook en de knop "Doe
        // je mentale weer check-in" (Stijn: "niet sterk", de icoontjes "zeggen
        // niks", en de knop heette anders dan de tab). Vraag en antwoord zijn
        // nu één gebaar, en de twee ingangen zijn zichtbaar hetzelfde.
        <Button label={t("inchecken")} fullWidth onPress={() => router.push("/check-in/1")} />
      )}

      {/* Slot 2: Houvast, direct onder de check-in. MIND (feedbacksessie, verwerkt
          10 september 2026): dit is inhoudelijk het relevantst voor de gebruiker,
          dus hoger dan het landelijke beeld en de quote. */}
      <ContentSection title={t("tipsTitel")} note={t("tipsNote")} action={t("allesBekijken")} onAction={() => router.push("/naslagwerk")}>
        {/* Kleine tegels zoals in Figma (162:1708); de vlieger staat erin tot MIND beelden levert. */}
        <ContentShelf>
          {tips.map((tip) => (
            <ShelfTegel
              key={tip.slug}
              label={tip.titel}
              kleur={kaartKleurVoor(tip.onderwerp, tip.slug)}
              beeld={<VliegerOnderwerp onderwerp={tip.onderwerp} slug={tip.slug} hoogte={56} />}
              onPress={tip.open}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      {/* Slot 3: het mentale weer van Nederland. Sinds 15 september 2026
          (Stijn: de kaart kon qua design echt beter, en een knop naar een lege
          pagina hoeft niet) op het vel als gewone sectie. Sinds 17 september
          2026 een weerkaart zoals in een weerbericht (Stijn: de kaart viel
          "uit de huisstijl" en hoorde zichtbaar niet bij de check-in): op
          elke provincie het weericoon dat je ook als uitkomst krijgt, in de
          was van dat weer. De losse legenda is daarmee weg; het icoon op de
          kaart is de legenda. Tik op een provincie voor haar naam en
          weerbeeld. Geen aantallen check-ins: die zeggen de gebruiker
          niets, en dicht bij de drempel per provincie is een exact getal juist
          wat je niet wilt tonen (Stijn, 15 september 2026). Nooit een
          waardering: de kleur is het weer zelf (productprincipe 3). */}
      <ContentSection title={t("weerVanNederland")} note={t("weerVanNederlandSub")}>
        <View style={{ alignItems: "center", gap: space[4] }}>
          {bericht === null ? (
            <ActivityIndicator color={colors.brandDefault} />
          ) : (
            <KaartNederland
              breedte={kaartBreedte}
              kleuren={kaartKleuren}
              icoon={(code, maat) => (kaartWeer[code] ? <WeerIcoon staat={kaartWeer[code]} hoogte={maat} /> : null)}
              gekozen={gekozenProvincie}
              onPress={(code) => zetGekozenProvincie(code === gekozenProvincie ? null : code)}
            />
          )}
          {gekozenProvincie ? (
            <Card tone="white" style={{ alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: space[3] }}>
              {gekozenRij && isWeerCode(gekozenRij.weather) ? <WeerIcoon staat={gekozenRij.weather} hoogte={32} /> : null}
              <View style={{ flexShrink: 1, gap: space[1] }}>
                <AppText rol="bodyEmphasis">{PROVINCIE_NAMEN[gekozenProvincie]}</AppText>
                <AppText rol="bodySmall" kleur="secondary">
                  {gekozenRij
                    ? t("provincieRegel").replace("{weer}", isWeerCode(gekozenRij.weather) ? WEER_NAMEN[gekozenRij.weather].toLowerCase() : gekozenRij.label.toLowerCase())
                    : t("provincieLeeg")}
                </AppText>
              </View>
            </Card>
          ) : null}
          {bericht === null ? null : (
            <AppText rol="bodySmall" kleur="secondary" centreer>
              {bericht.staat === "geladen" && topBericht
                ? t("berichtRegel").replace("{weer}", topCode ? WEER_NAMEN[topCode].toLowerCase() : topBericht.label.toLowerCase())
                : bericht.staat === "niet-ingelogd"
                  ? t("nietIngelogd")
                  : bericht.staat === "leeg"
                    ? t("teWeinig")
                    : t("berichtFout")}
            </AppText>
          )}
        </View>
      </ContentSection>

      {/* Slot 4: de quote van de dag, voor iedereen gelijk, klein onderaan */}
      <QuoteKaart />

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
