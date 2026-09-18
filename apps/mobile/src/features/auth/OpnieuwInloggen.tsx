// De rustige regel voor wie de sessie kwijt is terwijl de app nog van hem is:
// de onboarding is afgerond, maar Supabase kent de sessie niet meer (lang
// niet gebruikt, of elders uitgelogd). Niemand wordt de app uitgezet. Tips,
// challenges en je eigen weer werken gewoon door; alleen meetellen in het
// landelijke weer vraagt de sessie terug.
//
// Toont niets zolang de stand onbekend is: zonder netwerk is niet te zeggen of
// de sessie weg is, en dan zou de kaart verschijnen en weer verdwijnen.
//
// De zin is dezelfde als op de uitkomst van de check-in.

import { useRouter } from "expo-router";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";

import { useSessie } from "@/features/auth/sessie";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  uitleg: "Je bent niet ingelogd. Je weer telt nu niet mee in het mentale weer van Nederland.",
  inloggen: "Inloggen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    uitleg: "You are not logged in. Your weather does not count towards the mental weather of the Netherlands right now.",
    inloggen: "Log in",
  },
};

export function OpnieuwInloggen() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { stand } = useSessie();
  if (stand !== "uitgelogd") return null;
  return (
    <Card tone="sun" style={{ gap: space[3], alignItems: "flex-start" }}>
      <AppText rol="body">{t("uitleg")}</AppText>
      <Button label={t("inloggen")} variant="secondary" onPress={() => router.push({ pathname: "/inloggen", params: { stand: "inloggen" } })} />
    </Card>
  );
}
