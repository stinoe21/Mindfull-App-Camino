// Beeld en de schermlezer: één afspraak voor alle iconen en vliegers.
//
// Tot 18 september 2026 las de schermlezer elk beeld voor met een vast
// codewoord: "Weer, wolken" bij een icoon, "Vlieger, gestrest" bij een
// onderwerp. Dat is ruis naast een titel die hetzelfde zegt, en bij een
// vlieger ook nog een gevoelswoord dat niemand heeft gekozen.
//
// De afspraak: beeld is versiering en wordt overgeslagen, tenzij het scherm
// er een label bij geeft. Dan is het een afbeelding met precies die tekst,
// in de taal van het scherm. Geeft het beeld iets door dat nergens in tekst
// staat, dan hoort dat label er dus bij.

import type { ViewProps } from "react-native";

type Toegankelijk = Pick<ViewProps, "accessible" | "accessibilityRole" | "accessibilityLabel" | "accessibilityElementsHidden" | "importantForAccessibility">;

/** De props voor een beeld: met label een afbeelding, zonder label onzichtbaar voor de schermlezer. */
export function beeldVoorSchermlezer(label?: string): Toegankelijk {
  if (label) return { accessible: true, accessibilityRole: "image", accessibilityLabel: label };
  return { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
}
