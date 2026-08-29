// Het standaardscherm van MIND: de hero-gradient is de paginaachtergrond, en
// daaroverheen schuift een beige vel op de volle breedte met ronde
// bovenhoeken (radius xl, 28). Velvulling 20, secties 28 uit elkaar.
//
// Sinds 29 augustus 2026 (designaudit) volgt dit het prototype in
// packages/ui/reference/ui_kits/mind-app en de Figma-schermen, niet meer het
// "vel met 8 punten marge en radius 20" uit de eerste overname: dat liet nog
// geen 60 punten gradient over en had geen plek voor de mascotte. Het vel
// begint nu standaard op een echte band (statusbalk + 64), en met heroInhoud
// (mascotte, begroeting) op 176, zodat het vel over de hero-inhoud heen
// schuift.
//
// Twee varianten:
//   "vel"      het standaardscherm: vel vanaf sheetTop, band erachter
//   "overlay"  uitkomst- en vieringsschermen: geen vel, inhoud direct op de
//              volle gradient, zie het prototype (Bevestigd, Uitkomst, Afgerond)

import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius, space } from "../tokens/tokens.ts";

import { BackgroundHeroGradient } from "./BackgroundHeroGradient.tsx";
import { NAV_PIL_HOOGTE } from "./NavigationBar.tsx";
import { TERUGKNOP_MAAT } from "./TerugKnop.tsx";
import type { WeerStaat } from "./achtergronden.ts";

/** Waar het vel begint als er hero-inhoud is: de band uit het prototype. */
export const HERO_BAND = 200;

export type ScreenCanvasProps = {
  variant?: "vel" | "overlay";
  state?: WeerStaat;
  /** Waar het vel begint. Standaard statusbalk + 64, of HERO_BAND met heroInhoud. */
  sheetTop?: number;
  /**
   * Wat er op de gradient staat, boven het vel: de mascotte, of een
   * begroeting. Wordt gecentreerd in de band tussen statusbalk en vel.
   */
  heroInhoud?: React.ReactNode;
  /** Ruimte onderin voor de zwevende navigatiebalk. */
  metNavRuimte?: boolean;
  /**
   * De terug-knop linksboven, zwevend op de gradient boven het vel.
   * Geef hier een element (in de app: TerugNaarVorige); de positionering
   * gebeurt hier zodat hij op elk scherm exact gelijk staat. Bij de
   * vel-variant schuift het vel mee omlaag zodat de knop erboven past.
   */
  terugKnop?: React.ReactNode;
  children?: React.ReactNode;
};

export function ScreenCanvas({ variant = "vel", state = "default", sheetTop, heroInhoud, metNavRuimte = false, terugKnop, children }: ScreenCanvasProps) {
  const insets = useSafeAreaInsets();
  const navRuimte = metNavRuimte ? NAV_PIL_HOOGTE + Math.max(insets.bottom - space[3], space[2]) + space[6] : space[2];
  // De knop staat net onder de statusbalk; het vel begint er vlak onder.
  const terugKnopTop = insets.top + space[1];
  const terugKnopOverlay = terugKnop ? (
    <View style={{ position: "absolute", top: terugKnopTop, left: space[3] }}>{terugKnop}</View>
  ) : null;

  if (variant === "overlay") {
    const top = sheetTop ?? 200;
    return (
      <View style={{ flex: 1, backgroundColor: colors.surfaceBackground }}>
        <BackgroundHeroGradient state={state} height={480} style={{ position: "absolute", left: 0, right: 0, top: 0 }} />
        <ScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: Math.max(top, insets.top + space[6]),
            paddingHorizontal: space[6],
            paddingBottom: insets.bottom + navRuimte + space[6],
            gap: space[4],
            alignItems: "center",
          }}
        >
          {children}
        </ScrollView>
        {terugKnopOverlay}
      </View>
    );
  }

  // Zonder hero-inhoud een band van 64 onder de statusbalk; met hero-inhoud
  // de volle band uit het prototype. Een terugknop schuift het vel nooit
  // omhoog tot boven de knop.
  const standaardTop = heroInhoud ? HERO_BAND : insets.top + space[12] + space[4];
  const top = terugKnop
    ? Math.max(sheetTop ?? standaardTop, terugKnopTop + TERUGKNOP_MAAT + space[1])
    : Math.max(sheetTop ?? standaardTop, insets.top + space[2]);
  return (
    <View style={{ flex: 1, backgroundColor: colors.surfaceBackground }}>
      <BackgroundHeroGradient state={state} height={top + 240} style={{ position: "absolute", left: 0, right: 0, top: 0 }} />
      {heroInhoud ? (
        <View
          pointerEvents="box-none"
          style={{ position: "absolute", left: 0, right: 0, top: insets.top, height: top - insets.top, alignItems: "center", justifyContent: "flex-end", paddingBottom: space[3] }}
        >
          {heroInhoud}
        </View>
      ) : null}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top,
          bottom: 0,
          borderTopLeftRadius: radius.xl,
          borderTopRightRadius: radius.xl,
          backgroundColor: colors.surfaceBackground,
          overflow: "hidden",
        }}
      >
        <ScrollView
          style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets
          contentContainerStyle={{
            padding: space[5],
            paddingBottom: insets.bottom + navRuimte + space[5],
            // 28 is een bewuste tussenmaat uit HERKOMST.md (sectieafstand).
            gap: 28, // sectieafstand 28, HERKOMST.md schermregel 5
          }}
        >
          {children}
        </ScrollView>
      </View>
      {terugKnopOverlay}
    </View>
  );
}
