// Stack voor deze groep schermen. Elk scherm tekent zijn eigen achtergrond,
// zie schermregel 1 in packages/ui/reference/HERKOMST.md.

import { Stack } from "expo-router";

import { colors } from "@mind/ui";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.surfaceBackground },
      }}
    />
  );
}
