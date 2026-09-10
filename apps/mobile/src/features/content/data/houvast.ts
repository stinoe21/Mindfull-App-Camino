// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: de psychipedia en de online gidsen in content/mind. Opnieuw
// genereren: node scripts/gen-houvast.mjs (daar staat ook welke pagina en
// welke gids bij een onderwerp horen).
//
// Houvast is de compacte kennislaag van de app (Stijn, 10 september 2026,
// docs/scope.md): per onderwerp de uitleg uit de psychipedia van MIND plus de
// tips en oefeningen uit de online gids. De teksten zijn woordelijk van MIND.

import type { InhoudBlok } from "../InhoudBlokken.tsx";

export type HouvastTip = { kop?: string; blokken: InhoudBlok[] };
export type HouvastGids = {
  slug: string;
  titel: string;
  /** De leespagina op wijzijnmind.nl. */
  url: string;
  /** De aanmeldpagina van MIND, om de gids per mail te krijgen. */
  aanmeld?: string;
};
export type Houvast = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app (Slaap, Stress, ...). */
  onderwerp: string;
  /** Kort uitgelegd: de kern, een paar regels. */
  kort: string;
  /** Meer over dit onderwerp: de verdieping, uitklapbaar. */
  meer: InhoudBlok[];
  /** De psychipedia-pagina op wijzijnmind.nl, als die er is. */
  bron?: string;
  /** Wat kan helpen: drie tot vijf tips, uit de gids of anders uit de psychipedia. */
  tips: HouvastTip[];
  /** Probeer dit eens: alleen als er echt een oefening is. */
  oefening?: HouvastTip;
  /** De online gids over dit onderwerp, als die er is. */
  gids?: HouvastGids;
};

