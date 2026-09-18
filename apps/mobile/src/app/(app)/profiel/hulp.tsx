// Hulp en uitleg
//
// Eén vaste plek voor wat iemand wil weten als hij een vraag heeft
// (gatenlijst 17 september 2026: "hulp, vragen, contact" ontbrak helemaal, en
// de uitleg van het weer stond alleen op het welkomscherm). Geen zesde tab:
// een pagina onder Profiel, ook te openen vanaf de "Uitleg"-links bij de
// kaart, de check-in en de challenges, en vanaf het foutscherm.
//
// Korte antwoorden in gewone taal, elk achter een uitklaprij (hetzelfde
// patroon als de uitleg onder Tips), zodat er geen lap tekst staat. Een link
// kan een rij open zetten met ?open=<sleutel>.
//
// Wat er staat volgt de documenten en niets anders: docs/datamodel.md (wat
// waar bewaard wordt), docs/privacy-besluiten.md (16 jaar, geen escalatie) en
// de toestemmingstekst in features/profiel/ToestemmingKeuze.tsx. Wijzigt daar
// iets, dan hier ook. Contact ontbreekt nog: MIND heeft nog geen supportadres
// vastgelegd. Zodra dat er is, komt het hier als eigen rij.

import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Lijst } from "@mind/ui/components/LijstRij";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";
import { UitklapRij } from "@mind/ui/components/UitklapRij";
import { WeerIcoon } from "@mind/ui/components/WeerIcoon";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { HulplijnKaart } from "@/features/hulplijn/HulplijnKaart";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { InstellingenGroep, InstellingenRij } from "@/features/profiel/InstellingenRij";
import { WEER_NAMEN } from "@/features/weer/teksten";

import { WEATHER_CODES } from "@mind/types";

const nl = {
  titel: "Hulp en uitleg",
  ondertitel: "Hoe Weertje werkt, en wat er met je gegevens gebeurt.",
  weerTitel: "Zo werkt het mentale weer",
  weerTekst:
    "In deze app is het weer een vergelijking voor hoe je je voelt. Het zegt niets over wie je bent, alleen hoe vandaag voelt. Je schuift vier keer: hoe warm het voelt, hoeveel wind je mee hebt, hoe ver je kunt kijken en hoe rustig het weer is. Samen geven ze een van vijf weerbeelden.",
  weerGeenOordeel: "Geen weer is goed of fout. Morgen kan het anders zijn.",
  vragenTitel: "Vragen",
  checkinVraag: "Wat gebeurt er met mijn check-in?",
  checkinAntwoord:
    "De standen van de vier schuiven blijven op je telefoon. Je weer van vandaag ook: aan het eind van de dag is het weg, er is geen geschiedenis. Gaf je toestemming, dan telt alleen je weerbeeld anoniem mee in het mentale weer van Nederland. Inchecken mag zo vaak je wilt; meetellen doe je hooguit één keer per ochtend en één keer per middag.",
  kaartVraag: "Hoe komt het weer van Nederland tot stand?",
  kaartAntwoord:
    "Elke check-in met toestemming telt mee in een totaal per uur en per provincie. De kaart kleurt een provincie in het weer dat daar het vaakst voorkomt. Een provincie verschijnt pas als daar genoeg mensen hebben ingecheckt, zodat niemand te herkennen is. Zie je jouw provincie niet, dan zijn het er nog te weinig.",
  anoniemVraag: "Is dit echt anoniem?",
  anoniemAntwoord:
    "Ja. We koppelen jouw weer niet aan je account en laten nooit het antwoord van één persoon zien. In het totaal staat alleen dat iemand in een provincie dit weer had. Er bestaat geen regel per persoon, dus ook wij kunnen niet terugvinden wat jij invulde.",
  accountVraag: "Waarom heb ik een account nodig?",
  accountAntwoord:
    "Zo telt iedereen hooguit één keer per ochtend en één keer per middag mee, en kan niemand het beeld van Nederland sturen. Bij je account staan je e-mailadres en wanneer je voor het laatst meetelde. Niet wat je weer was.",
  gegevensVraag: "Wat staat er van mij op mijn telefoon, en wat bij MIND?",
  gegevensAntwoord:
    "Op je telefoon: je naam, je onderwerpen, je weer van vandaag, je bewaarde tips, hoe ver je bent met een challenge en je toestemming. Bij MIND: je e-mailadres, en de dag en het dagdeel waarop je voor het laatst meetelde. Je antwoorden op een zelftest worden nergens bewaard.",
  leeftijdVraag: "Waarom moet ik 16 zijn?",
  leeftijdAntwoord:
    "Onder de 16 heb je voor een app als deze toestemming van je ouders nodig. Die vragen we niet, en daarom is Weertje er vanaf 16 jaar.",
  challengesVraag: "Waarom komt er maar één challenge-dag per dag vrij?",
  challengesAntwoord:
    "MIND heeft de challenges zo gemaakt dat je er de tijd voor neemt: één kleine stap per dag. De volgende dag staat morgen klaar. Je voortgang staat alleen op je telefoon.",
  verwijderenVraag: "Hoe verwijder ik mijn gegevens?",
  verwijderenAntwoord:
    "Onder Profiel kies je Account verwijderen. Je account en alles op je telefoon is dan direct weg. Wat al anoniem is meegeteld blijft in het totaal staan: daar staat niets in dat naar jou wijst. Wil je alleen niet meer meetellen, dan trek je je toestemming in onder Profiel.",
  hulpVraag: "Is dit hulpverlening?",
  // Woordelijk dezelfde zin als op de Hulplijn-pagina en onder "Over deze app".
  hulpAntwoord: "Deze app is geen hulpverlening en geen vervanging van professionele hulp.",
  hulpAntwoord2: "Niemand leest mee, en de app grijpt nooit zelf in. Wil je met iemand praten, dan staat de MIND Hulplijn hieronder en op elke tab.",
  meerTitel: "Meer",
  over: "Over deze app",
  toestemmingen: "Toestemmingen",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Help and explanation",
    ondertitel: "How Weertje works, and what happens to your data.",
    weerTitel: "How the mental weather works",
    weerTekst:
      "In this app the weather is a comparison for how you feel. It says nothing about who you are, only how today feels. You slide four times: how warm it feels, how much wind is behind you, how far you can see and how calm the weather is. Together they give one of five kinds of weather.",
    weerGeenOordeel: "No weather is right or wrong. Tomorrow can be different.",
    vragenTitel: "Questions",
    checkinVraag: "What happens to my check-in?",
    checkinAntwoord:
      "The positions of the four sliders stay on your phone. So does your weather of today: at the end of the day it is gone, there is no history. If you gave permission, only your kind of weather counts anonymously towards the mental weather of the Netherlands. You can check in as often as you like; you count at most once per morning and once per afternoon.",
    kaartVraag: "How is the weather of the Netherlands made?",
    kaartAntwoord:
      "Every check-in with permission counts towards a total per hour and per province. The map colours a province in the weather that occurs most there. A province only appears once enough people have checked in there, so nobody can be recognised. If you don't see your province, there are not enough yet.",
    anoniemVraag: "Is this really anonymous?",
    anoniemAntwoord:
      "Yes. We do not link your weather to your account and never show one person's answer. The total only says that someone in a province had this weather. There is no line per person, so we cannot trace what you entered either.",
    accountVraag: "Why do I need an account?",
    accountAntwoord:
      "So everyone counts at most once per morning and once per afternoon, and nobody can steer the picture of the Netherlands. Your account holds your email address and when you last counted. Not what your weather was.",
    gegevensVraag: "What is kept on my phone, and what at MIND?",
    gegevensAntwoord:
      "On your phone: your name, your topics, your weather of today, your saved tips, how far you are in a challenge and your permission. At MIND: your email address, and the day and part of the day you last counted. Your answers to a self-test are not kept anywhere.",
    leeftijdVraag: "Why do I have to be 16?",
    leeftijdAntwoord:
      "Under 16 you need your parents' permission for an app like this. We do not ask for that, so Weertje is for 16 and older.",
    challengesVraag: "Why does only one challenge day open per day?",
    challengesAntwoord:
      "MIND made the challenges so that you take your time: one small step a day. The next day is ready tomorrow. Your progress only lives on your phone.",
    verwijderenVraag: "How do I delete my data?",
    verwijderenAntwoord:
      "Under Profile choose Delete account. Your account and everything on your phone is gone right away. What has already counted anonymously stays in the total: nothing in it points to you. If you only want to stop counting, withdraw your permission under Profile.",
    hulpVraag: "Is this a care service?",
    hulpAntwoord: "This app is not a care service and does not replace professional help.",
    hulpAntwoord2: "Nobody reads along, and the app never steps in by itself. If you want to talk to someone, the MIND help line is below and on every tab.",
    meerTitel: "More",
    over: "About this app",
    toestemmingen: "Permissions",
  },
};

