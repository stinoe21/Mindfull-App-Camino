// Het landelijke weerbericht: een keer per sessie ophalen en cachen, zie
// docs/limieten-en-misbruik.md sectie 4. Nul rijen betekent: onder de
// toondrempel, en dat is de empty state en geen fout.

import type { WeatherToday, WeatherTodayProvince } from "@mind/types";

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

let cacheProvincies: WeatherTodayProvince[] | null = null;

// Per provincie het weerbeeld dat het vaakst voorkomt, voor de kaart op Home.
// Leeg is normaal: geen enkele provincie boven de drempel, of niet ingelogd.
export async function haalWeerberichtProvincies(vernieuw = false): Promise<WeatherTodayProvince[]> {
  if (cacheProvincies && !vernieuw) return cacheProvincies;
  const client = getSupabase();
  if (!client) return [];
  try {
    const { data: sessie } = await client.auth.getSession();
    if (!sessie.session) return [];
    const { data, error } = await client.rpc("weather_today_by_province");
    if (error) throw error;
    cacheProvincies = (data ?? []) as WeatherTodayProvince[];
    return cacheProvincies;
  } catch {
    return [];
  }
}

export type InsturenResultaat = "gelukt" | "al-ingecheckt" | "niet-ingelogd" | "niet-verbonden";

// Insturen naar de anonieme pool. Het dagslot zit in submit_weather() aan de
// serverkant; "vandaag al ingecheckt" is een normale flow en geen bug.
export async function stuurWeerIn(weerbeeld: string, provincie: string | null = null): Promise<InsturenResultaat> {
  const client = getSupabase();
  if (!client) return "niet-verbonden";
  try {
    const { data } = await client.auth.getSession();
    if (!data.session) return "niet-ingelogd";
    // De provincie is een zelf gekozen instelling; zonder keuze telt de
    // check-in als "onbekend" mee. Zie de migratie van 10 september 2026.
    const { error } = await client.rpc("submit_weather", { p_weather: weerbeeld, p_province: provincie ?? "onbekend" });
    if (error) {
      if (error.message.includes("al ingecheckt")) return "al-ingecheckt";
      if (error.message.includes("niet ingelogd")) return "niet-ingelogd";
      return "niet-verbonden";
    }
    cache = null; // het landelijke beeld is veranderd
    cacheProvincies = null;
    return "gelukt";
  } catch {
    return "niet-verbonden";
  }
}
