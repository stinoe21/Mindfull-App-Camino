// Online gids
//
// Een gids van MIND met praktische tips. MIND vroeg de gidsen in de
// feedbacksessie (verwerkt 10 september 2026) als het belangrijkste
// inhoudelijke onderdeel. Tot 17 september 2026 was dit één lange pagina met
// "Lees alle tips", tot twaalfduizend tekens onder elkaar (Stijn: "nog in de
// oude stijl", "die ultra lange kopie"). Nu toont een gids hetzelfde scherm
// als een onderwerp van Houvast: uitleg, de tips als kaarten, en meer info
// met de leespagina op wijzijnmind.nl en de gids per mail.
//
// Hoort de gids bij een onderwerp van Houvast (piekeren, stress), dan opent
// dat onderwerp; een losse gids (voor naasten, ADHD, PTSS) krijgt de vorm van
// een onderwerp via onderwerpUitGids in features/content/houvast.ts.

import { useLocalSearchParams } from "expo-router";

import { OnderwerpScherm } from "@/features/content/OnderwerpScherm";
import { houvastVoor, houvastVoorGids } from "@/features/content/houvast";

export default function GidsScherm() {
  const { gids } = useLocalSearchParams<{ gids: string }>();
  return <OnderwerpScherm onderwerp={houvastVoorGids(gids) ?? houvastVoor(gids)} />;
}
