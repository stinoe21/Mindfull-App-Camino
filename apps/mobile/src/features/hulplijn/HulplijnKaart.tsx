// De vaste kaart naar de MIND Hulplijn. De route naar echte hulp is
// systeembreed bereikbaar (productprincipes 9). De tekst komt uit het
// design system (prototype, Hulplijn-kaart); er wordt hier niets aan
// hulpteksten of nummers verzonnen.

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
        Kom gratis met onze professionals in contact. Ook via WhatsApp.
      </AppText>
      <Button label="Kom in contact" variant="secondary" onPress={() => router.push("/hulplijn")} />
    </Card>
  );
}
