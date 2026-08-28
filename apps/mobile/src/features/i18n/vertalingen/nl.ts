// De canonieke Nederlandse UI-teksten. Dit bestand is de bron: de sleutels
// hier bepalen het type, en elke andere taal moet ze allemaal invullen.
//
// Wat hier NIET in hoort (besluit issue #47, scope.md): consent-teksten,
// hulplijn-teksten, check-in-copy en MIND-content. Die blijven Nederlands
// en staan hardcoded in hun scherm tot er canonieke Engelse teksten zijn
// via Paul en MIND.

export const nl = {
  "algemeen.terug": "Terug",
  "instellingen.titel": "Instellingen",
  "instellingen.laden": "Even laden...",
  "instellingen.naam.titel": "Hoe mogen we je noemen?",
  "instellingen.naam.uitleg": "Alleen voor de begroeting. Leeg laten mag. Het blijft op je telefoon.",
  "instellingen.naam.placeholder": "Je voornaam",
  "instellingen.voorkeuren.titel": "Waar wil je aan werken?",
  "instellingen.voorkeuren.uitleg":
    "Dit bepaalt welke tips je als eerste ziet. Het blijft op je telefoon en gaat nooit naar de server.",
  "instellingen.taal.titel": "Taal",
  "instellingen.taal.uitleg": "Kies de taal van de app. Systeem volgt de taal van je telefoon.",
  "instellingen.taal.systeem": "Systeem",
  "instellingen.taal.nederlands": "Nederlands",
  "instellingen.taal.engels": "English",
  "instellingen.taal.contentBlijftNederlands":
    "De teksten van MIND, de check-in en de toestemmingen blijven voorlopig Nederlands.",
  "instellingen.uitloggen": "Uitloggen",
} as const;

export type VertaalSleutel = keyof typeof nl;
