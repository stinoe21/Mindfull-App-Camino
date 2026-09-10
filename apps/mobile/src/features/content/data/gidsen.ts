// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: content/mind/psychische-klachten/flyers-en-informatie/GIDSEN.md en de
// gidspagina's. Opnieuw genereren: node scripts/gen-gidsen.mjs
//
// De online gidsen van MIND staan sinds 10 september 2026 in de app, op
// verzoek van MIND (feedbacksessie): praktische tips per onderwerp, met de
// leespagina op wijzijnmind.nl als "Bekijk de online gids". De teksten zijn
// woordelijk van MIND; wat vervalt staat in scripts/mind-markdown.mjs.

export type GidsBlok = {
  kop?: string;
  tekst?: string;
  lijst?: string[];
  linkLabel?: string;
  linkUrl?: string;
};
export type Gids = {
  slug: string;
  titel: string;
  /** Onderwerp uit de bibliotheek van de app; zonder onderwerp alleen in het naslagwerk. */
  onderwerp?: string;
  /** De leespagina op wijzijnmind.nl. */
  url: string;
  /** De aanmeldpagina van MIND, om de gids per mail te krijgen. */
  aanmeld?: string;
  /** Leeg als de gids alleen als link bestaat. */
  intro: string;
  blokken: GidsBlok[];
};

export const GIDSEN: Gids[] = [
  {
    "slug": "adhd",
    "titel": "AD(H)D",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/adhd",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_adhd_volwassenen",
    "intro": "*Mensen met ADHD kunnen zich vaak moeilijk concentreren en zijn snel afgeleid (aandachtsproblemen). Ze handelen vaak impulsief en zijn overactief en onrustig (hyperactiviteit). Sommige mensen hebben vooral last van hyperactiviteit en impulsiviteit, anderen hebben een combinatie van hyperactiviteit, impulsiviteit en aandachtsproblemen en weer anderen hebben vooral last van de aandachtsproblemen. Wanneer dit laatste aan de hand is, hebben we het ook wel over ADD, een subtype van ADHD. Je bent dan vooral druk in je hoofd, maar komt niet druk over. Op deze pagina krijg je tips die je kunnen helpen bij het omgaan met ADHD. We gebruiken overal de overkoepelende term ADHD, waar ADD ook onder valt.**",
    "blokken": [
      {
        "kop": "Krijg inzicht in de ADHD"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van ADHD, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Probeer te ontdekken welke verschijnselen van ADHD je bij jezelf herkent. Dat helpt je om een beeld te krijgen van het effect van ADHD op jouw leven. En om er grip op te krijgen. Op onze website vind je meer informatie over ADHD. Ook zijn er goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho- educatie aangeboden. Je krijgt dan informatie en voorlichting over ADHD."
      },
      {
        "kop": "Bouw structuur in je dag"
      },
      {
        "tekst": "Zorg voor een duidelijke structuur in je dagindeling. Dit geeft je houvast en overzicht. Probeer rond dezelfde tijd op te staan, te eten en te slapen. Je kan hierbij gebruik maken van hulpmiddelen, zoals een planbord, planningsapps of een alarm op je telefoon. Heb je een dag de structuur wat losgelaten? Geen probleem, maar zorg er dan wel voor dat je het de volgende dag weer oppakt. Zo voorkom je dat je het ritme weer helemaal loslaat."
      },
      {
        "kop": "Houd het opgeruimd en vermijd afleiding"
      },
      {
        "tekst": "Bedenk dat je sterk de neiging hebt om je aandacht te verliezen. Richt je huis, werkplek of studeerkamer daarom zo in dat je niet snel wordt afgeleid. Houd het opgeruimd. Leg spullen zo veel mogelijk op vaste plekken, zo weet je precies waar je iets kan vinden en weer kan opbergen. Zet ook zoveel mogelijk notificaties op je telefoon uit, zodat appjes en mails je niet afleiden. Plan vaste tijden in op je dag om ze te beantwoorden."
      },
      {
        "kop": "Slaap!"
      },
      {
        "tekst": "Slaap is heel belangrijk om lichamelijk en mentaal te herstellen. Goede slaap draagt bij aan een uitgerust en fit gevoel. Maar bij mensen met ADHD is goed slapen niet altijd het geval. 80 procent van de mensen met ADHD heeft slaapproblemen. Dat is lastig, want een tekort aan slaap kan de ADHD versterken. Gelukkig kan je veel doen om beter te slapen. Denk aan het afbouwen van je activiteiten voordat je gaat slapen en het goed luchten van je slaapkamer. Wil je aan de slag om beter te leren slapen? Meld je dan aan voor onze Beter Slapen Challenge."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Het is algemeen bekend dat bewegen bijdraagt aan een goede gezondheid. Als je last hebt van ADHD kan bewegen je helpen je hoofd leeg te maken en de onrust uit je lichaam te halen. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Wat vind je leuk om te doen? Sommige mensen met ADHD komen vooral tot rust van intensief bewegen, zoals wielrennen of hardlopen. Kijk wat bij jou past. Wil je eens kijken of intensiever bewegen iets voor jou is? Houd er dan rekening mee dat je dit soort sporten goed moet opbouwen om blessures te voorkomen."
      },
      {
        "kop": "Ontspan"
      },
      {
        "tekst": "Als je ADHD hebt, sta je bijna altijd ‘aan’. Het nemen van voldoende momenten van rust en ontspanning is dan extra belangrijk. Bedenk wat jij ontspannend vindt en probeer dit mee te nemen in de indeling van je dag. Leer daarnaast de momenten te herkennen waarop rust nemen voor jou belangrijk is. Sommige mensen hebben veel aan ontspanningsoefeningen."
      },
      {
        "kop": "Accepteer de ADHD"
      },
      {
        "tekst": "Durf de ADHD te accepteren. Dat is misschien makkelijker gezegd dan gedaan en het is logisch dat dit niet van de ene op de andere dag lukt. Maar juist door te aanvaarden dat je hier last van hebt, zal je er beter mee om leren gaan. Probeer je dus niet tegen de ADHD te verzetten en alles wat daarbij hoort. Een milde, niet-oordelende houding geeft ruimte om op een andere manier om te gaan met klachten, zodat ze een minder grote rol gaan spelen in je leven. Mindfulness is een training die hierbij kan helpen. Wij schreven simpele oefeningen voor thuis, zodat je eens kan kijken of mindfulness iets voor jou is."
      },
      {
        "kop": "Maak gebruik van je sterke eigenschappen"
      },
      {
        "tekst": "Naast de lastige kanten die ADHD met zich meebrengt, hebben mensen met ADHD ook vaak eigenschappen die in hun voordeel kunnen werken. Bedenk voor jezelf welke positieve kanten jouw ADHD heeft. Misschien kan je goed hyperfocussen, pak je nieuwe uitdagingen makkelijk aan of kan je goed aan verschillende werkzaamheden tegelijk werken. Of misschien werkt jouw enthousiasme vaak aanstekelijk bij anderen. Maak hiervan een notitie in je telefoon of schrijf het op een blaadje, zodat je hier even naar kan kijken als je het moeilijk hebt."
      },
      {
        "kop": "Deel je ervaringen"
      },
      {
        "tekst": "Betrek de belangrijkste mensen in je leven door met ze te praten over de ADHD. Praten lucht vaak op en zo kunnen ze je beter begrijpen en steunen. Ook kan het fijn en steunend zijn om herkenning te vinden bij andere mensen met ADHD. Door echt te ervaren dat je niet de enige bent. Anderen kunnen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Op de website van Impuls & Woortblind vind je meer informatie over lotgenotencontact. Ook vind je er ervaringsdeskundige contactpersonen die jouw vragen kunnen beantwoorden. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Heb jij klachten die (mogelijk) passen bij ADHD? Blijf er niet mee rondlopen als je er last van hebt. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp of begeleiding voor het op orde brengen van je leven. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je indien nodig doorverwijzen. Heb je ADHD en het gevoel dat het niet goed gaat? Blijf er ook dan niet mee rondlopen. Neem contact op met jouw hulpverlener."
      },
      {
        "tekst": "Je kan ook altijd contact opnemen met onze MIND Hulplijn voor anoniem, gratis en deskundig advies. Onze hulpverleners denken graag met je mee en kunnen je ook helpen het gesprek met de huisarts of andere mensen in jouw omgeving voor te bereiden."
      }
    ]
  },
  {
    "slug": "adhd-jongeren",
    "titel": "ADHD jongeren",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/adhd-jongeren",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_adhd",
    "intro": "*Veel jongeren hebben wel eens concentratieproblemen, maken zo nu en dan slordigheidsfouten of kunnen moeilijk stilzitten. Maar bij sommige jongeren overheerst het gevoel van chaos en het gebrek aan concentratie en rust. Ze hebben moeite met het organiseren en plannen van het dagelijks leven. Schoolprestaties en werk kunnen hier erg onder lijden. Jongeren met deze klachten kunnen last hebben van ADHD (Attention Deficit Hyperactivity Disorder). Er bestaan verschillende vormen van ADHD, zoals ADD. We gebruiken hier overal de overkoepelende term ADHD.**",
    "blokken": [
      {
        "tekst": "Op deze pagina krijg je als ouder van een jongere met ADHD verschillende tips die je op weg helpen bij de omgang met jouw kind."
      },
      {
        "kop": "Verzamel informatie"
      },
      {
        "tekst": "Zoek meer informatie over ADHD, bijvoorbeeld op internet of in boeken. Let hierbij op dat de informatie van een betrouwbare bron komt. Door je te verdiepen in de achtergronden en aanpak van ADHD krijg je inzicht in manieren om zo goed mogelijk met je kind om te gaan. Ook kan het fijn zijn om contact te zoeken met andere ouders die een kind met ADHD hebben. Door ervaringen te delen kan je herkenning vinden. Daarnaast kunnen ouders elkaar vaak goed op weg helpen met de aanpak van problemen: de kans is groot dat een andere ouder hetzelfde probleem al eens eerder heeft meegemaakt."
      },
      {
        "kop": "Zorg voor structuur"
      },
      {
        "tekst": "Structuur is belangrijk voor alle jongeren, maar iemand met ADHD heeft hier nog meer behoefte aan. Plotseling afwijken van bijvoorbeeld een planning kan dan lastig zijn. Probeer zo duidelijk mogelijk te zijn in wat je verwacht van jouw kind. Zorg voor een duidelijke dagindeling, vaste regels en vaste plaatsen voor dingen in huis. Ook helpt het als je kind goed leert werken met een dag- of weekschema of een agenda."
      },
      {
        "kop": "Geef positieve aandacht"
      },
      {
        "tekst": "De symptomen die samengaan met ADHD (zoals snel afgeleid zijn, impulsiviteit en hyperactiviteit) kunnen ervoor zorgen dat iemand het moeilijk vindt zichzelf onder controle te houden. Dit kan leiden tot minder zelfvertrouwen en faalangst. Positieve aandacht geeft jouw kind inzicht in de sterke kanten van zichzelf en versterkt het zelfvertrouwen. Zorg er altijd voor dat je kind meer positieve aandacht dan negatieve aandacht krijgt. Geef je kind complimenten voor goed gedrag en stimuleer en benoem leuke eigenschappen. Je kan een aantal gemeende complimenten bedenken, die je later op logische momenten benoemt."
      },
      {
        "kop": "Besteed aandacht aan school"
      },
      {
        "tekst": "Voor een kind met ADHD kan school een bron van frustratie zijn. Je kan op verschillende gebieden jouw kind ondersteunen om goed mee te komen op school. Zo is het bijvoorbeeld goed om samen te werken met de docenten van jouw kind. Je kan de kennis die je hebt over ADHD en het begeleiden van je kind delen met docenten en hierover ervaringen uitwisselen. Daarnaast is het goed je kind bij te staan bij studieactiviteiten. Je kan bijvoorbeeld nagaan of jouw kind behoefte heeft aan huiswerkbegeleiding of hulp bieden bij het plannen en organiseren van huiswerk. Je kind komt in verschillende leeftijdsfasen weer andere uitdagingen tegen. Een student is bijvoorbeeld meer op zichzelf aangewezen dan een middelbare scholier. Voor iemand met ADHD kan dit problemen opleveren, zoals slecht gaan presteren. Het kan helpen om je hierin te verdiepen en na te gaan hoe je jouw kind tijdens verschillende fasen het beste kan ondersteunen."
      },
      {
        "kop": "Denk ook aan je andere kinderen"
      },
      {
        "tekst": "Als je andere kinderen hebt, kunnen zij het soms best lastig vinden om samen te leven met hun broer of zus met ADHD. Als je kind met ADHD veel aandacht krijgt, kan het bijvoorbeeld zijn dat je andere kinderen zich achtergesteld voelen. Zorg ervoor dat je kinderen de ruimte krijgen om hierover te praten. En laat merken dat je ook oog hebt voor hun gevoelens. Daarnaast is het goed om erop te letten dat je jouw aandacht gelijk over je kinderen verdeelt. Je kan bijvoorbeeld bewust tijd inplannen waarin ieder kind even iets alleen doet met jou en/of jouw partner."
      },
      {
        "kop": "Zorg goed voor jezelf!"
      },
      {
        "tekst": "Als ouder kan je geneigd zijn jezelf steeds weg te cijferen voor je kind. Doe dat niet. Zorg goed voor jezelf, want als jij je fijn voelt, kan je er juist beter voor je kind zijn. Blijf leuke dingen doen waardoor je energie krijgt of je ontspant. Ontspanningsoefeningen kunnen hierbij helpen."
      },
      {
        "kop": "Praat erover en zorg voor hulp als dat nodig is"
      },
      {
        "tekst": "Betrek mensen in je omgeving en vertel ze waar je tegenaan loopt. Praten lucht vaak op en anderen kunnen je misschien wel steun bieden. Als je het idee hebt dat je extra ondersteuning nodig hebt bij de opvoeding van je kind, neem dan contact op met je huisarts. Jouw huisarts kan je problemen met je in kaart brengen en samen met jou naar passende oplossingen zoeken."
      },
      {
        "kop": "Oudervereniging Balans"
      },
      {
        "tekst": "Oudervereniging Balans versterkt de positie van ouders van kinderen en jongeren met ondersteuningsbehoeften bij leren en/of gedrag. Dit doet Balans door belangenbehartiging en uitwisseling van kennis en ervaring tussen ouders, onderwijs, zorg en wetenschap. Neem vooral eens een kijkje op de website van Balans om meer te lezen wat ze allemaal te bieden hebben."
      }
    ]
  },
  {
    "slug": "angst",
    "titel": "Angst",
    "onderwerp": "Angst",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/angst",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_angst_1121",
    "intro": "Iedereen is wel eens bang of maakt zich zorgen. Angst helpt je wanneer het je waarschuwt voor gevaar, zodat je dit uit de weg kan gaan. Angst is vaak te merken aan hartkloppingen, het aanspannen van je spieren, zweten, een droge mond en de wens om de situatie te verlaten die de angst veroorzaakt. Je bent bijvoorbeeld erg angstig en bezorgd over dagelijkse dingen of juist bang voor een bepaald ding, dier of situatie. Of je voelt je bang zonder dat daar een duidelijke reden voor is. Sommige mensen hebben last van paniekaanvallen. Wat kan je doen om met dit soort angsten om te gaan en te voorkomen dat ze verergeren? Op deze pagina geven we je tips. Ook gaan we in op wat je kan doen als er meer aan de hand is.",
    "blokken": [
      {
        "kop": "Verdiep je in de angst"
      },
      {
        "tekst": "Probeer een goed beeld te krijgen van je angst en de invloed ervan op jouw leven. Doe dit zo eerlijk mogelijk, zonder het af te zwakken. Stel jezelf bijvoorbeeld de vragen: Waar ben ik bang voor? Wat voel ik als ik bang ben? Wat gebeurt er in mijn lichaam? Hoe reageer ik hierop? Wat betekent deze angst voor mijn leven? Op onze website vind je meer informatie over angst. Wil jij inschatten hoeveel last je hebt van angstklachten? Doe dan deze angsttest."
      },
      {
        "tekst": "Neem ook iemand uit je omgeving in vertrouwen. Erover praten kan opluchten en helpen om dingen op een rij te zetten. Daarnaast kan iemand die dicht bij je staat met je meedenken over hoeveel invloed de angst op jouw leven heeft. Denk aan dingen vermijden of anders doen vanwege de angst. Soms is dat lastig om zelf in te schatten en door te hebben wat je nodig hebt. Bijvoorbeeld omdat je weet dat de angst niet realistisch is (al voelt dat wel zo) of dat je je ervoor schaamt. Dat laatste is absoluut niet nodig, er zijn heel veel mensen die hier last van hebben."
      },
      {
        "kop": "Verander je gedachten"
      },
      {
        "tekst": "Nu jij je angstklachten in kaart hebt gebracht, is de volgende stap het kritisch bekijken van jouw angstgedachten. Dreigt er daadwerkelijk gevaar? Waarschijnlijk ontdek je dat je angsten niet (helemaal) realistisch zijn. Dit inzicht kan je helpen om geruststellende gedachten te bedenken. Schrijf deze gedachten op of noteer ze in je telefoon en haal ze tevoorschijn op momenten dat je het moeilijk hebt. Misschien heb je ook wat aan de oefeningen uit onze online gids om je gedachten helpend te maken."
      },
      {
        "kop": "Ga het niet uit de weg"
      },
      {
        "tekst": "Om angstgevoelens te voorkomen, kan je geneigd zijn om de situaties of dingen die de angst veroorzaken zo veel mogelijk te vermijden. Dit is even fijn, maar zo houd je de angstklachten juist in stand. Probeer daarom zo weinig mogelijk toe te geven aan je angst. Ga de situaties en dingen waar je bang voor bent zo min mogelijk uit de weg. Stel je erop in dat je spanning en lichamelijke verschijnselen gaat ervaren in de situaties waar jij bang voor bent. Bedenk je dat deze lichamelijke verschijnselen en onrust na een tijdje zullen afnemen. Op deze manier bouw je vertrouwen op dat je om kan gaan met de dingen die je spannend vindt en verminder je de angst voor bepaalde situaties."
      },
      {
        "kop": "Accepteer"
      },
      {
        "tekst": "Als je je angstig voelt, wil je vaak van alles doen om van dat vervelende gevoel af te komen. Maar in plaats van dat jij je beter gaat voelen, ben je er alleen maar meer mee bezig. Juist door te ervaren dat je bang bent en er niet over te oordelen, zal je merken dat de angst minder invloed op je heeft. Probeer je dus niet tegen de angst te verzetten. Ervaar wat er in je lichaam en in je gedachten gebeurt en probeer er niets van te vinden. Een milde, niet-oordelende houding geeft ruimte om er op een andere manier mee om te gaan. Mindfulness is een training die hierbij helpt. Wij schreven een online gids met eenvoudige oefeningen voor thuis."
      },
      {
        "kop": "Doe een ademhalingsoefening"
      },
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
      },
      {
        "kop": "Ontspan en doe leuke dingen"
      },
      {
        "tekst": "Het nemen van voldoende rust en ontspanning helpt vaak gevoelens van angst te verminderen. Bedenk wat jij ontspannend vindt en plan dit in op je dag. Voor de een is dit een wandeling in het bos of een uurtje sporten, voor de ander is dat een avondje bioscoop of uiteten met vrienden. Sommige mensen hebben veel aan ontspanningsoefeningen."
      },
      {
        "kop": "Slaap goed"
      },
      {
        "tekst": "Slaap is heel belangrijk om lichamelijk en mentaal te herstellen. Goede slaap draagt bij aan een uitgerust gevoel waardoor je meer aankan. Maar niet voor iedereen is een goede nachtrust vanzelfsprekend. Gelukkig kan je veel dingen doen om beter te slapen. Bijvoorbeeld door je kamer voldoende te ventileren en te zorgen voor regelmaat en een slaapritueel. Kan jij wel wat handvatten gebruiken? Meld je dan aan voor onze Beter Slapen Challenge_."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Bewegen helpt je om je hoofd leeg te maken en de spanning uit je lichaam te halen. Ook heeft het een positief effect op je stemming en slaap je er beter door. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Probeer vormen van beweging te kiezen die je leuk vindt. Zo houd je het langer vol."
      },
      {
        "tekst": "Je kan extra beweging ook in je dagelijks leven inpassen door een aantal kleine aanpassingen te maken. Pak bijvoorbeeld vaker de fiets als je boodschappen gaat doen, stap een halte eerder uit als je de bus neemt, of neem vaker de trap in plaats van de lift."
      },
      {
        "tekst": "Lukt het jou niet om voldoende te bewegen? Bedenk je dat iedere stap telt!"
      },
      {
        "kop": "Eet en drink gezond"
      },
      {
        "tekst": "Probeer zo gezond mogelijk te eten. En drink zo min mogelijk cafeïne en alcohol. Het geeft je heel even een boost, maar op de lange termijn voel je je beter als je hiermee matigt. Je voelt je dan fitter en hebt meer energie. Bovendien kunnen alcohol en cafeïne je angst versterken, vermijd ze daarom zoveel mogelijk."
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Vaak lucht het op om te praten over je gevoelens. Vertel iemand in je omgeving die je vertrouwt, zoals familie, vriend of collega, over je angsten. De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn. En misschien herkennen zij zich ook wel in jouw klachten of hebben ze fijne tips. En onthoud: jij bent de baas over wat je wel en niet wil vertellen. Zou jij eens willen praten met iemand die zelf ervaring heeft met angstklachten? Neem dan contact op met de hulptelefoon van de ADF Stichting (Angst, Dwang en Fobie). Vind je het lastig om te praten over wat je voelt? Wij schreven een online gids met tips. Ook gaan we in de gids in op waarom praten belangrijk is, waarom het lastig kan zijn en dat soms andere manieren beter helpen."
      },
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Hebben jouw angstklachten grote invloed op je dagelijkse leven? Blijf er niet mee rondlopen als je er last van hebt. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp of begeleiding. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je indien nodig doorverwijzen."
      }
    ]
  },
  {
    "slug": "angststoornis-in-je-omgeving",
    "titel": "Een angststoornis in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/angststoornis-in-je-omgeving",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_angstnaasten_1121",
    "intro": "Iedereen is wel eens bang. Mensen met een angststoornis zijn regelmatig bang in situaties waarbij er geen echt gevaar dreigt. Ze zijn bijvoorbeeld erg angstig en bezorgd over dagelijkse dingen of juist bang voor een bepaald ding, dier of situatie. Sommige mensen hebben last van paniekaanvallen.",
    "blokken": [
      {
        "tekst": "Hoewel er verschillende angststoornissen bestaan en er grote verschillen zijn tussen de symptomen die mensen ervaren, heeft een angststoornis in de meeste gevallen veel invloed op het dagelijkse leven. Ook heeft het meestal veel impact op het leven van mensen in de omgeving. Op deze pagina krijg je tips die je helpen bij de omgang met een naaste die een angststoornis heeft. Daarnaast lees je tips over hoe je zelf staande blijft."
      },
      {
        "kop": "Stimuleer om hulp te zoeken"
      },
      {
        "tekst": "Heeft jouw naaste last van angstklachten die al twee weken of langer duren en zorgen voor problemen met dagelijkse dingen, sociale contacten, school of werk? En krijgt jouw naaste nog geen professionele hulp? Laat weten dat je om de ander geeft en bespreek jouw zorg. Geef aan dat het volgens jou een goed idee is om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Jouw naaste kan het als steunend ervaren als jij meegaat naar deze afspraak."
      },
      {
        "kop": "Verdiep je in de angststoornis"
      },
      {
        "tekst": "Weet je welke angststoornis jouw naaste heeft? Op onze website vind je meer informatie over verschillende angststoornissen. Ook zijn er goede boeken met betrouwbare informatie. Hoewel een stoornis maar een etiket is en dit zich bij iedereen weer anders uit, leer je door je te verdiepen in de achtergronden, de symptomen en de aanpak meer over wat het inhoudt. Ook zal je bijvoorbeeld de signalen van een angstaanval eerder herkennen. Hierdoor begrijp je jouw naaste wat beter en dit helpt je ermee om te gaan. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over de angststoornis en tips en handvatten hoe ermee om te gaan. Vaak is er ruimte om ervaringen uit te wisselen."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Want als jij je goed voelt, lukt het je beter om ervoor de ander te zijn. Cijfer jezelf niet weg en blijf leuke dingen doen waardoor je energie krijgt en je ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Onderhoud ook het contact met anderen. Af en toe erover praten lucht vaak erg op. Ook kan het fijn zijn te luisteren naar de verhalen van anderen. Zo blijf je betrokken bij hun leven en hoef je even niet bezig te zijn met wat er speelt. Betrek als het even kan ook (andere) familie en vrienden bij de zorg voor je naaste. Heb jij het door de situatie moeilijk? Aarzel dan niet om advies of hulp te zoeken. Je kan contact opnemen met onze MIND Hulplijn. Onze hulpverleners kunnen je adviezen geven over hoe je het beste voor je naaste zorgt en zelf op de been blijft. Merk je dat je meer ondersteuning nodig hebt? Maak een afspraak bij jouw huisarts. De huisarts kan samen met jou kijken wat je nodig hebt en je eventueel doorverwijzen voor passende hulp."
      },
      {
        "kop": "Ga met elkaar in gesprek"
      },
      {
        "tekst": "Neem de angsten van jouw naaste serieus, ook al zie jij geen reden om bang te zijn. Erover praten en begrepen worden is vaak een opluchting voor je naaste. Stel vragen zonder je op te dringen. Houd je woordkeuze neutraal en geef geen waardeoordeel. Mensen die zich beoordeeld voelen gaan meestal in de verdediging en dit maakt het lastig om een goed gesprek te voeren. Bagatelliseer de angsten niet. Vraag bijvoorbeeld waar jouw naaste bang voor is en wat het voor diegene betekent zich zo te voelen. Vraag ook waarbij je kan helpen. Door aan te sluiten bij de woorden die jouw naaste zelf gebruikt, voelt jouw naaste zich eerder begrepen."
      },
      {
        "kop": "Ga niet mee in het gedrag"
      },
      {
        "tekst": "Uit liefde voor jouw naaste, wil jij waarschijnlijk de angst bij de ander zo veel mogelijk wegnemen. Denk aan geruststellen, taken overnemen en het vermijden van situaties die angst oproepen. Dit kan even prettig zijn, maar voorkom dat je hier te ver in meegaat en dat er een patroon ontstaat waarbij de angsten van jouw naaste het leven van jullie beiden beheerst. Hoe goed je bedoelingen ook zijn, in plaats van dat de klachten hierdoor verminderen, draag je bij aan het in stand houden ervan. Beter is het om de ander vriendelijk, maar zeker niet dwingend, te stimuleren dingen te blijven doen. Maak daarnaast duidelijk waar je grenzen liggen, al is dat misschien even wennen. Vind je dit lastig? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Vermijd de stoel van hulpverlener"
      },
      {
        "tekst": "Als je merkt dat je naaste het moeilijk heeft, kan je geneigd zijn te willen helpen met oplossingen, tips en adviezen. Het is goed om op jouw manier te helpen en te steunen, maar neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van broer, vriendin of partner."
      },
      {
        "kop": "Bedenk dat iemand niet de angststoornis is"
      },
      {
        "tekst": "Hoewel een angststoornis veel impact op iemands leven heeft, betekent dit niet dat diegene de stoornis is. Natuurlijk maakt de stoornis onderdeel van de ander uit, maar de ander is nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Het kan helpen wanneer jij dit af en toe uitspreekt. Besteed ook aandacht aan dingen die goed gaan. Zo blijven jullie oog houden voor het positieve."
      },
      {
        "kop": "Stel verwachtingen bij en accepteer"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet van uit dat een behandeling alles snel ‘oplost’. Vaak gaat het om een langer proces met vallen en opstaan. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op de schouders van de ander. Jouw naaste kan (tijdelijk) veranderen door de angststoornis. Daar mag je verdrietig om zijn. Probeer te accepteren dat jij niet altijd iets kan doen. Soms is er voor die ander zijn al genoeg. Het klinkt misschien lastig, maar door de situatie te aanvaarden zoals die is, creëer je ruimte om problemen van een andere kant te bekijken. Mindfulness, een aandachttraining die je helpt dichterbij je gevoel te komen, zonder erover te oordelen of er direct iets mee te gaan doen, kan hierbij helpen."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met een angststoornis jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun vader/ moeder of broer/ zus aan de hand is. Vertel je kinderen dat dit niet door hen komt. Uitleg helpt bij het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Probeer het onderwerp bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen er over mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt meestal voor erkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn met een naaste met psychische problemen. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "autisme",
    "titel": "Autisme (volwassene)",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/autisme",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_autisme_volwassenen",
    "intro": "Hoewel er grote verschillen zijn tussen de kenmerken die mensen met autisme ervaren, heeft het in de meeste gevallen veel invloed op het dagelijkse leven. Op deze pagina krijg je tips en handvatten die je helpen bij het omgaan met autisme.",
    "blokken": [
      {
        "kop": "Over autisme"
      },
      {
        "tekst": "Mensen met autisme (officieel autismespectrumstoornis, kortweg ASS) vinden het vaak moeilijk als dingen anders lopen dan verwacht en houden niet van veranderingen. Prikkels kunnen heftig binnenkomen en zijn lastiger te filteren. Ze zijn gevoelig voor wat ze zien, horen, voelen, ruiken en proeven en kunnen daardoor overprikkeld raken."
      },
      {
        "tekst": "Het tegenovergestelde kan ook, iemand is dan juist ongevoelig voor prikkels van buitenaf. Sommige mensen met autisme vinden het lastig om aan te voelen hoe ze het beste kunnen reageren op de gevoelens van anderen. Dit maakt het lastig contact te maken en in te spelen op de verwachtingen van de omgeving. Voor mensen met en zonder autisme kan het soms extra moeilijk zijn elkaar goed te begrijpen. Sommige mensen met autisme vinden het fijn om zich met één hobby of onderwerp bezig te houden."
      },
      {
        "kop": "Blijf er niet mee rondlopen!"
      },
      {
        "tekst": "Misschien heb je al de diagnose autisme gekregen en krijg je hiervoor begeleiding. Is dit bij jou niet het geval, maar herken jij je in de kenmerken van autisme en beperkt het je in het dagelijkse leven? Blijf er dan niet mee rondlopen. Maak een afspraak bij de huisarts. Jouw huisarts kan je doorverwijzen voor onderzoek en hulp als dat nodig is. Twijfel je of je autisme hebt? Verdiep je erin (zie tip hierna) en neem ook dan contact op met jouw huisarts als het je leven in de weg staat."
      },
      {
        "kop": "Verdiep je in autisme"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden en de kenmerken van autisme leer je wat het inhoudt. Hierdoor begrijp je het wat beter en kan je er beter mee omgaan. Op onze website vind je meer informatie over autisme. Ook op de website van de NVA (Nederlandse Vereniging voor Autisme) vind je uitgebreide informatie. Daarnaast zijn er boeken met betrouwbare informatie. Bij sommige ggz-instellingen worden psycho-educatie en cursussen aangeboden. Je krijgt dan informatie en voorlichting over autisme en tips en handvatten hoe ermee om te gaan. Vaak is er ook ruimte om ervaringen uit te wisselen."
      },
      {
        "tekst": "Het is goed om te weten dat autisme op verschillende manieren tot uiting kan komen. Zo kan autisme bij meisjes en vrouwen minder opvallen, doordat ze zich hebben leren aanpassen op sociaal gebied. Het wordt hierdoor soms later ontdekt. Vaak nadat iemand eerst andere diagnoses heeft gehad."
      },
      {
        "kop": "Houd rekening met je prikkelbehoeftes"
      },
      {
        "tekst": "Sommige mensen met autisme zijn erg gevoelig voor prikkels. Ook kan het zijn dat je voor sommige dingen heel gevoelig bent en voor andere dingen minder of niet. Je kan bijvoorbeeld gevoelig zijn voor geluid en licht, maar ongevoelig voor geur en het voelen van warmte en kou. Probeer duidelijk te krijgen voor welke prikkels je wel of niet gevoelig bent en houd hier rekening mee. Luister bijvoorbeeld naar je favoriete muziek in een drukke trein om je toch te kunnen afsluiten. Of doe toch een dikke jas aan op een koude winterdag, ook al voel je de kou niet zo. Ben je snel overprikkeld? Wij schreven een online gids met tips bij overprikkeling."
      },
      {
        "kop": "Neem mensen in je omgeving in vertrouwen"
      },
      {
        "tekst": "Vertel belangrijke mensen in je omgeving dat je autisme hebt. Leg hierbij uit wat dit inhoudt, zodat ze beter begrijpen wat er in jou omgaat en er rekening mee kunnen houden. Onthoud hierbij dat jij bepaalt wat je wel en niet wil vertellen. Geef aan waarbij ze je kunnen helpen. Bijvoorbeeld in de manier waarop ze met jou communiceren. Zoals het stellen van duidelijke vragen of het geven van een concrete uitleg over wat de bedoeling van iets is. Vraag of ze jou de tijd willen geven om een vraag of uitleg te verwerken. Geef aan als iets door je autisme niet lukt. En vertel ook vooral over wat je wel goed kan."
      },
      {
        "kop": "Zorg voor structuur"
      },
      {
        "tekst": "Veel mensen hebben baat bij structuur. Door structuur aan te brengen in je dagen, zorg je voor voorspelbaarheid en rust. Probeer rond dezelfde tijd op te staan, te eten en te slapen. Je kan hierbij gebruik maken van hulpmiddelen, zoals een planbord, planningsapps of een alarm op je telefoon."
      },
      {
        "kop": "Ga sociale contacten niet (altijd) uit de weg"
      },
      {
        "tekst": "Maak ook tijd vrij voor sociale afspraken, ook al vind je dat misschien lastig. Het is belangrijk om te voorkomen dat je er niet alleen voor staat. Wat hierbij helpt is om sociale afspraken goed voor te bereiden, zo verminder je stress. Denk na over wat je waar gaat doen en met wie, zodat je weet wat er gaat komen. Ervaar jij veel stress van sociale contacten of word je er echt niet gelukkig van? Probeer hier rekening mee te houden door sociale contacten aan te gaan op een manier die bij jou past. Bijvoorbeeld door contactmomenten minimaal te houden of mensen online te ontmoeten."
      },
      {
        "kop": "Zorg voor voldoende rust en ontspanning"
      },
      {
        "tekst": "Wees je ook bewust van je eigen grenzen en plan je agenda niet helemaal vol, zodat je voldoende rustmomenten hebt om van afspraken bij te komen. Doe op deze momenten dingen waar jij van ontspant. Voor de een is dat een uurtje sporten, terwijl de ander ontspant van een goed boek, een warm bad of wandelen in de natuur. Probeer de momenten te herkennen waarop rust nemen voor jou belangrijk is. Moeite met ontspannen? Wij bieden meerdere ontspanningsoefeningen."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Het is algemeen bekend dat bewegen bijdraagt aan een goede gezondheid. Bewegen kan helpen je hoofd rustig te maken en de spanning uit je lichaam te halen. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Wat vind je leuk om te doen?"
      },
      {
        "tekst": "Het beste is om hierbij ook minimaal twee keer per week spier- en botversterkende activiteiten te doen. Denk aan fitness of hardlopen. Ben je al wat ouder? Dan is het goed om dit te combineren met balansoefeningen, zoals op één been staan. Lukt het jou niet om zoveel te bewegen? Bedenk je dan dat alles wat al wel lukt om te bewegen, je helpt. Een klein beetje bewegen is beter dan niet bewegen."
      },
      {
        "kop": "Eet en drink gezond"
      },
      {
        "tekst": "Probeer zo gezond mogelijk te eten en wees matig met cafeïne en alcohol. Op de lange termijn voel je je hierdoor fitter en heb je meer energie."
      },
      {
        "kop": "Slaap!"
      },
      {
        "tekst": "Slaap is heel belangrijk om je lichaam en geest te herstellen. Goede slaap draagt bij aan een uitgerust en fit gevoel. En als je uitgerust bent, kan je meer aan. Gelukkig kan je veel doen om goed te slapen. Van het afbouwen van je activiteitenniveau tot je slaapkamer goed ventileren voordat je gaat slapen."
      },
      {
        "tekst": "Heb je moeite met slapen? Meld je dan aan voor onze Beter Slapen Challenge en ontvang tien dagen lang, om de dag een mail met opdrachten en tips om beter te slapen."
      },
      {
        "linkLabel": "Meld je gratis aan",
        "linkUrl": "https://formulier.wijzijnmind.nl/slaapchallenge"
      },
      {
        "kop": "Wees je bewust van je sterke kanten"
      },
      {
        "tekst": "Omdat autisme lastige kanten met zich meebrengt, zijn mensen vaak geneigd om de positieve kanten te weinig aandacht te geven. Zonde! Wat zijn jouw sterke kanten? Misschien ben jij bijvoorbeeld goed in het zien van details, ben je eerlijk en kan je goed buiten vaste kaders denken. Bedenk wat jouw sterke kanten zijn en richt je op de dingen die goed gaan in plaats van op de dingen die niet lukken. Dit werkt veel motiverender en dit is beter voor je zelfvertrouwen."
      },
      {
        "kop": "Accepteer dat je autisme hebt"
      },
      {
        "tekst": "Door het hebben van autisme kan je je anders voelen dan andere mensen. Je ervaart prikkels bijvoorbeeld heftiger of juist minder heftig. En het kan zijn dat je het gedrag van andere mensen en sociale situaties niet altijd zo goed begrijpt. Dit kan ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Maar je bent niet de enige! Er lopen in Nederland meer mensen rond die autisme hebben. Onthoud: Je bent goed zoals je bent en het hoort bij je. Probeer te accepteren dat je autisme hebt. Dat is misschien makkelijker gezegd dan gedaan en het is logisch dat dit niet gelijk lukt. Maar juist door er oké mee te zijn, zal je er beter mee om leren gaan."
      },
      {
        "kop": "Deel je ervaringen met gelijkgestemden"
      },
      {
        "tekst": "Het kan fijn en steunend zijn om herkenning te vinden bij andere mensen die autisme hebben. Zo kan je echt ervaren dat je niet de enige bent. Anderen kunnen je misschien op weg helpen met de aanpak van problemen. De kans is groot dat een ander iets soortgelijks heeft meegemaakt. Op de website van de NVA vind je informatie over lotgenotencontact. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "kind-met-autisme",
    "titel": "Autisme (kinderen)",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/kind-met-autisme",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_autisme_ouders",
    "intro": "Kinderen met autisme (officieel autismespectrumstoornis, kortweg ASS) vinden het vaak moeilijk als dingen anders lopen dan verwacht en houden niet van veranderingen. Ze vinden het meestal fijn om zich met één hobby of onderwerp bezig te houden. Prikkels komen vaak heftiger binnen. Ze zijn hierdoor gevoeliger voor wat ze zien, horen, voelen en proeven. Ze kunnen daardoor overprikkeld raken.",
    "blokken": [
      {
        "tekst": "Het tegenovergestelde kan ook, ze zijn dan juist ongevoelig voor zintuigelijke prikkels. Kinderen met autisme vinden het lastig zich in te leven in andere mensen en het gedrag van anderen te snappen. Ze hebben daardoor moeite met contact maken en inspelen op de verwachtingen van de omgeving. Hoewel er grote verschillen zijn tussen de kenmerken die kinderen met autisme ervaren, heeft het in de meeste gevallen veel invloed op het dagelijkse leven. Ook heeft het meestal veel impact op het leven van de ouders en op eventuele andere kinderen in het gezin. Op deze pagina krijg je als ouder tips die je helpen bij de omgang met je kind dat autisme heeft."
      },
      {
        "kop": "Blijf er niet mee rondlopen"
      },
      {
        "tekst": "Heeft jouw kind klachten die (kunnen) passen bij autisme en maak jij je zorgen over de ontwikkeling van je kind? Maak een afspraak met het Centrum voor Jeugd en Gezin, de schoolarts of de huisarts. Zij kunnen jullie, indien nodig, doorverwijzen voor onderzoek en hulp."
      },
      {
        "kop": "Verdiep je in autisme"
      },
      {
        "tekst": "Autisme kan op verschillende manieren tot uiting komen. Zo kan autisme bij meisjes minder opvallen of er anders uitzien. Doordat meisjes zich vaak hebben leren aanpassen op sociaal gebied, wordt het soms pas later ontdekt. Door goed naar je kind te kijken, je te verdiepen in de achtergronden, de symptomen en de aanpak van autisme, leer je meer over wat het inhoudt en zal je jouw kind wat beter begrijpen. Dit helpt je om er beter mee om te gaan."
      },
      {
        "tekst": "Op onze website vind je meer informatie over autisme. Ook zijn er goede boeken met betrouwbare informatie. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over autisme en tips en handvatten hoe ermee om te gaan. Vaak is er ook ruimte om ervaringen uit te wisselen."
      },
      {
        "tekst": "Een handige tool om inzichtelijk te krijgen met welke specifieke dingen je rekening moet houden bij jouw kind, is het autismepaspoort. Dit kan door jou als ouder worden gebruikt, maar ook op school of in de zorg."
      },
      {
        "kop": "Zorg voor duidelijkheid en structuur"
      },
      {
        "tekst": "Kinderen met autisme kunnen overspoeld raken door alles wat er op hen afkomt. Probeer zo duidelijk mogelijk naar je kind te zijn over wat die kan verwachten en wat jij van je kind verwacht. Bijvoorbeeld over wat komen gaat als jullie een bezoekje brengen aan familie. Plotseling afwijken van een planning is vaak lastig voor iemand met autisme. Geef hier extra uitleg over en aandacht aan."
      },
      {
        "tekst": "Je kan de wereld van je kind overzichtelijk maken door voldoende structuur te bieden. Zorg voor een duidelijke dagindeling, vaste regels en vaste plaatsen voor dingen in huis. Doe terugkomende activiteiten altijd op een vaste plek. Zoals altijd in bed voorlezen voor het slapengaan. Ook kan je gebruik maken van een planbord, waarop duidelijk staat wat wanneer gaat gebeuren."
      },
      {
        "kop": "Houd rekening met de prikkelbehoeftes van je kind"
      },
      {
        "tekst": "Sommige kinderen met autisme zijn erg gevoelig voor prikkels en andere kinderen juist niet. Houd rekening met de behoeftes van jouw kind. Probeer duidelijk te krijgen voor welke prikkels je kind wel of niet gevoelig is. Ook kan het zijn dat jouw kind voor sommige dingen heel gevoelig is en voor andere dingen niet. Een kind kan bijvoorbeeld gevoelig zijn voor geluid en licht, maar ongevoelig voor geur en het voelen van warmte en kou. Is jouw kind snel overprikkeld? Neem je kind dan bijvoorbeeld niet mee naar de supermarkt als dat niet nodig is of naar meerdere verjaardagen op één dag. Heeft jouw kind juist prikkels nodig? Zorg voor extra beweging, bijvoorbeeld door te sporten, samen te stoeien of trampoline te springen in de tuin."
      },
      {
        "kop": "Pas je verwachtingen aan op jouw kind"
      },
      {
        "tekst": "Ga niet uit van de verwachtingen van anderen, maar van de ontwikkeling en behoeften van jouw eigen kind. Jouw kind ontwikkelt zich waarschijnlijk anders dan kinderen van dezelfde leeftijd. Zo kan het zijn dat jouw kind zich langzamer ontwikkelt op sociaal-emotioneel gebied en juist weer sneller op bijvoorbeeld cognitief gebied. Neem dit mee in de opvoeding en hoe jij met je kind omgaat."
      },
      {
        "kop": "Laat je kind zoveel mogelijk meedraaien binnen het gezin"
      },
      {
        "tekst": "Laat je kind met autisme zoveel mogelijk gewoon meedraaien in het gezin. Probeer zo min mogelijk aanpassingen te maken. Onderneem ook leuke dingen met het hele gezin, bijvoorbeeld met z’n allen naar de dierentuin gaan. Zo zorg je voor positieve ervaringen bij broers en zussen, zodat ze het autisme niet (alleen) als negatief zien."
      },
      {
        "kop": "Denk ook aan je andere kinderen"
      },
      {
        "tekst": "Als je andere kinderen hebt, kunnen zij het soms best lastig vinden om samen te leven met hun broer of zus met autisme. Als je kind met autisme veel aandacht krijgt, kunnen je andere kinderen zich achtergesteld voelen. Zorg ervoor dat je kinderen de ruimte krijgen om hierover te praten. En laat merken dat je ook oog hebt voor hun gevoelens. Let ook op dat je jouw aandacht gelijk over je kinderen verdeelt. Plan bijvoorbeeld bewust tijd in waarin je kinderen even alleen iets doen met jou en/of jouw partner."
      },
      {
        "tekst": "Daarnaast komt het vaak voor dat meerdere kinderen in het gezin een vorm van autisme hebben. Onthoud hierbij dat ieder kind uniek is en een eigen benadering nodig heeft. Het is hierbij heel begrijpelijk dat het een uitdaging is om rekening te houden met elkaars gevoelens en wat iedereen nodig heeft. Plan voldoende tijd in voor 1 op 1 aandacht waarbij je rustig en serieus luistert. Het liefste tijdens een leuke en ontspannende activiteit."
      },
      {
        "kop": "Besteed aandacht aan de school"
      },
      {
        "tekst": "Veel kinderen met autisme hebben op school begeleiding nodig. Maar niet elk kind heeft evenveel begeleiding nodig. De meeste kinderen hebben voldoende aan eenvoudige hulp, zoals bij structuur aanbrengen in de lesstof of hulp bij het plannen van het werk. Sommige kinderen met autisme zijn het meeste gebaat bij speciaal onderwijs. Bijvoorbeeld doordat hun autisme samengaat met een lage intelligentie of doordat ze snel overprikkeld raken. Probeer als ouder zo goed mogelijk samen te werken met de docenten van jouw kind. Deel de kennis die je hebt over autisme en het begeleiden van je kind met docenten en wissel ervaringen hierover uit. Je kind komt in verschillende leeftijdsfasen weer andere problemen tegen. Een student is bijvoorbeeld meer op zichzelf aangewezen dan een middelbare scholier. Verdiep je hierin en ga na hoe je jouw kind tijdens verschillende fasen het beste kan ondersteunen."
      },
      {
        "kop": "Heb ook aandacht voor de sterke kanten van autisme"
      },
      {
        "tekst": "Naast de lastige kanten die autisme met zich meebrengt, hebben kinderen met autisme ook zeker sterke eigenschappen. Zo komt het voor dat een kind met autisme veel weet over een specifiek onderwerp, goed is in het zien van details, eerlijk is en leergierig. Vaak ligt de focus bij autisme op de negatieve kanten, maar geef ook aandacht aan de positieve kanten. Door je kind hierin te ondersteunen en te stimuleren, kan je kind tot bloei komen. Richt je op de dingen die goed gaan in plaats van op de dingen die niet lukken. Dit werkt veel motiverender, is beter voor het zelfvertrouwen en zo blijft je kind enthousiast om zich te ontwikkelen."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Als ouder van een kind met autisme, ben je geneigd alles op alles te zetten om er zo goed mogelijk voor je kind te zijn. Heel begrijpelijk, maar verlies hierbij niet jezelf uit het oog. Zorg goed voor jezelf. Want als jij je goed voelt, lukt het je beter ervoor je kind te zijn. Cijfer jezelf niet weg en blijf leuke dingen doen waardoor je energie krijgt en je ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Onderhoud ook het contact met anderen. Af en toe erover praten lucht vaak erg op."
      },
      {
        "kop": "Zorg voor hulp van buitenaf"
      },
      {
        "tekst": "Betrek als het even kan familie en vrienden bij de zorg voor je kind. Heb jij het door de situatie moeilijk? Aarzel dan niet om advies of hulp te zoeken. Je kan contact opnemen met onze MIND Hulplijn. Onze hulpverleners kunnen je adviezen geven over hoe je het beste voor je kind zorgt en zelf op de been blijft. Merk je dat je meer ondersteuning nodig hebt? Maak een afspraak bij jouw huisarts. De huisarts kan samen met jou kijken wat je nodig hebt en je eventueel doorverwijzen voor passende hulp."
      },
      {
        "kop": "Deel je ervaringen met andere ouders"
      },
      {
        "tekst": "Het delen van ervaringen met andere ouders zorgt meestal voor erkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn met een kind met autisme. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Oudervereniging Balans versterkt de positie van ouders van kinderen en jongeren met ondersteuningsbehoeften bij leren en/ of gedrag. Dit doet Balans door belangenbehartiging en uitwisseling van kennis en ervaringen tussen ouders, onderwijs, zorg en wetenschap. Samen met Stichting Mama Vita organiseert Balans webinars en online trainingen. Mama Vita is een netwerk van moeders met een kind met autisme. Kijk als ouder wat het beste aansluit bij jouw wensen. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "kop": "Tips om te communiceren met je kind"
      },
      {
        "tekst": "Hieronder lees je tips die je kunnen helpen bij de communicatie met je kind. Dit is heel belangrijk, omdat juiste communicatie eraan bijdraagt dat kinderen zich gezien en gehoord voelen."
      },
      {
        "lijst": [
          "Bedenk dat mensen met autisme de sociale regels vaak niet goed begrijpen. Veel kinderen met autisme zullen je bijvoorbeeld niet begroeten met een lach of naar je zwaaien als je vertrekt. Kanttekening hierbij is dat dit niet altijd het geval is. Sommige kinderen met autisme (vooral meisjes) kunnen zich goed aanpassen en kopiëren gedrag.",
          "Bedenk dat je kind niet onbeleefd wil zijn als je kind jou en anderen niet aankijkt.",
          "Verwacht geen reactie op jouw non-verbale communicatie, zoals een boze gezichtsuitdrukking of gebaren. Als je wilt dat je kind reageert op wat je zegt, vraag er dan specifiek om. Benoem letterlijk wat je wil of voelt.",
          "Leg concreet uit wat je wil gaan doen in plaats van dat je een korte vraag stelt. Bijvoorbeeld: Een moeder moet haar zoon en een klasgenoot met autisme naar voetbaltraining brengen. Ze zegt niet: \"Ga je mee?\" Maar ze zegt: \"Je moet naar voetbaltraining. Ik breng je vandaag met de auto naar de club. We vertrekken over vijf minuten, dus trek je jas aan. Je vriendje Jasper gaat mee.\"",
          "Gebruik geen taal met een dubbele betekenis. Het woord ‘vliegangst’ kan je kind opvatten als ‘bang zijn voor een vlieg’.",
          "Vermijd sarcasme. Een opmerking als ‘prachtig’ als iets juist lelijk is, is voor je kind onduidelijk.",
          "Vertel of vraag één ding tegelijk. En geef je kind de tijd om jouw informatie te verwerken.",
          "Vraag of je kind je begrepen heeft.",
          "Het kan zijn dat je kind het niet fijn vindt om aangeraakt te worden. Probeer hier rekening mee te houden.",
          "Schreeuw niet of praat niet met een harde stem. Kinderen met autisme kunnen hier erg van schrikken.",
          "Straf niet en geef geen ‘als-dan’ waarschuwingen. Beloon je kind in plaats daarvan voor goed gedrag.",
          "Maak gebruik van schema’s, agenda’s en geschreven instructies. Ze kunnen goed van pas komen om iets duidelijk te maken."
        ]
      }
    ]
  },
  {
    "slug": "bipolaire-stoornis",
    "titel": "Bipolaire stoornis",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/bipolaire-stoornis",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_bipolair",
    "intro": "Iedereen ervaart pieken en dalen in het leven. Maar bij sommige mensen zijn de pieken extreem hoog en de dalen donker en diep. Iemand met een bipolaire stoornis (ook wel manisch-depressieve stoornis genoemd) heeft afwisselend manische en depressieve periodes. Tijdens de manische periodes ben je opvallend opgewekt of prikkelbaar, zelfverzekerd en actief. En tijdens de depressieve periodes ervaar je grote somberheid en futloosheid. Hoe vaak de periodes voorkomen, hoe snel ze zich afwisselen en de ernst van de pieken en dalen kunnen per persoon erg verschillen. Bij veel mensen heeft de aandoening een grote invloed op het dagelijkse leven. Deze online informatie geeft je tips die je kunnen helpen bij het omgaan met deze stoornis.",
    "blokken": [
      {
        "kop": "Probeer de bipolaire stoornis te begrijpen"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden en aanpak van een bipolaire stoornis, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over de bipolaire stoornis."
      },
      {
        "tekst": "Ook kan je een stemmingsgrafiek of life-chart gaan bijhouden om meer inzicht te krijgen in jouw situatie. Hierin houd je bij wanneer en in welke situaties er ontregelingen waren en wat jou hielp eruit te komen. Zo kan je zien wat invloed heeft op jouw stemming en hoe je bijvoorbeeld reageert op het gebruik van medicijnen. Hierdoor krijg je wat meer controle over je leven."
      },
      {
        "tekst": "Bij veel behandelingen wordt psycho-educatie aangeboden. Je krijgt dan informatie en voorlichting over de bipolaire stoornis. Ook is het vaak een mooie manier om in contact te komen met andere mensen die ook een bipoliare stoornis hebben."
      },
      {
        "kop": "Zoek hulp als je die nog niet hebt"
      },
      {
        "tekst": "Herken jij je in klachten die mogelijk horen bij een bipolaire stoornis? En zorgen ze voor problemen met dagelijkse dingen, sociale contacten, school of werk? Krijg je nog geen professionele hulp? Dan is het een goed idee om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Samen met de huisarts kijk je wat er aan de hand is en wat je nodig hebt. Vind je dit een lastige stap? Je kan dit gesprek altijd voorbereiden met een medewerker van onze MIND Hulplijn."
      },
      {
        "kop": "Neem de voorgeschreven medicatie in"
      },
      {
        "tekst": "Heb jij medicijnen voorgeschreven gekregen? Neem ze op tijd in en in de juiste dosering. Ervaar je bijwerkingen of vind je het lastig ze goed in te nemen? Bespreek dit met je behandelaar."
      },
      {
        "kop": "Voorkom stress"
      },
      {
        "tekst": "Probeer stressvolle situaties waarvan je weet dat ze veel spanningen opleveren te vermijden. Pak bijvoorbeeld niet te veel activiteiten tegelijkertijd aan of plan niet te veel afspraken op een dag. Zijn er dingen die je spannend vindt, maar die toch moeten gebeuren? Zorg dat je daarna weer voldoende ontspanning en rust pakt om te herstellen."
      },
      {
        "kop": "Neem je omgeving in vertrouwen"
      },
      {
        "tekst": "Veel mensen ervaren het als een opluchting als ze praten over hun bipolaire stoornis en uitleggen wat ze ervaren. Erover praten betekent niet dat je iedereen erover moet vertellen. Vertel je verhaal aan iemand die je vertrouwt en waar jij je veilig bij voelt. Wie dit is of zijn, bepaal jij zelf en ook wat je vertelt. Waar je bij de een veel vertelt, vertel je bij de ander bijvoorbeeld weer wat minder. Weet je niet zo goed hoe je een gesprek begint of wie je het beste in vertrouwen kan nemen? Wij schreven handige tips om te praten over hoe je je voelt."
      },
      {
        "tekst": "Als de mensen om je heen weten waar je last van hebt, dan kunnen ze je ook beter helpen of steunen. Ook kan je jouw naasten vragen om hulp bij het signaleren van een nieuwe manische of depressieve periode. Vraag hen te letten op stemmings- of veranderingen in je gedrag. Je kan bijvoorbeeld afspreken dat ze in actie komen als je een manische periode hebt, door jouw hulpverlener in te schakelen of jouw bankpas weg te nemen. Ook kan je met elkaar afspreken hoe ze je kunnen ondersteunen in een sombere periode, bijvoorbeeld door op bezoek te komen of te gaan wandelen."
      },
      {
        "kop": "Trek op tijd aan de bel"
      },
      {
        "tekst": "Heb je het gevoel dat het mis dreigt te gaan? Neem contact op met jouw hulpverlener en de mensen die je in vertrouwen hebt genomen. Een handig hulpmiddel hierbij is een signalerings- of noodplan die je samen met jouw behandelaar kan opstellen. Hierin staat omschreven wat jij of anderen merken als je ontregeld bent en wat jijzelf of anderen op zulke momenten het beste kunnen doen."
      },
      {
        "kop": "Pas contragedrag toe"
      },
      {
        "tekst": "Contragedrag is het tegenovergestelde doen dan dat past bij hoe je je voelt. Als je je somber voelt, ga je juist dingen ondernemen en als je een piek voelt aankomen, ga je juist minder dingen doen. In je signaleringsplan kan je zo concreet mogelijk omschrijven welk contragedrag het beste bij jou past."
      },
      {
        "kop": "Zorg voor regelmaat en leef gezond"
      },
      {
        "tekst": "Zorg voor regelmaat; sta op tijd op en ga op tijd naar bed. Probeer zo veel mogelijk dezelfde tijden aan te houden en te leven volgens een vaste structuur. Het is misschien niet altijd even makkelijk, maar structuur in je dag zorgt voor duidelijkheid en overzicht. Het helpt je je rustiger en stabieler te voelen."
      },
      {
        "tekst": "Eet gezond en wees matig met cafeïne en alcohol, vaak geeft het even een goed gevoel. Op de lange termijn voel je je beter als je hiermee matigt."
      },
      {
        "kop": "Probeer voldoende te bewegen"
      },
      {
        "tekst": "Bewegen kan helpen tegen sombere gevoelens. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Probeer vormen van beweging te kiezen die je leuk vindt. Zo houd je het langer vol."
      },
      {
        "tekst": "Je kan extra beweging ook in je dagelijks leven inpassen door een aantal kleine aanpassingen te maken. Pak bijvoorbeeld vaker de fiets als je boodschappen gaat doen, stap een halte eerder uit als je de bus neemt, of neem vaker de trap in plaats van de lift."
      },
      {
        "tekst": "Het beste is om hierbij ook minimaal twee keer per week spier- en botversterkende activiteiten te doen. Denk aan fitness of hardlopen. Ben je al wat ouder? Dan is het goed om dit te combineren met balansoefeningen, zoals op één been staan."
      },
      {
        "tekst": "Lukt het jou niet om zoveel te bewegen? Bedenk je dat iedere stap telt!"
      },
      {
        "kop": "Zoek afleiding en ontspan"
      },
      {
        "tekst": "Je kan veel meer aan als je regelmatig ontspant. Ga bij jezelf na wat jij ontspannend vindt, waar jij plezier aan beleeft. En waar je lichaam van ontspant en je hoofd leeg van wordt. Soms kan het ook helpen om actief ontspanningsoefeningen te doen."
      },
      {
        "kop": "Zoek contact met ervaringsgenoten"
      },
      {
        "tekst": "Voor veel mensen is het fijn om herkenning te vinden bij anderen. Het kan heel steunend zijn te ervaren dat je niet de enige bent. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Contact met ervaringsgenoten kan individueel, maar ook in groepen. Op de website van Plusminus vind je meer informatie over supportgroepen. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "kop": "Heb aandacht voor herstel"
      },
      {
        "tekst": "Zet jij stappen om weer grip op je leven te krijgen of zou je meer willen weten over herstel? Wij ontwikkelden een themaspecial Aandacht voor herstel_. Meld je aan en leer meer over wat herstel is, je waarden en grenzen, eigen regie pakken, hulpmiddelen voor meer grip en de kracht van je omgeving."
      }
    ]
  },
  {
    "slug": "bipolaire-stoornis-in-je-omgeving",
    "titel": "Bipolaire stoornis in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/bipolaire-stoornis-in-je-omgeving",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_bipolair_naasten",
    "intro": "Mensen met een bipolaire stoornis (ook wel manisch-depressieve stoornis genoemd) hebben afwisselend manische en depressieve periodes. Tijdens de manische periodes zijn ze opvallend opgewekt of prikkelbaar, zelfverzekerd en actief. En tijdens de depressieve periodes ervaren ze grote somberheid, een negatieve kijk op zichzelf en futloosheid.",
    "blokken": [
      {
        "tekst": "Hoe vaak de pieken en dalen voorkomen en de ernst ervan verschilt per persoon. In de meeste gevallen heeft de stoornis een grote invloed op het dagelijkse leven. Ook heeft het meestal veel impact op het leven van mensen in de omgeving. Op deze pagina krijg je tips die je helpen bij de omgang met een naaste met een bipolaire stoornis en tips hoe je zelf overeind blijft."
      },
      {
        "kop": "Krijg inzicht in de bipolaire stoornis"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een bipolaire stoornis, leer je meer over wat de stoornis inhoudt en zal je jouw naaste wat beter begrijpen. Dit helpt je om er beter mee om te gaan. Op onze website vind je meer informatie over een bipolaire stoornis. Ook schreven we tips voor mensen die zelf te maken hebben met een bipolaire stoornis. Zoals tips over je tegenovergesteld gedragen dan dat past bij hoe je je voelt, het voorkomen van stress en het innemen van de voorgeschreven medicatie. Daarnaast zijn er goede boeken met betrouwbare informatie. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over de bipolaire stoornis en tips en handvatten hoe ermee om te gaan. Vaak is er ruimte om ervaringen uit te wisselen."
      },
      {
        "kop": "Ga met elkaar in gesprek"
      },
      {
        "tekst": "Om er voor de ander te kunnen zijn, is het belangrijk dat je weet wat er in de ander omgaat. Ga daarom het gesprek aan en stel vragen zonder je op te dringen. Probeer je woordkeuze neutraal te houden en geef geen waardeoordeel. Mensen die zich beoordeeld voelen gaan vaak in de verdediging en dit maakt het lastig om een goed gesprek te voeren. Zwak niet af wat jouw naaste je vertelt over hoe die zich voelt. Vraag naar wat het voor de ander betekent zich zo te voelen. Kijk wat jouw reactie doet. Onbedoeld hebben opmerkingen soms een verkeerde uitwerking. Kijk of je anders kan reageren. Aansluiten bij de woorden die jouw naaste zelf gebruikt, helpt hierbij. Geef hierbij gerust aan dat jij je best doet en dat het af en toe even zoeken is hoe je het beste reageert. Probeer hierbij het gedrag van de ander niet op jezelf te betrekken. Bedenk je dat de sombere of uitgelaten stemming deel uitmaakt van de stoornis."
      },
      {
        "kop": "Stimuleer het bijhouden van een stemmingsgrafiek"
      },
      {
        "tekst": "Een manier om meer inzicht te krijgen in de bipolaire stoornis is het bijhouden van een stemmingsgrafiek of life-chart. Hierin houdt jouw naaste bij wanneer en in welke situaties er ontregelingen waren en wat toen hielp eruit te komen. Zo kan jouw naaste zien wat invloed heeft op de stemming en hoe die reageert op bijvoorbeeld het gebruik van medicijnen. Hierdoor komt er wat meer controle over het leven. Maakt jouw naaste nog geen gebruik van zo’n stemmingsgrafiek, stel het dan eens voor. Doe dit op een niet dwingende manier."
      },
      {
        "kop": "Ondersteun jouw naaste bij het maken van een noodplan"
      },
      {
        "tekst": "In een signalerings- of noodplan staat omschreven wat jouw naaste en de mensen in de omgeving merken als de ander ontregeld is of dreigt te raken. Ook staat erin wat er op dat moment het beste kan gebeuren. Dit noodplan kan het beste samen met de behandelaar worden opgesteld, maar ook jouw inbreng is hierbij belangrijk. Jij ziet vaak vanaf dichtbij wat er wel en niet werkt. In overleg met elkaar spreek je af dat jij let op stemmings- of gedragsveranderingen. Zo help je jouw naaste op tijd aan de bel te trekken en hulp te zoeken. Je kan afspreken dat je actie onderneemt als je merkt dat jouw naaste een manische periode heeft, door de hulpverlener in te schakelen en door bijvoorbeeld de bankpas weg te nemen. Ook spreek je met elkaar af hoe je het beste ondersteunt in een sombere periode, bijvoorbeeld door op bezoek te komen of te gaan wandelen. Akwa GGZ, Trimbos-instituut en MIND maakten een toolkit die het makkelijker maakt om samen te beslissen over de best passende zorg en ondersteuning."
      },
      {
        "kop": "Vermijd de stoel van hulpverlener"
      },
      {
        "tekst": "Hoewel het goed is om jouw naaste te ondersteunen en te signaleren als het misgaat, betekent dat niet dat jij op de stoel van hulpverlener moet gaan zitten. Het is goed om op jouw manier te helpen en te steunen, maar neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van broer of partner."
      },
      {
        "kop": "Bedenk dat iemand niet de bipolaire stoornis is"
      },
      {
        "tekst": "Hoewel iemand met een bipolaire stoornis last heeft van hoge pieken en diepe dalen, betekent dit niet dat diegene de stoornis is. Natuurlijk maakt de stoornis onderdeel van diegene uit, maar de ander is nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Het helpt de ander wanneer jij dit ook af en toe uitspreekt."
      },
      {
        "kop": "Stel verwachtingen bij en accepteer"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet van uit dat een behandeling alles snel ‘oplost’. De ander kan niet zomaar de knop omdraaien. Vaak gaat het om een langer proces met vallen en opstaan. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op de schouders van de ander. Jouw naaste kan (tijdelijk) veranderen door de bipolaire stoornis. Daar mag je verdrietig om zijn. Het klinkt misschien lastig, maar door de situatie te aanvaarden zoals die is, creëer je ruimte om problemen van een andere kant te bekijken. Mindfulness, een aandachttraining die je helpt dichter bij je gevoel te komen, zonder erover te oordelen of er direct iets mee te doen, kan hierbij helpen."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Door het zorgen voor de ander, ben je misschien wel geneigd jouw eigen behoeftes minder belangrijk te maken. Niet doen! Bedenk daarbij dat het goed zorgen voor jezelf niet alleen een positief effect heeft op jouw eigen welzijn, maar dat het hierdoor juist beter lukt er voor de ander te zijn. Cijfer jezelf dus niet weg en blijf ook jouw eigen leven leiden. Onderhoud contact met andere mensen en doe leuke dingen waarvan jij energie krijgt en waardoor je ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Ook er af en toe over praten en je hart luchten bij mensen in je omgeving die je vertrouwt, lucht vaak erg op. Stel daarnaast grenzen naar je naaste toe. Geef aan waar je bij kan helpen, en waarbij jij dat niet wil of kan. Vind je dat lastig? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met een bipolaire stoornis jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun vader/moeder of broer/zus aan de hand is. Als er een crisis is, vertel je kinderen dan dat dit niet door hen komt. Uitleg helpt bij het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Probeer het onderwerp bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen er over mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning."
      },
      {
        "kop": "Vraag om hulp en neem hulp van anderen aan"
      },
      {
        "tekst": "Als naaste van iemand met een bipolaire stoornis, kan jij ook behoefte hebben aan ondersteuning. Betrek als het even lukt ook familie en vrienden bij de zorg voor je naaste. Heb jij het door de situatie moeilijk? Aarzel dan niet om advies of hulp te zoeken. Je kan contact opnemen met onze MIND Hulplijn. Onze hulpverleners kunnen je adviezen geven over hoe je het beste voor je naaste zorgt en zelf op de been blijft. Merk je dat je meer ondersteuning nodig hebt? Maak een afspraak bij jouw huisarts. De huisarts kan samen met jou kijken wat je nodig hebt en je eventueel doorverwijzen voor passende hulp."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt meestal voor erkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn met een naaste met een bipolaire stoornis. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Kijk als naaste wat het beste aansluit bij jouw wensen. Op de website van Plusminus staat meer informatie, ook over supportgroepen voor naasten. MIND Naasten Centraal biedt, naast andere vormen van ondersteuning, gespreksgroepen op veel plaatsen in het land. En op de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "borderline",
    "titel": "Borderline",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/borderline",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_borderline",
    "intro": "Als je borderline hebt, ervaar je veel wisselingen in je gevoelens, relaties, zelfbeeld en gedrag. Je bent snel bang om in de steek gelaten te worden en je relaties zijn meestal intens en niet in balans. Je hebt een negatief zelfbeeld en twijfelt regelmatig over wat je met je leven wil. Veel mensen met borderline doen dingen impulsief. Voorbeelden hiervan zijn smijten met geld, veel alcohol drinken of drugs gebruiken, snel wisselende seksuele contacten en eetbuien. Ook woede-uitbarstingen kunnen erbij horen. Jouw stemming kan gemakkelijk omslaan. Ook kan je regelmatig een gevoel van leegte, gevoelens van vervreemding en achterdocht ervaren. Sommige mensen met borderline doen zichzelf pijn.",
    "blokken": [
      {
        "tekst": "Er zijn grote verschillen tussen de klachten die mensen met borderline ervaren. In de meeste gevallen heeft het veel invloed op je leven. Op deze pagina krijg je tips die je kunnen helpen bij het omgaan met borderline."
      },
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Heb jij klachten die (mogelijk) passen bij borderline? Blijf er niet mee rondlopen. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp. Bedenk dat je er niet alleen voor staat. Samen kan en weet je meer. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je doorverwijzen."
      },
      {
        "tekst": "Heb je borderline en het gevoel dat het niet goed gaat? Blijf er ook dan niet mee rondlopen. Neem contact op met jouw hulpverlener en de mensen die je in vertrouwen hebt genomen."
      },
      {
        "kop": "Krijg inzicht"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een borderline stoornis, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over borderline. Ook zijn er goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho- educatie aangeboden. Je krijgt dan informatie en voorlichting over borderline."
      },
      {
        "kop": "Je bent niet de enige!"
      },
      {
        "tekst": "Jouw klachten kunnen ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Onthoud dat je niet de enige bent! Er zijn veel mensen die klachten hebben, die lijken op die van jou."
      },
      {
        "kop": "Deel je ervaringen"
      },
      {
        "tekst": "Voor veel mensen is het fijn om herkenning te vinden bij anderen. Het kan heel steunend zijn echt te ervaren dat je niet de enige bent. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Op de website van Stichting Borderline vind je meer informatie over lotgenotencontact. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "kop": "Maak afspraken met je omgeving"
      },
      {
        "tekst": "Als je borderline hebt, kan je vaak in conflict raken met de mensen die belangrijk voor je zijn. Bespreek met elkaar hoe jullie op moeilijke momenten het beste op elkaar kunnen reageren. Zorg ervoor dat de mensen in jouw omgeving voldoende over de borderline weten. Vertel ze erover en vraag om hulp bij het signaleren van een crisis. Je kan bijvoorbeeld afspreken dat ze actie ondernemen als ze signalen opvangen dat het niet goed met jou gaat door jouw hulpverlener in te schakelen. Ook kan je afspreken hoe ze je kunnen ondersteunen in een mindere periode, bijvoorbeeld door op bezoek te komen of samen te gaan wandelen."
      },
      {
        "kop": "Je bent niet de borderline"
      },
      {
        "tekst": "Hoewel je door de borderline overspoeld kan worden met emoties en te maken kan krijgen met lastige situaties, betekent dit niet dat jij de borderline bent. Natuurlijk maakt het onderdeel van je uit, maar je bent nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Schrijf eens op wat jou allemaal jou maakt. Dat kunnen hele eenvoudige dingen zijn. Iemand die gek is op lezen of sporten of… vul maar in. Dit kan je helpen op momenten dat je dit even kwijt bent."
      },
      {
        "kop": "Slaap!"
      },
      {
        "tekst": "Slaap is heel belangrijk om je lichaam en geest te herstellen. Goede slaap draagt bij aan een uitgerust en fit gevoel. En als je uitgerust bent, kan je meer aan. Gelukkig kan je veel doen om goed te slapen. Van het afbouwen van je activiteitenniveau tot je slaapkamer goed ventileren voordat je gaat slapen. Wil je aan de slag om beter te gaan slapen? Meld je dan aan voor onze Beter Slapen Challenge."
      },
      {
        "kop": "Zorg voor ritme en leef gezond"
      },
      {
        "tekst": "Sta op tijd op, eet op vaste momenten en ga op tijd naar bed. Probeer zo veel mogelijk dezelfde tijden aan te houden. Structuur zorgt voor houvast en overzicht en zorgt voor stabiliteit. Probeer ook zo gezond mogelijk te eten en drink niet te veel koffie/cafeïne en alcohol. Het geeft je heel even een boost of ontspanning, maar je voelt je fitter en hebt meer energie als je hier voorzichtig mee bent."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Voldoende bewegen is belangrijk voor de mentale en lichamelijke gezondheid. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Wat vind je leuk om te doen? Denk na over slimme combi’s, zoals een rondje wandelen tijdens je lunchpauze of als je een telefoongesprek hebt."
      },
      {
        "kop": "Accepteer"
      },
      {
        "tekst": "Probeer te accepteren dat je borderline hebt. Dat is misschien makkelijker gezegd dan gedaan en het is logisch dat dit niet van de ene op de andere dag lukt. Maar juist door te aanvaarden dat je hier last van hebt, zal je er beter mee om leren gaan. Een milde, niet-oordelende houding geeft ruimte om op een andere manier om te gaan met klachten, zodat ze een minder grote rol gaan spelen in je leven. Mindfulness is een training die hierbij kan helpen. Wij schreven oefeningen voor thuis."
      }
    ]
  },
  {
    "slug": "borderline-naasten",
    "titel": "Borderline in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/borderline-naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_borderline_naasten_092021",
    "intro": "Mensen die borderline hebben, ervaren veel wisselingen in hun gevoelens, relaties, zelfbeeld en gedrag. Ze zijn snel bang om in de steek gelaten te worden en relaties zijn meestal intens en niet in balans. Ze hebben een negatief zelfbeeld en twijfelen over wat ze willen met hun leven. Veel mensen met borderline doen dingen impulsief. Voorbeelden hiervan zijn smijten met geld, veel alcohol drinken of drugs gebruiken, snel wisselende seksuele contacten en eetbuien. Ook woede-uitbarstingen kunnen erbij horen. De stemming kan gemakkelijk omslaan. Daarnaast kunnen ze regelmatig een gevoel van leegte, gevoelens van vervreemding en achterdocht ervaren. Sommige mensen met borderline doen zichzelf pijn.",
    "blokken": [
      {
        "tekst": "Hoewel er grote verschillen zijn tussen de klachten die mensen met borderline ervaren, heeft het in de meeste gevallen veel invloed op het dagelijkse leven. Ook heeft het meestal veel impact op het leven van mensen in de omgeving. In deze online gids krijg je tips die je helpen bij de omgang met een naaste met borderline en tips hoe je zelf overeind blijft."
      },
      {
        "kop": "Krijg inzicht in de borderline"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een borderline stoornis, leer je meer over wat de stoornis inhoudt en zal je jouw naaste wat beter begrijpen. Dit kan je helpen om er beter mee om te gaan. Op onze website vind je meer informatie over borderline. Ook zijn er goede boeken met betrouwbare informatie. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over de borderline stoornis en tips en handvatten hoe ermee om te gaan. Vaak is er ook ruimte om ervaringen uit te wisselen."
      },
      {
        "kop": "Zorg voor jezelf"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Want als jij je goed voelt, kan je er beter voor de ander zijn. Cijfer jezelf niet weg en blijf leuke dingen doen waardoor je energie krijgt en je ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Onderhoud ook het contact met anderen. Af en toe erover praten kan al erg opluchten."
      },
      {
        "kop": "Vermijd de stoel van hulpverlener"
      },
      {
        "tekst": "Als je merkt dat je naaste het moeilijk heeft, kan je geneigd zijn te willen helpen met oplossingen, tips en adviezen. Onthoud dat jij niet de hulpverlener van jouw naaste bent. Het is goed om op jouw manier te helpen en te steunen, maar neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van broer of partner."
      },
      {
        "kop": "Ga met elkaar in gesprek"
      },
      {
        "tekst": "Wil je graag een gesprek voeren? Doe dit dan op een moment dat de ander niet al overspoeld wordt door emoties. Stel vragen zonder je op te dringen. Probeer je woordkeuze neutraal te houden en oordeel niet. Mensen die zich beoordeeld voelen gaan vaak in de verdediging en dit maakt het lastig om een goed gesprek te voeren. Maak de heftige emoties van de ander niet kleiner. Bedenk je dat deze heftige emoties deel uitmaken van de problematiek. Vraag bijvoorbeeld wat het voor de ander betekent zich zo te voelen. Kijk wat jouw reactie doet. Onbedoeld hebben opmerkingen soms een verkeerde uitwerking. Kijk of je anders kan reageren. Aansluiten bij de woorden die jouw naaste zelf gebruikt, kan hierbij helpen. Geef hierbij gerust aan dat jij je best doet en dat het af en toe even zoeken is hoe je het beste kan reageren."
      },
      {
        "tekst": "Merk je dat het gesprek nergens toe leidt, geef dit dan aan en verlaat het gesprek. Betrek het borderline gedrag van de ander niet op jezelf en ga er niet in mee. Als jouw naaste heel erg verdrietig of boos is, is het mogelijk dat dit door de borderline komt. Het heeft dus niets met jou te maken."
      },
      {
        "kop": "Geef je grenzen aan"
      },
      {
        "tekst": "Het is misschien even wennen, maar het stellen van grenzen helpt je mentaal gezond te blijven. Dat is fijn voor jezelf en het geeft je ruimte om er juist beter voor de ander te zijn. Vind je dit lastig? Wij maakten een online gids met tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "tekst": "Naast het stellen van jouw grenzen, is het net zo belangrijk om ze vervolgens ook vol te houden. Stel dus grenzen die je ook waar kan maken. Het kan nodig zijn om je grenzen meerdere keren te moeten aangeven. Het stellen van grenzen kan tot heftige reacties leiden bij jouw naaste. Probeer rustig uit te leggen, dat dit uiteindelijk het beste is voor iedereen. Doe dit vanuit de ik-vorm en gebruik heldere, eenvoudige zinnen."
      },
      {
        "kop": "Bedenk dat iemand niet de borderline is"
      },
      {
        "tekst": "Hoewel iemand met borderline overspoeld kan raken met emoties en te maken kan krijgen met lastige situaties, betekent dit niet dat diegene de stoornis is. Natuurlijk maakt de borderline onderdeel van diegene uit, maar de ander is nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Het kan helpen dit ook af en toe naar de ander uit te spreken."
      },
      {
        "kop": "Stel verwachtingen bij en accepteer"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet van uit dat een behandeling alles snel ‘oplost’. Vaak gaat het om een langer proces met vallen en opstaan. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op de schouders van de ander. Jouw naaste kan (tijdelijk) veranderen door de borderline. Daar mag je verdrietig om zijn. Het klinkt misschien lastig, maar door de situatie te accepteren zoals die is, creëer je ruimte om problemen van een andere kant te bekijken."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met borderline jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun vader/moeder of broer/ zus aan de hand is. Als er een crisis is, vertel je kinderen dan dat dit niet door hen komt. Uitleg helpt bij het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Probeer het onderwerp ook bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen er over mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning."
      },
      {
        "kop": "Vraag hulp en neem hulp van anderen aan"
      },
      {
        "tekst": "Als naaste van iemand met borderline, kan jij ook behoefte hebben aan ondersteuning. Het kan helpen om je sociale netwerk in kaart te brengen, zodat je weet wie je wanneer om hulp kan vragen. Heb jij het door de situatie moeilijk? Aarzel dan niet om professionele hulp te zoeken. Voor kinderen in het gezin kan preventieve hulp helpen met de situatie om te leren gaan. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen om op de been te blijven en je adviezen geven over hoe je het beste voor je naaste zorgt. De huisarts kan je ook doorverwijzen voor passende hulp als dat nodig is. Heb je lichamelijke of ‘vage’ klachten, ga dan ook op tijd naar de huisarts. Heeft de situatie effect op je werk of opleiding? Praat erover met je werkgever of decaan/ zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning. Als je het fijn vindt, neem dan een collega of studiegenoot in vertrouwen en vraag om steun."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt vaak voor herkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Ook op de website van Stichting Borderline kan je terecht voor informatie, een luisterend oor en/of advies."
      }
    ]
  },
  {
    "slug": "depressie",
    "titel": "Depressie",
    "onderwerp": "Somberheid",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/depressie",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_depressie",
    "intro": "Iedereen heeft wel eens last van sombere gevoelens. Meestal verdwijnt zo’n sombere bui binnen een paar uur of een paar dagen. Een depressie is anders. Voel jij je gedurende een langere periode het grootste deel van de dag somber? Heb je minder zin of plezier in dingen waar je eerder wel plezier in had? Dit kunnen kenmerken zijn van een depressie. Op deze pagina geven we je tips die je helpen om te gaan met aanhoudende somberheid.",
    "blokken": [
      {
        "kop": "Neem je sombere gevoelens serieus"
      },
      {
        "tekst": "Het is belangrijk om in te zien dat je sombere gevoelens hebt. Denk niet: “Er is niks aan de hand.” Als je klachten langer dan twee weken duren is het goed om professionele hulp te zoeken. Een afspraak bij de huisarts is de eerste stap. De huisarts bespreekt met je hoe je je depressieve klachten kan aanpakken en kan je doorverwijzen als dat nodig is. Over de behandeling van depressie hebben hulpverleners met elkaar afspraken gemaakt. Deze staan in de zogenoemde multidisciplinaire richtlijn_."
      },
      {
        "kop": "Krijg inzicht in depressie"
      },
      {
        "tekst": "Bijkomende klachten bij een depressie kunnen zijn dat je minder of juist meer eetlust hebt, slecht of juist veel slaapt en minder energie hebt. Je kan last hebben van concentratieproblemen en besluiteloosheid en je kan veel denken aan de dood. Ook kan je je snel geprikkeld voelen of juist sloom gedragen. En je kan je waardeloos of onterecht schuldig voelen. Door dit alles lukt het je niet meer normaal te functioneren in je dagelijkse leven."
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een depressie, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over depressie en een depressietest. Deze test helpt je bij het inschatten of je depressieve klachten ervaart. Er zijn ook goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho-educatie aangeboden. Je krijgt dan informatie en voorlichting over depressie en wat je er zelf aan kan doen."
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Houd je gevoelens niet voor jezelf, maar praat erover met mensen die je vertrouwt. Denk aan je partner, familie of een vriend. Soms is het ook fijn om erover te praten met iemand van je werk of school, zoals een vertrouwenspersoon, leraar of collega. Vind je het lastig om over je gevoelens te praten met mensen in je omgeving? Wij schreven een online gids met tips om te praten over hoe je je voelt. Je kan ook contact opnemen met een professional van de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
      },
      {
        "kop": "Plan activiteiten"
      },
      {
        "tekst": "Zorg ervoor dat je dingen blijft ondernemen en onder de mensen blijft, ook als je daar eigenlijk geen zin in hebt. Wanneer je dingen doet die je normaal gesproken leuk vindt, vergroot dit de kans dat je je beter gaat voelen. Als je echt tot niets komt, helpt het om activiteiten te gaan plannen. Bedenk elke dag één haalbare activiteit en schrijf deze op in een weekplanning. Denk aan afspreken met een vriend, boodschappen doen, een lekkere maaltijd koken, muziek maken, bezig zijn met je hobby, etc."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Probeer elke dag naar buiten te gaan en een stukje te fietsen of wandelen. Bewegen kan helpen tegen depressieve gevoelens. Heb je wel eens gehoord van runningtherapie? Voor runningtherapie hoef je niet sportief te zijn. Een runningtherapeut leert je rustig hardlopen, zodat je meer in je lijf komt en minder in je hoofd zit. Deze therapie gaat niet om snelheid, maar om bewegen. Tijdens runningtherapie sta je stil bij hoe je op een fijne manier loopt en hoe je het beste kan ademhalen, zonder hier te veel focus op te leggen. Het voelen en ervaren is belangrijker dan praten. Het is de bedoeling dat het rennen je energie geeft, in plaats van dat het je energie kost."
      },
      {
        "kop": "Leef gezond"
      },
      {
        "tekst": "Als je sombere gevoelens ervaart, is het extra belangrijk om regelmaat te houden in je leven. Structuur in je dag zorgt voor duidelijkheid en overzicht. Sta rond een vaste tijd op (niet te laat), eet op regelmatige tijden en ga op tijd naar bed. Probeer ook gezond te eten en drink niet te veel cafeïne en alcohol."
      },
      {
        "kop": "Je bent niet de enige!"
      },
      {
        "tekst": "Jouw klachten kunnen ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Onthoud dat je niet de enige bent. Sterker nog, een kwart van de volwassen Nederlanders krijgt hier ooit in het leven mee te maken!"
      },
      {
        "kop": "Zoek contact met andere mensen met een depressie"
      },
      {
        "tekst": "Veel mensen vinden het prettig om herkenning en steun bij anderen te vinden. De Depressie Vereniging organiseert door heel Nederland supportgroepen. Een groep bestaat uit mensen die een depressie hebben of hebben gehad. Zij komen ongeveer één keer per maand bij elkaar om ervaringen uit te wisselen en te bespreken hoe zij met hun depressie omgaan. Ook is het mogelijk om via Depressie Connect veilig, anoniem en online in contact te komen met andere mensen met een depressie. Stel vragen, deel je ervaringen of lees mee. Dit kan in jouw tempo en op jouw manier."
      },
      {
        "kop": "Zie je geen uitweg meer?"
      },
      {
        "tekst": "Als je erg depressief bent, kan je veel aan de dood denken. Je vindt het leven vaak uitzichtloos, zinloos en ellendig. Ook kan je het gevoel hebben anderen alleen maar tot last te zijn. Mensen die zich zo voelen, besluiten soms een einde te maken aan hun leven. Ze zien dit als enige oplossing om van hun pijn en problemen af te komen."
      },
      {
        "tekst": "Vaak vinden mensen het moeilijk om hierover te praten. Het is heel belangrijk om dat toch te doen. Praat erover als je zelf aan zelfdoding denkt, en ook wanneer je iemand kent van wie je vermoedt dat diegene aan zelfdoding denkt."
      },
      {
        "tekst": "Denk je aan zelfdoding, maak je je zorgen om iemand of ben je nabestaande? 113 Zelfmoordpreventie is er voor je. Op 113.nl kan je direct en anoniem in contact komen met hun hulpverleners."
      }
    ]
  },
  {
    "slug": "depressie-naasten",
    "titel": "Depressie in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/depressie-naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_depressie_omgeving",
    "intro": "Als iemand in je omgeving een depressie heeft, dan merk je vaak wel dat er iets aan de hand is. Toch is het in het begin vaak moeilijk te begrijpen wát er dan precies aan de hand is. Misschien probeer je eerst om je naaste op te vrolijken, of moedig je de ander aan zich eroverheen te zetten. Dit is begrijpelijk, maar het werkt vaak juist niet goed. Mogelijk denk je: “Het gaat vast vanzelf weer over.” Maar een sombere bui kan blijven hangen. Wat kan jij dan wel doen om te helpen? Op deze pagina krijg je tips die je helpen om te gaan met een naaste die een depressie heeft.",
    "blokken": [
      {
        "kop": "Krijg inzicht in depressie"
      },
      {
        "tekst": "Wanneer iemand in je omgeving een depressie heeft, is het belangrijk om te begrijpen wat een depressie is. Op onze website vind je meer informatie over depressie. Ook kan je contact opnemen met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat van een professional. Psycho-educatie, de voorlichting die huisartsen en ggz-instellingen geven, is ook voor naasten handig. Je leert dan meer over wat een depressie is, wat je kan verwachten van het verloop, welke behandelmogelijkheden er zijn en wat iemand er zelf aan kan doen."
      },
      {
        "kop": "Bied steun"
      },
      {
        "tekst": "Steun jouw naaste door betrokken te zijn en interesse te tonen. Is jouw naaste niet jouw partner of gezinslid? Ga langs of bel op. Dit helpt vaak, ook als jouw naaste dit niet direct laat blijken als je op bezoek komt. Luister en toon begrip. Neem de gevoelens van degene met een depressie serieus en ontken ze niet. Probeer de problemen niet weg te praten of jouw naaste op te vrolijken. Die gevoelens zijn er nu eenmaal, en ze kleiner willen maken werkt juist vaak averechts. Maak wel duidelijk dat de ander op je kan rekenen. Weet je niet wat je moet zeggen of doen? Dan kan je dat zeggen. En wie weet komt je naaste zelf met iets wat voor diegene werkt."
      },
      {
        "kop": "Stimuleer om hulp te zoeken"
      },
      {
        "tekst": "Besef dat jij weinig aan de depressie kan veranderen en dat jouw naaste hulp nodig heeft als dit nog niet het geval is. Stimuleer daarom om professionele hulp te zoeken. Laat de ander weten dat je om diegene geeft en bespreek jouw zorg. Geef aan dat het volgens jou een goed idee is om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Jouw naaste kan het als steunend ervaren als jij meegaat naar deze afspraak."
      },
      {
        "kop": "Vermijd de stoel van hulpverlener"
      },
      {
        "tekst": "Als je merkt dat je naaste het moeilijk heeft, kan je geneigd zijn te willen helpen met oplossingen, tips en adviezen. Onthoud dat jouw naaste zich waarschijnlijk veel beter gehoord voelt als jij in plaats daarvan écht luistert. Neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van zus, vriend of partner."
      },
      {
        "kop": "Bied praktische hulp"
      },
      {
        "tekst": "Iemand met een depressie heeft vaak moeite met de dagelijkse dingen, zoals het huishouden, boodschappen doen, administratie bijhouden etc. Door op die gebieden hulp aan te bieden, kan je een waardevolle steun zijn. Of ga samen iets eenvoudigs doen, bijvoorbeeld wandelen of boodschappen doen."
      },
      {
        "kop": "Stel verwachtingen bij en accepteer"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet vanuit dat een behandeling alles snel oplost. Vaak gaat het om een langer proces met vallen en opstaan. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op de schouders van de ander. Jouw naaste kan (tijdelijk) veranderen door de depressie. Daar mag je verdrietig om zijn. Probeer te accepteren dat jij niet altijd iets kan doen. Soms is er voor de ander zijn al genoeg."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Want als jij je goed voelt, lukt het je beter er voor de ander te zijn. Cijfer jezelf niet weg en blijf leuke dingen doen, waardoor je energie krijgt en je ontspant. Ontspanningsoefeningen kunnen hierbij fijn zijn. Onderhoud ook het contact met anderen. Af en toe erover praten lucht vaak erg op. Betrek als het even lukt (andere) familieleden en vrienden bij de zorg voor je naaste, zodat je het niet alleen hoeft te doen. Bij het goed zorgen voor jezelf hoort ook het aangeven waarbij je wel en niet kan helpen. Vind je dit lastig? Wij maakten een online gids met tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met een depressie jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets speelt, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun vader/moeder of broer/ zus aan de hand is. Vertel je kinderen dat dit niet door hen komt. Uitleg helpt bij het ontwikkelen van strategieën om er goed mee om te gaan. Het is niet nodig om diep op achterliggende problemen in te gaan. Anders bestaat de kans dat kinderen zich verantwoordelijk gaan voelen. Probeer het onderwerp bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Tegelijkertijd is het van belang dat het ‘normale’ leven van de kinderen gewoon doorgaat. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning."
      },
      {
        "kop": "Zoek steun voor jezelf"
      },
      {
        "tekst": "Leven met iemand die een depressie heeft, kan ingewikkeld en zwaar zijn. Vaak komen er ook nog praktische taken bij die je moet overnemen. Je kan daarom ook zelf behoefte hebben aan steun. In onze online gids over mantelzorg vind je nog meer tips over hoe je zelf overeind blijft als je voor een ander zorgt. Ook kan je contact opnemen met de MIND Hulplijn. Aarzel niet om zelf professionele hulp te zoeken. Maak een afspraak met je huisarts. De huisarts ondersteunt je om op de been te blijven, geeft je adviezen over hoe je het beste voor je naaste zorgt en verwijst je door voor passende hulp als dat nodig is. Heeft de situatie effect op je werk of opleiding? Praat erover met je werkgever of decaan/ zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Wist je dat er ook voor naasten lotgenotengroepen zijn? Zo’n groep komt op regelmatige tijden bij elkaar. Je wisselt ervaringen uit en beseft dat je niet de enige bent met problemen en vragen. Je geeft elkaar informatie en tips. En je ondersteunt elkaar, al is het alleen maar doordat je elkaar begrijpt. Samen relativeer je soms even de moeilijkheden. Dit werkt voor veel mensen bevrijdend. MIND Naasten Centraal ondersteunt naasten van mensen met psychische kwetsbaarheid. Ze organiseren op veel plaatsen in het land gespreksgroepen en bieden ook online contactgroepen aan."
      },
      {
        "kop": "Geen uitweg meer zien"
      },
      {
        "tekst": "Mensen die erg depressief zijn, kunnen veel aan de dood denken. Het leven kan uitzichtloos, zinloos en ellendig lijken. Mensen die zich zo voelen, besluiten soms een einde te maken aan hun leven. Ze zien dit als enige oplossing om van al hun pijn en problemen af te komen. Vaak vinden mensen het moeilijk om erover te praten. Het is heel belangrijk om dat wel te doen als je iemand kent van wie je vermoedt dat diegene aan zelfdoding denkt. Maak je je zorgen om iemand? 113 Zelfmoordpreventie is er voor je. Op 113.nl kan je direct en anoniem in contact komen met hun hulpverleners."
      }
    ]
  },
  {
    "slug": "dwangstoornis",
    "titel": "Dwangstoornis",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/dwangstoornis",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_dwangstoornis",
    "intro": "Een dwangstoornis wordt ook wel een obsessieve-compulsieve stoornis genoemd. Iemand met een dwangstoornis heeft last van dwanggedachten (obsessies) en/of dwanghandelingen (compulsies). Hoewel je vaak weet dat het overdreven is, probeer je gevoelens van angst of dwanggedachten te verminderen door steeds dezelfde handelingen of regels uit te voeren. Bijvoorbeeld heel vaak checken of de deur wel op slot is als je het huis uitgaat of voortdurend je handen wassen uit angst om ziek te worden. Of altijd tot 20 moeten tellen, voordat je het verkeer ingaat, omdat je denkt dat anders een familielid een ongeluk krijgt. Mensen met een dwangstoornis zijn vaak veel tijd kwijt met de gedachten en handelingen en hebben moeite met het dagelijkse leven. Op deze pagina krijg je tips die je kunnen helpen bij het omgaan met een dwangstoornis.",
    "blokken": [
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Heb jij klachten die (mogelijk) passen bij een dwangstoornis? Blijf er niet mee rondlopen als je er last van hebt. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp of begeleiding. Bedenk dat je er niet alleen voor staat. Samen kan en weet je meer. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je indien nodig doorverwijzen. Heb je een dwangstoornis en het gevoel dat het niet goed gaat? Blijf er ook dan niet mee rondlopen. Neem contact op met jouw hulpverlener."
      },
      {
        "kop": "Krijg inzicht in de dwangstoornis"
      },
      {
        "tekst": "Verdiep je in de achtergronden, de symptomen en de aanpak van de dwangstoornis. Dat helpt je om een beeld te krijgen van het effect dat de dwangstoornis op jouw leven heeft. Je krijgt zo inzicht in manieren om hier zo goed mogelijk mee om te gaan. Ook kan je voor jezelf in kaart brengen wat jouw angstgevoelens zijn en welke dwanghandelingen je vervolgens uitvoert. Op onze website vind je meer informatie over een dwangstoornis. Er zijn ook goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho-educatie aangeboden. Je krijgt dan informatie en voorlichting over een dwangstoornis."
      },
      {
        "kop": "Geef niet toe"
      },
      {
        "tekst": "Probeer zo weinig mogelijk toe te geven aan de dwanggedachten en dwanghandelingen. Ga de situaties waar je bang voor bent zo min mogelijk uit de weg. Stel je erop in dat je spanning gaat ervaren en lichamelijke verschijnselen als je geen dwanghandelingen uitvoert. Bedenk je dat deze lichamelijke verschijnselen en onrust na een tijdje zullen afnemen. Zo verminder je de angst voor bepaalde situaties en bouw je vertrouwen op dat je om kan gaan met dingen die je spannend vindt. Let er wel op dat het je niet te veel stress geeft."
      },
      {
        "kop": "Verander je gedachten"
      },
      {
        "tekst": "De manier waarop we denken, bepaalt hoe we ons voelen en hoe we ons gedragen. Cognitieve gedragstherapie is een vorm van psychotherapie die vaak wordt ingezet bij een dwangstoornis. Deze behandeling helpt je onder andere inzicht te krijgen in je denkpatronen: je onderzoekt hoe je gedachten samenhangen met je gevoelens en gedrag. Vervolgens leer je hoe je gedachten die ongewenste gevoelens geven om kan buigen naar gedachten die wél gewenste gevoelens met zich meebrengen. Ga bij jezelf na in welke situaties je bang bent en welke (dwang)gedachten je dan hebt. Zijn deze gedachten realistisch? Zou je deze gedachten kunnen vervangen door meer realistische of helpende gedachten waar je niet bang van wordt? Wij schreven oefeningen om je gedachten helpend te maken."
      },
      {
        "kop": "Bouw structuur in je dag"
      },
      {
        "tekst": "Zorg voor een duidelijke structuur in je dagindeling. Probeer rond dezelfde tijd op te staan, te eten en te slapen. Ook werk, activiteiten in je vrije tijd of je behandeling kunnen bijdragen aan je dagstructuur. Probeer hierbij goed te voelen wat je aankan."
      },
      {
        "kop": "Slaap!"
      },
      {
        "tekst": "Slaap is heel belangrijk om lichamelijk en mentaal te herstellen. Goede slaap draagt bij aan een uitgerust gevoel waardoor je meer aankan. Maar voor veel mensen is goed slapen niet vanzelfsprekend. Gelukkig kan je van alles doen om beter te slapen. Wil je hiermee aan de slag? Meld je dan aan voor onze Beter Slapen Challenge."
      },
      {
        "kop": "Beweeg, eet en drink gezond"
      },
      {
        "tekst": "Het is algemeen bekend dat bewegen bijdraagt aan een goede gezondheid. Bewegen kan helpen je hoofd leeg te maken en de spanning uit je lichaam te halen. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Wat vind je leuk om te doen? Denk na over slimme combi’s, zoals een rondje wandelen tijdens je lunchpauze of telefoongesprek. Het beste is om hierbij ook minimaal twee keer per week spier- en botversterkende activiteiten te doen. Denk aan fitness of hardlopen. Ben je al wat ouder? Dan is het goed om dit te combineren met balansoefeningen, zoals op één been staan. Lukt het jou niet om zoveel te bewegen? Bedenk je dat iedere stap telt!"
      },
      {
        "tekst": "Probeer ook zo gezond mogelijk te eten, wees matig met cafeïne en drink zo min mogelijk alcohol. Op de korte termijn werkt alcohol ontspannend en is daardoor aantrekkelijk als je je gespannen voelt. Op de lange termijn voel je je beter als je hiermee matigt. Je voelt je fitter en hebt meer energie."
      },
      {
        "kop": "Ontspan"
      },
      {
        "tekst": "Een dwangstoornis gaat vaak gepaard met veel spanning. Het nemen van voldoende momenten van rust en ontspanning is dan extra belangrijk. Bedenk wat jij ontspannend vindt en probeer dit mee te nemen in de indeling van je dag. Sommige mensen hebben veel aan ontspanningsoefeningen. Op onze site vind je meerdere ontspanningsoefeningen."
      },
      {
        "kop": "Je bent niet je stoornis"
      },
      {
        "tekst": "Hoewel de dwangstoornis veel impact op je leven kan hebben, betekent dit niet dat jij de stoornis bent. Natuurlijk maakt het onderdeel van je uit, maar je bent nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Schrijf eens op wat jou allemaal jou maakt. Dat kunnen hele eenvoudige dingen zijn. Iemand die gek is op lezen of sporten of… vul maar in. Je krijgt zo inzicht en dit kan je helpen op momenten dat je dit even kwijt bent."
      },
      {
        "kop": "Deel je ervaringen"
      },
      {
        "tekst": "Betrek de belangrijkste mensen in je leven door met ze te praten over je dwangstoornis. Praten lucht vaak op en zo kunnen ze je beter begrijpen en steunen. Vind je dit lastig? Of kan je hier wel wat tips bij gebruiken? Wij schreven uitgebreide tips om te praten over hoe je je voelt."
      },
      {
        "tekst": "Ook kan het heel fijn en steunend zijn om herkenning te vinden bij anderen. Door echt te ervaren dat je niet de enige bent. Anderen kunnen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Op de website van de ADF stichting vind je meer informatie over lotgenotencontact. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "eenzaamheid",
    "titel": "Eenzaamheid",
    "onderwerp": "Somberheid",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/eenzaamheid",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_eenzaamheid",
    "intro": "Ieder mens voelt zich wel eens eenzaam. Je mist mensen om je heen en voelt je verdrietig en leeg. Het is geen fijn gevoel, maar na een poosje verdwijnt dit gevoel meestal weer. Veel mensen voelen zich regelmatig eenzaam. We noemen het emotionele eenzaamheid als je een hechte band mist met één of meerdere mensen. Denk aan een familielid, partner of hartsvriend. En sociale eenzaamheid als je minder contact hebt met anderen dan dat je zou willen. Je sociale netwerk is dan kleiner dan je wenst.",
    "blokken": [
      {
        "tekst": "Eenzaamheid is een persoonlijk gevoel. Heb jij niet veel mensen om je heen en voel jij je daar prima bij? Dan ben je misschien vaker alleen of op jezelf, maar dat betekent niet dat je eenzaam bent. Heb jij last van eenzaamheid en zoek je handvatten om deze gevoelens te verminderen? Op deze pagina hebben we verschillende tips op een rijtje gezet, waarmee jij aan de slag kan."
      },
      {
        "kop": "Je bent niet de enige!"
      },
      {
        "tekst": "Je denkt misschien dat jij een van de weinige mensen bent die zich eenzaam voelt. Maar niks is minder waar! Want wist je dat bijna de helft van de mensen in Nederland zich eenzaam voelt? Je bent dus niet alleen hierin. Ook niet als je jong bent of al op oudere leeftijd. Het komt namelijk voor bij alle leeftijden. Veel mensen zullen je hierin dus juist begrijpen, ook al laten ze dat misschien niet direct merken. Zo kan achter de mooie plaatjes op social media een eenzaam persoon zitten. Of achter die oudere man die altijd vriendelijk naar je lacht. En merken andere mensen het eigenlijk wel aan jou?"
      },
      {
        "kop": "Krijg inzicht in jouw gevoelens van eenzaamheid"
      },
      {
        "tekst": "Ook al voelen veel mensen zich eenzaam, de redenen waarom iemand zich eenzaam voelt verschillen van persoon tot persoon. Inzicht krijgen in je eigen eenzaamheid helpt je ermee om te gaan en het aan te pakken. Stel jezelf bijvoorbeeld de vraag: Mis ik mensen om me heen of gaat het vooral om het gemis van een diepgaande band met iemand? En: Hoe komt het dat ik last heb van eenzaamheid? Vind je het bijvoorbeeld lastig om contacten te leggen, heb je weinig tijd voor sociale contacten, is het moeilijk te combineren met je studie/werk, de zorg voor kinderen of heb je weinig financiële mogelijkheden om eropuit te gaan? Of ben je teleurgesteld in andere mensen of heb je een negatief zelfbeeld? Ook kan het zijn dat je door een lichamelijke ziekte of psychische klachten beperkt bent in je mogelijkheden. Zomaar wat voorbeelden, maar hoe zit dit bij jou? Inzicht in mogelijke oorzaken geeft je meer duidelijkheid in wat je nodig hebt om gevoelens van eenzaamheid te verminderen."
      },
      {
        "kop": "Jij bent aan zet"
      },
      {
        "tekst": "Nu je inzicht hebt in wat oorzaken kunnen zijn, is het goed om stil te staan bij de vraag: Wat zou ik kunnen doen om verandering te brengen in mijn leven_? Het is natuurlijk zo dat niet alles kan, maar het helpt om te kijken wat er wel past binnen je mogelijkheden. Sta dus open om jezelf hierin te ontwikkelen. Onderstaande tips helpen je hierbij op weg."
      },
      {
        "kop": "Bouw een sociaal netwerk op"
      },
      {
        "tekst": "De meeste mensen voelen zich het prettigst als ze een divers netwerk hebben met zowel mensen met wie ze een emotionele band hebben als minder diepgaande contacten. Denk aan een mix van familie, goede vrienden, kennissen, studiegenoten/collega’s en buren."
      },
      {
        "tekst": "Onthoud dat het nooit te laat is om nieuwe mensen te leren kennen. Ook niet als je al wat ouder bent. Het contact met andere mensen begint al klein; groet de mensen uit de buurt als je ze tegenkomt. Ook als jij de eerste bent die dat doet. En meld je bijvoorbeeld aan bij een hobby of sportvereniging. Of ga vrijwilligerswerk doen waardoor je nieuwe mensen leert kennen. Het geeft vaak een fijn gevoel om er voor anderen te kunnen zijn. Kijk ook eens online naar de mogelijkheden om nieuwe mensen te ontmoeten. Op de webpagina van Eén tegen eenzaamheid van het ministerie van VWS vind je tips en activiteiten om meer contact te maken."
      },
      {
        "tekst": "Heb je psychische klachten en ben je op zoek naar gelijkgestemden? Via het Connect portaal kan je ervaringen uitwisselen met mensen met dezelfde interesses."
      },
      {
        "tekst": "Heb jij wel mensen om je heen, maar zou je het contact willen verbeteren? Nodig mensen uit langs te komen of om samen iets te ondernemen. Door dingen met elkaar te delen en elkaar te helpen kan een band zich versterken. Wees daarom open en praat over de dingen die je bezighouden. En luister met aandacht naar de verhalen van de ander."
      },
      {
        "kop": "Stel je verwachtingen bij en verander je gedachten"
      },
      {
        "tekst": "Als jij je eenzaam voelt, kan het geen kwaad om eens naar je verwachtingen te kijken die je hebt. Verwacht je bijvoorbeeld dat mensen naar jou toe komen, terwijl je zelf niet vaak van je laat horen, dan is dat niet erg realistisch. Of dat een diepgaande relatie binnen een paar weken ontstaat. Het bijstellen van je verwachtingen, voorkomt teleurstelling en helpt hiermee gevoelens van eenzaamheid tegen te gaan."
      },
      {
        "tekst": "Naast het bijstellen van je verwachtingen kan het helpen om je eigen gedachten eens onder de loep te nemen. Grote kans dat je gedachten je niet helpen om je minder eenzaam te voelen. Een voorbeeld van een niet-helpende gedachte is: \"Ik zal altijd eenzaam blijven\" of \"Ik ga niet naar die verjaardag, de andere gasten zullen mij toch niet aardig vinden\" . Deze gedachten zorgen voor gevoelens die niet fijn zijn en ze brengen je niet verder. Helpende gedachten kunnen zijn: \"Er zijn veel dingen die ik kan doen om mij minder eenzaam te voelen\" en: \"Er zal altijd wel iemand zijn die mij aardig vindt, al is het er maar één\"_. Waarschijnlijk voel jij je veel beter als je dit soort gedachten hebt. We noemen dit dan ook helpende gedachten. Wil jij aan de slag met het maken van helpende gedachten? Wij schreven twee oefeningen."
      },
      {
        "kop": "Werk aan een positief zelfbeeld en sociale vaardigheden"
      },
      {
        "tekst": "Denk jij vaak negatief over jezelf, leg je moeilijk contact of heb je moeite contacten vast te houden? In het geval van eenzaamheid is het vaak zo dat je positiever over jezelf gaat denken als je iets doet waar anderen je waardering voor geven. Denk hierbij weer aan het doen van bijvoorbeeld vrijwilligerswerk. Maar het kan ook iets zijn waar je goed in bent of wat je graag doet en wat door anderen gezien en gewaardeerd wordt. Daarnaast zijn er trainingen om te werken aan een positief zelfbeeld of sociale vaardigheden. Op de website Eén tegen eenzaamheid vind je meer informatie en linkjes naar cursussen en trainingen die je helpen sociaal contact te leggen."
      },
      {
        "kop": "Accepteer dat je je eenzaam kan voelen"
      },
      {
        "tekst": "Het klinkt misschien dubbel, maar door te accepteren dat jij hier last van hebt, zal je leren er beter mee om te gaan. Hiermee bedoelen we niet dat je gaat afwachten en niets meer onderneemt om je minder eenzaam te voelen. Maar door op een milde, niet-oordelende manier naar jouw eenzaamheid te kijken, zal je merken dat het een minder grote rol gaat spelen in je leven."
      },
      {
        "kop": "Doe dingen die je leuk vindt"
      },
      {
        "tekst": "Ga eropuit, bedenk activiteiten die je leuk vindt om te doen. Dit kunnen kleine dingen zijn en hoeven niet veel geld te kosten, zoals een rondje wandelen in de natuur, sporten of een lekker gerecht koken. Het mag alles zijn als jij het maar leuk vindt. Dingen doen die je fijn vindt of waarvan je energie krijgt, zorgt voor afleiding van je eenzame gevoelens. Probeer daarom iedere dag minimaal één van die dingen te doen. En wie weet ontdek je ook wel nieuwe leuke mensen, die dezelfde interesses delen."
      },
      {
        "tekst": "Weet je niet zo goed wat je leuke activiteiten vindt? Ga op onderzoek uit. Alleen door het te doen, leer je wat je wel en niet leuk vindt. Wie weet verras je jezelf wel met iets wat je van tevoren nooit had kunnen bedenken."
      },
      {
        "kop": "Ga bewegen"
      },
      {
        "tekst": "Een goede manier om even niet bezig te zijn met je eenzame gevoel is bewegen. Het liefst in de buitenlucht. Bewegen helpt je hoofd leeg te maken en dingen van een andere kant te bekijken. Daarnaast is het natuurlijk erg goed voor zowel je lichamelijke als mentale gezondheid."
      },
      {
        "tekst": "Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren."
      },
      {
        "tekst": "Vind je het lastig om voldoende te bewegen, bijvoorbeeld omdat je niet zo sterk bent of omdat je lichamelijke klachten hebt? Bedenk dat in jouw eigen tempo een rondje om ook telt!"
      },
      {
        "kop": "Breng structuur in je dag"
      },
      {
        "tekst": "Sta op tijd op, eet op vaste tijden en ga op tijd naar bed. Probeer zo veel mogelijk dezelfde tijden aan te houden. Structuur zorgt voor houvast en overzicht. Het helpt je ervoor te zorgen dat de eenzaamheid niet de overhand krijgt."
      },
      {
        "kop": "Zoek professionele hulp als dat nodig is"
      },
      {
        "tekst": "Zitten de gevoelens van eenzaamheid jouw dagelijkse leven heel erg in de weg? Kom je bijvoorbeeld steeds minder je huis uit, zorg je minder goed voor jezelf of beleef je geen plezier meer aan dingen? Zoek dan professionele hulp. De eerste stap om professionele hulp te vragen is een afspraak bij de huisarts. De huisarts kijkt samen met jou naar wat je zou kunnen helpen. Vind je dit een lastige stap? Bedenk je dat de huisarts dagelijks te maken krijgt met dit soort dingen."
      }
    ]
  },
  {
    "slug": "eetstoornis",
    "titel": "Eetstoornis",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/eetstoornis",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_eetstoornis",
    "intro": "Als je een eetstoornis hebt dan houd je je veel bezig met eten, je gewicht en het beeld dat je van je lichaam hebt. Er zijn verschillende eetstoornissen en iedereen ervaart het op een eigen manier. Een eetstoornis heeft veel invloed op meerdere gebieden van je leven. Het heeft meestal lichamelijke gevolgen, zoals gewichtsverlies of gewichtstoename, vermoeidheid en hartproblemen. De meeste mensen met een eetstoornis ervaren problemen met werk of school en met hun sociale leven. Vaak zijn er onderliggende problemen die de stoornis veroorzaken of in stand houden.",
    "blokken": [
      {
        "tekst": "In deze online gids krijg je tips die je helpen met deze stoornis om te gaan."
      },
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Heb jij klachten die (mogelijk) passen bij een eetstoornis? Blijf er niet mee rondlopen. Ook al lijkt jouw eetstoornis nog niet zo erg te zijn of ervaar jij niet alle symptomen, ook jij verdient hulp. Een eetstoornis is manipulatief en wil jou graag doen geloven dat je geen hulp nodig hebt, terwijl dit wel het geval is."
      },
      {
        "tekst": "Neem iemand in je omgeving in vertrouwen waarbij jij je veilig voelt, zoals familie of vrienden. Vind je dat lastig? Lees dan deze tips van Stichting Kiem. En zoek altijd professionele hulp! Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je doorverwijzen. Vraag, als je dat fijn vindt, degene die je in vertrouwen hebt genomen om met je mee te gaan."
      },
      {
        "tekst": "Heb je een eetstoornis en gaat het niet goed? Blijf er ook dan niet mee rondlopen! Neem contact op met jouw hulpverlener en de mensen die je in vertrouwen hebt genomen."
      },
      {
        "kop": "Krijg inzicht in je eetstoornis"
      },
      {
        "tekst": "Er bestaan verschillende soorten eetstoornissen. Door je te verdiepen in de achtergronden, de symptomen en de aanpak van een eetstoornis, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over eetstoornissen. Ook op de website van WEET, de Nederlandse patiëntenvereniging voor eetstoornissen, vind je uitgebreide informatie. Daarnaast zijn er goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho- educatie aangeboden. Je krijgt dan informatie en voorlichting over de eetstoornis."
      },
      {
        "kop": "Houd een eetdagboek bij"
      },
      {
        "tekst": "Schrijf in een notitieboekje precies per dag op wanneer je wat gegeten en gedronken hebt. Dit noemen we een eetdagboek. Noteer het ook wanneer je bijvoorbeeld een maaltijd oversloeg of een eetbui had. Schrijf op welke gevoelens en gedachten je bij het (niet) eten en drinken had. En wat eraan voorafging toen je een maaltijd oversloeg of een eetbui had. Probeer dit zo eerlijk mogelijk te doen, ook al vind je het confronterend. Zo krijg je meer inzicht in je eetgedrag en wordt het duidelijker waarbij je hulp nodig hebt."
      },
      {
        "kop": "Je bent niet de enige!"
      },
      {
        "tekst": "Jouw klachten kunnen ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Onthoud dat je niet de enige bent! Er lopen heel veel mensen rond met een eetstoornis. Je hoeft je dus absoluut niet te schamen dat jij hier last van hebt."
      },
      {
        "kop": "Deel je ervaringen"
      },
      {
        "tekst": "Zoek contact met lotgenoten, want het is heel steunend echt te ervaren dat je niet de enige bent. Voor veel mensen is het fijn om herkenning te vinden bij anderen. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Lotgenoten vind je bijvoorbeeld via WEET, de Nederlandse patiëntenvereniging voor eetstoornissen. Of kijk of er een herstelhuis is bij jou in de omgeving. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "kop": "Je bent niet de eetstoornis"
      },
      {
        "tekst": "Hoewel de eetstoornis jouw leven wil bepalen en je hier elke dag last van hebt, betekent dit niet dat jij de stoornis bent! Natuurlijk maakt de stoornis onderdeel van je uit, maar je bent nog zoveel meer. Bijvoorbeeld een dochter/ zoon of vriend/vriendin. Schrijf eens op wat jou allemaal jou maakt. Dat kunnen hele eenvoudige dingen zijn. Iemand die gek is op lezen of sporten of… vul maar in. Je krijgt zo inzicht en dit is fijn op momenten dat je dit even kwijt bent."
      },
      {
        "kop": "Probeer positief te denken en tevreden te zijn met kleine stappen"
      },
      {
        "tekst": "Een eetstoornis heeft veel invloed op je leven. Het kan dan best lastig zijn om positief te blijven denken. Probeer daarom af en toe bewust stil te staan bij dingen die wel goed gaan of fijn zijn. Noteer, een aantal dagen per week, aan het einde van de dag drie dingen die jij fijn vond aan de dag. Dat mogen kleine, simpele dingen zijn. Bijvoorbeeld de vogels die je buiten hoorde fluiten, de leuke film die je hebt gekeken of een kleine stap in je herstel. Geef jezelf iedere dag een complimentje, ook dat mogen kleine dingen zijn."
      },
      {
        "kop": "Accepteer de stoornis"
      },
      {
        "tekst": "Durf de eetstoornis te accepteren. Dat is misschien makkelijker gezegd dan gedaan en het is logisch dat dit niet van de ene op de andere dag lukt. Maar juist door te aanvaarden dat je hier last van hebt, zal je er beter mee om leren gaan. Probeer je dus niet te verzetten tegen je stoornis en alles wat daarbij hoort. Een milde, niet-oordelende houding geeft ruimte om op een andere manier om te gaan met klachten, zodat ze een minder grote rol gaan spelen in je leven. Mindfulness is een training die hierbij helpt. Wij schreven een online gids met oefeningen voor thuis."
      },
      {
        "kop": "Slaap!"
      },
      {
        "tekst": "Slaap is heel belangrijk om je lichaam en geest te herstellen. Goede slaap draagt bij aan een uitgerust en fit gevoel. En als je uitgerust bent, kan je meer aan. Gelukkig kan je veel doen om goed te slapen. Van het afbouwen van je activiteitenniveau tot je slaapkamer goed ventileren voordat je gaat slapen. Wil je aan de slag om beter te leren slapen? Meld je dan aan voor onze Beter Slapen Challenge_."
      },
      {
        "kop": "Zorg voor ritme"
      },
      {
        "tekst": "Zorg voor een duidelijke structuur in je dagindeling. Structuur zorgt voor houvast en overzicht en zo bespaar je energie. Probeer rond dezelfde tijd op te staan, te eten en te slapen. Daarnaast kunnen school of werk, activiteiten in je vrije tijd of je behandeling bijdragen aan je dagstructuur. Probeer hierbij goed te voelen wat je aankan."
      },
      {
        "kop": "Ontspan en doe leuke dingen"
      },
      {
        "tekst": "Het nemen van voldoende rust en ontspanning werkt vaak om negatieve gevoelens te verminderen. Bedenk wat jij ontspannend vindt en plan dit in op je dag. Voor de een is dit een wandeling in het bos, voor de ander is dat een avondje bioscoop. Sommige mensen hebben veel aan ontspanningsoefeningen. We hebben een uitgebreide pagina met verschillende soorten ontspanningsoefeningen."
      }
    ]
  },
  {
    "slug": "eetstoornis-naasten",
    "titel": "Eetstoornis in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/eetstoornis-naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_eetstoornis_naasten",
    "intro": "Mensen met een eetstoornis houden zich veel bezig met eten, hun gewicht en hun lichaamsbeeld. Er zijn verschillende eetstoornissen en iedereen ervaart het op een eigen manier. Een eetstoornis heeft veel invloed op meerdere gebieden van het leven. Het heeft meestal lichamelijke gevolgen, zoals gewichtsverlies of gewichtstoename, vermoeidheid en hartproblemen. De meeste mensen met een eetstoornis ervaren problemen met werk of school en met hun sociale leven. Vaak zijn er onderliggende problemen die de eetstoornis veroorzaken of in stand houden.",
    "blokken": [
      {
        "tekst": "In deze online gids krijg je tips die je helpen bij de omgang met een naaste met een eetstoornis en tips hoe je zelf overeind blijft."
      },
      {
        "kop": "Herken een eetstoornis"
      },
      {
        "tekst": "Twijfel jij of jouw naaste last heeft van een eetstoornis? Bedenk je dat een eetstoornis niet altijd zichtbaar is door ander eetgedrag of gewicht dat verandert. Dit maakt het soms best lastig om een eetstoornis bij iemand in je omgeving te herkennen. Ook komt het voor dat mensen die eraan lijden, niet weten dat ze last hebben van een eetstoornis. Of dat ze het verborgen houden voor hun omgeving. Veel mensen denken dat alleen meisjes en vrouwen een eetstoornis kunnen krijgen, terwijl ook jongens en mannen hieraan lijden. Wil jij weten waar je een eetstoornis nog meer aan herkent? Lees dan deze informatie van WEET, de Nederlandse patiëntenvereniging voor eetstoornissen."
      },
      {
        "kop": "Maak het bespreekbaar"
      },
      {
        "tekst": "Praat met jouw naaste over wat je opvalt. Doe dit op een rustig moment en niet tijdens, voor of direct na het eten. Vertel dat je je zorgen maakt en vraag of je ergens bij kan helpen. Vraag hoe de ander zich voelt en heb het niet alleen over het (niet) eten. Het heeft vaak geen zin om met iemand met een eetstoornis in discussie te gaan over hoe diegene eruitziet of wat diegene zou moeten eten. Jouw argumenten komen vaak niet binnen of worden verkeerd begrepen. Het is ook belangrijk om te letten op wat je zegt. Als iemand bijvoorbeeld weer aan het aankomen is, is het niet handig om opmerkingen te maken over ‘hoe gezond of mooi de ander er (weer) uitziet.’ Dit wordt juist vaak begrepen als: \"Ik ben weer dik.\""
      },
      {
        "kop": "Krijg inzicht in de eetstoornis"
      },
      {
        "tekst": "Bedenk je dat een eetstoornis vaak niet over eten gaat. Op onze website vind je meer informatie over eetstoornissen. Ook zijn er goede boeken met betrouwbare informatie. Hoewel een stoornis zich bij iedereen weer anders uit, leer je door je te verdiepen in de achtergronden, de symptomen en de aanpak meer over wat het inhoudt. Hierdoor begrijp je het wat beter en dit leert je ermee om te gaan. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over de eetstoornis en tips en handvatten over hoe ermee om te gaan. Vaak is er ruimte om ervaringen uit te wisselen. Bekijk ook eens het aanbod voor naasten van Stichting Kiem."
      },
      {
        "kop": "Ga niet controleren"
      },
      {
        "tekst": "Uit zorg en liefde voor jouw naaste, houd jij misschien het eetgedrag in de gaten en probeer je hier controle over te krijgen. Doe dit niet en dwing iemand nooit om te eten. Hoe goed je bedoelingen ook zijn, in plaats van dat de klachten hierdoor verminderen werkt dit juist averechts. Bied in plaats daarvan een open niet oordelende houding, zodat de ander je in vertrouwen durft te nemen en ruimte voelt erover te praten."
      },
      {
        "kop": "Geef het goede voorbeeld"
      },
      {
        "tekst": "Probeer zelf het goede voorbeeld te geven. Zo helpt het niet als je zelf gaat diëten. Praat ook niet veel over afvallen en je onzekerheden over je eigen lijf."
      },
      {
        "kop": "Vermijd de stoel van hulpverlener"
      },
      {
        "tekst": "Als je merkt dat je naaste het moeilijk heeft, kan je geneigd zijn te willen helpen met oplossingen, tips en adviezen. Onthoud dat de ander zich waarschijnlijk veel beter gehoord voelt als jij in plaats daarvan écht luistert. Neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van broer, vriendin of partner."
      },
      {
        "kop": "Bedenk dat iemand niet de eetstoornis is"
      },
      {
        "tekst": "Hoewel een eetstoornis veel impact op iemands leven heeft, betekent dit niet dat diegene de stoornis is. Natuurlijk maakt de stoornis onderdeel van die persoon uit, maar de ander is nog zoveel meer. Bijvoorbeeld een dochter of zoon, moeder of vader. Spreek dit ook af en toe uit. Besteed ook aandacht aan zaken die goed gaan. Zo blijven jullie oog houden voor het positieve. En doe leuke dingen samen die niets met eten te maken hebben, zodat je goed contact houdt met elkaar."
      },
      {
        "kop": "Stel verwachtingen bij en accepteer"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet vanuit dat een behandeling alles snel ‘oplost’. Vaak gaat het om een langer proces met vallen en opstaan. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op de schouders van de ander. Jouw naaste kan (tijdelijk) veranderen door de eetstoornis. Daar mag je verdrietig om zijn. Probeer te accepteren dat jij niet altijd iets kan doen. Soms is er voor die ander zijn al genoeg."
      },
      {
        "kop": "Heb aandacht voor (andere) kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met een eetstoornis jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun broer/zus of vader/moeder aan de hand is. Vertel je kinderen dat dit niet door hen komt. Uitleg draagt bij aan het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Probeer het onderwerp bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning. Blijf met het hele gezin leuke dingen ondernemen en heb aandacht voor de verhalen en behoeftes van je kinderen. Zo zorg je ervoor dat niet alles om de eetstoornis draait."
      },
      {
        "kop": "Zorg goed voor jezelf en geef je grenzen aan"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Want als jij je goed voelt, lukt het je beter er voor de ander te zijn. Cijfer jezelf niet weg en blijf leuke dingen doen waardoor je energie krijgt en je ontspant. Ontspanningsoefeningen kunnen hierbij fijn zijn. Onderhoud ook het contact met anderen. Af en toe erover praten lucht vaak erg op. Betrek als het even lukt (andere) familie en vrienden bij de zorg voor je naaste. Bij het goed zorgen voor jezelf hoort ook het aangeven van waarbij je wel en niet kan helpen. Vind je dat lastig? Wij maakten een online gids met tips om je grenzen te leren kennen en aan te geven. Heb jij het door de situatie moeilijk? Aarzel dan niet om professionele hulp te zoeken. Maak een afspraak bij jouw huisarts. De huisarts kan je ondersteunen om op de been te blijven, je adviezen geven over hoe je het beste voor je naaste zorgt en je doorverwijzen voor passende hulp als dat nodig is."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt meestal voor erkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn met een naaste met een eetstoornis. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat ze iets soortgelijks al eens eerder hebben meegemaakt. Naasten Centraal biedt verschillende vormen van lotgenotencontact, zoals gespreksgroepen, Facebookgroepen, mailondersteuning en telefonische ondersteuning voor een luisterend oor. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "examenstress",
    "titel": "examenstress (jongeren)",
    "onderwerp": "Stress",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/examenstress",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_examenstress",
    "intro": "De examenperiode is spannend. Het is normaal om zenuwachtig voor je examens te zijn. Een beetje spanning is juist gezond en helpt je om goed te presteren. Maar soms kan de stress je te veel worden. Gelukkig kan je daar iets aan doen.",
    "blokken": [
      {
        "tekst": "Op deze pagina geven we je acht praktische tips."
      },
      {
        "kop": "Denk helpende gedachten"
      },
      {
        "tekst": "Door de spanning denk je misschien: “Ik kan dit niet!” of “Laat dat hele examen maar zitten!”_. Herken deze gedachten bij jezelf en zet er andere gedachten tegenover, gedachten die je helpen in plaats van je in de weg zitten. Bijvoorbeeld:"
      },
      {
        "lijst": [
          "“Ik heb me goed voorbereid”",
          "“Net een voldoende is ook prima”",
          "“Ik heb eerder lastige dingen gehaald, dit lukt me ook”"
        ]
      },
      {
        "tekst": "Schrijf deze helpende gedachten op post-its en hang ze rond je spiegel of zet ze in je agenda, zodat je hier elke dag aan herinnerd wordt."
      },
      {
        "tekst": "Je gedachten aanpassen, lukt niet altijd meteen en ook verandert het gevoel niet altijd gelijk. Hiervoor moet je de oefening vaak herhalen. Wees aardig tegen jezelf als het niet lukt."
      },
      {
        "kop": "Rust is belangrijk"
      },
      {
        "tekst": "Ga op tijd slapen en blok niet de hele nacht door. Je brein werkt beter als je uitgerust bent. Sta op tijd op, ontbijt rustig en vertrek op tijd naar je examen. Als je gestrest bent, werkt je geheugen slechter. Rust helpt je om beter te denken en te onthouden. Hulp hierbij nodig? Op de website van MIND vind je oefeningen die je helpen ontspannen."
      },
      {
        "kop": "Zenuwen zijn normaal"
      },
      {
        "tekst": "Het helpt meestal niet om tegen jezelf te zeggen dat je rustig moet blijven. Zeg liever: “Het is oké dat ik zenuwachtig ben.” Voel aan het begin van je examen even de zenuwen en spanning, adem rustig en begin. Voel je na elk half uur nog steeds spanning of angst? Neem een paar minuten om dit te voelen, let op je ademhaling en ga weer verder. Komen de zenuwen binnen een half uur terug. Zeg dan: “Even wachten, ik voel je straks weer.”"
      },
      {
        "kop": "Herken rampgedachten en probeer ze te stoppen"
      },
      {
        "tekst": "Soms maak je in je hoofd van iets kleins iets groots: “Ik heb geen pen bij me, dus kan ik niets opschrijven, dus zak ik voor mijn examen.” Zodra je merkt dat je een rampgedachte hebt, probeer deze gedachten uit te dagen en vraag je jezelf af: “Is dit echt waar? Klopt het wat ik denk?” Daarna zoek je naar een oplossing: “Kan ik een pen lenen?”"
      },
      {
        "tekst": "Nu klinkt dit veel gemakkelijker dan dat het vaak is. Het veranderen van je gedachten lukt vaak niet van de ene op de andere dag. Maar als je hiermee oefent, zal je zien dat je er steeds een beetje beter in wordt. Kan je hier wel wat hulp bij gebruiken? Doe dan onze oefeningen om je gedachten helpend te maken."
      },
      {
        "kop": "Wees aardig voor jezelf"
      },
      {
        "tekst": "Schrijf wat successen op van de afgelopen tijd: een goed cijfer, gescoord bij voetbal of een nieuwe vriend gemaakt. Neem het mee naar je examen. Lees voordat je begint aan je examen het dan nog eens. Dat helpt je herinneren wat je allemaal kan."
      },
      {
        "kop": "Check hoe gespannen je bent"
      },
      {
        "tekst": "Geef je stress een cijfer tussen 0 en 100 procent. Train jezelf erin om af en toe te controleren wat je stressniveau is. Zo leer je je spanning herkennen. Merk je dat het cijfer omlaag gaat, dan weet je: het wordt rustiger. Je kan ook zo zien welke dingen je helpen om je stress te verlagen. Bijvoorbeeld even wandelen of diep ademhalen."
      },
      {
        "kop": "Wees voorzichtig met alcohol en energiedrank"
      },
      {
        "tekst": "Drink in de examentijd liever geen alcohol en weinig koffie, thee of energiedrank. Alcohol en cafeïne lijken je even te helpen, maar daarna voel je je juist moe of sloom en je droogt ervan uit. Als je stopt of mindert, kan je beter slapen en helderder denken. Precies wat je nodig hebt tijdens je examens."
      },
      {
        "kop": "Vertrouw op jezelf"
      },
      {
        "tekst": "Zonder je vlak voor jouw examen af van jouw klas- of studiegenoten als je merkt dat zij stress ervaren of de examenstof nog aan het doornemen zijn. Zoek een rustig plekje op en vertrouw op jezelf. Probeer ook niet steeds je socials te checken. Vergelijk jezelf niet met anderen. Jij doet het op jouw manier, en dat is goed genoeg."
      },
      {
        "tekst": "Veel succes met je examens!"
      }
    ]
  },
  {
    "slug": "examenstress-ouders",
    "titel": "examenstress (ouders)",
    "onderwerp": "Stress",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/examenstress-ouders",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_examenstress_ouders",
    "intro": "De examenperiode is spannend: niet alleen voor je kind, maar vaak ook voor jou als ouder. Een beetje spanning is normaal en hoort erbij. Maar soms wordt de stress te groot en helpt het niet meer. Gelukkig kan je als ouder helpen het wat lichter te maken.",
    "blokken": [
      {
        "tekst": "Op deze pagina geven we je acht tips om je kind te steunen tijdens de examens."
      },
      {
        "kop": "Geef je kind de ruimte"
      },
      {
        "tekst": "Vraag niet steeds hoe het ging of hoeveel vragen goed waren. Dat kan druk geven. Toon belangstelling, maar geef je kind ook de ruimte om zelf te vertellen wanneer het daar behoefte aan heeft. Zeg bijvoorbeeld: “Als je erover wilt praten, luister ik graag.”"
      },
      {
        "kop": "Houd het rustig thuis"
      },
      {
        "tekst": "Een ontspannen sfeer helpt je kind om te herstellen na een studiedag. Zorg dat het thuis rustig is en er niet te veel prikkels of afspraken tegelijk zijn. Stel grote etentjes of feesten even uit, zodat je kind zich beter kan concentreren. Maar houd wel ruimte voor ontspanning en gezelligheid samen."
      },
      {
        "kop": "Wees er gewoon"
      },
      {
        "tekst": "Laat merken dat je er bent. Spreek van tevoren af dat je af en toe even komt inchecken als jouw kind aan het studeren is op de kamer. Je kan dan bijvoorbeeld een kop thee voor jouw kind meenemen. Maar doe ondertussen ook je eigen dingen. Dat zorgt voor een fijne balans tussen steun geven en ruimte laten."
      },
      {
        "kop": "Vertel wat er speelt, maar zeg dat jij het oplost"
      },
      {
        "tekst": "Kinderen voelen spanningen vaak goed aan. Helemaal verbergen hoeft dus niet. Je kan best kort benoemen dat je een drukke dag had of iets lastig vindt, zolang je duidelijk maakt dat jij het zelf oplost. Bijvoorbeeld door te zeggen: “Maak je geen zorgen om mij, ik red me wel!” Zo geef je het goede voorbeeld: gevoelens zijn oké, maar je laat zien dat je ermee om kan gaan."
      },
      {
        "kop": "Deel niet te veel over vroeger"
      },
      {
        "tekst": "Vertel gerust dat jij vroeger ook zenuwachtig was, maar houd het kort. Je kind heeft nu meer aan jouw steun dan aan verhalen over hoe het toen bij jou ging."
      },
      {
        "kop": "Zorg goed voor je kind"
      },
      {
        "tekst": "Kleine dingen maken verschil: een gezonde maaltijd, even samen lachen of helpen herinneren om pauze te nemen. Zo laat je merken dat je er bent, zonder te veel nadruk op de examens te leggen. Je kan ook vragen waar je kind behoefte aan heeft tijdens de examenperiode en kijken of je daar iets in kan betekenen."
      },
      {
        "kop": "Zorg voor een fijne plek"
      },
      {
        "tekst": "Zorg voor een goede studeerplek voor je kind, die opgeruimd en rustig is. Vraag wat jouw kind prettig vindt. De een werkt graag in stilte, de ander met wat muziek op."
      },
      {
        "kop": "Focus niet alleen op dit examen"
      },
      {
        "tekst": "Herinner je kind eraan dat examens belangrijk zijn, maar niet alles bepalen. Een onvoldoende zegt niets over wie je bent of wat je later kan bereiken. Wat telt, is de inzet en het doorzettingsvermogen."
      },
      {
        "tekst": "Succes de aankomende tijd!"
      },
      {
        "tekst": "Tips voor jongeren Wij schreven ook acht tips speciaal voor jongeren die te maken hebben met examenstress. Deel de tips om je kind nog beter te helpen."
      },
      {
        "linkLabel": "Bekijk de tips",
        "linkUrl": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/examenstress"
      }
    ]
  },
  {
    "slug": "faalangst",
    "titel": "Faalangst",
    "onderwerp": "Angst",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/faalangst",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_faalangst",
    "intro": "Faalangst, de naam zegt het al; de angst om te falen. Veel mensen hebben hier wel eens last van. Vaak ontstaat het vanuit hoge verwachtingen van je omgeving of jezelf om te presteren. Of vanuit een laag zelfbeeld. Het kan om meerdere situaties gaan waarin je moet presteren of om een specifieke situatie. Op deze pagina bieden we je tips die je helpen om faalangst aan te pakken.",
    "blokken": [
      {
        "tekst": "Faalangst kan ervoor zorgen dat je niet goed meer helder kan denken of last krijgt van lichamelijke stressverschijnselen, zoals zweten, koude handen, misselijkheid of trillen. Het lastige aan faalangst is dat niet jouw ‘kunnen’, maar je angst om te falen ervoor kan zorgen dat je daadwerkelijk minder presteert of dat je situaties uit de weggaat. Hierdoor blijven je lage zelfbeeld en angst in stand. Gelukkig kan je veel doen om faalangst te verminderen."
      },
      {
        "kop": "Duw je faalangst niet weg"
      },
      {
        "tekst": "Als we nare gevoelens ervaren, zoals de angst om te falen, zijn we vaak geneigd er alles aan te doen om dit niet te voelen. Hoewel dit een logische reactie is, helpt het ons vaak niet verder. De faalangst neemt hierdoor helaas niet af. Duw deze gevoelens en de gedachten daaromheen dus niet weg. Steekt de faalangst de kop op? Probeer een moment stil te staan bij wat je ervaart. Laat alles toe en schiet niet in de ‘doe-stand’ om het weg te werken. Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Je zal merken dat je angst minder overheersend en zwaar wordt, doordat je niet oordeelt over de situatie en deze accepteert zoals het is."
      },
      {
        "tekst": "Lukt het niet meteen? Geen paniek! Het heeft vaak tijd nodig om op een nieuwe manier met situaties om te gaan. Maar door dit regelmatig te doen, zal je ervaren dat je er steeds beter in wordt."
      },
      {
        "kop": "Wees minder kritisch naar jezelf"
      },
      {
        "tekst": "Mensen die last hebben van faalangst stellen vaak hoge eisen aan zichzelf. Op zich is daar niks mis mee, maar het is zonde als ze je in de weg gaan staan. Je bent een mens en geen robot. Ieder mens heeft kwaliteiten en uitdagingen. Wees niet te hard voor jezelf. Gun jezelf uitdagingen te hebben en af en toe de plank mis te slaan. Iedereen doet wel eens iets raars of onhandigs. Iedereen heeft wel eens een slechte dag of maakt een beslissing die achteraf niet zo handig was. Jij dus ook! We kunnen erg streng zijn voor onszelf, terwijl we minder kritisch zijn naar anderen. Het kan helpen om voor jezelf na te gaan wat je tegen een vriend zou zeggen die in een soortgelijke situatie zit en hetzelfde gevoel heeft. Waarschijnlijk zal je zeggen dat deze vriend fouten mag maken. Waarom gun je dat jezelf dan niet?"
      },
      {
        "kop": "Stel je verwachtingen bij"
      },
      {
        "tekst": "Naast minder kritisch zijn op jezelf, kan het ook helpen om de verwachtingen die je van jezelf hebt vooraf bij te stellen. Want waarom moet jouw presentatie altijd helemaal vlekkeloos verlopen? Of waarom moet jij je rijbewijs in één keer halen? Of waarom mag je nooit een onvoldoende halen voor een toets? Door je verwachtingen bij te stellen, leg je minder druk op jezelf waardoor ook je faalangst minder op de voorgrond zal staan. En het grappige is, vaak presteer je dan juist beter."
      },
      {
        "kop": "Maak fouten"
      },
      {
        "tekst": "Het is ook belangrijk dat je het maken van fouten niet altijd voorkomt. Want wist je dat het maken van fouten juist nodig is om je te ontwikkelen? We hebben het dus niet over falen , maar over leren ! Pas op het moment dat iets ‘fout’ loopt, leer je hoe het wel werkt. Door te zoeken naar oplossingen of te luisteren naar feedback van anderen, leer je en pas je dingen aan. Bovendien leidt dit vaak tot nieuwe inzichten en mogelijkheden die je anders niet had gezien. Probeer dus niet krampachtig alles goed te doen, maak fouten en leer ervan."
      },
      {
        "kop": "Verander je gedachten"
      },
      {
        "tekst": "De manier waarop je over dingen denkt, heeft invloed op hoe je je voelt en hoe je je gedraagt. Met andere woorden; als je jouw gedachten helpend maakt, zullen jouw gevoelens waarschijnlijk positief veranderen. Een voorbeeld: je hebt binnenkort een hardloopwedstrijd en hier heb je hard voor getraind. Toch denk je: \"Straks ren ik een slechte tijd. Iedereen denkt vast dat ik een slechte hardloper ben.\" Hierdoor ervaar je angst om te falen. Deze gedachten zijn niet helpend. Het is ook mogelijk anders over de situatie te denken. Bijvoorbeeld: \"Het is niet erg als ik geen toptijd haal. Ik ga mijn best doen, ik heb er sowieso hard voor getraind.\" De situatie blijft precies hetzelfde, maar de kans is groot dat jij je nu een stuk fijner voelt."
      },
      {
        "tekst": "Het kan dus goed zijn te onderzoeken hoe je gedachten samenhangen met je gevoelens en gedrag. Probeer hierna om je negatieve gedachten, die vervelende gevoelens geven, om te buigen naar helpende gedachten die fijne gevoelens geven. Kan je hierbij wel wat hulp gebruiken? Wij schreven oefeningen om aan de slag te gaan met helpende gedachten."
      },
      {
        "kop": "Stop met piekeren"
      },
      {
        "tekst": "Als je last hebt van faalangst, kan je veel nadenken over de situaties waar je bang voor bent. Dit kan overgaan in piekeren, dat veel tijd en energie kost. Probeer piekeren daarom zoveel mogelijk te voorkomen. Merk je dat je gedachten overgaan naar piekeren? Zeg dan STOP tegen jezelf. Dit lijkt misschien vreemd, maar het kan erg effectief zijn. Vervolgens zeg je: \"Op dit moment denk ik aan … (je negatieve gedachte), maar eigenlijk wil ik denken aan… (een nieuwe, positieve gedachte).\" Pieker jij regelmatig en zit het je in de weg? Wij schreven nog meer tips en technieken om piekeren tegen te gaan."
      },
      {
        "kop": "Praat over je angsten"
      },
      {
        "tekst": "Praten over je gevoelens en angsten kan erg opluchten. Bovendien voel je je uiteindelijk sterker als je praat over wat je bezighoudt en waar je last van hebt. Je neemt zo de leiding en hebt het gevoel er iets mee te doen. Blijf er daarom niet in je eentje mee rondlopen en neem iemand in je omgeving, waar jij je prettig bij voelt, in vertrouwen. Bijvoorbeeld een familielid, vriend of collega. De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn. En misschien herkennen anderen zich wel in wat jij ervaart, hebben ze fijne tips of kunnen jullie ervaringen uitwisselen. Ben jij niet zo'n prater of kan je wel wat tips gebruiken? Lees dan onze informatie en adviezen om te praten over hoe je je voelt."
      },
      {
        "kop": "Doe succeservaringen op"
      },
      {
        "tekst": "Ga jij door je faalangst situaties uit de weg? Zonde! Houd onze eerdere tips in je achterhoofd en ga ervoor! Begin eventueel klein, met iets makkelijks, en doe succeservaringen op. Op die manier bouw je aan je zelfvertrouwen en durf je steeds een stapje verder te zetten. Ook helpt het om je vooraf goed voor te bereiden, zodat de kans van slagen groter is en je meer grip ervaart over de situatie."
      },
      {
        "kop": "Meld je aan voor de Chill, je moet al zoveel challenge"
      },
      {
        "tekst": "Ervaar jij weinig ruimte om fouten te maken en voel je druk om te presteren? Meld je aan voor onze uitgebreide Chill, je moet al zoveel challenge met opdrachten en tips om wat relaxter door het leven te gaan. De onderwerpen die aan bod komen zijn: fouten durven maken, keuzestress, fear of missing out (FOMO), omgaan met teleurstellingen en zorgen voor balans."
      },
      {
        "kop": "Vraag advies aan de MIND Hulplijn"
      },
      {
        "tekst": "Zou jij graag eens met een professional willen praten over je faalangst? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
      }
    ]
  },
  {
    "slug": "grenzen-stellen",
    "titel": "Grenzen stellen",
    "onderwerp": "Grenzen",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/grenzen-stellen",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_grenzen_stellen",
    "intro": "Merk jij dat anderen regelmatig over je heen lopen? Door het stellen van grenzen maak je aan een ander duidelijk wat je wel en niet wil. Maar hoe kom je erachter waar je grenzen liggen? En hoe geef je jouw grenzen aan? Op deze pagina geven we je tips en technieken om jouw grenzen te leren kennen en ze te stellen.",
    "blokken": [
      {
        "kop": "Leer jouw grenzen kennen"
      },
      {
        "tekst": "Het ligt misschien voor de hand, maar je kan geen grenzen stellen als je jouw grenzen niet kent. Het is dus belangrijk om voor jezelf na te gaan waar jouw grenzen liggen. Gevoelens van boosheid, irritatie en verdriet kunnen een signaal zijn dat ze zijn overschreden. Wees je bewust van deze gevoelens. En sta stil bij wat er aan deze gevoelens voorafging. Had je het idee dat de ander te weinig rekening hield met jouw behoeften? En op welk punt precies had je het idee dat jouw grens werd overschreden? Schrijf je gedachten hierover op. Door je ervaringen in kaart te brengen zal je in de loop van de tijd steeds duidelijker aanvoelen waar jouw grenzen liggen."
      },
      {
        "kop": "Leer jouw grenzen aangeven"
      },
      {
        "tekst": "Veel mensen vinden het moeilijk om hun grenzen duidelijk aan te geven, maar het valt zeker te leren. Je kan ervoor kiezen om ze te stellen op het moment dat ze overschreden worden. Ook kan je altijd op een later moment terugblikken naar een situatie waarin ze overschreden werden. Door jouw grenzen aan te geven zorg je ervoor dat de ander weet waar die aan toe is met je. Bovendien kan een ander jouw gedachten niet lezen: als jij niet aangeeft als iemand eroverheen gaat, heeft de ander het misschien niet eens door."
      },
      {
        "tekst": "Bedenk van tevoren hoe strak jij de grens wil trekken. Wil je bijvoorbeeld nooit meer werk overnemen, of wil je vooral aangeven dat je dit graag eerst bespreekt? Ga je nu alle afspraken door de week afzeggen, omdat je dit te vermoeiend vindt of maak je een uitzondering voor familie en goede vrienden? Bedenk je dat je grenzen aangeven altijd gevolgen heeft. In sommige gevallen is het beter om een duidelijke lijn te trekken. En in andere gevallen kan het helpen om samen te kijken wat past binnen jouw grenzen, maar ook binnen die van een ander."
      },
      {
        "kop": "Jouw grens stellen: Hoe zeg je het?"
      },
      {
        "tekst": "De manier waarop je jouw grens aangeeft, speelt een belangrijke rol in de reactie die je krijgt. Wanneer je de boodschap brengt zoals we hieronder beschrijven, vergroot je de kans dat je bereikt wat je wil: dat de situatie verandert zonder vervelende nasleep."
      },
      {
        "tekst": "De stappen:"
      },
      {
        "lijst": [
          "Vertel de ander jouw gevoel.",
          "Vertel de boodschap vanuit jezelf, bijvoorbeeld: \"Ik vind het vervelend dat…\" of \"Het irriteert mij dat...\"",
          "Benoem heel specifiek waarop je reageert, bijvoorbeeld op een bepaalde opmerking of gedrag van de ander. Gebruik geen woorden als ‘altijd’ en ‘nooit’ (\"Het is altijd hetzelfde met jou\"). Het is niet de bedoeling om de ander aan te vallen, maar om specifiek gedrag te bespreken. Laat de ander in diens waarde en haal er geen oude voorvallen of meningen van anderen bij.",
          "Benoem de gevolgen voor jou, bijvoorbeeld: \"Daardoor kon ik niet naar die afspraak die belangrijk voor mij was.\"",
          "Vertel wat je van de ander wil, bijvoorbeeld: \"Wil je de volgende keer met mij overleggen?\" Deze stap zorgt voor een overgang van wat nu niet goed gaat, naar een betere situatie in de toekomst.",
          "Houd er rekening mee dat de ander zal reageren op wat je zegt. Bijvoorbeeld door uitleg te geven of onbegrip te tonen. Luister hier ook naar. Je begrijpt hierdoor de kijk of mening van de ander beter. Misschien verandert de uitleg de situatie wel. En kan je door te overleggen beter rekening met elkaar houden. Geef de ander in ieder geval de ruimte. Hierdoor zal diegene zich gehoord voelen en ook eerder jouw boodschap accepteren. Herhaal indien nodig nog een keer wat jij wil."
        ]
      },
      {
        "kop": "Kies een goed moment"
      },
      {
        "tekst": "Het is belangrijk een goed moment te kiezen. Wanneer je kookt van woede of bijna moet huilen, kan je beter even wachten met je grens duidelijk maken. Heftige emoties maken het lastig om helder te verwoorden wat je vindt en wil. Bovendien schrikt het de ander waarschijnlijk af, waardoor je ook niet de reactie krijgt waarop je hoopt. Dit betekent niet dat je jouw boosheid altijd maar moet inslikken om de lieve vrede te bewaren, maar het is wel fijner om iets kalmer te zijn voordat je het gesprek aangaat. Daarnaast is het handig om je grens onder vier ogen aan te geven. Dan is het makkelijker om een vertrouwelijk gesprek te hebben en zal de ander zich minder snel aangevallen voelen."
      },
      {
        "kop": "Let op je houding"
      },
      {
        "tekst": "Vergeet ook je houding niet. Misschien ben je op zoek naar de juiste woorden en kijk je daardoor de ander niet aan. Of vind je het spannend, waardoor je naar de grond kijkt. Je boodschap komt veel beter aan als je de ander in de ogen kijkt. Daarmee geef je aan dat je staat voor wat je zegt. En het is moeilijker te negeren door de ander. Je woordkeuze, toon, houding en gezichtsuitdrukking versterken elkaar. Probeer daar op te letten en tegenstrijdigheden te voorkomen: zeg bijvoorbeeld niet dat je boos bent met een glimlach op je gezicht."
      },
      {
        "kop": "Oefen"
      },
      {
        "tekst": "Je wordt steeds beter in grenzen aangeven wanneer je er aandacht aan geeft en oefent. Oefening baart kunst. Je kan voor de spiegel oefenen of met een goede vriend in de vorm van een rollenspel. Als dit niet voldoende werkt, kan je ook een training volgen. Tijdens trainingen op het gebied van bijvoorbeeld assertiviteit of stressbestendigheid leer je om grenzen te stellen. Vind jij het lastig om nee te zeggen? Wij schreven ook een oefening en tips om vaker nee te zeggen."
      }
    ]
  },
  {
    "slug": "flyer-tips-bij-hoogbegaafdheid",
    "titel": "Hoogbegaafdheid",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/flyer-tips-bij-hoogbegaafdheid",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_hoogbegaafd_online_website",
    "intro": "Als je hoogbegaafd bent, dan denk je snel en kan je ingewikkelde dingen goed begrijpen. Mensen die hoogbegaafd zijn herkennen zich ook in andere kenmerken. Je bent bijvoorbeeld zelfstandig, nieuwsgierig en gedreven. Je ervaart gevoelens intens en bent gevoelig en emotioneel. Of je vindt het fijn om te creëren. Door je hoogbegaafdheid kan je ook tegen uitdagingen aanlopen. Je raakt bijvoorbeeld snel overprikkeld doordat je intens ervaart, hebt moeite met autoriteit, bent geneigd te veel na te denken en je vindt het lastig om gefocust te blijven bij eenvoudige taken. De kenmerken en uitdagingen kunnen per persoon verschillen. Deze online informatie geeft je tips om met hoogbegaafdheid om te gaan.",
    "blokken": [
      {
        "kop": "Leer jezelf goed kennen"
      },
      {
        "tekst": "Hoe ziet hoogbegaafdheid er bij jou uit? In welke onderdelen herken jij je? Op onze website lees je meer over de kenmerken en uitdagingen van hoogbegaafdheid. Inzicht in jouw behoeften en uitdagingen helpt je om strategieën te ontwikkelen om er beter mee om te gaan. Misschien ben je bijvoorbeeld geneigd alles perfect te willen doen, waardoor je veel stress ervaart. Of denk je zo veel na over details dat het lastig is om beslissingen te nemen. Of je vindt het lastig om je te concentreren als je herhalende taken moet doen. Als je dit weet van jezelf kan je hier rekening mee leren houden en gericht op zoek gaan naar tips en adviezen. Tegelijkertijd is het ook fijn om je bewust te zijn van je sterke kanten, zodat je deze goed kan gebruiken."
      },
      {
        "kop": "Zoek mensen die ook hoogbegaafd zijn"
      },
      {
        "tekst": "Als je hoogbegaafd bent, kan je soms het gevoel hebben anders te zijn dan de mensen om je heen. Je denkt bijvoorbeeld sneller of legt verbanden, waardoor anderen je niet altijd kunnen volgen. Of ze begrijpen niet goed waarom je zoveel kritische vragen stelt. Of jij vindt het lastig om het over ‘koetjes en kalfjes’ te hebben. Dat kan ervoor zorgen dat jij je eenzaam voelt. Veel hoogbegaafde mensen vinden het daarom fijn om contact te hebben met gelijkgestemden. Iedereen is anders en je zal ook echt niet met alle andere hoogbegaafden een klik hebben. Maar contact met andere hoogbegaafde mensen zorgt voor herkenning. Het geeft een veilig gevoel als jij jezelf kan zijn, zonder dat je het idee hebt dat je je moet aanpassen. Ook kan je met elkaar tips uitwisselen over de uitdagingen die het met zich meebrengt. Omdat veel mensen niet hoogbegaafd zijn, is het soms lastig om deze mensen te vinden in je directe omgeving. Gelukkig zijn er steeds meer organisaties en mensen die zich hiermee bezighouden. Kom bijvoorbeeld via Stichting Hoogbegaafd in contact met gelijkgestemden in jouw regio."
      },
      {
        "kop": "Leer omgaan met over- en onderprikkeling"
      },
      {
        "tekst": "Hoogbegaafde mensen pikken prikkels, zoals geluid, licht, temperatuur, drukte en geur heel snel op en verwerken het efficiënt. Dit gebeurt onbewust. Het verwerken van prikkels gaat altijd door en kan tot overprikkeling leiden. Bij de een slaat dit naar binnen en die wordt juist stil. Bij de ander wordt dit meer zichtbaar door geïrriteerd of boos gedrag. Ook kan het zijn dat je (sommige) prikkels juist minder sterk binnenkrijgt. Dit merk je bijvoorbeeld doordat mensen je meerdere keren wat moeten vragen, voordat je reageert. Of dat je soms de tijd vergeet of dingen kwijt bent. Je hebt dan prikkels nodig om weer geactiveerd te worden. Bijvoorbeeld door een muziekje aan te zetten. Of door voldoende intellectuele uitdaging te vinden. Het komt voor dat je voor sommige prikkels gevoelig bent en voor andere juist minder. Dit is per persoon anders en niet vreemd. Wel is het vaak fijn voor jezelf als je leert aanvoelen waar je over- of onderprikkeld van raakt, zodat je hier rekening mee kan houden. Maak hier een begin mee door eens een week lang iedere avond terug te kijken op de dag. Waren er dingen die opvielen, hoe gedroeg jij je, hoe voelde jij je? Was je over- of misschien wel onderprikkeld? Probeer dit eens een week te doen. Het kan fijn zijn dit op te schrijven, zodat je aan het einde van je week terug kan kijken: wat valt je op?"
      },
      {
        "kop": "Pak voldoende tijd om te verwerken"
      },
      {
        "tekst": "Een van de kenmeren die vaak samengaat met hoogbegaafdheid is dat je gevoelig bent en intens ervaart. Je kan hierdoor erg genieten van dingen, maar het kost tegelijkertijd ook veel energie. Bijvoorbeeld omdat de sfeer in een groep bij jou binnenkomt of doordat je geraakt wordt door het nieuws. Het is daarom belangrijk om voldoende tijd op een dag in te plannen om weer op te laden. Ook denken mensen met hoogbegaafdheid meestal veel. Soms is dat fijn, maar je hoofd kan er ook vol door aanvoelen. Dan is het fijn om uitlaatkleppen te hebben. Voor sommige mensen werkt het om bewust te ontspannen. Op onze website vind je meerdere ontspanningsoefeningen die hierbij kunnen helpen. Hoe je ontspant is voor iedereen anders en ook afhankelijk van waar je op dat moment behoefte aan hebt. Waar de een oplaadt van een goed gesprek of er op uitgaan met een vriend, doet een ander dat van het lezen van een boek, schilderen, muziek maken, programmeren of door te sporten en te bewegen."
      },
      {
        "kop": "Beweeg voldoende"
      },
      {
        "tekst": "Zoals je waarschijnlijk wel weet, helpt bewegen je uit je hoofd te komen en draagt het bij aan je algemene mentale en lichamelijke gezondheid. Probeer daarom elke dag voldoende te bewegen. Bedenk welke mogelijkheden jij hebt om iedere dag minimaal dertig minuten matig intensief te bewegen en ga hiermee aan de slag. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Vind je het lastig om in beweging te komen?"
      },
      {
        "lijst": [
          "Bedenk eerst wat je gaat doen. Maak een lijstje met alle mogelijkheden die jij hebt om te bewegen. Probeer vormen van beweging te kiezen die je leuk vindt. Of die je leuk kan maken, door bijvoorbeeld tegelijkertijd een podcast te luisteren. Zo houd je het langer vol.",
          "Maak een schema voor de week, zodat je niet elke ochtend hoeft te bedenken wat je gaat doen.",
          "Stel niet gelijk te grote doelen. Gelijk vier keer per week naar de sportschool is niet heel realistisch als je al langere tijd niet gesport hebt.",
          "Stel jezelf beloningen in het vooruitzicht voor als je dit een week hebt gedaan, een maand hebt volgehouden etc."
        ]
      },
      {
        "kop": "Leer omgaan met perfectionisme en faalangst"
      },
      {
        "tekst": "Perfectionisme is een kenmerk waarin veel hoogbegaafde mensen zich herkennen. Dit kan uit jezelf komen doordat je de lat hoog legt en het liefst geen fouten maakt. Maar ook door de onrealistische verwachtingen vanjezelf of van je omgeving door de term ‘hoogbegaafd’. Dat iemand hoogbegaafd is, betekent namelijk niet dat diegene alles kan en overal goed in is. Nooit fouten maken is voor niemand mogelijk. Perfectionisme kan heel frustrerend zijn en voor veel stress zorgen. Bovendien ligt hier faalangst op de loer. Het lastige aan faalangst is dat niet jouw ‘kunnen’, maar je angst om te falen ervoor kan zorgen dat je daadwerkelijk minder presteert of dat je situaties uit de weggaat. Gelukkig kan je veel doen om faalangst te verminderen. Wij schreven tips om faalangst aan te pakken. In onze Chill, je moet al zoveel challenge vind je opdrachten om inzicht te krijgen in jouw perfectionisme. En hoe je kan proberen de controle wat los te laten."
      },
      {
        "kop": "Volg je waarden en maak keuzes"
      },
      {
        "tekst": "Hoogbegaafde mensen zien vaak veel mogelijkheden en kunnen soms blijven hangen in details. Hierdoor is het lastig om beslissingen te nemen. Dit wordt makkelijker als jij goed weet wat je wil. Wat hierbij helpt is jezelf de vraag te stellen wat jij belangrijk vindt in jouw leven en de waarden te noteren die daarbij horen. Bijvoorbeeld rust of juist uitdaging en verbondenheid of juist onafhankelijkheid. Maak jouw top vijf van waarden. Bedenk nu op basis van jouw waarden welke doelen jij hebt en selecteer hieruit drie doelen voor het aankomende jaar. Kom je voor een beslissing te staan en lukt het je niet te kiezen? Pak jouw lijstje met waarden en doelen erbij en laat je leiden door je eigen antwoorden."
      },
      {
        "kop": "Voorkom piekeren"
      },
      {
        "tekst": "Als je snel en ingewikkeld kan nadenken en makkelijk verbanden legt, ben je je vaak ook bewust van de gevolgen van een actie. Hierdoor kan je gaan piekeren. Helaas biedt piekeren geen oplossing en kost het wel veel tijd en energie. Merk je dat je gedachten overgaan naar piekeren? Zeg dan STOP tegen jezelf. Dit lijkt misschien vreemd, maar het is erg effectief. Vervolgens zeg je: ‘Op dit moment denk ik aan … (je negatieve gedachte), maar eigenlijk wil ik denken aan… (een nieuwe, positieve gedachte).’ Pieker jij regelmatig en zit het je in de weg? Wij schreven nog meer tips en technieken om piekeren tegen te gaan."
      },
      {
        "kop": "Blijf uitgedaagd"
      },
      {
        "tekst": "Veel mensen die hoogbegaafdheid zijn, voelen zich fijn als ze voldoende intellectueel of creatief worden uitgedaagd. Probeer hier daarom voldoende ruimte voor in te richten in je leven. Waarin je graag uitgedaagd wordt, verschilt van persoon tot persoon. Je kan uitdaging vinden in je werk, opleiding of cursussen. Maar ook in je vrije tijd door dingen te doen waarbij je wordt uitgedaagd."
      },
      {
        "kop": "Zoek hulp als je vastloopt"
      },
      {
        "tekst": "Ervaar jij problemen en merk je dat je vastloopt? Neem iemand in jouw omgeving in vertrouwen en zoek hulp. Ook kan je contact opnemen met de MIND Hulplijn voor een gratis, anoniem en deskundig advies op maat. Het is belangrijk om een hulpverlener te kiezen die bij jou past. Een standaardaanpak werkt vaak niet goed voor hoogbegaafden. Zoek naar iemand die ervaring heeft met het werken met hoogbegaafde volwassenen. En bespreek samen wat het beste voor jou is."
      },
      {
        "kop": "Meer lezen?"
      },
      {
        "tekst": "Wil je graag meer lezen of ben je geïnteresseerd in specifieke zaken waartegen je aanloopt? Instituut Hoogbegaafdheid Volwassenen (IHBV) biedt een breed aanbod aan gratis te downloaden leaflets met onderwerpen die bij hoogbegaafden spelen."
      }
    ]
  },
  {
    "slug": "hoogsensitiviteit",
    "titel": "Hoogsensitiviteit",
    "onderwerp": "Balans",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/hoogsensitiviteit",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_hoogsensitief",
    "intro": "Als je hoogsensitief bent, verwerk je informatie op een andere manier dan mensen die dat niet zijn. Je merkt veel prikkels op, die sterk binnenkomen en die je diepgaand verwerkt. Je bent hierdoor gevoelig voor fysieke sensaties, zoals licht, geluid, smaak en geur. Maar ook voor emotionele prikkels, zoals sfeer en emoties van anderen.",
    "blokken": [
      {
        "tekst": "Hoogsensitiviteit wordt ook wel hooggevoeligheid genoemd. Het is een van de kenmerken die iemand kan hebben en is geen psychische stoornis. Het brengt zowel voordelen als uitdagingen met zich mee. Op deze pagina krijg je tips en adviezen over de positieve kanten, maar ook over de uitdagingen van hoogsensitief zijn."
      },
      {
        "kop": "Voordelen en uitdagingen"
      },
      {
        "tekst": "Voordelen zijn bijvoorbeeld dat je dingen van meerdere kanten kan bekijken, dat je een rijk gevoelsleven hebt en creatief bent. Je kan je goed inleven in andere mensen en hebt een groot rechtvaardigheidsgevoel. Uitdagingen zijn dat je snel overprikkeld of gestresst kan raken, je geneigd bent om jezelf weg te cijferen en erg kritisch op jezelf kan zijn. Het kan je gevoeliger maken voor faalangst, maar ook voor psychische problemen als langdurige stressklachten, depressie en angststoornissen. Ook kan het soms lastig zijn om te communiceren met mensen die niet hoogsensitief zijn."
      },
      {
        "kop": "Krijg inzicht in jezelf"
      },
      {
        "tekst": "Herken jij je in de beschrijving aan het begin van deze pagina? Of twijfel jij of je hoogsensitief bent? In dat laatste geval kan het helpen om een zelftest te doen op Hoogsensitief.NL."
      },
      {
        "tekst": "Onderzoek naar hoogsensitiviteit neemt de laatste jaren enorm toe. Er is steeds meer informatie over te vinden op internet en in boeken. Door erover te lezen, krijg je inzicht in wat hoogsensitiviteit inhoudt en hoe dit invloed op je leven heeft. Dit leert je jezelf beter te begrijpen en te bepalen wat jij nodig hebt voor een fijn leven. Helemaal als het je lukt het als kwaliteit te zien en de voordelen te gebruiken."
      },
      {
        "tekst": "Probeer hierbij op te letten dat de informatie die je leest van een betrouwbare bron komt. Helaas heeft niet iedereen voldoende kennis over dit onderwerp en is niet alles wat je leest waar."
      },
      {
        "kop": "Omarm hoe je bent"
      },
      {
        "tekst": "Veel mensen die hoogsensitief zijn, voelen zich anders dan anderen. Je kan je hierdoor onbegrepen voelen. Of onzeker, omdat jij een dag moet bijkomen van een feestje, terwijl iemand anders dat niet heeft. Maar wist je dat je echt niet de enige bent? Naar schatting zijn 1 op de 5 mensen hoogsensitief."
      },
      {
        "tekst": "Bedenk je bovendien dat iedereen anders is en dat je goed bent, zoals je bent. Ja, je bent gevoelig voor prikkels en dit kost je veel energie. Ook kan je erg geraakt worden door een kritische opmerking van een ander. Maar blijf altijd onthouden dat het een eigenschap is waar je vooral veel voor terugkrijgt. Zo kan je misschien wel intens genieten van muziek of natuur en word je gewaardeerd om je inlevingsvermogen. Probeer hiervan te genieten en jezelf niet te forceren om iemand te zijn die je niet bent. Kijk naar jezelf met je positieve en negatieve kanten, zonder oordeel. Jij mag er zijn!"
      },
      {
        "kop": "Leef het leven dat bij je past"
      },
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
      },
      {
        "kop": "Zorg voor balans"
      },
      {
        "tekst": "Als je hoogsensitief bent, ligt het gevaar op de loer dat je vaak overprikkeld bent en overbelast raakt. Helemaal in de huidige maatschappij, die snel gaat en veel prikkels met zich meebrengt. Luister daarom goed naar je lichaam en zorg voor balans."
      },
      {
        "tekst": "Je hebt balans als je voldoende herstelmomenten hebt ten opzichte van het aantal prikkels dat binnenkomt. Heb je bijvoorbeeld een bespreking voor je werk of een druk feestje, sta jezelf toe om daarna rust te pakken. Denk bijvoorbeeld aan een wandelingetje of even voor je uit staren zonder iets te hoeven. Het maakt niet uit wat, als jij er maar van oplaadt. Wat ook helpt, is om in je week voldoende oplaadmomenten in te bouwen. Het kan al een fijn gevoel geven als je weet dat je ‘s avonds naar sport of yoga gaat of in het weekend gaat wandelen in het bos."
      },
      {
        "tekst": "Met balans bedoelen we trouwens niet dat je altijd zoveel mogelijk prikkels moet vermijden. Los van dat dit niet altijd mogelijk is, hoeft het ook niet altijd erg te zijn. Als je maar voldoende tijd pakt om te herstellen."
      },
      {
        "kop": "Geef je grenzen aan"
      },
      {
        "tekst": "Door je hoogsensitiviteit kan jij je vaak goed inleven in anderen en heb je een groot verantwoordelijkheidsgevoel. Dit kan ervoor zorgen dat je over je eigen grenzen gaat. Geef daarom je grenzen naar anderen toe duidelijk aan. Het is jouw leven, jij bepaalt hoe je dat vormgeeft en je bent niet overal verantwoordelijk voor."
      },
      {
        "tekst": "De eerste stap die hiervoor nodig is, is dat je weet waar je grenzen liggen. Vaak ervaar je waar je grens ligt als jij of de ander eroverheen gaat en overprikkeld raakt. Je herkent dit doordat je je bijvoorbeeld emotioneler, gestresst, onrustig, geïrriteerd of vermoeid voelt."
      },
      {
        "tekst": "De volgende stap is het aangeven van je grenzen. De manier waarop je dat doet, speelt een belangrijke rol in de reactie die je krijgt. Zo is het goed om erop te letten dat jij jouw grenzen niet oplegt bij de ander. Zo blijft de relatie gelijkwaardig en geen eenrichtingsverkeer. Kan je wel wat hulp gebruiken bij het stellen van grenzen? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Voorkom te veel piekeren"
      },
      {
        "tekst": "De kans is groot dat jij regelmatig terugkijkt naar je eigen gedrag (zelfreflectie). En dat je daarbij jezelf afvraagt of je wel het juiste hebt gedaan. Ook bekijken veel hoogsensitieve mensen situaties van meerdere kanten en nemen daarin de verschillende meningen van anderen mee."
      },
      {
        "tekst": "Het is heel fijn om vanuit zelfreflectie jezelf te ontwikkelen en beslissingen te kunnen nemen vanuit meerdere invalshoeken. Maar het kan lastig zijn als dit overgaat in piekeren en zorgen maken. Probeer piekeren daarom zoveel mogelijk te voorkomen. Merk je dat je gedachten overgaan naar piekeren? Zeg dan STOP tegen jezelf. Dit lijkt misschien vreemd, maar het kan erg effectief zijn. Vervolgens zeg je: ‘Op dit moment denk ik aan … (je negatieve gedachte), maar eigenlijk wil ik denken aan… (een nieuwe, positieve gedachte).’ Pieker jij regelmatig en zit het je in de weg? Wij schreven nog meer tips en technieken om piekeren tegen te gaan."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Als je veel prikkels binnenkrijgt die je diepgaand verwerkt, is het extra nodig om goed voor jezelf te zorgen. Het spreekt waarschijnlijk voor zich, maar omdat een gezonde leefstijl veel invloed heeft op hoe iemand zich voelt, benoemen we het hier toch. Denk aan voldoende structuur, zoals rond dezelfde tijd opstaan en naar bed gaan en eten op regelmatige tijden. En voldoende slaap, zodat je zowel mentaal als lichamelijk voldoende kan herstellen. Heb jij problemen met slapen? Meld je dan aan voor onze Beter Slapen Challenge."
      },
      {
        "tekst": "Probeer ook zo gezond mogelijk te eten en te drinken en matig te zijn met cafeïne en alcohol. Ze geven je even energie of een relaxed gevoel, maar later voel je je er meestal slechter door."
      }
    ]
  },
  {
    "slug": "kopp-kov",
    "titel": "KOPP/KOV",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/kopp-kov",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_koppkov",
    "intro": "",
    "blokken": []
  },
  {
    "slug": "helpende-gedachten",
    "titel": "Maak je gedachten helpend",
    "onderwerp": "Piekeren",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/helpende-gedachten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_cognitieve_therapie",
    "intro": "Veel mensen hebben het idee dat hoe ze zich voelen afhangt van de gebeurtenissen die zij meemaken. Maar wist je dat als je anders over een gebeurtenis gaat denken, ook je gevoelens daarover zullen veranderen? Waarschijnlijk ga je je ook anders gedragen in reactie op de gebeurtenis. Niet-helpende gedachten zorgen ervoor dat je vervelende gevoelens ervaart, terwijl helpende gedachten meer gewenste gevoelens oproepen.",
    "blokken": [
      {
        "tekst": "Bij cognitieve gedragstherapie wordt veel aandacht besteed aan het verband tussen wat mensen in een bepaalde situatie denken, voelen en doen. Wanneer je hier inzicht in hebt, kan je er ook invloed op uitoefenen. De volgende oefeningen helpen je dit inzicht te krijgen. Je leert hoe je niet-helpende gedachten kritisch kan bekijken om daarna helpende gedachten te beschrijven."
      },
      {
        "kop": "Oefening 1"
      },
      {
        "kop": "Maak een G-schema en krijg inzicht in gedachten, gevoelens en gedrag"
      },
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
      },
      {
        "tekst": "Een voorbeeld van een ingevuld G-schema:"
      },
      {
        "tekst": "Datum 3-10-2025"
      },
      {
        "tekst": "Waar ben ik? Met wie ben ik? Wat gebeurt er? (gebeurtenis) Ik kom mijn buurman tegen op straat. Ik zeg hallo en groet. Hij groet niet terug."
      },
      {
        "tekst": "Wat denk ik? (gedachten)"
      },
      {
        "lijst": [
          "Ik heb zeker iets verkeerds gezegd de vorige keer dat ik hem zag.",
          "Hij vindt mij vast niet aardig.",
          "Ik kan ook echt niet met mensen omgaan."
        ]
      },
      {
        "tekst": "Wat voel ik (bang, boos, blij, bedroefd)? (gevoel) Verdrietig, onzeker."
      },
      {
        "tekst": "Hoe reageer ik? (gedrag) Ik zeg niets meer en loop verder."
      },
      {
        "kop": "Oefening 2"
      },
      {
        "kop": "Daag niet-helpende gedachten uit en vervang ze door helpende gedachten"
      },
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
      },
      {
        "tekst": "Door antwoord te geven op bovenstaande vragen, kan je op hele andere gedachten komen. Een helpende gedachte klopt met de werkelijkheid en legt dezelfde gebeurtenis uit als de niet-helpende gedachte."
      },
      {
        "tekst": "Voorbeelden van niet-helpende gedachten:"
      },
      {
        "lijst": [
          "a. \"Houd ik weer mijn mond, wat ben ik toch ontzettend saai.\"",
          "b. \"Ik ben niet leuk, niet knap en niemand heeft interesse in mij.\""
        ]
      },
      {
        "tekst": "Voorbeelden van helpende gedachten:"
      },
      {
        "lijst": [
          "a. \"Het klopt dat ik weinig zeg. Dat maakt mij nog niet saai. Ik heb vrienden en familie die graag bij mij zijn. En ook al zeg ik niet veel, ik luister wel goed naar wat anderen te zeggen hebben en dat is ook veel waard. Mensen geven aan dat ze dat fijn vinden.\"",
          "b. \"Ik zeg wel tegen mezelf dat niemand interesse in mij heeft of mij leuk vindt, maar eigenlijk klopt dat niet. Veel mensen zijn vriendelijk tegen mij. Ik heb familieleden en vrienden die om mij geven. Bovendien: ook al zou niet iedereen mij leuk vinden, zo erg is dat niet. Ik vind ook de ene persoon leuker dan de ander.\""
        ]
      },
      {
        "tekst": "Wanneer je de helpende gedachten hebt omschreven, kan je deze samenvatten en er een notitie van maken, bijvoorbeeld in je telefoon. Haal het tevoorschijn als je merkt dat niet-helpende gedachten je weer dwars zitten. Lees het door op momenten dat je het nodig hebt. Op die manier kunnen je helpende gedachten uiteindelijk de plaats van niet-helpende gedachten in gaan nemen."
      }
    ]
  },
  {
    "slug": "mantelzorg",
    "titel": "Mantelzorg",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mantelzorg",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_mantelzorg",
    "intro": "Zorg jij voor een familielid, partner of vriend die een lichamelijke of psychische aandoening heeft? Dit noemen we ook wel mantelzorg. Natuurlijk heeft de aandoening veel impact op de persoon zelf, maar vergeet niet dat het ook heel veel doet met jou als naaste. Op deze pagina krijg je als mantelzorger tips die je helpen er voor de ander te zijn en zelf overeind te blijven.",
    "blokken": [
      {
        "tekst": "Er zijn verschillende mantelzorgers. Denk aan jonge mantelzorgers, werkende mantelzorgers en oudere mantelzorgers. Ook zijn er verschillen in de behoeftes van iemand die zorg nodig heeft. Zo is het heel anders om te zorgen voor iemand met dementie dan voor een kind dat langdurig zorg nodig heeft of voor iemand die in de laatste levensfase zit. Voor veel mensen voelt het als vanzelfsprekend om de zorg op te pakken. Ze hebben het graag voor de ander over, het geeft een goed gevoel en zorgt voor verbondenheid."
      },
      {
        "tekst": "Maar het kan ook zwaar zijn. Jouw rol verandert, jullie relatie verandert, je maakt je zorgen, je zorgt voor de ander en je regelt praktische dingen. Dat kost vaak veel tijd en energie. Er komen vragen bij kijken als: Wordt mijn dierbare nog beter? Hoe ziet de toekomst eruit? Wat betekent de ziekte van mijn naaste voor mijn leven? Hoe ver moet ik gaan? Hoe lang houd ik dit (nog) vol? Hoe combineer ik dit met werk of andere verplichtingen?"
      },
      {
        "kop": "Laat je gevoelens toe"
      },
      {
        "tekst": "Zorgen voor iemand die ziek is of een beperking heeft, gaat vaak gepaard met veel verschillende emoties. Bijvoorbeeld verdriet omdat je je naaste achteruit ziet gaan of veranderd is, gevoelens van onmacht omdat je vastloopt in bepaalde regelgeving of bij instanties, angst voor de toekomst of boosheid waarom jullie dit moet overkomen. Maar ook alle gevoelens die ontstaan door de impact die het op jouw leven heeft. Al dit soort gevoelens zijn heel normaal. Probeer er dan ook niet tegen te vechten of ze weg te drukken. Laat deze gevoelens er zijn. Juist door ze te ervaren, zal je leren er beter mee om te gaan. Schiet ook niet in de ‘doe-stand’ of ‘vechtstand’ om ze weg te werken. Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Het klinkt misschien lastig, maar door de situatie te aanvaarden zoals die is, creëer je ruimte om het van een andere kant te bekijken."
      },
      {
        "kop": "Blijf goed voor jezelf zorgen"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Cijfer jezelf niet weg. Doe voldoende leuke dingen waar je energie van krijgt en waarvan je ontspant. Vind je het lastig om te ontspannen? Ontspanningsoefeningen kunnen hierbij ondersteunen. Sommige mensen voelen zich schuldig als ze wat leuks ondernemen of plezier hebben, omdat ze er dan niet voor de ander zijn of omdat de ander dit soort mogelijkheden niet heeft. Besef je dat niet ontspannen averechts werkt. Naast dat ontspanning fijn is voor jezelf, geeft het je ruimte om er juist beter voor jouw naaste te zijn. Dat is misschien even wennen, maar het helpt je mentaal gezond te blijven. Zorg er ook voor dat je voldoende en gezonde voeding binnenkrijgt. Dit draagt niet alleen bij aan een gezond lijf, maar ook aan een gezonde geest! Heb je minder tijd om boodschappen te doen? Kijk eens wat de mogelijkheden zijn om boodschappen thuis te laten bezorgen. Ben je meer alcohol gaan drinken om te ontspannen of even de problemen te vergeten? Probeer hiermee te stoppen of te minderen. In plaats van dat je je hierdoor beter gaat voelen, verstoort het jouw lichamelijke en psychische balans."
      },
      {
        "kop": "Bewaak je grenzen"
      },
      {
        "tekst": "Om de zorg goed te kunnen volhouden, irritaties tegen te gaan en het te kunnen blijven combineren met de rest van jouw leven is het belangrijk te weten waar jouw grenzen liggen. En om deze te stellen en te bewaken. Maar hoe weet je waar je grenzen liggen en hoe ga je hiermee om als de situatie steeds verandert en er steeds meer aan jou wordt gevraagd? Veel mantelzorgers vinden dit lastig. Omdat je wil dat het goed gaat met de ander, kan je in de ‘flow’ van het zorgen ongemerkt over je eigen grenzen gaan. Een goede graadmeter is om af en toe stil te staan bij hoe het voor jou voelt. Voel jij je goed bij hoe het gaat en doe je dit graag? Ook al is het misschien anders of meer dan je had verwacht? Dan zijn je grenzen misschien wat verlegd, maar passen ze bij wat prettig voor jou is. Merk je signalen van overbelasting of worden er dingen gevraagd waar jij je niet prettig bij voelt? Denk aan het wassen en aankleden van je buurvrouw. Of het moeten doen van taken die niet zo goed bij je passen. Bijvoorbeeld het regelen van financiële zaken als je dat al lastig voor jezelf vindt. Of de hoeveelheid taken, terwijl er nog meer mensen in de directe omgeving zijn die minder doen. Ook kan het zijn dat de ander alleen door jou verzorgd wil worden, wat een enorme druk op jou kan leggen. Op zulke momenten is het van belang dat jij je grenzen aangeeft. Ook is het fijn om hier al vanaf het begin afspraken met elkaar over te maken. Vind je het lastig om je grenzen te stellen of kan je hier wel wat hulp bij gebruiken? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Geef het aan als het te zwaar wordt"
      },
      {
        "tekst": "Wordt de zorg te zwaar, is het voor jou niet (meer) te combineren met jouw leven of zijn er andere redenen waarom je (tijdelijk) wil of moet stoppen met het intensief zorgen voor de ander? Bekijk wat de mogelijkheden zijn. Misschien is er iemand anders die het (tijdelijk) kan overnemen, is het mogelijk dat er professionele zorg aan huis komt of kan jouw naaste worden opgenomen. Lees meer over vervangende zorg of respijtzorg op deze webpagina van het ministerie van VWS. Dit betekent natuurlijk niet dat je er niet meer voor de ander bent en dat de mantelzorg helemaal ophoudt. Maar het op een andere manier regelen kan er wel voor zorgen dat je het beter volhoudt. Of dat je juist meer ruimte ervaart om andere vormen van aandacht te geven waar je anders niet aan toe komt."
      },
      {
        "kop": "Let op signalen van overbelasting"
      },
      {
        "tekst": "Als mantelzorger ben je vaak zo bezig met de ander dat je jezelf soms uit het oog verliest. Begrijpelijk, maar het helpt jou en de ander niet als jij overbelast raakt. Signalen dat je te veel hooi op je vork neemt, kunnen zich zowel lichamelijk als mentaal uiten. Denk aan hoofdpijn, vermoeidheid, gespannen spieren, nekklachten en buikpijn. Maar ook aan sneller geïrriteerd zijn, piekeren, slecht slapen, somber en angstig zijn."
      },
      {
        "kop": "Zoek professionele hulp als dat nodig is"
      },
      {
        "tekst": "Heb jij het door de situatie moeilijk? Aarzel dan niet om professionele hulp te zoeken. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen om op de been te blijven en je adviezen geven over hoe je het beste voor je naaste zorgt. Ook kan de huisarts je doorverwijzen voor passende hulp als dat nodig is. Heb je lichamelijke of ‘vage’ klachten, ga dan ook op tijd naar de huisarts."
      },
      {
        "kop": "Vraag de MIND Hulplijn om advies"
      },
      {
        "tekst": "Heb je het lastig en wil je jouw persoonlijke situatie graag met een professional bespreken? Je kan altijd bellen met onze MIND Hulplijn voor anoniem, gratis en deskundig advies. Onze hulpverleners denken graag met je mee en kunnen je ook helpen het gesprek met de huisarts of andere mensen in jouw omgeving voor te bereiden."
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Als iemand in jouw omgeving ziek is, staat vaak alles in het teken van die persoon. Logisch, maar het kan ook voor jou pittig zijn. Naast praktische steun vinden veel mantelzorgers het fijn om zich gesteund te voelen door de mensen om hen heen. Vaak lucht het op om te praten over je gevoelens met mensen in je omgeving, zoals familie, vrienden of andere mensen. De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn. Door mensen te betrekken, weten ze beter wat er in je omgaat en kunnen ze je beter steunen."
      },
      {
        "kop": "Zoek contact met andere mensen die in hetzelfde schuitje zitten"
      },
      {
        "tekst": "Het delen van ervaringen met andere mantelzorgers kan vaak voor erkenning en ‘lucht’ zorgen om met de situatie om te gaan. Het is heel steunend om te ervaren dat je niet de enige bent. Daarnaast kunnen anderen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Op veel plekken in Nederland zijn organisaties actief die voorlichting, advies en ondersteuning bieden aan mantelzorgers. Vaak kan je daar ook terecht voor contact met andere mantelzorgers. Op de website van Mantelzorg.nl vind je mantelzorgondersteuning in jouw gemeente. Op dezelfde website vind je ook verschillende verhalen en filmpjes met ervaringsverhalen."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste waarvoor jij zorgt jouw partner of een ander kind in het gezin? Leg ze uit wat er met hun vader/moeder of broer/zus aan de hand is. Uitleg draagt bij aan het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Probeer het onderwerp ook bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen er over mogen praten en vragen mogen stellen. Het is belangrijk voor kinderen dat ze gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Natuurlijk is het goed om kinderen, net als alle andere kinderen zonder een ziek gezinslid, bepaalde taken te geven, maar verwacht niet dat ze zorgtaken op zich nemen. Het is belangrijk dat kinderen kind mogen zijn. En ook dat het ‘normale’ leven van de kinderen gewoon doorgaat. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis. Voor kinderen in het gezin kan preventieve hulp helpen met de situatie om te leren gaan."
      },
      {
        "kop": "Verdiep je in de aandoening"
      },
      {
        "tekst": "Er zijn verschillende ziekten en beperkingen waardoor iemand in jouw omgeving zorg en ondersteuning nodig kan hebben. Is jouw naaste net ziek geworden of is het net bekend wat de ander heeft? Door je te verdiepen in de achtergronden, de symptomen, het verloop en de aanpak van de ziekte, leer je meer over wat het inhoudt, wat jullie kunnen verwachten en hoe je kan omgaan met bepaald gedrag. Ook krijg je meer inzicht in welke behoeften jouw naaste heeft aan ondersteuning. Als je bijvoorbeeld een ouder hebt met dementie dan zal je uiteindelijk niet goed meer met elkaar kunnen communiceren. En bij iemand die niet lang meer te leven heeft, kan je samen kijken hoe je hiermee om kan gaan. En hoe je er het beste voor diegene kan zijn in de laatste periode van het leven van diegene. Hierbij is het belangrijk om ook oog te hebben voor jezelf door stil te staan bij welke invloed dit gaat hebben op jouw leven. En wat jij hierin wil en kan betekenen. Ben jij mantelzorger van iemand met psychische problemen? Bekijk dan ook onze tips voor naasten van mensen met psychische problemen."
      },
      {
        "kop": "Zorg dat praktische zaken geregeld zijn"
      },
      {
        "tekst": "Bij de zorg voor iemand komen vaak veel praktische dingen kijken. Zowel voor degene die zorg ontvangt als voor jou als zorggever. Denk aan zaken rondom huisvesting, geld, werken etc. Als dit vanaf het begin goed geregeld is, zal dit rust en duidelijkheid geven. Op de website MantelzorgNL vind je veel informatie en tips over allerlei dingen, zoals geldzaken, mantelzorg en wonen, werk en mantelzorg, wetten en regels, vervangende zorg en samenwerken met de zorg. Vind je het lastig om dit soort zaken te regelen? Vraag om hulp bij mensen in je omgeving. Ook kan je op zoek gaan naar een mantelzorgmakelaar die je helpt bij regeltaken. Deze kan je vinden via de website van de beroepsvereniging mantelzorgmakelaars."
      },
      {
        "kop": "Doe het niet alleen"
      },
      {
        "tekst": "Als mantelzorger is het prettig als je niet in je eentje alle zorg hoeft te dragen. Maak daarom afspraken met andere naasten. Breng ook het verdere sociale netwerk van diegene waarvoor je zorgt in kaart als dit voor jou nog onbekend is. Overleg waar anderen bij kunnen helpen, zodat je weet wie je wanneer om hulp kan vragen. Om de zorg zo goed mogelijk te organiseren en geen verwarring te laten ontstaan is het belangrijk om duidelijke afspraken te maken over wie wat doet en wanneer. Ook is het een goed idee om elkaar op de hoogte te houden van belangrijke veranderingen. Ben jij degene die de zorg coördineert? Stuur wekelijks een overzichtje met de laatste stand van zaken, zodat gelijk iedereen op de hoogte is. Sommige mensen vinden het spannend als iemand ziek wordt. Ze willen wel helpen, maar weten niet zo goed hoe. Nodig deze mensen uit om zo de drempel weg te nemen. Ook zijn er verschillende organisaties waar je terecht kan voor ondersteuning bij de zorg. Bijvoorbeeld bij het organiseren van zorg, advies en hulp bij de verzorging etc. Op de webpagina mantelzorgondersteuning van het ministerie van VWS vind je informatie hierover en meerdere linkjes."
      },
      {
        "kop": "Bespreek het op je school, studie of werk"
      },
      {
        "tekst": "Heeft de situatie effect op je werk of opleiding? Praat erover met je werkgever of mentor/zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning. Op deze webpagina lees je bij wie je waarvoor terecht kan op je werk, van de HR-afdeling t/m ondersteuning door een vakbond."
      }
    ]
  },
  {
    "slug": "mindfulness",
    "titel": "Mindfulness",
    "onderwerp": "Ontspanning",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mindfulness",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_mindfulness",
    "intro": "Mindfulness is een training die je leert te leven met aandacht en je te richten op het hier en nu. Door bewuster te leven, krijg je meer rust en ontspanning. Dit kan misschien wat zweverig klinken, maar er is steeds meer bewijs dat mindfulness werkt.",
    "blokken": [
      {
        "tekst": "Heeft mindfulness je interesse gewekt? Je kan natuurlijk een mindfulness training gaan volgen, maar misschien wil je eerst eens kijken of mindfulness iets voor jou is. Op deze pagina staan simpele oefeningen om zelf aan de slag te gaan met mindfulness. Ook geven we je tips en linkjes voor interessante andere oefeningen en trainingen."
      },
      {
        "kop": "Hoe mindfulness kan helpen bij klachten"
      },
      {
        "tekst": "Mindfulness richt zich ook op het accepteren en onder ogen zien van problemen of klachten. Een milde, niet oordelende houding biedt ruimte om hier op een andere manier mee om te gaan. Hierdoor gaan ze een minder grote rol spelen in je leven. Dit is de paradox van mindfulness: controle krijgen over de problemen of klachten zonder te proberen ze onder controle te krijgen, maar door ze er juist te ‘laten zijn’. Mindfulness kan hierdoor helpend zijn als je last hebt van psychische problemen, maar ook als je bijvoorbeeld veel piekert."
      },
      {
        "kop": "Mindfulness oefening van één minuut"
      },
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
      },
      {
        "kop": "4 korte oefeningen of 1 lange"
      },
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
      },
      {
        "kop": "Tips voor oefeningen en trainingen"
      },
      {
        "tekst": "Is jouw interesse gewekt om met mindfulness aan de slag te gaan? Hieronder vind je een overzicht met linkjes naar oefeningen en trainingen. Ook staan er linkjes om een mindfulness trainer of training bij jou in de buurt te vinden."
      },
      {
        "lijst": [
          "Laat je begeleiden door deze Mindfulness meditatieoefeningen van Rob Brandsma op Spotify.",
          "soChicken schreef een handig artikel: 4 simpele mindfulness oefeningen die ik gebruik.",
          "Luister naar deze bodyscan van Mindful Minuut en concentreer je op jouw lichaam. Je gaat van moment op moment opmerken wat je ervaart en voelt in je lichaam.",
          "Zoek jij een mindfulness trainer of training in de buurt? Ga dan naar deze webpagina van de Vereniging Mindfulness Based Trainers Nederland (VMBN). Of deze pagina van de Verenging Voor Mindfulness(VVM).",
          "Download de Insight Timer app voor Apple of Android voor verschillende meditaties, ademhalingsoefeningen en uitleg over mindfulness. Ook kan je o.a. een dagboek bijhouden en deelnemen aan de community om met mensen over de hele wereld te praten of samen te mediteren. Met een gratis lidmaatschap kan je al best veel."
        ]
      }
    ]
  },
  {
    "slug": "naasten",
    "titel": "Naasten (algemeen)",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_naasten",
    "intro": "Psychische problemen hebben een grote impact op iemands leven. Maar ook op het leven van de mensen in de omgeving. Als jij iemand in je omgeving hebt die kampt met psychische problemen, kan het zijn dat jij alles op alles zet om te helpen. Je kan je veel zorgen maken of het weer goed komt. Heel begrijpelijk, maar hoe voorkom je dat je hierdoor overbelast raakt en hoe zorg je ervoor dat er ruimte blijft voor jouw gevoelens?",
    "blokken": [
      {
        "tekst": "Op deze pagina bieden we je verschillende tips die je helpen bij de omgang met een naaste met psychische problemen. Ook geven we je tips om zelf overeind te blijven."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Cijfer jezelf niet weg. Als jij je fijn voelt, kan je er juist beter voor de ander zijn. Blijf leuke dingen doen waardoor je energie krijgt of je ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Onderhoud daarnaast het contact met anderen. Af en toe erover praten kan al erg opluchten. Bovendien heeft het geven en krijgen van steun een positief effect op hoe je je voelt. Stel ook grenzen naar je naaste toe als dat nodig is. Dit is misschien even wennen, maar het helpt je mentaal gezond te blijven. Vind je dit lastig? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Praat met je naaste"
      },
      {
        "tekst": "Wil je met je naaste praten over de klachten, maar vind je dat moeilijk? Stel vragen zonder je op te dringen. Probeer je woordkeuze neutraal te houden en oordeel niet. Mensen die zich beoordeeld voelen gaan vaak in de verdediging en dit maakt het lastig om een goed gesprek te voeren. Praat bijvoorbeeld over ‘concentratieproblemen’ in plaats van ‘je bent in de war’. Kijk ook wat jouw reactie doet. Onbedoeld hebben opmerkingen of het benoemen van aandoeningen soms een verkeerde uitwerking. Kijk of je anders kan reageren. Aansluiten bij de woorden die jouw naaste zelf gebruikt, helpt hierbij. Geef gerust aan dat het af en toe even zoeken is hoe je het beste kan reageren."
      },
      {
        "kop": "Stimuleer hulp te vragen"
      },
      {
        "tekst": "Heeft jouw naaste psychische klachten, maak jij je zorgen en krijgt diegene nog geen professionele hulp? Laat weten dat je om de ander geeft en bespreek jouw zorg. Geef aan dat het volgens jou een goed idee is om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Jouw naaste kan het als steunend ervaren als jij meegaat naar deze afspraak."
      },
      {
        "kop": "Ga niet op de stoel van hulpverlener zitten"
      },
      {
        "tekst": "Als je ziet dat je naaste het moeilijk heeft, kan je geneigd zijn te willen helpen met oplossingen, tips en adviezen. Onthoud dat jij niet de hulpverlener van diegene bent. Het is goed om op jouw manier te helpen en te steunen, maar neem geen taken over die eigenlijk bij de hulpverlening horen. Hulpverleners zijn hiervoor opgeleid en zo houd jij jouw relatie met je dierbare gezond. Bovendien zou je hiermee een veel belangrijkere rol opgeven, bijvoorbeeld die van broer, partner of ouder."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Heb je kinderen en is je naaste met psychische klachten jouw partner of een ander kind in het gezin? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg ze uit wat er met hun vader/moeder of broer/zus aan de hand is. Als er een crisis is, vertel je kinderen dan dat dit niet door hen komt. Uitleg helpt bij het ontwikkelen van strategieën om er goed mee om te kunnen gaan. Het is niet nodig om diep op achterliggende problemen in te gaan. Anders bestaat de kans dat kinderen zich verantwoordelijk gaan voelen."
      },
      {
        "tekst": "Probeer het onderwerp ook bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk voor kinderen dat ze gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning."
      },
      {
        "kop": "Accepteer en stel verwachtingen bij"
      },
      {
        "tekst": "Hoe graag je het ook wil, ga er niet van uit dat een behandeling alles snel ‘oplost’. Vaak gaat het om een wat langer proces met vallen en opstaan. Als jouw naaste heel erg verdrietig of boos is, is het mogelijk dat dit door de psychische problemen komt. Het heeft dus niets met jou te maken. Jouw naaste kan (tijdelijk) veranderen door de psychische problemen. Daar mag je verdrietig om zijn. Het klinkt misschien lastig, maar door de situatie te accepteren zoals die is, creëer je ruimte om problemen van een andere kant te bekijken. Mindfulness, een aandachttraining die je helpt dichterbij je gevoel te komen, zonder erover te oordelen of direct in actie te komen, kan hierbij helpen."
      },
      {
        "kop": "Vraag hulp en neem hulp van anderen aan"
      },
      {
        "tekst": "Als naaste van iemand met psychische problemen, kan jij ook behoefte hebben aan ondersteuning. Breng je sociale netwerk in kaart, zodat je weet wie je wanneer om hulp kan vragen. Heb jij het door de situatie moeilijk? Aarzel dan niet om professionele hulp te zoeken. Voor kinderen in het gezin kan preventieve hulp helpen met de situatie om te leren gaan. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen om op de been te blijven en je adviezen geven over hoe je het beste voor je naaste zorgt. Ook kan de huisarts je doorverwijzen voor passende hulp als dat nodig is. Heb je lichamelijke of ‘vage’ klachten, ga dan ook op tijd naar de huisarts."
      },
      {
        "tekst": "Heeft de situatie effect op je werk of opleiding? Praat erover met je werkgever of decaan/zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning. Als je het fijn vindt, neem dan een collega of studiegenoot in vertrouwen en vraag om steun."
      },
      {
        "kop": "Deel ervaringen"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt vaak voor herkenning en ‘lucht’ om met de situatie om te gaan. Het is heel steunend om te ervaren dat je niet de enige bent. Daarnaast kunnen andere naasten je misschien op weg helpen met de aanpak van problemen: de kans is groot dat iemand iets soortgelijks al eens eerder heeft meegemaakt. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Op deze pagina vind je meer informatie over wat verschillende cliënten- en familieorganisaties te bieden hebben, zoals lotgenotencontact voor naasten. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "narcisme-in-je-omgeving",
    "titel": "Narcisme in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/narcisme-in-je-omgeving",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_narcisme",
    "intro": "Wanneer je een familielid, vriend of partner hebt met een narcistische persoonlijkheidsstoornis, kan dat ingrijpend zijn. Voor je naaste, maar ook voor jou. Op deze pagina lees je tips om met je naaste om te gaan en zelf overeind te blijven.",
    "blokken": [
      {
        "kop": "Wat is een narcistische persoonlijkheidsstoornis?"
      },
      {
        "tekst": "Narcissus is een figuur uit de Griekse mythologie. Hij werd verliefd op zijn weerspiegeling in het water van een vijver. Zijn eigen spiegelbeeld slokte hem zo op, dat hij voor niets anders meer oog had. Het lukte hem niet meer om weg te komen bij zijn spiegelbeeld en hij kwijnde weg bij het water. Het enige wat van hem overbleef was een bloem: de narcis."
      },
      {
        "tekst": "We kennen bijna allemaal wel iemand die zichzelf erg bijzonder vindt en zich arrogant gedraagt. Misschien overdrijft die persoon graag eigen prestaties. Diegene beschouwt zichzelf als uniek, anders dan anderen en verwacht een speciale behandeling. Bij iemand met een narcistische persoonlijkheidsstoornis (narcisme) zijn deze neigingen extreem. Iemand met narcisme vindt zichzelf erg belangrijk en denkt veel na over succes, macht of ideale liefde. Ook heeft diegene behoefte aan grote bewondering van anderen. Tegelijkertijd heeft diegene problemen met zich verplaatsen in en rekening houden met de behoeften of gevoelens van anderen. Of maakt zelfs misbruik van anderen om er zelf beter van te worden. Iemand met narcisme is vaak jaloers op anderen of denkt dat anderen dat zijn op diegene. Kritiek is moeilijk te verdragen: de persoon reageert dan vaak met woede. Problemen met relaties, problemen op het werk en afwijzing zijn veelvoorkomende gevolgen van het gedrag van iemand met narcisme. Op zulke momenten kunnen onzekerheid en gevoelens van minderwaardigheid omhoogkomen. Dit kan samengaan met angst en somberheid. Hoe narcisme tot uiting komt, verschilt per persoon. Alleen een psychiater of psycholoog kan de diagnose stellen."
      },
      {
        "kop": "Motiveer je naaste om hulp te zoeken"
      },
      {
        "tekst": "Het werkt bij iemand met narcisme niet om te benoemen wat jij vindt dat er mis gaat bij diegene of wat die in jouw ogen verkeerd doet. Je naaste aanraden om in behandeling te gaan valt waarschijnlijk niet goed, omdat mensen met narcisme meestal niet het idee hebben dat de problemen in hun leven door henzelf veroorzaakt worden. Maak je naaste duidelijk welke voordelen diegene uit therapie kan halen: misschien kunnen bijvoorbeeld sociale problemen of klachten van somberheid of angst aangepakt worden. Op deze manier raakt diegene mogelijk wel gemotiveerd om hulp te zoeken."
      },
      {
        "kop": "Bewaak je eigen grenzen"
      },
      {
        "tekst": "Iemand met narcisme is geneigd de eigen belangen voor die van jou te stellen. Daarbij is de kans groot dat diegene geen rekening houdt met jouw gevoelens en behoeften. In gesprekken is je naaste meestal het onderwerp en is er maar weinig aandacht voor wat er in joú omgaat."
      },
      {
        "tekst": "Bepaal duidelijke grenzen: hoeveel aandacht of bevestiging wil ik geven? Op welk moment wordt het mij te veel en wil ik niet langer alleen maar met de ander bezig zijn? Stel voor jezelf vast wat jij wel en niet wil. En zorg er op een vriendelijke, maar duidelijke manier voor dat je naaste deze grenzen niet overgaat. Op zoek naar nog meer tips om je grenzen te stellen? Wij schreven een online gids om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Verdiep je in de narcistische persoonlijkheidsstoornis"
      },
      {
        "tekst": "Omgaan met iemand met een narcistische persoonlijkheidsstoornis kan een grote uitdaging zijn. Iemand met deze aandoening ziet anderen vaak als minderwaardig, wat een inbreuk kan zijn op jouw eigenwaarde. Zorg ervoor dat je goed weet wat de kenmerken van narcisme zijn, zodat je het gedrag van je naaste beter kan plaatsen. Kennis over een narcistische persoonlijkheidsstoornis helpt je om beter met het gedrag van je naaste om te gaan. En je te beseffen dat bepaald gedrag niets met jou te maken heeft, maar met het narcisme van de ander. Op internet en in boeken is veel informatie te vinden over de achtergronden, de symptomen en de aanpak van narcisme. Let hierbij op dat je betrouwbare bronnen gebruikt."
      },
      {
        "kop": "Vind steun voor jezelf"
      },
      {
        "tekst": "Het is belangrijk dat je je niet op een ongezonde manier aan gaat passen aan het onaangepaste gedrag van je familielid, vriend of partner. Als je het lastig vindt om met je naaste om te gaan en je hierdoor bijvoorbeeld vaak stress of somberheid ervaart, is het verstandig om ook steun voor jezelf te zoeken. Je kan praten met mensen in je omgeving. Als je meer steun nodig hebt, kan je huisarts je ook helpen bij het vinden van passende hulp. Gesprekken met een psycholoog bijvoorbeeld kunnen je inzichten en handvatten bieden. Uiteindelijk kan je niet je naaste veranderen, maar wel de manier waarop jij met je naaste omgaat en hoe jij je grenzen bewaakt."
      }
    ]
  },
  {
    "slug": "nee-zeggen",
    "titel": "Nee zeggen",
    "onderwerp": "Grenzen",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/nee-zeggen",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_nee_zeggen",
    "intro": "Veel van de stress die we ervaren wordt veroorzaakt doordat we geen nee zeggen. We zeggen bijna automatisch al ja op een verzoek, vaak uit onzekerheid, angst of schuldgevoel. Herken jij je hierin? Dan loop je het risico meer hooi op je vork te nemen dan goed voor je is. Leer om vaker nee te zeggen met de oefening en tips uit deze online gids.",
    "blokken": [
      {
        "tekst": "Natuurlijk moeten we allemaal wel eens iets doen waar we geen zin in hebben of waar we zelf niet veel aan hebben. En het ene verzoek is makkelijker af te wijzen dan het andere. Bijvoorbeeld een verzoek dat heel vrijblijvend wordt gesteld of als het om iets kleins gaat. Het wordt anders als de ander het presenteert alsof het vanzelfsprekend is dat je ja zegt, smeekt, aanhoudt of aandringt. Dan moet je sterk in je schoenen staan om nee te zeggen. Voor je het merkt, heb je misschien al toegegeven en heb je later spijt."
      },
      {
        "kop": "Houd je aan deze uitgangspunten bij een verzoek"
      },
      {
        "tekst": "Als iemand een verzoek aan je doet, bedenk je dan eerst wat de uitgangspunten zijn bij het stellen van een verzoek. Namelijk:"
      },
      {
        "lijst": [
          "Je mag nee zeggen op een verzoek! Het is niet voor niets een ‘verzoek’.",
          "Je mag weigeren zonder het geven van een reden of verklaring. Soms gaat je reden de ander ook helemaal niet aan."
        ]
      },
      {
        "kop": "Neem bedenktijd"
      },
      {
        "tekst": "Train jezelf om bedenktijd te vragen. Of je er nou direct ja of nee bij denkt of niet. Bepaal wat voor jou een fijn zinnetje is, bijvoorbeeld: \"Ik ga hier even over nadenken en kom er morgen bij je op terug, ok?\" Het is wel belangrijk om direct af te spreken wanneer je je reactie laat weten. De bedenktijd geeft je de mogelijkheid om te bedenken wat je echt wil en om af te wegen: als ik hier ja tegen zeg, waar zeg ik dan nee tegen? Wat levert het mij op als ik ja zeg? Of wat levert het mij juist op als ik nee zeg?"
      },
      {
        "kop": "Let op de manier waarop je nee zegt"
      },
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
      },
      {
        "kop": "Gebruik de ‘kapotte grammofoonplaattechniek'"
      },
      {
        "tekst": "Deze methode is goed om te gebruiken als je nee zegt, maar de ander blijft aandringen. Het enige dat je doet is nee blijven zeggen en jouw uitleg herhalen. Dit wordt ook wel de kapotte grammofoonplaattechniek genoemd. Vooral vroeger luisterden veel mensen naar grammofoonplaten, waarbij het regelmatig voor kwam dat de plaat op een kapot stukje bleef hangen. Met deze techniek laat je je niet ompraten of verleiden tot een discussie of excuses. Probeer het eens bewust uit. Blijf herhalen: \"Nee, het spijt me, daar heb ik geen tijd voor.\", \"Nee, zoals ik al zei, daar heb ik echt geen tijd voor.\""
      },
      {
        "kop": "Bedenk: Een keer nee zeggen mag écht!"
      },
      {
        "tekst": "Je kan ervan uitgaan dat mensen het niet erg vinden als je een keertje nee zegt. Vooral als je al heel vaak voor anderen klaarstaat. Ze zullen hooguit de eerste keer verbaasd zijn, omdat ze het niet van je gewend zijn. Durf het uit te proberen!"
      },
      {
        "kop": "Oefening"
      },
      {
        "tekst": "Wil je vaker nee zeggen? Start eens met onderstaande oefening:"
      },
      {
        "kop": "Maak een ‘Ik zeg nee top 5’"
      },
      {
        "tekst": "Pak pen en papier en schrijf jouw ‘Ik zeg nee top 5’ op (dit mag ook een top 3 of een top 10 zijn). Dit zijn dingen waartegen je vaker nee wil zeggen. Doe dat concreet. Start elke zin met: \"Ik wil niet langer…\" Bijvoorbeeld: \"Ik wil niet langer ja zeggen als mij wordt gevraagd in te vallen als overblijfmoeder op de school van mijn dochter.\" Of: \"Ik wil niet langer ja zeggen als mijn collega mij aan het einde van de middag vraagt of ik nog even snel voor morgen een rapport wil afmaken.\""
      },
      {
        "kop": "Bedenk je waarom je geen nee zegt in deze situaties"
      },
      {
        "tekst": "Vind je je werk zo leuk dat je graag alles wil doen? Of ben je bang dat anderen je niet aardig vinden als je nee zegt? Dit laatste komt vaak voor. Ook hebben veel mensen het gevoel dat nee zeggen tegen iemand egoïstisch overkomt. Of misschien voel je je schuldig. Of vind je het lastig je grenzen te herkennen? Wij schreven een online gids met tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Oefen nu hardop voor de spiegel"
      },
      {
        "tekst": "Nu je voor jezelf helder hebt in welke situaties je het lastig vindt om nee te zeggen en waarom je dat zo lastig vindt, ga je oefenen. Ga voor de spiegel staan. Stel je de situatie die je lastig vindt voor en zeg daarna eens hardop een paar keer: \"nee\"! Het klinkt misschien raar, maar dit kan echt nuttig zijn. Misschien moet je een drempel over om hardop nee te zeggen. Maar je zal merken dat het oplucht als je het doet, ook al is er nu niemand bij."
      }
    ]
  },
  {
    "slug": "overprikkeld",
    "titel": "Overprikkeld",
    "onderwerp": "Balans",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/overprikkeld",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_overprikkeld",
    "intro": "Sommige mensen zijn gevoeliger voor prikkels dan andere mensen. Licht, geluid, temperatuur, drukte en geuren kunnen voor overprikkeling zorgen. Mensen die overprikkeld zijn, voelen zich vaak onrustig of gestrest. Ze kunnen zich slecht concentreren, voelen zich moe en snel emotioneel of geïrriteerd. Op deze pagina geven we je tips die je helpen om te gaan met overprikkeling.",
    "blokken": [
      {
        "tekst": "Gevoelig zijn voor overprikkeling kan passen bij psychische problemen, zoals depressie of een angststoornis, maar ook bij andere aandoeningen zoals hersenletsel en migraine. Ook mensen met ADHD of autisme en hoogsensitieve en hoogbegaafde mensen zijn gevoelig voor prikkels. Snel overprikkeld raken is een van de kenmerken van een persoon en geen stoornis. Bovendien kan bijna iedereen zich wel eens een keer overprikkeld voelen."
      },
      {
        "tekst": "Toen er bijvoorbeeld weer meer kon nadat de coronamaatregelen werden versoepeld, herkenden veel mensen zich in overprikkeling. Ze moesten weer wennen aan situaties die voor de coronamaatregelen normaal waren. Zoals volle winkelstraten, sociaal contact in combinatie met veel geluid eromheen en het schakelen tussen verschillende locaties en situaties."
      },
      {
        "kop": "Probeer overprikkeling te begrijpen"
      },
      {
        "tekst": "Als je snel overprikkeld raakt, is het fijn om wat meer inzicht te krijgen over hoe prikkelverwerking en overprikkeling werkt. Door je te verdiepen in de achtergronden, de symptomen en de aanpak van overprikkeling, krijg je inzicht in manieren om er zo goed mogelijk mee om te gaan. Je kan hier meer informatie over vinden, bijvoorbeeld online of in boeken. Ook helpt het om duidelijk te krijgen waardoor jij overprikkeld raakt en hoe je hier vervolgens mee omgaat. Ga de momenten van overprikkeling van de afgelopen tijd langs en breng dit voor jezelf in kaart. Wat valt je op?"
      },
      {
        "kop": "Accepteer dat je af en toe overprikkeld raakt"
      },
      {
        "tekst": "Vaak kan je aan de omgeving niet zoveel veranderen, maar wel hoe je ermee omgaat. Een drukke winkelstraat blijft een drukke winkelstraat en harde geluiden van bijvoorbeeld klussende buren zijn niet altijd tegen te gaan. Kortom, een prikkelarme omgeving is niet altijd mogelijk. Wat hierbij goed helpt, is te accepteren dat je af en toe overprikkeld raakt. Hoewel dit niet altijd even makkelijk is, helpt het je er flexibeler mee om te gaan. Door er niet over te oordelen wordt ‘het probleem’ uiteindelijk minder duidelijk aanwezig en krijg je ruimte om het van een andere kant te bekijken. En misschien merk je zelfs wel dat je hierdoor steeds beter met prikkels om kan gaan. Bedenk bovendien dat je niet de enige bent die hier last van heeft. Heel veel mensen hebben hiermee te maken."
      },
      {
        "kop": "Richt je op het hier en nu"
      },
      {
        "tekst": "Ben je overprikkeld geraakt of zit je midden in een situatie die je overprikkelt? Sta stil bij wat je ervaart, laat alles toe en schiet niet in de ‘doe-stand’ om het op te lossen. Kijk er vanaf een afstandje naar en probeer er niets van te vinden. Focus je op de geluiden die je hoort, de dingen die je voelt of die je ziet. Hierdoor zijn je hersenen met iets anders bezig dan zich te verzetten tegen de situatie en zo geef je jezelf de kans om even tot rust te komen. Onze mindfulness oefeningen helpen je om je te richten op het hier en nu."
      },
      {
        "kop": "Ga het niet uit de weg en bouw vertrouwen op"
      },
      {
        "tekst": "Als je een situatie vervelend vindt, ben je vaak geneigd het uit de weg te gaan. Het is makkelijker ermee om te gaan als je vertrouwen hebt in jezelf en je gelooft dat het wel goed komt. Je kan werken aan dit vertrouwen door uitdagingen aan te pakken. In dit geval: Vind je het vervelend of spannend om in situaties te zijn die voor overprikkeling kunnen zorgen? En ben je daardoor minder gaan ondernemen dan je eigenlijk zou willen? Ga het niet uit de weg! Begin niet te moeilijk, plan dus niet gelijk je hele agenda vol met afspraken op drukke plekken. Maar ga bijvoorbeeld eerst eens naar een winkel of terras op een rustig tijdstip. Zorg dat wat je gaat doen haalbaar is, zodat de kans groot is dat het goed gaat. Zo ontwikkel je vertrouwen dat het een volgende keer weer goed gaat. Bouw het stap voor stap op. Gaat het toch niet zoals verwacht? Accepteer dit dan, denk aan tip 2 en 3 en probeer het later nog eens."
      },
      {
        "kop": "Doe wat goed voelt en geef je grenzen aan"
      },
      {
        "tekst": "Hoewel het niet altijd mogelijk en verstandig is om zoveel mogelijk prikkels uit de weg te gaan, is het wel heel belangrijk dat je bij jezelf blijft. Doe wat voor jou goed voelt. Ook als dit betekent dat je eerder weggaat om bij te komen van alle prikkels die je ervaart. Of dat je liever op een rustige plek afspreekt. Vind je dat lastig, omdat je druk ervaart van anderen? Geef je grenzen aan. Wij schreven tips om je grenzen te leren kennen en aan te geven. Ook ontwikkelden we opdrachten en tips om ‘Nee!’ te leren zeggen."
      },
      {
        "kop": "Ontspan na overprikkeling"
      },
      {
        "tekst": "Bedenk dat je na overprikkeling ontspanning nodig hebt om lichamelijk en mentaal bij te komen en de prikkels te verwerken. Plan na een inspannende activiteit daarom bewust ontspanning in. Pas dit aan op hoeveel energie een activiteit kost en hoeveel tijd je nodig hebt om tot rust te komen. Wat ontspant jou? Voor de een is bewegen heel ontspannend: een rondje (hard) lopen, fietsen of een uurtje zwemmen. Een ander ontspant juist door het lezen van een boek of tijdschrift, het kijken van een film of het nemen van een warm bad. Sommige mensen hebben veel aan ontspanningsoefeningen. Probeer ook voldoende te slapen, zodat je goed uitrust en meer aankan. Heb jij problemen met slapen? Meld je aan voor de Beter Slapen Challenge_."
      },
      {
        "kop": "Praat erover!"
      },
      {
        "tekst": "Praat erover met mensen in je omgeving. Waarschijnlijk zal je merken dat meer mensen last hebben van overprikkeling. Het delen van ervaringen zorgt vaak voor erkenning en ‘lucht’ om ermee om te gaan. Het is heel steunend om te ervaren dat je niet de enige bent. Daarnaast kunnen jullie elkaar misschien wel op weg helpen met tips en adviezen. Samen sta je sterk."
      },
      {
        "kop": "Vraag de MIND Hulplijn om advies"
      },
      {
        "tekst": "Heb jij last van overprikkeling en wil je jouw persoonlijke situatie graag met een professional bespreken? Neem contact op met onze MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
      }
    ]
  },
  {
    "slug": "paniekaanval",
    "titel": "Paniekaanval",
    "onderwerp": "Angst",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/paniekaanval",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_paniekaanvallen",
    "intro": "",
    "blokken": []
  },
  {
    "slug": "piekeren",
    "titel": "Piekeren",
    "onderwerp": "Piekeren",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/piekeren",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_piekeren",
    "intro": "Iedereen piekert wel eens en daar is op zich niets mis mee. Een doktersafspraak waar je tegenop ziet, een woordenwisseling met je partner of een feestje dat veel geregel met zich meebrengt, kunnen allemaal redenen zijn om je zorgen te maken en te piekeren. Helaas leidt piekeren niet tot oplossingen of nieuwe inzichten. Sterker nog, veel piekeren kan leiden tot stress, angst en somberheid. Bovendien kost piekeren veel tijd en energie. Wanneer je veel piekert, is het daarom belangrijk om te leren hoe je je piekergedrag kan verminderen. Met de tips en technieken uit deze online gids kan je concrete stappen zetten om je gepieker aan te pakken.",
    "blokken": [
      {
        "kop": "Piekeren of nadenken?"
      },
      {
        "tekst": "Maar eerst gaan we kort in op de vraag; waarin is piekeren anders dan nadenken? Het verschil tussen nadenken en piekeren is dat nadenken leidt tot een oplossing, terwijl er bij piekeren sprake is van een eindeloze reeks negatieve gedachten over de toekomst of het verleden die maar door je hoofd blijven gaan. Die gedachten beginnen vaak met de woorden \"Wat als...?\" of \"Stel dat...?\""
      },
      {
        "tekst": "Wil jij inschatten hoeveel je piekert?"
      },
      {
        "linkLabel": "Doe de piekertest",
        "linkUrl": "https://formulier.wijzijnmind.nl/piekertest"
      },
      {
        "tekst": "Wees niet ontmoedigd wanneer onderstaande tips en technieken niet meteen vlekkeloos gaan. Net als voor andere vaardigheden geldt ook voor stoppen met piekeren: oefening baart kunst."
      },
      {
        "kop": "Gedachten stop techniek"
      },
      {
        "tekst": "Met deze techniek probeer je de stroom aan gedachten die je hebt wanneer je piekert te doorbreken en je gedachten te richten op andere dingen. Piekergedachten zijn bijna altijd negatieve gedachten. Wees je hiervan bewust en probeer de negatieve gedachten te vervangen door positieve gedachten. Als je in de gaten hebt dat je je zorgen maakt, zeg je letterlijk en hardop \"stop!\" tegen jezelf. Dit lijkt misschien vreemd, maar het kan erg effectief zijn. Vervolgens zeg je hardop: \"Op dit moment denk ik aan… (je negatieve gedachte), maar eigenlijk wil ik denken aan… (je nieuwe, positieve gedachte).\" Bijvoorbeeld: \"Op dit moment denk ik aan mijn examen van volgende week, maar eigenlijk wil ik denken aan afgelopen zaterdag, toen we zo gezellig uit eten geweest zijn.\" Oefen hier net zolang mee, totdat je alleen nog maar in je hoofd \"stop!\" tegen jezelf hoeft te zeggen om je piekergedachten te doorbreken."
      },
      {
        "kop": "Zoek afleiding"
      },
      {
        "tekst": "Wanneer je merkt dat je begint te piekeren, ga dan iets doen. Iets doen leidt je gedachten af. Vooral bewegen kan goed helpen tegen gepieker. Ga bijvoorbeeld sporten of wandelen. Veel mensen geven aan dat ze door te bewegen ‘hun hoofd leeg kunnen maken’. Wanneer je ’s nachts ligt te piekeren, kan het ook helpen om afleiding te zoeken. Probeer een beetje te lezen. Of doe een ontspanningsoefening."
      },
      {
        "kop": "Piekerkwartier"
      },
      {
        "tekst": "Plan iedere dag voor jezelf een vast tijdstip waarop je een kwartier heel bewust je zorgen overdenkt. Het is belangrijk dat je echt na vijftien minuten stopt en afleiding zoekt. Zet daarom een wekker op je telefoon. Wanneer je buiten dit kwartier een piekergedachte krijgt, schrijf je deze op een ‘piekerlijstje’. Pas wanneer je piekerkwartier is aangebroken, mag je nadenken over de zorgen die je hebt opgeschreven op je lijstje. Het kan best zijn dat tegen die tijd de zorgen er niet meer zijn. Zijn de zorgen er nog wel, dan kan je hierover in je piekerkwartier rustig nadenken. Wanneer je het prettig vindt kan je in je piekerkwartier je gedachten ook opschrijven. Dit kan helpen om je gedachten te ordenen. Je zal merken dat het denken over zorgen een andere lading krijgt wanneer je het bewust doet en dat je buiten je piekerkwartier uiteindelijk minder gaat piekeren."
      },
      {
        "kop": "Piekerelastiekje"
      },
      {
        "tekst": "Draag een los elastiekje om je pols. Steeds als je merkt dat je een negatieve gedachte hebt of begint te piekeren, trek je aan het elastiekje en tik je hierdoor zachtjes tegen je pols. Dit kan de stroom aan gedachten even doorbreken. Probeer vervolgens bewust aan iets anders, positiefs te denken. Misschien heb je in het begin het idee dat je de hele tijd aan het elastiekje zit te plukken. Dat is niet erg. Het is juist de bedoeling dat je je ervan bewust wordt hoeveel piekergedachten je hebt."
      },
      {
        "kop": "Doe een ontspannende oefening"
      },
      {
        "tekst": "Een ontspannende oefening kan je op ieder moment van de dag doen. Een voorbeeld van een ontspanningsoefening is een buikademhalingsoefening. Deze kan je het gemakkelijkste aanleren terwijl je ligt. Wanneer je meer ervaring met de oefening hebt, kan je deze ook zittend of zelfs staand uitvoeren. Voer de oefening als volgt uit: ga gemakkelijk liggen. Sluit je ogen en leg je handen op je buik. Duw je buik uit bij het inademen en trek je buik lichtjes in bij het uitademen. Tel in gedachten iedere in- en iedere uitademing. Probeer de in- en uitademing rustig en regelmatig te laten verlopen. Wanneer je merkt dat je gedachten afdwalen, begin dan gewoon opnieuw te tellen. Op een gegeven moment zal je merken dat het ademen je ontspant en dat je alleen nog maar met het ademen bezig bent, in plaats van te piekeren. Op onze website vind je meer ontspanningsoefeningen."
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Het kan zijn dat je je zorgen maakt over je gepieker. Als dit zo is, is het belangrijk dat je je hart lucht en steun zoekt. Praat over je gevoelens met bijvoorbeeld familieleden of vrienden. Merk je dat je door je gepieker al meer dan twee weken veel moeite hebt met je dagelijkse leven? Zoek dan steun bij een professional. De eerste stap om professionele hulp te vragen is een afspraak bij de huisarts. De huisarts kijkt samen met jou naar wat je kan helpen."
      },
      {
        "tekst": "Vind je het moeilijk om te praten over hoe je je voelt? Wij schreven een online gids met tips en info die je hierbij kunnen helpen."
      }
    ]
  },
  {
    "slug": "praten-over-hoe-je-je-voelt-tips-en-info",
    "titel": "Praten over hoe je je voelt",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/praten-over-hoe-je-je-voelt-tips-en-info",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_praten_over_online_website",
    "intro": "Zit jij niet zo lekker in je vel? Zit je ergens mee of heb jij last van psychische klachten en wil je daar graag over praten? Of heeft iemand je geadviseerd dit te doen, maar weet je niet zo goed hoe? Of vind je het lastig over dit soort dingen te praten? Graag helpen we je op weg met informatie en tips.",
    "blokken": [
      {
        "kop": "Maar eerst; wat bedoelen we met psychische klachten?"
      },
      {
        "tekst": "We hebben allemaal wel eens dat we ons niet fijn voelen. Je zou kunnen zeggen dat iedereen wel eens last heeft van psychische klachten. Niemand kan altijd gelukkig zijn en nare gebeurtenissen en gevoelens horen bij het leven. De een voelt zich wel eens somber, de ander piekert wel eens en weer een ander is wel eens bang of ziet op tegen een bepaalde situatie."
      },
      {
        "tekst": "Helaas heeft bijna de helft van de mensen ooit in het leven zoveel last van psychische klachten dat het veel invloed heeft op het dagelijks leven. Er is meer aan de hand als je langer dan twee weken last hebt van klachten of als je merkt dat het je beperkt op meerdere gebieden in je leven, zoals in contact met anderen, persoonlijk of op je school of werk."
      },
      {
        "tekst": "Of je nu milde klachten ervaart of dat je klachten je erg in de weg zitten, in veel gevallen is het fijn om hierover met anderen te praten."
      },
      {
        "kop": "Waarom praten belangrijk is"
      },
      {
        "tekst": "Veel mensen ervaren dat ze spanning kwijtraken als ze praten over wat hen dwarszit. Als je blijft piekeren in je hoofd, worden problemen vaak groter dan ze zijn. Door er met iemand over te praten, kan je er met afstand naar kijken en beter begrijpen wat je voelt en hoe dat komt. Ook kunnen de mensen in je omgeving je beter helpen of steunen als ze weten waar je last van hebt. Samen zie je mogelijkheden of oplossingen die je vaak in je eentje niet zo kan bedenken."
      },
      {
        "kop": "Waarom praten over psychische klachten lastig kan zijn"
      },
      {
        "tekst": "We begrijpen dat er soms dingen kunnen zijn die jou tegenhouden om te praten. Bijvoorbeeld omdat je bang bent voor de reactie van de ander, omdat je je schaamt, je niet zwak wil overkomen, omdat je niet zo’n makkelijke prater bent of omdat je van huis uit niet zo gewend bent om te praten. Dat is oké en normaal. Veel mensen vinden het in het begin spannend om open te zijn. Hopelijk heb je veel aan onze tips."
      },
      {
        "kop": "Soms helpen andere manieren beter"
      },
      {
        "tekst": "Sommige mensen uiten hun emoties liever op andere manieren, dat is ook goed. Denk aan sporten, een film kijken of bezig zijn met hun hobby. Of misschien vind jij het wel fijn om van je af te schrijven."
      },
      {
        "tekst": "Probeer eerst om te praten, ook al lijkt dat lastig. Wie weet merk je wel dat het tegen je verwachtingen in goed voor jou uitpakt. Merk je dat praten voor jou echt niet goed helpt, kijk dan naar andere manieren om je emoties te uiten. Ook kan het per persoon per keer verschillen. De ene keer vind je het fijn om erover te praten en de andere keer ga je liever los in de sportschool."
      },
      {
        "tekst": "Als je al langer last hebt van klachten en veel piekert of veel dingen negatief bekijkt, helpt het ook niet altijd als je hier veel over praat zonder dat jullie samen naar oplossingen zoeken. In plaats van dat je nare gevoelens verdwijnen, kan het er dan juist voor zorgen dat je ze blijft ervaren. Je kan zelfs het gevoel hebben dat de problemen bij je horen, waardoor het nog lastiger is ze los te laten. En wanneer je veel met iemand samen elkaars negatieve gevoelens, problemen en zorgen bespreekt, kan het er ook voor zorgen dat je elkaar juist in de put praat. Dit omdat negatieve emoties dan centraal staan in de vriendschap of relatie."
      },
      {
        "kop": "TIPS OM TE PRATEN OVER JE KLACHTEN"
      },
      {
        "kop": "Pak de regie"
      },
      {
        "tekst": "Waar mensen vroeger vaak tegen elkaar zeiden dat ze zeker niet moesten praten over hun problemen of kwetsbaarheden is dat vandaag de dag anders. Steeds vaker hoor je dat het goed is om te praten over wat je dwarszit. Ook vanuit MIND juichen we openheid over psychische klachten toe. Het kan een opluchting zijn om je verhaal te doen en zo weet ook je omgeving waar je tegenaan loopt. Maar of je vertelt hoe het met je gaat, dat is helemaal aan jou. Bekijk wat bij jou past en waar jij je fijn bij voelt."
      },
      {
        "tekst": "De voordelen en nadelen van open zijn op een rijtje zetten, helpen je hierbij. Een voordeel kan bijvoorbeeld zijn dat je de ander makkelijker om hulp kan vragen. Een nadeel kan zijn dat je niet de reactie krijgt die je hoopt. Vergelijk de voor- en nadelen met elkaar. Probeer een keuze te maken op basis van wat jij het belangrijkste vindt."
      },
      {
        "tekst": "Open zijn betekent niet dat je iedereen erover móet vertellen. Bepaal zelf aan wie je wat vertelt. En geef het aan als je over iets liever niet praat. Je hoeft niet meteen alles te vertellen."
      },
      {
        "kop": "Zoek iemand die je vertrouwt"
      },
      {
        "tekst": "Het is natuurlijk het fijnst om je verhaal kwijt te kunnen bij iemand waarbij jij je op je gemak voelt en die je vertrouwt. Bedenk wie dit voor jou is of zijn. Voor veel mensen is dit hun partner, familielid of vriend; de mensen die in veel gevallen wel gemerkt hebben dat er iets bij je speelt. Natuurlijk kunnen dit ook een aantal mensen zijn. Sommige mensen vinden het in eerste instantie fijn om met iemand te praten die wat verder van hen afstaat, denk aan een collega, iemand uit je buurt of iemand van je sportclub. Heb je niet direct iemand in je omgeving waarmee je kan praten of vind je dit nog lastig? Wij bieden het Connect portaal, waarbij je gelijkgestemde mensen kan vinden die (ongeveer) in dezelfde situatie zitten. Ben je tussen de 12 en 25 jaar, dan kan je ook terecht bij @ease, een plek voor als het even tegenzit. Heb je vooral behoefte aan een luisterend oor, neem dan contact op met de Luisterlijn."
      },
      {
        "kop": "Bereid voor wat je gaat vertellen"
      },
      {
        "tekst": "Hoe vertel je iemand waar je last van hebt? Soms ontstaat dit vanzelf, maar het kan ook best lastig zijn als je niet zo gewend bent om over dit soort dingen te praten of om je kwetsbaar op te stellen. Bovendien; hoe bepaal je wat je precies gaat vertellen en waar begin je? Bereid daarom vooraf voor wat je wil vertellen. Waar heb je last van? Hoe uit zich dit? Waar heb je moeite mee? Waarom wil je dit vertellen? En wat zou je helpen? De antwoorden op bovenstaande vragen kan je opschrijven. Lees het eventueel voor of laat het lezen als je dat prettig vindt. Oefen hardop voor jezelf als je dat houvast geeft. Je kan jouw verhaal starten met: “Ik wil je graag wat persoonlijks vertellen.” Of: “Misschien heb je de laatste tijd wel gemerkt dat ik niet zo lekker in mijn vel zit. Ik zou daar graag wat over vertellen.”"
      },
      {
        "kop": "Houd het licht"
      },
      {
        "tekst": "Een zwaar gesprek voeren is niet altijd nodig om een goed gesprek te hebben. Als je het gesprek licht houdt, vermijd je dat jullie je gespannen voelen en kan je op een meer ontspannen manier bespreken wat er speelt. Maar soms ontkom je er niet aan dat het wat zwaarder wordt, omdat het je raakt. Ook dat is niet erg."
      },
      {
        "kop": "Wees niet bang je emoties te laten zien"
      },
      {
        "tekst": "Start gerust het gesprek met dat je het lastig vindt, omdat je wat persoonlijks wil delen. Het is niet erg als je emotioneel wordt of als je erdoor wordt geraakt, je mag dit ook best benoemen. Ook kan je gewoon aangeven als je je schaamt voor iets. Misschien is je verhaal in het begin door alle emotie wat onsamenhangend, probeer het dan gewoon opnieuw. Neem voldoende tijd om je verhaal te vertellen."
      },
      {
        "tekst": "Bron: Pexels"
      },
      {
        "kop": "Kies het juiste moment"
      },
      {
        "tekst": "Een goed moment pakken om je verhaal te beginnen, maakt het praten makkelijker. Het is fijn als jullie allebei tijd hebben en de sfeer ontspannen is. Bijvoorbeeld als jullie iets aan het doen zijn wat niet veel aandacht vraagt, zoals wandelen, fietsen of samen koken. Hierdoor kan het wat minder confronterend voelen."
      },
      {
        "tekst": "Als je niet zeker weet of het jouw gesprekspartner uitkomt dat jij over iets wil praten, check dit dan even. Je kan bijvoorbeeld aangeven dat je graag iets persoonlijks wil bespreken en vragen of dit uitkomt. Als blijkt dat de ander bijvoorbeeld net een drukke dag heeft gehad, met iets anders bezig is of niet zo veel energie heeft, dan is het goed hier begrip voor te hebben en te beseffen dat dit niet aan jou ligt. Wacht dan liever op een rustig moment, zodat de ander wel de aandacht heeft."
      },
      {
        "kop": "Noem voorbeelden"
      },
      {
        "tekst": "Het geven van voorbeelden is vaak een fijne manier om iets uit te leggen en het begrijpelijk te maken voor de ander. Bijvoorbeeld: “Ik merk de laatste tijd dat ik wat vaker pieker over mijn werk.” Of: \"Ik voel me wel eens eenzaam.” Of: “Als ik ‘s morgens opsta, heb ik vaak geen zin in de dag.” Of: “Als ik op een plek ben met veel mensen, ben ik bang dat ik ga flauwvallen.”"
      },
      {
        "kop": "Geef aan waar je behoefte aan hebt"
      },
      {
        "tekst": "Geef aan wat je nodig hebt. Bijvoorbeeld dat je alleen even een luisterend oor wil. Zo weet diegene die je in vertrouwen neemt beter hoe te helpen. Veel mensen komen snel met oplossingen, terwijl je daar geen behoefte aan kan hebben. Dit kan je op een vriendelijke manier zeggen, bijvoorbeeld: “Ik vind het heel lief dat je meedenkt, maar het helpt mij vooral als ik mijn verhaal even kwijt kan.” Of: “Ik voel nu even geen ruimte om het te hebben over oplossingen, zullen we het daar later over hebben?”"
      },
      {
        "kop": "Heb vertrouwen"
      },
      {
        "tekst": "De meeste mensen reageren heel aardig als iemand zich openstelt en waarderen het juist dat je dit bij hen doet. Ze zien het als compliment dat je hen vertrouwt. En wie weet zorgt het ook voor herkenning. In veel gevallen zorgt het voor verbinding. Mocht dit toch anders lopen, kijk dan even naar de twee volgende tips."
      },
      {
        "kop": "Geef de ander ruimte"
      },
      {
        "tekst": "Ieder mens reageert op een eigen manier. Sommige mensen moeten even verwerken wat je hebt gezegd. Dit merk je bijvoorbeeld doordat je gesprekspartner eerst een stilte laat vallen. Of dat diegene heel veel vragen heeft en meer informatie wil hebben om het te begrijpen. Geef de ander deze ruimte. Ook is het zo dat sommige mensen niet zo goed weten hoe ze moeten reageren. Dit merk je bijvoorbeeld doordat je gesprekspartner het kleiner probeert te maken of met cliché opmerkingen komt of allerlei oplossingen waar jij op dat moment niet zo veel mee kan. Vaak is het zo dat ze juist willen helpen en niet bewust reageren op een manier die jij niet fijn vindt. Laat je daarom niet ontmoedigen door de eerste reactie. Geef de ander tijd. Het is sowieso goed dat de eerste stap is gezet."
      },
      {
        "kop": "Probeer te accepteren dat niet iedereen reageert zoals jij hoopt"
      },
      {
        "tekst": "Het kan voorkomen dat iemand je echt niet goed begrijpt of vervelend reageert. Loopt het gesprek heel anders dan je had gehoopt? Hoe lastig het ook is, probeer te accepteren dat de ander zo reageert. Je kan aangeven dat je dit niet prettig vindt en waarom. En dit aanvullen met wat jij wel nodig hebt. Houd vast aan het idee dat er altijd mensen zullen zijn die wel luisteren. En die er voor je zijn op een manier die jij fijn vindt. Soms is het alleen even zoeken om de juiste mensen te vinden. Dit kan soms wat tijd en moeite kosten, maar blijf vertrouwen houden."
      },
      {
        "kop": "BLIJF ER NIET MEE RONDLOPEN!"
      },
      {
        "tekst": "Heb jij veel last van je klachten? Zoek dan altijd professionele hulp! De eerste stap is de huisarts, die samen met jou kijkt waar je last van hebt en wat je nodig hebt. Bedenk je dat de huisarts vaak te maken krijgt met mensen die last hebben van psychische klachten. Het is niets om je voor te schamen! Vind je het lastig om je verhaal te doen? Noteer vooraf op een briefje of in je telefoon welke klachten je ervaart en neem dit mee. Ook kan je iemand uit je omgeving vragen met jou mee te gaan naar de huisarts als je dat fijn vindt."
      },
      {
        "tekst": "Daarnaast kan je altijd bellen met onze MIND Hulplijn voor anoniem, gratis en deskundig advies. Onze hulpverleners denken graag met je mee en kunnen je ook helpen het gesprek met de huisarts of andere mensen in jouw omgeving voor te bereiden."
      }
    ]
  },
  {
    "slug": "psychische-klachten-ouderen",
    "titel": "Psychische klachten bij ouderen",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/psychische-klachten-ouderen",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_psychische_klachten_ouderen",
    "intro": "",
    "blokken": []
  },
  {
    "slug": "psychose-in-je-omgeving",
    "titel": "Psychose in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/psychose-in-je-omgeving",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_psychose_naasten",
    "intro": "Mensen die een psychose hebben, ervaren intense belevingen of overtuigingen die hun naasten niet delen. De symptomen kunnen sterk verschillen van persoon tot persoon. Milde vormen van deze symptomen komen bij veel mensen voor. Pas als ze een duidelijke negatieve impact hebben op het dagelijks leven, spreken we van een psychose. Een psychose heeft ook een grote invloed op de mensen in de omgeving. Op deze pagina krijg je tips die je helpen bij de omgang met een naaste met psychosegevoeligheid. En tips hoe je zelf overeind blijft.",
    "blokken": [
      {
        "tekst": "Mensen met een psychose horen, zien, voelen, proeven of ruiken bijvoorbeeld dingen die andere mensen niet ervaren. Dit noemen we hallucinaties. Of ze zijn ergens sterk van overtuigd, terwijl de meeste mensen in hun omgeving hun idee niet herkennen. Dit noemen we wanen. Bijvoorbeeld het idee achtervolgd te worden of het idee dat gedachten worden bestuurd. Een psychose kan samengaan met een verwarde manier van denken en doen. Ook motivatieproblemen en een afgevlakte gevoelsuitdrukking kunnen erbij horen. Iemand met een psychose wordt zo in beslag genomen door deze ervaringen dat het niet goed meer lukt te functioneren. Als iemand een psychose heeft doorgemaakt, dan is de kans groter dat diegene vaker een psychose krijgt. Vaak wordt hier de term psychosegevoeligheid voor gebruikt."
      },
      {
        "kop": "Stimuleer hulp te zoeken"
      },
      {
        "tekst": "Twijfel je of jouw naaste last heeft van een psychose? Stimuleer de ander altijd om professionele hulp te zoeken. De kans op herstel is namelijk het grootst als psychotische verschijnselen in een vroeg stadium worden herkend en behandeld. Laat weten dat je om de ander geeft en bespreek jouw zorg. Geef aan dat het volgens jou een goed idee is om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Jouw naaste kan het als steunend ervaren als jij meegaat naar deze afspraak."
      },
      {
        "tekst": "Veel jongeren ervaren wel eens buitengewone ervaringen. Er zijn in Nederland speciale ‘Early Detection and Intervention’-teams (EDI-teams) die helpen als bijzondere ervaringen een probleem worden. Iemand met een psychose is niet altijd te overtuigen dat diegene hulp nodig heeft. Aandringen heeft dan geen zin. In contact blijven wel. Probeer in gesprek te blijven over waar jouw naaste de meeste last van heeft en bij het feit dat jouw naaste steeds meer alleen komt te staan. En wat daarbij zou kunnen helpen. Naastenvereniging Ypsilon schreef een brochure over hoe je in contact kan blijven met je naaste."
      },
      {
        "kop": "Krijg inzicht in psychosegevoeligheid"
      },
      {
        "tekst": "Op onze website vind je meer informatie over psychose. Daarnaast zijn er boeken met betrouwbare informatie. Een aandoening uit zich bij iedereen anders. Door je te verdiepen in de achtergronden, de symptomen en de aanpak van psychosegevoeligheid leer je wat het inhoudt. Hierdoor begrijp je het wat beter en kan je beter met je naaste omgaan. Bij sommige behandelingen worden psycho-educatie en cursussen voor naasten aangeboden. Je krijgt dan informatie en voorlichting over psychose en tips en handvatten over hoe ermee om te gaan. Vaak is er ruimte om ervaringen uit te wisselen. Bekijk ook eens het aanbod van informatie, workshops en trainingen op deze webpagina van Ypsilon."
      },
      {
        "kop": "Blijf nauw betrokken"
      },
      {
        "tekst": "Als jouw naaste zich anders en vreemd gedraagt, is het belangrijk om zo goed mogelijk in contact te blijven. Voor jou zijn de stemmen of gedachten vreemd, maar jouw naaste ervaart ze echt. Ga er daarom niet tegenin en luister naar wat de ander zegt. Dit betekent niet dat je diegene overal gelijk in geeft. Creëer ruimte, zodat de ander zich open kan stellen. Stel vragen over gevoelens en gedachten. En vraag waar de ander behoefte aan heeft. Doe dit zonder jezelf op te dringen. Probeer je woordkeuze neutraal te houden en geef geen waardeoordeel. Het kan zijn dat jouw naaste het fijn vindt om gerustgesteld te worden. Bijvoorbeeld omdat jouw naaste angstig is en het lastig vindt hier duidelijk over te vertellen. Als de ander zich door jou bedreigd voelt of geen interesse toont in wat jij vertelt, bedenk dan dat dit door de psychose komt. De ander is nu niet helemaal zichzelf."
      },
      {
        "kop": "Communiceer duidelijk en eerlijk"
      },
      {
        "tekst": "Jouw naaste kan door de psychose in de war zijn of het lastig vinden om zich te concentreren. Wil je iets vragen of vertellen? Doe dit dan zo helder en kort mogelijk. Stel ook niet meerdere vragen tegelijk. Wees tegelijkertijd eerlijk als jij de ander niet goed volgt of begrijpt."
      },
      {
        "kop": "Werk samen met de hulpverlening"
      },
      {
        "tekst": "Uit onderzoek blijkt dat familie en naasten een belangrijke rol hebben in het verkleinen van de kans op een nieuwe psychose. De grootste kans op herstel is als cliënt, naaste en hulpverlener samenwerken. Dit noemen we triadisch werken. Deel met de hulpverlening alle informatie waarvan jij denkt dat dit belangrijk is. Bespreek hoe jij kan en wil bijdragen en wat jij daarbij aan ondersteuning nodig hebt. De triadekaart van Ypsilon helpt hierbij."
      },
      {
        "tekst": "Ook kan je samen met jouw naaste en de hulpverlening een signaleringsplan of crisisplan opstellen. In een signaleringsplan staan de signalen die wijzen op een terugval. En op welke manier die te voorkomen is. In een crisisplan staat wat er wel of juist niet moet gebeuren bij een terugval. Deze plannen geven jouw naaste regie over de behandeling en jou duidelijkheid over jouw rol. Daarnaast staan er dingen in over onder andere herstel, ontwikkeling en het krijgen van steun."
      },
      {
        "kop": "Stel verwachtingen bij en heb aandacht voor wat goed gaat"
      },
      {
        "tekst": "Hoe graag je het zou willen, ga er niet vanuit dat een behandeling alles snel oplost. Vaak gaat het om een langer proces met vallen en opstaan. Psychosegevoeligheid is meestal niet volledig te verhelpen. Hulpverleners hebben hulpmiddelen, maar kunnen niet alles. Zo hangt het ook af van hoe actief de cliënt deelneemt aan de behandeling. Heb ook aandacht voor dingen die goed gaan en benoem ze. Moedig eigen initiatief aan en wees blij met kleine stappen. Jouw naaste kan (tijdelijk) veranderen door een psychose. Daar mag je verdrietig om zijn."
      },
      {
        "kop": "Bedenk dat iemand niet de psychose is"
      },
      {
        "tekst": "Hoewel een psychose ingrijpend is, is iemand niet zijn aandoening. Natuurlijk maakt de stoornis onderdeel van diegene uit, maar de ander is nog zoveel meer. Bijvoorbeeld moeder of vader, zoon of dochter. Het kan helpen wanneer jij dit af en toe uitspreekt."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Zorg in de eerste plaats goed voor jezelf. Want als jij je goed voelt, kan je er beter voor de ander zijn. Cijfer jezelf niet weg en blijf dingen doen waarvan je energie krijgt en ontspant. Ontspanningsoefeningen kunnen hierbij helpen. Onderhoud ook het contact met anderen. Erover praten lucht op."
      },
      {
        "kop": "Geef je grenzen aan"
      },
      {
        "tekst": "Goed voor jezelf zorgen kan niet zonder je grenzen aan te geven. Maak duidelijk wat je wel en wat je niet kan of wil. Maar ook wat jij van de ander verwacht en stel kaders. Het is misschien even wennen, maar het stellen van grenzen helpt je mentaal gezond te blijven. Vind je dit lastig? We schreven tips omje grenzen te leren kennen en aan te geven. Naast het stellen van jouw grenzen, is het net zo belangrijk om ze te bewaken. Stel dus grenzen die je waar kan maken. Je grenzen mogen anders zijn bij verschillende fases van je naaste. Midden in een heftige psychose stel je de grenzen misschien anders dan wanneer je naaste niet meer in de psychose zit, maar bijvoorbeeld wel erg inactief is. Gevaarlijk of zeer onaangenaam gedrag moet je altijd blijven begrenzen."
      },
      {
        "kop": "Heb aandacht voor kinderen in het gezin"
      },
      {
        "tekst": "Zijn er kinderen in het gezin? Zijn er broers en zussen? Of is je naaste met psychosegevoeligheid je partner en hebben jullie kinderen? Kinderen merken bijna altijd dat er iets aan de hand is, ook al lijkt dat soms niet zo. Leg uit wat er met hun broer/zus of vader/moeder aan de hand is. Vertel dat dit niet door hen komt. Uitleg draagt bij aan het ontwikkelen van strategieën om er goed mee om te gaan. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg ervoor dat je kinderen genoeg afleiding hebben buitenshuis, weg van de spanning. Blijf met het hele gezin leuke dingen ondernemen en heb aandacht voor de verhalen en behoeftes van je kinderen. Zo zorg je ervoor dat niet alles om de psychosegevoeligheid draait."
      },
      {
        "kop": "Vraag hulp en neem hulp van anderen aan"
      },
      {
        "tekst": "Als naaste kan jij ook behoefte hebben aan ondersteuning. Vind je het lastig om anderen om hulp te vragen? Weet dat in de meeste gevallen vrienden en familieleden graag helpen. Heb jij het door de situatie moeilijk? Aarzel dan niet om professionele hulp te zoeken. Voor kinderen in het gezin kan preventieve hulp helpen met de situatie om te leren gaan. Naar de huisarts gaan is de eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen om op de been te blijven en je adviezen geven over hoe je het beste voor je naaste zorgt. De. huisarts verwijst je door voor passende hulp als dat nodig is. Ga ook bij lichamelijke of ‘vage’ klachten op tijd naar de huisarts. Heeft de situatie effect op je werk of opleiding? Praat erover met je werkgever of mentor/zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning."
      },
      {
        "kop": "Zoek contact met andere naasten"
      },
      {
        "tekst": "Het delen van ervaringen met andere naasten zorgt vaak voor erkenning en ‘lucht’ om met de situatie om te gaan. Veel mensen vinden het steunend om te ervaren dat ze niet de enige zijn. Daarnaast kunnen anderen je misschien op weg helpen met de aanpak van problemen. De kans is groot dat een ander iets soortgelijks heeft meegemaakt. Via de website Naasten in Kracht vind je informatie, tips, inspiratie en steun. Vooral van elkaar. Op de website van Ypsilon vind je informatie over lotgenotencontact. Via het Connect portaalkan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      }
    ]
  },
  {
    "slug": "ptss",
    "titel": "PTSS",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/ptss",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_ptss",
    "intro": "De meeste mensen die een schokkende gebeurtenis meemaken, schrikken hier erg van en hebben tijd nodig dit te verwerken. Als je een posttraumatische stressstoornis (PTSS) hebt, blijf je last houden van klachten. Hoewel er verschillen zijn tussen de symptomen die mensen met PTSS ervaren, heeft het in de meeste gevallen veel invloed op het dagelijkse leven. Op deze pagina krijg je tips die je kunnen helpen bij het omgaan met PTSS.",
    "blokken": [
      {
        "tekst": "Voorbeelden van schokkende gebeurtenissen zijn lichamelijk, psychisch of seksueel geweld, een verkeersongeluk, oorlog of het verliezen van een dierbare. Dit zijn slechts voorbeelden. Er zijn nog veel meer schokkende gebeurtenissen te noemen."
      },
      {
        "tekst": "Als je PTTS hebt dan kan het zijn dat je de gebeurtenis steeds opnieuw beleeft in je hoofd en je last hebt van nachtmerries en slaapproblemen. Je vermijdt gedachten en dingen die je aan de gebeurtenis doen denken. Je hebt negatieve gedachten en gevoelens. Je hebt bijvoorbeeld nergens zin in en bent prikkelbaar en snel boos. Je schrikt snel en concentreren kost je moeite. Ook kan het zijn dat je jezelf of anderen onterecht de schuld geeft van wat er is gebeurd."
      },
      {
        "kop": "Blijf bij klachten niet rondlopen en zoek hulp"
      },
      {
        "tekst": "Veel mensen die een schokkende gebeurtenis hebben meegemaakt, voelen zich erna gespannen, moeten er veel aan denken of dromen erover. Dit gaat in de meeste gevallen vanzelf over. Blijf je veel angst houden of heb je klachten die (mogelijk) passen bij PTSS? Blijf er niet mee rondlopen. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp. Het kan zijn dat je het liefst wil vermijden om erover te praten. Weet dat dit kan horen bij de PTSS en dat er behandelingen bestaan die echt kunnen helpen. Bedenk dat je er niet alleen voor staat. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je doorverwijzen. Merk je dat jouw klachten effect hebben op je werk of opleiding? Praat erover met je werkgever of mentor/zorgcoördinator van je school of opleiding. Vraag om begrip en praktische ondersteuning."
      },
      {
        "kop": "Krijg inzicht in PTSS"
      },
      {
        "tekst": "Door je te verdiepen in de achtergronden, de symptomen en de aanpak van PTSS, krijg je inzicht in manieren om hier zo goed mogelijk mee om te gaan. Op onze website vind je meer informatie over PTSS. Ook zijn er goede boeken met betrouwbare informatie. Bij veel behandelingen wordt psycho-educatie aangeboden. Je krijgt dan informatie en voorlichting over PTSS."
      },
      {
        "kop": "Schrijf"
      },
      {
        "tekst": "Het kan helpen om de gebeurtenis op te schrijven. Kijk al schrijvend beetje bij beetje terug naar wat er is gebeurd. Op deze manier kan je in veilige omstandigheden de situatie onder ogen komen en houd je zelf de controle. Schrijf op wat je je herinnert en wat je toen hoorde, dacht en voelde. Je kan ermee stoppen wanneer jij dat wil. Sommige mensen vinden dit een prettige manier, omdat ze zo minder snel overspoeld raken door hun emoties dan wanneer ze er met iemand over praten. Vind je dit (nog) te moeilijk? Je kan ook opschrijven wat je nu voelt en waarover je je zorgen maakt. Dit kan helpen om er van een afstandje naar te kijken."
      },
      {
        "kop": "Zoek steun"
      },
      {
        "tekst": "Betrek de belangrijkste mensen in je leven door met ze te praten over jouw klachten. Zorg ervoor dat ze genoeg weten over PTSS. Het lucht vaak op en zo kunnen ze je beter begrijpen en steunen. Begin gerust zelf met praten. Vrienden en familie durven dat vaak niet, uit angst voor wat ze bij je losmaken. Maar meestal willen ze jouw verhaal wél horen. Laat hen weten wanneer je er wel en wanneer je er liever niet over wil praten. Kan jij wel wat adviezen gebruiken om te praten over hoe je je voelt? Lees dan onze informatie en tips hierover. Blijf ook met anderen praten over hun leven en wat zij meemaken. Zo blijf je oog houden voor het ‘gewone’ leven."
      },
      {
        "kop": "Geef het tijd"
      },
      {
        "tekst": "Pak stap voor stap je dagelijkse bezigheden weer op. Probeer hierbij aan te voelen wat goed voelt. Neem voldoende rust. Bedenk dat het tijd nodig heeft om te herstellen of ermee om te leren gaan. Vaak gaat het om een langer proces met vallen en opstaan. Gun jezelf dit. Door niet te hoge verwachtingen en eisen te hebben, leg je niet te veel druk op je schouders."
      },
      {
        "kop": "Je bent niet de enige"
      },
      {
        "tekst": "Jouw klachten kunnen je leven verstoren en ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Onthoud dat je niet de enige bent! PTSS komt bij 5-10 procent van de mensen voor die te maken krijgen met een heftige gebeurtenis. Er lopen in Nederland dus meer mensen rond die hier last van hebben."
      },
      {
        "kop": "Deel je ervaringen met gelijkgestemden"
      },
      {
        "tekst": "Het kan heel fijn en steunend zijn om herkenning te vinden bij andere mensen die ook PTSS hebben of hebben gehad. Zo kan je echt ervaren dat je niet de enige bent. Anderen kunnen je misschien wel op weg helpen met de aanpak van problemen: de kans is groot dat een ander iets soortgelijks al eens eerder heeft meegemaakt. Ben jij op zoek naar contact met gelijkgestemden? Via het Connect portaal kan je per mail berichten uitwisselen met mensen met dezelfde interesses."
      },
      {
        "tekst": "Bron: Pexels"
      },
      {
        "kop": "Accepteer"
      },
      {
        "tekst": "Durf de PTSS en de gevolgen ervan te accepteren. Dat is misschien makkelijker gezegd dan gedaan en het is logisch dat dit niet van de ene op de andere dag lukt. Maar juist door te aanvaarden dat je hier last van hebt, zal je er beter mee om leren gaan. Probeer je er dus niet tegen te verzetten. Een milde, niet-oordelende houding geeft ruimte om op een andere manier om te gaan met klachten, zodat ze een minder grote rol gaan spelen in je leven. Mindfulness is een training die hierbij kan helpen. Wij schreven simpele oefeningen om zelf aan de slag te gaan met mindfulness. Zo kan je eerst eens kijken of mindfulness iets voor jou is."
      },
      {
        "kop": "Je bent niet de PTSS"
      },
      {
        "tekst": "Hoewel PTSS veel impact op je leven kan hebben, betekent dit niet dat jij de PTSS bent. Natuurlijk maakt het op dit moment onderdeel van je uit, maar je bent nog zoveel meer. Bijvoorbeeld een moeder of vader, zoon of dochter. Schrijf eens op wat jou allemaal jou maakt. Dat kunnen hele eenvoudige dingen zijn. Iemand die gek is op lezen of sporten of… vul maar in. Bedenk daarnaast wat jouw sterke kanten zijn en wat wel goed gaat. Pak die dingen op."
      },
      {
        "kop": "Houd structuur in je dag"
      },
      {
        "tekst": "Zorg voor een duidelijke structuur in je dagindeling. Probeer rond dezelfde tijd op te staan, te eten en te slapen. Ook werk, activiteiten in je vrije tijd of je behandeling kunnen bijdragen aan je dagstructuur."
      },
      {
        "tekst": "Probeer hierbij goed te voelen wat je aankan. Schrijf per dag op wat je gaat doen, zoals een wandeling maken, boodschappen doen of vrijwilligerswerk. Juist als je slecht slaapt, is het belangrijk om regelmaat te hebben. Ook al ben je heel moe, ga overdag niet slapen. Zo raakt je biologische klok niet in de war. De biologische klok bevindt zich in je hersenen en zorgt ervoor dat verschillende processen in je lichaam geregeld worden, waaronder het slaap-waakritme. Je biologische klok werkt het beste bij regelmaat. Kun je wel wat handvatten gebruiken om beter te slapen? Doe dan de Beter Slapen Challenge."
      },
      {
        "kop": "Beweeg en leef gezond"
      },
      {
        "tekst": "Het is algemeen bekend dat bewegen bijdraagt aan een goede gezondheid. Bewegen kan helpen je hoofd leeg te maken en de spanning uit je lichaam te halen. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Wat vind je leuk om te doen? Denk na over slimme combi’s, zoals een rondje wandelen tussen de middag of tijdens een telefoongesprek. Probeer daarnaast zo gezond mogelijk te eten en wees matig met cafeïne en alcohol. Op de lange termijn voel je je hierdoor fitter en heb je meer energie."
      },
      {
        "kop": "Ontspan en doe leuke dingen"
      },
      {
        "tekst": "Het nemen van voldoende momenten van rust en ontspanning is belangrijk. Bedenk wat jij leuk en ontspannend vindt en probeer dit mee te nemen in de indeling van je dag. Leer daarnaast de momenten te herkennen waarop rust nemen voor jou belangrijk is. Vind je het moeilijk om je te ontspannen? Sommige mensen hebben veel aan ontspanningsoefeningen."
      }
    ]
  },
  {
    "slug": "ptss-naasten",
    "titel": "PTSS in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/ptss-naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_ptss_naasten",
    "intro": "",
    "blokken": []
  },
  {
    "slug": "relatiebreuk",
    "titel": "Relatiebreuk",
    "onderwerp": "Somberheid",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/relatiebreuk",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_relatiebreuk",
    "intro": "Veel mensen maken het wel een keer mee in hun leven: een liefdesrelatie die eindigt. Afhankelijk van hoelang je relatie duurde, hoe intens het was en hoe het eindigde, kan dit je leven behoorlijk op de kop zetten. Je bent bijvoorbeeld erg verdrietig of boos en moet veel dingen regelen. Denk bijvoorbeeld aan verhuizen en afspraken met elkaar maken over de kinderen of huisdieren.",
    "blokken": [
      {
        "tekst": "Op deze pagina geven we je tips die je kunnen helpen om met de relatiebreuk of scheiding om te gaan."
      },
      {
        "kop": "Sta open voor wat je voelt"
      },
      {
        "tekst": "Voor de meeste mensen is de eerste tijd na de breuk een hele emotionele periode. Het is ook normaal als je meerdere emoties tegelijk ervaart, zowel negatieve als positieve. Want misschien voel je naast je boosheid of verdriet ook wel opluchting. Bijvoorbeeld als jezelf degene was die de relatie beëindigde of als de relatie al lang stroef liep. Vaak kan je emoties het beste verwerken op het moment dat je er niet voor wegloopt. En jezelf niet verdooft door bijvoorbeeld alcohol te gebruiken. Dat kan best lastig zijn, omdat we vaak geneigd zijn om vervelende gevoelens niet te willen ervaren. Maar probeer je gevoelens er te laten zijn. Kijk er vanaf een afstandje naar zonder erover te oordelen. Je zal merken dat ze in de loop van de tijd milder worden."
      },
      {
        "kop": "Wees niet te streng voor jezelf"
      },
      {
        "tekst": "De eerste fase na een relatiebreuk is vaak chaotisch. In deze fase doen veel mensen dingen ‘verkeerd’. Bedenk je dat dit niet erg is, dit hoort bij het verwerken. In de tweede fase, als de ergste emoties zijn gekalmeerd, komt er vaak meer ruimte om de dingen goed te regelen. Wees in het begin dus niet te streng voor jezelf."
      },
      {
        "kop": "Praat erover en vraag hulp aan je omgeving"
      },
      {
        "tekst": "Het kan erg opluchten om over je gevoelens te praten met mensen in je omgeving die je vertrouwt. Bijvoorbeeld familieleden, vrienden of collega’s. De meeste mensen reageren begripvol als iemand zich openstelt. Veel mensen krijgen te maken met een relatiebreuk, dus de kans is groot dat anderen zich herkennen in jouw verhaal. Je bent niet de enige en je hoeft er niet alleen voor te staan. Misschien hebben ze ook wel tips waar je iets aan hebt. Bedenk hierbij dat je niet alles aan iedereen hoeft te vertellen. Jij bepaalt wie je wat vertelt en waar jij je prettig bij voelt. Ook kan je de mensen in je omgeving vragen om praktische hulp. Bijvoorbeeld door je te helpen met verhuizen of op de kinderen te passen."
      },
      {
        "kop": "Zoek professionele hulp als dat nodig is"
      },
      {
        "tekst": "Heb je veel last van de relatiebreuk en zou je daar graag eens met een professional over willen praten? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat. Ervaar je veel stress, angstige of sombere gevoelens of andere psychische klachten? Bedenk je dat je altijd terecht kan bij je huisarts. Maak een afspraak en bespreek waar je tegenaan loopt. De huisarts kijkt samen met jou naar wat je zou kunnen helpen. Vind je dit een lastige stap? Weet dan dat de huisarts dagelijks te maken krijgt met dit soort situaties."
      },
      {
        "kop": "Laat de ander los"
      },
      {
        "tekst": "Als je een relatie met iemand hebt gehad, is het niet vreemd dat het lastig is om de ander los te laten. Helemaal als jij je zorgen maakt om je ex-partner. Vraag jezelf af of het nog jouw verantwoordelijkheid is om de ander te helpen als het niet goed met diegene gaat. Zijn er voldoende familie en vrienden in de omgeving van jouw ex die kunnen helpen? Probeer daar dan op te vertrouwen."
      },
      {
        "tekst": "Ook kan het zijn dat jouw ex zich opeens heel anders gedraagt of andere keuzes maakt dan jij van de ander gewend bent. Bedenk dat door hiermee bezig te zijn, jij jezelf weghoudt van wat de relatiebreuk met jou doet. Om de breuk te verwerken is het belangrijk om jouw eigen gevoelens onder ogen te komen. Daarnaast is het goed om te beseffen dat jullie nu niet meer bij elkaar zijn en dat de ander nu alle vrijheid heeft om keuzes los van jou te maken. Social media kan dit lastig maken, omdat je dan steeds voorbij ziet komen wat de ander doet of bezighoudt. Houd de ander dan ook niet meer op die manier in de gaten. En scherm de inhoud van jouw eigen socialmediakanalen (tijdelijk) af als dat nodig is."
      },
      {
        "kop": "Geef aan wat je wil en niet wil"
      },
      {
        "tekst": "Ook kan het zijn dat jouw ex-partner het lastig vindt om jou los te laten. Jouw ex staat bijvoorbeeld regelmatig onaangekondigd voor de deur, belt of appt je veel of houdt jouw socials nauwlettend in de gaten. Of misschien wil jouw ex nog van alles voor jou regelen? Het is hierbij belangrijk dat je ex weet dat jij dit niet prettig vindt en waarom. Maar ook wat jij wel fijn vindt in het contact. Maak heldere afspraken met elkaar, zodat je beiden weet waar je aan toe bent. Merk je dat het niet goed lukt om met jouw ex afspraken te maken? Of willen jullie hulp om de scheiding in goede banen te laten lopen? Misschien is mediation dan een mogelijkheid voor jullie. Een zogeheten mediator helpt in overleg met jullie beiden om een oplossing te bedenken voor zaken waarover je een andere mening hebt. Heb jij moeite met het aangeven van je grenzen? Kan je hierbij wel wat hulp gebruiken? Wij schreven tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "kop": "Heb aandacht voor je kinderen"
      },
      {
        "tekst": "Hebben jullie samen kinderen of zijn er kinderen uit een eerdere relatie? Bedenk je dat het einde van jullie relatie veel invloed op hen kan hebben. Naast de emotionele impact zal er waarschijnlijk ook veel in hun leven veranderen. Vertel als het even kan samen aan de kinderen over jullie relatiebreuk. Leg uit dat de breuk niet door hen komt. Besteed aandacht aan hun reactie en laat hun gevoelens en vragen er zijn. Geef ook uitleg over het waarom van de breuk. Pas je verhaal hierbij aan bij de leeftijd van de kinderen."
      },
      {
        "tekst": "Het is niet nodig diep in te gaan op jullie achterliggende problemen. Anders bestaat de kans dat de kinderen zich hier verantwoordelijk voor gaan voelen. En hoe moeilijk het misschien ook is, zet jouw ex-partner niet in een negatief daglicht. Het is belangrijk dat de kinderen niet het gevoel hebben tussen jullie in te staan of voor een van jullie te moeten kiezen. Dit kan een bedreiging vormen voor hun ontwikkeling. Het belang van kinderen gaat altijd voor. Ook is het voor iedereen het prettigst als jullie als ouders met elkaar blijven communiceren en heldere afspraken maken."
      },
      {
        "kop": "Doe een stapje terug als dat nodig is"
      },
      {
        "tekst": "Merk je dat het allemaal wat veel is? Bijvoorbeeld omdat je er nu alleen voor staat, er veel op je afkomt en je meer ballen in de lucht moet houden? Of omdat je emotioneel wat uit balans bent? Misschien is het mogelijk om even een stapje terug te doen? Denk aan wat minder werken of vrij nemen van bepaalde verplichtingen. Ook al zit je in een rijdende trein, probeer af en toe wat ruimte te maken in je agenda om op adem te komen."
      },
      {
        "kop": "Blijf goed voor jezelf zorgen"
      },
      {
        "tekst": "Als je een relatiebreuk meemaakt, kan het zijn dat je jezelf uit het oog verliest en niet meer zo goed voor jezelf zorgt. Maar juist nu is dit extra belangrijk. Hoe naar je je nu ook voelt, probeer gezond te blijven eten en wees matig met cafeïne en alcohol. Houd ook structuur in je dag. Sta op een vaste tijd op, eet op regelmatige tijden en ga op tijd naar bed. Ook helpt het om af en toe je zinnen te verzetten, door bijvoorbeeld te sporten, iets leuks te ondernemen of bezig te zijn met je hobby. Even afstand nemen kan soms heel fijn zijn en je helpen om de dingen van een andere kant te bekijken."
      },
      {
        "kop": "Haal jezelf niet naar beneden"
      },
      {
        "tekst": "Als een relatie eindigt, kan je het gevoel hebben dat je hebt gefaald. Ook kan het je onzeker maken of je zelfvertrouwen een knauw geven. Het is erg zonde en niet nodig jezelf naar beneden te halen. Deze relatie werkte niet (meer) en daar zijn waarschijnlijk verschillende oorzaken voor. Natuurlijk kan het geen kwaad om te kijken waarom deze relatie misliep en wat jouw eigen aandeel hierin was. Helemaal als je al meerdere relaties hebt gehad, waarin je hetzelfde patroon ziet. Maar gun jezelf jouw leerpunten, ook als het om relaties gaat. Niemand is perfect, ook jij niet. En als je ervoor openstaat, kan je er veel van leren."
      },
      {
        "kop": "Ga het gesprek aan over onuitgesproken dingen"
      },
      {
        "tekst": "Zit jij nog met onuitgesproken dingen, zoals vragen of schuldgevoelens en zou je die graag willen uitspreken? Bijvoorbeeld om dingen te kunnen afsluiten? Het kan helpen dit met je ex-partner te bespreken. Misschien heeft jouw ex ook nog wel dingen om met jou te bespreken. Vaak is het goed om dit gesprek pas een poosje na jullie breuk te voeren. Jullie hebben dan allebei wat afstand genomen, waardoor de kans kleiner is dat de emoties hoog oplopen. Bedenk dat het kan zijn dat je niet de reactie krijgt waarop je had gehoopt. Probeer dit dan los te laten, hoe moeilijk dat misschien ook is. Blijf ook niet aandringen als blijkt dat je ex geen behoefte heeft aan een gesprek."
      },
      {
        "kop": "Sta open voor een nieuw begin"
      },
      {
        "tekst": "Hoewel jij daar nu waarschijnlijk nog niet aan wil denken, biedt het einde van iets weer mogelijkheden voor iets nieuws. Naast misschien wel een nieuwe relatie op termijn kan je denken aan dingen die je misschien wel niet deed of waarin je je geremd voelde door deze relatie. Neem voldoende tijd om het verlies van deze relatie een plek te geven. Je kan met de tijd de relatie van een afstand bekijken en onder de loep nemen. Misschien zijn er wel dingen die je zelf kan verbeteren of bepaalde kwaliteiten die je graag in een nieuwe partner ziet. De gedachte aan nieuwe dingen kan je misschien al een beetje een positief gevoel geven voor de toekomst."
      }
    ]
  },
  {
    "slug": "relatieproblemen",
    "titel": "Relatieproblemen",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/relatieproblemen",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_relatieproblemen",
    "intro": "‘Een relatie is hard werken,’ zegt men wel eens. Bijna iedere relatie kent naast fijne tijden periodes waarin het moeizamer loopt. Dit kan komen door externe omstandigheden, door onderlinge verschillen of gedrag van jou of de ander. Hoe ga je om met de komst van kinderen, verschillen in seksuele behoeften en wat als jij of jouw partner psychische of verslavingsproblemen hebt of heeft? Of misschien ben je wel verliefd geworden op een ander of heeft jouw partner overspel gepleegd? En wat doe je als je het niet eens bent met de opvoedingsstijl van jouw partner? Wanneer besluit je bij elkaar te blijven of laat je elkaar los? Op deze pagina krijg je tips die je kunnen helpen bij het omgaan met relatieproblemen.",
    "blokken": [
      {
        "kop": "Communiceer"
      },
      {
        "tekst": "Een goede relatie begint met goede communicatie. Als je niet goed weet wat er bij de ander speelt of zelf niet deelt over wat je bezighoudt, ontstaan er aannames die niet altijd kloppen en voor ruis en ontevredenheid zorgen. Bedenk je dat iedere relatie wel eens stroef loopt, maar door te blijven communiceren met elkaar kan je relatie zich juist versterken. Praat over je gevoelens, ideeën en verwachtingen. Over de leuke, maar ook de moeilijke dingen, zoals dingen in je relatie die lastig lopen. Maak het bespreekbaar en sta open voor wat de ander zegt. Lees ook onze tips om beter te communiceren."
      },
      {
        "kop": "Doorbreek negatieve patronen"
      },
      {
        "tekst": "Als een relatie niet lekker loopt zijn er vaak negatieve patronen ontstaan. Ze kunnen je het gevoel geven er samen niet meer uit te komen. Hierdoor kan je je eenzaam en onbegrepen voelen. Je hebt bijvoorbeeld het idee dat het je partner niks kan schelen hoe jij je voelt, dat je nooit het goede zegt of je bent boos omdat je partner niet naar je luistert. Gelukkig is het vaak mogelijk om een neerwaartse spiraal te doorbreken. Probeer samen te begrijpen wat er misgaat, wat het effect is van jullie gedrag en zoek naar andere manieren om met elkaar om te gaan."
      },
      {
        "tekst": "Vaak heeft het er mee te maken dat jullie reacties iets heel anders veroorzaken dan de bedoeling is. Of dat bepaalde onderwerpen gevoelig liggen, bijvoorbeeld door eerdere vervelende ervaringen. Lees meer over hoe je negatieve patronen kan doorbreken."
      },
      {
        "kop": "Investeer tijd en aandacht in elkaar"
      },
      {
        "tekst": "In drukke tijden kan het, door de waan van de dag, gebeuren dat je naast elkaar gaat leven in plaats van met elkaar. Ook kan dit ontstaan doordat je anders omgaat met veranderingen of gebeurtenissen in je leven. Als dit langere tijd zo is, dan groei je uit elkaar. Ook komt het voor dat partners elkaar als vanzelfsprekend zien, bijvoorbeeld omdat ze al lang bij elkaar zijn."
      },
      {
        "tekst": "Om een relatie gezond te houden is het belangrijk om voldoende aandacht aan elkaar te geven. Plan bewust tijd in om met elkaar door te brengen. Een vast tijdstip in de week kan handig zijn. Onderneem iets leuks met z’n tweeën. Dat kan een uitje zijn, maar ook een avond op de bank met een hapje en een drankje. Zolang jullie maar aandacht hebben voor elkaar en iets doen dat jullie beiden leuk vinden."
      },
      {
        "tekst": "Sta ook eens stil bij de periode dat jullie elkaar net kenden. Wat maakte dat jullie je toen tot elkaar aangetrokken voelden? Welke ontwikkeling hebben jullie beiden doorgemaakt? Merk je dat jij en je partner uit elkaar groeien? Lees hier meer info over dit onderwerp en ook over wat je zelf kan doen."
      },
      {
        "kop": "Doe aan zelfreflectie"
      },
      {
        "tekst": "Zelfreflectie is het onderzoeken van je gedachten, gevoelens en gedrag en de gevolgen daarvan. Jezelf een spiegel voorhouden, geeft je inzicht in jezelf. Ook kan het nuttige informatie voor je relatie opleveren. Hoe gedraag jij je, hoe komt dit en welke gevolgen heeft het voor je relatie? Zijn er dingen die jij anders kan doen? Neem een concrete situatie in gedachten, zoals een emotioneel moment. Hoe voelde jij je en hoe reageerde je? Waar kwam dit door? Lees nog meer tips om te reflecteren op jezelf bij relatieproblemen."
      },
      {
        "kop": "Neem je verwachtingen onder de loep"
      },
      {
        "tekst": "Bij relatieproblemen spelen verwachtingen van je relatie en van de ander vaak een rol. Het kan daarom geen kwaad jouw verwachtingen eens te bestuderen. En je af te vragen of jouw verwachtingen wel haalbaar zijn. Zo is niemand perfect, jij niet en je partner ook niet. Het is simpelweg onmogelijk dat jouw partner zich altijd gedraagt op een manier die jij prettig vindt. En andersom is dat natuurlijk ook het geval. Dit besef kan je helpen de lat wat minder hoog te leggen en voorkomt frustratie."
      },
      {
        "kop": "Blijf bij jezelf"
      },
      {
        "tekst": "Binnen een relatie is het van belang dat je kan zijn wie je bent. Gedraag jij je anders dan je zou willen voor jouw partner? Bijvoorbeeld omdat je het gevoel hebt dat jouw partner jou anders niet leuk genoeg vindt? Of omdat je denkt het vertrouwen terug te moeten winnen na overspel? Niet doen! En ga ook niet op je tenen lopen of je anders voordoen, zodat jouw partner bij jou blijft. Cijfer jezelf om wat voor reden dan ook niet weg. Dit houd je niet vol en gaat ten koste van wat jij wil met jouw leven."
      },
      {
        "kop": "Geef elkaar de ruimte"
      },
      {
        "tekst": "Naast dat het belangrijk is dat jij kan zijn wie je bent, is dit ook voor de ander het geval. Natuurlijk is het goed om rekening met elkaar te houden. Maar dit houdt ook in dat je elkaar de ruimte geeft om dingen op een eigen manier aan te pakken. Probeer je partner dus niet te veranderen. Controleer de ander niet en verbiedt geen dingen. Doe dit ook niet in het geval (van een vermoeden) van overspel. Dit heeft eerder een tegenovergestelde werking."
      },
      {
        "kop": "Accepteer elkaars behoeften en grenzen"
      },
      {
        "tekst": "Ieder mens is anders en heeft andere behoeften en ideeën. Ook binnen een relatie is dit zo. Het is hierbij belangrijk elkaar te accepteren en respecteren. De verschillen kunnen op verscheidene vlakken tot uiting komen. Bijvoorbeeld in de rolverdeling thuis in het gezin, in de manier van omgaan met geld of in seksuele behoeften. Ook kan het zijn dat je verschillend omgaat met veranderingen in je leven, zoals de komst van kinderen of met heftige gebeurtenissen of situaties, zoals het verlies van een dierbare, financiële problemen of psychische klachten."
      },
      {
        "tekst": "Merk je dat dit in jouw relatie het geval is? Praat erover. Geef aan waar jij behoefte aan hebt en geef duidelijk aan wat jij niet wil of waar je grenzen liggen. Sta ook open voor de behoeften en grenzen van jouw partner. Probeer samen oplossingen te bedenken voor jullie verschillen. Weet je niet zo goed waar je grenzen liggen of hoe je ze moet aangeven? Wij schreven extra online informatie met tips om je grenzen te leren kennen en aan te geven."
      },
      {
        "tekst": "Heb jij een relatie waarin er over jouw grenzen wordt gegaan? Bedenk je dat je niet de enige bent. Deel het met iemand die je vertrouwt en zoek hulp! Maak een afspraak bij de huisarts, die kan je doorverwijzen. Ook de MIND Hulplijn denkt graag met je mee! Neem contact op voor een deskundig, anoniem en gratis advies."
      },
      {
        "kop": "Wees eerlijk over je relatie"
      },
      {
        "tekst": "Twijfel je of je door wil gaan met je relatie? Spreek dit dan uit. Begin met je partner. Zeg erbij dat je twijfelt en waarom je dat doet, maar dat je nog geen conclusie hebt bereikt. Praat ook met mensen die jullie goed kennen. Vraag wat zij zien. Lees meer over redenen om te scheiden of te blijven."
      },
      {
        "kop": "Laat de ander los als dat de beste keuze is"
      },
      {
        "tekst": "Hoewel er genoeg redenen kunnen zijn om er samen voor te gaan, kunnen er ook genoeg redenen zijn om te besluiten de relatie te stoppen. Bijvoorbeeld omdat de verschillen tussen jou en je partner te groot zijn (geworden), omdat er over je grenzen wordt gegaan, omdat jullie karakters botsen of omdat het niet meer lukt elkaar te vertrouwen. Hoewel het een opluchting kan zijn met iets te stoppen dat niet goed gaat, is het vaak ook heel verdrietig om elkaar los te laten. Bedenk je dat gevoelens van verdriet, maar ook boosheid of angst heel normaal zijn. Probeer er niet tegen te vechten. Vraag steun aan familie en vrienden. De meeste mensen reageren begripvol als iemand zich openstelt. Een luisterend oor kan al heel fijn zijn."
      }
    ]
  },
  {
    "slug": "rouw",
    "titel": "Rouw na het verlies van een dierbare",
    "onderwerp": "Somberheid",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/rouw",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_rouw",
    "intro": "Het overlijden van een dierbare is een van de meest ingrijpende en verdrietige gebeurtenissen in iemands leven. Een naaste is er niet meer en komt nooit meer terug. Of een overlijden onverwacht komt of niet: het verandert je leven voor altijd. Op deze pagina bieden we je tips die je helpen bij het omgaan met rouw na het verlies van een dierbare.",
    "blokken": [
      {
        "kop": "Besef dat er geen juiste manier is om te rouwen"
      },
      {
        "tekst": "Ieder mens reageert anders op het overlijden van een dierbare. Veel mensen worden overweldigd door verdriet, verwarring, woede en/of ongeloof. Andere mensen ervaren een gevoel van onwerkelijkheid of voelen vrijwel niets, omdat hun gevoelens zijn uitgeschakeld. Weer anderen vinden de dood van hun dierbare zo pijnlijk dat ze die ontkennen. Het is goed om te weten dat er geen ‘juiste’ manier is om te reageren op en te rouwen om het verlies van een dierbare. Dit besef kan helpen om je eigen reactie te accepteren, maar ook die van de mensen in je directe omgeving als je verschillend reageert of andere behoeften hebt."
      },
      {
        "kop": "Besteed aandacht aan het afscheid nemen"
      },
      {
        "tekst": "Probeer de eerste dagen na het overlijden zo bewust mogelijk mee te maken. Pak waar het kan een actieve rol rondom het afscheid en de uitvaart. Dit helpt bij het indalen van het besef dat je dierbare is overleden en dat het officiële afscheid nadert. Als je geen afscheid hebt kunnen nemen van je dierbare, kan het helpen om een afscheidsceremonie te houden. Creëer, als je dat prettig vindt, een plek voor jezelf om je dierbare te herdenken. Vaak wordt dit gedaan door een foto met een kaarsje ervoor, maar er zijn nog meer dingen te bedenken om af en toe bewust stil te staan bij het verlies. Kies een manier die bij jou past."
      },
      {
        "kop": "Zoek steun bij je omgeving"
      },
      {
        "tekst": "Vlak na het overlijden zie je vaak dat nabestaanden naar elkaar toe trekken, herinneringen ophalen en steun vinden bij elkaar. Hoewel dit niet voor iedereen geldt, kan dit gevoel van verbinding helpen bij het verwerken van het verlies. Blijf als het even lukt ook na het afscheid steun zoeken bij elkaar. Praat ook met andere vertrouwde mensen over je gevoelens, de overledene of gebeurtenissen rond het overlijden. Een luisterend oor kan al heel fijn zijn. Bovendien lucht praten over je gevoelens vaak op en kan het je helpen bij het verwerken. Begin gerust zelf met praten. Het kan zijn dat vrienden en familie het lastig vinden erover te beginnen. Of dat ze zelf ook worstelen met het verdriet. Door met elkaar in contact te blijven, blijf je op de hoogte van wat er bij elkaar speelt en kan je elkaar beter steunen. Vertel mensen in je omgeving wat jij prettig vindt, ook als je liever niet praat over het verlies. Ook kan je samen iets ondernemen."
      },
      {
        "tekst": "Zoek contact met lotgenoten, een rouwbegeleider of een professionele hulpverlener als je daar behoefte aan hebt. Ook kan dit fijn zijn als je niet de steun krijgt die je zoekt. Of als je merkt dat je vastloopt."
      },
      {
        "kop": "Heb aandacht voor kinderen"
      },
      {
        "tekst": "Wees niet bang om kinderen te betrekken bij zaken rond het overlijden van jullie dierbare. Je hoeft geen details te bespreken, maar houd ze van belangrijke dingen op de hoogte. Kinderen merken bijna altijd wat er speelt, ook al lijkt dat soms niet zo. Vertel kinderen daarom concreet, eerlijk en duidelijk wat er aan de hand is. Gebruik hierbij woorden die aansluiten bij de leeftijd van het kind. Uitspraken als ‘papa slaapt voor altijd’ of ‘God heeft je zusje tot zich genomen, omdat hij haar zo lief vond’ kunnen een kind bang maken om te gaan slapen of opstandig maken."
      },
      {
        "tekst": "Probeer het overlijden van jullie dierbare bespreekbaar te houden binnen het gezin. Geef aan dat jouw kinderen erover mogen praten en vragen mogen stellen. Het is belangrijk dat kinderen gezien en gehoord worden door de ouders en dat gevoelens er mogen zijn. Zorg er ook voor dat je kinderen genoeg afleiding hebben buitenshuis, weg van het verdriet. Op deze webpagina lees je meer over rouw bij kinderen."
      },
      {
        "kop": "Krijg inzicht in rouw"
      },
      {
        "tekst": "Inzicht krijgen in rouw en verliesverwerking kan je helpen jezelf beter te begrijpen en ermee om te gaan. Ook kan het helpen om andere mensen in je omgeving beter te snappen. Meer informatie vind je op internet of bijvoorbeeld in de vele boeken over dit onderwerp."
      },
      {
        "kop": "Accepteer verwarrende gevoelens"
      },
      {
        "tekst": "Veel nabestaanden ervaren intense gevoelens die soms ook verwarrend en tegenstrijdig kunnen zijn. Naast verdriet, angst, hulpeloosheid en wanhoop, kan je ook boosheid ervaren of schuldgevoelens hebben. Denk niet dat wat je voelt, bijvoorbeeld boosheid, niet hoort of niet goed is. Iedereen rouwt op een eigen manier en daar zijn geen regels voor. Ook kan je je opgelucht voelen of bevrijd. Bijvoorbeeld nadat jouw naaste is overleden na een lange periode van ziek zijn en pijn hebben. Deze onverwachte gevoelens kunnen je in de war maken of kan je als ongepast ervaren. Bedenk dat ook dit normale reacties zijn op een ingrijpende gebeurtenis."
      },
      {
        "kop": "Geef jezelf de ruimte en tijd"
      },
      {
        "tekst": "Als we nare gevoelens ervaren, zijn we vaak geneigd dit niet te willen en van alles te doen om het uit de weg te gaan. Maar helaas nemen ze daardoor niet af. Ga je gevoelens en pijn daarom niet uit de weg. Ook komt het vaak voor dat er bij nabestaanden levensvragen omhoogkomen. Zoals: ‘Wat is de zin van het leven?’ en ‘Waarom overkomt mij dit?’. Ook dit hoort bij rouw en verlies. Druk ook deze gedachten niet weg, maar sta hierbij stil. Gun jezelf de tijd. Het verwerkingsproces kan langer duren dan je misschien verwacht. Het is geen rechtlijnig proces. Het komt regelmatig voor dat iemand overvallen wordt door verdriet op het moment dat diegene dacht het al een plek te hebben gegeven."
      },
      {
        "tekst": "Heb jij last van een ’film’ in je hoofd over de laatste dag(en) voor het overlijden? Het kan dan helpen om te schrijven over het leven van en met je dierbare."
      },
      {
        "kop": "Vind een uitlaatklep"
      },
      {
        "tekst": "Bij het verwerken van je verdriet kan het heel fijn zijn om een uitlaatklep te hebben. Om het doorvoelen van de pijn af te wisselen met afleiding. Dit kan bijvoorbeeld door te sporten, muziek te luisteren, te schrijven, te klussen of tekeningen te maken. Vind een manier die bij jou past."
      },
      {
        "kop": "Houd structuur in je dag"
      },
      {
        "tekst": "Een overlijden van een dierbare kan je leven flink ontregelen. Structuur kan tijdens dit soort perioden in je leven houvast en overzicht bieden en ervoor zorgen dat je voldoende energie overhoudt. Sta op tijd op, eet driemaal per dag gezond en ga op tijd naar bed. Probeer zoveel mogelijk dezelfde tijden aan te houden. Probeer stap voor stap het leven weer op te pakken en ga bijvoorbeeld bij iemand langs of maak een wandeling, ook al vind je dat nog een grote stap."
      },
      {
        "kop": "Zoek hulp"
      },
      {
        "tekst": "Gaat het al langere tijd niet goed met jou en maak je je zorgen? Bedenk dat je altijd terecht kan bij je huisarts. Maak een afspraak en bespreek waar je tegenaan loopt. De huisarts kijkt samen met jou naar wat je zou kunnen helpen. Vind je dit een lastige stap? Bedenk dat de huisarts dagelijks te maken krijgt met dit soort situaties."
      },
      {
        "tekst": "Heb je jouw dierbare verloren door zelfdoding? Naast gevoelens van verdriet kan je last hebben van boosheid of jezelf kwellen met gedachten over of je iets had kunnen doen of waarom je het niet hebt gezien. Zoek ook dan professionele hulp als het al langere tijd niet goed met je gaat. Je hoeft dit niet alleen te verwerken. Stichting 113 Zelfmoordpreventie schreef, in samenwerking met o.a. Slachtofferhulp Nederland, een brochure met uitgebreide informatie over wat je allemaal moet regelen en geeft adviezen over het rouwproces. Ook schreven wij een uitgebreide webpagina over verlies van een dierbare door zelfdoding."
      }
    ]
  },
  {
    "slug": "slapeloosheid",
    "titel": "Slapeloosheid",
    "onderwerp": "Slaap",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/slapeloosheid",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_slapeloosheid",
    "intro": "We hebben allemaal slaap nodig. Slaap is noodzakelijk om je lichaam én geest te laten herstellen en tot rust te laten komen, zodat je weer energiek aan een nieuwe dag kan beginnen. Maar wat als slapen voor jou een probleem is geworden? Dan ben je niet de enige. Maar liefst een derde van de volwassen Nederlanders geeft aan wel eens slaapproblemen te hebben. Op deze pagina geven we je informatie en tips bij slapeloosheid.",
    "blokken": [
      {
        "kop": "Tip 1: Check je slaapplek"
      },
      {
        "tekst": "Misschien ligt het voor de hand, maar zorg dat je slaapkamer ook daadwerkelijk een SLAAPkamer is. Een prettige, opgeruimde plek waar jij kan ontspannen en tot rust kan komen. Een plek waar je graag naartoe gaat aan het einde van de dag. Gebruik je slaapkamer dan ook niet als werkkamer of om televisie te kijken."
      },
      {
        "tekst": "De temperatuur in een slaapkamer is belangrijk. Zorg dat het niet te warm is, maar ook niet te koud. En zorg voor een goede ventilatie door overdag het raam open te zetten. Sommige mensen vinden het prettig om ook ’s nachts het raam open te hebben. Kies wat jij prettig vindt."
      },
      {
        "tekst": "Om goed te kunnen slapen is het ook belangrijk dat je zintuigen niet teveel worden geprikkeld. Bij voorkeur is een slaapkamer dan ook donker en slaap je in een stille omgeving. Heb je last van geluiden van buiten (of van een snurkende partner): doe dan oordopjes in. Lukt het niet om te slapen doordat je slaapkamer te licht is? Probeer dan eens te slapen met een slaapmasker op, of hang (rol)gordijnen op die het licht van buiten tegenhouden."
      },
      {
        "tekst": "En uiteraard is een comfortabel bed van groot belang. Een comfortabel matras is niet te hard, maar ook niet te zacht. Verder is prettig liggen in bed erg persoonlijk. Het belangrijkste is dat jij volkomen ontspannen kan liggen. Een comfortabel kussen is daarbij ook belangrijk, evenals je beddengoed. Kies voor katoen en verschoon je bed regelmatig."
      },
      {
        "kop": "Tip 2: Verander je denken"
      },
      {
        "tekst": "Wanneer je langere tijd niet goed slaapt, is de kans groot dat je verstrikt raakt in gepieker en niet-helpende, negatieve gedachten: \"Oh nee, ik lig nu alweer meer dan een uur wakker en ik moet nu echt slapen, want ik kan nog maar vier uurtjes slapen voordat de wekker gaat en dan ben ik morgen weer de hele dag moe en dan ben ik niet vooruit te branden terwijl ik zo’n drukke dag voor de boeg heb!\" Of je begint je zelfs ’s avonds, nog voordat je naar bed gaat, al zorgen te maken over je nachtrust. Niet doen."
      },
      {
        "tekst": "Ten eerste is het goed om te onthouden dat hoe lang je slaapt niet het belangrijkste is. Veel mensen hebben het idee dat zij elke nacht minstens acht uur moeten slapen. Maar veel belangrijker is de kwaliteit van je slaap en of je een uitgerust gevoel hebt de volgende dag. Stop daarom wanneer je wakker ligt met het kijken op de klok en uitrekenen hoe lang je nog kan slapen. Je legt jezelf een eis op die nergens voor nodig is. Laat de gedachte dat je minstens acht uur moet slapen los. Dit klinkt makkelijker gezegd dan gedaan, maar dit kan al dusdanig veel stress schelen dat je beter slaapt."
      },
      {
        "tekst": "Daarnaast is het belangrijk om te ontdekken welke gedachten jij precies hebt wanneer je niet kan slapen. En om deze gedachten, wanneer ze niet-helpend of negatief blijken te zijn, te veranderen. Wij schreven oefeningen om je gedachten helpend te maken."
      },
      {
        "kop": "Tip 3: Zorg voor regelmaat en een slaapritueel"
      },
      {
        "tekst": "Wanneer je problemen hebt met slapen, is er nog iets anders van groot belang: regelmaat. Je hebt vast wel eens gehoord van de biologische klok. Iedereen heeft een biologische klok. De biologische klok bevindt zich in je hersenen en zorgt ervoor dat verschillende processen in je lichaam geregeld worden, waaronder het slaap-waakritme. Je biologische klok werkt het beste bij regelmaat. Help je biologische klok daarom een handje door ritme aan te brengen. Probeer elke dag rond dezelfde tijd op te staan en naar bed te gaan. Wijk van deze tijden ook in het weekend niet teveel af."
      },
      {
        "tekst": "Daarnaast is het belangrijk om ook ’s avonds regelmaat aan te brengen en toe te werken naar het moment dat je gaat slapen. Vroeger bouwden mensen op een natuurlijke manier hun activiteitenniveau af. Op een gemiddelde avond kwamen mensen thuis van hun werk, gingen eten, praatten wat met elkaar, lazen misschien een boek en gingen slapen. Vergelijk dat eens met onze avonden nu: we doen snel nog even boodschappen, kijken tv, we werken nog wat e-mails weg voor ons werk en kijken om de haverklap op onze telefoon of we nog berichtjes hebben. Ondertussen draaien we nog een was of doen andere huishoudelijke klusjes en tegen de tijd dat we naar bed gaan staan onze hersen en ons lichaam nog helemaal niet in de ruststand. Ook in bed hebben veel mensen vervolgens nog de neiging om tv te kijken of hun telefoon te pakken om nog even wat websites en social media te checken."
      },
      {
        "tekst": "Als je moeilijk in slaap valt ’s avonds raden we je aan om heel bewust aan de slag te gaan met het afbouwen van je activiteitenniveau en een slaapritueel in te voeren. Een slaapritueel bestaat uit een aantal vaste gewoonten die je dagelijks uitvoert voor het slapen gaan."
      },
      {
        "tekst": "Doe mee met de Beter Slapen Challenge"
      },
      {
        "tekst": "Wil jij beter leren slapen? Doe mee met de gratis Beter Slapen Challenge en ontvang 10 dagen lang om de dag een e-mail met een uitdaging en tips voor een betere nachtrust. Ga op ontdekkingstocht met de handvatten die je van ons krijgt en kom te weten wat jou helpt beter te slapen."
      },
      {
        "linkLabel": "Meld je gratis aan",
        "linkUrl": "https://formulier.wijzijnmind.nl/slaapchallenge"
      },
      {
        "kop": "Tip 4: Ontspan!"
      },
      {
        "tekst": "Bij de vorige tip hebben we het gehad over het toewerken naar het tijdstip dat je gaat slapen door je activiteitenniveau af te bouwen. Want om te kunnen slapen, is het erg belangrijk om te ontspannen. Als je gespannen bent kan je niet slapen, zo simpel is het. Ga maar na: wanneer je een examen moet afleggen of een (dokters)afspraak hebt waar je tegenop ziet, kom je vaak moeilijker in slaap. Maar ook wanneer je leuke dingen voor de boeg hebt, is het moeilijker om in slaap te komen. Herinner je je de avond voor je verjaardag als kind? Van opwinding lag je dan vast nog wel eventjes wakker."
      },
      {
        "tekst": "Een keertje van de spanning moeilijk in slaap vallen is helemaal niet erg. Maar als je langere tijd problemen hebt met in- en doorslapen, is het goed om bij jezelf na te gaan of dit te maken kan hebben met spanning. Ervaar je veel stress op je werk of thuis? Maak je je zorgen over dingen, pieker je veel? Als je al wat langer slaapproblemen hebt, kan het ook zijn dat je je gespannen voelt bij het naar bed gaan omdat je je alweer zorgen maakt over het wakker liggen."
      },
      {
        "tekst": "Om ontspannen naar bed te kunnen gaan, is het ook belangrijk dat je gedurende de dag momenten van ontspanning hebt. Lees onze ontspanningsoefeningen met handvatten om ontspannen te gaan slapen."
      },
      {
        "kop": "Tip 5: Accepteer het wakker liggen"
      },
      {
        "tekst": "Bij het lezen van deze tip ben je misschien verbaasd. Je hebt deze tips immers opgezocht, omdat je beter wil slapen en daarmee aan de slag wil gaan. Maar bij deze laatste methode willen we je laten zien dat juist het accepteren van het feit dat je wakker ligt, je misschien kan helpen beter te slapen. Dit is een principe van ‘mindfulness’. Mindfulness gaat over leven met aandacht. Door je aandacht volledig te richten op het hier en nu, leef je minder op de automatische piloot. Je hebt dan ook minder tijd om te piekeren. Door je bijvoorbeeld te focussen op geluiden die je hoort, dingen die je voelt of die je ruikt, zijn je hersenen met iets anders bezig dan piekergedachten."
      },
      {
        "tekst": "Naast leven in het hier en nu, gaat mindfulness over dingen accepteren zoals ze zijn, de dingen niet willen veranderen. Dat is makkelijker gezegd dan gedaan: vervelende gevoelens, zoals pijn, irritatie of verdriet wil je waarschijnlijk niet hebben. Je bent ongetwijfeld dan ook geneigd om er van alles aan te doen om deze gevoelens te veranderen. Maar de kans is groot dat je hierdoor voortdurend bezig bent met het probleem wat de vervelende gevoelens veroorzaakt. Daardoor is het probleem heel prominent aanwezig en wordt het misschien zelfs wel groter dan dat het in werkelijkheid is."
      },
      {
        "tekst": "Bijvoorbeeld: je voelt je geïrriteerd door het feit dat je regelmatig wakker ligt. Dit zie je als een probleem en dit wil je dan ook zo snel mogelijk verhelpen. Je probeert van alles – oefeningen, warme melk voor het slapengaan, je drinkt geen koffie meer overdag -, maar je ligt nog steeds vaak wakker. Sterker nog, je voelt je wellicht nog gefrustreerder: je doet immers zo hard je best, en nog steeds slaap je niet."
      },
      {
        "tekst": "De kunst van mindfulness is om je niet te focussen op het probleem en geen oplossingen te zoeken. Probeer er als het ware van een afstandje naar te kijken en niets van de situatie te vinden. Door niet te oordelen over de situatie en de situatie te accepteren zoals deze is, wordt het probleem minder overheersend en zwaar, en bespaar je in ieder geval energie."
      },
      {
        "kop": "Vraag de MIND Hulplijn om advies!"
      },
      {
        "tekst": "Heb jij last van slapeloosheid en wil je jouw persoonlijke situatie graag met een professional bespreken? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
      }
    ]
  },
  {
    "slug": "sociale-angst",
    "titel": "Sociale angst",
    "onderwerp": "Angst",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/sociale-angst",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_sociale_angst",
    "intro": "Veel mensen vinden sociale situaties wel eens spannend. Denk aan het ontmoeten van onbekende mensen of het geven van een presentatie. Met een beetje spanning is niets mis. Maar het is vervelend als het je in de weg gaat zitten, bijvoorbeeld omdat je steeds meer op gaat zien tegen bepaalde situaties of ze gaat vermijden.",
    "blokken": [
      {
        "tekst": "Op deze pagina geven we je tips om sociale angst tegen te gaan."
      },
      {
        "kop": "Word bewust van niet-helpende gedachten"
      },
      {
        "tekst": "Wanneer je sociaal angstig bent, ben je vaak bang dat mensen negatief over je denken. Niet-helpende gedachten die voor komen bij sociale angstproblemen zijn bijvoorbeeld: “Ik durf weer niets te zeggen. Ze zullen me wel saai vinden.” Of: “Ik ben niet leuk, niet knap en niemand heeft interesse in mij.” Deze gedachten zorgen ervoor dat je negatieve gevoelens ervaart. Het helpt je als je je bewust wordt van welke gedachten jij hebt. En hoe dit invloed heeft op je gevoel en gedrag. In onderstaande figuur zie je de relatie tussen een gebeurtenis, gedachte, gevoel, gedrag en gevolg."
      },
      {
        "tekst": "Sta de komende tijd stil bij situaties waarin je merkt dat je je angstig of gespannen voelt en noteer het volgende (wij vulden een voorbeeld in):"
      },
      {
        "lijst": [
          "Wat was de situatie, wat gebeurde er? (gebeurtenis): Feestje van een vriend",
          "Wat dacht je? (gedachte): Ze zullen me wel saai vinden",
          "Wat voelde je? (gevoel): Gespannen en ongemakkelijk",
          "Wat deed je? (gedrag): Ik trok me terug en sprak bijna niemand.",
          "Gevolg: De spanning werd minder, maar ik had geen leuk feestje."
        ]
      },
      {
        "kop": "Zet niet-helpende gedachten om naar helpende gedachten"
      },
      {
        "tekst": "Je hebt nu genoteerd wat je niet-helpende gedachten zijn. En de gevoelens, het gedrag en de situaties die daarmee samengaan. Stel jezelf nu vragen bij deze gedachten, bijvoorbeeld:"
      },
      {
        "lijst": [
          "Kan ik ook anders tegen deze situatie aankijken?",
          "Welke gedachte zou mij wel helpen?"
        ]
      },
      {
        "tekst": "Door je niet-helpende gedachten op deze manier kritisch te bekijken, kom je tot heel andere gedachten. Bijvoorbeeld: “Ook al zeg ik niet veel, ik luister wel goed naar wat anderen te zeggen hebben. En dat is ook veel waard.” Of: “Ik zeg wel dat niemand interesse in mij heeft of mij leuk vindt, maar eigenlijk is dat niet gebaseerd op feiten. Veel mensen zijn aardig tegen mij. Ook heb ik familie en vrienden die om mij geven. Bovendien: ook al vindt niet iedereen mij leuk, zo erg is dat niet. Ik vind ook de ene persoon leuker dan de ander.”"
      },
      {
        "tekst": "Dit zijn voorbeelden van helpende gedachten. Een helpende gedachte is positief en realistisch. Schrijf jouw helpende gedachten op een kaartje of noteer ze in je telefoon. Haal ze tevoorschijn wanneer je merkt dat niet-helpende gedachten je dwarszitten. Op die manier gaan je helpende gedachten na verloop van tijd de plaats van niet-helpende gedachten innemen. En door andere, meer positieve gedachten te hebben, zullen ook je gevoelens positiever zijn. Zo geeft de gedachte: “Niemand heeft interesse in mij” een verdrietig gevoel en de gedachte: “Ik heb familie en vrienden die om mij geven” een blij of tevreden gevoel."
      },
      {
        "tekst": "Wees je wel bewust dat je gedachten veranderen niet van de ene op de andere dag gebeurt. Maar door veel te oefenen, zal je merken dat je er steeds beter in wordt. Wij schreven ook twee oefeningen om je gedachten helpend te maken."
      },
      {
        "kop": "Verplaats je aandacht van binnen naar buiten"
      },
      {
        "tekst": "Als je sociaal angstig bent, ben je voortdurend met je aandacht naar binnen gericht. Je bent bijvoorbeeld steeds bezig met hoe je je voelt, hoe je denkt dat je bent overgekomen op anderen, hoe je eruitziet of hoe je je gedraagt. Hierdoor is het lastig je te concentreren op waar je op dat moment mee bezig bent. Het helpt dan om je aandacht meer naar buiten te richten. Dit doe je bijvoorbeeld met de volgende oefeningen:"
      },
      {
        "lijst": [
          "Ben je in gesprek met iemand? Concentreer je op wat de ander vertelt en onthoud details. Zit je in een vergadering of overleg? Maak aantekeningen en schrijf voor jezelf een samenvatting. Op deze manier ‘dwing’ je jezelf met andere zaken bezig te zijn dan met jezelf.",
          "Maak een wandeling door het bos of park. Tijdens deze wandeling is het de bedoeling om je aandacht volledig naar buiten te richten. Let op wat je om je heen ziet: de bomen, de kleuren en het licht. Let op de geluiden: bijvoorbeeld gefluit van vogels en geritsel van bladeren. Richt je aandacht ook op wat je ruikt. En richt je aandacht op hoe het voelt om door het bos of door het park te lopen. Voel hoe de lucht in je longen stroomt en hoe je voeten door de bladeren gaan."
        ]
      },
      {
        "tekst": "Het effect van deze oefeningen is dat je je minder bewust van jezelf bent. Je zal merken welke positieve invloed het heeft op je werk en sociale contacten als je meer focust op dingen buiten jezelf. Oefeningen zoals deze helpen je ook te beseffen dat mensen jou eigenlijk helemaal niet continu aan het beoordelen zijn."
      },
      {
        "kop": "Oefen"
      },
      {
        "tekst": "Wanneer je last hebt van sociale angst, is het belangrijk om situaties waarvoor je bang bent niet uit de weg te gaan. Het is juist belangrijk te oefenen met de dingen waar je bang voor bent. Vermijding zorgt er namelijk voor dat de angst blijft bestaan of zelfs erger wordt. Daarnaast beperkt het je leven. Een voorbeeld: je bent bang om in een vergadering iets stoms te zeggen waardoor mensen je niet goed genoeg zullen vinden. Het liefst ga je daarom niet meer naar vergaderingen toe en werk je alleen nog maar vanuit huis. Maar doordat je de situaties vermijdt, merk je niet dat mensen dit helemaal niet denken. Jouw angst blijft hierdoor bestaan of wordt zelfs erger. Oefen daarom met waar je bang voor bent. Het is heel logisch dat je je angstig voelt als je dit doet. Met de loop van de tijd zal dit minder worden. Tijdens het oefenen zal je merken dat ‘de ramp’ waar je bang voor bent, niet gebeurt. Mensen zullen je niet afwijzen als je wat stiller bent. En je kan ook best een keer een minder handige opmerking maken."
      },
      {
        "tekst": "Aandacht voor Angst Wil jij meer leren over wat angst is, welke rol gedachten en gedrag spelen, het belang van erover praten en de invloed van ontspanning en je ademhaling? Meld je gratis aan voor onze themaspecial Aandacht voor Angst en ontvang informatie, tips, interessante linkjes en ervaringsverhalen in je mailbox."
      },
      {
        "linkLabel": "Meld je aan",
        "linkUrl": "https://formulier.wijzijnmind.nl/aanmelden_aandacht_voor_angst"
      },
      {
        "kop": "Volg een sociale vaardigheidstraining"
      },
      {
        "tekst": "Over het algemeen hebben mensen met sociale angst prima sociale vaardigheden. Maar een sociale vaardigheidstraining kan je helpen bij het krijgen van meer zelfvertrouwen. In een groep leer je hoe je met andere mensen omgaat en oefen je met verschillende sociale situaties."
      },
      {
        "kop": "Doe ontspanningsoefeningen"
      },
      {
        "tekst": "Ontspanningsoefeningen kunnen op twee manieren nuttig zijn als je last hebt van sociale angst. Ten eerste kan je door regelmatig ontspanningsoefeningen te doen je algemene spanningsniveau omlaag brengen. Dit helpt om jezelf in stressvolle situaties beter staande te houden. Daarnaast kunnen ontspanningsoefeningen je helpen omgaan met angst. Mensen die angstig zijn, gaan sneller en ‘hoog’ ademhalen. De ademhaling gaat dan via je borst in plaats van via je buik. Aangeleerde ademhalingsoefeningen helpen je om je ademhaling op angstige momenten te beheersen. Daardoor kan je meer ontspannen, waardoor de angst afneemt. Op deze webpagina vind je verschillende ontspanningsoefeningen."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Probeer elke dag voldoende te bewegen. Bewegen kan helpen tegen angstige gevoelens. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen en ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Probeer vormen van beweging te kiezen die je leuk vindt. Zo houd je het langer vol."
      },
      {
        "kop": "Leef gezond"
      },
      {
        "tekst": "Als je angstige gevoelens ervaart, is het extra belangrijk om regelmaat te houden in je leven. Structuur in je dag zorgt voor duidelijkheid en overzicht. Sta rond een vaste tijd op (niet te laat), eet op regelmatige tijden en ga op tijd naar bed. Probeer ook gezond te eten en drink niet te veel cafeïne en alcohol. Op de korte termijn werkt alcohol ontspannend en is daardoor aantrekkelijk als je je gespannen voelt. Op de lange termijn voel je je beter als je hiermee matigt. Je voelt je fitter en hebt meer energie."
      },
      {
        "kop": "Blijf niet met klachten rondlopen en zoek hulp"
      },
      {
        "tekst": "Zijn bovenstaande tips voor jou niet voldoende? Sommige mensen zijn zo bang voor één of meerdere sociale situaties dat het hun dagelijkse functioneren beïnvloedt. Ze doorstaan de situaties met intense angst of ze gaan de situaties vermijden. Iemand kan dan een sociale angststoornis hebben."
      },
      {
        "tekst": "Heb jij veel last van je sociale angstklachten en vraag je je af of er misschien meer aan de hand is? Blijf er niet mee rondlopen. Neem iemand in je omgeving in vertrouwen en zoek professionele hulp. Hulp zoeken is heel belangrijk! Als je te lang blijft doorlopen met sociale angstklachten, ga je steeds meer vermijden en kan je ook somber worden. Als je op tijd om hulp vraagt, kan je dit voorkomen. Naar de huisarts gaan is een eerste stap om professionele hulp te vragen. Jouw huisarts kan je ondersteunen en je doorverwijzen als dat nodig is."
      },
      {
        "tekst": "Heb je een sociale angststoornis gehad en heb je het gevoel dat het niet goed gaat? Blijf er ook dan niet mee rondlopen. Een terugval komt regelmatig voor. Het kan dan nodig zijn om opnieuw hulp te zoeken om te kijken hoe je de klachten weer onder controle krijgt."
      },
      {
        "kop": "Je bent niet de enige!"
      },
      {
        "tekst": "Jouw klachten kunnen ervoor zorgen dat jij je onbegrepen en misschien wel eenzaam voelt. Onthoud dat je niet de enige bent. Veel mensen krijgen hier ooit in het leven mee te maken! Want wist je dat ruim 1 op de 4 mensen in Nederland ooit in het leven een angststoornis heeft? Het is dus absoluut niet iets om je voor te schamen!"
      }
    ]
  },
  {
    "slug": "stress",
    "titel": "Stress",
    "onderwerp": "Stress",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/stress",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_stress",
    "intro": "Iedereen ervaart wel eens stress. Stress maakt je lichaam klaar om in actie te komen voor een gebeurtenis of belangrijke klus. Het helpt je bijvoorbeeld om goed te concentreren voor een examen of direct te reageren in een gevaarlijke situatie in het verkeer. Zodra dit voorbij is, neemt de stress weer af en kunnen je lichaam en geest zich herstellen. Dit is een normale, gezonde stressreactie.",
    "blokken": [
      {
        "tekst": "Maar op het moment dat je vaak, een lange tijd of hevige stress ervaart, kan stress omslaan in ongezonde stress. Helemaal als je het gevoel hebt hier geen of weinig controle over te hebben en je er onvoldoende van kan herstellen."
      },
      {
        "tekst": "Heb jij last van stress of wil je stress voorkomen? Op deze pagina geven we je tips om stress aan te pakken."
      },
      {
        "kop": "Krijg inzicht"
      },
      {
        "tekst": "Om ongezonde stress te voorkomen, moet je dingen die energie vragen voldoende afwisselen met dingen die energie geven. Doe je dat niet, dan krijg je lichamelijk en mentaal niet de tijd om bij te komen van de stress die je ervaart. Dan gaan spanning en vermoeidheid zich opstapelen."
      },
      {
        "tekst": "Waar de een vooral stress ervaart van geldproblemen, ervaart de ander stress door familieproblemen of door deadlines op het werk. Waar je stress van hebt is persoonlijk. Ook kan je door een combinatie van omstandigheden stress ervaren. Veel mensen weten van zichzelf wel waar ze stress van krijgen. Toch helpt het om het voor jezelf eens op te schrijven. Het maakt je bewust en het leidt vaak tot nieuwe inzichten. Neem een moment de tijd om te noteren wat bij jou stress veroorzaakt. Wat kost je veel energie? Kan je daar wat aan veranderen? Wanneer heb je meer en wanneer heb je minder stress?"
      },
      {
        "tekst": "Schrijf ook op wat je juist energie geeft, zoals wandelen, een film kijken, muziek of een podcast luisteren, afspreken met vrienden of uitgebreid koken. Dit zijn zomaar wat voorbeelden. Van welke dingen krijg jij energie? Maak hier regelmatig tijd voor."
      },
      {
        "tekst": "Wil je meer lezen over stress? Op onze webpagina lees je meer over wat het is, wanneer het ongezond is, hoe je ongezonde stress herkent, hoe het ontstaat en hoe je herstelt. Door het maken van deze stress-test breng je in kaart hoeveel stress jij ervaart."
      },
      {
        "kop": "Ontspan"
      },
      {
        "tekst": "Vind je het wel eens lastig om te ontspannen? Op onze website vind je verschillende oefeningen, die je hierbij helpen. Probeer, als je met taken bezig bent die jou stress geven, om ongeveer ieder uur vijf ontspannende minuten te hebben. Neem bijvoorbeeld de tijd voor een kop koffie of thee of ga een paar minuten naar buiten om een luchtje te scheppen."
      },
      {
        "kop": "Ga niet thuiszitten"
      },
      {
        "tekst": "Sommige mensen vallen stil door stress. Ze blijven het liefst thuis en trekken zich terug uit sociale contacten. Dit kan je beter niet doen. Juist door dingen te blijven ondernemen en door in contact te blijven met anderen activeer je de breinnetwerken die controle hebben over negatieve emoties."
      },
      {
        "tekst": "Hiermee bedoelen we niet dat je de hele dag in de weer moet zijn. Maar probeer je energie te verdelen en de momenten dat je actief bent af te wisselen met rustige momenten."
      },
      {
        "kop": "Stel je verwachtingen bij"
      },
      {
        "tekst": "Als je vaak stress ervaart, kan het geen kwaad eens kritisch te kijken naar de verwachtingen die je van je omgeving en ook van jezelf hebt. Stel jezelf vragen: Zijn mijn verwachtingen wel haalbaar? Waarom heb ik deze verwachtingen? Kan ik mijn verwachtingen ook kleiner maken? Zodra je dit doet, zal je merken dat je meer lucht ervaart. Het hoeft namelijk niet allemaal perfect. En fouten maken is menselijk."
      },
      {
        "kop": "Stel prioriteiten en maak keuzes"
      },
      {
        "tekst": "Heb jij stress doordat je constant het gevoel hebt dat je te veel moet doen in te weinig tijd? Schrijf alle dingen die je wil of moet doen op. Maak vervolgens een onderscheid in dingen die ‘nu’ moeten gebeuren en dingen die best nog even kunnen wachten. Vaak blijkt dat veel taken die in je hoofd rondspoken niet direct gedaan hoeven te worden."
      },
      {
        "tekst": "Merk je dat je agenda te vol staat met afspraken, omdat je niet kan kiezen of omdat je niets wil missen? Maak keuzes. Waar wil je echt heen en welke afspraken zijn minder belangrijk? Misschien kan je een afspraak verplaatsen of afzeggen of een keer niet beloven dat je erbij bent. Dit kan even een ongemakkelijk gevoel geven, maar uiteindelijk houd je meer energie over om de dingen die je wilt doen ook echt goed te doen."
      },
      {
        "tekst": "Check als het even kan op vaste tijden je mail, social media en berichten op je telefoon. In plaats van dat je de hele dag wordt afgeleid, kan je je tussendoor volledig focussen op andere taken."
      },
      {
        "kop": "Maak een realistische planning"
      },
      {
        "tekst": "Maak op basis van je lijstje met prioriteiten en dingen die nog even kunnen wachten een planning. Wanneer ga je wat doen? Plan de taken in je agenda of houd takenlijstjes bij, zodat je per dag weet wat er te doen staat. Pak je planning er in ieder geval eens per dag bij en pas aan waar nodig. Verwijder of streep de taken door die je gedaan hebt en schuif taken door naar een andere dag als je er niet aan toe bent gekomen. Komt er een taak bij? Bedenk je of die vandaag nog moet of op welke andere dag het handig is. Op deze manier hoef je niet alles de hele tijd in je hoofd te houden en ontstaat daar ruimte."
      },
      {
        "tekst": "Leg de lat hierbij niet te hoog. Als je te veel op een dag wilt doen, loop je het risico dit niet te halen en met een teleurgesteld gevoel achter te blijven. Plan daarom niet te veel op één dag en deel grote taken op in kleine deeltaken. Houd ook tijd vrij voor onverwachte gebeurtenissen en ontspanning."
      },
      {
        "kop": "Stel grenzen"
      },
      {
        "tekst": "Heb jij wel eens stress, omdat je het lastig vindt duidelijk te zijn naar anderen? En dat ze hierdoor wel eens te weinig rekening met jou houden? Bijvoorbeeld dat jij jouw dagplanning plotseling moet omgooien, omdat jouw partner zelf plannen heeft gemaakt waardoor jij thuis moet blijven bij de kinderen. Of dat jouw collega steeds meer werk bij jou op je bordje legt?"
      },
      {
        "tekst": "Om te voorkomen dat er over je heen wordt gelopen waardoor jij stress ervaart, is het belangrijk om te weten waar je grenzen liggen. En om je grenzen ook te stellen en ‘nee’ te zeggen als dat nodig is. Maar hoe kom je op een goede manier voor jezelf op en zeg je wat je wil of juist niet wil? Het helpt om met een aantal dingen rekening te houden, zoals het moment waarop je reageert, de manier waarop je iets zegt en je houding. Kan je hierbij tips gebruiken? Wij schreven uitgebreide tips om je grenzen te leren kennen en aan te geven. En tips om vaker nee te zeggen."
      },
      {
        "tekst": "Probeer het stellen van je grenzen als het kan altijd in overleg met de ander te doen. Zo voorkom je dat jouw grenzen ervoor zorgen dat je geen rekening met de ander houdt."
      },
      {
        "kop": "Werk aan helpende gedachten"
      },
      {
        "tekst": "Zitten jouw gedachten je wel eens in de weg? Ben je geneigd dingen van de negatieve kant te bekijken of pieker je veel? Ga iets doen als je begint te piekeren. Dit leidt je gedachten af. Ga bijvoorbeeld sporten of wandelen. Wil jij meer tips om minder te piekeren? Wij schreven tips en technieken om piekeren tegen te gaan."
      },
      {
        "tekst": "Als je veel stress hebt, helpt het om inzicht te krijgen in je negatieve gedachten. Want wist je dat de manier waarop je denkt invloed heeft op hoe jij je voelt? Als je negatieve gedachten verandert naar helpende gedachten, zal ook je gevoel veranderen. Een gedachte als: “Ik heb veel te veel doen vandaag, dat krijg ik nooit af” geeft je een opgehaast gevoel. Terwijl als je deze gedachte aanpast naar: “Ik heb veel te doen vandaag, maar ik doe wat ik kan en ik zie wel hoe ver ik kom” een meer ontspannen gevoel geeft."
      },
      {
        "tekst": "Nu klinkt dit veel gemakkelijker dan dat het vaak is. Het veranderen van je gedachten lukt vaak niet van de ene op de andere dag. Maar als je hiermee oefent, zal je zien dat je er steeds een beetje beter in wordt. Kan je hier wel wat hulp bij gebruiken? Doe dan onze oefeningen om je gedachten helpend te maken."
      },
      {
        "kop": "Pak problemen aan, maar laat los waar je geen invloed op hebt"
      },
      {
        "tekst": "Bij ieder mens lopen er dingen anders in het leven dan diegene zou willen. Sommige dingen kan je veranderen, maar er zijn ook zaken waar je geen invloed op hebt. Onderneem stappen om dingen die jou stress geven te verbeteren als dat kan. Pak niet alles tegelijk aan, maar kies voor datgene wat je het liefst wil veranderen. Bedenk een concreet en haalbaar plan en ga hier stap voor stap mee aan de slag. Maak het jezelf niet te moeilijk, zodat de kans van slagen groter is."
      },
      {
        "tekst": "Probeer daarnaast de dingen waar je geen invloed op hebt los te laten. Omdat je het toch niet kan veranderen is het zonde van je tijd je er zorgen over te maken en ervan in de stress te schieten. Natuurlijk is dat niet altijd even makkelijk. Maar als je hier bewust van bent, heb je de eerste stappen al gezet. Vind je dit lastig? Misschien dat mindfulness je hierbij kan helpen."
      },
      {
        "tekst": "Mindfulness is een training die je leert te leven met aandacht en je te richten op het hier en nu. Mindfulness kan je helpen om je problemen onder ogen te zien en er zonder oordeel naar te kijken. Hierdoor kan je er op een andere manier mee omgaan, zodat ze een minder negatieve rol spelen in je leven. Wij schreven simpele oefeningen om zelf aan de slag te gaan met mindfulness."
      },
      {
        "kop": "Slaap goed"
      },
      {
        "tekst": "We weten allemaal dat slaap belangrijk is om je lichaam en geest te herstellen. Goede slaap draagt bij aan een uitgerust en fit gevoel. Probeer ervoor te zorgen dat je ‘s nachts goed en genoeg slaapt."
      },
      {
        "tekst": "Heb je problemen met slapen? Dan ben je niet de enige. Veel volwassenen geven aan wel eens slaapproblemen te hebben. Jammer genoeg ben je kwetsbaarder voor stress als je je niet uitgerust voelt. Gelukkig kan je veel doen om goed te slapen. Van ontspanningsoefeningen doen tot je slaapkamer goed ventileren voordat je gaat slapen. Meld je aan voor onze Beter Slapen Challenge en ontvang opdrachten en tips."
      },
      {
        "kop": "Beweeg"
      },
      {
        "tekst": "Bewegen versterkt lichaam én geest. Er zijn veel voordelen: je humeur verbetert, je bent beter beschermd tegen stress en je voelt je fitter. Probeer daarom elke dag voldoende te bewegen en voorkom dat je te veel stilzit. Bedenk welke mogelijkheden jij hebt om iedere week minimaal 150 minuten matig intensief te bewegen. En ga hiermee aan de slag. Verspreid het bewegen over meerdere dagen in de week. Je beweegt matig intensief bij activiteiten waarbij je hartslag omhooggaat, je ademhaling versnelt en je nog wel kan praten, zoals stevig doorwandelen, fietsen en tuinieren. Probeer vormen van beweging te kiezen die je leuk vindt. Ook kan het helpen om het samen met iemand te doen. Zo houd je het langer vol."
      },
      {
        "tekst": "Je kan extra beweging ook in je dagelijks leven inpassen door een aantal kleine aanpassingen te maken. Pak bijvoorbeeld vaker de fiets als je boodschappen gaat doen, stap een halte eerder uit als je de bus neemt, of neem vaker de trap in plaats van de lift."
      },
      {
        "tekst": "Het beste is om hierbij ook minimaal twee keer per week spier- en botversterkende activiteiten te doen. Denk aan fitness of hardlopen. Ben je al wat ouder? Dan is het goed om dit te combineren met balansoefeningen, zoals op één been staan."
      },
      {
        "tekst": "Lukt het jou niet om zoveel te bewegen? Bedenk je dat iedere stap telt!"
      },
      {
        "kop": "Ga de natuur in"
      },
      {
        "tekst": "Wandelen in de natuur is goed tegen stress. Uit onderzoek blijkt dat zelfs 15 minuten in het groen al je mentale gezondheid verbetert. En dat je meer stress verliest als je langer in de natuur bent. Woon je in een stad? Zoek dan stadsnatuur op, zoals een park. Snuif de frisse lucht in, kijk naar de bomen en luister naar de vogels."
      },
      {
        "kop": "Houd structuur in je dag"
      },
      {
        "tekst": "Als je stress ervaart, is het extra belangrijk om regelmaat te houden in je leven. Dat kan best lastig zijn. Maar weet dat structuur in je dag juist zorgt voor duidelijkheid en overzicht. Het helpt je je rustiger en stabieler te voelen. Sta rond een vaste tijd op (niet te laat), kleed je aan, eet op regelmatige tijden en ga op tijd naar bed."
      },
      {
        "kop": "Eet en drink gezond"
      },
      {
        "tekst": "Probeer ook gezond te eten en drink niet te veel cafeïne. Het kan heel verleidelijk zijn om je spanning weg te eten met lekkere snacks of geen tijd te nemen om te eten, maar het helpt je uiteindelijk niet. Op de korte termijn werkt alcohol ontspannend en is daardoor aantrekkelijk als je je gespannen voelt. Op de lange termijn voel je je beter als je hiermee matigt. Je voelt je fitter en hebt meer energie."
      },
      {
        "kop": "Praat erover"
      },
      {
        "tekst": "Maak jij je zorgen over de stress die je ervaart? Als dit zo is, dan is het vaak fijn om je hart te luchten en steun te zoeken. Praat over je gevoelens met bijvoorbeeld familieleden of vrienden. Weet je niet zo goed hoe je een gesprek begint of wie je het beste in vertrouwen kan nemen? Wij schreven handige tips om te praten over hoe je je voelt. Ook zijn we daarin eerlijk en geven we aan wanneer andere manieren soms beter helpen."
      },
      {
        "kop": "Vraag de MIND Hulplijn om advies!"
      },
      {
        "tekst": "Heb jij last van stress en wil je jouw persoonlijke situatie graag met een professional bespreken? Neem contact op met de MIND Hulplijn voor een deskundig, anoniem en gratis advies op maat."
      },
      {
        "kop": "Zoek hulp"
      },
      {
        "tekst": "Ben je zo gestrest dat je moeite hebt je dagelijkse dingen te doen? Of heb je een stressvolle periode achter de rug en voel je je nu erg moe, leeg, somber, angstig of heb je andere klachten? En heb je hier al twee weken of langer last van? Aarzel dan niet om professionele hulp te zoeken. De eerste stap is een afspraak bij de huisarts. De huisarts kijkt samen met jou naar wat je zou kunnen helpen."
      }
    ]
  },
  {
    "slug": "mentaal-fit-werk",
    "titel": "Hoe blijf ik mentaal fit op het werk?",
    "onderwerp": "Energie",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/mentaal-fit-werk",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer_mentaalfit_myb_112021",
    "intro": "",
    "blokken": []
  },
  {
    "slug": "veilig-chatten-ai",
    "titel": "Veilig chatten met AI",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/veilig-chatten-ai",
    "aanmeld": "https://formulier.wijzijnmind.nl/flyer-chatten-ai",
    "intro": "Steeds meer mensen gebruiken AI om te chatten over hun gedachten, gevoelens of psychische klachten. Praten met AI kan namelijk heel fijn zijn. Je kan aan AI altijd een vraag stellen, vertellen hoe je je voelt of een lastige situatie delen. En dat kan overal ter wereld, waar en wanneer je maar wil, zonder eindtijd. Een AI-chatbot oordeelt niet. Maar er zijn ook beperkingen en risico’s. Op deze pagina bieden we je tips om AI zo veilig mogelijk te gebruiken.",
    "blokken": [
      {
        "kop": "Gebruik AI als hulpmiddel, niet als hulpverlener"
      },
      {
        "lijst": [
          "Verdiep je in wat AI is, hoe het jou kan helpen, maar ook in de beperkingen en risico’s. Wij schreven hier een uitgebreide webpagina over.",
          "Bedenk je dat de AI-chatbot met wie je praat geen mens is. Het heeft geen gevoelens en kan hierdoor dingen missen die een vriend, familielid of hulpverlener wel ziet. Gebruik AI daarom als aanvulling, niet als enige bron van steun of vervanging van het contact met een mens. Blijf vooral ook praten met de mensen om je heen.",
          "Sta vooraf stil bij hoe je AI wil gebruiken. Wil je je gedachten ordenen, even van je af praten of informatie en advies inwinnen? Dit zorgt ervoor dat je zelf controle houdt over het gesprek.",
          "Laat AI geen diagnose stellen en neem geen beslissingen over medicatie of behandeling op basis van het advies van een AI-chatbot. Bespreek dit altijd met een hulpverlener."
        ]
      },
      {
        "kop": "Deel zo weinig mogelijk privé informatie"
      },
      {
        "lijst": [
          "Denk goed na over wat je wel en niet wil delen met de AI-chatbot. Wat je typt of inspreekt wordt verwerkt door het bedrijf achter de chatbot. Soms worden gesprekken opgeslagen of gebruikt om de chatbot te verbeteren. Dit verschilt per chatbot, per account en per instelling. Ga er nooit vanuit dat wat je deelt privé blijft. Wil je meer weten over het privacybeleid van de chatbot die je gebruikt? Geef de chatbot de opdracht om het privacybeleid te analyseren en in begrijpelijke taal samen te vatten.",
          "Kijk in de privacy instellingen van de chatbot. Zet uit dat je chats gebruikt mogen worden om het AI-model te verbeteren, als die optie er is. Gebruik zo mogelijk een tijdelijke chat of privéchat. Een betaalde of zakelijke versie heeft soms meer privacy instellingen, maar controleer dit altijd. Dit kan per chatbot verschillen.",
          "Schrijf of spreek zo anoniem mogelijk. Deel nooit privégegevens, zoals je naam, contactgegevens of waar je woont. Wees ook voorzichtig met informatie delen over andere mensen. Zeg bijvoorbeeld “mijn behandelaar” of “mijn partner” in plaats van een naam.",
          "Upload geen foto’s, screenshots, brieven, medische dossiers of geluidsopnames met persoonlijke informatie. Daarin kunnen meer gegevens staan dan je denkt, zoals namen, locaties, gezichten, dossiernummers of gegevens van anderen.",
          "Gebruik geen gedeelde laptop of telefoon of een gedeeld account, zodat anderen niet mee kunnen lezen. Let ook op dat je geen werkaccount gebruikt."
        ]
      },
      {
        "tekst": "\"AI gaat mee in jouw verhaal, laat je horen wat je wil horen, geeft vaak aan dat jij goed zit en de ander fout. Je moet specifiek vragen om een spiegel voor te houden, te reflecteren en te vragen wat je kan doen om je gedrag te verbeteren. Maar niet iedereen wil dat horen of vraagt ernaar. Dan kan het best gevaarlijk zijn.”"
      },
      {
        "kop": "Controleer wat AI zegt en geef duidelijke opdrachten"
      },
      {
        "tekst": "Kijk altijd kritisch naar de antwoorden en adviezen die AI geeft. AI-chatbots kunnen overtuigend klinken, maar toch verkeerde of onveilige informatie geven. Ook kunnen AI-chatbots erg meegaand zijn. Soms bevestigen ze jouw verhaal te snel, ook als het jou meer zou helpen om eerlijk en scherp mee te denken of je een spiegel voor te houden. Twijfel je over het antwoord?"
      },
      {
        "lijst": [
          "Vraag AI waar die de informatie vandaan haalt en controleer dit. Open de link en kijk of de informatie ook echt klopt.",
          "Kijk op betrouwbare websites, zoals die van MIND, Thuisarts of die van je zorgaanbieder.",
          "Vraag om de mening van een vriend, familielid of hulpverlener."
        ]
      },
      {
        "tekst": "Geef de AI-chatbot de opdracht om alleen betrouwbare websites te gebruiken of je tegen te spreken als dat nodig is. Hieronder noemen we voorbeelden van instructies om te geven:"
      },
      {
        "lijst": [
          "“Maak alleen gebruik van de website van MIND, Thuisarts, of...” (Controleer altijd zelf of de informatie die AI geeft hier ook echt staat.)",
          "“Geef geen diagnose.”",
          "“Geef eerlijke antwoorden. Spreek mij tegen als dit nodig is.”"
        ]
      },
      {
        "tekst": "\"Als ik AI goede instructies geef dan helpt het mij om situaties van meerdere kanten te bekijken, een eerlijke maar zachte spiegel voor te zetten en om bepaalde patronen te doorbreken.”"
      },
      {
        "kop": "Let op wat het gebruik van AI met je doet"
      },
      {
        "lijst": [
          "Merk op wat AI met je doet. Voel je je rustiger na een gesprek, of juist meer somber of angstig? Stop dan met het gebruik van AI.",
          "Spreek van tevoren met jezelf af wanneer je stopt. Bijvoorbeeld na twintig minuten of na drie vragen. Zo voorkom je dat je eindeloos in gesprek blijft met de AI-chatbot. Het kan helpen om een timer te zetten.",
          "Let op als je merkt dat je steeds vaker naar AI grijpt in plaats van dat je de mensen om je heen opzoekt. Voel je je afhankelijk van de chatbot, krijg je het gevoel dat de chatbot jou als enige begrijpt, of blijf je langer praten dan je eigenlijk wilde? Neem dan afstand."
        ]
      },
      {
        "kop": "Zoek professionele hulp als dat nodig is"
      },
      {
        "lijst": [
          "Stel het zoeken van professionele hulp nooit uit. Chatten met AI kan je het gevoel geven dat je al in gesprek bent met iemand. Maar een chatbot kan nooit hulpverlening vervangen. Bespreek je klachten altijd met de mensen om je heen die je vertrouwt. Iemand die dichtbij je staat kan met je meedenken over hoeveel invloed de klachten op jouw leven hebben. Heb je langer dan twee weken last van je klachten en hebben ze grote invloed op jouw dagelijkse leven? Neem dan contact op met je huisarts. De huisarts kan samen met jou bekijken wat er aan de hand is. Als dat nodig is kan de huisarts je ondersteunen of je doorverwijzen voor hulp.",
          "Ook kan je altijd contact opnemen met onze MIND Hulplijn voor anoniem, gratis en deskundig advies. Onze hulpverleners denken graag met je mee en kunnen je ook helpen het gesprek met de huisarts of andere mensen in jouw omgeving voor te bereiden."
        ]
      },
      {
        "tekst": "Op onze webpagina over AI en mentale gezondheid noemen we een aantal situaties wanneer je AI beter niet kan gebruiken:"
      },
      {
        "lijst": [
          "Als je wil praten over bijzondere ervaringen",
          "Als je wil praten wanneer je je erg opgewekt of gejaagd voelt",
          "Als je vragen hebt over voeding of gewicht",
          "Als je denkt aan zelfdoding (neem contact op met je huisarts of belof chat met 113) .",
          "Ga naar de pagina en lees wat je dan wel kan doen. Ook lees je er meer informatie over andere vormen van steun en contact."
        ]
      }
    ]
  },
  {
    "slug": "verslaving-naasten",
    "titel": "Verslaving in je omgeving",
    "url": "https://wijzijnmind.nl/psychische-klachten/flyers-en-informatie/verslaving-naasten",
    "aanmeld": "https://formulier.wijzijnmind.nl/verslaving-naasten",
    "intro": "Heb jij een naaste die het steeds moeilijker vindt om zonder een bepaald middel of gedrag te kunnen, zoals alcohol, drugs, gokken of gamen? Of steeds meer of langer begint te gebruiken of dit gedrag laat zien? Het is vaak moeilijk als iemand waar je om geeft de controle begint te verliezen. Het kan veel gevoelens oproepen: zorgen, boosheid, verdriet of hulpeloosheid. Je wilt graag helpen, maar hoe? Je wilt je grenzen aangeven, maar hoe stel je die? En tegelijkertijd wil je zelf overeind blijven. Op deze pagina geven we je tips die je hierbij op weg helpen.",
    "blokken": [
      {
        "kop": "Praat over je zorgen op een rustig moment"
      },
      {
        "tekst": "Kies een moment waarop jouw naaste niet onder invloed is en jij zelf rustig bent. Begin niet te snel over (je vermoedens van) verslaving, maar vraag hoe het gaat. Mocht de ander er niet zelf mee komen, benoem het dan alsnog. Maak geen verwijten, geef aan dat je er voor de ander bent en dat je je zorgen maakt. Voorbeeld: “ Ik zeg dit omdat ik om je geef. Ik merk dat je vaker drinkt/gokt/gamet en ik maak me daar zorgen over. Je kan me alles vertellen. Ik ben er voor je .” Het kan zijn dat jouw naaste het ontkent. Blijf toch, op rustige momenten en zonder verwijten, proberen om het gesprek hierover te voeren."
      },
      {
        "kop": "Luister zonder oordeel"
      },
      {
        "tekst": "Probeer echt te luisteren naar wat jouw naaste zegt, zonder meteen advies te geven of met oplossingen te komen. Geef aan dat je het graag wil begrijpen. Laat de ander uitspreken en zeg geen afkeurende dingen als: “ Waarom blijf je niet van die troep af ?” of “ Stop er gewoon mee .” Als de ander zich begrepen en veilig bij je voelt, zal diegene eerder open tegen jou zijn. Daar hebben jullie beiden veel meer aan."
      },
      {
        "kop": "Besef dat de ander zélf moet veranderen"
      },
      {
        "tekst": "Als je iemand in je omgeving ziet worstelen met verslaving dan wil je het liefst ervoor zorgen dat dit stopt en dat jouw naaste weer zichzelf is. Dit gevoel kan extra sterk zijn als diegene het probleem (nog) niet wil zien, het ontkent en geen hulp wil. Helaas kan je de ander niet veranderen. Jouw naaste moet echt zelf inzien dat het niet goed gaat en de wil hebben om dit aan te pakken. Neem geen dingen over. En ga ook niet de problemen oplossen die jouw naaste heeft veroorzaakt door de verslaving. Denk aan het overnemen van taken of ziekmelden voor school of werk vanwege een kater of te weinig slaap door nachtenlang gamen. Dit kan de ander juist tegenhouden om zelf in beweging te komen."
      },
      {
        "kop": "Zoek samen naar hulp"
      },
      {
        "tekst": "Besef dat jouw naaste professionele hulp nodig heeft als dit nog niet het geval is. Stimuleer daarom om hulp te zoeken. Vertel dat hulp zoeken geen zwakte is, maar juist een kracht. Bovendien zijn er heel veel mensen die worstelen met verslaving; niets om je voor te schamen dus!"
      },
      {
        "tekst": "Bedenk je dat jouw naaste hier alleen iets mee kan en doet als diegene daarvoor openstaat. Geef aan dat het volgens jou een goed idee is om bij de huisarts langs te gaan. Dit is de eerste stap naar professionele hulpverlening. Bied jouw naaste aan om mee te gaan naar deze afspraak."
      },
      {
        "kop": "Zoek informatie"
      },
      {
        "tekst": "Als je begrijpt wat een verslaving is, kan je beter omgaan met wat er gebeurt. Lees betrouwbare informatie over verslaving op onze website, alcoholinfo.nl, drugsinfo.nl, gameninfo.nlof vraag persoonlijk advies bij onze MIND Hulplijn. Onze hulpverleners kunnen je ook adviezen geven over hoe je er het beste voor je naaste kan zijn en zelf op de been blijft."
      },
      {
        "kop": "Geef je grenzen aan"
      },
      {
        "tekst": "Iemand met een verslaving is zichzelf niet. De verslaving kan zorgen voor vervelend en grensoverschrijdend gedrag. Denk aan liegen, dingen vernielen, uitschelden, stelen of dingen van je vragen die je niet wil. Geef je grenzen aan. Je mag duidelijk zijn over wat jij wel en niet wil. Voorbeeld: “ Ik wil er voor je zijn, maar ik geef geen geld. Laten we samen naar andere oplossingen kijken. ” Het aangeven van grenzen beschermt jou én helpt jouw naaste om verantwoordelijkheid te nemen."
      },
      {
        "tekst": "Kan je wel wat handvatten gebruiken om je grenzen te herkennen en ze aan te geven? Wij schreventips en technieken om jouw grenzen te leren kennen en ze te stellen."
      },
      {
        "tekst": "Is jouw naaste een andere volwassene? Dan kan je aangeven dat je er weer voor de ander bent op het moment dat de ander inziet dat het zo niet langer kan. Of dat je pas weer contact wil als de ander niet meer liegt en zich aan afspraken houdt. Dit kan best lastig zijn, omdat jouw naaste dit misschien wel wil en belooft, maar de verslaving het wint op moeilijke momenten. Probeer sterk te zijn en bij je standpunt te blijven."
      },
      {
        "kop": "Stel niet te hoge verwachtingen"
      },
      {
        "tekst": "Het liefst zie je dat de verslaving snel verdwijnt en dat iemand weer zichzelf is. Helemaal als diegene hiervoor hulp heeft gezocht. Toch is het vaak niet zo eenvoudig. Hoe graag je het zou willen, ga er niet van uit dat een behandeling alles snel ‘oplost’. De ander kan niet zomaar de knop omdraaien. Vaak gaat het om een langer proces met vallen en opstaan. Ook kan iemand terugvallen. Dat betekent niet dat de ander de best niet doet. Geef het tijd en leg geen extra druk op. Het helpt jouw naaste bij het herstel als jij achter diegene blijft staan en diegene niet laat vallen. Jouw naaste kan (tijdelijk) veranderen door de verslaving. Daar mag je verdrietig om zijn."
      },
      {
        "kop": "Blijf samen leuke dingen doen"
      },
      {
        "tekst": "Niet alles hoeft de hele tijd om de verslaving te draaien. Doe leuke dingen samen, ook met andere familieleden of vrienden. Dit kan heel klein zijn, van gezellig samen kletsen, tot samen een film kijken of eropuit gaan. Zo maak je het af en toe wat minder zwaar en blijf je op een fijne manier in contact met elkaar. Bovendien kan het een gezonde afleiding zijn als je naaste het moeilijk heeft."
      },
      {
        "kop": "Zorg goed voor jezelf"
      },
      {
        "tekst": "Leven naast iemand met een verslaving kan zwaar zijn. Dus zorg ook goed voor jezelf. Probeer je leven er niet te veel op aan te passen. Maak ruimte voor dingen die je energie geven en neem tijd om te ontspannen. En voel je hier niet schuldig over. Juist door voor jezelf te kiezen, kan je er beter voor de ander zijn."
      },
      {
        "kop": "Doe het samen"
      },
      {
        "tekst": "Als naaste is het prettig als je niet in je eentje alle zorg hoeft te dragen. Maak daarom afspraken met andere naasten. Overleg waar zij bij kunnen helpen, zodat je weet wat je aan elkaar hebt. Samen sta je sterker!"
      },
      {
        "kop": "Neem mensen in vertrouwen"
      },
      {
        "tekst": "Praten over wat je meemaakt en ervaart met je naaste kan erg opluchten. Doe dit bij iemand die je vertrouwt. Vind je het lastig om te praten of kan je hier wel wat handvatten bij gebruiken? Wij schreventips om te praten over hoe je je voelt. Daarnaast kan het soms fijn en ontspannend zijn om het juist over andere dingen te hebben. Om je even niet bezig te hoeven houden met je constante zorg."
      },
      {
        "kop": "Zoek ondersteuning"
      },
      {
        "tekst": "Veel mensen vinden steun aan elkaar door lotgenotencontact. Naast herkenning kunnen andere naasten je misschien op weg helpen met de aanpak van problemen: de kans is groot dat iemand iets soortgelijks al eens eerder heeft meegemaakt."
      },
      {
        "tekst": "Op deze pagina van het Trimbos-instituut staat uitgebreide informatie over hulp en steun voor naasten. Denk aan hulp van de verslavingszorg, bijeenkomsten met andere naasten, trainingen en workshops en online hulp."
      },
      {
        "tekst": "Heb je een ouder met verslavingsproblemen? Kijk dan eens op onze pagina over KOPP/KOV(kinderen van ouders met psychische of verslavingsproblemen). Speciaal voor volwassenen die nog dagelijks te maken hebben met de gevolgen van opgroeien bij ouders met psychische en/of verslavingsproblemen schreven wij tips."
      }
    ]
  }
];