export const HOUVAST: Houvast[] = [
  {
    "slug": "piekeren",
    "titel": "Piekeren",
    "onderwerp": "Piekeren",
    "kort": "Iedereen piekert wel eens. Een conflict op je werk, een doktersafspraak waar je tegenop ziet, of een examen dat je gaat afleggen, kunnen allemaal redenen zijn om te piekeren. Als je piekert heb je last van een eindeloze reeks gedachten die maar door je hoofd blijven gaan. Die gedachten beginnen vaak met de woorden 'Wat als...?' 'Stel dat...?'",
    "meer": [
      {
        "tekst": "De bedoeling van de meeste mensen die piekeren is waarschijnlijk om hun gedachten op een rijtje te zetten. Of om zichzelf voor te bereiden op een situatie. Maar niets is minder waar: piekeren leidt niet tot oplossingen of nieuwe inzichten. Veel piekeren kan leiden tot stress, angst en somberheid. Bovendien kost piekeren veel tijd en energie."
      },
      {
        "kop": "Wat zijn de oorzaken van dwangmatig piekeren?"
      },
      {
        "tekst": "Soms staat het piekeren niet op zichzelf en is er meer aan de hand:"
      },
      {
        "lijst": [
          "Piekeren kan een kenmerk zijn van een gegeneraliseerde angststoornis (ook wel piekerstoornis genoemd). Je hebt dan het gevoel dat je niet meer kan stoppen met piekeren en je maakt je continu zorgen over dingen die horen bij het dagelijks leven. Daarnaast word je in je dagelijks functioneren belemmerd door al het gepieker.",
          "Piekeren kan ook een kenmerk zijn van depressie. Je piekert dan niet alleen, maar je hebt ook andere klachten, zoals somberheid, lusteloosheid, of het leven niet meer zien zitten."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/piekeren",
    "tips": [
      {
        "kop": "Gedachten stop techniek",
        "blokken": [
          {
            "tekst": "Met deze techniek probeer je de stroom aan gedachten die je hebt wanneer je piekert te doorbreken en je gedachten te richten op andere dingen. Piekergedachten zijn bijna altijd negatieve gedachten. Wees je hiervan bewust en probeer de negatieve gedachten te vervangen door positieve gedachten. Als je in de gaten hebt dat je je zorgen maakt, zeg je letterlijk en hardop \"stop!\" tegen jezelf. Dit lijkt misschien vreemd, maar het kan erg effectief zijn. Vervolgens zeg je hardop: \"Op dit moment denk ik aan… (je negatieve gedachte), maar eigenlijk wil ik denken aan… (je nieuwe, positieve gedachte).\" Bijvoorbeeld: \"Op dit moment denk ik aan mijn examen van volgende week, maar eigenlijk wil ik denken aan afgelopen zaterdag, toen we zo gezellig uit eten geweest zijn.\" Oefen hier net zolang mee, totdat je alleen nog maar in je hoofd \"stop!\" tegen jezelf hoeft te zeggen om je piekergedachten te doorbreken."
          }
        ]
      },
      {
        "kop": "Zoek afleiding",
        "blokken": [
          {
            "tekst": "Wanneer je merkt dat je begint te piekeren, ga dan iets doen. Iets doen leidt je gedachten af. Vooral bewegen kan goed helpen tegen gepieker. Ga bijvoorbeeld sporten of wandelen. Veel mensen geven aan dat ze door te bewegen ‘hun hoofd leeg kunnen maken’. Wanneer je ’s nachts ligt te piekeren, kan het ook helpen om afleiding te zoeken. Probeer een beetje te lezen. Of doe een ontspanningsoefening."
          }
        ]
      },
      {
        "kop": "Piekerkwartier",
        "blokken": [
          {
            "tekst": "Plan iedere dag voor jezelf een vast tijdstip waarop je een kwartier heel bewust je zorgen overdenkt. Het is belangrijk dat je echt na vijftien minuten stopt en afleiding zoekt. Zet daarom een wekker op je telefoon. Wanneer je buiten dit kwartier een piekergedachte krijgt, schrijf je deze op een ‘piekerlijstje’. Pas wanneer je piekerkwartier is aangebroken, mag je nadenken over de zorgen die je hebt opgeschreven op je lijstje. Het kan best zijn dat tegen die tijd de zorgen er niet meer zijn. Zijn de zorgen er nog wel, dan kan je hierover in je piekerkwartier rustig nadenken. Wanneer je het prettig vindt kan je in je piekerkwartier je gedachten ook opschrijven. Dit kan helpen om je gedachten te ordenen. Je zal merken dat het denken over zorgen een andere lading krijgt wanneer je het bewust doet en dat je buiten je piekerkwartier uiteindelijk minder gaat piekeren."
          }
        ]
      },
      {
        "kop": "Piekerelastiekje",
        "blokken": [
          {
            "tekst": "Draag een los elastiekje om je pols. Steeds als je merkt dat je een negatieve gedachte hebt of begint te piekeren, trek je aan het elastiekje en tik je hierdoor zachtjes tegen je pols. Dit kan de stroom aan gedachten even doorbreken. Probeer vervolgens bewust aan iets anders, positiefs te denken. Misschien heb je in het begin het idee dat je de hele tijd aan het elastiekje zit te plukken. Dat is niet erg. Het is juist de bedoeling dat je je ervan bewust wordt hoeveel piekergedachten je hebt."
          }
        ]
      },
      {
        "kop": "Praat erover",
        "blokken": [
          {
            "tekst": "Het kan zijn dat je je zorgen maakt over je gepieker. Als dit zo is, is het belangrijk dat je je hart lucht en steun zoekt. Praat over je gevoelens met bijvoorbeeld familieleden of vrienden. Merk je dat je door je gepieker al meer dan twee weken veel moeite hebt met je dagelijkse leven? Zoek dan steun bij een professional. De eerste stap om professionele hulp te vragen is een afspraak bij de huisarts. De huisarts kijkt samen met jou naar wat je kan helpen."
          },
          {
            "tekst": "Vind je het moeilijk om te praten over hoe je je voelt? Wij schreven een online gids met tips en info die je hierbij kunnen helpen."
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Doe een ontspannende oefening",
      "blokken": [
        {
          "tekst": "Een ontspannende oefening kan je op ieder moment van de dag doen. Een voorbeeld van een ontspanningsoefening is een buikademhalingsoefening. Deze kan je het gemakkelijkste aanleren terwijl je ligt. Wanneer je meer ervaring met de oefening hebt, kan je deze ook zittend of zelfs staand uitvoeren. Voer de oefening als volgt uit: ga gemakkelijk liggen. Sluit je ogen en leg je handen op je buik. Duw je buik uit bij het inademen en trek je buik lichtjes in bij het uitademen. Tel in gedachten iedere in- en iedere uitademing. Probeer de in- en uitademing rustig en regelmatig te laten verlopen. Wanneer je merkt dat je gedachten afdwalen, begin dan gewoon opnieuw te tellen. Op een gegeven moment zal je merken dat het ademen je ontspant en dat je alleen nog maar met het ademen bezig bent, in plaats van te piekeren. Op onze website vind je meer ontspanningsoefeningen."
        }
      ]
    },
    "gids": {
      "slug": "piekeren",
      "titel": "Piekeren",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/piekeren",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_piekeren"
    }
  },
  {
    "slug": "helpende-gedachten",
    "titel": "Helpende gedachten",
    "onderwerp": "Piekeren",
    "kort": "Veel mensen hebben het idee dat hoe ze zich voelen afhangt van de gebeurtenissen die zij meemaken. Maar wist je dat als je anders over een gebeurtenis gaat denken, ook je gevoelens daarover zullen veranderen? Waarschijnlijk ga je je ook anders gedragen in reactie op de gebeurtenis. Niet-helpende gedachten zorgen ervoor dat je vervelende gevoelens ervaart, terwijl helpende gedachten meer gewenste gevoelens oproepen.",
    "meer": [],
    "tips": [
      {
        "kop": "Maak een G-schema en krijg inzicht in gedachten, gevoelens en gedrag",
        "blokken": [
          {
            "tekst": "Je hebt het meestal niet door wanneer je gedachten nare gevoelens veroorzaken. Het invullen van een G-schema helpt je inzicht krijgen in de verbanden tussen gedachten, gevoelens en gedrag. Sta de komende week stil bij momenten waarin je last hebt van nare gevoelens. Je kan ook terugdenken aan een eerdere situatie. Noteer voor jezelf:"
          },
          {
            "lijst": [
              "Datum",
              "Waar ben ik? Met wie ben ik? Wat gebeurt er? (gebeurtenis)",
              "Wat denk ik? (gedachten)",
              "Wat voel ik (bijvoorbeeld bang, boos, blij, bedroefd)? (gevoel)",
              "Hoe reageer ik? (gedrag)"
            ]
          }
        ]
      },
      {
        "kop": "Daag niet-helpende gedachten uit en vervang ze door helpende gedachten",
        "blokken": [
          {
            "tekst": "Bij oefening 1 heb je jouw niet-helpende gedachten in kaart gebracht. Bij deze oefening ga je deze gedachten ‘uitdagen’ om ze daarna te vervangen door helpende gedachten."
          },
          {
            "lijst": [
              "Daag je niet-helpende gedachten uit door het stellen van vragen, zoals:",
              "Hoe weet ik dat dit zo is? Welke bewijzen of aanwijzingen heb ik hiervoor? Welke redenen heb ik om dit te geloven?",
              "Zijn er ook bewijzen tegen deze gedachten? Hoe zou een ander tegen deze situatie aankijken? Wat zou ik tegen een vriend zeggen die dit aan mij vertelde? Is de manier waarop ik er nu over denk de enige mogelijke manier?",
              "Stel dat wat ik denk inderdaad zou gebeuren of klopt, wat betekent dit dan voor mij? Waarom is het erg als dit zo zou zijn? Welke mogelijkheden zou ik dan hebben om met deze situatie om te gaan? Zou ik dit (uiteindelijk) kunnen verdragen?",
              "Helpen deze gedachten mij om mij te voelen en gedragen op een manier waarop ik dat wil?",
              "Vervang nu de niet-helpende gedachten door helpende gedachten."
            ]
          }
        ]
      }
    ],
    "gids": {
      "slug": "helpende-gedachten",
      "titel": "Maak je gedachten helpend",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/helpende-gedachten",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
    }
  },
  {
    "slug": "stress",
    "titel": "Stress",
    "onderwerp": "Stress",
    "kort": "Stress is een reactie in je lichaam en hoofd op een situatie die spanning geeft. Je ervaart stress als er iets van je gevraagd wordt dat belangrijk is of moeilijk voelt. Denk aan een examen, een sollicitatiegesprek of zorgen om je gezin. Je lichaam maakt dan stresshormonen aan, waardoor je alerter bent, sneller denkt en meer aankan.",
    "meer": [
      {
        "kop": "Wanneer is stress ongezond?"
      },
      {
        "tekst": "Gezonde stress hoort bij het leven. Iedereen voelt het wel eens. Vanuit de evolutie is stress bedoeld als een korte reactie om te overleven. Het geeft je tijdelijk extra kracht en energie. Gezonde stress helpt je om beter te presteren. Je voelt het bijvoorbeeld vlak voor een spannende gebeurtenis. Zodra dat moment voorbij is, verdwijnt de spanning vanzelf."
      },
      {
        "tekst": "Ongezonde stress ontstaat als stress vaak voorkomt of lang aanhoudt en je het gevoel hebt geen controle te hebben over de situatie. Bijvoorbeeld bij werkdruk, geldproblemen of veel regelwerk in korte tijd. Je krijgt dan niet genoeg tijd om te herstellen. Dit merk je vaak aan klachten, zoals piekeren, hoog ademen, hoofdpijn en slecht slapen."
      },
      {
        "tekst": "Als je een keertje of een korte periode dit soort klachten ervaart, hoeft er niet direct iets aan de hand te zijn. Als je daarna maar tijd hebt om ervan bij te komen, je weet waar dit vandaan komt en hoe je hiermee om kan gaan. Ervaar je regelmatig dit soort klachten, dan is het belangrijk om je bewust te zijn dat dit signalen van je lichaam zijn dat je te veel stress ervaart. En dat je ermee aan de slag gaat om hier iets aan te veranderen."
      },
      {
        "tekst": "Je bent waarschijnlijk niet op deze pagina omdat je je zo relaxed voelt. Neem heel even de tijd om mee te doen aan de fysiologische zucht. De snelste en makkelijkste manier om kalm te worden. Dan kan je daarna wat rustiger weer verder lezen."
      },
      {
        "kop": "Hoe herken je ongezonde stress?"
      },
      {
        "tekst": "Als je te veel stress ervaart kan je dat merken aan je lijf, je gevoelens, je gedachten en je gedrag. Sommige mensen hebben niet direct door dat ze veel spanning ervaren. De klachten die iemand ervaart, verschillen van persoon tot persoon. Ook kunnen de verschillende soorten klachten invloed op elkaar hebben. Bijvoorbeeld:"
      },
      {
        "tekst": "Fatma slaapt slecht door zorgen op haar werk, waar bezuinigingen zijn aangekondigd. Overdag is ze wat chaotischer en vergeet ze een belangrijke afspraak met haar leidinggevende. Ook is ze sneller geïrriteerd, waardoor ze ruzie krijgt met haar partner. Dit zorgt dat Fatma nog meer stress krijgt."
      },
      {
        "tekst": "Bij stress gaat je lichaam harder werken en verandert er van alles. Je hart, je ademhaling, spieren, je maag en darmen kunnen allemaal reageren. Ook kan je afweer tegen ziektes minder goed gaan werken, hierdoor heb je meer kans om verkouden te worden of griep te krijgen. Voorbeelden van lichamelijke klachten op het moment dat je gestresst bent:"
      },
      {
        "lijst": [
          "Je bloeddruk gaat omhoog.",
          "Je hartslag stijgt.",
          "Je spieren spannen zich.",
          "Je ademhaling wordt sneller en je gaat hoger ademen.",
          "Het bloed trekt weg uit je gezicht.",
          "Je keel knijpt samen.",
          "Je handen worden koud.",
          "Je begint te zweten.",
          "Je wordt misselijk."
        ]
      },
      {
        "tekst": "Ongezonde stress kan je ook merken aan je stemming. Bijvoorbeeld aan:"
      },
      {
        "lijst": [
          "Je opgejaagd of onrustig voelen.",
          "Je somber voelen.",
          "Snel geïrriteerd zijn.",
          "Je angstig voelen.",
          "Je afgevlakt voelen."
        ]
      },
      {
        "tekst": "Ongezonde stress heeft ook vaak invloed op je gedachten. Deze negatieve gedachten, hebben ook weer invloed op de stress die je ervaart. Voorbeelden van wat je merkt aan je gedachten:"
      },
      {
        "lijst": [
          "Je piekert of denkt negatief over jezelf.",
          "Je twijfelt of je dingen wel kan.",
          "Je denkt dat alles moet of fout gaat.",
          "Je bent vergeetachtig.",
          "Het lukt je niet goed om dingen te plannen.",
          "Je kan minder flexibel denken."
        ]
      },
      {
        "tekst": "Door ongezonde stress kan je je anders gedragen. Bijvoorbeeld:"
      },
      {
        "lijst": [
          "Je maakt meer fouten.",
          "Je trekt je terug uit contact.",
          "Je gedraagt je chaotisch.",
          "Je eet te veel of te weinig, je drinkt te veel.",
          "Je werkt te veel.",
          "Je kan niet goed ontspannen."
        ]
      },
      {
        "tekst": "Hierboven noemen we veelgehoorde stressklachten. Sommige klachten kunnen ook een lichamelijke oorzaak hebben. Als je hierover twijfelt, ga dan naar thuisarts.nl voor betrouwbare informatie over ziekte en gezondheid."
      },
      {
        "tekst": "> Ik had laatst een examen voor mijn werk. Een week van tevoren, voelde ik me gestrest. Als ik eraan dacht, voelde ik dat echt in mijn lijf. Mijn hart ging sneller kloppen en het was alsof ik dan geen lucht kreeg, omdat ik hoog ademde."
      },
      {
        "kop": "Wanneer ontstaat stress?"
      },
      {
        "tekst": "Stress ontstaat wanneer wat er van je gevraagd wordt niet meer in balans is met wat je aankan. Dat evenwicht wordt bepaald door je draaglast (alles wat er op je afkomt) en je draagkracht (wat je aankan). Soms wordt je draaglast groter, bijvoorbeeld door drukte op je werk, ziekte in je omgeving of meerdere veranderingen tegelijk. Soms neemt je draagkracht af, bijvoorbeeld doordat je moe of ziek bent of minder steun hebt uit je omgeving."
      },
      {
        "tekst": "Hoeveel stress je ervaart, hangt af van verschillende dingen:"
      },
      {
        "lijst": [
          "Maatschappelijke omstandigheden: zoals hoge werkdruk, prestatiedruk en economische onzekerheid.",
          "Persoonlijke eigenschappen: bijvoorbeeld perfectionisme, moeilijk nee zeggen of altijd klaar willen staan.",
          "Biologische kwetsbaarheid: bijvoorbeeld erfelijke aanleg.",
          "Invloeden van de omgeving: bijvoorbeeld een moeilijke jeugd of weinig steun van anderen.",
          "Leefgewoonten: weinig slaap, ongezond eten, weinig bewegen of geen pauzes zorgen dat je sneller gespannen raakt."
        ]
      },
      {
        "tekst": "Stress heeft dus nooit maar één oorzaak, maar is het resultaat van meerdere dingen samen."
      },
      {
        "lijst": [
          "Perfectionisme",
          "Ambitie, prestatiegerichtheid, competitief zijn",
          "Moeite hebben met 'niets' doen, vaak twee dingen tegelijk doen",
          "Veel van jezelf eisen en 'moeten'",
          "Groot verantwoordelijkheidsgevoel",
          "Grote betrokkenheid bij gezin en/of werk",
          "Streven naar waardering van anderen",
          "Moeilijk 'nee' kunnen zeggen, grenzen kunnen aangeven of voor jezelf opkomen",
          "Gevoelens slecht kunnen uiten",
          "Het gevoel weinig invloed te kunnen uitoefenen op je omgeving en je eigen leven",
          "Pessimisme en een weinig positieve kijk op eigen prestaties."
        ]
      },
      {
        "tekst": "Er zijn ook dingen die juist helpen om spanning beter aan te kunnen. Het helpt bijvoorbeeld als je steun krijgt van mensen om je heen en genoeg momenten hebt om te ontspannen. Ook is het belangrijk dat je het gevoel hebt zelf keuzes te kunnen maken in je leven, in plaats van dat alles voor je wordt bepaald. Daarnaast geeft het vaak kracht als je dingen doet die voor jou waardevol zijn, zoals werk of activiteiten die zinvol voelen of die je plezier geven. Zulke dingen maken dat je sterker staat, dit noemen we ook wel veerkracht."
      },
      {
        "tekst": "> Meestal loopt alles wel, maar op het moment dat iets anders loopt dan verwacht, gaat het dus mis. Vooral als dit betekent dat ik in actie moet komen om dingen op te lossen of te regelen. Misgaan is misschien een groot woord en vaak gaat het om kleine dingen, maar ik merk wel dat ik dan stress ervaar. Denk aan een ziek kind als ik een deadline heb voor werk, een sportwedstrijd van een van de kinderen die niet goed in de agenda is gezet. - Lees het hele verhaal van Naomi. > > Naomi"
      },
      {
        "kop": "Hoe herstel je van ongezonde stress?"
      },
      {
        "tekst": "Heb jij veel stress ervaren? Hoe lang het duurt om te herstellen is voor iedereen anders. Voor de één is het al voldoende om een paar stapjes terug te doen, terwijl de ander meer ondersteuning nodig heeft. Je herstel hangt ook af van hoe lang je bent doorgegaan terwijl je eigenlijk al over je grens zat, welke klachten je hebt en of je steun krijgt van mensen om je heen en of je hulp krijgt van een professional."
      },
      {
        "tekst": "Herstellen van stress kost tijd. Vaak geldt: hoe langer je over je grens bent gegaan, hoe langer het duurt om weer op te laden."
      },
      {
        "tekst": "Het kan verleidelijk zijn om thuis te blijven en te rusten. Maar herstellen van stress gaat vaak sneller als je juist op een rustige manier dingen gaat ondernemen. Kies activiteiten die je helpen spanning los te laten en grip te krijgen op hoe je je voelt. Denk aan bewegen of sporten, een denksport zoals schaken of puzzelen, muziek luisteren of nog beter: muziek maken of iets creatiefs doen. Een avondje ontspannen op de bank is vaak fijn, maar hele dagen series kijken helpt je herstel meestal niet."
      },
      {
        "tekst": "Belangrijk is dat je leert doseren: actief blijven, maar ook op tijd stoppen, prioriteiten stellen en je grenzen bewaken. Zo breng je stap voor stap weer meer balans terug."
      },
      {
        "tekst": "Waar heb jij stress van? Stress hoort bij het leven, maar soms wordt het te veel. Hoe ga jij om met stressvolle situaties? Deel jouw ervaring en help anderen met jouw verhaal."
      },
      {
        "tekst": "Deel jouw verhaal"
      },
      {
        "kop": "Wat kan je doen bij stress?"
      },
      {
        "tekst": "Lees onze tips Als je stress ervaart, helpt het vaak niet om jezelf terug te trekken en vooral rust te pakken. Wat helpt dan wel? Wij schreven tips om stress aan te pakken."
      },
      {
        "tekst": "Neem iemand in vertrouwen Als je ergens mee zit, is het vaak fijn om dit met iemand te delen. Praten lucht op en het helpt je om je gedachten op een rij te zetten. Je hoeft het niet alleen te doen. Vind je praten lastig of kan je wel wat tips gebruiken over hoe je een gesprek begint? Wij schreven tips om te praten over hoe je je voelt. Je vindt hierin handvatten over hoe je het gesprek aangaat, met wie en waarom het belangrijk is. Maar we zijn ook eerlijk en vertellen waarom soms andere manieren beter helpen."
      },
      {
        "tekst": "Maak een afspraak met de huisarts Heb je zo veel last van stressklachten dat het veel invloed heeft op jouw dagelijkse leven? En duurt dit al twee weken of langer? Neem dan contact op met je huisarts. Samen kunnen jullie kijken wat er nodig is."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/stress",
    "tips": [
      {
        "kop": "Krijg inzicht",
        "blokken": [
          {
            "tekst": "Om ongezonde stress te voorkomen, moet je dingen die energie vragen voldoende afwisselen met dingen die energie geven. Doe je dat niet, dan krijg je lichamelijk en mentaal niet de tijd om bij te komen van de stress die je ervaart. Dan gaan spanning en vermoeidheid zich opstapelen."
          },
          {
            "tekst": "Waar de een vooral stress ervaart van geldproblemen, ervaart de ander stress door familieproblemen of door deadlines op het werk. Waar je stress van hebt is persoonlijk. Ook kan je door een combinatie van omstandigheden stress ervaren. Veel mensen weten van zichzelf wel waar ze stress van krijgen. Toch helpt het om het voor jezelf eens op te schrijven. Het maakt je bewust en het leidt vaak tot nieuwe inzichten. Neem een moment de tijd om te noteren wat bij jou stress veroorzaakt. Wat kost je veel energie? Kan je daar wat aan veranderen? Wanneer heb je meer en wanneer heb je minder stress?"
          }
        ]
      },
      {
        "kop": "Ontspan",
        "blokken": [
          {
            "tekst": "Vind je het wel eens lastig om te ontspannen? Op onze website vind je verschillende oefeningen, die je hierbij helpen. Probeer, als je met taken bezig bent die jou stress geven, om ongeveer ieder uur vijf ontspannende minuten te hebben. Neem bijvoorbeeld de tijd voor een kop koffie of thee of ga een paar minuten naar buiten om een luchtje te scheppen."
          }
        ]
      },
      {
        "kop": "Ga niet thuiszitten",
        "blokken": [
          {
            "tekst": "Sommige mensen vallen stil door stress. Ze blijven het liefst thuis en trekken zich terug uit sociale contacten. Dit kan je beter niet doen. Juist door dingen te blijven ondernemen en door in contact te blijven met anderen activeer je de breinnetwerken die controle hebben over negatieve emoties."
          },
          {
            "tekst": "Hiermee bedoelen we niet dat je de hele dag in de weer moet zijn. Maar probeer je energie te verdelen en de momenten dat je actief bent af te wisselen met rustige momenten."
          }
        ]
      },
      {
        "kop": "Stel je verwachtingen bij",
        "blokken": [
          {
            "tekst": "Als je vaak stress ervaart, kan het geen kwaad eens kritisch te kijken naar de verwachtingen die je van je omgeving en ook van jezelf hebt. Stel jezelf vragen: Zijn mijn verwachtingen wel haalbaar? Waarom heb ik deze verwachtingen? Kan ik mijn verwachtingen ook kleiner maken? Zodra je dit doet, zal je merken dat je meer lucht ervaart. Het hoeft namelijk niet allemaal perfect. En fouten maken is menselijk."
          }
        ]
      },
      {
        "kop": "Stel prioriteiten en maak keuzes",
        "blokken": [
          {
            "tekst": "Heb jij stress doordat je constant het gevoel hebt dat je te veel moet doen in te weinig tijd? Schrijf alle dingen die je wil of moet doen op. Maak vervolgens een onderscheid in dingen die ‘nu’ moeten gebeuren en dingen die best nog even kunnen wachten. Vaak blijkt dat veel taken die in je hoofd rondspoken niet direct gedaan hoeven te worden."
          },
          {
            "tekst": "Merk je dat je agenda te vol staat met afspraken, omdat je niet kan kiezen of omdat je niets wil missen? Maak keuzes. Waar wil je echt heen en welke afspraken zijn minder belangrijk? Misschien kan je een afspraak verplaatsen of afzeggen of een keer niet beloven dat je erbij bent. Dit kan even een ongemakkelijk gevoel geven, maar uiteindelijk houd je meer energie over om de dingen die je wilt doen ook echt goed te doen."
          }
        ]
      }
    ],
    "gids": {
      "slug": "stress",
      "titel": "Stress",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/stress",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_stress"
    }
  },
  {
    "slug": "burn-out",
    "titel": "Burn-out",
    "onderwerp": "Stress",
    "kort": "We weten niet zo goed wat een burn-out is. Toch is burn-out een veelgebruikte term. Het kan ermee te maken hebben dat er minder schaamte om het woord burn-out hangt dan bij bijvoorbeeld een depressie of angststoornis.",
    "meer": [
      {
        "tekst": "Wat we wel zeker weten, is dat stress en overbelasting al heel lang bestaan. In plaats van ons te richten op de naam burn-out, is het belangrijker om te begrijpen hoe langdurige stress werkt. Maar ook hoe we gevoelens van stress in sommige gevallen kunnen voorkomen en vooral hoe we ons sterk of weerbaar kunnen maken, zodat we beter met stressvolle gebeurtenissen kunnen omgaan."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/burn-out",
    "tips": []
  },
  {
    "slug": "werkstress",
    "titel": "Werkstress",
    "onderwerp": "Stress",
    "kort": "Werkstress is stress door of in je werksituatie. De stress hoeft niet veroorzaakt te worden door je werksituatie alleen. Ook de combinatie van veel druk op je werk én thuis kan voor stressklachten zorgen. Deze klachten kunnen ervoor zorgen dat je minder goed werkt levert.",
    "meer": [
      {
        "tekst": "> Als ik stress ervaar, komt dat meestal doordat er veel dingen naast elkaar lopen. En er net iets te veel bij komt, boven op de dagelijkse dingen. Ik werk vier dagen in de week en wil graag goed presteren. Tegelijk wil ik er voor mijn kinderen zijn, ervoor zorgen dat ze het thuis fijn hebben. - Lees hoe Naomi omgaat met stress in een druk leven met werk en gezin >"
      },
      {
        "kop": "Gezonde en ongezonde werkstress"
      },
      {
        "tekst": "Heel veel mensen ervaren wel eens stress door werk. Een keertje flink moe zijn na een dag hard werken is geen ramp en kan je zelfs een voldaan gevoel geven. Stress is namelijk ook niet ongezond. Het helpt je om beter te presteren: het maakt je alert, geconcentreerd en snel. Het is wel belangrijk dat je lichaam en hoofd daarna kunnen herstellen van de stress. Als er te veel momenten van stress zijn, dan gaat het mis. Er is dan niet voldoende tijd om te herstellen. De stress stapelt zich op. Dan is er sprake van ongezonde stress."
      },
      {
        "kop": "Symptomen van werkstress"
      },
      {
        "tekst": "Wanneer je ongezonde werkstress ervaart, dan kan je last van klachten krijgen. Deze stressklachten zijn signalen. Je lichaam waarschuwt dat je te veel stress ervaart."
      },
      {
        "tekst": "Hieronder vind je een lijst met mogelijke stresssignalen."
      },
      {
        "lijst": [
          "Vaker verkouden",
          "Hoofdpijn, nekpijn en/of rugpijn",
          "Maagpijn of darmklachten",
          "Oorsuizen, duizeligheid of dubbelzien",
          "Vermoeidheid",
          "Moeilijk in slaap komen of 's nachts wakker liggen",
          "Hartkloppingen",
          "Angstklachten",
          "Prikkelbaarheid",
          "Gevoelens van eenzaamheid",
          "Sneller huilen of een brok in je keel krijgen",
          "Somberheid",
          "Veel piekeren",
          "Veel of weinig eten, alcohol drinken, drugs gebruiken of roken",
          "Tandenknarsen in je slaap of angstig dromen",
          "Snel geïrriteerd zijn",
          "Rusteloosheid, niet stil kunnen zitten",
          "Besluiteloosheid",
          "Chagrijnig zijn",
          "Vergeetachtigheid of concentratieproblemen",
          "Zwart-witdenken",
          "Moeite met in oplossingen denken",
          "In details blijven hangen",
          "Vaak een duf of slaperig gevoel",
          "Minder gevoel voor humor"
        ]
      },
      {
        "tekst": "Stresssignalen zijn voor iedereen anders: de een krijgt darmklachten en last van slapeloosheid, de ander wordt prikkelbaar en gaat tandenknarsen in slaap. Probeer bij jezelf te herkennen wat voor jou signalen zijn dat je te veel en te lang stress hebt. Door signalen te herkennen, kan je er eerder iets aan doen."
      },
      {
        "kop": "Oorzaken van stress op het werk"
      },
      {
        "tekst": "Als je last hebt van werkstress, is het belangrijk om voor jezelf te bedenken waardoor je deze stress ervaart. Bijvoorbeeld door:"
      },
      {
        "lijst": [
          "Hoge werkdruk door bijvoorbeeld te veel of te moeilijk werk, ervaren van te weinig tijd voor taken, overslaan van pauzes en te weinig vakantie",
          "Te makkelijk werk zonder uitdaging",
          "Onduidelijkheid over je taken",
          "Een slechte relatie of een conflict met je leidinggevende of een collega",
          "Niet gewaardeerd worden",
          "Onzekerheid over de toekomst van je baan"
        ]
      },
      {
        "tekst": "Sommige dingen kunnen iemand stress geven, terwijl iemand anders dit niet zo ervaart. Bijvoorbeeld een verandering in werktaken: de een vindt dit uitdagend, terwijl een ander hier absoluut niet op zit te wachten. Het is dus belangrijk om werk te hebben wat je voldoening geeft en wat bij je past."
      },
      {
        "kop": "Wanneer zoek je professionele hulp?"
      },
      {
        "tekst": "Heb je zo veel last van werkstress dat het veel impact heeft op jouw leven? En duurt dit al twee weken of langer? Neem dan contact op met je huisarts. Samen kunnen jullie kijken wat er nodig is."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/werkstress",
    "tips": [
      {
        "blokken": [
          {
            "tekst": "Ervaar jij stressklachten? Gelukkig zijn er verschillende dingen die je kan doen om je stress aan te pakken. Zo is het belangrijk om te zorgen voor een goede balans tussen spanning en ontspanning. Houd goed voor jezelf in de gaten dat je perioden van activiteit afwisselt met perioden van rust."
          }
        ]
      }
    ]
  },
  {
    "slug": "examenstress",
    "titel": "Examenstress",
    "onderwerp": "Stress",
    "kort": "De examenperiode is spannend. Het is normaal om zenuwachtig voor je examens te zijn. Een beetje spanning is juist gezond en helpt je om goed te presteren. Maar soms kan de stress je te veel worden. Gelukkig kan je daar iets aan doen.",
    "meer": [
      {
        "tekst": "Lees onze tips Als je examenstress hebt, helpt het niet om tegen jezelf te zeggen dat je niet zenuwachtig mag zijn of om negatief te denken. Wat helpt dan wel? Lees onze tips."
      },
      {
        "tekst": "Praat erover Ga erover in gesprek met iemand die je vertrouwt, zoals je ouders of een ander familielid. Ook kan je het bespreken met bijvoorbeeld je mentor. Op school krijgen ze vaak te maken met leerlingen of studenten die hier last van hebben. Vaak kunnen ze je op weg helpen met tips."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/examenstress",
    "tips": [
      {
        "kop": "Denk helpende gedachten",
        "blokken": [
          {
            "tekst": "Door de spanning denk je misschien: “Ik kan dit niet!” of “Laat dat hele examen maar zitten!”_. Herken deze gedachten bij jezelf en zet er andere gedachten tegenover, gedachten die je helpen in plaats van je in de weg zitten. Bijvoorbeeld:"
          },
          {
            "lijst": [
              "“Ik heb me goed voorbereid”",
              "“Net een voldoende is ook prima”",
              "“Ik heb eerder lastige dingen gehaald, dit lukt me ook”"
            ]
          }
        ]
      },
      {
        "kop": "Rust is belangrijk",
        "blokken": [
          {
            "tekst": "Ga op tijd slapen en blok niet de hele nacht door. Je brein werkt beter als je uitgerust bent. Sta op tijd op, ontbijt rustig en vertrek op tijd naar je examen. Als je gestrest bent, werkt je geheugen slechter. Rust helpt je om beter te denken en te onthouden. Hulp hierbij nodig? Op de website van MIND vind je oefeningen die je helpen ontspannen."
          }
        ]
      },
      {
        "kop": "Zenuwen zijn normaal",
        "blokken": [
          {
            "tekst": "Het helpt meestal niet om tegen jezelf te zeggen dat je rustig moet blijven. Zeg liever: “Het is oké dat ik zenuwachtig ben.” Voel aan het begin van je examen even de zenuwen en spanning, adem rustig en begin. Voel je na elk half uur nog steeds spanning of angst? Neem een paar minuten om dit te voelen, let op je ademhaling en ga weer verder. Komen de zenuwen binnen een half uur terug. Zeg dan: “Even wachten, ik voel je straks weer.”"
          }
        ]
      },
      {
        "kop": "Herken rampgedachten en probeer ze te stoppen",
        "blokken": [
          {
            "tekst": "Soms maak je in je hoofd van iets kleins iets groots: “Ik heb geen pen bij me, dus kan ik niets opschrijven, dus zak ik voor mijn examen.” Zodra je merkt dat je een rampgedachte hebt, probeer deze gedachten uit te dagen en vraag je jezelf af: “Is dit echt waar? Klopt het wat ik denk?” Daarna zoek je naar een oplossing: “Kan ik een pen lenen?”"
          },
          {
            "tekst": "Nu klinkt dit veel gemakkelijker dan dat het vaak is. Het veranderen van je gedachten lukt vaak niet van de ene op de andere dag. Maar als je hiermee oefent, zal je zien dat je er steeds een beetje beter in wordt. Kan je hier wel wat hulp bij gebruiken? Doe dan onze oefeningen om je gedachten helpend te maken."
          }
        ]
      },
      {
        "kop": "Wees aardig voor jezelf",
        "blokken": [
          {
            "tekst": "Schrijf wat successen op van de afgelopen tijd: een goed cijfer, gescoord bij voetbal of een nieuwe vriend gemaakt. Neem het mee naar je examen. Lees voordat je begint aan je examen het dan nog eens. Dat helpt je herinneren wat je allemaal kan."
          }
        ]
      }
    ],
    "gids": {
      "slug": "examenstress",
      "titel": "examenstress (jongeren)",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/examenstress",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_examenstress"
    }
  },
  {
    "slug": "slapeloosheid",
    "titel": "Slapeloosheid",
    "onderwerp": "Slaap",
    "kort": "We hebben allemaal slaap nodig. Slaap is noodzakelijk om je lichaam én geest te laten herstellen en tot rust te laten komen, zodat je weer energiek aan een nieuwe dag kan beginnen. Maar wat als slapen voor jou een probleem is geworden? Dan ben je niet de enige. Maar liefst een derde van de volwassen Nederlanders geeft aan wel eens slaapproblemen te hebben. Op deze pagina geven we je informatie en tips bij slapeloosheid.",
    "meer": [
      {
        "lijst": [
          "8,2% van de Nederlanders heeft last van insomnia",
          "32,1% van de Nederlanders heeft een algemene slaapstoornis",
          "43,2% van de Nederlanders slaapt onvoldoende"
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/slapeloosheid",
    "tips": [
      {
        "kop": "Check je slaapplek",
        "blokken": [
          {
            "tekst": "Misschien ligt het voor de hand, maar zorg dat je slaapkamer ook daadwerkelijk een SLAAPkamer is. Een prettige, opgeruimde plek waar jij kan ontspannen en tot rust kan komen. Een plek waar je graag naartoe gaat aan het einde van de dag. Gebruik je slaapkamer dan ook niet als werkkamer of om televisie te kijken."
          },
          {
            "tekst": "De temperatuur in een slaapkamer is belangrijk. Zorg dat het niet te warm is, maar ook niet te koud. En zorg voor een goede ventilatie door overdag het raam open te zetten. Sommige mensen vinden het prettig om ook ’s nachts het raam open te hebben. Kies wat jij prettig vindt."
          }
        ]
      },
      {
        "kop": "Verander je denken",
        "blokken": [
          {
            "tekst": "Wanneer je langere tijd niet goed slaapt, is de kans groot dat je verstrikt raakt in gepieker en niet-helpende, negatieve gedachten: \"Oh nee, ik lig nu alweer meer dan een uur wakker en ik moet nu echt slapen, want ik kan nog maar vier uurtjes slapen voordat de wekker gaat en dan ben ik morgen weer de hele dag moe en dan ben ik niet vooruit te branden terwijl ik zo’n drukke dag voor de boeg heb!\" Of je begint je zelfs ’s avonds, nog voordat je naar bed gaat, al zorgen te maken over je nachtrust. Niet doen."
          },
          {
            "tekst": "Ten eerste is het goed om te onthouden dat hoe lang je slaapt niet het belangrijkste is. Veel mensen hebben het idee dat zij elke nacht minstens acht uur moeten slapen. Maar veel belangrijker is de kwaliteit van je slaap en of je een uitgerust gevoel hebt de volgende dag. Stop daarom wanneer je wakker ligt met het kijken op de klok en uitrekenen hoe lang je nog kan slapen. Je legt jezelf een eis op die nergens voor nodig is. Laat de gedachte dat je minstens acht uur moet slapen los. Dit klinkt makkelijker gezegd dan gedaan, maar dit kan al dusdanig veel stress schelen dat je beter slaapt."
          }
        ]
      },
      {
        "kop": "Zorg voor regelmaat en een slaapritueel",
        "blokken": [
          {
            "tekst": "Wanneer je problemen hebt met slapen, is er nog iets anders van groot belang: regelmaat. Je hebt vast wel eens gehoord van de biologische klok. Iedereen heeft een biologische klok. De biologische klok bevindt zich in je hersenen en zorgt ervoor dat verschillende processen in je lichaam geregeld worden, waaronder het slaap-waakritme. Je biologische klok werkt het beste bij regelmaat. Help je biologische klok daarom een handje door ritme aan te brengen. Probeer elke dag rond dezelfde tijd op te staan en naar bed te gaan. Wijk van deze tijden ook in het weekend niet teveel af."
          },
          {
            "tekst": "Daarnaast is het belangrijk om ook ’s avonds regelmaat aan te brengen en toe te werken naar het moment dat je gaat slapen. Vroeger bouwden mensen op een natuurlijke manier hun activiteitenniveau af. Op een gemiddelde avond kwamen mensen thuis van hun werk, gingen eten, praatten wat met elkaar, lazen misschien een boek en gingen slapen. Vergelijk dat eens met onze avonden nu: we doen snel nog even boodschappen, kijken tv, we werken nog wat e-mails weg voor ons werk en kijken om de haverklap op onze telefoon of we nog berichtjes hebben. Ondertussen draaien we nog een was of doen andere huishoudelijke klusjes en tegen de tijd dat we naar bed gaan staan onze hersen en ons lichaam nog helemaal niet in de ruststand. Ook in bed hebben veel mensen vervolgens nog de neiging om tv te kijken of hun telefoon te pakken om nog even wat websites en social media te checken."
          }
        ]
      },
      {
        "kop": "Ontspan!",
        "blokken": [
          {
            "tekst": "Bij de vorige tip hebben we het gehad over het toewerken naar het tijdstip dat je gaat slapen door je activiteitenniveau af te bouwen. Want om te kunnen slapen, is het erg belangrijk om te ontspannen. Als je gespannen bent kan je niet slapen, zo simpel is het. Ga maar na: wanneer je een examen moet afleggen of een (dokters)afspraak hebt waar je tegenop ziet, kom je vaak moeilijker in slaap. Maar ook wanneer je leuke dingen voor de boeg hebt, is het moeilijker om in slaap te komen. Herinner je je de avond voor je verjaardag als kind? Van opwinding lag je dan vast nog wel eventjes wakker."
          },
          {
            "tekst": "Een keertje van de spanning moeilijk in slaap vallen is helemaal niet erg. Maar als je langere tijd problemen hebt met in- en doorslapen, is het goed om bij jezelf na te gaan of dit te maken kan hebben met spanning. Ervaar je veel stress op je werk of thuis? Maak je je zorgen over dingen, pieker je veel? Als je al wat langer slaapproblemen hebt, kan het ook zijn dat je je gespannen voelt bij het naar bed gaan omdat je je alweer zorgen maakt over het wakker liggen."
          }
        ]
      },
      {
        "kop": "Accepteer het wakker liggen",
        "blokken": [
          {
            "tekst": "Bij het lezen van deze tip ben je misschien verbaasd. Je hebt deze tips immers opgezocht, omdat je beter wil slapen en daarmee aan de slag wil gaan. Maar bij deze laatste methode willen we je laten zien dat juist het accepteren van het feit dat je wakker ligt, je misschien kan helpen beter te slapen. Dit is een principe van ‘mindfulness’. Mindfulness gaat over leven met aandacht. Door je aandacht volledig te richten op het hier en nu, leef je minder op de automatische piloot. Je hebt dan ook minder tijd om te piekeren. Door je bijvoorbeeld te focussen op geluiden die je hoort, dingen die je voelt of die je ruikt, zijn je hersenen met iets anders bezig dan piekergedachten."
          },
          {
            "tekst": "Naast leven in het hier en nu, gaat mindfulness over dingen accepteren zoals ze zijn, de dingen niet willen veranderen. Dat is makkelijker gezegd dan gedaan: vervelende gevoelens, zoals pijn, irritatie of verdriet wil je waarschijnlijk niet hebben. Je bent ongetwijfeld dan ook geneigd om er van alles aan te doen om deze gevoelens te veranderen. Maar de kans is groot dat je hierdoor voortdurend bezig bent met het probleem wat de vervelende gevoelens veroorzaakt. Daardoor is het probleem heel prominent aanwezig en wordt het misschien zelfs wel groter dan dat het in werkelijkheid is."
          }
        ]
      }
    ],
    "gids": {
      "slug": "slapeloosheid",
      "titel": "Slapeloosheid",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/slapeloosheid",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_slapeloosheid"
    }
  },
  {
    "slug": "somberheid",
    "titel": "Somberheid",
    "onderwerp": "Somberheid",
    "kort": "Wanneer je problemen ervaart of dingen niet lekker lopen kan je je somber gaan voelen. Denk aan problemen met: Geld, Werk, Relaties, Opvoeden, Gezondheid, Verliezen van een dierbare, Wonen.",
    "meer": [
      {
        "tekst": "Je neerslachtig voelen kan ook als je bijvoorbeeld net ruzie hebt gehad, je erg moe of teleurgesteld bent."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/somberheid",
    "tips": []
  },
  {
    "slug": "depressie",
    "titel": "Depressie",
    "onderwerp": "Somberheid",
    "kort": "Bij een depressie voel je je vaak voor een lange tijd somber, uitgeput, waardeloos en leeg. Het beïnvloedt je dagelijks leven. Je kan minder zelfvertrouwen hebben, slecht slapen, weinig eetlust hebben of je hopeloos voelen. Lees meer over de kenmerken, gevolgen en oorzaken van een depressie én wat je eraan kan doen.",
    "meer": [
      {
        "tekst": "Bij een depressie is het sombere gevoel intens en gaat het niet weg. Niemand kan je opvrolijken, je interesse in dingen is minder, je voelt je leeg en zonder energie. Het lijkt alsof alles ver van je af staat, waardoor dingen niet meer goed tot je doordringen. Je blijft in dezelfde gedachten vastzitten. Vaak voel je je angstig of gespannen zonder dat je weet waarom. Ook kan je erg onrustig zijn. Door jouw klachten is het moeilijk om goed te werken of te studeren, voor je kinderen te zorgen, je huishouden te doen of met vrienden af te spreken."
      },
      {
        "tekst": "\"Ik voel me leeg, alsof niets me nog echt raakt.\""
      },
      {
        "tekst": "Herken je dit gevoel bij jezelf? Vraag onze tips aan die je helpen met een aanhoudende somberheid om te gaan."
      },
      {
        "tekst": "Vraag de tips gratis aan"
      },
      {
        "kop": "Soorten depressies"
      },
      {
        "tekst": "Niet alle depressies zijn hetzelfde. Ze kunnen mild tot zwaar zijn of verschillen in hoe het zich uit of hoelang het duurt. Hoeveel last je hebt van een depressie, hangt af van hoe sterk je klachten zijn en hoe ze je dagelijks leven verstoren. Er zijn verschillende soorten depressies:"
      },
      {
        "lijst": [
          "Somberheid: Somberheid is geen echte depressie maar een neerslachtig gevoel dat vaak weer overgaat, dat kan ontstaan door bijvoorbeeld ruzie, teleurstelling of vermoeidheid.",
          "Depressie: Een langdurige periode van somberheid en verlies van plezier, die minstens twee weken duurt en je dagelijks leven moeilijk maakt.",
          "Dysthymie / chronische depressie: Een lichtere vorm van depressie die minstens twee jaar duurt.",
          "Postpartum depressie: Een depressie na het krijgen van een kind.",
          "Seizoensgebonden depressie: Somberheid die elk jaar in hetzelfde seizoen terugkomt (meestal in de winter).",
          "Bipolaire stoornis: Een psychische aandoening waarbij je erge stemmingswisselingen hebt, van intense uitgelatenheid en energie (manie) tot diepe somberheid en futloosheid (depressie), wat je dagelijks leven sterk beïnvloedt."
        ]
      },
      {
        "kop": "Symptomen van een depressie"
      },
      {
        "tekst": "Als je een depressie hebt, kan je last hebben van deze klachten:"
      },
      {
        "lijst": [
          "Sombere stemming: Je voelt je bijna elke dag verdrietig, leeg of huilerig. Kinderen en jongeren zijn vaak meer prikkelbaar.",
          "Weinig plezier: Je hebt minder interesse in dingen waar je normaal van geniet, zoals hobby’s of tijd doorbrengen met anderen.",
          "Veranderingen in eetlust: Je eet minder of juist meer dan normaal, waardoor je afvalt of aankomt.",
          "Slaapproblemen: Je hebt moeite met in slaap komen, je wordt ’s nachts vaak wakker, je wordt vroeg wakker en kan dan niet meer inslapen of je slaapt juist te veel.",
          "Langzamer of onrustiger bewegen: Je bent trager of juist onrustig in je bewegingen.",
          "Vermoeidheid: Je voelt je vaak moe, zelfs als je niet veel hebt gedaan. Je energie lijkt op te zijn.",
          "Gevoelens van schuld: Je voelt je snel schuldig of denkt dat je niets waard bent, vaak zonder reden. Deze gevoelens kunnen sterk aanwezig zijn.",
          "Concentratieproblemen: Je hebt moeite om je te focussen of beslissingen te nemen.",
          "Gedachten aan de dood: Je denkt vaak aan de dood of aan zelfdoding."
        ]
      },
      {
        "tekst": "Denk je aan zelfmoord? Blijf er niet mee rondlopen. Neem contact op met 113 Zelfmoordpreventie via de telefoon (0800 - 0113) of chat."
      },
      {
        "kop": "Oorzaken depressie"
      },
      {
        "tekst": "Waarom je precies depressief wordt, is niet helemaal duidelijk. Wel weten we dat het komt door een combinatie van dingen die in je lichaam, in je hoofd en in je omgeving gebeuren. Deze dingen werken samen en beïnvloeden elkaar. Als er grote veranderingen of problemen in je leven zijn, kan je hierdoor kwetsbaarder worden voor een depressie. Dit kan ook bijdragen aan hoelang je depressie duurt en hoe je herstelt."
      },
      {
        "tekst": "In je lichaam kunnen verschillende dingen meespelen bij een depressie. Hier zijn een paar voorbeelden:"
      },
      {
        "lijst": [
          "Hormonen: Veranderingen in je hormonen, bijvoorbeeld door een zwangerschap, de overgang of een schildklierprobleem, kunnen invloed hebben op je stemming.",
          "Erfelijkheid: Als depressie in je familie voorkomt, heb je een grotere kans om het zelf ook te krijgen.",
          "Slaapproblemen: Slecht of weinig slapen kan je stemming en energie flink beïnvloeden.",
          "Ziekte en slechte conditie: Langdurig ziek zijn kan je kwetsbaarder maken voor een depressie.",
          "Medicijnen, alcohol en drugs: Sommige medicijnen kunnen als bijwerking somberheid geven. En gebruik van alcohol en drugs kunnen aan je depressieve gevoelens bijdragen of je gevoelens verergeren."
        ]
      },
      {
        "tekst": "Je gedachten, gevoelens en hoe je met problemen omgaat, spelen ook een rol. Hier zijn een aantal voorbeelden:"
      },
      {
        "lijst": [
          "Negatieve gedachten: Als je vaak denkt “ik ben niet goed genoeg” of “alles gaat fout,” kan je sneller depressieve gevoelens krijgen.",
          "Perfectionisme en faalangst: Als je altijd alles perfect wilt doen of bang bent om fouten te maken, kan dat je onzeker maken en de druk vergroten.",
          "Zelfbeeld: Een laag zelfvertrouwen maakt je kwetsbaarder.",
          "Omgaan met stress: Als je het lastig vindt om met spanning of tegenslag om te gaan, kan dat je risico op een depressie vergroten.",
          "Niet om hulp durven vragen: Als je alles alleen probeert op te lossen en niet over je gevoelens praat, kan je je overbelast voelen. Dit kan de worsteling in je hoofd nog zwaarder maken."
        ]
      },
      {
        "tekst": "Wat er om je heen gebeurt, heeft ook veel invloed. Hier zijn een aantal voorbeelden:"
      },
      {
        "lijst": [
          "Verlies: Het overlijden van een dierbare, een relatiebreuk of verlies van je baan kan een grote impact hebben.",
          "Relaties: Problemen met familie, vrienden of je partner kunnen veel stress geven.",
          "Eenzaamheid: Weinig sociale contacten of steun kunnen je somber maken.",
          "Zware omstandigheden: Langdurige stress, bijvoorbeeld door armoede, werkdruk of mantelzorg, kan bijdragen aan het ontstaan van een depressie.",
          "Schokkende ervaringen: Eenmalige heftige gebeurtenissen, zoals een beroving of een ongeluk, kunnen een blijvende impact hebben.",
          "Gebeurtenissen uit het verleden: Langdurige ervaringen, zoals (emotionele) mishandeling, misbruik en verwaarlozing kunnen een blijvende invloed hebben op je leven."
        ]
      },
      {
        "kop": "Hoe deze dingen samenwerken"
      },
      {
        "tekst": "Al deze dingen kunnen elkaar versterken. Stel dat je slecht slaapt (biologisch), je jezelf vaak onzeker voelt (psychisch) en je weinig steun hebt van anderen (sociaal). Dit alles samen maakt de kans groter dat je een depressie krijgt. Grote gebeurtenissen, zoals een verhuizing of het verlies van een dierbare, kunnen dit proces versnellen of de druppel zijn."
      },
      {
        "tekst": "Een depressie is vaak goed te behandelen, maar de aanpak hangt af van hoe ernstig je klachten zijn. Bij milde klachten kan je zelf al veel doen. Hier zijn een aantal stappen die kunnen helpen:"
      },
      {
        "lijst": [
          "Dagindeling: Probeer een vast ritme aan te houden door op dezelfde tijden op te staan, te eten en te slapen.",
          "Beweging: Regelmatig bewegen, zoals wandelen of sporten, kan je stemming verbeteren.",
          "Naar buiten: Zonlicht en frisse lucht kunnen een positief effect hebben op je stemming.",
          "Sociale contacten: Blijf in contact met de mensen in je omgeving, ook als je daar weinig zin in hebt. Sociale steun is belangrijk.",
          "Hulp van je huisarts: Je huisarts kan je adviseren over een passende aanpak. Soms kan een (online) zelfhulpcursus al een goede eerste stap zijn.",
          "Op zoek naar meer en uitgebreidere tips? Vraag onze gratis flyer aan."
        ]
      },
      {
        "tekst": "Als zelfhulp niet genoeg is, dan zijn er twee belangrijke vormen van behandeling: therapie en medicijnen, zoals antidepressiva. Therapie zijn gesprekken met een psycholoog. Antidepressiva wordt alleen bij ernstige depressies gebruikt en wordt gecombineerd met therapie."
      },
      {
        "tekst": "Een goede behandeling kies je in samenspraak met je hulpverlener en je naasten. Om je daarbij te helpen bieden wij de toolkit 'Samen beslissen' aan."
      },
      {
        "tekst": "Tijdens therapie bespreek je met een psycholoog je klachten en helpt die je anders naar jezelf en je situatie te kijken. Je past dit toe in je dagelijks leven, vaak met opdrachten. Bij het kiezen van een therapie is het belangrijk dat je vertrouwen hebt in je behandelaar. Wanneer je merkt dat er geen band is, of dat je bepaalde zaken mist bij je behandelaar, maak dit dan bespreekbaar. Dan kan je samen kijken wat er mogelijk is."
      },
      {
        "tekst": "Therapieën die vaak voorkomen bij het behandelen van een depressie zijn:"
      },
      {
        "lijst": [
          "Cognitieve gedragstherapie (CGT): Je leert je negatieve gedachten te herkennen en te veranderen om anders met problemen om te gaan.",
          "Acceptance and Commitment Therapy (ACT): Je leert om te gaan met moeilijke emoties en gedachten, zonder dat deze je leven beheersen. De focus ligt op het accepteren van emoties en het vinden van persoonlijke doelen.",
          "Interpersoonlijke therapie (IPT): Je richt je op het verbeteren van je relaties en communicatie met anderen. Dit kan helpen om gevoelens van eenzaamheid en somberheid te verminderen.",
          "Psychodynamische therapie: Je onderzoekt hoe ervaringen uit het verleden je gevoelens en gedrag in het heden beïnvloeden. Door dit te begrijpen, krijg je inzicht in patronen en emoties.",
          "Gedragsactivatietherapie (behavioral activation): Je leert je dag zo in te vullen dat je voldoende positieve ervaringen hebt.",
          "Mindfulness-Based Cognitive Therapy (MBCT): Deze therapie combineert mindfulness en cognitieve therapie om je bewustzijn te vergroten en gedachten beter los te laten, wat helpt om depressieve gevoelens te verminderen."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/depressie",
    "tips": [
      {
        "kop": "Neem je sombere gevoelens serieus",
        "blokken": [
          {
            "tekst": "Het is belangrijk om in te zien dat je sombere gevoelens hebt. Denk niet: “Er is niks aan de hand.” Als je klachten langer dan twee weken duren is het goed om professionele hulp te zoeken. Een afspraak bij de huisarts is de eerste stap. De huisarts bespreekt met je hoe je je depressieve klachten kan aanpakken en kan je doorverwijzen als dat nodig is. Over de behandeling van depressie hebben hulpverleners met elkaar afspraken gemaakt. Deze staan in de zogenoemde multidisciplinaire richtlijn_."
          }
        ]
      },
      {
        "kop": "Krijg inzicht in depressie",
        "blokken": [
          {
            "tekst": "Bijkomende klachten bij een depressie kunnen zijn dat je minder of juist meer eetlust hebt, slecht of juist veel slaapt en minder energie hebt. Je kan last hebben van concentratieproblemen en besluiteloosheid en je kan veel denken aan de dood. Ook kan je je snel geprikkeld voelen of juist sloom gedragen. En je kan je waardeloos of onterecht schuldig voelen. Door dit alles lukt het je niet meer normaal te functioneren in je dagelijkse leven."
          },
          {
            "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een depressie, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over depressie en een depressietest. Deze test helpt je bij het inschatten of je depressieve klachten ervaart. Er zijn ook goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho-educatie aangeboden. Je krijgt dan informatie en voorlichting over depressie en wat je er zelf aan kan doen."
          }
        ]
      },
      {
        "kop": "Praat erover",
        "blokken": [
          {
            "tekst": "Houd je gevoelens niet voor jezelf, maar praat erover met mensen die je vertrouwt. Denk aan je partner, familie of een vriend. Soms is het ook fijn om erover te praten met iemand van je werk of school, zoals een vertrouwenspersoon, leraar of collega. Vind je het lastig om over je gevoelens te praten met mensen in je omgeving? Wij schreven een online gids met tips om te praten over hoe je je voelt. Je kan ook contact opnemen met een professional van de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
          }
        ]
      },
      {
        "kop": "Plan activiteiten",
        "blokken": [
          {
            "tekst": "Zorg ervoor dat je dingen blijft ondernemen en onder de mensen blijft, ook als je daar eigenlijk geen zin in hebt. Wanneer je dingen doet die je normaal gesproken leuk vindt, vergroot dit de kans dat je je beter gaat voelen. Als je echt tot niets komt, helpt het om activiteiten te gaan plannen. Bedenk elke dag één haalbare activiteit en schrijf deze op in een weekplanning. Denk aan afspreken met een vriend, boodschappen doen, een lekkere maaltijd koken, muziek maken, bezig zijn met je hobby, etc."
          }
        ]
      },
      {
        "kop": "Beweeg",
        "blokken": [
          {
            "tekst": "Probeer elke dag naar buiten te gaan en een stukje te fietsen of wandelen. Bewegen kan helpen tegen depressieve gevoelens. Heb je wel eens gehoord van runningtherapie? Voor runningtherapie hoef je niet sportief te zijn. Een runningtherapeut leert je rustig hardlopen, zodat je meer in je lijf komt en minder in je hoofd zit. Deze therapie gaat niet om snelheid, maar om bewegen. Tijdens runningtherapie sta je stil bij hoe je op een fijne manier loopt en hoe je het beste kan ademhalen, zonder hier te veel focus op te leggen. Het voelen en ervaren is belangrijker dan praten. Het is de bedoeling dat het rennen je energie geeft, in plaats van dat het je energie kost."
          }
        ]
      }
    ],
    "gids": {
      "slug": "depressie",
      "titel": "Depressie",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/depressie",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_depressie"
    }
  },
  {
    "slug": "eenzaamheid",
    "titel": "Eenzaamheid",
    "onderwerp": "Somberheid",
    "kort": "Ieder mens voelt zich wel eens eenzaam. Je mist mensen om je heen en voelt je verdrietig en leeg. Het is geen fijn gevoel, maar na een poosje verdwijnt dit gevoel meestal weer. Veel mensen voelen zich regelmatig eenzaam. We noemen het emotionele eenzaamheid als je een hechte band mist met één of meerdere mensen. Denk aan een familielid, partner of hartsvriend. En sociale eenzaamheid als je minder contact hebt met anderen dan dat je zou willen. Je sociale netwerk is dan kleiner dan je wenst.",
    "meer": [],
    "tips": [
      {
        "kop": "Je bent niet de enige!",
        "blokken": [
          {
            "tekst": "Je denkt misschien dat jij een van de weinige mensen bent die zich eenzaam voelt. Maar niks is minder waar! Want wist je dat bijna de helft van de mensen in Nederland zich eenzaam voelt? Je bent dus niet alleen hierin. Ook niet als je jong bent of al op oudere leeftijd. Het komt namelijk voor bij alle leeftijden. Veel mensen zullen je hierin dus juist begrijpen, ook al laten ze dat misschien niet direct merken. Zo kan achter de mooie plaatjes op social media een eenzaam persoon zitten. Of achter die oudere man die altijd vriendelijk naar je lacht. En merken andere mensen het eigenlijk wel aan jou?"
          }
        ]
      },
      {
        "kop": "Krijg inzicht in jouw gevoelens van eenzaamheid",
        "blokken": [
          {
            "tekst": "Ook al voelen veel mensen zich eenzaam, de redenen waarom iemand zich eenzaam voelt verschillen van persoon tot persoon. Inzicht krijgen in je eigen eenzaamheid helpt je ermee om te gaan en het aan te pakken. Stel jezelf bijvoorbeeld de vraag: Mis ik mensen om me heen of gaat het vooral om het gemis van een diepgaande band met iemand? En: Hoe komt het dat ik last heb van eenzaamheid? Vind je het bijvoorbeeld lastig om contacten te leggen, heb je weinig tijd voor sociale contacten, is het moeilijk te combineren met je studie/werk, de zorg voor kinderen of heb je weinig financiële mogelijkheden om eropuit te gaan? Of ben je teleurgesteld in andere mensen of heb je een negatief zelfbeeld? Ook kan het zijn dat je door een lichamelijke ziekte of psychische klachten beperkt bent in je mogelijkheden. Zomaar wat voorbeelden, maar hoe zit dit bij jou? Inzicht in mogelijke oorzaken geeft je meer duidelijkheid in wat je nodig hebt om gevoelens van eenzaamheid te verminderen."
          }
        ]
      },
      {
        "kop": "Jij bent aan zet",
        "blokken": [
          {
            "tekst": "Nu je inzicht hebt in wat oorzaken kunnen zijn, is het goed om stil te staan bij de vraag: Wat zou ik kunnen doen om verandering te brengen in mijn leven_? Het is natuurlijk zo dat niet alles kan, maar het helpt om te kijken wat er wel past binnen je mogelijkheden. Sta dus open om jezelf hierin te ontwikkelen. Onderstaande tips helpen je hierbij op weg."
          }
        ]
      },
      {
        "kop": "Bouw een sociaal netwerk op",
        "blokken": [
          {
            "tekst": "De meeste mensen voelen zich het prettigst als ze een divers netwerk hebben met zowel mensen met wie ze een emotionele band hebben als minder diepgaande contacten. Denk aan een mix van familie, goede vrienden, kennissen, studiegenoten/collega’s en buren."
          },
          {
            "tekst": "Onthoud dat het nooit te laat is om nieuwe mensen te leren kennen. Ook niet als je al wat ouder bent. Het contact met andere mensen begint al klein; groet de mensen uit de buurt als je ze tegenkomt. Ook als jij de eerste bent die dat doet. En meld je bijvoorbeeld aan bij een hobby of sportvereniging. Of ga vrijwilligerswerk doen waardoor je nieuwe mensen leert kennen. Het geeft vaak een fijn gevoel om er voor anderen te kunnen zijn. Kijk ook eens online naar de mogelijkheden om nieuwe mensen te ontmoeten. Op de webpagina van Eén tegen eenzaamheid van het ministerie van VWS vind je tips en activiteiten om meer contact te maken."
          }
        ]
      },
      {
        "kop": "Stel je verwachtingen bij en verander je gedachten",
        "blokken": [
          {
            "tekst": "Als jij je eenzaam voelt, kan het geen kwaad om eens naar je verwachtingen te kijken die je hebt. Verwacht je bijvoorbeeld dat mensen naar jou toe komen, terwijl je zelf niet vaak van je laat horen, dan is dat niet erg realistisch. Of dat een diepgaande relatie binnen een paar weken ontstaat. Het bijstellen van je verwachtingen, voorkomt teleurstelling en helpt hiermee gevoelens van eenzaamheid tegen te gaan."
          },
          {
            "tekst": "Naast het bijstellen van je verwachtingen kan het helpen om je eigen gedachten eens onder de loep te nemen. Grote kans dat je gedachten je niet helpen om je minder eenzaam te voelen. Een voorbeeld van een niet-helpende gedachte is: \"Ik zal altijd eenzaam blijven\" of \"Ik ga niet naar die verjaardag, de andere gasten zullen mij toch niet aardig vinden\" . Deze gedachten zorgen voor gevoelens die niet fijn zijn en ze brengen je niet verder. Helpende gedachten kunnen zijn: \"Er zijn veel dingen die ik kan doen om mij minder eenzaam te voelen\" en: \"Er zal altijd wel iemand zijn die mij aardig vindt, al is het er maar één\"_. Waarschijnlijk voel jij je veel beter als je dit soort gedachten hebt. We noemen dit dan ook helpende gedachten. Wil jij aan de slag met het maken van helpende gedachten? Wij schreven twee oefeningen."
          }
        ]
      }
    ],
    "gids": {
      "slug": "eenzaamheid",
      "titel": "Eenzaamheid",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/eenzaamheid",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_eenzaamheid"
    }
  },
  {
    "slug": "rouw",
    "titel": "Rouw",
    "onderwerp": "Somberheid",
    "kort": "Het overlijden van een dierbare is een van de meest ingrijpende en verdrietige gebeurtenissen in iemands leven. Een naaste is er niet meer en komt nooit meer terug. Of een overlijden onverwacht komt of niet: het verandert je leven voor altijd. Op deze pagina bieden we je tips die je helpen bij het omgaan met rouw na het verlies van een dierbare.",
    "meer": [],
    "tips": [
      {
        "kop": "Besef dat er geen juiste manier is om te rouwen",
        "blokken": [
          {
            "tekst": "Ieder mens reageert anders op het overlijden van een dierbare. Veel mensen worden overweldigd door verdriet, verwarring, woede en/of ongeloof. Andere mensen ervaren een gevoel van onwerkelijkheid of voelen vrijwel niets, omdat hun gevoelens zijn uitgeschakeld. Weer anderen vinden de dood van hun dierbare zo pijnlijk dat ze die ontkennen. Het is goed om te weten dat er geen ‘juiste’ manier is om te reageren op en te rouwen om het verlies van een dierbare. Dit besef kan helpen om je eigen reactie te accepteren, maar ook die van de mensen in je directe omgeving als je verschillend reageert of andere behoeften hebt."
          }
        ]
      },
      {
        "kop": "Besteed aandacht aan het afscheid nemen",
        "blokken": [
          {
            "tekst": "Probeer de eerste dagen na het overlijden zo bewust mogelijk mee te maken. Pak waar het kan een actieve rol rondom het afscheid en de uitvaart. Dit helpt bij het indalen van het besef dat je dierbare is overleden en dat het officiële afscheid nadert. Als je geen afscheid hebt kunnen nemen van je dierbare, kan het helpen om een afscheidsceremonie te houden. Creëer, als je dat prettig vindt, een plek voor jezelf om je dierbare te herdenken. Vaak wordt dit gedaan door een foto met een kaarsje ervoor, maar er zijn nog meer dingen te bedenken om af en toe bewust stil te staan bij het verlies. Kies een manier die bij jou past."
          }
        ]
      },
      {
        "kop": "Zoek steun bij je omgeving",
        "blokken": [
          {
            "tekst": "Vlak na het overlijden zie je vaak dat nabestaanden naar elkaar toe trekken, herinneringen ophalen en steun vinden bij elkaar. Hoewel dit niet voor iedereen geldt, kan dit gevoel van verbinding helpen bij het verwerken van het verlies. Blijf als het even lukt ook na het afscheid steun zoeken bij elkaar. Praat ook met andere vertrouwde mensen over je gevoelens, de overledene of gebeurtenissen rond het overlijden. Een luisterend oor kan al heel fijn zijn. Bovendien lucht praten over je gevoelens vaak op en kan het je helpen bij het verwerken. Begin gerust zelf met praten. Het kan zijn dat vrienden en familie het lastig vinden erover te beginnen. Of dat ze zelf ook worstelen met het verdriet. Door met elkaar in contact te blijven, blijf je op de hoogte van wat er bij elkaar speelt en kan je elkaar beter steunen. Vertel mensen in je omgeving wat jij prettig vindt, ook als je liever niet praat over het verlies. Ook kan je samen iets ondernemen."
          },
          {
            "tekst": "Zoek contact met lotgenoten, een rouwbegeleider of een professionele hulpverlener als je daar behoefte aan hebt. Ook kan dit fijn zijn als je niet de steun krijgt die je zoekt. Of als je merkt dat je vastloopt."
          }
        ]
      },
      {
        "kop": "Heb aandacht voor kinderen",
        "blokken": [
          {
            "tekst": "Wees niet bang om kinderen te betrekken bij zaken rond het overlijden van jullie dierbare. Je hoeft geen details te bespreken, maar houd ze van belangrijke dingen op de hoogte. Kinderen merken bijna altijd wat er speelt, ook al lijkt dat soms niet zo. Vertel kinderen daarom concreet, eerlijk en duidelijk wat er aan de hand is. Gebruik hierbij woorden die aansluiten bij de leeftijd van het kind. Uitspraken als ‘papa slaapt voor altijd’ of ‘God heeft je zusje tot zich genomen, omdat hij haar zo lief vond’ kunnen een kind bang maken om te gaan slapen of opstandig maken."
          },
          {
            "tekst": "Probeer het overlijden van jullie dierbare bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van het verdriet. Op deze webpagina lees je meer over rouw bij kinderen."
          }
        ]
      },
      {
        "kop": "Krijg inzicht in rouw",
        "blokken": [
          {
            "tekst": "Inzicht krijgen in rouw en verliesverwerking kan je helpen jezelf beter te begrijpen en ermee om te gaan. Ook kan het helpen om andere mensen in je omgeving beter te snappen. Meer informatie vind je op internet of bijvoorbeeld in de vele boeken over dit onderwerp."
          }
        ]
      }
    ],
    "gids": {
      "slug": "rouw",
      "titel": "Rouw na het verlies van een dierbare",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/rouw",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_rouw"
    }
  },
  {
    "slug": "relatiebreuk",
    "titel": "Relatiebreuk",
    "onderwerp": "Somberheid",
    "kort": "Veel mensen maken het wel een keer mee in hun leven: een liefdesrelatie die eindigt. Afhankelijk van hoelang je relatie duurde, hoe intens het was en hoe het eindigde, kan dit je leven behoorlijk op de kop zetten. Je bent bijvoorbeeld erg verdrietig of boos en moet veel dingen regelen. Denk bijvoorbeeld aan verhuizen en afspraken met elkaar maken over de kinderen of huisdieren.",
    "meer": [],
    "tips": [
      {
        "kop": "Sta open voor wat je voelt",
        "blokken": [
          {
            "tekst": "Voor de meeste mensen is de eerste tijd na de breuk een hele emotionele periode. Het is ook normaal als je meerdere emoties tegelijk ervaart, zowel negatieve als positieve. Want misschien voel je naast je boosheid of verdriet ook wel opluchting. Bijvoorbeeld als jezelf degene was die de relatie beëindigde of als de relatie al lang stroef liep. Vaak kan je emoties het beste verwerken op het moment dat je er niet voor wegloopt. En jezelf niet verdooft door bijvoorbeeld alcohol te gebruiken. Dat kan best lastig zijn, omdat we vaak geneigd zijn om vervelende gevoelens niet te willen ervaren. Maar probeer je gevoelens er te laten zijn. Kijk er vanaf een afstandje naar zonder erover te oordelen. Je zal merken dat ze in de loop van de tijd milder worden."
          }
        ]
      },
      {
        "kop": "Wees niet te streng voor jezelf",
        "blokken": [
          {
            "tekst": "De eerste fase na een relatiebreuk is vaak chaotisch. In deze fase doen veel mensen dingen ‘verkeerd’. Bedenk je dat dit niet erg is, dit hoort bij het verwerken. In de tweede fase, als de ergste emoties zijn gekalmeerd, komt er vaak meer ruimte om de dingen goed te regelen. Wees in het begin dus niet te streng voor jezelf."
          }
        ]
      },
      {
        "kop": "Laat de ander los",
        "blokken": [
          {
            "tekst": "Als je een relatie met iemand hebt gehad, is het niet vreemd dat het lastig is om de ander los te laten. Helemaal als jij je zorgen maakt om je ex-partner. Vraag jezelf af of het nog jouw verantwoordelijkheid is om de ander te helpen als het niet goed met diegene gaat. Zijn er voldoende familie en vrienden in de omgeving van jouw ex die kunnen helpen? Probeer daar dan op te vertrouwen."
          },
          {
            "tekst": "Ook kan het zijn dat jouw ex zich opeens heel anders gedraagt of andere keuzes maakt dan jij van de ander gewend bent. Bedenk dat door hiermee bezig te zijn, jij jezelf weghoudt van wat de relatiebreuk met jou doet. Om de breuk te verwerken is het belangrijk om jouw eigen gevoelens onder ogen te komen. Daarnaast is het goed om te beseffen dat jullie nu niet meer bij elkaar zijn en dat de ander nu alle vrijheid heeft om keuzes los van jou te maken. Social media kan dit lastig maken, omdat je dan steeds voorbij ziet komen wat de ander doet of bezighoudt. Houd de ander dan ook niet meer op die manier in de gaten. En scherm de inhoud van jouw eigen socialmediakanalen (tijdelijk) af als dat nodig is."
          }
        ]
      },
      {
        "kop": "Geef aan wat je wil en niet wil",
        "blokken": [
          {
            "tekst": "Ook kan het zijn dat jouw ex-partner het lastig vindt om jou los te laten. Jouw ex staat bijvoorbeeld regelmatig onaangekondigd voor de deur, belt of appt je veel of houdt jouw socials nauwlettend in de gaten. Of misschien wil jouw ex nog van alles voor jou regelen? Het is hierbij belangrijk dat je ex weet dat jij dit niet prettig vindt en waarom. Maar ook wat jij wel fijn vindt in het contact. Maak heldere afspraken met elkaar, zodat je beiden weet waar je aan toe bent. Merk je dat het niet goed lukt om met jouw ex afspraken te maken? Of willen jullie hulp om de scheiding in goede banen te laten lopen? Misschien is mediation dan een mogelijkheid voor jullie. Een zogeheten mediator helpt in overleg met jullie beiden om een oplossing te bedenken voor zaken waarover je een andere mening hebt. Heb jij moeite met het aangeven van je grenzen? Kan je hierbij wel wat hulp gebruiken? Wij schreven tips om je grenzen te leren kennen en aan te geven."
          }
        ]
      },
      {
        "kop": "Heb aandacht voor je kinderen",
        "blokken": [
          {
            "tekst": "Hebben jullie samen kinderen of zijn er kinderen uit een eerdere relatie? Bedenk je dat het einde van jullie relatie veel invloed op hen kan hebben. Naast de emotionele impact zal er waarschijnlijk ook veel in hun leven veranderen. Vertel als het even kan samen aan de kinderen over jullie relatiebreuk. Leg uit dat de breuk niet door hen komt. Besteed aandacht aan hun reactie en laat hun gevoelens en vragen er zijn. Geef ook uitleg over het waarom van de breuk. Pas je verhaal hierbij aan bij de leeftijd van de kinderen."
          },
          {
            "tekst": "Het is niet nodig diep in te gaan op jullie achterliggende problemen. Anders bestaat de kans dat de kinderen zich hier verantwoordelijk voor gaan voelen. En hoe moeilijk het misschien ook is, zet jouw ex-partner niet in een negatief daglicht. Het is belangrijk dat de kinderen niet het gevoel hebben tussen jullie in te staan of voor een van jullie te moeten kiezen. Dit kan een bedreiging vormen voor hun ontwikkeling. Het belang van kinderen gaat altijd voor. Ook is het voor iedereen het prettigst als jullie als ouders met elkaar blijven communiceren en heldere afspraken maken."
          }
        ]
      }
    ],
    "gids": {
      "slug": "relatiebreuk",
      "titel": "Relatiebreuk",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/relatiebreuk",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_relatiebreuk"
    }
  },
  {
    "slug": "angst",
    "titel": "Angst",
    "onderwerp": "Angst",
    "kort": "Angst gaat gepaard met lichamelijke reacties, zoals: hartkloppingen, zweten, een versnelde ademhaling, soms zelfs hyperventilatie, een droge mond, aanspanning van de spieren, het verlangen om weg te rennen of weg te duiken.",
    "meer": [
      {
        "tekst": "Je kan bang zijn in bepaalde situaties of voor bepaalde dingen, maar je kan ook bang zijn zonder duidelijke reden. Wanneer je angst extreem en niet realistisch is en je door je klachten niet meer kan functioneren in het dagelijks leven, is het mogelijk dat je een angststoornis hebt."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/angst",
    "tips": [
      {
        "kop": "Verdiep je in de angst",
        "blokken": [
          {
            "tekst": "Probeer een goed beeld te krijgen van je angst en de invloed ervan op jouw leven. Doe dit zo eerlijk mogelijk, zonder het af te zwakken. Stel jezelf bijvoorbeeld de vragen: Waar ben ik bang voor? Wat voel ik als ik bang ben? Wat gebeurt er in mijn lichaam? Hoe reageer ik hierop? Wat betekent deze angst voor mijn leven? Op onze website vind je meer informatie over angst. Wil jij inschatten hoeveel last je hebt van angstklachten? Doe dan deze angsttest."
          },
          {
            "tekst": "Neem ook iemand uit je omgeving in vertrouwen. Erover praten kan opluchten en helpen om dingen op een rij te zetten. Daarnaast kan iemand die dicht bij je staat met je meedenken over hoeveel invloed de angst op jouw leven heeft. Denk aan dingen vermijden of anders doen vanwege de angst. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Bijvoorbeeld omdat je weet dat de angst niet realistisch is (al voelt dat wel zo) of dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
          }
        ]
      },
      {
        "kop": "Verander je gedachten",
        "blokken": [
          {
            "tekst": "Nu jij je angstklachten in kaart hebt gebracht, is de volgende stap het kritisch bekijken van jouw angstgedachten. Dreigt er daadwerkelijk gevaar? Waarschijnlijk ontdek je dat je angsten niet (helemaal) realistisch zijn. Dit inzicht kan je helpen om geruststellende gedachten te bedenken. Schrijf deze gedachten op of noteer ze in je telefoon en haal ze tevoorschijn op momenten dat je het moeilijk hebt. Misschien heb je ook wat aan de oefeningen uit onze online gids om je gedachten helpend te maken."
          }
        ]
      },
      {
        "kop": "Ga het niet uit de weg",
        "blokken": [
          {
            "tekst": "Om angstgevoelens te voorkomen, kan je geneigd zijn om de situaties of dingen die de angst veroorzaken zo veel mogelijk te vermijden. Dit is even fijn, maar zo houd je de angstklachten juist in stand. Probeer daarom zo weinig mogelijk toe te geven aan je angst. Ga de situaties en dingen waar je bang voor bent zo min mogelijk uit de weg. Stel je erop in dat je spanning en lichamelijke verschijnselen gaat ervaren in de situaties waar jij bang voor bent. Bedenk je dat deze lichamelijke verschijnselen en onrust na een tijdje zullen afnemen. Op deze manier bouw je vertrouwen op dat je om kan gaan met de dingen die je spannend vindt en verminder je de angst voor bepaalde situaties."
          }
        ]
      },
      {
        "kop": "Accepteer",
        "blokken": [
          {
            "tekst": "Als je je angstig voelt, wil je vaak van alles doen om van dat vervelende gevoel af te komen. Maar in plaats van dat jij je beter gaat voelen, ben je er alleen maar meer mee bezig. Juist door te ervaren dat je bang bent en er niet over te oordelen, zal je merken dat de angst minder invloed op je heeft. Probeer je dus niet tegen de angst te verzetten. Ervaar wat er in je lichaam en in je gedachten gebeurt en probeer er niets van te vinden. Een milde, niet-oordelende houding geeft ruimte om er op een andere manier mee om te gaan. Mindfulness is een training die hierbij helpt. Wij schreven een online gids met eenvoudige oefeningen voor thuis."
          }
        ]
      },
      {
        "kop": "Ontspan en doe leuke dingen",
        "blokken": [
          {
            "tekst": "Het nemen van voldoende rust en ontspanning helpt vaak gevoelens van angst te verminderen. Bedenk wat jij ontspannend vindt en plan dit in op je dag. Voor de een is dit een wandeling in het bos of een uurtje sporten, voor de ander is dat een avondje bioscoop of uiteten met vrienden. Sommige mensen hebben veel aan ontspanningsoefeningen."
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Doe een ademhalingsoefening",
      "blokken": [
        {
          "tekst": "Als je angstig bent, ga je vaak anders ademen. Te snel, te diep en te hoog. Dit veroorzaakt klachten als benauwdheid, hoofdpijn en vermoeidheid. Sommige mensen met angstklachten hebben last van hyperventilatie. Ademhalingsoefeningen helpen je om je ademhaling weer te stabiel te maken en je ademhaling in het algemeen te verbeteren. De volgende oefening richt zich op de buikademhaling. Je leert dit het makkelijkst als je ligt. Wanneer je meer ervaring met de oefening hebt, kan je deze ook zittend of zelfs staand uitvoeren."
        },
        {
          "tekst": "Voer de oefening als volgt uit:"
        },
        {
          "lijst": [
            "Ga gemakkelijk liggen.",
            "Sluit je ogen en leg je handen op je buik.",
            "Duw je buik uit bij het inademen en trek je buik lichtjes in bij het uitademen.",
            "Tel in gedachten iedere in- en iedere uitademing."
          ]
        },
        {
          "tekst": "Probeer de in- en uitademing rustig en regelmatig te laten verlopen. Als je merkt dat je gedachten afdwalen, begin dan gewoon opnieuw te tellen. Op een gegeven moment zal je merken dat het ademen je ontspant en dat je alleen nog maar met het ademen bezig bent, in plaats van met je angsten."
        }
      ]
    },
    "gids": {
      "slug": "angst",
      "titel": "Angst",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/angst",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_angst_1121"
    }
  },
  {
    "slug": "paniekaanval",
    "titel": "Paniekaanval",
    "onderwerp": "Angst",
    "kort": "Een paniekaanval is een intense aanval of golf van angst en spanning en kan als heel heftig ervaren worden. Je kunt het gevoel krijgen gek te worden, de controle te verliezen of dood te gaan. Ook kun je het gevoel krijgen los van jezelf te staan. Lees meer over welke kenmerken bij een paniekaanval horen en hoe je hier zelf of als naaste mee om kan gaan.",
    "meer": [
      {
        "kop": "Symptomen paniekaanval"
      },
      {
        "tekst": "Zowel lichamelijke als psychische klachten zijn kenmerkend voor een paniekaanval. Een paniekaanval herken je aan vier of meer van de onderstaande symptomen:"
      },
      {
        "lijst": [
          "Je hebt hartkloppingen, een bonzend hart of een versnelde hartslag.",
          "Je transpireert.",
          "Je trilt of beeft.",
          "Je ervaart gevoelens van ademnood of verstikking.",
          "Je hebt het gevoel naar adem te moeten snakken.",
          "Je voelt pijn of een onaangenaam gevoel op de borst.",
          "Je bent misselijk of hebt maag- of buikklachten.",
          "Je voelt je duizelig, onvast, licht in je hoofd of dreigt flauw te vallen.",
          "Je hebt koude rillingen of opvliegers.",
          "Je voelt een verdoofd of tintelend gevoel.",
          "Je ervaart gevoelens van onwerkelijkheid of voelt je vervreemd van jezelf.",
          "Je vreest om 'gek te worden'.",
          "Je vreest om dood te gaan."
        ]
      },
      {
        "tekst": "Als je regelmatig paniekaanvallen hebt, kan er sprake zijn van een paniekstoornis."
      },
      {
        "kop": "Tips bij een paniekaanval"
      },
      {
        "lijst": [
          "Ontstaan: Dat het belangrijk is om te begrijpen hoe een paniekaanval ontstaat.",
          "Niet vermijden: Dat je situaties niet moet vermijden, maar juist aangaan.",
          "Tips: Welke trucjes je kunnen helpen wanneer je voelt dat je een paniekaanval krijgt."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/paniekaanval",
    "tips": [],
    "gids": {
      "slug": "paniekaanval",
      "titel": "Paniekaanval",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/paniekaanval",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_paniekaanvallen"
    }
  },
  {
    "slug": "sociale-angst",
    "titel": "Sociale angst",
    "onderwerp": "Angst",
    "kort": "Een sociale angststoornis heet ook wel een sociale fobie. Bij een sociale angststoornis ben je bang dat anderen je vreemd of raar vinden. Het kan ook zijn dat je bang bent voor je eigen reacties op de situatie. Je bent bijvoorbeeld bang dat je gaat blozen of trillen. Je probeert daarom de door jou zo gevreesde sociale situatie te vermijden. Wanneer je toch in de gevreesde situatie bent, doorsta je dat met grote moeite. Dit alles heeft een negatieve invloed op je dagelijks leven.",
    "meer": [
      {
        "tekst": "In Nederland heeft bijna 10% van de bevolking in de loop van zijn of haar leven last van een sociale angststoornis. Vrouwen hebben vaker een sociale angst dan mannen."
      },
      {
        "tekst": "Een sociale angststoornis kan op verschillende situaties betrekking hebben, bijvoorbeeld:"
      },
      {
        "lijst": [
          "angst om iemand te ontmoeten",
          "angst om te telefoneren",
          "angst om in het openbaar te spreken",
          "angst om in een restaurant te eten"
        ]
      },
      {
        "tekst": "Een sociale angststoornis kan betrekking hebben op één specifieke situatie (specifieke sociale fobie) of op een groot aantal sociale situaties (gegeneraliseerde sociale fobie)."
      },
      {
        "tekst": "Als je een sociale angststoornis hebt, heb je last van de volgende symptomen:"
      },
      {
        "lijst": [
          "Een duidelijke en aanhoudende angst voor één of meer situaties waarin je sociaal moet functioneren of presteren en waarbij je blootgesteld wordt aan onbekenden, of een mogelijk kritische beoordeling van anderen.",
          "Je bent bang dat je je op een beschamende of vernederende manier gedraagt, of angstverschijnselen zult vertonen, zoals trillen of blozen.",
          "Wanneer je blootgesteld wordt aan de gevreesde situatie, lokt dit bijna altijd angst uit. Deze angst kan de vorm krijgen van een paniekaanval.",
          "Je bent je ervan bewust dat je angst overdreven of onredelijk is.",
          "Je vermijdt de gevreesde sociale situaties. Als je de situatie toch moet doorstaan, dan met intense angst.",
          "Je klachten hebben invloed op het dagelijks functioneren, op het werk, tijdens sociale activiteiten of in relaties.",
          "De sociale angststoornis is niet het gevolg van een lichamelijke aandoening of het gebruik van drugs of medicatie. Ook horen de klachten niet bij een andere stoornis."
        ]
      },
      {
        "tekst": "Vraag de tips aan"
      },
      {
        "tekst": "Waarom een sociale angststoornis ontstaat, is nog niet precies bekend. Waarschijnlijk spelen zowel erfelijke als omgevingsfactoren een rol bij het ontstaan ervan."
      },
      {
        "lijst": [
          "Erfelijkheid: Voor een klein deel is het erfelijk bepaald of je kwetsbaar bent om een sociale angststoornis te ontwikkelen. Lees hierover meer op de pagina angststoornissen en erfelijkheid.",
          "Omgevingsfactoren: Of je uiteindelijk wel of niet een sociale angststoornis ontwikkelt, wordt mede bepaald door omgevingsfactoren. Het is bijvoorbeeld onderzocht dat de kans om op jonge leeftijd een sociale angststoornis te ontwikkelen groter wordt als ouders hun kind overbeschermend opvoeden. Ook ingrijpende gebeurtenissen kunnen van invloed zijn op het ontwikkelen van een sociale angststoornis."
        ]
      },
      {
        "tekst": "Een sociale angststoornis kan in je dagelijks leven erg lastig zijn. Gelukkig is een sociale angst vaak goed te behandelen. Je angst en het vermijden van sociale situaties kan verminderd worden. De eerste stap is naar je huisarts gaan, die je mogelijk doorverwijst."
      },
      {
        "tekst": "Meestal wordt als eerste behandeling cognitieve gedragstherapie gekozen. Maar er zijn ook andere soorten behandelingen:"
      },
      {
        "lijst": [
          "Cognitieve gedragstherapie",
          "Ontspanningsoefeningen",
          "Bewegen en sporten",
          "Soms wordt er antidepressiva voorgeschreven. Maar het is beter om eerst te starten met een psychologische behandeling."
        ]
      },
      {
        "tekst": "Lees uitgebreidere informatie over behandelingen bij angststoornissen in het algemeen."
      },
      {
        "lijst": [
          "Heb je behoefte aan persoonlijke hulp of advies over jouw sociale angststoornis of die van een naaste? Omdat je niet weet waar je moet beginnen? Of omdat je samen met een hulpverlener wilt kijken naar jouw specifieke situatie? Neem anoniem contact op met de MIND Hulplijn.",
          "Ben je op zoek naar ontmoeting, kennisdeling en belangenbehartiging dat bijdraagt aan herstel van mensen met overmatige angst? Kijk bij ADF stichting (angst, dwang en fobie)."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/socialeangst",
    "tips": [
      {
        "kop": "Word bewust van niet-helpende gedachten",
        "blokken": [
          {
            "tekst": "Wanneer je sociaal angstig bent, ben je vaak bang dat mensen negatief over je denken. Niet-helpende gedachten die voor komen bij sociale angstproblemen zijn bijvoorbeeld: “Ik durf weer niets te zeggen. Ze zullen me wel saai vinden.” Of: “Ik ben niet leuk, niet knap en niemand heeft interesse in mij.” Deze gedachten zorgen ervoor dat je negatieve gevoelens ervaart. Het helpt je als je je bewust wordt van welke gedachten jij hebt. En hoe dit invloed heeft op je gevoel en gedrag. In onderstaande figuur zie je de relatie tussen een gebeurtenis, gedachte, gevoel, gedrag en gevolg."
          },
          {
            "tekst": "Sta de komende tijd stil bij situaties waarin je merkt dat je je angstig of gespannen voelt en noteer het volgende (wij vulden een voorbeeld in):"
          }
        ]
      },
      {
        "kop": "Zet niet-helpende gedachten om naar helpende gedachten",
        "blokken": [
          {
            "tekst": "Je hebt nu genoteerd wat je niet-helpende gedachten zijn. En de gevoelens, het gedrag en de situaties die daarmee samengaan. Stel jezelf nu vragen bij deze gedachten, bijvoorbeeld:"
          },
          {
            "lijst": [
              "Kan ik ook anders tegen deze situatie aankijken?",
              "Welke gedachte zou mij wel helpen?"
            ]
          }
        ]
      },
      {
        "kop": "Verplaats je aandacht van binnen naar buiten",
        "blokken": [
          {
            "tekst": "Als je sociaal angstig bent, ben je voortdurend met je aandacht naar binnen gericht. Je bent bijvoorbeeld steeds bezig met hoe je je voelt, hoe je denkt dat je bent overgekomen op anderen, hoe je eruitziet of hoe je je gedraagt. Hierdoor is het lastig je te concentreren op waar je op dat moment mee bezig bent. Het helpt dan om je aandacht meer naar buiten te richten. Dit doe je bijvoorbeeld met de volgende oefeningen:"
          },
          {
            "lijst": [
              "Ben je in gesprek met iemand? Concentreer je op wat de ander vertelt en onthoud details. Zit je in een vergadering of overleg? Maak aantekeningen en schrijf voor jezelf een samenvatting. Op deze manier ‘dwing’ je jezelf met andere zaken bezig te zijn dan met jezelf.",
              "Maak een wandeling door het bos of park. Tijdens deze wandeling is het de bedoeling om je aandacht volledig naar buiten te richten. Let op wat je om je heen ziet: de bomen, de kleuren en het licht. Let op de geluiden: bijvoorbeeld gefluit van vogels en geritsel van bladeren. Richt je aandacht ook op wat je ruikt. En richt je aandacht op hoe het voelt om door het bos of door het park te lopen. Voel hoe de lucht in je longen stroomt en hoe je voeten door de bladeren gaan."
            ]
          }
        ]
      },
      {
        "kop": "Oefen",
        "blokken": [
          {
            "tekst": "Wanneer je last hebt van sociale angst, is het belangrijk om situaties waarvoor je bang bent niet uit de weg te gaan. Het is juist belangrijk te oefenen met de dingen waar je bang voor bent. Vermijding zorgt er namelijk voor dat de angst blijft bestaan of zelfs erger wordt. Daarnaast beperkt het je leven. Een voorbeeld: je bent bang om in een vergadering iets stoms te zeggen waardoor mensen je niet goed genoeg zullen vinden. Het liefst ga je daarom niet meer naar vergaderingen toe en werk je alleen nog maar vanuit huis. Maar doordat je de situaties vermijdt, merk je niet dat mensen dit helemaal niet denken. Jouw angst blijft hierdoor bestaan of wordt zelfs erger. Oefen daarom met waar je bang voor bent. Het is heel logisch dat je je angstig voelt als je dit doet. Met de loop van de tijd zal dit minder worden. Tijdens het oefenen zal je merken dat ‘de ramp’ waar je bang voor bent, niet gebeurt. Mensen zullen je niet afwijzen als je wat stiller bent. En je kan ook best een keer een minder handige opmerking maken."
          },
          {
            "tekst": "Aandacht voor Angst Wil jij meer leren over wat angst is, welke rol gedachten en gedrag spelen, het belang van erover praten en de invloed van ontspanning en je ademhaling? Meld je gratis aan voor onze themaspecial Aandacht voor Angst en ontvang informatie, tips, interessante linkjes en ervaringsverhalen in je mailbox."
          }
        ]
      },
      {
        "kop": "Beweeg",
        "blokken": [
          {
            "tekst": "Probeer elke dag voldoende te bewegen. Bewegen kan helpen tegen angstige gevoelens. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Probeer vormen van beweging te kiezen die je leuk vindt. Zo houd je het langer vol."
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Doe ontspanningsoefeningen",
      "blokken": [
        {
          "tekst": "Ontspanningsoefeningen kunnen op twee manieren nuttig zijn als je last hebt van sociale angst. Ten eerste kan je door regelmatig ontspanningsoefeningen te doen je algemene spanningsniveau omlaag brengen. Dit helpt om jezelf in stressvolle situaties beter staande te houden. Daarnaast kunnen ontspanningsoefeningen je helpen omgaan met angst. Mensen die angstig zijn, gaan sneller en ‘hoog’ ademhalen. De ademhaling gaat dan via je borst in plaats van via je buik. Aangeleerde ademhalingsoefeningen helpen je om je ademhaling op angstige momenten te beheersen. Daardoor kan je meer ontspannen, waardoor de angst afneemt. Op deze webpagina vind je verschillende ontspanningsoefeningen."
        }
      ]
    },
    "gids": {
      "slug": "sociale-angst",
      "titel": "Sociale angst",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/sociale-angst",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_sociale_angst"
    }
  },
  {
    "slug": "faalangst",
    "titel": "Faalangst",
    "onderwerp": "Angst",
    "kort": "Gespannen voor je tentamens? Nerveus voor je rijexamen? Volkomen normaal én zelfs nog goed voor je ook! Als je zenuwachtig bent presteer je beter, omdat het je alerter maakt. Maar wat nou als je zenuwen je volkomen verlammen en je niet meer normaal kunt nadenken? Dan kun je last hebben van faalangst.",
    "meer": [
      {
        "kop": "Betekenis faalangst"
      },
      {
        "tekst": "Bij faalangst ben je letterlijk bang dat wat je moet doen misgaat, mislukt. Het gaat hierbij om een bepaalde taak waar je voor beoordeeld wordt, zoals een tentamen of presentatie. Je hebt geen vertrouwen in jezelf dat je dit goed gaat doen. Zowel kinderen, als jongeren, als volwassenen kunnen zich faalangstig voelen."
      },
      {
        "kop": "Symptomen faalangst"
      },
      {
        "tekst": "Kenmerken van faalangst zijn:"
      },
      {
        "lijst": [
          "Koude of warme handen",
          "Hevig zweten",
          "Misselijkheid",
          "Maagkramp of buikpijn",
          "Droge lippen",
          "Trillen of bibberen",
          "Niet meer helder kunnen denken"
        ]
      },
      {
        "tekst": "Deze klachten heb je meestal niet allemaal tegelijk en ze kunnen per persoon verschillen."
      },
      {
        "kop": "Oorzaken faalangst"
      },
      {
        "tekst": "Er zijn meerdere zaken die invloed hebben op het ontstaan van faalangst. Bijvoorbeeld:"
      },
      {
        "lijst": [
          "De druk om te presteren. Bijvoorbeeld omdat er hoge verwachtingen zijn vanuit je omgeving. Denk aan reacties en druk vanuit familie, vrienden, school of collega's. Of druk vanuit jezelf. Bijvoorbeeld omdat je een beperking hebt, zoals dyslexie, waardoor je het idee hebt dat je je meer moet bewijzen.",
          "Een laag zelfbeeld en gebrek aan zelfvertrouwen. Bij een laag zelfbeeld heb je moeite om negatieve opmerkingen naast je neer te leggen. Of je denkt eerder dat als iets goed gaat je geluk hebt, maar als iets fout gaat dat je niet goed genoeg zijn. Het kan ook zijn dat je gepest bent en dat een grote invloed heeft gehad op je zelfvertrouwen."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/faalangst",
    "tips": [
      {
        "kop": "Duw je faalangst niet weg",
        "blokken": [
          {
            "tekst": "Als we nare gevoelens ervaren, zoals de angst om te falen, zijn we vaak geneigd er alles aan te doen om dit niet te voelen. Hoewel dit een logische reactie is, helpt het ons vaak niet verder. De faalangst neemt hierdoor helaas niet af. Duw deze gevoelens en de gedachten daaromheen dus niet weg. Steekt de faalangst de kop op? Probeer een moment stil te staan bij wat je ervaart. Laat alles toe en schiet niet in de ‘doe-stand’ om het weg te werken. Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Je zal merken dat je angst minder overheersend en zwaar wordt, doordat je niet oordeelt over de situatie en deze accepteert zoals het is."
          },
          {
            "tekst": "Lukt het niet meteen? Geen paniek! Het heeft vaak tijd nodig om op een nieuwe manier met situaties om te gaan. Maar door dit regelmatig te doen, zal je ervaren dat je er steeds beter in wordt."
          }
        ]
      },
      {
        "kop": "Wees minder kritisch naar jezelf",
        "blokken": [
          {
            "tekst": "Mensen die last hebben van faalangst stellen vaak hoge eisen aan zichzelf. Op zich is daar niks mis mee, maar het is zonde als ze je in de weg gaan staan. Je bent een mens en geen robot. Ieder mens heeft kwaliteiten en uitdagingen. Wees niet te hard voor jezelf. Gun jezelf uitdagingen te hebben en af en toe de plank mis te slaan. Iedereen doet wel eens iets raars of onhandigs. Iedereen heeft wel eens een slechte dag of maakt een beslissing die achteraf niet zo handig was. Jij dus ook! We kunnen erg streng zijn voor onszelf, terwijl we minder kritisch zijn naar anderen. Het kan helpen om voor jezelf na te gaan wat je tegen een vriend zou zeggen die in een soortgelijke situatie zit en hetzelfde gevoel heeft. Waarschijnlijk zal je zeggen dat deze vriend fouten mag maken. Waarom gun je dat jezelf dan niet?"
          }
        ]
      },
      {
        "kop": "Stel je verwachtingen bij",
        "blokken": [
          {
            "tekst": "Naast minder kritisch zijn op jezelf, kan het ook helpen om de verwachtingen die je van jezelf hebt vooraf bij te stellen. Want waarom moet jouw presentatie altijd helemaal vlekkeloos verlopen? Of waarom moet jij je rijbewijs in één keer halen? Of waarom mag je nooit een onvoldoende halen voor een toets? Door je verwachtingen bij te stellen, leg je minder druk op jezelf waardoor ook je faalangst minder op de voorgrond zal staan. En het grappige is, vaak presteer je dan juist beter."
          }
        ]
      },
      {
        "kop": "Maak fouten",
        "blokken": [
          {
            "tekst": "Het is ook belangrijk dat je het maken van fouten niet altijd voorkomt. Want wist je dat het maken van fouten juist nodig is om je te ontwikkelen? We hebben het dus niet over falen , maar over leren ! Pas op het moment dat iets ‘fout’ loopt, leer je hoe het wel werkt. Door te zoeken naar oplossingen of te luisteren naar feedback van anderen, leer je en pas je dingen aan. Bovendien leidt dit vaak tot nieuwe inzichten en mogelijkheden die je anders niet had gezien. Probeer dus niet krampachtig alles goed te doen, maak fouten en leer ervan."
          }
        ]
      },
      {
        "kop": "Verander je gedachten",
        "blokken": [
          {
            "tekst": "De manier waarop je over dingen denkt, heeft invloed op hoe je je voelt en hoe je je gedraagt. Met andere woorden; als je jouw gedachten helpend maakt, zullen jouw gevoelens waarschijnlijk positief veranderen. Een voorbeeld: je hebt binnenkort een hardloopwedstrijd en hier heb je hard voor getraind. Toch denk je: \"Straks ren ik een slechte tijd. Iedereen denkt vast dat ik een slechte hardloper ben.\" Hierdoor ervaar je angst om te falen. Deze gedachten zijn niet helpend. Het is ook mogelijk anders over de situatie te denken. Bijvoorbeeld: \"Het is niet erg als ik geen toptijd haal. Ik ga mijn best doen, ik heb er sowieso hard voor getraind.\" De situatie blijft precies hetzelfde, maar de kans is groot dat jij je nu een stuk fijner voelt."
          },
          {
            "tekst": "Het kan dus goed zijn te onderzoeken hoe je gedachten samenhangen met je gevoelens en gedrag. Probeer hierna om je negatieve gedachten, die vervelende gevoelens geven, om te buigen naar helpende gedachten die fijne gevoelens geven. Kan je hierbij wel wat hulp gebruiken? Wij schreven oefeningen om aan de slag te gaan met helpende gedachten."
          }
        ]
      }
    ],
    "gids": {
      "slug": "faalangst",
      "titel": "Faalangst",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/faalangst",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_faalangst"
    }
  },
  {
    "slug": "bewegen",
    "titel": "Bewegen",
    "onderwerp": "Energie",
    "kort": "Bewegen heeft een goede invloed op je hersenen en daarmee ook op je mentale gezondheid. Of je last hebt van een dipje of ergere mentale klachten hebt: Bewegen kan je helpen. Op deze pagina lees je meer over waarom bewegen goed is voor je mentale gezondheid. Ook geven we tips en informatie over wat jij kan doen.",
    "meer": [
      {
        "kop": "Bewegen goed voor je mentale gezondheid"
      },
      {
        "tekst": "Bewegen heeft bijvoorbeeld een positieve invloed op je:"
      },
      {
        "lijst": [
          "Geheugen",
          "Concentratie",
          "Denkkracht",
          "Verwerking van informatie",
          "Creativiteit",
          "Zelfbeeld, zelfvertrouwen en zelfwaardering",
          "Zelfredzaamheid",
          "Zelfcontrole",
          "Gezondheid",
          "Slaap",
          "Afweersysteem en je microbioom",
          "Stille ontstekingen"
        ]
      },
      {
        "kop": "Waarom is bewegen gezond voor je hersenen?"
      },
      {
        "tekst": "Bewegen is gezond voor je brein. Wanneer je beweegt zijn driekwart van je hersencellen actief. Je hersenen doen namelijk heel veel dingen tegelijk als je beweegt. Denk aan:"
      },
      {
        "lijst": [
          "Het plannen en uitvoeren van bewegingen.",
          "Zorgen voor een goede houding, evenwicht en spierspanning.",
          "Zorgen voor vloeiende bewegingen.",
          "Doorgeven van beeld van je omgeving en waar je eventueel rekening mee moet houden."
        ]
      },
      {
        "tekst": "Omdat je brein zo druk bezig is, gaan er verschillende biologische processen werken. Er komen stofjes vrij, neurotrofines (zoals BNF) en neurotransmitters (zoals endorfine, serotonine en dopamine), die een goede invloed op je hebben. Deze stofjes maken nieuwe hersencellen, nieuwe verbindingen tussen de hersencellen en nieuwe bloedvaatjes aan. Dit zorgt voor betere communicatie in je hersenen én er gaat meer voeding en zuurstof naar je hersencellen toe. Goed voor je brein dus. Ook voel je je door deze stofjes beter, ervaar je minder pijn, angst en stress."
      },
      {
        "kop": "Mentale klachten en bewegen"
      },
      {
        "tekst": "Bewegen als je ADHD hebt heeft een positieve invloed op:"
      },
      {
        "lijst": [
          "Je aandacht",
          "Je overgevoeligheid en overprikkeling",
          "Je impulsen"
        ]
      },
      {
        "tekst": "Voorbeelden van bewegen met ADHD:"
      },
      {
        "lijst": [
          "Tennis en badminton",
          "Judo",
          "Paardrijden",
          "Teamsporten met duidelijke regels, zoals volleybal en korfbal"
        ]
      },
      {
        "tekst": "Wanneer je last hebt van angstklachten of een angststoornis heeft bewegen duidelijke voordelen."
      },
      {
        "lijst": [
          "Bewegen leidt je af van datgene waar je angst voor hebt",
          "Je verlaagt de spierspanning in je lichaam. Heb je veel spanning in je lijf dan vertelt je lichaam aan je hersenen dat ze alert moeten zijn. Wat weer zorgt voor meer spanning in je lijf. Door te bewegen onderbreek je dit systeem.",
          "Je kalmeert",
          "Je lichaam leert dat het sneller kloppen van je hart en sneller ademhalen niet betekent dat je last hebt van angst of een paniekaanval. Maar dat het juist iets positiefs is voor je lichaam."
        ]
      },
      {
        "tekst": "Voorbeelden van bewegen als je last hebt van angstklachten:"
      },
      {
        "lijst": [
          "Hardlopen, bijvoorbeeld met runningtherapie",
          "Krachttraining, bijvoorbeeld in een sportschool",
          "Yoga en tai chi",
          "Fietsen",
          "Rustig zwemmen"
        ]
      },
      {
        "tekst": "Mensen met autisme spectrum stoornissen (ASS) laten meer houterige en vertraagde bewegingen zien. Of zijn minder stabiel als de ogen gesloten zijn. Bewegen met autisme kan lastig zijn, maar toch zorgt bewegen voor positieve effecten:"
      },
      {
        "lijst": [
          "Je hebt minder last van dwangmatige bewegingen",
          "Je hebt minder last van agressie",
          "Je richten op een taak op school of werk wordt makkelijker"
        ]
      },
      {
        "tekst": "Deze sporten blijken een positieve invloed te hebben op mensen met autisme:"
      },
      {
        "lijst": [
          "Hardlopen",
          "Paardrijden",
          "Zwemmen",
          "Krachttraining, bijvoorbeeld in een sportschool",
          "Fietsen",
          "Rolschaatsen",
          "Wandelen in de sneeuw",
          "Zelfverdediging, zoals krav maga of boksen"
        ]
      },
      {
        "tekst": "Bewegen als je last hebt van stress en/of een burn-out heeft voordelen:"
      },
      {
        "lijst": [
          "Je verlaagt de spierspanning in je lichaam. Heb je veel spanning in je lijf dan vertelt je lichaam aan je hersenen dat ze alert moeten zijn. Wat weer zorgt voor meer spanning in je lijf. Door te bewegen onderbreek je dit systeem.",
          "Je kalmeert door de toename van endorfine, het anti-stress hormoon"
        ]
      },
      {
        "tekst": "Het is goed om niet te veel te sporten als je last hebt van een burn-out. Laat je begeleiden door beweegprofessionals."
      },
      {
        "tekst": "Voorbeelden van bewegen met stress of burn-out:"
      },
      {
        "lijst": [
          "Mindfulness",
          "Yoga",
          "Hardlopen, zoals runningtherapie",
          "Fietsen"
        ]
      },
      {
        "tekst": "Als je een depressie hebt kan bewegen een vergelijkbaar antidepressie effect hebben als medicijnen. Dit komt omdat je endorfinesysteem verbeterd wordt, en dat zorgt voor meer BDNF wat een antidepressieve werking heeft."
      },
      {
        "tekst": "Maar let op! Bij te veel training verlaagt juist de werking van endorfine, en dat kan ervoor zorgen dat je depressieve gevoelens verergeren. Het beste is om je te laten begeleiden door een beweegprofessional."
      },
      {
        "tekst": "Voorbeelden van sporten die goed zijn bij depressie:"
      },
      {
        "lijst": [
          "Harlopen, bijvoorbeeld met runningtherapie",
          "Dansen",
          "Fietsen",
          "Zwemmen",
          "Boksen"
        ]
      },
      {
        "tekst": "Heb je epilepsie en last van vermoeidheid of stress? Dan is het juist verstandig om te gaan sporten. Voordelen van bewegen met epilepsie:"
      },
      {
        "lijst": [
          "Je krijgt meer energie",
          "Het verlaagt je stressniveau",
          "Het verhoogt je weerstand.",
          "Je krijgt een betere concentratie en geheugen."
        ]
      },
      {
        "tekst": "Toch zijn niet alle sporten handig als je epilepsie hebt. Artsen raden contactsporten, zoals rugby en boksen af. En zwemmen doe je het liefst samen met iemand die kan reddend zwemmen."
      },
      {
        "tekst": "Voorbeelden van bewegen met epilepsie:"
      },
      {
        "lijst": [
          "Stevig wandelen",
          "Tuinieren",
          "Fietsen",
          "Volleybal",
          "Golf",
          "Badminton",
          "Yoga",
          "Fitness"
        ]
      },
      {
        "tekst": "Ben jij hoogsensitief? Onderzoeken laten zien dat mensen die hoogsensitief zijn vaker depressieve klachten ervaren. Dit kan zelfs versterkt worden als je weinig beweegt. Maar bewegen kan ook een uitdaging zijn voor Hoogsensitieve personen (HSP). De harde muziek in de sportschool, veel mensen bij je favoriete groepssport, per ongeluk aangeraakt worden. Maar ook je eigen verhoogde hartslag of het gevoel dat je geen fouten mag maken kan leiden tot stress."
      },
      {
        "tekst": "Toch is bewegen voor HSP erg belangrijk om depressieve klachten te verminderen. Voorbeelden van bewegen als je hoogsensitief bent:"
      },
      {
        "lijst": [
          "Yoga",
          "Stevig wandelen of joggen",
          "Tafeltennis"
        ]
      },
      {
        "tekst": "Heb je last van PTSS? Dan heeft bewegen een gunstig effect op je mentale gezondheid. Mensen met PTSS ervaren vaak ook lichamelijke klachten. Om zo min mogelijk te voelen, kan je je verbinding met je lichaam uitzetten. Bewegen helpt om op een positieve manier die verbinding weer te voelen. Ook is het een goede afleiding."
      },
      {
        "tekst": "Bewegen met PTSS heeft een goede invloed:"
      },
      {
        "lijst": [
          "Je hebt minder last van stress",
          "Je krijgt een beter leervermogen en geheugen",
          "Je krijgt meer zelfvertrouwen",
          "Je slaapt beter",
          "Je hebt je emoties beter in de hand"
        ]
      },
      {
        "tekst": "Voorbeelden van bewegen met PTSS:"
      },
      {
        "lijst": [
          "Yoga",
          "Hardlopen, zoals runningtherapie",
          "Boksen",
          "Dansen",
          "Surfen, bijvoorbeeld surftherapie",
          "Obstaclerun"
        ]
      },
      {
        "tekst": "Er zijn heel veel soorten verslavingen. Maar wat bijna alle verslavingen hetzelfde hebben is dat je meer dopamine aanmaakt. Dit zorgt voor een gevoel van beloning. En om dat positieve gevoel steeds maar weer te voelen, kan iets verslavend worden. Bewegen heeft ook een positief effect op de aanmaak van dopamine. Maar bewegen als je last hebt van een verslaving heeft nog meer positieve invloed:"
      },
      {
        "lijst": [
          "Bewegen vermindert je stress",
          "Je krijgt een positiever zelfbeeld",
          "Je hebt meer zelfdiscipline",
          "Bewegen vermindert je ontwenningsverschijnselen",
          "Bewegen biedt afleiding",
          "Sporten geeft structuur"
        ]
      },
      {
        "tekst": "Voorbeelden van bewegen met een verslaving:"
      },
      {
        "lijst": [
          "Wandelen",
          "Hardlopen",
          "Yoga",
          "Fietsen"
        ]
      },
      {
        "kop": "Hoeveel moet je bewegen?"
      },
      {
        "tekst": "Je kan hiervoor de beweegrichtlijnen aanhouden. Maar je hoeft niet gelijk aan deze richtlijnen te voldoen. Starten met bewegen en zorgen dat je er plezier in hebt, is het belangrijkste. Dan heeft bewegen gelijk al een positief effect én je houdt het langer vol."
      },
      {
        "lijst": [
          "1 uur per dag matig intensief bewegen",
          "3 keer per week spier- en botversterkende activiteiten"
        ]
      },
      {
        "tekst": "Lees meer over de beweegrichtlijnen."
      },
      {
        "lijst": [
          "2,5 uur per week matig intensief bewegen",
          "2 keer per week spier- en botversterkende activiteiten",
          "balansoefeningen voor ouderen"
        ]
      },
      {
        "tekst": "Lees meer over de beweegrichtlijnen."
      },
      {
        "tekst": "Kan je wat hulp gebruiken om te beginnen met bewegen? Neem dan contact op met een beweegprofessional. Deze experts helpen je om sport en bewegen in te zetten zodat je je beter gaat voelen."
      },
      {
        "kop": "Hoe moet ik bewegen?"
      },
      {
        "tekst": "Wanneer je matig intensief beweegt gaat je ademhaling sneller en slaat je hart sneller, maar kun je nog wel gewoon praten. Voorbeelden van matig intensief bewegen zijn:"
      },
      {
        "lijst": [
          "Ramen lappen",
          "Stevig wandelen",
          "Werken in de tuin",
          "Rustig de trap omhoog lopen",
          "Rustig zwemmen",
          "Fietsen",
          "Paardrijden"
        ]
      },
      {
        "tekst": "Activiteiten die je spieren versterken zijn bewegingen die zich richten op het trainen van kracht, uithoudingsvermogen en spieren vergroten. Denk aan:"
      },
      {
        "lijst": [
          "Bed opmaken",
          "Zware boodschappen tillen",
          "Hardlopen",
          "Bootcamps",
          "Krachttraining",
          "Voetbal",
          "Tennis",
          "Traplopen",
          "Stevig zwemmen"
        ]
      },
      {
        "tekst": "Activiteiten die je botten versterken zijn bewegingen die je lichaam met je eigen gewicht belasten. Denk aan:"
      },
      {
        "lijst": [
          "Springen: op de trampoline of touwtjespringen",
          "Hardlopen",
          "Dansen",
          "Volleybal",
          "Wandelen",
          "Traplopen",
          "Tai Chi",
          "Ballet"
        ]
      },
      {
        "tekst": "Bij balansoefeningen werken je spieren samen om je evenwicht te houden en om te zorgen dat je minder snel valt. Voorbeelden van balansoefeningen zijn:"
      },
      {
        "lijst": [
          "Op één been staan",
          "Over een lijn lopen",
          "Voorwerp van de grond oppakken",
          "Yoga",
          "Ballet",
          "Pilates",
          "Balsporten, zoals basketbal, voetbal, handbal, hockey en volleybal",
          "Racketsporten, zoals tennis, squash, badminton en padel"
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/bewegen-en-mentale-gezondheid",
    "tips": [
      {
        "blokken": [
          {
            "tekst": "Doe een sport of kies een manier van bewegen die je leuk vindt. Dan is het veel langer vol te houden. Weet je nog niet wat bij jou past? Doe wat proeflessen of vul een testje in."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Ga samen met iemand sporten. Dat is niet alleen gezellig maar het ondersteunt je ook om te blijven sporten."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Maak gebruik van digitale hulpmiddelen. Er zijn heel veel apps die je motiveren om meer te bewegen of te blijven bewegen. Met een audio-coach tijden het hardlopen, een smartwatch die je activiteiten meet of een app met challenges word jij gemotiveerd om te bewegen."
          }
        ]
      }
    ]
  },
  {
    "slug": "mentaal-fit",
    "titel": "Mentaal fit",
    "onderwerp": "Energie",
    "kort": "Iemand die zich mentaal fit voelt, zit lekker in zijn of haar vel en staat over het algemeen positief in het leven. Hij of zij kan meestal goed omgaan met tegenslagen en met dingen die anders lopen en is zo stress de baas.",
    "meer": [
      {
        "tekst": "Mentaal fit zijn, betekent niet dat iemand zich altijd gelukkig voelt of nooit een mindere dag heeft, alleen de ‘juiste’ keuzes maakt en dat alles vlekkeloos loopt. Het gaat om veerkracht; een veertje waait mee met de wind. In dit geval staat de wind voor een stressvolle situatie. Als de wind weer is gaan liggen, veert het veertje weer terug naar hoe het er daarvoor uitzag. Denk hierbij aan het herstel na een stressvolle situatie."
      },
      {
        "kop": "Werken aan je mentale fitheid"
      },
      {
        "tekst": "De mate waarin jij je mentaal fit voelt, heeft invloed op veel gebieden in je leven. Gelukkig is mentale fitheid iets waar je zelf aan kan werken. Bijvoorbeeld door je gedachten helpend te maken, voldoende te ontspannen en te bewegen, te leren accepteren, te zorgen voor een balans tussen energiegevers en energievreters en het stellen van grenzen."
      },
      {
        "tekst": "Wil jij inzicht krijgen in je mentale fitheid? Doe één of meerdere van onze zelftests en onderzoek bijvoorbeeld je denkgewoonten, of je voldoende doet om te ontspannen en te herstellen en breng in kaart hoe jij met belastende omstandigheden omgaat."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/mentaal-fit",
    "tips": [],
    "gids": {
      "slug": "mentaal-fit-werk",
      "titel": "Hoe blijf ik mentaal fit op het werk?",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mentaal-fit-werk",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_mentaalfit_myb_112021"
    }
  },
  {
    "slug": "fomo",
    "titel": "FOMO",
    "onderwerp": "Balans",
    "kort": "Als je last hebt van FOMO, dan heb je angst om iets te missen waar je bij had willen zijn. Het geeft je een vervelend of onrustig gevoel. Op deze pagina lees je wat FOMO is, waardoor je er last van kan hebben en tips hoe je ermee om kan gaan.",
    "meer": [
      {
        "tekst": "FOMO is de afkorting van fear of missing out_. In het Nederlands: de angst om iets te missen. We weten nog niet precies wat FOMO is en hoe het werkt. Wel zijn er verschillende onderzoeken naar, maar die beschrijven FOMO niet altijd op dezelfde manier."
      },
      {
        "tekst": "De eerste uitleg over FOMO komt van de Britse psycholoog en onderzoeker Przybylski. Hij beschrijft het als een aanhoudende zorg dat anderen leuke dingen doen zonder jou. En een wens om altijd verbonden te zijn met anderen en op de hoogte van hen te blijven. Het geeft namelijk een naar gevoel als je ziet dat je vrienden iets leuks hebben gedaan en jij er niet bij was. Je baalt dat je dit leuke of gelukkige gevoel hebt moeten missen. Je kan je buitengesloten voelen. Dit kan ervoor zorgen dat je overal bij wil zijn of alles wil meekrijgen. Daardoor kan het ook zijn dat je vaak je telefoon checkt op berichten of voortdurend door je sociale media scrollt."
      },
      {
        "kop": "Hoe weet je of je FOMO hebt?"
      },
      {
        "tekst": "FOMO herken je doordat je je onrustig of gespannen voelt als je niet weet wat anderen doen en of je iets mist. Ook kan je FOMO vaak merken aan je gevoelens of gedrag. Voorbeelden hiervan zijn:"
      },
      {
        "lijst": [
          "Minder kunnen genieten van het moment, omdat je mogelijk iets anders mist.",
          "Jezelf veel vergelijken met anderen en het gevoel hebben dat anderen een leuker en interessanter leven hebben dan jij."
        ]
      },
      {
        "tekst": "FOMO is geen ziekte. Het is een ervaring waar veel mensen wel eens last van hebben. Waar de een er alleen in sommige situaties last van heeft, zal de ander in de meeste gevallen zo reageren."
      },
      {
        "tekst": "FOMO wordt veel onderzocht bij jongeren. Daar lijkt het in verhouding vaak voor te komen. Dit kan ermee te maken hebben dat jongeren vaak nog hun identiteit ontwikkelen en het belangrijk vinden ergens bij te horen."
      },
      {
        "tekst": "Wil jij weten hoeveel FOMO je ervaart? De FOMO test helpt je dit in te schatten."
      },
      {
        "kop": "Waardoor krijg je FOMO?"
      },
      {
        "tekst": "FOMO hangt vaak samen met hoe goed belangrijke behoeften worden vervuld. Het gaat hier om de behoefte aan verbondenheid, competentie en autonomie. Als deze behoeften minder goed worden vervuld, kan je gevoeliger zijn voor FOMO. Tegelijkertijd kan FOMO er ook weer voor zorgen dat deze behoeften minder vervuld voelen."
      },
      {
        "tekst": "Verbondenheid betekent dat je je verbonden wil voelen met andere mensen. Wij mensen zijn ‘groepsdieren’ en willen graag bij andere mensen horen. En niet buitengesloten worden. Als je het gevoel hebt dat anderen samen leuke of waardevolle dingen meemaken zonder jou, kan je angstig of onrustig worden dat je iets mist of er niet echt bij hoort."
      },
      {
        "tekst": "Competentie gaat over het gevoel dat je het goed doet en mee kan komen. Het zit als mens in ons om ons te vergelijken met anderen. Als je jezelf veel vergelijkt, kan je het idee krijgen dat anderen meer meemaken, succesvoller of gelukkiger zijn of hun leven beter op orde hebben. Dit kan je onzeker maken. Je kan het gevoel krijgen dat jij achterloopt of niet goed genoeg bent. Dit kan FOMO versterken, helemaal als je al wat minder zelfvertrouwen hebt."
      },
      {
        "tekst": "Autonomie betekent dat je voor jouw gevoel zelf keuzes maakt die bij jou passen. Dat is niet altijd makkelijk. Zo zijn er tegenwoordig veel keuzes en mogelijkheden. Denk aan feestjes, opleidingen, werk, reizen of datingapps. Je kan dan gaan twijfelen: kies ik wel het juiste? Misschien is er iets beters. Dit wordt ook wel FOBO genoemd: fear of better options / de angst voor betere opties_. Dit kan onrust geven en FOMO versterken."
      },
      {
        "tekst": "Ook prestatiedruk kan meespelen, omdat je altijd het gevoel hebt de beste versie van jezelf te moeten zijn. Dit gevoel wordt vaak sterker door wat je om je heen ziet. Onze maatschappij is erg gericht op gelukkig zijn en dat je hier zelf verantwoordelijk voor bent. Maar niemand is altijd gelukkig en dit bepaal je niet alleen zelf."
      },
      {
        "tekst": "Sociale media spelen een grote rol bij FOMO. FOMO kan ervoor zorgen dat je vaker op sociale media zit. Tegelijkertijd kunnen sociale media ervoor zorgen dat je meer last hebt van FOMO. Op bijvoorbeeld Instagram, TikTok, Snapchat en WhatsApp kan je de hele tijd zien welke leuke dingen je vrienden en familie aan het doen zijn. Naast dat je je rot voelt omdat je niet bent uitgenodigd, kan je je ook naar voelen omdat je denkt dat jouw leven veel minder leuk is dan dat van anderen. Maar mensen delen vooral de leuke of opvallende dingen op sociale media. Dat beeld klopt vaak niet bij het echte leven."
      },
      {
        "tekst": "Daarbij komt dat sociale media zo zijn ontwikkeld dat je blijft scrollen. Meldingen en likes activeren het beloningssysteem in je brein. Dit kan ervoor zorgen dat je steeds opnieuw wil checken of je iets mist. Hoewel dit vooral verklaart waarom we zoveel op sociale media zitten, kan dit indirect ook bijdragen aan FOMO."
      },
      {
        "tekst": "Ook kan je FOMO ervaren, zonder dat sociale media daar een rol in spelen."
      },
      {
        "kop": "De gevolgen van FOMO"
      },
      {
        "tekst": "Met een beetje FOMO is niks mis. We hebben er bijna allemaal wel eens last van. Maar het kan je ook best in de weg gaan zitten. Hoewel het lastig is om te zeggen wat precies oorzaken en wat gevolgen van FOMO zijn, weten we wel dat FOMO vaak samengaat met:"
      },
      {
        "lijst": [
          "Stress en onrust, waardoor het kan voelen alsof je brein in de ‘alert-stand’ staat om niets te missen",
          "Ontevreden gevoel met je eigen leven"
        ]
      },
      {
        "tekst": "Daarnaast kan het samengaan met:"
      },
      {
        "lijst": [
          "Je eenzaam voelen",
          "De controle over je telefoongebruik verliezen: heel vaak je telefoon openen, door je sociale media scrollen of berichten checken",
          "Problemen met concentreren, omdat je steeds bezig bent met wat je mogelijk mist",
          "Een te volle agenda of nergens ja tegen durven zeggen uit angst iets beters mis te lopen",
          "Vermoeidheid door te veel nadenken, een te volle agenda en slechter slapen"
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/fomo",
    "tips": [
      {
        "blokken": [
          {
            "tekst": "Bedenk je dat veel mensen weleens last hebben van FOMO. Bij sommige mensen wordt het minder als ze ouder worden. Bedenk je ook dat niemand een perfect leven heeft of altijd gelukkig is. Dus waarom zou jij dit dan moeten? Waarom zou je niks mogen missen?"
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Draai de vraag: \"Wat mis ik allemaal als ik niet online ben?\" om naar: \"Wat mis ik allemaal als ik te veel achter mijn telefoon zit?\""
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Maak je telefoon onaantrekkelijk met onze tips."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Bedenk vooraf waarom, wanneer en hoe je online wil gaan. En maak dit concreet. Bijvoorbeeld: “Ik wil vanavond online zijn om iets te leren, iets leuks te doen of contact te hebben met een vriend.”"
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Vraag je af waarom je iets doet. Doe je het uit angst om iets te missen of omdat je er echt zin in hebt?"
          }
        ]
      }
    ]
  },
  {
    "slug": "keuzestress",
    "titel": "Keuzestress",
    "onderwerp": "Balans",
    "kort": "Keuzes maken hoort bij het leven, je staat ermee op en je gaat ermee naar bed. “Zal ik nog even blijven liggen?”, \"Wat trek ik aan?\", “Zeg ik ja of zeg ik nee?”. Bij de meeste keuzes die je maakt, sta je niet eens stil. Maar er zijn ook keuzes die lastig zijn. Bijvoorbeeld doordat je uit erg veel dingen moet kiezen of je erg veel informatie over de keuzes krijgt. Je kan dan in de stress schieten of je wel de goede keuze gaat maken. Je ervaart dan keuzestress.",
    "meer": [
      {
        "tekst": "Keuzestress is iets waar bijna iedereen weleens mee worstelt. Meestal gaat het dan over het maken van een keuze die veel invloed op je leven heeft. Keuzes over bijvoorbeeld je studie of werk, je gezin of je woonsituatie. Hoe groter de gevolgen van je keuzes, hoe moeilijker de beslissing vaak is."
      },
      {
        "tekst": "Aan de ene kant geven keuzes een gevoel van vrijheid: jij hebt zelf de touwtjes in handen om je leven vorm te geven. Tegelijkertijd kan dit soms stress en angst geven, omdat je een keuze wil maken die goed uitpakt én die door andere mensen wordt goedgekeurd."
      },
      {
        "kop": "Hoe herken je keuzestress?"
      },
      {
        "tekst": "Je merkt dat je keuzestress hebt, omdat je blijft piekeren over wat je moet kiezen. Het kan voelen alsof je op een rotonde zit en maar geen afslag kan nemen. Ook kan je er stressklachten van ervaren."
      },
      {
        "kop": "Hoe ontstaat keuzestress?"
      },
      {
        "tekst": "Keuzestress kan door verschillende dingen ontstaan, bijvoorbeeld:"
      },
      {
        "lijst": [
          "Je wil het perfect doen, maar de perfecte keuze bestaat niet.",
          "Je wordt overvallen, omdat je opeens en snel een keuze moet maken.",
          "Je hebt geen overzicht, omdat de keuzes en de informatie die je erover krijgt te veel is.",
          "Je bent moe of zit niet zo lekker in je vel, waardoor je het gevoel hebt nu geen goede keuze te kunnen maken.",
          "Je hebt in het verleden een keuze gemaakt die niet goed uitpakte."
        ]
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Vaak hoef je keuzes niet in je eentje te maken. Sterker nog, veel keuzes moet je samen maken, omdat je bijvoorbeeld onderdeel uitmaakt van een gezin of een relatie. Het is belangrijk om hierover met elkaar te praten. Wat maakt de keuze zo moeilijk en wat heb je van de ander of elkaar nodig om beter te kunnen kiezen? Ook kan je jouw keuzestress bespreken met vrienden of familie. Vaak zorgt dit voor herkenning en opluchting en wie weet kan je leren van de ervaring van anderen."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/keuzestress",
    "tips": [
      {
        "blokken": [
          {
            "tekst": "Een keuze maken kan voelen als een keuze voor het leven, alsof het definitief is en je niet meer terug kan. Dit is in de meeste gevallen niet waar. Keuzes zijn te herstellen, te hervormen of zelfs terug te nemen. Het is geen ramp als je er later achter komt dat die studie toch niet helemaal bij je aansluit, zoals je eigenlijk had verwacht. Of dat fulltime werken naast een gezin toch niet zo goed uitpakt als je had gedacht. Natuurlijk is dat jammer en mag je flink balen, maar probeer het als een leerproces te zien."
          }
        ]
      }
    ]
  },
  {
    "slug": "overprikkeld",
    "titel": "Overprikkeld",
    "onderwerp": "Balans",
    "kort": "Mensen reageren verschillend op prikkels als geluid, licht, temperatuur, drukte, geur en emoties. Sommige mensen zijn er minder gevoelig voor, terwijl anderen er juist heel gevoelig voor zijn. Te veel prikkels kunnen dan zorgen voor overprikkeling. Als je overprikkeld bent, merk je dit bijvoorbeeld doordat je je hierdoor gestresst, emotioneel of geïrriteerd voelt. Ook kan je je moe voelen of moeite hebben met concentreren.",
    "meer": [
      {
        "tekst": "Hoewel bijna iedereen wel eens een keer overprikkeld kan zijn, heeft de een er vaker last van dan de ander. Gevoelig zijn voor overprikkeling kan samen gaan met sommige psychische problemen, zoals een angststoornis of depressie. Maar ook met aandoeningen zoals hersenletsel en migraine. Ook kan je er gevoeliger voor zijn als je ADHD of autisme hebt. Tegelijkertijd kan je als je autisme hebt voor sommige dingen juist minder gevoelig zijn. Je bent bijvoorbeeld gevoelig voor geluid en licht, maar ongevoelig voor geur en het voelen van warmte en kou."
      },
      {
        "tekst": "Ook als je hoogsensitief of hoogbegaafd bent, ben je gevoelig voor prikkels. Je merkt veel prikkels op, die sterk binnenkomen en die je diepgaand verwerkt. Ook dit kan eerder voor overprikkeling zorgen."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/overprikkeling",
    "tips": [
      {
        "kop": "Probeer overprikkeling te begrijpen",
        "blokken": [
          {
            "tekst": "Als je snel overprikkeld raakt, is het fijn om wat meer inzicht te krijgen over hoe prikkelverwerking en overprikkeling werkt. Door je te verdiepen in de achtergronden, de symptomen en de aanpak van overprikkeling, krijg je inzicht in manieren om er zo goed mogelijk mee om te gaan. Je kan hier meer informatie over vinden, bijvoorbeeld online of in boeken. Ook helpt het om duidelijk te krijgen waardoor jij overprikkeld raakt en hoe je hier vervolgens mee omgaat. Ga de momenten van overprikkeling van de afgelopen tijd langs en breng dit voor jezelf in kaart. Wat valt je op?"
          }
        ]
      },
      {
        "kop": "Accepteer dat je af en toe overprikkeld raakt",
        "blokken": [
          {
            "tekst": "Vaak kan je aan de omgeving niet zoveel veranderen, maar wel hoe je ermee omgaat. Een drukke winkelstraat blijft een drukke winkelstraat en harde geluiden van bijvoorbeeld klussende buren zijn niet altijd tegen te gaan. Kortom, een prikkelarme omgeving is niet altijd mogelijk. Wat hierbij goed helpt, is te accepteren dat je af en toe overprikkeld raakt. Hoewel dit niet altijd even makkelijk is, helpt het je er flexibeler mee om te gaan. Door er niet over te oordelen wordt ‘het probleem’ uiteindelijk minder duidelijk aanwezig en krijg je ruimte om het van een andere kant te bekijken. En misschien merk je zelfs wel dat je hierdoor steeds beter met prikkels om kan gaan. Bedenk bovendien dat je niet de enige bent die hier last van heeft. Heel veel mensen hebben hiermee te maken."
          }
        ]
      },
      {
        "kop": "Richt je op het hier en nu",
        "blokken": [
          {
            "tekst": "Ben je overprikkeld geraakt of zit je midden in een situatie die je overprikkelt? Sta stil bij wat je ervaart, laat alles toe en schiet niet in de ‘doe-stand’ om het op te lossen. Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Focus je op de geluiden die je hoort, de dingen die je voelt of die je ziet. Hierdoor zijn je hersenen met iets anders bezig dan zich te verzetten tegen de situatie en zo geef je jezelf de kans om even tot rust te komen. Onze mindfulness oefeningen helpen je om je te richten op het hier en nu."
          }
        ]
      },
      {
        "kop": "Ga het niet uit de weg en bouw vertrouwen op",
        "blokken": [
          {
            "tekst": "Als je een situatie vervelend vindt, ben je vaak geneigd het uit de weg te gaan. Het is makkelijker ermee om te gaan als je vertrouwen hebt in jezelf en je gelooft dat het wel goed komt. Je kan werken aan dit vertrouwen door uitdagingen aan te pakken. In dit geval: Vind je het vervelend of spannend om in situaties te zijn die voor overprikkeling kunnen zorgen? En ben je daardoor minder gaan ondernemen dan je eigenlijk zou willen? Ga het niet uit de weg! Begin niet te moeilijk, plan dus niet gelijk je hele agenda vol met afspraken op drukke plekken. Maar ga bijvoorbeeld eerst eens naar een winkel of terras op een rustig tijdstip. Zorg dat wat je gaat doen haalbaar is, zodat de kans groot is dat het goed gaat. Zo ontwikkel je vertrouwen dat het een volgende keer weer goed gaat. Bouw het stap voor stap op. Gaat het toch niet zoals verwacht? Accepteer dit dan, denk aan tip 2 en 3 en probeer het later nog eens."
          }
        ]
      },
      {
        "kop": "Doe wat goed voelt en geef je grenzen aan",
        "blokken": [
          {
            "tekst": "Hoewel het niet altijd mogelijk en verstandig is om zoveel mogelijk prikkels uit de weg te gaan, is het wel heel belangrijk dat je bij jezelf blijft. Doe wat voor jou goed voelt. Ook als dit betekent dat je eerder weggaat om bij te komen van alle prikkels die je ervaart. Of dat je liever op een rustige plek afspreekt. Vind je dat lastig, omdat je druk ervaart van anderen? Geef je grenzen aan. Wij schreven tips om je grenzen te leren kennen en aan te geven. Ook ontwikkelden we opdrachten en tips om ‘Nee!’ te leren zeggen."
          }
        ]
      }
    ],
    "gids": {
      "slug": "overprikkeld",
      "titel": "Overprikkeld",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/overprikkeld",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_overprikkeld"
    }
  },
  {
    "slug": "hoogsensitiviteit",
    "titel": "Hoogsensitiviteit",
    "onderwerp": "Balans",
    "kort": "Merk jij vaak details op die anderen over het hoofd zien? Ben je gevoelig voor licht, geluiden en/of geuren? Heb je vaak veel tijd nodig om jezelf op te laden? Ben je sterk gericht op rust en evenwicht in een groep? Dan ben je misschien hoogsensitief. Ook wel hooggevoelig genoemd. Hoogsensitiviteit is een eigenschap die veel mensen hebben.",
    "meer": [
      {
        "lijst": [
          "Ongeveer 20 procent van de mensen zijn hoogsensitieve personen (HSP).",
          "Voor zover bekend zijn er net zo veel hooggevoelige mannen als vrouwen."
        ]
      },
      {
        "tekst": "Bron: Hoogsensitief.nl"
      },
      {
        "tekst": "Hoogsensitiviteit is relatief nieuw in de psychologie. De term hoogsensitiviteit is in de jaren negentig geïntroduceerd door dr. Elaine Aron. Dr. Aron ontwikkelde een vragenlijst om hoogsensitieve personen te identificeren en schatte dat ongeveer 15-20% van de bevolking hoogsensitief is. Het werkt van dr. Aron heeft bijgedragen aan begrip en erkenning dat mensen de wereld heel verschillend kunnen ervaren."
      },
      {
        "kop": "Kenmerken van hoogsensitief zijn"
      },
      {
        "tekst": "Als je hoogsensitief bent, verwerk je informatie op een andere manier dan mensen die dat niet zijn. Je merkt veel prikkels op, die sterk binnenkomen en die je diepgaand verwerkt. Je bent hierdoor gevoelig voor fysieke sensaties, zoals licht, geluid, smaak en geur. Maar ook voor emotionele prikkels, zoals sfeer en emoties van anderen. Je hoeft als hoogsensitief persoon (HSP) niet voor alle prikkels even gevoelig te zijn."
      },
      {
        "tekst": "De kenmerken die horen bij hoogsensitieve personen zijn:"
      },
      {
        "lijst": [
          "Je ziet dingen die anderen misschien niet opvallen.",
          "Je kunt overweldigd worden door harde geluiden, fel licht en sterke geuren.",
          "Je begrijpt goed hoe anderen zich voelen en voelt dat zelf ook sterk.",
          "Je wil graag harmonie in je familie- en vriendengroep.",
          "Je hebt vaak rust en tijd alleen nodig om weer energie te krijgen.",
          "Je bent vaak goed in dingen die met creativiteit te maken hebben en je let op kleine dingen.",
          "Je weegt de verschillende keuzes af voordat je een beslissing neemt.",
          "Veranderingen in je omgeving of te veel dingen tegelijk kunnen je gestrest maken.",
          "Je vindt het belangrijk om goede, diepe relaties met mensen te hebben",
          "Je denkt veel na over jezelf en hoe je kunt groeien."
        ]
      },
      {
        "tekst": "Onderzoek met een fMRI-scanner laat zien dat de hersenen van hooggevoelige mensen bij bepaalde opdrachten in meer gebieden actief zijn en meer verbindingen onderling hebben, dan bij mensen die niet hoogsensitief zijn. Dat wordt diepgaande verwerking genoemd. De hersenen werken anders dan die van andere mensen."
      },
      {
        "kop": "Gevolgen van hoogsensitiviteit"
      },
      {
        "tekst": "Hooggevoelig zijn, heeft goede en minder goede kanten:"
      },
      {
        "tekst": "Voordelen hoogsensitiviteit:"
      },
      {
        "lijst": [
          "Creatief denken: Je kan originele oplossingen bedenken, omdat je hersenen meer verbindingen leggen.",
          "Aandacht voor details: Je merkt kleine details en foutjes op die anderen niet zien. Je kan goed observeren en problemen identificeren. Je bent eerder alert op gevaar.",
          "Empathisch en zorgzaam: Je bent vaak zorgzaam en begrijpt hoe anderen zich voelen. Je bent goed in gevoelens en non-verbale signalen oppikken.",
          "Sociaal gericht: Je kunt diepe en betekenisvolle relaties met anderen opbouwen.",
          "Genieten van kleine dingen: Je kan genieten van gewone of alledaagse dingen. Zoals een mooie dag of tijd doorbrengen met mensen van wie je houdt.",
          "Verantwoordelijkheid: Je voelt je vaak verantwoordelijk voor anderen en je voelt je sterk betrokken bij de maatschappij.",
          "Denken goed na bij beslissingen nemen: Je neemt de tijd om beslissingen te nemen en denkt goed na over de voor- en nadelen."
        ]
      },
      {
        "tekst": "Nadelen hoogsensitiviteit:"
      },
      {
        "lijst": [
          "Overprikkeld: Je raakt eerder overprikkeld en gemakkelijk overweldigd.",
          "Stress: Je werkt sneller en maakt minder fouten tijdens een taak, maar dat kan leiden tot overbelasting en stress.",
          "Communicatieproblemen: Soms begrijpen mensen die niet hoogsensitief zijn je niet goed, wat kan leiden tot communicatieproblemen. Soms kun je daarbij dingen te persoonlijk nemen.",
          "Psychische klachten: Je maakt meer kans op burn-out, depressie en angststoornissen wanneer je je in een nare (werk)omgeving bevindt. Is je omgeving goed ingericht, dan komen deze psychische klachten minder vaak voor."
        ]
      },
      {
        "tekst": "> Dit is mijn persoonlijke reis geweest van vervelende lastpak en huilebalk naar tevreden HSP. Dankbaar gebruikmakend van mijn gekregen eigenschap en talent.\\- Lees het hele verhaal van Rixte Wisselo"
      },
      {
        "kop": "Oorzaken van hoogsensitiviteit"
      },
      {
        "tekst": "Hoogsensitiviteit is aangeboren. Een combinatie van genen bepalen dit. Mensen die hoogsensitief zijn verwerken de informatie grondiger en dieper dan mensen die niet hoogsensitief zijn."
      },
      {
        "tekst": "Het is belangrijk om te begrijpen dat hoogsensitiviteit geen stoornis is. Het is een eigenschap, die je naast alle andere eigenschappen kan hebben. Hoogsensitieve personen kunnen dan ook best verschillen. Kennis van hoogsensitiviteit helpt je jezelf beter te begrijpen en met je hooggevoeligheid om te leren gaan, zodat je je leven op een manier kunt leiden die bij je past en waarin je je comfortabel voelt."
      },
      {
        "kop": "Tips als je hoogsensitief bent"
      },
      {
        "tekst": "Je omgeving heeft veel invloed op je. Omring jezelf met positieve mensen en probeer negatieve situaties te veranderen waar dat mogelijk is. Goede zelfzorg is belangrijk: goed slapen, eten en bewegen, en neem genoeg rust. Zo kan je overprikkeling voorkomen, en als dat toch gebeurt, zorg dan voor goed herstel."
      },
      {
        "tekst": "MIND heeft nog meer tips en adviezen geschreven over de positieve kanten, maar ook over de uitdagingen van hoogsensitief zijn."
      },
      {
        "tekst": "Vraag de info gratis aan"
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/hoogsensitiviteit",
    "tips": [
      {
        "kop": "Krijg inzicht in jezelf",
        "blokken": [
          {
            "tekst": "Herken jij je in de beschrijving aan het begin van deze pagina? Of twijfel jij of je hoogsensitief bent? In dat laatste geval kan het helpen om een zelftest te doen op Hoogsensitief.NL."
          },
          {
            "tekst": "Onderzoek naar hoogsensitiviteit neemt de laatste jaren enorm toe. Er is steeds meer informatie over te vinden op internet en in boeken. Door erover te lezen, krijg je inzicht in wat hoogsensitiviteit inhoudt en hoe dit invloed op je leven heeft. Dit leert je jezelf beter te begrijpen en te bepalen wat jij nodig hebt voor een fijn leven. Helemaal als het je lukt het als kwaliteit te zien en de voordelen te gebruiken."
          },
          {
            "tekst": "Probeer hierbij op te letten dat de informatie die je leest van een betrouwbare bron komt. Helaas heeft niet iedereen voldoende kennis over dit onderwerp en is niet alles wat je leest waar."
          }
        ]
      },
      {
        "kop": "Omarm hoe je bent",
        "blokken": [
          {
            "tekst": "Veel mensen die hoogsensitief zijn, voelen zich anders dan anderen. Je kan je hierdoor onbegrepen voelen. Of onzeker, omdat jij een dag moet bijkomen van een feestje, terwijl iemand anders dat niet heeft. Maar wist je dat je echt niet de enige bent? Naar schatting zijn 1 op de 5 mensen hoogsensitief."
          },
          {
            "tekst": "Bedenk je bovendien dat iedereen anders is en dat je goed bent, zoals je bent. Ja, je bent gevoelig voor prikkels en dit kost je veel energie. Ook kan je erg geraakt worden door een kritische opmerking van een ander. Maar blijf altijd onthouden dat het een eigenschap is waar je vooral veel voor terugkrijgt. Zo kan je misschien wel intens genieten van muziek of natuur en word je gewaardeerd om je inlevingsvermogen. Probeer hiervan te genieten en jezelf niet te forceren om iemand te zijn die je niet bent. Kijk naar jezelf met je positieve en negatieve kanten, zonder oordeel. Jij mag er zijn!"
          }
        ]
      },
      {
        "kop": "Leef het leven dat bij je past",
        "blokken": [
          {
            "tekst": "Voor mensen die hoogsensitief zijn, is het erg belangrijk om een leven te leiden dat bij hen past. Doen ze dat niet, dan kost het veel energie. Door regelmatig even stil te staan bij een aantal vragen, kan je bij jezelf checken of je jouw juiste pad volgt. De volgende vragen helpen hierbij:"
          },
          {
            "lijst": [
              "Volg ik mijn eigen waarden of houd ik vooral rekening met wat mijn omgeving verwacht?",
              "Van welke dingen in mijn leven krijg ik energie en van welke dingen juist niet? Doe ik voldoende dingen waar ik energie van krijg?"
            ]
          },
          {
            "tekst": "Gebruik de antwoorden op deze vragen om te bepalen of je dingen moet aanpassen."
          },
          {
            "tekst": "Daarnaast is het goed om te kijken in wat voor omgeving jij je het beste voelt en hoe je je leven het liefst vormgeeft. Zo kan het zijn dat een drukke baan in een kantoortuin niet bij je past. Of dat je moeilijk je rust kan vinden in een woning midden in een stad. Heb je een jong gezin? Dan is het voor jou waarschijnlijk nog belangrijker dat je voldoende tijd voor jezelf neemt om op te laden."
          }
        ]
      },
      {
        "kop": "Zorg voor balans",
        "blokken": [
          {
            "tekst": "Als je hoogsensitief bent, ligt het gevaar op de loer dat je vaak overprikkeld bent en overbelast raakt. Helemaal in de huidige maatschappij, die snel gaat en veel prikkels met zich meebrengt. Luister daarom goed naar je lichaam en zorg voor balans."
          },
          {
            "tekst": "Je hebt balans als je voldoende herstelmomenten hebt ten opzichte van het aantal prikkels dat binnenkomt. Heb je bijvoorbeeld een bespreking voor je werk of een druk feestje, sta jezelf toe om daarna rust te pakken. Denk bijvoorbeeld aan een wandelingetje of even voor je uit staren zonder iets te hoeven. Het maakt niet uit wat, als jij er maar van oplaadt. Wat ook helpt, is om in je week voldoende oplaadmomenten in te bouwen. Het kan al een fijn gevoel geven als je weet dat je ‘s avonds naar sport of yoga gaat of in het weekend gaat wandelen in het bos."
          },
          {
            "tekst": "Met balans bedoelen we trouwens niet dat je altijd zoveel mogelijk prikkels moet vermijden. Los van dat dit niet altijd mogelijk is, hoeft het ook niet altijd erg te zijn. Als je maar voldoende tijd pakt om te herstellen."
          }
        ]
      }
    ],
    "gids": {
      "slug": "hoogsensitiviteit",
      "titel": "Hoogsensitiviteit",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/hoogsensitiviteit",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_hoogsensitief"
    }
  },
  {
    "slug": "telefoongebruik",
    "titel": "Je telefoon",
    "onderwerp": "Balans",
    "kort": "Je smartphone is handig, maar vraagt ook steeds je aandacht. Maar hoe beïnvloedt dat scherm in je hand eigenlijk je mentale gezondheid? Leer over de positieve, maar ook minder fijne effecten van smartphonegebruik, waarom je telefoon zo moeilijk weg te leggen is en wat je kan doen in plaats van je telefoon te gebruiken.",
    "meer": [
      {
        "tekst": "Je telefoon kan je veel goeds brengen. Het is een fijne manier om in contact met anderen te komen en steun of ontspanning te vinden. Maar het scherm in je hand kan je soms ook uit balans brengen. Zeker als je het vooral gebruikt om te ontsnappen aan verveling, stress of negatieve gevoelens."
      },
      {
        "lijst": [
          "Je blijft makkelijk in contact met anderen: Een appje, belletje of reactie op je post kan je het gevoel geven van verbinding.",
          "Je kan dingen snel of makkelijk regelen: Je kan bijvoorbeeld snel informatie vinden waarnaar je op zoek bent.",
          "Je vindt informatie en hulp als je die nodig hebt: Je kan snel iets opzoeken over hoe je je voelt, ervaringen van anderen lezen of zelfs hulpapps gebruiken. Dat verlaagt de drempel om hulp te zoeken.",
          "Je krijgt inzicht in hoe je je voelt: Er zijn apps waarmee je je stemming, slaap of stress bij kan houden. Dat kan je helpen om beter te begrijpen wat je nodig hebt.",
          "Je kan ontspannen op jouw manier: Even een spelletje, muziek luisteren, een podcast of meditatie-app, je telefoon kan ook helpen om tot rust te komen.",
          "Je blijft betrokken bij de wereld om je heen: Je volgt het nieuws, ontdekt nieuwe dingen of leert iets bij via je telefoon. Dat kan je gevoel van zingeving versterken.",
          "Je kan je somber of gestrest voelen: Als je veel op je telefoon zit zonder echt contact te maken (bijvoorbeeld omdat je alleen maar aan het scrollen bent), kan je je sneller down, gestrest of alleen voelen.",
          "Je slaapt minder goed: Het blauwe licht van je scherm en alle prikkels vlak voor het slapengaan kunnen ervoor zorgen dat je moeilijker in slaap valt of minder diep slaapt.",
          "Je aandacht is sneller weg: Meldingen en het steeds wisselen tussen apps kunnen je concentratie verstoren. Soms is alleen de aanwezigheid van je telefoon al genoeg om je af te leiden.",
          "Je gaat jezelf vergelijken met anderen: Op social media zie je vaak alleen de leuke kanten van het leven van anderen. Daardoor kan je het gevoel krijgen dat jij tekortschiet.",
          "Je kan te maken krijgen met online pesten: Als je online wordt gepest of buitengesloten, kan dat veel pijn doen. Het kan zorgen voor stress, verdriet en een gevoel van machteloosheid, zeker als het telkens terugkomt.",
          "Je ziet soms schokkende of nare beelden: Op social media of in het nieuws kan je onverwacht heftige dingen tegenkomen, zoals geweld of ongelukken. Zeker apps als TikTok of Instagram zijn zo ingesteld dat je onverwachte of schokkende dingen kan tegenkomen. Dat kan je raken en je somber of gespannen maken.",
          "Je leest veel slecht nieuws: Soms blijf je maar doorlezen over nare dingen in de wereld. Dat noemen we ook wel doomscrollen. Het lijkt alsof je meer grip krijgt, maar vaak maakt het je juist onrustig of somber."
        ]
      },
      {
        "tekst": "Uit onderzoek blijkt dat apps waar je vooral passief doorheen scrollt (zoals TikTok, Instagram of YouTube) vaker negatieve effecten hebben op je stemming. Maar apps waar je juist mee communiceert (zoals WhatsApp of Snapchat) kunnen je helpen om je meer verbonden te voelen. Het maakt dus echt uit wat je op je telefoon doet."
      },
      {
        "tekst": "Doe je ook mee?"
      },
      {
        "kop": "Waarom grijpen we zo vaak naar onze telefoon?"
      },
      {
        "tekst": "Kan jij je smartphone maar lastig links laten liggen? Je bent niet de enige! Wist je dat er maandelijks bijna 500 zoekopdrachten in Google zijn op het woord 'telefoonverslaving'? Maar hoe komt het nou dat onze telefoon zo verslavend voelt? We zetten een aantal oorzaken voor je op een rijtje."
      },
      {
        "tekst": "We gebruiken onze smartphones voor bijna alles: wekken, bellen, appen, shoppen, bankieren, video’s kijken, recepten zoeken, het nieuws volgen, spelletjes spelen, boeken lezen, noem maar op."
      },
      {
        "tekst": "Wist je dat apps en social media zo zijn gemaakt dat ze je aandacht vast blijven houden? Elke keer dat je een melding krijgt, een nieuw berichtje ziet, of een leuke post komt je beloningssysteem in je brein in actie: 'H é, dit is interessant of leuk .' Daardoor wil je vaker je smartphone pakken of blijf je doorgaan met scrollen."
      },
      {
        "tekst": "Je telefoon komt ook goed van pas in de lege momentjes dat je moet wachten, even niets te doen hebt of wilt ontspannen. Maar ook als je je gestrest, onrustig of niet fijn voelt, grijp je vaak naar je smartphone. Want je telefoon biedt meteen afleiding: je vlucht even weg met je aandacht uit het hier en nu. Ben jij op zoek naar alternatieven voor je telefoon? Hier geven we je tips en inspiratie voor alternatieven."
      },
      {
        "tekst": "Op sociale media wordt je nieuwsgierigheid steeds geprikkeld. Je blijft scrollen en swipen, op zoek naar nóg iets interessants. In de oertijd hielp nieuwsgierigheid ons overleven. We moesten goed letten op nieuwe prikkels: een ritsel in de bosjes of een nieuwe voedselbron. Nu zitten die prikkels niet meer in de natuur, maar in je broekzak - op je telefoon. Vooral negatief nieuws trekt onze aandacht, omdat je brein gevaar wil herkennen."
      },
      {
        "tekst": "Met FOMO (fear of missing out) wordt de angst om dingen te missen bedoeld. In de oertijd betekende iets missen en hierdoor uit de groep vallen misschien wel het einde. Nu check je je telefoon om zeker te weten dat je niets belangrijks mist. Wat gebeurt er in de groepsapp? Heeft iemand gereageerd? Omdat je nooit weet wanneer er iets gebeurt, blijf je je telefoon erbij pakken."
      },
      {
        "tekst": "We zijn sociale wezens. We willen erbij horen, contact voelen en begrip krijgen. Een reactie op je post, een appje van een vriend, een like op je foto, het voelt alsof je erbij hoort. Wachten of alleen zijn kan soms onbewust aanvoelen als een risico. Je telefoon helpt om dat gevoel te verzachten."
      },
      {
        "tekst": "Veel mensen zijn gewoontedieren: als je dingen op een bepaalde manier doet, dan wordt het een gewoonte. Je pakt je smartphone zonder erbij na te denken: op de wc, in de rij bij de kassa, in bed, tijdens het eten. En dat is vaak niet snel weer afgeleerd. Zeker als ze beloond worden met dat kleine shotje dopamine."
      },
      {
        "tekst": "Omdat we inmiddels bijna allemaal zo vergroeid zijn met onze telefoon, spreken we elkaar er nauwelijks meer op aan. Onze smartphones liggen naast ons bord met eten op tafel, we appen met iemand terwijl we in gesprek zijn met een ander en scrollen over onze socials tijdens een vergadering op het werk. Omdat we dit accepteren van elkaar, houden we elkaar hier ook niet in tegen."
      },
      {
        "kop": "Hoe weet je of je te veel op je telefoon zit?"
      },
      {
        "tekst": "Heb je het idee dat jij te veel op je telefoon zit? Als je meerdere signalen herkent, is het goed om stil te staan bij je smartphonegebruik:"
      },
      {
        "lijst": [
          "Je hebt moeite om je telefoon weg te leggen, ook als je dat eigenlijk wel wilt.",
          "Je checkt je telefoon automatisch, zonder dat je echt iets nodig hebt.",
          "Je voelt je onrustig, chagrijnig of angstig als je je telefoon niet bij je hebt.",
          "Je slaapt slechter doordat je laat op je telefoon zit of 's nachts wordt gestoord.",
          "Je gebruikt je telefoon om vervelende gevoelens te vermijden, zoals stress, verdriet of verveling.",
          "Je merkt dat je minder plezier hebt in dingen buiten je telefoon, zoals hobby’s of contact in het echt.",
          "Je denkt vaak aan je telefoon, zelfs als je hem niet gebruikt, je kijkt uit naar het moment dat je weer kunt scrollen.",
          "Je gebruikt je telefoon stiekem of liegt erover, bijvoorbeeld als anderen er iets van zeggen.",
          "Je omgeving spreekt je aan op je telefoongebruik, of je voelt je er zelf schuldig over."
        ]
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/telefoongebruik-en-mentale-gezondheid",
    "tips": [
      {
        "blokken": [
          {
            "tekst": "Neem een boek of tijdschrift mee als je op pad gaat. Of iets anders wat je leuk vindt om te doen en je er gemakkelijk bij pakt. Het kan ook een puzzelboekje zijn of haakwerkje zijn."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Knijp in een stressballetje of gebruik een fidget op de momenten dat je geneigd bent je telefoon te pakken. Neem het balletje ook mee in je tas, zodat je daarna kan grijpen, bijvoorbeeld in de trein of in de wachtkamer bij de tandarts."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Gebruik de navigatie van je auto in plaats die van op je telefoon. Of haal het stof van je tomtom en zet hem weer in de auto. Ben je lopend? Bekijk vooraf op je laptop naar je treinreis of zoek op een papieren routekaart uit waar je heen moet en schrijf dit op een papiertje. Raak je de weg even kwijt? Vraag het aan een voorbijganger. Wie weet levert het je ook nog een leuk praatje op."
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Kijk eens om je heen en observeer je omgeving. Waar ben je? Zit er iemand naast je? Wat zie je als je om je heen kijkt of valt je iets op in het landschap waardoor je heen reist? Of wat gebeurt er aan het tafeltje naast je in het restaurant? Wat zie je, ruik je en wat hoor je?"
          }
        ]
      },
      {
        "blokken": [
          {
            "tekst": "Knoop een gesprek aan met iemand die je tegenkomt. Dat hoeft niet gelijk een diepgaand en ingewikkeld gesprek te zijn. Je kan het hebben over de plek waar jullie zijn, het weer, of reageren op iets wat er op dat moment gebeurt."
          }
        ]
      }
    ]
  },
  {
    "slug": "mindfulness",
    "titel": "Mindfulness",
    "onderwerp": "Ontspanning",
    "kort": "Mindfulness, of aandachttraining, is het tegenovergestelde van leven op de automatische piloot. Je komt dichterbij je gevoel, zonder erover te oordelen of er direct gevolg aan te geven. Je accepteert de situatie zoals die is en krijgt zo de ruimte om problemen van een andere kant te bekijken. Door dit proces te trainen, leef je intenser en kun je makkelijker ontspannen.",
    "meer": [
      {
        "kop": "Voor wie is mindfulness?"
      },
      {
        "tekst": "Mindfulness is vooral goed voor mensen die blijven piekeren over het verleden of tobben over de toekomst. Mensen kunnen zo in beslag genomen worden door hun verleden of de toekomst dat ze ‘vergeten’ om in het ‘hier en nu’ te leven. Daar probeert mindfulness verandering in te brengen."
      },
      {
        "tekst": "Onderzoek heeft uitgewezen dat mindfulness het risico op terugval bij depressie kan verminderen. Ook kan mindfulness angsten beter hanteerbaar maken. Mindfulness heeft niet bij iedereen hetzelfde positieve effect. Als je negatieve effecten ervaart, win dan advies in bij een specialist."
      },
      {
        "kop": "Welke soorten mindfulness zijn er?"
      },
      {
        "lijst": [
          "Mindfulness vindt zijn oorsprong in het boeddhisme.",
          "In 1979 heeft de Amerikaan Jon Kabat-Zinn als eerste een acht weken durende training ontwikkeld: Mindfulness Based Stress Reductie (MBSR).",
          "In de geestelijke gezondheidszorg gebruiken sommige therapeuten MBCT: Mindfulness Based Cognitieve Therapie. MBCT combineert elementen van meditatietechnieken met onderdelen uit de cognitieve therapie. Uit onderzoek blijkt dat MBCT een effectieve behandelmethode is voor mensen met terugkerende depressies.",
          "Bij cognitieve therapie is het doel negatieve gedachten om te zetten naar helpende gedachten. In de MBCT training leer je negatieve gedachten of gevoelens te accepteren zoals ze zijn, in plaats van deze ervaringen te vermijden of onderdrukken. Je leert de aandacht anders te richten, zodat negatieve gedachten niet gaan overheersen."
        ]
      },
      {
        "tekst": "> Het is een moment waarop ik stil sta bij mezelf, even de ‘stand’ opneem waarin ik verkeer. Veel mensen zien mindfulness als zweverig, maar dat is het voor mij beslist niet! Ik ben daar ook te nuchter voor. Voor mij is het een soort graadmeter waarop ik kan zien hoe ik in mijn vel zit. Ben ik tijdens de oefeningen snel afgeleid, dwalen mijn gedachten vaak af, dan weet ik dat ik te veel aan mijn hoofd heb. Tijd om maatregelen te nemen en het een beetje rustiger aan te doen. - Lees het hele verhaal van Jacques"
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/mindfulness",
    "tips": [
      {
        "kop": "Hoe mindfulness kan helpen bij klachten",
        "blokken": [
          {
            "tekst": "Mindfulness richt zich ook op het accepteren en onder ogen zien van problemen of klachten. Een milde, niet oordelende houding biedt ruimte om hier op een andere manier mee om te gaan. Hierdoor gaan ze een minder grote rol spelen in je leven. Dit is de paradox van mindfulness: controle krijgen over de problemen of klachten zonder te proberen ze onder controle te krijgen, maar door ze er juist te ‘laten zijn’. Mindfulness kan hierdoor helpend zijn als je last hebt van psychische problemen, maar ook als je bijvoorbeeld veel piekert."
          }
        ]
      },
      {
        "kop": "4 korte oefeningen of 1 lange",
        "blokken": [
          {
            "tekst": "Mindfulness kan je op veel momenten in je dagelijks leven gebruiken. Juist als je druk bent, is het belangrijk af en toe terug te schakelen, te beseffen waar je bent en bewust aandacht te hebben. Hieronder vind je vier korte oefeningen waarbij je afwisselend één minuut aandacht hebt voor je ademhaling, gedachten en gevoelens, zintuigen en lichaam. Je kan de losse oefeningen ook achter elkaar doorlopen en ze samenpakken als één oefening. Hoewel je de oefeningen zelfs tijdens het tandenpoetsen kan doen, raden we je aan hiervoor even met aandacht te gaan zitten of liggen. Als je dat fijn vindt, kan je jouw ogen dicht doen."
          },
          {
            "tekst": "Richt je aandacht op je ademhaling. Verander je ademhaling niet. Neem simpelweg waar hoe je ademhaling in- en uitstroomt. Als je aandacht afdrijft, is dat niet erg. Zo werkt de menselijke geest. Maar breng daarna de aandacht terug bij de ademhaling."
          },
          {
            "tekst": "Bestudeer je gedachten met aandacht, maar zonder oordeel. Toon interesse voor wat je denkt en voelt en laat het daarna los. Zie gedachten en gevoelens als wolken die voorbijdrijven. Sommige wolken zijn donker en bezorgen een slecht gevoel. Probeer dat niet erg te vinden. Alle wolken drijven uiteindelijk voorbij."
          },
          {
            "tekst": "Merk op wat je zintuigen je te vertellen hebben. Proef, kijk, voel en luister. Probeer dingen te ervaren alsof je ze voor het eerst ervaart."
          },
          {
            "tekst": "Ervaar je lichaam bewust. Neem de tijd om je lichaam te voelen. Loop daarbij je hele lijf door. Begin onderaan bij je voeten en ga geleidelijk naar je hoofd toe. Hoe is het met je linkervoet, je onderbeen, enzovoorts. Voelt het gespannen of ontspannen, ervaar je pijn of ongemak? Sla geen stukje over. Probeer niets te veranderen, maar sta stil bij wat je ervaart. Deze oefening noemen we ook wel de bodyscan."
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Mindfulness oefening van één minuut",
      "blokken": [
        {
          "tekst": "Hieronder volgt een beschrijving van een oefening. We snappen dat het lastig is om tegelijk te lezen en de oefening te doen. Lees de oefening daarom eerst een paar keer door, zodat je weet wat je moet doen. Vind je een audio-opname fijner? Bekijk dan onze tips onderaan deze pagina."
        },
        {
          "lijst": [
            "Ga rechtop zitten op een stoel met een rechte rugleuning. Breng je rug iets naar voren als dat kan, zodat je wervelkolom vrij blijft en niet tegen de rugleuning rust. Je voeten kan je plat op de grond laten rusten. Vind je het fijner om te liggen? Dat kan ook, zolang je maar actief blijft en niet in slaap valt. Doe je ogen dicht of sla ze neer.",
            "Richt je aandacht op je adem, zoals die in en uit je lichaam stroomt. Blijf in contact met wat je voelt bij iedere inademing en uitademing.",
            "Observeer je adem zonder te verwachten dat er iets bijzonders gebeurt. Het is niet nodig je ademhaling op wat voor manier dan ook te veranderen.",
            "Na een poosje kunnen je gedachten afdwalen. Als je dit merkt, breng dan je aandacht rustig terug naar je ademhaling, zonder jezelf ook maar iets te verwijten. Het besef dat je gedachten afdwalen en het weer terugbrengen van je aandacht zonder jezelf te bekritiseren, is een belangrijk onderdeel van mindfulness meditatie.",
            "Je kan je kalm gaan voelen, of niet. Ervaar je een gevoel van stilte, verdriet of irritatie? Wat je ook voelt, laat het gewoon gebeuren. En merk op dat het weer voorbijgaat.",
            "Doe na een minuut je ogen weer open en neem de kamer weer in je op. Als je dat fijn vindt, dan kan je de oefening afsluiten door twee keer diep in te ademen door je neus en uit te ademen door je mond."
          ]
        },
        {
          "tekst": "Deze oefening is gebaseerd op een oefening uit het boek: Mindfulness; Een praktische gids om rust te vinden in een hectische wereld. Mark Williams en Danny Penman (2011)."
        }
      ]
    },
    "gids": {
      "slug": "mindfulness",
      "titel": "Mindfulness",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mindfulness",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_mindfulness"
    }
  },
  {
    "slug": "ontspanningsoefeningen",
    "titel": "Ontspannen",
    "onderwerp": "Ontspanning",
    "kort": "Ontspanning is nodig om je lichaam en geest te laten herstellen van inspanning. Je kan veel meer aan als je tussendoor ontspant. Je gaat makkelijker om met stress, werk en de eisen die aan je gesteld worden. Waar ontspan jij van? Voor de één is ontspanning uitgaan met vrienden, voor de ander is dat een avond series kijken. En weer een ander vindt vooral ontspanning door te sporten.",
    "meer": [
      {
        "kop": "Moeite met ontspannen?"
      },
      {
        "tekst": "Soms lukt het even niet om tot rust te komen. Of je nu stress ervaart, piekert, slecht slaapt of gewoon behoefte hebt aan een korte mentale pauze: deze oefeningen zijn een makkelijke manier om meer rust in je dag te brengen of vlak voordat je gaat slapen."
      },
      {
        "kop": "Kijken en luisteren"
      },
      {
        "tekst": "In deze video neemt psycholoog en yoga docent Ayra je stap voor stap mee in een kalmerende ontspanningsoefening van ongeveer 15 minuten. Een fijn moment om spanning los te laten en weer contact te maken met je ademhaling en lichaam."
      },
      {
        "kop": "Luisteren"
      },
      {
        "tekst": "In deze luisteroefeningen neemt MIND-psycholoog Lidewy Hendriks je op een zachte, heldere manier mee in twee eenvoudige ontspanningsoefeningen. Je hebt alleen een rustige plek en een paar minuten voor jezelf nodig."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/ontspanningsoefeningen",
    "tips": [
      {
        "kop": "Snelle ontspanning: kijk om je heen",
        "blokken": [
          {
            "tekst": "Je hoeft niet altijd op een rustige plek te zijn om even te ontspannen. Ook midden op de dag, in de trein of op je werk kan je even tot rust komen."
          },
          {
            "lijst": [
              "Zoek een plekje waar je comfortabel zit of staat.",
              "Kijk om je heen: wat zie je, wat hoor je, wat gebeurt er?",
              "Probeer er met een vriendelijke blik naar te kijken, zonder te oordelen.",
              "Geniet van dit korte moment dat je even kan kijken en niet mee hoeft te doen."
            ]
          }
        ]
      },
      {
        "kop": "Ontspan je hoofd en nek",
        "blokken": [
          {
            "tekst": "Hoofd- en nekspanning komt vaak voor. Deze oefening helpt je spieren los te laten."
          },
          {
            "lijst": [
              "Leg één hand in je nek, net onder je schedel.",
              "Leg je andere hand op je voorhoofd.",
              "Trek je hoofd zachtjes omhoog, zodat je nekspieren even minder druk voelen.",
              "Laat je armen ontspannen en adem rustig door.",
              "Doe dit ongeveer 5 minuten."
            ]
          }
        ]
      },
      {
        "kop": "Ontspannen door te bewegen",
        "blokken": [
          {
            "tekst": "Bewegen helpt goed tegen stress en spanning. Het verlaagt de spierspanning en geeft je hersenen het signaal dat ze mogen ontspannen. Ook maakt je lichaam tijdens het bewegen endorfine aan: een stofje dat helpt om je beter te voelen."
          },
          {
            "lijst": [
              "Kijk hier voor onze tips over bewegen"
            ]
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Ontspan je gezicht",
      "blokken": [
        {
          "tekst": "In je gezicht kan veel spanning zitten. Met een korte gezichtsmassage kun je die spanning loslaten."
        },
        {
          "lijst": [
            "Strijk met je vingertoppen stevig over je wenkbrauwen, van je voorhoofd naar achteren.",
            "Wrijf daarna zachtjes aan beide kanten van je neusbrug en rond je ogen.",
            "Adem rustig in en uit terwijl je masseert."
          ]
        }
      ]
    }
  },
  {
    "slug": "grenzen-stellen",
    "titel": "Grenzen stellen",
    "onderwerp": "Grenzen",
    "kort": "Soms doet iemand iets wat je niet prettig vindt. De ander gaat over je grenzen. Wanneer je grenzen stelt, maak je duidelijk wat je wel en niet wilt.",
    "meer": [
      {
        "tekst": "Veel mensen vinden het moeilijk om hun grenzen aan te geven. Maar het is belangrijk om je grenzen te bewaken. Hierdoor weet de ander, maar ook jijzelf beter waar jullie aan toe zijn. De ander kan hier rekening mee houden. En als jij weet waar je grenzen liggen, helpt je dit niet te veel van jezelf te eisen."
      },
      {
        "tekst": "Maar je grenzen aangeven betekent niet dat jij geen rekening meer met de ander hoeft te houden. Soms kan je beter overleggen dan een duidelijke grens trekken. Als je op je werk bijvoorbeeld nooit wat van een ander over wil nemen tijdens een vakantie, zullen collega's dat ook niet voor jou meer willen doen. En als je steeds afspraken met familie of vrienden afzegt, omdat je tijd voor jezelf nodig hebt, zal je merken dat ze je steeds minder vaak zullen vragen."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/grenzen-stellen",
    "tips": [
      {
        "kop": "Leer jouw grenzen kennen",
        "blokken": [
          {
            "tekst": "Het ligt misschien voor de hand, maar je kan geen grenzen stellen als je jouw grenzen niet kent. Het is dus belangrijk om voor jezelf na te gaan waar jouw grenzen liggen. Gevoelens van boosheid, irritatie en verdriet kunnen een signaal zijn dat ze zijn overschreden. Wees je bewust van deze gevoelens. En sta stil bij wat er aan deze gevoelens voorafging. Had je het idee dat de ander te weinig rekening hield met jouw behoeften? En op welk punt precies had je het idee dat jouw grens werd overschreden? Schrijf je gedachten hierover op. Door je ervaringen in kaart te brengen zal je in de loop van de tijd steeds duidelijker aanvoelen waar jouw grenzen liggen."
          }
        ]
      },
      {
        "kop": "Leer jouw grenzen aangeven",
        "blokken": [
          {
            "tekst": "Veel mensen vinden het moeilijk om hun grenzen duidelijk aan te geven, maar het valt zeker te leren. Je kan ervoor kiezen om ze te stellen op het moment dat ze overschreden worden. Ook kan je altijd op een later moment terugblikken naar een situatie waarin ze overschreden werden. Door jouw grenzen aan te geven zorg je ervoor dat de ander weet waar die aan toe is met je. Bovendien kan een ander jouw gedachten niet lezen: als jij niet aangeeft als iemand eroverheen gaat, heeft de ander het misschien niet eens door."
          },
          {
            "tekst": "Bedenk van tevoren hoe strak jij de grens wil trekken. Wil je bijvoorbeeld nooit meer werk overnemen, of wil je vooral aangeven dat je dit graag eerst bespreekt? Ga je nu alle afspraken door de week afzeggen, omdat je dit te vermoeiend vindt of maak je een uitzondering voor familie en goede vrienden? Bedenk je dat je grenzen aangeven altijd gevolgen heeft. In sommige gevallen is het beter om een duidelijke lijn te trekken. En in andere gevallen kan het helpen om samen te kijken wat past binnen jouw grenzen, maar ook binnen die van een ander."
          }
        ]
      },
      {
        "kop": "Kies een goed moment",
        "blokken": [
          {
            "tekst": "Het is belangrijk een goed moment te kiezen. Wanneer je kookt van woede of bijna moet huilen, kan je beter even wachten met je grens duidelijk maken. Heftige emoties maken het lastig om helder te verwoorden wat je vindt en wil. Bovendien schrikt het de ander waarschijnlijk af, waardoor je ook niet de reactie krijgt waarop je hoopt. Dit betekent niet dat je jouw boosheid altijd maar moet inslikken om de lieve vrede te bewaren, maar het is wel fijner om iets kalmer te zijn voordat je het gesprek aangaat. Daarnaast is het handig om je grens onder vier ogen aan te geven. Dan is het makkelijker om een vertrouwelijk gesprek te hebben en zal de ander zich minder snel aangevallen voelen."
          }
        ]
      },
      {
        "kop": "Let op je houding",
        "blokken": [
          {
            "tekst": "Vergeet ook je houding niet. Misschien ben je op zoek naar de juiste woorden en kijk je daardoor de ander niet aan. Of vind je het spannend, waardoor je naar de grond kijkt. Je boodschap komt veel beter aan als je de ander in de ogen kijkt. Daarmee geef je aan dat je staat voor wat je zegt. En het is moeilijker te negeren door de ander. Je woordkeuze, toon, houding en gezichtsuitdrukking versterken elkaar. Probeer daar op te letten en tegenstrijdigheden te voorkomen: zeg bijvoorbeeld niet dat je boos bent met een glimlach op je gezicht."
          }
        ]
      },
      {
        "kop": "Oefen",
        "blokken": [
          {
            "tekst": "Je wordt steeds beter in grenzen aangeven wanneer je er aandacht aan geeft en oefent. Oefening baart kunst. Je kan voor de spiegel oefenen of met een goede vriend in de vorm van een rollenspel. Als dit niet voldoende werkt, kan je ook een training volgen. Tijdens trainingen op het gebied van bijvoorbeeld assertiviteit of stressbestendigheid leer je om grenzen te stellen. Vind jij het lastig om nee te zeggen? Wij schreven ook een oefening en tips om vaker nee te zeggen."
          }
        ]
      }
    ],
    "gids": {
      "slug": "grenzen-stellen",
      "titel": "Grenzen stellen",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/grenzen-stellen",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_grenzen_stellen"
    }
  },
  {
    "slug": "nee-zeggen",
    "titel": "Nee zeggen",
    "onderwerp": "Grenzen",
    "kort": "We hebben allemaal een eigen manier waarop we omgaan met sociale situaties. De manier waarop je aangeeft wat je van iets of iemand vindt, wat je wilt, wat je nodig hebt van een ander of wat je juist niet wilt. Er zijn drie verschillende manieren. In welke herken jij je het meest?",
    "meer": [
      {
        "kop": "Sub-assertief"
      },
      {
        "tekst": "Sub-assertieve mensen durven niet of nauwelijks voor zichzelf op te komen. Je helpt vooral anderen. Je houdt te weinig rekening met jezelf en komt daardoor ook vaak tekort in situaties met anderen. Je voelt je ook eerder slachtoffer van je omgeving dan een speler. Dit betekent ook dat je vaak veel opkropt. Het risico: stressklachten en overbelasting."
      },
      {
        "kop": "Agressief"
      },
      {
        "tekst": "Agressieve mensen walsen makkelijk over anderen heen, zonder dat soms zelf in de gaten te hebben. Ze komen uit voor wat ze zelf willen of wat ze van iets vinden zonder rekening te houden met de gevolgen voor de ander. Soms is er sprake van de ander kleineren, soms de ander in de hoek drukken. Net als sub-assertiviteit heeft deze manier negatieve gevolgen. Het lokt veel afwijzende reacties op en leidt snel tot conflicten en uitsluiting. Ofwel: je maakt er geen vrienden mee en het leidt tot ongezonde stress."
      },
      {
        "kop": "Assertief"
      },
      {
        "tekst": "Kenmerkend voor een echt assertieve houding:"
      },
      {
        "lijst": [
          "Je komt op voor jezelf op een directe, open en redelijke manier door uiting te geven aan wat je voelt, denkt, wilt en niet wilt",
          "Je durft je gevoelens en kwetsbaarheid te tonen",
          "Je voelt je verantwoordelijk voor jezelf",
          "Je gaat conflicten niet uit de weg"
        ]
      },
      {
        "tekst": "Maar je blijft bij dit alles tegelijkertijd rekening houden met de gevolgen ervan voor de ander. Je laat de ander in zijn of haar waarde en respecteert de behoeften en wensen van die persoon. Mensen die zich assertief gedragen en opstellen zullen minder last hebben van stress."
      }
    ],
    "bron": "https://wijzijnmind.nl/psychische-klachten/psychipedia/assertiviteit",
    "tips": [
      {
        "kop": "Houd je aan deze uitgangspunten bij een verzoek",
        "blokken": [
          {
            "tekst": "Als iemand een verzoek aan je doet, bedenk je dan eerst wat de uitgangspunten zijn bij het stellen van een verzoek. Namelijk:"
          },
          {
            "lijst": [
              "Je mag nee zeggen op een verzoek! Het is niet voor niets een ‘verzoek’.",
              "Je mag weigeren zonder het geven van een reden of verklaring. Soms gaat je reden de ander ook helemaal niet aan."
            ]
          }
        ]
      },
      {
        "kop": "Neem bedenktijd",
        "blokken": [
          {
            "tekst": "Train jezelf om bedenktijd te vragen. Of je er nou direct ja of nee bij denkt of niet. Bepaal wat voor jou een fijn zinnetje is, bijvoorbeeld: \"Ik ga hier even over nadenken en kom er morgen bij je op terug, ok?\" Het is wel belangrijk om direct af te spreken wanneer je je reactie laat weten. De bedenktijd geeft je de mogelijkheid om te bedenken wat je echt wil en om af te wegen: als ik hier ja tegen zeg, waar zeg ik dan nee tegen? Wat levert het mij op als ik ja zeg? Of wat levert het mij juist op als ik nee zeg?"
          }
        ]
      },
      {
        "kop": "Let op de manier waarop je nee zegt",
        "blokken": [
          {
            "tekst": "Als je nee wil zeggen, kan je dat het beste als volgt doen:"
          },
          {
            "lijst": [
              "Zeg het op een vriendelijke, maar besliste manier.",
              "Kijk de ander aan.",
              "Zeg altijd eerst nee en geef daarna pas je eventuele uitleg of voorstel wat wel kan. Dus niet andersom. Draai er niet omheen. Dat is het meest duidelijk voor de ander.",
              "Bedenk je goed dat een reden noemen een opening tot discussie biedt.",
              "Als je ervoor kiest uitleg te geven, houd het dan kort.",
              "Als iemand blijft aandringen, is het soms goed om je gevoelens daarover te benoemen. Bijvoorbeeld: \"Ik vind het vervelend dat…\"",
              "De ander kan teleurgesteld reageren. Probeer daar de mogelijkheid voor te bieden en toon hiervoor begrip."
            ]
          }
        ]
      },
      {
        "kop": "Gebruik de ‘kapotte grammofoonplaattechniek'",
        "blokken": [
          {
            "tekst": "Deze methode is goed om te gebruiken als je nee zegt, maar de ander blijft aandringen. Het enige dat je doet is nee blijven zeggen en jouw uitleg herhalen. Dit wordt ook wel de kapotte grammofoonplaattechniek genoemd. Vooral vroeger luisterden veel mensen naar grammofoonplaten, waarbij het regelmatig voor kwam dat de plaat op een kapot stukje bleef hangen. Met deze techniek laat je je niet ompraten of verleiden tot een discussie of excuses. Probeer het eens bewust uit. Blijf herhalen: \"Nee, het spijt me, daar heb ik geen tijd voor.\", \"Nee, zoals ik al zei, daar heb ik echt geen tijd voor.\""
          }
        ]
      },
      {
        "kop": "Bedenk: Een keer nee zeggen mag écht!",
        "blokken": [
          {
            "tekst": "Je kan ervan uitgaan dat mensen het niet erg vinden als je een keertje nee zegt. Vooral als je al heel vaak voor anderen klaarstaat. Ze zullen hooguit de eerste keer verbaasd zijn, omdat ze het niet van je gewend zijn. Durf het uit te proberen!"
          }
        ]
      }
    ],
    "oefening": {
      "kop": "Oefening",
      "blokken": [
        {
          "tekst": "Wil je vaker nee zeggen? Start eens met onderstaande oefening:"
        }
      ]
    },
    "gids": {
      "slug": "nee-zeggen",
      "titel": "Nee zeggen",
      "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/nee-zeggen",
      "aanmeld": "https://formulier.wijzijnmind.nl/flyer_nee_zeggen"
    }
  }
];
