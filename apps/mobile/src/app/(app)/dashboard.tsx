// Dashboard
//
// De spil van de app: begroeting, de check-in-CTA (of jouw weer van vandaag),
// het landelijke weerbericht, de dagelijkse quote, ingangen naar challenges en
// naslagwerk, en de Hulplijn. Elke slot heeft zijn eigen loading-, empty- en
// error-state. Het landelijke beeld wordt een keer per sessie opgehaald en
// gecachet (docs/limieten-en-misbruik.md sectie 4).

import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { colors, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ContentSection, ContentShelf, ShelfCard } from "@mind/ui/components/ContentSection";
import { MascotteVlieger } from "@mind/ui/components/MascotteVlieger";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { ARTIKELEN } from "@/features/content/data/artikelen";
import { CHALLENGES } from "@/features/content/data/challenges";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { EersteKeerUitleg } from "@/features/onboarding/EersteKeerUitleg";
import { leesInstellingen } from "@/features/profiel/instellingen";
import { leesWeerVanVandaag } from "@/features/weer/lokaalWeer";
import { UITKOMSTEN } from "@/features/weer/teksten";
import { haalWeerbericht, type WeerberichtStand } from "@/features/weer/weerbericht";

import type { WeatherCode } from "@mind/types";

// De dagelijkse quote is voor iedereen gelijk (board 12:179). Dit is de quote
// uit het design system; een echte reeks van Mind is een openstaand punt.
const QUOTE = "“Het lijkt altijd onmogelijk, totdat het gedaan is.”";

function begroeting(): string {
  const uur = new Date().getHours();
  if (uur < 6) return "Goedenacht";
  if (uur < 12) return "Goedemorgen";
  if (uur < 18) return "Goedemiddag";
  return "Goedenavond";
}

