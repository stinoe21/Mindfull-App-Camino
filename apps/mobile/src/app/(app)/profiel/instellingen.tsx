// Instellingen
//
// Sinds 10 september 2026 (Stijn) staan alle instellingen op Profiel zelf:
// één pagina in plaats van een overzicht met doorverwijzingen naar een tweede
// scherm. Deze route blijft bestaan omdat de app op veel plekken "je kunt dit
// altijd wijzigen in Instellingen" belooft en ernaartoe linkt; hij brengt je
// naar Profiel.

import { Redirect } from "expo-router";

export default function Instellingen() {
  return <Redirect href="/profiel" />;
}
