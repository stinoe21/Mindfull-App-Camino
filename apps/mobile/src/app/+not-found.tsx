// Route die niet bestaat.
//
// Dit is geen ontworpen scherm maar het vangnet eronder: zonder dit toont
// expo-router zijn eigen ontwikkelaarsfout aan een echte gebruiker.
// Vervangen zodra de systeemstaten ontworpen zijn, zie docs/design-system.md.

import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { colors, radius, space, type } from "@mind/ui";

export default function NietGevonden() {
  return (
    <>
      <Stack.Screen options={{ title: "Niet gevonden" }} />
      <View style={styles.pagina}>
        <Text style={styles.titel}>Deze pagina bestaat niet</Text>
        <Text style={styles.body}>Ga terug naar het begin, daar staat je weerbericht.</Text>
        <Link href="/dashboard" style={styles.knop}>
          <Text style={styles.knoptekst}>Naar het dashboard</Text>
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