export default function Dashboard() {
  const router = useRouter();
  const [weerbeeld, zetWeerbeeld] = useState<WeatherCode | null>(null);
  const [weerGeladen, zetWeerGeladen] = useState(false);
  const [bericht, zetBericht] = useState<WeerberichtStand | null>(null);
  const [voorkeuren, zetVoorkeuren] = useState<string[]>([]);
  const [naam, zetNaam] = useState("");

  useFocusEffect(
    useCallback(() => {
      let actief = true;
      leesWeerVanVandaag().then((data) => {
        if (!actief) return;
        zetWeerbeeld(data?.weerbeeld ?? null);
        zetWeerGeladen(true);
      });
      leesInstellingen().then((i) => {
        if (!actief) return;
        zetVoorkeuren(i.voorkeuren);
        zetNaam(i.naam);
      });
      haalWeerbericht().then((stand) => {
        if (actief) zetBericht(stand);
      });
      return () => {
        actief = false;
      };
    }, [])
  );

  // Artikelen uit de gekozen onderwerpen eerst, de rest erachter. Zonder
  // gekozen voorkeuren is de volgorde gewoon die van de bibliotheek.
  const tips = [...ARTIKELEN]
    .sort((a, b) => Number(voorkeuren.includes(b.onderwerp)) - Number(voorkeuren.includes(a.onderwerp)))
    .slice(0, 5);
  const topBericht = bericht?.staat === "geladen" ? [...bericht.rijen].sort((a, b) => b.share - a.share)[0] : null;

  return (
    <ScreenCanvas state={weerbeeld ?? "default"} metNavRuimte>
      <View style={{ gap: space[1] }}>
        {/* Instellingen als tekstlink: er is geen tandwiel in de assetbibliotheek. */}
        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: space[3] }}>
          <AppText rol="h1" style={{ flexShrink: 1 }}>{begroeting() + (naam ? ", " + naam : "")}</AppText>
          <Button label="Instellingen" variant="link" onPress={() => router.push("/profiel/instellingen")} />
        </View>
        <AppText rol="subtitle" kleur="secondary">Hoe is je weer vandaag?</AppText>
      </View>

      {/* Eenmalige rondleiding, alleen de eerste keer op het dashboard. */}
      <EersteKeerUitleg />

      {/* Slot 1: check-in of jouw weer van vandaag */}
      {!weerGeladen ? (
        <Card tone="white">
          <ActivityIndicator color={colors.brandDefault} />
        </Card>
      ) : weerbeeld ? (
        <Card tone="white">
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[4] }}>
            <MascotteVlieger state={weerbeeld} hoogte={56} />
            {/* gap 2: titel en duiding dicht op elkaar, zoals in de sectiekop van de referentie */}
            <View style={{ flexShrink: 1, gap: 2 }}>
              <AppText rol="labelOverline" kleur="secondary">JOUW WEER VANDAAG</AppText>
              <AppText rol="h3">{UITKOMSTEN[weerbeeld].kop}</AppText>
            </View>
          </View>
          <Button label="Bekijk je weer" variant="link" onPress={() => router.push("/check-in/uitkomst")} />
        </Card>
      ) : (
        <Card tone="white">
          <AppText rol="h3">Even inchecken?</AppText>
          <AppText rol="bodySmall" kleur="secondary">
            Neem een momentje voor jezelf. Jouw check-in telt anoniem mee in het mentale weerbericht van
            Nederland.
          </AppText>
          <Button label="Even inchecken" onPress={() => router.push("/check-in/1")} />
        </Card>
      )}

      {/* Slot 2: het landelijke weerbericht */}
      <Card tone="primary">
        <AppText rol="bodySmall" kleur="secondary">Het mentale weer van Nederland</AppText>
        {bericht === null ? (
          <ActivityIndicator color={colors.brandDefault} />
        ) : bericht.staat === "geladen" && topBericht ? (
          <>
            <AppText rol="h3">{topBericht.label}</AppText>
            <AppText rol="bodySmall" kleur="secondary">
              {topBericht.share + "% van de check-ins · " + topBericht.total + " vandaag"}
            </AppText>
          </>
        ) : bericht.staat === "niet-ingelogd" ? (
          <AppText rol="bodySmall" kleur="secondary">
            Log in om het landelijke weerbericht van vandaag te zien.
          </AppText>
        ) : bericht.staat === "leeg" ? (
          <AppText rol="bodySmall" kleur="secondary">
            Nog te weinig check-ins vandaag voor een landelijk beeld. Kom later terug.
          </AppText>
        ) : (
          <AppText rol="bodySmall" kleur="secondary">
            Het landelijke beeld kon niet worden opgehaald. Zonder verbinding werkt de rest van de app
            gewoon.
          </AppText>
        )}
        <Button label="Bekijk het hele weerbericht" variant="link" onPress={() => router.push("/weerbericht")} />
      </Card>

      {/* Slot 3: de dagelijkse quote, voor iedereen gelijk */}
      <Card tone="purple" style={{ alignItems: "center" }}>
        <AppText rol="quote" centreer>{QUOTE}</AppText>
        <AppText rol="labelCaption" kleur="secondary">Dagelijkse quote · deel hem gerust</AppText>
      </Card>

      {/* Slot 4: challenges */}
      <ContentSection
        title="Challenges voor jou"
        note="Kleine stappen, geen opdrachten."
        action="Alles bekijken"
        onAction={() => router.push("/challenges")}
      >
        <ContentShelf>
          {CHALLENGES.slice(0, 4).map((c) => (
            <ShelfCard
              key={c.slug}
              tone={c.soort === "challenge" ? "purple" : "coral"}
              label={c.soort === "challenge" ? "CHALLENGE" : "THEMASPECIAL"}
              title={c.naam}
              meta={c.dagen.length + " onderdelen · MIND"}
              onPress={() => router.push({ pathname: "/challenges/[challenge]", params: { challenge: c.slug } })}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      {/* Slot 5: naslagwerk */}
      <ContentSection title="Tips voor jou" action="Alles bekijken" onAction={() => router.push("/naslagwerk")}>
        <ContentShelf>
          {tips.map((a) => (
            <ShelfCard
              key={a.slug}
              tone="white"
              label="BRON: MIND"
              title={a.titel}
              meta={a.onderwerp}
              onPress={() => router.push({ pathname: "/naslagwerk/[artikel]", params: { artikel: a.slug } })}
            />
          ))}
        </ContentShelf>
      </ContentSection>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
