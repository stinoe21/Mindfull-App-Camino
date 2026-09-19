// Het ene onderdeel in de root layout dat de tips van MIND ophaalt. Het
// tekent niets. Zie mindTips.ts.

import { useEffect } from "react";

import { useSessie } from "@/features/auth/sessie";

import { laadMindTips } from "./mindTips.ts";

export function MindTipsLader() {
  const { stand } = useSessie();
  useEffect(() => {
    if (stand === "laden") return;
    void laadMindTips(stand === "ingelogd");
  }, [stand]);
  return null;
}
