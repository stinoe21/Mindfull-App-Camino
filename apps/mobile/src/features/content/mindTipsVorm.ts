// De tips die MIND vanuit het beheer in de app zet: de vorm, de controle op
// wat er binnenkomt, en waar ze in een onderwerp komen te staan.
//
// Puur, zonder opslag en zonder netwerk, zodat het te testen is (npm test) en
// houvast.ts en bewaard.ts het kunnen gebruiken. Het ophalen zit in
// mindTips.ts. Zie docs/datamodel.md, tabel content_tips.

import type { InhoudBlok } from "./InhoudBlokken.tsx";
import type { HouvastTip } from "./data/houvast.ts";

export type MindTip = { id: string; topic: string; tip: HouvastTip };

/**
 * Een tip van MIND krijgt een vaste positie in de pager, afgeleid van zijn id
 * en altijd vanaf 1000. De tips uit de app zelf tellen vanaf 0, met de
 * oefening als laatste, en daar mag niets tussen schuiven: een bewaarde tip
 * verwijst naar zijn positie. Trekt MIND een tip in, dan vervalt alleen die
 * ene verwijzing.
 */
export const MIND_VANAF = 1000;
export function positieVan(id: string): number {
  return MIND_VANAF + parseInt(id.replace(/-/g, "").slice(0, 7), 16);
}

const HTTPS = /^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/[^\s<>"]*)?$/i;
const tekstOk = (t: unknown, max: number): t is string => typeof t === "string" && t.trim().length > 0 && t.length <= max;

// Dezelfde vorm als de database toelaat. De app vertrouwt het antwoord niet
// blind: wat niet past valt weg, in plaats van dat een scherm iets onverwachts
// tekent.
function schoonBlok(blok: unknown): InhoudBlok | null {
  if (typeof blok !== "object" || blok === null) return null;
  const b = blok as Record<string, unknown>;
  const sleutels = Object.keys(b).sort().join(",");
  if (sleutels === "tekst" && tekstOk(b.tekst, 1500)) return { tekst: b.tekst };
  if (sleutels === "lijst" && Array.isArray(b.lijst) && b.lijst.length >= 1 && b.lijst.length <= 12 && b.lijst.every((p) => tekstOk(p, 300))) {
    return { lijst: b.lijst as string[] };
  }
  if (sleutels === "linkLabel,linkUrl" && tekstOk(b.linkLabel, 80) && tekstOk(b.linkUrl, 300) && HTTPS.test(b.linkUrl)) {
    return { linkLabel: b.linkLabel, linkUrl: b.linkUrl };
  }
  return null;
}

/** Het antwoord van published_tips(), teruggebracht tot wat de app mag tekenen. */
export function schoonAntwoord(antwoord: unknown): MindTip[] {
  if (typeof antwoord !== "object" || antwoord === null) return [];
  const tips = (antwoord as { tips?: unknown }).tips;
  if (!Array.isArray(tips)) return [];
  const uit: MindTip[] = [];
  for (const ruw of tips) {
    if (typeof ruw !== "object" || ruw === null) continue;
    const r = ruw as Record<string, unknown>;
    if (typeof r.id !== "string" || !/^[0-9a-f-]{36}$/i.test(r.id)) continue;
    if (typeof r.topic !== "string" || !/^[a-z0-9][a-z0-9-]{1,79}$/.test(r.topic)) continue;
    if (!tekstOk(r.title, 120) || !Array.isArray(r.body)) continue;
    const blokken = r.body.map(schoonBlok);
    // Eén blok dat niet past maakt de hele tip onbetrouwbaar: dan liever niets.
    if (blokken.length === 0 || blokken.some((b) => b === null)) continue;
    uit.push({ id: r.id, topic: r.topic, tip: { kop: r.title.trim(), blokken: blokken as InhoudBlok[] } });
  }
  return uit;
}

// Wat er nu geldt, in het geheugen. mindTips.ts vult dit bij het starten uit
// de lokale opslag en daarna uit de database.
let huidige: MindTip[] = [];

export function zetMindTips(tips: MindTip[]): void {
  huidige = tips;
}

/** De tips van MIND bij dit onderwerp, op volgorde van publiceren, met hun vaste positie. */
export function mindTipsVoor(topic: string): { positie: number; tip: HouvastTip }[] {
  return huidige.filter((t) => t.topic === topic).map((t) => ({ positie: positieVan(t.id), tip: t.tip }));
}
