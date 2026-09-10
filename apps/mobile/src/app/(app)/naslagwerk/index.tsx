// Naslagwerk
//
// De kennisbank van Mind, met zoeken. De content is gebundeld en lokaal, dus
// zoeken werkt ook zonder netwerk. Debounce minimaal 300 ms en geen zoekopdracht
// onder de twee tekens (docs/limieten-en-misbruik.md sectie 4): hier is het
// filter lokaal, maar dezelfde regels houden het gedrag gelijk aan de afspraak.
//
// Sinds 10 september 2026 (feedbacksessie MIND) is zoeken slim: je typt wat
// er speelt ("ik slaap slecht") en features/content/zoeken.ts vertaalt dat
// naar gidsen, artikelen en challenges. Zonder zoekterm blijft het overzicht
// per onderwerp staan.

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
import { ARTIKELEN, ONDERWERPEN } from "@/features/content/data/artikelen";
import { GIDSEN } from "@/features/content/data/gidsen";
import { gidsenVoor } from "@/features/content/gidsen";
import { zoek } from "@/features/content/zoeken";
import { leesInstellingen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Naslagwerk",
  ondertitel: "Gidsen en artikelen van MIND, altijd met bron.",
  zoekPlaceholder: "Waar loop je tegenaan? Bijvoorbeeld: ik slaap slecht",
  gevonden: "Gevonden voor jou",
  gevondenNote: "Gidsen, artikelen en challenges van MIND die hierbij passen.",
  challenge: "CHALLENGE",
  artikel: "ARTIKEL",
  zoekLabel: "Zoek in het naslagwerk",
  onderwerpen: "Onderwerpen",
  alles: "Alles",
  gidsen: "Online gidsen",
  gidsenNote: "Praktische tips en technieken, eerst over jouw onderwerpen.",
  alleGidsen: "Alle gidsen",
  minderGidsen: "Minder",
  gids: "GIDS",
  artikelen: "Artikelen",
  artikelenNote: "Alles uit de bibliotheek van MIND.",
  nietsGevondenTitel: "Niets gevonden",
  nietsGevonden: "Probeer een ander woord.",
  nietsGevondenVoor: "Niets gevonden voor “{term}”. Probeer het in andere woorden, bijvoorbeeld waar je last van hebt.",
  wisZoekopdracht: "Wis zoekopdracht",
  bronMind: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Reference library",
    ondertitel: "Guides and articles from MIND, always with a source.",
    zoekPlaceholder: "What are you running into? For example: I sleep badly",
    gevonden: "Found for you",
    gevondenNote: "Guides, articles and challenges from MIND that fit.",
    challenge: "CHALLENGE",
    artikel: "ARTICLE",
    zoekLabel: "Search the reference library",
    onderwerpen: "Topics",
    alles: "All",
    gidsen: "Online guides",
    gidsenNote: "Practical tips and techniques, your topics first.",
    alleGidsen: "All guides",
    minderGidsen: "Fewer",
    gids: "GUIDE",
    artikelen: "Articles",
    artikelenNote: "Everything from MIND's library.",
    nietsGevondenTitel: "Nothing found",
    nietsGevonden: "No articles found. Try another word or topic.",
    nietsGevondenVoor: "No articles found for “{term}”. Try another word or topic.",
    wisZoekopdracht: "Clear the search",
    bronMind: "SOURCE: MIND",
  },
};