/** De sleutels waarmee een link een rij open kan zetten: /profiel/hulp?open=kaart */
export type HulpRij = "checkin" | "kaart" | "anoniem" | "account" | "gegevens" | "leeftijd" | "challenges" | "verwijderen" | "hulp";

const RIJEN: HulpRij[] = ["checkin", "kaart", "anoniem", "account", "gegevens", "leeftijd", "challenges", "verwijderen", "hulp"];

export default function HulpEnUitleg() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { open } = useLocalSearchParams<{ open?: string }>();

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} metNavRuimte>
      <View style={{ gap: space[1] }}>
        <AppText rol="h1">{t("titel")}</AppText>
        <AppText rol="subtitle">{t("ondertitel")}</AppText>
      </View>

      <View style={{ gap: space[3] }}>
        <AppText rol="h3">{t("weerTitel")}</AppText>
        <AppText rol="body">{t("weerTekst")}</AppText>
        {/* De vijf weerbeelden, met hetzelfde icoon als op de uitkomst en de kaart. */}
        <View style={{ gap: space[2] }}>
          {WEATHER_CODES.map((code) => (
            <View key={code} style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
              <WeerIcoon staat={code} hoogte={28} />
              <AppText rol="body">{WEER_NAMEN[code]}</AppText>
            </View>
          ))}
        </View>
        <AppText rol="body" kleur="secondary">{t("weerGeenOordeel")}</AppText>
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("vragenTitel")}</AppText>
        <Lijst>
          {RIJEN.map((rij) => (
            <UitklapRij key={rij} titel={t((rij + "Vraag") as keyof typeof nl)} startOpen={open === rij}>
              <AppText rol="body">{t((rij + "Antwoord") as keyof typeof nl)}</AppText>
              {rij === "hulp" ? <AppText rol="body">{t("hulpAntwoord2")}</AppText> : null}
            </UitklapRij>
          ))}
        </Lijst>
      </View>

      <InstellingenGroep titel={t("meerTitel")}>
        <InstellingenRij label={t("toestemmingen")} onPress={() => router.push("/profiel/toestemmingen")} />
        <InstellingenRij label={t("over")} onPress={() => router.push("/profiel/over")} laatste />
      </InstellingenGroep>

      <HulplijnKaart />
    </ScreenCanvas>
  );
}
