// Het info-icoon: cirkel met een i, in de brandkleur. Gedeeld door de
// weerbericht-intro en de uitleg op het anonimiteitsscherm.
//
// Het icoon is hier getekend en staat bewust niet in de assetbibliotheek:
// die is gesloten (CLAUDE.md sectie 6) en de afwijking is expliciet
// goedgekeurd in de taak van 26 augustus 2026. Komt er later een icoon uit
// Figma, dan vervangt dat dit bestand.

import Svg, { Circle, Rect } from "react-native-svg";

import { colors, space } from "@mind/ui";

// Maten op de 4px-schaal: 20 buitenmaat, zodat het icoon optisch meeloopt
// met bodySmall ernaast.
export function InfoIcoon() {
  const maat = space[5];
  return (
    <Svg width={maat} height={maat} viewBox="0 0 20 20" fill="none">
      <Circle cx={10} cy={10} r={9} stroke={colors.brandDefault} strokeWidth={1.5} />
      <Circle cx={10} cy={6} r={1.25} fill={colors.brandDefault} />
      <Rect x={9} y={8.75} width={2} height={6} rx={1} fill={colors.brandDefault} />
    </Svg>
  );
}
