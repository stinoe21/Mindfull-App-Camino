// MIND Hulplijn
//
// De route naar echte hulp. De teksten zijn woordelijk van MIND, van
// mindhulplijn.nl (opgehaald 10 september 2026, op verzoek van Stijn na de
// feedbacksessie: MIND wilde de Hulplijn preciezer omschreven, als plek voor
// advies en hulp, met de Luisterlijn en 113 voor wat daar niet thuishoort).
// De nummers en kanalen staan ook op die pagina; hier wordt niets verzonnen.
// Wijzigt MIND de tekst, dan wijzigt hij hier, niet andersom.

import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";

// Kanalen van de MIND Hulplijn, zoals op mindhulplijn.nl.
const KANALEN = [
  { label: "Bel 0900 - 1450", url: "tel:09001450" },
  { label: "WhatsApp", url: "https://wa.me/31613863803" },
  { label: "Chat op mindhulplijn.nl", url: "https://mindhulplijn.nl/" },
  { label: "Mail hulplijn@wijzijnmind.nl", url: "mailto:hulplijn@wijzijnmind.nl" },
];

// Andere lijnen, zoals MIND ze zelf noemt.
const ANDERE = [
  { label: "Luisterlijn, 088 - 0767 000", url: "tel:0880767000" },
  { label: "113 Zelfmoordpreventie, 0800 - 0113", url: "tel:08000113" },
];

export default function Hulplijn() {
  const router = useRouter();
  return (
    <ScreenCanvas state="zonnig" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">MIND Hulplijn</AppText>
        <AppText rol="subtitle">Deskundig, anoniem en gratis</AppText>
      </View>

      <AppText rol="bodyEmphasis">
        Ervaar je mentale problemen, loop je even vast of maak je je zorgen om iemand? Wij denken graag met je mee.
      </AppText>

      <View style={{ gap: space[2] }}>
        {[
          "Gratis adviesgesprek van 30 minuten met tips om verder te komen.",
          "We denken met je mee en verwijzen je zo nodig door.",
          "Ook als je je zorgen maakt om iemand anders, helpen we je.",
          "We bieden geen behandeling en zetten je niet sneller op een wachtlijst.",
        ].map((regel) => (
          <View key={regel} style={{ flexDirection: "row", gap: space[2] }}>
            <AppText rol="body" kleur="brand">{"•"}</AppText>
            <View style={{ flexShrink: 1 }}>
              <AppText rol="body">{regel}</AppText>
            </View>
          </View>
        ))}
      </View>

      <Card tone="sun">
        <AppText rol="h3">Hulp nodig? Bel, app of chat</AppText>
        <AppText rol="bodySmall">Bereikbaar van maandag tot en met vrijdag van 9:00 tot 21:00 uur. Bellen kost normale belkosten.</AppText>
        <View style={{ gap: space[2], alignItems: "flex-start" }}>
          {KANALEN.map((k, i) => (
            <Button key={k.url} label={k.label} variant={i === 0 ? "primary" : "secondary"} onPress={() => Linking.openURL(k.url)} />
          ))}
        </View>
      </Card>

      <Card tone="white">
        <AppText rol="bodyEmphasis">Voor een luisterend oor is er de Luisterlijn. Bij suïcidale gedachten is er 113 Zelfmoordpreventie.</AppText>
        <View style={{ alignItems: "flex-start" }}>
          {ANDERE.map((a) => (
            <Button key={a.url} label={a.label} variant="link" onPress={() => Linking.openURL(a.url)} />
          ))}
        </View>
        <AppText rol="bodySmall" kleur="secondary">
          In geval van nood: de huisartsenpost of de crisisdienst in jouw woonplaats.
        </AppText>
      </Card>

      <AppText rol="bodySmall" kleur="secondary">
        Deze app is geen hulpverlening en geen vervanging van professionele hulp.
      </AppText>

      <Button label="Terug" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
