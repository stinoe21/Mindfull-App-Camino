// De pagina's van het beheer, in de volgorde van de navigatie. Het adres is
// het deel achter het hekje, zodat een statische site zonder server volstaat.

export const PAGINAS = [
  { pad: "overzicht", titel: "Overzicht" },
  { pad: "weer", titel: "Mentaal weer" },
  { pad: "gebruik", titel: "Gebruik" },
  { pad: "hulplijn", titel: "Hulplijn" },
  { pad: "techniek", titel: "Techniek" },
  { pad: "cijfers", titel: "Over de cijfers" },
] as const;

export type Pad = (typeof PAGINAS)[number]["pad"];

export function padUitAdres(hash: string): Pad {
  const deel = hash.replace(/^#\/?/, "");
  return PAGINAS.find((p) => p.pad === deel)?.pad ?? "overzicht";
}
