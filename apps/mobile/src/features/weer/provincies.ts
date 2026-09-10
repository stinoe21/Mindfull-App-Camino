// De twaalf provincies, voor het mentale weer per provincie.
//
// Besloten na de feedbacksessie met MIND (verwerkt 10 september 2026): de
// gebruiker kiest zelf, één keer en vrijwillig, in welke provincie hij woont.
// Geen locatiebepaling: dat blijft in de lijst "wat we bewust niet opslaan"
// in docs/datamodel.md. De keuze staat lokaal en gaat alleen mee als
// provincie bij het optellen van een check-in, nooit als locatie op zich.

import type { ProvincieCode } from "@mind/ui/components/KaartNederland";

export type { ProvincieCode };

export const PROVINCIE_NAMEN: Record<ProvincieCode, string> = {
  groningen: "Groningen",
  friesland: "Friesland",
  drenthe: "Drenthe",
  overijssel: "Overijssel",
  flevoland: "Flevoland",
  gelderland: "Gelderland",
  utrecht: "Utrecht",
  "noord-holland": "Noord-Holland",
  "zuid-holland": "Zuid-Holland",
  zeeland: "Zeeland",
  "noord-brabant": "Noord-Brabant",
  limburg: "Limburg",
};

export const PROVINCIE_CODES = Object.keys(PROVINCIE_NAMEN) as ProvincieCode[];

export const isProvincie = (code: string | null | undefined): code is ProvincieCode =>
  !!code && code in PROVINCIE_NAMEN;
