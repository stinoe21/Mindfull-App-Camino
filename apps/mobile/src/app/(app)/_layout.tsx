// De vier tabs. Gedeeld bestand: wijzigen doet de eigenaar, in een eigen PR.
//
// LET OP, dit is nog niet het ontwerp. De echte navigatiebalk heeft VIJF
// bestemmingen met "Check in" in het midden, is een zwevende pil met een
// frosted achtergrond over de hero-illustratie, en de iconen zijn vectorpaden
// die al in packages/ui/reference/components/NavigationBar.jsx staan.
//
// Hier staat voorlopig de standaardbalk van expo-router, zodat de app draait en
// de hele flow te doorlopen is. Vervangen gebeurt bij de taak `NavigationBar`,
// zie docs/van-ontwerp-naar-app.md deel 5. De check-in zit nu aan de CTA op het
// dashboard en niet in de balk.

import { Tabs } from "expo-router";

import { colors } from "@mind/ui";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.brandDefault,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: { backgroundColor: colors.surfaceBackground },
        sceneStyle: { backgroundColor: colors.surfaceBackground },
      }}
    >
      <Tabs.Screen name="dashboard" options={{ title: "Home" }} />
      <Tabs.Screen name="naslagwerk" options={{ title: "Tips" }} />
      <Tabs.Screen name="challenges" options={{ title: "Challenges" }} />
      <Tabs.Screen name="profiel" options={{ title: "Profiel" }} />
    </Tabs>
  );
}
