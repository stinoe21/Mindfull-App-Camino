// De router-kant van de terug-knop: alleen zichtbaar als er echt iets is om
// naar terug te gaan, en een tik dispatcht dezelfde GO_BACK-actie als de
// hardware-terugknop op Android, zodat de twee nooit uit elkaar lopen.
// Alleen subpagina's geven deze knop mee aan ScreenCanvas; de tabschermen
// (Home, Tips, Challenges, Profiel) tonen hem bewust niet. De hardware-
// terugknop springt daar nog wel naar Home (backBehavior "firstRoute").

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
