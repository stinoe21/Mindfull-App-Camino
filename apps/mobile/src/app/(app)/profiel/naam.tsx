// Profiel: voornaam
//
// Alleen voor de begroeting op Home. Blijft op je telefoon; er is geen
// naamveld in het datamodel.

import { useEffect, useState } from "react";
import { TextInput } from "react-native";

import { colors, space, type } from "@mind/ui";
import { Card } from "@mind/ui/components/Card";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen, NAAM_MAX, schoonNaam } from "@/features/profiel/instellingen";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "Voornaam",
  uitleg: "Alleen voor de begroeting. Blijft op je telefoon.",
  placeholder: "Optioneel",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: { titel: "First name", uitleg: "Only for the greeting. Stays on your phone.", placeholder: "Optional" },
};

export default function ProfielNaam() {
  const t = useVertaling(teksten);
  const [naam, zetNaam] = useState("");

  useEffect(() => {
    leesInstellingen().then((i) => zetNaam(i.naam));
  }, []);

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <Card tone="white" style={{ paddingVertical: space[2] }}>
        <TextInput
          value={naam}
          onChangeText={zetNaam}
          onEndEditing={() => bewaarInstellingen({ naam: schoonNaam(naam) })}
          placeholder={t("placeholder")}
          placeholderTextColor={colors.textSecondary}
          maxLength={NAAM_MAX}
          autoCapitalize="words"
          autoCorrect={false}
          autoFocus
          returnKeyType="done"
          style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
          accessibilityLabel={t("titel")}
        />
      </Card>
    </KeuzePagina>
  );
}
