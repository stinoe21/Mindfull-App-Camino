// Houvast: één onderwerp
//
// De compacte kennislaag van de app (Stijn, 10 september 2026, docs/scope.md).
// Per onderwerp de uitleg uit de psychipedia van MIND en de tips en oefening
// uit de online gids, als één pagina. Geen aparte blokken "psychipedia" en
// "gids": voor de gebruiker maakt de bronstructuur niet uit.
//
// Sinds 14 september 2026 (Stijn: "lappen tekst onder elkaar", het moet
// meer een app-ervaring worden) is de pagina geen scroll meer maar drie
// panelen achter een segmentkeuze:
//
//   Uitleg            de kern in twee zinnen, daaronder de rest en de
//                     verdieping als gewone tekst; het enige paneel om te lezen
//   Tips              de tips als kaarten die je swipet, één per scherm,
//                     met "TIP 2 van 5"; de oefening als laatste kaart in
//                     paars. "Wat kan helpen" paste niet in een segment.
//   Verder            de links naar wijzijnmind.nl, de gids per mail, de
//                     challenge over dit onderwerp en de verwante onderwerpen
//
// De teksten zijn woordelijk van MIND (data/houvast.ts, gegenereerd). Er
// wordt alleen op zinsgrenzen geknipt. Een klacht (piekeren), een
// vaardigheid (nee zeggen) en een hulpmiddel (mindfulness) delen dezelfde
// opbouw; een paneel zonder inhoud vervalt.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { Pager } from "@mind/ui/components/Pager";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Segmenten } from "@mind/ui/components/Segmenten";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { InhoudBlokken } from "@/features/content/InhoudBlokken";
import { challengeBijFamilie } from "@/features/content/families";
import { houvastBijOnderwerp, houvastVoor } from "@/features/content/houvast";
import type { HouvastTip } from "@/features/content/data/houvast";

const nl = {
  nietGevonden: "Onderwerp niet gevonden",
  nietGevondenUitleg: "Dit onderwerp bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar Houvast",
  uitleg: "Uitleg",
  tips: "Tips",
  verder: "Verder",
  leesVerder: "Lees verder",
  minder: "Minder",
  tipVan: "TIP {x} van {y}",
  probeer: "PROBEER DIT EENS",
  opMind: "Op wijzijnmind.nl",
  allesOver: "Alles over {titel}",
  gids: "De online gids: {titel}",
  gidsMeta: "Praktische tips van MIND",
  gidsPerMail: "Gids per e-mail",
  gidsPerMailMeta: "Aanmelden bij MIND",
  challenge: "CHALLENGE",
  dagen: "{n} dagen, een stap per dag",
  meerOnderwerp: "Meer over {onderwerp}",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Topic not found",
    nietGevondenUitleg: "This topic doesn't exist or has been moved.",
    terugOverzicht: "Back to Houvast",
    uitleg: "About",
    tips: "Tips",
    verder: "More",
    leesVerder: "Read more",
    minder: "Less",
    tipVan: "TIP {x} of {y}",
    probeer: "TRY THIS",
    opMind: "On wijzijnmind.nl",
    allesOver: "Everything about {titel}",
    gids: "The online guide: {titel}",
    gidsMeta: "Practical tips from MIND",
    gidsPerMail: "Guide by email",
    gidsPerMailMeta: "Sign up with MIND",
    challenge: "CHALLENGE",
    dagen: "{n} days, one step a day",
    meerOnderwerp: "More about {onderwerp}",
  },
};

