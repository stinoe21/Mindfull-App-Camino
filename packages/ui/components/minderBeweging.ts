// Eén plek die weet of de gebruiker minder beweging wil (iOS "Verminder
// beweging", Android "Animaties verwijderen"). Elke animatie in het design
// system vraagt het hier en valt dan terug op een stille variant.

import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

export function useMinderBeweging(): boolean {
  const [minder, zetMinder] = useState(false);
  useEffect(() => {
    let actief = true;
    AccessibilityInfo.isReduceMotionEnabled().then((v) => {
      if (actief) zetMinder(v);
    });
    const sub = AccessibilityInfo.addEventListener("reduceMotionChanged", zetMinder);
    return () => {
      actief = false;
      sub.remove();
    };
  }, []);
  return minder;
}
