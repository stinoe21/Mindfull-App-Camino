// Lokale instellingen: onboarding-status, voorkeuren en de twee consents.
//
// Interesses en voorkeuren zijn bewust ALLEEN lokaal, nooit per account op de
// server: zie het funnel-voorstel in docs/datamodel.md. De consent-teksten
// liggen bij Paul; hier staat alleen de structuur (twee apart intrekbare
// consents), zie docs/privacy-besluiten.md.

import AsyncStorage from "@react-native-async-storage/async-storage";

const SLEUTEL = "mind.instellingen";

export type Instellingen = {
  onboardingAfgerond: boolean;
  leeftijdBevestigd: boolean;
  voorkeuren: string[];
  /** Consent 1: de check-in telt anoniem mee in het landelijke weerbericht. */
  consentWeerbericht: boolean;
  /** Consent 2: voorwaarden en disclaimer geaccepteerd (grondslag overeenkomst). */
  consentVoorwaarden: boolean;
};

export const STANDAARD: Instellingen = {
  onboardingAfgerond: false,
  leeftijdBevestigd: false,
  voorkeuren: [],
  consentWeerbericht: false,
  consentVoorwaarden: false,
};

// De neutrale categorieen uit het funnel-voorstel in docs/datamodel.md:
// "waar wil je aan werken", geen diagnose-labels.
export const VOORKEUR_OPTIES = ["Ontspanning", "Beweging", "Verhalen van anderen", "Praktische tips"];

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
