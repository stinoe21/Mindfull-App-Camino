// Naslagwerk
//
// De kennisbank van Mind, met zoeken. De content is gebundeld en lokaal, dus
// zoeken werkt ook zonder netwerk. Debounce minimaal 300 ms en geen zoekopdracht
// onder de twee tekens (docs/limieten-en-misbruik.md sectie 4): hier is het
// filter lokaal, maar dezelfde regels houden het gedrag gelijk aan de afspraak.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { ARTIKELEN, ONDERWERPEN } from "@/features/content/data/artikelen";
import { leesInstellingen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Naslagwerk",
  ondertitel: "Betrouwbare kennis, altijd met bron.",
  zoekPlaceholder: "Zoek een onderwerp...",
  zoekLabel: "Zoek in het naslagwerk",
  onderwerpen: "Onderwerpen",
  artikelen: "Artikelen",
  artikelenNote: "Alles uit de bibliotheek van MIND.",
  nietsGevondenTitel: "Niets gevonden",
  nietsGevonden: "Geen artikelen gevonden. Probeer een ander woord of onderwerp.",
  nietsGevondenVoor: "Geen artikelen gevonden voor “{term}”. Probeer een ander woord of onderwerp.",
  wisZoekopdracht: "Wis de zoekopdracht",
  bronMind: "BRON: MIND",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Reference library",
    ondertitel: "Reliable knowledge, always with a source.",
    zoekPlaceholder: "Search a topic...",
    zoekLabel: "Search the reference library",
    onderwerpen: "Topics",
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

  const resultaten = ARTIKELEN.filter((a) => {
    if (onderwerp && a.onderwerp !== onderwerp) return false;
    if (!zoekterm) return true;
    return (
      a.titel.toLowerCase().includes(zoekterm) ||
      a.onderwerp.toLowerCase().includes(zoekterm) ||
      a.blokken.some((b) => b.tekst.toLowerCase().includes(zoekterm))
    );
  }).sort((a, b) => gekozen(b.onderwerp) - gekozen(a.onderwerp));

  // Jouw onderwerpen als eerste chips, zodat "waar wil je aan werken" hier
  // zichtbaar terugkomt.
  const onderwerpen = [...ONDERWERPEN].sort((a, b) => gekozen(b) - gekozen(a));

  return (
    <ScreenCanvas state="default" metNavRuimte terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle" kleur="secondary">{t("ondertitel")}</AppText>
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

      <ContentSection title={t("onderwerpen")}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          {onderwerpen.map((o) => (
            <Chip key={o} label={o} active={onderwerp === o} onPress={() => zetOnderwerp(onderwerp === o ? null : o)} />
          ))}
        </View>
      </ContentSection>

      <ContentSection title={t("artikelen")} note={t("artikelenNote")}>
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
            {resultaten.map((a) => (
              <ContentCard
                key={a.slug}
                tone="white"
                label={t("bronMind")}
                title={a.titel}
                onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
              >
                <AppText rol="bodySmall" kleur="secondary">{a.onderwerp}</AppText>
              </ContentCard>
            ))}
          </ContentGrid>
        )}
      </ContentSection>
    </ScreenCanvas>
  );
}
