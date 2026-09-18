// Check-in, stap 1 tot 4
//
// De vier sliders. De teksten staan in features/weer/teksten.ts (van Stijn,
// herzien op 17 september 2026). De sliderwaarden blijven op het toestel.
// "Sla vandaag over" is de eerlijke uitweg (no-guilt, productprincipes 4 en 6).
//
// Sinds 17 september 2026 (Stijn: "het design van de vragenlijst mag echt
// veel beter, dynamischer") is de check-in één doorlopend moment in plaats
// van vier losse pagina's: de vraag, de vlieger en de kleur van de hero
// vloeien in elkaar over, en het scherm antwoordt terwijl je schuift
// (features/weer/CheckinBeeld.tsx). De route blijft check-in/[stap]: het
// nummer in de URL is alleen de vraag waarmee je binnenkomt. De terugknop en
// de hardware-terugknop gaan eerst een vraag terug, en pas bij de eerste
// vraag het scherm uit.
//
// Inchecken mag zo vaak je wilt (Stijn, 15 september 2026): de sliders zijn
// altijd bereikbaar, ook als er al een weerbeeld van vandaag op het toestel
// staat. Het persoonlijke scherm toont dan de laatste. Wat begrensd is, is de
// bijdrage aan het landelijke beeld: maximaal een keer per dagdeel, en dat
// bewaakt de server (docs/limieten-en-misbruik.md sectie 2). Weet het
// toestel al dat dit dagdeel telde, dan wordt de server niet eens gevraagd.

import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, BackHandler, Easing, View } from "react-native";

import { colors, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { useMinderBeweging } from "@mind/ui/components/minderBeweging";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { Slider } from "@mind/ui/components/Slider";
import { TerugKnop } from "@mind/ui/components/TerugKnop";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { bewaarInstellingen, leesInstellingen } from "@/features/profiel/instellingen";
import { leesWaarden, resetWaarden, zetWaarde } from "@/features/weer/checkinSessie";
import { CheckinHeroLaag, CheckinVlieger, WeerWoord } from "@/features/weer/CheckinBeeld";
import { bepaalProvincieViaLocatie } from "@/features/weer/locatie";
import { bewaarWeerVanVandaag, dagdeelNu, leesWeerVanVandaag, type Dagdeel } from "@/features/weer/lokaalWeer";

import { CHECKIN_AANWIJZING, CHECKIN_KOPREGEL, CHECKIN_STAPPEN, weerwoord } from "@/features/weer/teksten";
import { bepaalWeerbeeld } from "@/features/weer/weerbeeld";
import { stuurWeerIn } from "@/features/weer/weerbericht";

// Alleen interface-teksten. De vragen, de labelparen en de weerwoorden staan
// in features/weer/teksten.ts en blijven Nederlands tot er Engelse
// check-in-teksten zijn afgesproken (docs/scope.md, meertaligheid).
const nl = {
  stapVan: "STAP {x} van {y}",
  bekijkJeWeer: "Bekijk je weer",
  verder: "Verder",
  slaOver: "Sla vandaag over",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    stapVan: "STEP {x} of {y}",
    bekijkJeWeer: "See your weather",
    verder: "Continue",
    slaOver: "Skip today",
  },
};

