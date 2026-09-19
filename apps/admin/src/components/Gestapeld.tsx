// Gestapelde staven per dag: het mentale weer, verdeeld over de vijf
// weerbeelden. Eigen SVG, zelfde raster als Staven.tsx.

import { asLabels, rondMaximum, toonGetal } from "../lib/grafiek.ts";
import { WEER, type WeerCode } from "../lib/weer.ts";

export type WeerDag = { label: string; delen: Record<WeerCode, number> };

const B = 640;
const H = 250;
const RAND = { boven: 16, onder: 30, links: 38, rechts: 12 };

export function Gestapeld({ dagen, omschrijving }: { dagen: WeerDag[]; omschrijving: string }) {
  const plotB = B - RAND.links - RAND.rechts;
  const plotH = H - RAND.boven - RAND.onder;
  const vak = plotB / Math.max(dagen.length, 1);
  const staafB = Math.max(2, Math.min(22, vak * 0.66));
  const totaal = (d: WeerDag) => WEER.reduce((t, w) => t + d.delen[w.code], 0);
  const max = rondMaximum(Math.max(0, ...dagen.map(totaal)));
  const hoogte = (waarde: number) => (waarde / max) * plotH;
  const basis = RAND.boven + plotH;

  return (
    <svg className="grafiek" viewBox={`0 0 ${B} ${H}`} role="img" aria-label={`${omschrijving}. ${dagen.length} dagen, drukste dag ${toonGetal(Math.max(0, ...dagen.map(totaal)))} check-ins.`}>
      {[0, max / 2, max].map((lijn) => (
        <g key={lijn}>
          <line className="grafiek__raster" x1={RAND.links} x2={B - RAND.rechts} y1={basis - hoogte(lijn)} y2={basis - hoogte(lijn)} strokeDasharray={lijn === 0 ? undefined : "3 4"} />
          <text className="grafiek__as" x={RAND.links - 6} y={basis - hoogte(lijn) + 3.5} textAnchor="end">{toonGetal(lijn)}</text>
        </g>
      ))}
      {dagen.map((d, i) => {
        let onder = basis;
        return (
          <g key={d.label}>
            <title>{`${d.label}: ${WEER.map((w) => `${w.naam.toLowerCase()} ${toonGetal(d.delen[w.code])}`).join(", ")}`}</title>
            {[...WEER].reverse().map((w) => {
              const h = hoogte(d.delen[w.code]);
              onder -= h;
              return <rect key={w.code} className={`weer weer--${w.code}`} x={RAND.links + i * vak + (vak - staafB) / 2} y={onder} width={staafB} height={Math.max(0, h - 0.6)} />;
            })}
          </g>
        );
      })}
      {asLabels(dagen.map((d) => d.label), 8).map(({ index, label }) => (
        <text key={index} className="grafiek__as" x={RAND.links + index * vak + vak / 2} y={H - 10} textAnchor="middle">{label}</text>
      ))}
    </svg>
  );
}

export function WeerLegenda({ aandelen }: { aandelen: Record<WeerCode, number> }) {
  return (
    <ul className="legenda">
      {WEER.map((w) => (
        <li key={w.code}>
          <span className={`legenda__vlak weer--${w.code}`} aria-hidden="true" />
          {w.naam} <span className="legenda__getal">{aandelen[w.code]}%</span>
        </li>
      ))}
    </ul>
  );
}
