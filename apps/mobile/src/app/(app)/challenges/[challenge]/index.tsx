// Challenge, detail
//
// Een challenge met zijn onderdelen. Het huidige onderdeel staat open; de rest
// volgt in eigen tempo (weekbasis, geen dwang, no-guilt: productprincipes 4).
// De volledige inhoud zit in de mailreeks van MIND; de aanmeldknop verwijst
// daarnaar, precies zoals MIND vraagt (content/mind/LEESMIJ.md).

import * as Linking from "expo-linking";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { CHALLENGES } from "@/features/content/data/challenges";
import { aantalAfgerond, markeerAfgerond } from "@/features/content/voortgang";

export default function ChallengeDetail() {
  const router = useRouter();
  const { challenge: slug } = useLocalSearchParams<{ challenge: string }>();
  const challenge = CHALLENGES.find((c) => c.slug === slug);
  const [klaar, zetKlaar] = useState(0);

  useFocusEffect(
    useCallback(() => {
      if (challenge) zetKlaar(aantalAfgerond(challenge.slug));
    }, [challenge])
  );

  if (!challenge) {
    return (
      <ScreenCanvas state="default">
        <AppText rol="h1">Challenge niet gevonden</AppText>
        <AppText rol="body" kleur="secondary">Deze challenge bestaat niet of is verplaatst.</AppText>
        <Button label="Terug naar challenges" variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const totaal = challenge.dagen.length;
  const allesKlaar = klaar >= totaal;
  const huidig = allesKlaar ? null : challenge.dagen[klaar];

  const rondAf = () => {
    markeerAfgerond(challenge.slug, klaar + 1);
    router.push({ pathname: "/challenges/[challenge]/afgerond", params: { challenge: challenge.slug } });
  };

  return (
    <ScreenCanvas state="default">
      <View style={{ gap: space[2] }}>
        <Chip label={challenge.soort === "challenge" ? "CHALLENGE" : "THEMASPECIAL"} />
        <AppText rol="h1">{challenge.naam}</AppText>
        <AppText rol="bodySmall" kleur="secondary">{totaal + " onderdelen · MIND"}</AppText>
      </View>

      {huidig ? (
        <Card tone="white">
          <AppText rol="labelOverline" kleur="secondary">
            {"ONDERDEEL " + (klaar + 1) + " van " + totaal}
          </AppText>
          <AppText rol="h3">{huidig.titel}</AppText>
          {huidig.intro ? <AppText rol="body" kleur="secondary">{huidig.intro}</AppText> : null}
          <Button label="Onderdeel afronden" onPress={rondAf} />
        </Card>
      ) : (
        <Card tone="primary">
          <AppText rol="h3">Je hebt alle onderdelen gehad</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Mooi gedaan. Je kunt altijd terugbladeren of een andere challenge kiezen.
          </AppText>
        </Card>
      )}

      <View style={{ gap: space[3] }}>
        {challenge.dagen.map((dag, i) => (
          <Card key={dag.titel} tone="outline" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexShrink: 1 }}>
              <AppText rol="labelCaption" kleur="secondary">{"Onderdeel " + (i + 1)}</AppText>
              <AppText rol="bodyEmphasis">{dag.titel}</AppText>
            </View>
            {i < klaar ? <AppText rol="labelCaption" kleur="brand">Afgerond</AppText> : null}
          </Card>
        ))}
      </View>

      {challenge.aanmeld ? (
        <Card tone="white">
          <AppText rol="bodySmall" kleur="secondary">
            De volledige challenge ontvang je per e-mail van MIND, in je eigen tempo.
          </AppText>
          <Button
            label="Aanmelden bij MIND"
            variant="secondary"
            onPress={() => challenge.aanmeld && Linking.openURL(challenge.aanmeld)}
          />
        </Card>
      ) : null}

      <Button label="Terug naar challenges" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
