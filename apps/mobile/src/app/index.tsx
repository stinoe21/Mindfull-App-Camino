// Startpunt.
//
// Hier hoort de keuze te komen tussen de onboarding en het dashboard, op basis
// van de sessie. Zolang er geen auth is, gaat de app direct naar het dashboard,
// zodat de flow te doorlopen is. De onboarding is bereikbaar via /welkom en via
// het kitchen sink-scherm.
//
// Specificatie: docs/scope.md

import { Redirect } from "expo-router";

export default function Start() {
  return <Redirect href="/dashboard" />;
}
