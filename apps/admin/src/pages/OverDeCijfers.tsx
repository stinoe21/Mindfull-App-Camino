import { Kaart, Pagina } from "../components/Pagina.tsx";

export function OverDeCijfers() {
  return (
    <Pagina label="Uitleg" titel="Over de cijfers" uitleg="Wat Weertje telt, wat het nooit telt, en waarom sommige getallen ontbreken.">
      <div className="kaarten">
        <Kaart titel="We tellen gebeurtenissen, geen mensen">
          <p>De app telt op het toestel hoe vaak iets gebeurt, per dag. Eén keer per dag gaan de tellers van afgesloten dagen naar de server, zonder gebruiker, zonder tijdstip en zonder volgorde. Daar tellen ze op bij een totaal. Er bestaat geen rij per persoon en geen rij per gebeurtenis.</p>
        </Kaart>
        <Kaart titel="Wat je hier dus niet vindt">
          <p>Het pad van één gebruiker, wie wat las of zocht, of wat iemand deed na een regendag. Wie dat wil weten heeft een sleutel naar een persoon nodig, en die slaan we bewust niet op.</p>
        </Kaart>
        <Kaart titel="Minder dan 10">
          <p>Een totaal onder de 10 staat er als &ldquo;minder dan 10&rdquo;, ook als je het uit een ander totaal zou kunnen terugrekenen. Een klein aantal is te dicht bij een persoon.</p>
        </Kaart>
        <Kaart titel="Een indicatie, geen onderzoek">
          <p>De cijfers lopen een dag achter, het weer een uur. Eén account telt hooguit één keer per dag mee, maar wie veel accounts maakt kan de cijfers sturen. Gebruik ze om te zien wat werkt, niet als onderzoeksdata.</p>
        </Kaart>
      </div>
    </Pagina>
  );
}
