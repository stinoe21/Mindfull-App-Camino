// Profiel: provincie
//
// Voor het mentale weer per provincie op Home. De provincie komt normaal via
// de locatie van het toestel, gevraagd in de onboarding bij de toestemming
// voor het weerbericht (sinds 13 september 2026; de coördinaten blijven op
// het toestel, zie features/weer/locatie.ts). Dit is de uitwijk: opnieuw
// bepalen na een weigering, of zelf kiezen, of helemaal niet: dan telt de
// check-in landelijk mee als onbekend. Elke keuze wordt direct bewaard.

import { useEffect, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";
import { bepaalProvincieViaLocatie } from "@/features/weer/locatie";
import { isProvincie, PROVINCIE_CODES, PROVINCIE_NAMEN } from "@/features/weer/provincies";

const nl = {
  titel: "Provincie",
  uitleg: "Voor het mentale weer per provincie. De app bepaalt hem via je locatie; die blijft op je telefoon, alleen de provincie telt mee.",
  viaLocatie: "Via je locatie: {provincie}",
  gebruikLocatie: "Gebruik mijn locatie",
  opnieuw: "Opnieuw bepalen",
  ofZelf: "Of kies zelf",
  geen: "Liever niet",
  geweigerd: "De app heeft geen toegang tot je locatie. Je kunt dat aanzetten in de instellingen van je telefoon, of hieronder zelf kiezen.",
  buiten: "We vinden geen Nederlandse provincie bij je locatie.",
  mislukt: "Je locatie kon niet worden bepaald. Probeer het later opnieuw of kies zelf.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Province",
    uitleg: "For the mental weather per province. The app determines it from your location; that stays on your phone, only the province counts.",
    viaLocatie: "From your location: {provincie}",
    gebruikLocatie: "Use my location",
    opnieuw: "Determine again",
    ofZelf: "Or choose yourself",
    geen: "Rather not",
    geweigerd: "The app has no access to your location. You can allow it in your phone's settings, or choose below.",
    buiten: "We can't find a Dutch province at your location.",
    mislukt: "Your location couldn't be determined. Try again later or choose yourself.",
  },
};

export default function ProfielProvincie() {
  const t = useVertaling(teksten);
  const [provincie, zetProvincie] = useState<string | null>(null);
  const [viaLocatie, zetViaLocatie] = useState(false);
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  useEffect(() => {
    leesInstellingen().then((i) => {
      zetProvincie(i.provincie);
      zetViaLocatie(i.provincieViaLocatie);
    });
  }, []);

  const locatie = async () => {
    zetBezig(true);
    zetMelding(null);
    const uitkomst = await bepaalProvincieViaLocatie();
    zetBezig(false);
    if (uitkomst.status === "ok") {
      zetProvincie(uitkomst.provincie);
      zetViaLocatie(true);
      await bewaarInstellingen({ provincie: uitkomst.provincie, provincieViaLocatie: true });
      return;
    }
    zetMelding(uitkomst.status === "geweigerd" ? t("geweigerd") : uitkomst.status === "buiten-nederland" ? t("buiten") : t("mislukt"));
  };

  const kies = async (code: string | null) => {
    zetProvincie(code);
    zetViaLocatie(false);
    zetMelding(null);
    await bewaarInstellingen({ provincie: code, provincieViaLocatie: false });
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      {viaLocatie && isProvincie(provincie) ? (
        <Card tone="primary">
          <AppText rol="bodyEmphasis">{t("viaLocatie").replace("{provincie}", PROVINCIE_NAMEN[provincie])}</AppText>
          <View style={{ alignItems: "flex-start" }}>
            <Button label={t("opnieuw")} variant="secondary" bezig={bezig} onPress={locatie} />
          </View>
        </Card>
      ) : (
        <Button label={t("gebruikLocatie")} fullWidth bezig={bezig} onPress={locatie} />
      )}

      {melding ? (
        <Card tone="white">
          <AppText rol="bodySmall">{melding}</AppText>
        </Card>
      ) : null}

      <View style={{ gap: space[2] }}>
        <AppText rol="labelOverline" kleur="secondary">{t("ofZelf").toUpperCase()}</AppText>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          <Chip label={t("geen")} active={!isProvincie(provincie)} onPress={() => kies(null)} />
          {PROVINCIE_CODES.map((code) => (
            <Chip key={code} label={PROVINCIE_NAMEN[code]} active={!viaLocatie && provincie === code} onPress={() => kies(code)} />
          ))}
        </View>
      </View>
    </KeuzePagina>
  );
}
