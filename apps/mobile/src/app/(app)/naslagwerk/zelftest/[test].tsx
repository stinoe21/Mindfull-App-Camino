// Zelftest
//
// Een zelftest van MIND in de app (besluit Stijn, 14 september 2026: "je
// kunt een hele hoop tests doen, die wil ik er ook in hebben"). Dezelfde
// twaalf tests als op formulier.wijzijnmind.nl, met dezelfde vragen, scores
// en uitslagteksten (data/zelftests.ts, gegenereerd).
//
// Drie fasen op één scherm: de intro met de start, de vragen één voor één
// met "VRAAG 3 van 11" en een balkje, en de uitslag. Antwoorden en score
// leven alleen in het geheugen van dit scherm: niets wordt bewaard of
// verstuurd, en teruggaan wist alles (docs/datamodel.md, "Zelftests"). Een
// link in de uitslag naar een psychipedia-pagina opent het onderwerp in
// Houvast als dat er is, en de MIND Hulplijn opent de hulplijnpagina. Onder
// elke uitslag staat de Hulplijn-kaart, dezelfde als op Home.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { InhoudBlokken, type InhoudBlok } from "@/features/content/InhoudBlokken";
import { houvastVoorArtikel } from "@/features/content/houvast";
import { scoreVan, uitslagVoor, zelftestVoor } from "@/features/content/zelftests";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  nietGevonden: "Test niet gevonden",
  nietGevondenUitleg: "Deze test bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar Houvast",
  overline: "ZELFTEST",
  vragen: "{n} vragen, een paar minuten.",
  start: "Start de test",
  vraagVan: "VRAAG {x} van {y}",
  vorige: "Vorige",
  volgende: "Volgende",
  uitslag: "Bekijk je uitslag",
  jouwUitslag: "JOUW UITSLAG",
  uitslagTitel: "Dit zeggen je antwoorden",
  geenUitslag: "Bij deze antwoorden hoort geen uitslag. Dat is een fout in de app, niet in jou.",
  opnieuw: "Doe de test opnieuw",
  terug: "Terug naar Houvast",
  inHouvast: "{titel} in Houvast",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Test not found",
    nietGevondenUitleg: "This test doesn't exist or has been moved.",
    terugOverzicht: "Back to Houvast",
    overline: "SELF-TEST",
    vragen: "{n} questions, a few minutes.",
    start: "Start the test",
    vraagVan: "QUESTION {x} of {y}",
    vorige: "Previous",
    volgende: "Next",
    uitslag: "See your result",
    jouwUitslag: "YOUR RESULT",
    uitslagTitel: "What your answers say",
    geenUitslag: "No result matches these answers. That's a bug in the app, not in you.",
    opnieuw: "Take the test again",
    terug: "Back to Houvast",
    inHouvast: "{titel} in Houvast",
  },
};

type Fase = "intro" | "vragen" | "uitslag";

