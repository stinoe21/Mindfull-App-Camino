// De kaart naar 113 Zelfmoordpreventie, voor de ene plek waar de app hem uit
// zichzelf toont: de zelftest, bij de vraag over gedachten aan de dood
// (features/content/zelftests.ts).
//
// Er staat hier geen eigen hulptekst. De zin en het nummer zijn woordelijk die
// van de Hulplijn-pagina (app/hulplijn.tsx, van mindhulplijn.nl), en het
// kanaal komt uit kanalen.ts. De definitieve formulering ligt nog bij MIND
// (besluit Stijn, 18 september 2026: nu bouwen met wat er al staat).
//
// Rustig van toon, in dezelfde kaart als de Hulplijn: de app oordeelt niet
// over het antwoord, hij laat alleen zien waar je terecht kunt.

import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { ANDERE, openKanaal } from "@/features/hulplijn/kanalen";

const KANAAL_113 = ANDERE.find((k) => k.url === "tel:08000113");

export function HulpBij113() {
  const [lukteNiet, zetLukteNiet] = useState(false);
  if (!KANAAL_113) return null;
  const kanaal = KANAAL_113;
  return (
    <Card tone="sun" style={{ gap: space[3], alignItems: "flex-start" }}>
      <AppText rol="bodyEmphasis">Bij suïcidale gedachten is er 113 Zelfmoordpreventie.</AppText>
      {/* Secundair, net als op de Hulplijn-pagina: de knop om door te gaan met de
          test blijft de ene primaire knop op het scherm, en de kaart valt al op. */}
      <Button label={kanaal.label} variant="secondary" onPress={async () => zetLukteNiet(!(await openKanaal(kanaal)))} />
      {lukteNiet ? (
        <View style={{ gap: space[1] }}>
          <AppText rol="bodySmall">Dat lukt niet op dit toestel. Je kunt dit overnemen op een telefoon:</AppText>
          <AppText rol="bodyEmphasis" selectable>{kanaal.overnemen}</AppText>
        </View>
      ) : null}
    </Card>
  );
}
