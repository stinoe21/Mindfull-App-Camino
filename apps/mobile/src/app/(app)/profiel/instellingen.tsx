// Instellingen
//
// Alles wat de gebruiker eerder koos is hier terug te draaien: naam, voorkeuren,
// taal en de twee apart intrekbare toestemmingen. "Je kunt dit altijd wijzigen
// in Instellingen" is de belofte uit het ontwerp; dit is die plek.
//
// Opgebouwd als gegroepeerde lijst, dezelfde rijen als op Profiel: een kopje,
// een kaart met rijen, en alleen uitleg waar die iets toevoegt.
//
// De definitieve consent-teksten liggen bij Paul (docs/privacy-besluiten.md).
// De toestemmingen blijven daarom bewust buiten de vertaallaag en dus
// Nederlands, zie het besluit in issue #47 en docs/scope.md.

import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Switch, TextInput, View } from "react-native";

import { colors, palette, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
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
import { InstellingenGroep, InstellingenRij } from "@/features/profiel/InstellingenRij";
import { ToestemmingKeuze } from "@/features/profiel/ToestemmingKeuze";

// Alleen interface-teksten. De consent-teksten liggen bij Paul en blijven
// bewust Nederlands en hardcoded in het scherm (issue #47, scope.md).
const nl = {
  titel: "Instellingen",
  laden: "Even laden...",
  groepNaam: "Naam",
  naam: "Voornaam",
  naamPlaceholder: "Optioneel",
  naamUitleg: "Alleen voor de begroeting. Blijft op je telefoon.",
  groepVoorkeuren: "Voorkeuren",
  onderwerpen: "Onderwerpen",
  onderwerpenUitleg: "Deze tips zie je als eerste.",
  groepTaal: "Taal",
  taalSysteem: "Systeem",
  taalNederlands: "Nederlands",
  taalEngels: "English",
  taalContentBlijftNederlands: "Teksten van MIND blijven Nederlands.",
  groepToestemmingen: "Toestemmingen",
  voorwaarden: "Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is",
  groepAccount: "Account",
  uitloggen: "Uitloggen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Settings",
    laden: "Loading...",
    groepNaam: "Name",
    naam: "First name",
    naamPlaceholder: "Optional",
    naamUitleg: "Stays on your phone.",
    groepVoorkeuren: "Preferences",
    onderwerpen: "Topics",
    onderwerpenUitleg: "You see these tips first.",
    groepTaal: "Language",
    taalSysteem: "System",
    taalNederlands: "Nederlands",
    taalEngels: "English",
    taalContentBlijftNederlands: "Texts from MIND remain in Dutch.",
    groepToestemmingen: "Consents",
    voorwaarden: "I accept the terms and understand that this app is not a care service",
    groepAccount: "Account",
    uitloggen: "Log out",
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
          <InstellingenGroep titel={t("groepNaam")}>
            <InstellingenRij
              label={t("naam")}
              omschrijving={t("naamUitleg")}
              laatste
              rechts={
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
                  textAlign="right"
                  style={{ ...type.body, color: colors.textPrimary, includeFontPadding: false, flex: 1, minWidth: space[8] * 2 }}
                  accessibilityLabel={t("naam")}
                />
              }
            />
          </InstellingenGroep>

          <InstellingenGroep titel={t("groepVoorkeuren")}>
            <InstellingenRij label={t("onderwerpen")} omschrijving={t("onderwerpenUitleg")} laatste />
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2], paddingBottom: space[3] }}>
              {VOORKEUR_OPTIES.map((o) => (
                <Chip key={o} label={o} active={inst.voorkeuren.includes(o)} onPress={() => wisselVoorkeur(o)} />
              ))}
            </View>
          </InstellingenGroep>

          <InstellingenGroep titel={t("groepTaal")}>
            {TAAL_KEUZES.map((optie, i) => (
              <InstellingenRij
                key={optie}
                label={t(TAAL_LABEL[optie])}
                omschrijving={optie === "en" ? t("taalContentBlijftNederlands") : undefined}
                onPress={() => kiesTaal(optie)}
                laatste={i === TAAL_KEUZES.length - 1}
                rechts={
                  <AppText rol="body" kleur={keuze === optie ? "primary" : "secondary"} accessibilityLabel={keuze === optie ? "gekozen" : undefined}>
                    {keuze === optie ? "✓" : " "}
                  </AppText>
                }
              />
            ))}
          </InstellingenGroep>

          {/* Bewust Nederlands en zonder vertaalsleutel, zie de kop van dit bestand. */}
          <InstellingenGroep titel={t("groepToestemmingen")}>
            <View style={{ paddingVertical: space[3], borderBottomWidth: 1, borderBottomColor: colors.borderDefault }}>
              <ToestemmingKeuze waarde={inst.consentWeerbericht} onKies={(v) => wijzig({ consentWeerbericht: v })} />
            </View>
            <InstellingenRij
              label={t("voorwaarden")}
              laatste
              rechts={
                <Switch
                  value={inst.consentVoorwaarden}
                  onValueChange={(v) => wijzig({ consentVoorwaarden: v })}
                  trackColor={{ true: colors.brandDefault, false: palette.neutral200 }}
                />
              }
            />
          </InstellingenGroep>

          {ingelogd ? (
            <InstellingenGroep titel={t("groepAccount")}>
              <InstellingenRij label={t("uitloggen")} onPress={uitloggen} laatste />
            </InstellingenGroep>
          ) : null}
        </>
      )}
    </ScreenCanvas>
  );
}
