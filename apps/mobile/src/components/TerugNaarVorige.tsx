// De router-kant van de terug-knop: alleen zichtbaar als er echt een vorig
// scherm op de navigatiestack staat, en een tik doet precies wat de
// hardware-terugknop op Android ook doet: een stap terug op de stack.
// Daardoor kunnen de twee nooit uit elkaar lopen.

import { useRouter } from "expo-router";

import { TerugKnop } from "@mind/ui/components/TerugKnop";

export function TerugNaarVorige() {
  const router = useRouter();

  // Zonder stack eronder (bijvoorbeeld na een deeplink) is er geen "vorige"
  // en tonen we niets, net zoals de hardware-terugknop dan de app verlaat.
  if (!router.canGoBack()) {
    return null;
  }

  return <TerugKnop onPress={() => router.back()} />;
}
