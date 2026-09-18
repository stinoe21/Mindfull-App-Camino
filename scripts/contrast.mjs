// Drukt het contrast af van elke combinatie van tekst en vlak die de app
// gebruikt. De metingen en de uitleg staan in packages/ui/tokens/contrast.ts.
//
// Draaien:  node scripts/contrast.mjs

import { METINGEN } from "../packages/ui/tokens/contrast.ts";

for (const m of METINGEN) {
  const kop = m.eis === 0 ? "info " : m.haalt ? "ok   " : "ZAKT ";
  console.log(kop + m.ratio.toFixed(2).padStart(5) + (m.eis ? " (eis " + m.eis + ")  " : "            ") + m.wat);
}
const zakt = METINGEN.filter((m) => m.eis > 0 && !m.haalt);
console.log("\n" + METINGEN.length + " combinaties, " + zakt.length + " onder de eis.");
