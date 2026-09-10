// Profiel
//
// Eén pagina voor alles wat van jou is: wie je bent (naam, account), wat je
// koos (onderwerpen, provincie, taal) en wat je toestaat (toestemmingen,
// privacy). Sinds 10 september 2026 (Stijn): het losse Instellingen-scherm
// en het overzicht met doorverwijzingen ernaartoe waren twee halve pagina's
// "all over the place"; dit is er één, en /profiel/instellingen verwijst
// hierheen zodat "je kunt dit altijd wijzigen" overal blijft kloppen.
//
// Geen profielfoto: die bestaat nergens in de flow (HERKOMST.md, Removed on
// purpose). Er is geen naamveld in het datamodel; de voornaam komt uit de
// lokale instellingen en verlaat het toestel nooit.
//
// De consent-teksten liggen bij Paul (docs/privacy-besluiten.md). Ze blijven
// bewust buiten de vertaallaag en dus Nederlands, zie issue #47 en scope.md.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { TextInput, View } from "react-native";

import { colors, space, type } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { Chip } from "@mind/ui/components/Chip";
import { KeuzeVak } from "@mind/ui/components/KeuzeVak";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { getSupabase } from "@/features/backend/client";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
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
import { isProvincie, PROVINCIE_CODES, PROVINCIE_NAMEN } from "@/features/weer/provincies";

const nl = {
  titel: "Profiel",
  evenKijken: "Even geduld.",
  ingelogdAls: "Ingelogd als {email}",
  ingelogd: "Ingelogd",
  nietIngelogd: "Niet ingelogd",
  logInUitleg: "Log in om anoniem mee te tellen in het weerbericht.",
  inloggen: "Inloggen",
  groepNaam: "Naam",
  naam: "Voornaam",
  naamPlaceholder: "Optioneel",
  naamUitleg: "Alleen voor de begroeting. Blijft op je telefoon.",
  groepOnderwerpen: "Onderwerpen",
  onderwerpenUitleg: "Deze onderwerpen zie je als eerste.",
  groepProvincie: "Provincie",
  provincie: "Waar in Nederland ben je?",
  provincieUitleg: "Voor het mentale weer per provincie. Vrijwillig; de app vraagt nooit je locatie.",
  provincieGeen: "Liever niet",
  groepTaal: "Taal",
  taalSysteem: "Systeem",
  taalNederlands: "Nederlands",
  taalEngels: "English",
  taalContentBlijftNederlands: "Onderwerpen, gidsen en challenges blijven Nederlands.",
  groepToestemmingen: "Toestemmingen",
  voorwaarden: "Ik accepteer de voorwaarden en begrijp dat deze app geen hulpverlening is",
  groepPrivacy: "Privacy",
  watGebeurt: "Wat er met je check-in gebeurt",
  privacyverklaring: "Privacyverklaring",
  binnenkort: "Binnenkort",
  groepAccount: "Account",
  uitloggen: "Uitloggen",
  accountVerwijderen: "Account verwijderen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Profile",
    evenKijken: "One moment...",
    ingelogdAls: "Logged in as {email}",
    ingelogd: "Logged in",
    nietIngelogd: "Not logged in",
    logInUitleg: "Log in to count anonymously towards the weather forecast.",
    inloggen: "Log in",
    groepNaam: "Name",
    naam: "First name",
    naamPlaceholder: "Optional",
    naamUitleg: "Only for the greeting. Stays on your phone.",
    groepOnderwerpen: "Topics",
    onderwerpenUitleg: "You see these topics first.",
    groepProvincie: "Province",
    provincie: "Where in the Netherlands are you?",
    provincieUitleg: "For the mental weather per province. Voluntary; the app never asks for your location.",
    provincieGeen: "Rather not",
    groepTaal: "Language",
    taalSysteem: "System",
    taalNederlands: "Nederlands",
    taalEngels: "English",
    taalContentBlijftNederlands: "Topics, guides and challenges remain in Dutch.",
    groepToestemmingen: "Consents",
    voorwaarden: "I accept the terms and understand that this app is not a care service",
    groepPrivacy: "Privacy",
    watGebeurt: "What happens with your check-in",
    privacyverklaring: "Privacy statement",
    binnenkort: "Coming soon",
    groepAccount: "Account",
    uitloggen: "Log out",
    accountVerwijderen: "Delete account",
  },
};
const TAAL_LABEL: Record<TaalKeuze, "taalSysteem" | "taalNederlands" | "taalEngels"> = {
  systeem: "taalSysteem",
  nl: "taalNederlands",
  en: "taalEngels",
};

