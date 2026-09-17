// De uitdrukkelijke toestemming voor het Mentale Weerbericht (art. 9 AVG).
//
// De eerste tekst kwam van Paul Bex, privacy officer van MIND (mail van
// 27 augustus 2026, zie docs/privacy-besluiten.md). Hij schreef erbij: "Voel
// je vrij om aanpassingen te maken als jullie dat beter lijkt." Sinds
// 17 september 2026 (Stijn) staat hier daarom een versie in gewone taal:
// zonder "geaggregeerde", "weerstatus" en "verwerken", met Profiel in plaats
// van Instellingen (die pagina bestaat niet meer), en met de zin erbij dat
// wat al is meegeteld in het totaal blijft staan. Paul moet deze versie nog
// zien; wijzig hem daarna niet zonder hem.
//
// Wat niet mag veranderen zijn de eisen van de Autoriteit Persoonsgegevens: vrij, specifiek, ondubbelzinnig,
// geïnformeerd en uitdrukkelijk. Daarom een expliciete keuze tussen ja en nee
// zonder vooraf aangevinkte optie, en geen schakelaar die standaard aan staat.
// Zolang er geen keuze is gemaakt, is er geen toestemming.
//
// Sinds 10 september 2026 (Stijn): ja en nee zijn twee aanvinkvakjes van
// dezelfde vorm als de voorwaarden (KeuzeVak), zodat de twee toestemmingen
// er als één formulier uitzien. Ze sluiten elkaar uit; een schermlezer hoort
// dat via de rol "radio".
//
// De uitleg van Paul staat achter "Lees de uitleg", direct onder de vraag en
// dus vóór de keuze: één tik. Tot 17 september 2026 stond hij
// in de onboarding voluit op het scherm; Stijn, naast de onboarding van
// Ommetje: "niet lappen tekst, die staan in de privacyverklaring". De vraag
// zelf noemt al wie het verwerkt en waarvoor, en dat is de eerste laag van
// een gelaagde privacymelding. Paul moet deze vorm nog zien.

import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";

export const TOESTEMMING_VRAAG = "Mag MIND jouw weer anoniem meetellen in het mentale weer van Nederland?";

export const TOESTEMMING_UITLEG =
  "Het mentale weer van Nederland is een anoniem totaal van ieders weer. Je ziet het in de app zodra genoeg " +
  "mensen meedoen. We koppelen jouw weer niet aan je account en laten nooit het antwoord van één persoon zien. " +
  "Wat al is meegeteld blijft in het totaal staan, en daar staat niets in dat naar jou wijst. Je toestemming is " +
  "vrijwillig en je kunt haar altijd intrekken via Profiel. Meer weten? Lees onze privacyverklaring.";

// Uitdrukkelijk: het woord toestemming en het doel staan allebei in het ja.
export const TOESTEMMING_JA = "Ja, ik geef toestemming om mijn weer anoniem mee te tellen in het mentale weer van Nederland.";
export const TOESTEMMING_NEE = "Nee, ik geef geen toestemming.";

type Props = {
  /** null: nog geen keuze gemaakt, en dus geen toestemming. */
  waarde: boolean | null;
  onKies: (waarde: boolean) => void;
};

export function ToestemmingKeuze({ waarde, onKies }: Props) {
  const [uitgeklapt, zetUitgeklapt] = useState(false);

  return (
    <View style={{ gap: space[2] }}>
      {/* De vraag als vette bodytekst, niet als kop: het is een formulierveld. */}
      <AppText rol="bodyEmphasis">{TOESTEMMING_VRAAG}</AppText>
      <View style={{ alignItems: "flex-start" }}>
        <Button
          label={uitgeklapt ? "Verberg de uitleg" : "Lees de uitleg"}
          variant="link"
          onPress={() => zetUitgeklapt(!uitgeklapt)}
        />
      </View>
      {uitgeklapt ? <AppText rol="bodySmall" kleur="secondary">{TOESTEMMING_UITLEG}</AppText> : null}
      <View accessibilityRole="radiogroup">
        <KeuzeVak rol="radio" label={TOESTEMMING_JA} gekozen={waarde === true} onPress={() => onKies(true)} />
        <KeuzeVak rol="radio" label={TOESTEMMING_NEE} gekozen={waarde === false} onPress={() => onKies(false)} />
      </View>
    </View>
  );
}
