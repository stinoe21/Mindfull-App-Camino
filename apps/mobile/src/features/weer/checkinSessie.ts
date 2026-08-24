// De vier sliderwaarden tijdens de check-in. Alleen in het geheugen: de
// waarden verlaten het toestel nooit, ook niet gecombineerd of gehasht
// (toezegging aan Paul, docs/datamodel.md). Na afronden of verlaten van de
// flow worden ze gereset.

import type { SliderWaarden } from "./weerbeeld.ts";

const START: SliderWaarden = { temperatuur: 50, wind: 50, zicht: 50, wisselvallig: 50 };

let waarden: SliderWaarden = { ...START };

export function leesWaarden(): SliderWaarden {
  return waarden;
}

export function zetWaarde(sleutel: keyof SliderWaarden, waarde: number): void {
  waarden = { ...waarden, [sleutel]: waarde };
}

export function resetWaarden(): void {
  waarden = { ...START };
}
