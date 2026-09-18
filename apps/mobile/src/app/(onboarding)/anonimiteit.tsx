// Anonimiteit en toestemming
//
// De kop zegt waar het over gaat, het mentale weer van Nederland, en één
// zin wat dat is. Tot 17 september 2026 stond hier "Tel je mee?" met de
// zinnen "Niemand kan zien wat jij hebt ingevuld." en "Je kunt dit altijd
// wijzigen in Profiel."; Stijn vond dat vaag en dubbel met de uitleg van de
// toestemming zelf, waar het intrekken al in staat. Twee apart intrekbare
// toestemmingen (docs/privacy-besluiten.md). De toestemming voor het
// weerbericht staat in ToestemmingKeuze (Paul, 27 augustus 2026; in gewone
// taal sinds 17 september 2026), als expliciete keuze
// ja of nee zonder standaardwaarde. Sinds 10 september 2026 (Stijn) zijn de
// twee toestemmingen één formulier met dezelfde aanvinkvakjes (KeuzeVak);
// daarvoor was het een omrande keuzerij naast een systeemschakelaar.
// De voorwaarden staan sinds 13 september 2026 bij het account (inloggen.tsx),
// dus hier is nog één vraag over; die heeft geen Skip (productprincipes 6).
//
// De provincie hoort bij deze stap (Stijn, 13 september 2026): wie ja zegt
// op het weerbericht, krijgt bij Klaar de locatievraag van het systeem, en
// de app bepaalt daaruit de provincie, op het toestel
// (features/weer/locatie.ts). Geen eigen scherm en geen keuze die je later
// in de instellingen moet aanzetten: dan doet niemand dat. Weigeren is
// prima: dan telt de check-in als "onbekend". Zelf een provincie kiezen kan
// niet (14 september 2026, zie docs/datamodel.md). Wie nee zegt op het
// weerbericht, krijgt de locatievraag niet: dan is er geen provincie nodig.
//
// De toestemming is hier het enige dat telt. Lukt de positie zelf even niet
// (geen bereik, of een simulator zonder locatie), dan onthouden we toch dat
// de locatie mag: de check-in bepaalt de provincie sowieso opnieuw.

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";

import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";
import { bewaarInstellingen } from "@/features/profiel/instellingen";
import { ToestemmingKeuze } from "@/features/profiel/ToestemmingKeuze";
import { bepaalProvincieViaLocatie } from "@/features/weer/locatie";

export default function Anonimiteit() {
  const router = useRouter();
  const [weerbericht, zetWeerbericht] = useState<boolean | null>(null);
  const [bezig, zetBezig] = useState(false);
  const compleet = weerbericht !== null;

  const klaar = async () => {
    zetBezig(true);
    // Met ja op het weerbericht: nu de locatie vragen, in de context van de
    // toestemming die er net is gegeven. Elke uitkomst is goed; zonder
    // provincie telt de check-in landelijk mee.
    let provincie: string | null = null;
    let provincieViaLocatie = false;
    if (weerbericht === true) {
      const uitkomst = await bepaalProvincieViaLocatie();
      provincieViaLocatie = uitkomst.status !== "geweigerd";
      if (uitkomst.status === "ok") provincie = uitkomst.provincie;
    }
    await bewaarInstellingen({
      consentWeerbericht: weerbericht === true,
      provincie,
      provincieViaLocatie,
      onboardingAfgerond: true,
    });
    zetBezig(false);
    router.dismissAll();
    router.replace("/dashboard");
  };

  return (
    <OnboardingScherm
      stap={5}
      titel="Het mentale weer van Nederland"
      uitleg="Een anoniem totaal van hoe Nederland zich voelt. Jij kiest of jouw weer meetelt."
    >
      {/* De uitleg over anonimiteit stond hier ook nog eens los boven de
          toestemming; die staat op het mentale weer zelf, met de infoknop
          (ontdubbeling, 1 september 2026). */}
      <View style={{ gap: space[2] }}>
        <ToestemmingKeuze waarde={weerbericht} onKies={zetWeerbericht} />
        {/* Pas na ja: wat er bij Klaar gebeurt, zodat de locatievraag van het
            systeem niet uit de lucht komt vallen. */}
        {weerbericht === true ? (
          <AppText rol="bodySmall" kleur="secondary">
            Bij Klaar vraagt je telefoon om je locatie. Alleen je provincie telt mee.
          </AppText>
        ) : null}
      </View>

      <View style={{ flex: 1 }} />
      <View style={{ gap: space[3] }}>
        <Button label="Klaar" fullWidth disabled={!compleet} bezig={bezig} onPress={klaar} />
        {!compleet ? (
          <AppText rol="bodySmall" kleur="secondary" centreer>
            Nee is ook prima. De app werkt dan net zo goed.
          </AppText>
        ) : null}
      </View>
    </OnboardingScherm>
  );
}
