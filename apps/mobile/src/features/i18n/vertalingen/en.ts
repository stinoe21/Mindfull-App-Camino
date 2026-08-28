// Engelse UI-teksten. Het type dwingt af dat elke sleutel uit nl.ts hier
// bestaat: een vergeten vertaling is een typefout, geen runtime-verrassing.

import type { VertaalSleutel } from "./nl";

export const en: Record<VertaalSleutel, string> = {
  "algemeen.terug": "Back",
  "instellingen.titel": "Settings",
  "instellingen.laden": "Loading...",
  "instellingen.naam.titel": "What should we call you?",
  "instellingen.naam.uitleg": "Only for the greeting. Feel free to leave it empty. It stays on your phone.",
  "instellingen.naam.placeholder": "Your first name",
  "instellingen.voorkeuren.titel": "What would you like to work on?",
  "instellingen.voorkeuren.uitleg":
    "This decides which tips you see first. It stays on your phone and never goes to the server.",
  "instellingen.taal.titel": "Language",
  "instellingen.taal.uitleg": "Choose the language of the app. System follows your phone's language.",
  "instellingen.taal.systeem": "System",
  "instellingen.taal.nederlands": "Nederlands",
  "instellingen.taal.engels": "English",
  "instellingen.taal.contentBlijftNederlands":
    "The texts from MIND, the check-in and the consents remain in Dutch for now.",
  "instellingen.uitloggen": "Log out",
};
