// Tijdelijk. Staat in elk routebestand dat nog niet gebouwd is.
//
// Waarom dit bestaat: zonder dit is een vers gekloonde repo een app die op elke
// route een leeg wit vlak toont, en dan weet niemand of de navigatie kapot is of
// het scherm nog moet komen. Zo is de hele userflow vanaf dag één te doorlopen.
//
// Dit is GEEN component van het design system. Hij verdwijnt vanzelf: zodra het
// laatste routebestand gevuld is, importeert niets hem meer en gaat dit bestand
// weg. Bouw er niets op voort.

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, radius, space, type } from "@mind/ui";

type Props = {
  titel: string;
  wat: string;
};

export function NogTeBouwen({ titel, wat }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={[
        styles.inhoud,
        { paddingTop: insets.top + space[6], paddingBottom: insets.bottom + space[6] },
      ]}
    >
      <Text style={styles.overline}>NOG TE BOUWEN</Text>
      <Text style={styles.titel}>{titel}</Text>
      <View style={styles.kaart}>
        <Text style={styles.body}>{wat}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: colors.surfaceBackground,
  },
  inhoud: {
    paddingHorizontal: space[6],
    gap: space[3],
  },
  overline: {
    ...type.labelOverline,
    color: colors.textSecondary,
  },
  titel: {
    ...type.h1,
    color: colors.textPrimary,
  },
  kaart: {
    backgroundColor: colors.surfaceCard,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderDefault,
    paddingVertical: space[5],
    paddingHorizontal: space[5],
  },
  body: {
    ...type.body,
    color: colors.textSecondary,
  },
});
