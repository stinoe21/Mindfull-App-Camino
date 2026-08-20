// De vijf snitten die de typeschaal gebruikt, gekoppeld aan hun bestand.
//
// De sleutel moet letterlijk gelijk zijn aan wat `type.<rol>.fontFamily` in
// tokens.ts teruggeeft. Wijkt hij af, dan valt de tekst stil terug op het
// systeemfont en zie je dat pas op een telefoon. Het Record-type hieronder
// dwingt af dat de lijst precies `fontFaces` dekt: een snit vergeten of er een
// verzinnen is een typefout en geen verrassing achteraf.

import type { fontFaces } from "@mind/ui";

type FontFace = (typeof fontFaces)[number];

export const fontAssets: Record<FontFace, number> = {
  "AveriaSerifLibre-Regular": require("@mind/ui/assets/fonts/AveriaSerifLibre-Regular.ttf"),
  "AveriaSerifLibre-Italic": require("@mind/ui/assets/fonts/AveriaSerifLibre-Italic.ttf"),
  "AveriaLibre-LightItalic": require("@mind/ui/assets/fonts/AveriaLibre-LightItalic.ttf"),
  "OpenSans-Regular": require("@mind/ui/assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-SemiBold": require("@mind/ui/assets/fonts/OpenSans-SemiBold.ttf"),
};
