// Houvast: één onderwerp
//
// De compacte kennislaag van de app (Stijn, 10 september 2026, docs/scope.md):
// per onderwerp uitleg, tips en meer info. Het scherm zelf staat in
// features/content/OnderwerpScherm.tsx, omdat de losse gidsen van MIND
// (gids/[gids]) sinds 17 september 2026 precies dezelfde pagina tonen.
//
// Een link kan direct op een paneel openen (?paneel=helpen), en op een tip
// (&tip=2), bijvoorbeeld vanaf een bewaarde tip op Houvast.

import { useLocalSearchParams } from "expo-router";

import { OnderwerpScherm } from "@/features/content/OnderwerpScherm";
import { houvastVoor } from "@/features/content/houvast";

export default function HouvastOnderwerp() {
  const { onderwerp } = useLocalSearchParams<{ onderwerp: string }>();
  return <OnderwerpScherm onderwerp={houvastVoor(onderwerp)} />;
}
