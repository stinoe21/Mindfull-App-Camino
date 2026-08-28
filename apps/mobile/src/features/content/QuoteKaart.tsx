// De quote van de dag op het dashboard.
//
// Opbouw: een groot serif-aanhalingsteken als sierelement in licht paars, de
// quote in de quote-rol, een dunne lijn, en de naam in kapitalen. Rechts
// onderaan "Deel": de tekst met naam gaat via het deelvenster van het
// toestel naar Instagram, WhatsApp of waar dan ook. Delen is altijd een
// keuze van de gebruiker; er gaat niets vanzelf weg. Een deelbare afbeelding
// vraagt een schermopname-package en is dus een aparte beslissing.

import { Share, View } from "react-native";

import { colors, palette, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { quoteVanVandaag } from "./data/quotes.ts";

export function QuoteKaart() {
  const quote = quoteVanVandaag();

  const deel = () => {
    Share.share({
      message: "“" + quote.tekst + "”\n" + quote.auteur + "\n\nQuote van de dag uit het Mentale Weerbericht van MIND.",
    });
  };

  return (
    <Card tone="purple" style={{ gap: space[3], overflow: "hidden" }}>
      {/* Het aanhalingsteken staat als sieraad achter de tekst, in de lichtste
          paarse tint, en telt niet mee voor de voorleesfunctie. */}
      <AppText
        rol="h1"
        accessible={false}
        importantForAccessibility="no"
        style={{ position: "absolute", top: 0, left: space[3], fontSize: type.h1.fontSize * 3, lineHeight: type.h1.lineHeight * 3, color: palette.purple100 }}
      >
        {"“"}
      </AppText>
      <View style={{ paddingTop: space[6], gap: space[3] }}>
        <AppText rol="quote">{quote.tekst}</AppText>
        <View style={{ height: 1, width: space[8], backgroundColor: colors.borderDefault }} />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
          <AppText rol="labelOverline" kleur="secondary">{quote.auteur.toUpperCase()}</AppText>
          <Button label="Deel" variant="link" onPress={deel} />
        </View>
      </View>
    </Card>
  );
}
