// Verstuurt de tellers van afgesloten dagen, één batch per dag.
//
// Het slot staat op de server (profiles.last_usage_on, in log_usage()); de
// app onthoudt alleen op welke dag het al gebeurd is, om een zinloze aanroep
// over te slaan. Het moment van versturen zegt niets over wanneer iemand iets
// deed: de batch bevat alleen dagen die voorbij zijn. Er wordt hier niets van
// de inhoud gelogd, ook niet in een dev-build: alleen of het lukte.

import { getSupabase } from "@/features/backend/client";

import { leesInstellingen } from "../profiel/instellingen.ts";
import { datumISO } from "../weer/dagdeel.ts";
import { bewaarNu, leesStand } from "./opslag.ts";
import { splits, zonderBatch } from "./tellers.ts";

export type VerzendUitkomst = "uit" | "niets" | "al-gedaan" | "geen-sessie" | "gelukt" | "mislukt";

let bezig = false;

export async function verzendMetingen(): Promise<VerzendUitkomst> {
  if (bezig) return "niets";
  bezig = true;
  try {
    const { metenAan } = await leesInstellingen();
    if (!metenAan) return "uit";
    const stand = await leesStand();
    const vandaag = datumISO(new Date());
    if (stand.verzondenOp === vandaag) return "al-gedaan";

    const { batch, rest } = splits(stand.tellers, vandaag);
    if (batch.length === 0) {
      // Wat verlopen is gaat meteen weg, ook als er niets te versturen valt.
      if (Object.keys(rest).length !== Object.keys(stand.tellers).length) {
        stand.tellers = rest;
        await bewaarNu();
      }
      return "niets";
    }

    const client = getSupabase();
    if (!client) return "geen-sessie";
    const { data } = await client.auth.getSession();
    if (!data.session) return "geen-sessie";

    const { error } = await client.rpc("log_usage", { p_events: batch });
    if (error && !error.message.includes("al ingestuurd")) {
      // Blijft staan en gaat een volgende keer mee. In een dev-build wel
      // zeggen dat het misging: een stille fout bleef in september 2026 een
      // week onopgemerkt. Alleen de code, nooit de inhoud van de batch.
      if (__DEV__) console.warn("meten: batch niet aangenomen", error.code);
      return "mislukt";
    }
    stand.verzondenOp = vandaag;
    // Bij "al ingestuurd" (een tweede toestel, of de app opnieuw geinstalleerd)
    // blijven de tellers staan: ze gaan morgen mee.
    if (!error) stand.tellers = zonderBatch(stand.tellers, batch);
    await bewaarNu();
    return error ? "al-gedaan" : "gelukt";
  } catch {
    return "mislukt";
  } finally {
    bezig = false;
  }
}
