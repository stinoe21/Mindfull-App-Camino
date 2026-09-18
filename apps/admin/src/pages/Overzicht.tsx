import { Kaart, Pagina, Tegel } from "../components/Pagina.tsx";
import { Staven } from "../components/Staven.tsx";
import { toonGetal } from "../lib/grafiek.ts";
import { voorbeeldReeks } from "../lib/voorbeeld.ts";

const UITLEG = "Wat er in Weertje gebeurt, in totalen. Er wordt geteld, niet gevolgd: geen cijfer hier gaat over één persoon, en een totaal onder de 10 wordt niet getoond.";

export function Overzicht() {
  // Tot de leesfuncties er zijn: in de ontwikkelomgeving voorbeelddata om de
  // opbouw te beoordelen, in een gebouwde site een eerlijke lege staat.
  if (!import.meta.env.DEV) {
    return (
      <Pagina label="Overzicht" titel="Overzicht" uitleg={UITLEG}>
        <Kaart titel="Nog geen cijfers" uitleg="De functies waarmee het beheer de totalen leest, staan nog niet in de database. Ze komen in de volgende stap, met de drempel van 10.">
          {null}
        </Kaart>
      </Pagina>
    );
  }

  const actief = voorbeeldReeks(30, 42, 9);
  const checkins = voorbeeldReeks(30, 31, 7);
  const som = (r: { waarde: number }[]) => r.reduce((t, s) => t + s.waarde, 0);

  return (
    <Pagina label="Overzicht" titel="Overzicht" uitleg={UITLEG} rechts={<span className="voorbeeld">Voorbeelddata, alleen in de ontwikkelomgeving</span>}>
      <p className="sectielabel">Laatste 30 dagen</p>
      <div className="tegels">
        <Tegel waarde={toonGetal(actief[actief.length - 1].waarde)} naam="actief, gisteren" toelichting="toestellen die de app openden" />
        <Tegel waarde={toonGetal(som(checkins))} naam="check-ins afgerond" toelichting={`${toonGetal(Math.round(som(checkins) / 30))} per dag`} />
        <Tegel waarde="71%" naam="doet mee aan het weerbericht" toelichting="van wie de vraag beantwoordde" />
        <Tegel waarde="minder dan 10" naam="Hulplijn geopend" toelichting="onder de drempel staat er geen getal" />
      </div>
      <div className="kaarten">
        <Kaart titel="Actief per dag" uitleg="Toestellen die de app op een dag voor het eerst openden. De laatste dag is oranje.">
          <Staven staven={actief} omschrijving="Actieve toestellen per dag" />
        </Kaart>
        <Kaart titel="Check-ins per dag" uitleg="Afgeronde check-ins, ook van wie niet meedoet aan het landelijke beeld.">
          <Staven staven={checkins} omschrijving="Afgeronde check-ins per dag" />
        </Kaart>
      </div>
      <p className="voetregel">Dagen in Nederlandse tijd. De cijfers lopen een dag achter: de app stuurt alleen afgesloten dagen in.</p>
    </Pagina>
  );
}
