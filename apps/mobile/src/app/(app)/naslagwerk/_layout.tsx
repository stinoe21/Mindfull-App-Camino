// Stack voor deze groep schermen. Elk scherm tekent zijn eigen achtergrond,
// zie schermregel 1 in packages/ui/reference/HERKOMST.md.
//
// Het overzicht staat altijd onderaan deze stack, ook als een artikel direct
// geopend wordt vanaf het dashboard of de check-in-uitkomst. Zonder deze
// instelling bevat de stack dan alleen het artikel en brengt het pijltje terug
// je naar het dashboard in plaats van naar het overzicht van alle tips.

import { Stack } from "expo-router";

import { colors } from "@mind/ui";

export const unstable_settings = {
  initialRouteName: "index",
};

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
