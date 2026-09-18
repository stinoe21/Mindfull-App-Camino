// Een klein weericoon per weerbeeld: zon, wolk, mist, wind, regen.
//
// Gevraagd door Stijn op 10 september 2026 voor de kaart "Jouw weer vandaag"
// op Home: de tekst had een beeld nodig, en dat hoeft niet altijd de vlieger
// te zijn. Getekend in dezelfde dunne inktlijn als de vlieger en de
// navigatie-iconen (ronde uiteinden, één lijndikte), met een enkele vulling
// uit de weertinten. Frame 40 bij 40. Zelfde regel als de vlieger: er is
// geen goed of slecht weer, dus alle vijf zijn even vriendelijk.

import { View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import { palette } from "../tokens/tokens.ts";

export type WeerIcoonStaat = "zonnig" | "wolken" | "mist" | "wind" | "regen";

const LIJN = { stroke: palette.baseInk, strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// De wolk als één pad, hergebruikt door wolken en regen.
const WOLK = "M11 27 a5.5 5.5 0 0 1 1.2 -10.9 a7.5 7.5 0 0 1 14.4 -1.6 a5.8 5.8 0 0 1 2.4 11.3 Z";

const ICONEN: Record<WeerIcoonStaat, React.ReactElement> = {
  zonnig: (
    <>
      <Circle cx={20} cy={20} r={7} fill={palette.weatherSun} {...LIJN} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((hoek) => {
        const r = (hoek * Math.PI) / 180;
        const x1 = 20 + Math.cos(r) * 10.5;
        const y1 = 20 + Math.sin(r) * 10.5;
        const x2 = 20 + Math.cos(r) * 14;
        const y2 = 20 + Math.sin(r) * 14;
        return <Path key={hoek} d={`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`} {...LIJN} />;
      })}
    </>
  ),
  wolken: (
    <>
      <Path d={WOLK} fill={palette.weatherCloud} {...LIJN} />
    </>
  ),
  mist: (
    <>
      <Path d="M8 14 q4 -3 8 0 t8 0 t8 0" fill="none" {...LIJN} />
      <Path d="M10 21 q4 -3 8 0 t8 0 t6 0" fill="none" {...LIJN} />
      <Path d="M8 28 q4 -3 8 0 t8 0 t8 0" fill="none" {...LIJN} />
    </>
  ),
  wind: (
    <>
      <Path d="M7 16 h16 a3.5 3.5 0 1 0 -3.5 -3.5" fill="none" {...LIJN} />
      <Path d="M7 22 h22 a3.5 3.5 0 1 1 -3.5 3.5" fill="none" {...LIJN} />
      <Path d="M7 28 h11 a3 3 0 1 1 -3 3" fill="none" {...LIJN} />
    </>
  ),
  regen: (
    <>
      <Path d={WOLK.replace(/27/g, "23").replace("-10.9", "-9.4").replace("11.3", "9.8")} fill={palette.weatherCloud} {...LIJN} />
      <Path d="M14 28 l-2 5" fill="none" {...LIJN} stroke={palette.weatherRain} />
      <Path d="M21 28 l-2 5" fill="none" {...LIJN} stroke={palette.weatherRain} />
      <Path d="M28 28 l-2 5" fill="none" {...LIJN} stroke={palette.weatherRain} />
    </>
  ),
};

export type WeerIcoonProps = { staat: WeerIcoonStaat; hoogte?: number };

export function WeerIcoon({ staat, hoogte = 40 }: WeerIcoonProps) {
  return (
    <View style={{ width: hoogte, height: hoogte }} accessibilityLabel={"Weer, " + staat}>
      <Svg width={hoogte} height={hoogte} viewBox="0 0 40 40">
        {ICONEN[staat]}
      </Svg>
    </View>
  );
}
