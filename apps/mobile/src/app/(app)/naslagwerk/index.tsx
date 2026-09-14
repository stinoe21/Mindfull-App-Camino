// Houvast
//
// De compacte kennislaag van de app (Stijn, 10 september 2026, docs/scope.md):
// per onderwerp één pagina die de uitleg uit de psychipedia van MIND
// combineert met de tips en oefeningen uit de online gids.
//
// Sinds 14 september 2026 (Stijn: "de onderwerpen zijn een lange scroll
// onder elkaar, niet per onderdeel opgedeeld") toont dit overzicht de negen
// families (Stress, Somberheid, Angst, ...) in plaats van alle 27 onderwerpen:
// jouw voorkeuren voorop, elke familie in haar eigen kleur met haar vlieger.
// Een familie opent haar pagina met de onderwerpen als lijst; een familie
// met één onderwerp (Slaap) opent dat onderwerp direct. Onderaan twee
// ingangen voor de gidsen zonder eigen onderwerp: voor naasten, en de andere
// onderwerpen van MIND. De rij filterchips is sinds 13 september weg; zoeken
// is het filter. Na een check-in staat bovenaan "Bij jouw weer vandaag" met
// de onderwerpen uit de funnel van weerNaarTips, en daaronder de tips die
// iemand bewaard heeft (lokaal, features/content/bewaard.ts).
//
// Zoeken is slim (feedbacksessie MIND): je typt wat er speelt ("ik slaap
// slecht") en features/content/zoeken.ts vertaalt dat naar onderwerpen,
// gidsen en challenges. Een gids of artikel dat bij een onderwerp hoort,
// opent op dat onderwerp. Debounce minimaal 300 ms en geen zoekopdracht
// onder de twee tekens (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { useTaal, useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { familiesVoorVoorkeuren, type Familie } from "@/features/content/families";
import { houvastVoorArtikel, houvastVoorGids } from "@/features/content/houvast";
import { leesBewaard, metInhoud, type BewaardeTipMetInhoud } from "@/features/content/bewaard";
import { tipsBijWeer } from "@/features/content/weerNaarTips";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import type { Houvast as HouvastOnderwerp } from "@/features/content/data/houvast";
import { zoek, type ZoekResultaat } from "@/features/content/zoeken";
import { leesInstellingen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Houvast",
  ondertitel: "Kort uitgelegd, en wat kan helpen.",
  zoekPlaceholder: "Waar loop je tegenaan? Bijvoorbeeld: ik slaap slecht",
  gevonden: "Gevonden voor jou",
  gevondenNote: "Onderwerpen, gidsen en challenges die hierbij passen.",
  challenge: "CHALLENGE",
  onderwerp: "ONDERWERP",
  gids: "GIDS",
  zoekLabel: "Zoek in Houvast",
  onderwerpen: "Onderwerpen",
  onderwerpenNote: "Jouw onderwerpen eerst.",
  vandaagTitel: "Bij jouw weer vandaag",
  vandaagNote: "Wat kan helpen bij het weer van vandaag.",
  tips: "TIPS",
  bewaardTitel: "Jouw bewaarde tips",
  oefening: "Oefening",
  aantal: "{n} onderwerpen",
  ookTitel: "Ook in Houvast",
  naastenTitel: "Voor naasten",
  naastenNote: "Als iemand in je omgeving het moeilijk heeft.",
  andereTitel: "Andere onderwerpen",
  andereNote: "ADHD, autisme, PTSS en meer.",
  nietsGevondenTitel: "Niets gevonden",
  nietsGevondenVoor: "Niets gevonden voor “{term}”. Probeer het in andere woorden, bijvoorbeeld waar je last van hebt.",
  wisZoekopdracht: "Wis zoekopdracht",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Houvast",
    ondertitel: "Explained briefly, and what can help.",
    zoekPlaceholder: "What are you running into? For example: I sleep badly",
    gevonden: "Found for you",
    gevondenNote: "Topics, guides and challenges that fit.",
    challenge: "CHALLENGE",
    onderwerp: "TOPIC",
    gids: "GUIDE",
    zoekLabel: "Search Houvast",
    onderwerpen: "Topics",
    onderwerpenNote: "Your topics first.",
    vandaagTitel: "For your weather today",
    vandaagNote: "What can help with today's weather.",
    tips: "TIPS",
    bewaardTitel: "Your saved tips",
    oefening: "Exercise",
    aantal: "{n} topics",
    ookTitel: "Also in Houvast",
    naastenTitel: "For loved ones",
    naastenNote: "When someone close to you is struggling.",
    andereTitel: "Other topics",
    andereNote: "ADHD, autism, PTSD and more.",
    nietsGevondenTitel: "Nothing found",
    nietsGevondenVoor: "Nothing found for “{term}”. Try other words, for example what you're struggling with.",
    wisZoekopdracht: "Clear the search",
  },
};

