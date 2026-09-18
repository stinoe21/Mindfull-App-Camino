// De ene Supabase-client van het beheer. Zelfde project en zelfde publieke
// sleutel als de app. Er is bewust geen tweede client met meer rechten.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@mind/types";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const sleutel = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

/** null als de omgeving niet is ingevuld; het scherm zegt dat dan. */
export const supabase: SupabaseClient<Database> | null = url && sleutel ? createClient<Database>(url, sleutel) : null;
