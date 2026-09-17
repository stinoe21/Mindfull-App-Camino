// De kanalen van de MIND Hulplijn en de andere lijnen, woordelijk zoals ze op
// mindhulplijn.nl staan (opgehaald 10 september 2026). Eén plek, zodat de
// Hulplijn-pagina en het foutscherm nooit uit elkaar lopen. Hier wordt niets
// verzonnen: wijzigt MIND een nummer of een naam, dan wijzigt het hier.

import * as Linking from "expo-linking";

export type Kanaal = { label: string; url: string };

// Kanalen van de MIND Hulplijn, zoals op mindhulplijn.nl.
export const KANALEN: Kanaal[] = [
  { label: "Bel 0900 - 1450", url: "tel:09001450" },
  { label: "WhatsApp", url: "https://wa.me/31613863803" },
  { label: "Chat op mindhulplijn.nl", url: "https://mindhulplijn.nl/" },
  { label: "Mail hulplijn@wijzijnmind.nl", url: "mailto:hulplijn@wijzijnmind.nl" },
];

// Andere lijnen, zoals MIND ze zelf noemt.
export const ANDERE: Kanaal[] = [
  { label: "Luisterlijn, 088 - 0767 000", url: "tel:0880767000" },
  { label: "113 Zelfmoordpreventie, 0800 - 0113", url: "tel:08000113" },
];

/**
 * Opent een kanaal. Geeft false terug als het toestel het niet kan (een
 * simulator of tablet zonder telefoon, geen mailapp), zodat het scherm dat
 * kan zeggen in plaats van dat er niets gebeurt.
 */
export async function openKanaal(kanaal: Kanaal): Promise<boolean> {
  try {
    await Linking.openURL(kanaal.url);
    return true;
  } catch {
    return false;
  }
}
