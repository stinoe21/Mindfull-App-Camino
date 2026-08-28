// De dagelijkse quote, voor iedereen gelijk (Figma-board 12:179).
//
// Voorlopige reeks. Een echte reeks van Mind is een openstaand punt in
// docs/scope.md; tot die er is staan hier bekende, vrij te citeren uitspraken
// met naam erbij, in de geest van de app: zacht, geen prestatiedruk, geen
// advies. De eerste is de quote uit het design system. Vervang de lijst
// zodra Mind levert; de kaart en de dagrotatie blijven dan gelijk.

export type Quote = { tekst: string; auteur: string };

export const QUOTES: Quote[] = [
  { tekst: "Het lijkt altijd onmogelijk, totdat het gedaan is.", auteur: "Nelson Mandela" },
  { tekst: "Je hoeft de hele trap niet te zien om de eerste tree te nemen.", auteur: "Martin Luther King jr." },
  { tekst: "Niets in het leven hoeft gevreesd te worden, alleen begrepen.", auteur: "Marie Curie" },
  { tekst: "Wees zacht voor jezelf. Je doet het beste wat je kunt.", auteur: "Onbekend" },
  { tekst: "Het is niet de berg die we overwinnen, maar onszelf.", auteur: "Edmund Hillary" },
  { tekst: "Tussen prikkel en reactie ligt een ruimte. In die ruimte ligt onze vrijheid.", auteur: "Viktor Frankl" },
  { tekst: "Een reis van duizend mijl begint met één stap.", auteur: "Laozi" },
  { tekst: "Wat achter ons ligt en wat voor ons ligt, is klein vergeleken met wat in ons ligt.", auteur: "Ralph Waldo Emerson" },
  { tekst: "Je kunt de golven niet stoppen, maar je kunt leren surfen.", auteur: "Jon Kabat-Zinn" },
  { tekst: "Moed is niet de afwezigheid van angst, maar het besluit dat iets anders belangrijker is.", auteur: "Franklin D. Roosevelt" },
  { tekst: "Zelfs de langste nacht eindigt, en de zon komt op.", auteur: "Victor Hugo" },
  { tekst: "Je bent niet je gedachten. Je bent degene die ze opmerkt.", auteur: "Eckhart Tolle" },
  { tekst: "Rust is geen luiheid. Soms is het de moedigste stap.", auteur: "Onbekend" },
  { tekst: "Alles wat je nodig hebt, is de wil om de volgende kleine stap te zetten.", auteur: "Onbekend" },
];

/** Dezelfde quote voor iedereen op dezelfde dag, en elke dag een andere. */
export function quoteVanVandaag(datum: Date = new Date()): Quote {
  const dagnummer = Math.floor(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()) / 86_400_000);
  return QUOTES[dagnummer % QUOTES.length];
}
