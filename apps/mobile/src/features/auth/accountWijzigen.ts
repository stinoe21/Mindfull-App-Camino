// E-mailadres en wachtwoord wijzigen, voor wie is ingelogd.
//
// Tot 18 september 2026 kon dat nergens: wie een ander adres kreeg, moest een
// nieuw account maken. De schermen staan onder Profiel
// (app/(app)/profiel/email.tsx en wachtwoord.tsx).
//
// Wachtwoord: eerst het huidige wachtwoord controleren door er opnieuw mee in
// te loggen, dan pas het nieuwe zetten. Zo kan iemand die een ontgrendelde
// telefoon in handen krijgt het account niet overnemen.
//
// E-mailadres: Supabase mailt een bevestigingslink, en met "secure email
// change" aan (de standaard) naar het oude en het nieuwe adres. Pas als de
// links geopend zijn, geldt het nieuwe adres. De link komt terug in de app op
// PAD_EMAIL_GEWIJZIGD; dat pad valt onder `mentaleweerbericht://**` in de
// redirect-adressen van Supabase (docs/limieten-en-misbruik.md).
//
// Privacy: er wordt niets gelogd, ook geen foutmelding, want daar kan een
// e-mailadres in staan. Bestaat het nieuwe adres al, dan zegt het scherm
// alleen dat dit adres niet gebruikt kan worden.

import * as Linking from "expo-linking";

import { getSupabase } from "@/features/backend/client";

import { zetNieuwWachtwoord, type WachtwoordUitkomst } from "./accountHerstel";

/** Waar de link uit de wijzigingsmail de app opent; zie app/(app)/profiel/email-gewijzigd.tsx. */
export const PAD_EMAIL_GEWIJZIGD = "profiel/email-gewijzigd";

const isTeVaak = (fout: { status?: number; code?: string }): boolean =>
  fout.status === 429 || fout.code === "over_email_send_rate_limit" || fout.code === "over_request_rate_limit";

export type WijzigWachtwoordUitkomst = WachtwoordUitkomst | "huidigFout" | "teVaak";

export async function wijzigWachtwoord(huidig: string, nieuw: string): Promise<WijzigWachtwoordUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  try {
    const { data } = await client.auth.getSession();
    const email = data.session?.user.email;
    if (!email) return "geenSessie";
    const { error } = await client.auth.signInWithPassword({ email, password: huidig });
    if (error) {
      if (error.code === "invalid_credentials") return "huidigFout";
      return isTeVaak(error) ? "teVaak" : "mislukt";
    }
    return await zetNieuwWachtwoord(nieuw);
  } catch {
    return "geenVerbinding";
  }
}

export type WijzigEmailUitkomst = "verstuurd" | "geenVerbinding" | "geenSessie" | "zelfde" | "nietBruikbaar" | "teVaak" | "mislukt";

export async function wijzigEmail(nieuw: string): Promise<WijzigEmailUitkomst> {
  const client = getSupabase();
  if (!client) return "geenVerbinding";
  try {
    const { data } = await client.auth.getSession();
    const huidig = data.session?.user.email;
    if (!data.session) return "geenSessie";
    const adres = nieuw.trim();
    if (huidig && huidig.toLowerCase() === adres.toLowerCase()) return "zelfde";
    const { error } = await client.auth.updateUser({ email: adres }, { emailRedirectTo: Linking.createURL(PAD_EMAIL_GEWIJZIGD) });
    if (!error) return "verstuurd";
    if (error.code === "email_exists" || error.code === "email_address_invalid" || error.code === "email_address_not_authorized") return "nietBruikbaar";
    return isTeVaak(error) ? "teVaak" : "mislukt";
  } catch {
    return "geenVerbinding";
  }
}
