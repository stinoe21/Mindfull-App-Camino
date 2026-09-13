// Profiel: onderwerpen
//
// Dezelfde negen onderwerpen als in de onboarding; ze bepalen alleen de
// volgorde van Houvast en de tips op Home, nooit wat er te zien is.

import { useEffect, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { Chip } from "@mind/ui/components/Chip";
import { kaartKleurVoor } from "@mind/ui/components/VliegerOnderwerp";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen, VOORKEUR_OPTIES } from "@/features/profiel/instellingen";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "Onderwerpen",
  uitleg: "Wat je hier kiest zie je als eerste. Alles blijft te vinden.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: { titel: "Topics", uitleg: "What you choose here comes first. Everything stays available." },
};

export default function ProfielOnderwerpen() {
  const t = useVertaling(teksten);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);

  useEffect(() => {
    leesInstellingen().then((i) => zetVoorkeuren(i.voorkeuren));
  }, []);

  const wissel = async (optie: string) => {
    const nieuw = voorkeuren.includes(optie) ? voorkeuren.filter((v) => v !== optie) : [...voorkeuren, optie];
    zetVoorkeuren(nieuw);
    await bewaarInstellingen({ voorkeuren: nieuw });
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        {VOORKEUR_OPTIES.map((o) => (
          <Chip key={o} label={o} active={voorkeuren.includes(o)} kleur={kaartKleurVoor(o)} onPress={() => wissel(o)} />
        ))}
      </View>
    </KeuzePagina>
  );
}
