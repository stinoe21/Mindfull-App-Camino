// Een staafgrafiek als eigen SVG, zonder bibliotheek. Opbouw naar het
// dashboard van Bronwijzer: een vast raster, gestippelde hulplijnen, en een
// tekstalternatief. Kleuren komen uit styles.css.

import { asLabels, rondMaximum, toonGetal } from "../lib/grafiek.ts";

export type Staaf = { label: string; waarde: number; accent?: boolean };

const B = 640;
const H = 200;
const RAND = { boven: 16, onder: 30, links: 38, rechts: 12 };

export function Staven({ staven, omschrijving }: { staven: Staaf[]; omschrijving: string }) {
  const plotB = B - RAND.links - RAND.rechts;
  const plotH = H - RAND.boven - RAND.onder;
  const vak = plotB / Math.max(staven.length, 1);
  const staafB = Math.max(2, Math.min(22, vak * 0.62));
  const max = rondMaximum(Math.max(0, ...staven.map((s) => s.waarde)));
  const y = (waarde: number) => RAND.boven + plotH - (waarde / max) * plotH;
  const lijnen = [0, max / 2, max];
  const hoogste = Math.max(0, ...staven.map((s) => s.waarde));

  return (
    <svg className="grafiek" viewBox={`0 0 ${B} ${H}`} role="img" aria-label={`${omschrijving}. ${staven.length} dagen, hoogste dag ${toonGetal(hoogste)}.`}>
      {lijnen.map((lijn) => (
        <g key={lijn}>
          <line className="grafiek__raster" x1={RAND.links} x2={B - RAND.rechts} y1={y(lijn)} y2={y(lijn)} strokeDasharray={lijn === 0 ? undefined : "3 4"} />
          <text className="grafiek__as" x={RAND.links - 6} y={y(lijn) + 3.5} textAnchor="end">{toonGetal(lijn)}</text>
        </g>
      ))}
      {staven.map((s, i) => (
        <rect
          key={s.label}
          className={s.accent ? "grafiek__staaf grafiek__staaf--accent" : "grafiek__staaf"}
          x={RAND.links + i * vak + (vak - staafB) / 2}
          y={y(s.waarde)}
          width={staafB}
          height={Math.max(0, RAND.boven + plotH - y(s.waarde))}
          rx={2}
        >
          <title>{`${s.label}: ${toonGetal(s.waarde)}`}</title>
        </rect>
      ))}
      {asLabels(staven.map((s) => s.label), 8).map(({ index, label }) => (
        <text key={index} className="grafiek__as" x={RAND.links + index * vak + vak / 2} y={H - 10} textAnchor="middle">{label}</text>
      ))}
    </svg>
  );
}
