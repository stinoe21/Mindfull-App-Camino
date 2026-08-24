// Het Home-icoon van de navigatiebalk: in het ontwerp een kleine
// rasterillustratie (geen glyph), zie HERKOMST.md Iconography.
// De referentie toont een uitsnede van assets/nav/nav-home-icon.webp.

import { Image } from "expo-image";
import { View } from "react-native";

const BRON = require("../assets/nav/nav-home-icon.webp");

export function NavIcoonHome({ hoogte = 30 }: { hoogte?: number }) {
  return (
    <View style={{ height: hoogte, width: hoogte, alignItems: "center", justifyContent: "center" }}>
      <Image source={BRON} contentFit="contain" style={{ width: hoogte, height: hoogte }} />
    </View>
  );
}
