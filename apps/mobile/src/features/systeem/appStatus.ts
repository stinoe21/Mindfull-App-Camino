// De noodrem aan de kant van de app.
//
// De server kent een minimale versie en een optioneel onderhoudsbericht
// (supabase/migrations/20260918170000_app_status.sql). De app leest die na het
// inloggen, vergelijkt zelf met zijn eigen versie en stuurt niets over zichzelf
// mee. Is de app te oud of is er onderhoud, dan stuurt de poort
// (features/auth/Poort.tsx) naar /bijwerken.
//
// De app faalt open. Geen client, geen sessie, geen netwerk, een fout of een
// onleesbaar antwoord: de stand blijft "ok". Een noodrem die de app blokkeert
// omdat de server hapert is erger dan geen noodrem, en Tips, challenges en je
// eigen weer werken zonder server.
//
// Een kleine store zonder provider, net als features/i18n/taal.ts. Er wordt
// hooguit eens per uur opnieuw gevraagd; de stand staat alleen in het geheugen.

import Constants from "expo-constants";
import { useSyncExternalStore } from "react";

import { getSupabase } from "@/features/backend/client";

import { isTeOud } from "./versie.ts";

export type AppStatus = { soort: "ok" } | { soort: "te-oud" } | { soort: "onderhoud"; bericht: string };

const OK: AppStatus = { soort: "ok" };
const UUR = 60 * 60 * 1000;

let stand: AppStatus = OK;
let laatstGevraagd = 0;
const luisteraars = new Set<() => void>();

function zet(nieuw: AppStatus) {
  if (nieuw.soort === stand.soort && (nieuw.soort !== "onderhoud" || (stand.soort === "onderhoud" && stand.bericht === nieuw.bericht))) return;
  stand = nieuw;
  luisteraars.forEach((l) => l());
}

/** Vraagt de stand op. Met nu = true ook als het laatste antwoord nog vers is. */
export async function controleerAppStatus(nu = false): Promise<AppStatus> {
  if (!nu && Date.now() - laatstGevraagd < UUR) return stand;
  const client = getSupabase();
  if (!client) return stand;
  try {
    const { data: sessie } = await client.auth.getSession();
    // De functie is alleen voor wie is ingelogd; zonder sessie vragen we niet.
    if (!sessie.session) return stand;
    const { data, error } = await client.rpc("get_app_status");
    if (error || !data?.length) return stand;
    laatstGevraagd = Date.now();
    const rij = data[0] as { min_version: string | null; maintenance: string | null };
    const bericht = rij.maintenance?.trim();
    if (bericht) zet({ soort: "onderhoud", bericht });
    else if (isTeOud(Constants.expoConfig?.version, rij.min_version)) zet({ soort: "te-oud" });
    else zet(OK);
  } catch {
    // Faalt open, zie boven.
  }
  return stand;
}

export function useAppStatus(): AppStatus {
  return useSyncExternalStore(
    (bijWijziging) => {
      luisteraars.add(bijWijziging);
      return () => luisteraars.delete(bijWijziging);
    },
    () => stand
  );
}
