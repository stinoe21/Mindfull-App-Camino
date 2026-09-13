// De vaste vorm van een keuzepagina onder Profiel: terugknop, titel, één
// regel uitleg en daaronder de keuze zelf. Elke keuze wordt direct bewaard;
// er is geen opslaan-knop, de terugknop is klaar. Gebruikt door naam,
// onderwerpen, provincie, taal en toestemmingen (13 september 2026).

import type { ReactNode } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";

type Props = {
  titel: string;
  uitleg?: string;
  children: ReactNode;
};

export function KeuzePagina({ titel, uitleg, children }: Props) {
  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{titel}</AppText>
        {uitleg ? <AppText rol="subtitle">{uitleg}</AppText> : null}
      </View>
      {children}
    </ScreenCanvas>
  );
}
