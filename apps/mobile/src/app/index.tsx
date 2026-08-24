// Startpunt.
//
// Kiest tussen de onboarding en het dashboard op basis van wat er lokaal
// bekend is: is de onboarding ooit afgerond, dan direct naar het dashboard.
// Tijdens het lezen blijft het scherm leeg in de achtergrondkleur; dat is
// een tel, geen laadscherm waard.

import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { leesInstellingen } from "@/features/profiel/instellingen";

export default function Start() {
  const [doel, zetDoel] = useState<"/dashboard" | "/welkom" | null>(null);

  useEffect(() => {
    leesInstellingen().then((i) => zetDoel(i.onboardingAfgerond ? "/dashboard" : "/welkom"));
  }, []);

  if (!doel) return null;
  return <Redirect href={doel} />;
}
