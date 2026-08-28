// De uitdrukkelijke toestemming voor het Mentale Weerbericht (art. 9 AVG).
//
// Tekst van Paul Bex, privacy officer van Mind, per mail van 28 augustus 2026;
// zie docs/privacy-besluiten.md. Woordelijk overnemen, niet parafraseren.
// De eisen van de Autoriteit Persoonsgegevens: vrij, specifiek, ondubbelzinnig,
// geïnformeerd en uitdrukkelijk. Daarom een expliciete keuze tussen ja en nee
// zonder vooraf aangevinkte optie, en geen schakelaar die standaard aan staat.
// Zolang er geen keuze is gemaakt, is er geen toestemming.
//
// Twee standen. In de onboarding (metUitleg) staat de volledige uitleg erbij,
// want daar wordt de toestemming geïnformeerd gegeven. Op Instellingen is de
// keuze al gemaakt en gaat het om intrekken of opnieuw geven: dan alleen de
// vraag en de twee opties, met de uitleg achter "Lees de uitleg".

import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Chip } from "@mind/ui/components/Chip";

export const TOESTEMMING_VRAAG =
  "Mag MIND jouw gekozen mentale “weerstatus” verwerken voor het anonieme, geaggregeerde Mentale Weerbericht?";

export const TOESTEMMING_UITLEG =
  "Het Mentale Weerbericht is een anonieme, collectieve samenvatting van ieders weerstatus, zichtbaar in de " +
  "app zodra genoeg mensen meedoen. We koppelen je ingevulde weerbericht niet aan je profiel en tonen nooit " +
  "individuele antwoorden. Je toestemming is vrijwillig en je kunt deze op elk moment intrekken via de " +
  "Instellingen van deze app. Wil je meer weten over hoe wij met je persoonlijke gegevens omgaan? Lees " +
  "hiervoor onze privacyverklaring.";

export const TOESTEMMING_JA = "Ja, ik geef expliciete toestemming voor het gebruik van mijn gegevens voor het Mentale Weer.";
export const TOESTEMMING_NEE = "Nee, ik geef geen toestemming.";

type Props = {
  /** null: nog geen keuze gemaakt, en dus geen toestemming. */
  waarde: boolean | null;
  onKies: (waarde: boolean) => void;
  /** Volledige uitleg altijd zichtbaar (onboarding). Standaard ingeklapt. */
  metUitleg?: boolean;
};

export function ToestemmingKeuze({ waarde, onKies, metUitleg = false }: Props) {
  const [uitgeklapt, zetUitgeklapt] = useState(false);
  const toonUitleg = metUitleg || uitgeklapt;

  return (
    <View style={{ gap: space[3] }}>
      <AppText rol={metUitleg ? "h3" : "bodyEmphasis"}>{TOESTEMMING_VRAAG}</AppText>
      {toonUitleg ? <AppText rol="bodySmall" kleur="secondary">{TOESTEMMING_UITLEG}</AppText> : null}
      <View style={{ gap: space[2] }} accessibilityRole="radiogroup">
        <Chip label={TOESTEMMING_JA} active={waarde === true} onPress={() => onKies(true)} />
        <Chip label={TOESTEMMING_NEE} active={waarde === false} onPress={() => onKies(false)} />
      </View>
      {!metUitleg ? (
        <Button
          label={uitgeklapt ? "Verberg de uitleg" : "Lees de uitleg"}
          variant="link"
          onPress={() => zetUitgeklapt(!uitgeklapt)}
        />
      ) : null}
    </View>
  );
}
