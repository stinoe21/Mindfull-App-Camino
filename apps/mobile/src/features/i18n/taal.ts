// De taal van de UI: een kleine store zonder provider, zodat de root layout
// (verboden terrein voor feature-taken) niet aangeraakt hoeft te worden.
// Schermen lezen de taal met useVertaling(); de keuze wordt bewaard in de
// bestaande lokale instellingen-opslag en overleeft dus een herstart.
//
// "systeem" volgt de taal van het toestel via expo-localization. Alles wat
// geen Nederlands is valt terug op Engels: dat zijn de enige twee talen.
// Een derde taal toevoegen is elk woordenboek uitbreiden met die taalcode.
//
// BELANGRIJK: alleen interface-teksten gaan door deze laag. De MIND-content,
// de consent-teksten (Paul), de hulplijn-verwijzing zelf en de check-in-
// vraagteksten blijven Nederlands tot er canonieke Engelse teksten zijn.
// Zie issue #47 en docs/scope.md.

import { getLocales } from "expo-localization";
import { useSyncExternalStore } from "react";

import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";

export type Taal = "nl" | "en";
export type TaalKeuze = Taal | "systeem";

export const TAAL_KEUZES: TaalKeuze[] = ["systeem", "nl", "en"];

/**
 * Een woordenboek voor één scherm: het Nederlands is de bron en bepaalt de
 * sleutels, het Engels moet ze allemaal invullen (afgedwongen door het type).
 */
export type Woordenboek<T extends Record<string, string>> = {
  nl: T;
  en: Record<keyof T, string>;
};

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

/** De actieve taal en de bewaarde keuze, plus de setter. Voor de taalknop. */
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
  return { taal, keuze: huidigeKeuze, kiesTaal };
}

/**
 * De hook die elk scherm gebruikt: geef het co-locale woordenboek van dat
 * scherm mee, krijg een t() terug die de actieve taal volgt. Een ontbrekende
 * Engelse sleutel valt terug op het Nederlands, zodat er nooit een lege of
 * kapotte tekst verschijnt.
 */
export function useVertaling<T extends Record<string, string>>(woordenboek: Woordenboek<T>) {
  const { taal } = useTaal();
  return (sleutel: keyof T): string => woordenboek[taal][sleutel] ?? woordenboek.nl[sleutel];
}
