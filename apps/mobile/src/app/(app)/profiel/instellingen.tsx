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
import { TAAL_OPTIES, useTaal } from "@/features/i18n/taal";
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

export default function Instellingen() {
  const router = useRouter();
  const { keuze, kiesTaal, t } = useTaal();
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
      <AppText rol="h1">{t("instellingen.titel")}</AppText>

      {!geladen ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{t("instellingen.laden")}</AppText>
        </Card>
      ) : (
        <>
          <Card tone="white">
            <AppText rol="h3">{t("instellingen.naam.titel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("instellingen.naam.uitleg")}
            </AppText>
            <Card tone="outline" style={{ paddingVertical: space[2] }}>
              <TextInput
                value={naamInvoer}
                onChangeText={zetNaamInvoer}
                onEndEditing={() => wijzig({ naam: schoonNaam(naamInvoer) })}
                placeholder={t("instellingen.naam.placeholder")}
                placeholderTextColor={colors.textSecondary}
                maxLength={NAAM_MAX}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="done"
                style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false }}
                accessibilityLabel={t("instellingen.naam.placeholder")}
              />
            </Card>
          </Card>

          <Card tone="white">
            <AppText rol="h3">{t("instellingen.voorkeuren.titel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("instellingen.voorkeuren.uitleg")}
            </AppText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
              {VOORKEUR_OPTIES.map((o) => (
                <Chip key={o} label={o} active={inst.voorkeuren.includes(o)} onPress={() => wisselVoorkeur(o)} />
              ))}
            </View>
          </Card>

          <Card tone="white">
            <AppText rol="h3">{t("instellingen.taal.titel")}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {t("instellingen.taal.uitleg")}
            </AppText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
              {TAAL_OPTIES.map((optie) => (
                <Chip
                  key={optie.keuze}
                  label={t(optie.labelSleutel)}
                  active={keuze === optie.keuze}
                  onPress={() => kiesTaal(optie.keuze)}
                />
              ))}
            </View>
            <AppText rol="bodySmall" kleur="secondary">
              {t("instellingen.taal.contentBlijftNederlands")}
            </AppText>
          </Card>

          <Card tone="white">
            <AppText rol="h3">Toestemmingen</AppText>
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

          {ingelogd ? <Button label={t("instellingen.uitloggen")} variant="secondary" onPress={uitloggen} /> : null}
        </>
      )}

      <Button label={t("algemeen.terug")} variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
