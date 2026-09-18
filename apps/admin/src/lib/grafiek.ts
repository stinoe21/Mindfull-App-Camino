// Het rekenwerk achter de staafgrafiek, los van het tekenen.

/** Een rond maximum voor de y-as: 1, 2, 5 of 10 keer een macht van tien. */
export function rondMaximum(waarde: number): number {
  if (waarde <= 0) return 1;
  const macht = Math.pow(10, Math.floor(Math.log10(waarde)));
  const deel = waarde / macht;
  const stap = deel <= 1 ? 1 : deel <= 2 ? 2 : deel <= 5 ? 5 : 10;
  return stap * macht;
}

/** Welke labels onder de x-as komen: hooguit `aantal`, gelijkmatig verdeeld, altijd de laatste. */
export function asLabels(labels: readonly string[], aantal: number): { index: number; label: string }[] {
  if (labels.length === 0) return [];
  const stap = Math.max(1, Math.ceil(labels.length / aantal));
  const uit: { index: number; label: string }[] = [];
  for (let i = 0; i < labels.length; i += stap) uit.push({ index: i, label: labels[i] });
  const laatste = labels.length - 1;
  if (uit[uit.length - 1].index !== laatste) {
    // Staat de voorlaatste te dicht op de laatste, dan wijkt die.
    if (laatste - uit[uit.length - 1].index < stap / 2) uit.pop();
    uit.push({ index: laatste, label: labels[laatste] });
  }
  return uit;
}

const getal = new Intl.NumberFormat("nl-NL");
export const toonGetal = (n: number): string => getal.format(n);