export default function Profiel() {
  const router = useRouter();
  const { keuze, kiesTaal } = useTaal();
  const t = useVertaling(teksten);
  const [inst, zetInst] = useState<InstellingenType>(STANDAARD);
  const [naamInvoer, zetNaamInvoer] = useState("");
  const [email, zetEmail] = useState<string | null>(null);
  const [geladen, zetGeladen] = useState(false);

  // Bij elke focus opnieuw lezen: je komt hier terug na inloggen of na een
  // wijziging elders (provincie in de onboarding, toestemming in de check-in).
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesInstellingen().then((i) => {
        if (!actief) return;
        zetInst(i);
        zetNaamInvoer(i.naam);
      });
      const client = getSupabase();
      if (!client) {
        zetGeladen(true);
        return;
      }
      client.auth.getSession().then(({ data }) => {
        if (!actief) return;
        zetEmail(data.session?.user.email ?? null);
        zetGeladen(true);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  const wijzig = async (wijziging: Partial<InstellingenType>) => {
    zetInst(await bewaarInstellingen(wijziging));
  };

  const wisselVoorkeur = (optie: string) => {
    const nieuw = inst.voorkeuren.includes(optie) ? inst.voorkeuren.filter((v) => v !== optie) : [...inst.voorkeuren, optie];
    wijzig({ voorkeuren: nieuw });
  };

  const uitloggen = async () => {
    await getSupabase()?.auth.signOut();
    zetEmail(null);
    // Zonder account kom je de app niet in: terug naar het begin.
    router.dismissAll();
    router.replace("/welkom");
  };

  const naam = inst.naam;

  return (
    <ScreenCanvas state="default" kopTitel={t("titel")} metNavRuimte>
      <AppText rol="h1">{t("titel")}</AppText>

      {/* Wie je bent: de vlieger, je naam en je account. */}
      <Card tone="primary" style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
        <MascotteVlieger state="wolken" hoogte={44} />
        {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
        <View style={{ flexShrink: 1, gap: 2 }}>
          {!geladen ? (
            <AppText rol="bodySmall" kleur="secondary">{t("evenKijken")}</AppText>
          ) : email ? (
            <>
              <AppText rol="h3">{naam || email}</AppText>
              <AppText rol="labelCaption" kleur="secondary">{naam ? t("ingelogdAls").replace("{email}", email) : t("ingelogd")}</AppText>
            </>
          ) : (
            <>
              <AppText rol="h3">{t("nietIngelogd")}</AppText>
              <AppText rol="labelCaption" kleur="secondary">{t("logInUitleg")}</AppText>
            </>
          )}
        </View>
      </Card>

      {geladen && !email ? <Button label={t("inloggen")} variant="secondary" onPress={() => router.push("/inloggen")} /> : null}

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

      <InstellingenGroep titel={t("groepOnderwerpen")}>
        <InstellingenRij label={t("onderwerpenUitleg")} laatste />
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2], paddingBottom: space[3] }}>
          {VOORKEUR_OPTIES.map((o) => (
            <Chip key={o} label={o} active={inst.voorkeuren.includes(o)} onPress={() => wisselVoorkeur(o)} />
          ))}
        </View>
      </InstellingenGroep>

      <InstellingenGroep titel={t("groepProvincie")}>
        <InstellingenRij label={t("provincie")} omschrijving={t("provincieUitleg")} laatste />
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2], paddingBottom: space[3] }}>
          <Chip label={t("provincieGeen")} active={!isProvincie(inst.provincie)} onPress={() => wijzig({ provincie: null })} />
          {PROVINCIE_CODES.map((code) => (
            <Chip key={code} label={PROVINCIE_NAMEN[code]} active={inst.provincie === code} onPress={() => wijzig({ provincie: code })} />
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
        <View style={{ paddingVertical: space[2] }}>
          <KeuzeVak label={t("voorwaarden")} gekozen={inst.consentVoorwaarden} onPress={() => wijzig({ consentVoorwaarden: !inst.consentVoorwaarden })} />
        </View>
      </InstellingenGroep>

      <InstellingenGroep titel={t("groepPrivacy")}>
        <InstellingenRij label={t("watGebeurt")} onPress={() => router.push("/weerbericht")} />
        <InstellingenRij label={t("privacyverklaring")} omschrijving={t("binnenkort")} uit laatste />
      </InstellingenGroep>

      <InstellingenGroep titel={t("groepAccount")}>
        {email ? <InstellingenRij label={t("uitloggen")} onPress={uitloggen} /> : null}
        <InstellingenRij label={t("accountVerwijderen")} onPress={() => router.push("/profiel/account-verwijderen")} laatste />
      </InstellingenGroep>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
