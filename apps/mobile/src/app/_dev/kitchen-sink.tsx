// Kitchen sink. Alleen voor onszelf, dit scherm hoort nooit in de userflow.
//
// Twee taken:
//
// 1. Elke component in AL zijn states laten zien. Dat deel is nog leeg, want
//    packages/ui/components is nog leeg. Zodra je een component bouwt, zet je
//    hem hier neer met al zijn varianten. Dat is onderdeel van "af", zie
//    CLAUDE.md sectie 6.
// 2. De tokens tonen zoals ze op een echt toestel uitvallen, en elke route
//    bereikbaar maken. Dat deel werkt nu al, en het is meteen de controle of de
//    lettertypes goed geladen zijn: staat "Averia" hier in een schreefloos
//    lettertype, dan is er iets mis met src/theme/fonts.ts.

import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, palette, radius, space, type } from "@mind/ui";

const ROUTES = [
  ["Onboarding: welkom", "/welkom"],
  ["Onboarding: leeftijd 16+", "/leeftijd"],
  ["Onboarding: inloggen", "/inloggen"],
  ["Onboarding: voorkeuren", "/voorkeuren"],
  ["Onboarding: anonimiteit", "/anonimiteit"],
  ["Dashboard", "/dashboard"],
  ["Check-in stap 1", "/check-in/1"],
  ["Check-in bevestigd", "/check-in/bevestigd"],
  ["Check-in uitkomst", "/check-in/uitkomst"],
  ["Weerbericht van Nederland", "/weerbericht"],
  ["Naslagwerk", "/naslagwerk"],
  ["Challenges", "/challenges"],
  ["Profiel", "/profiel"],
  ["Instellingen", "/profiel/instellingen"],
  ["Account verwijderen", "/profiel/account-verwijderen"],
  ["Hulplijn", "/hulplijn"],
] as const;

const WEER = ["weatherSun", "weatherCloud", "weatherRain", "weatherStorm", "weatherMist"] as const;

export default function KitchenSink() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={[
        styles.inhoud,
        { paddingTop: insets.top + space[6], paddingBottom: insets.bottom + space[12] },
      ]}
    >
      <Text style={styles.h1}>Kitchen sink</Text>

      <Kop>Typeschaal</Kop>
      <View style={styles.blok}>
        {(Object.keys(type) as (keyof typeof type)[]).map((rol) => (
          <View key={rol} style={styles.regel}>
            <Text style={styles.rolnaam}>{rol}</Text>
            <Text style={[type[rol], styles.voorbeeld]}>Hoe is je weer vandaag?</Text>
          </View>
        ))}
      </View>

      <Kop>Semantische kleuren</Kop>
      <Text style={styles.note}>Dit is wat componentcode gebruikt.</Text>
      <View style={styles.stalen}>
        {(Object.keys(colors) as (keyof typeof colors)[]).map((naam) => (
          <Staal key={naam} naam={naam} kleur={colors[naam]} />
        ))}
      </View>

      <Kop>Weertinten</Kop>
      <Text style={styles.note}>
        Genoemd naar het weer, nooit naar een waardering. Er is geen goed of slecht weer.
      </Text>
      <View style={styles.stalen}>
        {WEER.map((naam) => (
          <Staal key={naam} naam={naam} kleur={palette[naam]} />
        ))}
      </View>

      <Kop>Componenten</Kop>
      <View style={styles.leeg}>
        <Text style={styles.body}>
          Nog geen. packages/ui/components is leeg. Bouw je er een, zet hem hier neer met al
          zijn states. Volgorde staat in docs/van-ontwerp-naar-app.md deel 5.
        </Text>
      </View>

      <Kop>Alle schermen</Kop>
      {ROUTES.map(([label, href]) => (
        <Link key={href} href={href} style={styles.link}>
          <Text style={styles.linktekst}>{label}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

function Kop({ children }: { children: string }) {
  return <Text style={styles.kop}>{children}</Text>;
}

function Staal({ naam, kleur }: { naam: string; kleur: string }) {
  return (
    <View style={styles.staal}>
      <View style={[styles.vlak, { backgroundColor: kleur }]} />
      <Text style={styles.staalnaam}>{naam}</Text>
      <Text style={styles.staalwaarde}>{kleur}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: colors.surfaceBackground },
  inhoud: { paddingHorizontal: space[6], gap: space[3] },
  h1: { ...type.h1, color: colors.textPrimary },
  kop: { ...type.h2, color: colors.textPrimary, marginTop: space[6] },
  note: { ...type.bodySmall, color: colors.textSecondary },
  body: { ...type.body, color: colors.textSecondary },
  blok: { gap: space[4] },
  regel: { gap: space[1] },
  rolnaam: { ...type.labelOverline, color: colors.textSecondary },
  voorbeeld: { color: colors.textPrimary },
  stalen: { flexDirection: "row", flexWrap: "wrap", gap: space[3] },
  staal: { width: 96, gap: space[1] },
  vlak: {
    height: 48,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.borderDefault,
  },
  staalnaam: { ...type.labelCaption, color: colors.textPrimary },
  staalwaarde: { ...type.labelCaption, color: colors.textSecondary },
  leeg: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.borderDefault,
    padding: space[5],
  },
  link: {
    borderRadius: radius.md,
    backgroundColor: colors.brandSubtle,
    paddingVertical: space[3],
    paddingHorizontal: space[4],
  },
  linktekst: { ...type.labelButton, color: colors.brandDefault },
});
