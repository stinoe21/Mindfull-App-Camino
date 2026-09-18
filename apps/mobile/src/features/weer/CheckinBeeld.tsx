// Het levende beeld van de check-in: alles wat meebeweegt met de schuif.
//
// Stijn, 17 september 2026: "het design van de vragenlijst mag echt veel
// beter, dynamischer". Het ontwerpprincipe stond er al (HERKOMST.md: "App
// beweegt mee. The app responds; it does not score"), maar het scherm deed er
// niets mee: je schoof, en er gebeurde niets. Nu antwoordt het scherm terwijl
// je schuift, op drie plekken:
//
// 1. De hero kleurt mee. Elke schuif duwt in bepaalWeerbeeld naar één
//    weerbeeld (guur naar regen, wind tegen naar wind, mist naar mist,
//    wisselvallig naar wolken). De hero toont precies die bestaande was uit
//    achtergronden.ts, sterker naarmate je die kant op schuift. Geen nieuwe
//    kleuren, en geen rood of groen: het is weer, geen oordeel.
// 2. De vlieger laat het weer zien met zijn gezicht: per weerwoord een eigen
//    uitdrukking (checkinGezichten.ts), op de zittende vlieger van Houvast.
//    De eerste versie liet hem bibberen, zwaaien en deinen; Stijn vond dat
//    te druk en te weinig zeggend, dus er loopt geen enkele lus meer. Wat
//    bleef is houding: hij leunt licht met de wind mee of ertegenin, en in
//    dichte mist vervaagt hij.
// 3. Het weerwoord verandert mee (WeerWoord): groot op het vel, zodat je
//    ziet waar je staat: "Dit is ongeveer mijn weer vandaag."
//
// Bij minder beweging vervalt alleen het korte opveren bij een nieuw woord of
// gezicht; kleur, gezicht en woord reageren dan nog wel, want dat is
// terugkoppeling en geen versiering.
// Er wordt hier niets opgeslagen of gelogd: de waarde blijft in het scherm.

import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, type ViewStyle } from "react-native";

import { AppText } from "@mind/ui/components/AppText";
import { HERO_WAS, type HeroWas } from "@mind/ui/components/achtergronden";
import { palette } from "@mind/ui";
import { useMinderBeweging } from "@mind/ui/components/minderBeweging";
import { VliegerMetGezicht } from "@mind/ui/components/VliegerOnderwerp";

import { CHECKIN_GEZICHTEN } from "./checkinGezichten";
import { weerzone } from "./teksten";

import type { SliderWaarden } from "./weerbeeld";

type Vraag = keyof SliderWaarden;

// De was aan de linker- en de rechterkant van elke schuif. Geen was betekent
// de heldere standaardhero.
const WASSEN: Record<Vraag, { links: HeroWas | null; rechts: HeroWas | null }> = {
  temperatuur: { links: HERO_WAS.regen, rechts: HERO_WAS.zonnig },
  wind: { links: HERO_WAS.wind, rechts: null },
  zicht: { links: HERO_WAS.mist, rechts: null },
  wisselvallig: { links: HERO_WAS.wolken, rechts: null },
};

/**
 * De laag over de hero. `schuif` loopt van 0 tot 1 met de slider mee,
 * `zichtbaar` van 0 tot 1 bij het wisselen van vraag.
 */
export function CheckinHeroLaag({ vraag, schuif, zichtbaar }: { vraag: Vraag; schuif: Animated.Value; zichtbaar: Animated.Value }) {
  const { links, rechts } = WASSEN[vraag];
  // Heeft de schuif aan beide kanten een was, dan is het midden helder en
  // komt elke was pas op in zijn eigen helft: twee wassen door elkaar geven
  // een grauwe tint. Met één was loopt die over de hele schuif.
  const gedeeld = links !== null && rechts !== null;
  const linksDekking = schuif.interpolate({ inputRange: gedeeld ? [0, 0.5, 1] : [0, 1, 2], outputRange: [1, 0, 0] });
  const rechtsDekking = schuif.interpolate({ inputRange: gedeeld ? [0, 0.5, 1] : [-1, 0, 1], outputRange: [0, 0, 1] });
  return (
    <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { opacity: zichtbaar }]}>
      {links ? (
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: linksDekking }]}>
          <LinearGradient colors={[links.boven, links.onder]} style={StyleSheet.absoluteFill} />
        </Animated.View>
      ) : null}
      {rechts ? (
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: rechtsDekking }]}>
          <LinearGradient colors={[rechts.boven, rechts.onder]} style={StyleSheet.absoluteFill} />
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}

// De vlieger van de check-in is blauw, zoals de mascotte zelf.
const VLIEGER_KLEUR = { lijf: palette.primary200, schaduw: palette.primary300 };

/** De vlieger met het gezicht van het weerwoord dat je aanwijst. */
export function CheckinVlieger({ vraag, waarde, woord, schuif, zichtbaar, hoogte = 112 }: { vraag: Vraag; waarde: number; woord: string; schuif: Animated.Value; zichtbaar: Animated.Value; hoogte?: number }) {
  const minder = useMinderBeweging();
  const zone = weerzone(waarde);
  // Een kort opveren zodra het gezicht wisselt, zodat je de wissel ziet.
  const tik = useRef(new Animated.Value(1)).current;
  const eerste = useRef(true);
  useEffect(() => {
    if (eerste.current) {
      eerste.current = false;
      return;
    }
    if (minder) return;
    tik.setValue(0.94);
    Animated.spring(tik, { toValue: 1, speed: 24, bounciness: 8, useNativeDriver: true }).start();
  }, [minder, tik, vraag, zone]);

  let houding: Animated.WithAnimatedObject<ViewStyle> = {};
  if (vraag === "wind") {
    // De vlieger kijkt naar links. Wind tegen (links op de schuif) duwt hem
    // achterover, dus met de klok mee; wind mee duwt hem licht naar voren.
    houding = { transform: [{ rotate: schuif.interpolate({ inputRange: [0, 0.5, 1], outputRange: ["6deg", "0deg", "-4deg"] }) }] };
  } else if (vraag === "zicht") {
    // In dichte mist zie je hem nog maar half.
    houding = { opacity: schuif.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] }) };
  }

  return (
    <Animated.View style={{ opacity: zichtbaar, transform: [{ translateY: zichtbaar.interpolate({ inputRange: [0, 1], outputRange: [10, 0] }) }] }}>
      <Animated.View style={houding}>
        <Animated.View style={{ transform: [{ scale: tik }] }}>
          {/* Zonder label: de schuif leest het weerwoord al voor (waardeTekst). */}
          <VliegerMetGezicht gezicht={CHECKIN_GEZICHTEN[vraag][zone]} kleur={VLIEGER_KLEUR} hoogte={hoogte} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}

/** Het weerwoord, groot op het vel. Veert kort op zodra het woord wisselt. */
export function WeerWoord({ woord }: { woord: string }) {
  const minder = useMinderBeweging();
  const tik = useRef(new Animated.Value(1)).current;
  const eerste = useRef(true);

  useEffect(() => {
    if (eerste.current) {
      eerste.current = false;
      return;
    }
    if (minder) return;
    tik.setValue(0);
    Animated.timing(tik, { toValue: 1, duration: 180, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
  }, [minder, tik, woord]);

  return (
    <View accessibilityLiveRegion="polite">
      <Animated.View style={{ opacity: tik.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }), transform: [{ translateY: tik.interpolate({ inputRange: [0, 1], outputRange: [6, 0] }) }] }}>
        <AppText rol="h1" kleur="brand">{woord}</AppText>
      </Animated.View>
    </View>
  );
}
