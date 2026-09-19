// Haalt de tips van MIND op en bewaart ze lokaal.
//
// Eén aanroep, published_tips(), zonder argumenten: de app vraagt nooit om een
// onderwerp, zodat het verkeer niets zegt over wat iemand leest (zie
// docs/datamodel.md, tabel content_tips). Lukt het ophalen niet, dan blijft
// staan wat er al was; zonder iets toont de app gewoon zijn eigen tips. Er
// wordt niets gelogd en er gaat niets over de gebruiker mee.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getSupabase } from "@/features/backend/client";

import { schoonAntwoord, zetMindTips } from "./mindTipsVorm.ts";

// Onder "mind.", dus het gaat mee met uitloggen en account verwijderen. Het is
// geen gebruikersdata, maar zo blijft er na een ander account niets achter.
const SLEUTEL = "mind.content.tips";

let gestart = false;

/** Eerst wat er lokaal staat, daarna de database. Eén keer per keer dat de app start. */
export async function laadMindTips(ingelogd: boolean): Promise<void> {
  if (!gestart) {
    gestart = true;
    try {
      const raw = await AsyncStorage.getItem(SLEUTEL);
      if (raw) zetMindTips(schoonAntwoord(JSON.parse(raw)));
    } catch {
      // stil
    }
  }
  if (!ingelogd) return;
  try {
    const client = getSupabase();
    if (!client) return;
    const { data, error } = await client.rpc("published_tips");
    if (error || !data) return;
    zetMindTips(schoonAntwoord(data));
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify(data));
  } catch {
    // stil: de app toont wat hij al had.
  }
}