export default function ZelftestScherm() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { test: slug } = useLocalSearchParams<{ test: string }>();
  const test = zelftestVoor(slug);
  const [fase, zetFase] = useState<Fase>("intro");
  const [index, zetIndex] = useState(0);
  const [antwoorden, zetAntwoorden] = useState<(number | undefined)[]>([]);

  if (!test) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugOverzicht")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const hero = <VliegerOnderwerp onderwerp={test.onderwerp} hoogte={112} />;
  const opnieuw = () => {
    zetAntwoorden([]);
    zetIndex(0);
    zetFase("intro");
  };

  // Een link in de uitslag: naar het onderwerp in Houvast, naar de
  // hulplijnpagina, of anders naar buiten.
  const openLink = (url: string) => {
    const psychipedia = url.match(/wijzijnmind\.nl\/psychische-klachten\/psychipedia\/([a-z0-9-]+)/);
    const h = psychipedia ? houvastVoorArtikel(psychipedia[1]) : undefined;
    if (h) return router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } });
    if (/mindhulplijn\.nl/.test(url)) return router.push("/hulplijn");
    Linking.openURL(url);
  };

  if (fase === "intro") {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} kopTitel={test.titel} heroInhoud={hero} metNavRuimte>
        <View style={{ gap: space[2] }}>
          <AppText rol="labelOverline" kleur="brand">{t("overline")}</AppText>
          <AppText rol="h1">{test.titel}</AppText>
        </View>
        <AppText rol="bodyEmphasis">{test.intro}</AppText>
        {test.noot ? <AppText rol="body">{test.noot}</AppText> : null}
        <View style={{ gap: space[3] }}>
          <AppText rol="bodySmall" kleur="secondary">{t("vragen").replace("{n}", String(test.vragen.length))}</AppText>
          <Button label={t("start")} fullWidth onPress={() => zetFase("vragen")} />
        </View>
        {test.instrument ? <AppText rol="labelCaption" kleur="secondary">{test.instrument}</AppText> : null}
      </ScreenCanvas>
    );
  }

  if (fase === "vragen") {
    const vraag = test.vragen[index];
    const gekozen = antwoorden[index];
    const laatste = index === test.vragen.length - 1;
    const kies = (i: number) => {
      const nieuw = [...antwoorden];
      nieuw[index] = i;
      zetAntwoorden(nieuw);
    };
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} kopTitel={test.titel} metNavRuimte>
        <View style={{ gap: space[2] }}>
          <AppText rol="labelOverline" kleur="brand">{t("vraagVan").replace("{x}", String(index + 1)).replace("{y}", String(test.vragen.length))}</AppText>
          <View style={{ height: space[1], borderRadius: radius.pill, backgroundColor: palette.sliderTrackBase, overflow: "hidden" }}>
            <View style={{ width: `${Math.round(((index + 1) / test.vragen.length) * 100)}%` as const, height: "100%", backgroundColor: colors.ctaDefault }} />
          </View>
        </View>

        <AppText rol="h2">{vraag?.tekst}</AppText>

        <View accessibilityRole="radiogroup">
          {vraag?.opties.map((o, i) => (
            <KeuzeVak key={o.label + i} rol="radio" label={o.label} gekozen={gekozen === i} onPress={() => kies(i)} />
          ))}
        </View>

        <View style={{ gap: space[3] }}>
          <Button
            label={laatste ? t("uitslag") : t("volgende")}
            fullWidth
            disabled={gekozen === undefined}
            onPress={() => (laatste ? zetFase("uitslag") : zetIndex(index + 1))}
          />
          <Button label={t("vorige")} variant="link" onPress={() => (index === 0 ? zetFase("intro") : zetIndex(index - 1))} />
        </View>
      </ScreenCanvas>
    );
  }

  const score = scoreVan(test, antwoorden);
  const uitslag = uitslagVoor(test, score);
  const tekstBlokken: InhoudBlok[] = (uitslag?.blokken ?? []).filter((b) => !b.linkUrl);
  const links = (uitslag?.blokken ?? []).filter((b): b is InhoudBlok & { linkLabel: string; linkUrl: string } => !!b.linkUrl && !!b.linkLabel);
  const onderwerp = test.onderwerp ? houvastVoorArtikel(test.onderwerp.toLowerCase()) : undefined;

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} kopTitel={test.titel} heroInhoud={hero} metNavRuimte>
      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="brand">{t("jouwUitslag")}</AppText>
        <AppText rol="h1">{uitslag?.kop ?? t("uitslagTitel")}</AppText>
      </View>

      {uitslag ? (
        <Card tone="white" style={{ gap: space[3] }}>
          <InhoudBlokken blokken={tekstBlokken} />
        </Card>
      ) : (
        <AppText rol="body">{t("geenUitslag")}</AppText>
      )}

      {links.length || onderwerp ? (
        <View style={{ alignItems: "flex-start" }}>
          {links.map((l) => (
            <Button key={l.linkUrl} label={l.linkLabel} variant="link" onPress={() => openLink(l.linkUrl)} />
          ))}
          {onderwerp && !links.some((l) => /psychipedia/.test(l.linkUrl)) ? (
            <Button
              label={t("inHouvast").replace("{titel}", onderwerp.titel)}
              variant="link"
              onPress={() => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: onderwerp.slug } })}
            />
          ) : null}
        </View>
      ) : null}

      <HulplijnKaart />

      <View style={{ gap: space[3] }}>
        <Button label={t("terug")} fullWidth onPress={() => router.back()} />
        <Button label={t("opnieuw")} variant="link" onPress={opnieuw} />
      </View>
    </ScreenCanvas>
  );
}
