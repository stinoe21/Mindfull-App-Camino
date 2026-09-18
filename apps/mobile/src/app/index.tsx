// Startpunt.
//
// Zonder account kom je de app niet in. Er zijn twee voorwaarden voor het
// dashboard: een afgeronde onboarding, en een sessie op dit toestel.
//
// - Geen afgeronde onboarding: die begint bij welkom.
// - Wel afgerond, maar de sessie is echt weg (lang niet gebruikt, elders
//   uitgelogd): direct naar inloggen. Naam, onderwerpen en toestemming staan
//   nog op het toestel, dus de rest van de onboarding hoeft niet opnieuw.
// - Wel afgerond en de sessie is niet te controleren, meestal omdat er geen
//   netwerk is: gewoon naar binnen. Tips, challenges en je eigen weer werken
//   zonder server, en zodra er weer verbinding is ververst het token vanzelf
//   (features/auth/sessie.tsx). Tot 18 september 2026 begon dan de hele
//   onboarding opnieuw.
//
// Tijdens het lezen blijft het scherm leeg in de achtergrondkleur; dat is
// een tel, geen laadscherm waard.

import { Redirect, type Href } from "expo-router";
import { useEffect, useState } from "react";

import { useSessie } from "@/features/auth/sessie";
import { leesInstellingen } from "@/features/profiel/instellingen";

export default function Start() {
  const { stand } = useSessie();
  const [afgerond, zetAfgerond] = useState<boolean | null>(null);

  useEffect(() => {
    let actief = true;
    leesInstellingen().then((i) => {
      if (actief) zetAfgerond(i.onboardingAfgerond);
    });
    return () => {
      actief = false;
    };
  }, []);

  if (afgerond === null || stand === "laden") return null;
  const doel: Href = !afgerond ? "/welkom" : stand === "uitgelogd" ? { pathname: "/inloggen", params: { stand: "inloggen" } } : "/dashboard";
  return <Redirect href={doel} />;
}
