// Uitloggen
//
// Tot 17 september 2026 logde de rij op Profiel direct uit, zonder vraag, en
// bleven naam, onderwerpen, provincie, toestemming en bewaarde tips op het
// toestel staan voor wie er daarna op inlogde. Nu gaat alles van deze persoon
// van het toestel (wisBijUitloggen), en omdat dat niet terug te halen is
// vraagt dit scherm het eerst. Je account blijft bestaan; dat staat erbij,
// want dat is het verschil met "Account verwijderen".

import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { getSupabase } from "@/features/backend/client";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { wisBijUitloggen } from "@/features/profiel/instellingen";

const nl = {
  titel: "Uitloggen",
  ondertitel: "Je account blijft bestaan.",
  uitleg:
    "Je naam, je onderwerpen, je bewaarde tips en hoe ver je bent met een challenge staan alleen op deze telefoon. Bij het uitloggen worden ze gewist, zodat een ander ze hier niet ziet.",
  knop: "Log uit",
  tochNiet: "Toch niet",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Log out",
    ondertitel: "Your account stays.",
    uitleg:
      "Your name, your topics, your saved tips and how far you are in a challenge only live on this phone. Logging out erases them, so nobody else sees them here.",
    knop: "Log out",
    tochNiet: "Never mind",
  },
};

export default function Uitloggen() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const [bezig, zetBezig] = useState(false);

  const logUit = async () => {
    zetBezig(true);
    // Lukt het afmelden bij de server niet (geen verbinding), dan gaat de
    // sessie in elk geval van dit toestel: uitloggen mag niet vastlopen.
    const client = getSupabase();
    if (client) {
      const { error } = await client.auth.signOut();
      if (error) await client.auth.signOut({ scope: "local" }).catch(() => undefined);
    }
    await wisBijUitloggen();
    zetBezig(false);
    // Zonder account kom je de app niet in: terug naar het begin.
    router.dismissAll();
    router.replace("/welkom");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>
      <AppText rol="body">{t("uitleg")}</AppText>
      <View style={{ gap: space[3] }}>
        <Button label={t("knop")} fullWidth bezig={bezig} onPress={logUit} />
        <Button label={t("tochNiet")} variant="link" fullWidth onPress={() => router.back()} />
      </View>
    </ScreenCanvas>
  );
}
