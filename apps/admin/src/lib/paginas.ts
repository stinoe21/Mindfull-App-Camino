// De pagina's van het beheer. Eén dashboard voor alle cijfers, één plek voor
// content, en de uitleg. Het adres is het deel achter het hekje, zodat een
// statische site zonder server volstaat.

export const PAGINAS = [
  { pad: "dashboard", titel: "Dashboard" },
  { pad: "content", titel: "Content" },
  { pad: "uitleg", titel: "Over de cijfers" },
] as const;

export type Pad = (typeof PAGINAS)[number]["pad"];

export function padUitAdres(hash: string): Pad {
  const deel = hash.replace(/^#\/?/, "").split("/")[0];
  return PAGINAS.find((p) => p.pad === deel)?.pad ?? "dashboard";
}
