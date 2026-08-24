// Het landelijke weerbericht: een keer per sessie ophalen en cachen, zie
// docs/limieten-en-misbruik.md sectie 4. Nul rijen betekent: onder de
// toondrempel, en dat is de empty state en geen fout.

import type { WeatherToday } from "@mind/types";

import { getSupabase } from "../backend/client.ts";

export type WeerberichtStand =
  | { staat: "geladen"; rijen: WeatherToday[] }
  | { staat: "leeg" }
  | { staat: "niet-ingelogd" }
  | { staat: "niet-verbonden" }
  | { staat: "fout" };

let cache: WeerberichtStand | null = null;

export async function haalWeerbericht(vernieuw = false): Promise<WeerberichtStand> {
  if (cache && !vernieuw && cache.staat === "geladen") return cache;
  const client = getSupabase();
  if (!client) {
    cache = { staat: "niet-verbonden" };
    return cache;
  }
  try {
    // weather_today is alleen voor ingelogde gebruikers (RLS-ontwerp). Zonder
    // sessie is "log eerst in" de juiste melding, niet "geen verbinding".
    const { data: sessie } = await client.auth.getSession();
    if (!sessie.session) {
      cache = { staat: "niet-ingelogd" };
      return cache;
    }
    const { data, error } = await client.rpc("weather_today");
    if (error) throw error;
    const rijen = (data ?? []) as WeatherToday[];
    cache = rijen.length ? { staat: "geladen", rijen } : { staat: "leeg" };
  } catch {
    cache = { staat: "fout" };
  }
  return cache;
}

export type InsturenResultaat = "gelukt" | "al-ingecheckt" | "niet-ingelogd" | "niet-verbonden";

// Insturen naar de anonieme pool. Het dagslot zit in submit_weather() aan de
// serverkant; "vandaag al ingecheckt" is een normale flow en geen bug.
export async function stuurWeerIn(weerbeeld: string): Promise<InsturenResultaat> {
  const client = getSupabase();
  if (!client) return "niet-verbonden";
  try {
    const { data } = await client.auth.getSession();
    if (!data.session) return "niet-ingelogd";
    const { error } = await client.rpc("submit_weather", { p_weather: weerbeeld });
    if (error) {
      if (error.message.includes("al ingecheckt")) return "al-ingecheckt";
      if (error.message.includes("niet ingelogd")) return "niet-ingelogd";
      return "niet-verbonden";
    }
    cache = null; // het landelijke beeld is veranderd
    return "gelukt";
  } catch {
    return "niet-verbonden";
  }
}
