// De poort voor alles achter de onboarding: de tabs, de check-in en het
// weerbericht.
//
// app/index.tsx stuurt je bij het opstarten de goede kant op, maar een link
// als mentaleweerbericht:///dashboard slaat dat scherm over. Zonder deze poort
// stond je dan in de app zonder leeftijdsvraag en zonder toestemming. De
// poort kijkt alleen naar de afgeronde onboarding. Een verlopen sessie zet
// niemand de app uit: die krijgt op Home en onder Profiel een rustige regel
// met "Inloggen" (features/auth/sessie.tsx).
//
// Dezelfde poort bewaakt de noodrem (features/systeem/appStatus.ts): zegt de
// server dat deze versie te oud is of dat er onderhoud is, dan gaat iedereen
// achter de poort naar /bijwerken. Die controle faalt open.
//
// De onboarding-stand wordt één keer bepaald, bij het openen. Uitloggen en account
// verwijderen sturen zelf naar het welkomscherm; zou de poort meeluisteren,
// dan trok hij het scherm onder die route vandaan.

import { Redirect } from "expo-router";
import { useEffect, useState, type ReactNode } from "react";

import { useSessie } from "@/features/auth/sessie";
import { instellingenAlsBekend, leesInstellingen } from "@/features/profiel/instellingen";
import { controleerAppStatus, useAppStatus } from "@/features/systeem/appStatus";

export function Poort({ children }: { children: ReactNode }) {
  const [binnen, zetBinnen] = useState<boolean | null>(() => instellingenAlsBekend()?.onboardingAfgerond ?? null);

  useEffect(() => {
    if (binnen !== null) return;
    let actief = true;
    leesInstellingen().then((i) => {
      if (actief) zetBinnen(i.onboardingAfgerond);
    });
    return () => {
      actief = false;
    };
  }, [binnen]);

  // De noodrem: vragen zodra er een sessie is, hooguit eens per uur.
  const { stand } = useSessie();
  const status = useAppStatus();
  useEffect(() => {
    if (stand === "ingelogd") void controleerAppStatus();
  }, [stand]);

  // Een tel leeg in de achtergrondkleur, net als app/index.tsx.
  if (binnen === null) return null;
  if (!binnen) return <Redirect href="/welkom" />;
  if (status.soort !== "ok") return <Redirect href="/bijwerken" />;
  return <>{children}</>;
}
