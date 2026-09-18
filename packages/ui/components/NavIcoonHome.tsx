// Het Home-icoon van de navigatiebalk: in het ontwerp een kleine
// rasterillustratie (geen glyph), zie HERKOMST.md Iconography.
// De referentie toont een uitsnede van assets/nav/nav-home-icon.webp.

import { Image } from "expo-image";
import { View } from "react-native";

const BRON = require("../assets/nav/nav-home-icon.webp");

// kleur tint de lijnen van het plaatje (het heeft een transparante
// achtergrond), zodat Home net als de vier vectoriconen meekleurt met actief
// en inactief. Zonder kleur blijft het de oorspronkelijke tekening.
export function NavIcoonHome({ hoogte = 30, kleur }: { hoogte?: number; kleur?: string }) {
  return (
    <View style={{ height: hoogte, width: hoogte, alignItems: "center", justifyContent: "center" }}>
      <Image source={BRON} contentFit="contain" tintColor={kleur} style={{ width: hoogte, height: hoogte }} />
    </View>
  );
}
