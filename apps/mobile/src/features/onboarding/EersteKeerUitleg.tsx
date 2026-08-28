// Eerste-keer-uitleg op het dashboard.
//
// De systeemstaat "eerste-keer-tips" uit docs/scope.md: een korte rondleiding
// langs wat de app doet, in vier stappen, als kaart bovenaan het dashboard.
// Eenmalig: na "Begrepen" of "Overslaan" komt hij niet meer terug. Bewust
// geen overlay die de rest van het scherm afdekt (daar is geen scrim-token
// voor, en de kaart is rustiger). De stand staat alleen op het toestel, onder
// een eigen sleutel, en gaat mee weg met wisAlleLokaleData(). Hij staat onder
// de check-in-kaart en gebruikt alleen tekstlinks, zodat de check-in de enige
// primaire actie op het dashboard blijft.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

const SLEUTEL = "mind.uitleg-gezien";

const STAPPEN: { kop: string; tekst: string }[] = [
  {
    kop: "Zo werkt de app",
    tekst:
      "Elke dag één korte check-in: vier schuifjes over hoe je je voelt. Daaruit komt jouw weerbeeld van vandaag. Niets daarvan is goed of fout.",
  },
  {
    kop: "Jouw weer en het weer van Nederland",
    tekst:
      "Na de check-in zie je jouw weer met één zachte tip. Jouw weerbeeld telt anoniem mee in het mentale weerbericht van Nederland, als je daar toestemming voor gaf. Niemand ziet wat jij invulde.",
  },
  {
    kop: "Tips en challenges",
    tekst:
      "Onder Tips staan artikelen van MIND, eerst over de onderwerpen die jij koos. Onder Challenges vind je kleine stappen voor een aantal dagen. Geen opdrachten, wel uitnodigingen.",
  },
  {
    kop: "Alles is aan te passen",
    tekst:
      "Je naam, je onderwerpen en je toestemmingen staan in Instellingen, rechtsboven. Je kunt er altijd op terugkomen, en je account verwijderen kan ook.",
  },
];

export function EersteKeerUitleg() {
  // undefined: nog aan het lezen; true: al gezien, dus niets tonen.
  const [gezien, zetGezien] = useState<boolean | undefined>(undefined);
  const [stap, zetStap] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem(SLEUTEL)
      .then((waarde) => zetGezien(waarde === "1"))
      .catch(() => zetGezien(true));
  }, []);

  const klaar = async () => {
    zetGezien(true);
    try {
      await AsyncStorage.setItem(SLEUTEL, "1");
    } catch {
      // Niet kunnen bewaren betekent hooguit dat de uitleg nog een keer komt.
    }
  };

  if (gezien !== false) return null;

  const laatste = stap === STAPPEN.length - 1;
  const huidig = STAPPEN[stap];

  return (
    <Card tone="primary">
      <AppText rol="labelOverline" kleur="secondary">{"NIEUW HIER · " + (stap + 1) + " van " + STAPPEN.length}</AppText>
      <AppText rol="h3">{huidig.kop}</AppText>
      <AppText rol="bodySmall" kleur="secondary">{huidig.tekst}</AppText>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
        <Button label="Overslaan" variant="link" onPress={klaar} />
        {/* Tekstlinks, geen gevulde knop: de check-in-knop is de enige primaire op dit scherm. */}
        <Button label={laatste ? "Begrepen" : "Volgende"} variant="link" onPress={laatste ? klaar : () => zetStap(stap + 1)} />
      </View>
    </Card>
  );
}
