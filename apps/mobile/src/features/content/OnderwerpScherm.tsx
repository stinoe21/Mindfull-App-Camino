// Houvast: de pagina van één onderwerp
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
//   Uitleg            de kern in twee zinnen, daaronder de aanloop als gewone
//                     tekst en de verdieping als rijen die per kop uitklappen
//   Tips              de tips als kaarten die je swipet, één per scherm,
//                     met "TIP 2 van 5"; de oefening als laatste kaart in
//                     paars. Een lange tip begint met een voorproef en
//                     "Lees meer". "Wat kan helpen" paste niet in een segment.
//   Meer info         de links naar wijzijnmind.nl, de gids per mail, de
//                     challenge over dit onderwerp, dan los de Hulplijn-kaart,
//                     en de verwante onderwerpen
//
// Sinds 17 september 2026 (Stijn: "best wel wat artikelen zitten nog in de
// oude stijl", "nog die ultra lange kopie") is dit het sjabloon voor al het
// naslagwerk: de routes houvast/[onderwerp] en gids/[gids] tonen allebei dit
// scherm, en een losse gids van MIND (voor naasten, ADHD, PTSS, ...) krijgt
// dezelfde drie panelen via onderwerpUitGids in houvast.ts. Het derde paneel
// heette "Verder"; dat is "Meer info" geworden. "Lees verder" onder de uitleg
// klapte alles in één keer open; nu klapt alleen de kop open die je kiest.
//
// De teksten zijn woordelijk van MIND (data/houvast.ts en data/gidsen.ts,
// gegenereerd). Er wordt alleen op zinsgrenzen geknipt. Een klacht
// (piekeren), een vaardigheid (nee zeggen), een hulpmiddel (mindfulness) en
// een gids voor naasten delen dezelfde opbouw; een paneel zonder inhoud
// vervalt.

import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
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
import { UitklapRij } from "@mind/ui/components/UitklapRij";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { InhoudBlokken, type InhoudBlok } from "@/features/content/InhoudBlokken";
import { isBewaard, leesBewaard, wisselBewaard, type BewaardeTip } from "@/features/content/bewaard";
import { challengeBijFamilie, gidsenInGroep } from "@/features/content/families";
import { houvastBijOnderwerp, secties, type Onderwerp } from "@/features/content/houvast";
import type { HouvastTip } from "@/features/content/data/houvast";
import { useOpenLink } from "@/features/systeem/openLink";

const nl = {
  nietGevonden: "Onderwerp niet gevonden",
  nietGevondenUitleg: "Dit onderwerp bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar Tips",
  uitleg: "Uitleg",
  tips: "Tips",
  meerInfo: "Meer info",
  leesMeer: "Lees meer",
  minder: "Minder",
  tipVan: "TIP {x} van {y}",
  probeer: "PROBEER DIT EENS",
  bewaar: "Bewaar deze tip",
  bewaard: "Bewaard",
  opMind: "Op wijzijnmind.nl",
  allesOver: "Alles over {titel}",
  gids: "De online gids: {titel}",
  gidsMeta: "Praktische tips van MIND",
  gidsPerMail: "Gids per e-mail",
  gidsPerMailMeta: "Aanmelden bij MIND",
  challenge: "CHALLENGE",
  dagen: "{n} dagen, een stap per dag",
  meerOnderwerp: "Meer over {onderwerp}",
  voorNaasten: "VOOR NAASTEN",
  alleenLink: "Deze gids staat op wijzijnmind.nl, met praktische tips en technieken.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Topic not found",
    nietGevondenUitleg: "This topic doesn't exist or has been moved.",
    terugOverzicht: "Back to Tips",
    uitleg: "About",
    tips: "Tips",
    meerInfo: "More info",
    leesMeer: "Read more",
    minder: "Less",
    tipVan: "TIP {x} of {y}",
    probeer: "TRY THIS",
    bewaar: "Save this tip",
    bewaard: "Saved",
    opMind: "On wijzijnmind.nl",
    allesOver: "Everything about {titel}",
    gids: "The online guide: {titel}",
    gidsMeta: "Practical tips from MIND",
    gidsPerMail: "Guide by email",
    gidsPerMailMeta: "Sign up with MIND",
    challenge: "CHALLENGE",
    dagen: "{n} days, one step a day",
    meerOnderwerp: "More about {onderwerp}",
    voorNaasten: "FOR LOVED ONES",
    alleenLink: "This guide is on wijzijnmind.nl, with practical tips and techniques.",
  },
};

