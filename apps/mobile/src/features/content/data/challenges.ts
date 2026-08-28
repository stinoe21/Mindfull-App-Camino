// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/challenges/PROGRAMMAS.md en de
// dagpagina's. Opnieuw genereren: node <scratchpad>/gen-content.mjs
// De intro is de eerste echte alinea NA het navigatieblok "Ga snel naar:",
// zonder kopjes, lijsten, afbeeldingen en bijschriften (fix van 28 augustus
// 2026; daarvoor stond bij zestien onderdelen het navigatiefragment zelf).
//
// LET OP (open vraag aan MIND, zie content/mind/LEESMIJ.md): de dagpagina's
// zijn bedoeld als mailreeks na aanmelding. Hier staat per dag alleen de titel
// en de intro-alinea, met de aanmeldpagina erbij; of de volledige inhoud in de
// app mag, is een besluit van MIND en staat nog niet in docs/scope.md.

export type ChallengeDag = { titel: string; intro: string };
export type Challenge = {
  slug: string;
  naam: string;
  soort: "challenge" | "themaspecial";
  aanmeld?: string;
  dagen: ChallengeDag[];
};

export const CHALLENGES: Challenge[] = [
  {
    "slug": "beter-slapen-challenge",
    "naam": "Beter Slapen challenge",
    "soort": "challenge",
    "aanmeld": "https://formulier.wijzijnmind.nl/slaapchallenge_2022",
    "dagen": [
      {
        "titel": "Check je slaapplek",
        "intro": "Voor veel mensen met slaapproblemen zijn de slaapkamer en het bed geen plekken waar ze naar uitkijken. Geldt dit voor jou ook? Je slaapkamer moet (weer) een fijne, comfortabele plek zijn. Neem daarom eens even de tijd om je slaapkamer te checken. Vind jij het een fijne plek? Zo niet, wat zou je kunnen veranderen om er wel een fijne plek van te maken? Een plek waarnaar je ’s avonds verlangt in plaats van waar je tegenop ziet?"
      },
      {
        "titel": "Verander je denken",
        "intro": "Als je moeilijk in slaap komt, kan het helpen om te ontdekken welke gedachten jij precies hebt wanneer je niet kunt slapen. En om deze gedachten, wanneer ze niet-helpend of negatief blijken te zijn, te veranderen. Als jij wakker ligt, wat gaat er dan door je heen? Welke gedachten heb je dan? "
      },
      {
        "titel": "Zorg voor regelmaat en een slaapritueel",
        "intro": "Als je moeilijk in slaap valt ’s avonds raden we je aan om heel bewust aan de slag te gaan met het afbouwen van je activiteitenniveau en een slaapritueel in te voeren. Een slaapritueel bestaat uit een aantal vaste gewoonten die je dagelijks uitvoert voor het slapen gaan."
      },
      {
        "titel": "Ontspan!",
        "intro": "Om ontspannen naar bed te kunnen gaan, is het belangrijk dat je gedurende de dag momenten van ontspanning hebt. Wat ontspant jou?"
      },
      {
        "titel": "Accepteer het wakker liggen",
        "intro": "Als je lang wakker ligt is het soms moeilijk om niet gefrustreerd te raken. Door je te focussen op geluiden die je hoort, dingen die je voelt of die je ruikt, zijn je hersenen met iets anders bezig dan piekergedachten. Door niet te oordelen over de situatie en de situatie te accepteren zoals deze is, val je makkelijker in slaap. "
      }
    ]
  },
  {
    "slug": "chill-je-moet-al-zoveel-challenge",
    "naam": "Chill, je moet al zoveel challenge",
    "soort": "challenge",
    "aanmeld": "https://formulier.wijzijnmind.nl/chill_je_moet_al_zoveel",
    "dagen": [
      {
        "titel": "Fouten maken mag; het hoeft niet perfect!",
        "intro": "De juiste studie of (bij)baan, perfecte looks en social posts en iedereen die jou aardig vindt. Fouten maak je niet, want dat voelt als falen en dat doe jij niet! Je denkt nu waarschijnlijk: ‘Doe normaal, dit is niet haalbaar?!’ Toch hebben veel mensen het gevoel hieraan te moeten voldoen. We leven in een maatschappij die gericht is op prestatie en waarin we weinig ruimte voelen om fouten te maken. We voelen ons verantwoordelijk voor ons eigen geluk door de keuzes die we maken. Hierdoor zijn we in gedachten continu met onze toekomst bezig. ‘Wat als...?!.’ En gaan we overpresteren om ervoor te zorgen dat het gaat lukken. ‘Ik moet en ik zal!’ Dit alles bij elkaar brengt zoveel druk met zich mee, dat het wel heel lastig is om niet te veel stress te ervaren."
      },
      {
        "titel": "Durf te kiezen!",
        "intro": "De hele dag maak je keuzes. Vaak zijn dit simpele keuzes, zoals wat je op je brood smeert, welke kleren je aantrekt of wat je gaat kijken op Netflix. Bij de meeste keuzes sta je niet echt stil. Maar er zijn ook keuzes die net even wat meer van je vragen, zoals waar je heen gaat op vakantie. Of naar welk feestje je gaat als er 3 zijn op 1 avond, terwijl je daarvoor nog moet werken of studeren. En dan zijn er nog de keuzes die behoorlijk wat stress kunnen veroorzaken. We worden tegenwoordig overspoeld met mogelijkheden en kansen en dat maakt het maken van een keuze er niet makkelijker op. Hoe maak je bijvoorbeeld een keuze uit honderden studies? Of beslis je welke baan het beste bij je past? En hoe bepaal je waar je gaat wonen? Hoe groter de consequenties zijn van je keuze, hoe meer keuzestress jij ervaart. En als je niet kiest is dat eigenlijk ook een keuze…"
      },
      {
        "titel": "Face the fear of missing out!",
        "intro": "We appen met vrienden terwijl we met iemand op het terras zitten en scrollen door onze socials op de wc. We zijn voortdurend online en staan continu ‘aan’. Hoe kan dat ook anders als zelfs de informatie van je opleiding of baan via je telefoon binnenkomt? En socials ontwikkeld zijn om je zo lang mogelijk te laten blijven? Je telefoon even wegleggen is daardoor ontzettend moeilijk, want wat heb je dan allemaal wel niet gemist? "
      },
      {
        "titel": "Leer omgaan met teleurstellingen",
        "intro": "Iedereen krijgt te maken met grote en kleine teleurstellingen in het leven. Zo kan het lastig zijn een huis te krijgen, begrijpen jouw ouders je misschien niet altijd en kunnen keuzes verkeerd uitpakken. Niet alles is maakbaar en dingen lopen zoals ze lopen. Toch is dit soms best lastig om mee om te gaan. Helemaal als je het gevoel hebt dat je alles uit het leven moet halen en je eigenlijk het merendeel van de tijd gelukkig zou moeten zijn."
      },
      {
        "titel": "Zorg voor balans",
        "intro": "Door de druk om te presteren verliezen we onszelf soms uit het oog. We gaan maar door en dit zorgt ervoor dat de balans verstoord raakt tussen dingen die energie vragen en energie geven. Dit terwijl deze balans heel belangrijk is om zowel lichamelijk als mentaal gezond te blijven. Heb jij een goede balans? Hoe zorg jij ervoor dat je voldoende ontspant en beweegt? En hoe verbind jij je met de mensen om je heen?"
      }
    ]
  },
  {
    "slug": "minder-stress-challenge",
    "naam": "Minder Stress Challenge",
    "soort": "challenge",
    "aanmeld": "https://formulier.wijzijnmind.nl/minderstress_062021",
    "dagen": [
      {
        "titel": "Herken jouw stress",
        "intro": "Iedereen ervaart wel eens stress. Om ervoor te zorgen dat stressvolle momenten in jouw leven niet leiden tot ongezonde stress, beginnen we vandaag bij de basis: het herkennen van stress. Waaraan merk jij dat je stress hebt?"
      },
      {
        "titel": "Ontspan",
        "intro": "Om ongezonde stress te voorkomen, moet je de dingen die je moeite kosten genoeg afwisselen met ontspannende dingen. Doe je dat niet, dan krijg je lichamelijk en mentaal niet de tijd om bij te komen. Dan stapelen spanning en vermoeidheid zich op en kan het je te veel worden. Toch lukt het veel mensen niet om echt de tijd te nemen om te ontspannen. Daarom geven we vandaag een les in ontspannen."
      },
      {
        "titel": "Slim omgaan met je tijd",
        "intro": "Heb jij altijd het gevoel tijd tekort te komen? Je kan leren om je tijd beter in te delen. Dat helpt je om rust te houden en geeft je handvatten om je minder door anderen te laten leiden. Vandaag krijg je een opdracht en drie tips om beter met je tijd om te kunnen gaan."
      },
      {
        "titel": "Stel grenzen en zeg nee",
        "intro": "Vind jij het lastig om je grenzen aan te geven en ‘nee’ te zeggen? Dan kan dat veel stress geven. Een keertje is natuurlijk niet zo erg, maar als dit vaak gebeurt dan is het belangrijk dat je voor jezelf opkomt en dat je kan zeggen wat je wil of juist niet wil. Dit noemen we ook wel assertiviteit. Hierdoor weten anderen waar ze aan toe zijn."
      },
      {
        "titel": "Werk aan je leefgewoonten",
        "intro": "Gezonde gewoonten maken je sterker en minder gevoelig voor stress. Daarom is het goed om af en toe stil te staan bij je leefstijl en wat je kan verbeteren. Vandaag ga je aan de slag met een gewoonte die je wilt veranderen."
      },
      {
        "titel": "Verander je gedachten",
        "intro": "Pieker jij veel en heb je vaak negatieve gedachten? De kans is groot dat jij veel stress ervaart. Vandaag krijg je opdrachten om piekeren aan te pakken en negatieve gedachten te vervangen door helpende gedachten."
      },
      {
        "titel": "Leef in het moment en accepteer teleurstellingen",
        "intro": "Mindfulness gaat over leven met aandacht. Door je aandacht volledig te richten op het hier en nu, leef je minder op de automatische piloot en geef je jezelf rust. Je bent bewust bezig met wat je ziet, hoort en voelt, zonder er direct iets mee te hoeven doen. Je hersenen zijn dan niet meer bezig met wat je allemaal nog wil of moet doen."
      }
    ]
  },
  {
    "slug": "aandacht-voor-angst",
    "naam": "Aandacht voor Angst",
    "soort": "themaspecial",
    "aanmeld": "https://formulier.wijzijnmind.nl/aanmelden_aandacht_voor_angst",
    "dagen": [
      {
        "titel": "Krijg inzicht in angst",
        "intro": "We kunnen ons allemaal wel een situatie indenken waarin we bang voor iets waren. Bijvoorbeeld toen je een examen moest afleggen of toen je in een gevaarlijke verkeerssituatie terecht kwam. Angst is een hele normale en gezonde reactie op (dreigend) gevaar. Het zorgt ervoor dat je extra alert bent en in actie komt; dat je vecht of vlucht. Angst is dan ook een hele oude emotie. Toen mensen vroeger in het wild leefden was het van levensbelang dat iemand vluchtte op het moment dat hij of zij een beer of wolf tegenkwam."
      },
      {
        "titel": "Neem je angstgedachten onder de loep",
        "intro": "Angst heeft alles te maken met je gedachten. Vaak zijn dit angstige gedachten gericht op de toekomst (wat als…). Deze angstige gedachten leiden tot een angstig gevoel en bepaald gedrag. Zie het figuur hieronder. Een voorbeeld: Je hebt gedurende de dag allerlei gedachten wat er allemaal mis zou kunnen gaan thuis en op je werk, je voelt je hierdoor angstig en je raakt vermoeid en onrustig, je kan je slechter concentreren en je gedraagt je geprikkeld naar je omgeving. Met als gevolg dat je steeds minder dingen aanpakt. Of je hebt gedachten dat andere mensen negatief over je denken. Dit maakt je bang voor sociale situaties en vervolgens ga je deze situaties vermijden. Met als gevolg dat je nog banger wordt voor sociale situaties."
      },
      {
        "titel": "Ga je angst niet uit de weg",
        "intro": "De onderstaande cirkel herken je vast nog van de vorige keer, toen we stil stonden bij de invloed van je gedachten. Vandaag hebben we de cirkel wat verder ingevuld met voorbeelden en lichten we het onderdeel (vermijdings)gedrag uit."
      },
      {
        "titel": "Maak je angst bespreekbaar",
        "intro": "Loop jij rond met angstklachten en houd je dit voor jezelf? Niet doen! Vertel iemand in je omgeving die je vertrouwt, zoals een familielid, vriend/vriendin of collega over je angsten."
      },
      {
        "titel": "Ontspan en krijg grip op je ademhaling",
        "intro": "Ademen doe je automatisch. Je ademt zuurstof in en koolzuur uit. Je ademhaling past zich aan aan wat je doet. Bij inspanning heb je meer zuurstof nodig. Loop je bijvoorbeeld de trap op of trek je een sprintje naar de bus, dan versnelt je ademhaling. In rust vertraagt je ademhaling weer."
      }
    ]
  },
  {
    "slug": "aandacht-voor-hormonen-en-je-mind",
    "naam": "Aandacht voor hormonen en je MIND",
    "soort": "themaspecial",
    "aanmeld": "https://formulier.wijzijnmind.nl/aanmelden_aandacht_hormonen_mind",
    "dagen": [
      {
        "titel": "Wat zijn hormonen en wat doen ze?",
        "intro": "Op de eerste dag van deze themaspecial geven we je meer uitleg over wat hormonen zijn, wat hun rol is en hoe ze invloed kunnen hebben op onze gevoelens en gedrag."
      },
      {
        "titel": "Jouw hormonen van baby tot adolescent (0-18 jaar)",
        "intro": "In iedere fase van ons leven spelen hormonen een belangrijke rol. Al voordat je geboren bent, zijn er hormonen in je lichaam aan het werk. Zo maken jongens al het geslachtshormoon testosteron aan. Ook kunnen de hormonen die je moeder aanmaakt deels via de placenta naar jou als baby gaan. Het stresshormoon cortisol is hier een voorbeeld van. Als een moeder veel stress ervaart tijdens de zwangerschap, komt er ook meer stresshormoon van de moeder bij de baby. Dit kan invloed hebben op het stresssysteem van de nog ongeboren baby. Hierdoor kan iemand kwetsbaarder worden voor psychische klachten als depressie en angst of aandoeningen zoals hypertensie of obesitas."
      },
      {
        "titel": "Jouw hormonen van adolescent tot en met volwassene",
        "intro": "Ook als je niet meer in puberteit zit, spelen hormonen een belangrijke rol in je leven. Zoals we al op dag 1 zeiden, regelen hormonen van alles in je lichaam, van je vochthuishouding tot aan je stofwisseling en emoties en gedrag. Vandaag nemen we je mee naar de vruchtbare leeftijd. We vertellen over het effect van hormonen binnen je menstruatiecyclus en rondom zwangerschap. Hoe zijn ze van invloed op je gevoelens en gedrag en wat als ze je leven in de war schoppen? En hoe zit het eigenlijk met mannen en hormonen?"
      },
      {
        "titel": "Jouw hormonen van volwassene tot en met oudere",
        "intro": "Vanaf ongeveer 45 jaar vindt er bij vrouwen een afname plaats van geslachtshormonen. Je maakt steeds minder oestrogeen en testosteron aan en komt in de zogeheten ‘overgang’. Naast lichamelijke klachten, zoals opvliegers en pijn in je gewrichten, kan dit van invloed zijn op je stemming of de zin om te vrijen."
      }
    ]
  },
  {
    "slug": "aandacht-voor-je-mind-in-onrustige-tijden",
    "naam": "Aandacht voor je MIND in onrustige tijden",
    "soort": "themaspecial",
    "aanmeld": "https://formulier.wijzijnmind.nl/aanmelden_mind_onrustige_tijden",
    "dagen": [
      {
        "titel": "Inzicht in de invloed van de crisissen",
        "intro": "Het is een onrustige tijd waarin veel verschillende problemen spelen. Iedereen reageert anders op dit soort omstandigheden. Zo maakt de een zich zorgen over waar het heen gaat met de wereld en ligt hier ’s nachts wakker van, terwijl de ander de schouders ophaalt. Ook wordt de ene persoon meer geraakt door de gevolgen dan de ander. Zo zijn er mensen die in de financiële problemen zitten als gevolg van alle prijsstijgingen, terwijl anderen er nog niet zoveel van voelen. Toch kunnen we wel zeggen dat het ons allemaal op de een of andere manier raakt. Het is dan ook helemaal niet vreemd als jij je hierdoor mentaal minder fit voelt of misschien wel psychische klachten ervaart."
      },
      {
        "titel": "Erover praten en verbinding met elkaar",
        "intro": "Heb jij last van de crisissen die er spelen? Loop jij rond met psychische klachten en houd je dit voor jezelf? Niet doen! Praat er met iemand in je omgeving over die je vertrouwt, zoals een familielid, vriend/vriendin of collega."
      },
      {
        "titel": "Anders denken en minder tobben",
        "intro": "Door alles wat er speelt in de wereld ben jij mogelijk gestrester, somberder of angstiger dan anders. Maar wist je dat gevoelens meestal veroorzaakt worden door hoe je over een situatie denkt? Het mooie hiervan is dat je veel kan bereiken door je gedachten op een positieve manier te veranderen. Natuurlijk veranderen je gedachten niets aan de situatie waar je in zit en dat kan nog steeds heel vervelend zijn. Maar ze kunnen er wel voor zorgen dat de situatie beter te dragen is."
      },
      {
        "titel": "Aanpakken en ruimte voor oplossingen",
        "intro": "Het kan heel vervelend voelen als je geen controle hebt over jouw situatie of over zaken die om je heen gebeuren. Zo ontvingen we deze reacties via social media:"
      },
      {
        "titel": "Gezonde leefstijl en mindset",
        "intro": "In deze lastige tijd is het extra belangrijk je lichaam en geest gezond te houden. Het helpt je zo goed mogelijk om te kunnen gaan met wat er op je pad komt. Natuurlijk weten we allemaal wel dat als we goed voor ons lijf zorgen, dit ook goed is voor onze geest en andersom. Maar dit is soms makkelijker gezegd dan gedaan. We geven hieronder praktische tips om goed voor jezelf te zorgen."
      }
    ]
  },
  {
    "slug": "aandacht-voor-herstel",
    "naam": "Aandacht voor herstel",
    "soort": "themaspecial",
    "aanmeld": "https://formulier.wijzijnmind.nl/aanmelden_aandacht_voor_herstel",
    "dagen": [
      {
        "titel": "Wat is herstel?",
        "intro": "Veel mensen die te maken hebben met psychische problemen krijgen wel eens de vraag hoe het met hen gaat. Grote kans dat jij deze vraag ook wel eens krijgt. Het kan zijn dat hierbij het woord ‘herstel’ genoemd wordt. Bijvoorbeeld omdat je behandelaar aangeeft dat je bezig bent met je herstel. Of dat je deze term online tegenkomt. Maar wat is herstel nu eigenlijk? We vertellen je graag meer over wat het inhoudt, maar ook over wat het juist niet is."
      },
      {
        "titel": "Waarden en grenzen",
        "intro": "Om goed te kunnen herstellen, is het fijn te weten wat jij belangrijk vindt in je leven. Om op basis hiervan te leven en keuzes te maken. Naast te weten wat je wel wil, is het ook goed te weten wat je niet wil of waar je grenzen liggen. En om deze grenzen vervolgens aan te geven."
      },
      {
        "titel": "Eigen regie pakken",
        "intro": "Een belangrijk onderdeel van herstel is het (terug)pakken van eigen regie over je leven met een psychische kwetsbaarheid. Jij bepaalt hoe jij jouw leven vormgeeft op een manier die bij jou past."
      },
      {
        "titel": "Hulpmiddelen voor meer grip",
        "intro": "De laatste tijd is er gelukkig steeds meer aandacht voor herstel. Hierdoor zijn er steeds meer hulpmiddelen en trainingen beschikbaar die je hierbij kunnen ondersteunen. Hieronder lichten we een aantal van deze hulpmiddelen voor je uit."
      },
      {
        "titel": "De kracht van de omgeving",
        "intro": "Voor bijna ieder mens is het belangrijk zich verbonden te voelen met de mensen om zich heen. Het is dan ook niet voor niets een belangrijk onderdeel als het om herstel gaat. Waar de een veel heeft aan het contact met de mensen in de directe omgeving, zoals vrienden, familieleden, collega’s en kennissen, vindt de ander deze verbondenheid met name bij mensen die soortgelijke ervaringen hebben meegemaakt. Bij hen voelen ze zich gezien en gesteund."
      }
    ]
  }
];
