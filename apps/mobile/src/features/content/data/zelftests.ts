// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/zelftests, opgehaald met
// scripts/fetch-zelftests.mjs. Opnieuw genereren: node scripts/gen-zelftests.mjs
// (daar staat ook welke test bij welk onderwerp hoort).
//
// De zelftests van MIND in de app (besluit Stijn, 14 september 2026). De
// teksten zijn woordelijk van MIND. De score wordt op het toestel berekend en
// nergens bewaard of verstuurd, zie docs/datamodel.md ("Zelftests").

import type { InhoudBlok } from "../InhoudBlokken.tsx";

export type ZelftestOptie = { label: string; score: number };
export type ZelftestVraag = { tekst: string; opties: ZelftestOptie[] };
export type ZelftestRegel = { op: "<" | "<=" | ">" | ">="; waarde: number };
export type ZelftestUitslag = {
  /** Alle regels moeten kloppen voor de score; de eerste uitslag die klopt geldt. */
  regels: ZelftestRegel[];
  kop?: string;
  blokken: InhoudBlok[];
};
export type Zelftest = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app; zonder onderwerp alleen in de lijst van tests. */
  onderwerp?: string;
  intro: string;
  /** De vette noot op de pagina: "... is geen diagnose." */
  noot?: string;
  /** De bronregel van het instrument, bijvoorbeeld de PSWQ. */
  instrument?: string;
  /** De test op formulier.wijzijnmind.nl. */
  url: string;
  /** Som van de scores, of het gemiddelde over de vragen. */
  scoring: "som" | "gemiddelde";
  vragen: ZelftestVraag[];
  uitslagen: ZelftestUitslag[];
};

