// Het ene dashboard: alle cijfers op één pagina, van boven naar beneden van
// "hoe gaat het" naar "waar zit het". Tot de leesfuncties er zijn toont de
// ontwikkelomgeving voorbeelddata en een gebouwde site een lege staat.

import { useState } from "react";

import { Balken } from "../components/Balken.tsx";
import { Gestapeld, WeerLegenda } from "../components/Gestapeld.tsx";
import { Kaart, Pagina, Tegel } from "../components/Pagina.tsx";
import { Staven } from "../components/Staven.tsx";
import { toonGetal } from "../lib/grafiek.ts";
import { voorbeeld } from "../lib/voorbeeld.ts";

const UITLEG = "Wat er in Weertje gebeurt, in totalen. Er wordt geteld, niet gevolgd: geen cijfer hier gaat over één persoon, en een totaal onder de 10 wordt niet getoond.";
const PERIODES = [7, 30, 90] as const;

const verschilTekst = (v: number | null, periode: number) =>
  v === null ? undefined : `${v > 0 ? "+" : ""}${v}% tegenover de ${periode} dagen ervoor`;

export function Dashboard() {
  const [periode, zetPeriode] = useState<(typeof PERIODES)[number]>(30);

  if (!import.meta.env.DEV) {
    return (
      <Pagina label="Dashboard" titel="Dashboard" uitleg={UITLEG}>
        <Kaart titel="Nog geen cijfers" uitleg="De functies waarmee het beheer de totalen leest, staan nog niet in de database. Ze komen in de volgende stap, met de drempel van 10.">
          {null}
        </Kaart>
      </Pagina>
    );
  }

  const d = voorbeeld(periode);
  const kiezer = (
    <div className="kop__rechts">
      <span className="voorbeeld">Voorbeelddata, alleen in de ontwikkelomgeving</span>
      <div className="pillen" role="group" aria-label="Periode">
        {PERIODES.map((p) => (
          <button key={p} type="button" className={p === periode ? "pil pil--actief" : "pil"} aria-pressed={p === periode} onClick={() => zetPeriode(p)}>
            {p} dagen
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Pagina label="Dashboard" titel="Hoe gaat het met Weertje" uitleg={UITLEG} rechts={kiezer}>
      {d.gelukt < 90 ? (
        <p className="signaal signaal--let-op"><strong>Let op.</strong> In deze periode lukte het insturen van het weer bij {d.gelukt}% van de pogingen{d.slechtsteDag ? `, met de meeste fouten op ${d.slechtsteDag}` : ""}. Kijk onderaan bij Techniek.</p>
      ) : (
        <p className="signaal">De app werkt: {d.gelukt}% van het insturen van het weer lukte in deze periode{d.slechtsteDag ? `. Eén dag valt op: ${d.slechtsteDag}, zie Techniek` : ""}.</p>
      )}

      <p className="sectielabel">Laatste {periode} dagen</p>
      <div className="tegels">
        <Tegel waarde={toonGetal(d.tegels.actiefGemiddeld)} naam="actief per dag, gemiddeld" toelichting={verschilTekst(d.tegels.actiefVerschil, periode)} />
        <Tegel waarde={toonGetal(d.tegels.checkins)} naam="check-ins afgerond" toelichting={verschilTekst(d.tegels.checkinsVerschil, periode)} />
        <Tegel waarde={`${d.tegels.doetMee}%`} naam="doet mee aan het weerbericht" toelichting="van wie de vraag beantwoordde" />
        <Tegel waarde={d.tegels.hulplijn < 10 ? "minder dan 10" : toonGetal(d.tegels.hulplijn)} naam="keer de Hulplijn geopend" toelichting="alle kanalen samen" />
      </div>

      <h2 className="sectiekop" id="weer">Het mentale weer van Nederland</h2>
      <div className="kaarten kaarten--breed-smal">
        <Kaart titel="Per dag" uitleg="Check-ins die meetellen in het landelijke beeld, verdeeld over de vijf weerbeelden. Zonnig is oranje.">
          <Gestapeld dagen={d.weer} omschrijving="Het mentale weer per dag" />
          <WeerLegenda aandelen={d.aandelen} />
        </Kaart>
        <Kaart titel="Per provincie" uitleg="Alleen wie de locatie deelde. Onder de 10 staat er geen getal.">
          <Balken balken={d.provincies} />
        </Kaart>
      </div>
      <div className="kaarten">
        <Kaart titel="Over de dag" uitleg="Op welk uur mensen inchecken, Nederlandse tijd. Een uur dat ver boven de rest uitsteekt kan een piek van één bron zijn.">
          <Staven staven={d.uren} omschrijving="Check-ins per uur van de dag" />
        </Kaart>
        <Kaart titel="Actief per dag" uitleg="Toestellen die de app op een dag voor het eerst openden. De laatste dag is oranje.">
          <Staven staven={d.actief} omschrijving="Actieve toestellen per dag" />
        </Kaart>
      </div>

      <h2 className="sectiekop" id="gebruik">Wat mensen gebruiken</h2>
      <div className="kaarten kaarten--drie">
        <Kaart titel="De onboarding" uitleg="Hoeveel mensen elke stap afronden, tegenover de eerste stap.">
          <Balken balken={d.trechter} tenOpzichteVan="eerste" />
        </Kaart>
        <Kaart titel="Meest geopende onderwerpen" uitleg="Hoe vaak een onderwerp in Tips is geopend.">
          <Balken balken={d.tips} />
        </Kaart>
        <Kaart titel="Waar een challenge stopt" uitleg={`Afgeronde dagen, alle challenges samen. ${d.tegels.afgerond}% van de gestarte check-ins wordt afgerond.`}>
          <Balken balken={d.challenges} tenOpzichteVan="eerste" />
        </Kaart>
      </div>

      <h2 className="sectiekop" id="hulp">Hulp en techniek</h2>
      <div className="kaarten">
        <Kaart titel="De Hulplijn, per kanaal" uitleg="Hoe vaak een kanaal is gekozen. 113 is oranje.">
          <Balken balken={d.hulplijn} />
        </Kaart>
        <Kaart titel="Techniek: mislukt insturen per dag" uitleg="Hoe vaak het insturen van het weer niet lukte. Een oranje staaf is een dag om uit te zoeken.">
          <Staven staven={d.insturen} omschrijving="Mislukte pogingen om het weer in te sturen, per dag" />
        </Kaart>
      </div>

      <p className="voetregel">Dagen in Nederlandse tijd. De cijfers lopen een dag achter, het weer een uur: de app stuurt alleen afgesloten dagen in. <a href="#/uitleg">Wat er wel en niet geteld wordt</a>.</p>
    </Pagina>
  );
}
