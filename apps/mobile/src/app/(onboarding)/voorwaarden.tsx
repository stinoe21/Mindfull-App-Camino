// Voorwaarden
//
// De pagina achter het vinkje "Ik accepteer de voorwaarden" op het
// accountscherm (Stijn, 17 september 2026: "je moet de voorwaarden kunnen
// zien"). Tot die dag was er niets om aan te klikken.
//
// LET OP: dit is geen juridische tekst. De algemene voorwaarden schrijft MIND
// (docs/privacy-besluiten.md, "Algemene voorwaarden"); die tekst is er nog
// niet. Hier staat in gewone taal alleen wat al is besloten en in de docs
// staat: geen hulpverlening, 16 jaar en ouder, anoniem meetellen alleen met
// toestemming, wat is meegeteld blijft staan, en je account verwijderen kan
// altijd. Komt de tekst van MIND, dan vervangt die deze pagina.
//
// Alleen Nederlands, net als de zin bij het vinkje zelf.

import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";

import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { OnboardingScherm } from "@/features/onboarding/OnboardingScherm";

const PUNTEN: { kop: string; tekst: string }[] = [
  {
    kop: "Geen hulpverlening",
    tekst: "Deze app is geen hulpverlening en geen vervanging van professionele hulp.",
  },
  {
    kop: "Vanaf 16 jaar",
    tekst: "Weertje is voor iedereen van 16 jaar en ouder.",
  },
  {
    kop: "Meetellen is een keuze",
    tekst:
      "Je weer telt alleen mee in het mentale weer van Nederland als je daar toestemming voor geeft. Wat al is meegeteld blijft in het totaal staan, en daar staat niets in dat naar jou wijst.",
  },
  {
    kop: "Stoppen kan altijd",
    tekst: "Je kunt je account op elk moment verwijderen via Profiel.",
  },
];

export default function Voorwaarden() {
  return (
    <OnboardingScherm titel="Voorwaarden">
      {PUNTEN.map((p) => (
        <View key={p.kop} style={{ gap: space[1] }}>
          <AppText rol="bodyEmphasis">{p.kop}</AppText>
          <AppText rol="body" kleur="secondary">
            {p.tekst}
          </AppText>
        </View>
      ))}
      <AppText rol="bodySmall" kleur="secondary">
        De volledige voorwaarden en de privacyverklaring van MIND volgen.
      </AppText>
      <HulplijnKaart />
    </OnboardingScherm>
  );
}
