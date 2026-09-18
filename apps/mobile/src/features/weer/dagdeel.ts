// Datum, dagdeel en tijdstip op de klok van het toestel.
//
// Puur, met het moment als argument, zodat de grens van 12.00 uur en de
// datumwissel te testen zijn (npm test). lokaalWeer.ts geeft het moment van nu
// door. Het slot per dagdeel zelf zit op de server en rekent met Amsterdam
// (docs/limieten-en-misbruik.md); dit is alleen de kant van het toestel.

/** De lokale datum als "2026-09-18". */
export function datumISO(moment: Date): string {
  return [
    moment.getFullYear(),
    String(moment.getMonth() + 1).padStart(2, "0"),
    String(moment.getDate()).padStart(2, "0"),
  ].join("-");
}

/** Het dagdeel: 1 voor 12.00 uur, anders 2. */
export function dagdeelVan(moment: Date): 1 | 2 {
  return moment.getHours() < 12 ? 1 : 2;
}

/** Het tijdstip als "08:15". */
export function tijdVan(moment: Date): string {
  return String(moment.getHours()).padStart(2, "0") + ":" + String(moment.getMinutes()).padStart(2, "0");
}
