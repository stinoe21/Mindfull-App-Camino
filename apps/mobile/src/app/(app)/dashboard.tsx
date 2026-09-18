// Home
//
// De spil van de app, opgebouwd naar Dashboard v4 uit de Figma-styleguide
// (162:1695) en ontwerpscherm 03, sinds 29 augustus 2026: de begroeting en de
// mascotte staan op de hero, daaronder het vel met de check-in (of jouw weer
// van vandaag), de challenge, de tips, het mentale weer van Nederland, de
// quote van de dag en de Hulplijn. Challenges hebben hun eigen tab; op Home
// staat sinds 17 september 2026 alleen de ene waar je mee bezig bent.
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, palette, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfTegel } from "@mind/ui/components/ContentSection";
import { KaartNederland, type ProvincieCode } from "@mind/ui/components/KaartNederland";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ChallengeOpHome } from "@/features/content/ChallengeOpHome";
import { houvastVoorHome } from "@/features/content/houvast";
import { QuoteKaart } from "@/features/content/QuoteKaart";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { KAARTKLEUR, WEERTINT_LICHT } from "@/features/weer/kaartKleuren";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { isProvincie, PROVINCIE_NAMEN } from "@/features/weer/provincies";
import { UITKOMSTEN, WEER_NAMEN } from "@/features/weer/teksten";
import { WeerVlieger } from "@/features/weer/WeerVlieger";
import { haalWeerbericht, haalWeerberichtProvincies, type WeerberichtStand } from "@/features/weer/weerbericht";

import { WEATHER_CODES, type WeatherCode, type WeatherTodayProvince } from "@mind/types";

// Alleen interface-teksten. {share}, {total} en {n} worden op de plek ingevuld.
const nl = {
  appNaam: "Weertje",
  nacht: "Hallo",
  morgen: "Goedemorgen",
  middag: "Goedemiddag",
  avond: "Goedenavond",
  hoeWeer: "Hoe is je weer vandaag?",
  jouwWeerOverline: "JOUW WEER VANDAAG",
  inchecken: "Inchecken",
  // Wat het is en wat het oplevert, in één regel (gatenlijst P: "steeds zeggen waarom"). Voorstel; de check-in-copy is van Stijn.
  waaromInchecken: "Vier korte vragen. Zo zie je hoe je ervoor staat.",
  weerVanNederland: "Het mentale weer van Nederland",
  weerVanNederlandSub: "Per provincie het weer dat we vandaag het vaakst zien.",
  berichtRegel: "Vandaag vooral een {weer} in Nederland.",
  provincieRegel: "Vandaag vooral een {weer}.",
  provincieLeeg: "Nog te weinig check-ins voor een beeld.",
  allesBekijken: "Alles bekijken",
  tipsTitel: "Tips voor jou",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    appNaam: "Weertje",
    nacht: "Hello",
    morgen: "Good morning",
    middag: "Good afternoon",
    avond: "Good evening",
    hoeWeer: "How's your weather today?",
    jouwWeerOverline: "YOUR WEATHER TODAY",
    inchecken: "Check in",
    waaromInchecken: "Four short questions. They show you how you are doing today.",
    weerVanNederland: "The mental weather of the Netherlands",
    weerVanNederlandSub: "Per province, the weather we see most today.",
    berichtRegel: "Mostly a {weer} in the Netherlands today.",
    provincieRegel: "Mostly a {weer} today.",
    provincieLeeg: "Not enough check-ins yet for a picture.",
    allesBekijken: "See all",
    tipsTitel: "Tips for you",
  },
};

/** Vanaf zoveel provincies met een weerbeeld staat de weerkaart op Home (twaalf in totaal). */
const MIN_PROVINCIES_MET_BEELD = 6;

