// De router-kant van de terug-knop: een tik dispatcht dezelfde GO_BACK-actie
// als de hardware-terugknop op Android, zodat de twee nooit uit elkaar lopen.
// Alleen subpagina's geven deze knop mee aan ScreenCanvas; de tabschermen
// (Home, Tips, Challenges, Profiel) tonen hem bewust niet. De hardware-
// terugknop springt daar nog wel naar Home (backBehavior "firstRoute").
//
// Ligt er niets onder het scherm (een deeplink, of een herlaad terwijl je op
// een subpagina stond), dan gaat de knop naar Home. Tot 10 september 2026
// verdween hij dan, maar een subpagina zonder navigatiepil en zonder knop is
// een scherm waar je niet meer uit komt (Stijn zat vast op de Hulplijn).

import { useNavigation, useRouter } from "expo-router";

import { TerugKnop } from "@mind/ui/components/TerugKnop";

export function TerugNaarVorige() {
  const navigation = useNavigation();
  const router = useRouter();

  const terug = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace("/dashboard");
    }
  };

  return <TerugKnop onPress={terug} />;
}
