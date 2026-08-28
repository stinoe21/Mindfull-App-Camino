// Voorkeuren
//
// Keuze-chips, meervoudige selectie (HERKOMST.md, System states). Overslaan
// mag: dit is geen essentiele stap (productprincipes 6). De keuze blijft
// alleen op het toestel, zie het funnel-voorstel in docs/datamodel.md.

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Chip } from "@mind/ui/components/Chip";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { bewaarInstellingen, VOORKEUR_OPTIES } from "@/features/profiel/instellingen";

export default function Voorkeuren() {
  const router = useRouter();
  const [gekozen, zetGekozen] = useState<string[]>([]);

  const wissel = (optie: string) => {
    zetGekozen((huidig) => (huidig.includes(optie) ? huidig.filter((o) => o !== optie) : [...huidig, optie]));
  };

  const verder = async (bewaren: boolean) => {
    if (bewaren) await bewaarInstellingen({ voorkeuren: gekozen });
    router.push("/anonimiteit");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">Waar wil je aan werken?</AppText>
        <AppText rol="subtitle" kleur="secondary">Kies wat past. Dit blijft op je telefoon.</AppText>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {VOORKEUR_OPTIES.map((o) => (
          <Chip key={o} label={o} active={gekozen.includes(o)} onPress={() => wissel(o)} />
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <Button label="Verder" fullWidth onPress={() => verder(true)} />
      <Button label="Sla over" variant="link" fullWidth onPress={() => verder(false)} />
    </ScreenCanvas>
  );
}
