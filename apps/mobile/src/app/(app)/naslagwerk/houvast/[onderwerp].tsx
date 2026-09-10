// Houvast: één onderwerp
//
// De compacte kennislaag van de app (Stijn, 10 september 2026, docs/scope.md).
// Per onderwerp de uitleg uit de psychipedia van MIND en de tips en oefening
// uit de online gids, als één pagina: begrijpen, praktisch houvast,
// verdieping. Geen aparte blokken "psychipedia" en "gids": voor de gebruiker
// maakt de bronstructuur niet uit.
//
//   Kort uitgelegd          de kern, altijd in beeld
//   Meer over <onderwerp>   de verdieping, uitklapbaar
//   Wat kan helpen          drie tot vijf tips
//   Probeer dit eens        alleen als er echt een oefening is
//   Verder lezen bij MIND   de psychipedia-pagina en de gids, met aanmelden
//
// De teksten zijn woordelijk van MIND (data/houvast.ts, gegenereerd). Een
// klacht (piekeren), een vaardigheid (nee zeggen) en een hulpmiddel
// (mindfulness) delen dezelfde opbouw; secties zonder inhoud vervallen.

import * as Linking from "expo-linking";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { VliegerOnderwerp } from "@mind/ui/components/VliegerOnderwerp";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { InhoudBlokken } from "@/features/content/InhoudBlokken";
import { houvastBijOnderwerp, houvastVoor } from "@/features/content/houvast";
import type { HouvastTip } from "@/features/content/data/houvast";

const nl = {
  nietGevonden: "Onderwerp niet gevonden",
  nietGevondenUitleg: "Dit onderwerp bestaat niet of is verplaatst.",
  terugOverzicht: "Terug naar het overzicht",
  meerOver: "Meer over {titel}",
  minderOver: "Minder",
  leesVerder: "Lees verder",
  watKanHelpen: "Wat kan helpen",
  probeer: "Probeer dit eens",
  verderLezen: "Verder lezen op wijzijnmind.nl",
  allesOver: "Alles over {titel}",
  gids: "De online gids: {titel}",
  gidsPerMail: "Gids per e-mail",
  meerOnderwerp: "Meer over {onderwerp}",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Topic not found",
    nietGevondenUitleg: "This topic doesn't exist or has been moved.",
    terugOverzicht: "Back to the overview",
    meerOver: "More about {titel}",
    minderOver: "Less",
    leesVerder: "Read more",
    watKanHelpen: "What can help",
    probeer: "Try this",
    verderLezen: "Read more on wijzijnmind.nl",
    allesOver: "Everything about {titel}",
    gids: "The online guide: {titel}",
    gidsPerMail: "Guide by email",
    meerOnderwerp: "More about {onderwerp}",
  },
};

// De eerste twee zinnen van een alinea, als de alinea langer is dan dat.
function eersteZinnen(tekst: string, aantal = 2): string {
  const zinnen = tekst.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (!zinnen || zinnen.length <= aantal) return tekst;
  return zinnen.slice(0, aantal).join("").trim();
}

// Eén tip: nummer in de merkkleur, kop en de tekst eronder, op een zandkaart
// zodat de tips als losse handvatten lezen en niet als één lap tekst. Een
// lange tip begint met zijn eerste twee zinnen; een tik opent de rest, zodat
// de vijf tips samen op één scherm passen en de tekst toch woordelijk blijft.
function Tip({ nummer, tip, leesVerder, minder }: { nummer: number; tip: HouvastTip; leesVerder: string; minder: string }) {
  const [open, zetOpen] = useState(false);
  const eerste = tip.blokken[0];
  const kort = eerste?.tekst ? eersteZinnen(eerste.tekst) : undefined;
  const inklapbaar = (kort !== undefined && kort !== eerste?.tekst) || tip.blokken.length > 1;

  return (
    <Card tone="white" onPress={inklapbaar ? () => zetOpen(!open) : undefined}>
      <View style={{ flexDirection: "row", gap: space[3] }}>
        <AppText rol="h3" kleur="brand">{String(nummer)}</AppText>
        <View style={{ flexShrink: 1, gap: space[2] }}>
          {tip.kop ? <AppText rol="bodyEmphasis">{tip.kop}</AppText> : null}
          {open || !inklapbaar ? <InhoudBlokken blokken={tip.blokken} /> : kort ? <AppText rol="body">{kort}</AppText> : null}
          {inklapbaar ? <AppText rol="labelButton" kleur="brand">{open ? minder : leesVerder}</AppText> : null}
        </View>
      </View>
    </Card>
  );
}

