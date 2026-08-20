// De buildconfiguratie van de app. Gedeeld bestand: wijzigen doet de eigenaar,
// in een eigen PR. Zie CLAUDE.md sectie 5.

import type { ExpoConfig } from "expo/config";

import { colors } from "@mind/ui";

const config: ExpoConfig = {
  name: "Mentale Weerbericht",
  slug: "mentale-weerbericht",
  scheme: "mentaleweerbericht",
  version: "0.1.0",
  orientation: "portrait",

  // Er is één beeld en dat is het lichte. Donkere modus is nog geen besluit,
  // zie docs/design-system.md. Zolang dat zo is dwingen we licht af, want een
  // systeem dat zelf donker maakt levert onleesbare tekst op crèmekleur.
  userInterfaceStyle: "light",
  backgroundColor: colors.surfaceBackground,

  ios: {
    // De app is voor de telefoon ontworpen. Universal declareren zonder een
    // echte iPad-layout is een afwijzingsreden, zie docs/scope.md.
    supportsTablet: false,
    bundleIdentifier: "nl.mindus.mentaleweerbericht",
  },
  android: {
    package: "nl.mindus.mentaleweerbericht",
  },

  plugins: [
    "expo-router",
    "expo-status-bar",
    "expo-image",
    "expo-font",
    [
      "expo-splash-screen",
      {
        // Geen logo: dat is er nog niet. Wel de juiste kleur, zodat er bij het
        // starten geen wit vlak flitst voordat de crèmekleur er is.
        backgroundColor: colors.surfaceBackground,
        resizeMode: "contain",
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
  },

  // expo-router pakt src/app vanzelf op. De routebestanden staan daar en niet
  // in app/, zodat feature-code in src/features er direct naast past.
  // Zie CLAUDE.md sectie 4.
};

export default config;
