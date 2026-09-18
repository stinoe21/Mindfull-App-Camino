// Stack voor deze groep schermen. Elk scherm tekent zijn eigen achtergrond,
// zie schermregel 1 in packages/ui/reference/HERKOMST.md.
//
// De terug-swipe vanaf de linkerrand staat uit voor de hele check-in (Stijn,
// 18 september 2026): op een toestel pakte iOS de vinger af zodra je de
// schuif naar links trok, en dan viel je midden in de check-in terug op Home.
// De terugknop op het scherm gaat eerst een vraag terug en pas daarna het
// scherm uit, en op de uitkomst staan de knoppen naar Home. Dat is de weg
// terug. De Stack.Screen zonder naam geldt voor deze groep in de hoofdstack.

import { Stack } from "expo-router";

import { colors } from "@mind/ui";

import { Poort } from "@/features/auth/Poort";

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ gestureEnabled: false }} />
      {/* Ook de check-in ligt achter de onboarding, zie features/auth/Poort.tsx. */}
      <Poort>
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            contentStyle: { backgroundColor: colors.surfaceBackground },
          }}
        />
      </Poort>
    </>
  );
}
