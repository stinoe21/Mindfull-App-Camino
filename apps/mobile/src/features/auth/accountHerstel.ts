// Wachtwoord vergeten en de bevestigingsmail.
//
// Tot 17 september 2026 was een vergeten wachtwoord een doodlopende weg
// (docs/scope.md noemde het zelf zo), en wie de bevestigingsmail miste kon hem
// niet opnieuw vragen. Dit bestand is de hele serverkant van beide; de
// schermen staan in app/(onboarding).
//
// Hoe het loopt: Supabase mailt een link. Die link komt terug in de app op een
// eigen pad, met een eenmalige code. De app wisselt die code in voor een sessie
// (PKCE, zie lib/supabase.ts): dat lukt alleen op het toestel dat de mail
// aanvroeg, want daar staat de verifier. Op een ander toestel geopend werkt de
// link dus niet, en het scherm zegt dat dan.
//
// De paden moeten in Supabase bij Auth > URL Configuration > Redirect URLs
// staan. `mentaleweerbericht://**` uit docs/limieten-en-misbruik.md dekt ze;
// voor Expo Go op de simulator ook `exp://127.0.0.1:8081/--/**`.
//
// Privacy: er wordt niets gelogd, ook geen foutmelding, want daar kan een
// e-mailadres in staan. En het antwoord op "bestaat dit adres?" is altijd
// hetzelfde: Supabase verklapt dat niet, en wij ook niet.

import * as Linking from "expo-linking";

import { getSupabase } from "@/features/backend/client";

/** Waar de link uit de herstelmail de app opent; zie app/(onboarding)/wachtwoord-nieuw.tsx. */
export const PAD_NIEUW_WACHTWOORD = "wachtwoord-nieuw";
/** Waar de link uit de bevestigingsmail de app opent; zie app/(onboarding)/mail-bevestigd.tsx. */
export const PAD_MAIL_BEVESTIGD = "mail-bevestigd";

/** Gelijk aan het dashboard van Supabase; zie docs/limieten-en-misbruik.md. */
export const MIN_WACHTWOORD = 8;

export type MailUitkomst = "verstuurd" | "geenVerbinding" | "teVaak" | "mislukt";

const isTeVaak = (fout: { status?: number; code?: string }): boolean =>
  fout.status === 429 || fout.code === "over_email_send_rate_limit" || fout.code === "over_request_rate_limit";

/** Een simpele vormcontrole: iets, een apenstaart, iets met een punt erin. Geen spaties. */
export function lijktOpEmail(invoer: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(invoer.trim());
}

export async function vraagHerstelmailAan(email: string): Promise<MailUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  try {
    const { error } = await client.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: Linking.createURL(PAD_NIEUW_WACHTWOORD),
    });
    if (!error) return "verstuurd";
    return isTeVaak(error) ? "teVaak" : "mislukt";
  } catch {
    return "geenVerbinding";
  }
}

export async function stuurBevestigingOpnieuw(email: string): Promise<MailUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  try {
    const { error } = await client.auth.resend({
      type: "signup",
      email: email.trim(),
      options: { emailRedirectTo: Linking.createURL(PAD_MAIL_BEVESTIGD) },
    });
    if (!error) return "verstuurd";
    return isTeVaak(error) ? "teVaak" : "mislukt";
  } catch {
    return "geenVerbinding";
  }
}

export type CodeUitkomst = "ok" | "geenVerbinding" | "ongeldig";

/** Wisselt de code uit een maillink in voor een sessie. */
export async function wisselCodeIn(code: string | undefined): Promise<CodeUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  if (!code) return "ongeldig";
  try {
    const { error } = await client.auth.exchangeCodeForSession(code);
    return error ? "ongeldig" : "ok";
  } catch {
    return "geenVerbinding";
  }
}

export type WachtwoordUitkomst = "ok" | "geenVerbinding" | "zelfde" | "teZwak" | "geenSessie" | "mislukt";

/** Zet het nieuwe wachtwoord. Kan alleen met de sessie uit de herstellink. */
export async function zetNieuwWachtwoord(wachtwoord: string): Promise<WachtwoordUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  try {
    const { data } = await client.auth.getSession();
    if (!data.session) return "geenSessie";
    const { error } = await client.auth.updateUser({ password: wachtwoord });
    if (!error) return "ok";
    if (error.code === "same_password") return "zelfde";
    if (error.code === "weak_password") return "teZwak";
    return "mislukt";
  } catch {
    return "geenVerbinding";
  }
}
