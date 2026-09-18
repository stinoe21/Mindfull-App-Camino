// Van een stuk scherm naar het deelvenster van de telefoon.
//
// Het beeld wordt op het toestel gemaakt (react-native-view-shot), als PNG
// zodat de doorzichtige achtergrond blijft, en gaat via het deelvenster van
// het systeem (expo-sharing) naar de app die de gebruiker zelf kiest. Deze app
// ziet niet welke dat is. Er gaat niets naar een server, er wordt niets gelogd,
// en het tijdelijke bestand wordt daarna weggegooid.

import * as Sharing from "expo-sharing";
import type { RefObject } from "react";
import type { View } from "react-native";
import { captureRef, releaseCapture } from "react-native-view-shot";

export type DeelUitkomst = "gedeeld" | "niet-beschikbaar" | "mislukt";

export async function deelBeeld(ref: RefObject<View | null>, titel: string): Promise<DeelUitkomst> {
  let bestand: string | null = null;
  try {
    if (!ref.current) return "mislukt";
    if (!(await Sharing.isAvailableAsync())) return "niet-beschikbaar";
    bestand = await captureRef(ref, { format: "png", quality: 1, result: "tmpfile" });
    await Sharing.shareAsync(bestand, { mimeType: "image/png", UTI: "public.png", dialogTitle: titel });
    return "gedeeld";
  } catch {
    return "mislukt";
  } finally {
    if (bestand) releaseCapture(bestand);
  }
}
