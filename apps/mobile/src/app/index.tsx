// Startpunt.
//
// Zonder account kom je de app niet in. Er zijn twee voorwaarden voor het
// dashboard: een geldige Supabase-sessie op dit toestel, en een afgeronde
// onboarding. Ontbreekt een van beide, dan begint de onboarding bij welkom.
// Tijdens het lezen blijft het scherm leeg in de achtergrondkleur; dat is
// een tel, geen laadscherm waard.

import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

import { getSupabase } from "@/features/backend/client";
import { leesInstellingen } from "@/features/profiel/instellingen";

export default function Start() {
  const [doel, zetDoel] = useState<"/dashboard" | "/welkom" | null>(null);

  useEffect(() => {
    let actief = true;
    const bepaal = async () => {
      const instellingen = await leesInstellingen();
      const client = getSupabase();
      let ingelogd = false;
      if (client) {
        // Faalt de sessiecontrole (bijv. offline zonder bewaarde sessie), dan
        // geldt dat als niet ingelogd: de onboarding is dan de veilige kant.
        const { data } = await client.auth.getSession().catch(() => ({ data: { session: null } }));
        ingelogd = Boolean(data.session);
      }
      if (actief) zetDoel(ingelogd && instellingen.onboardingAfgerond ? "/dashboard" : "/welkom");
    };
    bepaal();
    return () => {
      actief = false;
    };
  }, []);

  if (!doel) return null;
  return <Redirect href={doel} />;
}
