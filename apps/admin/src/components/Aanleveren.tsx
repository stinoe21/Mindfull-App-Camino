// Het aanleverformat voor MIND: dezelfde velden en grenzen als het formulier
// en als de database (supabase/migrations, content_body_problem). Staat in het
// beheer zelf, zodat het niet uit de pas kan lopen met een los document.

import { useState } from "react";

import { ONDERWERPEN } from "../lib/onderwerpen.ts";

const SJABLOON = `ONDERWERP: (kies er een uit de lijst in het beheer)

KOP: (3 tot 120 tekens)

TEKST:
(Een of meer alinea's, elk hooguit 1500 tekens. Een lege regel begint een nieuwe alinea.)

- (Een opsomming mag ook: elke regel begint met een streepje.)
- (Hooguit 12 punten van elk hooguit 300 tekens.)

LINK, ALS JE WILT:
Tekst van de link: (hooguit 80 tekens)
Adres: https://

AKKOORD VAN: (naam en datum)`;

export function Aanleveren() {
  const [gekopieerd, zetGekopieerd] = useState(false);

  const kopieer = async () => {
    try {
      await navigator.clipboard.writeText(SJABLOON);
      zetGekopieerd(true);
      setTimeout(() => zetGekopieerd(false), 2500);
    } catch {
      // Kopiëren lukt niet overal; het format staat er ook gewoon om over te nemen.
    }
  };

  return (
    <details className="uitklap">
      <summary>Zo lever je een tip aan</summary>
      <div className="uitklap__inhoud">
        <p>Een tip heeft een vaste vorm. Hoe hij eruitziet bepaalt de app: lettertype, witruimte en kleur liggen vast. Je levert alleen de inhoud aan, als platte tekst.</p>
        <ul className="punten">
          <li><strong>Onderwerp.</strong> Een van de {ONDERWERPEN.length} onderwerpen in de app: {ONDERWERPEN.map((o) => o.titel).join(", ")}.</li>
          <li><strong>Kop.</strong> 3 tot 120 tekens. Kort en concreet: wat ga je doen.</li>
          <li><strong>Tekst.</strong> Alinea&apos;s van hooguit 1500 tekens en, als je wilt, een opsomming van hooguit 12 punten. Samen hooguit 12 blokken. Geen vet, cursief of koppen.</li>
          <li><strong>Link.</strong> Eén link mag, naar een adres dat met https:// begint.</li>
          <li><strong>Geen hulplijn of telefoonnummer.</strong> De Hulplijn van MIND en 113 staan al onder elk onderwerp, met een vaste tekst.</li>
          <li><strong>Akkoord.</strong> Een tip komt in de app nadat iemand van MIND het voorbeeld in het beheer heeft gezien en akkoord heeft gegeven.</li>
        </ul>
        <pre className="sjabloon">{SJABLOON}</pre>
        <div className="rij">
          <button type="button" className="knop knop--rand" onClick={() => void kopieer()}>{gekopieerd ? "Gekopieerd" : "Kopieer het format"}</button>
        </div>
      </div>
    </details>
  );
}
