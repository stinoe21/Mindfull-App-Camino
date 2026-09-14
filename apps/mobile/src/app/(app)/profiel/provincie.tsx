// Profiel: provincie
//
// Voor het mentale weer per provincie op Home. De provincie komt alleen via
// de locatie van het toestel, gevraagd in de onboarding bij de toestemming
// voor het weerbericht (sinds 13 september 2026; de coördinaten blijven op
// het toestel, zie features/weer/locatie.ts). Zelf een provincie kiezen kan
// sinds 14 september 2026 (Stijn) niet meer: een vrije keuze maakte het te
// makkelijk om het beeld van een provincie te sturen, zie docs/datamodel.md.
// Wat hier nog kan: de locatie (opnieuw) laten bepalen na een weigering, of
// liever niet per provincie meetellen. Dan telt de check-in landelijk mee als
// onbekend. Elke keuze wordt direct bewaard.

import { useEffect, useState } from "react";
import { View } from "react-native";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";
import { bepaalProvincieViaLocatie } from "@/features/weer/locatie";
import { isProvincie, PROVINCIE_NAMEN } from "@/features/weer/provincies";

const nl = {
  titel: "Provincie",
  uitleg: "Voor het mentale weer per provincie. De app bepaalt hem via je locatie; die blijft op je telefoon, alleen de provincie telt mee.",
  viaLocatie: "Via je locatie: {provincie}",
  gebruikLocatie: "Gebruik mijn locatie",
  opnieuw: "Opnieuw bepalen",
  lieverNiet: "Liever niet per provincie",
  geweigerd: "De app heeft geen toegang tot je locatie. Je kunt dat aanzetten in de instellingen van je telefoon.",
  buiten: "We vinden geen Nederlandse provincie bij je locatie.",
  mislukt: "Je locatie kon niet worden bepaald. Probeer het later opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Province",
    uitleg: "For the mental weather per province. The app determines it from your location; that stays on your phone, only the province counts.",
    viaLocatie: "From your location: {provincie}",
    gebruikLocatie: "Use my location",
    opnieuw: "Determine again",
    lieverNiet: "Rather not per province",
    geweigerd: "The app has no access to your location. You can allow it in your phone's settings.",
    buiten: "We can't find a Dutch province at your location.",
    mislukt: "Your location couldn't be determined. Try again later.",
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

  // Liever niet: de provincie gaat weg en de check-in telt landelijk mee.
  // Dit is de enige keuze zonder locatie, en die kan het beeld niet sturen.
  const lieverNiet = async () => {
    zetProvincie(null);
    zetViaLocatie(false);
    zetMelding(null);
    await bewaarInstellingen({ provincie: null, provincieViaLocatie: false });
  };

  const bepaald = viaLocatie && isProvincie(provincie);

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      {bepaald ? (
        <Card tone="primary">
          <AppText rol="bodyEmphasis">{t("viaLocatie").replace("{provincie}", PROVINCIE_NAMEN[provincie])}</AppText>
          <View style={{ alignItems: "flex-start" }}>
            <Button label={t("opnieuw")} variant="link" bezig={bezig} onPress={locatie} />
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

      {bepaald ? (
        <View style={{ alignItems: "flex-start" }}>
          <Button label={t("lieverNiet")} variant="link" onPress={lieverNiet} />
        </View>
      ) : null}
    </KeuzePagina>
  );
}