const isWeerCode = (code: string): code is WeatherCode => (WEATHER_CODES as readonly string[]).includes(code);
export default function Dashboard() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const insets = useSafeAreaInsets();

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
  // MIND, sinds 10 september 2026), de gekozen onderwerpen voorop en om en
  // om per onderwerp, zodat de rij niet drie keer dezelfde vlieger toont.
  const tips = houvastVoorHome(voorkeuren)
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
  // De weerkaart komt pas op Home als hij iets te zeggen heeft: het landelijke
  // beeld is er, en minstens de helft van de provincies heeft een eigen beeld.
  // Een kaart die bijna leeg is, met een zin waarom, is ruis die nog niet
  // uitgelegd hoeft te worden (Stijn, 17 september 2026). Ook tijdens het
  // laden, zonder verbinding en zonder login blijft de sectie weg; de rest van
  // Home werkt gewoon.
  const toonKaart = bericht?.staat === "geladen" && Object.keys(kaartWeer).length >= MIN_PROVINCIES_MET_BEELD;

  // Op de hero alleen de begroeting met de vraag, en na de check-in de
  // duiding. De vlieger staat voor en na de check-in op dezelfde plek: in de
  // eerste kaart van het vel. Tot 17 september 2026 stond vóór de check-in de
  // staande mascotte hier op de hero en was het bovenstuk veel hoger; Stijn:
  // "de homepage is voor en na de check-in heel anders".
  const hero = (
    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", alignSelf: "stretch", paddingHorizontal: space[5], gap: space[3] }}>
      <View style={{ flexShrink: 1, gap: space[1] }}>
        <AppText rol="h1">{begroeting() + (naam ? ", " + naam : "")}</AppText>
        {/* Voor de check-in de vraag; erna de duiding van jouw weer, want de
            vraag naast de kaart met je weer was dubbelop (Stijn, 14 september 2026). */}
        <AppText rol="subtitle">{weerbeeld ? UITKOMSTEN[weerbeeld].kop : t("hoeWeer")}</AppText>
      </View>
    </View>
  );

  // Er staat alleen tekst op de hero, dus het vel begint net onder de
  // begroeting en de regel eronder, met dezelfde lucht als ScreenCanvas om
  // hero-inhoud zet. Voor en na de check-in gelijk. Neemt de begroeting twee
  // regels, dan schuift ScreenCanvas het vel zelf verder omlaag.
  const velTop = insets.top + space[3] + type.h1.lineHeight + space[1] + type.subtitle.lineHeight + space[6];

  return (
    <ScreenCanvas state={weerbeeld ?? "default"} heroInhoud={hero} sheetTop={velTop} kopTitel={t("appNaam")} metNavRuimte>
      {/* Slot 1: de check-in, direct op het vel (ontwerp 03), of jouw weer van vandaag */}
      {!weerGeladen ? (
        <ActivityIndicator color={colors.brandDefault} />
      ) : weerbeeld ? (
        <Card onPress={() => router.push("/check-in/uitkomst")} style={{ backgroundColor: WEERTINT_LICHT[weerbeeld], borderWidth: 0, flexDirection: "row", alignItems: "center", gap: space[3] }}>
          {/* Jouw weer zet de toon van het vel: de kaart in de tint van dat weer,
              de vlieger in dat weer erin, en het weericoon bij de naam (hetzelfde
              icoon als op de uitkomst en op de weerkaart). Tot 17 september 2026
              een zandkaart met alleen het icoon, terwijl de vlieger los bovenin
              stond (Stijn: "niet echt heel denderend", "een huisstijlbreuk").
              De kaart zelf opent de uitkomst; opnieuw inchecken kan daar en via
              de tab (Stijn, 15 september 2026). Het tijdstip van inchecken
              staat er niet meer bij: dat hoeft niet (Stijn, 17 september 2026). */}
          <View style={{ flex: 1, gap: space[1] }}>
            <AppText rol="labelOverline" kleur="brand">{t("jouwWeerOverline")}</AppText>
            <View style={{ flexDirection: "row", alignItems: "center", gap: space[2] }}>
              <WeerIcoon staat={weerbeeld} hoogte={28} />
              <View style={{ flexShrink: 1 }}>
                <AppText rol="h3">{WEER_NAMEN[weerbeeld]}</AppText>
              </View>
              <AppText rol="body" kleur="brand">{"›"}</AppText>
            </View>
          </View>
          <WeerVlieger weerbeeld={weerbeeld} hoogte={88} />
        </Card>
      ) : (
        // Dezelfde kaart als na de check-in, nog zonder weer: links de knop,
        // rechts de vlieger in het rustige blauw van de onboarding. Na de
        // check-in neemt de kaart de tint van je weer aan en de vlieger dat
        // weer. De vraag staat op de hero, dus hier geen tweede keer; de knop
        // heet "Inchecken", net als de tab (Stijn, 17 september 2026).
        <Card tone="white" style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
          <View style={{ flex: 1, gap: space[3], alignItems: "flex-start" }}>
            {/* Geen opschrift "Jouw weer vandaag": vóór de check-in is er nog
                geen weer, en met de vraag op de hero zei de kaart drie keer
                hetzelfde (Stijn, 17 september 2026). */}
            <AppText rol="body" kleur="secondary">{t("waaromInchecken")}</AppText>
            <Button label={t("inchecken")} onPress={() => router.push("/check-in/1")} />
          </View>
          <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <VliegerOnderwerp uitdrukking="in-balans" hoogte={88} kleur={{ lijf: palette.primary200, schaduw: palette.primary400 }} />
          </View>
        </Card>
      )}

      {/* Slot 2: de challenge waar je mee bezig bent, of één voorstel. Boven
          Houvast en de quote (Stijn, 17 september 2026): het is de reden om
          morgen terug te komen. */}
      <ChallengeOpHome voorkeuren={voorkeuren} />

      {/* Slot 3: Houvast, onder de check-in en de challenge. MIND (feedbacksessie, verwerkt
          10 september 2026): dit is inhoudelijk het relevantst voor de gebruiker,
          dus hoger dan het landelijke beeld en de quote. */}
      <ContentSection title={t("tipsTitel")} action={t("allesBekijken")} onAction={() => router.push("/naslagwerk")}>
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

      {/* Slot 4: het mentale weer van Nederland. Sinds 15 september 2026
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
      {toonKaart ? (
        <ContentSection title={t("weerVanNederland")} note={t("weerVanNederlandSub")}>
          <View style={{ alignItems: "center", gap: space[4] }}>
            <KaartNederland
              breedte={kaartBreedte}
              kleuren={kaartKleuren}
              icoon={(code, maat) => (kaartWeer[code] ? <WeerIcoon staat={kaartWeer[code]} hoogte={maat} /> : null)}
              gekozen={gekozenProvincie}
              onPress={(code) => zetGekozenProvincie(code === gekozenProvincie ? null : code)}
            />
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
          {topBericht ? (
            <AppText rol="bodySmall" kleur="secondary" centreer>
              {t("berichtRegel").replace("{weer}", topCode ? WEER_NAMEN[topCode].toLowerCase() : topBericht.label.toLowerCase())}
            </AppText>
          ) : null}
        </View>
      </ContentSection>
      ) : null}

      {/* Slot 5: de quote van de dag, voor iedereen gelijk, klein onderaan */}
      <QuoteKaart />

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
