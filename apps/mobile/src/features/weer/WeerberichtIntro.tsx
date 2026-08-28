// De introductie boven het landelijke weerbericht: wat is dit, waar komt het
// vandaan, en een info-icoon dat een uitgebreidere uitleg in een popup opent.
//
// De INTRO-zinnen zijn een VOORSTEL totdat ze in scope.md zijn bevestigd,
// dezelfde afspraak als in teksten.ts. De uitgebreide uitleg hergebruikt
// woordelijk de copy van het onboardingscherm Draag anoniem bij
// (apps/mobile/src/app/(onboarding)/anonimiteit.tsx): die is al de vastgelegde
// formulering van hoe de anonimisering werkt, dus hier geen tweede variant.
//
// Het info-icoon komt uit infoIcoon.tsx, zie de toelichting daar.

import { useState } from "react";
import { Pressable, View } from "react-native";

import { radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Card } from "@mind/ui/components/Card";

import { InfoIcoon } from "./infoIcoon";
import { InfoPopup } from "./InfoPopup";

// VOORSTEL: intro in gewone taal, twee korte zinnen (HERKOMST.md: body copy
// zelden meer dan twee zinnen per kaart). Geen oordeel, collectieve framing.
// Ook de bron voor de uitleg op het anonimiteitsscherm, zie
// WatIsHetWeerbericht.tsx: een keer vastgelegd, overal dezelfde zinnen.
export const INTRO =
  "Dit is het mentale weer van Nederland: alle check-ins van vandaag, anoniem bij elkaar opgeteld. " +
  "Zo zie je dat jouw weer er nooit alleen voor staat.";

const UITLEG_KOP = "Hoe werkt dit?";

// De canonieke uitleg van de anonimisering. Het onboardingscherm Anoniem
// meetellen importeert deze twee zinnen; er is bewust een bron en geen kopie.
export const UITLEG_ANONIMITEIT =
  "Je check-in wordt op je telefoon omgezet in een weerbeeld. Alleen dat weerbeeld telt anoniem " +
  "mee in een landelijk totaal: zonder naam, zonder account, zonder tijdstip.";

export const UITLEG_DETAIL =
  "Je antwoorden op de vier vragen verlaten je telefoon nooit. Je kunt dit altijd wijzigen in " +
  "Instellingen.";

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
          onPress={() => zetOpen(true)}
          hitSlop={space[3]}
          style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1,
            borderRadius: radius.pill,
            marginTop: space[1],
          })}
        >
          <InfoIcoon />
        </Pressable>
      </View>

      <InfoPopup zichtbaar={open} kop={UITLEG_KOP} onSluiten={() => zetOpen(false)}>
        <AppText rol="body">{UITLEG_ANONIMITEIT}</AppText>
        <AppText rol="bodySmall" kleur="secondary">
          {UITLEG_DETAIL}
        </AppText>
      </InfoPopup>
    </Card>
  );
}
