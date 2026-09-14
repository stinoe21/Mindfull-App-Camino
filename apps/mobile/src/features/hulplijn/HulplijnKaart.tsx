// De vaste kaart naar de MIND Hulplijn. De route naar echte hulp is
// systeembreed bereikbaar (productprincipes 9). De tekst is woordelijk van
// mindhulplijn.nl (10 september 2026): de Hulplijn is voor advies en hulp,
// zie hulplijn.tsx. Er wordt hier niets aan hulpteksten of nummers verzonnen.
//
// Sinds 14 september 2026 (Stijn): de kaart zegt boven de naam dat je een
// gesprek met een mens krijgt, en noemt het adviesgesprek en de tijden.
// Een link naar de Hulplijn zag er hetzelfde uit als een link naar meer
// tekst, terwijl contact met een medewerker iets heel anders is dan verder
// lezen. Daarom staat de Hulplijn nergens meer als losse tekstlink, alleen
// als deze kaart, los van de inhoudsknoppen.

import { useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

export function HulplijnKaart() {
  const router = useRouter();
  return (
    <Card tone="sun" style={{ gap: space[3] }}>
      <View style={{ gap: space[1] }}>
        <AppText rol="labelOverline" kleur="brand">PRATEN MET IEMAND VAN MIND</AppText>
        <AppText rol="h3">MIND Hulplijn</AppText>
      </View>
      <AppText rol="body">
        Deskundig, anoniem en gratis advies. Loop je even vast of maak je je zorgen om iemand? Wij denken graag met je mee.
      </AppText>
      <AppText rol="bodySmall" kleur="secondary">
        Gratis adviesgesprek van 30 minuten. Bereikbaar van maandag tot en met vrijdag van 9:00 tot 21:00 uur.
      </AppText>
      {/* Primair, net als op de Hulplijn-pagina zelf: dit is het contactmoment
          dat er op een zware dag toe doet (designaudit 29 augustus 2026). */}
      <Button label="Bel, app of chat" onPress={() => router.push("/hulplijn")} />
    </Card>
  );
}
