// Naslagwerk
//
// De kennisbank van Mind, met zoeken. De content is gebundeld en lokaal, dus
// zoeken werkt ook zonder netwerk. Debounce minimaal 300 ms en geen zoekopdracht
// onder de twee tekens (docs/limieten-en-misbruik.md sectie 4): hier is het
// filter lokaal, maar dezelfde regels houden het gedrag gelijk aan de afspraak.

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { ARTIKELEN, ONDERWERPEN } from "@/features/content/data/artikelen";

export default function Naslagwerk() {
  const router = useRouter();
  const [invoer, zetInvoer] = useState("");
  const [zoekterm, zetZoekterm] = useState("");
  const [onderwerp, zetOnderwerp] = useState<string | null>(null);

  // Debounce van 300 ms; onder de twee tekens zoeken we niet.
  useEffect(() => {
    const timer = setTimeout(() => {
      zetZoekterm(invoer.trim().length >= 2 ? invoer.trim().toLowerCase() : "");
    }, 300);
    return () => clearTimeout(timer);
  }, [invoer]);

  const resultaten = ARTIKELEN.filter((a) => {
    if (onderwerp && a.onderwerp !== onderwerp) return false;
    if (!zoekterm) return true;
    return (
      a.titel.toLowerCase().includes(zoekterm) ||
      a.onderwerp.toLowerCase().includes(zoekterm) ||
      a.blokken.some((b) => b.tekst.toLowerCase().includes(zoekterm))
    );
  });

  return (
    <ScreenCanvas state="default" metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Naslagwerk</AppText>
        <AppText rol="subtitle" kleur="secondary">Betrouwbare kennis, altijd met bron.</AppText>
      </View>

      <Card tone="outline" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={invoer}
          onChangeText={zetInvoer}
          placeholder="Zoek een onderwerp..."
          placeholderTextColor={colors.textSecondary}
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel="Zoek in het naslagwerk"
        />
      </Card>

      <ContentSection title="Onderwerpen">
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          {ONDERWERPEN.map((o) => (
            <Chip key={o} label={o} active={onderwerp === o} onPress={() => zetOnderwerp(onderwerp === o ? null : o)} />
          ))}
        </View>
      </ContentSection>

      <ContentSection title="Artikelen" note={"Alles uit de bibliotheek van MIND."}>
        {resultaten.length === 0 ? (
          <Card tone="outline">
            <AppText rol="h3">Niets gevonden</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {"Geen artikelen gevonden" + (zoekterm ? " voor “" + zoekterm + "”" : "") + ". Probeer een ander woord of onderwerp."}
            </AppText>
            <Button
              label="Wis de zoekopdracht"
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
                label="BRON: MIND"
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
