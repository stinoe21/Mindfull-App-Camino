// Een lijst met liggende balken: voor een trechter, een top tien of een
// verdeling. Een aantal onder de drempel staat er als "minder dan 10", zonder
// balk: een klein aantal is te dicht bij een persoon.

import { toonGetal } from "../lib/grafiek.ts";

export type Balk = { naam: string; aantal: number | null; accent?: boolean };

export function Balken({ balken, tenOpzichteVan, eenheid }: { balken: Balk[]; tenOpzichteVan?: "eerste" | "grootste"; eenheid?: string }) {
  const bekend = balken.map((b) => b.aantal ?? 0);
  const noemer = tenOpzichteVan === "eerste" ? bekend[0] || 1 : Math.max(1, ...bekend);
  return (
    <ol className="balken">
      {balken.map((b) => {
        const deel = b.aantal === null ? 0 : Math.round((b.aantal / noemer) * 100);
        return (
          <li key={b.naam} className="balk-rij">
            <span className="balk-rij__naam">{b.naam}</span>
            <span className="balk-rij__spoor" aria-hidden="true">
              <span className={b.accent ? "balk-rij__vulling balk-rij__vulling--accent" : "balk-rij__vulling"} style={{ width: `${deel}%` }} />
            </span>
            <span className="balk-rij__getal">
              {b.aantal === null ? "minder dan 10" : toonGetal(b.aantal)}
              {b.aantal !== null && tenOpzichteVan === "eerste" ? <span className="balk-rij__deel"> {deel}%</span> : null}
              {b.aantal !== null && eenheid ? <span className="balk-rij__deel"> {eenheid}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
