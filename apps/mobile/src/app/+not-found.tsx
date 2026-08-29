// Route die niet bestaat.
//
// Dit is geen ontworpen scherm maar het vangnet eronder: zonder dit toont
// expo-router zijn eigen ontwikkelaarsfout aan een echte gebruiker.
// Vervangen zodra de systeemstaten ontworpen zijn, zie docs/design-system.md.

import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, space, type } from "@mind/ui";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  stackTitel: "Niet gevonden",
  titel: "Deze pagina bestaat niet",
  body: "Ga terug naar Home, daar staat jouw weer.",
  knop: "Naar Home",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    stackTitel: "Not found",
    titel: "This page doesn't exist",
    body: "Go back to the start, that's where your weather forecast is.",
    knop: "To Home",
  },
};

export default function NietGevonden() {
  const t = useVertaling(teksten);
  return (
    <>
      <Stack.Screen options={{ title: t("stackTitel") }} />
      <View style={styles.pagina}>
        <Text style={styles.titel}>{t("titel")}</Text>
        <Text style={styles.body}>{t("body")}</Text>
        <Link href="/dashboard" style={styles.knop}>
          <Text style={styles.knoptekst}>{t("knop")}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.surfaceBackground,
    paddingHorizontal: space[6],
    gap: space[3],
  },
  titel: { ...type.h1, color: colors.textPrimary },
  body: { ...type.body, color: colors.textSecondary },
  knop: {
    marginTop: space[4],
    alignSelf: "flex-start",
    backgroundColor: colors.ctaDefault,
    borderRadius: radius.pill,
    paddingVertical: space[3],
    paddingHorizontal: space[5],
  },
  knoptekst: { ...type.labelButton, color: colors.ctaText },
});
