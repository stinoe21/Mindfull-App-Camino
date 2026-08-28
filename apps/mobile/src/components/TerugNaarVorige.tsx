// De router-kant van de terug-knop: alleen zichtbaar als er echt iets is om
// naar terug te gaan, en een tik dispatcht dezelfde GO_BACK-actie als de
// hardware-terugknop op Android. Daardoor kunnen de twee nooit uit elkaar
// lopen: op een subpagina popt hij de stack, op een tab (Profiel, Challenges,
// Tips) springt hij naar Home, precies zoals de tab-navigator de hardware-
// terugknop afhandelt (backBehavior "firstRoute").

import { useNavigation } from "expo-router";

import { TerugKnop } from "@mind/ui/components/TerugKnop";

export function TerugNaarVorige() {
  const navigation = useNavigation();

  // Niets om naar terug te gaan (Home, of een deeplink zonder stack): geen
  // knop, net zoals de hardware-terugknop dan de app verlaat.
  if (!navigation.canGoBack()) {
    return null;
  }

  return <TerugKnop onPress={() => navigation.goBack()} />;
}
