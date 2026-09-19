// De tips van MIND: de vorm, het omzetten tussen wat een redacteur typt en de
// blokken die de app tekent, en de aanroepen naar de database. Elke aanroep is
// een functie die eerst de rol controleert; het beheer kan de tabel zelf niet
// lezen of schrijven. Zie docs/datamodel.md, tabel content_tips.

import { supabase } from "./supabase.ts";

export type Blok = { tekst: string } | { lijst: string[] } | { linkLabel: string; linkUrl: string };
export type Status = "concept" | "gepubliceerd" | "ingetrokken";
export type Tip = { id: string; topic: string; title: string; body: Blok[]; status: Status; updated_at: string; published_at: string | null };

/** Wat de redacteur invult: één tekstvak en een optionele link. */
export type Invoer = { topic: string; title: string; tekst: string; linkLabel: string; linkUrl: string };

export const LEEG: Invoer = { topic: "", title: "", tekst: "", linkLabel: "", linkUrl: "" };

/**
 * Van het tekstvak naar blokken. Een lege regel begint een nieuwe alinea, en
 * een stuk waarvan elke regel met een streepje begint wordt een opsomming.
 */
export function naarBlokken(invoer: Invoer): Blok[] {
  const blokken: Blok[] = [];
  for (const stuk of invoer.tekst.split(/\n\s*\n/)) {
    const regels = stuk.split("\n").map((r) => r.trim()).filter(Boolean);
    if (regels.length === 0) continue;
    if (regels.every((r) => /^[-*•]\s+/.test(r))) blokken.push({ lijst: regels.map((r) => r.replace(/^[-*•]\s+/, "")) });
    else blokken.push({ tekst: regels.join(" ") });
  }
  if (invoer.linkLabel.trim() && invoer.linkUrl.trim()) blokken.push({ linkLabel: invoer.linkLabel.trim(), linkUrl: invoer.linkUrl.trim() });
  return blokken;
}

export function naarInvoer(tip: Tip): Invoer {
  const link = tip.body.find((b): b is { linkLabel: string; linkUrl: string } => "linkUrl" in b);
  const tekst = tip.body
    .map((b) => ("tekst" in b ? b.tekst : "lijst" in b ? b.lijst.map((p) => "- " + p).join("\n") : null))
    .filter((s): s is string => s !== null)
    .join("\n\n");
  return { topic: tip.topic, title: tip.title, tekst, linkLabel: link?.linkLabel ?? "", linkUrl: link?.linkUrl ?? "" };
}

export type Uitkomst<T> = { ok: true; waarde: T } | { ok: false; melding: string };

// De database zegt in gewone taal wat er mis is met de inhoud (22023) of de
// handeling (P0001, P0002); alles daarbuiten wordt een algemene zin.
function melding(fout: { code?: string; message: string }): string {
  if (fout.code === "42501") return "Je rol staat dit niet toe. Schrijven en publiceren kan met de rol redacteur.";
  if (fout.code === "22023" || fout.code === "P0001" || fout.code === "P0002") return fout.message.charAt(0).toUpperCase() + fout.message.slice(1) + ".";
  return "Dat lukte niet. Controleer je verbinding en probeer het opnieuw.";
}

export async function haalTips(): Promise<Uitkomst<Tip[]>> {
  if (!supabase) return { ok: false, melding: "De omgeving is niet ingevuld." };
  const { data, error } = await supabase.rpc("admin_tips_list");
  if (error) return { ok: false, melding: melding(error) };
  return { ok: true, waarde: (data ?? []) as unknown as Tip[] };
}

export async function bewaarTip(id: string | null, invoer: Invoer): Promise<Uitkomst<string>> {
  if (!supabase) return { ok: false, melding: "De omgeving is niet ingevuld." };
  const { data, error } = await supabase.rpc("admin_tip_save", {
    // De functie maakt een nieuwe tip als p_id leeg is; de gegenereerde types kennen daar geen null.
    p_id: id as string,
    p_topic: invoer.topic,
    p_title: invoer.title,
    p_body: naarBlokken(invoer),
  });
  if (error) return { ok: false, melding: melding(error) };
  return { ok: true, waarde: data as string };
}

export async function zetStatus(id: string, status: Status): Promise<Uitkomst<null>> {
  if (!supabase) return { ok: false, melding: "De omgeving is niet ingevuld." };
  const { error } = await supabase.rpc("admin_tip_set_status", { p_id: id, p_status: status });
  return error ? { ok: false, melding: melding(error) } : { ok: true, waarde: null };
}

export async function gooiWeg(id: string): Promise<Uitkomst<null>> {
  if (!supabase) return { ok: false, melding: "De omgeving is niet ingevuld." };
  const { error } = await supabase.rpc("admin_tip_delete", { p_id: id });
  return error ? { ok: false, melding: melding(error) } : { ok: true, waarde: null };
}
