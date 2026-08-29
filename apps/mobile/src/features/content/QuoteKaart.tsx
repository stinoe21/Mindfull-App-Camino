// De quote van de dag op Home.
//
// Naar de quote-kaart uit de Figma-styleguide (162:2416): crème met een
// dunne inktrand, radius 28, de tekst gecentreerd in de quote-rol, daaronder
// de naam en de deelactie. De grote handgetekende aanhalingstekens uit het
// ontwerp zijn een illustratie die nog niet in de assetbibliotheek staat;
// die komen erbij zodra de eigenaar ze exporteert.
//
// "Deel" stuurt de tekst met naam via het deelvenster van het toestel naar
// Instagram, WhatsApp of waar dan ook. Delen is altijd een keuze van de
// gebruiker; er gaat niets vanzelf weg.

import { Share, View } from "react-native";

import { colors, radius, space } from "@mind/ui";
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
    <Card
      tone="outline"
      style={{ borderColor: colors.textPrimary, borderRadius: radius.xl, backgroundColor: colors.surfaceBackground, alignItems: "center", paddingVertical: space[6], gap: space[4] }}
    >
      <AppText rol="quote" centreer>{"“" + quote.tekst + "”"}</AppText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
        <AppText rol="labelCaption" kleur="secondary">{quote.auteur}</AppText>
        <AppText rol="labelCaption" kleur="secondary">{"·"}</AppText>
        <Button label="Deel" variant="link" onPress={deel} />
      </View>
    </Card>
  );
}
