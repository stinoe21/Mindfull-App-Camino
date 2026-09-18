// De sessie, op één plek gevolgd.
//
// Tot 18 september 2026 vroeg elk scherm zelf of er een sessie was, en alleen
// op het moment dat het opende. Niemand luisterde naar veranderingen, en het
// verversen van het token liep op een timer die op de achtergrond stilstaat.
// Wie de app een middag liet liggen, kwam terug met een verlopen token en
// merkte dat pas bij de volgende check-in.
//
// Wat hier gebeurt:
// - We luisteren naar onAuthStateChange, zodat inloggen, uitloggen en een
//   ververst token meteen overal bekend zijn.
// - Het automatisch verversen loopt alleen terwijl de app op de voorgrond
//   staat, zoals Supabase voor React Native voorschrijft: bij terugkomst
//   uit de achtergrond start het opnieuw en wordt het token direct ververst.
// - "onbekend" bestaat naast "uitgelogd": zonder netwerk is een verlopen
//   token niet te verversen, maar de sessie staat dan nog gewoon op het
//   toestel. Dat is geen reden om iemand de app uit te zetten; Tips,
//   challenges en je eigen weer werken zonder server.
//
// Er wordt hier niets gelogd en niets bewaard. Het e-mailadres komt uit de
// sessie en dient alleen voor de regel onder Profiel.

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AppState, type AppStateStatus } from "react-native";

import { getSupabase } from "@/features/backend/client";

export type SessieStand = "laden" | "ingelogd" | "uitgelogd" | "onbekend";

type Sessie = { stand: SessieStand; email: string | null };

const BEGIN: Sessie = { stand: "laden", email: null };

const SessieContext = createContext<Sessie>(BEGIN);

export function SessieProvider({ children }: { children: ReactNode }) {
  const [sessie, zetSessie] = useState<Sessie>(BEGIN);

  useEffect(() => {
    const client = getSupabase();
    // Geen client is geen omgeving (ontwikkelen zonder .env): nooit ingelogd.
    if (!client) {
      zetSessie({ stand: "uitgelogd", email: null });
      return;
    }
    let actief = true;

    client.auth
      .getSession()
      .then(({ data, error }) => {
        if (!actief) return;
        if (data.session) zetSessie({ stand: "ingelogd", email: data.session.user.email ?? null });
        // Een fout zonder sessie is een token dat niet ververst kon worden,
        // meestal omdat er geen netwerk is. Is de sessie echt ongeldig, dan
        // meldt Supabase dat hieronder als uitgelogd.
        else zetSessie({ stand: error ? "onbekend" : "uitgelogd", email: null });
      })
      .catch(() => {
        if (actief) zetSessie({ stand: "onbekend", email: null });
      });

    // In deze callback nooit zelf een Supabase-aanroep doen: dat kan vastlopen.
    const { data: abonnement } = client.auth.onAuthStateChange((gebeurtenis, nieuw) => {
      if (!actief) return;
      if (nieuw) zetSessie({ stand: "ingelogd", email: nieuw.user.email ?? null });
      else if (gebeurtenis === "SIGNED_OUT") zetSessie({ stand: "uitgelogd", email: null });
    });

    const volgApp = (toestand: AppStateStatus) => {
      if (toestand === "active") client.auth.startAutoRefresh();
      else client.auth.stopAutoRefresh();
    };
    volgApp(AppState.currentState);
    const luisteraar = AppState.addEventListener("change", volgApp);

    return () => {
      actief = false;
      abonnement.subscription.unsubscribe();
      luisteraar.remove();
      client.auth.stopAutoRefresh();
    };
  }, []);

  return <SessieContext.Provider value={sessie}>{children}</SessieContext.Provider>;
}

export function useSessie(): Sessie {
  return useContext(SessieContext);
}
