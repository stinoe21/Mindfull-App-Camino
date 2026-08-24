// Het standaardscherm van MIND, zie HERKOMST.md "Screen layout rules":
// de hero is de paginaachtergrond, alle inhoud staat in een beige vel met
// radius 20 en 8 punten marge, zodat rondom een dun randje hero zichtbaar
// blijft. Velvulling 20, secties 28 uit elkaar.
//
// Twee varianten:
//   "vel"      het standaardscherm: vel vanaf sheetTop (56), band erachter
//   "overlay"  uitkomst- en vieringsschermen: geen vel, inhoud direct op de
//              volle gradient, zie het prototype (Bevestigd, Uitkomst, Afgerond)

import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, space } from "../tokens/tokens.ts";

import { BackgroundHeroGradient } from "./BackgroundHeroGradient.tsx";
import type { WeerStaat } from "./achtergronden.ts";

const VEL_RADIUS = 20;
const VEL_MARGE = 8;

export type ScreenCanvasProps = {
  variant?: "vel" | "overlay";
  state?: WeerStaat;
  /** Waar het vel begint. Standaard 56; hoger op uitkomstschermen. */
  sheetTop?: number;
  /** Ruimte onderin voor de zwevende navigatiebalk. */
  metNavRuimte?: boolean;
  children?: React.ReactNode;
};

export function ScreenCanvas({ variant = "vel", state = "default", sheetTop, metNavRuimte = false, children }: ScreenCanvasProps) {
  const insets = useSafeAreaInsets();
  const navRuimte = metNavRuimte ? 82 + Math.max(insets.bottom, 14) + space[6] : space[2];

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
      </View>
    );
  }

  const top = Math.max(sheetTop ?? 56, insets.top + space[2]);
  return (
    <View style={{ flex: 1, backgroundColor: colors.surfaceBackground }}>
      <BackgroundHeroGradient state={state} height={top + 240} style={{ position: "absolute", left: 0, right: 0, top: 0 }} />
      <View
        style={{
          position: "absolute",
          left: VEL_MARGE,
          right: VEL_MARGE,
          top,
          bottom: VEL_MARGE,
          borderRadius: VEL_RADIUS,
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
    </View>
  );
}
