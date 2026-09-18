// Challenge-voortgang: welke dagen van welke challenge af zijn.
//
// Alleen lokaal op het toestel, nooit naar de server. Dat is regel 3 van het
// funnel-voorstel in docs/datamodel.md: "account X doet challenge Y" is een
// gegeven over mentale gezondheid aan een persoon gekoppeld. De prijs is
// bekend: geen sync tussen toestellen, en bij herinstallatie is het weg.
//
// Tot 17 september 2026 stond de voortgang alleen in het geheugen, in
// afwachting van dat besluit. Gevolg: wie de app sloot, begon weer bij dag 1.
// Sindsdien (Stijn, gatenlijst 17 september) staat hij in AsyncStorage. Hij
// gaat mee met uitloggen en met account verwijderen (wisVoortgang), en hoort
// in het antwoord aan Paul over wat er lokaal staat, zie
// docs/privacy-besluiten.md.
//
// De schermen lezen synchroon uit het geheugen. laadVoortgang() vult dat
// geheugen één keer uit de opslag; roep hem aan voor je leest.
//
// Tempo, sinds 10 september 2026 (feedbacksessie MIND): één dag per
// kalenderdag. MIND richtte de mailreeks bewust wekelijks in omdat sneller te
// snel ging, en wil dat stappen geleidelijk vrijkomen en dat iemand bewust
// bevestigt klaar te zijn voor de volgende. Eén per dag is de voorlopige
// keuze, zie docs/scope.md; het precieze tempo ligt nog bij MIND.

import AsyncStorage from "@react-native-async-storage/async-storage";

import { naarOpslag, uitOpslag, type Voortgang } from "./voortgangVorm.ts";

const SLEUTEL = "mind.challengevoortgang";

let voortgang: Voortgang = new Map();
let geladen: Promise<void> | null = null;

const vandaag = () => new Date().toDateString();

/** Vult het geheugen uit de opslag. Eén keer per sessie; daarna direct klaar. */
export function laadVoortgang(): Promise<void> {
  if (!geladen) {
    geladen = AsyncStorage.getItem(SLEUTEL)
      .then((raw) => {
        voortgang = uitOpslag(raw);
      })
      .catch(() => {
        // Niet kunnen lezen mag de challenges niet blokkeren: dan begint het leeg.
      });
  }
  return geladen;
}

function bewaar(): void {
  AsyncStorage.setItem(SLEUTEL, naarOpslag(voortgang)).catch(() => {
    // Niet kunnen bewaren mag de flow niet blokkeren.
  });
}

export function isAfgerond(challenge: string, dag: number): boolean {
  return voortgang.get(challenge)?.dagen.has(dag) ?? false;
}

export function markeerAfgerond(challenge: string, dag: number): void {
  const huidig = voortgang.get(challenge) ?? { dagen: new Set<number>(), laatste: "" };
  huidig.dagen.add(dag);
  huidig.laatste = vandaag();
  voortgang.set(challenge, huidig);
  bewaar();
}

export function aantalAfgerond(challenge: string): number {
  return voortgang.get(challenge)?.dagen.size ?? 0;
}

/** De dag (jjjj-mm-dd) waarop iemand voor het laatst een dag afrondde; null als er nog niets is. */
export function laatsteActiviteit(challenge: string): string | null {
  return voortgang.get(challenge)?.laatste || null;
}

/** Is er vandaag al een dag van deze challenge afgerond? Dan wacht de volgende tot morgen. */
export function vandaagAlAfgerond(challenge: string): boolean {
  return voortgang.get(challenge)?.laatste === vandaag();
}

/** Wist de voortgang, in het geheugen en in de opslag. Bij uitloggen en account verwijderen. */
export async function wisVoortgang(): Promise<void> {
  voortgang = new Map();
  geladen = Promise.resolve();
  try {
    await AsyncStorage.removeItem(SLEUTEL);
  } catch {
    // stil
  }
}
