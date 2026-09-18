// Lokale instellingen: onboarding-status, voorkeuren en de twee consents.
//
// Interesses en voorkeuren zijn bewust ALLEEN lokaal, nooit per account op de
// server: zie het funnel-voorstel in docs/datamodel.md. De consent-teksten
// liggen bij Paul; hier staat alleen de structuur (twee apart intrekbare
// consents), zie docs/privacy-besluiten.md.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONDERWERPEN } from "../content/data/artikelen.ts";
import { wisVoortgang } from "../content/voortgang.ts";

const SLEUTEL = "mind.instellingen";

export type Instellingen = {
  onboardingAfgerond: boolean;
  leeftijdBevestigd: boolean;
  /**
   * Voornaam, alleen voor de begroeting. Blijft op het toestel: er is bewust
   * geen naamveld in het datamodel (docs/datamodel.md). Leeg is prima.
   */
  naam: string;
  voorkeuren: string[];
  /** Consent 1: de check-in telt anoniem mee in het landelijke weerbericht. */
  consentWeerbericht: boolean;
  /** Consent 2: voorwaarden en disclaimer geaccepteerd (grondslag overeenkomst). */
  consentVoorwaarden: boolean;
  /**
   * UI-taal (issue #47). Nederlands is de standaard sinds 17 september 2026.
   * "systeem" bestaat alleen nog voor wat eerder is bewaard en telt als
   * Nederlands, zie features/i18n/taal.ts. Bewust een losse literal-union en
   * geen import uit features/i18n.
   */
  taal: "systeem" | "nl" | "en";
  /**
   * Provincie, voor het mentale weer per provincie (feedbacksessie MIND,
   * verwerkt 10 september 2026). null is onbekend. Gaat
   * alleen mee als provincie bij het optellen van een check-in; nooit een
   * locatie. Sinds 14 september 2026 (Stijn) is zelf kiezen weg: een vrije
   * keuze maakte het te makkelijk om het beeld van een provincie te sturen.
   */
  provincie: string | null;
  /**
   * De locatie van het toestel mag gebruikt worden (sinds 13 september
   * 2026, met toestemming van het systeem, gevraagd in de onboarding). De
   * provincie wordt bij elke check-in opnieuw bepaald op het toestel; de
   * coördinaten worden nooit bewaard. Alleen als dit waar is telt de
   * provincie mee; een eerder zelf gekozen provincie (van voor 14 september
   * 2026) wordt genegeerd. Dit is een afspiegeling van de toestemming van de
   * telefoon, geen eigen instelling, en er is geen scherm voor in de app.
   */
  provincieViaLocatie: boolean;
};

export const STANDAARD: Instellingen = {
  onboardingAfgerond: false,
  leeftijdBevestigd: false,
  naam: "",
  voorkeuren: [],
  consentWeerbericht: false,
  consentVoorwaarden: false,
  taal: "nl",
  provincie: null,
  provincieViaLocatie: false,
};

// Dezelfde onderwerpen als het Naslagwerk, zodat een keuze hier direct
// bepaalt welke tips je als eerste ziet. Besloten na de feedback van Mind
// van 27 augustus 2026: een eigen vocabulaire ("Verhalen van anderen") schiep
// verkeerde verwachtingen en werkte nergens op door.
export const VOORKEUR_OPTIES: string[] = ONDERWERPEN;

// Lang genoeg voor elke voornaam, kort genoeg om geen verhaal te worden.
export const NAAM_MAX = 30;

export function schoonNaam(invoer: string): string {
  return invoer.replace(/\s+/g, " ").trim().slice(0, NAAM_MAX);
}

export async function leesInstellingen(): Promise<Instellingen> {
  try {
    const raw = await AsyncStorage.getItem(SLEUTEL);
    if (!raw) return STANDAARD;
    return { ...STANDAARD, ...(JSON.parse(raw) as Partial<Instellingen>) };
  } catch {
    return STANDAARD;
  }
}

export async function bewaarInstellingen(wijziging: Partial<Instellingen>): Promise<Instellingen> {
  const huidig = await leesInstellingen();
  const nieuw = { ...huidig, ...wijziging };
  try {
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify(nieuw));
  } catch {
    // Niet kunnen bewaren mag de flow niet blokkeren.
  }
  return nieuw;
}

export async function wisAlleLokaleData(): Promise<void> {
  // De challenge-voortgang staat ook in het geheugen; alleen de opslag legen
  // zou hem tot de volgende herstart laten staan.
  await wisVoortgang();
  try {
    await AsyncStorage.clear();
  } catch {
    // stil
  }
}

/**
 * Uitloggen: alles wat van deze persoon is gaat van het toestel, zodat een
 * volgend account op dezelfde telefoon niet de naam, de onderwerpen, de
 * toestemming, de bewaarde tips of de challenge-voortgang van de vorige ziet.
 * Alleen de taal blijft: die hoort bij het toestel, niet bij het account.
 *
 * Alles onder "mind." is van de app; de sessie van Supabase ruimt signOut zelf op.
 */
export async function wisBijUitloggen(): Promise<void> {
  const { taal } = await leesInstellingen();
  await wisVoortgang();
  try {
    const sleutels = (await AsyncStorage.getAllKeys()).filter((k) => k.startsWith("mind."));
    await AsyncStorage.multiRemove(sleutels);
    await AsyncStorage.setItem(SLEUTEL, JSON.stringify({ ...STANDAARD, taal }));
  } catch {
    // stil: niet kunnen wissen mag het uitloggen niet tegenhouden.
  }
}
