// De challenge op Home, direct onder de check-in.
//
// Stijn, 17 september 2026: een lopende challenge is de sterkste reden om
// terug te komen, en die stond nergens op Home. Challenges waren er op
// 29 augustus 2026 juist af gehaald omdat ze een eigen tab kregen; dit blok
// is geen tweede overzicht maar één rij: waar je mee bezig bent, of, als
// je nergens mee bezig bent, één voorstel dat bij je onderwerpen past.
//
// Een rij op het vel en geen gevulde kaart (Stijn, 17 september 2026): met
// de kaart van de check-in erboven waren het twee vakken met dezelfde bouw
// onder elkaar. De check-in blijft de enige kaart bovenaan. De voortgangsbalk
// staat op de tab Challenges; hier volstaat "Dag 3 van 5".
//
// Geen beloning en geen reeks (productprincipes 4): de kaart zegt welke dag
// klaarstaat en hoeveel dagen er zijn, net als de tab Challenges. Na een
// afgeronde dag komt de volgende morgen vrij; dat zegt de kaart dan ook.
// Alles is afgerond: geen kaart.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { colors } from "@mind/ui";
import { LijstRij } from "@mind/ui/components/LijstRij";
import { NavIcoonChallenges } from "@mind/ui/components/navIconen";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

import { ONDERWERP_PER_CHALLENGE } from "./challengeOnderwerp";
import { CHALLENGES, type Challenge } from "./data/challenges";
import { aantalAfgerond, laadVoortgang, laatsteActiviteit, vandaagAlAfgerond } from "./voortgang";

const nl = {
  bezigOverline: "JOUW CHALLENGE",
  // Niet "voor jou": dat staat er vlak onder al bij Houvast (Stijn, 17 september 2026).
  voorstelOverline: "BEGIN EEN CHALLENGE",
  dagTitel: "Dag {x} van {y}: {titel}",
  morgen: "Dag {x} staat morgen klaar.",
  dagen: "{n} dagen, elke dag een kleine stap.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    bezigOverline: "YOUR CHALLENGE",
    voorstelOverline: "START A CHALLENGE",
    dagTitel: "Day {x} of {y}: {titel}",
    morgen: "Day {x} will be ready tomorrow.",
    dagen: "{n} days, one small step a day.",
  },
};

// Maat van het tab-icoon in navIconen (figma 378:1557), en hoe groot het hier staat.
const ICOON_B = 41;
const ICOON_H = 33;
const ICOON_SCHAAL = 1.3;

type Keuze = { challenge: Challenge; klaar: number; wacht: boolean };

/** De challenge waar iemand mee bezig is (de laatst aangeraakte), anders een voorstel. */
export function kiesChallenge(voorkeuren: string[]): Keuze | null {
  const open = CHALLENGES.filter((c) => aantalAfgerond(c.slug) < c.dagen.length);
  const bezig = open
    .filter((c) => aantalAfgerond(c.slug) > 0)
    .sort((a, b) => (laatsteActiviteit(b.slug) ?? "").localeCompare(laatsteActiviteit(a.slug) ?? ""))[0];
  const gekozen =
    bezig ??
    open.find((c) => c.soort === "challenge" && voorkeuren.includes(ONDERWERP_PER_CHALLENGE[c.slug] ?? "")) ??
    open.find((c) => voorkeuren.includes(ONDERWERP_PER_CHALLENGE[c.slug] ?? "")) ??
    open.find((c) => c.soort === "challenge") ??
    open[0];
  if (!gekozen) return null;
  return { challenge: gekozen, klaar: aantalAfgerond(gekozen.slug), wacht: vandaagAlAfgerond(gekozen.slug) };
}

export function ChallengeOpHome({ voorkeuren }: { voorkeuren: string[] }) {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [keuze, zetKeuze] = useState<Keuze | null>(null);

  // Bij elke focus opnieuw: je komt hier terug vanaf een afgeronde dag.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      laadVoortgang().then(() => {
        if (actief) zetKeuze(kiesChallenge(voorkeuren));
      });
      return () => {
        actief = false;
      };
    }, [voorkeuren])
  );

  if (!keuze) return null;
  const { challenge, klaar, wacht } = keuze;
  const totaal = challenge.dagen.length;
  const bezig = klaar > 0;
  const volgende = Math.min(klaar + 1, totaal);

  const regel = !bezig
    ? t("dagen").replace("{n}", String(totaal))
    : wacht
      ? t("morgen").replace("{x}", String(volgende))
      : t("dagTitel").replace("{x}", String(volgende)).replace("{y}", String(totaal)).replace("{titel}", challenge.dagen[volgende - 1]?.titel ?? "");

  return (
    <LijstRij
      laatste
      label={bezig ? t("bezigOverline") : t("voorstelOverline")}
      titel={challenge.naam}
      meta={regel}
      onPress={() => router.push({ pathname: "/challenges/[challenge]", params: { challenge: challenge.slug } })}
      // Het bergje van de tab Challenges, geen vlieger: die staat al in de
      // kaart met je weer en in de rij van Tips eronder, en drie soorten
      // vliegers onder elkaar stond gek (Stijn, 17 september 2026). Het icoon
      // is 41 bij 33 getekend en schaalt hier als geheel mee.
      beeld={
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ width: ICOON_B * ICOON_SCHAAL, height: ICOON_H * ICOON_SCHAAL }}>
          <View style={{ width: ICOON_B, height: ICOON_H, transform: [{ scale: ICOON_SCHAAL }], transformOrigin: "top left" }}>
            <NavIcoonChallenges kleur={colors.brandDefault} />
          </View>
        </View>
      }
    />
  );
}
