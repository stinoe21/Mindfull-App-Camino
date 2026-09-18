// Houvast: de gidsen zonder eigen onderwerp
//
// Twee lijsten achter twee kaarten onderaan Houvast (Stijn, 14 september
// 2026): "Voor naasten", de gidsen over iemand anders in je omgeving, en
// "Andere onderwerpen", de gidsen van MIND die niet onder een familie
// vallen (ADHD, autisme, PTSS, ...). Daarvoor stonden ze als plank van
// twintig kaartjes onder het raster. Welke gids in welke groep zit staat
// in features/content/families.ts.

import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Lijst, LijstRij } from "@mind/ui/components/LijstRij";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { gidsenInGroep, type GidsGroep } from "@/features/content/families";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  nietGevonden: "Pagina niet gevonden",
  nietGevondenUitleg: "Deze pagina bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar Tips",
  naastenTitel: "Voor naasten",
  naastenUitleg: "Als iemand in je omgeving het moeilijk heeft.",
  andereTitel: "Andere onderwerpen",
  andereUitleg: "De gidsen van MIND die niet onder een onderwerp hierboven vallen.",
  alleenLink: "Op wijzijnmind.nl",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Page not found",
    nietGevondenUitleg: "This page doesn't exist or has been moved.",
    terugOverzicht: "Back to Tips",
    naastenTitel: "For loved ones",
    naastenUitleg: "When someone close to you is struggling.",
    andereTitel: "Other topics",
    andereUitleg: "The MIND guides that don't fall under a topic above.",
    alleenLink: "On wijzijnmind.nl",
  },
};

// De titels van MIND beginnen soms met een kleine letter ("examenstress (ouders)").
const metHoofdletter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const isGroep = (g: string | undefined): g is GidsGroep => g === "naasten" || g === "andere";

export default function GidsenGroep() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { groep } = useLocalSearchParams<{ groep: string }>();

  if (!isGroep(groep)) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugOverzicht")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const gidsen = gidsenInGroep(groep);
  const titel = groep === "naasten" ? t("naastenTitel") : t("andereTitel");

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} kopTitel={titel} heroInhoud={<MascotteVlieger state="wolken" hoogte={112} />} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{titel}</AppText>
        <AppText rol="subtitle">{groep === "naasten" ? t("naastenUitleg") : t("andereUitleg")}</AppText>
      </View>

      <Lijst>
        {gidsen.map((g) => (
          <LijstRij
            key={g.slug}
            titel={metHoofdletter(g.titel)}
            meta={g.blokken.length ? undefined : t("alleenLink")}
            onPress={() => router.push({ pathname: "/naslagwerk/gids/[gids]", params: { gids: g.slug } })}
          />
        ))}
      </Lijst>
    </ScreenCanvas>
  );
}
