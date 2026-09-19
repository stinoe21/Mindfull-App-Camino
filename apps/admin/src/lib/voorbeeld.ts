// Voorbeelddata, ALLEEN voor de ontwikkelomgeving (import.meta.env.DEV), om de
// opbouw en de grafieken te kunnen beoordelen voordat de leesfuncties er zijn.
// In een gebouwde site komt dit nergens in beeld. Het zijn verzonnen getallen,
// vast en zonder toeval, zodat het beeld bij elke keer laden hetzelfde is.

import type { Balk } from "../components/Balken.tsx";
import type { WeerDag } from "../components/Gestapeld.tsx";
import type { Staaf } from "../components/Staven.tsx";
import { WEER, type WeerCode } from "./weer.ts";

const MAANDEN = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function dagen(aantal: number, verschuif = 0): Date[] {
  const nu = new Date();
  return Array.from({ length: aantal }, (_, i) => new Date(nu.getFullYear(), nu.getMonth(), nu.getDate() - (aantal - i) - verschuif));
}
const label = (d: Date) => `${d.getDate()} ${MAANDEN[d.getMonth()]}`;

function reeks(aantal: number, basis: number, slag: number, verschuif = 0): { dag: Date; waarde: number }[] {
  return dagen(aantal, verschuif).map((dag, i) => {
    const weekend = dag.getDay() === 0 || dag.getDay() === 6;
    const golf = Math.sin((i + verschuif) / 3.1) * slag + Math.cos((i + verschuif) / 1.7) * (slag / 2);
    return { dag, waarde: Math.max(0, Math.round((basis + golf + (i - verschuif) * 0.08) * (weekend ? 0.72 : 1))) };
  });
}

const som = (r: { waarde: number }[]) => r.reduce((t, s) => t + s.waarde, 0);
const verschil = (nu: number, toen: number) => (toen === 0 ? null : Math.round(((nu - toen) / toen) * 100));

export type Voorbeeld = ReturnType<typeof voorbeeld>;

export function voorbeeld(periode: number) {
  const actief = reeks(periode, 46, 9);
  const actiefToen = reeks(periode, 46, 9, periode);
  const checkins = reeks(periode, 33, 7);
  const checkinsToen = reeks(periode, 33, 7, periode);

  const verdeling: Record<WeerCode, number> = { zonnig: 0.24, wolken: 0.29, mist: 0.19, wind: 0.12, regen: 0.16 };
  const weer: WeerDag[] = checkins.map(({ dag, waarde }, i) => {
    const mee = Math.round(waarde * 0.71);
    const schuif = Math.sin(i / 4) * 0.08;
    const delen = Object.fromEntries(
      WEER.map((w) => [w.code, Math.max(0, Math.round(mee * (verdeling[w.code] + (w.code === "zonnig" ? schuif : w.code === "regen" ? -schuif : 0))))]),
    ) as Record<WeerCode, number>;
    return { label: label(dag), delen };
  });
  const weerTotaal = weer.reduce((t, d) => t + WEER.reduce((u, w) => u + d.delen[w.code], 0), 0);
  const aandelen = Object.fromEntries(
    WEER.map((w) => [w.code, Math.round((weer.reduce((t, d) => t + d.delen[w.code], 0) / Math.max(1, weerTotaal)) * 100)]),
  ) as Record<WeerCode, number>;

  const uren: Staaf[] = Array.from({ length: 24 }, (_, uur) => ({
    label: `${uur}u`,
    waarde: Math.round((uur < 6 ? 2 : 12 + Math.sin((uur - 7) / 3.2) * 14 + (uur === 8 || uur === 21 ? 22 : 0)) * (periode / 30)),
    accent: uur === 21,
  }));

  const schaal = periode / 30;
  const n = (getal: number) => Math.round(getal * schaal);
  const ofKlein = (getal: number) => (n(getal) < 10 ? null : n(getal));

  const provincies: Balk[] = [
    ["Zuid-Holland", 212], ["Noord-Holland", 187], ["Noord-Brabant", 141], ["Gelderland", 118], ["Utrecht", 96],
    ["Overijssel", 52], ["Limburg", 44], ["Groningen", 31], ["Friesland", 24], ["Drenthe", 14], ["Flevoland", 11], ["Zeeland", 6],
  ].map(([naam, aantal]) => ({ naam: naam as string, aantal: ofKlein(aantal as number) }));

  const trechter: Balk[] = [
    ["Leeftijd", 320], ["Account", 268], ["Naam", 251], ["Onderwerpen", 233], ["Toestemming", 221],
  ].map(([naam, aantal]) => ({ naam: naam as string, aantal: n(aantal as number) }));

  const tips: Balk[] = [
    ["Piekeren", 412], ["Slaap", 366], ["Stress", 301], ["Somberheid", 214], ["Angst", 187], ["Eenzaamheid", 96], ["Rouw", 41], ["ADHD", 8],
  ].map(([naam, aantal]) => ({ naam: naam as string, aantal: ofKlein(aantal as number) }));

  const challenges: Balk[] = [
    ["Dag 1", 140], ["Dag 2", 96], ["Dag 3", 71], ["Dag 4", 60], ["Dag 5", 52], ["Dag 6", 47], ["Dag 7", 44],
  ].map(([naam, aantal]) => ({ naam: naam as string, aantal: n(aantal as number) }));

  const hulplijn: Balk[] = [
    ["WhatsApp", 38], ["Bellen", 21], ["Chat", 17], ["113", 12], ["Mail", 7], ["Luisterlijn", 4],
  ].map(([naam, aantal]) => ({ naam: naam as string, aantal: ofKlein(aantal as number), accent: naam === "113" }));

  // Eén slechte dag erin, zodat te zien is hoe dat opvalt.
  const insturen: Staaf[] = checkins.map(({ dag, waarde }, i) => {
    const slecht = i === Math.floor(periode * 0.6);
    return { label: label(dag), waarde: slecht ? Math.round(waarde * 0.41) : Math.round(waarde * 0.02), accent: slecht };
  });
  const mislukt = som(insturen);
  const verstuurd = Math.round(som(checkins) * 0.71);

  return {
    actief: actief.map(({ dag, waarde }, i) => ({ label: label(dag), waarde, accent: i === actief.length - 1 })) as Staaf[],
    tegels: {
      actiefGemiddeld: Math.round(som(actief) / periode),
      actiefVerschil: verschil(som(actief), som(actiefToen)),
      checkins: som(checkins),
      checkinsVerschil: verschil(som(checkins), som(checkinsToen)),
      doetMee: 71,
      afgerond: 88,
      hulplijn: n(99),
    },
    weer,
    aandelen,
    uren,
    provincies,
    trechter,
    tips,
    challenges,
    hulplijn,
    insturen,
    gelukt: Math.round(((verstuurd - mislukt) / Math.max(1, verstuurd)) * 100),
    slechtsteDag: insturen.find((s) => s.accent)?.label ?? null,
  };
}
