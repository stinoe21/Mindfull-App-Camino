// Delen: je weer van vandaag, of de quote van de dag.
//
// Besluit Stijn, 18 september 2026. De app deelt zelf niets met iemand; dit
// scherm is voor wie dat zelf wil. Het is tegelijk de bevestiging: je ziet
// precies wat je gaat delen, er staat bij dat het buiten de app om gaat en
// dat het aan jou is, en pas de knop opent het deelvenster van de telefoon.
// Daar kies je zelf de app en de mensen.
//
// Je weer is iets persoonlijks. Daarom geen snelkoppeling die het in één tik
// verstuurt, en "Toch niet" staat er gewoon onder. Zie docs/scope.md,
// "Delen met derden of hulpverleners, vanuit de app".
//
// Het weer komt uit het lokale record van vandaag (features/weer/lokaalWeer.ts);
// is dat er niet, dan valt er niets te delen en zegt het scherm dat.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

import { palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Segmenten } from "@mind/ui/components/Segmenten";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { Poort } from "@/features/auth/Poort";
import { quoteVanVandaag } from "@/features/content/data/quotes";
import { deelBeeld, type DeelUitkomst } from "@/features/delen/deel";
import { DEEL_VORMEN, DeelSticker, type DeelInhoud, type DeelVorm } from "@/features/delen/DeelSticker";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";

const nl = {
  titelWeer: "Deel je weer",
  titelQuote: "Deel de quote",
  ondertitel: "Alleen als je dat zelf wilt.",
  overlineWeer: "MIJN WEER VANDAAG",
  overlineQuote: "QUOTE VAN DE DAG",
  appNaam: "Weertje",
  licht: "Licht",
  donker: "Donker",
  kaart: "Kaart",
  vormUitleg: "Licht en Donker hebben geen achtergrond: die zet je over je eigen foto. Kaart is voor een gewoon bericht.",
  aanJou: "Je deelt dit zelf, buiten Weertje om. Wat je deelt en met wie, is aan jou. Weertje ziet niet met wie je het deelt en bewaart er niets van.",
  deel: "Deel",
  tochNiet: "Toch niet",
  geenWeerTitel: "Nog geen weer vandaag",
  geenWeer: "Na je check-in kun je hier je weer van vandaag delen.",
  nietBeschikbaar: "Delen kan niet op dit toestel.",
  mislukt: "Het delen lukte niet. Probeer het opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titelWeer: "Share your weather",
    titelQuote: "Share the quote",
    ondertitel: "Only if you want to.",
    overlineWeer: "MY WEATHER TODAY",
    overlineQuote: "QUOTE OF THE DAY",
    appNaam: "Weertje",
    licht: "Light",
    donker: "Dark",
    kaart: "Card",
    vormUitleg: "Light and Dark have no background: you put them over your own photo. Card is for a plain message.",
    aanJou: "You share this yourself, outside Weertje. What you share and with whom is up to you. Weertje does not see who you share it with and keeps nothing of it.",
    deel: "Share",
    tochNiet: "Never mind",
    geenWeerTitel: "No weather yet today",
    geenWeer: "After your check-in you can share your weather of today here.",
    nietBeschikbaar: "Sharing is not possible on this device.",
    mislukt: "Sharing didn't work. Try again.",
  },
};

export default function Delen() {
  return (
    <Poort>
      <DelenInhoud />
    </Poort>
  );
}

function DelenInhoud() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { soort } = useLocalSearchParams<{ soort?: string }>();
  const isQuote = soort === "quote";
  const sticker = useRef<View>(null);
  const [vorm, zetVorm] = useState<DeelVorm>("licht");
  const [inhoud, zetInhoud] = useState<DeelInhoud | null | undefined>(undefined);
  const [bezig, zetBezig] = useState(false);
  const [uitkomst, zetUitkomst] = useState<DeelUitkomst | null>(null);

  useEffect(() => {
    let actief = true;
    if (isQuote) {
      const quote = quoteVanVandaag();
      zetInhoud({ soort: "quote", tekst: quote.tekst, auteur: quote.auteur });
      return;
    }
    leesWeerVanVandaag().then((weer) => {
      if (actief) zetInhoud(weer ? { soort: "weer", weerbeeld: weer.weerbeeld } : null);
    });
    return () => {
      actief = false;
    };
  }, [isQuote]);

  const deel = async () => {
    zetBezig(true);
    const nieuw = await deelBeeld(sticker, isQuote ? t("titelQuote") : t("titelWeer"));
    zetBezig(false);
    zetUitkomst(nieuw === "gedeeld" ? null : nieuw);
  };

  if (inhoud === undefined) return <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} />;

  if (inhoud === null) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("geenWeerTitel")}</AppText>
        <AppText rol="body" kleur="secondary">{t("geenWeer")}</AppText>
      </ScreenCanvas>
    );
  }

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{isQuote ? t("titelQuote") : t("titelWeer")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      {/* Het voorbeeld. Het vlak eromheen hoort niet bij het beeld: het laat
          zien hoe de doorzichtige vormen op een donkere of een lichte foto
          vallen. Alleen de sticker zelf wordt vastgelegd. */}
      <View
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={{
          alignItems: "center",
          paddingVertical: space[5],
          borderRadius: radius.lg,
          backgroundColor: vorm === "licht" ? palette.primary800 : vorm === "donker" ? palette.primary100 : "transparent",
        }}
      >
        <DeelSticker ref={sticker} inhoud={inhoud} vorm={vorm} overline={isQuote ? t("overlineQuote") : t("overlineWeer")} appNaam={t("appNaam")} />
      </View>

      <View style={{ gap: space[2] }}>
        <Segmenten segmenten={DEEL_VORMEN.map((v) => t(v))} actief={DEEL_VORMEN.indexOf(vorm)} onKies={(i) => zetVorm(DEEL_VORMEN[i])} />
        <AppText rol="bodySmall" kleur="secondary">{t("vormUitleg")}</AppText>
      </View>

      <AppText rol="body">{t("aanJou")}</AppText>

      <View style={{ gap: space[3] }}>
        <Button label={t("deel")} fullWidth bezig={bezig} onPress={deel} />
        <Button label={t("tochNiet")} variant="link" fullWidth onPress={() => router.back()} />
      </View>
      {uitkomst ? <AppText rol="bodySmall" kleur="secondary" accessibilityLiveRegion="polite">{t(uitkomst === "niet-beschikbaar" ? "nietBeschikbaar" : "mislukt")}</AppText> : null}
    </ScreenCanvas>
  );
}
