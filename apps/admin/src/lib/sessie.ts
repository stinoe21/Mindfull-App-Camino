// Wie er is ingelogd, en of die in het beheer mag.
//
// De rol komt uit de database (admin_role()), niet uit het token en niet uit
// deze code: een gewone gebruiker van de app kan hier inloggen en krijgt dan
// "geen toegang". Zie docs/datamodel.md, tabel admin_users.

import { useEffect, useState } from "react";

import { supabase } from "./supabase.ts";

export type Rol = "analist" | "redacteur" | "beheerder";

export type Stand =
  | { fase: "laden" }
  | { fase: "niet-ingesteld" }
  | { fase: "uitgelogd" }
  | { fase: "geen-toegang"; email: string | null }
  | { fase: "fout"; email: string | null }
  | { fase: "binnen"; email: string | null; rol: Rol };

const isRol = (r: unknown): r is Rol => r === "analist" || r === "redacteur" || r === "beheerder";

export function useSessie(): Stand {
  const [stand, zetStand] = useState<Stand>(supabase ? { fase: "laden" } : { fase: "niet-ingesteld" });

  useEffect(() => {
    const client = supabase;
    if (!client) return;
    let actief = true;

    const bepaal = async () => {
      const { data } = await client.auth.getSession();
      if (!actief) return;
      if (!data.session) return zetStand({ fase: "uitgelogd" });
      const email = data.session.user.email ?? null;
      const { data: rol, error } = await client.rpc("admin_role");
      if (!actief) return;
      if (error) return zetStand({ fase: "fout", email });
      zetStand(isRol(rol) ? { fase: "binnen", email, rol } : { fase: "geen-toegang", email });
    };

    void bepaal();
    // Niet in de callback zelf op Supabase wachten: dat kan de client blokkeren.
    const { data: abonnement } = client.auth.onAuthStateChange(() => {
      setTimeout(() => void bepaal(), 0);
    });
    return () => {
      actief = false;
      abonnement.subscription.unsubscribe();
    };
  }, []);

  return stand;
}

export async function logUit(): Promise<void> {
  await supabase?.auth.signOut();
}
