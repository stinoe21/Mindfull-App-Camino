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

export type InsturenResultaat = "gelukt" | "al-bijgedragen" | "niet-ingelogd" | "niet-verbonden";

/** Wat het insturen opleverde, en bij "gelukt" het dagdeel (1 of 2) dat de server registreerde. */
export type Insturen = { resultaat: InsturenResultaat; dagdeel: 1 | 2 | 0 };

// Insturen naar de anonieme pool. Het slot per dagdeel zit in submit_weather()
// aan de serverkant (sinds 15 september 2026: maximaal een bijdrage voor en
// een vanaf 12.00 uur); "dit dagdeel al bijgedragen" is een normale flow en
// geen bug. Tot de migratie gepusht is meldt een oudere server nog "vandaag
// al ingecheckt"; die telt hier als hetzelfde.
export async function stuurWeerIn(weerbeeld: string, provincie: string | null = null): Promise<Insturen> {
  const client = getSupabase();
  if (!client) return { resultaat: "niet-verbonden", dagdeel: 0 };
  try {
    const { data } = await client.auth.getSession();
    if (!data.session) return { resultaat: "niet-ingelogd", dagdeel: 0 };
    // De provincie komt alleen via de locatie van het toestel
    // (features/weer/locatie.ts); zonder provincie telt de check-in als
    // "onbekend" mee. Zie de migratie van 10 september 2026.
    const { data: dagdeel, error } = await client.rpc("submit_weather", { p_weather: weerbeeld, p_province: provincie ?? "onbekend" });
    if (error) {
      if (error.message.includes("al bijgedragen") || error.message.includes("al ingecheckt")) return { resultaat: "al-bijgedragen", dagdeel: 0 };
      if (error.message.includes("niet ingelogd")) return { resultaat: "niet-ingelogd", dagdeel: 0 };
      return { resultaat: "niet-verbonden", dagdeel: 0 };
    }
    cache = null; // het landelijke beeld is veranderd
    cacheProvincies = null;
    // Een oudere server geeft niets terug; dan geldt de klok van het toestel.
    return { resultaat: "gelukt", dagdeel: dagdeel === 1 || dagdeel === 2 ? dagdeel : new Date().getHours() < 12 ? 1 : 2 };
  } catch {
    return { resultaat: "niet-verbonden", dagdeel: 0 };
  }
}