// Een zoekresultaat opent op zijn onderwerp als het er een heeft; anders op
// de gids, het artikel of de challenge zelf.
type Doel = { sleutel: string; soort: "onderwerp" | "gids" | "challenge"; titel: string; onderwerp?: string; slug: string };
function doelVan(r: ZoekResultaat): Doel {
  const h = r.soort === "gids" ? houvastVoorGids(r.slug) : r.soort === "artikel" ? houvastVoorArtikel(r.slug) : undefined;
  if (h) return { sleutel: "onderwerp-" + h.slug, soort: "onderwerp", titel: h.titel, onderwerp: h.onderwerp, slug: h.slug };
  if (r.soort === "challenge") return { sleutel: "challenge-" + r.slug, soort: "challenge", titel: r.titel, onderwerp: r.onderwerp, slug: r.slug };
  return { sleutel: "gids-" + r.slug, soort: "gids", titel: r.titel, onderwerp: r.onderwerp, slug: r.slug };
}

export default function Houvast() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { taal } = useTaal();
  const [invoer, zetInvoer] = useState("");
  const [zoekterm, zetZoekterm] = useState("");
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);
  const [vandaag, zetVandaag] = useState<HouvastOnderwerp[]>([]);
  const [bewaard, zetBewaard] = useState<BewaardeTipMetInhoud[]>([]);

  // De voorkeuren kunnen tussendoor wijzigen op Profiel, dus bij elke focus
  // opnieuw lezen. Ze bepalen alleen de volgorde, nooit wat er te zien is.
  // Het weer van vandaag (lokaal, na de check-in) geeft de rij bovenaan via
  // dezelfde funnel als Home (weerNaarTips); zonder check-in geen rij. De
  // bewaarde tips staan ook lokaal en kunnen op een onderwerp gewijzigd zijn.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesInstellingen().then((i) => {
        if (actief) zetVoorkeuren(i.voorkeuren);
      });
      leesWeerVanVandaag().then((data) => {
        if (!actief) return;
        const lijst: HouvastOnderwerp[] = [];
        for (const a of data ? tipsBijWeer(data.weerbeeld) : []) {
          const h = houvastVoorArtikel(a.slug);
          if (h && !lijst.includes(h)) lijst.push(h);
        }
        zetVandaag(lijst);
      });
      leesBewaard().then((lijst) => {
        if (actief) zetBewaard(metInhoud(lijst));
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  // Debounce van 300 ms; onder de twee tekens zoeken we niet.
  useEffect(() => {
    const timer = setTimeout(() => {
      zetZoekterm(invoer.trim().length >= 2 ? invoer.trim().toLowerCase() : "");
    }, 300);
    return () => clearTimeout(timer);
  }, [invoer]);

  const openOnderwerp = (slug: string) => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: slug } });
  const openTips = (slug: string, tip?: number) =>
    router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: slug, paneel: "helpen", ...(tip === undefined ? {} : { tip: String(tip) }) } });
  const openDoel = (d: Doel) => {
    if (d.soort === "onderwerp") openOnderwerp(d.slug);
    else if (d.soort === "gids") router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: d.slug } });
    else router.push({ pathname: "/challenges/[challenge]", params: { challenge: d.slug } });
  };
  // Een familie met één onderwerp heeft geen eigen pagina nodig.
  const openFamilie = (f: Familie) => {
    const enige = f.onderwerpen.length === 1 ? f.onderwerpen[0] : undefined;
    if (enige) openOnderwerp(enige.slug);
    else router.push({ pathname: "/naslagwerk/familie/[familie]", params: { familie: f.slug } });
  };

  // Slim zoeken: één gerangschikte lijst; een gids en het artikel over
  // hetzelfde onderwerp worden één resultaat.
  const gevonden: Doel[] = [];
  if (zoekterm) {
    for (const r of zoek(zoekterm)) {
      const d = doelVan(r);
      if (!gevonden.some((x) => x.sleutel === d.sleutel)) gevonden.push(d);
    }
  }

  const families = familiesVoorVoorkeuren(voorkeuren);

  const label = (soort: Doel["soort"]) => (soort === "onderwerp" ? t("onderwerp") : soort === "gids" ? t("gids") : t("challenge"));

  return (
    <ScreenCanvas state="default" kopTitel={t("titel")} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={invoer}
          onChangeText={zetInvoer}
          placeholder={t("zoekPlaceholder")}
          placeholderTextColor={colors.textSecondary}
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("zoekLabel")}
        />
      </Card>

      {zoekterm ? (
        <ContentSection title={t("gevonden")} note={t("gevondenNote")}>
          {gevonden.length === 0 ? (
            <Card tone="white">
              <AppText rol="h3">{t("nietsGevondenTitel")}</AppText>
              <AppText rol="bodySmall" kleur="secondary">{t("nietsGevondenVoor").replace("{term}", zoekterm)}</AppText>
              <Button label={t("wisZoekopdracht")} variant="link" onPress={() => zetInvoer("")} />
            </Card>
          ) : (
            <ContentGrid>
              {gevonden.map((d, i) => (
                <ContentCard
                  key={d.sleutel}
                  full={i === 0 || (i === gevonden.length - 1 && (gevonden.length - 1) % 2 === 1)}
                  tone={d.soort === "challenge" ? "purple" : "white"}
                  kleur={d.soort === "challenge" ? undefined : kaartKleurVoor(d.onderwerp, d.slug)}
                  label={label(d.soort)}
                  title={d.titel}
                  onPress={() => openDoel(d)}
                >
                  <View style={{ height: i === 0 ? 72 : 48 }} />
                  <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                    <VliegerOnderwerp onderwerp={d.onderwerp} slug={d.slug} hoogte={i === 0 ? 72 : 48} />
                  </View>
                </ContentCard>
              ))}
            </ContentGrid>
          )}
        </ContentSection>
      ) : null}

      {!zoekterm && vandaag.length ? (
        <ContentSection title={t("vandaagTitel")} note={t("vandaagNote")}>
          <ContentShelf>
            {vandaag.map((h) => (
              <ShelfCard key={h.slug} kleur={kaartKleurVoor(h.onderwerp, h.slug)} label={t("tips")} title={h.titel} onPress={() => openTips(h.slug)}>
                <View style={{ position: "absolute", right: space[3], top: space[3] }}>
                  <VliegerOnderwerp onderwerp={h.onderwerp} slug={h.slug} hoogte={44} />
                </View>
              </ShelfCard>
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}

      {!zoekterm && bewaard.length ? (
        <ContentSection title={t("bewaardTitel")}>
          <Lijst>
            {bewaard.map((b) => (
              <LijstRij
                key={b.onderwerp + "-" + b.tip}
                titel={b.inhoud.kop ?? b.houvast.titel}
                meta={b.isOefening ? t("oefening") + ", " + b.houvast.titel.toLowerCase() : b.houvast.titel}
                beeld={<VliegerOnderwerp onderwerp={b.houvast.onderwerp} slug={b.houvast.slug} hoogte={40} />}
                onPress={() => openTips(b.onderwerp, b.tip)}
              />
            ))}
          </Lijst>
        </ContentSection>
      ) : null}

      {!zoekterm ? (
        <ContentSection title={t("onderwerpen")} note={t("onderwerpenNote")}>
          <ContentGrid>
            {/* De eerste familie breed, de rest half; elke kaart in de kleur van
                haar familie, met de vlieger rechtsonder, altijd op dezelfde plek.
                Negen is oneven, dus de laatste is ook breed. */}
            {families.map((f, i) => (
              <ContentCard
                key={f.slug}
                full={i === 0 || i === families.length - 1}
                kleur={kaartKleurVoor(f.naam)}
                title={f.naam}
                onPress={() => openFamilie(f)}
              >
                <AppText rol="bodySmall" kleur="secondary">
                  {f.onderwerpen.length === 1 ? f.regel[taal] : t("aantal").replace("{n}", String(f.onderwerpen.length))}
                </AppText>
                <View style={{ height: i === 0 ? 56 : 44 }} />
                <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                  <VliegerOnderwerp onderwerp={f.naam} hoogte={i === 0 ? 72 : 52} />
                </View>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}

      {!zoekterm ? (
        <ContentSection title={t("ookTitel")}>
          <ContentGrid>
            <ContentCard tone="primary" title={t("naastenTitel")} onPress={() => router.push({ pathname: "/naslagwerk/gidsen/[groep]", params: { groep: "naasten" } })}>
              <AppText rol="bodySmall" kleur="secondary">{t("naastenNote")}</AppText>
            </ContentCard>
            <ContentCard tone="purple" title={t("andereTitel")} onPress={() => router.push({ pathname: "/naslagwerk/gidsen/[groep]", params: { groep: "andere" } })}>
              <AppText rol="bodySmall" kleur="secondary">{t("andereNote")}</AppText>
            </ContentCard>
          </ContentGrid>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
