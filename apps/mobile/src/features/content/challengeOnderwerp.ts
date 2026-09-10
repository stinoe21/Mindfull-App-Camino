// Welk onderwerp uit de bibliotheek bij welke challenge hoort, zodat de
// challenge dezelfde vlieger en tint krijgt als de tips over dat onderwerp
// (VliegerOnderwerp). Puur visueel, besloten door Stijn op 10 september 2026:
// de challenges voelden als losse formulieren naast de rest van de app.
// Een slug die hier niet staat krijgt de gewone vlieger, dat is de fallback
// van VliegerOnderwerp zelf.

export const ONDERWERP_PER_CHALLENGE: Record<string, string> = {
  "beter-slapen-challenge": "Slaap",
  "minder-stress-challenge": "Stress",
  "chill-je-moet-al-zoveel-challenge": "Balans",
  "aandacht-voor-angst": "Angst",
  "aandacht-voor-hormonen-en-je-mind": "Energie",
  "aandacht-voor-je-mind-in-onrustige-tijden": "Piekeren",
  "aandacht-voor-herstel": "Ontspanning",
};
