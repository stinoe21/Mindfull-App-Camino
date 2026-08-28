// De navigatie van de app: de echte balk uit het ontwerp, met VIJF
// bestemmingen en "Check in" in het midden, als zwevende pil over de hero.
// De iconen zijn de vectorpaden uit het ontwerp (packages/ui/components/
// navIconen.tsx, gegenereerd uit de referentie).
//
// Gedeeld bestand: gewijzigd als onderdeel van de volledige-app-taak van
// 24 augustus 2026, in opdracht van de eigenaar.

import { Tabs, useRouter } from "expo-router";

import { colors } from "@mind/ui";
import { NavigationBar } from "@mind/ui/components/NavigationBar";
import { NavIcoonHome } from "@mind/ui/components/NavIcoonHome";
import { NavIcoonChallenges, NavIcoonCheckIn, NavIcoonProfiel, NavIcoonTips } from "@mind/ui/components/navIconen";

export default function AppLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.surfaceBackground },
      }}
      tabBar={({ state, navigation }) => {
        const actief = state.routes[state.index]?.name;
        // Een tik op een tab brengt je altijd naar het beginscherm van die tab,
        // ook als je er al op staat en dieper zit (artikel, challenge,
        // instellingen). Zonder "screen: index" laat navigate de geneste stack
        // staan en gebeurt er bij nogmaals tikken niets. Home heeft geen stack.
        const naar = (route: string) => () =>
          route === "dashboard" ? navigation.navigate(route) : navigation.navigate(route, { screen: "index" });
        return (
          <NavigationBar
            items={[
              { key: "dashboard", label: "Home", actief: actief === "dashboard", onPress: naar("dashboard"), icoon: () => <NavIcoonHome hoogte={30} /> },
              { key: "naslagwerk", label: "Tips", actief: actief === "naslagwerk", onPress: naar("naslagwerk"), icoon: (kleur) => <NavIcoonTips kleur={kleur} /> },
              { key: "checkin", label: "Check in", onPress: () => router.push("/check-in/1"), icoon: (kleur) => <NavIcoonCheckIn kleur={kleur} /> },
              { key: "challenges", label: "Challenges", actief: actief?.startsWith("challenges") ?? false, onPress: naar("challenges"), icoon: (kleur) => <NavIcoonChallenges kleur={kleur} /> },
              { key: "profiel", label: "Profiel", actief: actief?.startsWith("profiel") ?? false, onPress: naar("profiel"), icoon: (kleur) => <NavIcoonProfiel kleur={kleur} /> },
            ]}
          />
        );
      }}
    >
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="naslagwerk" />
      <Tabs.Screen name="challenges" />
      <Tabs.Screen name="profiel" />
    </Tabs>
  );
}
