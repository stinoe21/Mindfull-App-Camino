// De vaste kaart naar de MIND Hulplijn. De route naar echte hulp is
// systeembreed bereikbaar (productprincipes 9). De tekst is woordelijk van
// mindhulplijn.nl (10 september 2026): de Hulplijn is voor advies en hulp,
// zie hulplijn.tsx. Er wordt hier niets aan hulpteksten of nummers verzonnen.

import { useRouter } from "expo-router";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

export function HulplijnKaart() {
  const router = useRouter();
  return (
    <Card tone="sun">
      <AppText rol="h3">MIND Hulplijn</AppText>
      <AppText rol="bodySmall" kleur="secondary">
        Deskundig, anoniem en gratis advies. Loop je even vast of maak je je zorgen om iemand? Wij denken graag met je mee.
      </AppText>
      {/* Primair, net als op de Hulplijn-pagina zelf: dit is het contactmoment
          dat er op een zware dag toe doet (designaudit 29 augustus 2026). */}
      <Button label="Bel, app of chat" onPress={() => router.push("/hulplijn")} />
    </Card>
  );
}