// Een alinea in zinnen; de eerste twee en de rest apart, zodat de kern groot
// kan staan en de rest gewoon, zonder een woord te veranderen.
function knip(tekst: string, aantal = 2): { kop: string; rest: string } {
  const zinnen = tekst.match(/[^.!?]+[.!?]+['"’”]?(\s|$)/g);
  if (!zinnen || zinnen.length <= aantal) return { kop: tekst, rest: "" };
  return { kop: zinnen.slice(0, aantal).join("").trim(), rest: zinnen.slice(aantal).join("").trim() };
}

type Paneel = "uitleg" | "helpen" | "verder";
const isPaneel = (p: string | undefined): p is Paneel => p === "uitleg" || p === "helpen" || p === "verder";

// Eén tip als kaart in de pager: overline met de telling, de kop, en de
// volledige tekst. De kaart vult de hoogte van de hoogste kaart in de rij.
function TipKaart({ tip, overline, tone }: { tip: HouvastTip; overline: string; tone: "white" | "purple" }) {
  return (
    <Card tone={tone} style={{ flex: 1, gap: space[3] }}>
      <View style={{ gap: space[1] }}>
        <AppText rol="labelOverline" kleur="brand">{overline}</AppText>
        {tip.kop ? <AppText rol="h3">{tip.kop}</AppText> : null}
      </View>
      <InhoudBlokken blokken={tip.blokken} />
    </Card>
  );
}

export default function HouvastOnderwerp() {
  const router = useRouter();
  const t = useVertaling(teksten);
  // Een link kan direct op een paneel openen (?paneel=helpen), bijvoorbeeld
  // vanaf Home naar de tips; zonder parameter begint de pagina bij de uitleg.
  const { onderwerp: slug, paneel: startPaneel } = useLocalSearchParams<{ onderwerp: string; paneel?: string }>();
  const houvast = houvastVoor(slug);
  const [paneel, zetPaneel] = useState<Paneel>(isPaneel(startPaneel) ? startPaneel : "uitleg");
  const [alles, zetAlles] = useState(false);

  if (!houvast) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugOverzicht")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const titelLaag = houvast.titel.toLowerCase();
  const verwant = houvastBijOnderwerp(houvast.onderwerp).filter((h) => h.slug !== houvast.slug);
  const challenge = challengeBijFamilie(houvast.onderwerp);
  const heeftHulp = houvast.tips.length > 0 || houvast.oefening !== undefined;

  const panelen: { sleutel: Paneel; label: string }[] = [
    { sleutel: "uitleg", label: t("uitleg") },
    ...(heeftHulp ? [{ sleutel: "helpen" as const, label: t("tips") }] : []),
    { sleutel: "verder", label: t("verder") },
  ];
  const actief = Math.max(0, panelen.findIndex((p) => p.sleutel === paneel));

  // Uitleg: de kern in twee zinnen, dan de rest van de kern en de eerste
  // sectie van de verdieping; de rest na "Lees verder", zodat een onderwerp
  // met veel verdieping (bewegen) niet meteen een lap wordt.
  const kern = knip(houvast.kort);
  const tweedeKop = houvast.meer.findIndex((b, i) => b.kop && houvast.meer.slice(0, i).some((v) => v.kop));
  const eersteDeel = tweedeKop > 0 ? houvast.meer.slice(0, tweedeKop) : houvast.meer;
  const restDeel = tweedeKop > 0 ? houvast.meer.slice(tweedeKop) : [];

  const totaal = houvast.tips.length + (houvast.oefening ? 1 : 0);

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      kopTitel={houvast.titel}
      heroInhoud={<VliegerOnderwerp onderwerp={houvast.onderwerp} slug={houvast.slug} hoogte={112} />}
      metNavRuimte
    >
      <View style={{ gap: space[2] }}>
        {houvast.onderwerp !== houvast.titel ? <AppText rol="labelOverline" kleur="brand">{houvast.onderwerp.toUpperCase()}</AppText> : null}
        <AppText rol="h1">{houvast.titel}</AppText>
      </View>

      <Segmenten segmenten={panelen.map((p) => p.label)} actief={actief} onKies={(i) => zetPaneel(panelen[i]?.sleutel ?? "uitleg")} />

      {paneel === "uitleg" ? (
        <View style={{ gap: space[4] }}>
          <AppText rol="bodyEmphasis">{kern.kop}</AppText>
          {kern.rest ? <AppText rol="body">{kern.rest}</AppText> : null}
          <InhoudBlokken blokken={alles ? houvast.meer : eersteDeel} />
          {restDeel.length ? (
            <View style={{ alignItems: "flex-start" }}>
              <Button label={alles ? t("minder") : t("leesVerder")} variant="link" onPress={() => zetAlles(!alles)} />
            </View>
          ) : null}
        </View>
      ) : null}

      {paneel === "helpen" ? (
        <Pager>
          {houvast.tips.map((tip, i) => (
            <TipKaart key={i} tip={tip} tone="white" overline={t("tipVan").replace("{x}", String(i + 1)).replace("{y}", String(totaal))} />
          ))}
          {houvast.oefening ? <TipKaart key="oefening" tip={houvast.oefening} tone="purple" overline={t("probeer")} /> : null}
        </Pager>
      ) : null}

      {paneel === "verder" ? (
        <Lijst>
          {houvast.bron ? <LijstRij titel={t("allesOver").replace("{titel}", titelLaag)} meta={t("opMind")} onPress={() => Linking.openURL(houvast.bron ?? "")} /> : null}
          {houvast.gids ? <LijstRij titel={t("gids").replace("{titel}", houvast.gids.titel)} meta={t("gidsMeta")} onPress={() => Linking.openURL(houvast.gids?.url ?? "")} /> : null}
          {houvast.gids?.aanmeld ? <LijstRij titel={t("gidsPerMail")} meta={t("gidsPerMailMeta")} onPress={() => Linking.openURL(houvast.gids?.aanmeld ?? "")} /> : null}
          {challenge ? (
            <LijstRij
              label={t("challenge")}
              titel={challenge.naam}
              meta={t("dagen").replace("{n}", String(challenge.dagen.length))}
              onPress={() => router.push({ pathname: "/challenges/[challenge]", params: { challenge: challenge.slug } })}
            />
          ) : null}
        </Lijst>
      ) : null}

      {paneel === "verder" && verwant.length ? (
        <ContentSection title={t("meerOnderwerp").replace("{onderwerp}", houvast.onderwerp.toLowerCase())}>
          <ContentShelf>
            {verwant.map((h) => (
              <ShelfCard
                key={h.slug}
                kleur={kaartKleurVoor(h.onderwerp, h.slug)}
                title={h.titel}
                onPress={() => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } })}
              >
                <View style={{ position: "absolute", right: space[3], top: space[3] }}>
                  <VliegerOnderwerp onderwerp={h.onderwerp} slug={h.slug} hoogte={44} />
                </View>
              </ShelfCard>
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
