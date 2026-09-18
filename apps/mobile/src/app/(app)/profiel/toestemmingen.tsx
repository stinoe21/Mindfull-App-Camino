// Profiel: toestemmingen
//
// De twee apart intrekbare toestemmingen op een eigen pagina (Stijn,
// 13 september 2026), zodat Profiel zelf kort blijft en de tekst hier de
// ruimte krijgt. De consent-tekst staat in ToestemmingKeuze en is afgestemd
// met Paul (docs/privacy-besluiten.md); hij staat bewust buiten de vertaallaag
// en is dus Nederlands (issue #47, scope.md). Elke keuze wordt direct bewaard.

import { useEffect, useState } from "react";
import { View } from "react-native";

import { colors, space } from "@mind/ui";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { meet } from "@/features/meten/meet";
import { bewaarInstellingen, leesInstellingen, STANDAARD, type Instellingen } from "@/features/profiel/instellingen";
import { InstellingenGroep } from "@/features/profiel/InstellingenRij";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";
import { ToestemmingKeuze } from "@/features/profiel/ToestemmingKeuze";

const nl = {
  titel: "Toestemmingen",
  uitleg: "Je kunt elke toestemming hier apart geven of intrekken.",
  groep: "Jouw keuzes",
  voorwaarden: "Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Consents",
    uitleg: "You can give or withdraw each consent here separately.",
    groep: "Your choices",
    voorwaarden: "I accept the terms and understand that this app is not a care service",
  },
};

export default function ProfielToestemmingen() {
  const t = useVertaling(teksten);
  const [inst, zetInst] = useState<Instellingen>(STANDAARD);

  useEffect(() => {
    leesInstellingen().then(zetInst);
  }, []);

  const wijzig = async (wijziging: Partial<Instellingen>) => {
    if (wijziging.consentWeerbericht === false && inst.consentWeerbericht) meet({ naam: "weather_consent_withdrawn" });
    zetInst(await bewaarInstellingen(wijziging));
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <InstellingenGroep titel={t("groep")}>
        <View style={{ paddingVertical: space[3], borderBottomWidth: 1, borderBottomColor: colors.borderDefault }}>
          <ToestemmingKeuze waarde={inst.consentWeerbericht} onKies={(v) => wijzig({ consentWeerbericht: v })} />
        </View>
        <View style={{ paddingVertical: space[2] }}>
          <KeuzeVak label={t("voorwaarden")} gekozen={inst.consentVoorwaarden} onPress={() => wijzig({ consentVoorwaarden: !inst.consentVoorwaarden })} />
        </View>
      </InstellingenGroep>
    </KeuzePagina>
  );
}
