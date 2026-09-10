// De quote van de dag op Home.
//
// Geen kaart: de quote staat direct op het vel, gecentreerd, in de
// serif-italic typerol "quote" uit de styleguide (type-accent), met daarboven
// een groot openingsteken als ornament in de paarse accenttint (paars is de
// toon van de quote, zie Card). Dat teken is typografie in het displayfont en
// geen asset; de handgetekende aanhalingstekens uit het Figma-ontwerp
// (162:2416) staan niet in de assetbibliotheek. De naam eronder klein, en
// een echte knop om te delen.
//
// Sinds 10 september 2026 (Stijn): het paarse vak met de quote erin las als
// een formulierveld en paste niet bij de huisstijl. De quote is een
// adempauze onderaan Home, geen mededeling en geen invulvak. Een tik op de
// quote opent de pagina met de betekenis en wie het zei (/quote).
//
// "Deel" stuurt de tekst met naam via het deelvenster van het toestel naar
// Instagram, WhatsApp of waar dan ook. Delen is altijd een keuze van de
// gebruiker; er gaat niets vanzelf weg.

import { useRouter } from "expo-router";
import { Share, View } from "react-native";

import { palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { PressableScale } from "@mind/ui/components/PressableScale";

import { quoteVanVandaag } from "./data/quotes.ts";

export function QuoteKaart() {
  const router = useRouter();
  const quote = quoteVanVandaag();

  const deel = () => {
    Share.share({
      message: "“" + quote.tekst + "”\n" + quote.auteur + "\n\nQuote van de dag uit Weer MIND.",
    });
  };

  return (
    <View style={{ alignItems: "center", paddingVertical: space[4], gap: space[1] }}>
      <PressableScale
        accessibilityRole="button"
        accessibilityLabel={quote.tekst + ", " + quote.auteur}
        accessibilityHint="Opent de betekenis van deze quote"
        onPress={() => router.push("/quote")}
        style={{ alignItems: "center", paddingHorizontal: space[3], gap: space[1], alignSelf: "stretch" }}
      >
        {/* Het openingsteken als ornament. Het hangt hoog in zijn regel, dus de
            quote wordt eronder omhoog getrokken zodat er geen lege regel tussen valt. */}
        <AppText rol="display" style={{ color: palette.purple300, marginBottom: -space[4] }} accessibilityElementsHidden>
          {"“"}
        </AppText>
        <AppText rol="quote" centreer>
          {quote.tekst}
        </AppText>
        <View style={{ marginTop: space[2] }}>
          <AppText rol="labelCaption" kleur="secondary" centreer>
            {quote.auteur}
          </AppText>
        </View>
      </PressableScale>
      {/* Twee acties op één rij: lezen als link, delen als knop. De link
          maakt zichtbaar dat er een pagina achter de quote zit; de quote
          zelf tikken doet hetzelfde (Stijn, 10 september 2026). */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[5], marginTop: space[4] }}>
        <Button label="Lees meer" variant="link" onPress={() => router.push("/quote")} />
        <Button label="Deel deze quote" variant="secondary" onPress={deel} />
      </View>
    </View>
  );
}
