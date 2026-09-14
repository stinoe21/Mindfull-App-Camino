// Profiel
//
// Eén overzicht, zoals de instellingen van het toestel: wie je bent bovenaan,
// daaronder korte rijen met de huidige waarde en een pagina per keuze
// (naam, onderwerpen, provincie, taal, toestemmingen). Sinds 13 september
// 2026 (Stijn): de vorige versie schreef alle keuzes en de volledige
// toestemmingsteksten op één lange pagina uit, en dat was geen geheel. Nu
// lees je in één oogopslag wat er staat en tik je door om iets te wijzigen.
//
// Geen profielfoto: die bestaat nergens in de flow (HERKOMST.md, Removed on
// purpose). Er is geen naamveld in het datamodel; de voornaam komt uit de
// lokale instellingen en verlaat het toestel nooit.

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { getSupabase } from "@/features/backend/client";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useTaal, useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { leesInstellingen, STANDAARD, type Instellingen } from "@/features/profiel/instellingen";
import { InstellingenGroep, InstellingenRij } from "@/features/profiel/InstellingenRij";
import { isProvincie, PROVINCIE_NAMEN } from "@/features/weer/provincies";

const nl = {
  titel: "Profiel",
  evenKijken: "Even geduld.",
  ingelogd: "Ingelogd",
  nietIngelogd: "Niet ingelogd",
  logInUitleg: "Log in om anoniem mee te tellen in het mentale weer.",
  inloggen: "Inloggen",
  groepJij: "Over jou",
  naam: "Voornaam",
  geenNaam: "Nog geen naam",
  onderwerpen: "Onderwerpen",
  geenOnderwerpen: "Nog niets gekozen",
  meerOnderwerpen: "+{n}",
  provincie: "Provincie",
  provincieGeen: "Niet bepaald",
  groepApp: "App",
  taal: "Taal",
  taalSysteem: "Systeem",
  taalNederlands: "Nederlands",
  taalEngels: "English",
  groepPrivacy: "Privacy",
  toestemmingen: "Toestemmingen",
  weerberichtJa: "Mentale weer: ja",
  weerberichtNee: "Mentale weer: nee",
  weerberichtGeen: "Nog niet gekozen",
  groepAccount: "Account",
  uitloggen: "Uitloggen",
  accountVerwijderen: "Account verwijderen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Profile",
    evenKijken: "One moment...",
    ingelogd: "Logged in",
    nietIngelogd: "Not logged in",
    logInUitleg: "Log in to count anonymously towards the mental weather.",
    inloggen: "Log in",
    groepJij: "About you",
    naam: "First name",
    geenNaam: "No name yet",
    onderwerpen: "Topics",
    geenOnderwerpen: "Nothing chosen yet",
    meerOnderwerpen: "+{n}",
    provincie: "Province",
    provincieGeen: "Not determined",
    groepApp: "App",
    taal: "Language",
    taalSysteem: "System",
    taalNederlands: "Nederlands",
    taalEngels: "English",
    groepPrivacy: "Privacy",
    toestemmingen: "Consents",
    weerberichtJa: "Mental weather: yes",
    weerberichtNee: "Mental weather: no",
    weerberichtGeen: "Not chosen yet",
    groepAccount: "Account",
    uitloggen: "Log out",
    accountVerwijderen: "Delete account",
  },
};

/** De huidige waarde rechts in een rij, in de secundaire kleur, met de "›" ernaast. */
function Waarde({ tekst }: { tekst: string }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: space[2], flexShrink: 1 }}>
      <AppText rol="bodySmall" kleur="secondary" numberOfLines={1}>{tekst}</AppText>
      <AppText rol="body" kleur="secondary">{"›"}</AppText>
    </View>
  );
}

export default function Profiel() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { keuze } = useTaal();
  const [inst, zetInst] = useState<Instellingen>(STANDAARD);
  const [email, zetEmail] = useState<string | null>(null);
  const [geladen, zetGeladen] = useState(false);

  // Bij elke focus opnieuw lezen: je komt hier terug van elke keuzepagina.
  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesInstellingen().then((i) => {
        if (actief) zetInst(i);
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

  const uitloggen = async () => {
    await getSupabase()?.auth.signOut();
    zetEmail(null);
    // Zonder account kom je de app niet in: terug naar het begin.
    router.dismissAll();
    router.replace("/welkom");
  };

  const onderwerpenWaarde = inst.voorkeuren.length
    ? inst.voorkeuren.slice(0, 2).join(", ") + (inst.voorkeuren.length > 2 ? " " + t("meerOnderwerpen").replace("{n}", String(inst.voorkeuren.length - 2)) : "")
    : t("geenOnderwerpen");
  // Alleen een provincie via de locatie telt (sinds 14 september 2026).
  const provincieWaarde = inst.provincieViaLocatie && isProvincie(inst.provincie) ? PROVINCIE_NAMEN[inst.provincie] : t("provincieGeen");
  const taalWaarde = keuze === "nl" ? t("taalNederlands") : keuze === "en" ? t("taalEngels") : t("taalSysteem");
  const toestemmingWaarde =
    inst.consentWeerbericht === true ? t("weerberichtJa") : inst.consentWeerbericht === false ? t("weerberichtNee") : t("weerberichtGeen");

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
          ) : (
            <>
              <AppText rol="h3">{inst.naam || email || t("nietIngelogd")}</AppText>
              <AppText rol="labelCaption" kleur="secondary">{email ? (inst.naam ? email : t("ingelogd")) : t("logInUitleg")}</AppText>
            </>
          )}
        </View>
      </Card>

      {geladen && !email ? <Button label={t("inloggen")} variant="secondary" onPress={() => router.push("/inloggen")} /> : null}

      <InstellingenGroep titel={t("groepJij")}>
        <InstellingenRij label={t("naam")} onPress={() => router.push("/profiel/naam")} rechts={<Waarde tekst={inst.naam || t("geenNaam")} />} />
        <InstellingenRij label={t("onderwerpen")} onPress={() => router.push("/profiel/onderwerpen")} rechts={<Waarde tekst={onderwerpenWaarde} />} />
        <InstellingenRij label={t("provincie")} onPress={() => router.push("/profiel/provincie")} rechts={<Waarde tekst={provincieWaarde} />} laatste />
      </InstellingenGroep>

      <InstellingenGroep titel={t("groepApp")}>
        <InstellingenRij label={t("taal")} onPress={() => router.push("/profiel/taal")} rechts={<Waarde tekst={taalWaarde} />} laatste />
      </InstellingenGroep>

      {/* De toestemmingen zijn de privacy-keuzes; de uitleg staat daar achter
          "Lees de uitleg". De privacyverklaring komt hier als rij zodra Paul
          hem oplevert (docs/privacy-besluiten.md); een dode rij "binnenkort"
          stond er tot 13 september 2026 en is weg. */}
      <InstellingenGroep titel={t("groepPrivacy")}>
        <InstellingenRij label={t("toestemmingen")} onPress={() => router.push("/profiel/toestemmingen")} rechts={<Waarde tekst={toestemmingWaarde} />} laatste />
      </InstellingenGroep>

      <InstellingenGroep titel={t("groepAccount")}>
        {email ? <InstellingenRij label={t("uitloggen")} onPress={uitloggen} /> : null}
        <InstellingenRij label={t("accountVerwijderen")} onPress={() => router.push("/profiel/account-verwijderen")} laatste />
      </InstellingenGroep>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
