// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/challenges/PROGRAMMAS.md en de
// dagpagina's. Opnieuw genereren: node scripts/gen-challenges.mjs
//
// Sinds 10 september 2026 staat de volledige daginhoud in de app: MIND heeft
// via Stijn akkoord gegeven op het opnemen van de challenge-inhoud in de app
// (daarvoor stond hier alleen de intro per dag, met de mailreeks als route).
// De teksten zijn woordelijk van MIND; wat vervalt (afbeeldingen en
// mail-huishouding) staat in de kop van scripts/mind-markdown.mjs.

export type ChallengeBlok = {
  kop?: string;
  tekst?: string;
  lijst?: string[];
  linkLabel?: string;
  linkUrl?: string;
};
export type ChallengeDag = { titel: string; intro: string; blokken: ChallengeBlok[] };
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
        "intro": "Voor veel mensen met slaapproblemen zijn de slaapkamer en het bed geen plekken waar ze naar uitkijken. Geldt dit voor jou ook? Je slaapkamer moet (weer) een fijne, comfortabele plek zijn. Neem daarom eens even de tijd om je slaapkamer te checken. Vind jij het een fijne plek? Zo niet, wat zou je kunnen veranderen om er wel een fijne plek van te maken? Een plek waarnaar je ’s avonds verlangt in plaats van waar je tegenop ziet?",
        "blokken": [
          {
            "tekst": "We benoemen in de tabel hieronder 7 aandachtspunten. Zie je verbeterpunten? Breng ze in kaart met onderstaande checklist."
          },
          {
            "tekst": "Kruisje(s) gezet bij ‘kan beter’? Probeer hier dan iets aan te doen. De tips hieronder kunnen je daarbij helpen."
          },
          {
            "linkLabel": "Download tabel",
            "linkUrl": "https://wijzijnmind.nl/media/5295/download/slaap%20challenge%20-%20overzicht.jpg?v=1"
          },
          {
            "tekst": "Heb je het idee dat jouw slaapplek al een fijne plek is en dat er niet veel meer te verbeteren valt? Dat kan goed natuurlijk, maar misschien zijn er toch nog verbeteringen mogelijk die je nog niet had bedacht."
          },
          {
            "tekst": "Beschrijf daarom eens jouw ideale slaapplek en vergeet hierbij even hoe jouw slaapkamer nu is. Is jouw ideale slaapkamer koel of juist warm? Hoe ziet jouw bed eruit? Is het er donker of juist niet helemaal? Komt deze ideale slaapplek overeen met je huidige slaapplek? Wat kan je veranderen?"
          },
          {
            "tekst": "Onze tips kunnen hierbij helpen, maar het belangrijkste is dat de kamer voor jou goed voelt!"
          },
          {
            "kop": "Tips"
          },
          {
            "tekst": "Om goed te kunnen slapen zijn een aantal punten van belang. Je kwam ze net al tegen als aandachtspunten op de checklist. Hieronder lees je nog wat bruikbare tips."
          },
          {
            "lijst": [
              "Om echt goed tot rust te komen in je slaapkamer is het belangrijk dat het een opgeruimde plek is. Gebruik je slaapkamer dan ook niet als werkkamer of om televisie te kijken.",
              "Zorg dat het niet te warm of te koud is in de slaapkamer.",
              "Zorg voor een goede ventilatie door overdag het raam open te zetten. Sommige mensen vinden het prettig om ook ’s nachts het raam open te hebben. Kies wat jij prettig vindt.",
              "Om goed te kunnen slapen is het fijn als je zintuigen niet te veel worden geprikkeld. Bij voorkeur is een slaapkamer dan ook donker en slaap je in een stille omgeving. Heb je last van geluiden van buiten (of van een snurkende partner!): doe dan oordopjes in. Kun je niet slapen doordat je slaapkamer te licht is? Probeer dan eens te slapen met een slaapmasker op of hang (rol)gordijnen op die het licht van buiten tegenhouden.",
              "En natuurlijk is een comfortabel bed van groot belang. Een comfortabel matras is niet te hard, maar ook niet te zacht. Verder is prettig liggen in bed erg persoonlijk. Het belangrijkste is dat jij volkomen ontspannen kunt liggen. Een comfortabel kussen is daarbij ook belangrijk, evenals je beddengoed. Kies voor katoen en verschoon je bed regelmatig."
            ]
          },
          {
            "kop": "Ervaringsverhaal"
          },
          {
            "tekst": "Heb je soms het gevoel dat je de enige bent die problemen heeft met slapen? Niets is minder waar. Of loop je er al lang mee rond en heb je van alles geprobeerd? Lees het verhaal van Annelies over chronische slapeloosheid en wat haar hielp."
          },
          {
            "linkLabel": "Lees het verhaal van Annelies",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/slapeloosheid/annelies-chronische-slapeloosheid"
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees meer over slapeloosheid"
            ]
          }
        ]
      },
      {
        "titel": "Verander je denken",
        "intro": "Als je moeilijk in slaap komt, kan het helpen om te ontdekken welke gedachten jij precies hebt wanneer je niet kunt slapen. En om deze gedachten, wanneer ze niet-helpend of negatief blijken te zijn, te veranderen. Als jij wakker ligt, wat gaat er dan door je heen? Welke gedachten heb je dan?",
        "blokken": [
          {
            "tekst": "Leer jezelf aan om je gedachten uit te dagen, door het stellen van de volgende vragen aan jezelf:"
          },
          {
            "lijst": [
              "Is dit echt waar? Overdrijf ik niet?",
              "Stel dat wat ik denk inderdaad waar is, wat betekent dit dan?",
              "Waarom is het erg als dit zo zou zijn? Welke mogelijkheden zou ik dan hebben om met deze situatie om te gaan? Zou ik dit (uiteindelijk) kunnen verdragen?"
            ]
          },
          {
            "tekst": "Een voorbeeld:"
          },
          {
            "tekst": "Negatieve gedachte: Zie je wel, nu lig ik weer wakker en slaap ik weer de hele nacht niet en ben ik morgen niets waard!"
          },
          {
            "tekst": "Vraag aan jezelf: Is dit echt waar? Nou ja, op zich weet ik niet of ik de héle nacht niet slaap. Ik zal wel weer een keertje in slaap vallen. En ik weet nu natuurlijk ook nog niet hoe ik morgen dan functioneer. Misschien voel ik me morgen best prima."
          },
          {
            "tekst": "En stel nou dat je gedachte wel waar is? _Als ik echt de hele nacht niet slaap, zou ik dat wel heel vervelend vinden. Maar ik kan het wel verdragen natuurlijk."
          },
          {
            "tekst": "Ik kan ook even wat gaan lezen. En mijn moeder zei vroeger altijd: ‘Slaap je niet, dan rust je toch.’ Dat is wel een geruststellende gedachte!_"
          },
          {
            "tekst": "Je kunt negatieve gedachten ook direct proberen te vervangen door positieve gedachten. Negatieve gedachte: L _ig ik weer wakker, te draaien en te woelen en naar het plafond te staren. Ik word er helemaal gek van!"
          },
          {
            "tekst": "_"
          },
          {
            "tekst": "In plaats daarvan kun je bijvoorbeeld denken: Hm, wat heb ik toch een fijn bed. Ik lig lekker warm onder mijn dekbed en hoef nu even helemaal niets!"
          },
          {
            "tekst": "Pas dit toe wanneer je niet kunt slapen, of wanneer je overdag merkt dat je niet-helpende gedachten over je slaap hebt. Het zal in het begin best lastig zijn om je gedachten om te buigen naar positievere gedachten. Het is daarom belangrijk om er dagelijks mee te blijven oefenen. Je zult zien dat het je uiteindelijk helpt."
          },
          {
            "kop": "Extra tip: kijk niet naar de lengte"
          },
          {
            "tekst": "Het is goed om te onthouden dat hoe lang je slaapt niet het belangrijkste is. Veel mensen hebben het idee dat zij elke nacht minstens acht uur moeten slapen. Veel belangrijker is de kwaliteit van je slaap en of je een uitgerust gevoel hebt de volgende dag. Stop daarom wanneer je wakker ligt met het kijken op de klok en uitrekenen hoe lang je nog kunt slapen. Je legt jezelf een eis op die nergens voor nodig is. Laat de gedachte dat je minstens acht uur moet slapen los. Dit klinkt makkelijker gezegd dan gedaan, maar dit kan al dusdanig veel stress schelen dat je beter slaapt."
          },
          {
            "kop": "Oefeningen voor thuis"
          },
          {
            "tekst": "Wil jij graag aan de slag met het helpend maken van jouw gedachten? Wij schreven 2 oefeningen uit de cognitieve gedragstherapie voor thuis."
          },
          {
            "linkLabel": "Vraag de oefeningen aan",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
          },
          {
            "kop": "Piekertest"
          },
          {
            "tekst": "Heb jij het gevoel dat je meer piekert dan gemiddeld? Doe onze piekertest. Door het maken van deze test kan je inschatten hoeveel je piekert."
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees meer over piekeren",
              "Lees meer over cognitieve gedragstherapie"
            ]
          }
        ]
      },
      {
        "titel": "Zorg voor regelmaat en een slaapritueel",
        "intro": "Als je moeilijk in slaap valt ’s avonds raden we je aan om heel bewust aan de slag te gaan met het afbouwen van je activiteitenniveau en een slaapritueel in te voeren. Een slaapritueel bestaat uit een aantal vaste gewoonten die je dagelijks uitvoert voor het slapen gaan.",
        "blokken": [
          {
            "tekst": "Laat vanavond zo’n twee uur voordat je gaat slapen je mobiele telefoon, tablet en computer voor wat ze zijn. Kijk liever ook geen tv meer. Klets in plaats daarvan wat met je partner, luister naar muziek, lees een boek of blader door wat tijdschriften. Met andere woorden, bouw je activiteitenniveau langzaam af."
          },
          {
            "tekst": "Sluit vanaf vandaag ook iedere avond af met een slaapritueel. Misschien doe je dat onbewust al: de kamer nog even opruimen, de vaatwasser aanzetten, een rondje door je huis maken om af te sluiten, de verwarming laag zetten, de lichten uitdoen. Misschien vind je het prettig om voor het slapengaan te douchen of in bad te gaan, of om nog even iets warms te drinken. Vervolgens tandenpoetsen en naar bed. Misschien lees je nog even in een boek. Voor welk ritueel je ook kiest, voer het iedere dag rond hetzelfde tijdstip rustig en in dezelfde volgorde uit."
          },
          {
            "kop": "Uitleg achter deze opdracht"
          },
          {
            "tekst": "Het idee achter deze opdracht is je te stimuleren regelmaat aan te brengen en toe te werken naar het moment dat je gaat slapen."
          },
          {
            "tekst": "Tegenwoordig is dat niet zo vanzelfsprekend meer. Vroeger bouwden mensen op een natuurlijke manier hun activiteitenniveau af. Op een gemiddelde avond kwamen mensen thuis van hun werk, aten hun avondeten, praatten wat met elkaar, lazen misschien een boek en gingen slapen. Vergelijk dat eens met onze avonden nu: we doen snel nog even boodschappen en kijken tv. We werken nog wat mails weg voor ons werk en kijken om de haverklap op onze telefoon of we nog berichtjes hebben. Ondertussen draaien we nog een was of doen andere huishoudelijke klusjes en tegen de tijd dat we naar bed gaan, staan onze hersenen en ons lichaam nog helemaal niet in de ruststand. Ook in bed hebben veel mensen vervolgens nog de neiging om tv te kijken of hun telefoon te pakken om nog even wat websites en social media te checken."
          },
          {
            "tekst": "Daarnaast heb je vast wel eens gehoord van de biologische klok. Iedereen heeft een biologische klok. De biologische klok bevindt zich in je hersenen en zorgt ervoor dat verschillende processen in je lichaam geregeld worden, waaronder het slaap-waakritme. Je biologische klok werkt het beste bij regelmaat. Je kunt je biologische klok daarom een handje helpen door ritme aan te brengen door elke dag rond dezelfde tijd op te staan en naar bed te gaan. En in het weekend niet te veel hiervan af te wijken."
          },
          {
            "kop": "Wat helpt Marieke om beter te gaan slapen?"
          },
          {
            "tekst": "Marieke: 'Maar ik haal nu gemiddeld mijn zeven uur slaap en voel mij fitter dan ooit, omdat ik alles weer kan oppakken wat ik jaren heb laten liggen.'"
          },
          {
            "tekst": "Ze sliep langere tijd erg slecht. Hoewel ze nog steeds een moeilijke slaper is, helpt onder andere een strikt patroon haar om beter te slapen."
          },
          {
            "tekst": "Wil jij weten welke invloed slaapproblemen op Marieke hebben en wat voor haar werkt?"
          },
          {
            "linkLabel": "Lees haar ervaringsverhaal",
            "linkUrl": "https://wijzijnmind.nl/ervaringsverhaal/marieke-ik-heb-altijd-de-diagnose-slapeloosheid-gehad/1935"
          }
        ]
      },
      {
        "titel": "Ontspan!",
        "intro": "Om ontspannen naar bed te kunnen gaan, is het belangrijk dat je gedurende de dag momenten van ontspanning hebt. Wat ontspant jou?",
        "blokken": [
          {
            "tekst": "Bedenk voor jezelf wat jou ontspant en schrijf het op. Voor de een is bewegen heel ontspannend: een rondje (hard)lopen, fietsen, een uurtje zwemmen of yoga. Een ander ontspant juist door het lezen van een boek, het kijken van een film of het nemen van een warm bad."
          },
          {
            "tekst": "Heb je in kaart wat jou ontspanning geeft? Bedenk dan of je (één van) deze dingen wel iedere dag doet."
          },
          {
            "tekst": "Kom je tot de conclusie dat dit niet zo is, dan is het hoog tijd om daar verandering in te brengen en te zorgen dat je iedere dag momenten van ontspanning gaat inbouwen. Dingen als een rondje lopen of echt even de tijd nemen voor het drinken van een kopje thee kunnen iedere dag."
          },
          {
            "tekst": "Naast het in kaart brengen en uitvoeren van jouw ontspannende activiteiten, raden we je aan om ontspanningsoefeningen uit te proberen en te kijken of dit iets voor jou is. Ga vanavond een kwartiertje eerder dan gebruikelijk in bed liggen (na je slaapritueel!) en doe de ontspanningsoefening(en)."
          },
          {
            "linkLabel": "Ga naar de ontspanningsoefeningen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/psychipedia/ontspanningsoefeningen"
          },
          {
            "kop": "Heb je al langere tijd problemen met in- en doorslapen?"
          },
          {
            "tekst": "Een keertje van de spanning moeilijk in slaap vallen is helemaal niet erg. Maar als je langere tijd problemen hebt met in- en doorslapen, is het goed om bij jezelf na te gaan of dit te maken kan hebben met spanning. Ervaar je veel stress op je werk of thuis? Maak je je zorgen over dingen, pieker je veel? Als je al wat langer slaapproblemen hebt, kan het ook zijn dat je je gespannen voelt bij het naar bed gaan omdat je je alweer zorgen maakt over het wakker liggen."
          },
          {
            "kop": "Contact met een hulpverlener"
          },
          {
            "tekst": "Loopt bij jou de spanning zo op dat je hier graag eens met iemand over wil praten? Neem (anoniem) contact op met een van de medewerkers van de MIND Hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem contact op",
            "linkUrl": "https://mindhulplijn.nl"
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees de tips voor ontspanning",
              "Meer lezen over spanning",
              "Meer lezen over stress"
            ]
          }
        ]
      },
      {
        "titel": "Accepteer het wakker liggen",
        "intro": "Als je lang wakker ligt is het soms moeilijk om niet gefrustreerd te raken. Door je te focussen op geluiden die je hoort, dingen die je voelt of die je ruikt, zijn je hersenen met iets anders bezig dan piekergedachten. Door niet te oordelen over de situatie en de situatie te accepteren zoals deze is, val je makkelijker in slaap.",
        "blokken": [
          {
            "tekst": "Deze opdracht kun je toepassen als je wakker ligt. Je kunt de oefening ook doen voordat je gaat slapen, of overdag. De oefening is 24 uur per dag toepasbaar. Kijk wat jij prettig vindt."
          },
          {
            "tekst": "Heb aandacht voor je zintuigen"
          },
          {
            "tekst": "Registreer bewust wat je zintuigen je te vertellen hebben. Wanneer je deze oefening ’s nachts doet als je wakker ligt, valt er natuurlijk niet zoveel te zien, proeven en ruiken, maar je kunt wel luisteren en voelen. Je hoort bijvoorbeeld de regen, een auto die in de verte voorbijrijdt, of juist de stilte."
          },
          {
            "tekst": "Heb ook aandacht voor je gedachten, maar zonder oordeel"
          },
          {
            "tekst": "Toon interesse voor wat je denkt en voelt en laat het daarna los. Zie gedachten en gevoelens als wolken die voorbijdrijven. Sommige wolken zijn duister en bezorgen een slecht gevoel. Probeer dat niet erg te vinden. Duistere wolken horen bij het leven. Alle wolken drijven uiteindelijk voorbij."
          },
          {
            "tekst": "Heb aandacht voor je lichaam"
          },
          {
            "tekst": "Ervaar je lichaam heel bewust. Neem tijd om je lichaam te voelen. Loop daarbij je hele lijf door. Hoe is het met je linkervoet, je onderbeen, et cetera. Sla geen enkel stukje over. Probeer niets te veranderen, maar sta stil bij hoe je erbij ligt."
          },
          {
            "tekst": "Heb tenslotte aandacht voor je ademhaling"
          },
          {
            "tekst": "Richt je aandacht op je ademhaling. Verander je ademhaling niet. Neem simpelweg waar hoe je ademhaling in- en uitstroomt. Als je aandacht afdrijft is dat niet erg. Zo werkt de menselijke geest. Breng je aandacht gewoon weer terug bij je ademhaling."
          },
          {
            "kop": "De kunst van mindfulness"
          },
          {
            "tekst": "Naast leven in het hier en nu, gaat mindfulness over dingen accepteren zoals ze zijn, de dingen niet willen veranderen. Dat is makkelijker gezegd dan gedaan: vervelende gevoelens zoals pijn, irritatie of verdriet wil je waarschijnlijk niet hebben. Je bent ongetwijfeld dan geneigd om er van alles aan te doen om deze gevoelens te veranderen. Maar de kans is groot dat je hierdoor voortdurend bezig bent met het probleem wat de vervelende gevoelens veroorzaakt. Daardoor is het probleem heel prominent aanwezig en wordt het misschien zelfs wel groter dan dat het in werkelijkheid is."
          },
          {
            "tekst": "Bijvoorbeeld: je voelt je geïrriteerd door het feit dat je regelmatig wakker ligt. Dit zie je als een probleem en dit wil je dan ook zo snel mogelijk verhelpen. Je probeert van alles: oefeningen, warme melk voor het slapengaan, geen koffie meer overdag. Maar je ligt nog steeds vaak wakker. Sterker nog, je voelt je wellicht nog gefrustreerder: je doet immers zo hard je best en nog steeds slaap je niet."
          },
          {
            "tekst": "De kunst van mindfulness is om je niet te focussen op het probleem en geen oplossingen te zoeken. Probeer er als het ware van een afstandje naar te kijken en niets van de situatie te vinden. Door niet te oordelen over de situatie en de situatie te accepteren zoals deze is, wordt het probleem minder overheersend en zwaar en bespaar je in ieder geval energie."
          },
          {
            "tekst": "Het is goed om mindful met jouw slaapprobleem om te gaan, maar dit gelijk toepassen kan soms best lastig zijn. Het invullen van een slaapdagboek kan zorgen voor meer inzicht en uiteindelijk ook helpen bij het loslaten."
          },
          {
            "tekst": "Mindfulness oefeningen voor thuis Wil je eens kijken of mindfulness iets voor jou is voordat je met een cursus begint? We stelden een online gids samen met tips en een aantal oefeningen om thuis aan de slag te gaan met mindfulness."
          },
          {
            "linkLabel": "Bekijk de oefeningen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mindfulness"
          },
          {
            "kop": "Vul een Slaapdagboek in"
          },
          {
            "tekst": "Hopelijk heeft deze Beter Slapen Challenge jouw inzichten en handvatten gegeven om beter te slapen. Door een slaapdagboek bij te houden, krijg je nog meer inzicht in jouw slaapprobleem. Ook kan je zo ontdekken welke tips uit de Beter Slapen Challenge je het beste helpen. Probeer dit te doen zonder erover te oordelen om zo ruimte te creëren om problemen van een andere kant te bekijken."
          },
          {
            "linkLabel": "Download het Slaapdagboek",
            "linkUrl": "https://wijzijnmind.nl/media/5858/download/slaapdagboek%20beter%20slapen%20challenge%202021.pdf?v=1"
          },
          {
            "kop": "Jouw verhaal delen"
          },
          {
            "tekst": "Wil jij anderen inspireren met jouw verhaal? Of het nu gaat om grote of minder grote problemen met slapen, van jezelf of iemand in je omgeving, er is altijd iemand die zich herkent en gesteund voelt door jouw verhaal."
          },
          {
            "linkLabel": "Deel je verhaal",
            "linkUrl": "https://wijzijnmind.nl/ervaringsverhaal/donatie/nieuw"
          }
        ]
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
        "intro": "De juiste studie of (bij)baan, perfecte looks en social posts en iedereen die jou aardig vindt. Fouten maak je niet, want dat voelt als falen en dat doe jij niet! Je denkt nu waarschijnlijk: ‘Doe normaal, dit is niet haalbaar?!’ Toch hebben veel mensen het gevoel hieraan te moeten voldoen. We leven in een maatschappij die gericht is op prestatie en waarin we weinig ruimte voelen om fouten te maken. We voelen ons verantwoordelijk voor ons eigen geluk door de keuzes die we maken. Hierdoor zijn we in gedachten continu met onze toekomst bezig. ‘Wat als...?!.’ En gaan we overpresteren om ervoor te zorgen dat het gaat lukken. ‘Ik moet en ik zal!’ Dit alles bij elkaar brengt zoveel druk met zich mee, dat het wel heel lastig is om niet te veel stress te ervaren.",
        "blokken": [
          {
            "tekst": "Adem in, adem uit. Vandaag gaan we dit anders doen. Want fouten maken mag, sterker nog; het moet om je te kunnen ontwikkelen!"
          },
          {
            "tekst": "De onderstaande opdrachten helpen je met perfectionisme om te gaan en te ervaren dat een beetje minder ook goed is. Ook geven we je tips om jezelf te accepteren en te werken aan je zelfvertrouwen."
          },
          {
            "kop": "Opdracht 1. Krijg inzicht in jouw perfectionisme"
          },
          {
            "tekst": "Maak een lijstje met punten waarop jij het perfect moet doen. Noteer op een blaadje of download deze pdf. Bekijk je lijstje, wat zie je? Is het vooral je studie of werk waarin je wil presteren of gaat het verder dan dat? Wil je bijvoorbeeld ook de perfecte partner zijn of vriend/vriendin, je huis of kamer perfect op orde hebben en veel likes en reacties krijgen op social media?"
          },
          {
            "tekst": "Ga jouw lijstje langs en stel jezelf de volgende vragen:"
          },
          {
            "lijst": [
              "Waarom moet dit perfect?",
              "Wil je het zelf perfect doen, heb je het gevoel dat anderen dit verwachten of beide?",
              "Is een beetje minder niet ook ok?",
              "Is dit mijn verantwoordelijkheid? (Zo niet, doe het dan ook niet)"
            ]
          },
          {
            "kop": "Opdracht 2. Bereik meer door minder te doen"
          },
          {
            "tekst": "Nu je inzichtelijk hebt bij welke dingen jouw perfectionisme je in de weg zit, ga je proberen de controle wat los te laten en kijken wat er gebeurt. Wees bijvoorbeeld eens een dag niet zo productief, doe eens een keertje wat minder aardig of kom eens te laat…"
          },
          {
            "tekst": "Zo ontdek je dat waar je bang voor bent, waarschijnlijk helemaal niet gebeurt of dat je hier prima mee om kan gaan. En misschien kom je er wel achter dat je met een beetje minder je best doen hetzelfde bereikt (of misschien wel meer), omdat er lucht ontstaat doordat je jezelf minder druk oplegt."
          },
          {
            "tekst": "En bedenk: mocht er iets misgaan, dan kan je het in de meeste gevallen ook weer oplossen. Bovendien: van fouten maken, leer je. Het leidt vaak tot nieuwe inzichten en mogelijkheden die je anders niet had gezien."
          },
          {
            "kop": "Tips om aan je zelfvertrouwen te werken en jezelf te accepteren"
          },
          {
            "tekst": "Als je vertrouwen hebt in jezelf en jezelf accepteert zoals je bent, voel je vaak minder druk om te presteren en sta je jezelf meer toe om fouten te maken. Zelfvertrouwen en jezelf accepteren, met zowel je positieve als negatieve eigenschappen, is niet iets dat van de ene op de andere dag lukt. Je kan het wel ontwikkelen. Zo kan je bijvoorbeeld je zelfvertrouwen opbouwen door uitdagingen aan te pakken. Is er iets dat je spannend vindt om te doen? Ga het niet uit de weg. Begin niet te moeilijk en zorg dat wat je gaat doen haalbaar is, zodat je dit succesvol afrondt. Zo ervaar je dat je iets echt wel kan en heb je vertrouwen dat het een volgende keer weer lukt. Blijf jezelf uitdagen. Als je dit steeds vaker doet, zal je zelfvertrouwen groeien. Wat hierbij helpt:"
          },
          {
            "lijst": [
              "Stel jezelf, voordat je de uitdaging aangaat, voor dat het een succes wordt. Dit geeft een krachtig gevoel, waardoor je de uitdaging positief begint."
            ]
          },
          {
            "tekst": "Geloof dat je jezelf kan ontwikkelen. Als je dit vertrouwen hebt, ga je vaak anders om met dingen die misgaan. Je geeft dan minder snel op en je ziet een uitdaging als een mogelijkheid om te leren en te groeien."
          },
          {
            "tekst": "Onthoud tot slot; jij bent jij en je bent goed genoeg! Niemand is perfect, dus waarom zou jij dat wel moeten zijn? En hoe zonde is het, om alsmaar te ‘moeten’ van jezelf en de lat steeds verder te leggen of steeds maar bezig te zijn met de volgende stap. Je blijft dan ontevreden."
          },
          {
            "tekst": "Bedenk tegelijkertijd dat het accepteren van jezelf iets is, waar je vaak een leven lang aan werkt. Ook dat hoeft niet perfect!"
          },
          {
            "kop": "Direct contact met een hulpverlener"
          },
          {
            "tekst": "Heb jij last van prestatiedruk en heb je behoefte aan persoonlijke hulp of advies? Neem (anoniem) contact op met een van de medewerkers van de MIND hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl"
          },
          {
            "kop": "Meer lezen"
          },
          {
            "lijst": [
              "Bekijk deze korte uitleg over wat prestatiedruk is.",
              "Laat je onderdompelen in deze 6 faalmomentjes om weer even te relativeren: 6X #FALEN & ANDERE #FUCKUPS.",
              "Lees dit artikel over 9 herkenbare dingen als je last hebt van studiestress.",
              "Op een rijtje: Hoe te accepteren dat je nooit perfect zal zijn.",
              "Benieuwd naar hoeveel zelfvertrouwen je hebt? Test je zelfvertrouwen."
            ]
          },
          {
            "kop": "Meer kijken"
          },
          {
            "lijst": [
              "Bekijk deze heldere story van NPO Kennis en ontdek waarom fouten maken belangrijk is.",
              "Bekijk ook deze story van NPO Kennis en leer meer over waarom we last hebben van prestatiedruk.",
              "Bekijk deze video van de MIND Young Studio waarin Thara uitleg en tips geeft bij perfectionisme en prestatiedruk."
            ]
          }
        ]
      },
      {
        "titel": "Durf te kiezen!",
        "intro": "De hele dag maak je keuzes. Vaak zijn dit simpele keuzes, zoals wat je op je brood smeert, welke kleren je aantrekt of wat je gaat kijken op Netflix. Bij de meeste keuzes sta je niet echt stil. Maar er zijn ook keuzes die net even wat meer van je vragen, zoals waar je heen gaat op vakantie. Of naar welk feestje je gaat als er 3 zijn op 1 avond, terwijl je daarvoor nog moet werken of studeren. En dan zijn er nog de keuzes die behoorlijk wat stress kunnen veroorzaken. We worden tegenwoordig overspoeld met mogelijkheden en kansen en dat maakt het maken van een keuze er niet makkelijker op. Hoe maak je bijvoorbeeld een keuze uit honderden studies? Of beslis je welke baan het beste bij je past? En hoe bepaal je waar je gaat wonen? Hoe groter de consequenties zijn van je keuze, hoe meer keuzestress jij ervaart. En als je niet kiest is dat eigenlijk ook een keuze…",
        "blokken": [
          {
            "tekst": "De opdrachten van vandaag laten je stilstaan bij wat jíj́ wil, om zo vanuit je eigen waarden keuzes te maken."
          },
          {
            "kop": "Opdracht 1. Bedenk wat jij wil!"
          },
          {
            "tekst": "Het maken van keuzes wordt makkelijker als je weet wat je wil en wat jij belangrijk vindt in jouw leven. Deze opdracht helpt je dit inzichtelijk te maken. Download deze pdf of pak pen en papier erbij en doorloop onderstaande stappen. Vergeet daarbij wat andere mensen zouden invullen. Het gaat er echt om wat jij wil."
          },
          {
            "tekst": "Stap 1. Stel vast wat jij belangrijk vindt"
          },
          {
            "tekst": "1. __Stel jezelf de vraag: Wat vind ik belangrijk in mijn leven; wat vind ik belangrijke waarden? Om je te helpen, noemen we hieronder al wat voorbeelden van waarden waaruit je kan kiezen. Maar voel je vrij om aan te vullen met andere waarden die bij jou passen."
          },
          {
            "lijst": [
              "Rust of uitdaging",
              "Verbondenheid of onafhankelijkheid",
              "Alleen of samen",
              "Leidinggeven of volgen",
              "Stabiliteit of vrijheid",
              "Kwaliteit of kwantiteit",
              "Plezier of rijkdom"
            ]
          },
          {
            "tekst": "Andere voorbeelden van positieve persoonlijke waarden zijn: vertrouwen, religie/spiritualiteit, eerlijkheid, liefde, loyaliteit, veiligheid en zekerheid."
          },
          {
            "tekst": "2. Maak nu een top 5 van de waarden die voor jou belangrijk zijn en die je terug wil laten komen in jouw leven. Rangschik ze op volgorde van belangrijkheid."
          },
          {
            "tekst": "Stap 2. Stel doelen"
          },
          {
            "tekst": "Geef jezelf antwoord op de volgende 2 vragen:"
          },
          {
            "tekst": "1. Waar sta ik nu? Hoe gaat het (mentaal, lichamelijk, financieel en persoonlijk) met mij?"
          },
          {
            "tekst": "2. Waar wil ik heen? Bepaal 3 doelen voor jezelf, omdat jij ze belangrijk vindt. Tip: schrijf alle doelen op die in je opkomen. Maak vervolgens een selectie in doelen voor nu en later. En stel vast met welke 3 doelen je dit jaar nog aan de slag wil."
          },
          {
            "kop": "Opdracht 2. Maak je keuze"
          },
          {
            "tekst": "Moet jij (binnenkort) een belangrijke keuze maken? Pak jouw lijstje met waarden en doelen erbij en laat je leiden door je eigen antwoorden!"
          },
          {
            "tekst": "Bedenk hierbij dat een keuze ook kan betekenen dat je nee moet zeggen tegen iets. Of dat je grenzen gaat stellen naar de mensen in jouw omgeving. Vind je dit lastig? Wij schreven tips om je grenzen te leren kennen en aan te geven en een oefening en tips om nee te zeggen."
          },
          {
            "tekst": "En besef: Een keuze maken kan voelen als een keuze voor het leven, alsof het definitief is en je niet meer terug kan. Dit is in de meeste gevallen niet waar. Veel keuzes zijn aan te passen of zelfs terug te nemen. Het is bijvoorbeeld geen ramp als je er later achter komt dat die studie of baan toch niet helemaal bij je past, zoals je eigenlijk had verwacht. Natuurlijk is dat jammer en mag je flink balen, maar probeer het als een leerproces te zien. Dit maakt het leven juist leuk en uitdagend."
          },
          {
            "kop": "Direct contact met een hulpverlener"
          },
          {
            "tekst": "Heb jij last van prestatiedruk en heb je behoefte aan persoonlijke hulp of advies? Neem (anoniem) contact op met een van de medewerkers van de MIND hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl/"
          },
          {
            "kop": "Meer lezen"
          },
          {
            "lijst": [
              "In dit artikel gaan we in op 5 herkenbare dingen als je last hebt van keuzestress.",
              "Vraag jij je wel eens af of je wel de juiste studie hebt gekozen? Lees dan dit artikel: Hoe te accepteren dat er altijd een andere studie zal zijn die beter bij je past.",
              "Lees meer overhoe je je kunt wapenen tegen prestatiedruk in dit artikel van NU.nl, waarin ook MIND psychologe Lidewy Hendriks aan het woord komt."
            ]
          },
          {
            "kop": "Meer kijken"
          },
          {
            "lijst": [
              "Bekijk deze story van NPO Kennis met heldere uitleg en ontdek waarom we last hebben van keuzestress."
            ]
          }
        ]
      },
      {
        "titel": "Face the fear of missing out!",
        "intro": "We appen met vrienden terwijl we met iemand op het terras zitten en scrollen door onze socials op de wc. We zijn voortdurend online en staan continu ‘aan’. Hoe kan dat ook anders als zelfs de informatie van je opleiding of baan via je telefoon binnenkomt? En socials ontwikkeld zijn om je zo lang mogelijk te laten blijven? Je telefoon even wegleggen is daardoor ontzettend moeilijk, want wat heb je dan allemaal wel niet gemist?",
        "blokken": [
          {
            "tekst": "We noemen het ook wel FOMO (fear of missing out) als je angst hebt dat anderen leuke dingen doen zonder jou, waardoor je overal bij wil zijn en alles mee wil krijgen. Het geeft een naar gevoel als je bijvoorbeeld ziet dat je vrienden leuke dingen aan het doen zijn, terwijl jij op de bank niks aan het doen bent. Je kan je hierdoor buitengesloten voelen. En door jezelf te vergelijken met anderen, krijg je het idee dat ze een veel leuker leven hebben dan jij."
          },
          {
            "tekst": "Vandaag draaien we de vraag: ‘Wat mis ik allemaal als ik niet online ben?’ dan ook graag een keertje om naar: ‘Wat mis ik allemaal als ik de hele dag achter mijn telefoon zit?’"
          },
          {
            "kop": "Opdracht: Leg je telefoon een dag weg"
          },
          {
            "tekst": "Je raadt het al, jij gaat een dag doorbrengen zonder telefoon. Maar voordat je dat gaat doen, hebben we wat vragen aan jou. Schrijf de antwoorden op een blaadje of download deze pdf.Vraag 1. Hoeveel tijd denk je dat je per dag achter je telefoon doorbrengt? Vraag 2. Check nu je daadwerkelijke schermtijd op je telefoon. Klopt jouw schatting bij de werkelijkheid? Vraag 3. Wat denk je allemaal te gaan missen? Hoe voel je je daarbij?"
          },
          {
            "tekst": "Zet nu je telefoon uit tot de volgende dag. Vind je dat toch echt te moeilijk? Probeer het een halve dag, of in ieder geval een aantal uur achter elkaar. Is vandaag geen handige dag? Plan dan nu alvast een dag in je agenda wanneer jij dit gaat doen. Belangrijk: Verplaats de dingen die je op je telefoon doet niet naar je tablet, laptop etc."
          },
          {
            "tekst": "Tips bij de opdracht"
          },
          {
            "lijst": [
              "Laat je telefoon verstoppen door een van je huisgenoten.",
              "Zet je telefoon echt uit en niet alleen op stil, zodat je ook echt niets ziet binnenkomen.",
              "Vraag iemand in je omgeving met je mee te doen. Dit maakt de opdracht makkelijker.",
              "Kies een handige dag om je telefoon uit te zetten. Doe dit bijvoorbeeld niet op een dag dat je een belangrijk telefoontje verwacht van je arts, familie, werk of opleiding.",
              "Informeer de mensen in je omgeving dat je dit doet, zodat ze weten dat ze je niet kunnen bereiken of via iemand anders als er iets belangrijks is.",
              "Bewaar jouw antwoorden op de vragen van deze opdracht en pak ze er weer even bij als je merkt dat je weer veel op je telefoon zit."
            ]
          },
          {
            "tekst": "Vragen na de opdracht Beantwoord de onderstaande vragen, nadat je de opdracht hebt gedaan. Ook terug te vinden in deze pdf."
          },
          {
            "lijst": [
              "Hoe is de dag zonder telefoon verlopen?",
              "Vond je het moeilijk om niet steeds je telefoon te pakken? Waarom wel of waarom niet?",
              "Hoe vaak had je de neiging dit te doen?",
              "Heb je veel gemist? Zo ja, wat?",
              "Had je ook positieve ervaringen? Zo ja, welke?",
              "Hoe was het om jezelf een dag niet te hoeven vergelijken met anderen?"
            ]
          },
          {
            "kop": "Stoppen met social media?"
          },
          {
            "tekst": "Natuurlijk hoef je niet te stoppen met social media. Social media is niet alleen maar slecht. Maar het kan geen kwaad eens te kijken of het ook wat minder kan. Want hoeveel tijd houd je wel niet over als je in plaats van 5 uur, 1 uur per dag op je telefoon zit te scrollen? En wat levert het op aan rust in je hoofd? Je hebt minder last van FOMO en een paar uur per dag minder vergelijken geeft lucht."
          },
          {
            "tekst": "Doe mee met de Leg je telefoon weg challenge Van 21 tot en met 27 september 2026 organiseren we de Leg je telefoon weg challenge . Duizenden mensen gaan die week maximaal een half uur per dag hun smartphone gebruiken."
          },
          {
            "linkLabel": "Doe je ook mee?",
            "linkUrl": "https://formulier.wijzijnmind.nl/legjetelefoonweg"
          },
          {
            "kop": "Tips om minder online te gaan en meer in het hier en nu te zijn"
          },
          {
            "lijst": [
              "Bekijk op vaste momenten je berichten en je socials op je telefoon. Bijvoorbeeld in de ochtend, na de lunch en aan het einde van de dag (maar niet vlak voordat je gaat slapen).",
              "Stel schermlimieten in voor socials, zoals Instagram of TikTok.",
              "Zet je telefoon op zwart/wit modus, zodat het er onaantrekkelijker uitziet.",
              "Zet de notificaties uit op je telefoon. Ja, ook die van WhatsApp. Zet in ieder geval alle groepsgesprekken op dempen.",
              "Verwijder apps van je telefoon, zoals Netflix, spelletjes en je studie of werk e-mailaccount, zodat je minder in de verleiding komt deze vanuit je telefoon te openen.",
              "Zet je telefoon een paar uur per dag op vliegtuigmodus, zodat je ook even echt niet te bereiken bent.",
              "Zet je telefoon op stil en houd hem in je tas als je met iemand hebt afgesproken, zodat je niet wordt afgeleid."
            ]
          },
          {
            "kop": "Direct contact met een hulpverlener"
          },
          {
            "tekst": "Heb jij last van prestatiedruk en heb je behoefte aan persoonlijke hulp of advies? Neem (anoniem) contact op met een van de medewerkers van de MIND Hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl/"
          },
          {
            "kop": "Meer lezen"
          },
          {
            "lijst": [
              "Lees meer over FOMO.",
              "Lees nog meer tips om je telefoon onaantrekkelijk te maken.",
              "Herken jij je in deze 5 herkenbare dingen als je last hebt van het perfecte plaatje?"
            ]
          }
        ]
      },
      {
        "titel": "Leer omgaan met teleurstellingen",
        "intro": "Iedereen krijgt te maken met grote en kleine teleurstellingen in het leven. Zo kan het lastig zijn een huis te krijgen, begrijpen jouw ouders je misschien niet altijd en kunnen keuzes verkeerd uitpakken. Niet alles is maakbaar en dingen lopen zoals ze lopen. Toch is dit soms best lastig om mee om te gaan. Helemaal als je het gevoel hebt dat je alles uit het leven moet halen en je eigenlijk het merendeel van de tijd gelukkig zou moeten zijn.",
        "blokken": [
          {
            "tekst": "Vandaag ga je aan de slag met de gedachten die je hebt als je teleurstellingen meemaakt en met het bijstellen van je verwachtingen. Ook krijg je een tip om teleurstellingen te accepteren."
          },
          {
            "kop": "Opdracht 1. Maak je gedachten helpend"
          },
          {
            "tekst": "Als iets anders loopt dan dat je wil, kan je je daardoor heel vervelend voelen. Maar wist je dat deze gevoelens meestal veroorzaakt worden door hoe je over de situatie denkt? Met andere woorden; als je jouw gedachten helpend maakt, zullen jouw gevoelens waarschijnlijk veranderen."
          },
          {
            "tekst": "Een voorbeeld:"
          },
          {
            "tekst": "Je hebt je tentamen niet gehaald. Vervolgens denk je: ‘Ik had harder moeten werken. Mijn ouders vinden vast dat ik te weinig mijn best doe.’ Hierdoor heb jij het gevoel dat je gefaald hebt en dit maakt je verdrietig. Deze gedachten zijn niet helpend. Het is ook mogelijk anders over de situatie te denken. Bijvoorbeeld: ‘Het is niet erg dat ik dit tentamen niet heb gehaald. Ik heb mijn best gedaan, maar het was nog even te moeilijk. Mijn hertentamen gaat vast beter.’ Of: ‘Ach, de meeste tentamens haal ik wel. Een keertje niet, is niet zo heel erg.’ De situatie blijft precies hetzelfde, maar de kans is groot dat jij je nu een stuk fijner voelt."
          },
          {
            "tekst": "Het kan dus goed zijn te onderzoeken hoe je gedachten samenhangen met je gevoelens en gedrag. Om daarna je negatieve gedachten die vervelende gevoelens geven om te buigen naar helpende gedachten die wel fijne gevoelens geven."
          },
          {
            "tekst": "Opdracht"
          },
          {
            "tekst": "Sta de komende week eens stil bij situaties waarin je last hebt van ongewenste gevoelens. Je kan ook terugdenken aan een eerdere situatie. Probeer om je gedachten uit te dagen, door jezelf de volgende vragen te stellen:"
          },
          {
            "lijst": [
              "Is dit echt waar? Overdrijf ik niet?",
              "Stel dat wat ik denk inderdaad waar is, wat betekent dit dan?",
              "Waarom is het erg als dit zo zou zijn? Welke mogelijkheden heb ik dan om met deze situatie om te gaan? Zou ik dit (uiteindelijk) kunnen verdragen?"
            ]
          },
          {
            "tekst": "Oefeningen uit de cognitieve gedragstherapie voor thuis Cognitieve gedragstherapie is een therapievorm die veel aandacht besteedt aan het verband tussen wat mensen in een bepaalde situatie denken, voelen en doen om er vervolgens ook invloed op te kunnen uitoefenen."
          },
          {
            "tekst": "Wil je wat uitgebreider aan de slag met het helpend maken van jouw gedachten? We schreven 2 oefeningen uit de cognitieve gedragstherapie voor thuis."
          },
          {
            "linkLabel": "Bekijk de oefeningen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/helpende-gedachten"
          },
          {
            "kop": "Opdracht 2. Stel je verwachtingen bij"
          },
          {
            "tekst": "Als je vaak te maken krijgt met teleurstellingen, kan dit komen doordat je te hoge verwachtingen hebt. Direct een huis vinden in deze tijd met woningkrapte of veel geld verdienen als je net begonnen bent met werken of 3 keer per jaar in het buitenland op vakantie gaan als je nog studeert is bijvoorbeeld wat minder realistisch ;-). Het scheelt je een hoop frustratie als je vooraf je verwachtingen bijstelt."
          },
          {
            "tekst": "Maar hoe zet je niet realistische verwachtingen om naar wel realistische verwachtingen? De volgende opdracht gaat je daarbij helpen:"
          },
          {
            "lijst": [
              "Pak pen en papier erbij of download deze pdf. Noteer onder elkaar minimaal 5 verwachtingen die je hebt. Schrijf per verwachting op hoe de situatie nu is.",
              "Vergelijk je verwachtingen met de daadwerkelijke situaties. Wat valt je op? Zijn je verwachtingen wel realistisch? Schrijf opnieuw je verwachtingen op, maar nu haalbaar."
            ]
          },
          {
            "kop": "Tip om teleurstellingen te leren accepteren"
          },
          {
            "tekst": "Als je teleurstellingen of tegenslagen ervaart, ben je geneigd de vervelende gevoelens die daarbij komen, zoals irritatie, verdriet en boosheid niet te willen ervaren. Je wil van alles doen om deze gevoelens te veranderen. Maar de kans is groot dat je hierdoor juist voortdurend bezig bent met het probleem dat de vervelende gevoelens veroorzaakt. Daardoor is het probleem heel duidelijk aanwezig en wordt het misschien zelfs wel groter dan dat het in werkelijkheid is."
          },
          {
            "tekst": "Mindfulness is een aandachttraining die je helpt dichterbij je gevoel te komen, zonder erover te oordelen of er direct gevolg aan te geven. Je aanvaardt de situatie zoals die is en creëert zo ruimte om problemen van een andere kant te bekijken. Door dit proces te trainen, leef je intenser en kan je tegelijkertijd makkelijker ontspannen."
          },
          {
            "tekst": "Heb jij net te maken gekregen met een teleurstelling? Sta stil bij wat je ervaart, laat alles toe en schiet niet in de ‘doe-stand’ om het weg te werken. Je mag dus best even balen! Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Je zult merken dat het probleem minder overheersend en zwaar wordt en dat je zo energie bespaart, doordat je niet oordeelt over de situatie en deze accepteert zoals het is."
          },
          {
            "tekst": "Lukt het niet meteen? Geen paniek! Het heeft vaak even tijd nodig om op een nieuwe manier met situaties om te gaan. Maar door dit regelmatig toe te passen, zal je ervaren dat je er steeds beter in wordt."
          },
          {
            "tekst": "En bedenk je: het is onmogelijk om je altijd fijn en gelukkig te voelen. Er zullen altijd dingen op je pad komen die minder leuk zijn of die zorgen voor teleurstelling. Dat is onderdeel van het leven."
          },
          {
            "kop": "Direct contact met een hulpverlener"
          },
          {
            "tekst": "Heb jij last van prestatiedruk en heb je behoefte aan persoonlijke hulp of advies? Neem (anoniem) contact op met een van de medewerkers van de MIND Hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl/"
          },
          {
            "kop": "Meer lezen"
          },
          {
            "lijst": [
              "Lees meer over wat piekeren inhoudt en bekijk onze tips.",
              "Lees meer over stress en bekijk onze tips.",
              "Lees meer over mindfulness.",
              "Lees meer over cognitieve gedragstherapie."
            ]
          },
          {
            "kop": "Meer kijken"
          },
          {
            "lijst": [
              "Bekijk deze video van Brainwash waarin psychiater en hoogleraar Dirk De Wachter pleit om plezier in gewone dagelijkse dingen te vinden. Ook gaat hij in op hoe je de ‘lastigheden van het leven’ een plaats kan geven.",
              "Bekijk deze video van YoungCapital waarin trainer Paulien tips geeft voor het omgaan met teleurstellingen. Zoals omdenken en kijken naar wat je ervan kan leren."
            ]
          }
        ]
      },
      {
        "titel": "Zorg voor balans",
        "intro": "Door de druk om te presteren verliezen we onszelf soms uit het oog. We gaan maar door en dit zorgt ervoor dat de balans verstoord raakt tussen dingen die energie vragen en energie geven. Dit terwijl deze balans heel belangrijk is om zowel lichamelijk als mentaal gezond te blijven. Heb jij een goede balans? Hoe zorg jij ervoor dat je voldoende ontspant en beweegt? En hoe verbind jij je met de mensen om je heen?",
        "blokken": [
          {
            "tekst": "De opdrachten van vandaag geven je inzicht in jouw energiegevers en -nemers en helpen je te zoeken naar balans. Ook krijg je tips om je te ontspannen, voldoende te bewegen en om je te verbinden met anderen."
          },
          {
            "kop": "Opdracht 1. Wat zijn jouw energiegevers en energienemers?"
          },
          {
            "tekst": "Download deze pdf of pak pen en papier en trek een streep door het midden. Zet aan de linkerkant: Dit geeft mij energie en aan de rechterkant: Dit kost mij energie. Vul nu het schema in met de activiteiten uit jouw dagelijkse leven. Denk aan je studie of werk, familie, vrienden, sport, hobby’s, social media gebruik etc. Maak het zo concreet mogelijk. Schrijf bijvoorbeeld niet onder Dit kost mij energie : mijn studie/werk, maar benoem specifiek wat maakt dat jou dit energie kost. Misschien is het de tijd die je eraan kwijt bent of vind je studeren niet leuk om te doen. En misschien zijn er wel onderdelen die je wel energie geven? Zoals de voldoening wanneer je weer iets nieuws hebt geleerd."
          },
          {
            "kop": "Opdracht 2. Zoek naar balans"
          },
          {
            "tekst": "Wanneer je het schema hebt ingevuld, bekijk het dan eens kritisch. Zijn de activiteiten die je energie geven en die je energie kosten in balans? Zo niet, dan is het belangrijk hier iets aan te doen."
          },
          {
            "tekst": "Kies 1 ding uit de rechterkolom dat je wil veranderen en bedenk een oplossing. Kost het je energie om ieder weekend naar je ouders te gaan, bijvoorbeeld omdat je daar nog een weekendbaan hebt? Probeer een baan te vinden dichtbij waar je woont, zodat je niet ieder weekend hoeft te reizen. Ben je vaak overprikkeld, omdat je agenda te vol zit doordat je eigenlijk nooit nee zegt? Ga je grenzen aangeven, zodat je weer meer rust en controle krijgt over jouw eigen dagplanning. Kijk nu naar de lijst van energiegevers. Probeer deze dingen voldoende in je leven terug te laten komen."
          },
          {
            "tekst": "En onthoud: Er zullen altijd activiteiten in je leven zijn die je energie kosten, maar als deze in balans zijn met je energiegevers, dan kan je dit zeker aan en ben je minder kwetsbaar voor ongezonde stress."
          },
          {
            "tekst": "Hoewel we eigenlijk allemaal wel weten dat een gezonde levensstijl bijdraagt om je mentaal fit te voelen en goed in balans te zijn, is het soms best lastig dat ook daadwerkelijk te volgen. Hieronder geven we een aantal tips om voldoende te ontspannen en te bewegen. Ook geven we je tips om je te verbinden met anderen, want ook dat draagt bij aan hoe goed jij in je vel zit."
          },
          {
            "kop": "Tips om voldoende te ontspannen"
          },
          {
            "tekst": "Om je lichaam en geest te laten herstellen van inspanning is het belangrijk om voldoende te ontspannen. Je kan veel meer aan als je regelmatig ontspant. Het lukt dan beter om te gaan met stress en de eisen die aan je gesteld worden."
          },
          {
            "tekst": "Onderstaande tips helpen je hierbij."
          },
          {
            "lijst": [
              "Bedenk wat je gaat doen om voldoende te ontspannen. Wat ontspant jou? Voor de een is dat sporten en voor de ander is dat het lezen van een boek of yoga.",
              "Geef ontspannende activiteiten een plek in je weekplanning.",
              "Vind je het lastig om te ontspannen? Doe deze ontspanningsoefeningen.",
              "Probeer ontspannen echt over ontspannen te laten gaan en hier niet weer een uitdaging of prestatie in te leggen. Wat we bedoelen; ontspannen hoeft niet te gaan over uren achter elkaar op een yogamatje liggen, meedoen aan een blote voeten challenge of wekelijkse detox-dagen."
            ]
          },
          {
            "kop": "Tips om voldoende te bewegen"
          },
          {
            "tekst": "Bewegen is een effectieve manier om je hoofd leeg te maken! Bovendien heeft regelmatig sporten en bewegen een positief effect op hoe je je lichamelijk én mentaal voelt. Probeer daarom elke dag minimaal een half uur matig intensief te bewegen. Je beweegt matig intensief bij activiteiten die zorgen voor een verhoogde hartslag en een versnelde ademhaling. Matig intensieve activiteiten zijn bijvoorbeeld wandelen, fietsen, paardrijden of trampolinespringen."
          },
          {
            "tekst": "Onze tips:"
          },
          {
            "lijst": [
              "Bedenk eerst wat je gaat doen. Maak een lijstje met alle mogelijkheden die jij hebt om te bewegen. Wat vind je leuk om te doen? Wandelen of yoga? Fietsen of fitnessen?",
              "Maak een schema voor de week, zodat je niet elke ochtend hoeft te bedenken wat je gaat doen.",
              "Zoek een maatje. Dit is gezelliger en je stimuleert elkaar gemotiveerd te blijven.",
              "Stel jezelf een beloning in het vooruitzicht voor als je dit een week hebt gedaan.",
              "Doe mee met de MIND Blue Monday Run en wandel of ren tegen depressie en vóór mentale gezondheid! Drie goede redenen om mee te doen: 1) Je zorgt voor meer begrip voor mensen die last hebben van somberheid en depressie. 2) Je haalt donaties op voor MIND om mensen met psychische klachten beter te helpen. En 3) Je verbetert je eigen fysieke en mentale gezondheid door in de buitenlucht te bewegen."
            ]
          },
          {
            "kop": "Tips om je te verbinden met andere mensen!"
          },
          {
            "tekst": "Wist je dat contact met andere mensen heel belangrijk voor ons is om goed in ons vel te zitten? Dit komt omdat wij mensen van nature groepsdieren zijn. Dit merk je vast ook zelf, want hoe fijn is het om leuke dingen met anderen te delen? En wat kan je beter gebruiken dan steun van de mensen in je omgeving op de momenten dat je het moeilijk hebt? Maar ook steun geven, helpt om je beter te voelen. Zoek daarom verbinding met anderen!"
          },
          {
            "tekst": "Vind je het wel eens lastig om je open te stellen of echt te ‘connecten’ met anderen? In dit uitgebreide artikel van Psychologie Magazine lees je over 3 manieren om relaties te verdiepen en vind je tips uit de wetenschap."
          },
          {
            "tekst": "Andere tips zijn:"
          },
          {
            "lijst": [
              "Spreek af met een vriend, vriendin of familielid. Maak het gezellig met een hapje en een drankje. Overleg vooraf dat je elkaar vragen gaat stellen om elkaar nog beter te leren kennen. Stel elkaar om de beurt een vraag. Download deze pdf voor voorbeeldvragen (pagina 2).",
              "Maak een Spotify playlist en deel deze met 1 of meerdere vrienden. Of stel samen een playlist op. Muziek verbindt en ook op deze manier leer je elkaar beter kennen."
            ]
          },
          {
            "kop": "Direct contact met een hulpverlener"
          },
          {
            "tekst": "Heb jij last van prestatiedruk en heb je behoefte aan persoonlijke hulp of advies? Neem (anoniem) contact op met een van de medewerkers van deMIND Hulplijn. Je kan bellen, chatten, Whatsappen of mailen met een van onze psychologen of maatschappelijk werkers."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl/"
          },
          {
            "kop": "Meer lezen"
          },
          {
            "lijst": [
              "Heb jij moeite met ontspannen? Lees deze 7 herkenbare dingen als je je niet goed kunt ontspannen.",
              "Kan jij wel wat handvatten gebruiken om te kunnen ontspannen? Lees onze tips voor ontspanning.",
              "Lees dit artikel van Psychologie Magazine over leren leven met meer aandacht. Met info en een oefening over hoe je goede mini-gewoonten in je dagelijkse routine kan passen. Want je hoeft je leven niet om te gooien om beter voor jezelf te zorgen."
            ]
          },
          {
            "kop": "Meer kijken"
          },
          {
            "lijst": [
              "Bekijk deze video met Erik Scherder (hoogleraar klinische neuropsychologie aan de VU) waarin hij vertelt waarom bewegen belangrijk is. Hij motiveert jou om een half uur per dag te bewegen. Hij legt namelijk uit wat je er allemaal voor terugkrijgt! Note: Deze video is eerder gebruikt voor een challenge waarbij de opdracht was om een half uur matig intensief te bewegen."
            ]
          }
        ]
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
        "intro": "Iedereen ervaart wel eens stress. Om ervoor te zorgen dat stressvolle momenten in jouw leven niet leiden tot ongezonde stress, beginnen we vandaag bij de basis: het herkennen van stress. Waaraan merk jij dat je stress hebt?",
        "blokken": [
          {
            "tekst": "Als je weet wat jouw signalen van stress zijn, kan je achterhalen wat de stress veroorzaakt. Vandaag krijg je opdrachten waarin je kijkt naar je stresssignalen, bronnen van stress en jouw energiebalans."
          },
          {
            "kop": "Opdracht 1: Krijg inzicht in jouw stress"
          },
          {
            "tekst": "Pak pen en papier en ga even zitten."
          },
          {
            "kop": "Opdracht 1a. Wat zijn jouw stresssignalen?"
          },
          {
            "tekst": "Schrijf op hoe jij stress bij jezelf herkent: wat zijn jouw persoonlijke stresssignalen? De signalen van ongezonde stress kunnen lichamelijk zijn, bijvoorbeeld: slecht slapen, maagpijn, hoofdpijn, gespannen schouders en nek en onrustige darmen. Of mentaal, zoals: gejaagdheid, snel boos worden, huilbuien, piekeren en moeite hebben met concentreren."
          },
          {
            "kop": "Opdracht 1b: Wat zijn jouw bronnen van stress?"
          },
          {
            "tekst": "Schrijf op wat de oorzaken van die stress zijn. Dit kan één ding zijn, zoals: drukte op je werk, onenigheid met de buren of een familielid, een verhuizing of zorgen om geld. Maar nog veel vaker is het een combinatie van dingen. Misschien ga je op dit moment door een stressvolle periode, maar dat hoeft natuurlijk niet. Denk in dat geval terug aan momenten in je leven die je als stressvol ervaren hebt en schrijf deze op."
          },
          {
            "tekst": "Het vraagt misschien wat oefening, maar probeer in je dagelijkse leven bewust te zijn van jouw stresssignalen. Het helpt om op vaste momenten even te checken hoe het met de stress staat. Geeft jouw lichaam het signaal af dat je te veel stress ervaart, sta daar dan bij stil! Kijk of je de oorzaak kan veranderen of anders kan omgaan met de situatie. Hiervoor krijg je de aankomende dagen verschillende opdrachten met handvatten."
          },
          {
            "kop": "Opdracht 2. Breng jouw energie in balans"
          },
          {
            "tekst": "Voor veel mensen zijn de dagen gevuld met activiteiten en verplichtingen. Misschien heb je een drukke baan en wil je daarnaast nog een opleiding doen. Of probeer jij de zorg voor je kinderen te combineren met je werk en het huishouden. Of je hebt een druk sociaal leven, waarbij je ook veel tijd besteedt aan vrijwilligerswerk. Misschien geldt voor jou zelfs een combinatie van deze dingen. De activiteiten waarmee jij je leven vult, kunnen je energie geven, maar kosten ook energie. Sta jij er wel eens bij stil hoe deze verdeling bij jou is? Als je dit weet, kan je je energie beter in balans houden."
          },
          {
            "kop": "Opdracht 2a. Wat zijn jouw energienemers en energiegevers?"
          },
          {
            "tekst": "Pak pen en papier en trek een streep door het midden. Zet aan de linkerkant: Dit geeft mij energie en aan de rechterkant: Dit kost mij energie . Vul het schema in met de activiteiten uit jouw dagelijks leven. Denk aan je werk, studie, familie/gezin, sport, vrijwilligerswerk, hobby’s, sociale contacten, huishouden, sociale media gebruik etc."
          },
          {
            "tekst": "Maak het zo concreet mogelijk. Schrijf bijvoorbeeld niet onder Dit kost mij energie : mijn huishouden, maar benoem specifiek wat maakt dat jou dit energie kost. Misschien is het de tijd die je eraan kwijt bent of vind je de huishoudelijke taken niet leuk om te doen. Of je vindt het lastig dat je het steeds maar weer opnieuw moet doen. En misschien zijn er ook wel onderdelen van het huishouden die je wel energie geven? Zoals een tevreden gevoel wanneer je huis weer lekker schoon is."
          },
          {
            "kop": "Opdracht 2b. Zoek naar balans"
          },
          {
            "tekst": "Kijk kritisch naar je lijst. Zijn de activiteiten die jou energie geven en die jou energie kosten in balans? Zo niet, kies dan één ding dat je wilt veranderen en bedenk een oplossing. Bijvoorbeeld:"
          },
          {
            "lijst": [
              "Geeft het filerijden naar je werk je iedere ochtend stress? Probeer of je je beter voelt door het openbaar vervoer te nemen.",
              "Kost boodschappen doen je steeds veel energie? Kijk of het mogelijk is om de boodschappen thuis te laten bezorgen of om de taak te laten doen door een huisgenoot.",
              "Heb je te veel dingen te doen? Probeer vaker ‘nee’ te zeggen."
            ]
          },
          {
            "tekst": "Er zullen altijd activiteiten in je leven zijn die je meer energie kosten dan geven, maar als deze in balans zijn met je energiegevers, dan kan je dit zeker aan en ben je minder kwetsbaar voor ongezonde stress."
          },
          {
            "kop": "Praat erover!"
          },
          {
            "tekst": "Als je merkt dat je te veel stress ervaart, kan het opluchten om er met iemand over te praten. Praat erover met iemand die je vertrouwt, zoals een partner, familielid of vriend. Samen weet je vaak meer. Waarschijnlijk zal je merken dat je niet de enige bent die af en toe veel stress ervaart."
          },
          {
            "tekst": "Heb je veel spanning van je werk? Praat dan eens met een collega of leidinggevende. Jullie kunnen dan samen kijken hoe je iets aan de situatie kan veranderen."
          },
          {
            "tekst": "Heb je veel stress en weet je niet goed wat je moet doen? Je huisarts kan je helpen en je zo nodig doorverwijzen."
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees meer over stress",
              "Op zoek naar persoonlijk advies? Lees meer over de MIND Hulplijn"
            ]
          }
        ]
      },
      {
        "titel": "Ontspan",
        "intro": "Om ongezonde stress te voorkomen, moet je de dingen die je moeite kosten genoeg afwisselen met ontspannende dingen. Doe je dat niet, dan krijg je lichamelijk en mentaal niet de tijd om bij te komen. Dan stapelen spanning en vermoeidheid zich op en kan het je te veel worden. Toch lukt het veel mensen niet om echt de tijd te nemen om te ontspannen. Daarom geven we vandaag een les in ontspannen.",
        "blokken": [
          {
            "tekst": "Nu denk je misschien: daar heb ik geen tijd voor! Maar echt: door iedere dag kleine momenten van ontspanning in te bouwen, ga je gemakkelijker om met stress."
          },
          {
            "tekst": "Vandaag krijg je een opdracht en tips hoe je blijvend ontspant in je dagelijks leven. Maar eerst kan je testen of je genoeg doet om te ontspannen en te herstellen."
          },
          {
            "linkLabel": "Doe de test!",
            "linkUrl": "http://formulier.wijzijnmind.nl/stresstest-ontspanning-en-herstel"
          },
          {
            "kop": "Opdracht: Breng in kaart wat jou ontspant"
          },
          {
            "tekst": "Bedenk voor jezelf wat jou ontspant. Voor de een is bewegen heel ontspannend: een rondje (hard)lopen, fietsen of een uurtje zwemmen. Een ander ontspant juist door het lezen van een boek of tijdschrift, het kijken van een film of het nemen van een warm bad. Schrijf voor jezelf eens op wat jij allemaal ontspannende activiteiten vindt. Heb je dit in kaart?"
          },
          {
            "tekst": "Kijk daarna of je elke dag minstens één van deze dingen doet. Is dat niet zo? Dan is het tijd om daar verandering in te brengen en elke dag bewust momenten van ontspanning in te plannen. Natuurlijk is het voor de meesten van ons niet weggelegd om dagelijks een uitgebreide massage te nemen, maar dingen als een rondje lopen of echt even de tijd nemen voor het drinken van een kopje thee kunnen iedere dag."
          },
          {
            "kop": "Verschillende manieren om te ontspannen"
          },
          {
            "tekst": "Er zijn verschillende manieren om te ontspannen. Soms helpt het om iets actiefs te doen waardoor je afleiding hebt en even niet met je hoofd in de stress zit. Op andere momenten helpt het juist om rust te nemen en ruimte te geven aan wat er in je omgaat. Beide soorten ontspanning zijn belangrijk: ze vullen elkaar aan."
          },
          {
            "tekst": "Er zijn geen resultaten gevonden. Controleer de spelling of probeer een andere zoekterm."
          },
          {
            "tekst": "Voorbeelden van actieve ontspanning"
          },
          {
            "tekst": "Bij deze vormen van ontspanning ben je bezig met iets wat je leuk vindt en dat je helpt om je aandacht te verleggen:"
          },
          {
            "lijst": [
              "Bewegen: wandelen, fietsen, sporten, dansen, yoga",
              "Contact: tijd doorbrengen met vrienden, lachen, praten",
              "Creatief bezig zijn: tekenen, muziek maken, schrijven, LEGO, koken",
              "Puzzelen: denksport, kruiswoordpuzzels, sudoku’s, legpuzzels"
            ]
          },
          {
            "tekst": "Voorbeelden van ontspannende rustmomenten"
          },
          {
            "tekst": "Deze vormen van ontspanning helpen je juist om te vertragen, te voelen en gedachten de ruimte te geven:"
          },
          {
            "lijst": [
              "Ontspanningsoefeningen: mindfulness, ademhalingsoefeningen, meditatie",
              "Buiten zijn: de natuur opzoeken, tuinieren, blokje om",
              "Slaap en rust: zorgen voor genoeg slaap en korte pauzes overdag",
              "Rustmomenten: een warm bad nemen, massage, lezen"
            ]
          },
          {
            "tekst": "Niet alle manieren van ontspannen zijn even goed voor je. Sommige dingen lijken op het moment zelf te helpen, maar geven op de lange termijn juist meer stress of klachten:"
          },
          {
            "lijst": [
              "Alcohol of drugs: overmatig gebruik kan je stemming en slaap verslechteren.",
              "Roken: lijkt even rust te geven, maar verhoogt juist je stressniveau.",
              "Ongezond eten: overeten of veel snacken geeft kort plezier, maar geen echte ontspanning.",
              "Langdurig scrollen of tv-kijken: uren op sociale media, eindeloos nieuws kijken of bingewatchen zorgt vaak niet voor rust, maar voor overprikkeling.",
              "Thuiszitten: door stress kan het verleidelijk zijn om thuis te blijven en alle afspraken af te zeggen. Maar daardoor ga je je niet beter voelen. Blijf dingen doen en houd contact met anderen. Maar zorg voor een balans met rustige momenten. Dat helpt je hersenen om negatieve gevoelens beter te verwerken."
            ]
          },
          {
            "kop": "Tips"
          },
          {
            "kop": "Tip 1. Neem minipauzes"
          },
          {
            "tekst": "Zorg elke dag voor minipauzes. De hele dag onafgebroken bezig zijn met je werk of andere dingen die moeten draagt niet bij aan een gezond stressniveau. Probeer ieder uur ongeveer vijf ontspannende minuten te hebben. Neem bijvoorbeeld de tijd voor dat kopje thee, maak een gezond hapje voor jezelf en eet deze met aandacht op. Ga een paar minuten naar buiten om frisse lucht te halen of richt je even op je ademhaling en wat je op dit moment ziet, hoort en voelt."
          },
          {
            "kop": "Tip 2. Probeer een ontspanningsoefening uit"
          },
          {
            "tekst": "Heb je het idee dat je al wat langer spanning opbouwt of vind je het lastig om te ontspannen? Dan kan het helpen om ontspanningsoefeningen te proberen. Op onze website vind je allerlei oefeningen, die je kunnen helpen te ontspannen."
          },
          {
            "kop": "Extra tip"
          },
          {
            "tekst": "Sommige mensen vinden yoga een fijne manier om tot rust, je hoofd leeg te maken en weer goed te ademen. Wil jij eens kijken of yoga wat voor jou is? Bekijk de yogavideo van yogadocente Ayra."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=yflBCPC5v1w"
          }
        ]
      },
      {
        "titel": "Slim omgaan met je tijd",
        "intro": "Heb jij altijd het gevoel tijd tekort te komen? Je kan leren om je tijd beter in te delen. Dat helpt je om rust te houden en geeft je handvatten om je minder door anderen te laten leiden. Vandaag krijg je een opdracht en drie tips om beter met je tijd om te kunnen gaan.",
        "blokken": [
          {
            "kop": "Opdracht: Vier stappen om je tijd te managen"
          },
          {
            "tekst": "1. Maak een lijstje van alle taken die je vandaag wil doen."
          },
          {
            "tekst": "2. Bedenk hoe belangrijk elke taak is en of het echt vandaag moet. Streep de taken die kunnen wachten weg. Het aantal taken voor vandaag moet wel haalbaar zijn."
          },
          {
            "tekst": "3. Geef de taken een nummer. Nummer 1 is de activiteit of klus waar je mee gaat starten. Die moet echt vandaag en is het belangrijkste."
          },
          {
            "tekst": "4. Werk de taken in de aangegeven volgorde af en geniet van het tevreden gevoel als je een streep door taak op de lijst haalt!"
          },
          {
            "tekst": "Probeer deze manier vaker in te zetten op dagen dat je veel moet doen."
          },
          {
            "kop": "Tips"
          },
          {
            "kop": "Tip 1. Focus op één taak in plaats van veel tegelijk doen"
          },
          {
            "tekst": "Vraag jezelf af: ' Gebruik ik mijn tijd op dit moment het best?'. Als het antwoord 'nee' is, stop dan even met wat je aan het doen bent en ga met je volle aandacht verder met wat nu het belangrijkste is."
          },
          {
            "tekst": "Probeer te voorkomen dat je meerdere dingen tegelijk doet. Multitasken lijkt nuttig, maar dat is het niet. Het kost juist extra energie, maakt je sneller moe en zorgt er vaak voor dat je minder goed werk levert."
          },
          {
            "tekst": "Voorbeeld: tijdens het stofzuigen word je geappt door een vriend over een grappige anekdote. Vraag jezelf dan: ‘Maak ik nu het beste gebruik van mijn tijd?’ De kans is groot dat het antwoord ‘nee’ is. Bel of app later terug en zorg eerst dat je klaar bent met stofzuigen."
          },
          {
            "kop": "Tip 2. Check je e-mail, berichtjes en sociale media op vaste tijden"
          },
          {
            "tekst": "Deze tip heb je misschien al vaker gehoord, maar hij werkt erg goed en daarom willen we hem toch nog een keer noemen: check je berichten, sociale media en e-mails op vaste tijden en doe dat niet vaker dan 3 keer per dag. Bijvoorbeeld: ’s ochtends voordat je met andere dingen begint, net na de lunch en aan het eind van de middag. Op die manier kan je je tussendoor beter concentreren. Want waarom zou je de hele dag door bereikbaar moeten zijn en altijd direct moeten reageren? Dat hoeft (in de meeste gevallen) niet. Als er echt iets heel dringends is dan belt iemand je wel."
          },
          {
            "kop": "Tip 3. Spreek alleen af wat je ook echt kan doen"
          },
          {
            "tekst": "Zeg liever iets te weinig toe dan te veel. Zeg niet direct wat anderen willen horen zonder erover na te denken of dit voor jou haalbaar is. Bijvoorbeeld op je werk: ‘Ja, ik doe het wel. Het is om 5 uur af.' Of bij een uitnodiging voor een feestje waar je geen tijd voor hebt vanwege een andere afspraak: ‘Ik ga proberen het te combineren!’"
          },
          {
            "tekst": "Te veel beloven heeft als gevolg dat jij druk voelt om iets af te krijgen of om ergens te verschijnen. Het is veel prettiger voor jezelf én de ander om haalbare afspraken te maken. Op die manier is je leidinggevende of collega blij verrast als je toch een dag eerder met een verslag komt. En hetzelfde geldt voor je vriendin als je onverwacht toch op haar feestje verschijnt."
          },
          {
            "kop": "Extra ideeën om overzicht te houden"
          },
          {
            "lijst": [
              "Maak een week- of maandplanning. Neem een rustig moment om vooruit te kijken en je tijd te verdelen. Plan ook ruimte in voor onverwachte zaken.",
              "Pak moeilijke taken als eerste aan. Stel ze niet uit, dan heb je de rest van de dag een opgelucht gevoel.",
              "Doe één ding tegelijk. Multitasken lijkt handig, maar zorgt vaak voor meer onrust.",
              "Ruim je werkplek op. Een opgeruimde plek helpt je beter te concentreren.",
              "Bespreek je grenzen. Laat weten als het werk te veel of te druk is. Vaak zijn anderen zich daar niet van bewust."
            ]
          }
        ]
      },
      {
        "titel": "Stel grenzen en zeg nee",
        "intro": "Vind jij het lastig om je grenzen aan te geven en ‘nee’ te zeggen? Dan kan dat veel stress geven. Een keertje is natuurlijk niet zo erg, maar als dit vaak gebeurt dan is het belangrijk dat je voor jezelf opkomt en dat je kan zeggen wat je wil of juist niet wil. Dit noemen we ook wel assertiviteit. Hierdoor weten anderen waar ze aan toe zijn.",
        "blokken": [
          {
            "tekst": "Vandaag krijg je twee opdrachten om je grenzen beter te herkennen, aan te geven en vaker ‘nee’ te zeggen. Maar eerst kan je jezelf testen of je voldoende voor jezelf opkomt."
          },
          {
            "linkLabel": "Test je assertiviteit",
            "linkUrl": "http://formulier.wijzijnmind.nl/assertiviteit_stress"
          },
          {
            "kop": "Opdracht 1. Leer je grenzen kennen en aangeven"
          },
          {
            "kop": "Opdracht 1a. Ontdek je grenzen"
          },
          {
            "tekst": "Je kan je grenzen pas stellen als je weet waar je grenzen liggen. Gevoelens van boosheid, irritatie en verdriet kunnen een signaal zijn dat er over jouw grens is gegaan. Sta stil bij deze gevoelens en wat er vooraf gebeurde. Had je het idee dat de ander te weinig rekening hield met jouw behoeften? En op welk punt precies had je het idee dat jouw grens werd overschreden?"
          },
          {
            "tekst": "Schrijf je gedachten op. Door je ervaringen in kaart te brengen zal je steeds duidelijker aanvoelen waar jouw grenzen liggen."
          },
          {
            "kop": "Opdracht 1b. Geef je grenzen aan"
          },
          {
            "tekst": "Als je weet waar jouw grenzen liggen, kan je oefenen om dit aan te geven. Bedenk: de manier waarop je jouw grens aangeeft kan een belangrijke rol spelen in de reactie die je krijgt:"
          },
          {
            "tekst": "Vertel de boodschap vanuit jezelf."
          },
          {
            "lijst": [
              "‘Ik kan deze dienst niet weer invallen.'"
            ]
          },
          {
            "tekst": "Vertel over je gevoel en wat voor gevolgen het heeft voor jou."
          },
          {
            "lijst": [
              "'Ik vind het vervelend als ik steeds moet schuiven met andere activiteiten als andere vrijwilligers afzeggen.’"
            ]
          },
          {
            "tekst": "Vertel ook wat je van de ander wil."
          },
          {
            "lijst": [
              "‘Ik zou het fijn vinden als jullie ook andere vrijwilligers vragen om in te vallen.’",
              "Geef de ander de ruimte en luister goed. Hierdoor zal de ander zich gehoord voelen en ook eerder naar jou luisteren"
            ]
          },
          {
            "tekst": "Grenzen aangeven is goed en belangrijk, maar weet dat het ook soms gevolgen kan hebben. Als je heel stellig zegt wat allemaal niet kan, kan dit ertoe leiden dat mensen minder snel iets aan je vragen, terwijl het misschien om iets gaat dat je wél graag zou doen. Of collega’s moeten veel werk van je overnemen. Probeer daarom, waar het kan, samen in overleg te gaan over hoe je grenzen bewaakt, zodat het voor jou én de ander werkbaar blijft. Tegelijkertijd geldt: soms is overleg niet mogelijk en is het belangrijk dat je je grenzen aangeeft en daarbij blijft."
          },
          {
            "tekst": "Wij schreven ook een online gids over grenzen stellen. Daarin staan de opdrachten nog wat uitgebreider en krijg je nog meer tips."
          },
          {
            "kop": "Opdracht 2. Zeg nee!"
          },
          {
            "tekst": "‘Nee zeggen’ is een hele duidelijke manier om je grenzen aan te geven. Veel mensen zeggen bijna automatisch ‘ja’ op een verzoek. Vaak uit gewoonte, onzekerheid, angst of schuldgevoel. Herken je je hierin? Dan kan je meer gaan doen dan goed voor je is. Leer met de volgende opdrachten om vaker ‘nee’ te zeggen."
          },
          {
            "kop": "Opdracht 2a. Maak een ‘Ik zeg nee top 5’"
          },
          {
            "tekst": "Schrijf jouw ‘Ik zeg nee top 5’ op (dit mag ook een top 3 of een top 10 zijn). Dit zijn situaties waar je vaker ‘nee’ tegen wil zeggen. Schrijf het zo concreet mogelijk op. Start elke zin met: ‘Ik wil niet langer…’ Bijvoorbeeld:"
          },
          {
            "lijst": [
              "‘Ik wil niet langer altijd ‘ja' zeggen als mij wordt gevraagd in te vallen.’",
              "‘Ik wil niet langer ‘ja' zeggen als mijn collega mij aan het einde van de middag vraagt nog snel een rapport af te maken.’"
            ]
          },
          {
            "tekst": "Bedenk vervolgens waarom je geen ‘nee’ zegt in deze situaties. Vind je je werk zo leuk dat je graag alles wil doen? Of ben je bang dat anderen je niet aardig vinden als je ‘nee’ zegt? Dit laatste komt vaak voor. Ook hebben veel mensen het gevoel dat ‘nee zeggen’ tegen iemand egoïstisch overkomt."
          },
          {
            "tekst": "Oefen nu hardop. Stel je de situatie die je lastig vindt voor en zeg vervolgens eens hardop een paar keer ‘nee’! Het voelt misschien vreemd, maar dit kan echt nuttig zijn. Misschien merk je wel dat je een drempel over moet om hardop ‘nee’ te zeggen. En lucht het op als je het doet, ook al is er nu niemand bij."
          },
          {
            "kop": "Opdracht 2b. Zeg nee!"
          },
          {
            "tekst": "Breng het ‘nee zeggen’ in de praktijk. Als je ‘nee’ wil zeggen, kan je dat het beste als volgt doen:"
          },
          {
            "lijst": [
              "Zeg altijd eerst ‘nee’, en geef daarna pas je eventuele toelichting. Dus niet andersom. Draai er niet omheen. Dat is het meest duidelijk voor de ander.",
              "Zeg het op een vriendelijke, maar besliste manier.",
              "Kijk de ander aan.",
              "Je kan kiezen of je er uitleg bij wil geven. Het kan ook zijn dat je een alternatief geeft. Bedenk goed dat als je een reden opgeeft, dit een opening tot discussie biedt.",
              "Als je ervoor kiest toelichting te geven, houd het dan kort.",
              "Als iemand blijft aandringen, is het soms goed om je gevoelens daarover te benoemen. Bijvoorbeeld: ‘Ik vind het vervelend dat…’",
              "De ander kan teleurgesteld reageren. Geef daar ruimte voor en toon begrip."
            ]
          },
          {
            "tekst": "Vind je het lastig om meteen 'nee' te zeggen? Dat is heel normaal. Je kan voor jezelf wat ruimte krijgen om na te denken over je antwoord door te zeggen: 'Ik moet even kijken of dat in mijn agenda lukt' of 'Ik laat je straks weten of dat uitkomt' ."
          },
          {
            "tekst": "Wij schreven ook een online gids over ‘nee zeggen’. Daarin krijg je nog meer tips."
          }
        ]
      },
      {
        "titel": "Werk aan je leefgewoonten",
        "intro": "Gezonde gewoonten maken je sterker en minder gevoelig voor stress. Daarom is het goed om af en toe stil te staan bij je leefstijl en wat je kan verbeteren. Vandaag ga je aan de slag met een gewoonte die je wilt veranderen.",
        "blokken": [
          {
            "kop": "Opdracht: Pak een gewoonte aan"
          },
          {
            "tekst": "1. Kies één ongezonde gewoonte die je aan wilt pakken. Bijvoorbeeld weinig bewegen, ongezond of veel eten, alcohol drinken of veel op je telefoon zitten. Het kan zijn dat je aan een paar verschillende dingen denkt, maar maak het jezelf niet te ingewikkeld en pak ze één voor één aan."
          },
          {
            "tekst": "2. Beschrijf de gewoonte en welk gedrag daarbij hoort. Waarom wil je dit veranderen? Bijvoorbeeld: 'Ik wil minder op mijn telefoon zitten. Dit kost mij veel tijd die ik ook aan andere nuttige of leuke dingen kan besteden.'"
          },
          {
            "tekst": "3. Schrijf op wat je wil bereiken en hoe je dat gaat aanpakken. Maak je doel concreet, niet te groot en haalbaar. Bijvoorbeeld: 'Ik wil maximaal een kwartier per dag op sociale media zitten. Ik ga een tijdslimiet instellen, zodat ik er niet langer op kan.'"
          },
          {
            "kop": "Tips"
          },
          {
            "kop": "Tip 1. Zoek een maatje"
          },
          {
            "tekst": "Ga de uitdaging samen met iemand aan. Dit is gezelliger en jullie kunnen elkaar motiveren. Woon je samen? Vraag ook huisgenoten en partner om mee te doen. Als je de gewoonte samen aanpakt, val je minder makkelijk terug in oude patronen."
          },
          {
            "kop": "Tip 2. Beloon jezelf"
          },
          {
            "tekst": "Geef jezelf een kleine beloning als je het een week hebt volgehouden."
          },
          {
            "kop": "Tip 3. Houd vol!"
          },
          {
            "tekst": "Blijf oefenen met je nieuwe gewoonte. Lukt het even niet? Pak het de volgende dag gewoon weer verder op. Hoe vaker je het doet, hoe makkelijker het wordt. En je zal merken dat na een tijdje je gezonder en fitter voelt."
          },
          {
            "kop": "Extra: Beter Slapen Challenge"
          },
          {
            "tekst": "Slaap jij te weinig omdat je moeite hebt met slapen? Wij hebben een Beter Slapen Challenge met tips en oefeningen voor een betere nachtrust."
          },
          {
            "linkLabel": "Doe mee",
            "linkUrl": "https://formulier.wijzijnmind.nl/slaapchallenge_2022"
          }
        ]
      },
      {
        "titel": "Verander je gedachten",
        "intro": "Pieker jij veel en heb je vaak negatieve gedachten? De kans is groot dat jij veel stress ervaart. Vandaag krijg je opdrachten om piekeren aan te pakken en negatieve gedachten te vervangen door helpende gedachten.",
        "blokken": [
          {
            "tekst": "Wil jij eerst inschatten hoeveel je piekert? Doe de piekertest"
          },
          {
            "kop": "Opdracht 1. Plan een piekerkwartier in"
          },
          {
            "tekst": "Heb je vaak last van piekergedachten? Dan kan het helpen om er bewust tijd voor te nemen in plaats van er de hele dag mee bezig te zijn."
          },
          {
            "lijst": [
              "Plan iedere dag voor jezelf een vast tijdstip waarin je een kwartier heel bewust je zorgen overdenkt. Zet een wekker zodat je na 15 minuten stopt en iets anders gaat doen.",
              "Wanneer je buiten dit kwartier een piekergedachte krijgt, schrijf je deze op een ‘piekerlijstje’. Tijdens je piekerkwartier pak je dit lijstje erbij. Misschien zijn je zorgen tegen die tijd al minder belangrijk. Blijven je zorgen nog wel belangrijk, dan kan je hierover in je piekerkwartier rustig nadenken.",
              "Je kan tijdens het piekerkwartier je gedachten opschrijven. Dit kan helpen om je gedachten te ordenen. Als je dit elke dag doet dan zal je merken dat je buiten je piekerkwartier minder gaat piekeren."
            ]
          },
          {
            "tekst": "Heb je weinig last van piekeren? Dan hoef je dit niet te oefenen. Het is juist bedoeld voor mensen die merken dat hun gedachten vaak blijven malen."
          },
          {
            "tekst": "We schreven ook een online gids over piekeren. Naast bovenstaande opdracht zijn daarin nog meer tips en technieken te vinden om gepieker tegen te gaan."
          },
          {
            "linkLabel": "Vraag de tips aan",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_piekeren_myb_112021"
          },
          {
            "kop": "Opdracht 2. Daag je gedachten uit"
          },
          {
            "tekst": "Stress gaat vaak samen met negatieve gedachten. Het kan helpen die gedachten te onderzoeken en te veranderen. Gebruik hiervoor het onderstaande stappenplan. Je kan dit opschrijven in een schrift, op je telefoon of in een notitieboekje."
          },
          {
            "kop": "Stappenplan: daag je gedachten uit"
          },
          {
            "tekst": "1. Situatie: Beschrijf kort wat er gebeurde, zonder je gedachten of gevoelens erbij te zetten. Voorbeeld: 'Mijn collega keek afkeurend toen ik iets uitlegde tijdens de vergadering.'"
          },
          {
            "tekst": "2. Gevoel: Schrijf op wat je voelde (bijvoorbeeld bang, boos, verdrietig of beschaamd)."
          },
          {
            "tekst": "3. Sterkte van het gevoel (0–10): Geef aan hoe sterk dat gevoel was."
          },
          {
            "tekst": "4. Automatische gedachte: Wat dacht je op dat moment? Bijvoorbeeld: ' Mijn collega vindt dat ik het niet goed doe.'"
          },
          {
            "tekst": "5. Hoe geloofwaardig vond je die gedachte (0–10)?"
          },
          {
            "tekst": "Onderzoek de gedachte met deze vragen:"
          },
          {
            "lijst": [
              "Wat is het bewijs voor deze gedachte?",
              "Is er ook bewijs tegen?",
              "Wat is het ergste dat er zou kunnen gebeuren?",
              "Als dat gebeurt, kan ik daar overheen komen?",
              "Wat is het beste dat er kan gebeuren?",
              "Wat is het meest realistische?",
              "Hoe zou een ander in deze situatie denken?",
              "Wat zou ik tegen een vriend(in) zeggen die dit dacht?"
            ]
          },
          {
            "tekst": "7. Bedenk een helpende gedachte: Formuleer een positievere of realistischer gedachte. Voorbeeld: ' Misschien keek mijn collega gewoon geconcentreerd en had het niks met mij te maken.'"
          },
          {
            "tekst": "8. Hoe geloofwaardig voelt deze nieuwe gedachte (0–10)?"
          },
          {
            "tekst": "9. Hoe geloofwaardig voelt de eerste gedachte nu (0–10)?"
          },
          {
            "tekst": "10. Hoe sterk is het gevoel nu (0–10)?"
          },
          {
            "kop": "Oefeningen voor thuis"
          },
          {
            "tekst": "Wil jij graag aan de slag met het helpend maken van jouw gedachten? Wij schreven 2 oefeningen uit de cognitieve gedragstherapie voor thuis."
          },
          {
            "linkLabel": "Vraag de oefeningen aan",
            "linkUrl": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie"
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees meer over piekeren",
              "Lees meer over cognitieve gedragstherapie"
            ]
          }
        ]
      },
      {
        "titel": "Leef in het moment en accepteer teleurstellingen",
        "intro": "Mindfulness gaat over leven met aandacht. Door je aandacht volledig te richten op het hier en nu, leef je minder op de automatische piloot en geef je jezelf rust. Je bent bewust bezig met wat je ziet, hoort en voelt, zonder er direct iets mee te hoeven doen. Je hersenen zijn dan niet meer bezig met wat je allemaal nog wil of moet doen.",
        "blokken": [
          {
            "tekst": "Vandaag krijg je een simpele oefening die je bijna altijd en overal kan doen. Bijvoorbeeld in de trein, op je werk of thuis op de bank. Ook vind je een opdracht die je helpt bij het accepteren van teleurstellingen."
          },
          {
            "kop": "Opdracht 1. Doe een korte mindfulness oefening"
          },
          {
            "tekst": "Leun even achterover, kijk om je heen en besef je waar je op dit moment bent. Vraag jezelf af:"
          },
          {
            "lijst": [
              "Wat zie en hoor ik?",
              "Hoe zit of sta ik erbij?",
              "Zijn mijn schouders wel ontspannen? En mijn nek, kaken en voorhoofd?",
              "Hoe adem ik op dit moment? Snel of langzaam, vanuit mijn buik of vanuit mijn borst?"
            ]
          },
          {
            "tekst": "Herhaal deze oefening regelmatig."
          },
          {
            "tekst": "Mindfulness oefeningen voor thuis Wil je eens kijken of mindfulness iets voor jou is voordat je met een cursus begint? We stelden een online gids samen met tips en een aantal oefeningen om thuis aan de slag te gaan met mindfulness."
          },
          {
            "linkLabel": "Bekijk de oefeningen",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mindfulness"
          },
          {
            "kop": "Opdracht 2. Geef ruimte aan vervelende gevoelens"
          },
          {
            "tekst": "Iedereen krijgt te maken met teleurstelling of tegenslag. Gevoelens als verdriet, boosheid of irritatie horen daarbij. Vaak proberen we deze gevoelens weg te duwen, maar daardoor blijf je juist meer bezig met het probleem."
          },
          {
            "tekst": "Heb jij net te maken gekregen met een teleurstelling of andere vervelende gevoelens?"
          },
          {
            "lijst": [
              "Sta stil bij wat je ervaart en laat alles toe.",
              "Schiet niet in de ‘doe-stand’ om het weg te werken.",
              "Kijk er vanaf een afstandje naar en probeer er niets van te vinden."
            ]
          },
          {
            "tekst": "Je zal merken dat het probleem minder overheersend en zwaar voelt. Je bespaart energie, doordat je niet oordeelt over de situatie en deze accepteert zoals het is. Je creëert zo ruimte om problemen van een andere kant te bekijken."
          },
          {
            "tekst": "Lukt dit niet meteen? Dat is heel normaal. Het heeft vaak even tijd nodig om op een nieuwe manier met situaties om te gaan. Hoe vaker je dit oefent, hoe beter het gaat."
          },
          {
            "kop": "Meer info?"
          },
          {
            "lijst": [
              "Lees meer over mindfulness"
            ]
          }
        ]
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
        "intro": "We kunnen ons allemaal wel een situatie indenken waarin we bang voor iets waren. Bijvoorbeeld toen je een examen moest afleggen of toen je in een gevaarlijke verkeerssituatie terecht kwam. Angst is een hele normale en gezonde reactie op (dreigend) gevaar. Het zorgt ervoor dat je extra alert bent en in actie komt; dat je vecht of vlucht. Angst is dan ook een hele oude emotie. Toen mensen vroeger in het wild leefden was het van levensbelang dat iemand vluchtte op het moment dat hij of zij een beer of wolf tegenkwam.",
        "blokken": [
          {
            "kop": "Wat is angst?"
          },
          {
            "tekst": "Omdat angst jouw lichaam klaarmaakt om te kunnen vechten of vluchten is het een emotie die je heel lichamelijk ervaart. Zo gaat je hart sneller kloppen, kan je het warm krijgen en gaan zweten of gaan trillen en gaat je ademhaling sneller en adem je hoger. Ook kan je het benauwd krijgen, je licht in je hoofd voelen of misselijk worden. Allemaal lichamelijke verschijnselen die horen bij angst en waarover je je geen zorgen hoeft te maken. Bovendien zijn ze tijdelijk en verdwijnen ze vanzelf weer."
          },
          {
            "tekst": "Hoewel iedereen dus wel eens bang is, zijn sommige mensen erg bang zonder dat hier een duidelijke reden voor is. Hun lichaam maakt hen klaar om te vechten of te vluchten, zonder dat dit nodig is. Ze zijn bijvoorbeeld bijna voortdurend bezorgd over dagelijkse dingen of bang voor een dier, een omgeving of een situatie. Het kan heel vervelend zijn als deze angsten sterk zijn, vaak terugkomen of lang aanhouden. Ook kan angst samengaan met paniekaanvallen."
          },
          {
            "tekst": "We noemen het een angststoornis als deze klachten ervoor zorgen dat iemand hierdoor niet goed meer kan functioneren en moeite heeft met alledaagse dingen. Voorbeelden van angststoornissen zijn een specifieke fobie, sociale angststoornis, paniekstoornis en een gegeneraliseerde angststoornis. Je leest meer over deze angststoornissen op onze website."
          },
          {
            "kop": "Hoe werken paniekaanvallen?"
          },
          {
            "tekst": "Eerder vertelden we dat angst samengaat met veel lichamelijke verschijnselen. Een paniekaanval start vaak met lichamelijke angstverschijnselen, bijvoorbeeld een kloppend hart en benauwdheid of duizeligheid. Doordat iemand zijn of haar aandacht hierop richt nemen de angst en de lichamelijke klachten toe. Gedachten ploppen op, zoals; ‘Ik heb een hartaanval’ of ‘Ik ga flauwvallen’. Zo ontstaat er een (vicieuze) cirkel van angst en toename van lichamelijke klachten. Zie het figuur hieronder."
          },
          {
            "tekst": "Een logische reactie op deze situatie is weggaan uit de situatie waar je op dat moment bent. Bij sommige mensen leidt dit ertoe dat ze situaties waarin ze bang zijn een paniekaanval te krijgen, gaan vermijden. Hoe vermijden werkt en hoe dit de angst juist in stand houdt, daar gaan we later deze week verder op in."
          },
          {
            "tekst": "Het onderstaande filmpje van Angsthaas legt goed uit wat een paniekaanval is. De Angsthaas video’s worden gemaakt door iemand die met deze problematiek te maken heeft gehad en anderen wil helpen."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=8W9bT9DeelQ"
          },
          {
            "kop": "Je bent niet de enige!"
          },
          {
            "tekst": "Heb jij last van angsten of heb je een angststoornis? Je bent niet de enige! Ruim 1 op de 4 mensen in Nederland maakt in het leven een angststoornis door. Het is niet voor niets dat er veel over wordt geschreven en dat er veel video’s en podcasts over te vinden zijn!"
          },
          {
            "kop": "Doe de angsttest"
          },
          {
            "tekst": "Wil jij weten of je meer dan gemiddeld last hebt van angsten? Doe de angsttest en ontvang direct de uitslag. De uitslag vertelt je ook in hoeverre het belangrijk is om hulp te zoeken."
          },
          {
            "linkLabel": "Doe de test",
            "linkUrl": "https://formulier.wijzijnmind.nl/angsttest"
          },
          {
            "kop": "De ervaringen van Zoë"
          },
          {
            "tekst": "Zoë heeft een paniekstoornis. Wij vroegen haar vanuit haar ervaringen te reageren op de informatie die we jou per dag bieden:"
          },
          {
            "tekst": "Ik kan me herinneren dat ik vroeger wel vaker erg bang was, terwijl er eigenlijk niet echt iets aan de hand was. Een gevoel van onrust gevolgd door lichamelijke verschijnselen; mijn hart die harder ging kloppen, mijn focus die ik er niet bij kon houden, mijn handen die gingen zweten en ik werd licht in mijn hoofd. Ik snapte hier toen helemaal niets van, want iedereen om mee heen leek er geen last van te hebben. Ik heb hier jaren mee rond gelopen. Pas rond mijn 18e ben ik me erin gaan verdiepen en ben ik hulp gaan zoeken. Mijn hulpverlener legde me uit wat er aan de hand was en dat maakte alles voor mij duidelijk; - Angstklachten, en in mijn geval een paniekstoornis, zijn te vergelijken met een overactief brandalarm. De functie van een brandalarm is dat het alarm moet slaan op het moment dat er brand (gevaar) is. Iedereen heeft een brandalarm vanbinnen. Dit is een natuurlijke reactie. Je moet alarm slaan op het moment dat er gevaar is. Maar bij mensen met angst of paniekklachten is het brandalarm te actief en gaat het ook af als er maar een vleugje wind langskomt. Hoe vaker het brandalarm dit vleugje wind als gevaar ziet, hoe vaker het afgaat. - Toen mij dit werd uitgelegd, snapte ik opeens wat er in mij gebeurde en kon ik ermee aan de slag."
          },
          {
            "tekst": "Natuurlijk is dit het verhaal van slechts één ervaringsdeskundige. Ervaringen zijn persoonlijk en kunnen overlappen, maar zeker ook verschillen. Wil jij nog meer ervaringen lezen? Bekijk dan eens deze ervaringsverhalen."
          },
          {
            "kop": "Meer lezen over angst?"
          },
          {
            "lijst": [
              "Bekijk onze pagina over angststoornissen. Vanuit deze pagina kan je doorklikken naar specifieke pagina’s, zoals over de gegeneraliseerde angststoornis.",
              "Download onze flyer met tips bij paniekaanvallen.",
              "Op de website van de Angst, Dwang en Fobie stichting (ADF) vind je informatie over angststoornissen, een rijk aanbod op het gebied van trainingen en lotgenotencontact en nog veel meer."
            ]
          },
          {
            "kop": "Meer luisteren over angst?"
          },
          {
            "lijst": [
              "Luister naar de angstpodcast, aflevering 1. De keizerin van de emoties . Op Spotify staat deze podcast als volgt aangekondigd: ‘Daan en Remy gaan op zoek naar antwoorden op de ogenschijnlijk simpele vraag: wat is angst eigenlijk? Neuropsycholoog Erik Scherder vertelt over zijn hoogte- en wijdtevrees, Psychiater en psychotherapeut Nelleke Nicolai over het nut van angst en Daans moeder over de vroegste angsten van haar oudste zoon.’ Deze podcast is onderdeel van een reeks."
            ]
          },
          {
            "kop": "Meer kijken over angst?"
          },
          {
            "lijst": [
              "In deze video van de MIND Young Studio is Jesse Laport in de trein aan het woord over zijn angst voor treinreizen. Hij vertelt heel open over zijn angsten, hoe hij ermee omgaat en krijgt het ook even moeilijk tijdens het interview. Ook deelt hij zijn tips.",
              "In deze video van de MIND Young Studio vertellen verschillende jongeren van welke angsten ze last hebben.",
              "Deze video van Angsthaas legt uit hoe je lichaam je fopt tijdens een paniekaanval.",
              "Deze video van de MIND Young Studio gaat in op wat een paniekaanval is en wat je kan doen."
            ]
          }
        ]
      },
      {
        "titel": "Neem je angstgedachten onder de loep",
        "intro": "Angst heeft alles te maken met je gedachten. Vaak zijn dit angstige gedachten gericht op de toekomst (wat als…). Deze angstige gedachten leiden tot een angstig gevoel en bepaald gedrag. Zie het figuur hieronder. Een voorbeeld: Je hebt gedurende de dag allerlei gedachten wat er allemaal mis zou kunnen gaan thuis en op je werk, je voelt je hierdoor angstig en je raakt vermoeid en onrustig, je kan je slechter concentreren en je gedraagt je geprikkeld naar je omgeving. Met als gevolg dat je steeds minder dingen aanpakt. Of je hebt gedachten dat andere mensen negatief over je denken. Dit maakt je bang voor sociale situaties en vervolgens ga je deze situaties vermijden. Met als gevolg dat je nog banger wordt voor sociale situaties.",
        "blokken": [
          {
            "kop": "Het aanleren van realistische gedachten"
          },
          {
            "tekst": "Wanneer je weet hoe gebeurtenissen, gedachten, gevoelens, gedrag en gevolgen met elkaar te maken hebben, dan kun je je ook voorstellen dat wanneer je je angstgedachten weet te veranderen, dit invloed heeft op je gevoel en gedrag. Dit is het uitgangspunt van cognitieve gedragstherapie, een behandeling waarvan bewezen is dat deze vaak werkt bij angststoornissen. Het doel van cognitieve gedragstherapie is het aanleren van helpende gedachten. Dat zijn gedachten die realistisch zijn/die kloppen bij wat er aan de hand is en die zorgen voor neutrale of positieve gevoelens."
          },
          {
            "tekst": "Je kunt hier ook zelf mee aan de slag. Stel jezelf de vraag: Dreigt er daadwerkelijk gevaar? Of zijn mijn zorgen terecht? Waarschijnlijk ontdek je dat je angsten niet (helemaal) realistisch zijn. Dit inzicht kan je helpen om geruststellende gedachten te bedenken. Schrijf deze gedachten op of noteer ze in je telefoon en haal ze tevoorschijn op momenten dat je het moeilijk hebt."
          },
          {
            "kop": "Flyer Maak je gedachten helpend"
          },
          {
            "tekst": "Wil jij jouw angstgedachten aanpakken? Download dan onze flyer. Hierin staat 1 oefening om meer inzicht te krijgen in gedachten, gevoelens en gedrag. En 1 oefening om niet-helpende gedachten uit te dagen en te vervangen door helpende gedachten."
          },
          {
            "linkLabel": "Download de flyer",
            "linkUrl": "https://wijzijnmind.nl/media/5881/download/cognitieve-therapie-flyer-v1.pdf?"
          },
          {
            "kop": "Meer informatie over de behandeling van een angststoornis"
          },
          {
            "tekst": "Naast het veranderen van je angstgedachten naar gedachten die je helpen, is het bij de behandeling van angst ook van belang om juist datgene op te zoeken waar je bang voor bent: exposure (blootstelling). Hier gaan we later verder op in."
          },
          {
            "tekst": "Wil je meer lezen over de behandeling van een angststoornis, kijk dan eens naar de zorgstandaard Angstklachten en angststoornissen ."
          },
          {
            "tekst": "Vind je dit te veel tekst? De ADF Stichting liet op basis van de zorgstandaard Angstklachten en angststoornissen een beeldverhaal ontwikkelen."
          },
          {
            "tekst": "Ben je op zoek naar een behandelaar? Kijk dan eens op de website Kiezen in de ggz . Hier vind je handige informatie over ggz-instellingen, praktijken en behandelaren, wachttijden, vergoedingen en afstand tot de behandelaar."
          },
          {
            "kop": "De ervaringen van Zoë"
          },
          {
            "tekst": "Zoë heeft een paniekstoornis. Wij vroegen haar vanuit haar ervaringen te reageren op de informatie die we jou per dag bieden:"
          },
          {
            "tekst": "\" Ze zeggen altijd dat angst of paniek begint bij een gedachte. Maar op het moment dat je angst of paniek ervaart, lijken gedachten en gevoelens in elkaar over te gaan. Je weet dan niet meer wat eerst kwam en hoe je het moet stoppen. Bewust worden van die eerste gedachten vond ik dan ook heel lastig. Daarom ben ik een tijdje geleden begonnen met mindfulness via de app Calm. De app biedt een serie over angst, waarbij je meerdere oefeningen over angst krijgt en waar je onder andere leert te pauzeren tussen je gedachten en je gevoel en te observeren. Toen dit pauzeren mij lukte, kon ik inzien dat er een vals alarm was en geen echt gevaar. Ik ben dit meer een meer gaan oefenen en merk dat ik daardoor mijn angstgedachten sneller herken en mijn gevoel rustiger blijft.\""
          },
          {
            "tekst": "Natuurlijk is dit het verhaal van slechts één ervaringsdeskundige. Ervaringen zijn persoonlijk en kunnen overlappen, maar zeker ook verschillen. Wil jij nog meer ervaringen lezen? Bekijk dan eens deze ervaringsverhalen."
          },
          {
            "kop": "Meer lezen over gedachten bij angst?"
          },
          {
            "lijst": [
              "Bekijk op onze website de pagina over cognitieve gedragstherapie.",
              "Lees dit artikel van Women’s Health met 5 nuttige strategieën om je angstige gedachten in bedwang te houden .",
              "Mariëlle Faas van de ADF stichting schreef een persoonlijk blog : Hoe verander je angst in vertrouwen ? Luister jij liever? Ze heeft de blog ook ingesproken."
            ]
          },
          {
            "kop": "Meer luisteren over gedachten bij angst?"
          },
          {
            "lijst": [
              "In de podcast Paniek van De Podcast Psycholoog praat Marissa van der Sluis met hoogleraar klinische psychologie Merel Kindt. 'Over hoe eng het is om het gevoel van controle kwijt te zijn, maar ook hoe je hier weer overheen komt.'",
              "Zoë noemde de app Calm (€) als tip. De app biedt een serie over angst, waarbij je meerdere oefeningen over angst krijgt en waar je onder andere leert te pauzeren tussen je gedachten en je gevoel en te observeren."
            ]
          },
          {
            "kop": "Meer kijken over gedachten bij angst?"
          },
          {
            "lijst": [
              "Bekijk het animatiefilmpje Overstappen van angst naar vertrouwen van Eveline Tromp en Thomas Tobé om met drie eenvoudige stappen van angst naar vertrouwen te gaan."
            ]
          }
        ]
      },
      {
        "titel": "Ga je angst niet uit de weg",
        "intro": "De onderstaande cirkel herken je vast nog van de vorige keer, toen we stil stonden bij de invloed van je gedachten. Vandaag hebben we de cirkel wat verder ingevuld met voorbeelden en lichten we het onderdeel (vermijdings)gedrag uit.",
        "blokken": [
          {
            "kop": "Met angst maak je angst"
          },
          {
            "tekst": "Met angst maak je angst klinkt misschien een beetje vreemd, maar wat we hiermee bedoelen is dat je angstklachten in stand houdt als je bepaalde situaties of dingen gaat vermijden om zo de angsten niet onder ogen te komen. Terwijl als je deze confrontatie wel aangaat en merkt dat waar je bang voor bent uitblijft, je angst eerder zal uitdoven of beter te hanteren is."
          },
          {
            "tekst": "Dit geldt ook voor paniekaanvallen, bijvoorbeeld wanneer je situaties op voorhand vermijdt of direct verlaat als je een aanval voelt opkomen. In dit laatste geval voel je even opluchting, maar je blijft zo angst houden voor de angst."
          },
          {
            "kop": "Ga het niet uit de weg!"
          },
          {
            "tekst": "Ga de situaties en dingen waar je bang voor bent dus zo min mogelijk uit de weg, ook al is de drang om te vermijden nog zo sterk. Stel je erop in dat je spanning en lichamelijke verschijnselen gaat ervaren, maar bedenk je dat deze lichamelijke verschijnselen en onrust na een tijdje zullen afnemen. Op deze manier bouw je vertrouwen op dat je om kan gaan met de dingen waar jij bang voor bent."
          },
          {
            "tekst": "Is er bij jou sprake van een angststoornis? Vraag dan jouw hulpverlener om je hierbij te begeleiden. Tijdens een behandeling van een angststoornis wordt er vaak gebruik gemaakt van exposure therapie."
          },
          {
            "kop": "Exposure therapie"
          },
          {
            "tekst": "Exposure betekent blootstelling. Tijdens deze therapie kom je stap voor stap je angst onder ogen en ga je de confrontatie aan. Doordat je merkt dat hetgeen waar je bang voor bent niet gebeurt, nemen je angsten af of leer je er beter mee om te gaan. In onderstaande video van de VGCt (Vereniging voor Gedrags- en Cognitieve therapieën) zie je hoe een meisje met angst voor honden oefent met exposure van het Durfpoli-protocol ."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=bHcFg562gZc"
          },
          {
            "kop": "Laat naasten niet meegaan in jouw vermijdingsgedrag"
          },
          {
            "tekst": "Geef ook bij jouw naasten aan dat ze jou het beste kunnen helpen door juist niet mee te gaan in het vermijdingsgedrag. Ze hebben natuurlijk de beste bedoelingen, doen dit om je te ontlasten of te beschermen, maar het houdt jouw vermijdingsgedrag in stand. Ook helpt het niet als ze zoveel mogelijk van jouw angsten proberen weg te nemen, door je steeds gerust te stellen of taken over te nemen. Dit kan even prettig zijn, maar het is niet goed als de ander hier te ver in meegaat en er een patroon ontstaat waarbij jouw angst het leven van jou én de mensen in jouw directe omgeving gaat beheersen."
          },
          {
            "kop": "De ervaringen van Zoë"
          },
          {
            "tekst": "Zoë heeft een paniekstoornis. Wij vroegen haar vanuit haar ervaringen te reageren op de informatie die we jou per dag bieden:"
          },
          {
            "tekst": "\" Vermijden is de grootste boosdoener bij angst en paniek, dus dat mag je niet doen… En dat is ook echt zo, maar wat kost het veel energie en wat kan het lastig zijn! Wat mij altijd heeft geholpen en nog steeds doet, is om kleine stapjes te zetten bij iets nieuws of iets 'engs'. Ik spreek met mezelf af dat ik niet alles in 1 keer hoef te kunnen en dat iedere stap al een stap in de goede richting is. Hierdoor merk ik dat de lading er een beetje af is, wat al voor minder stress zorgt. Ook vind ik het idee prettig dat ik altijd iemand kan bellen op het moment dat ik de angst/paniek omhoog voel komen. Wat mij ook helpt is een hele chille, rustige afspeellijst die ik opzet in een drukke omgeving, zodat ik het geluid om me heen kan wegfilteren. Door dit alles gaat het vaak heel goed. Succeservaringen probeer ik altijd een beetje te vieren voor mezelf. Het maakt de volgende keer net iets makkelijker.\""
          },
          {
            "tekst": "Natuurlijk is dit het verhaal van slechts één ervaringsdeskundige. Ervaringen zijn persoonlijk en kunnen overlappen, maar zeker ook verschillen. Wil jij nog meer ervaringen lezen? Bekijk dan eens deze ervaringsverhalen."
          },
          {
            "kop": "Meer lezen over angst en vermijding?"
          },
          {
            "lijst": [
              "Lees het interview in Het Parool met Patricia van Oppen: Vermijden van angst zorgt voor grote problemen .",
              "Psychologie Magazine over hun online training (€) Van angst naar lef : ‘In deze training leer je hoe je alledaagse angsten overwint en meer zelfvertrouwen ontwikkelt. Je gaat aan de slag met oefeningen die helpen om stap voor stap meer te durven en krijgt praktische tips om kalm te blijven in spannende situaties.’"
            ]
          },
          {
            "kop": "Meer luisteren over angst en vermijding?"
          },
          {
            "lijst": [
              "365 Dagen Succesvol over hun podcastaflevering Je angst onder ogen zien : ‘In deze nieuwe 365-podcast bespreken David de Kock en Arjan Vergeer de grote vraag: leg jij je neer bij je angsten óf durf je je angsten te onderzoeken en onder ogen te komen? Dat laatste klinkt misschien spannend, maar het zou je zomaar eens kunnen helpen om ze te overwinnen.’"
            ]
          },
          {
            "kop": "Meer kijken over angst en vermijding?"
          },
          {
            "lijst": [
              "In deze video vertelt John over zijn angststoornis en deelt hij zijn inzicht over vermijden: ‘Ik ben er heel veel over gaan lezen en toen snapte ik op een gegeven moment dat je juist die plaatsen waar je bang voor bent niet moet gaan vermijden. Dat je iedere keer de grens opzoekt waarop de paniek toeslaat.’"
            ]
          }
        ]
      },
      {
        "titel": "Maak je angst bespreekbaar",
        "intro": "Loop jij rond met angstklachten en houd je dit voor jezelf? Niet doen! Vertel iemand in je omgeving die je vertrouwt, zoals een familielid, vriend/vriendin of collega over je angsten.",
        "blokken": [
          {
            "kop": "Praat erover!"
          },
          {
            "tekst": "De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn. En misschien herkennen zij zich ook wel in jouw klachten of hebben ze fijne tips. Begin gerust zelf met praten. Misschien hebben vrienden en familie wel door dat er iets bij je speelt, maar vinden ze het lastig erover te beginnen. In de meeste gevallen willen ze graag horen wat je dwarszit. En onthoud: jij bent de baas over wat je wel en niet aan wie wil vertellen."
          },
          {
            "tekst": "Heb jij al langer angstklachten en weet jouw omgeving er al van? Blijf ook dan met elkaar praten. Door met elkaar in contact te blijven, blijft de ander op de hoogte van wat er bij jou speelt."
          },
          {
            "kop": "Waarom het belangrijk is om te praten"
          },
          {
            "tekst": "Er zijn meerdere redenen te noemen waarom het belangrijk is te praten met de mensen in jouw omgeving, zoals familie en vrienden."
          },
          {
            "lijst": [
              "Door jouw naasten te betrekken, weten ze beter wat er in jou omgaat en kunnen ze ermee om (leren) gaan en je steun bieden. Dit draagt bij aan jouw gevoel er niet alleen voor te staan.",
              "Praten over je gevoelens lucht op!",
              "Vaak voel je je uiteindelijk sterker als je praat over je angsten. Je neemt zo de leiding en hebt het gevoel er iets mee te doen."
            ]
          },
          {
            "kop": "Tips om te praten over hoe je je voelt"
          },
          {
            "tekst": "Hoewel praten fijn kan zijn, weten veel mensen niet goed hoe ze woorden kunnen geven aan hun gevoel. Je bent dus echt niet de enige als je dit ervaart! Vragen die spelen zijn: Hoe begin je een gesprek, hoe bereid je het voor, met wie kan je praten en wat vertel je wel en niet? In deze online informatie vind je tips."
          },
          {
            "kop": "Zoek professionele hulp als jouw angstklachten je belemmeren"
          },
          {
            "tekst": "Hebben jouw angstklachten grote invloed op je dagelijkse leven? En heb je hiervoor nog geen hulp? Blijf er niet mee rondlopen als je er last van hebt. Zoek, naast dat je iemand in je omgeving in vertrouwen neemt, professionele hulp of begeleiding. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je indien nodig doorverwijzen. Als je het spannend vindt om alleen naar de huisarts te gaan, kan je natuurlijk altijd je partner of een vriend(in) of iemand anders waar je je prettig bij voelt meenemen!"
          },
          {
            "tekst": "Daarnaast kan je (anoniem) contact opnemen met de MIND hulplijn. Hier werken psychologen en maatschappelijk werkers die je persoonlijke hulp en advies kunnen geven."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindhulplijn.nl/"
          },
          {
            "kop": "Contact met gelijkgestemden"
          },
          {
            "tekst": "Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn met angstproblemen. Daarnaast kunnen andere mensen met angstklachten je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt."
          },
          {
            "tekst": "Zou jij eens willen praten met iemand die ook ervaring heeft met angstklachten?"
          },
          {
            "tekst": "Neem dan contact op met de hulplijn van de ADF Stichting."
          },
          {
            "tekst": "Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je ervaringen uitwisselen met mensen met dezelfde interesses."
          },
          {
            "linkLabel": "Ga naar het Connect portaal",
            "linkUrl": "https://wijzijnmind.nl/connect"
          },
          {
            "kop": "Ben jij naaste van iemand met een angststoornis?"
          },
          {
            "tekst": "Ook als naaste van iemand met een angststoornis kan het prettig zijn om ervaringen uit te wisselen met andere naasten. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. MIND Naasten Centraal biedt naast andere vormen van ondersteuning contactgroepen op veel plaatsen in het land. Ben jij op zoek naar contact met gelijkgestemden? Ook jij kan via het Connect portaal per e-mail berichten uitwisselen met mensen met dezelfde interesses."
          },
          {
            "kop": "Flyer met tips voor naasten van iemand met een angststoornis"
          },
          {
            "tekst": "Jij wil je naaste natuurlijk zo goed mogelijk ondersteunen bij het omgaan met zijn of haar angst. Ook voor jou kan dit soms best pittig zijn, want hoe stimuleer je de ander bijvoorbeeld om professionele hulp te zoeken of hoe ga je met elkaar in gesprek? In de flyer Tips als iemand in je omgeving een angststoornis heeft , gaan we hier verder op in. Ook krijg je tips zoals hoe je goed voor jezelf blijft zorgen en hoe je jouw eigen grenzen blijft bewaken."
          },
          {
            "linkLabel": "Download de flyer",
            "linkUrl": "https://wijzijnmind.nl/media/6510/download/Angst%20naasten%20v1.pdf?"
          },
          {
            "kop": "De ervaringen van Zoë"
          },
          {
            "tekst": "Zoë heeft een paniekstoornis. Wij vroegen haar vanuit haar ervaringen te reageren op de informatie die we jou per dag bieden:"
          },
          {
            "tekst": "\"Praten over mijn angst en paniekaanvallen heb ik lang lastig gevonden. Het is zo’n kwetsbaar stukje van mezelf en ik had altijd het gevoel dat niemand kon begrijpen wat ik voelde. Maar toen ik er over ging praten, kwam ik erachter dat heel veel mensen de gevoelens kennen. Misschien niet het gevoel van een paniekaanval, maar wel angstgevoelens. Vooral door het met mijn familie en vrienden te bespreken, kan ik veel meer mezelf zijn en aangeven als het even niet zo goed gaat. Ook in het dagelijkse leven merk ik een groot verschil. Voorheen maakte ik vaak excuses waarom ik niet kon afspreken of ergens heen gaan. Ik wilde toen niet zeggen dat ik het eng vond of bang was voor een paniekaanval. Tegenwoordig zeg ik het tegen mijn vrienden als ik iets spannend vind. De reacties die ik hierop krijg zijn allemaal zoveel beter dan ik ooit had verwacht. Mijn vrienden geven me de ruimte om zelf aan te geven wat wel en niet gaat en vragen me hoe ze me kunnen helpen om het me wel te laten lukken. Het maakt vaak al zo'n verschil als ik er even over kan praten of als ik het even aan kan geven."
          },
          {
            "tekst": "Bij sommige vrienden en familieleden merk ik wel dat het gesprek lastig kan zijn. Ik ben erachter gekomen dat dit vaak komt doordat ze niet goed weten wat ze moeten zeggen of hoe ze me kunnen steunen. Ik ben er zelf op gaan letten wat me helpt om dingen te blijven doen en door dit te delen en aan mijn naasten uit te leggen, krijgen zij een beter idee van hoe ze me kunnen helpen.\""
          },
          {
            "tekst": "Natuurlijk is dit het verhaal van slechts één ervaringsdeskundige. Ervaringen zijn persoonlijk en kunnen overlappen, maar zeker ook verschillen."
          },
          {
            "kop": "Meer lezen over het bespreekbaar maken van angst?"
          },
          {
            "lijst": [
              "In het artikel De moed om bang te zijn van Psychologie Magazine vertellen 6 BN’ers over hun angsten.",
              "In dit interview met de ADF stichting vertelt Erik Scherder, naar aanleiding van de al uitgezonden EO-televisieserie Erik Scherder laat zich niet kisten , open over zijn angst.",
              "Lees op de website van de ADF stichting diverse interviews van bekende en minder bekende mensen over hun ervaringen met angst.",
              "Op de website van MIND zijn veel verschillende ervaringsverhalen te lezen van mensen die last hebben van angst. Ook kan je jouw eigen verhaal vertellen."
            ]
          },
          {
            "kop": "Meer luisteren over het bespreekbaar maken van angst?"
          },
          {
            "lijst": [
              "Sacha Harland, zelf bekend met angstklachten, maakte de podcast reeks Bang, de podcast over angst . Wat hem hielp bij het overwinnen van zijn angsten was erover praten met anderen. In zijn podcastreeks gaat hij persoonlijke gesprekken aan met zijn gasten. Door zelf met anderen te praten over angst, hoopt hij dat de luisteraar dat ook gaat doen. Deze podcast is een reeks, luister de introductie."
            ]
          },
          {
            "kop": "Meer kijken over het bespreekbaar maken van angst?"
          },
          {
            "lijst": [
              "In deze video van Levensliedjes van MIND en de Hersenstichting vertelt Maud over haar angsten. Ook vertelt ze waarom het zo belangrijk is erover te praten. Maud: ‘Juist omdat we er niet over praten, denk je dat er negatieve reacties komen, terwijl dat totaal niet aan de hand is. Toen dacht ik bij mezelf; Ok, de enige manier waarop we dit kunnen oplossen is als ik er wel over ga praten.’ Tijdens de video maakt ze er samen met Delany een liedje over dat ze voordraagt aan de mensen die belangrijk voor haar zijn.",
              "Deze video van Angsthaas laat zien welke bekende gezichten last hebben van angsten. De Angsthaas video’s worden gemaakt door iemand die met deze problematiek te maken heeft gehad en anderen wil helpen."
            ]
          }
        ]
      },
      {
        "titel": "Ontspan en krijg grip op je ademhaling",
        "intro": "Ademen doe je automatisch. Je ademt zuurstof in en koolzuur uit. Je ademhaling past zich aan aan wat je doet. Bij inspanning heb je meer zuurstof nodig. Loop je bijvoorbeeld de trap op of trek je een sprintje naar de bus, dan versnelt je ademhaling. In rust vertraagt je ademhaling weer.",
        "blokken": [
          {
            "kop": "Ademhaling"
          },
          {
            "tekst": "Wanneer je angstig bent, gebeurt er iets geks met je ademhaling. Deze versnelt, zónder dat je daadwerkelijk een lichamelijke inspanning levert. Dit kan leiden tot een verkeerde ademhaling of zelfs hyperventilatie. Het zuurstofgehalte in je bloed wordt dan te hoog en het koolzuurgehalte te laag. Dit kan klachten geven zoals benauwdheid, misselijkheid en hoofdpijn. Het is bij angst of bij een paniekaanval dan ook belangrijk je ademhaling weer onder controle te krijgen."
          },
          {
            "tekst": "Hoe krijg je je ademhaling weer onder controle?"
          },
          {
            "tekst": "Ben je aan het hyperventileren of merk je dat je verkeerd ademt? Zoek als het kan een rustige plek. Misschien kun je even gaan zitten. Het kan fijn zijn je voeten stevig op de grond te zetten. Leg je handen op je buik. Je kunt je ogen sluiten als dat goed voelt."
          },
          {
            "tekst": "Focus op je ademhaling. Adem 3 seconden in door je neus en voel hoe je buik uitzet. Adem vervolgens zo’n 6 seconden uit door je mond en voel hoe je buik weer intrekt. Herhaal dit een tijdje totdat je je adem weer meer onder controle krijgt. Goed om te weten is dat de 3 seconden inademen en 6 seconden uitademen bij deze oefening een richtlijn zijn. Volg vooral het natuurlijke ritme van je eigen ademhaling, waarbij het belangrijk is dat je door je neus inademt en door je mond uit en dat je uitademing langer is dan je inademing."
          },
          {
            "tekst": "Het is handig om thuis te oefenen met een of meerdere ademhalingsoefeningen op momenten dat je je rustig voelt. Wanneer je bekend bent met het oefenen van je ademhaling, krijg je deze tijdens een moment waarop je je angstig voelt waarschijnlijk sneller onder controle."
          },
          {
            "kop": "Ontspanning"
          },
          {
            "tekst": "Naast het controleren van je ademhaling, is ontspanning belangrijk en waardevol wanneer je last hebt van angsten. Een ontspanningsoefening kan helpen op het moment dat je een angstaanval hebt, maar ontspannen is minstens zo belangrijk op andere momenten. Het nemen van voldoende rust en ontspanning helpt vaak gevoelens van angst te verminderen. De één ontspant bij een wandeling, de ander bij een uurtje sporten. Het kan ook zijn dat je oplaadt van het lezen van een goed boek of het luisteren naar een interessante podcast. Bedenk wat voor jou werkt en plan dagelijks deze momenten in."
          },
          {
            "kop": "Mindfulness"
          },
          {
            "tekst": "Veel mensen die last hebben van angst hebben baat bij het doen van mindfulness oefeningen. Het effect hiervan is aangetoond door middel van wetenschappelijk onderzoek. Met mindfulness oefeningen leer je je aandacht te vestigen op het hier en nu. Dit is wanneer je je angstig voelt heel helpend, omdat je je bij angst vaak verliest in gedachten die gericht zijn op de toekomst (Wat als…)."
          },
          {
            "tekst": "Wil je eens kennis maken met mindfulness? Wij schreven een flyer met tips en oefeningen. Ook is het mogelijk een inleidende workshop te volgen via de ADF Stichting."
          },
          {
            "linkLabel": "Download de mindfulness flyer",
            "linkUrl": "https://wijzijnmind.nl/media/5888/download/mindfulness-flyer-v1.pdf?"
          },
          {
            "kop": "De ervaringen van Zoë"
          },
          {
            "tekst": "Zoë heeft een paniekstoornis. Wij vroegen haar vanuit haar ervaringen te reageren op de informatie die we jou per dag bieden:"
          },
          {
            "tekst": "\"Ik probeer mijn dagen altijd te balanceren. Als ik weet dat ik een drukke dag heb waar mijn angst actiever zal zijn, plan ik erna tijd in om te ontspannen. Dit kan zijn; op bed liggen met Netflix, een half uurtje mediteren, lekker wandelen in het bos of gewoon buiten zitten, naar de lucht kijken en helemaal niets doen."
          },
          {
            "tekst": "Voorheen kon ik me hier heel schuldig over voelen. Ik was veel te streng voor mezelf en vond dat ik na een drukke dag of paar dagen gewoon door moest gaan. Dat doet iedereen toch?! Maar ik kwam er steeds meer achter dat dit helemaal niet hoeft. Iedereen heeft relaxdagen en dagen waarop ze minder doen. Toen ik dit inzag en meer tijd nam voor ontspanning merkte ik een groot verschil. De tijd om op te laden is zo belangrijk en het is zo waardevol om te weten hoe en wanneer je oplaadt.\""
          },
          {
            "tekst": "Natuurlijk is dit het verhaal van slechts één ervaringsdeskundige. Ervaringen zijn persoonlijk en kunnen overlappen, maar zeker ook verschillen. Wil jij nog meer ervaringen lezen? Bekijk dan eens deze ervaringsverhalen."
          },
          {
            "kop": "Meer luisteren om te ontspannen?"
          },
          {
            "lijst": [
              "Deze audiotrack van Angsthaas kan je afspelen op het moment dat je een paniekaanval hebt of als je spanning voelt opkomen. De opname speelt in op je gedachten. De Angsthaas video’s worden gemaakt door iemand die met deze problematiek te maken heeft gehad en anderen wil helpen.",
              "De podcastreeks Kalm met Klassiek van AVROTROS en NPO Radio 4 laat je dagelijks ontspannen door kalmerende klassieke muziek, soms aangevuld met ademhalingstips en meditatieoefeningen."
            ]
          },
          {
            "kop": "Meer kijken om te ontspannen?"
          },
          {
            "lijst": [
              "De Netfix-serie Headspace Guide to Meditation laat op een vriendelijke, geanimeerde manier de voordelen van meditatie zien en biedt technieken en begeleide meditaties waarmee je direct kunt beginnen."
            ]
          }
        ]
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
        "intro": "Op de eerste dag van deze themaspecial geven we je meer uitleg over wat hormonen zijn, wat hun rol is en hoe ze invloed kunnen hebben op onze gevoelens en gedrag.",
        "blokken": [
          {
            "kop": "Wat zijn hormonen en wat doen ze?"
          },
          {
            "tekst": "Hormonen zijn stoffen die ons lichaam maakt. Dit gebeurt in de klieren van verschillende lichaamsdelen. Het woord hormoon stamt af van het Griekse woord hormao , dat ‘in beweging zetten’ betekent. Via het bloed sturen hormonen onze organen en weefsels aan om verschillende functies van ons lichaam te regelen. Zo stimuleren ze om aan het werk te gaan of remmen ze juist af."
          },
          {
            "tekst": "Hormonen geven boodschappen door die effect hebben op verschillende processen in ons lichaam. Zoals op onze groei, voorplanting, stofwisseling, water- en zouthuishouding, emoties en gedrag. Deze themaspecial gaat vooral over de relatie tussen hormonen en je mind. Onze focus zal dus vooral liggen op emoties en gedrag."
          },
          {
            "tekst": "Dit filmpje, dat Clipphanger voor NPO Zapp maakte, legt uit wat hormonen met je doen:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=dEKvaPbwvY4"
          },
          {
            "tekst": "Hoewel bovenstaand filmpje zich vooral richt op geslachtshormonen zijn er dus nog veel meer hormonen. Daarnaast is het niet zo dat je een ‘orkaan van hormonen’ staat te wachten in de menopauze. Het gaat hier juist om een daling van hormonen. Op de laatste dag van deze themaspecial gaan we daar verder op in."
          },
          {
            "kop": "Wat zijn de rollen van verschillende hormonen?"
          },
          {
            "tekst": "Verschillende hormonen hebben op hun manier invloed op je gevoelens en je gedrag. Vaak zijn er meerdere hormonen tegelijk betrokken bij processen in je lichaam. Ook kunnen hormonen elkaar beïnvloeden. Hieronder wat voorbeelden van de invloed van hormonen bij stress, ontspanning, verliefdheid en verslaving."
          },
          {
            "tekst": "Stress De belangrijkste stresshormonen die je lichaam aanmaakt bij acute stress zijn cortisol, adrenaline en noradrenaline. Adrenaline en noradrenaline zijn ook neurotransmitters die een belangrijke rol hebben in het sympathisch zenuwstelsel. Zowel hormonen als neurotransmitters geven boodschappen door. Neurotransmitters doen dit via zenuwcellen en hormonen via het bloed. Het sympathisch zenuwstelsel zorgt voor actie en noemen we ook wel ‘het gaspedaal van het lichaam’."
          },
          {
            "tekst": "Stresshormonen maken jouw lichaam klaar om ‘te vechten of vluchten’. Ze verhogen jouw hartslag en zorgen ervoor dat er in je spieren extra energie vrijkomt. Het is een biologische reactie om zo om te kunnen gaan met stressvolle situaties met als doel te overleven. Bij onze verre voorouders was dit bijvoorbeeld een reactie op een beer of tijger. Vandaar het ‘vechten of vluchten’. Tegenwoordig ervaren we andere vormen van stress, maar de reactie van ons lichaam is hetzelfde gebleven."
          },
          {
            "tekst": "| ‘Mijn stresshormonen zijn verstoord door trauma waardoor ik vaak angstig ben.’ Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "tekst": "Als je langdurende stress ervaart, denkt je lijf steeds dat je in een noodsituatie zit. Je lichaam maakt dan te vaak of te lang stresshormonen aan. Hierdoor kan je hormoonsysteem uit balans raken. Ook kan er een disbalans optreden tussen het sympathische zenuwstelsel (het gaspedaal van het lichaam) en het parasympatische zenuwstelsel (het rempedaal van het lichaam dat zorgt voor rust). Naast lichamelijke klachten, zoals problemen met je spijsvertering en vermoeidheid kan dit ook bijdragen aan angstklachten, stressklachten of depressie."
          },
          {
            "tekst": "Kan jij wel wat handvatten gebruiken om op een gezonde manier met stress om te gaan? Meld je dan aan voor onze Minder Stress Challenge."
          },
          {
            "tekst": "Ontspannen door te knuffelen Wist je dat als je iemand knuffelt ook hormonen aanmaakt? Ze kunnen je zelfs beschermen tegen stress. Het gaat om het ‘knuffelhormoon’ oxytocine dat vervolgens de aanmaak van onder andere het ‘gelukshormoon’ serotonine stimuleert. Serotonine is naast een hormoon ook een neurotransmitter. Hetzelfde effect ontstaat als je een huisdier, zoals een hond of kat aait. Deze stofjes zorgen ervoor dat je stresshormonen zakken. Ook gebeurt dit meestal bij diegene die jij knuffelt. Mits de ander (zowel mens als dier) dit natuurlijk zelf ook wil."
          },
          {
            "tekst": "| ‘Knuffelen met mijn huisdier werkt kalmerend.’ Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "tekst": "Verliefdheid Ja, ook bij verliefdheid spelen hormonen een grote rol. In onderstaand filmpje van Erasmus MC vertelt Liesbeth van Rossum meer over de relatie tussen verliefdheid en hormonen:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=LkJD0RLwoFk"
          },
          {
            "tekst": "Verslaving en dopamine Bij beloning en verslaving komt het hormoon en de neurotransmitter dopamine vrij. Als je drugs gebruikt, ervaar je een kunstmatig geluksgevoel omdat er onnatuurlijk veel dopamine vrijkomt. Dit geeft een veel intenser geluksgevoel dan dat je vanuit jezelf op een natuurlijke manier kan voelen. Bij verslaving reageren je hersenen hierna minder gevoelig op dopamine. Er is daarom steeds meer drugs nodig - en dus steeds meer dopamine- om hetzelfde intense geluksgevoel te ervaren."
          },
          {
            "tekst": "Verschillende hormonen We noemden al een aantal hormonen (die vaak ook als neurotransmitter werken) in de voorbeelden hierboven. Hieronder hebben we een aantal belangrijke hormonen op een rijtje gezet met daarbij hun functie. We noemen ze los, maar zoals eerder benoemd, werken ze vaak samen en hebben ze invloed op elkaar."
          },
          {
            "tekst": "Er zijn geen resultaten gevonden. Controleer de spelling of probeer een andere zoekterm."
          },
          {
            "tekst": "Serotonine is een belangrijk hormoon als het gaat om het reguleren van je emoties. Het hormoon heeft invloed op je stemming en speelt een rol bij o.a. somberheid, depressie en slaapproblemen."
          },
          {
            "tekst": "Dopamine is betrokken bij aandacht, beweging, stemming en genot. Ook is dit hormoon betrokken bij verslaving."
          },
          {
            "tekst": "Endorfine heeft invloed op gevoelens van geluk of vreugde en kan pijnstillend werken. In deze video legt Clipphanger voor NPO Zapp uit wat endorfine is."
          },
          {
            "tekst": "Acetylcholine speelt een rol bij alertheid, gedachten en herinnering."
          },
          {
            "tekst": "Glutamaat heeft een stimulerende werking bij het verwerken van informatie, zoals aandacht, concentratie, geheugen en oriëntatie."
          },
          {
            "tekst": "GABA heeft een remmende werking en is betrokken bij een gevoel van rust. Je ervaart meer angst als er te weinig GABA is."
          },
          {
            "tekst": "Oxytocine wordt ook wel het knuffelhormoon genoemd. Het is belangrijk bij sociale contacten, verbinding, vriendschappen en seksualiteit. (Ook speelt het een rol bij de bevalling en borstvoeding)."
          },
          {
            "tekst": "Melatonine is belangrijk voor het slaap-waak ritme. Wanneer het donker wordt, gaat de productie van melatonine omhoog. Het zorgt voor de afremming van andere hormonen waardoor het lichaam kan ontspannen."
          },
          {
            "tekst": "Geslachtshormonen Ook geslachtshormonen hebben effect op onze gevoelens en gedrag:"
          },
          {
            "tekst": "Oestrogeen speelt een grote rol bij het ontwikkelen van vrouwelijke geslachtskenmerken, de menstruatie en de zwangerschap. Mogelijk kan dit hormoon bij sommige mensen van invloed zijn op hun humeur/stemming. Hier wordt nog veel onderzoek naar gedaan. Ook mannen maken dit hormoon aan, maar veel minder."
          },
          {
            "tekst": "Progesteron is een belangrijk hormoon als het gaat om de menstruatiecyclus en vruchtbaarheid. Het is een hormoon met een remmende werking. Zo remt het seksuele verlangens en kan het zorgen voor ontspanning en slaperigheid."
          },
          {
            "tekst": "Testosteron speelt een rol bij het ontwikkelen van mannelijke geslachtskenmerken, het aanmaken van sperma en bij seksueel opgewonden worden. Vrouwen hebben ook testosteron, maar in veel kleinere hoeveelheden dan mannen."
          },
          {
            "kop": "Geen eenrichtingsverkeer"
          },
          {
            "tekst": "Hormonen beïnvloeden dus niet alleen onze voorplanting en seksualiteit, maar zetten ons hele lichaam in beweging. Ook hebben ze een belangrijke rol bij hoe we ons voelen en gedragen. Maar het is geen eenrichtingsverkeer, zoals al blijkt uit onze voorbeelden over stress en knuffelen. Met ons gedrag en leefstijl kunnen we ook invloed uitoefenen op onze hormonen."
          },
          {
            "tekst": "Een paar voorbeelden:"
          },
          {
            "lijst": [
              "Door je assertief op te stellen en je grenzen aan te geven en te bewaken kan je (langdurige) stress en daarmee het vrijkomen van te veel stresshormonen tegengaan.",
              "Door voldoende te bewegen maak je hormonen aan zoals endorfine, dopamine en serotonine die zorgen voor een fijn gevoel."
            ]
          },
          {
            "kop": "Onderdeel van groter geheel"
          },
          {
            "tekst": "Ondanks dat hormonen invloed kunnen hebben op je mind is het goed te beseffen dat dit slechts een kleine bijdrage is in het grotere geheel waarin vele verschillende psychische en lichamelijke processen gaande zijn."
          },
          {
            "kop": "De aankomende dagen"
          },
          {
            "tekst": "De aankomende dagen verdiepen we ons verder in de werking van hormonen. Omdat je hormonen tijdens je leven veel veranderen, focussen we iedere dag op een andere levensfase."
          },
          {
            "tekst": "NB: In onze teksten maken we onderscheid tussen jongens en meisjes, mannen en vrouwen. Dit doen we om de teksten zo begrijpelijk mogelijk op te schrijven. We zijn ons er absoluut van bewust dat er meerdere genderidentiteiten zijn en dat niet iedereen die in een mannenlijf of vrouwenlijf geboren is, zich ook automatisch man of vrouw voelt."
          },
          {
            "kop": "Hulp en advies"
          },
          {
            "tekst": "Kan jij hulp gebruiken bij jouw persoonlijke situatie? Praat er met iemand in je omgeving over die je vertrouwt, zoals je partner, een familielid of vriend/vriendin. Ook kan je contact opnemen met de MIND Hulplijn voor deskundig, anoniem en gratis advies op maat."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Op deze webpagina van Maastricht UMC+ Gezond idee lees je meer over hormonen en hun invloed.",
              "Nieuwsgierig naar de positieve effecten van bewegen op je brein? In dit artikel van Allesoversport.nl vertellen ze ook meer over de rol van hormonen (die in dit geval ook neurotransmitters zijn).",
              "Lees meer over de hormonen die vrijkomen als je verliefd wordt en wat er in ons brein gebeurt in deze longread: Waarom worden we verliefd? van NPO Kennis.",
              "Dit artikel van Gezondnu gaat in op de relatie tussen stress en de werking van je schildklier."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Thijs Launspach en Lennard Toma bespreken in deze aflevering van hun podcast Hoe ben je zo?! : Welke invloed hebben hormonen op je persoonlijkheid?"
            ]
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk deze story van NPO Kennis: Hoe beïnvloeden hormonen je stemming?"
            ]
          },
          {
            "tekst": "Deze themaspecial is tot stand gekomen in samenwerking met Birit Broekman, Bijzonder Hoogleraar Ziekenhuispsychiatrie, OLVG en Amsterdam UMC, Vrije Universiteit. Zij is werkzaam in de zwangerschapspsychiatrie en op de menopauze polikliniek en doet onder andere onderzoek naar de rol van geslachtshormonen op stemming en slaap."
          }
        ]
      },
      {
        "titel": "Jouw hormonen van baby tot adolescent (0-18 jaar)",
        "intro": "In iedere fase van ons leven spelen hormonen een belangrijke rol. Al voordat je geboren bent, zijn er hormonen in je lichaam aan het werk. Zo maken jongens al het geslachtshormoon testosteron aan. Ook kunnen de hormonen die je moeder aanmaakt deels via de placenta naar jou als baby gaan. Het stresshormoon cortisol is hier een voorbeeld van. Als een moeder veel stress ervaart tijdens de zwangerschap, komt er ook meer stresshormoon van de moeder bij de baby. Dit kan invloed hebben op het stresssysteem van de nog ongeboren baby. Hierdoor kan iemand kwetsbaarder worden voor psychische klachten als depressie en angst of aandoeningen zoals hypertensie of obesitas.",
        "blokken": [
          {
            "kop": "Al voor je geboorte zijn er hormonen actief"
          },
          {
            "tekst": "De productie van geslachtshormonen staat daarna min of meer stil tot aan je pubertijd. Maar er zijn wel andere hormonen actief, zoals hormonen die je groei regelen. Ook als je volwassen bent, heb je deze groeihormonen nodig om gezond te blijven."
          },
          {
            "kop": "Van kinderlichaam naar volwassen lichaam"
          },
          {
            "tekst": "Als je in de puberteit komt dan gebeurt er veel met je geslachtshormonen. Bij meisjes start dit meestal vanaf negen tot veertien jaar. En bij jongens meestal tussen hun elfde en zeventiende jaar. Onder invloed van hormonen verandert er van alles in je lichaam en in je gedrag. Geslachtshormonen zorgen ervoor dat je kinderlichaam verandert naar een volwassen lichaam. Ook spelen ze een nuttige rol bij de ontwikkeling van je hersenen (vooral in het ‘finetunen’ van neurale netwerken). Opvallend is dat de hersengebieden die betrokken zijn bij je emoties zich sneller ontwikkelen en meer geprikkeld worden door hormonen, dan de gebieden die betrokken zijn bij het denken. Mogelijk is dit een verklaring waarom er bepaalde gedragsveranderingen ontstaan in de puberteit, zoals gevoeligheid voor beloningen en risicogedrag."
          },
          {
            "tekst": "| ‘Puberen is al lastig genoeg. Het helpt om zelf ook te begrijpen wat er dan eigenlijk met je gebeurt. Ik heb mijn kinderen uitgelegd hoe deze dingen werken en dat ze er niets aan kunnen doen dat die frontaalkwab simpelweg nog niet af is. Ook heb ik aangegeven dat ik er ben voor het stukje waar zij nog in moeten groeien. Dat werkt hier heel goed.’ Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "kop": "Risicogedrag"
          },
          {
            "tekst": "Dit kan er bijvoorbeeld voor zorgen dat je dingen doet, zonder daar eerst goed over na te denken. Veel jongeren gaan op ontdekking en nemen in deze periode van hun leven meer risico’s of doen onverantwoorde dingen. Dit kan soms lastig zijn, maar dit gedrag hoort dus bij een ontwikkelingsfase."
          },
          {
            "tekst": "Bekijk hieronder de uitleg van onderzoeker Jiska Peper over puberteitshormonen. En wat ze te maken hebben met risicogedrag. (Dit filmpje maakt deel uit van het lespakket “Backstage in je brein” van het Brain & Development Onderzoekscentrum van de Universiteit Leiden)."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=0C4XDmdJN2M"
          },
          {
            "kop": "Wisselende stemmingen en slaaptekort"
          },
          {
            "tekst": "Doordat er zoveel gebeurt met je hormonen ervaar je in de puberteit ook vaak heftige emoties en wisselende stemmingen. Je bent bijvoorbeeld heel vrolijk, maar dit kan zo omslaan naar een verdrietig gevoel."
          },
          {
            "tekst": "Ook kan het lastig zijn om voldoende te slapen. Dit kan - naast dingen zoals tot vlak voor bedtijd nog achter je telefoon zitten- komen doordat je het ‘slaaphormoon’ melatonine pas later op de avond aanmaakt. Dit is bij veel pubers het geval. Hierdoor verschuift je slaap-waak ritme. Laat gaan slapen en de volgende dag vroeg op moeten kan zorgen voor een slaaptekort. En we weten allemaal wat een slaaptekort met ons humeur kan doen."
          },
          {
            "tekst": "In onderstaand filmpje Omgaan met de gevoelens van een puber van Opvoedinformatie Nederland legt presentatrice Fiona uit hoe het komt dat pubers last kunnen hebben van stemmingswisselingen, boosheid of somberheid. Ook zijn er twee pubers zelf aan het woord. Fiona geeft tips hoe je hier als ouder mee om kan gaan en legt uit wanneer het beter is om hulp in te schakelen:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=IZvXzc7Cx0k"
          },
          {
            "kop": "Genderidentiteit"
          },
          {
            "tekst": "We hebben het in onze teksten steeds over jongens en meisjes. Zoals we al bij de eerste dag aangeven, doen we dit om de teksten zo begrijpelijk mogelijk te schrijven. Maar het is natuurlijk niet zo dat het geslacht waarmee je wordt geboren automatisch bepaalt of jij je een jongen of een meisje voelt. Je kan met een vrouwelijk geslacht geboren zijn en je een jongen voelen, of met een mannelijk geslacht zijn geboren en je een meisje voelen. Ook zijn hier allemaal variaties op. Zo kan het zijn dat jij je niet mannelijk of vrouwelijk voelt of juist allebei of dat je gevoel wisselt. Bedenk je dat je goed bent zoals je bent en hoe jij je voelt. Ook als je hier zoekende in bent of als je gevoel verandert. Het is het heel normaal dat je op zoek gaat naar wie je bent en hoe dit voor jou werkt."
          },
          {
            "tekst": "Voor veel mensen is het belangrijk dat hun uiterlijke kenmerken aansluiten bij hun genderidentiteit. Dit kan een reden zijn om (gedeeltelijk) in lichamelijke transitie te gaan. Bij deze transitie speelt het innemen van hormonen een belangrijke rol. In onderstaande video van Hij, zij, hen van de KRO-NCRV vertelt Sem (19) over wat de mannelijke hormonen met hem doen."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=LEyOj2d9qZ8"
          },
          {
            "kop": "Hulp en advies"
          },
          {
            "tekst": "Kan jij hulp gebruiken bij jouw persoonlijke situatie? Praat er met iemand in je omgeving over die je vertrouwt, zoals je partner, een familielid of vriend/vriendin. Ook kan je contact opnemen met de MIND Hulplijn voor deskundig, anoniem en gratis advies op maat."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Wil jij meer weten over de ontwikkeling van jouw puber thuis? De digitale cursus Puberchallenge van CJG Rijnmond ondersteunt ouders en verzorgers van een puber met de balans tussen loslaten en vasthouden.",
              "Op zoek naar info over hoe je om kan gaan met opgroeiende kinderen en met alle verleidingen die ze tegenkomen? Ga naar helderopvoeden.nl van het Trimbos-instituut.",
              "Wil je meer lezen over gender en wat binair en non-binair is? Bekijk dan deze pagina op seksualiteit.nl van Rutgers.",
              "Lees op deze pagina van Transvisie over hormonen en puberteitsremmers bij transgender mensen.Transvisie is een kenniscentrum, houdt zich bezig met belangenbehartiging en is er ook voor onderling contact."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Transvrouw, transman, hoe zit dat nu precies? Wil je meer weten over onderwerpen die te maken hebben met gender? Luister deze Gender voor Dummies #1 van De Genderkwiebus Podcast waarin Nanoah Struik op een eenvoudige manier uitleg geeft."
            ]
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk de video: Waarom doen pubers zo vaak domme dingen? van de Universiteit van Nederland. Professor Eveline Crone gaat in deze video niet zo zeer in op hormonen, maar op de werking van het puberbrein. ‘In dit college vertelt zij jou waarom we in deze levensfase een kei zijn in het nemen van ondoordachte risico's en waarom een beetje rebels gedrag uiteindelijk nodig is om jezelf te ontwikkelen.'",
              "In deze video vertelt Alice Olsthoorn over haar proces van een jongens- naar een meisjeslichaam. Ook vertelt ze over haar ervaringen met het gebruik van hormonen."
            ]
          }
        ]
      },
      {
        "titel": "Jouw hormonen van adolescent tot en met volwassene",
        "intro": "Ook als je niet meer in puberteit zit, spelen hormonen een belangrijke rol in je leven. Zoals we al op dag 1 zeiden, regelen hormonen van alles in je lichaam, van je vochthuishouding tot aan je stofwisseling en emoties en gedrag. Vandaag nemen we je mee naar de vruchtbare leeftijd. We vertellen over het effect van hormonen binnen je menstruatiecyclus en rondom zwangerschap. Hoe zijn ze van invloed op je gevoelens en gedrag en wat als ze je leven in de war schoppen? En hoe zit het eigenlijk met mannen en hormonen?",
        "blokken": [
          {
            "kop": "Menstruatiecyclus, hormoonschommelingen en stemming"
          },
          {
            "tekst": "De vruchtbare periode in je leven als vrouw gaat samen met schommelingen in je hormonen. Dit kan invloed hebben op hoe jij je mentaal voelt. Aan het begin van je menstruatiecyclus (als je ongesteld bent) maak je het hormoon oestrogeen aan en na 2 weken (rond je eisprong) daalt dit weer. Na de eisprong wordt progesteron aangemaakt. In de week voor je menstruatie dalen zowel progesteron als oestrogeen naar een laag niveau. De schommelingen van deze hormonen kunnen effect hebben op je stemming."
          },
          {
            "tekst": "| 'Rondom mijn menstruatie ben ik somberder, emotioneler en geprikkelder. Mij helpt het om lief te zijn voor mezelf en dingen te blijven doen terwijl ik me slecht voel. Ook houd ik een menstruatiecyclus app bij. Dit zorgt voor een stukje bewustzijn, normaliseert dat dit samenhangt met hormonen.' Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "tekst": "Heb je wel eens gehoord van PMS (premenstrueel syndroom)? In de volksmond wordt deze term gebruikt als je last hebt van lichamelijke en psychische klachten voordat je ongesteld wordt. Zoals pijnlijke borsten, een opgeblazen gevoel en prikkelbaarheid of somberheid. Vervelend, maar goed om te weten dat veel vrouwen hier in meer of mindere mate last van hebben."
          },
          {
            "kop": "PMDD en PME"
          },
          {
            "tekst": "Wist je dat er ook een stemmingsstoornis bestaat die PMDD heet? Dit staat voor het Engelse Premenstrual Dysphoric Disorder . Op de website van Stichting PMDD Nederland lees je er meer over. Je hebt dan in de periode tussen je eisprong en het begin van je menstruatie zoveel last van stemmingsklachten, dat het je niet goed lukt je dagelijkse dingen te doen."
          },
          {
            "tekst": "Ook kan het zijn dat in de periode tussen eisprong en menstruatie al bestaande psychische klachten verergeren onder invloed van hormoonveranderingen. Je hebt bijvoorbeeld al een depressie of een angststoornis en in deze periode heb je nog meer last van je klachten. Dit noemen we ook wel PME (premenstruele exacerbatie). Lees ook hier meer informatie over op de website van PMDD Nederland."
          },
          {
            "tekst": "Lees ook deze ervaringsverhalen van vrouwen met PMDD. Ze laten zien hoe levensontwrichtend PMDD kan zijn. Ook zijn ze bedoeld om herkenning en steun te bieden aan vrouwen met PMDD."
          },
          {
            "kop": "Anticonceptie"
          },
          {
            "tekst": "Naast de hormonen die je lichaam zelf aanmaakt en reguleert, zijn er ook kunstmatige hormonen die effect kunnen hebben op hoe jij je voelt. We hebben het in dit geval over anticonceptie. Over de hele wereld slikken meer dan honderd miljoen vrouwen de anticonceptiepil. De laatste tijd komt er steeds meer aandacht voor mogelijke effecten van deze pil op onze gevoelens en gedrag. Zo zijn er vrouwen die aangeven er veel baat bij te hebben, omdat er minder hormoonschommelingen zijn door het gebruik van de pil. Andere vrouwen geven juist aan zich door de pil mentaal slechter te voelen. Wil je meer lezen over dit onderwerp? Lees dan dit artikel van NEMO Kennislink: Je brein aan de anticonceptie: wat de pil doet met emoties en gedrag."
          },
          {
            "tekst": "Of bekijk deze video van de Universiteit van Nederland waarin ‘Dr. Estrella Montoya (Universiteit Utrecht) je leidt langs de fabels en feiten rondom depressie en de pil.’"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=86JqqKXduFQ"
          },
          {
            "tekst": "Naast de anticonceptiepil zijn er nog andere vormen van anticonceptie waarbij er kunstmatige hormonen komen kijken. Denk aan de hormoonspiraal, pleister of vaginale ring. Het kan soms even zoeken zijn welke vorm van anticonceptie het beste bij jou aansluit. Wat betreft het gebruik, maar ook als het gaat om hoe goed jij er fysiek én mentaal op reageert."
          },
          {
            "tekst": "| ‘Mijn menstruatiecyclus heeft enorme impact op mijn angststoornis. Weer aan de pil gaan heeft bij mij juist geholpen.’ Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "kop": "Uitgaan van natuurlijke menstruatiecyclus"
          },
          {
            "tekst": "Tegenwoordig hoor je steeds vaker dat vrouwen stoppen met hormonale anticonceptie. De redenen zijn verschillend, maar een reden die vaak genoemd wordt is de behoefte om weer op een natuurlijke manier met de menstruatiecyclus van je lichaam om te gaan. En om meer te kunnen luisteren naar wat je lichaam je wil vertellen. Zo komt er ook steeds meer informatie over hoe je het beste kan leven met de verschillende fases van je maandelijkse cyclus."
          },
          {
            "tekst": "Wil jij stoppen met hormonale anticonceptie? Bedenk je dat dit niet zonder risico’s is, want het is bedoeld om ongeplande zwangerschappen te voorkomen. Overleg met je huisarts of gynaecoloog over de mogelijkheden."
          },
          {
            "kop": "Zwangerschap"
          },
          {
            "tekst": "Een periode waarin er van alles gebeurt op het gebied van hormonen is de zwangerschap. Om jouw lijf in staat te stellen een kind te ontwikkelen en te baren maak je grote hoeveelheden hormonen aan. Dit zijn onder andere oestrogenen en progesteron, die ook betrokken zijn bij je menstruatiecyclus. Deze hormonen kunnen ook van invloed zijn op je emoties. Het kan zijn dat jij je over het algemeen juist heel blij en fijn voelt, maar het kan ook zijn dat je last hebt van stemmingswisselingen. Lees meer over Stemmingswisselingen tijdens de zwangerschap in dit artikel van het zwangerenportaal.nl."
          },
          {
            "tekst": "| ‘Door zwangerschapshormonen, ben ik misselijk en daardoor sneller verdrietig en somber. Mij helpt het om dit te delen met mijn man en vriendinnen, afleiding te zoeken en grenzen aan te geven.’ Een van onze volgers op social media. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "tekst": "Weetje: Wist je dat als je partner zwanger is, jij ook bepaalde hormonen (zoals een bepaald soort oestrogeen) aanmaakt? Hierdoor kan ook jij een beetje ‘nesteldrang’ ervaren. Als man maak je minder testosteron aan, waardoor je minder zin in seks hebt en minder geneigd bent tot agressie."
          },
          {
            "kop": "Bevalling en borstvoeding"
          },
          {
            "tekst": "Ook tijdens je bevalling spelen hormonen een grote rol. Zo maakt je lichaam oxytocine aan om weeën te veroorzaken. Dit hormoon noemden we dag 1 ook wel het ‘knuffelhormoon’. Na de bevalling helpt dit hormoon je met het opbouwen van een band met je baby, dat goed is voor de hechting. Ook komt dit hormoon vrij als je borstvoeding geeft. Lees meer over de werking van dit hormoon op de pagina Oxytocine: wat doet het? van 24Baby.nl."
          },
          {
            "kop": "Postpartum depressie en postpartum psychose"
          },
          {
            "tekst": "Na de bevalling is de grote hoeveelheid zwangerschapshormonen in je lijf plotseling verdwenen. Mogelijk hebben veel vrouwen daarom in de dagen na hun bevalling last van prikkelbaarheid, nervositeit of huilbuien. Dit noemen we ook wel de ‘kraamtranen’."
          },
          {
            "tekst": "Als stemmingsklachten langdurig aanhouden na een bevalling kan er sprake zijn van een postpartum depressie; een depressie na de bevalling. Deze naam is wat verwarrend, want vaak ontstaan deze klachten al tijdens de zwangerschap. Het is nog onvoldoende duidelijk of hormonale veranderingen hierin een rol spelen."
          },
          {
            "tekst": "In de video hieronder vertelt Annegré over haar postpartum depressie. Ze deelt haar verhaal voor vrouwen die door iets soortgelijks heengaan."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=uWwqqx2ESGg"
          },
          {
            "tekst": "In zeldzame gevallen kan er na de bevalling een postpartum psychose ontstaan. Als je een postpartum psychose hebt, heb je ervaringen die los staan van de realiteit, je bent het contact met de realiteit verloren. Dit kunnen bijzondere, angstige of overweldigende ervaringen en gedachten zijn. Zo kan het zijn dat je dingen hoort, ziet, voelt of ruikt die andere mensen niet waarnemen (hallucinaties). Of dat je gedachtes en ideeën hebt die niet kloppen met de werkelijkheid, zoals het idee dat mensen je iets willen aandoen (wanen)."
          },
          {
            "tekst": "Waar minder over bekend is, is dat je ook als man een postpartum depressie kan ervaren. Of een lager testosteron niveau hiermee te maken heeft, is nog niet helemaal duidelijk. Waarschijnlijk hebben de depressieve gevoelens vooral te maken met dat er steeds meer van mannen wordt verwacht in de zorgtaken voor de kinderen. Dit terwijl je hierin als man minder goed wordt voorbereid en je tegelijkertijd druk ervaart om te presteren op je werk."
          },
          {
            "kop": "Testosterontekort bij mannen"
          },
          {
            "tekst": "Hierboven noemden we al een paar keer lagere testosteron niveaus en de mogelijke effecten daarvan op mannen. Mannen ervaren geen schommelingen in hun hormonen zoals vrouwen, maar kunnen wel klachten ervaren als ze een tekort hebben aan het hormoon testosteron. We hebben het dan niet over lagere niveaus zoals bij zwangerschap en voor de kinderen zorgen, maar een groot tekort. Dit kan verschillende oorzaken hebben, zoals een aangeboren afwijking. Ook is de oorzaak soms niet te achterhalen. Het tekort kan zorgen voor klachten als erectieproblemen, minder zin in seks, minder spierkracht en vermoeidheid. Ook kan het van invloed zijn op somberheid of depressieve gevoelens. Artsen kunnen een tekort vaststellen door middel van lichamelijk onderzoek en bloedonderzoek. Lees hier meer over op de website van St. Antonius Ziekenhuis."
          },
          {
            "tekst": "| ‘Als ik mijn testosteronshot weer heb gehad, voel ik mij weer wat energieker en rustiger.’ Een van onze volgers op social media. Let op: laat een testosterontekort altijd vaststellen door een arts en gebruik alleen voorgeschreven medicatie. |"
          },
          {
            "tekst": "|---|"
          },
          {
            "kop": "Hulp en advies"
          },
          {
            "tekst": "Maak jij je zorgen om jezelf of iemand in je omgeving? Praat er met iemand over die je vertrouwt, zoals je partner, een familielid of vriend/vriendin. En neem altijd contact op met de huisarts. Ook kan je contact opnemen met de MIND Hulplijn voor deskundig, anoniem en gratis advies op maat."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "In dit artikel van FunX Beseft wordt er ingegaan op De onbesproken mentale effecten van de anticonceptiepil .",
              "Lees dit essay van de Volkskrant: Niet alleen maar kommer en kwel: waarom steeds meer vrouwen hun agenda aanpassen op hun menstruatiecyclus .",
              "Neem eens een kijkje op de website memam.nl, het ervaringscentrum voor psychische klachten rondom zwangerschap.",
              "Wil jij meer lezen over postpartum depressie bij vaders? Lees dan dit artikel van Vakblad Vroeg of dit artikel ‘Na de baby zag ik het niet meer zitten’ van NEMO Kennislink.",
              "Wil je meer weten over welk effect een testosterontekort heeft op mannen? Lees dan dit artikel van RTL nieuws met ervaringsverhalen: Ja, ook mannen hebben weleens last van hun hormonen."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Wat is de impact van hormonen op je gedrag, gemoed en gezondheid? Een podcast van Eos Wetenschap, live op Fountainfest. ‘In deze podcast praten Anne Marieke Doornweerd (Universiteit Utrecht), Latifa El-Kaddouri (Dear Body) en Liesbeth Gijsel (Eos Wetenschap) je bij over de impact van hormonen.’ De focus ligt hierbij op de menstruatiecyclus en anticonceptie.",
              "‘In Zwarte muisjes spreekt Maarten Dallinga met vrouwen die rond hun zwangerschap depressief en angstig werden, in een psychose raakten of PTSS kregen.’"
            ]
          }
        ]
      },
      {
        "titel": "Jouw hormonen van volwassene tot en met oudere",
        "intro": "Vanaf ongeveer 45 jaar vindt er bij vrouwen een afname plaats van geslachtshormonen. Je maakt steeds minder oestrogeen en testosteron aan en komt in de zogeheten ‘overgang’. Naast lichamelijke klachten, zoals opvliegers en pijn in je gewrichten, kan dit van invloed zijn op je stemming of de zin om te vrijen. Ook mannen gaan, vanaf ongeveer hun 40ste, minder testosteron aanmaken, maar deze afname is niet zo groot. Toch kunnen ook mannen prikkelbaarder worden en minder zin in seks krijgen. Vandaag bespreken we het effect van hormonen op je mentale gezondheid bij het ouder worden.",
        "blokken": [
          {
            "kop": "Wat is de menopauze en wat is de overgang?"
          },
          {
            "tekst": "Je bent in de menopauze als je laatste menstruatie 1 jaar geleden is. De periode waarin je geslachtshormonen afnemen tot de menopauze noemen we de overgang. De duur van de overgang wisselt, maar kan wel 6 tot 10 jaar duren. Tijdens de overgang moet je lichaam op zoek naar een nieuw hormonaal evenwicht. De overgang vindt plaats tussen je 40ste en 60ste. Gemiddeld begint de overgang als je 46 jaar bent en is je laatste menstruatie als je 51 jaar bent."
          },
          {
            "tekst": "In onderstaande video van de Menopauze Specialist legt Dorenda van Dijken (gynaecoloog OLVG en voorzitter Dutch Menopause Society) uit wat de overgang inhoudt. Ook gaat ze in op feiten en fabels."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=NohRWjyB7IM"
          },
          {
            "kop": "Klachten"
          },
          {
            "tekst": "Een vijfde van alle vrouwen heeft helemaal geen last van de hormoonveranderingen. En bij veel vrouwen zijn de klachten mild. Ruim een kwart van de vrouwen ervaart ernstige klachten. Veel voorkomende klachten zijn opvliegers en nachtzweten en die kunnen een negatief effect hebben op andere klachten. Zo ben je overdag moe als je slecht slaapt door nachtzweten. En dit kan weer van invloed zijn op je stemming, geheugen en concentratie."
          },
          {
            "tekst": "Onderzoekers denken dat de hormoonveranderingen in de overgang een rol spelen bij slaapproblemen zoals moeite hebben met inslapen, wakker worden en lastig weer in slaap komen of heel vroeg wakker worden. Dit kan veel impact hebben op hoe jij je voelt. Naast fysieke klachten, omdat je lichaam ontregeld is, kan het ervoor zorgen dat jij je somberder voelt dan anders."
          },
          {
            "tekst": "Gelukkig kan je veel doen om beter te slapen. Kan je hierbij wel wat hulp gebruiken? Meld je dan aan voor onze Beter Slapen Challenge . Je ontvangt dan 10 dagen om de dag een e-mail met opdrachten en tips voor een betere nachtrust."
          },
          {
            "kop": "Stemming"
          },
          {
            "tekst": "Sommige mensen denken dat de overgang ervoor kan zorgen dat je depressief wordt. Dit is niet het geval. Wel is het zo dat als je eerder een depressie hebt gehad, je rondom de overgang bijna 2 keer zo hoge kans hebt om weer een depressie door te maken."
          },
          {
            "tekst": "Daarnaast is het goed om te bedenken dat de periode waarin je in de overgang komt, vaak een periode is waarin er veel speelt in je leven. Denk bijvoorbeeld aan je kinderen die het huis uit gaan en de invulling van je relatie die hierdoor verandert. Maar denk ook aan het accepteren dat je ouder wordt. Ook deze punten kunnen effect hebben op je stemming."
          },
          {
            "tekst": "Sommige vrouwen hebben zoveel last van overgangsklachten dat ze starten met het gebruik van hormonen. Op deze webpagina van Thuisarts.nl lees je daar meer over."
          },
          {
            "tekst": "In onderstaande video van de Dutch Menopause Society (DMS) vertelt psychiater en onderzoeker Birit Broekman over de psychologische veranderingen tijdens de menopauze."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=4Qq9Dthb9WA"
          },
          {
            "tekst": "Tip: wist je dat overgang voor een deel erfelijk is bepaald? Zit jij in de overgang of verwacht je dat dit binnenkort gaat gebeuren? Ga dan eens het gesprek aan met bijvoorbeeld je moeder, zussen of andere vrouwelijke familieleden. Naast dat dit handige informatie kan geven, biedt dit een opening voor mooie eerlijke gesprekken."
          },
          {
            "kop": "Ervaringen"
          },
          {
            "tekst": "Lees hieronder 2 ervaringen van onze volgers op social media."
          },
          {
            "tekst": "‘Mijn ervaringen met de overgang? Het was en is soms nog de hel. De lichamelijke symptomen zijn prima mee te dealen, op zijn hoogst vervelend. Maar de slaapstoornissen en de mentale gevolgen had ik niet kunnen voorzien. Na een rustige periode brak er een tijd aan waarin ik maar 2 nachten in de week fatsoenlijk sliep. De rest van de nachten sliep ik maximaal 4 uur per nacht. Van het ene op het andere moment veranderde ik een wrak. Ik zat alleen maar op de bank. Naar het toilet gaan voelde als een marathon. Ik kwam tot helemaal niks. Als mijn kinderen in de buurt kwamen, stond ik onder hoogspanning en ik huilde om niks. Dat ging een aantal weken zo door tot ik op een gegeven moment suïcidale gedachten kreeg. Dat was voor mij de grens. Ik ben direct de volgende dag naar de huisarts gegaan en heb om hulp gevraagd. Sindsdien heb ik hormoontherapie en zijn de klachten weer draaglijk. Het is nog steeds geen feestje, maar ik heb weer het gevoel zelf de touwtjes in handen te hebben en dat was ik echt een tijd kwijt.’"
          },
          {
            "tekst": "‘Rond mijn 44ste kwam ik in de overgang. Ik wist niet wat er met me aan de hand was. Van binnen voelde ik me opgedraaid, opgejaagd en zeer onrustig. Ik had last van slapeloosheid en depressieve gevoelens. Op een dag was ik er helemaal klaar mee. Ik heb toen zowel mijn privé- als werkagenda leeg geveegd en gezegd dat ik nergens meer zin in had en er klaar mee was. De huisarts gooide het op overspannenheid en verklaarde me voor gek toen ik over de overgang begon. Via een vriendin kwam ik terecht bij een overgangsconsulente. Dit gaf me rust ondersteuning en uiteindelijk weer ruimte om aan mezelf te werken. Zoals dingen doen waar ik blij van word, mijn grenzen nog beter aangeven, vitaminesupplementen slikken en mijn schilderen weer oppakken. Met kleine stapjes is de overgang nog net niet mijn ‘bestie’ geworden.’"
          },
          {
            "kop": "Meer ruimte voor jezelf"
          },
          {
            "tekst": "Naast de negatieve kanten van de overgang die vaak benoemd worden, zien veel vrouwen de overgang als een tijd waarbij er meer ruimte komt voor jezelf. Misschien betekent dit voor jou wel het begin van een nieuwe periode. Een periode waarin jij op zoek gaat naar wat nu voor jou belangrijk is in jouw leven."
          },
          {
            "kop": "Penopauze/midlifecrisis"
          },
          {
            "tekst": "De laatste tijd komt er steeds meer aandacht voor hormonale veranderingen bij mannen die ouder worden. Ook wel de ‘penopauze’ genoemd. Klachten die je als man kan ervaren zijn bijvoorbeeld lusteloosheid, minder zin in seks, erectieproblemen, somberheidsklachten, stemmingswisselingen, problemen met slapen en opvliegers. Hoewel het testosterongehalte bij mannen met de jaren iets afneemt, zou dit in de meeste gevallen de klachten niet of maar slechts een beetje verklaren. Vermoedelijk hangen deze klachten samen met het normale proces van verouderen. Ook kunnen, net als bij vrouwen, psychische factoren meespelen bij de klachten die je ervaart. Denk aan de kinderen die het huis uit gaan en het accepteren van het ouder worden."
          },
          {
            "kop": "Hormonen en ouder worden"
          },
          {
            "tekst": "Na de menopauze zijn je geslachtshormonen stabieler. Er volgt een periode met een nieuwe hormonale balans. Dit is vaak een evenwichtige periode voor vrouwen, maar ook voor mannen op deze leeftijd. Vanaf de pensioenleeftijd kent het leven meestal minder verplichtingen. Dit gaat vaak gepaard met minder stress en dus ook minder stresshormonen."
          },
          {
            "kop": "Hulp en advies"
          },
          {
            "tekst": "Maak jij je zorgen om jezelf of iemand in je omgeving? Praat er met iemand over die je vertrouwt, zoals je partner, een familielid of vriend/vriendin. En neem altijd contact op met de huisarts. Ook kan je contact opnemen met de MIND Hulplijn voor deskundig, anoniem en gratis advies op maat."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Wil jij weten waar je overgangsklachten aan kan herkennen? Lees meer over lichamelijke- en psychische overgangskwalen op deze webpagina van Gezond Idee van Maastricht UMC+.",
              "Kan jij wel een positieve benadering op de overgang gebruiken? Lees meer op deze pagina van Vrouwen in de Overgang, dé website over de overgang.",
              "‘Vrouwen die ADHD hebben, hebben - zo blijkt- vaker last van hartklachten en hormonale klachten.’ Lees meer in dit artikel van Cycle over adhd, hartklachten en hormonale klachten."
            ]
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk deze video van de Dutch Menopause Society waarin Margot Morssinkhof (onderzoeker slaap, stemming en hormonen) vertelt over hormonen, menopauze en slaapproblemen. Ook gaat ze in op wat kan helpen. Meer video’s van De Menopauze Specialist vind je hier.",
              "In deze video uit de serie Mama, vertel eens van Cycle Care vertelt Caroline Tensen aan haar dochter over hoe zij de overgang heeft ervaren. Hoewel het nu goed met haar gaat is ze door een heftig dal gegaan.",
              "Margriet ontwikkelde de zesdelige videoserie Opvliegers Enzo over de overgang en alles dat je wilt weten over deze periode. Bekijk deze video waarin verschillende BN’ers aan het woord komen."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Deze podcastvan De Podcast Psycholoog is een mooie afsluitende aanvulling op onze themaspecial. Psycholoog Estrella Montoya vertelt wat hormonen zijn en over de invloed ervan op je stemming en gedrag. Ze gaat o.a. in op de menstruatiecyclus, PMDD, testosterontekort bij mannen en de overgang en menopauze. Ook is er aandacht voor taboes."
            ]
          }
        ]
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
        "intro": "Het is een onrustige tijd waarin veel verschillende problemen spelen. Iedereen reageert anders op dit soort omstandigheden. Zo maakt de een zich zorgen over waar het heen gaat met de wereld en ligt hier ’s nachts wakker van, terwijl de ander de schouders ophaalt. Ook wordt de ene persoon meer geraakt door de gevolgen dan de ander. Zo zijn er mensen die in de financiële problemen zitten als gevolg van alle prijsstijgingen, terwijl anderen er nog niet zoveel van voelen. Toch kunnen we wel zeggen dat het ons allemaal op de een of andere manier raakt. Het is dan ook helemaal niet vreemd als jij je hierdoor mentaal minder fit voelt of misschien wel psychische klachten ervaart.",
        "blokken": [
          {
            "tekst": "Op de eerste dag van deze themaspecial geven we je graag wat inzicht over welke impact de crisissen op jou hebben."
          },
          {
            "kop": "Hoe raken de crisissen jou?"
          },
          {
            "tekst": "Welke invloed hebben de crisissen op jou? Misschien ben je meer gaan piekeren, omdat je het financieel niet meer rond kan krijgen. Of voel je je somber omdat je geen zicht hebt op een woning. Of misschien maak jij je zorgen over alles wat je hoort over de oorlogen in de wereld of over het klimaat. Ook kan het op meerdere manieren tegelijk van invloed op je zijn."
          },
          {
            "tekst": "Via social media vroegen we aan onze volgers welk effect de crisissen hebben op hun mentale gezondheid. Een aantal reacties:"
          },
          {
            "tekst": "‘Ik heb last van de energiecrisis. Het is koud in huis en ik heb hierdoor nog minder motivatie om uit bed te komen.'"
          },
          {
            "tekst": "‘De uitzichtloosheid of ik een andere geschikte woning kan vinden, maakt me somber.’"
          },
          {
            "tekst": "‘Ik heb stress over of ik wel rondkom en af en toe iets leuks kan ondernemen. Het leven wordt minder leuk.’"
          },
          {
            "tekst": "‘Ik maak me zorgen om de altijd maar blijvende oorlogen en het wereldwijde klimaatgebeuren.’"
          },
          {
            "tekst": "Hoeveel last heb je ervan? Slaap je er bijvoorbeeld wel eens slecht van of lig je iedere nacht wakker? Geeft het je af en toe stress of heel vaak? Ben je er wel eens bang voor of ben je zo angstig dat je het moeilijk vindt goed te blijven functioneren?"
          },
          {
            "tekst": "Bedenk je dat iedereen wel eens psychische klachten heeft, zoals stress, piekeren, slecht slapen, je somber, bang of eenzaamvoelen. Dat is heel normaal en menselijk, want niemand voelt zich de hele dag blij en gelukkig. Als er negatieve dingen spelen in je leven, dan kan het zijn dat je wat vaker psychische klachten ervaart."
          },
          {
            "tekst": "Heb jij vaak last van je klachten en hebben ze veel invloed op jouw dagelijkse leven? Mogelijk is er meer aan de hand. Een paar voorbeelden:"
          },
          {
            "lijst": [
              "Je voelt je somber. Je hebt nergens zin meer in en je komt al weken moeilijk je bed uit.",
              "Je bent zo bang dat je iets overkomt dat je nauwelijks meer je huis verlaat.",
              "Je neemt je iedere dag voor minder alcohol te drinken, maar dit mislukt steeds. Sterker nog, je begint steeds vaker in de ochtend al te drinken."
            ]
          },
          {
            "tekst": "Psychische problemen komen net als lichamelijke ziekten veel voor en kunnen iedereen overkomen. Net als bij lichamelijke problemen is het belangrijk dat je hulp zoekt."
          },
          {
            "tekst": "Veel voorkomende psychische problemen zijn angststoornissen, depressie,langdurige stressklachten en verslaving. Via onze psychische klachten pagina vind je meer informatie over veel verschillende klachten en stoornissen."
          },
          {
            "tekst": "Deel jouw ervaring Welke invloed hebben de crisissen die er nu spelen op jou? Deel jouw ervaringsverhaal op onze website, zodat ook andere mensen deze kunnen lezen. Begin de titel met: Aandacht voor onrustige tijden"
          },
          {
            "linkLabel": "Vertel jouw ervaringsverhaal",
            "linkUrl": "https://wijzijnmind.nl/ervaringsverhaal/donatie/nieuw"
          },
          {
            "kop": "Invloed uitoefenen hoe je ermee omgaat"
          },
          {
            "tekst": "Door de omstandigheden kan jij je dus minder fijn voelen of last hebben van psychische klachten. Gelukkig is het goede nieuws: aan de omstandigheden kan je misschien niet zoveel veranderen, maar wel aan de manier hoe je ermee omgaat! De aankomende dagen besteden we aandacht aan allerlei mogelijkheden ermee om te gaan. Hiermee zeggen we niet dat je problemen oplossen of dat je je meteen gelukkig gaat voelen. Wel kan het je helpen meer grip op de situatie te krijgen."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Lees op deze pagina van Mentaal Vitaal over geldzorgen en hoe je daarmee omgaat.",
              "Heb jij vragen of zorgen over geld? Bel of chat met Geldfit. Ga naar de website en klik in het menu op contact.",
              "Lees het verhaal van Wendy op PorteRenee.nl. Ze maakt zich nu voor het eerst zorgen over een financiële crisis en het kopen van een woning."
            ]
          },
          {
            "tekst": "Tip: op deze website vind je nog meer artikelen, blogs en tips om met geld om te gaan."
          },
          {
            "lijst": [
              "Maak jij je veel zorgen over klimaatverandering? Lees dan dit artikel op klimaatpsychologie.commet o.a. tips om eco-emoties het hoofd te bieden.",
              "In dit artikel van OpenUp lees je over wat klimaatstress is, wat het doet met je mentale gezondheid en hoe je ermee omgaat."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Renee en haar man (van PorteRenee) maken ook een podcast over geld. Bijvoorbeeld over hoe je je uitgaven een beetje in de hand houdt."
            ]
          }
        ]
      },
      {
        "titel": "Erover praten en verbinding met elkaar",
        "intro": "Heb jij last van de crisissen die er spelen? Loop jij rond met psychische klachten en houd je dit voor jezelf? Niet doen! Praat er met iemand in je omgeving over die je vertrouwt, zoals een familielid, vriend/vriendin of collega.",
        "blokken": [
          {
            "tekst": "De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn. En in dit geval is de kans groot dat anderen zich herkennen in wat jij ervaart. Misschien hebben ze fijne tips of kunnen jullie ervaringen uitwisselen."
          },
          {
            "tekst": "Begin gerust zelf met praten. Vaak hebben vrienden en familie wel door dat er iets bij je speelt, maar vinden ze het lastig erover te beginnen. In de meeste gevallen willen ze graag horen wat je dwarszit. En onthoud: jij bent de baas over wat je wel en niet aan wie wil vertellen."
          },
          {
            "tekst": "Heb jij psychische klachten, weet jouw omgeving er al van, maar zijn ze verergerd door de gevolgen van de crisissen? Blijf ook dan met elkaar praten. Door met elkaar in contact te blijven, blijft de ander op de hoogte van wat er bij jou speelt."
          },
          {
            "kop": "Waarom het belangrijk is om te praten"
          },
          {
            "tekst": "Er zijn meerdere redenen te noemen waarom het belangrijk is te praten over wat je dwarszit met de mensen in jouw omgeving, zoals familie en vrienden."
          },
          {
            "lijst": [
              "Door jouw naasten te betrekken, weten ze beter wat er in jou omgaat en kunnen ze je steunen. Misschien kom je er wel achter dat anderen dingen herkennen en kan je elkaar steunen. Dit draagt bij aan jouw of jullie gevoel er niet alleen voor te staan.",
              "Praten over je gevoelens lucht op!",
              "Je voelt je uiteindelijk sterker als je praat over wat je bezighoudt en waar je last van hebt. Je neemt zo de leiding en hebt het gevoel er iets mee te doen."
            ]
          },
          {
            "kop": "Als praten lastig is"
          },
          {
            "tekst": "Vind je het lastig om iemand in je omgeving te vinden met wie je kan praten? Bijvoorbeeld omdat je niet zoveel mensen om je heen hebt? Of omdat de meeste mensen in jouw omgeving niet open staan voor jouw verhaal of je niet goed kunnen steunen? Geef de moed niet op! Als iemand niet luistert, betekent dat niet dat dit bij iedereen zo is. Er zijn altijd mensen die wel geïnteresseerd zijn in jouw verhaal. Neem daarom iemand anders in je omgeving in vertrouwen. Of kom via het Connect portaal in contact met gelijkgestemden en wissel ervaringen uit. Ben je op zoek naar andere mensen die zich ook zorgen maken over het klimaat of de psychische gezondheid van mensen in Nederland? Scroll naar beneden en bekijk de linkjes onder meer lezen ."
          },
          {
            "tekst": "Merk jij dat praten over wat er allemaal speelt in de wereld steevast in een discussie eindigt? Bijvoorbeeld omdat jouw familie of vrienden er heel anders naar kijken of een sterke mening hebben die ze niet onder stoelen of banken steken? Dat kan behoorlijk lastig zijn! Probeer daarom afspraken te maken, zodat iedereen elkaar in zijn of haar waarde laat. Een afspraak kan zijn dat je bepaalde onderwerpen niet inhoudelijk met elkaar bespreekt, zoals klimaatverandering of de vluchtelingenstroom. Maar dat je elkaar wel vraagt naar gevoelens en elkaar hierbij steunt."
          },
          {
            "kop": "Zoek verbinding met elkaar!"
          },
          {
            "tekst": "We noemden al dat elkaar steunen ervoor kan zorgen dat je het gevoel hebt er niet alleen voor te staan. Elkaar helpen is echt een win-win situatie, want wist je dat iemand anders helpen jou ook een gelukkig gevoel kan geven? Eigenlijk is dat niet zo vreemd als je bedenkt dat mensen groepsdieren zijn. Probeer het daarom niet allemaal alleen te doen. Vraag hulp en kijk ook hoe jij de ander kan helpen. Het zijn juist de moeilijke dingen in het leven die ons dichter bij elkaar brengen. Zoals Psychiater Dirk de Wachter het zegt in een video van Vlaams Instituut Gezond Leven: 'De meest wezenlijke, liefdevolle en hechte verbinding ontstaat in het kunnen delen van verdriet. Het durven spreken over verdriet en luisteren naar verdriet geeft een relationele verbinding die veel steviger is dan samen \"plezante\" toestanden uithalen. Dat mag ook natuurlijk.'"
          },
          {
            "kop": "Zoek professionele hulp als jouw klachten je in de weg zitten"
          },
          {
            "tekst": "Hebben jouw klachten grote invloed op je dagelijkse leven? En heb je hiervoor nog geen hulp? Blijf er niet mee rondlopen! Zoek professionele begeleiding. Naar de huisarts gaan is een eerste stap om hulp te vragen. Jouw huisarts kan je ondersteunen en je (als dat nodig is) doorverwijzen. Als je het spannend vindt om alleen naar de huisarts te gaan, kan je natuurlijk altijd je partner of een vriend(in) of iemand anders waar je je prettig bij voelt meenemen."
          },
          {
            "tekst": "Daarnaast kan je (anoniem) contact opnemen met de MIND hulplijn. Hier werken psychologen en maatschappelijk werkers die je professionele hulp en advies kunnen geven."
          },
          {
            "linkLabel": "Neem direct contact op",
            "linkUrl": "https://mindkorrelatie.nl/"
          },
          {
            "kop": "Zoek ook praktische hulp!"
          },
          {
            "tekst": "Naast hulp bij psychische problemen, kan het heel fijn zijn om hulp te vinden bij praktische zaken die er spelen. Hieronder noemen we een aantal voorbeelden waar praktische hulp te vinden is als je financiële problemen hebt of een woning nodig hebt."
          },
          {
            "lijst": [
              "Heb je een probleem en lukt het je niet om het op te lossen? Zoek een maatschappelijk werker bij jou in de buurt. Op deze pagina van het Ministerie van VWS lees je er meer over.",
              "Kan jij je energierekening niet (op tijd) betalen? Lees op de website van ACM ConsuWijzer wat je dan moet doen.",
              "‘Op Geldfit vind je gratis informatie over geld in jouw situatie.’ Ze geven een passend advies of brengen je in contact met een persoon die meedenkt. Ook bieden ze informatie over besparen op je energierekening, energietoeslag en ondersteuning.",
              "Het NIBUD heeft een uitgebreide pagina Hulp bij schulden met informatie en linkjes naar adressen waar je hulp kan vinden als je schulden hebt.",
              "Heb jij dringend een woning nodig? Lees op deze pagina van het Ministerie van VWS voorbeelden over wanneer je in aanmerking kan komen voor een urgentieverklaring. En over de voorwaarden om voorrang te krijgen op een sociale huurwoning.",
              "Op deze pagina van het Ministerie van VWS vind je meer informatie over maatschappelijke opvang voor als je geen huis hebt of dreigt dakloos te worden."
            ]
          },
          {
            "kop": "Maak jij je zorgen om iemand in jouw omgeving?"
          },
          {
            "tekst": "Heb jij iemand in je omgeving, zoals een familielid, vriend/vriendin of collega waarbij je merkt dat het niet goed gaat? Bijvoorbeeld doordat er klachten zijn ontstaan of verergerd door de crisissen? Bespreek jouw zorg en stimuleer de ander om hulp te zoeken. En bied aan om mee te gaan naar de huisarts."
          },
          {
            "tekst": "Als naaste van iemand met psychische problemen, kan het voor jou ook prettig zijn om ervaringen uit te wisselen met andere naasten. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. MIND Naasten Centraal biedt verschillende vormen van lotgenotencontact, zoals contactgroepen, Facebookgroepen, e-mailondersteuning en telefonische ondersteuning voor een luisterend oor."
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Neem eens een kijkje op de website van Gwen van Poorten. Via de website vind je meer info over o.a. een #METZNALLENacademy, #METZNALLENdepodcast en #METZNALLENde club. ‘Met z’n allen, want samen is beter dan alleen.’",
              "Voel jij je eenzaam? Op deze webpagina van Eén tegen eenzaamheid vind je waar je terecht kan voor hulp.",
              "Wil jij je zorgen om het klimaat omzetten naar concrete en positieve acties? En in contact komen met gelijkgestemden? Neem dan eens een kijkje op de website van KlimaatGesprekken.",
              "Wil jij in actie komen om mensen met psychische problemen te ondersteunen en mensen ontmoeten die het ook belangrijk vinden hier iets aan te doen? Bekijk de mogelijkheden op de actiewebsite van MIND."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Meer weten over eenzaamheid? Luister naar deze podcast van De Podcast Psycholoog."
            ]
          }
        ]
      },
      {
        "titel": "Anders denken en minder tobben",
        "intro": "Door alles wat er speelt in de wereld ben jij mogelijk gestrester, somberder of angstiger dan anders. Maar wist je dat gevoelens meestal veroorzaakt worden door hoe je over een situatie denkt? Het mooie hiervan is dat je veel kan bereiken door je gedachten op een positieve manier te veranderen. Natuurlijk veranderen je gedachten niets aan de situatie waar je in zit en dat kan nog steeds heel vervelend zijn. Maar ze kunnen er wel voor zorgen dat de situatie beter te dragen is.",
        "blokken": [
          {
            "kop": "De invloed van gedachten"
          },
          {
            "tekst": "Een voorbeeld: Je bent al maanden op zoek naar een woning, maar je vindt alleen woningen die te duur of al verhuurd of verkocht zijn. Of het is zo’n enorm klusproject, terwijl jij helemaal niet handig bent. Je kan dan denken: ‘Ik vind nooit een woning en het komt nooit goed.’ Deze gedachten zijn niet helpend en maken je bang of somber."
          },
          {
            "tekst": "Je kan ook anders over de situatie denken: ‘Het is een enorme uitdaging om een huis te vinden. Ik mag daar best van balen, maar ooit lukt het vast. Ik ga me nu focussen op de dingen die wel goed gaan.’ De situatie is precies hetzelfde, maar de kans is groot dat jij je nu een stuk fijner voelt."
          },
          {
            "tekst": "Een ander voorbeeld: Je maakt je erg veel zorgen over het klimaat. Je vindt dat er veel te weinig aan gedaan wordt door de politiek en de mensen om je heen. Je kan dan denken: ‘Volgens mij ben ik bijna de enige die zich hier druk over maakt. In mijn eentje kan ik de wereld niet redden.’ Deze gedachten maken je misschien boos of somber."
          },
          {
            "tekst": "Maar je kan ook anders over de situatie denken: ‘Ik ben misschien een van de weinige mensen die zich hier druk over maakt. Toch ga ik kijken wat ik kan veranderen. Al maakt het nog zo’n klein verschil.’ Ook hier is de kans groter dat jij je beter voelt."
          },
          {
            "kop": "Oefeningen uit de cognitieve gedragstherapie voor thuis"
          },
          {
            "tekst": "Wil je aan de slag gaan met het veranderen van jouw gedachten? Misschien heb je wel eens gehoord van cognitieve gedragstherapie. Dit is een behandelingsvorm die zicht geeft op manieren van denken. Je onderzoekt hoe je gedachten samenhangen met je gevoelens en gedrag. Tijdens de therapie leer je hoe je gedachten die ongewenste gevoelens geven om kan buigen naar gedachten die wél gewenste gevoelens met zich meebrengen. Ook zonder deze therapie te volgen, kan dit een fijne manier zijn om positiever te leren denken en voelen. Wij schreven een flyer met 2 oefeningen uit de cognitieve gedragstherapie voor thuis."
          },
          {
            "linkLabel": "Download de gratis flyer",
            "linkUrl": "https://wijzijnmind.nl/media/5881/download/cognitieve-therapie-flyer-v1.pdf?"
          },
          {
            "kop": "Tips om minder te tobben"
          },
          {
            "tekst": "Op social media vroegen we naar de invloed van de crisissen op de mentale gezondheid. Uit de reacties blijkt dat veel mensen piekeren of zich zorgen maken. Een voorbeeld:"
          },
          {
            "tekst": "‘Ik maak me meer zorgen in het algemeen. Ik heb meer stress, slaap slechter en ben sneller geïrriteerd.’"
          },
          {
            "tekst": "Merk je dat je veel piekert over jouw situatie of de situatie in de wereld? Helaas leidt piekeren niet tot nieuwe inzichten of oplossingen. Veel piekeren kan er juist voor zorgen dat jij je gestrest, angstig of somber voelt. Wij geven je graag wat tips om hier meer controle over te krijgen."
          },
          {
            "lijst": [
              "Zoek afleiding als je merkt dat je begint te piekeren.",
              "Plan iedere dag een kwartier in waarin je heel bewust mag piekeren. Stop echt na dit kwartier! Schiet er je toch iets te binnen, schrijf het op en denk er pas over na in je piekerkwartier.",
              "Doorbreek je gedachten door aan een elastiekje om je pols te trekken.",
              "Stel jezelf zo weinig mogelijk de vraag ‘wat als…?’, zodat je minder in de verleiding komt om hier allerlei antwoorden op te bedenken."
            ]
          },
          {
            "tekst": "Wil je uitgebreide uitleg over deze tips? Wij schreven een flyer met tips en technieken om piekeren tegen te gaan."
          },
          {
            "linkLabel": "Download de gratis flyer",
            "linkUrl": "https://wijzijnmind.nl/media/5892/download/piekeren-flyer-v1.pdf?"
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Verkeerde denkgewoonten kunnen stress veroorzaken. Breng in kaart hoe jouw denkgewoonten zijn.",
              "Wil jij weten hoeveel je piekert? Doe de piekertest.",
              "Heb jij wel eens van omdenken gehoord? ‘Omdenken is een manier van denken en doen, waarmee je van een probleem een mogelijkheid maakt.’ Neem een kijkje op de website van Omdenken voor o.a. interessante podcasts, boeken en een theatershow over dit onderwerp.",
              "Heb jij hulp nodig om negatieve gedachten om te zetten in positieve gedachten? Of wil jij je piekergedrag onder controle krijgen? Meld je aan voor de gratis cursus Kleurjeleven om met begeleiding depressieve klachten aan te pakken."
            ]
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk ook eens deze video over wat omdenken inhoudt."
            ]
          }
        ]
      },
      {
        "titel": "Aanpakken en ruimte voor oplossingen",
        "intro": "Het kan heel vervelend voelen als je geen controle hebt over jouw situatie of over zaken die om je heen gebeuren. Zo ontvingen we deze reacties via social media:",
        "blokken": [
          {
            "tekst": "‘ Ik word onrustig, omdat ik geen invloed heb op het verloop van de crisissen, maar wel afhankelijk ben.’"
          },
          {
            "tekst": "En:"
          },
          {
            "tekst": "‘Ik voel me gestrest en depri, ook al heb ik op deze dingen geen invloed.’"
          },
          {
            "tekst": "Aan de crisissen zelf kan je natuurlijk niet zoveel veranderen. Gelukkig zijn er wel vaak dingen die je kan doen om jouw situatie aan te pakken of bij te dragen aan een betere wereld. Hieronder geven we je voorbeelden en tips."
          },
          {
            "kop": "Hebben de crisissen invloed op jouw situatie?"
          },
          {
            "tekst": "Heb je al van alles geprobeerd om jouw situatie te veranderen en zie je door de bomen het bos niet meer? Of weet je niet waar je moet beginnen? Laat iemand in je omgeving die je vertrouwt met je meedenken en vraag praktische hulp (zie ook onze praktische tips van dag 2 van deze themaspecial). Misschien zijn er wel financiële subsidies waar je nog geen weet van hebt. Of zorgen jouw omstandigheden ervoor dat je recht hebt om snel een huis te krijgen. Zijn er dingen die je echt niet kan veranderen? Probeer dat ook niet en bespaar je energie voor dingen waarbij je dat wel kan."
          },
          {
            "kop": "Maak jij je zorgen over de wereld?"
          },
          {
            "tekst": "Heb jij het gevoel dat de problemen in de wereld zo groots zijn dat jij hier geen invloed op kan uitoefenen? Heel begrijpelijk, maar onthoud dat alle kleine beetjes écht helpen! Het geeft een goed gevoel als jíj́ in ieder geval je best doet bij te dragen aan een betere wereld. Bovendien is de kans groot dat jij de mensen om je heen inspireert met je eigen ‘kleine’ acties. Doordat zij ook in actie komen, is jouw bijdrage groter dan je vooraf kan bedenken. Aanpakken dus! Ga bijvoorbeeld afval opruimen op het strand of help vluchtelingenop weg naar een leven in Nederland. Organiseer een actie om jouw buurt te vergroenen,word vrijwilliger bij de Voedselbank of help mensen die het psychisch moeilijk hebben door een sponsoractie voor MIND te starten. Heb jij niet de mogelijkheden voor dit soort dingen? Bedenk je dan dat ook kleinere dingen bijdragen."
          },
          {
            "kop": "Tips over het omgaan met nieuws"
          },
          {
            "tekst": "Word je erg geraakt door alles wat er speelt? En heeft het nieuws en alle meningen daarover een negatieve invloed op jou? Lees dan onderstaande tips:"
          },
          {
            "lijst": [
              "Luister of bekijk wat minder vaak het nieuws. Wil je liever niet te veel missen, bekijk dan alleen feitelijke informatie. Bijvoorbeeld op informatieve websites of teletekst. Zo raak je niet in de war door alle verschillende meningen in de media. Kijk ook kritisch naar wie je volgt via social media, om ook via deze weg ‘ongewenste’ meningen te verminderen.",
              "Verander je focus! In plaats van je steeds maar bezig te houden met wat er allemaal mis is in de wereld, kan je je aandacht ook verleggen naar dingen die goed gaan of hoop geven. Zin in een dosis goed nieuws? Bekijk dan bijvoorbeeld eens deze goed nieuwspagina’s van NU.nl en HuffPostof deze Insta pagina van Good News Movement.",
              "Geef je grenzen aan als je vrienden maar door blijven kletsen over bijvoorbeeld oorlogen of over de klimaatcrisis. Vind je dat lastig? Wij schreven een flyer met tips om je grenzen te leren kennen en aan te geven."
            ]
          },
          {
            "tekst": "Met bovenstaande tips zeggen we overigens niet dat je negatieve gevoelens over wat er allemaal speelt in de wereld moet vermijden. Sterker nog, deze gevoelens zijn hartstikke nodig om dingen aan te pakken. Maar op het moment dat je erg emotioneel en in de war raakt van al het nieuws en meningen, helpt het jou en de wereld niet verder."
          },
          {
            "kop": "Ruimte voor oplossingen"
          },
          {
            "tekst": "Tegelijkertijd is het juist goed om niet te vechten tegen wat je voelt, maar gevoelens toe te laten. Dat geldt ook voor iedereen die door de crisissen in een lastige situatie zit. De meesten mensen die moeilijke dingen meemaken doen er van alles aan om de negatieve gevoelens die daarbij horen te veranderen. Denk aan gevoelens van verdriet, irritatie, angst en boosheid. Hierdoor zijn ze voortdurend bezig met het probleem dat de vervelende gevoelens veroorzaakt. En wordt het probleem juist duidelijker aanwezig en heeft het een grotere invloed op je leven dan je zou willen."
          },
          {
            "tekst": "Heb je wel eens van mindfulness gehoord? Dat is een training die je helpt dichter bij je gevoel te komen, zonder erover te oordelen of er direct iets mee te gaan doen. Op deze manier creëer je ruimte om problemen van een andere kant te bekijken. Zo kom je vaak op nieuwe ideeën of oplossingen."
          },
          {
            "tekst": "We weten dat dit makkelijker gezegd is dan gedaan. Het heeft vaak even tijd nodig om op een nieuwe manier met situaties om te gaan. Logisch dus dat dit niet van de een op andere dag lukt. Maar als je hier regelmatig mee oefent, ervaar je dat je er steeds beter in wordt."
          },
          {
            "tekst": "Probeer het maar eens als je een moeilijk moment meemaakt. Sta stil bij wat je ervaart, laat alles toe en schiet niet in de ‘doe-stand’ of ‘vechtstand’ om het weg te werken. Kijk er vanaf een afstandje naar en probeer er niet over te oordelen."
          },
          {
            "kop": "Mindfulness oefening"
          },
          {
            "tekst": "Graag delen we een mindfulness oefening met je. Het is namelijk een simpele oefening die je bijna altijd en overal kan doen. Door je aandacht volledig te richten op het hier en nu en door je te focussen op de geluiden die je hoort, de dingen die je voelt of die je ziet, zijn je hersenen met iets anders bezig dan met welke problemen er allemaal spelen. Lees de oefening hieronder of laat je begeleiden door deze geluidsopname."
          },
          {
            "tekst": "Leun achterover. Kijk om je heen en besef je waar je op dit moment bent. Wat zie en hoor je eigenlijk? Hoe zit of sta je erbij? Zijn je schouders wel ontspannen? En je nek, kaken en voorhoofd? Richt je nu ook op je ademhaling. Hoe adem je op dit moment? Snel of langzaam, vanuit je buik of vanuit je borst?"
          },
          {
            "tekst": "Wat valt je op als je deze oefening doet? Probeer deze oefening de aankomende tijd een paar keer per dag te doen."
          },
          {
            "tekst": "Een van onze volgers op social media geeft aan dat mindfulness haar helpt bij het omgaan met de onrustige tijden:"
          },
          {
            "tekst": "‘Mij helpt het mindful bezig te zijn met de dingen die wel goed gaan en met de dingen waar ik wel invloed op heb.’"
          },
          {
            "tekst": "En een andere volger:"
          },
          {
            "tekst": "‘Wat mij helpt is meditatie toe te passen in mijn dagelijkse leven.’"
          },
          {
            "tekst": "Wil je eens kijken of mindfulness iets voor jou is? We stelden een flyer samen met tips en een aantal oefeningen om thuis aan de slag te gaan met mindfulness."
          },
          {
            "linkLabel": "Download de gratis flyer",
            "linkUrl": "https://wijzijnmind.nl/media/5888/download/mindfulness-flyer-v1.pdf?"
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Leeshoe je een sponsoractie voor MIND kan starten. Met jouw inzet zorg je ervoor dat er meer aandacht komt voor psychisch welzijn èn haal je geld op om mensen die met hun psychische gezondheid worstelen te ondersteunen.",
              "Nieuwsgierig naar wat jij zelf kan doen voor het klimaat? Milieu Centraal gaat in dit artikel in op 6 klimaatklappers die iedereen kan maken.",
              "Brandpunt + publiceerde dit artikel met 6 tips om te voorkomen dat al het deprimerende wereldnieuws je helemaal omverblaast.",
              "Zoek jij een mindfulness trainer of training in de buurt? Ga dan naar deze webpaginavan de Vereniging Mindfulness Based Trainers Nederland (VMBN)."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Laat je begeleiden door deze Mindfulness meditatieoefeningen van Rob Brandsma op Spotify."
            ]
          }
        ]
      },
      {
        "titel": "Gezonde leefstijl en mindset",
        "intro": "In deze lastige tijd is het extra belangrijk je lichaam en geest gezond te houden. Het helpt je zo goed mogelijk om te kunnen gaan met wat er op je pad komt. Natuurlijk weten we allemaal wel dat als we goed voor ons lijf zorgen, dit ook goed is voor onze geest en andersom. Maar dit is soms makkelijker gezegd dan gedaan. We geven hieronder praktische tips om goed voor jezelf te zorgen.",
        "blokken": [
          {
            "kop": "Wees niet te streng voor jezelf"
          },
          {
            "tekst": "Je hebt het waarschijnlijk al moeilijk genoeg, probeer daarom lief te zijn voor jezelf! Focus je op dingen waar je energie van krijgt. Vind jij het lastig de lat voor jezelf niet te hoog te leggen? En heb je het gevoel steeds van alles te moeten? Meld je aan voor onze Chill, je moet al zoveel challenge met opdrachten en tips om wat relaxter door het leven te gaan. De challenge is in principe ontwikkeld voor jongeren, maar zeker ook geschikt voor volwassenen die wat handvatten kunnen gebruiken."
          },
          {
            "kop": "Verwen jezelf"
          },
          {
            "tekst": "Door deze gekke tijd kan het zijn dat je overgegaan bent op standje ‘overleven’. Juist nu is het extra belangrijk om genietmomentjes in te bouwen. Trakteer jezelf regelmatig op wat leuks. Dat hoeven geen dingen te zijn die je voor jezelf koopt of uitstapjes waarvoor je moet betalen. Denk aan verwenmomentjes zoals een dagje helemaal niets doen, genieten van een lekkere kop koffie of thee, meezingen met de radio of een rondje fietsen zonder een duidelijk doel. Een van onze volgers via social media:"
          },
          {
            "tekst": "‘Mij helpt het om mij af en toe even terug te trekken in mijn eigen bubbel.’"
          },
          {
            "kop": "Kom voor jezelf op"
          },
          {
            "tekst": "Opkomen voor jezelf zonder de gevoelens en belangen van anderen uit het oog te verliezen, noemen we assertief gedrag. Assertief zijn, helpt je bij het voorkomen van ongezonde stress. Benieuwd hoe assertief jij bent? Doe de test. Bij assertief gedrag hoort ook het stellen van grenzen en nee durven zeggen. Vind je dat lastig? Wij schreven een flyer met tips om je grenzen te leren kennen en aan te geven en een flyer met oefeningen en tips om vaker nee te zeggen."
          },
          {
            "kop": "Denk positief"
          },
          {
            "tekst": "Natuurlijk is het lastig om positief te blijven als je het lastig hebt. Maar het leven is nooit alleen maar negatief. Er zijn altijd positieve dingen te bedenken. Dat kunnen kleine dingen zijn, zoals een fijne wandeling die je hebt gemaakt, iemand die naar je lachte of een leuke film die je hebt gezien. Probeer een aantal dagen in de week minimaal 3 dingen te bedenken die fijn waren aan de dag. Een volger via social media:"
          },
          {
            "tekst": "‘Mij helpt het om ook de goede dingen in de wereld te zien. Wat gaat goed? Wat kan ik dus ook zelf veranderen?’"
          },
          {
            "tekst": "En een ander:"
          },
          {
            "tekst": "‘Ik probeer zelf positief te blijven en dicht bij de natuur.’"
          },
          {
            "kop": "Zoek groen op"
          },
          {
            "tekst": "Wist je dat de natuur een positief effect heeft op je mentale gezondheid? Zo kan een bezoek aan de natuur leiden tot vermindering van gevoelens van boosheid en somberheid. En bijdragen aan een toename van energie en positieve emoties. Zelfs de World Health Organization (WHO) erkent het verband tussen groen in de woonomgeving en mentaal welzijn. Woon je in de stad en loop je niet zo makkelijk de natuur in? Er is vast wel een park bij jou in de buurt. Zoek het op! Bekijk hier de tips van Natuurmonumenten voor een bezoek aan de natuur."
          },
          {
            "kop": "Zorg voor een opgeruimde omgeving"
          },
          {
            "tekst": "Een rustige omgeving draagt bij aan een rustig hoofd. Probeer je huis en eventuele werkplek daarom zo opgeruimd mogelijk te houden. Ook kan het helpen om eens goed door je spullen te gaan en te bedenken waar je echt niet zonder kan. Bewaar wat je nodig hebt en zoek een nieuwe bestemming voor je andere spullen. Of doe het weg. Minder spullen betekent minder chaos om je heen. Ook kan je dingen beter terugvinden."
          },
          {
            "kop": "Breng structuur in je dagen"
          },
          {
            "tekst": "Zoveel mogelijk dagen in de week rond dezelfde tijd opstaan, eten, dingen ondernemen en gaan slapen geeft structuur aan je dagen. Dit zorgt voor houvast en overzicht. Je houdt zo energie over voor andere dingen. Bovendien vindt je biologische klok dit fijn. De biologische klok bevindt zich in je hersenen. Het zorgt ervoor dat verschillende processen in je lichaam geregeld worden, zoals je slaap-waakritme. Je biologische klok werkt het beste bij regelmaat."
          },
          {
            "kop": "Slaap!"
          },
          {
            "tekst": "Door alles wat er nu speelt kan het zijn dat jij moeite hebt met in slaap komen of ’s nachts wakker ligt en lastig weer in slaap komt.Terwijl slapen nodig is om je lichaam en geest te laten herstellen van de dag. Wat kan helpen om beter te slapen is het afbouwen van je activiteiten voordat je gaat slapen. Ook helpt een slaap-ritueel. Een slaapritueel bestaat uit een aantal vaste gewoonten die je dagelijks uitvoert voor het slapen gaan. Bijvoorbeeld iedere avond nog een stukje in een boek lezen en douchen, voordat je gaat slapen. Op zoek naar meer tips? Voor iedereen die handvatten kan gebruiken om beter te slapen, ontwikkelden wij de Beter Slapen Challenge. Je krijgt dan meerdere mails met opdrachten en tips voor een betere nachtrust."
          },
          {
            "kop": "Ontspan"
          },
          {
            "tekst": "Ontspannen is belangrijk voor een goede balans in je leven en is extra belangrijk in tijden waarin er veel van je wordt gevraagd. Waar je van ontspant verschilt per persoon. De een ontspant van een lange wandeling, de ander van een goed gesprek, een boek lezen of sporten. Waar ontspan jij van? Doe je dat genoeg? Neem ontspanning zoveel mogelijk mee in je weekplanning, zodat de kans groter is dat je het ook daadwerkelijk gaat doen. Vind je het lastig om te ontspannen? Doe dan deze ontspanningsoefeningen. Of lees onze tips om te ontspannen. Een volger via social media:"
          },
          {
            "tekst": "‘Mij helpt het om toch tijd in te plannen om dingen te doen die ik leuk vind en waar ik rust van krijg.’"
          },
          {
            "kop": "Eet en drink gezond"
          },
          {
            "tekst": "Probeer op je voeding te letten en gezond te eten en drinken. Gebruik geen drugs, wees matig met cafeïne en drink zo weinig mogelijk alcohol. Bekijk eens de website van het Voedingscentrum als je meer wil weten over gezonde voeding. Naast de informatie die ze bieden, hebben ze apps die je helpen bij een gezond voedingspatroon. Wil jij stoppen met roken? Op ikstopnu.nl vind je info, tips en verwijzingen naar hulp en hulpmiddelen."
          },
          {
            "kop": "Beweeg voldoende"
          },
          {
            "tekst": "Bij een gezonde leefstijl hoort ook voldoende bewegen. Probeer iedere dag minimaal een half uur matig intensief te bewegen. Je beweegt matig intensief bij activiteiten waarbij je hartslag en ademhaling omhooggaan. Denk aan wandelen, fietsen en rustig zwemmen. Probeer daarnaast iedere week minimaal 2 keer intensief te sporten. Denk aan hardlopen of bootcamps. Wil jij meer weten over bewegen en sporten? Neem dan eens een kijken op de website van het Kenniscentrum Sport & Bewegen. Vind je het lastig om voldoende te bewegen? Zoek iemand in je omgeving waarmee je het samendoet. Je kan elkaar motiveren en het is nog gezellig ook."
          },
          {
            "kop": "Deel jouw ervaring"
          },
          {
            "tekst": "Wil je naar aanleiding van deze themaspecial jouw ervaringsverhaal delen? Over de invloed van de crisissen die er spelen op je mind of hoe je ermee omgaat? Deel jouw ervaringsverhaal op onze website, zodat ook andere mensen deze kunnen lezen. Begin de titel met: Aandacht voor onrustige tijden"
          },
          {
            "linkLabel": "Vertel jouw ervaringsverhaal",
            "linkUrl": "https://wijzijnmind.nl/ervaringsverhaal/donatie/nieuw"
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Wil jij werken aan je mentale fitheid, minder drinken of stoppen met roken? Mentaal Vitaal heeft verschillende online oefeningen en cursussen bij elkaar gezet die je hierbij kunnen helpen. (Ook vind je er het aanbod over stress, depressie, angst etc.)"
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "De podcastreeks Kalm met Klassiekvan AVROTROS en NPO Radio 4 laat je dagelijks ontspannen door kalmerende klassieke muziek, soms aangevuld met ademhalingstips en meditatieoefeningen.",
              "Luister deze meditatie van Lief Leven op Spotify om lekker te slapen."
            ]
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "De Netfix-serie Headspace Guide to Meditation '__laat op een vriendelijke, geanimeerde manier de voordelen van meditatie zien en biedt technieken en begeleide meditaties waarmee je direct kunt beginnen.’"
            ]
          }
        ]
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
        "intro": "Veel mensen die te maken hebben met psychische problemen krijgen wel eens de vraag hoe het met hen gaat. Grote kans dat jij deze vraag ook wel eens krijgt. Het kan zijn dat hierbij het woord ‘herstel’ genoemd wordt. Bijvoorbeeld omdat je behandelaar aangeeft dat je bezig bent met je herstel. Of dat je deze term online tegenkomt. Maar wat is herstel nu eigenlijk? We vertellen je graag meer over wat het inhoudt, maar ook over wat het juist niet is.",
        "blokken": [
          {
            "tekst": "Streef niet naar een ideaalbeeld. Herstel is voor iedereen anders."
          },
          {
            "kop": "Wat is herstel?"
          },
          {
            "tekst": "Je herstelt van een psychisch probleem wanneer je stappen zet om weer grip te krijgen op je leven. Tijdens je herstel ontdek je weer waar je mogelijkheden liggen. Stap voor stap vind je terug wie je bent en wat je belangrijk vindt in je leven. Je psychische klachten nemen af of gaan je dagelijkse leven minder beheersen. Je weet beter met jouw gevoelens en gedachten om te gaan en de psychische klachten die je (nog) ervaart een plek te geven, te accepteren dat deze er zijn."
          },
          {
            "tekst": "Ook krijg je meer inzicht in je kwetsbaarheden. Hierdoor snap je beter waardoor je dingen doet of voelt. Dit kan je helpen bij het aanvoelen van je waarschuwingssignalen die voorafgaan aan je klachten."
          },
          {
            "tekst": "Bij herstellen hoort vaak ook dat je beetje bij beetje meer dingen oppakt, zoals werken, naar school gaan of afspreken met vrienden of familie."
          },
          {
            "tekst": "In deze video van Herstel Animatie staat een heldere uitleg over wat herstel is."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=phFqSDAtebE"
          },
          {
            "kop": "Wat is herstel niet?"
          },
          {
            "tekst": "Bij herstel denken sommige mensen dat dit betekent dat je helemaal geen psychische klachten meer ervaart of dat je psychische kwetsbaarheid is verdwenen."
          },
          {
            "tekst": "Anders dan bij het herstellen van een lichamelijke ziekte, hoeft herstellen van een psychische aandoening niet te betekenen dat je geen psychische klachten meer ervaart. Hoewel je klachten minder kunnen worden of niet meer op de voorgrond staan, gaat herstel hier veel meer over welke invloed jouw klachten of jouw kwetsbaarheid op je leven hebben. En hoe je ermee omgaat. Herstel is daarom voor iedereen mogelijk."
          },
          {
            "tekst": "Kleine stapjes! Ook hoge bergen opklimmen of diepe dalen uitklimmen gaat in kleine stapjes. Soms moet je een stapje terug. Dit is geen falen, het vorige stapje was alleen te groot. Soms sta je even stil om op adem te komen. Geniet dan van het uitzicht, zie waar je vandaan komt en hoeveel stappen je al gezet hebt. Ook al liggen er nog honderden stapjes voor je."
          },
          {
            "kop": "Met vallen en opstaan"
          },
          {
            "tekst": "Bij het proces van herstellen horen ups-and-downs . Een mindere periode kan heel lastig voelen, helemaal op het moment dat je het gevoel hebt dat je het onder controle hebt. Dit is heel normaal. Het betekent niet dat je helemaal terugvalt of dat de stappen die je hebt gezet voor niks zijn geweest."
          },
          {
            "tekst": "Gun jezelf dan ook voldoende tijd en ruimte hiervoor. En probeer niet te hoge verwachtingen van jezelf te hebben. Bedenk je dat het een leerproces is. Een terugval kan je juist inzicht geven, bijvoorbeeld over wat er aan je terugval voorafging. En over wat je helpt en wat je juist niet helpt in je herstel."
          },
          {
            "tekst": "In onderstaande video heeft Marieke de Goeij (schrijfster van Het Grote Depri Doe Boek) hoopvolle woorden over hoe je met een terugval om kan gaan en waarom het okay is dat herstel met vallen en opstaan gaat:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=iT_kzRH0f-g"
          },
          {
            "tekst": "Meer zien? Deze video is onderdeel van Marieke’s video supportprogramma voor burnout, angst en depressie. Met kortingscode MIND krijg je 10 euro extra korting."
          },
          {
            "tekst": "Ook maakt Marieke met onderstaande grafiekjes duidelijk wat het verschil is tussen hoe een 'terugval' voelt en hoe het echt zit:"
          },
          {
            "kop": "Persoonlijk proces"
          },
          {
            "tekst": "Herstel bij psychische problemen is een persoonlijk proces. Wat bij de een werkt, hoeft bij de ander niet op dezelfde manier te werken.Wel kunnen de ervaringen van anderen helpen om dingen bij jezelf beter te begrijpen of je inspireren bij jouw herstelproces."
          },
          {
            "tekst": "Bekijk hieronder het verhaal van Jarvin van Rosberg, waarin hij vertelt over zijn burn-out en hoe hij ermee omging. Zo zegt hij: ‘Het gaat er niet om wat andere mensen van me vinden, maar ben ik tevreden met wie ik ben of ben ik tevreden met wat ik doe? Als je daar op een gegeven moment antwoord op krijgt, dan ga je vanuit daar denk ik meer leven.’"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=OCgHZ84MUmc"
          },
          {
            "tekst": "De aankomende dagen zullen we aandacht besteden aan welke dingen kunnen helpen om te werken aan je herstel."
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "In deze video van Herstel Animatie zie je in heldere animaties wat iedereen moet weten over herstel.",
              "Bekijk deze video van GGZ Breburg waar in een animatie duidelijk wordt uitgelegd wat herstel is en welke fases daarbij horen."
            ]
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Dit digitale boekje biedt een overzicht van wat herstel en herstelondersteuning is en wat ervoor nodig is om dit te realiseren: Herstelondersteuning. Van kans naar realiteit!",
              "Gwen van Poorten had een burn-out toen ze 22 jaar was. In haar boek Voeten in het stopcontact gaat ze op allerlei dingen in met als doel beste vrienden met jezelf worden."
            ]
          }
        ]
      },
      {
        "titel": "Waarden en grenzen",
        "intro": "Om goed te kunnen herstellen, is het fijn te weten wat jij belangrijk vindt in je leven. Om op basis hiervan te leven en keuzes te maken. Naast te weten wat je wel wil, is het ook goed te weten wat je niet wil of waar je grenzen liggen. En om deze grenzen vervolgens aan te geven.",
        "blokken": [
          {
            "tekst": "Door te kijken en bouwen aan wie ik ben buiten mijn beperkingen, krijg ik meer vertrouwen en acceptatie naar wie ik ben als mens. Dat geeft een enorme kracht."
          },
          {
            "kop": "Waarden"
          },
          {
            "tekst": "Als je leven opgeschud is door psychische klachten, kan je even kwijt zijn wat jij nu belangrijk vindt. Het kan dan helpen om inzichtelijk te maken wat belangrijke waarden voor jou zijn. We bieden je daarom de volgende oefening. Pak pen en papier erbij en stel jezelf de vraag: Wat vind ik belangrijk in mijn leven; wat vind ik belangrijke waarden? Hieronder noemen we wat voorbeelden van waarden waaruit je kan kiezen. Maar voel je vrij om aan te vullen met andere waarden die bij jou passen."
          },
          {
            "lijst": [
              "Rust of uitdaging",
              "Alleen of samen",
              "Stabiliteit of vrijheid",
              "Plezier of rijkdom"
            ]
          },
          {
            "tekst": "Andere voorbeelden van positieve persoonlijke waarden zijn: vertrouwen, religie/spiritualiteit, eerlijkheid, liefde, loyaliteit, verbinding en zekerheid. Het kan ook zijn dat je een paar woorden nodig hebt om je waarden te beschrijven, zoals: leven in de natuur of voldoende tijd doorbrengen met mijn kinderen."
          },
          {
            "tekst": "Maak nu een top 5 van de waarden die voor jou belangrijk zijn en die je terug wil laten komen in jouw leven. Rangschik ze op volgorde van belangrijkheid."
          },
          {
            "tekst": "Bewaar dit lijstje goed! Sta je voor een beslissing? Of ben je even kwijt welke richting je op wil in je leven? Haal dan dit lijstje weer tevoorschijn."
          },
          {
            "tekst": "In deze animatie van SeeTrue Mindfulness wordt uitgelegd hoe waarden een kompas zijn die richting geven aan een betekenisvol leven."
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=EmsEc5TYsWs"
          },
          {
            "kop": "Grenzen"
          },
          {
            "tekst": "Bij herstel hoort ook het herkennen en stellen van grenzen, zodat anderen of jijzelf daar niet overheen gaan. Op die manier zorg je ervoor dat je blijft leven volgens de waarden die jij belangrijk vindt. En je jouw energie niet kwijt bent aan dingen waarvan jij dat eigenlijk helemaal niet wilt."
          },
          {
            "tekst": "Tegelijkertijd kan het helpen om de grenzen die je beperken te verkennen en op te rekken waar dit kan, zodat er weer meer mogelijk is in je leven."
          },
          {
            "kop": "Grenzen stellen naar de ander"
          },
          {
            "tekst": "Je moeder die blijft vragen wanneer je langskomt, terwijl je weinig energie hebt. Je leidinggevende die soms ‘even vergeten’ lijkt te zijn dat je jouw uren nog aan het opbouwen bent. Of je partner die graag wil dat je meegaat naar een feestje en geen rekening houdt met dat jij je weekenden graag leeg houdt."
          },
          {
            "tekst": "Het klinkt misschien makkelijk om te voelen waar je grenzen liggen, maar hoe weet je dat nu? Gevoelens van boosheid, irritatie en verdriet als reactie op het gedrag van de ander kunnen een signaal zijn dat je grens is overschreden. Wees je bewust van deze gevoelens. En sta stil bij wat er aan deze gevoelens voorafging. Had je het idee dat de ander te weinig rekening hield met jouw behoeften? En op welk punt precies had je het idee dat jouw grens werd overschreden? Door stil te staan bij deze ervaringen, zal je in de loop van de tijd steeds duidelijker aanvoelen waar jouw grenzen liggen."
          },
          {
            "tekst": "Als je inzicht hebt in waar jouw grenzen liggen, kun je het aangeven ervan in de praktijk brengen. Bedenk hierbij: de manier waarop je jouw grens aangeeft, speelt een belangrijke rol in de reactie die je krijgt. Vertel de boodschap daarom vanuit jezelf. Start met de ander te vertellen over jouw gevoel en benoem heel specifiek waarop je reageert. Vertel over de gevolgen voor jou. Vertel ook wat je van de ander wil. Geef de ander vervolgens de ruimte en luister goed naar wat hij of zij wil zeggen. Hierdoor zal diegene zich gehoord voelen en ook eerder jouw boodschap accepteren."
          },
          {
            "tekst": "Wij schreven ook een online gids over grenzen stellen. Daarin staan opdrachten, die hier nog wat uitgebreider op ingaan. Ook krijg je nog meer tips."
          },
          {
            "linkLabel": "Bekijk de online gids",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/grenzen-stellen"
          },
          {
            "tekst": "Ga op zoek naar wat jou energie of rust geeft in welke situatie."
          },
          {
            "kop": "Grenzen stellen naar jezelf"
          },
          {
            "tekst": "Naast het stellen van grenzen naar anderen toe, is het soms nodig grenzen naar jezelf te stellen en verwachtingen bij te stellen. Bijvoorbeeld als het gaat om voldoende tijd nemen om te herstellen. Denk aan te snel weer hele dagen werken als je herstellende bent van een burn-out. Of de thuishulp wegsturen en het huishouden weer oppakken, terwijl je depressie nog maar net minder wordt."
          },
          {
            "tekst": "Hoewel het verkennen en oprekken van grenzen bij kan dragen aan je herstel (zie hieronder), is het niet slim om jezelf te overvragen hierin."
          },
          {
            "kop": "Grenzen verkennen en oprekken"
          },
          {
            "tekst": "Jouw psychische klachten hebben er waarschijnlijk voor gezorgd dat je beperkingen hebt ervaren. Bepaalde dingen gingen niet meer. Zijn er grenzen waar jij regelmatig tegenaan loopt en die je graag wat zou willen verleggen, zodat er weer wat meer mogelijk is? Probeer voor jezelf te voelen welke grenzen dit zijn en hoe je ze beetje bij beetje kan oprekken. Vraag hier eventueel hulp bij van je behandelaar of van bijvoorbeeld ervaringsgenoten die dit al eens mee hebben gemaakt. Hieraan werken geeft je hoop dat er steeds weer een beetje meer mogelijk is."
          },
          {
            "tekst": "Bewegen, bewegen, bewegen en naar buiten! Ga niet wachten tot je er zin in krijgt, want dat krijg je vaak niet. Verwacht ook niet meteen wonderen maar écht, het gáát helpen."
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "In deze Engelstalige TEDx Talk vertelt Larisa Halilović over het kompas wat iedereen al in zich draagt, onze kernwaarden. Ze gaat in op hoe belangrijk ze zijn, welke vragen je jezelf kan stellen om ze te ontdekken, hoe je ermee kan werken en wat je kan doen als je het lastig vindt ze te bepalen.",
              "Bekijk deze animatie van WellBased mentorles over het belang van grenzen aangeven en hoe je dat kan doen. Deze video is onderdeel van lesmateriaal, maar is ook los daarvan goed te bekijken."
            ]
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Je waarden als kompas; lees dit artikel van Psychologie Magazine.",
              "In dit artikel van Happinez vind je een schrijfopdracht die je helpt om je kernwaarden te ontdekken en vervolgens meer toe te passen in je dagelijkse leven.",
              "Wil jij weten hoe helder jouw grenzen zijn? Doe deze test van Psychologie Magazine."
            ]
          }
        ]
      },
      {
        "titel": "Eigen regie pakken",
        "intro": "Een belangrijk onderdeel van herstel is het (terug)pakken van eigen regie over je leven met een psychische kwetsbaarheid. Jij bepaalt hoe jij jouw leven vormgeeft op een manier die bij jou past.",
        "blokken": [
          {
            "tekst": "Het gevecht 'tegen' opgeven kost veel te veel energie. Accepteren betekent niet (!!) dat je je overgeeft of je erbij neerlegt. Het geeft juist een prima start voor je eigen gebruiksaanwijzing. Als je jezelf, je kwetsbaarheid, je kracht en je lichaam serieus neemt, kun je heel veel. Oh ja, STOP vergelijken met anderen."
          },
          {
            "kop": "Stap voor stap"
          },
          {
            "tekst": "De regie weer terugpakken kan soms best weer even wennen zijn, helemaal als je al langere tijd afhankelijk bent van zorg of ondersteuning. Misschien voel jij je hierdoor onzeker of heb je het gevoel dat je niet goed zelf meer kan beslissen.Probeer op zulke momenten te beseffen dat dit soort gevoelens heel normaal en goed te begrijpen zijn. Door hier beetje bij beetje stappen in te zetten, zal je er steeds meer vertrouwen in krijgen."
          },
          {
            "tekst": "Geef niet op. Herstel gaat grillig, maar kleine stapjes maken het geheel."
          },
          {
            "kop": "Ondersteuning vragen is ook regie pakken"
          },
          {
            "tekst": "Belangrijk om te weten is dat het pakken van regie over je leven niet betekent dat je alles helemaal zelf moet doen. Integendeel, het vragen om ondersteuning of begeleiding van een naaste of professional is ook een manier waarop je zelf regie neemt over je leven. Vandaag gaan we het hebben over uitgaan van mogelijkheden, hoop, perspectief en acceptatie."
          },
          {
            "kop": "Uitgaan van mogelijkheden en eigen kracht"
          },
          {
            "tekst": "Als je in herstel bent, leer je te zien welke talenten en mogelijkheden je hebt. Je ontdekt hoe je, ondanks je klachten, een mooi en zinvol leven kan hebben. Misschien heb je ook wel eens gehoord van de term empowerment. Hiermee wordt bedoeld dat je ontdekt dat je mogelijkheden hebt om invloed op jouw leven uit te oefenen. En dat je in je eigen kracht kunt staan."
          },
          {
            "kop": "Hoop en perspectief"
          },
          {
            "tekst": "Bij empowerment hoort ook het weer terugvinden van hoop. Als je weer vertrouwt op je eigen mogelijkheden, je de ruimte voelt om te groeien en hierdoor naar de toekomst durft te kijken, zal dit ook een positief effect hebben op je herstel. Andersom werkt het ook; doordat je beter weet om te gaan met je klachten, merk je dat er beetje bij beetje weer dingen mogelijk zijn. Dit geeft vertrouwen in jezelf en in je toekomst."
          },
          {
            "tekst": "‘Mijn kwetsbaarheid geeft mij kracht.’ Bekijk deze video over empowerment van Herstel Animatie:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=0_G4uU4AmX8"
          },
          {
            "kop": "Acceptatie"
          },
          {
            "tekst": "Een belangrijk onderdeel dat je kan helpen om anders met je klachten om te gaan is acceptatie van je psychische kwetsbaarheid. Natuurlijk is dit makkelijker gezegd dan gedaan. Want hoe accepteer je iets wat je het liefst niet wil hebben?"
          },
          {
            "tekst": "De eerste stap hierin is om niet te vechten tegen je klachten. Hiermee bedoelen we niet dat je de klachten gelaten ondergaat en dat je ze jouw leven laat bepalen. Maar probeer naar je klachten te kijken op een niet oordelende manier. Laat ze er zijn en ga niet van alles doen om het tegen te gaan. Op deze manier gaan ze als vanzelf een minder grote rol spelen in je leven."
          },
          {
            "tekst": "Bedenk hierbij dat accepteren een leerproces is en dat dit niet iets is dat van de ene op de andere dag lukt. Maar door hier iedere dag mee te oefenen, zal je merken dat dit steeds gemakkelijker gaat. Mindfulness is een training die hierbij kan ondersteunen."
          },
          {
            "tekst": "Leren accepteren? Kijk onderstaande video uit het video supportprogramma van Marieke (schrijfster van Het Grote Depri Doe Boek):"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=gi4w1toIxXc"
          },
          {
            "tekst": "Meer zien? Deze video is onderdeel van Marieke’s video supportprogramma voor burnout, angst en depressie. Met kortingscode MIND krijg je 10 euro extra korting."
          },
          {
            "kop": "Mindfulness"
          },
          {
            "tekst": "Mindfulness is een aandachttraining die je helpt dichter bij je gevoel te komen, zonder erover te oordelen of er direct gevolg aan te geven. Je aanvaardt de situatie zoals die is en creëert zo ruimte om problemen van een andere kant te bekijken. Door dit proces te trainen, leef je intenser en kun je tegelijkertijd makkelijker ontspannen."
          },
          {
            "tekst": "Hieronder vind je een simpele oefening die je bijna altijd en overal kan doen. Bijvoorbeeld onderweg in de trein, op je werk of thuis op de bank."
          },
          {
            "tekst": "Leun achterover, kijk om je heen en besef je waar je op dit moment bent. Wat zie en hoor je eigenlijk? Hoe zit of sta je erbij? Zijn je schouders wel ontspannen? En je nek, kaken en voorhoofd? Richt je vervolgens ook op je ademhaling. Hoe adem je op dit moment? Snel of langzaam, vanuit je buik of vanuit je borst?"
          },
          {
            "tekst": "Wil je eens kijken of mindfulness iets voor jou is? We stelden een online gids samen met tips en een aantal oefeningen om thuis aan de slag te gaan met mindfulness."
          },
          {
            "linkLabel": "Bekijk tips",
            "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mindfulness"
          },
          {
            "kop": "Maken van een herstelverhaal"
          },
          {
            "tekst": "Veel mensen hebben baat bij het maken van een herstelverhaal.Dit is een vorm van een levensverhaal waarin je beschrijft dat herstel mogelijk is. Je schrijft bijvoorbeeld over belangrijke gebeurtenissen in je leven, jouw psychische problemen en over positieve en negatieve ervaringen. Je gaat in op je kwetsbaarheden en je inzichten hoe je hier het beste mee om kan gaan. Ook beschrijf je wat voor jou helpend is tijdens je herstel. Het schrijven van een herstelverhaal kan helpen bij het verwerken van je ervaringen en psychische problemen en om ze een nieuwe betekenis te geven."
          },
          {
            "tekst": "Wil je aan de slag met jouw herstelverhaal en kan je daarbij wat tips gebruiken? Op de website van Herstelverhalen kan je herstelverhalen van anderen lezen en ook schrijftipsvinden voor je eigen herstelverhaal."
          },
          {
            "tekst": "Wil je jouw verhaal graag delen, zodat andere mensen het kunnen lezen en er iets aan kunnen hebben? Op onze website kan je zelf je ervaringsverhaal delen en ook de ervaringen van anderen lezen."
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk het herstelverhaal van Thijmen in deze video van GGZ NHN. Hij vertelt over hoe hij weer aan het werk ging na een periode thuis. En hoe een jobcoach hem hierbij ondersteunde.",
              "Bekijk hier het herstelverhaal van Karin in de documentaire van Dimence: Ik en mijn schaduw . Opmerking: Hoewel ECT voor Karin helpend was, hoeft dit niet bij iedereen zo te werken.",
              "Bekijk hier het herstelverhaal van een vrouw met een bipolaire stoornis, een video van Ervaring Rijk."
            ]
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "soChicken schreef een handig artikel: 4 simpele mindfulness oefeningen die ik gebruik",
              "Herstelverhalen, wat zijn dat eigenlijk? Lees er meer over in dit artikel op Psychosenet.nl.",
              "In dit blog op herstelproces.nl van Stichting Herstelproces lees je de persoonlijke ervaringen van de schijfster over het pakken van eigen regie over je leven."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "Laat je begeleiden door deze Mindfulness meditatieoefeningen van Rob Brandsma op Spotify.",
              "Beluister de aflevering ‘Ben ik wel goed bezig met mijn herstel?’ van de podcastserie Herstellen van burnout van Evelien Aarten."
            ]
          }
        ]
      },
      {
        "titel": "Hulpmiddelen voor meer grip",
        "intro": "De laatste tijd is er gelukkig steeds meer aandacht voor herstel. Hierdoor zijn er steeds meer hulpmiddelen en trainingen beschikbaar die je hierbij kunnen ondersteunen. Hieronder lichten we een aantal van deze hulpmiddelen voor je uit.",
        "blokken": [
          {
            "kop": "WRAP"
          },
          {
            "tekst": "Een hulpmiddel dat veel gebruikt wordt, is het Wellness Recovery Action Plan (WRAP ). Dit is een groepstraining waarbij je een plan opstelt voor je eigen herstel. Je vult als het ware een gereedschapskist met daarin het gereedschap dat jij nodig hebt om je goed te voelen. Belangrijke sleutelbegrippen waar WRAP vanuit gaat, zijn: hoop, persoonlijke verantwoordelijkheid, eigen ontwikkeling, opkomen voor jezelf en steun. Een WRAP maak je voor verschillende velden, namelijk: dagelijks onderhoudsplan, triggers, vroege waarschuwingstekens, signalen van ontsporing, crisisplan en post-crisisplan."
          },
          {
            "tekst": "In deze video vertellen ervaringsdeskundige Dick en Joline van GGZ NHN over wat de WRAP precies inhoudt."
          },
          {
            "tekst": "En op deze pagina van Phrenos vind je uitgebreide informatie over WRAP."
          },
          {
            "tekst": "Wil jij een WRAP-training volgen? Veel zelfregie- en herstelcentra bieden een cursus aan. Ga naar onze MIND Atlas, vul als zoekterm WRAP in en ontdek waar deze gegeven wordt."
          },
          {
            "kop": "Signaleringsplan en crisisplan"
          },
          {
            "tekst": "Andere hulpmiddelen zijn een signaleringsplan en een crisisplan. Deze kan je bijvoorbeeld samen met je hulpverlener en een voor jouw belangrijk persoon (partner, familielid, vriend) opstellen. In een signaleringsplan beschrijf je de signalen die wijzen op een terugval. En op welke manier die te voorkomen is. In een crisisplan noteer je wat er wel of juist niet moet gebeuren bij een terugval. Deze plannen geven je regie over jouw behandeling en geven jouw naasten duidelijkheid over hun rol. Daarnaast zet je er nog meer dingen in over onder andere herstel, ontwikkeling en het krijgen van steun."
          },
          {
            "tekst": "Mijn signaleringsplan helpt me bij mijn herstel."
          },
          {
            "kop": "Crisiskaart of hulpkaart"
          },
          {
            "tekst": "Ook kun je een Crisiskaart laten maken. Dit is een compact en persoonlijk kaartje waarin staat wat hulpverleners en omstanders moeten doen als je in crisis bent. Denk aan wie ze moeten bellen en welke afspraken jij hebt gemaakt met hulpverleners. Het is dus eigenlijk een samenvatting van je crisisplan. Meer weten over de crisiskaart en waar je die kan krijgen? Neem een kijkje op Crisiskaart.nl."
          },
          {
            "tekst": "Is voor jou een crisisplan minder relevant, maar wil je wel graag een kaartje waarop jouw wensen en behoeften staan voor wanneer het je niet lukt dit zelf te verwoorden? Kijk voor meer informatie op Hulpkaart.nl."
          },
          {
            "tekst": "In onderstaande video van Onafhankelijk Steunpunt Crisiskaart Limburg-Zuid vertelt Alexander over zijn ervaring met de crisiskaart:"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=6KAei255XXs"
          },
          {
            "kop": "Tools van ervaringsdeskundigen"
          },
          {
            "tekst": "Soms helpt het om te zien welke tools anderen hebben gebruikt om zich beter te voelen. Illustrator Marieke de Goeij (je zag haar al in meerdere filmpjes voorbij komen) maakte voor zichzelf een helemaal handgetekend boek met al haar ‘tools’. Toen ze diep in haar depressie en angst zat kon ze namelijk niet meer lezen, maar wel stripboeken doorbladeren. Dus maakte ze, eenmaal hersteld, een handgetekend noodboek met alles wat haar écht had geholpen. Zodat ze zichzelf en anderen er altijd weer uit zou kunnen loodsen. Als het jou aanspreekt, via depridoeboek.nl krijg je een gratis inkijkexemplaar."
          },
          {
            "kop": "Flyers en online gidsen"
          },
          {
            "tekst": "Ben jij op zoek naar tips hoe je het beste om kan gaan met jouw psychische problemen? Wij bieden een uitgebreid aanbod aan flyers en online gidsen met informatie en advies bij verschillende psychische problemen. Bekijkhier het overzicht."
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Bekijk deze video van Zelfregiecentrum Weert met daarin uitleg over wat een crisiskaart is en waarom het opstellen van deze kaart voor jou het verschil kan maken."
            ]
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Lees meer over wat WRAP inhoudt en hoe het werkt op deze pagina van het Trimbos-instituut.",
              "Enik Recovery College biedt verschillende trainingen en werkgroepen voor mensen met psychische klachten die willen werken aan hun (verdere) herstel.",
              "Op de website van Mentale Agenda vind je verschillende manieren die je verder kunnen helpen om je mentale gezondheid te versterken. Naast een overzicht van activiteiten in en om Den Haag, vind je er kijk-, lees- en luistertips, die ook interessant zijn als je niet uit die omgeving komt."
            ]
          }
        ]
      },
      {
        "titel": "De kracht van de omgeving",
        "intro": "Voor bijna ieder mens is het belangrijk zich verbonden te voelen met de mensen om zich heen. Het is dan ook niet voor niets een belangrijk onderdeel als het om herstel gaat. Waar de een veel heeft aan het contact met de mensen in de directe omgeving, zoals vrienden, familieleden, collega’s en kennissen, vindt de ander deze verbondenheid met name bij mensen die soortgelijke ervaringen hebben meegemaakt. Bij hen voelen ze zich gezien en gesteund.",
        "blokken": [
          {
            "tekst": "Verbondenheid gaat bij herstel ook om het deelnemen aan de maatschappij. Om het gevoel van acceptatie en als waardevol te worden gezien, inclusief je kwetsbaarheden. Vandaag staan we vooral stil bij het contact met anderen."
          },
          {
            "tekst": "Mij heeft het geholpen om open te zijn bij mijn omgeving, zowel privé als werk. Het is geen taboe en er zal meer begrip zijn dan je denkt. En soms ook minder, maar het is niet hun gevoel, maar de jouwe. En je hoeft niet in 1x hersteld te zijn. Er zullen dagen zijn dat het niet gaat, maar dat mag je gewoon zeggen. Probeer in een ritme te blijven, ook als het soms even niet gaat. Ook al heeft het bij mij jaren geduurd, de openheid en het ritme hebben mij zeker geholpen."
          },
          {
            "kop": "Erover praten"
          },
          {
            "tekst": "Je hebt het waarschijnlijk al wel eens gehoord; praten over je klachten en wat je bezighoudt helpt. Het lucht op en zo kunnen anderen je beter begrijpen en steunen. Door met elkaar in contact te blijven, blijft de ander op de hoogte van wat er bij jou speelt. Houd je klachten dus niet voor jezelf, maar praat erover met de mensen in je omgeving die je vertrouwt, zoals familieleden, vrienden of collega’s."
          },
          {
            "tekst": "Blijf ook geïnteresseerd in de verhalen van anderen over hun leven en wat zij meemaken. Zo blijf je oog houden voor het ‘gewone’ leven en blijf je betrokken bij de ander. Bovendien geeft het een goed gevoel er voor iemand anders te kunnen zijn."
          },
          {
            "tekst": "Bekijk onderstaande video uit Marieke’s supportprogramma en onthoud: je hoeft het niet alleen te doen! Je mag om hulp vragen en mensen in vertrouwen nemen. Want zodra je open bent, draag je het met z’n allen!"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=G60qHoc6tvE"
          },
          {
            "kop": "Omgaan met negatieve reacties"
          },
          {
            "tekst": "Naast dat je omgeving je veel steun kan bieden, kan het ook zijn dat je met reacties te maken krijgt die je niet prettig vindt of die je niet verder helpen. Ook kan het zijn dat je niet zoveel mensen om je heen hebt bij wie je terecht kan. Dit soort dingen kunnen ervoor zorgen dat jij je eenzaam of onbegrepen voelt."
          },
          {
            "tekst": "Geef de moed niet op! Hoewel sommige mensen niet de steun of verbondenheid kunnen geven waar jij naar op zoek bent, betekent dit niet dat dit bij iedereen zo is. Er zullen altijd mensen zijn die wel geïnteresseerd zijn in jouw verhaal. Alleen moet je die soms net kunnen vinden.Een hulpmiddel hierbij is ons Connect Portaal, waarbij je in contact komt met gelijkgestemden en ervaringen kan uitwisselen."
          },
          {
            "kop": "De kracht van contact met ervaringsgenoten"
          },
          {
            "tekst": "Veel mensen ervaren verbondenheid door contact met andere mensen die (soortgelijke) psychische problemen ervaren of ervaren hebben. We noemen dit ook wel lotgenotencontact. De basis hiervan is het geven en ontvangen van steun of hulp waarbij eigen ervaringen centraal staan. Omdat niet iedereen lotgenotencontact een fijne term vindt, noemen we dit tegenwoordig steeds vaker peer support of contact met ervaringsgenoten. Er zijn steeds meer verschillende soorten, zowel online als offline. Veel cliëntenorganisaties bieden het aan. Nieuwsgierig? Neem eens een kijkje op een of meerdere websites van deze lidorganisaties van MIND. Plekken voor zelfhulp en lotgenotencontact kun je ook vinden op de MIND-Atlas ."
          },
          {
            "tekst": "Er zijn geen resultaten gevonden. Controleer de spelling of probeer een andere zoekterm."
          },
          {
            "tekst": "Uit onderzoek naar de online peer support community Depressie Connect, komen naast het ervaren van meer verbondenheid nog andere voordelen naar voren. Zo geven deelnemers aan dat ze zich emotioneel kunnen ontwikkelen door samen met anderen te reflecteren op ervaringen met depressie. En dat ze beter weten wat ze moeten doen wanneer ze klachten ervaren. Ook kan het helpen van anderen met de eigen persoonlijke ervaring bijdragen aan het betekenis geven aan de eigen depressie."
          },
          {
            "kop": "Online café"
          },
          {
            "tekst": "Psychiater Menno Oosterhoff heeft een dwangstoornis en opende in samenwerking met de ADF Stichting het online OCDcafé voor peer support. In de onderstaande video van OOG Groningen vertelt hij hierover. Ook vertelt hij op welke manier lotgenotencontact waardevol kan zijn. Menno: ‘Ik heb ook appgroepen. Daarin zei iemand: “Het is zo heerlijk om met lotgenoten te praten, want met hulpverleners blijft het vaak zo oppervlakkig.”"
          },
          {
            "linkLabel": "Bekijk de video",
            "linkUrl": "https://www.youtube.com/watch?v=vOKnS2LLCR4"
          },
          {
            "kop": "Zelfregie- en herstelinitiatieven"
          },
          {
            "tekst": "Naast allerlei soorten peer supportgroepen, zijn er in Nederland steeds meer zelfregie- en herstelcentra. Dit zijn laagdrempelige ontmoetingsplekken voor en door mensen met een psychische kwetsbaarheid. Ervaringen spelen een hele belangrijke rol. De centra staan open voor iedereen (zonder verwijzing of indicatie) en mensen kunnen vaak vrij inlopen, in gesprek gaan met peers, activiteiten ondernemen of cursussen volgen (zoals de eerdergenoemde WRAP-training) die helpen bij het herstel. Ook kan je hier vaak terecht als je bijvoorbeeld op een behandeling wacht. Of juist als je na of tijdens een behandeling verder wil werken aan je herstel."
          },
          {
            "tekst": "In de MIND Atlas brengen we cliënten- en naastenorganisaties in Nederland in kaart. Ook de zelfregie- en herstelinitiatieven zijn hierin opgenomen."
          },
          {
            "linkLabel": "Ga naar de MIND Atlas",
            "linkUrl": "https://wijzijnmind.nl/mind-atlas"
          },
          {
            "tekst": "Er zijn geen resultaten gevonden. Controleer de spelling of probeer een andere zoekterm."
          },
          {
            "kop": "MIND werkt aan de ondersteuning en ontwikkeling van zelfregienetwerken"
          },
          {
            "tekst": "MIND werkt samen met anderen partijen, zoals de Nederlandse Vereniging voor Zelfregie en Herstel , aan de ondersteuning en ontwikkeling van zelfregienetwerken, zodat mensen met een psychische kwetsbaarheid overal in Nederland de ruimte hebben hun leven weer op te pakken en aan hun herstel kunnen werken met ervaringsgenoten (peer support). In deze video hoor je meer over het programma Herstel Dichtbij met steun van het Oranje Fonds."
          },
          {
            "kop": "Meer kijken?"
          },
          {
            "lijst": [
              "Deze video van 3FM waarin Linde Schöne en Typhoon open met elkaar in gesprek gaan over hun psychische problemen, laat goed zien hoe waardevol dat is. Linde antwoordt op een vraag van Typhoon over hoe ze de ‘donkerte’ stopt: ‘Voor mij was het dus controle nemen, verantwoordelijkheid nemen over mijn eigen leven. En dat begon op een punt dat ik niks had van controle.’",
              "Marcia Kroes (manager Herstelacademie Haarlem en Meer): ‘Waar het om gaat is dat iedereen deskundig is over zichzelf. Je kan eindeloos proberen te doen wat anderen vinden dat goed voor jou is, maar het gaat er juist om om weer te ontdekken: “Wat wil ik nou en wat kan ik? En hoe doe ik dat dan?\" Dat doen we hier.’ Krijg een inkijkje in de ervaringen van de deelnemers en de manager van Herstelacademie Haarlem en Meer in deze video van Stichting Out of the Box.",
              "Mariëtte vertelt in deze video van MIND en Stichting Out of the Box over haar werk als ervaringsdeskundige bij Ixta Noa, waar ze ooit zelf als deelnemer begon."
            ]
          },
          {
            "kop": "Meer lezen?"
          },
          {
            "lijst": [
              "Lees in dit artikel van Coachfinder 5 goede redenen om toch te praten over wat je dwarszit.",
              "Wil jij meer lezen over wat lotgenotencontact is en welke gezondheidseffecten het heeft? Lees er meer over op deze pagina van PGOsupport.",
              "Op zoek naar online peer support? Psychosenet is hét online zelfregiecentrum/herstelacademie voor psychosegevoeligheid, trauma, stemming en herstel en biedt een forum."
            ]
          },
          {
            "kop": "Meer luisteren?"
          },
          {
            "lijst": [
              "In deze podcast gaat klinisch psycholoog Bas van Oosterhout in op het met elkaar praten over gevoelens. Hoe kan je bijvoorbeeld reageren als iemand anders iets vertelt wat je niet goed begrijpt of waarvan je niet zo goed weet wat je ermee moet? Luister naar Het ongemak van openheid , een podcast van Mentale Kracht 040."
            ]
          }
        ]
      }
    ]
  }
];