export default function Naslagwerk() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [invoer, zetInvoer] = useState("");
  const [zoekterm, zetZoekterm] = useState("");
  const [onderwerp, zetOnderwerp] = useState<string | null>(null);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);
  const [alleGidsen, zetAlleGidsen] = useState(false);

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

  // Slim zoeken: één gerangschikte lijst over gidsen, artikelen en challenges,
  // binnen het gekozen onderwerp als er een chip actief is.
  const gevonden = zoekterm ? zoek(zoekterm).filter((r) => !onderwerp || r.onderwerp === onderwerp) : [];
  const openResultaat = (r: (typeof gevonden)[number]) => {
    if (r.soort === "gids") router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: r.slug } });
    else if (r.soort === "artikel") router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: r.slug } });
    else router.push({ pathname: "/challenges/[challenge]", params: { challenge: r.slug } });
  };

  const resultaten = ARTIKELEN.filter((a) => {
    if (onderwerp && a.onderwerp !== onderwerp) return false;
    if (!zoekterm) return true;
    return (
      a.titel.toLowerCase().includes(zoekterm) ||
      a.onderwerp.toLowerCase().includes(zoekterm) ||
      a.blokken.some((b) => b.tekst.toLowerCase().includes(zoekterm))
    );
  }).sort((a, b) => gekozen(b.onderwerp) - gekozen(a.onderwerp));

  // De gidsen: zonder filter een plank met de gidsen bij een onderwerp (jouw
  // onderwerpen eerst), of alle 46 als grid na "Alle gidsen". Met een
  // onderwerp of zoekterm altijd een grid van wat erbij hoort. De gidsen
  // zonder onderwerp (naasten, ADHD, autisme, ...) zijn zo wel te vinden.
  const gidsFilter = zoekterm || onderwerp !== null;
  const gidsen = gidsFilter
    ? GIDSEN.filter((g) => {
        if (onderwerp && g.onderwerp !== onderwerp) return false;
        if (!zoekterm) return true;
        return (
          g.titel.toLowerCase().includes(zoekterm) ||
          g.intro.toLowerCase().includes(zoekterm) ||
          g.blokken.some((b) => (b.tekst ?? b.kop ?? "").toLowerCase().includes(zoekterm))
        );
      })
    : alleGidsen
      ? GIDSEN
      : gidsenVoor(voorkeuren);
  const gidsenAlsGrid = gidsFilter || alleGidsen;
  const gidsTegel = (g: (typeof GIDSEN)[number]) => ({
    label: t("gids"),
    title: g.titel,
    onPress: () => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } }),
  });

  // Jouw onderwerpen als eerste chips, zodat "waar wil je aan werken" hier
  // zichtbaar terugkomt.
  const onderwerpen = [...ONDERWERPEN].sort((a, b) => gekozen(b) - gekozen(a));

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
      <ContentSection title={t("onderwerpen")}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          <Chip label={t("alles")} active={onderwerp === null} onPress={() => zetOnderwerp(null)} />
          {onderwerpen.map((o) => (
            <Chip key={o} label={o} active={onderwerp === o} onPress={() => zetOnderwerp(onderwerp === o ? null : o)} />
          ))}
        </View>
      </ContentSection>

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
              {gevonden.map((r, i) => (
                <ContentCard
                  key={r.soort + r.slug}
                  full={i === 0 || (i === gevonden.length - 1 && (gevonden.length - 1) % 2 === 1)}
                  tone={r.soort === "gids" ? "coral" : r.soort === "challenge" ? "purple" : "white"}
                  label={r.soort === "gids" ? t("gids") : r.soort === "challenge" ? t("challenge") : t("artikel")}
                  title={r.titel}
                  onPress={() => openResultaat(r)}
                >
                  <View style={{ height: i === 0 ? 72 : 48 }} />
                  <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                    <VliegerOnderwerp onderwerp={r.onderwerp} slug={r.slug} hoogte={i === 0 ? 72 : 48} />
                  </View>
                </ContentCard>
              ))}
            </ContentGrid>
          )}
        </ContentSection>
      ) : null}

      {!zoekterm && gidsen.length ? (
        <ContentSection
          title={t("gidsen")}
          note={gidsFilter ? undefined : t("gidsenNote")}
          action={gidsFilter ? undefined : alleGidsen ? t("minderGidsen") : t("alleGidsen")}
          onAction={() => zetAlleGidsen(!alleGidsen)}
        >
          {gidsenAlsGrid ? (
            <ContentGrid>
              {gidsen.map((g, i) => (
                <ContentCard key={g.slug} {...gidsTegel(g)} tone="coral" full={i === gidsen.length - 1 && gidsen.length % 2 === 1}>
                  <View style={{ height: 40 }} />
                  <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                    <VliegerOnderwerp onderwerp={g.onderwerp} hoogte={44} />
                  </View>
                </ContentCard>
              ))}
            </ContentGrid>
          ) : (
            <ContentShelf>
              {gidsen.map((g) => (
                <ShelfCard key={g.slug} {...gidsTegel(g)} tone="coral">
                  <View style={{ position: "absolute", right: space[3], top: space[3] }}>
                    <VliegerOnderwerp onderwerp={g.onderwerp} hoogte={44} />
                  </View>
                </ShelfCard>
              ))}
            </ContentShelf>
          )}
        </ContentSection>
      ) : null}

      {zoekterm ? null : (
      <ContentSection title={t("artikelen")}>
        {resultaten.length === 0 ? (
          <Card tone="outline">
            <AppText rol="h3">{t("nietsGevondenTitel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {zoekterm ? t("nietsGevondenVoor").replace("{term}", zoekterm) : t("nietsGevonden")}
            </AppText>
            <Button
              label={t("wisZoekopdracht")}
              variant="link"
              onPress={() => {
                zetInvoer("");
                zetOnderwerp(null);
              }}
            />
          </Card>
        ) : (
          <ContentGrid>
            {/* Het eerste artikel breed en in kleur, de rest half en wit; het
                onderwerp alleen als het iets toevoegt aan de titel. */}
            {resultaten.map((a, i) => (
              <ContentCard
                key={a.slug}
                full={i === 0 || (i === resultaten.length - 1 && (resultaten.length - 1) % 2 === 1)}
                tone={i === 0 ? "coral" : "white"}
                title={a.titel}
                onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
              >
                {/* Geen ondertekst: het gezicht en de kleur zeggen het onderwerp.
                    De vlieger staat altijd rechtsonder; de lege View houdt er
                    ruimte voor vrij, zodat elke kaart dezelfde opbouw heeft. */}
                <View style={{ height: i === 0 ? 72 : 56 }} />
                <View style={{ position: "absolute", right: space[4], bottom: space[3] }}>
                  <VliegerOnderwerp onderwerp={a.onderwerp} slug={a.slug} hoogte={i === 0 ? 72 : 52} />
                </View>
              </ContentCard>
            ))}
          </ContentGrid>
        )}
      </ContentSection>
      )}
    </ScreenCanvas>
  );
}