const ZIN = /[^.!?]+[.!?]+['"’”]?(\s|$)/g;

// Een alinea in zinnen; de eerste twee en de rest apart, zodat de kern groot
// kan staan en de rest gewoon, zonder een woord te veranderen.
function knip(tekst: string, aantal = 2): { kop: string; rest: string } {
  const zinnen = tekst.match(ZIN);
  if (!zinnen || zinnen.length <= aantal) return { kop: tekst, rest: "" };
  return { kop: zinnen.slice(0, aantal).join("").trim(), rest: zinnen.slice(aantal).join("").trim() };
}

// De voorproef van een tip: wat er op de kaart staat voordat iemand op "Lees
// meer" tikt. Hele blokken zolang ze passen; een alinea die niet meer past
// wordt op een zinsgrens geknipt. Scheelt het maar een paar regels, dan
// staat de tip er gewoon helemaal.
const VOORPROEF = 480;
const SPELING = 160;
const lengteVan = (b: InhoudBlok) => (b.tekst?.length ?? 0) + (b.lijst ?? []).join(" ").length;
function voorproef(blokken: InhoudBlok[]): { zichtbaar: InhoudBlok[]; heeftMeer: boolean } {
  if (blokken.reduce((n, b) => n + lengteVan(b), 0) <= VOORPROEF + SPELING) return { zichtbaar: blokken, heeftMeer: false };
  const zichtbaar: InhoudBlok[] = [];
  let tekens = 0;
  for (const blok of blokken) {
    if (tekens + lengteVan(blok) <= VOORPROEF) {
      zichtbaar.push(blok);
      tekens += lengteVan(blok);
      continue;
    }
    // Dit blok past niet meer. Een alinea vult de kaart aan tot de grens, in
    // hele zinnen en altijd minstens één; een opsomming blijft heel, en
    // staat er nog niets, dan staat ze er toch.
    const zinnen = blok.tekst?.match(ZIN);
    if (zinnen && tekens < VOORPROEF / 2) {
      let deel = "";
      for (const zin of zinnen) {
        if (deel && tekens + deel.length + zin.length > VOORPROEF) break;
        deel += zin;
      }
      zichtbaar.push({ ...blok, tekst: deel.trim() });
    } else if (!zichtbaar.length) {
      zichtbaar.push(blok);
    }
    break;
  }
  return { zichtbaar, heeftMeer: true };
}

type Paneel = "uitleg" | "helpen" | "meer";
const isPaneel = (p: string | undefined): p is Paneel => p === "uitleg" || p === "helpen" || p === "meer";

// Eén tip als kaart in de pager: overline met de telling, de kop, de tekst
// en onderaan de knoppen (echte knoppen, geen tekstlinks: Stijn, 14 september
// 2026). Een lange tip toont eerst de voorproef, met "Lees meer" voor de
// rest, zodat een kaart een handvat blijft en geen lap wordt. De kaart vult
// de hoogte van de hoogste kaart in de rij, met de knoppen altijd onderaan.
type TipKaartProps = {
  tip: HouvastTip;
  overline: string;
  tone: "white" | "purple";
  bewaard: boolean;
  onBewaar: () => void;
  labels: { bewaar: string; bewaard: string; leesMeer: string; minder: string };
};
function TipKaart({ tip, overline, tone, bewaard, onBewaar, labels }: TipKaartProps) {
  const [open, zetOpen] = useState(false);
  const { zichtbaar, heeftMeer } = voorproef(tip.blokken);
  return (
    <Card tone={tone} style={{ flex: 1, gap: space[3] }}>
      <View style={{ gap: space[1] }}>
        <AppText rol="labelOverline" kleur="brand">{overline}</AppText>
        {tip.kop ? <AppText rol="h3">{tip.kop}</AppText> : null}
      </View>
      <View style={{ flex: 1, gap: space[2] }}>
        <InhoudBlokken blokken={open ? tip.blokken : zichtbaar} />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {heeftMeer ? <Button label={open ? labels.minder : labels.leesMeer} variant="secondary" onPress={() => zetOpen(!open)} /> : null}
        <Button label={bewaard ? "✓ " + labels.bewaard : labels.bewaar} variant="secondary" onPress={onBewaar} />
      </View>
    </Card>
  );
}

// De aanloop van de uitleg: zoveel alinea's staan er voordat "Lees meer" komt.
const AANLOOP = 2;

/** Het scherm van één onderwerp; de route zoekt het onderwerp op en geeft het door. */
export function OnderwerpScherm({ onderwerp: houvast }: { onderwerp: Onderwerp | undefined }) {
  const router = useRouter();
  const t = useVertaling(teksten);
  const openLink = useOpenLink();
  // Een link kan direct op een paneel openen (?paneel=helpen), en op een tip
  // (&tip=2), bijvoorbeeld vanaf een bewaarde tip op Houvast; zonder
  // parameters begint de pagina bij de uitleg.
  const { paneel: startPaneel, tip: startTip } = useLocalSearchParams<{ paneel?: string; tip?: string }>();
  const slug = houvast?.slug;
  const [paneel, zetPaneel] = useState<Paneel>(isPaneel(startPaneel) ? startPaneel : "uitleg");
  const [alles, zetAlles] = useState(false);
  const [bewaard, zetBewaard] = useState<BewaardeTip[]>([]);

  // De bewaarde tips staan lokaal (features/content/bewaard.ts); bij elke
  // focus opnieuw lezen, want ze kunnen op Houvast zelf gewijzigd zijn.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesBewaard().then((lijst) => {
        if (actief) zetBewaard(lijst);
      });
      return () => {
        actief = false;
      };
    }, [])
  );
  const wissel = (positie: number) => {
    if (!slug) return;
    wisselBewaard(slug, positie).then(zetBewaard);
  };

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
  // Een losse gids heeft meestal geen familie: dan geen verwante onderwerpen
  // en geen challenge, en boven de titel alleen "VOOR NAASTEN" als dat zo is.
  const familie = houvast.onderwerp;
  const verwant = familie ? houvastBijOnderwerp(familie).filter((h) => h.slug !== houvast.slug) : [];
  const challenge = familie ? challengeBijFamilie(familie) : undefined;
  const voorNaasten = !familie && gidsenInGroep("naasten").some((g) => g.slug === houvast.slug);
  const overline = familie && familie !== houvast.titel ? familie.toUpperCase() : voorNaasten ? t("voorNaasten") : undefined;
  const heeftHulp = houvast.tips.length > 0 || houvast.oefening !== undefined;

  const panelen: { sleutel: Paneel; label: string }[] = [
    { sleutel: "uitleg", label: t("uitleg") },
    ...(heeftHulp ? [{ sleutel: "helpen" as const, label: t("tips") }] : []),
    { sleutel: "meer", label: t("meerInfo") },
  ];
  const actief = Math.max(0, panelen.findIndex((p) => p.sleutel === paneel));

  // Uitleg: de kern in twee zinnen, dan de rest van de kern en de aanloop
  // van de verdieping (wat er vóór de eerste kop staat), met "Lees meer" als
  // die aanloop lang is. Elke kop daarna is een rij die uitklapt, zodat een
  // onderwerp met veel verdieping (stress, bewegen) geen lap wordt.
  const kern = knip(houvast.kort || t("alleenLink"));
  const verdieping = secties(houvast.meer);
  const aanloop = verdieping.filter((s) => !s.kop).flatMap((s) => s.blokken);
  const koppen = verdieping.filter((s) => s.kop && s.blokken.length);

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
        {overline ? <AppText rol="labelOverline" kleur="brand">{overline}</AppText> : null}
        <AppText rol="h1">{houvast.titel}</AppText>
      </View>

      <Segmenten segmenten={panelen.map((p) => p.label)} actief={actief} onKies={(i) => zetPaneel(panelen[i]?.sleutel ?? "uitleg")} />

      {paneel === "uitleg" ? (
        <View style={{ gap: space[4] }}>
          <AppText rol="bodyEmphasis">{kern.kop}</AppText>
          {kern.rest ? <AppText rol="body">{kern.rest}</AppText> : null}
          <InhoudBlokken blokken={alles ? aanloop : aanloop.slice(0, AANLOOP)} />
          {aanloop.length > AANLOOP ? (
            <View style={{ alignItems: "flex-start" }}>
              <Button label={alles ? t("minder") : t("leesMeer")} variant="secondary" onPress={() => zetAlles(!alles)} />
            </View>
          ) : null}
          {koppen.length ? (
            <Lijst>
              {koppen.map((s) => (
                <UitklapRij key={s.kop} titel={s.kop ?? ""}>
                  <InhoudBlokken blokken={s.blokken} />
                </UitklapRij>
              ))}
            </Lijst>
          ) : null}
        </View>
      ) : null}

      {paneel === "helpen" ? (
        <Pager start={Number(startTip) || 0}>
          {houvast.tips.map((tip, i) => (
            <TipKaart
              key={i}
              tip={tip}
              tone="white"
              overline={t("tipVan").replace("{x}", String(i + 1)).replace("{y}", String(totaal))}
              bewaard={isBewaard(bewaard, houvast.slug, i)}
              onBewaar={() => wissel(i)}
              labels={{ bewaar: t("bewaar"), bewaard: t("bewaard"), leesMeer: t("leesMeer"), minder: t("minder") }}
            />
          ))}
          {houvast.oefening ? (
            <TipKaart
              key="oefening"
              tip={houvast.oefening}
              tone="purple"
              overline={t("probeer")}
              bewaard={isBewaard(bewaard, houvast.slug, houvast.tips.length)}
              onBewaar={() => wissel(houvast.tips.length)}
              labels={{ bewaar: t("bewaar"), bewaard: t("bewaard"), leesMeer: t("leesMeer"), minder: t("minder") }}
            />
          ) : null}
        </Pager>
      ) : null}

      {paneel === "meer" ? (
        <Lijst>
          {houvast.bron ? <LijstRij titel={t("allesOver").replace("{titel}", titelLaag)} meta={t("opMind")} onPress={() => openLink(houvast.bron)} /> : null}
          {houvast.gids ? <LijstRij titel={t("gids").replace("{titel}", houvast.gids.titel)} meta={t("gidsMeta")} onPress={() => openLink(houvast.gids?.url)} /> : null}
          {houvast.gids?.aanmeld ? <LijstRij titel={t("gidsPerMail")} meta={t("gidsPerMailMeta")} onPress={() => openLink(houvast.gids?.aanmeld)} /> : null}
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

      {/* Onder de leeslinks, los ervan, de Hulplijn: contact met een mens is
          iets anders dan verder lezen (Stijn, 14 september 2026). */}
      {paneel === "meer" ? <HulplijnKaart /> : null}

      {paneel === "meer" && familie && verwant.length ? (
        <ContentSection title={t("meerOnderwerp").replace("{onderwerp}", familie.toLowerCase())}>
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
