// De root layout van expo-router. Gedeeld bestand: wijzigen doet de eigenaar,
// in een eigen PR. Zie CLAUDE.md sectie 5.
//
// Hier gebeurt precies één ding dat overal doorwerkt: de lettertypes laden en
// niets tekenen voordat ze er zijn. Zonder dat zie je één tel het systeemfont,
// en dat is precies het detail waar deze app op beoordeeld wordt.
//
// Sinds 18 september 2026 staat hier ook de SessieProvider omheen: één plek
// die de sessie volgt en het token ververst zolang de app open staat. Zie
// features/auth/sessie.tsx.
//
// Ook sinds 18 september 2026: <Meten /> telt schermweergaven en verstuurt de
// gebruikstotalen van afgesloten dagen. Het tekent niets. Zie
// features/meten/Meten.tsx en docs/datamodel.md, "Gebruikstotalen".
//
// Sinds 19 september 2026 haalt <MindTipsLader /> de tips op die MIND vanuit het
// beheer heeft gepubliceerd. Het tekent niets. Zie features/content/mindTips.ts.

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { colors } from "@mind/ui";

import { SessieProvider } from "@/features/auth/sessie";
import { MindTipsLader } from "@/features/content/MindTipsLader";
import { Meten } from "@/features/meten/Meten";
import { fontAssets } from "@/theme/fonts";

// Het vangnet: expo-router tekent dit scherm als er bij het tekenen van een
// route iets misgaat, in plaats van een wit scherm. Zie het bestand zelf.
export { Foutscherm as ErrorBoundary } from "@/features/systeem/Foutscherm";

// Het splashscreen blijft staan tot de snitten geladen zijn.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [klaar, fout] = useFonts(fontAssets);

  useEffect(() => {
    if (klaar || fout) {
      SplashScreen.hideAsync();
    }
  }, [klaar, fout]);

  // Nog bezig: laat het splashscreen staan in plaats van een leeg vlak.
  if (!klaar && !fout) {
    return null;
  }

  // Lukt het laden niet, dan gaat de app wel door. Een app die niet start is
  // erger dan een app in het verkeerde lettertype, en op een toestel valt dit
  // meteen op. `fout` is een fout van de bundel, niet iets van de gebruiker,
  // dus die mag hier zichtbaar zijn.
  if (fout) {
    console.warn("Lettertypes niet geladen, de app valt terug op het systeemfont.", fout);
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SessieProvider>
      <Meten />
      <MindTipsLader />
      <Stack
        screenOptions={{
          // Elk scherm tekent zijn eigen hero-gradient als paginaachtergrond,
          // zie schermregel 1 in packages/ui/reference/HERKOMST.md. Een
          // systeemheader zou daaroverheen liggen.
          headerShown: false,
          contentStyle: { backgroundColor: colors.surfaceBackground },
        }}
      />
      </SessieProvider>
    </SafeAreaProvider>
  );
}
