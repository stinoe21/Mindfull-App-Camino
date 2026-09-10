// De quote van de dag op Home.
//
// Sinds 10 september 2026 (feedbacksessie MIND: Home rustiger, de quote nam
// te veel ruimte) een kleine paarse kaart onderaan het vel, in plaats van de
// grote omrande kaart uit de Figma-styleguide (162:2416). Paars is de toon
// voor de quote (zie Card). De grote handgetekende aanhalingstekens uit het
// ontwerp staan nog niet in de assetbibliotheek.
//
// "Deel" stuurt de tekst met naam via het deelvenster van het toestel naar
// Instagram, WhatsApp of waar dan ook. Delen is altijd een keuze van de
// gebruiker; er gaat niets vanzelf weg.

import { Share, View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { quoteVanVandaag } from "./data/quotes.ts";

export function QuoteKaart() {
  const quote = quoteVanVandaag();

  const deel = () => {
    Share.share({
      message: "“" + quote.tekst + "”\n" + quote.auteur + "\n\nQuote van de dag uit Weer MIND.",
    });
  };

  return (
    <Card tone="purple">
      <AppText rol="bodyEmphasis">{"“" + quote.tekst + "”"}</AppText>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
        <AppText rol="labelCaption" kleur="secondary">{quote.auteur}</AppText>
        <Button label="Deel" variant="link" onPress={deel} />
      </View>
    </Card>
  );
}