// De hero-staat per vraag (ontwerp 05: warm voor wind, 06: blauw voor zicht).
// Alleen bestaande achtergronden; geen nieuwe assets.
export default function CheckInStap() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const params = useLocalSearchParams<{ stap: string }>();
  const navigation = useNavigation();
  const minder = useMinderBeweging();
  const nummer = Number(params.stap);
  const start = Number.isInteger(nummer) && nummer >= 1 && nummer <= CHECKIN_STAPPEN.length ? nummer - 1 : 0;
  const [index, zetIndex] = useState(start);
  const stap = CHECKIN_STAPPEN[index];
  const laatste = index === CHECKIN_STAPPEN.length - 1;

  const [waarde, zetLokaleWaarde] = useState(leesWaarden()[stap.key]);
  const [bezig, zetBezig] = useState(false);
  // Zolang de duim van de slider vastzit, scrolt het vel niet mee.
  const [sleept, zetSleept] = useState(false);
  // De schuif van 0 tot 1, voor alles wat meebeweegt; en de overgang tussen
  // twee vragen (1 is zichtbaar, 0 is weg).
  const schuif = useRef(new Animated.Value(waarde / 100)).current;
  const zichtbaar = useRef(new Animated.Value(1)).current;
  const wisselt = useRef(false);

  const schuifNaar = (w: number) => {
    zetLokaleWaarde(w);
    schuif.setValue(w / 100);
  };

  // Naar een andere vraag: de oude vloeit weg, de nieuwe komt op. De waarde
  // van de vraag die je verlaat wordt bewaard, die van de nieuwe opgehaald.
  const naarVraag = (doel: number) => {
    if (wisselt.current) return;
    zetWaarde(stap.key, waarde);
    const wissel = () => {
      const w = leesWaarden()[CHECKIN_STAPPEN[doel].key];
      zetIndex(doel);
      zetLokaleWaarde(w);
      schuif.setValue(w / 100);
    };
    if (minder) {
      wissel();
      return;
    }
    wisselt.current = true;
    Animated.timing(zichtbaar, { toValue: 0, duration: 140, easing: Easing.in(Easing.cubic), useNativeDriver: true }).start(() => {
      wissel();
      Animated.timing(zichtbaar, { toValue: 1, duration: 260, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start(() => {
        wisselt.current = false;
      });
    });
  };

  // Verandert het nummer in de URL terwijl het scherm al open staat (een
  // deeplink naar een andere vraag), dan volgt het scherm.
  const startRef = useRef(start);
  useEffect(() => {
    if (startRef.current === start) return;
    startRef.current = start;
    const w = leesWaarden()[CHECKIN_STAPPEN[start].key];
    zetIndex(start);
    zetLokaleWaarde(w);
    schuif.setValue(w / 100);
  }, [schuif, start]);

  const terug = () => {
    if (index > 0) {
      naarVraag(index - 1);
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace("/dashboard");
    }
  };
  const terugRef = useRef(terug);
  terugRef.current = terug;
  const indexRef = useRef(index);
  indexRef.current = index;
  useEffect(() => {
    // Android: de hardware-terugknop doet hetzelfde als de knop linksboven.
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if (indexRef.current === 0) return false;
      terugRef.current();
      return true;
    });
    return () => sub.remove();
  }, []);

  const verder = async () => {
    if (!laatste) {
      naarVraag(index + 1);
      return;
    }
    zetWaarde(stap.key, waarde);
    // Laatste stap: lokaal het weerbeeld bepalen, bewaren, en de anonieme
    // bijdrage insturen als daarvoor toestemming is gegeven.
    zetBezig(true);
    const weerbeeld = bepaalWeerbeeld(leesWaarden());
    const instellingen = await leesInstellingen();
    const eerder = await leesWeerVanVandaag();
    let resultaat: string = "niet-gedeeld";
    let dagdeel: Dagdeel = 0;
    if (instellingen.consentWeerbericht && eerder && eerder.bijgedragen >= dagdeelNu()) {
      // Dit dagdeel telde al mee: alleen het eigen weer bijwerken, de server
      // niet vragen (die zou hetzelfde zeggen, of offline "geen verbinding").
      resultaat = "al-bijgedragen";
    } else if (instellingen.consentWeerbericht) {
      // Provincie alleen via de locatie, op het moment zelf bepaald op het
      // toestel (features/weer/locatie.ts). Normaal is de toestemming al in
      // de onboarding gegeven; wie de onboarding eerder deed, krijgt de vraag
      // van het systeem hier één keer, daarna onthoudt de telefoon het.
      // Lukt de positie even niet, dan de laatst bekende. Alleen de
      // provinciecode gaat mee, nooit de locatie. Een provincie zonder
      // locatie (zelf gekozen, van voor 14 september 2026) telt niet mee.
      const uitkomst = await bepaalProvincieViaLocatie();
      let provincie: string | null = null;
      if (uitkomst.status === "ok") {
        provincie = uitkomst.provincie;
        if (provincie !== instellingen.provincie || !instellingen.provincieViaLocatie) {
          await bewaarInstellingen({ provincie, provincieViaLocatie: true });
        }
      } else if (uitkomst.status === "geweigerd") {
        if (instellingen.provincie !== null || instellingen.provincieViaLocatie) {
          await bewaarInstellingen({ provincie: null, provincieViaLocatie: false });
        }
      } else if (instellingen.provincieViaLocatie) {
        provincie = instellingen.provincie;
      }
      const ingestuurd = await stuurWeerIn(weerbeeld, provincie);
      resultaat = ingestuurd.resultaat;
      dagdeel = ingestuurd.dagdeel;
    }
    await bewaarWeerVanVandaag(weerbeeld, dagdeel);
    resetWaarden();
    zetBezig(false);
    // Direct door naar de uitkomst, zonder tussenscherm: feedback van Mind
    // van 27 augustus 2026. De bevestiging en een eventuele melding staan op
    // het uitkomstscherm zelf.
    router.replace({ pathname: "/check-in/uitkomst", params: { melding: resultaat } });
  };

  const slaOver = () => {
    resetWaarden();
    router.replace("/dashboard");
  };

  // De mascotte per vraag op de standaardhero, die live meekleurt met de
  // schuif. Op het vel: de kopregel met de stippen, de vraag, en dan het
  // weerwoord met de slider los op het vel (geen kaart eromheen, zie
  // Slider.tsx), midden in de ruimte boven de knoppen zodat je duim erbij kan.
  const woord = weerwoord(stap.woorden, waarde);
  const stapLabel = t("stapVan").replace("{x}", String(index + 1)).replace("{y}", String(CHECKIN_STAPPEN.length));
  const overgang = { opacity: zichtbaar, transform: [{ translateX: zichtbaar.interpolate({ inputRange: [0, 1], outputRange: [space[4], 0] }) }] };
  return (
    <ScreenCanvas
      state="default"
      terugKnop={<TerugKnop onPress={terug} />}
      heroLaag={<CheckinHeroLaag vraag={stap.key} schuif={schuif} zichtbaar={zichtbaar} />}
      heroInhoud={<CheckinVlieger vraag={stap.key} waarde={waarde} woord={woord} schuif={schuif} zichtbaar={zichtbaar} />}
      vast
      scrollUit={sleept}
    >
      <View style={{ gap: space[2] }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: space[3] }} accessible accessibilityLabel={CHECKIN_KOPREGEL + ", " + stapLabel}>
          <AppText rol="labelOverline" kleur="brand">{CHECKIN_KOPREGEL}</AppText>
          <View style={{ flexDirection: "row", gap: space[2] }}>
            {CHECKIN_STAPPEN.map((s, i) => (
              <View key={s.key} style={{ width: i === index ? space[5] : space[2], height: space[2], borderRadius: radius.pill, backgroundColor: i <= index ? colors.brandDefault : colors.borderDefault }} />
            ))}
          </View>
        </View>
        <Animated.View style={[{ gap: space[2] }, overgang]}>
          <AppText rol="h2">{stap.vraag}</AppText>
          {index === 0 ? <AppText rol="body" kleur="secondary">{CHECKIN_AANWIJZING}</AppText> : null}
        </Animated.View>
      </View>
      {/* Het weerwoord en de slider: de enige handeling op dit scherm. */}
      <View style={{ flex: 1, justifyContent: "center", minHeight: 200 }}>
        <Animated.View style={[{ gap: space[3] }, overgang]}>
          <WeerWoord woord={woord} />
          <Slider value={waarde} onChange={schuifNaar} leftLabel={stap.links} rightLabel={stap.rechts} onGreep={zetSleept} />
        </Animated.View>
      </View>
      <View style={{ gap: space[3] }}>
        <Button label={laatste ? t("bekijkJeWeer") : t("verder")} fullWidth bezig={bezig} onPress={verder} />
        <Button label={t("slaOver")} variant="link" fullWidth onPress={slaOver} />
      </View>
    </ScreenCanvas>
  );
}