export const ZELFTESTS: Zelftest[] = [
  {
    "slug": "piekertest",
    "titel": "Piekertest",
    "onderwerp": "Piekeren",
    "intro": "De piekertest helpt je in te schatten hoeveel je piekert. De test noemt 11 stellingen. Geef bij elke stelling aan in hoeverre dit de afgelopen week bij jou paste. Het invullen van deze test duurt een paar minuten.",
    "noot": "Piekeren is geen diagnose. Uit deze test volgt dus ook geen diagnose.",
    "instrument": "Dit is de Nederlandse vertaling van de PSWQ, Meyer, Miller, Metzger en Borkovec, 1990 en Van Rijsoort, Vervaeke en Emmelkamp, 1997.",
    "url": "https://formulier.wijzijnmind.nl/piekertest",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Mijn zorgen overweldigen mij",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Veel situaties zijn voor mij een aanleiding om te gaan piekeren",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik weet dat ik mij niet zo'n zorgen zou moeten maken over dingen, maar ik kan er gewoon niets aan doen...",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Als ik onder druk sta, pieker ik te veel",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik ben altijd wel ergens over aan het piekeren",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Zodra ik iets afheb, begin ik mij zorgen te maken over al het andere dat ik nog moet doen",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik ben mijn hele leven al een piekeraar geweest",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik merk dat ik mij zorgen maak over dingen",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Als ik eenmaal begin te piekeren, kan ik er ook niet meer mee ophouden",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik maak mij voortdurend zorgen",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik maak mij zorgen over de dingen die ik nog moet doen, totdat ze af zijn",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<=",
            "waarde": 17
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op deze test geef je aan in de afgelopen week niet of nauwelijks te piekeren."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 18
          },
          {
            "op": "<=",
            "waarde": 23
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op deze test geef je aan in de afgelopen week nauwelijks te piekeren."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 24
          },
          {
            "op": "<=",
            "waarde": 31
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op deze test geef je aan in de afgelopen week af en toe te piekeren. Op onze webpagina lees je meer over piekeren."
          },
          {
            "linkLabel": "Lees meer over piekeren",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/piekeren"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 32
          },
          {
            "op": "<=",
            "waarde": 39
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op deze test geef je aan in de afgelopen week veel te piekeren. Op onze webpagina lees je meer over piekeren."
          },
          {
            "tekst": "Als je ergens last van hebt, is het meestal fijn om dit met iemand te delen. Praten lucht vaak op en het helpt je om je gedachten op een rij te zetten. Je hoeft het niet alleen te doen. Bovendien kan iemand die dicht bij je staat met je meedenken over hoeveel invloed het piekeren op jouw leven heeft. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Ook kan het zijn dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
          },
          {
            "tekst": "Zou je graag eens over jouw persoonlijke situatie praten met een professional? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "Lees meer over piekeren",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/piekeren"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 40
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op deze test geef je aan in de afgelopen week erg veel te piekeren. Op onze webpagina lees je meer over piekeren."
          },
          {
            "tekst": "Als je ergens last van hebt, is het meestal fijn om dit met iemand te delen. Praten lucht vaak op en het helpt je om je gedachten op een rij te zetten. Je hoeft het niet alleen te doen. Bovendien kan iemand die dicht bij je staat met je meedenken over hoeveel invloed het piekeren op jouw leven heeft. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Ook kan het zijn dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
          },
          {
            "tekst": "Daarnaast raden we je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp."
          },
          {
            "tekst": "Zou je graag eens over jouw persoonlijke situatie praten met een professional? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "Lees meer over piekeren",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/piekeren"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      }
    ]
  },
  {
    "slug": "stresstest",
    "titel": "Stresstest",
    "onderwerp": "Stress",
    "intro": "Door het maken van deze test breng je in kaart hoeveel stress jij ervaart. Het invullen van de test duurt een paar minuten.",
    "noot": "Uit deze vragenlijst volgt géén diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "instrument": "De stress-test is gebaseerd op de Nederlandse versie van de Perceived Stress Scale (PSS) uit 1983. S. Cohen, T. Kamarck, R. Mermelstein - A global measure of perceived stress.",
    "url": "https://formulier.wijzijnmind.nl/stresstest",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Hoe vaak ben je de afgelopen maand van streek geweest vanwege iets dat onverwachts gebeurde?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand het gevoel gehad dat je geen controle had over de belangrijke dingen in je leven?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je je de afgelopen maand zenuwachtig en gestrest gevoeld?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je je de afgelopen maand zelfverzekerd gevoeld over je vermogen om met je persoonlijke problemen om te gaan?",
        "opties": [
          {
            "label": "Nooit",
            "score": 4
          },
          {
            "label": "Zelden",
            "score": 3
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 1
          },
          {
            "label": "Heel vaak",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand het gevoel gehad dat de dingen gingen zoals je wenste?",
        "opties": [
          {
            "label": "Nooit",
            "score": 4
          },
          {
            "label": "Zelden",
            "score": 3
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 1
          },
          {
            "label": "Heel vaak",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand gemerkt dat je niet alle dingen aankon die je moest doen?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand irritaties in je leven onder controle kunnen houden?",
        "opties": [
          {
            "label": "Nooit",
            "score": 4
          },
          {
            "label": "Zelden",
            "score": 3
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 1
          },
          {
            "label": "Heel vaak",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand het gevoel gehad dat je alles onder controle had?",
        "opties": [
          {
            "label": "Nooit",
            "score": 4
          },
          {
            "label": "Zelden",
            "score": 3
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 1
          },
          {
            "label": "Heel vaak",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Hoe vaak ben je de afgelopen maand boos geweest vanwege zaken waar je geen controle over had?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Hoe vaak heb je de afgelopen maand het gevoel gehad dat de moeilijkheden zich zo hebben opgestapeld dat je ze niet kan overwinnen?",
        "opties": [
          {
            "label": "Nooit",
            "score": 0
          },
          {
            "label": "Zelden",
            "score": 1
          },
          {
            "label": "Soms",
            "score": 2
          },
          {
            "label": "Vaak",
            "score": 3
          },
          {
            "label": "Heel vaak",
            "score": 4
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 14
          }
        ],
        "kop": "Lage stress",
        "blokken": [
          {
            "tekst": "Je geeft aan weinig stress te ervaren en je over het algemeen ontspannen te voelen. Je hebt waarschijnlijk goede manieren om met stressvolle gebeurtenissen om te gaan. Ook ervaar je meestal controle over je leven. Dit betekent niet dat je helemaal geen stress ervaart, maar wel dat je weet wat je moet doen zodat het niet te veel invloed op je heeft."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 13
          },
          {
            "op": "<",
            "waarde": 27
          }
        ],
        "kop": "Gemiddelde stress",
        "blokken": [
          {
            "tekst": "Je geeft aan soms stress te ervaren. Je hebt momenten van spanning, maar je weet meestal hoe je ermee om moet gaan. Af en toe stress ervaren is normaal. Jij ervaart waarschijnlijk zowel stressvolle als ontspannen momenten. Het kan helpen om je bewust te zijn waar jij stress van krijgt en gezonde manieren te vinden om hiermee om te gaan."
          },
          {
            "tekst": "Zou je graag eens met een professional willen praten over je stressklachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 26
          },
          {
            "op": "<",
            "waarde": 41
          }
        ],
        "kop": "Hoge stress",
        "blokken": [
          {
            "tekst": "Je geeft aan veel stress te ervaren, wat kan wijzen op overbelasting. Dit kan leiden tot mentale en lichamelijke klachten, zoals slaapproblemen, vermoeidheid, of prikkelbaarheid. Het is verstandig om te leren hoe je beter met stress kan omgaan en om hier eventueel ondersteuning bij te zoeken, bijvoorbeeld door ontspanningstechnieken of gesprekken met een hulpverlener."
          },
          {
            "tekst": "Zou je graag eens met een professional willen praten over je stressklachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      }
    ]
  },
  {
    "slug": "stresstest_denkgewoonten",
    "titel": "Denkgewoontentest",
    "onderwerp": "Stress",
    "intro": "Denkgewoonten zijn gedachten die we elke keer weer hebben in bepaalde situaties. Gedachten als ‘ik mag geen fouten maken’ en ‘belangrijke mensen in mijn omgeving moeten mij aardig vinden’ zijn hier voorbeelden van. Ze bepalen keer op keer hoe we ons voelen in bepaalde situaties en hoe we reageren. Denkgewoonten kunnen veel stress veroorzaken. De test bestaat uit 10 vragen. Lees de vragen goed door. Als je jezelf in een vraag herkent kies je voor \"Ja\", anders kies je voor \"Nee\".",
    "noot": "Het is geen wetenschappelijke test en uit deze test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "url": "https://formulier.wijzijnmind.nl/stresstest_denkgewoonten",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Voel je je vaak verantwoordelijk voor alles en iedereen?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Geef je jezelf regelmatig een schouderklopje?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Mag je fouten maken van jezelf?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Vind je het erg belangrijk dat anderen je aardig vinden?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ben je iemand die de dingen van de zonnige kant bekijkt?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Denk je regelmatig: ik ‘moet’ dit nog even, ik ‘moet’ dat nog even?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Denk je vaak dat een bepaalde klus te moeilijk is voor je?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Vind je van jezelf dat je goed kan relativeren?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Ben je snel wantrouwig naar wat mensen zeggen of doen?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Kun je het gemakkelijk accepteren wanneer iets anders gaat dan je zou willen?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 4
          }
        ],
        "kop": "Je denkgewoonten geven veel stress",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan dat jouw denkgewoonten je een hoop stress bezorgen. Wist je dat de manier van denken invloed heeft op hoe je je voelt en gedraagt? Niet-helpende gedachten zorgen ervoor dat je vervelende gevoelens ervaart, terwijl helpende gedachten meer gewenste gevoelens oproepen. Je lijkt erg streng voor jezelf en maakt het jezelf daarmee niet gemakkelijk. Zoals bij de meeste ‘gewoonten’, kan je leren om dit te veranderen."
          },
          {
            "tekst": "Je manier van denken veranderen, gaat natuurlijk niet van de ene op andere dag. Maar in de flyer onderaan deze pagina vind je twee oefeningen uit de cognitieve gedragstherapie die je hierbij op weg kunnen helpen."
          },
          {
            "tekst": "Maak je je zorgen over klachten die je ervaart, praat erover met iemand die je vertrouwt en bespreekt het met jouw huisarts. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 3
          },
          {
            "op": "<",
            "waarde": 7
          }
        ],
        "kop": "Je bent af en toe geneigd je druk te maken",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan af en toe de neiging te hebben om je drukker te maken dan nodig is. Neem je denkgewoonten eens bewust onder de loep. Dat kan je helpen makkelijker om te gaan met stressvolle situaties. In de flyer onderaan deze pagina vind je twee oefeningen uit de cognitieve gedragstherapie om je gedachten te onderzoeken en helpend te maken."
          },
          {
            "tekst": "Maak je je zorgen over klachten die je ervaart, praat erover met iemand die je vertrouwt en bespreekt het met jouw huisarts. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 6
          }
        ],
        "kop": "Je bekijkt situaties over het algemeen rustig",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan goed in staat te zijn om te relativeren en situaties over het algemeen rustig en optimistisch te bekijken. Je bent je bewust van je eigen kunnen en je eigen grenzen. Het maakt dat je waarschijnlijk geen onnodige stress ervaart. Sterker nog, je bent daardoor weerbaarder in stressvolle situaties. Heb je alsnog behoefte of interesse om meer te lezen over het veranderen van je denkpatronen en bijhorende oefeningen? In de flyer onderaan deze pagina vind je twee oefeningen uit de cognitieve gedragstherapie om je gedachten helpend te maken."
          }
        ]
      }
    ]
  },
  {
    "slug": "depressietest",
    "titel": "Depressietest",
    "onderwerp": "Somberheid",
    "intro": "De depressietest helpt je bij het inschatten of je depressieve klachten ervaart. De test noemt 9 problemen. Geef bij elk probleem aan hoe vaak je daar last van hebt gehad in de afgelopen 2 weken. Het invullen van deze test duurt een paar minuten.",
    "noot": "Uit deze test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "instrument": "De depressietest is een vertaling van de PHQ-9 en is ontwikkeld door drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke en collega's.",
    "url": "https://formulier.wijzijnmind.nl/depressietest",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Weinig interesse of plezier in activiteiten",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Zich neerslachtig, depressief of hopeloos voelen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Moeilijk inslapen, moeilijk doorslapen of te veel slapen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Zich moe voelen of gebrek aan energie hebben",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Weinig eetlust of overmatig eten",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Een slecht gevoel hebben over jezelf, of het gevoel hebben dat je een mislukkeling bent of het gevoel dat je jezelf of jouw familie teleurgesteld hebt",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Problemen om je te concentreren, bijvoorbeeld om de krant te lezen of om tv te kijken",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Zo traag bewegen of zo langzaam spreken dat andere mensen dit opgemerkt kunnen hebben? Of het tegenovergestelde, zo zenuwachtig of rusteloos zijn dat je veel meer bewoog dan gebruikelijk",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "De gedachte dat je beter dood zou kunnen zijn of de gedachte jezelf op een bepaalde manier pijn te doen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 0
          },
          {
            "op": "<",
            "waarde": 5
          }
        ],
        "kop": "Geen of minimale depressieve klachten",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan geen of bijna geen depressieve klachten te ervaren."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 4
          },
          {
            "op": "<",
            "waarde": 10
          }
        ],
        "kop": "Milde depressieve klachten",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan milde depressieve klachten te ervaren. Als je wil, kan je deze vragenlijst over twee weken herhalen."
          },
          {
            "tekst": "Zou je graag eens met een professional willen praten over je klachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "http://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 9
          },
          {
            "op": "<",
            "waarde": 15
          }
        ],
        "kop": "Matige depressieve klachten",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan matige depressieve klachten te ervaren."
          },
          {
            "tekst": "Komt deze uitslag overeen met hoe jij je voelt? Dan raden we je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp. Zou je graag eens met een professional willen praten over je klachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "http://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 14
          },
          {
            "op": "<",
            "waarde": 20
          }
        ],
        "kop": "Matig ernstige depressieve klachten",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan matig ernstige depressieve klachten te ervaren. Komt deze uitslag overeen met hoe jij je voelt? Dan raden we je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp."
          },
          {
            "tekst": "Zou je graag eens met een professional willen praten over je klachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Denk je aan zelfdoding? 113 Zelfmoordpreventie is er voor je. Op 113.nl kan je direct en anoniem in contact komen met hun hulpverleners. Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "http://www.mindhulplijn.nl"
          },
          {
            "linkLabel": "113.nl",
            "linkUrl": "http://www.113.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 19
          },
          {
            "op": "<",
            "waarde": 28
          }
        ],
        "kop": "Ernstige depressieve klachten",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan ernstige depressieve klachten te ervaren. Komt deze uitslag overeen met hoe jij je voelt? Dan raden we je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp."
          },
          {
            "tekst": "Zou je graag eens met een professional willen praten over je klachten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Denk je aan zelfdoding? 113 Zelfmoordpreventie is er voor je. Op 113.nl kan je direct en anoniem in contact komen met hun hulpverleners."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "http://www.mindhulplijn.nl"
          },
          {
            "linkLabel": "113.nl",
            "linkUrl": "http://www.113.nl"
          }
        ]
      }
    ]
  },
  {
    "slug": "herfst_winterblues_test",
    "titel": "Herfstdip of winterblues",
    "onderwerp": "Somberheid",
    "intro": "Deze test helpt je bij het inschatten of je klachten van een herfstdip of winterblues ervaart. De test noemt 10 stellingen, die je met ja of nee kan beantwoorden. We gaan er vanuit dat je de test in de herfst of winter beantwoordt. Het invullen van deze test duurt een paar minuten.",
    "noot": "Het is geen wetenschappelijke test en uit deze test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "url": "https://formulier.wijzijnmind.nl/herfst_winterblues_test",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Had je als tiener al een hekel aan de herfst of winter?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Voel je je momenteel rot of terneergeslagen?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Geniet je in de herfst en winter evenveel van de goede dingen van het leven als tijdens de lente en zomer?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Lijkt het je aantrekkelijk om de herfst en winter over te slaan en die slapend door te brengen, zoals een beer?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Heb je duidelijk meer energie tijdens de lente en de zomer?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Heb je vorig jaar in de herfst en winter een duidelijke terugval in je stemming gehad?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Gebeuren er de komende tijd dingen waar je met plezier naar uitkijkt?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Heb je in de herfst en winter duidelijk meer slaap nodig en last van slaperigheid overdag?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Heb je momenteel minder controle over hoeveel je eet en heb je extra zin om te snacken?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Heb je deze dagen het gevoel dat je minder ideeën hebt en dat er weinig uit je handen komt?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 5
          }
        ],
        "kop": "Geen last",
        "blokken": [
          {
            "tekst": "De herfst en winter zijn misschien niet je favoriete seizoenen. Maar je lijkt geen last te hebben van een herfstdip of winterblues."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 4
          },
          {
            "op": "<",
            "waarde": 7
          }
        ],
        "kop": "Aantal klachten",
        "blokken": [
          {
            "tekst": "Je geeft aan een aantal klachten te ervaren die kunnen horen bij een herfstdip of winterblues. Maar je herkent je niet in alles. Wij raden je aan meer over een seizoensgebonden depressie of haar mildere varianten te lezen. En als je toch veel last krijgt van je klachten dit met je huisarts te bespreken. De huisarts kan beoordelen wat er aan de hand is en je ondersteuning bieden, of je zo nodig doorverwijzen. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "De uitkomst van deze test biedt géén diagnose, maar laat je wel zien of het belangrijk is je verder in dit onderwerp te verdiepen en/of hulp te zoeken."
          },
          {
            "linkLabel": "Lees meer over seizoensgebonden depressie",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/seizoensgebonden-depressie"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 6
          }
        ],
        "kop": "Meerdere klachten",
        "blokken": [
          {
            "tekst": "Jij geeft aan meerdere klachten te ervaren die kunnen horen bij een herfstdip of winterblues. Als je veel last hebt van je klachten, dan kan er sprake zijn van een seizoensgebonden depressie. We raden je dan aan je klachten met je huisarts te bespreken. De huisarts kan beoordelen wat er aan de hand is en je ondersteuning bieden, of je zo nodig doorverwijzen."
          },
          {
            "tekst": "Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "De uitkomst van deze test biedt géén diagnose, maar laat je wel zien of het belangrijk is je verder in dit onderwerp te verdiepen en/of hulp te zoeken."
          },
          {
            "linkLabel": "Lees meer over seizoensgebonden depressie",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/seizoensgebonden-depressie"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      }
    ]
  },
  {
    "slug": "angsttest",
    "titel": "Angsttest",
    "onderwerp": "Angst",
    "intro": "De angsttest helpt je bij het inschatten hoeveel last je hebt van angstklachten. Lees elke stelling goed door en geef aan hoe vaak je er in de afgelopen twee weken last van hebt gehad.",
    "noot": "Uit deze vragenlijst volgt géén diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "instrument": "Dit is de Nederlandse vertaling van de GAD-7. Ontwikkeld door drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke en collega’s.",
    "url": "https://formulier.wijzijnmind.nl/angsttest",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Je nerveus, angstig of gespannen voelen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Niet kunnen stoppen met je zorgen maken",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Je te veel zorgen maken om verschillende dingen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Moeite hebben je te ontspannen",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Zo rusteloos zijn dat het moeilijk is om stil te zitten",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Snel geërgerd of geïrriteerd zijn",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      },
      {
        "tekst": "Bang zijn dat er iets vreselijks zou kunnen gebeuren",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Een aantal dagen",
            "score": 1
          },
          {
            "label": "Meer dan de helft van de dagen",
            "score": 2
          },
          {
            "label": "Bijna elke dag",
            "score": 3
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 0
          },
          {
            "op": "<=",
            "waarde": 4
          }
        ],
        "kop": "Minimale angst",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan niet tot nauwelijks last te hebben van angstklachten."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 5
          },
          {
            "op": "<=",
            "waarde": 9
          }
        ],
        "kop": "Milde angst",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan milde angstklachten te ervaren."
          },
          {
            "tekst": "Op onze webpagina lees je meer over angst. Als je ergens last van hebt, is het meestal fijn om dit met iemand te delen. Praten lucht vaak op en het helpt je om je gedachten op een rij te zetten. Je hoeft het niet alleen te doen. Bovendien kan iemand die dicht bij je staat met je meedenken over hoeveel invloed de angst op jouw leven heeft. Denk aan dingen vermijden of anders doen vanwege de angst. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Bijvoorbeeld omdat je weet dat de angst niet realistisch is (al voelt dat wel zo) of dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
          },
          {
            "tekst": "Zou je graag eens over jouw persoonlijke situatie praten met een professional? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "Lees meer over angst",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/angst"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 10
          },
          {
            "op": "<=",
            "waarde": 14
          }
        ],
        "kop": "Matige angst",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan matige angstklachten te ervaren. Komt deze uitslag overeen met hoe jij je voelt?"
          },
          {
            "tekst": "Als je ergens last van hebt, is het meestal fijn om dit met iemand te delen. Praten lucht vaak op en het helpt je om je gedachten op een rij te zetten. Neem iemand in vertrouwen. Je hoeft het niet alleen te doen. Bovendien kan iemand die dicht bij je staat met je meedenken over hoeveel invloed de angst op jouw leven heeft. Denk aan dingen vermijden of je leven aanpassen vanwege de angst. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Bijvoorbeeld omdat je weet dat de angst niet realistisch is (al voelt dat wel zo) of dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
          },
          {
            "tekst": "Daarnaast raden we je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp."
          },
          {
            "tekst": "Zou je graag eens over jouw persoonlijke situatie praten met een professional? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 15
          },
          {
            "op": "<=",
            "waarde": 21
          }
        ],
        "kop": "Ernstige angst",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de vragen geef je aan ernstige angstklachten te ervaren. Komt deze uitslag overeen met hoe jij je voelt?"
          },
          {
            "tekst": "We raden je aan contact op te nemen met je huisarts om je klachten te bespreken. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp."
          },
          {
            "tekst": "Neem daarnaast iemand in vertrouwen. Als je ergens last van hebt, is het meestal fijn om dit met iemand te delen. Praten lucht vaak op en het helpt je om je gedachten op een rij te zetten. Je hoeft het niet alleen te doen. Bovendien kan iemand die dicht bij je staat met je meedenken over hoeveel invloed de angst op jouw leven heeft. Denk aan dingen vermijden of je leven aanpassen vanwege de angst. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Bijvoorbeeld omdat je weet dat de angst niet realistisch is (al voelt dat wel zo) of dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben. Ook kan het fijn zijn om diegene die je in vertrouwen hebt genomen mee te vragen naar de afspraak met de huisarts."
          },
          {
            "tekst": "Zou je graag eens over jouw persoonlijke situatie praten met een professional? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Dit is geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      }
    ]
  },
  {
    "slug": "mentaal_fit_op_je_werk_test",
    "titel": "Mentaal fit op je werk",
    "onderwerp": "Energie",
    "intro": "Deze test helpt je bij het inschatten van je mentale gezondheid in relatie tot je werk. De test bestaat uit 11 uitspraken. Kies bij elke uitspraak het antwoord dat het beste past.",
    "noot": "Het is geen wetenschappelijke test en uit de test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "url": "https://formulier.wijzijnmind.nl/mentaal_fit_op_je_werk_test",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Ik stel haalbare doelen voor taken",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Het lukt mij om na en tussen het werk door goed te ontspannen",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik kan lastige situaties op het werk goed accepteren en loslaten waar ik geen invloed op heb",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik focus me meestal op 1 taak tegelijk",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik blijf vaak piekeren over situaties op het werk",
        "opties": [
          {
            "label": "Eens",
            "score": 1
          },
          {
            "label": "Beetje eens",
            "score": 2
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 4
          },
          {
            "label": "Oneens",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik vind het makkelijk om mijn grenzen aan te geven en nee te zeggen als dat nodig is",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik heb vertrouwen dat ik goed ben in mijn werk",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik beweeg voldoende (minimaal een half uur per dag)",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik eet en drink over het algemeen gezond (matig met koffie en alcohol)",
        "opties": [
          {
            "label": "Eens",
            "score": 5
          },
          {
            "label": "Beetje eens",
            "score": 4
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 2
          },
          {
            "label": "Oneens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik heb last van slaapproblemen",
        "opties": [
          {
            "label": "Eens",
            "score": 1
          },
          {
            "label": "Beetje eens",
            "score": 2
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 4
          },
          {
            "label": "Oneens",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik vind het moeilijk hulp te vragen en/of te accepteren van mijn collega’s of werkgever",
        "opties": [
          {
            "label": "Eens",
            "score": 1
          },
          {
            "label": "Beetje eens",
            "score": 2
          },
          {
            "label": "Niet eens of oneens",
            "score": 3
          },
          {
            "label": "Beetje oneens",
            "score": 4
          },
          {
            "label": "Oneens",
            "score": 5
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 33
          }
        ],
        "kop": "Niet zo mentaal fit",
        "blokken": [
          {
            "tekst": "Je geeft aan je niet zo mentaal fit te voelen in relatie tot je werk. Volgens deze test kan je nog veel dingen doen die positief bijdragen aan jouw mentale gezondheid op het werk."
          },
          {
            "tekst": "Maak je je zorgen over klachten die je ervaart, praat erover met iemand die je vertrouwt en bespreekt het met jouw huisarts. De huisarts kan beoordelen wat er aan de hand is en je ondersteuning bieden, of je zo nodig doorverwijzen."
          },
          {
            "tekst": "Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "tekst": "Zoals eerder aangegeven helpt deze test bij het inschatten van je mentale gezondheid in relatie tot je werk. Het is geen wetenschappelijke test en uit de test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 32
          },
          {
            "op": "<",
            "waarde": 44
          }
        ],
        "kop": "Redelijk mentaal fit",
        "blokken": [
          {
            "tekst": "Je geeft aan je redelijk mentaal fit te voelen in relatie tot je werk. Hoewel je over het algemeen al wat tools in handen hebt hiervoor, is er nog van alles dat je kan doen dat positief bijdraagt aan je mentale gezondheid op het werk."
          },
          {
            "tekst": "Zoals eerder aangegeven helpt deze test bij het inschatten van je mentale gezondheid in relatie tot je werk. Het is geen wetenschappelijke test en uit de test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 43
          }
        ],
        "kop": "Mentaal fit",
        "blokken": [
          {
            "tekst": "Bravo! Je geeft aan je mentaal fit te voelen in relatie tot je werk en al van alles te doen dat positief bijdraagt aan jouw mentale gezondheid op het werk."
          },
          {
            "tekst": "Zoals eerder aangegeven helpt deze test bij het inschatten van je mentale gezondheid in relatie tot je werk. Het is geen wetenschappelijke test en uit de test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen."
          }
        ]
      }
    ]
  },
  {
    "slug": "fomo-test",
    "titel": "FOMO-test",
    "onderwerp": "Balans",
    "intro": "De FOMO test helpt je in te schatten hoeveel FOMO (Fear Of Missing Out) je ervaart. De test noemt 10 stellingen. Geef bij elke stelling aan in hoeverre dit bij jou past. Het invullen van deze test duurt een paar minuten.",
    "noot": "FOMO is geen diagnose. En uit deze test volgt dus ook geen diagnose.",
    "instrument": "Deze test is gebaseerd op de test van Przybylski et al., 2013.",
    "url": "https://formulier.wijzijnmind.nl/fomo-test",
    "scoring": "gemiddelde",
    "vragen": [
      {
        "tekst": "Ik ben bang dat anderen leukere ervaringen hebben dan ik",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik ben bang dat vrienden meer leuke ervaringen hebben dan ik",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik maak me zorgen als ik erachter kom dat vrienden plezier hebben zonder mij",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik voel mij onrustig als ik niet weet wat mijn vrienden aan het doen of van plan zijn",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Het is belangrijk dat ik de insider grappen/ onderonsjes van mijn vrienden begrijp",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik vraag mij soms af of ik niet te veel bezig ben met wat anderen aan het doen zijn",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Ik vind het vervelend als ik een kans mis om met vrienden af te spreken",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Als ik het naar mijn zin heb, vind ik het belangrijk om dit met anderen te delen",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Wanneer ik een sociale activiteit mis, vind ik dat vervelend",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      },
      {
        "tekst": "Als ik op vakantie ben of een dagje eropuit, zorg ik ervoor dat ik op de hoogte blijf van wat mijn vrienden doen",
        "opties": [
          {
            "label": "Past helemaal niet bij mij",
            "score": 1
          },
          {
            "label": "Past niet bij mij",
            "score": 2
          },
          {
            "label": "Past een beetje bij mij",
            "score": 3
          },
          {
            "label": "Past bij mij",
            "score": 4
          },
          {
            "label": "Past helemaal bij mij",
            "score": 5
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 2
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de test geef je aan minder dan gemiddeld FOMO te ervaren."
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 2
          },
          {
            "op": "<=",
            "waarde": 2.5
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de test geef je aan gemiddeld FOMO te ervaren. Zit het jou af en toe wel in de weg? Bekijk onze webpagina voor tips."
          },
          {
            "linkLabel": "Lees meer over bekijk onze webpagina voor tips.",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/fomo"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 2.5
          }
        ],
        "blokken": [
          {
            "tekst": "Met jouw antwoorden op de test geef je aan meer dan gemiddeld last te hebben van FOMO. Bekijk onze webpagina voor tips."
          },
          {
            "tekst": "Zou je er graag eens met een professional over willen praten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "Lees meer over bekijk onze webpagina voor tips.",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/fomo"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      }
    ]
  },
  {
    "slug": "stresstest-ontspanning-en-herstel",
    "titel": "Ontspanning en herstel",
    "onderwerp": "Ontspanning",
    "intro": "Voor de één is ontspanning uitgaan met vrienden. Voor de ander is het met een goed boek op de bank zitten. Weer een ander gaat sporten. Ontspanning kan je mentaal of lichamelijk zoeken. Op een actieve of op een passieve manier. Het gaat erom die dingen te doen, die jouw hoofd leeg maken en je lichaam ontspannen, zodat je kan herstellen van (mentale) inspanning en stress. Neem jij voldoende tijd om te ontspannen? De test bestaat uit 10 vragen. Lees de vragen goed door. Als je jezelf in een vraag herkent kies je voor \"Ja\", anders kies je voor \"Nee\".",
    "url": "https://formulier.wijzijnmind.nl/stresstest-ontspanning-en-herstel",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Neem je ’s ochtends rustig de tijd om op te staan?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Zie je vaak tegen de (werk)dag op?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ben je regelmatig uitgeput aan het eind van de dag?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Kan je thuis makkelijk ontspannen?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Kom je toe aan je hobby’s?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Kom je regelmatig moeilijk in slaap, bijvoorbeeld doordat je ligt te piekeren?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Heb je na je werk of na andere inspannende activiteiten energie over om andere dingen te doen?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Kan je genieten van even niets doen?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Heb je regelmatig lichamelijke klachten zoals hoofdpijn, spierpijn, duizeligheid?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Word je regelmatig moe wakker?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 4
          }
        ],
        "blokken": [
          {
            "tekst": "Nauwelijks tijd voor ontspanning en herstel Met je antwoorden geef je aan niet of nauwelijks tijd voor ontspanning of herstel te nemen. Je vraagt te veel van jezelf. Dit maakt je gevoelig voor de negatieve gevolgen van stress. Je ervaart mogelijk al klachten zoals vermoeidheid of piekeren."
          },
          {
            "tekst": "Maak je je zorgen over klachten die je ervaart, praat daarover met iemand in je omgeving die je vertrouwt. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 3
          },
          {
            "op": "<",
            "waarde": 7
          }
        ],
        "kop": "Wel momenten van ontspanning, maar te weinig",
        "blokken": [
          {
            "tekst": "Met je antwoorden geef je aan dat je wel momenten van rust en ontspanning inlast, maar dat je geneigd bent om dit te weinig te doen. Voldoende rust nemen, tijd maken voor hobby’s en ontspanning zorgen ervoor dat je meer aankan."
          },
          {
            "tekst": "Maak je je zorgen over klachten die je ervaart, praat daar dan over met iemand in je omgeving die je vertrouwt. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 6
          }
        ],
        "kop": "Genoeg tijd voor ontspanning en herstel",
        "blokken": [
          {
            "tekst": "Met je antwoorden geef je aan dat je genoeg tijd neemt voor ontspanning en herstel na (mentale) inspanning. Dat is positief. Dit draagt bij aan een goede balans tussen je lichaam en geest. Hierdoor ben je beter opgewassen tegen stress."
          }
        ]
      }
    ]
  },
  {
    "slug": "assertiviteit_stress",
    "titel": "Assertiviteitstest",
    "onderwerp": "Grenzen",
    "intro": "Assertiviteit gaat over opkomen voor jezelf, over het stellen van grenzen. Over zeggen wat je wilt en nodig hebt en zeggen wat je juist niet wilt. Kom jij voor jezelf op of cijfer je jezelf te veel weg? De test bestaat uit 10 vragen. Lees de vragen goed door. Als je jezelf in een vraag herkent kies je voor \"Ja\", anders kies je voor \"Nee\".",
    "noot": "Het is geen wetenschappelijke test en uit deze test volgt geen diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "url": "https://formulier.wijzijnmind.nl/assertiviteit_stress",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Word je snel boos als je kritiek krijgt?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Vraag je goede vrienden om steun als je dat nodig hebt?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Als iemand over jouw grenzen gaat, zeg je er dan iets van?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Ben je iemand die (te) snel ‘ja’ zegt als iemand een verzoek heeft?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Als het werk of andere bezigheden je eigenlijk teveel wordt, ga jij je dan nog harder inspannen?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Vraag je makkelijk hulp aan anderen (denk aan collega’s, familie, vrienden, buren)?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Laat je beslissingen of nieuwe ideeën liever aan anderen over?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Durf je voor je mening uit te komen als je bij anderen bent?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Vraag je waar je recht op hebt (bijvoorbeeld voldoende pauzemomenten bij werk of vrijwilligerswerk)?",
        "opties": [
          {
            "label": "Ja",
            "score": 1
          },
          {
            "label": "Nee",
            "score": 0
          }
        ]
      },
      {
        "tekst": "Wanneer je het ergens niet mee eens bent, slik je je mening dan meestal in?",
        "opties": [
          {
            "label": "Ja",
            "score": 0
          },
          {
            "label": "Nee",
            "score": 1
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<",
            "waarde": 4
          }
        ],
        "kop": "Niet assertief",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan dat je niet goed voor jezelf opkomt. En dat je te veel rekening houdt met anderen. Dit maakt je gevoelig voor stress. Het is belangrijk om je grenzen aan te geven en anderen om steun te vragen als je dat nodig hebt. Mogelijk heb je wat aan onze tips uit onze flyer met tips en technieken om je grenzen te leren kennen en ze te stellen."
          },
          {
            "tekst": "Maak je je zorgen? Praat erover met iemand die je vertrouwt. Advies nodig? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "Lees meer over flyer",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/grenzen-stellen"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 3
          },
          {
            "op": "<",
            "waarde": 7
          }
        ],
        "kop": "Niet zo assertief",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan dat uitkomen voor je mening of opkomen voor jezelf niet je sterkste punt is. Je neigt mogelijk naar aanpassing aan anderen. Dit maakt je gevoeliger voor stress. Het is belangrijk om goed je grenzen aan te geven en steun te vragen. Mogelijk heb je wat aan onze tips uit onze flyer met tips en technieken om je grenzen te leren kennen en ze te stellen."
          },
          {
            "tekst": "Maak je je zorgen? Praat erover met iemand die je vertrouwt. Advies nodig? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          },
          {
            "linkLabel": "Lees meer over flyer",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/grenzen-stellen"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">",
            "waarde": 6
          }
        ],
        "kop": "Assertief",
        "blokken": [
          {
            "tekst": "Met jouw antwoorden geef je aan dat je goed in staat bent om voor jezelf op te komen. Je bent assertief. Dat is positief! Assertiviteit helpt je om stress de baas te blijven."
          }
        ]
      }
    ]
  },
  {
    "slug": "zelfvertrouwen",
    "titel": "Zelfvertrouwentest",
    "intro": "Door het maken van deze test kan je een beeld krijgen van hoeveel zelfvertrouwen je hebt. De test bestaat uit 10 beschrijvingen die elk een gevoel over jezelf weergeven. Lees iedere beschrijving goed door en geef daarna aan of je het er: helemaal mee eens; mee eens; niet mee eens of helemaal niet mee eens bent.",
    "noot": "Uit deze vragenlijst volgt géén diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "instrument": "Dit is de Nederlandse vertaling van de Rosenberg Self-Esteem Scale © 1965 M. Rosenberg.",
    "url": "https://formulier.wijzijnmind.nl/zelfvertrouwen",
    "scoring": "som",
    "vragen": [
      {
        "tekst": "Ik ben tevreden met mezelf",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 4
          },
          {
            "label": "Mee eens",
            "score": 3
          },
          {
            "label": "Niet mee eens",
            "score": 2
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik denk wel eens dat ik het niet goed doe",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 1
          },
          {
            "label": "Mee eens",
            "score": 2
          },
          {
            "label": "Niet mee eens",
            "score": 3
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Ik vind dat ik een aantal goede kwaliteiten heb",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 4
          },
          {
            "label": "Mee eens",
            "score": 3
          },
          {
            "label": "Niet mee eens",
            "score": 2
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik kan dingen net zo goed als de meeste anderen",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 4
          },
          {
            "label": "Mee eens",
            "score": 3
          },
          {
            "label": "Niet mee eens",
            "score": 2
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik heb niet veel om trots op te zijn",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 1
          },
          {
            "label": "Mee eens",
            "score": 2
          },
          {
            "label": "Niet mee eens",
            "score": 3
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Ik voel me wel eens waardeloos",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 1
          },
          {
            "label": "Mee eens",
            "score": 2
          },
          {
            "label": "Niet mee eens",
            "score": 3
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Ik zou willen dat ik meer respect had voor mezelf",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 1
          },
          {
            "label": "Mee eens",
            "score": 2
          },
          {
            "label": "Niet mee eens",
            "score": 3
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Ik vind mezelf wel eens een mislukking",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 1
          },
          {
            "label": "Mee eens",
            "score": 2
          },
          {
            "label": "Niet mee eens",
            "score": 3
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 4
          }
        ]
      },
      {
        "tekst": "Ik denk positief over mezelf",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 4
          },
          {
            "label": "Mee eens",
            "score": 3
          },
          {
            "label": "Niet mee eens",
            "score": 2
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 1
          }
        ]
      },
      {
        "tekst": "Ik vind dat ik een waardevol persoon ben",
        "opties": [
          {
            "label": "Helemaal mee eens",
            "score": 4
          },
          {
            "label": "Mee eens",
            "score": 3
          },
          {
            "label": "Niet mee eens",
            "score": 2
          },
          {
            "label": "Helemaal niet mee eens",
            "score": 1
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": "<=",
            "waarde": 24
          }
        ],
        "kop": "Niet veel zelfvertrouwen",
        "blokken": [
          {
            "tekst": "Met de antwoorden op de vragen geef je aan niet veel zelfvertrouwen te hebben. Op onze website kan je meer lezen over zelfvertrouwen. Ook geven we tips. Heb je er last van dat je weinig zelfvertrouwen hebt en zou je graag een deskundig, anoniem en gratis advies op maat willen? Neem dan contact op met de MIND Hulplijn."
          },
          {
            "linkLabel": "Lees meer over zelfvertrouwen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/zelfvertrouwen/5-tips-voor-meer-zelfvertrouwen"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://www.mindhulplijn.nl"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 25
          },
          {
            "op": "<=",
            "waarde": 34
          }
        ],
        "kop": "Gemiddeld zeker over jezelf",
        "blokken": [
          {
            "tekst": "Met de antwoorden op de vragen geef je aan gemiddeld zeker over jezelf te zijn. Waarschijnlijk heb je wel eens wat minder vertrouwen in jezelf, maar kan je je zelfvertrouwen weer omhoog krijgen door bijvoorbeeld vooral te kijken naar de dingen die goed gaan. Vind je dat je af en toe nog wel wat meer zelfvertrouwen kan gebruiken? Lees dan onze tips voor meer zelfvertrouwen."
          },
          {
            "linkLabel": "Lees meer over zelfvertrouwen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/zelfvertrouwen/5-tips-voor-meer-zelfvertrouwen"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 35
          }
        ],
        "kop": "Veel zelfvertrouwen",
        "blokken": [
          {
            "tekst": "Met de antwoorden op de vragen geef je aan een flinke dosis zelfvertrouwen te hebben. Hou dat vast!"
          }
        ]
      }
    ]
  },
  {
    "slug": "zelfstigma-test",
    "titel": "Zelfstigmatest",
    "intro": "Deze test heeft 20 vragen. De uitkomst laat zien in hoeverre je op dit moment last hebt van negatieve gedachten en gevoelens over je psychische klachten. De test is ontwikkeld door Samen Sterk zonder Stigma, samen met RIBW Brabant en de Toolbox Zelfstigma van Stichting ZON. Hij helpt je ontdekken of zelfstigma je in de weg zit.",
    "noot": "Uit deze vragenlijst volgt géén diagnose. Alleen een psycholoog of psychiater kan een diagnose bij je vaststellen.",
    "url": "https://formulier.wijzijnmind.nl/zelfstigma-test",
    "scoring": "gemiddelde",
    "vragen": [
      {
        "tekst": "Ik vind het moeilijk om de gevolgen van mijn psychische aandoening voor mijn leven, met anderen te bespreken.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel me schuldig als ik een afspraak niet kan nakomen door mijn psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel me ongemakkelijk als ik in gezelschap iets zeg over mijn psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik ben bang dat mensen kunnen zien dat ik een psychische aandoening heb.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Als ik naar een groepsactiviteit ga (zoals een feestje of bijeenkomst), ben ik van te voren zenuwachtig over wat mensen van me zullen denken.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Als ik vanwege mijn psychische aandoening een uitnodiging afsla en niet goed kan vertellen waarom, ben ik bang dat ik mensen kwijtraak.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik ga sociale situaties uit de weg om ongemakkelijke gedachten of gevoelens te vermijden.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Het oordeel van anderen maakt dat ik me minderwaardig voel.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel me incompetent (niet goed genoeg) vanwege mijn psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik oordeel negatief over mezelf.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel mij psychisch kwetsbaarder dan anderen, dit geeft mij het gevoel dat andere mensen beter zijn.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik ben bang dat mensen niet meer met me om willen gaan, omdat ik onder behandeling ben (geweest) voor een psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Als ik iets zeg wat anderen niet begrijpen, schaam ik me voor mezelf.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel me tekort schieten in het contact met anderen.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "In gezelschap voel ik me vaak de minste.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik ben gestopt met een activiteit die ik leuk vond omdat ik bang ben dat mensen oordelen over mijn psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik wil wel contact maken met anderen, maar ik weet niet goed hoe ik dat moet aanpakken.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik vind dat ik maatschappelijk niet meetel.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Als ik moeite heb met het uitvoeren van een activiteit omdat ik last heb van mijn psychische aandoening, word ik boos op mezelf.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      },
      {
        "tekst": "Ik voel me eenzaam vanwege mijn psychische aandoening.",
        "opties": [
          {
            "label": "Helemaal niet",
            "score": 0
          },
          {
            "label": "Soms",
            "score": 25
          },
          {
            "label": "Regelmatig",
            "score": 50
          },
          {
            "label": "Bijna altijd",
            "score": 100
          }
        ]
      }
    ],
    "uitslagen": [
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 0
          },
          {
            "op": "<",
            "waarde": 25
          }
        ],
        "blokken": [
          {
            "tekst": "Je score valt in categorie A: Geen of nauwelijks zelfstigma."
          },
          {
            "tekst": "Misschien wil je anderen helpen die hier wél mee wordtelen. Dat kan op verschillende manieren."
          },
          {
            "kop": "Handige tips en hulpmiddelen"
          },
          {
            "lijst": [
              "Zo help je een naaste met zelfstigma: makkelijke tips om iemand te steunen."
            ]
          },
          {
            "lijst": [
              "Digitale gids: 'Vertel ik het wel of vertel ik het niet': helpt je stap voor stap kiezen of je iets vertelt over je psychische klachten, wat je vertelt, aan wie en wanneer. Fijn voor jezelf of iemand in je omgeving."
            ]
          },
          {
            "lijst": [
              "10 tips voor destigmatiserende communicatie: leer hoe je met woorden en beelden bijdraagt aan meer begrip en minder vooroordelen over mentale gezondheid."
            ]
          },
          {
            "linkLabel": "Lees meer over zo help je een naaste met zelfstigma",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/stigma#Tips%20bij%20stigma"
          },
          {
            "linkLabel": "Digitale gids: 'Vertel ik het wel of vertel ik het niet'",
            "linkUrl": "https://mindplatform.nl/media/8478/download/Algemeen-Vertel-ik-het-wel-of-vertel-ik-het-niet-werkboekje.pdf?v=1"
          },
          {
            "linkLabel": "10 tips voor destigmatiserende communicatie",
            "linkUrl": "https://mindplatform.nl/media/8428/download/SSzS-10-tips-voor-taal.pdf?v=1"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 25
          },
          {
            "op": "<",
            "waarde": 50
          }
        ],
        "blokken": [
          {
            "tekst": "Je score valt in categorie B: Soms zelfstigma."
          },
          {
            "tekst": "Je antwoorden laten zien dat je soms last hebt van zelfstigma. Dat betekent dat je soms minder positief over jezelf denkt door je psychische klachten of bang bent voor wat anderen ervan vinden. Zelfstigma kan je wel eens in de weg staan."
          },
          {
            "tekst": "Je krijgt deze uitslag om je te helpen zien of zelfstigma bij jou speelt. Het is geen oordeel over jou. Jij bepaalt zelf of je er iets mee wilt doen. Wil je ermee aan de slag, dan zijn er mensen en hulpmiddelen die je kunnen helpen."
          },
          {
            "kop": "Tips en hulpmiddelen"
          },
          {
            "lijst": [
              "Tips bij negatieve gedachten en gevoelens: leer ze herkennen en ombuigen."
            ]
          },
          {
            "lijst": [
              "Digitale gids: 'Vertel ik het wel of vertel ik het niet': helpt je stap voor stap kiezen of je iets vertelt over je psychische klachten, wat je vertelt, aan wie en wanneer. Fijn voor jezelf of iemand in je omgeving."
            ]
          },
          {
            "lijst": [
              "Keuzehulp CORAL 2.0: helpt je afwegen of, wat en wanneer je iets wilt vertellen over je mentale gezondheid op je werk of bij solliciteren."
            ]
          },
          {
            "linkLabel": "Lees meer over tips bij negatieve gedachten en gevoelens",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
          },
          {
            "linkLabel": "Digitale gids: 'Vertel ik het wel of vertel ik het niet'",
            "linkUrl": "https://mindplatform.nl/media/8478/download/Algemeen-Vertel-ik-het-wel-of-vertel-ik-het-niet-werkboekje.pdf?v=1"
          },
          {
            "linkLabel": "Keuzehulp CORAL 2.0",
            "linkUrl": "https://kenniscentrumphrenos.nl/kennisproduct/doorontwikkeling-coral/"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 50
          },
          {
            "op": "<",
            "waarde": 75
          }
        ],
        "blokken": [
          {
            "tekst": "Je score valt in categorie C: Regelmatig zelfstigma."
          },
          {
            "tekst": "Je antwoorden laten zien dat je vaak last hebt van zelfstigma. Je denkt soms negatief over jezelf door je psychische klachten of bent bang voor het oordeel van anderen. Daardoor kun je minder zelfvertrouwen hebben of contacten vermijden."
          },
          {
            "tekst": "Denk eens na over:"
          },
          {
            "lijst": [
              "Wanneer voel jij je onzeker of kleiner worden?"
            ]
          },
          {
            "lijst": [
              "Komt dat door je eigen gedachten?"
            ]
          },
          {
            "lijst": [
              "Of door de angst voor het oordeel van anderen?"
            ]
          },
          {
            "tekst": "Je krijgt deze uitslag om je te helpen zien of zelfstigma bij jou speelt. Het is geen oordeel over jou. Jij bepaalt zelf of je er iets mee wilt doen. Wil je ermee aan de slag, dan zijn er mensen en hulpmiddelen die je kunnen helpen."
          },
          {
            "kop": "Tips en hulpmiddelen"
          },
          {
            "lijst": [
              "Tips bij negatieve gedachten en gevoelens: leer ze herkennen en ombuigen."
            ]
          },
          {
            "lijst": [
              "Digitale gids: 'Vertel ik het wel of vertel ik het niet': helpt je stap voor stap kiezen of je iets vertelt over je psychische klachten, wat je vertelt, aan wie en wanneer. Fijn voor jezelf of iemand in je omgeving."
            ]
          },
          {
            "lijst": [
              "Keuzehulp CORAL 2.0: helpt je afwegen of, wat en wanneer je iets wilt vertellen over je mentale gezondheid op je werk of bij solliciteren."
            ]
          },
          {
            "kop": "Napraten?"
          },
          {
            "tekst": "Bel of chat met de MIND Hulplijn voor gratis, anoniem en deskundig advies."
          },
          {
            "linkLabel": "Lees meer over tips bij negatieve gedachten en gevoelens",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
          },
          {
            "linkLabel": "Digitale gids: 'Vertel ik het wel of vertel ik het niet'",
            "linkUrl": "https://mindplatform.nl/media/8478/download/Algemeen-Vertel-ik-het-wel-of-vertel-ik-het-niet-werkboekje.pdf?v=1"
          },
          {
            "linkLabel": "Keuzehulp CORAL 2.0",
            "linkUrl": "https://kenniscentrumphrenos.nl/kennisproduct/doorontwikkeling-coral/"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      },
      {
        "regels": [
          {
            "op": ">=",
            "waarde": 75
          },
          {
            "op": "<=",
            "waarde": 100
          }
        ],
        "blokken": [
          {
            "tekst": "Je score valt in categorie D: Vaak zelfstigma."
          },
          {
            "tekst": "Je antwoorden laten zien dat je vaak last hebt van zelfstigma. Je kan je minder waard voelen door je psychische klachten en misschien contact vermijden, omdat je bang bent voor het oordeel van anderen."
          },
          {
            "tekst": "Denk eens na over:"
          },
          {
            "lijst": [
              "Wanneer voel jij je onzeker of kleiner worden?"
            ]
          },
          {
            "lijst": [
              "Komt dat door je eigen gedachten?"
            ]
          },
          {
            "lijst": [
              "Of door de angst voor het oordeel van anderen?"
            ]
          },
          {
            "tekst": "Je krijgt deze uitslag om je te helpen zien of zelfstigma bij jou speelt. Het is geen oordeel over jou. Jij bepaalt zelf of je er iets mee wilt doen. Wil je ermee aan de slag, dan zijn er mensen en hulpmiddelen die je kunnen helpen."
          },
          {
            "kop": "Tips en hulpmiddelen"
          },
          {
            "lijst": [
              "Tips bij negatieve gedachten en gevoelens: leer ze herkennen en ombuigen."
            ]
          },
          {
            "lijst": [
              "Digitale gids: 'Vertel ik het wel of vertel ik het niet': helpt je stap voor stap kiezen of je iets vertelt over je psychische klachten, wat je vertelt, aan wie en wanneer. Fijn voor jezelf of iemand in je omgeving."
            ]
          },
          {
            "lijst": [
              "Keuzehulp CORAL 2.0: helpt je afwegen of, wat en wanneer je iets wilt vertellen over je mentale gezondheid op je werk of bij solliciteren."
            ]
          },
          {
            "kop": "Napraten?"
          },
          {
            "tekst": "Bel of chat met de MIND Hulplijn voor gratis, anoniem en deskundig advies."
          },
          {
            "linkLabel": "Lees meer over tips bij negatieve gedachten en gevoelens",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
          },
          {
            "linkLabel": "Digitale gids: 'Vertel ik het wel of vertel ik het niet'",
            "linkUrl": "https://mindplatform.nl/media/8478/download/Algemeen-Vertel-ik-het-wel-of-vertel-ik-het-niet-werkboekje.pdf?v=1"
          },
          {
            "linkLabel": "Keuzehulp CORAL 2.0",
            "linkUrl": "https://kenniscentrumphrenos.nl/kennisproduct/doorontwikkeling-coral/"
          },
          {
            "linkLabel": "MIND Hulplijn",
            "linkUrl": "https://mindhulplijn.nl/"
          }
        ]
      }
    ]
  }
];
