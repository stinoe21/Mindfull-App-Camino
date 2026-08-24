// De mascotte die elke check-in-vraag introduceert. Een eigen familie, los van
// MascotteVlieger (de stemmingsstaten): niet door elkaar halen.
// Specificatie: packages/ui/reference/components/MascotteInput.jsx
//
// De pose voor "zicht" is nooit geexporteerd en valt terug op de hoofdmascotte.
// Dat is de afspraak van 20 augustus 2026, geen noodgreep.

import { Image } from "expo-image";
import { View } from "react-native";

import { MascotMain } from "./MascotMain.tsx";

export type InputStaat = "temperatuur" | "wind" | "zicht" | "wisselvallig";

const BRONNEN: Record<Exclude<InputStaat, "zicht">, number> = {
  temperatuur: require("../assets/mascot/mascot-temperatuur.webp"),
  wind: require("../assets/mascot/mascot-wind.webp"),
  wisselvallig: require("../assets/mascot/mascot-wisselvallig.webp"),
};

// De drie webp-poses staan op 354 bij 136 pixels, zie packages/ui/README.md.
const BEELDVERHOUDING = 354 / 136;

export type MascotteInputProps = {
  state: InputStaat;
  hoogte?: number;
};

export function MascotteInput({ state, hoogte = 128 }: MascotteInputProps) {
  if (state === "zicht") {
    return <MascotMain hoogte={hoogte} />;
  }
  return (
    <View style={{ height: hoogte, alignItems: "center" }}>
      <Image
        source={BRONNEN[state]}
        contentFit="contain"
        style={{ height: hoogte, width: hoogte * BEELDVERHOUDING, maxWidth: "100%" }}
        accessibilityLabel={"Vlieger bij de " + state + "-vraag"}
      />
    </View>
  );
}
