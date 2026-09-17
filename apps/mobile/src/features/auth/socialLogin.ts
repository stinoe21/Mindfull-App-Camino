// Inloggen via Apple of Google, via Supabase.
//
// De route (Stijn, 17 september 2026): Supabase maakt de inlog-URL van de
// aanbieder, de app opent die in het inlogvenster van het systeem
// (ASWebAuthenticationSession op iOS, een Custom Tab op Android), en de
// aanbieder stuurt terug naar de app met een eenmalige code. Die code wisselt
// supabase-js in voor een sessie (PKCE, zie lib/supabase.ts). De app zelf
// kent geen client-ID of geheim van Apple of Google: die staan alleen in het
// Supabase-dashboard, onder Auth > Providers.
//
// Twee adressen moeten in Supabase bij Auth > URL Configuration > Redirect
// URLs staan, anders weigert Supabase de terugweg:
//   mentaleweerbericht://auth-callback     (de echte app)
//   exp://127.0.0.1:8081/--/auth-callback  (Expo Go op de simulator)
//
// Privacy: er wordt hier niets gelogd, ook geen foutmelding van de aanbieder,
// want daar kan een e-mailadres in staan. We vragen niet meer dan de
// standaard van Supabase: naam en e-mailadres (richtlijn 4.8 van Apple).

import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import { getSupabase } from "@/features/backend/client";

export type Aanbieder = "apple" | "google";

/**
 * ok: er is een sessie. afgebroken: het venster is gesloten zonder in te
 * loggen, en dat is geen fout. De andere twee krijgen een melding.
 */
export type SocialUitkomst = "ok" | "afgebroken" | "geenVerbinding" | "mislukt";

/** Het pad waar de aanbieder naar terugstuurt; zie app/auth-callback.tsx. */
export const TERUGWEG = "auth-callback";

export async function logInMet(aanbieder: Aanbieder): Promise<SocialUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";

  const terug = Linking.createURL(TERUGWEG);
  try {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: aanbieder,
      options: { redirectTo: terug, skipBrowserRedirect: true },
    });
    if (error || !data.url) return "mislukt";

    const resultaat = await WebBrowser.openAuthSessionAsync(data.url, terug);
    if (resultaat.type !== "success") return "afgebroken";

    const code = Linking.parse(resultaat.url).queryParams?.code;
    if (typeof code !== "string" || code.length === 0) return "mislukt";

    const { error: wisselFout } = await client.auth.exchangeCodeForSession(code);
    return wisselFout ? "mislukt" : "ok";
  } catch {
    return "mislukt";
  }
}
