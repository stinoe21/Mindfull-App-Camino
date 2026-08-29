// Inhoud die verschijnt in plaats van er ineens te staan.
//
// Designaudit 29 augustus 2026: niets in de app bewoog. Dit is de ene
// verschijn-beweging van het design system: opacity 0 naar 1 en 12 punten
// omhoog, 260 ms, ease-out. ScreenCanvas geeft elk kind een eigen vertraging
// van 60 ms, zodat een scherm opbouwt in plaats van knipt. Met `landing`
// komt het element ook van schaal 0.9 naar 1 met een spring: voor de vlieger
// op de uitkomst, die "landt".
//
// Alleen bij de eerste mount, nooit bij een re-render. Bij minder beweging
// staat alles meteen op zijn plek.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Animated, Easing, type StyleProp, type ViewStyle } from "react-native";

import { useMinderBeweging } from "./minderBeweging.ts";

export type VerschijnProps = {
  /** Vertraging in ms voor deze verschijning. */
  vertraging?: number;
  /** Schaal van 0.9 naar 1 met een spring, voor één landend element. */
  landing?: boolean;
  /**
   * De gap van de ouder. Rendert het kind niets (hoogte 0), dan trekt de
   * wrapper die gap weer in, zodat een leeg kind geen gat achterlaat.
   */
  gapOuder?: number;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

const DUUR = 260;
const AFSTAND = 12;

export function Verschijn({ vertraging = 0, landing = false, gapOuder = 0, style, children }: VerschijnProps) {
  const minder = useMinderBeweging();
  const voortgang = useRef(new Animated.Value(0)).current;
  const schaal = useRef(new Animated.Value(landing ? 0.9 : 1)).current;
  const [leeg, zetLeeg] = useState(false);

  useEffect(() => {
    if (minder) {
      voortgang.setValue(1);
      schaal.setValue(1);
      return;
    }
    const animaties = [
      Animated.timing(voortgang, { toValue: 1, duration: DUUR, delay: vertraging, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
    ];
    if (landing) {
      animaties.push(Animated.spring(schaal, { toValue: 1, delay: vertraging, speed: 12, bounciness: 6, useNativeDriver: true }));
    }
    const samen = Animated.parallel(animaties);
    samen.start();
    return () => samen.stop();
    // Alleen bij mount; een latere wijziging van minder zet de waarden direct.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minder]);

  return (
    <Animated.View
      onLayout={gapOuder ? (e) => zetLeeg(e.nativeEvent.layout.height === 0) : undefined}
      style={[
        style,
        leeg ? { marginTop: -gapOuder } : null,
        {
          opacity: voortgang,
          transform: [
            { translateY: voortgang.interpolate({ inputRange: [0, 1], outputRange: [AFSTAND, 0] }) },
            { scale: schaal },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
