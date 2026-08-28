// Instellingen
//
// Alles wat de gebruiker eerder koos is hier terug te draaien: de voorkeuren
// en de twee apart intrekbare toestemmingen. "Je kunt dit altijd wijzigen in
// Instellingen" is de belofte uit het ontwerp; dit is die plek.
//
// De definitieve consent-teksten liggen bij Paul (docs/privacy-besluiten.md);
// de labels hieronder beschrijven alleen feitelijk wat de schakelaar doet.
// De toestemmingen-kaart blijft daarom bewust buiten de vertaallaag en dus
// Nederlands, zie het besluit in issue #47 en docs/scope.md.

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Switch, TextInput, View } from "react-native";

import { colors, palette, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { getSupabase } from "@/features/backend/client";
import { TAAL_KEUZES, useTaal, useVertaling, type TaalKeuze, type Woordenboek } from "@/features/i18n/taal";
import {
  bewaarInstellingen,
  leesInstellingen,
  NAAM_MAX,
  schoonNaam,
  STANDAARD,
  VOORKEUR_OPTIES,
  type Instellingen as InstellingenType,
} from "@/features/profiel/instellingen";
import { ToestemmingKeuze } from "@/features/profiel/ToestemmingKeuze";

// Alleen interface-teksten. De consent-teksten liggen bij Paul en blijven
// bewust Nederlands en hardcoded in het scherm (issue #47, scope.md).
const nl = {
  titel: "Instellingen",
  laden: "Even laden...",
  naamTitel: "Hoe mogen we je noemen?",
  naamUitleg: "Alleen voor de begroeting. Leeg laten mag. Het blijft op je telefoon.",
  naamPlaceholder: "Je voornaam",
  voorkeurenTitel: "Waar wil je aan werken?",
  voorkeurenUitleg:
    "Dit bepaalt welke tips je als eerste ziet. Het blijft op je telefoon en gaat nooit naar de server.",
  taalTitel: "Taal",
  taalUitleg: "Kies de taal van de app. Systeem volgt de taal van je telefoon.",
  taalSysteem: "Systeem",
  taalNederlands: "Nederlands",
  taalEngels: "English",
  taalContentBlijftNederlands:
    "De teksten van MIND, de check-in en de toestemmingen blijven voorlopig Nederlands.",
  toestemmingenTitel: "Toestemmingen",
  uitloggen: "Uitloggen",
  terug: "Terug",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Settings",
    laden: "Loading...",
    naamTitel: "What should we call you?",
    naamUitleg: "Only for the greeting. Feel free to leave it empty. It stays on your phone.",
    naamPlaceholder: "Your first name",
    voorkeurenTitel: "What would you like to work on?",
    voorkeurenUitleg:
      "This decides which tips you see first. It stays on your phone and never goes to the server.",
    taalTitel: "Language",
    taalUitleg: "Choose the language of the app. System follows your phone's language.",
    taalSysteem: "System",
    taalNederlands: "Nederlands",
    taalEngels: "English",
    taalContentBlijftNederlands:
      "The texts from MIND, the check-in and the consents remain in Dutch for now.",
    toestemmingenTitel: "Consents",
    uitloggen: "Log out",
    terug: "Back",
  },
};
const TAAL_LABEL: Record<TaalKeuze, "taalSysteem" | "taalNederlands" | "taalEngels"> = {
  systeem: "taalSysteem",
  nl: "taalNederlands",
  en: "taalEngels",
};

export default function Instellingen() {
  const router = useRouter();
  const { keuze, kiesTaal } = useTaal();
  const t = useVertaling(teksten);
  const [inst, zetInst] = useState<InstellingenType>(STANDAARD);
  const [geladen, zetGeladen] = useState(false);
  const [ingelogd, zetIngelogd] = useState(false);
  const [naamInvoer, zetNaamInvoer] = useState("");

  useEffect(() => {
    leesInstellingen().then((i) => {
      zetInst(i);
      zetNaamInvoer(i.naam);
      zetGeladen(true);
    });
    getSupabase()
      ?.auth.getSession()
      .then(({ data }) => zetIngelogd(Boolean(data.session)));
  }, []);

  const wijzig = async (wijziging: Partial<InstellingenType>) => {
    zetInst(await bewaarInstellingen(wijziging));
  };

  const wisselVoorkeur = (optie: string) => {
    const nieuw = inst.voorkeuren.includes(optie)
      ? inst.voorkeuren.filter((v) => v !== optie)
      : [...inst.voorkeuren, optie];
    wijzig({ voorkeuren: nieuw });
  };

  const uitloggen = async () => {
    await getSupabase()?.auth.signOut();
    zetIngelogd(false);
    // Zonder account kom je de app niet in: terug naar het begin.
    router.dismissAll();
    router.replace("/welkom");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <AppText rol="h1">{t("titel")}</AppText>

      {!geladen ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{t("laden")}</AppText>
        </Card>
      ) : (
        <>
          <Card tone="white">
            <AppText rol="h3">{t("naamTitel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("naamUitleg")}
            </AppText>
            <Card tone="outline" style={{ paddingVertical: space[2] }}>
              <TextInput
                value={naamInvoer}
                onChangeText={zetNaamInvoer}
                onEndEditing={() => wijzig({ naam: schoonNaam(naamInvoer) })}
                placeholder={t("naamPlaceholder")}
                placeholderTextColor={colors.textSecondary}
                maxLength={NAAM_MAX}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="done"
                style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
                accessibilityLabel={t("naamPlaceholder")}
              />
            </Card>
          </Card>

          <Card tone="white">
            <AppText rol="h3">{t("voorkeurenTitel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("voorkeurenUitleg")}
            </AppText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
              {VOORKEUR_OPTIES.map((o) => (
                <Chip key={o} label={o} active={inst.voorkeuren.includes(o)} onPress={() => wisselVoorkeur(o)} />
              ))}
            </View>
          </Card>

          <Card tone="white">
            <AppText rol="h3">{t("taalTitel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("taalUitleg")}
            </AppText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
              {TAAL_KEUZES.map((optie) => (
                <Chip
                  key={optie}
                  label={t(TAAL_LABEL[optie])}
                  active={keuze === optie}
                  onPress={() => kiesTaal(optie)}
                />
              ))}
            </View>
            <AppText rol="bodySmall" kleur="secondary">
              {t("taalContentBlijftNederlands")}
            </AppText>
          </Card>

          <Card tone="white">
            <AppText rol="h3">{t("toestemmingenTitel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              Niemand kan zien wat jij hebt ingevuld. Je kunt dit altijd wijzigen.
            </AppText>
            <ToestemmingKeuze waarde={inst.consentWeerbericht} onKies={(v) => wijzig({ consentWeerbericht: v })} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }}>
              <AppText rol="bodySmall" style={{ flexShrink: 1 }}>
                Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is
              </AppText>
              <Switch
                value={inst.consentVoorwaarden}
                onValueChange={(v) => wijzig({ consentVoorwaarden: v })}
                trackColor={{ true: colors.brandDefault, false: palette.neutral200 }}
              />
            </View>
          </Card>

          {ingelogd ? <Button label={t("uitloggen")} variant="secondary" onPress={uitloggen} /> : null}
        </>
      )}

      <Button label={t("terug")} variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
