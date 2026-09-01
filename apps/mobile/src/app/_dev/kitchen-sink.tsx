// Kitchen sink. Alleen voor onszelf, dit scherm hoort nooit in de userflow.
//
// Elke component van het design system staat hier met al zijn states, plus de
// tokens en alle routes. Het is meteen de controle of de lettertypes goed
// geladen zijn: staat "Averia" hier in een schreefloos lettertype, dan is er
// iets mis met src/theme/fonts.ts.

import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, palette, radius, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { BackgroundHeroBand } from "@mind/ui/components/BackgroundHeroBand";
import { BackgroundHeroGradient } from "@mind/ui/components/BackgroundHeroGradient";
import { Button } from "@mind/ui/components/Button";
import { Card, type CardTone } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ContentGrid, ContentCard } from "@mind/ui/components/ContentGrid";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { MascotteInput, type InputStaat } from "@mind/ui/components/MascotteInput";
import { MascotteVlieger, type VliegerStaat } from "@mind/ui/components/MascotteVlieger";
import { VliegerOnderwerp, type Uitdrukking } from "@mind/ui/components/VliegerOnderwerp";

import { NavigationBar } from "@mind/ui/components/NavigationBar";
import { NavIcoonHome } from "@mind/ui/components/NavIcoonHome";
import { NavIcoonChallenges, NavIcoonCheckIn, NavIcoonProfiel, NavIcoonTips } from "@mind/ui/components/navIconen";
import { Slider } from "@mind/ui/components/Slider";
import { TerugKnop } from "@mind/ui/components/TerugKnop";
import type { WeerStaat } from "@mind/ui/components/achtergronden";

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
const KAART_TONEN: CardTone[] = ["white", "primary", "purple", "sun", "coral", "outline"];
const UITDRUKKINGEN: Uitdrukking[] = ["slaperig", "gestrest", "overspannen", "somber", "bang", "piekerend", "energiek", "in-balans", "ontspannen", "standvastig"];
const VLIEGER_STATEN: VliegerStaat[] = ["default", "zonnig", "wolken", "mist", "wind", "regen", "intake"];
const INPUT_STATEN: InputStaat[] = ["temperatuur", "wind", "zicht", "wisselvallig"];
const HERO_STATEN: WeerStaat[] = ["default", "zonnig", "wolken", "mist", "wind", "regen"];

