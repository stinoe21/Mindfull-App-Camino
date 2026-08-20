// Types die uit het Supabase-schema komen, plus een handvol namen die het
// gebruik ervan leesbaar houden. Zie docs/datamodel.md voor wat elk veld betekent
// en hoe lang het bewaard wordt.

import type { Tables } from "./database";

export type { Database, Json } from "./database";
export type { Tables, TablesInsert, TablesUpdate, Enums } from "./database";

export type Profile = Tables<"profiles">;
export type WeatherType = Tables<"weather_type">;
export type WeatherHourly = Tables<"weather_hourly">;

/**
 * De vijf weerbeelden.
 *
 * `weather_type` is een lookup-tabel en geen enum, dus het schema levert hier
 * `string`. Deze unie is de smallere vorm die de app gebruikt, en hij moet
 * gelijk blijven aan supabase/migrations/20260811090612_seed_weather_types.sql.
 * Wijzigt daar een code, dan wijzigt hij hier ook: een migratie plus een PR.
 *
 * Dit zijn precies de vijf weerstaten in het ontwerp. `default` en `intake` zijn
 * mascottehoudingen en geen uitkomst, die horen hier dus niet bij.
 */
export const WEATHER_CODES = ["zonnig", "wolken", "mist", "wind", "regen"] as const;
export type WeatherCode = (typeof WEATHER_CODES)[number];

/** Een rij uit de RPC `weather_today`: het collectieve beeld van vandaag. */
export type WeatherToday = {
  weather: string;
  label: string;
  total: number;
  share: number;
};
