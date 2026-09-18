// De taal van de UI: een kleine store zonder provider, zodat de root layout
// (verboden terrein voor feature-taken) niet aangeraakt hoeft te worden.
// Schermen lezen de taal met useVertaling(); de keuze wordt bewaard in de
// bestaande lokale instellingen-opslag en overleeft dus een herstart.
//
// De app begint altijd in het Nederlands (Stijn, 17 september 2026), en niet
// meer in de taal van het toestel: een telefoon die op Engels staat zegt niets
// over de taal waarin iemand over zijn gevoel wil lezen. Wisselen kan op het
// welkomscherm en onder Profiel. Een eerder bewaarde keuze "systeem" telt als
// Nederlands. Een derde taal toevoegen is elk woordenboek uitbreiden met die
// taalcode.
//
// BELANGRIJK: alleen interface-teksten gaan door deze laag. De MIND-content,
// de consent-teksten (Paul), de hulplijn-verwijzing zelf en de check-in-
// vraagteksten blijven Nederlands tot er canonieke Engelse teksten zijn.
// Zie issue #47 en docs/scope.md.

import { useSyncExternalStore } from "react";

import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";

export type Taal = "nl" | "en";

/**
 * Engels staat uit (Stijn, 18 september 2026). De bediening is vertaald, maar
 * de toestemming, de Hulplijn, de check-in-vragen, de uitkomsten en alle
 * content van MIND niet. Toestemming geven in een taal die iemand maar half
 * leest is juridisch zwak, en een app die halverwege van taal wisselt leest
 * als kapot. Tot MIND en Paul de Engelse kernteksten leveren is de app
 * Nederlands, ook voor wie eerder Engels koos.
 *
 * Weer aanzetten is deze ene regel op true: de knop op het welkomscherm en de
 * rij onder Profiel komen dan terug, en alle vertalingen staan er nog.
 */
export const ENGELS_BESCHIKBAAR: boolean = false;

export const TAAL_KEUZES: Taal[] = ENGELS_BESCHIKBAAR ? ["nl", "en"] : ["nl"];

/**
 * Een woordenboek voor één scherm: het Nederlands is de bron en bepaalt de
 * sleutels, het Engels moet ze allemaal invullen (afgedwongen door het type).
 */
export type Woordenboek<T extends Record<string, string>> = {
  nl: T;
  en: Record<keyof T, string>;
};

let keuze: Taal = "nl";
const luisteraars = new Set<() => void>();

const meld = () => luisteraars.forEach((l) => l());

// Eén keer lazy laden bij het eerste gebruik, zodat er geen init-aanroep in
// de root layout nodig is. Mislukt het lezen, dan blijft het Nederlands.
let laden: Promise<void> | null = null;
function laadEenmalig(): Promise<void> {
  if (!laden) {
    laden = leesInstellingen()
      .then((i) => {
        const bewaard: Taal = ENGELS_BESCHIKBAAR && i.taal === "en" ? "en" : "nl";
        if (bewaard !== keuze) {
          keuze = bewaard;
          meld();
        }
      })
      .catch(() => undefined);
  }
  return laden;
}

export function kiesTaal(nieuw: Taal): void {
  if (nieuw === "en" && !ENGELS_BESCHIKBAAR) return;
  keuze = nieuw;
  meld();
  // Bewust niet awaiten: de keuze werkt direct, en niet kunnen bewaren mag
  // de flow niet blokkeren (zelfde patroon als bewaarInstellingen zelf).
  void bewaarInstellingen({ taal: nieuw });
}

/** De actieve taal plus de setter. Voor de taalknop. */
export function useTaal() {
  const taal = useSyncExternalStore(
    (bijWijziging) => {
      luisteraars.add(bijWijziging);
      void laadEenmalig();
      return () => luisteraars.delete(bijWijziging);
    },
    () => keuze
  );
  return { taal, kiesTaal };
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
