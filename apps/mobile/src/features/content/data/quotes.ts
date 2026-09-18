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
//
// Sinds 15 september 2026 (Stijn): een reeks voor een half jaar, zodat de
// quote pas na ruim zes maanden terugkomt. De reeks is gemengd op onderwerp
// en herkomst, zodat twee opeenvolgende dagen niet op elkaar lijken. Er
// zitten bewust Nederlandse stemmen en spreekwoorden tussen. Wat een
// vertaling is, is vrij vertaald; waar een tekst alleen wordt toegeschreven
// en niet terug te vinden is in het werk, staat dat in "over".

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
    tekst: "Na regen komt zonneschijn.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Een zware periode voelt alsof hij nooit ophoudt, maar ook die heeft een einde. Het weer draait, altijd. Je hoeft de zon niet te forceren, alleen te weten dat hij komt.",
    over:
      "Een van de oudste Nederlandse spreekwoorden, al in de zeventiende eeuw opgetekend en in bijna elke taal met een tegenhanger. Niemand weet wie het als eerste zei. Dat het over weer gaat, is geen toeval: het weer is het oudste beeld dat mensen hebben voor hoe ze zich voelen, en precies daarom heet deze app zoals hij heet.",
  },
  {
    tekst: "Je hoeft de hele trap niet te zien om de eerste tree te nemen.",
    auteur: "Martin Luther King jr.",
    betekenis:
      "Je hoeft niet te weten hoe alles afloopt om te kunnen beginnen. Eén tree is genoeg voor nu; de volgende zie je vanzelf als je er staat. Wie eerst de hele trap wil overzien, blijft beneden staan, en de meeste trappen zijn vanaf de eerste tree toch niet te overzien. Vertrouwen is niet weten dat het goed komt, maar de voet toch optillen.",
    over:
      "Martin Luther King jr. (1929-1968) was dominee en de bekendste leider van de Amerikaanse burgerrechtenbeweging. Hij kreeg in 1964 de Nobelprijs voor de Vrede.",
  },
  {
    tekst: "Je bent de lucht. Al het andere is gewoon het weer.",
    auteur: "Pema Chödrön",
    betekenis:
      "Gevoelens trekken over als wolken: soms grijs, soms zwaar, soms open. Jij bent niet de wolk, jij bent de ruimte waar hij doorheen trekt. Wat je vandaag voelt, is niet wie je bent.",
    over:
      "Pema Chödrön (1936) is een Amerikaanse boeddhistische non en schrijfster. Deze zin komt uit haar onderwijs over meditatie en wordt vaak geciteerd om het verschil tussen jou en je stemming uit te leggen.",
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
    tekst: "Elk nadeel heb z'n voordeel.",
    auteur: "Johan Cruijff",
    betekenis:
      "Wat tegenzit, brengt vaak ook iets mee dat je anders niet had gezien. Een slechte dag leert je waar je grens ligt. Het nadeel verdwijnt er niet mee, maar het staat niet meer alleen.",
    over:
      "Johan Cruijff (1947-2016) was voetballer en trainer en misschien wel de bekendste Nederlander van de vorige eeuw. Zijn uitspraken zijn beroemd om hun eenvoud en hun eigen grammatica.",
  },
  {
    tekst: "Wees zacht voor jezelf. Je doet het beste wat je kunt.",
    auteur: "Onbekend",
    betekenis:
      "Op een zware dag is doen wat lukt genoeg. Je hoeft jezelf niet strenger toe te spreken dan je een goede vriend zou doen. Zachtheid is geen zwakte, het is de toon waarop je verder kunt. Wie zichzelf hard aanpakt, raakt eerder uitgeput dan wie zichzelf een beetje ruimte gunt.",
    over:
      "De herkomst van deze uitspraak is niet bekend; hij wordt in veel vormen doorgegeven, precies omdat zoveel mensen hem herkennen. De gedachte erachter is wat de Amerikaanse psycholoog Kristin Neff zelfcompassie noemt: jezelf behandelen zoals je een goede vriend zou behandelen.",
  },
  {
    tekst: "Wij lijden vaker in de verbeelding dan in werkelijkheid.",
    auteur: "Seneca",
    betekenis:
      "Veel van wat ons zwaar valt, is nog niet gebeurd en gebeurt misschien nooit. De gedachte erover doet al pijn. Wie dat ziet, kan een deel van de last terugleggen bij de verbeelding.",
    over:
      "Seneca (circa 4 voor Christus-65) was een Romeinse filosoof en raadgever van keizer Nero. De zin komt uit zijn brieven aan zijn vriend Lucilius, die nog steeds gelezen worden.",
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
    tekst: "Alle dingen zijn zo heel onzeker, en dat is precies wat me geruststelt.",
    auteur: "Tove Jansson",
    betekenis:
      "Onzekerheid voelt als een probleem, maar het betekent ook dat niets vastligt. Als het slechter kan, kan het ook beter. Dat er ruimte is, is op zichzelf al een troost.",
    over:
      "Tove Jansson (1914-2001) was een Finse schrijfster en tekenaar, bekend van de Moemins. De zin komt uit \"Moemin en de winter\" en wordt uitgesproken door Too-ticki.",
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
    tekst: "Een mens lijdt dikwijls het meest door het lijden dat hij vreest.",
    auteur: "Tegeltjeswijsheid",
    betekenis:
      "Het wachten op iets ergs is vaak zwaarder dan het erge zelf. Veel van wat we vrezen komt nooit opdagen, maar heeft ondertussen wel dagen gekost. Dat zien, geeft die dagen een beetje terug.",
    over:
      "Het volledige rijmpje eindigt met \"doch dat nooit op komt dagen\". Het hangt al generaties op Nederlandse tegeltjes; wie het schreef is niet bekend, al wordt Nicolaas Beets soms genoemd.",
  },
  {
    tekst: "Een reis van duizend mijl begint met één stap.",
    auteur: "Laozi",
    betekenis:
      "Hoe ver de weg ook is, er is altijd maar één stap tegelijk te zetten. Die ene stap is er vandaag; de rest van de reis hoeft nu nog niet. Het bijzondere aan de zin is dat hij de duizend mijl niet ontkent, maar ze terugbrengt tot wat een mens kan: één stap. De eerste is meestal de zwaarste, omdat hij de beslissing bevat.",
    over:
      "Laozi was een Chinese denker uit de zesde eeuw voor Christus en geldt als de schrijver van de Daodejing, een van de oudste teksten over leven in balans.",
  },
  {
    tekst: "Je hoeft niet goed te zijn.",
    auteur: "Mary Oliver",
    betekenis:
      "Het is de eerste regel van een gedicht, en hij zet meteen de druk af. Je hoeft vandaag niets te bewijzen, aan niemand. Er zijn zoals je bent, is genoeg om mee te beginnen.",
    over:
      "Mary Oliver (1935-2019) was een Amerikaanse dichter die vooral over de natuur schreef. Dit is de openingsregel van haar gedicht \"Wild Geese\" uit 1986.",
  },
  {
    tekst: "Midden in de winter ontdekte ik dat er in mij een onoverwinnelijke zomer was.",
    auteur: "Albert Camus",
    betekenis:
      "Ook als alles om je heen koud en kaal is, blijft er iets in je dat niet bevriest. Je merkt het pas als je erop let. Die zomer hoeft niet groot te zijn om onoverwinnelijk te zijn.",
    over:
      "Albert Camus (1913-1960) was een Franse schrijver en filosoof en kreeg in 1957 de Nobelprijs voor Literatuur. De zin komt uit zijn essay \"Terug naar Tipasa\" uit 1952.",
  },
  {
    tekst: "Wat achter ons ligt en wat voor ons ligt, is klein vergeleken met wat in ons ligt.",
    auteur: "Ralph Waldo Emerson",
    betekenis:
      "Wat er gebeurd is en wat er nog komt, kan groot lijken. Maar wat je in je draagt, is groter dan allebei. Dat zit er ook op dagen dat je het niet voelt.",
    over:
      "Ralph Waldo Emerson (1803-1882) was een Amerikaanse essayist en dichter. De zin wordt breed aan hem toegeschreven, maar is in zijn werk niet letterlijk terug te vinden.",
  },
  {
    tekst: "Komt tijd, komt raad.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Niet alles hoeft nu opgelost. Sommige antwoorden komen pas als je even wacht, en soms lost een vraag zichzelf op. Tijd is geen uitstel, het is ook een hulpmiddel.",
    over: "Een Nederlands spreekwoord dat al in de zeventiende eeuw werd opgetekend. Het bestaat in vrijwel dezelfde vorm in het Duits en het Deens.",
  },
  {
    tekst: "Heb geduld met alles wat onopgelost is in je hart, en probeer de vragen zelf lief te hebben.",
    auteur: "Rainer Maria Rilke",
    betekenis:
      "Niet elke vraag heeft nu een antwoord, en dat mag. Je kunt met een open vraag leven zonder dat hij je kapotmaakt. Misschien leef je op een dag, zonder het te merken, het antwoord.",
    over:
      "Rainer Maria Rilke (1875-1926) was een Duitstalige dichter. Deze zin komt uit \"Brieven aan een jonge dichter\", die hij tussen 1903 en 1908 schreef aan een jonge schrijver die om raad vroeg.",
  },
  {
    tekst: "Je kunt de golven niet stoppen, maar je kunt leren surfen.",
    auteur: "Jon Kabat-Zinn",
    betekenis:
      "Wat op je afkomt, houd je niet tegen. Hoe je erop meebeweegt, kun je wel leren. Het gaat niet om een stille zee, maar om overeind blijven op een woelige.",
    over:
      "Jon Kabat-Zinn (1944) is een Amerikaanse wetenschapper die mindfulness naar de gezondheidszorg bracht. De zin staat centraal in zijn werk over omgaan met stress.",
  },
  {
    tekst: "Zonder regen geen regenboog.",
    auteur: "Hawaïaans gezegde",
    betekenis:
      "Het mooie en het zware komen vaak uit dezelfde lucht. Dat maakt de regen niet fijn, maar wel minder zinloos. Soms zie je pas achteraf wat een natte dag heeft opgeleverd.",
    over: "Een gezegde dat aan Hawaï wordt toegeschreven, waar regenbogen deel zijn van het dagelijkse weer. Het wordt wereldwijd in veel talen herhaald.",
  },
  {
    tekst: "Wie een waarom heeft om voor te leven, kan bijna elk hoe verdragen.",
    auteur: "Friedrich Nietzsche",
    betekenis:
      "Een zware dag wordt draaglijker als je weet waarvoor je hem draagt. Dat waarom hoeft niet groot te zijn: een mens, een plan, een ochtend die je nog wilt meemaken. Het hoe volgt vaak vanzelf.",
    over:
      "Friedrich Nietzsche (1844-1900) was een Duitse filosoof. De zin komt uit \"Afgodenschemering\" uit 1888 en werd later beroemd doordat Viktor Frankl hem aanhaalde.",
  },
  {
    tekst: "Het is beter een kaars aan te steken dan de duisternis te vervloeken.",
    auteur: "Spreekwoord",
    betekenis:
      "Klagen over het donker verandert niets, en het is begrijpelijk dat je het toch doet. Een klein lichtje verandert wel iets, al is het maar de hoek waar je zit. Klein en concreet wint van groot en boos.",
    over:
      "Vaak een Chinees spreekwoord genoemd en soms aan Confucius toegeschreven, maar de oudste vindplaats is een Engelse preek uit 1907. De herkomst staat dus niet vast.",
  },
  {
    tekst: "Het enige dat we te vrezen hebben, is de vrees zelf.",
    auteur: "Franklin D. Roosevelt",
    betekenis:
      "Angst maakt alles groter dan het is en verlamt precies wat je nodig hebt om verder te komen. Dat de angst zelf het probleem is, klinkt streng, maar is ook geruststellend: die kun je leren kennen.",
    over:
      "Franklin D. Roosevelt (1882-1945) was president van de Verenigde Staten tijdens de crisisjaren en de Tweede Wereldoorlog. De zin komt uit zijn eerste inauguratierede in 1933.",
  },
  {
    tekst: "Mensen worden niet verstoord door de dingen, maar door hun opvattingen over de dingen.",
    auteur: "Epictetus",
    betekenis:
      "Niet de gebeurtenis zelf raakt je, maar het verhaal dat je erover vertelt. Dat verhaal is soms te controleren. Als het niet klopt, mag je het herschrijven.",
    over:
      "Epictetus (circa 50-135) was een Griekse filosoof die als slaaf werd geboren. Zijn lessen werden door een leerling opgeschreven in het \"Handboekje\", waar deze zin uit komt.",
  },
  {
    tekst: "Zelfs de langste nacht eindigt, en de zon komt op.",
    auteur: "Victor Hugo",
    betekenis:
      "Een nacht die maar niet ophoudt, houdt toch op. Je hoeft er niets voor te doen; de zon komt uit zichzelf, ongeacht hoe de nacht was. Volhouden tot dan is genoeg, en volhouden mag ook gewoon wachten zijn. De langste nacht van het jaar is meteen de dag waarop het licht weer begint te winnen.",
    over:
      "Victor Hugo (1802-1885) was een Franse schrijver, bekend van \"Les Misérables\" en \"De klokkenluider van de Notre-Dame\". De zin wordt breed aan hem toegeschreven.",
  },
  {
    tekst: "Al doende leert men.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Je hoeft niet klaar te zijn voordat je begint. Het meeste leer je pas terwijl je het doet, ook de dingen die niet meteen lukken. Onhandig beginnen is gewoon beginnen.",
    over: "Een Nederlands spreekwoord uit de tijd van de gilden, toen je een vak leerde door het te doen. Het staat al in woordenboeken uit de zeventiende eeuw.",
  },
  {
    tekst: "Loop alsof je met je voeten de aarde kust.",
    auteur: "Thich Nhat Hanh",
    betekenis:
      "Lopen kan iets zijn dat je afraffelt, of iets waar je bij bent. Elke stap kan zacht en aandachtig, ook een gewone stap naar de keuken. Dat verandert de wandeling niet, maar wel wie er loopt.",
    over:
      "Thich Nhat Hanh (1926-2022) was een Vietnamese zenmonnik die mindfulness naar het Westen bracht. Hij gaf tientallen jaren les in het Franse klooster Plum Village.",
  },
  {
    tekst: "Je bent niet je gedachten. Je bent degene die ze opmerkt.",
    auteur: "Eckhart Tolle",
    betekenis:
      "Een gedachte kan hard zijn, maar hij is niet jij. Er is iets in je dat de gedachte ziet langskomen, en dat iets is rustiger dan de gedachte. Van daaruit kun je kijken zonder mee te worden getrokken.",
    over:
      "Eckhart Tolle (1948) is een Duits-Canadese spirituele leraar, bekend van \"De kracht van het nu\". Dit is de kern van zijn werk, in een vrije formulering.",
  },
  {
    tekst: "Wat zou het leven zijn als we niet de moed hadden iets te proberen?",
    auteur: "Vincent van Gogh",
    betekenis:
      "Proberen betekent dat het kan mislukken, en dat is precies waarom het moed vraagt. Zonder die moed gebeurt er niets. Het proberen zelf is al leven.",
    over:
      "Vincent van Gogh (1853-1890) schreef dit in een brief aan zijn broer Theo, in december 1881. Zijn honderden brieven worden door het Van Gogh Museum bewaard en zijn online te lezen.",
  },
  {
    tekst: "Rust is geen luiheid. Soms is het de moedigste stap.",
    auteur: "Onbekend",
    betekenis:
      "Stoppen voelt vaak als opgeven, terwijl het juist iets vraagt: durven niet doorgaan. Wie rust neemt, kiest ervoor niet leeg te lopen. Dat is een keuze, geen zwakte. In een tijd waarin druk zijn als een verdienste geldt, is stilstaan soms het enige dat tegen de stroom in gaat.",
    over:
      "De herkomst van deze uitspraak is niet bekend. Hij wordt veel gedeeld door mensen die een burn-out hebben gehad en achteraf zagen dat ze te lang zijn doorgegaan. Dezelfde gedachte staat al in het Nederlandse spreekwoord over de boog die niet altijd gespannen kan zijn.",
  },
  {
    tekst: "Het leven wordt achterwaarts begrepen, maar moet voorwaarts geleefd worden.",
    auteur: "Søren Kierkegaard",
    betekenis:
      "Pas achteraf zie je waar iets goed voor was. Terwijl het gebeurt, is het vaak alleen maar verwarrend. Dat je het nu nog niet snapt, betekent niet dat het geen zin heeft.",
    over:
      "Søren Kierkegaard (1813-1855) was een Deense filosoof en wordt gezien als de vader van het existentialisme. De zin komt uit zijn dagboeken uit 1843.",
  },
  {
    tekst: "Achter de wolken schijnt de zon.",
    auteur: "Nederlands gezegde",
    betekenis:
      "Ook als je hem niet ziet, is de zon er. Wolken bedekken hem, ze halen hem niet weg. Wat je nu voelt, is de bewolking, niet het weer voor altijd.",
    over: "Een Nederlands gezegde dat in veel varianten voorkomt en ook een bekend lied is. Het wordt vaak gebruikt om iemand op een moeilijke dag moed in te spreken.",
  },
  {
    tekst: "Soms is zelfs leven een daad van moed.",
    auteur: "Seneca",
    betekenis:
      "Op sommige dagen is opstaan al veel. Dat het zo voelt, betekent niet dat je zwak bent, maar dat het zwaar is. Doorgaan op zo'n dag is meer dan het lijkt.",
    over:
      "Seneca (circa 4 voor Christus-65) schreef dit in een brief aan Lucilius over ziekte en pijn. Hij was zelf zijn hele leven ziekelijk en schreef vanuit ervaring.",
  },
  {
    tekst: "Alles wat je nodig hebt, is de wil om de volgende kleine stap te zetten.",
    auteur: "Onbekend",
    betekenis:
      "Je hoeft niet alles te kunnen, alleen het volgende. Dat maakt de dag kleiner en dus haalbaarder. Grote dingen bestaan uit veel volgende kleine stappen. En als de wil er even niet is, is dat ook informatie: dan is rusten de volgende stap.",
    over:
      "Geen bekende auteur. De uitspraak wordt in veel varianten gedeeld, vooral in de wereld van herstel en verslavingszorg, waar het principe van één stap tegelijk al sinds de jaren dertig de kern is. Het sluit aan bij de beroemde zin van Laozi over de reis van duizend mijl.",
  },
  {
    tekst: "De wond is de plek waar het licht binnenkomt.",
    auteur: "Rumi",
    betekenis:
      "Waar je gekwetst bent, ben je ook open. Daar komt iets binnen dat er anders niet in had gekund: begrip, zachtheid, een ander mens. De wond blijft pijn doen, maar hij is niet alleen maar pijn.",
    over:
      "Rumi (1207-1273) was een Perzische dichter en mysticus. Deze regel is een vrije, populaire vertaling van een passage uit zijn grote werk, de Masnavi.",
  },
  {
    tekst: "De boog kan niet altijd gespannen zijn.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Wie steeds aanstaat, verliest zijn veerkracht. Ontspannen is niet iets voor daarna, het hoort bij het werk zelf. Een boog die rust, schiet later beter.",
    over: "Een spreekwoord dat al bij de Romeinen voorkomt en in het Nederlands al eeuwen gangbaar is. Het beeld komt uit het boogschieten.",
  },
  {
    tekst: "Je wint kracht, moed en vertrouwen met elke ervaring waarin je de angst echt in de ogen kijkt.",
    auteur: "Eleanor Roosevelt",
    betekenis:
      "Elke keer dat je iets engs toch doet, verandert er iets in je. Niet omdat de angst weg is, maar omdat je nu weet dat je hem kunt dragen. Dat vertrouwen bouw je één keer tegelijk op.",
    over:
      "Eleanor Roosevelt (1884-1962) was presidentsvrouw en later diplomaat en voorvechter van de mensenrechten. De zin komt uit haar boek \"You Learn by Living\" uit 1960.",
  },
  {
    tekst: "Het leven is als fietsen. Om je evenwicht te houden, moet je blijven bewegen.",
    auteur: "Albert Einstein",
    betekenis:
      "Stilstaan voelt veilig, maar op een fiets val je dan om. Kleine beweging houdt je overeind, ook als je niet weet waar je heen gaat. Het tempo maakt niet uit.",
    over:
      "Albert Einstein (1879-1955) schreef dit in 1930 in een brief aan zijn zoon Eduard, die in die tijd psychisch ziek was. De brief is bewaard gebleven.",
  },
  {
    tekst: "Ik ben niet bang voor stormen, want ik leer mijn schip te zeilen.",
    auteur: "Louisa May Alcott",
    betekenis:
      "De storm gaat niet weg omdat je hem vreest. Wat je wel kunt, is leren hoe je erdoorheen vaart. Elke storm die je hebt overleefd, was een zeilles.",
    over:
      "Louisa May Alcott (1832-1888) was een Amerikaanse schrijfster. De zin wordt uitgesproken door Amy in \"Onder moeders vleugels\" (\"Little Women\") uit 1868.",
  },
  {
    tekst: "Vrede begint met een glimlach.",
    auteur: "Moeder Teresa",
    betekenis:
      "Iets groots begint vaak met iets kleins dat je wel kunt. Een glimlach naar een ander, of naar jezelf in de spiegel, verandert de toon van een moment. Van daaruit is de rest een beetje makkelijker.",
    over:
      "Moeder Teresa (1910-1997) werkte tientallen jaren onder de armsten van Calcutta en kreeg in 1979 de Nobelprijs voor de Vrede. De zin wordt breed aan haar toegeschreven.",
  },
  {
    tekst: "Duisternis kan duisternis niet verdrijven; alleen licht kan dat.",
    auteur: "Martin Luther King jr.",
    betekenis:
      "Tegen het donker vechten met meer donker, met boosheid of hardheid, maakt het niet lichter. Een klein beetje licht wel. Dat geldt tussen mensen, en ook in je eigen hoofd.",
    over:
      "Martin Luther King jr. (1929-1968) schreef dit in \"Strength to Love\", een bundel preken uit 1963. De zin gaat verder met: alleen liefde kan haat verdrijven.",
  },
  {
    tekst: "Zit stil, doe niets. De lente komt, en het gras groeit vanzelf.",
    auteur: "Zen-spreuk",
    betekenis:
      "Niet alles heeft jouw inspanning nodig. Sommige dingen groeien alleen als je ze met rust laat. Even niets doen is soms precies wat het gras nodig heeft.",
    over: "Een zenspreuk die vaak aan de dichter Basho of aan Osho wordt toegeschreven, maar geen vaste bron heeft. Hij hoort bij de traditie van wu wei: handelen door niet te forceren.",
  },
  {
    tekst: "Wees vriendelijk, want iedereen die je ontmoet voert een zware strijd.",
    auteur: "Ian Maclaren",
    betekenis:
      "Je ziet aan de buitenkant zelden wat iemand draagt. Dat geldt ook voor jou: anderen zien jouw strijd ook niet. Vriendelijkheid is dan een veilige aanname.",
    over:
      "Ian Maclaren was de schrijversnaam van John Watson (1850-1907), een Schotse dominee. De zin verscheen in 1897 en wordt vaak ten onrechte aan Plato of Philo toegeschreven.",
  },
  {
    tekst: "Val zeven keer, sta acht keer op.",
    auteur: "Japans spreekwoord",
    betekenis:
      "Vallen hoort erbij, ook vaak, en het spreekwoord telt de valpartijen niet als mislukking maar als deel van de reeks. Wat telt, is dat je één keer vaker opstaat dan je valt. Dat is geen prestatie, het is gewoon doorgaan. Wie terugvalt na een goede periode, is niet terug bij af: het is de zevende keer, niet de eerste.",
    over: "Een Japans spreekwoord (nana korobi ya oki) dat vaak wordt afgebeeld met een daruma-pop, die altijd weer rechtop rolt.",
  },
  {
    tekst: "Er zit een barst in alles. Zo komt het licht binnen.",
    auteur: "Leonard Cohen",
    betekenis:
      "Niets is heel, en dat hoeft ook niet. Juist waar iets gebroken is, kan er iets binnen: een ander mens, hulp, een inzicht dat je in gave staat nooit had gekregen. Perfect zijn is niet de voorwaarde voor licht; de barst is het. Het lied zegt het ervoor ook: vergeet je perfecte offer, luid de klokken die nog kunnen luiden.",
    over:
      "Leonard Cohen (1934-2016) was een Canadese zanger en dichter. De regel komt uit zijn lied \"Anthem\" uit 1992, waar hij naar eigen zeggen tien jaar aan schreef.",
  },
  {
    tekst: "Gedeelde smart is halve smart.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Verdriet wordt lichter als je het niet alleen draagt. Niet omdat de ander het oplost, maar omdat je het niet meer alleen hoeft te dragen. Erover praten is geen zwakte, het is delen.",
    over: "Een Nederlands spreekwoord dat vaak wordt aangevuld met \"gedeelde vreugd is dubbele vreugd\". Het bestaat in veel Europese talen.",
  },
  {
    tekst: "Wees geduldig en sterk; op een dag zal deze pijn je van nut zijn.",
    auteur: "Ovidius",
    betekenis:
      "Nu is het alleen maar pijn, en dat mag je zo noemen. Later kan blijken dat je er iets aan hebt overgehouden: begrip, zachtheid, een vriend die je anders niet had gevonden. Dat maakt de pijn niet goed, wel minder leeg.",
    over:
      "Ovidius (43 voor Christus-17) was een Romeinse dichter, bekend van de \"Metamorfosen\". De zin komt uit zijn \"Amores\", liefdesgedichten uit zijn jonge jaren.",
  },
  {
    tekst: "Wie naar buiten kijkt, droomt; wie naar binnen kijkt, ontwaakt.",
    auteur: "Carl Jung",
    betekenis:
      "Het antwoord ligt niet altijd bij wat er om je heen gebeurt. Even naar binnen kijken, naar wat je voelt en waarom, brengt je vaak verder. Dat is geen navelstaren, het is wakker worden.",
    over:
      "Carl Jung (1875-1961) was een Zwitserse psychiater en grondlegger van de analytische psychologie. De zin komt uit een brief die hij in 1916 schreef.",
  },
  {
    tekst: "De natuur haast zich niet, en toch wordt alles volbracht.",
    auteur: "Laozi",
    betekenis:
      "Een boom groeit niet sneller als je eraan trekt. Wat tijd nodig heeft, krijgt tijd, en het komt toch af. Haast is vaak het enige wat je zelf toevoegt.",
    over:
      "Laozi was een Chinese denker uit de zesde eeuw voor Christus. Deze zin wordt hem toegeschreven en past bij de Daodejing, maar is een vrije samenvatting en geen letterlijk citaat.",
  },
  {
    tekst: "Moed is weerstand tegen angst, beheersing van angst, niet de afwezigheid van angst.",
    auteur: "Mark Twain",
    betekenis:
      "Bang zijn en toch doorgaan, dat is moed. Wie niet bang is, hoeft niet moedig te zijn. Dat je angst voelt, zegt dus niets over hoe dapper je bent.",
    over:
      "Mark Twain (1835-1910) was een Amerikaanse schrijver en humorist, bekend van \"Tom Sawyer\" en \"Huckleberry Finn\". De zin komt uit zijn roman \"Pudd'nhead Wilson\" uit 1894.",
  },
  {
    tekst: "Hoop is dat ding met veren dat neerstrijkt in de ziel.",
    auteur: "Emily Dickinson",
    betekenis:
      "Hoop is klein en licht, als een vogel. Je hebt hem niet gekozen, hij komt gewoon zitten. En hij zingt ook als het stormt, schrijft ze verderop in het gedicht.",
    over:
      "Emily Dickinson (1830-1886) was een Amerikaanse dichter die bijna nooit haar huis verliet en bijna al haar gedichten in een la bewaarde. Dit is de openingsregel van een gedicht uit 1861.",
  },
  {
    tekst: "Je gaat het pas zien als je het doorhebt.",
    auteur: "Johan Cruijff",
    betekenis:
      "Sommige dingen zie je pas als je begrijpt waar je naar kijkt. Dat geldt voor voetbal en ook voor jezelf: een patroon valt pas op als iemand het benoemt. Daarna kun je het niet meer niet zien.",
    over:
      "Johan Cruijff (1947-2016) zei dit als analist over het lezen van een wedstrijd. Het werd een van zijn bekendste uitspraken, ver buiten het voetbal.",
  },
  {
    tekst: "Wat licht geeft, moet verbranding verdragen.",
    auteur: "Viktor Frankl",
    betekenis:
      "Iets betekenen voor anderen kost ook wat. Dat je moe bent van geven, betekent niet dat je verkeerd gaf. Het is de prijs van licht, en die mag je af en toe ook even niet betalen.",
    over:
      "Viktor Frankl (1905-1997) schreef dit in \"De zin van het bestaan\", over zijn tijd in de concentratiekampen en wat mensen overeind hield.",
  },
  {
    tekst: "Wie het kleine niet eert, is het grote niet weerd.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Een kop thee, een kort bericht, tien minuten zon: het lijkt niets, maar het is waar de dag van gemaakt is. Wie dat ziet, heeft elke dag iets. Het grote komt vanzelf, of niet, en dat mag.",
    over: "Een Nederlands spreekwoord dat al in de zeventiende eeuw in spreekwoordenverzamelingen staat. De oude vorm \"weerd\" betekent \"waard\".",
  },
  {
    tekst: "Alleen met het hart kun je goed zien. Het wezenlijke is voor de ogen onzichtbaar.",
    auteur: "Antoine de Saint-Exupéry",
    betekenis:
      "Wat echt telt, is zelden zichtbaar: hoe iemand zich voelt, wat iets voor je betekent, waarom je iemand mist. Kijken met je hart is aandacht geven aan dat onzichtbare. Ook bij jezelf.",
    over:
      "Antoine de Saint-Exupéry (1900-1944) was piloot en schrijver. De zin wordt uitgesproken door de vos in \"De kleine prins\" uit 1943, een van de meest vertaalde boeken ter wereld.",
  },
  {
    tekst: "Sommigen van ons denken dat vasthouden ons sterk maakt, maar soms is het loslaten.",
    auteur: "Hermann Hesse",
    betekenis:
      "Volhouden voelt sterk, en dat is het vaak ook. Maar iets laten gaan, een plan, een verwachting, een oud verhaal over jezelf, vraagt soms meer. Loslaten is ook een besluit.",
    over:
      "Hermann Hesse (1877-1962) was een Duits-Zwitserse schrijver, bekend van \"Siddhartha\" en \"De steppewolf\". De zin wordt breed aan hem toegeschreven, maar is in zijn werk niet letterlijk gevonden.",
  },
  {
    tekst: "Elke storm regent op een gegeven moment leeg.",
    auteur: "Maya Angelou",
    betekenis:
      "Een storm voelt eindeloos terwijl je erin zit, maar er zit een grens aan. Regen raakt op. Je hoeft de storm niet te stoppen; hij stopt zichzelf.",
    over:
      "Maya Angelou (1928-2014) was een Amerikaanse dichter en schrijfster, bekend van \"Ik weet waarom gekooide vogels zingen\". Ze zei dit in een interview over moeilijke tijden.",
  },
  {
    tekst: "Niets is goed of slecht, maar het denken maakt het zo.",
    auteur: "William Shakespeare",
    betekenis:
      "Dezelfde dag kan voor de een een ramp zijn en voor de ander gewoon een dag. Het verschil zit in wat je erover denkt. Dat betekent niet dat alles fijn is, maar wel dat je oordeel niet het hele verhaal is.",
    over:
      "William Shakespeare (1564-1616) laat Hamlet dit zeggen in het tweede bedrijf van \"Hamlet\", geschreven rond 1600.",
  },
  {
    tekst: "Haastige spoed is zelden goed.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Onder druk wil je snel klaar zijn, en juist dan gaat het mis. Iets langzamer doen kost minder dan het lijkt, en levert vaak op wat de haast had gekost: overzicht, adem, een beslissing die klopt. Het tempo mag van jou zijn. Wie zich opgejaagd voelt, mag zich afvragen door wie, en of die persoon er eigenlijk is.",
    over: "Een Nederlands rijmend spreekwoord dat al in de zeventiende eeuw werd opgeschreven. Vergelijkbare spreuken bestaan in het Latijn.",
  },
  {
    tekst: "Hoop is kunnen zien dat er licht is, ondanks alle duisternis.",
    auteur: "Desmond Tutu",
    betekenis:
      "Hoop ontkent het donker niet. Hoop is dat je, terwijl het donker is, toch een lichtpuntje kunt zien. Soms is dat lichtpuntje heel klein, en toch is het genoeg.",
    over:
      "Desmond Tutu (1931-2021) was aartsbisschop in Zuid-Afrika en een van de belangrijkste stemmen tegen apartheid. Hij kreeg in 1984 de Nobelprijs voor de Vrede.",
  },
  {
    tekst: "De merkwaardige paradox is dat als ik mezelf accepteer zoals ik ben, ik dan kan veranderen.",
    auteur: "Carl Rogers",
    betekenis:
      "Jezelf afwijzen lijkt de weg naar verbetering, maar het werkt andersom. Pas als je mag zijn zoals je nu bent, komt er ruimte om te bewegen. Acceptatie is geen eindpunt, het is een begin.",
    over:
      "Carl Rogers (1902-1987) was een Amerikaanse psycholoog en een van de grondleggers van de humanistische psychologie. De zin komt uit \"On Becoming a Person\" uit 1961.",
  },
  {
    tekst: "Niet iedereen die dwaalt is verdwaald.",
    auteur: "J.R.R. Tolkien",
    betekenis:
      "Even niet weten waar je heen gaat, is niet hetzelfde als de weg kwijt zijn. Soms is dwalen precies wat je nodig hebt om te ontdekken waar je wel wilt zijn. Een omweg is ook een weg.",
    over:
      "J.R.R. Tolkien (1892-1973) was taalkundige en schrijver van \"In de ban van de ring\". De regel komt uit een gedicht over Aragorn in het eerste deel, uit 1954.",
  },
  {
    tekst: "Een goed begin is het halve werk.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Beginnen is het moeilijkste deel, en als dat gedaan is, is de helft al achter de rug. Niet omdat het werk kleiner is, maar omdat de drempel weg is. Een begin hoeft niet goed te zijn om te tellen.",
    over:
      "Een Nederlands spreekwoord dat teruggaat op een Latijnse spreuk van de dichter Horatius uit de eerste eeuw voor Christus: wie begonnen is, is halverwege. Het bestaat in bijna alle Europese talen en wordt in de psychologie bevestigd: de grootste weerstand zit voor de eerste stap, niet erna.",
  },
  {
    tekst: "Uit het lijden zijn de sterkste zielen voortgekomen.",
    auteur: "Kahlil Gibran",
    betekenis:
      "Wat je nu doormaakt, maakt je niet kapot. Het kan iets in je slijpen dat er anders niet was gekomen. Dat is geen reden om te lijden, wel een reden om jezelf er niet om te veroordelen.",
    over:
      "Kahlil Gibran (1883-1931) was een Libanees-Amerikaanse dichter en schilder, bekend van \"De profeet\". De volledige zin gaat verder: de sterkste karakters dragen littekens.",
  },
  {
    tekst: "Zorgen maken ontneemt morgen zijn verdriet niet, het ontneemt vandaag zijn kracht.",
    auteur: "Corrie ten Boom",
    betekenis:
      "Piekeren over morgen verandert niets aan morgen. Het kost alleen de energie van vandaag. Wat je vandaag wel kunt doen, is precies dat: vandaag.",
    over:
      "Corrie ten Boom (1892-1983) was een Haarlemse horlogemaakster die in de oorlog Joden verborg en Ravensbrück overleefde. De uitspraak wordt breed aan haar toegeschreven.",
  },
  {
    tekst: "Je kunt niet twee keer in dezelfde rivier stappen.",
    auteur: "Heraclitus",
    betekenis:
      "Alles stroomt, en jij ook. De dag van gisteren komt niet terug, maar de zwaarte van gisteren ook niet: het water is anders, en jij bent anders. Elke ochtend is een nieuwe rivier. Wie denkt dat het altijd zo zal blijven, staat stil in een stroom die allang verder is.",
    over:
      "Heraclitus (circa 540-480 voor Christus) was een Griekse filosoof uit Efeze. Van hem zijn alleen fragmenten bewaard, en dit is het bekendste.",
  },
  {
    tekst: "Soms gaat ons licht uit, maar het wordt weer aangeblazen door een ander mens.",
    auteur: "Albert Schweitzer",
    betekenis:
      "Je hoeft je eigen vuur niet altijd zelf brandend te houden. Een ander kan het aanwakkeren, met een woord of gewoon door er te zijn. Hulp toelaten is geen zwakte.",
    over:
      "Albert Schweitzer (1875-1965) was arts, theoloog en organist en bouwde een ziekenhuis in Gabon. Hij kreeg in 1952 de Nobelprijs voor de Vrede. De zin komt uit zijn jeugdherinneringen.",
  },
  {
    tekst: "Wie tevreden is met wat hij heeft, is rijk.",
    auteur: "Laozi",
    betekenis:
      "Rijkdom zit niet in meer, maar in genoeg. Wie kan zien wat er al is, heeft een rustpunt dat niemand af kan pakken. Dat is geen berusting, het is een andere maat.",
    over:
      "Laozi was een Chinese denker uit de zesde eeuw voor Christus. De zin staat in hoofdstuk 33 van de Daodejing, in vrije vertaling.",
  },
  {
    tekst: "Geef verdriet woorden. Het verdriet dat zwijgt, fluistert het overvolle hart toe dat het breekt.",
    auteur: "William Shakespeare",
    betekenis:
      "Verdriet dat je niet uitspreekt, blijft in je zitten en wordt zwaarder. Er woorden aan geven, tegen iemand of op papier, laat er lucht bij. Het maakt het niet minder waar, wel minder vol.",
    over:
      "William Shakespeare (1564-1616) laat Malcolm dit zeggen tegen Macduff in \"Macbeth\", uit 1606, als die net het ergste nieuws heeft gehoord.",
  },
  {
    tekst: "Wat je zoekt, zoekt jou.",
    auteur: "Rumi",
    betekenis:
      "Je hoeft niet alles zelf te vinden. Wat je nodig hebt, is soms al onderweg naar jou. Dat verzacht het zoeken: je bent niet de enige die beweegt.",
    over:
      "Rumi (1207-1273) was een Perzische dichter en mysticus. De zin wordt breed aan hem toegeschreven, maar is een vrije samenvatting van zijn werk en geen letterlijk citaat.",
  },
  {
    tekst: "Ik loop langzaam, maar ik loop nooit achteruit.",
    auteur: "Abraham Lincoln",
    betekenis:
      "Vooruitgang hoeft niet snel te zijn. Langzaam vooruit is nog steeds vooruit, en een trage dag is geen verloren dag. Het tempo zegt niets over de richting.",
    over:
      "Abraham Lincoln (1809-1865) was president van de Verenigde Staten tijdens de burgeroorlog. De zin wordt hem toegeschreven, maar een bron uit zijn eigen tijd ontbreekt.",
  },
  {
    tekst: "Kalme zee maakt geen goede zeeman.",
    auteur: "Afrikaans spreekwoord",
    betekenis:
      "Wat je nu leert, leer je omdat het niet makkelijk is. Niemand wordt gevormd door windstilte. Dat maakt de storm niet leuk, maar wel de plek waar je iets opdoet.",
    over: "Een spreekwoord dat aan Afrika wordt toegeschreven, zonder vaste bron. Het bestaat in soortgelijke vorm in veel zeevarende culturen.",
  },
  {
    tekst: "Alles zal goed komen, en alles zal goed komen, en alle dingen zullen goed komen.",
    auteur: "Juliana van Norwich",
    betekenis:
      "Het is bijna een wiegeliedje, en zo werkt het ook. Niet als belofte dat er niets ergs gebeurt, maar als grond onder je voeten: uiteindelijk komt het goed. Dat mag je herhalen tot je het een beetje gelooft.",
    over:
      "Juliana van Norwich (1342-circa 1416) was een Engelse kluizenares en de eerste vrouw die een boek in het Engels schreef. Deze woorden zijn de bekendste regel eruit.",
  },
  {
    tekst: "Beter ten halve gekeerd dan ten hele gedwaald.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Omdraaien voelt als falen, maar het is een keuze die iets voorkomt. Halverwege stoppen is beter dan helemaal doorlopen naar iets wat niet goed is. Terugkeren is ook bewegen.",
    over: "Een Nederlands spreekwoord dat al in de zestiende eeuw voorkomt. Het wordt vaak aangehaald bij besluiten die je nog kunt terugdraaien.",
  },
  {
    tekst: "Je hoeft je niet te haasten. Je hoeft niet te schitteren. Je hoeft niemand te zijn behalve jezelf.",
    auteur: "Virginia Woolf",
    betekenis:
      "Drie keer \"hoeft niet\" achter elkaar, en dat is precies de bedoeling. De druk om op te vallen en snel te zijn, is niet van jou. Jezelf zijn is genoeg.",
    over:
      "Virginia Woolf (1882-1941) was een Engelse schrijfster, bekend van \"Mrs Dalloway\" en \"Een kamer voor jezelf\". De zin komt uit dat laatste boek, uit 1929, in vrije vertaling.",
  },
  {
    tekst: "Kracht komt niet uit lichamelijk vermogen, maar uit een onverzettelijke wil.",
    auteur: "Mahatma Gandhi",
    betekenis:
      "Sterk zijn heeft weinig te maken met hoe je je lijf voelt. Het zit in de beslissing om door te gaan, ook als je moe bent. Die beslissing kun je elke dag opnieuw nemen.",
    over:
      "Mahatma Gandhi (1869-1948) leidde de geweldloze strijd voor de onafhankelijkheid van India. Hij schreef dit in een van zijn vele artikelen.",
  },
  {
    tekst: "Vele kleintjes maken een grote.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Een goede week bestaat uit kleine momenten, niet uit één grote gebeurtenis. Wat je vandaag doet, telt op, ook als het weinig lijkt. Kleine stappen tellen mee.",
    over:
      "Een Nederlands spreekwoord dat oorspronkelijk over geld ging en al in de zeventiende eeuw werd opgetekend, in de tijd dat spaarzaamheid een deugd was. Het geldt net zo goed voor energie, slaap en goede momenten: die sparen zich ook op in kleine porties.",
  },
  {
    tekst: "Wie naar de wereld kijkt met nieuwe ogen, maakt de echte ontdekkingsreis.",
    auteur: "Marcel Proust",
    betekenis:
      "Je hoeft niet weg om iets nieuws te zien. Dezelfde straat, dezelfde mensen, anders bekeken, zijn al een reis. Soms is de verandering niet buiten je, maar in hoe je kijkt.",
    over:
      "Marcel Proust (1871-1922) was een Franse schrijver, bekend van \"Op zoek naar de verloren tijd\". De zin is een vrije weergave van een passage uit het vijfde deel.",
  },
  {
    tekst: "Aandacht is de zeldzaamste en zuiverste vorm van vrijgevigheid.",
    auteur: "Simone Weil",
    betekenis:
      "Iemand echt aandacht geven, zonder iets te willen of op te lossen, is een groot cadeau, en het is zeldzamer dan geld of advies. Ook jezelf aandacht geven is dat: even stilstaan bij hoe het gaat, zonder oordeel. Het kost niets en het is schaars. Een check-in is precies dat: een minuut aandacht voor jezelf.",
    over:
      "Simone Weil (1909-1943) was een Franse filosofe en mystica. De zin komt uit een brief aan een vriend, uit 1942.",
  },
  {
    tekst: "Je kunt de zee niet oversteken door alleen naar het water te staren.",
    auteur: "Rabindranath Tagore",
    betekenis:
      "Kijken naar wat moeilijk is, brengt je niet aan de overkant. Op een gegeven moment ga je het water in, al is het maar tot je enkels. Dat is de eerste stap die telt.",
    over:
      "Rabindranath Tagore (1861-1941) was een Indiase dichter en kreeg in 1913 als eerste niet-Europeaan de Nobelprijs voor Literatuur.",
  },
  {
    tekst: "Zing, vecht, huil, bid, lach, werk en bewonder.",
    auteur: "Ramses Shaffy",
    betekenis:
      "Zeven werkwoorden, en geen daarvan is beter dan de andere. Een leven bestaat uit al die dingen door elkaar. Huilen hoort er net zo bij als lachen.",
    over:
      "Ramses Shaffy (1933-2009) was zanger en acteur. Dit is de titel en het refrein van zijn lied uit 1971, een van de bekendste Nederlandse liedjes.",
  },
  {
    tekst: "Wij zijn wat we denken. Alles wat we zijn, komt voort uit onze gedachten.",
    auteur: "Dhammapada",
    betekenis:
      "Wat je dagelijks tegen jezelf zegt, wordt na een tijdje hoe je je voelt. Dat is een last, maar ook een kans: gedachten zijn te veranderen. Het begint met opmerken wat je denkt.",
    over:
      "De Dhammapada is een verzameling uitspraken die aan de Boeddha worden toegeschreven, opgeschreven rond de derde eeuw voor Christus. Dit is de openingsregel, in vrije vertaling.",
  },
  {
    tekst: "En nu je niet meer perfect hoeft te zijn, kun je goed zijn.",
    auteur: "John Steinbeck",
    betekenis:
      "Perfectie is een eis die alles blokkeert. Zodra je die loslaat, komt er ruimte om gewoon goed te zijn: goed genoeg, goed voor een ander, goed voor vandaag. Dat is haalbaar.",
    over:
      "John Steinbeck (1902-1968) was een Amerikaanse schrijver en kreeg in 1962 de Nobelprijs voor Literatuur. De zin komt uit \"Ten oosten van Eden\" uit 1952.",
  },
  {
    tekst: "Ook dit gaat voorbij.",
    auteur: "Perzisch gezegde",
    betekenis:
      "Vier woorden die op elke dag passen: op een goede als herinnering om ervan te genieten, op een slechte als troost. Niets blijft zoals het is, ook dit niet. Wie een paniekaanval, een sombere week of een slapeloze nacht doormaakt, heeft aan die vier woorden vaak meer dan aan een hele uitleg. Ze vragen niets, ze beloven alleen beweging.",
    over:
      "Een gezegde van Perzische oorsprong, vaak aan de soefi-dichters toegeschreven. Abraham Lincoln haalde het in 1859 aan als de wijste zin die hij kende.",
  },
  {
    tekst: "Als je een stem in je hoort zeggen dat je niet kunt schilderen, schilder dan juist, en die stem zal verstommen.",
    auteur: "Vincent van Gogh",
    betekenis:
      "De stem die zegt dat je iets niet kunt, gaat niet weg door ernaar te luisteren. Hij wordt stiller door te doen. Het resultaat doet er minder toe dan het doen zelf.",
    over:
      "Vincent van Gogh (1853-1890) schreef dit aan zijn broer Theo in oktober 1883. Hij was toen dertig en schilderde nog maar drie jaar.",
  },
  {
    tekst: "Wees vriendelijk wanneer het mogelijk is. Het is altijd mogelijk.",
    auteur: "Dalai Lama",
    betekenis:
      "Vriendelijkheid vraagt geen goede dag, geen energie, geen reden. Het kan in de kleinste vorm, ook naar jezelf. Dat het altijd kan, is geen eis, maar een geruststelling.",
    over:
      "De veertiende Dalai Lama (1935) is de geestelijk leider van de Tibetaanse boeddhisten en kreeg in 1989 de Nobelprijs voor de Vrede.",
  },
  {
    tekst: "Rivieren weten dit: er is geen haast. We komen er wel.",
    auteur: "A.A. Milne",
    betekenis:
      "Een rivier stroomt gewoon. Hij duwt niet, hij komt aan, en hij neemt de bochten die er zijn zonder zich af te vragen of het sneller kan. Dat je er vandaag nog niet bent, betekent alleen dat je nog onderweg bent. Haast verandert de lengte van de rivier niet, alleen hoe moe je bij de zee aankomt.",
    over:
      "A.A. Milne (1882-1956) was de schrijver van Winnie de Poeh. De zin wordt aan hem toegeschreven, maar staat niet letterlijk in de boeken; hij is in de geest van Poeh.",
  },
  {
    tekst: "De nacht is het donkerst vlak voor de dageraad.",
    auteur: "Thomas Fuller",
    betekenis:
      "Als het het zwaarst is, is het einde vaak dichterbij dan het voelt. Dat is geen belofte, maar wel een ervaring van veel mensen. Het donkerste stuk is meestal ook het laatste.",
    over:
      "Thomas Fuller (1608-1661) was een Engelse geestelijke en geschiedschrijver. De zin komt uit een boek uit 1650 en is sindsdien een gezegde geworden.",
  },
  {
    tekst: "Voor mezelf zorgen is geen zelfverwennerij, het is zelfbehoud.",
    auteur: "Audre Lorde",
    betekenis:
      "Rust nemen of hulp vragen is geen luxe, het is nodig om overeind te blijven. Wie voor zichzelf zorgt, kan er ook voor anderen zijn. Dat is de volgorde, niet andersom.",
    over:
      "Audre Lorde (1934-1992) was een Amerikaanse dichter en activist. Ze schreef dit in 1988, terwijl ze aan kanker leed, in de bundel \"A Burst of Light\".",
  },
  {
    tekst: "Beter lopen dan rennen, beter staan dan lopen, beter zitten dan staan.",
    auteur: "Indiaas gezegde",
    betekenis:
      "Hoe minder je hoeft, hoe meer je er bent. Het gaat niet om hoe snel je gaat, maar of je erbij bent. Elke trede omlaag in tempo is een trede omhoog in aandacht. Even stilzitten is dan geen tijdverlies, maar de beste vorm van beweging.",
    over:
      "Een gezegde dat aan India wordt toegeschreven en in verschillende vormen circuleert, ook als \"beter liggen dan zitten\". Het vat de houding van meditatie samen: niet doen, maar zijn. Een precieze bron is niet bekend.",
  },
  {
    tekst: "Wie anderen kent is wijs; wie zichzelf kent is verlicht.",
    auteur: "Laozi",
    betekenis:
      "Anderen begrijpen is knap, jezelf begrijpen is zeldzamer. Weten wat je nodig hebt, wat je raakt en wanneer je op moet houden, is de moeilijkste kennis. Daar mag je je hele leven over doen.",
    over:
      "Laozi was een Chinese denker uit de zesde eeuw voor Christus en geldt als de schrijver van de Daodejing, een tekst van 81 korte hoofdstukken over leven in balans. De zin staat in hoofdstuk 33, dat ook zegt: wie zichzelf overwint, is sterk. Zelfkennis staat er dus boven kennis van anderen.",
  },
  {
    tekst: "Niet lachen, niet klagen, niet verafschuwen, maar begrijpen.",
    auteur: "Baruch Spinoza",
    betekenis:
      "Voordat je oordeelt over wat je voelt, kun je proberen het te begrijpen. Waar komt het vandaan, wat wil het? Begrip is milder dan een oordeel, en het brengt je verder.",
    over:
      "Baruch Spinoza (1632-1677) was een Amsterdamse filosoof en lenzenslijper, een van de belangrijkste denkers van de Verlichting. De zin komt uit zijn \"Staatkundig traktaat\".",
  },
  {
    tekst: "Ik ben mijn hele leven bang geweest, maar ik heb me er nooit door laten tegenhouden.",
    auteur: "Georgia O'Keeffe",
    betekenis:
      "Angst hoeft niet weg voordat je iets doet. Je kunt bang zijn en tegelijk doen wat je wilt; die twee sluiten elkaar niet uit. Wie wacht tot de angst over is, wacht meestal voor altijd. De angst komt gewoon mee, en wordt onderweg vaak kleiner dan hij bij de deur was.",
    over:
      "Georgia O'Keeffe (1887-1986) was een Amerikaanse schilder, bekend van haar bloemen en landschappen uit New Mexico. Ze zei dit in een interview op latere leeftijd.",
  },
  {
    tekst: "De wereld breekt iedereen, en daarna zijn velen sterk op de gebroken plekken.",
    auteur: "Ernest Hemingway",
    betekenis:
      "Niemand komt heel door het leven. Maar waar iets is gebroken en weer aan elkaar gegroeid, zit vaak de meeste kracht. Je littekens zijn geen zwakke plekken.",
    over:
      "Ernest Hemingway (1899-1961) was een Amerikaanse schrijver en kreeg in 1954 de Nobelprijs voor Literatuur. De zin komt uit \"Afscheid van de wapenen\" uit 1929.",
  },
  {
    tekst: "Het is het steentje in je schoen dat je uitput, niet de berg.",
    auteur: "Muhammad Ali",
    betekenis:
      "Grote opgaven zijn vaak niet wat je moe maakt. Het zijn de kleine dingen die je meedraagt en niet aanpakt. Even stoppen en het steentje eruit halen, is geen tijdverlies.",
    over:
      "Muhammad Ali (1942-2016) was bokser en drievoudig wereldkampioen zwaargewicht. De uitspraak wordt breed aan hem toegeschreven.",
  },
  {
    tekst: "Begin waar je bent. Gebruik wat je hebt. Doe wat je kunt.",
    auteur: "Arthur Ashe",
    betekenis:
      "Je hoeft niet te wachten tot je ergens anders bent, meer hebt of meer kunt. Het startpunt is hier, met dit, met jou. Dat is altijd genoeg om te beginnen.",
    over:
      "Arthur Ashe (1943-1993) was de eerste zwarte tennisser die Wimbledon won en later een voorvechter van aidsbestrijding. De zin wordt aan hem toegeschreven.",
  },
  {
    tekst: "Geluk is niet een kwestie van intensiteit, maar van evenwicht, ritme en harmonie.",
    auteur: "Thomas Merton",
    betekenis:
      "Geluk is geen piek, het is een ritme. Niet de beste dag ooit, maar een week die klopt: genoeg slaap, iemand spreken, iets doen met je handen, af en toe buiten. Dat is minder spannend en veel haalbaarder. Wie geluk zoekt in hoogtepunten, is tussen de hoogtepunten steeds ongelukkig.",
    over:
      "Thomas Merton (1915-1968) was een Amerikaanse trappistenmonnik en schrijver. De zin komt uit \"No Man Is an Island\" uit 1955.",
  },
  {
    tekst: "Alleen kunnen we zo weinig; samen kunnen we zoveel.",
    auteur: "Helen Keller",
    betekenis:
      "Niemand hoeft alles alleen te dragen. Wat te zwaar is voor één, is draaglijk met twee. Hulp vragen is geen tekortkoming, het is hoe mensen werken.",
    over:
      "Helen Keller (1880-1968) werd op haar tweede doof en blind en werd toch schrijfster en activist. De zin wordt breed aan haar toegeschreven.",
  },
  {
    tekst: "Wat je onder ogen ziet, kan niet altijd veranderd worden. Maar niets kan veranderd worden totdat je het onder ogen ziet.",
    auteur: "James Baldwin",
    betekenis:
      "Kijken naar wat er is, garandeert geen oplossing. Maar wegkijken garandeert dat er niets verandert. Het begin is dus altijd hetzelfde: kijken.",
    over:
      "James Baldwin (1924-1987) was een Amerikaanse schrijver en essayist. De zin komt uit een artikel in de New York Times uit 1962.",
  },
  {
    tekst: "Het hart heeft zijn redenen die de rede niet kent.",
    auteur: "Blaise Pascal",
    betekenis:
      "Niet alles wat je voelt, is uit te leggen. Dat je iets niet kunt beredeneren, maakt het niet minder waar. Sommige dingen weet je met iets anders dan je hoofd.",
    over:
      "Blaise Pascal (1623-1662) was een Franse wiskundige en filosoof. De zin komt uit zijn \"Gedachten\", die na zijn dood werden uitgegeven.",
  },
  {
    tekst: "Pluk de dag, en vertrouw zo min mogelijk op morgen.",
    auteur: "Horatius",
    betekenis:
      "Morgen is niet van jou, vandaag wel. Dat klinkt streng, maar het bedoelt iets zachts: wat er vandaag goed is, is er nu, en dat mag je pakken. Morgen komt vanzelf.",
    over:
      "Horatius (65-8 voor Christus) was een Romeinse dichter. \"Carpe diem\" komt uit zijn Oden en is een van de bekendste zinnen uit de Latijnse literatuur.",
  },
  {
    tekst: "Er bestaat geen slecht weer, alleen verkeerde kleding.",
    auteur: "Scandinavisch gezegde",
    betekenis:
      "Regen wordt niet fijn door erover te klagen, wel draaglijk door je erop te kleden. Zo werkt het ook met een zware dag: je verandert het weer niet, wel wat je aantrekt. Rust, een vriend, een korte wandeling.",
    over: "Een gezegde uit Noorwegen en Zweden, waar het weer nu eenmaal is wat het is. Het bestaat in beide talen als rijmpje.",
  },
  {
    tekst: "Ik verlies nooit. Of ik win, of ik leer.",
    auteur: "Nelson Mandela",
    betekenis:
      "Als iets mislukt, heb je nog steeds iets: je weet nu wat niet werkt. Dat maakt een mislukking geen verlies, maar een les. Het voelt anders, maar het telt hetzelfde.",
    over:
      "Nelson Mandela (1918-2013) was de eerste zwarte president van Zuid-Afrika. Deze zin wordt hem vaak toegeschreven, maar een bron in zijn eigen woorden ontbreekt.",
  },
  {
    tekst: "Wie een berg verzet, begint met het wegdragen van kleine stenen.",
    auteur: "Confucius",
    betekenis:
      "Een berg verzet je niet. Kleine stenen wel, en daar bestaat een berg uit. Vandaag één steen is genoeg, en morgen weer een. Wie naar de berg blijft kijken, raakt ontmoedigd; wie naar de steen in zijn hand kijkt, is bezig.",
    over:
      "Confucius (551-479 voor Christus) was een Chinese denker wiens ideeën de Chinese cultuur eeuwenlang vormden. De zin wordt hem toegeschreven, maar staat niet letterlijk in de overgeleverde teksten.",
  },
  {
    tekst: "Lachen is de zon die de winter uit het gezicht van de mens verdrijft.",
    auteur: "Victor Hugo",
    betekenis:
      "Een lach verandert niet wat er is, maar wel hoe het even voelt. Ook een korte, halve lach op een rotdag. De winter is niet weg, maar de zon was er.",
    over:
      "Victor Hugo (1802-1885) schreef dit in \"Les Misérables\" uit 1862, over Gavroche, het straatjongetje dat ondanks alles blijft lachen.",
  },
  {
    tekst: "Je hebt macht over je geest, niet over gebeurtenissen buiten je. Besef dat, en je vindt kracht.",
    auteur: "Marcus Aurelius",
    betekenis:
      "Veel van wat je bezighoudt, is niet van jou. Het weer, andere mensen, wat gisteren is gebeurd. Wat wel van jou is, is waar je je aandacht op richt, en dat is meer dan het lijkt.",
    over:
      "Marcus Aurelius (121-180) was Romeins keizer en schreef voor zichzelf de \"Persoonlijke notities\". Deze zin is een vrije weergave van een van zijn gedachten.",
  },
  {
    tekst: "Wees de verandering die je in de wereld wilt zien.",
    auteur: "Mahatma Gandhi",
    betekenis:
      "Wachten tot de wereld verandert, duurt lang. Zelf beginnen, klein, in je eigen dag, kan nu. Dat verandert de wereld niet meteen, maar wel jouw stukje ervan.",
    over:
      "Mahatma Gandhi (1869-1948) leidde de onafhankelijkheidsstrijd van India. Deze formulering is een samenvatting van iets wat hij in 1913 schreef, en niet zijn letterlijke woorden.",
  },
  {
    tekst: "Rome is niet in één dag gebouwd.",
    auteur: "Spreekwoord",
    betekenis:
      "Wat groot en blijvend is, kostte tijd. Dat geldt voor steden en voor mensen: herstel, een nieuwe gewoonte, vertrouwen na een klap. Dat je er nog niet bent, hoort bij iets bouwen, en zegt niets over of het lukt. Wie na een week al klaar wil zijn, bouwt geen Rome maar een tent.",
    over: "Een spreekwoord dat al in de twaalfde eeuw in het Frans werd opgeschreven en sindsdien in bijna alle Europese talen voorkomt.",
  },
  {
    tekst: "Wat er komt, laat je komen. Wat er gaat, laat je gaan.",
    auteur: "Onbekend",
    betekenis:
      "Vasthouden aan wat weg wil, kost kracht. Tegenhouden wat komt, ook. Er is een houding daartussenin: laten. Die is rustiger, en hij is te oefenen: bij een gevoel dat opkomt, bij een dag die anders loopt dan gepland, bij een mens die een andere kant op gaat.",
    over:
      "Een uitspraak zonder vaste bron. De gedachte is de kern van het taoïsme, waar Laozi het wu wei noemt: handelen door niet te forceren. In de boeddhistische traditie heet hetzelfde loslaten, en in de stoïcijnse: onderscheiden wat in je macht ligt en wat niet.",
  },
  {
    tekst: "De belemmering op de weg wordt de weg.",
    auteur: "Marcus Aurelius",
    betekenis:
      "Wat je tegenhoudt, wordt de nieuwe route. Niet omdat je het wegduwt, maar omdat je erdoorheen of eromheen gaat. Het obstakel is niet naast je pad, het is je pad.",
    over:
      "Marcus Aurelius (121-180) schreef in zijn \"Persoonlijke notities\": wat in de weg staat, wordt de weg. Deze zin is daar de bekende samenvatting van.",
  },
  {
    tekst: "Alles komt goed aan het eind. En als het niet goed is, is het niet het eind.",
    auteur: "Onbekend",
    betekenis:
      "Dat het nu niet goed is, betekent dat het verhaal nog loopt. Het eind is er nog niet. Dat is geen belofte, maar wel een reden om de bladzij om te slaan. Wie midden in een moeilijk hoofdstuk zit, leest nog niet het slot.",
    over:
      "De uitspraak wordt vaak aan John Lennon toegeschreven, en ook aan de Braziliaanse schrijver Fernando Sabino, die in 1956 iets vergelijkbaars schreef. Geen van beide staat vast. De zin werd wereldwijd bekend door de film \"The Best Exotic Marigold Hotel\" uit 2011.",
  },
  {
    tekst: "Een dauwdruppelwereld. Het is een dauwdruppelwereld. En toch, en toch.",
    auteur: "Kobayashi Issa",
    betekenis:
      "Alles is vergankelijk, dat weet je. En toch doet verlies pijn, en dat mag. \"En toch\" is de menselijkste zin die er is: je begrijpt het, en het doet toch zeer.",
    over:
      "Kobayashi Issa (1763-1828) was een Japanse haikudichter. Hij schreef deze haiku na de dood van zijn dochtertje, in 1819.",
  },
  {
    tekst: "Wees niet ondankbaar voor wat je hebt door te verlangen naar wat je niet hebt.",
    auteur: "Epicurus",
    betekenis:
      "Verlangen naar wat er niet is, kan je het zicht ontnemen op wat er wel is. Wat je hebt, was ooit iets waar je naar verlangde. Even kijken naar wat er al is, kalmeert.",
    over:
      "Epicurus (341-270 voor Christus) was een Griekse filosoof die leerde dat geluk zit in rust en eenvoudige genoegens. De zin komt uit een verzameling van zijn uitspraken.",
  },
  {
    tekst: "In de geest van de beginner zijn er veel mogelijkheden, in die van de expert weinig.",
    auteur: "Shunryu Suzuki",
    betekenis:
      "Niet weten hoe het moet, is geen achterstand. Het is ruimte: de beginner kijkt nog echt, de expert ziet alleen wat hij verwacht. Wie alles al weet, ziet de openingen niet meer die de beginner wel ziet. Ook naar jezelf kun je kijken als een beginner, zonder de conclusies van gisteren.",
    over:
      "Shunryu Suzuki (1904-1971) was een Japanse zenleraar die de zenpraktijk naar Amerika bracht. De zin is de openingsregel van \"Zen Mind, Beginner's Mind\" uit 1970.",
  },
  {
    tekst: "Kwetsbaarheid klinkt als waarheid en voelt als moed.",
    auteur: "Brené Brown",
    betekenis:
      "Eerlijk zeggen hoe het gaat, voelt eng en klinkt bij de ander als iets echts. Wat jij als zwakte ervaart, ziet een ander als lef. Die twee horen bij elkaar.",
    over:
      "Brené Brown (1965) is een Amerikaanse onderzoeker naar schaamte en kwetsbaarheid. De zin komt uit \"De kracht van kwetsbaarheid\" uit 2012.",
  },
  {
    tekst: "Zolang er leven is, is er hoop.",
    auteur: "Cicero",
    betekenis:
      "Zolang je er bent, kan het anders worden. Dat is de kleinste vorm van hoop die er is, en hij is genoeg voor een dag; morgen zie je verder. Hoop hoeft niet te weten hoe het beter wordt, alleen dat het kan. Wie er vandaag niets van gelooft, mag het lenen van iemand die het wel voor je gelooft.",
    over:
      "Cicero (106-43 voor Christus) was een Romeinse redenaar en politicus. Hij schreef dit in een brief aan zijn vriend Atticus, over een zieke.",
  },
  {
    tekst: "Wat je doet maakt verschil, en je mag beslissen welk verschil je wilt maken.",
    auteur: "Jane Goodall",
    betekenis:
      "Het gaat niet om groot of klein, maar om dat het ertoe doet. Een vriendelijk woord, een boodschap voor een buur. Wat jij doet, verandert iets in de wereld, of je het ziet of niet.",
    over:
      "Jane Goodall (1934) is een Britse primatologe die haar leven wijdde aan chimpansees en de natuur. Ze zegt dit vaak in lezingen, in vrije vertaling.",
  },
  {
    tekst: "De hoogste vorm van geluk is te willen zijn wat je bent.",
    auteur: "Desiderius Erasmus",
    betekenis:
      "Iemand anders willen zijn, is een bron van dagelijks verdriet. Vrede hebben met wie je bent, is het tegenovergestelde. Dat is geen berusting: het is thuiskomen.",
    over:
      "Desiderius Erasmus (1466-1536) was een Rotterdamse humanist en de beroemdste geleerde van zijn tijd. De zin is een vrije weergave uit \"Lof der Zotheid\" uit 1511.",
  },
  {
    tekst: "Ik denk niet aan alle ellende, maar aan het mooie dat er nog overblijft.",
    auteur: "Anne Frank",
    betekenis:
      "Ze schreef dit in het Achterhuis, en dat maakt het geen naïeve zin. Het is een keuze waar je naar kijkt, terwijl de ellende er gewoon is. Wat overblijft, is dan het mooie.",
    over:
      "Anne Frank (1929-1945) schreef haar dagboek op de Prinsengracht in Amsterdam, ondergedoken voor de nazi's. Deze regel dateert van 7 maart 1944.",
  },
  {
    tekst: "Een boom planten was twintig jaar geleden het beste moment. Het op een na beste moment is nu.",
    auteur: "Chinees spreekwoord",
    betekenis:
      "Dat je het eerder had moeten doen, klopt misschien. Maar dat is voorbij, en nu is het op een na beste moment. Dat is nog steeds een heel goed moment.",
    over: "Wordt een Chinees spreekwoord genoemd, maar een Chinese bron is niet gevonden. Het duikt sinds de jaren tachtig in het Engels op.",
  },
  {
    tekst: "Er is geen andere weg dan erdoorheen.",
    auteur: "Robert Frost",
    betekenis:
      "Om iets moeilijks heen lopen lukt vaak niet. Erdoorheen wel, langzaam, stap voor stap. Aan de andere kant komen is de enige uitgang, en die bestaat.",
    over:
      "Robert Frost (1874-1963) was een Amerikaanse dichter en won vier keer de Pulitzerprijs. De regel komt uit het gedicht \"A Servant to Servants\" uit 1914.",
  },
  {
    tekst: "Je bent dapperder dan je gelooft, sterker dan je lijkt en slimmer dan je denkt.",
    auteur: "Winnie de Poeh",
    betekenis:
      "Christopher Robin zegt dit tegen Poeh als afscheid, en het geldt voor iedereen die het leest. Wat je over jezelf denkt, is meestal minder dan wat je bent. Het mag een beetje meer zijn.",
    over:
      "De zin komt uit de Disneyfilm \"Pooh's Grand Adventure\" uit 1997, niet uit de boeken van A.A. Milne, al wordt hij vaak aan Milne toegeschreven.",
  },
  {
    tekst: "Er zijn jaren die vragen stellen en jaren die antwoorden.",
    auteur: "Zora Neale Hurston",
    betekenis:
      "Niet elke periode brengt duidelijkheid. Sommige jaren zijn alleen maar vragen, en dat is geen verspilling. Het antwoord komt in een ander jaar.",
    over:
      "Zora Neale Hurston (1891-1960) was een Amerikaanse schrijfster en antropologe. De zin komt uit haar roman \"Their Eyes Were Watching God\" uit 1937.",
  },
  {
    tekst: "Geduld is de metgezel van wijsheid.",
    auteur: "Augustinus",
    betekenis:
      "Wachten kunnen is een vorm van weten. Weten dat het nog niet af is, dat de ander tijd nodig heeft, dat jij die ook nodig hebt. Geduld is niet passief.",
    over:
      "Augustinus (354-430) was een kerkvader en filosoof uit Noord-Afrika, bekend van zijn \"Belijdenissen\". De zin komt uit een van zijn preken.",
  },
  {
    tekst: "Ik kan niet teruggaan naar gisteren, want toen was ik een ander persoon.",
    auteur: "Lewis Carroll",
    betekenis:
      "Je bent niet meer wie je gisteren was, en dat is goed nieuws als gisteren zwaar was. Elke dag ben je een beetje iemand anders. Die persoon mag opnieuw beginnen.",
    over:
      "Lewis Carroll (1832-1898) was wiskundige en schrijver van \"Alice in Wonderland\". De zin is een vrije weergave van iets wat Alice zegt in het boek uit 1865.",
  },
  {
    tekst: "Ken uzelf.",
    auteur: "Inscriptie in Delphi",
    betekenis:
      "Twee woorden, en een levenslange opdracht. Weten wat je voelt, wat je nodig hebt en waar je grens ligt. Elke check-in is er een klein stukje van.",
    over: "De spreuk stond boven de ingang van de tempel van Apollo in Delphi, in het oude Griekenland. Socrates maakte hem tot het hart van zijn filosofie.",
  },
  {
    tekst: "Mijn leven was vol vreselijke ongelukken, waarvan de meeste nooit zijn gebeurd.",
    auteur: "Michel de Montaigne",
    betekenis:
      "Piekeren produceert rampen die zich nooit voordoen. Het hoofd doet dat vanzelf, dus je hoeft je er niet voor te schamen. Maar je mag het ook af en toe op zijn plaats zetten.",
    over:
      "Michel de Montaigne (1533-1592) was een Franse filosoof en de uitvinder van het essay. De zin wordt hem toegeschreven, en ook aan Mark Twain; de precieze bron staat niet vast.",
  },
  {
    tekst: "Wat een dag ook brengt, hij brengt ook een avond.",
    auteur: "Onbekend",
    betekenis:
      "Elke dag heeft een einde, ook een zware. Dat is geen oplossing, maar wel een grens: je hoeft niet eindeloos vol te houden, alleen tot vanavond. Wie in een moeilijke periode zit, kan de tijd zo in stukken knippen die wel te dragen zijn. Morgen is een nieuwe dag, met een nieuwe avond.",
    over:
      "Een uitspraak zonder vaste bron. De gedachte komt in veel vormen terug, van het joodse gezegde dat elke dag genoeg heeft aan zijn eigen zorgen tot het principe van één dag tegelijk uit de herstelbeweging. Ook in de psychiatrie wordt het vaak gebruikt: bij een crisis is de eerste vraag hoe je de komende uren doorkomt, niet de komende maanden.",
  },
  {
    tekst: "Zelfs als je de weg niet ziet, kun je een stap zetten.",
    auteur: "Onbekend",
    betekenis:
      "Je hoeft de hele route niet te kennen. Eén stap zie je meestal wel, ook in de mist. Daarna zie je de volgende, en zo kom je verder dan het overzicht ooit had toegelaten. Wachten tot je alles overziet, is vaak een reden om nooit te beginnen.",
    over:
      "Geen bekende auteur. De uitspraak wordt in veel varianten gedeeld en sluit aan bij de woorden van Martin Luther King over de trap, en bij het Spaanse gezegde van de dichter Antonio Machado: er is geen weg, de weg ontstaat door te lopen.",
  },
  {
    tekst: "Je hoeft niet altijd sterk te zijn.",
    auteur: "Onbekend",
    betekenis:
      "Sterk zijn wordt vaak verwacht, ook door jezelf. Maar niemand is het altijd. Een dag waarop je het niet bent, is gewoon een dag, geen bewijs van falen. Wie altijd de sterke is, krijgt zelden de vraag hoe het echt gaat; af en toe niet sterk zijn, maakt die vraag mogelijk.",
    over:
      "Geen bekende auteur. De uitspraak wordt veel gedeeld onder mantelzorgers, ouders en mensen in de zorg: precies de groep die het meest voor anderen draagt en het minst om hulp vraagt. De Amerikaanse onderzoeker Brené Brown noemt het loslaten van dat pantser de kern van kwetsbaarheid.",
  },
  {
    tekst: "Op een dag zul je terugkijken en zien dat je het toch hebt gedaan.",
    auteur: "Onbekend",
    betekenis:
      "Terwijl je erin zit, lijkt het nooit op te houden. Achteraf blijkt dat je het hebt gedragen, dag voor dag, zonder dat je het doorhad. Die dag van terugkijken komt, ook al zie je hem nu niet. Wat je nu doet, is precies wat je dan bewondert.",
    over:
      "Geen bekende auteur. De gedachte komt terug bij Kierkegaard, die schreef dat het leven achterwaarts wordt begrepen, en in bijna elk ervaringsverhaal over herstel: mensen zien pas achteraf hoe ver ze zijn gekomen. Daarom wordt vaak aangeraden om af en toe terug te lezen wat je eerder opschreef.",
  },
  {
    tekst: "Mensen zijn net als glas-in-loodramen. Ze schitteren als de zon schijnt, maar in het donker zie je pas hun echte schoonheid, als er van binnen licht is.",
    auteur: "Elisabeth Kübler-Ross",
    betekenis:
      "Als het goed gaat, ziet iedereen er goed uit. Wie je echt bent, blijkt op de donkere dagen. Dat licht van binnen hoeft niet fel te zijn om gezien te worden.",
    over:
      "Elisabeth Kübler-Ross (1926-2004) was een Zwitsers-Amerikaanse psychiater die de vijf fasen van rouw beschreef. De zin komt uit haar boek \"Death: The Final Stage of Growth\" uit 1975.",
  },
  {
    tekst: "Ga niet in de voetsporen van de wijzen; zoek wat zij zochten.",
    auteur: "Matsuo Basho",
    betekenis:
      "Iemand nadoen brengt je niet waar die ander is. Zoeken wat die ander zocht, wel. Je eigen weg hoeft niet op die van iemand anders te lijken.",
    over:
      "Matsuo Basho (1644-1694) was de beroemdste haikudichter van Japan. De zin komt uit zijn reisverslagen, in vrije vertaling.",
  },
  {
    tekst: "Vreugde overkomt ons niet zomaar. We kiezen haar, en blijven haar kiezen, elke dag.",
    auteur: "Henri Nouwen",
    betekenis:
      "Vreugde is niet hetzelfde als een goed humeur. Het is een besluit om te kijken naar wat er goed is, ook als het niet vanzelf komt. Dat besluit mag je elke dag opnieuw nemen, en ook eens overslaan.",
    over:
      "Henri Nouwen (1932-1996) was een Nederlandse priester en schrijver die het laatste deel van zijn leven werkte in een gemeenschap voor mensen met een beperking. De zin komt uit een van zijn dagboeken.",
  },
  {
    tekst: "De roeping van de mens is mens te zijn.",
    auteur: "Multatuli",
    betekenis:
      "Je hoeft geen held te zijn, geen succes, geen voorbeeld. Mens zijn is al de opdracht: voelen, twijfelen, opstaan, vallen, en dat doe je al, ook op de dagen dat je denkt dat je tekortschiet. Multatuli schreef het als aanklacht tegen mensen die zich achter een rol verschuilen. Voor wie zichzelf te streng beoordeelt, is het een vrijbrief.",
    over:
      "Multatuli (1820-1887), schrijversnaam van Eduard Douwes Dekker, schreef \"Max Havelaar\". Deze zin komt uit zijn \"Ideën\" en is een van zijn beroemdste.",
  },
  {
    tekst: "Wees water, mijn vriend.",
    auteur: "Bruce Lee",
    betekenis:
      "Water vecht niet tegen de vorm van het glas, het neemt hem aan. En toch slijt het steen. Meebewegen is geen zwakte; het is een andere soort kracht.",
    over:
      "Bruce Lee (1940-1973) was vechtsporter en filmacteur. Hij zei dit in een televisie-interview in 1971, als samenvatting van zijn levensfilosofie.",
  },
  {
    tekst: "Als je door de hel gaat, blijf dan lopen.",
    auteur: "Winston Churchill",
    betekenis:
      "Het ergste stuk is geen plek om te blijven staan. Doorlopen is de enige manier om eruit te komen, hoe langzaam ook. Het gaat niet om snel, maar om niet stoppen.",
    over:
      "Winston Churchill (1874-1965) was premier van Groot-Brittannië in de Tweede Wereldoorlog. De zin wordt hem toegeschreven, maar is in zijn teksten niet gevonden.",
  },
  {
    tekst: "Je vreugde is je verdriet zonder masker.",
    auteur: "Kahlil Gibran",
    betekenis:
      "Vreugde en verdriet komen uit dezelfde bron. Hoe dieper je iets kunt voelen, hoe meer je van allebei kunt dragen. Verdriet is dus geen defect, het is de andere kant van kunnen genieten.",
    over:
      "Kahlil Gibran (1883-1931) was een Libanees-Amerikaanse dichter en schilder. Hij schreef dit in \"De profeet\" uit 1923, in het hoofdstuk over vreugde en verdriet, waar hij ook zegt: hoe dieper het verdriet in je kerft, hoe meer vreugde je kunt bevatten. Het boek is nooit uit druk geweest en in meer dan honderd talen vertaald.",
  },
  {
    tekst: "Wie zijn eigen tempo kent, komt aan.",
    auteur: "Onbekend",
    betekenis:
      "Het tempo van een ander is niet het jouwe. Wie zijn eigen ritme volgt, houdt het langer vol en komt uiteindelijk verder. Langzaam is ook een tempo, en vergelijken met wie sneller gaat, is de snelste manier om uit je eigen ritme te raken. Wie na een zware periode weer opbouwt, heeft daar het meest aan.",
    over:
      "Geen bekende auteur. De gedachte komt uit de wereld van het wandelen en hardlopen, waar beginnende lopers steevast leren dat ze te hard van start gaan. Op de Camino, de pelgrimsroute naar Santiago waar deze app is bedacht, is het de eerste les die iedereen krijgt: loop je eigen tempo, anders haal je de tweede week niet.",
  },
  {
    tekst: "Als je snel wilt gaan, ga alleen. Als je ver wilt komen, ga samen.",
    auteur: "Afrikaans spreekwoord",
    betekenis:
      "Alleen ben je sneller, maar je houdt het minder lang vol. Samen gaat het trager, en verder, omdat er iemand is die je opvangt op de dag dat jij het niet trekt. Voor een lange weg is gezelschap geen luxe. Herstel is bijna altijd een lange weg, en dus bijna nooit iets om alleen te doen.",
    over: "Wordt een Afrikaans spreekwoord genoemd, maar een precieze herkomst is niet bekend. Het is sinds de jaren negentig wereldwijd bekend.",
  },
  {
    tekst: "Beëindig elke dag en wees ermee klaar. Je hebt gedaan wat je kon.",
    auteur: "Ralph Waldo Emerson",
    betekenis:
      "Aan het eind van de dag mag hij klaar zijn, ook als niet alles is gelukt. Morgen is een nieuwe dag, zonder de fouten van vandaag. Wat je kon, heb je gedaan.",
    over:
      "Ralph Waldo Emerson (1803-1882) schreef dit in 1854 in een brief aan zijn dochter Ellen, die zich zorgen maakte over haar fouten.",
  },
  {
    tekst: "Niets verdwijnt totdat het ons heeft geleerd wat we moesten weten.",
    auteur: "Pema Chödrön",
    betekenis:
      "Iets wat steeds terugkomt, heeft je misschien nog iets te vertellen. Dat is geen straf, maar een aanwijzing. Als je weet wat het wil zeggen, kan het gaan.",
    over:
      "Pema Chödrön (1936) is een Amerikaanse boeddhistische non. De zin komt uit \"Als je wereld instort\" uit 1996, over omgaan met moeilijke tijden.",
  },
  {
    tekst: "Waar een wil is, is een weg.",
    auteur: "Spreekwoord",
    betekenis:
      "Wie iets echt wil, vindt meestal een manier, ook als die niet de kortste is. Dat zegt niets over hoe snel of hoe makkelijk. Alleen dat de weg er is.",
    over: "Een spreekwoord dat in het Engels al in de zeventiende eeuw werd opgetekend en in het Nederlands al even lang gangbaar is.",
  },
  {
    tekst: "De mens die bang is, lijdt twee keer.",
    auteur: "Onbekend",
    betekenis:
      "Eén keer in de angst vooraf, en één keer als het gebeurt. Als het niet gebeurt, blijft alleen de eerste keer over, en die was voor niets. Dat weten helpt niet altijd, maar wel soms: het maakt piekeren tot iets wat je kunt herkennen, in plaats van iets wat je overkomt. De tweede keer is vaak minder erg dan de eerste.",
    over:
      "Geen bekende auteur. De gedachte komt al bij Seneca voor, die schreef dat we vaker lijden in de verbeelding dan in werkelijkheid, en bij Montaigne, wiens leven vol rampen was die nooit gebeurden. In moderne vorm is het de kern van de cognitieve gedragstherapie: angstige gedachten zijn voorspellingen, geen feiten.",
  },
  {
    tekst: "Ik heb geleerd dat, als je besluit genomen is, de angst afneemt.",
    auteur: "Rosa Parks",
    betekenis:
      "De angst zit vooral in het twijfelen ervoor. Zodra je hebt gekozen, wordt het rustiger, ook als de keuze eng is. Beslissen is soms al de helft van de opluchting.",
    over:
      "Rosa Parks (1913-2005) weigerde in 1955 haar zitplaats in een bus af te staan en werd daarmee een icoon van de burgerrechtenbeweging. De zin komt uit haar boek \"Quiet Strength\" uit 1994.",
  },
  {
    tekst: "Je bent niet je fouten. Je bent degene die ervan kan leren.",
    auteur: "Onbekend",
    betekenis:
      "Een fout is iets wat je deed, niet wie je bent. Je kunt hem betreuren zonder jezelf af te wijzen, en dat verschil is groot: spijt zet aan tot herstellen, schaamte zet aan tot verstoppen. Wie zichzelf niet gelijkstelt aan de fout, houdt ruimte om het de volgende keer anders te doen.",
    over:
      "Geen bekende auteur. Het onderscheid tussen schuld (ik deed iets verkeerds) en schaamte (ik ben verkeerd) is uitgebreid onderzocht door de Amerikaanse psychologen June Tangney en Brené Brown. Schuld blijkt gezond, schaamte niet: die hangt samen met somberheid en terugtrekken.",
  },
  {
    tekst: "Als je mededogen jezelf niet insluit, is het onvolledig.",
    auteur: "Jack Kornfield",
    betekenis:
      "Mild zijn voor anderen en hard voor jezelf, is een scheef evenwicht. Jij hoort ook bij de mensen die je mededogen verdienen. Anders klopt de som niet.",
    over:
      "Jack Kornfield (1945) is een Amerikaanse meditatieleraar die als monnik in Thailand werd opgeleid. De zin komt uit \"Buddha's Little Instruction Book\" uit 1994.",
  },
  {
    tekst: "Hoop is niet de overtuiging dat iets goed zal aflopen, maar de zekerheid dat iets zin heeft, hoe het ook afloopt.",
    auteur: "Václav Havel",
    betekenis:
      "Hoop hangt niet af van het resultaat. Ze zit in het weten dat wat je doet ertoe doet, ook als het niet lukt. Dat is een hoop die niet kapot kan.",
    over:
      "Václav Havel (1936-2011) was toneelschrijver en dissident en na de val van het communisme president van Tsjechië. De zin komt uit \"Disturbing the Peace\" uit 1986.",
  },
  {
    tekst: "Maak je geen zorgen over morgen. Elke dag heeft genoeg aan zijn eigen kwaad.",
    auteur: "Bergrede",
    betekenis:
      "Je hoeft niet de hele week te dragen, alleen vandaag. Morgen heeft zijn eigen zorgen, en die zijn nu nog niet van jou. Dat is geen oproep om niet vooruit te denken, maar een grens aan hoeveel je tegelijk hoeft te tillen. Van vandaag mag je zelfs alleen dit uur nemen.",
    over:
      "De zin komt uit de Bergrede in het evangelie van Matteüs, hoofdstuk 6, geschreven in de eerste eeuw. Hij is een van de meest aangehaalde bijbelteksten buiten de kerk, en de gedachte erachter is de basis van \"één dag tegelijk\", het motto van de herstelbeweging sinds de jaren dertig.",
  },
  {
    tekst: "Twijfel is geen prettige toestand, maar zekerheid is een belachelijke.",
    auteur: "Voltaire",
    betekenis:
      "Niet weten voelt onrustig, en toch is het eerlijker dan zeker weten. Wie twijfelt, kijkt nog; wie zeker is, is gestopt met kijken. Dat is geen zwakte, het is wakker zijn. Ook over jezelf: wie zeker weet dat het nooit beter wordt, heeft een oordeel geveld over een toekomst die niemand kent.",
    over:
      "Voltaire (1694-1778) was een Franse schrijver en filosoof van de Verlichting. Hij schreef dit in 1770 in een brief aan Frederik de Grote.",
  },
  {
    tekst: "Spreek ik mezelf tegen? Goed dan, ik spreek mezelf tegen. Ik ben groot, ik bevat menigten.",
    auteur: "Walt Whitman",
    betekenis:
      "Je hoeft niet consequent te zijn. Je mag vandaag anders voelen dan gisteren en twee dingen tegelijk vinden. Een mens is groot genoeg voor tegenstrijdigheden.",
    over:
      "Walt Whitman (1819-1892) was een Amerikaanse dichter. De regels komen uit \"Song of Myself\" in \"Leaves of Grass\", dat hij zijn leven lang bleef herschrijven.",
  },
  {
    tekst: "Verandering begrijp je alleen door erin te duiken, ermee mee te bewegen en mee te dansen.",
    auteur: "Alan Watts",
    betekenis:
      "Verandering vanaf de kant bekijken maakt haar eng. Erin meegaan maakt haar iets waar je in kunt bewegen. Dansen is niet hetzelfde als sturen; het is meegaan op de maat.",
    over:
      "Alan Watts (1915-1973) was een Britse filosoof die oosterse denkwijzen voor het Westen vertaalde. De zin komt uit \"The Wisdom of Insecurity\" uit 1951.",
  },
  {
    tekst: "Zoek de helpers. Er zijn altijd mensen die helpen.",
    auteur: "Fred Rogers",
    betekenis:
      "Als er iets ergs gebeurt, zijn er altijd ook mensen die te hulp schieten. Op die mensen letten, verandert wat je ziet. En als je zelf hulp nodig hebt: ze zijn er.",
    over:
      "Fred Rogers (1928-2003) presenteerde bijna dertig jaar het kinderprogramma \"Mister Rogers' Neighborhood\". Zijn moeder zei dit tegen hem als kind, en hij gaf het door.",
  },
  {
    tekst: "Genezen gaat misschien niet over beter worden, maar over loslaten wat niet van jou is.",
    auteur: "Rachel Naomi Remen",
    betekenis:
      "Herstellen betekent niet altijd dat alles weer als vroeger wordt. Soms betekent het dat je iets kwijtraakt wat nooit bij je hoorde: een eis, een verwachting, een oud verhaal. Wat overblijft, is meer jij.",
    over:
      "Rachel Naomi Remen (1938) is een Amerikaanse arts die zelf sinds haar vijftiende chronisch ziek is. Ze schreef hierover in \"Kitchen Table Wisdom\" uit 1996.",
  },
  {
    tekst: "Het geheim van vooruitkomen is beginnen.",
    auteur: "Mark Twain",
    betekenis:
      "Er is geen truc, alleen een begin. Alles wat daarna komt, is makkelijker dan de eerste stap, omdat de drempel dan al is genomen. Beginnen mag klein en slordig: een mail openen, één zin schrijven, de schoenen aantrekken. Uitstel voelt als rust, maar kost meestal meer energie dan het begin zelf.",
    over:
      "Mark Twain (1835-1910) was een Amerikaanse schrijver. De zin wordt hem breed toegeschreven, maar de bron staat niet vast.",
  },
  {
    tekst: "Wees geduldig met jezelf. Niets in de natuur bloeit het hele jaar.",
    auteur: "Onbekend",
    betekenis:
      "Een boom is niet kapot als hij in de winter kaal is. Hij doet in die maanden iets anders: wortels maken, kracht sparen. Zo mag jij ook periodes hebben waarin er aan de buitenkant weinig groeit. Het seizoen komt terug, en wat er dan bloeit, is in de stille tijd voorbereid.",
    over:
      "Geen bekende auteur. Het beeld van de seizoenen als levensfasen is oud: het staat al in Prediker (\"alles heeft zijn tijd\") en in de Chinese geneeskunde, waar de winter de tijd van rust en herstel is. Tuiniers weten dat een plant die het hele jaar bloeit, uitgeput raakt.",
  },
  {
    tekst: "Laat alles gebeuren: schoonheid en verschrikking. Ga gewoon door. Geen gevoel is het laatste.",
    auteur: "Rainer Maria Rilke",
    betekenis:
      "Wat je nu voelt, is niet het eindpunt. Er komt altijd nog een gevoel na, en dat geldt voor de mooie en voor de vreselijke. Het gedicht vraagt niet om het vreselijke te ontkennen, maar om het te laten gebeuren en door te lopen. Wie weet dat geen gevoel het laatste is, hoeft van geen enkel gevoel het einde te maken.",
    over:
      "Rainer Maria Rilke (1875-1926) was een Duitstalige dichter uit Praag. De regels komen uit \"Het getijdenboek\" uit 1905, geschreven als een reeks gebeden, in vrije vertaling. \"Geen gevoel is het laatste\" is een van zijn meest geciteerde regels geworden, vooral in gesprekken over rouw.",
  },
  {
    tekst: "Wie leeft, ziet veel. Wie reist, ziet meer.",
    auteur: "Arabisch spreekwoord",
    betekenis:
      "Ervaring is niet alleen wat je meemaakt, maar ook wat je opzoekt. Een andere straat, een ander gesprek, een andere blik. Kleine reizen tellen ook.",
    over:
      "Een spreekwoord uit de Arabische wereld, in veel varianten overgeleverd, uit een cultuur waarin reizen en handel eeuwenlang de manier waren om kennis op te doen. Het wordt vaak aangehaald bij de gedachte dat een andere omgeving, ook een kleine, iets doet met hoe je naar je eigen leven kijkt.",
  },
  {
    tekst: "Doe je beetje goed waar je bent; het zijn die beetjes goed bij elkaar die de wereld overspoelen.",
    auteur: "Desmond Tutu",
    betekenis:
      "Je hoeft de wereld niet te redden, alleen jouw stukje. Als iedereen dat doet, is het genoeg. En als het vandaag alleen jouw stukje is, is dat ook goed.",
    over:
      "Desmond Tutu (1931-2021) was aartsbisschop en voorzitter van de Waarheids- en Verzoeningscommissie in Zuid-Afrika. Hij zei dit vaak in toespraken.",
  },
  {
    tekst: "Een vriend is iemand die de melodie van je hart kent en hem voor je zingt als je hem vergeten bent.",
    auteur: "Onbekend",
    betekenis:
      "Op sommige dagen weet je zelf niet meer wie je bent. Dan is er iemand die het nog wel weet, en die je eraan herinnert zonder dat je erom hoeft te vragen. Dat is wat vriendschap doet: bewaren wat jij even kwijt bent. Daarom is contact houden in een moeilijke periode zo belangrijk, juist als je er geen zin in hebt.",
    over:
      "De uitspraak wordt vaak aan Albert Einstein of aan Donna Roberts toegeschreven, maar een bron staat niet vast. Het beeld van een vriend die je eigen melodie bewaart, past bij wat onderzoek naar eenzaamheid steeds laat zien: één mens die je echt kent, beschermt meer dan een grote kring kennissen.",
  },
  {
    tekst: "De dingen die je niet kunt veranderen, vragen om aanvaarding. De dingen die je wel kunt veranderen, vragen om moed.",
    auteur: "Reinhold Niebuhr",
    betekenis:
      "Er zijn twee soorten problemen, en ze vragen iets anders van je. Het moeilijkste is weten welk probleem je voor je hebt. Dat onderscheid is al een groot deel van de rust.",
    over:
      "Reinhold Niebuhr (1892-1971) was een Amerikaanse theoloog. Dit is een vrije weergave van zijn \"gebed om kalmte\" uit de jaren dertig, dat wereldwijd bekend werd via de AA.",
  },
  {
    tekst: "Sta bij het ochtendgloren op en denk: wat een voorrecht om te leven, te ademen, te denken, lief te hebben.",
    auteur: "Marcus Aurelius",
    betekenis:
      "Een ochtend kan beginnen met wat er allemaal moet, of met wat er allemaal kan. Ademen, denken, iemand liefhebben: het is er al voordat je uit bed bent. Dat maakt de dag niet lichter, maar wel groter.",
    over:
      "Marcus Aurelius (121-180) begon een van de boeken van zijn \"Persoonlijke notities\" met een gedachte over opstaan. Deze zin is daar een vrije, populaire weergave van.",
  },
  {
    tekst: "Wat je aandacht geeft, groeit.",
    auteur: "Onbekend",
    betekenis:
      "Zorgen groeien als je ze water geeft, en het goede ook. Waar je naar kijkt, wordt groter. Dat is geen reden om weg te kijken van het moeilijke, wel om ook naar het goede te kijken: een fijn gesprek, een uur zonder pijn, een dag die meeviel. Wie dat bewust opmerkt, traint het brein om het vaker te zien.",
    over:
      "Geen bekende auteur. De gedachte komt uit de tuin, maar wordt in de psychologie ondersteund: de Amerikaanse onderzoeker Martin Seligman liet zien dat het dagelijks opschrijven van drie goede dingen na een paar weken meetbaar effect heeft op hoe mensen zich voelen.",
  },
  {
    tekst: "Als je de regenboog wilt, moet je de regen verdragen.",
    auteur: "Dolly Parton",
    betekenis:
      "Het mooie komt niet zonder het natte. Dat is geen reden om de regen leuk te vinden, wel om te weten waar hij toe leidt. Beide horen bij hetzelfde weer.",
    over:
      "Dolly Parton (1946) is een Amerikaanse countryzangeres en songwriter die miljoenen kinderboeken weggaf via haar bibliotheekprogramma. Ze zegt dit vaak in interviews.",
  },
  {
    tekst: "Het leven is niet wachten tot de storm voorbij is, maar leren dansen in de regen.",
    auteur: "Vivian Greene",
    betekenis:
      "Als je wacht tot alles rustig is, wacht je lang. Wat je wel kunt, is een manier vinden om te leven terwijl het regent. Dat is geen doen alsof, het is meebewegen.",
    over:
      "Vivian Greene is een Amerikaanse schrijfster en kunstenaar. Deze zin, uit begin jaren 2000, is breed verspreid geraakt en wordt vaak aan anderen toegeschreven.",
  },
  {
    tekst: "Geen enkele winter duurt eeuwig, geen enkele lente slaat haar beurt over.",
    auteur: "Hal Borland",
    betekenis:
      "De winter is lang, maar hij is niet het einde. De lente komt niet omdat jij het verdient of ervoor werkt, maar omdat het zo werkt. Je hoeft alleen de winter uit te zitten.",
    over:
      "Hal Borland (1900-1978) was een Amerikaanse natuurschrijver die decennialang een column over de seizoenen schreef in de New York Times.",
  },
  {
    tekst: "Sommige dagen zijn er om door te komen, niet om te winnen.",
    auteur: "Onbekend",
    betekenis:
      "Niet elke dag hoeft goed te zijn. Sommige dagen zijn geslaagd als ze voorbij zijn, en dat is geen lage lat, het is een eerlijke. Wie op zo'n dag toch iets van zichzelf eist, verliest twee keer: de dag was al zwaar, en nu is hij ook nog mislukt. Doorkomen is op die dagen de hele opdracht.",
    over:
      "Geen bekende auteur. De uitspraak wordt veel gedeeld onder mensen die met chronische pijn, depressie of vermoeidheid leven, en die weten dat een goede week uit verschillende soorten dagen bestaat. Het sluit aan bij de \"lepeltheorie\" van Christine Miserandino: op sommige dagen heb je nu eenmaal minder lepels energie.",
  },
  {
    tekst: "Het is nooit te laat om te worden wie je had kunnen zijn.",
    auteur: "George Eliot",
    betekenis:
      "Wat je had willen worden, is niet verlopen. Er is nog tijd, ook als je een andere weg hebt gelopen of jaren bent kwijtgeraakt aan iets wat je klein hield. Beginnen kan op elke leeftijd, en wie het later doet, neemt meer mee dan wie het vroeg deed. De omweg was niet voor niets.",
    over:
      "George Eliot was de schrijversnaam van Mary Ann Evans (1819-1880), schrijfster van \"Middlemarch\". De zin wordt haar toegeschreven, maar is in haar werk niet gevonden.",
  },
  {
    tekst: "Wees jezelf; iedereen anders is al bezet.",
    auteur: "Oscar Wilde",
    betekenis:
      "Iemand anders proberen te zijn is een baan die al vergeven is. Jezelf zijn is de enige vacature die openstaat. Die past ook nog eens precies.",
    over:
      "Oscar Wilde (1854-1900) was een Ierse schrijver, bekend om zijn scherpe zinnen. Deze wordt hem breed toegeschreven, maar staat niet in zijn werk.",
  },
  {
    tekst: "Wij zien de dingen niet zoals ze zijn; wij zien ze zoals wij zijn.",
    auteur: "Anaïs Nin",
    betekenis:
      "Op een sombere dag ziet de hele wereld er somber uit, terwijl de wereld niet is veranderd. Dat is een reden om je oordeel op zo'n dag niet helemaal te vertrouwen. De wereld is groter dan je stemming.",
    over:
      "Anaïs Nin (1903-1977) was een Frans-Amerikaanse schrijfster, vooral bekend om haar dagboeken. De zin staat in haar roman uit 1961 en komt ook in de Talmoed voor.",
  },
  {
    tekst: "Een klein lichtje verdrijft veel donker.",
    auteur: "Joods gezegde",
    betekenis:
      "Een kaars is klein, maar hij verlicht een hele kamer. Zo groot hoeft het goede niet te zijn om het donker te breken. Eén klein iets is genoeg.",
    over:
      "Een gezegde uit de Joodse traditie, in verschillende vormen terug te vinden in de chassidische literatuur van de achttiende eeuw. Het wordt vaak aangehaald rond Chanoeka, het lichtfeest, waarbij elke avond één kaars meer wordt aangestoken: het licht groeit, het donker hoeft niet in één keer weg.",
  },
  {
    tekst: "Voor alles wat is geweest: dank. Voor alles wat komt: ja.",
    auteur: "Dag Hammarskjöld",
    betekenis:
      "Twee korte zinnen die het verleden en de toekomst allebei een plek geven. Dank voor wat was, ook het zware, omdat het je bracht waar je nu bent. En ja tegen wat komt, niet omdat je weet wat het is, maar omdat je het niet vooraf wilt afwijzen. Het is een houding van openstaan, geen belofte dat alles goed komt.",
    over:
      "Dag Hammarskjöld (1905-1961) was secretaris-generaal van de Verenigde Naties en kwam om bij een vliegtuigongeluk tijdens een vredesmissie in Congo. Hij kreeg postuum de Nobelprijs voor de Vrede. De regel komt uit zijn dagboek \"Merkstenen\", dat pas na zijn dood werd gevonden en uitgegeven.",
  },
  {
    tekst: "Verdriet is de prijs die we betalen voor liefde.",
    auteur: "Colin Murray Parkes",
    betekenis:
      "Dat het pijn doet, komt doordat het iets waard was. Verdriet is geen storing, het is liefde die nergens heen kan. Zo bekeken is het iets om zacht mee om te gaan.",
    over:
      "Colin Murray Parkes (1928-2024) was een Britse psychiater en pionier in het onderzoek naar rouw. Koningin Elizabeth II maakte de zin wereldberoemd toen ze hem in 2001 aanhaalde.",
  },
  {
    tekst: "Je hoeft niet het hele bos te kennen om de volgende boom te vinden.",
    auteur: "Onbekend",
    betekenis:
      "Overzicht is fijn, maar niet nodig om verder te komen. De volgende boom zie je vanzelf, en daarachter weer een. Zo kom je het hele bos door zonder het ooit helemaal te zien. Wie wacht tot het hele bos in kaart is, blijft aan de rand staan.",
    over:
      "Geen bekende auteur. Het beeld komt uit het wandelen, waar je in dicht bos alleen op de volgende markering loopt, en wordt veel gebruikt in de begeleiding bij herstel: niet het hele traject overzien, maar de volgende afspraak halen. Het is de tegenhanger van de uitdrukking \"door de bomen het bos niet meer zien\".",
  },
  {
    tekst: "Aan het eind van de dag kunnen we veel meer verdragen dan we denken.",
    auteur: "Frida Kahlo",
    betekenis:
      "Vooraf lijkt iets ondraaglijk. Als het er eenmaal is, blijkt dat je het draagt, omdat het moet en omdat je het kunt. Die kracht ontdek je pas in de situatie zelf.",
    over:
      "Frida Kahlo (1907-1954) was een Mexicaanse schilder die haar leven lang met pijn leefde na een ernstig ongeluk. De zin wordt haar toegeschreven en past bij haar dagboeken.",
  },
  {
    tekst: "De beste tijd om te rusten is voordat je moe bent.",
    auteur: "Onbekend",
    betekenis:
      "Rust is niet alleen iets voor als je op bent. Het werkt beter als het eerder komt, omdat je dan nog iets hebt om mee te herstellen. Een pauze nemen terwijl het nog gaat, is geen luiheid maar vooruitzien. Wie pas stopt als het niet meer gaat, heeft veel langer nodig om weer op gang te komen.",
    over:
      "Geen bekende auteur. De gedachte komt uit de sport en het bergwandelen, waar gidsen op vaste tijden laten rusten, ongeacht of iemand moe is. In de zorg voor mensen met burn-out is het dezelfde les: de meeste mensen negeerden maandenlang de signalen voordat ze uitvielen.",
  },
  {
    tekst: "Alles wat menselijk is, mag genoemd worden. En alles wat genoemd wordt, wordt hanteerbaarder.",
    auteur: "Fred Rogers",
    betekenis:
      "Een gevoel dat een naam krijgt, wordt kleiner. Niet omdat het weg is, maar omdat het nu ergens bij hoort. Benoemen is de eerste stap naar dragen.",
    over:
      "Fred Rogers (1928-2003) zei dit in 1969 in de Amerikaanse Senaat, in een pleidooi voor de publieke omroep. Het is de kern van zijn werk voor kinderen.",
  },
  {
    tekst: "Een boom die buigt in de storm, breekt niet.",
    auteur: "Spreekwoord",
    betekenis:
      "Stijf blijven staan lijkt sterk, maar het is de buigzame boom die de storm overleeft. Meegeven is geen toegeven. Het is een manier om heel te blijven.",
    over: "Een beeld dat in veel culturen als spreekwoord voorkomt, van de Chinese Daodejing tot de fabels van La Fontaine.",
  },
  {
    tekst: "Het is goed om een einde te hebben om naartoe te reizen, maar het is de reis die uiteindelijk telt.",
    auteur: "Ursula K. Le Guin",
    betekenis:
      "Een doel geeft richting, maar het leven gebeurt onderweg. De dagen ertussen zijn niet de wachtkamer, ze zijn het echte werk. Ook de dagen waarop je niet opschiet.",
    over:
      "Ursula K. Le Guin (1929-2018) was een Amerikaanse schrijfster van sciencefiction en fantasy. De zin komt uit \"De linkerhand van het duister\" uit 1969.",
  },
  {
    tekst: "Wees niet bang om langzaam te gaan. Wees alleen bang om stil te staan.",
    auteur: "Chinees spreekwoord",
    betekenis:
      "Traag vooruit is prima. Het enige wat je in de weg staat, is helemaal niet meer bewegen, en zelfs dat mag soms even, als rust. Het verschil zit in de bedoeling: rusten om verder te kunnen is iets anders dan stoppen uit ontmoediging. Een kleine stap per dag is over een jaar een lange weg.",
    over: "Een spreekwoord dat aan China wordt toegeschreven en in veel talen bekend is. Het wordt ook vaak aan Confucius toegeschreven, zonder bron.",
  },
  {
    tekst: "Wat je niet kunt zeggen, kun je soms wel opschrijven.",
    auteur: "Onbekend",
    betekenis:
      "Praten lukt niet altijd. Schrijven vraagt geen luisteraar en geen goede timing, en je kunt er zo lang over doen als je wilt. Wat op papier staat, is alvast uit je hoofd, en vaak ziet het er daar kleiner uit. Soms is het opschrijven de eerste stap naar het uitspreken.",
    over:
      "Geen bekende auteur. De Amerikaanse psycholoog James Pennebaker toonde in de jaren tachtig aan dat een kwartier per dag schrijven over wat je bezighoudt, na een paar dagen meetbaar effect heeft op hoe mensen zich voelen. Anne Frank schreef in haar dagboek dat papier geduldiger is dan mensen.",
  },
  {
    tekst: "Als de hele wereld zwijgt, heeft zelfs één stem kracht.",
    auteur: "Malala Yousafzai",
    betekenis:
      "Je hoeft niet met velen te zijn om gehoord te worden. Eén stem, ook een zachte, verandert een stilte. Dat geldt ook voor de stem waarmee je zegt dat het niet goed gaat.",
    over:
      "Malala Yousafzai (1997) overleefde als tiener een aanslag omdat ze opkwam voor onderwijs aan meisjes en kreeg in 2014 de Nobelprijs voor de Vrede.",
  },
  {
    tekst: "Het geluk van je leven hangt af van de kwaliteit van je gedachten.",
    auteur: "Marcus Aurelius",
    betekenis:
      "Hoe je je voelt, hangt meer samen met wat je denkt dan met wat er gebeurt. Dat betekent niet dat je alles kunt wegdenken, wel dat je gedachten er toe doen. Ze verdienen zorg.",
    over:
      "Marcus Aurelius (121-180) was Romeins keizer en schreef zijn \"Persoonlijke notities\" voor zichzelf, in zijn tent tijdens veldtochten aan de Donau. Hij was niet van plan ze uit te geven. Deze zin staat er in vrije vertaling; hij is de kern van de stoïcijnse gedachte dat niet de gebeurtenissen maar je oordeel erover je gemoed bepaalt.",
  },
  {
    tekst: "Wie bloemen wil zien, moet de regen laten vallen.",
    auteur: "Onbekend",
    betekenis:
      "Groei heeft regen nodig, hoe vervelend regen ook is. Wat je nu doormaakt, kan later blijken te zijn wat je nodig had, al is dat geen reden om het nu fijn te vinden. Dat weet je pas als het bloeit. Wie de regen tegenhoudt, houdt ook de bloemen tegen.",
    over:
      "Geen bekende auteur. Het beeld komt in veel vormen terug, van het Hawaïaanse \"zonder regen geen regenboog\" tot de zin van Dolly Parton over de regenboog en de regen. In de psychologie heet het posttraumatische groei: een deel van de mensen komt uit een zware periode met meer diepgang dan ervoor.",
  },
  {
    tekst: "Wat jij als een einde ziet, ziet de vlinder als een begin.",
    auteur: "Onbekend",
    betekenis:
      "De rups die verdwijnt, is niet weg. Hij wordt iets anders, en in de cocon ziet dat er eerst uit als afbraak. Zo kan een einde ook een begin zijn dat je nog niet herkent: een baan die stopt, een relatie die eindigt, een periode die voorbij is. Wat het wordt, zie je pas als het vliegt.",
    over:
      "Geen bekende auteur. De zin wordt vaak aan Richard Bach of aan Laozi toegeschreven, maar is bij geen van beiden terug te vinden. Het beeld van de vlinder als symbool van verandering is oud: het Griekse woord psyche betekent zowel ziel als vlinder.",
  },
  {
    tekst: "De geest is als water. Als hij rustig is, wordt alles helder.",
    auteur: "Onbekend",
    betekenis:
      "In troebel water zie je niets, en dat ligt niet aan het water. Wacht tot het bezinkt, en het wordt vanzelf helder. Zo werkt het ook met een vol hoofd: roeren maakt het troebeler, even niets doen maakt het klaar. Een besluit dat je in troebel water neemt, is zelden het beste.",
    over:
      "Een uitspraak zonder vaste bron, die in de traditie van zen en taoïsme staat. Laozi vraagt in de Daodejing wie het geduld heeft om te wachten tot de modder bezinkt. Zenleraren gebruiken vaak een glas met zand en water om te laten zien wat meditatie doet.",
  },
  {
    tekst: "Zelfs de kleinste persoon kan de loop van de toekomst veranderen.",
    auteur: "J.R.R. Tolkien",
    betekenis:
      "Je hoeft niet groot of sterk te zijn om iets te betekenen. In het verhaal is het de kleinste die het zwaarste draagt. Ook jouw kleine stap doet ertoe.",
    over:
      "J.R.R. Tolkien (1892-1973) was taalkundige in Oxford en schreef \"In de ban van de ring\" tussen 1937 en 1949. De elfenkoningin Galadriel zegt dit over Frodo, de hobbit die de ring draagt: de kleinste en zwakste van het gezelschap, en daarom degene die het kan. In de film uit 2001 is het een van de meest geciteerde regels.",
  },
  {
    tekst: "Laat je niet ontmoedigen. Ook de langste weg gaat stap voor stap.",
    auteur: "Onbekend",
    betekenis:
      "De lengte van de weg zegt niets over de grootte van een stap. Elke weg, ook de langste, bestaat uit gewone stappen, en die kun je zetten. Ontmoediging komt meestal van naar het eind kijken; de stap zelf is nooit het probleem. Wie alleen naar de volgende kilometer kijkt, loopt de hele route.",
    over:
      "Geen bekende auteur. De gedachte sluit aan bij de beroemde zin van Laozi over de reis van duizend mijl, en bij wat pelgrims op de Camino leren: de achthonderd kilometer naar Santiago loop je niet, je loopt elke dag twintig.",
  },
  {
    tekst: "Vertel je verhaal. Iemand heeft het nodig.",
    auteur: "Onbekend",
    betekenis:
      "Wat je hebt meegemaakt, kan voor een ander een herkenning zijn: het bewijs dat die niet de enige is. Je hoeft er niet trots op te zijn om het te delen, en het hoeft ook niet afgerond te zijn. Alleen eerlijk. Wie zijn verhaal vertelt, helpt vaak een ander die het nog niet durft.",
    over:
      "Geen bekende auteur. De uitspraak wordt veel gedeeld onder ervaringsdeskundigen in de geestelijke gezondheidszorg, waar het delen van verhalen sinds de jaren negentig een vaste plek heeft in herstel. MIND werkt zelf al jaren met ervaringsverhalen, precies om deze reden.",
  },
  {
    tekst: "Wat je doet met wat je is overkomen, dat ben jij.",
    auteur: "Jean-Paul Sartre",
    betekenis:
      "Je kiest niet wat je overkomt. Wel wat je ermee doet, en dat is uiteindelijk wie je bent: niet het verlies, maar hoe je ermee verder ging. Die keuze ligt niet vast en mag elke dag opnieuw. Ook een dag waarop je er niets mee doet, is een keuze die je morgen anders mag maken.",
    over:
      "Jean-Paul Sartre (1905-1980) was een Franse filosoof en schrijver. De zin is een vrije weergave van een gedachte uit zijn werk over vrijheid.",
  },
  {
    tekst: "Wie zijn schaduw kent, staat steviger in het licht.",
    auteur: "Onbekend",
    betekenis:
      "Je moeilijke kanten kennen, maakt je niet zwakker. Het maakt je eerlijker en steviger, omdat je niet meer hoeft te schrikken van wat je in jezelf tegenkomt. Wat je niet wegduwt, kan je ook niet onderuit halen. Wie zijn eigen jaloezie, angst of boosheid kent, wordt er minder door gestuurd.",
    over:
      "Geen bekende auteur. De gedachte gaat terug op het werk van Carl Jung, die de \"schaduw\" beschreef: de kanten van jezelf die je liever niet ziet. Volgens Jung wordt een mens niet verlicht door zich licht voor te stellen, maar door het donker bewust te maken.",
  },
  {
    tekst: "Inademend kalmeer ik mijn lichaam. Uitademend glimlach ik.",
    auteur: "Thich Nhat Hanh",
    betekenis:
      "Het is een oefening van twee ademhalingen, en meer hoeft het niet te zijn. Op momenten dat alles te veel is, blijft de adem over: die gaat altijd door, en je kunt er iets aan koppelen. Bij het inademen laat je de schouders zakken, bij het uitademen ontspant het gezicht een beetje. Het lost niets op, maar het maakt een klein stukje ruimte waar er geen leek te zijn.",
    over:
      "Thich Nhat Hanh (1926-2022) was een Vietnamese zenmonnik die mindfulness naar het Westen bracht en door Martin Luther King werd voorgedragen voor de Nobelprijs voor de Vrede. De regels komen uit \"Being Peace\" uit 1987 en zijn de bekendste ademoefening uit zijn onderwijs.",
  },
  {
    tekst: "Verwacht niet dat je altijd vrolijk bent. Verwacht dat je altijd verandert.",
    auteur: "Onbekend",
    betekenis:
      "Altijd blij zijn is geen haalbare eis, en wie hem zichzelf stelt, voelt zich op een gewone dag al mislukt. Altijd in beweging zijn is wel haalbaar, want dat gebeurt vanzelf. Wat je nu voelt, is een tussenstand, geen eindstand. Ook een goede dag is er een die voorbijgaat, en dat maakt hem niet minder waard.",
    over:
      "Geen bekende auteur. De gedachte sluit aan bij het beeld van deze app: gevoelens zijn weer, en het weer draait altijd. Onderzoek naar geluk laat zien dat mensen die vrolijkheid als norm zien, juist ongelukkiger worden; wie schommelingen normaal vindt, houdt het beter vol.",
  },
  {
    tekst: "De zon gaat ook op als je hem niet ziet.",
    auteur: "Onbekend",
    betekenis:
      "Dat je het licht niet ziet, betekent niet dat het er niet is. Sommige dagen is het simpelweg bewolkt, en op zo'n dag lijkt het alsof het altijd zo is geweest. De zon doet ondertussen gewoon zijn werk. Wat een sombere periode zo verraderlijk maakt, is dat ze zichzelf voordoet als de waarheid over alles.",
    over:
      "Geen bekende auteur. De gedachte komt in veel vormen terug in liedjes en gedichten, en ook in de psychologie: Aaron Beck, de grondlegger van de cognitieve therapie, beschreef hoe een depressie het zicht op verleden, heden en toekomst tegelijk verdonkert, zonder dat er buiten iets veranderd is.",
  },
  {
    tekst: "Ik ben niet wat mij is overkomen. Ik ben wat ik kies te worden.",
    auteur: "Carl Jung",
    betekenis:
      "Je geschiedenis is echt, maar ze is niet je identiteit. Wie je wordt, is een keuze die je elke dag een beetje maakt, in kleine dingen: opstaan, iemand bellen, één ding doen dat bij je past. Die keuze is van jou. Wat je is overkomen, mag een hoofdstuk zijn, maar het hoeft niet de titel te worden.",
    over:
      "Carl Jung (1875-1961) was een Zwitserse psychiater. De zin wordt hem breed toegeschreven, maar staat niet letterlijk in zijn werk.",
  },
  {
    tekst: "Het grootste wapen tegen stress is ons vermogen de ene gedachte boven de andere te kiezen.",
    auteur: "William James",
    betekenis:
      "Je kunt niet kiezen welke gedachten opkomen, wel welke je vasthoudt. Dat is geen truc die altijd werkt, maar het is wel iets. Een kleine keuze in een vol hoofd.",
    over:
      "William James (1842-1910) was een Amerikaanse psycholoog en filosoof, een van de grondleggers van de psychologie. De zin wordt hem toegeschreven, zonder vaste bron.",
  },
  {
    tekst: "Je hoeft niet te weten waarom je verdrietig bent om verdrietig te mogen zijn.",
    auteur: "Onbekend",
    betekenis:
      "Een gevoel heeft geen reden nodig om echt te zijn. Soms is het er gewoon, en het zoeken naar een verklaring maakt het vaak zwaarder: nu ben je verdrietig én snap je het niet. Dat mag, ook zonder verklaring. Het waarom komt soms later, en soms helemaal niet, en het gevoel gaat toch weer over.",
    over:
      "Geen bekende auteur. De zin wordt veel gebruikt door therapeuten, omdat mensen zich vaak schamen voor een gevoel dat ze niet kunnen uitleggen. In de acceptatie- en commitmenttherapie is het een basisprincipe: een gevoel hoeft niet gerechtvaardigd te worden om er te mogen zijn.",
  },
  {
    tekst: "En de dag kwam dat het risico om in de knop te blijven pijnlijker was dan het risico om te bloeien.",
    auteur: "Elizabeth Appell",
    betekenis:
      "Dicht blijven is veilig, tot het pijn gaat doen. Dan wordt opengaan de minst enge optie, ook al is het eng. Die dag komt bij de meeste mensen een keer.",
    over:
      "Elizabeth Appell schreef dit in 1979 voor een brochure van een Amerikaanse universiteit. De zin wordt bijna altijd ten onrechte aan Anaïs Nin toegeschreven.",
  },
  {
    tekst: "Het maakt niet uit hoe langzaam je gaat, zolang je niet stopt.",
    auteur: "Confucius",
    betekenis:
      "Tempo is niet het punt. Doorgaan wel, in welk tempo dan ook, en dat is een geruststelling voor wie zich met anderen vergelijkt. Stilstaan mag ook, zolang je daarna weer een stap zet. Herstel gaat bijna nooit in een rechte lijn, en langzaam vooruit is nog steeds vooruit.",
    over:
      "Confucius (551-479 voor Christus) was een Chinese denker. De zin wordt hem breed toegeschreven, maar is in de overgeleverde teksten niet letterlijk gevonden.",
  },
  {
    tekst: "Als dit geen fijn moment is, wat dan wel?",
    auteur: "Kurt Vonnegut",
    betekenis:
      "Fijne momenten zijn er vaker dan we opmerken: een kop koffie in de zon, een stil kwartier. Het even hardop zeggen, maakt dat je het ziet. Zo wordt het moment een beetje langer.",
    over:
      "Kurt Vonnegut (1922-2007) was een Amerikaanse schrijver, bekend van \"Slachthuis vijf\". Zijn oom zei dit bij fijne momenten, en Vonnegut gaf het door in toespraken.",
  },
  {
    tekst: "We lopen elkaar allemaal gewoon naar huis.",
    auteur: "Ram Dass",
    betekenis:
      "Niemand heeft het doel bereikt, iedereen is onderweg. Het enige wat we voor elkaar kunnen doen, is een stukje meelopen, en dat is al genoeg. Je hoeft een ander niet te redden en een ander hoeft jou niet te redden. Naast elkaar lopen, af en toe iets zeggen, en de weg samen een stuk korter maken: meer is het niet, en minder ook niet.",
    over:
      "Ram Dass (1931-2019) was een Amerikaanse spirituele leraar, geboren als Richard Alpert. De zin komt uit zijn boek \"How Can I Help?\" uit 1985.",
  },
  {
    tekst: "Twijfel aan jezelf is normaal. Het betekent dat je iets probeert dat ertoe doet.",
    auteur: "Onbekend",
    betekenis:
      "Als iets je niets kon schelen, zou je niet twijfelen. Twijfel is het bewijs dat het belangrijk voor je is, en dat maakt het niet fijner, wel begrijpelijker. Mensen die nooit aan zichzelf twijfelen, zijn meestal niet de mensen die je wilt zijn. De twijfel mag meelopen; hij hoeft niet te beslissen.",
    over:
      "Geen bekende auteur. De gedachte wordt vaak toegeschreven aan Charles Bukowski, die schreef dat het probleem van de wereld is dat de slimme mensen vol twijfel zitten en de domme vol zelfvertrouwen; die zin gaat terug op Bertrand Russell in 1933.",
  },
  {
    tekst: "Wees niet zo hard voor jezelf. Je bent er nog.",
    auteur: "Onbekend",
    betekenis:
      "Dat je er nog bent, na alles, is al iets. Het is niet niets: je hebt elke dag tot nu toe gehaald, ook de dagen waarvan je dacht dat het niet ging. Dat mag je meetellen op de dagen dat de rest niet lukt. Wie hard is voor zichzelf, vergeet meestal dit deel van de rekening.",
    over:
      "Geen bekende auteur. De zin wordt veel gedeeld in gesprekken over herstel, waar de eerste vraag vaak niet is wat er beter moet, maar wat iemand al heeft overleefd. Het is de kern van wat Kristin Neff zelfcompassie noemt: kijken naar jezelf zoals je naar een vriend zou kijken die hetzelfde had doorgemaakt.",
  },
  {
    tekst: "Een klein gebaar kan een groot verschil maken, vooral als niemand het ziet.",
    auteur: "Onbekend",
    betekenis:
      "Het goede hoeft geen publiek. Een deur openhouden, een bericht sturen, een stille vriendelijkheid: het telt, ook zonder dat iemand het weet. En het doet iets met jou, niet alleen met de ander. Wie zich somber voelt, merkt vaak dat iets kleins voor een ander de eigen dag ook lichter maakt.",
    over:
      "Geen bekende auteur. De gedachte komt in veel tradities terug: in de joodse leer geldt anoniem geven als de hoogste vorm, en in de Bergrede staat dat de linkerhand niet hoeft te weten wat de rechter doet. Onderzoek naar vriendelijkheid laat zien dat de gever er evenveel van opknapt als de ontvanger.",
  },
  {
    tekst: "Waar het hart vol van is, loopt de mond van over.",
    auteur: "Nederlands spreekwoord",
    betekenis:
      "Wat je bezighoudt, komt er vanzelf uit. Dat is geen zwakte, het is hoe mensen werken, en het spreekwoord veroordeelt het niet. Erover praten hoort bij vol zijn, en wie een vol hart heeft, mag het laten overlopen bij iemand die luistert. Wat je binnenhoudt, wordt zelden lichter.",
    over: "Een Nederlands spreekwoord dat teruggaat op een zin uit het Nieuwe Testament. Het wordt sinds de Statenvertaling in het Nederlands gebruikt.",
  },
  {
    tekst: "Soms is het dapperste wat je kunt doen, om hulp vragen.",
    auteur: "Onbekend",
    betekenis:
      "Hulp vragen voelt als toegeven dat je het niet kunt. Het is eigenlijk toegeven dat je een mens bent, en dat vraagt meer moed dan doen alsof. De meeste mensen helpen graag en voelen zich zelfs vereerd als iemand het vraagt. Wat jou een last lijkt, is voor een ander vaak een blijk van vertrouwen.",
    over:
      "Geen bekende auteur. De gedachte komt in veel campagnes over mentale gezondheid terug, omdat uit onderzoek blijkt dat mensen gemiddeld jaren wachten voordat ze hulp zoeken, vooral mannen. MIND en de hulplijn in deze app bestaan precies om die drempel te verlagen.",
  },
  {
    tekst: "Alles heeft zijn tijd. Er is een tijd om te huilen en een tijd om te lachen.",
    auteur: "Prediker",
    betekenis:
      "Niet alles hoeft tegelijk. Huilen heeft zijn eigen tijd, lachen ook, en ze wisselen elkaar af zonder dat je dat hoeft te regelen. Wat er nu is, is de tijd daarvoor, en het hoeft niet meteen ook de tijd voor iets anders te zijn. Wie verdriet de ruimte geeft, merkt dat het lachen vanzelf zijn beurt krijgt.",
    over:
      "Prediker is een boek uit de Hebreeuwse Bijbel, geschreven rond de derde eeuw voor Christus. Dit is een vrije weergave van het beroemde derde hoofdstuk.",
  },
  {
    tekst: "Een mens is nooit zo sterk als wanneer hij zijn zwakte toegeeft.",
    auteur: "Onbekend",
    betekenis:
      "Toegeven dat iets niet gaat, vraagt meer dan volhouden dat het wel gaat. Daar zit een kracht in die niet op kracht lijkt: de sterkte van eerlijk zijn. Wie zijn zwakte kan benoemen, hoeft er geen energie meer in te steken om hem te verbergen. Die energie komt vrij voor iets beters.",
    over:
      "Geen bekende auteur. De gedachte gaat terug op een zin van de apostel Paulus (\"als ik zwak ben, dan ben ik sterk\") en komt in moderne vorm terug bij Brené Brown, die in haar onderzoek zag dat mensen kwetsbaarheid bij anderen als moed ervaren en bij zichzelf als zwakte.",
  },
  {
    tekst: "Een dag zonder lachen is een verloren dag.",
    auteur: "Nicolas de Chamfort",
    betekenis:
      "Lachen hoeft niet groot. Een glimlach om iets kleins telt ook, en die is er vaker dan je achteraf denkt. Zolang er ergens in de dag één zit, was hij niet voor niets. Op een zware dag is de vraag niet of je gelukkig was, maar of er één moment was dat je even lichter werd.",
    over:
      "Nicolas de Chamfort (1741-1794) was een Franse schrijver van aforismen. De zin wordt vaak aan Charlie Chaplin toegeschreven, maar Chamfort schreef hem het eerst.",
  },
  {
    tekst: "Blijf dicht bij alles wat je blij maakt dat je leeft.",
    auteur: "Hafez",
    betekenis:
      "Wat je goed doet, verdient een plek dichtbij: een mens, een plek, een gewoonte, muziek, een hond. Op moeilijke dagen is die nabijheid wat je overeind houdt, en juist dan is de neiging groot om het weg te duwen. Het helpt om op een goede dag op te schrijven wat je blij maakt dat je leeft, zodat je het op een slechte kunt teruglezen.",
    over:
      "Hafez (circa 1315-1390) was een Perzische dichter uit Shiraz. Deze regel is een vrije, populaire vertaling en niet letterlijk in zijn werk terug te vinden.",
  },
  {
    tekst: "Niets is voor altijd, ook dit gevoel niet.",
    auteur: "Onbekend",
    betekenis:
      "Een zwaar gevoel voelt eeuwig terwijl je erin zit, en dat is precies wat het zo zwaar maakt: het lijkt geen einde te hebben. Maar gevoelens zijn weer, geen klimaat. Ze trekken over, ook als je er niets aan doet. Wie dat een paar keer heeft meegemaakt, kan het de volgende keer een beetje eerder geloven.",
    over:
      "Geen bekende auteur. De gedachte sluit aan bij het beeld van deze app en bij het Perzische \"ook dit gaat voorbij\". Uit onderzoek naar emoties blijkt dat een gevoel, als je het niet voedt met nieuwe gedachten, meestal binnen minuten van intensiteit verandert.",
  },
  {
    tekst: "Wees een lantaarn, een reddingsboot of een ladder.",
    auteur: "Rumi",
    betekenis:
      "Er zijn veel manieren om iets voor een ander te betekenen: licht geven, drijven, of gewoon een opstapje zijn. Je hoeft niet alles te zijn. Eén is genoeg.",
    over:
      "Rumi (1207-1273) was een Perzische dichter. De regel komt uit een vrije vertaling van zijn werk door Coleman Barks.",
  },
  {
    tekst: "De zon komt op en de zon gaat onder, en haast zich weer naar de plaats waar ze opkomt.",
    auteur: "Prediker",
    betekenis:
      "Je hoeft de nieuwe dag niet te verdienen. Hij komt gewoon, of je er klaar voor bent of niet, en dat is een van de weinige zekerheden die er zijn. De zin klinkt eerst vermoeid, alsof alles maar doorgaat, maar er zit ook troost in: wat vandaag eindigt, begint morgen opnieuw. Ook na de slechtste nacht is de zon niet in staking gegaan.",
    over:
      "Prediker is een boek uit de Hebreeuwse Bijbel, geschreven rond de derde eeuw voor Christus door een schrijver die zichzelf de Prediker noemt. Het staat bekend om zijn nuchtere toon over de zin van het leven. Hemingway ontleende er de titel van zijn roman \"The Sun Also Rises\" aan.",
  },
  {
    tekst: "Morgen is er weer een dag.",
    auteur: "Margaret Mitchell",
    betekenis:
      "Niet alles hoeft vandaag. Wat blijft liggen, is niet mislukt, het is verplaatst, en morgen is er ook nog. De zin wordt in het boek uitgesproken door iemand die net alles is kwijtgeraakt, en juist daarom is hij geen makkelijke troost. Het is de beslissing om vanavond te stoppen met vechten en morgen opnieuw te kijken.",
    over:
      "Margaret Mitchell (1900-1949) schreef \"Gejaagd door de wind\", dat in 1936 verscheen en de Pulitzerprijs won. Het is de slotzin van het boek en van de film uit 1939, uitgesproken door Scarlett O'Hara, en een van de bekendste laatste zinnen uit de literatuur.",
  },
  {
    tekst: "Wat je ook voelt, je bent er niet alleen mee.",
    auteur: "Onbekend",
    betekenis:
      "Wat jij voelt, voelen vandaag meer mensen dan je denkt, ook in jouw straat. Dat neemt het niet weg, maar het maakt het minder eenzaam, en eenzaamheid is vaak het zwaarste deel. Het landelijke weerbericht in deze app laat het zien: op een mistige dag ben je zelden de enige met mist.",
    over:
      "Geen bekende auteur. Het is de gedachte achter het mentale weerbericht: ruim vier op de tien Nederlanders krijgt ooit in het leven met psychische klachten te maken, volgens onderzoek van het Trimbos-instituut. Dat betekent dat in elke volle tram iemand zit die vandaag hetzelfde voelt als jij.",
  },
  {
    tekst: "Zonneschijn is heerlijk, regen verfrissend, wind maakt sterk, sneeuw maakt vrolijk. Er bestaat geen slecht weer, alleen verschillende soorten goed weer.",
    auteur: "John Ruskin",
    betekenis:
      "Wachten op beter weer is wachten op iets wat je niet in de hand hebt. Het weer dat er is, is het enige waar je iets mee kunt, en elk soort heeft iets wat de andere soorten niet hebben. Zo bekeken heeft ook een grijze, natte dag zijn eigen kwaliteit: hij is stiller, trager, meer naar binnen gericht. Dat is geen doen alsof, het is anders kijken.",
    over:
      "John Ruskin (1819-1900) was een Engelse kunstcriticus en schrijver die de natuur tot in de kleinste wolk bestudeerde. De uitspraak wordt breed aan hem toegeschreven, maar is in zijn werk niet letterlijk gevonden. Ze past bij zijn overtuiging dat goed kijken de eerste stap naar waardering is.",
  },
];

/** De quote van vandaag: elke dag de volgende, voor iedereen dezelfde. */
export function quoteVanVandaag(datum: Date = new Date()): Quote {
  const dagnummer = Math.floor(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()) / 86_400_000);
  return QUOTES[dagnummer % QUOTES.length];
}
