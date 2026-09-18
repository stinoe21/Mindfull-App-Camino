// Voorbeelddata, ALLEEN voor de ontwikkelomgeving (import.meta.env.DEV), om de
// opbouw en de grafieken te kunnen beoordelen voordat de leesfuncties er zijn.
// In een gebouwde site komt dit nergens in beeld. Het zijn verzonnen getallen,
// vast en zonder toeval, zodat het beeld bij elke keer laden hetzelfde is.

import type { Staaf } from "../components/Staven.tsx";

const MAANDEN = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function dagen(aantal: number): Date[] {
  const vandaag = new Date();
  return Array.from({ length: aantal }, (_, i) => new Date(vandaag.getFullYear(), vandaag.getMonth(), vandaag.getDate() - (aantal - i)));
}

export function voorbeeldReeks(aantal: number, basis: number, slag: number): Staaf[] {
  return dagen(aantal).map((dag, i) => {
    const weekend = dag.getDay() === 0 || dag.getDay() === 6;
    const golf = Math.sin(i / 3.1) * slag + Math.cos(i / 1.7) * (slag / 2);
    const waarde = Math.max(0, Math.round((basis + golf + i * 0.8) * (weekend ? 0.7 : 1)));
    return { label: `${dag.getDate()} ${MAANDEN[dag.getMonth()]}`, waarde, accent: i === aantal - 1 };
  });
}
