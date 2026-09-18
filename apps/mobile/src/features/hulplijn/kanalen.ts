// De kanalen van de MIND Hulplijn en de andere lijnen, woordelijk zoals ze op
// mindhulplijn.nl staan (opgehaald 10 september 2026). Eén plek, zodat de
// Hulplijn-pagina en het foutscherm nooit uit elkaar lopen. Hier wordt niets
// verzonnen: wijzigt MIND een nummer of een naam, dan wijzigt het hier.

import * as Linking from "expo-linking";

import { meet } from "../meten/meet.ts";

/**
 * overnemen is wat iemand kan overtikken of kopiëren als het toestel het
 * kanaal niet zelf kan openen. Het is telkens hetzelfde nummer of adres als
 * in de url, niets nieuws.
 */
export type Kanaal = { label: string; url: string; overnemen: string };

// Kanalen van de MIND Hulplijn, zoals op mindhulplijn.nl.
export const KANALEN: Kanaal[] = [
  { label: "Bel 0900 - 1450", url: "tel:09001450", overnemen: "0900 - 1450" },
  { label: "WhatsApp", url: "https://wa.me/31613863803", overnemen: "wa.me/31613863803" },
  { label: "Chat op mindhulplijn.nl", url: "https://mindhulplijn.nl/", overnemen: "mindhulplijn.nl" },
  { label: "Mail hulplijn@wijzijnmind.nl", url: "mailto:hulplijn@wijzijnmind.nl", overnemen: "hulplijn@wijzijnmind.nl" },
];

// Onder welke naam een kanaal meetelt in de gebruikstotalen (docs/datamodel.md).
const KANAAL_IN_TELLING: Record<string, "bellen" | "whatsapp" | "chat" | "mail" | "luisterlijn" | "113"> = {
  "tel:09001450": "bellen",
  "https://wa.me/31613863803": "whatsapp",
  "https://mindhulplijn.nl/": "chat",
  "mailto:hulplijn@wijzijnmind.nl": "mail",
  "tel:0880767000": "luisterlijn",
  "tel:08000113": "113",
};

// Andere lijnen, zoals MIND ze zelf noemt.
export const ANDERE: Kanaal[] = [
  { label: "Luisterlijn, 088 - 0767 000", url: "tel:0880767000", overnemen: "088 - 0767 000" },
  { label: "113 Zelfmoordpreventie, 0800 - 0113", url: "tel:08000113", overnemen: "0800 - 0113" },
];

/**
 * Opent een kanaal. Geeft false terug als het toestel het niet kan (een
 * simulator of tablet zonder telefoon, geen mailapp), zodat het scherm dat
 * kan zeggen in plaats van dat er niets gebeurt.
 *
 * Bewust zonder Linking.canOpenURL vooraf: in een storebuild geeft die op iOS
 * en op Android 11 en hoger "nee" voor elk schema dat niet in de configuratie
 * is aangemeld, ook voor tel: en mailto:. Een vals nee zou hier het bellen
 * van de Hulplijn blokkeren. Proberen en opvangen kan dat niet. Bewust ook
 * niet via features/systeem/openLink.ts: bellen, WhatsApp en mail horen de
 * eigen app van het toestel te openen, niet een venster in deze app.
 */
export async function openKanaal(kanaal: Kanaal): Promise<boolean> {
  // Geteld wordt dat het kanaal gekozen is, ook als openen daarna niet lukt.
  const gekozen = KANAAL_IN_TELLING[kanaal.url];
  if (gekozen) meet({ naam: "helpline_channel_tapped", item: gekozen });
  try {
    await Linking.openURL(kanaal.url);
    return true;
  } catch {
    return false;
  }
}
