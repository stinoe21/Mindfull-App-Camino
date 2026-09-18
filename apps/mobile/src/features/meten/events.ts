// Het trackingplan: de vaste lijst gebeurtenissen die de app mag tellen.
//
// Besluit Stijn, 18 september 2026, zie docs/datamodel.md, sectie
// "Gebruikstotalen". Deze lijst hoort gelijk te lopen met de tabel
// usage_event in de database; events.test.ts vergelijkt ze. Een event erbij
// is dus altijd twee dingen: een regel hier en een migratie, en eerst een
// besluit in datamodel.md.
//
// Per event staat hier wat het item mag zijn:
//   "none"   geen item
//   "slug"   een vaste waarde uit de app: een slug, een routepatroon, een domein
//   [...]    precies een van deze waarden
//
// Wat hier NOOIT bij komt: het weerbeeld, de provincie, een zoekterm, een
// score, vrije tekst, of een tweede dimensie naast het item.

export const EVENTS = {
  // App en actieve gebruikers
  app_opened_day: ["ios", "android"],
  app_opened_week: "none",
  app_opened_month: "none",
  screen_viewed: "slug",
  // Onboarding
  onboarding_step_completed: ["leeftijd", "account", "naam", "voorkeuren", "toestemming"],
  account_created: ["email", "apple", "google"],
  weather_consent_answered: ["ja", "nee"],
  location_permission_answered: ["ja", "nee"],
  // Check-in en weerbericht
  checkin_started: "none",
  checkin_completed: "none",
  checkin_skipped: "none",
  weather_submit_result: ["gelukt", "al-bijgedragen", "mislukt", "niet-verbonden", "niet-ingelogd"],
  outcome_shared: "none",
  weather_map_opened: "none",
  // Tips
  topic_opened: "slug",
  article_opened: "slug",
  guide_opened: "slug",
  tip_saved: "slug",
  external_link_opened: "slug",
  search_performed: "none",
  search_no_results: "none",
  // Challenges, zelftests en quote
  challenge_started: "slug",
  challenge_day_completed: "slug",
  challenge_completed: "slug",
  selftest_started: "slug",
  selftest_completed: "slug",
  quote_shared: "none",
  // Hulplijn en toestemming
  helpline_opened: "none",
  helpline_channel_tapped: ["bellen", "whatsapp", "chat", "mail", "luisterlijn", "113"],
  weather_consent_withdrawn: "none",
} as const satisfies Record<string, "none" | "slug" | readonly string[]>;

export type EventCode = keyof typeof EVENTS;

type Soort<E extends EventCode> = (typeof EVENTS)[E];

/** Eén meting, zoals een scherm hem doorgeeft aan meet(). */
export type Meting = {
  [E in EventCode]: Soort<E> extends "none"
    ? { naam: E }
    : Soort<E> extends "slug"
      ? { naam: E; item: string }
      : Soort<E> extends readonly (infer I)[]
        ? { naam: E; item: I }
        : never;
}[EventCode];

// Dezelfde vorm als in log_usage(): kleine letters, cijfers en de tekens van
// een slug, een routepatroon of een domein. Hooguit 80 tekens.
const SLUG_VORM = /^[a-z0-9/(\[][a-z0-9/_.()\[\]+-]{0,79}$/;

/**
 * Het item zoals het geteld mag worden, of null als het niet bij het event
 * past. Een slug gaat eerst naar kleine letters. Alles wat niet past wordt
 * niet geteld, zodat er nooit vrije tekst in een teller kan komen.
 */
export function schoonItem(naam: string, item: string | undefined): string | null {
  // Niet Object.hasOwn: dat kent niet elke versie van Hermes.
  if (!Object.prototype.hasOwnProperty.call(EVENTS, naam)) return null;
  const soort: "none" | "slug" | readonly string[] = EVENTS[naam as EventCode];
  if (soort === "none") return item === undefined || item === "" ? "" : null;
  if (item === undefined) return null;
  if (soort === "slug") {
    const klein = item.toLowerCase();
    return SLUG_VORM.test(klein) ? klein : null;
  }
  return soort.includes(item) ? item : null;
}