export default function KitchenSink() {
  const insets = useSafeAreaInsets();
  const [schuif, zetSchuif] = useState(45);

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

      <Kop>Button</Kop>
      <View style={styles.blok}>
        <Button label="Primary" onPress={() => undefined} />
        <Button label="Primary, volle breedte" fullWidth onPress={() => undefined} />
        <Button label="Primary, bezig" bezig fullWidth />
        <Button label="Primary, uit" disabled fullWidth />
        <Button label="Secondary" variant="secondary" onPress={() => undefined} />
        <Button label="Secondary, uit" variant="secondary" disabled />
        <Button label="Link" variant="link" onPress={() => undefined} />
      </View>

      <Kop>Card, alle tonen</Kop>
      <View style={styles.blok}>
        {KAART_TONEN.map((toon) => (
          <Card key={toon} tone={toon}>
            <AppText rol="labelOverline" kleur="secondary">{toon.toUpperCase()}</AppText>
            <AppText rol="h3">Een kaart met toon {toon}</AppText>
            <AppText rol="bodySmall" kleur="secondary">Zelfde vorm, andere kleur. Toon volgt betekenis.</AppText>
          </Card>
        ))}
        <Card tone="white" onPress={() => undefined}>
          <AppText rol="labelOverline" kleur="secondary">TIKBAAR</AppText>
          <AppText rol="h3">Een kaart die indrukt</AppText>
          <AppText rol="bodySmall" kleur="secondary">Schaalt naar 0.98 via PressableScale; bij reduce motion alleen opacity.</AppText>
        </Card>
      </View>

      <Kop>TerugKnop</Kop>
      <Text style={styles.note}>
        {"Zweeft linksboven op subpagina's, via de prop terugKnop van ScreenCanvas. In de app rendert " +
          "TerugNaarVorige hem alleen als er een vorig scherm op de stack staat."}
      </Text>
      <View style={styles.rij}>
        <TerugKnop onPress={() => undefined} />
      </View>

      <Kop>Chip</Kop>
      <View style={styles.rij}>
        <Chip label="Rust" />
        <Chip label="Actief" active />
        <Chip label="Klikbaar" onPress={() => undefined} />
      </View>

      <Kop>Slider (interactief)</Kop>
      <Slider value={schuif} onChange={zetSchuif} leftLabel="Guur" rightLabel="Lekker zacht" />

      <Kop>ContentSection met shelf</Kop>
      <ContentSection title="Challenges voor jou" note="Kleine stappen, geen opdrachten." action="Alles bekijken" onAction={() => undefined}>
        <ContentShelf bleed={space[6]}>
          <ShelfCard tone="purple" label="CHALLENGE" title="Weerpraatje" meta="3 min" />
          <ShelfCard tone="sun" label="TIP" title="Beter slapen" meta="5 min" />
          <ShelfCard tone="coral" label="CHALLENGE" title="Even naar buiten" meta="10 min" />
        </ContentShelf>
      </ContentSection>

      <Kop>ContentGrid</Kop>
      <ContentGrid>
        <ContentCard full tone="primary" label="VANDAAG" title="Het mentale weerbericht" />
        <ContentCard tone="purple" label="CHALLENGE" title="Weerpraatje" />
        <ContentCard tone="white" label="BRON: MIND" title="Piekeren doorbreken" />
      </ContentGrid>

      <Kop>MascotteVlieger, alle staten</Kop>
      <View style={styles.rij}>
        {VLIEGER_STATEN.map((staat) => (
          <View key={staat} style={styles.mascotteVak}>
            <MascotteVlieger state={staat} hoogte={staat === "default" ? 24 : 60} />
            <Text style={styles.staalnaam}>{staat}</Text>
          </View>
        ))}
      </View>

      <Kop>VliegerOnderwerp, alle uitdrukkingen</Kop>
      <View style={styles.rij}>
        {UITDRUKKINGEN.map((u) => (
          <View key={u} style={styles.mascotteVak}>
            <VliegerOnderwerp uitdrukking={u} hoogte={60} />
            <Text style={styles.staalnaam}>{u}</Text>
          </View>
        ))}
      </View>

      <Kop>MascotteInput, de vier vragen</Kop>
      <View style={styles.rij}>
        {INPUT_STATEN.map((staat) => (
          <View key={staat} style={styles.mascotteVak}>
            <MascotteInput state={staat} hoogte={64} />
            <Text style={styles.staalnaam}>{staat}</Text>
          </View>
        ))}
      </View>

      <Kop>Hero-achtergronden</Kop>
      <View style={styles.blok}>
        {HERO_STATEN.map((staat) => (
          <View key={staat} style={styles.regel}>
            <Text style={styles.rolnaam}>{staat}</Text>
            <BackgroundHeroBand state={staat} style={{ height: 64, borderRadius: radius.sm }} />
          </View>
        ))}
        <View style={styles.regel}>
          <Text style={styles.rolnaam}>gradient (zonnig)</Text>
          <BackgroundHeroGradient state="zonnig" height={160} style={{ borderRadius: radius.sm }} />
        </View>
      </View>

      <Kop>NavigationBar</Kop>
      <View style={{ height: 120 }}>
        <BackgroundHeroBand state="zonnig" style={{ height: 120, borderRadius: radius.sm }} />
        <NavigationBar
          items={[
            { key: "home", label: "Home", actief: true, onPress: () => undefined, icoon: () => <NavIcoonHome hoogte={26} /> },
            { key: "tips", label: "Tips", onPress: () => undefined, icoon: (kleur) => <NavIcoonTips kleur={kleur} /> },
            { key: "checkin", label: "Check in", onPress: () => undefined, icoon: (kleur) => <NavIcoonCheckIn kleur={kleur} /> },
            { key: "challenges", label: "Challenges", onPress: () => undefined, icoon: (kleur) => <NavIcoonChallenges kleur={kleur} /> },
            { key: "profiel", label: "Profiel", onPress: () => undefined, icoon: (kleur) => <NavIcoonProfiel kleur={kleur} /> },
          ]}
        />
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

      <Kop>Alle schermen</Kop>
      {ROUTES.map(([label, href]) => (
        <Link key={href} href={href} style={styles.link}>
          <Text style={styles.linktekst}>{label}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

function Kop({ children }: { children: React.ReactNode }) {
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
  blok: { gap: space[4] },
  rij: { flexDirection: "row", flexWrap: "wrap", gap: space[3], alignItems: "flex-end" },
  regel: { gap: space[1] },
  rolnaam: { ...type.labelOverline, color: colors.textSecondary },
  voorbeeld: { color: colors.textPrimary },
  mascotteVak: { alignItems: "center", gap: space[1] },
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
  link: {
    borderRadius: radius.md,
    backgroundColor: colors.brandSubtle,
    paddingVertical: space[3],
    paddingHorizontal: space[4],
  },
  linktekst: { ...type.labelButton, color: colors.brandDefault },
});
