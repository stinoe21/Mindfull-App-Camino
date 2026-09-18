// Challenges
//
// De USP voor de gebruiker: de challenges en themaspecials van MIND, in een
// grid (eindige set, dus grid en geen shelf: HERKOMST.md schermregel 6).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { kaartKleurVoor, VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { CHALLENGES, type Challenge } from "@/features/content/data/challenges";
import { ONDERWERP_PER_CHALLENGE } from "@/features/content/challengeOnderwerp";
import { aantalAfgerond, laadVoortgang, laatsteActiviteit } from "@/features/content/voortgang";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";

const nl = {
  titel: "Challenges",
  ondertitel: "Kleine stappen, geen opdrachten.",
  uitleg: "Uitleg",
  leegTitel: "Nog geen challenges",
  leegUitleg: "Binnenkort staan ze hier.",
  challengesTitel: "Challenges",
  challengesNote: "In je eigen tempo, dag voor dag.",
  labelChallenge: "CHALLENGE",
  specialsTitel: "Themaspecials",
  specialsNote: "Een paar dagen aandacht voor een thema.",
  labelThemaspecial: "THEMASPECIAL",
  onderdelenMeta: "{n} dagen",
  dagVan: "Dag {x} van {y}",
  begintMet: "Begint met: {titel}",
  nuDag: "Dag {x}: {titel}",
  helemaalGedaan: "Alle dagen gedaan. Teruglezen kan altijd.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Challenges",
    ondertitel: "Small steps, no assignments.",
    uitleg: "Explanation",
    leegTitel: "No challenges yet",
    leegUitleg: "They will appear here soon.",
    challengesTitel: "Challenges",
    challengesNote: "At your own pace, day by day.",
    labelChallenge: "CHALLENGE",
    specialsTitel: "Theme specials",
    specialsNote: "A few days of attention for one theme.",
    labelThemaspecial: "THEME SPECIAL",
    onderdelenMeta: "{n} days",
    dagVan: "Day {x} of {y}",
    begintMet: "Starts with: {titel}",
    nuDag: "Day {x}: {titel}",
    helemaalGedaan: "All days done. You can always read back.",
  },
};

