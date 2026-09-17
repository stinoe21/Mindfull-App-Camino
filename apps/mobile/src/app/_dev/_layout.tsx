// Alles onder /_dev is voor onszelf: de kitchen sink en de voorbeelden van
// systeemschermen. Geen knop in de app leidt hierheen, maar een deeplink kon
// het wel. In een build voor de stores bestaat deze map daarom niet: wie er
// toch komt, gaat naar de gewone start.

import { Redirect, Stack } from "expo-router";

export default function DevLayout() {
  if (!__DEV__) return <Redirect href="/" />;
  return <Stack screenOptions={{ headerShown: false }} />;
}
