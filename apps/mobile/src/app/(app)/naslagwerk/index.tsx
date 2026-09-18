// Houvast
//
// De compacte kennislaag van de app (Stijn, 10 september 2026, docs/scope.md):
// per onderwerp één pagina die de uitleg uit de psychipedia van MIND
// combineert met de tips en oefeningen uit de online gids. Dit overzicht
// toont de onderwerpen, jouw voorkeuren voorop, met de chips als filter en
// daaronder de gidsen van MIND die geen eigen onderwerp hebben (voor naasten,
// over ADHD, autisme, ...).
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
import { Chip } from "@mind/ui/components/Chip";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ONDERWERPEN } from "@/features/content/data/artikelen";
import { GIDSEN } from "@/features/content/data/gidsen";
import { houvastVoorArtikel, houvastVoorGids, houvastVoorVoorkeuren } from "@/features/content/houvast";
import { zoek, type ZoekResultaat } from "@/features/content/zoeken";
import { leesInstellingen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Houvast",
  ondertitel: "Begrijpen, houvast en verdieping.",
  zoekPlaceholder: "Waar loop je tegenaan? Bijvoorbeeld: ik slaap slecht",
  gevonden: "Gevonden voor jou",
  gevondenNote: "Onderwerpen, gidsen en challenges die hierbij passen.",
  challenge: "CHALLENGE",
  onderwerp: "ONDERWERP",
  gids: "GIDS",
  zoekLabel: "Zoek in Houvast",
  onderwerpen: "Onderwerpen",
  onderwerpenNote: "Kort uitgelegd, wat kan helpen en verder lezen. Jouw onderwerpen eerst.",
  alles: "Alles",
  gidsen: "Meer gidsen",
  gidsenNote: "Voor naasten, en over onderwerpen die hierboven niet staan.",
  nietsGevondenTitel: "Niets gevonden",
  nietsGevondenVoor: "Niets gevonden voor “{term}”. Probeer het in andere woorden, bijvoorbeeld waar je last van hebt.",
  nietsBijOnderwerp: "Nog geen onderwerpen bij deze keuze.",
  wisZoekopdracht: "Wis zoekopdracht",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Houvast",
    ondertitel: "Understanding, a foothold and depth.",
    zoekPlaceholder: "What are you running into? For example: I sleep badly",
    gevonden: "Found for you",
    gevondenNote: "Topics, guides and challenges that fit.",
    challenge: "CHALLENGE",
    onderwerp: "TOPIC",
    gids: "GUIDE",
    zoekLabel: "Search Houvast",
    onderwerpen: "Topics",
    onderwerpenNote: "Explained briefly, what can help and more to read. Your topics first.",
    alles: "All",
    gidsen: "More guides",
    gidsenNote: "For loved ones, and about topics not listed above.",
    nietsGevondenTitel: "Nothing found",
    nietsGevondenVoor: "Nothing found for “{term}”. Try other words, for example what you're struggling with.",
    nietsBijOnderwerp: "No topics for this choice yet.",
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
  const [invoer, zetInvoer] = useState("");
  const [zoekterm, zetZoekterm] = useState("");
  const [onderwerp, zetOnderwerp] = useState<string | null>(null);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);

  // De voorkeuren kunnen tussendoor wijzigen in Instellingen, dus bij elke
  // focus opnieuw lezen. Ze bepalen alleen de volgorde, nooit wat er te zien is.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesInstellingen().then((i) => {
        if (actief) zetVoorkeuren(i.voorkeuren);
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

  const gekozen = (naam: string) => Number(voorkeuren.includes(naam));

  const openOnderwerp = (slug: string) => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: slug } });
  const openDoel = (d: Doel) => {
    if (d.soort === "onderwerp") openOnderwerp(d.slug);
    else if (d.soort === "gids") router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: d.slug } });
    else router.push({ pathname: "/challenges/[challenge]", params: { challenge: d.slug } });
  };

  // Slim zoeken: één gerangschikte lijst, binnen het gekozen onderwerp als er
  // een chip actief is; een gids en het artikel over hetzelfde onderwerp
  // worden één resultaat.
  const gevonden: Doel[] = [];
  if (zoekterm) {
    for (const r of zoek(zoekterm)) {
      if (onderwerp && r.onderwerp !== onderwerp) continue;
      const d = doelVan(r);
      if (!gevonden.some((x) => x.sleutel === d.sleutel)) gevonden.push(d);
    }
  }

  const onderwerpen = houvastVoorVoorkeuren(voorkeuren).filter((h) => !onderwerp || h.onderwerp === onderwerp);

  // De gidsen zonder eigen onderwerp: alleen zonder filter, als plank onderaan.
  const losseGidsen = GIDSEN.filter((g) => !houvastVoorGids(g.slug));

  // Jouw onderwerpen als eerste chips, zodat "waar wil je aan werken" hier
  // zichtbaar terugkomt.
  const chips = [...ONDERWERPEN].sort((a, b) => gekozen(b) - gekozen(a));

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

      {/* Een actieve "Alles"-chip vooraan, zodat de rij als filter leest en niet
          als decoratie (designaudit 29 augustus 2026). */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        <Chip label={t("alles")} active={onderwerp === null} onPress={() => zetOnderwerp(null)} />
        {chips.map((o) => (
          <Chip key={o} label={o} active={onderwerp === o} onPress={() => zetOnderwerp(onderwerp === o ? null : o)} />
        ))}
      </View>

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
                  tone={d.soort === "challenge" ? "purple" : d.soort === "gids" ? "white" : "coral"}
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
      ) : (
        <ContentSection title={t("onderwerpen")} note={onderwerp ? undefined : t("onderwerpenNote")}>
          {onderwerpen.length === 0 ? (
            <Card tone="white">
              <AppText rol="bodySmall" kleur="secondary">{t("nietsBijOnderwerp")}</AppText>
            </Card>
          ) : (
            <ContentGrid>
              {/* Het eerste onderwerp breed en in kleur, de rest half en zand;
                  de vlieger van het onderwerp rechtsonder, altijd op dezelfde plek. */}
              {onderwerpen.map((h, i) => (
                <ContentCard
                  key={h.slug}
                  full={i === 0 || (i === onderwerpen.length - 1 && (onderwerpen.length - 1) % 2 === 1)}
                  tone={i === 0 ? "coral" : "white"}
                  title={h.titel}
                  onPress={() => openOnderwerp(h.slug)}
                >
                  <View style={{ height: i === 0 ? 72 : 56 }} />
                  <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                    <VliegerOnderwerp onderwerp={h.onderwerp} slug={h.slug} hoogte={i === 0 ? 72 : 52} />
                  </View>
                </ContentCard>
              ))}
            </ContentGrid>
          )}
        </ContentSection>
      )}

      {!zoekterm && !onderwerp && losseGidsen.length ? (
        <ContentSection title={t("gidsen")} note={t("gidsenNote")}>
          <ContentShelf>
            {losseGidsen.map((g) => (
              <ShelfCard
                key={g.slug}
                label={t("gids")}
                title={g.titel}
                tone="primary"
                onPress={() => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } })}
              />
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
