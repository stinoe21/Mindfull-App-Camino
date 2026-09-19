// Hoe een tip ongeveer in de app komt te staan: een kop, alinea's, een
// opsomming en een link. De app tekent hem in zijn eigen huisstijl; dit is om
// de tekst te beoordelen, niet de vormgeving.

import type { Blok } from "../lib/tips.ts";

export function TipVoorbeeld({ kop, blokken }: { kop: string; blokken: Blok[] }) {
  return (
    <div className="toestel" aria-label="Voorbeeld van de tip in de app">
      <div className="toestel__kaart">
        <h3>{kop.trim() || "De kop van je tip"}</h3>
        {blokken.length === 0 ? <p className="toestel__leeg">Hier komt je tekst te staan.</p> : null}
        {blokken.map((b, i) =>
          "tekst" in b ? (
            <p key={i}>{b.tekst}</p>
          ) : "lijst" in b ? (
            <ul key={i}>{b.lijst.map((punt, j) => <li key={j}>{punt}</li>)}</ul>
          ) : (
            <p key={i} className="toestel__link">{b.linkLabel}</p>
          ),
        )}
      </div>
    </div>
  );
}