export default function Challenges() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [laatst, zetLaatst] = useState<Record<string, string>>({});
  const specials = CHALLENGES.filter((c) => c.soort === "themaspecial");
  // Voortgang per challenge, opnieuw gelezen bij elke focus: je komt hier
  // terug vanaf een afgeronde dag.
  const [voortgang, zetVoortgang] = useState<Record<string, number>>({});
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      laadVoortgang().then(() => {
        if (!actief) return;
        zetVoortgang(Object.fromEntries(CHALLENGES.map((c) => [c.slug, aantalAfgerond(c.slug)])));
        zetLaatst(Object.fromEntries(CHALLENGES.map((c) => [c.slug, laatsteActiviteit(c.slug) ?? ""])));
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  // Waar je mee bezig bent staat vooraan, de laatst aangeraakte eerst; de
  // rest houdt de volgorde van de lijst (Stijn, 17 september 2026). Tot dan
  // stond altijd de eerste uit de lijst breed, ook als je met een andere
  // bezig was.
  const bezig = (c: Challenge) => (voortgang[c.slug] ?? 0) > 0 && (voortgang[c.slug] ?? 0) < c.dagen.length;
  const challenges = CHALLENGES.filter((c) => c.soort === "challenge").sort(
    (a, b) => Number(bezig(b)) - Number(bezig(a)) || (bezig(a) && bezig(b) ? (laatst[b.slug] ?? "").localeCompare(laatst[a.slug] ?? "") : 0)
  );
  // Eén regel per kaart uit de inhoud van MIND zelf: de dag die klaarstaat, of
  // waar de challenge mee begint. Alleen "5 dagen" zei niet wat je ging doen.
  const regel = (c: Challenge): string => {
    const klaar = voortgang[c.slug] ?? 0;
    if (klaar >= c.dagen.length) return t("helemaalGedaan");
    const dag = c.dagen[klaar];
    return klaar > 0 ? t("nuDag").replace("{x}", String(klaar + 1)).replace("{titel}", dag.titel) : t("begintMet").replace("{titel}", dag.titel);
  };

  // De laatste kaart wordt breed als hij anders alleen zou hangen.
  const open = (slug: string) =>
    router.push({ pathname: "/challenges/[challenge]", params: { challenge: slug } });

  return (
    <ScreenCanvas state="default" metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
        {/* Waarom er één dag per dag vrijkomt staat op de hulppagina (18
            september 2026). In de kop zelf, zodat de link er niet los onder
            hangt; de marge trekt de tekst gelijk met de kop, want een
            link-knop heeft zelf lucht links. */}
        <View style={{ alignItems: "flex-start", marginLeft: -space[2] }}>
          <Button label={t("uitleg")} variant="link" onPress={() => router.push({ pathname: "/profiel/hulp", params: { open: "challenges" } })} />
        </View>
      </View>

      {CHALLENGES.length === 0 ? (
        <Card tone="white">
          <AppText rol="h3">{t("leegTitel")}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {t("leegUitleg")}
          </AppText>
        </Card>
      ) : null}

      {/* Ritme in plaats van een raster (designaudit 29 augustus 2026): de
          eerste, of de challenge waar je mee bezig bent, staat breed in de
          zonkleur met voortgang; de rest half, in de kleur van hun onderwerp
          (13 september 2026). */}
      {/* Geen sectiekop: de h1 zegt al "Challenges" (ontdubbeling, 1 september 2026). */}
      {challenges.length ? (
        <View>
          <ContentGrid>
            {challenges.map((c, i) => {
              const klaar = voortgang[c.slug] ?? 0;
              const actief = i === 0;
              return (
                <ContentCard key={c.slug} full={actief || (i === challenges.length - 1 && (challenges.length - 1) % 2 === 1)} tone="sun" kleur={actief ? undefined : kaartKleurVoor(ONDERWERP_PER_CHALLENGE[c.slug])} title={c.naam} onPress={() => open(c.slug)} beeld={<VliegerOnderwerp onderwerp={ONDERWERP_PER_CHALLENGE[c.slug]} hoogte={actief ? 64 : 48} />}>
                  <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
                  <AppText rol="bodySmall">{regel(c)}</AppText>
                  {klaar > 0 ? (
                    <View style={{ gap: space[1], marginTop: space[1] }}>
                      <View style={{ height: space[1], borderRadius: radius.pill, backgroundColor: palette.sliderTrackBase, overflow: "hidden" }}>
                        <View style={{ width: `${Math.min(100, Math.round((klaar / c.dagen.length) * 100))}%` as const, height: "100%", backgroundColor: colors.ctaDefault }} />
                      </View>
                      <AppText rol="labelCaption" kleur="brand">{t("dagVan").replace("{x}", String(Math.min(klaar, c.dagen.length))).replace("{y}", String(c.dagen.length))}</AppText>
                    </View>
                  ) : null}
                </ContentCard>
              );
            })}
          </ContentGrid>
        </View>
      ) : null}

      {specials.length ? (
        <ContentSection title={t("specialsTitel")} note={t("specialsNote")}>
          <ContentGrid>
            {specials.map((c, i) => (
              <ContentCard key={c.slug} full={i === 0 || (i === specials.length - 1 && (specials.length - 1) % 2 === 1)} kleur={kaartKleurVoor(ONDERWERP_PER_CHALLENGE[c.slug])} title={c.naam} onPress={() => open(c.slug)} beeld={<VliegerOnderwerp onderwerp={ONDERWERP_PER_CHALLENGE[c.slug]} hoogte={i === 0 ? 64 : 48} />}>
                <AppText rol="bodySmall" kleur="secondary">{t("onderdelenMeta").replace("{n}", String(c.dagen.length))}</AppText>
                  <AppText rol="bodySmall">{regel(c)}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      ) : null}

      {/* Onderaan elke tab, net als op Home en Profiel (productprincipes 9). */}
      <HulplijnKaart />
    </ScreenCanvas>
  );
}
