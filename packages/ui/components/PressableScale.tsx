// Indrukken met een lichte schaal in plaats van een opacity-flits.
//
// Besloten op 29 augustus 2026 in de designaudit: de enige interactie in de
// app was `opacity 0.7` bij indrukken, en dat leest als een knipperend
// element. Een spring naar 0.97 (knop) of 0.98 (grote kaart) voelt als een
// aanraking. Alleen de Animated API van React Native, geen dependency.
//
// Reduce motion: dan geen schaal, wel de opacity, zodat er altijd feedback is.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AccessibilityInfo, Animated, Pressable, type PressableProps, type StyleProp, type ViewStyle } from "react-native";

export type PressableScaleProps = Omit<PressableProps, "style" | "children"> & {
  /** Eindschaal bij indrukken. Standaard 0.98; knoppen gebruiken 0.97. */
  schaal?: number;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export function PressableScale({ schaal = 0.98, style, onPressIn, onPressOut, children, ...rest }: PressableScaleProps) {
  const waarde = useRef(new Animated.Value(1)).current;
  const [minderBeweging, zetMinderBeweging] = useState(false);

  useEffect(() => {
    let actief = true;
    AccessibilityInfo.isReduceMotionEnabled().then((v) => {
      if (actief) zetMinderBeweging(v);
    });
    const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", zetMinderBeweging);
    return () => {
      actief = false;
      sub.remove();
    };
  }, []);

  const naar = (doel: number) => {
    if (minderBeweging) {
      waarde.setValue(1);
      return;
    }
    Animated.spring(waarde, { toValue: doel, useNativeDriver: true, speed: 40, bounciness: 4 }).start();
  };

  return (
    <Pressable
      {...rest}
      onPressIn={(e) => {
        naar(schaal);
        onPressIn?.(e);
      }}
      onPressOut={(e) => {
        naar(1);
        onPressOut?.(e);
      }}
      style={({ pressed }) => ({ opacity: pressed && minderBeweging ? 0.8 : 1 })}
    >
      <Animated.View style={[style, { transform: [{ scale: waarde }] }]}>{children}</Animated.View>
    </Pressable>
  );
}
