// De introductie boven het landelijke weerbericht: wat is dit, waar komt het
// vandaan, en een info-icoon dat een uitgebreidere uitleg uitklapt.
//
// De INTRO-zinnen zijn een VOORSTEL totdat ze in scope.md zijn bevestigd,
// dezelfde afspraak als in teksten.ts. De uitgebreide uitleg hergebruikt
// woordelijk de copy van het onboardingscherm Anoniem meetellen
// (apps/mobile/src/app/(onboarding)/anonimiteit.tsx): die is al de vastgelegde
// formulering van hoe de anonimisering werkt, dus hier geen tweede variant.
//
// Het info-icoon is hier getekend en staat bewust niet in de assetbibliotheek:
// die is gesloten (CLAUDE.md sectie 6) en de afwijking is expliciet
// goedgekeurd in de taak van 26 augustus 2026. Komt er later een icoon uit
// Figma, dan vervangt dat dit blok.

import { useState } from "react";
import { Pressable, View } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

import { colors, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Card } from "@mind/ui/components/Card";

// VOORSTEL: intro in gewone taal, twee korte zinnen (HERKOMST.md: body copy
// zelden meer dan twee zinnen per kaart). Geen oordeel, collectieve framing.
const INTRO =
  "Dit is het mentale weer van Nederland: alle check-ins van vandaag, anoniem bij elkaar opgeteld. " +
  "Zo zie je dat jouw weer er nooit alleen voor staat.";

const UITLEG_KOP = "Hoe werkt dit?";

// Woordelijk uit het onboardingscherm Anoniem meetellen, niet parafraseren.
const UITLEG_ANONIMITEIT =
  "Je check-in wordt op je telefoon omgezet in een weerbeeld. Alleen dat weerbeeld telt anoniem " +
  "mee in een landelijk totaal: zonder naam, zonder account, zonder tijdstip.";

const UITLEG_DETAIL =
  "Je antwoorden op de vier vragen verlaten je telefoon nooit. Je kunt dit altijd wijzigen in " +
  "Instellingen.";

// Cirkel met een i, in de brandkleur. Maten op de 4px-schaal: 20 buitenmaat,
// zodat het icoon optisch meeloopt met bodySmall ernaast.
function InfoIcoon() {
  const maat = space[5];
  return (
    <Svg width={maat} height={maat} viewBox="0 0 20 20" fill="none">
      <Circle cx={10} cy={10} r={9} stroke={colors.brandDefault} strokeWidth={1.5} />
      <Circle cx={10} cy={6} r={1.25} fill={colors.brandDefault} />
      <Rect x={9} y={8.75} width={2} height={6} rx={1} fill={colors.brandDefault} />
    </Svg>
  );
}

export function WeerberichtIntro() {
  const [open, zetOpen] = useState(false);

  return (
    <Card tone="primary">
      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: space[3] }}>
        <AppText rol="bodySmall" style={{ flex: 1 }}>
          {INTRO}
        </AppText>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={UITLEG_KOP}
          accessibilityState={{ expanded: open }}
          onPress={() => zetOpen(!open)}
          hitSlop={space[2]}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
            borderRadius: radius.pill,
            marginTop: space[1],
          })}
        >
          <InfoIcoon />
        </Pressable>
      </View>

      {open ? (
        <View style={{ gap: space[2], marginTop: space[1] }}>
          <AppText rol="bodyEmphasis">{UITLEG_KOP}</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {UITLEG_ANONIMITEIT}
          </AppText>
          <AppText rol="bodySmall" kleur="secondary">
            {UITLEG_DETAIL}
          </AppText>
        </View>
      ) : null}
    </Card>
  );
}
