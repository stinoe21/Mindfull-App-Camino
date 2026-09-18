// De ene functie die een scherm aanroept: meet({ naam: "topic_opened", item }).
//
// Een scherm weet verder niets: niet waar het geteld wordt, niet wanneer het
// verstuurd wordt. Er gaat hier niets naar de server en er wordt niets gelogd;
// de meting telt op bij een teller van vandaag, zonder tijdstip. Staat het
// meten uit (Profiel), dan gebeurt er niets. Zie docs/datamodel.md, sectie
// "Gebruikstotalen", en events.ts voor wat er geteld mag worden.

import { Platform } from "react-native";

import { leesInstellingen } from "../profiel/instellingen.ts";
import { datumISO } from "../weer/dagdeel.ts";
import { schoonItem, type Meting } from "./events.ts";
import { bewaarStraks, leesStand } from "./opslag.ts";
import { eersteKeer, telOp } from "./tellers.ts";

async function verwerk(meting: Meting): Promise<void> {
  const item = schoonItem(meting.naam, "item" in meting ? meting.item : undefined);
  if (item === null) return;
  const { metenAan } = await leesInstellingen();
  if (!metenAan) return;
  const stand = await leesStand();
  telOp(stand.tellers, datumISO(new Date()), meting.naam, item);
  bewaarStraks();
}

/** Telt één gebeurtenis. Wacht nergens op en gooit nooit: meten mag de app niet raken. */
export function meet(meting: Meting): void {
  verwerk(meting).catch(() => {
    // stil
  });
}

/**
 * Actieve gebruikers zonder id: telt één keer per dag, per week en per maand
 * dat de app geopend is. Aanroepen bij het starten en bij terugkomen uit de
 * achtergrond.
 */
export async function meetGeopend(): Promise<void> {
  try {
    const { metenAan } = await leesInstellingen();
    if (!metenAan) return;
    const stand = await leesStand();
    const eerste = eersteKeer(stand.geopend, new Date());
    if (!eerste.dag && !eerste.week && !eerste.maand) return;
    stand.geopend = eerste.nieuw;
    if (eerste.dag && (Platform.OS === "ios" || Platform.OS === "android")) meet({ naam: "app_opened_day", item: Platform.OS });
    if (eerste.week) meet({ naam: "app_opened_week" });
    if (eerste.maand) meet({ naam: "app_opened_month" });
    bewaarStraks();
  } catch {
    // stil
  }
}
