// De dagelijkse quote, voor iedereen gelijk (Figma-board 12:179).
//
// Voorlopige reeks. Een echte reeks van Mind is een openstaand punt in
// docs/scope.md; tot die er is staan hier bekende, vrij te citeren uitspraken
// met naam erbij, in de geest van de app: zacht, geen prestatiedruk, geen
// advies. De eerste is de quote uit het design system. Vervang de lijst
// zodra Mind levert; de kaart en de dagrotatie blijven dan gelijk.
//
// Sinds 10 september 2026 (Stijn): bij elke quote een korte betekenis en een
// regel over wie het zei, voor de pagina achter de quote. De betekenis is
// een duiding, geen advies: hij zegt wat de uitspraak kan betekenen, niet
// wat je moet doen (productprincipes). Is de herkomst onzeker, dan staat
// dat erbij; we schrijven niemand iets toe wat niet vaststaat.

export type Quote = {
  tekst: string;
  auteur: string;
  /** Wat de uitspraak kan betekenen, twee of drie zinnen. */
  betekenis: string;
  /** Wie het zei, één of twee zinnen, met de herkomst als die onzeker is. */
  over: string;
};

export const QUOTES: Quote[] = [
  {
    tekst: "Het lijkt altijd onmogelijk, totdat het gedaan is.",
    auteur: "Nelson Mandela",
    betekenis:
      "Zolang je alleen naar het hele doel kijkt, lijkt het te groot en te eng. Wie begint, merkt onderweg dat het toch kan. Achteraf vraag je je af waarom het zo onmogelijk leek.",
    over:
      "Nelson Mandela (1918-2013) zat 27 jaar gevangen en werd daarna de eerste zwarte president van Zuid-Afrika. Deze zin geldt als een van zijn krachtigste boodschappen over hoop en volhouden.",
  },
  {
    tekst: "Je hoeft de hele trap niet te zien om de eerste tree te nemen.",
    auteur: "Martin Luther King jr.",
    betekenis:
      "Je hoeft niet te weten hoe alles afloopt om te kunnen beginnen. Eén tree is genoeg voor nu. De volgende zie je vanzelf als je er staat.",
    over:
      "Martin Luther King jr. (1929-1968) was dominee en de bekendste leider van de Amerikaanse burgerrechtenbeweging. Hij kreeg in 1964 de Nobelprijs voor de Vrede.",
  },
  {
    tekst: "Niets in het leven hoeft gevreesd te worden, alleen begrepen.",
    auteur: "Marie Curie",
    betekenis:
      "Wat je niet begrijpt, voelt groter dan het is. Kijken naar wat er precies speelt, maakt het vaak al iets kleiner. Begrip neemt de angst niet altijd weg, maar geeft er wel grip op.",
    over:
      "Marie Curie (1867-1934) was natuur- en scheikundige en won als eerste mens twee keer de Nobelprijs. Ze deed haar onderzoek in een tijd waarin vrouwen aan de universiteit nauwelijks welkom waren.",
  },
  {
    tekst: "Wees zacht voor jezelf. Je doet het beste wat je kunt.",
    auteur: "Onbekend",
    betekenis:
      "Op een zware dag is doen wat lukt genoeg. Je hoeft jezelf niet strenger toe te spreken dan je een goede vriend zou doen. Zachtheid is geen zwakte, het is de toon waarop je verder kunt.",
    over: "De herkomst van deze uitspraak is niet bekend. Hij wordt in veel vormen doorgegeven, precies omdat zoveel mensen hem herkennen.",
  },
  {
    tekst: "Het is niet de berg die we overwinnen, maar onszelf.",
    auteur: "Edmund Hillary",
    betekenis:
      "De echte drempel zit vaak niet in de opgave, maar in de twijfel eraan. Wie die twijfel leert kennen, komt verder dan hij dacht. De berg blijft even hoog; jij bent degene die verandert.",
    over:
      "Edmund Hillary (1919-2008) stond in 1953 samen met Tenzing Norgay als eerste mens op de top van de Mount Everest. Hij bleef zijn leven lang bescheiden over die prestatie.",
  },
  {
    tekst: "Tussen prikkel en reactie ligt een ruimte. In die ruimte ligt onze vrijheid.",
    auteur: "Viktor Frankl",
    betekenis:
      "Wat je overkomt kies je niet, hoe je erop reageert soms wel. Even ademen voordat je reageert, maakt die ruimte een beetje groter. In dat kleine moment zit meer keuze dan het lijkt.",
    over:
      "Viktor Frankl (1905-1997) was psychiater, overleefde de concentratiekampen en schreef daarover in \"De zin van het bestaan\". Deze zin wordt aan hem toegeschreven en vat zijn werk samen, al staat hij niet letterlijk in zijn boeken.",
  },
  {
    tekst: "Een reis van duizend mijl begint met één stap.",
    auteur: "Laozi",
    betekenis:
      "Hoe ver de weg ook is, er is altijd maar één stap tegelijk te zetten. Die ene stap is er vandaag. De rest van de reis hoeft nu nog niet.",
    over:
      "Laozi was een Chinese denker uit de zesde eeuw voor Christus en geldt als de schrijver van de Daodejing, een van de oudste teksten over leven in balans.",
  },
  {
    tekst: "Wat achter ons ligt en wat voor ons ligt, is klein vergeleken met wat in ons ligt.",
    auteur: "Ralph Waldo Emerson",
    betekenis:
      "Wat je hebt meegemaakt en wat nog komt, is niet het hele verhaal. Wat je in je hebt, draag je overal mee naartoe. Dat verandert niet met een slechte dag.",
    over:
      "Ralph Waldo Emerson (1803-1882) was een Amerikaanse schrijver en filosoof. Deze regel wordt meestal aan hem toegeschreven, maar komt waarschijnlijk uit een boek van Henry Stanley Haskins uit 1940.",
  },
  {
    tekst: "Je kunt de golven niet stoppen, maar je kunt leren surfen.",
    auteur: "Jon Kabat-Zinn",
    betekenis:
      "Moeilijke gevoelens komen en gaan, als golven. Ze tegenhouden lukt niet, en dat hoeft ook niet. Erop meebewegen is iets dat je kunt oefenen, golf voor golf.",
    over:
      "Jon Kabat-Zinn (1944) is de grondlegger van mindfulnesstraining in de zorg. Zijn programma uit 1979 wordt nog steeds over de hele wereld gegeven.",
  },
  {
    tekst: "Het enige dat we te vrezen hebben, is de vrees zelf.",
    auteur: "Franklin D. Roosevelt",
    betekenis:
      "Angst maakt alles groter dan het is en houdt je tegen nog voordat je begonnen bent. De situatie zelf is vaak beter te dragen dan de angst ervoor. Wie dat ziet, krijgt weer wat lucht.",
    over:
      "Franklin D. Roosevelt (1882-1945) was president van de Verenigde Staten in de crisisjaren en de Tweede Wereldoorlog. Hij sprak deze zin uit in 1933, in zijn eerste toespraak als president, midden in de economische crisis.",
  },
  {
    tekst: "Zelfs de langste nacht eindigt, en de zon komt op.",
    auteur: "Victor Hugo",
    betekenis:
      "Een zware periode voelt eindeloos, maar is het niet. Er komt weer een ochtend, ook als je die nu nog niet ziet. Je hoeft hem niet te maken; hij komt.",
    over:
      "Victor Hugo (1802-1885) schreef onder meer \"Les Misérables\", waar deze zin uit komt. Het boek gaat over mensen die ondanks alles overeind blijven.",
  },
  {
    tekst: "Je bent niet je gedachten. Je bent degene die ze opmerkt.",
    auteur: "Eckhart Tolle",
    betekenis:
      "Een gedachte is iets dat voorbijkomt, niet wie je bent. Opmerken dat je piekert, is al een stap uit het piekeren. Vanaf die plek kun je kijken in plaats van meegesleurd worden.",
    over:
      "Eckhart Tolle (1948) is schrijver van \"De kracht van het nu\". Deze zin vat een kerngedachte uit zijn werk samen, in eigen woorden vertaald.",
  },
  {
    tekst: "Rust is geen luiheid. Soms is het de moedigste stap.",
    auteur: "Onbekend",
    betekenis:
      "Stilstaan voelt soms als opgeven, terwijl het juist zorgt dat je verder kunt. Rust nemen terwijl alles roept dat je door moet, vraagt lef. Het mag.",
    over: "De herkomst van deze uitspraak is niet bekend. Hij komt in verschillende vormen voor.",
  },
  {
    tekst: "Alles wat je nodig hebt, is de wil om de volgende kleine stap te zetten.",
    auteur: "Onbekend",
    betekenis:
      "Niet het hele plan, niet alle energie van de wereld. Alleen de volgende kleine stap, en die is meestal haalbaar. Daarna kijk je opnieuw.",
    over: "De herkomst van deze uitspraak is niet bekend.",
  },
];

/** Dezelfde quote voor iedereen op dezelfde dag, en elke dag een andere. */
export function quoteVanVandaag(datum: Date = new Date()): Quote {
  const dagnummer = Math.floor(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()) / 86_400_000);
  return QUOTES[dagnummer % QUOTES.length];
}
