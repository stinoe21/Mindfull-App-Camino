// Lokale instellingen: onboarding-status, voorkeuren en de twee consents.
//
// Interesses en voorkeuren zijn bewust ALLEEN lokaal, nooit per account op de
// server: zie het funnel-voorstel in docs/datamodel.md. De consent-teksten
// liggen bij Paul; hier staat alleen de structuur (twee apart intrekbare
// consents), zie docs/privacy-besluiten.md.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ONDERWERPEN } from "../content/data/artikelen.ts";

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
};

export const STANDAARD: Instellingen = {
  onboardingAfgerond: false,
  leeftijdBevestigd: false,
  naam: "",
  voorkeuren: [],
  consentWeerbericht: false,
  consentVoorwaarden: false,
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
  try {
    await AsyncStorage.clear();
  } catch {
    // stil
  }
}
