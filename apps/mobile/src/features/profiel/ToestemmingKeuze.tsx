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

import { colors, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { PressableScale } from "@mind/ui/components/PressableScale";

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

// Eén keuzerij: een rondje links dat zich vult bij keuze, de tekst ernaast.
// Leest als een formulier in plaats van als twee chips met een lange zin.
function KeuzeRij({ label, gekozen, onPress }: { label: string; gekozen: boolean; onPress: () => void }) {
  return (
    <PressableScale
      accessibilityRole="radio"
      accessibilityState={{ checked: gekozen }}
      onPress={onPress}
      schaal={0.99}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: space[3],
        paddingVertical: space[3],
        paddingHorizontal: space[4],
        borderRadius: radius.md,
        borderWidth: 1,
        borderColor: gekozen ? colors.brandDefault : colors.borderDefault,
        backgroundColor: gekozen ? colors.brandSubtle : colors.surfaceCard,
      }}
    >
      <View
        style={{
          width: space[5],
          height: space[5],
          borderRadius: radius.pill,
          borderWidth: 2,
          borderColor: gekozen ? colors.brandDefault : colors.borderDefault,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gekozen ? <View style={{ width: space[3], height: space[3], borderRadius: radius.pill, backgroundColor: colors.brandDefault }} /> : null}
      </View>
      <AppText rol={gekozen ? "bodyEmphasis" : "body"} style={{ flexShrink: 1 }}>{label}</AppText>
    </PressableScale>
  );
}

export function ToestemmingKeuze({ waarde, onKies, metUitleg = false }: Props) {
  const [uitgeklapt, zetUitgeklapt] = useState(false);
  const toonUitleg = metUitleg || uitgeklapt;

  return (
    <View style={{ gap: space[3] }}>
      {/* De vraag als vette bodytekst, niet als kop: het is een formulierveld. */}
      <AppText rol="bodyEmphasis">{TOESTEMMING_VRAAG}</AppText>
      {toonUitleg ? <AppText rol="bodySmall" kleur="secondary">{TOESTEMMING_UITLEG}</AppText> : null}
      <View style={{ gap: space[2] }} accessibilityRole="radiogroup">
        <KeuzeRij label={TOESTEMMING_JA} gekozen={waarde === true} onPress={() => onKies(true)} />
        <KeuzeRij label={TOESTEMMING_NEE} gekozen={waarde === false} onPress={() => onKies(false)} />
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
