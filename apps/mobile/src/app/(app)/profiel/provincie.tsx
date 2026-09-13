// Profiel: provincie
//
// Voor het mentale weer per provincie op Home. Vrijwillig, en de app vraagt
// nooit je locatie; zonder keuze telt je check-in landelijk mee als onbekend.

import { useEffect, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { Chip } from "@mind/ui/components/Chip";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";
import { isProvincie, PROVINCIE_CODES, PROVINCIE_NAMEN } from "@/features/weer/provincies";

const nl = {
  titel: "Provincie",
  uitleg: "Voor het mentale weer per provincie. Vrijwillig; de app vraagt nooit je locatie.",
  geen: "Liever niet",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: { titel: "Province", uitleg: "For the mental weather per province. Voluntary; the app never asks for your location.", geen: "Rather not" },
};

export default function ProfielProvincie() {
  const t = useVertaling(teksten);
  const [provincie, zetProvincie] = useState<string | null>(null);

  useEffect(() => {
    leesInstellingen().then((i) => zetProvincie(i.provincie));
  }, []);

  const kies = async (code: string | null) => {
    zetProvincie(code);
    await bewaarInstellingen({ provincie: code });
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
        <Chip label={t("geen")} active={!isProvincie(provincie)} onPress={() => kies(null)} />
        {PROVINCIE_CODES.map((code) => (
          <Chip key={code} label={PROVINCIE_NAMEN[code]} active={provincie === code} onPress={() => kies(code)} />
        ))}
      </View>
    </KeuzePagina>
  );
}
