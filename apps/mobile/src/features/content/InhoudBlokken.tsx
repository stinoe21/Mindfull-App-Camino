// De blokken van een MIND-pagina op het vel: kop, alinea, opsomming of link.
//
// Gedeeld door de challenge-dagen en de online gidsen, zodat MIND-tekst er
// overal hetzelfde uitziet. Geen kaart eromheen: de tekst staat direct op het
// vel (Stijn, 10 september 2026).

import * as Linking from "expo-linking";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";

export type InhoudBlok = {
  kop?: string;
  tekst?: string;
  lijst?: string[];
  linkLabel?: string;
  linkUrl?: string;
};

export function InhoudBlokken({ blokken }: { blokken: InhoudBlok[] }) {
  return (
    <>
      {blokken.map((blok, i) => {
        if (blok.kop) return <AppText key={i} rol="h3">{blok.kop}</AppText>;
        if (blok.lijst) {
          return (
            <View key={i} style={{ gap: space[2] }}>
              {blok.lijst.map((item) => (
                <View key={item} style={{ flexDirection: "row", gap: space[2] }}>
                  <AppText rol="body" kleur="brand">{"•"}</AppText>
                  <View style={{ flexShrink: 1 }}>
                    <AppText rol="body">{item}</AppText>
                  </View>
                </View>
              ))}
            </View>
          );
        }
        if (blok.linkLabel && blok.linkUrl) {
          const url = blok.linkUrl;
          return (
            <View key={i} style={{ alignItems: "flex-start" }}>
              <Button label={blok.linkLabel} variant="link" onPress={() => Linking.openURL(url)} />
            </View>
          );
        }
        if (blok.tekst) return <AppText key={i} rol="body">{blok.tekst}</AppText>;
        return null;
      })}
    </>
  );
}
