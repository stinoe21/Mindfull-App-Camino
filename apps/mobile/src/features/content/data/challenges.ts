// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/challenges/PROGRAMMAS.md en de
// dagpagina's. Opnieuw genereren: node <scratchpad>/gen-content.mjs
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
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Ontspan",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Slim omgaan met je tijd",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Stel grenzen en zeg nee",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Werk aan je leefgewoonten",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Verander je gedachten",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Leef in het moment en accepteer teleurstellingen",
        "intro": "Ga snel naar:"
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
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Jouw hormonen van baby tot adolescent (0-18 jaar)",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Jouw hormonen van adolescent tot en met volwassene",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Jouw hormonen van volwassene tot en met oudere",
        "intro": "Ga snel naar:"
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
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Waarden en grenzen",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Eigen regie pakken",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "Hulpmiddelen voor meer grip",
        "intro": "Ga snel naar:"
      },
      {
        "titel": "De kracht van de omgeving",
        "intro": "Ga snel naar:"
      }
    ]
  }
];
