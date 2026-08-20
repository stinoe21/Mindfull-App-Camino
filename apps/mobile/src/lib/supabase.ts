// De verbinding met Supabase. Eén client voor de hele app.
//
// Wat hier bewust NIET staat: inlog-, sessie- of uitlogcode. Dat is een eigen
// taak van de eigenaar, zie CLAUDE.md sectie 5. Dit bestand maakt alleen de
// verbinding, zodat een feature-taak `supabase` kan importeren zonder een
// gedeeld bestand aan te raken.
//
// Over de sleutel: de anon key wordt meegecompileerd en is te lezen door iedere
// gebruiker van de app. Dat is geen lek. Wat de data beschermt is Row Level
// Security, niet de geheimhouding van deze sleutel. De service role key omzeilt
// RLS volledig en hoort daarom nooit in de app, nooit in een .env naast de app
// en nooit op een laptop. Zie CLAUDE.md sectie 9.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

import type { Database } from "@mind/types";

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  throw new Error(
    "EXPO_PUBLIC_SUPABASE_URL of EXPO_PUBLIC_SUPABASE_ANON_KEY ontbreekt. " +
      "Maak apps/mobile/.env.local aan vanuit .env.example, zie ONBOARDING.md."
  );
}

export const supabase = createClient<Database>(url, anonKey, {
  auth: {
    // De sessie hoort de app-herstart te overleven, anders moet iemand elke keer
    // opnieuw inloggen. AsyncStorage zit in Expo Go, dus dit werkt zonder build.
    storage: AsyncStorage,
    persistSession: true,
    autoRefreshToken: true,
    // Er is geen webredirect in een native app.
    detectSessionInUrl: false,
  },
});
