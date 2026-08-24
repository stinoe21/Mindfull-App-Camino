// Beschermde toegang tot de Supabase-client.
//
// apps/mobile/src/lib/supabase.ts gooit een fout zodra de omgevings-
// variabelen ontbreken (bewust: zie dat bestand). Tijdens ontwikkelen mag een
// ontbrekende .env de app niet laten crashen, dus feature-code haalt de client
// altijd hier op en behandelt null als "niet verbonden": dat is dezelfde
// nette-foutroute als offline zijn (definition of done, punt 2).

import type { supabase as SupabaseClientType } from "@/lib/supabase";

type Client = typeof SupabaseClientType;

let poging: { client: Client | null } | null = null;

export function getSupabase(): Client | null {
  if (!poging) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require("@/lib/supabase") as { supabase: Client };
      poging = { client: mod.supabase };
    } catch {
      poging = { client: null };
    }
  }
  return poging.client;
}