export default function HouvastOnderwerp() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { onderwerp: slug } = useLocalSearchParams<{ onderwerp: string }>();
  const houvast = houvastVoor(slug);
  const [meerOpen, zetMeerOpen] = useState(false);

  if (!houvast) {
    return (
      <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
        <AppText rol="h1">{t("nietGevonden")}</AppText>
        <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
        <Button label={t("terugOverzicht")} variant="secondary" onPress={() => router.back()} />
      </ScreenCanvas>
    );
  }

  const titelLaag = houvast.titel.toLowerCase();
  const verwant = houvastBijOnderwerp(houvast.onderwerp).filter((h) => h.slug !== houvast.slug);

  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugNaarVorige />}
      heroInhoud={<VliegerOnderwerp onderwerp={houvast.onderwerp} slug={houvast.slug} hoogte={112} />}
      metNavRuimte
    >
      <View style={{ gap: space[2] }}>
        {houvast.onderwerp !== houvast.titel ? <AppText rol="labelOverline" kleur="brand">{houvast.onderwerp.toUpperCase()}</AppText> : null}
        <AppText rol="h1">{houvast.titel}</AppText>
      </View>

      {/* 1. Kort uitgelegd: de kern, altijd in beeld, als vette openingsalinea. */}
      <AppText rol="bodyEmphasis">{houvast.kort}</AppText>

      {/* 2. Meer over dit onderwerp: de verdieping, uitgeklapt op verzoek. */}
      {houvast.meer.length ? (
        <View style={{ gap: space[4] }}>
          {meerOpen ? <InhoudBlokken blokken={houvast.meer} /> : null}
          <View style={{ alignItems: "flex-start" }}>
            <Button
              label={meerOpen ? t("minderOver") : t("meerOver").replace("{titel}", titelLaag)}
              variant="link"
              onPress={() => zetMeerOpen(!meerOpen)}
            />
          </View>
        </View>
      ) : null}

      {/* 3. Wat kan helpen: de praktische laag. */}
      {houvast.tips.length ? (
        <ContentSection title={t("watKanHelpen")}>
          <View style={{ gap: space[3] }}>
            {houvast.tips.map((tip, i) => (
              <Tip key={i} nummer={i + 1} tip={tip} leesVerder={t("leesVerder")} minder={t("minderOver")} />
            ))}
          </View>
        </ContentSection>
      ) : null}

      {/* 4. Probeer dit eens: alleen als er echt een oefening is. */}
      {houvast.oefening ? (
        <Card tone="purple" style={{ gap: space[3] }}>
          <View style={{ gap: space[1] }}>
            <AppText rol="labelOverline" kleur="brand">{t("probeer").toUpperCase()}</AppText>
            {houvast.oefening.kop ? <AppText rol="h3">{houvast.oefening.kop}</AppText> : null}
          </View>
          <InhoudBlokken blokken={houvast.oefening.blokken} />
        </Card>
      ) : null}

      {/* 5. Verder lezen: de volledige pagina's op wijzijnmind.nl, en de
          mailroute blijft bestaan (feedbacksessie: aanmelden op elke gids).
          Geen bronvermelding: het is de app van MIND zelf (Stijn, 10 september 2026). */}
      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("verderLezen")}</AppText>
        <View style={{ alignItems: "flex-start" }}>
          {houvast.bron ? <Button label={t("allesOver").replace("{titel}", titelLaag)} variant="link" onPress={() => Linking.openURL(houvast.bron!)} /> : null}
          {houvast.gids ? <Button label={t("gids").replace("{titel}", houvast.gids.titel)} variant="link" onPress={() => Linking.openURL(houvast.gids!.url)} /> : null}
          {houvast.gids?.aanmeld ? <Button label={t("gidsPerMail")} variant="link" onPress={() => Linking.openURL(houvast.gids!.aanmeld!)} /> : null}
        </View>
      </View>

      {verwant.length ? (
        <ContentSection title={t("meerOnderwerp").replace("{onderwerp}", houvast.onderwerp.toLowerCase())}>
          <ContentShelf>
            {verwant.map((h) => (
              <ShelfCard
                key={h.slug}
                tone="coral"
                title={h.titel}
                onPress={() => router.push({ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: h.slug } })}
              >
                <View style={{ position: "absolute", right: space[3], top: space[3] }}>
                  <VliegerOnderwerp onderwerp={h.onderwerp} slug={h.slug} hoogte={44} />
                </View>
              </ShelfCard>
            ))}
          </ContentShelf>
        </ContentSection>
      ) : null}
    </ScreenCanvas>
  );
}
