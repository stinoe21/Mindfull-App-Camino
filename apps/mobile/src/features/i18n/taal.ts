// De taal van de UI: een kleine store zonder provider, zodat de root layout
// (verboden terrein voor feature-taken) niet aangeraakt hoeft te worden.
// Schermen lezen de taal met useTaal(); de keuze wordt bewaard in de
// bestaande lokale instellingen-opslag en overleeft dus een herstart.
//
// "systeem" volgt de taal van het toestel via expo-localization. Alles wat
// geen Nederlands is valt terug op Engels: dat zijn de enige twee talen met
// vertaalbestanden. Een derde taal toevoegen is een nieuw bestand in
// vertalingen/ plus een regel in VERTALINGEN en TAAL_OPTIES.

import { getLocales } from "expo-localization";
import { useSyncExternalStore } from "react";

import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";

import { en } from "./vertalingen/en";
import { nl, type VertaalSleutel } from "./vertalingen/nl";

export type Taal = "nl" | "en";
export type TaalKeuze = Taal | "systeem";

export const TAAL_OPTIES: { keuze: TaalKeuze; labelSleutel: VertaalSleutel }[] = [
  { keuze: "systeem", labelSleutel: "instellingen.taal.systeem" },
  { keuze: "nl", labelSleutel: "instellingen.taal.nederlands" },
  { keuze: "en", labelSleutel: "instellingen.taal.engels" },
];

const VERTALINGEN: Record<Taal, Record<VertaalSleutel, string>> = { nl, en };

let keuze: TaalKeuze = "systeem";
const luisteraars = new Set<() => void>();

const meld = () => luisteraars.forEach((l) => l());

// Eén keer lazy laden bij het eerste gebruik, zodat er geen init-aanroep in
// de root layout nodig is. Mislukt het lezen, dan blijft "systeem" staan.
let laden: Promise<void> | null = null;
function laadEenmalig(): Promise<void> {
  if (!laden) {
    laden = leesInstellingen()
      .then((i) => {
        if (i.taal !== keuze) {
          keuze = i.taal;
          meld();
        }
      })
      .catch(() => undefined);
  }
  return laden;
}

export function systeemTaal(): Taal {
  try {
    return getLocales()[0]?.languageCode === "nl" ? "nl" : "en";
  } catch {
    return "nl";
  }
}

export function kiesTaal(nieuw: TaalKeuze): void {
  keuze = nieuw;
  meld();
  // Bewust niet awaiten: de keuze werkt direct, en niet kunnen bewaren mag
  // de flow niet blokkeren (zelfde patroon als bewaarInstellingen zelf).
  void bewaarInstellingen({ taal: nieuw });
}

/**
 * Hook voor schermen: geeft de actieve taal, de bewaarde keuze en t().
 * t() valt terug op het Nederlands als een sleutel (nog) niet vertaald is.
 */
export function useTaal() {
  const huidigeKeuze = useSyncExternalStore(
    (bijWijziging) => {
      luisteraars.add(bijWijziging);
      void laadEenmalig();
      return () => luisteraars.delete(bijWijziging);
    },
    () => keuze
  );
  const taal: Taal = huidigeKeuze === "systeem" ? systeemTaal() : huidigeKeuze;
  const t = (sleutel: VertaalSleutel): string => VERTALINGEN[taal][sleutel] ?? nl[sleutel];
  return { taal, keuze: huidigeKeuze, kiesTaal, t };
}
