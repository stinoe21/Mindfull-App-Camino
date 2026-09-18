// De vlieger met een gezicht per onderwerp.
//
// Besloten door Stijn op 1 september 2026: de tips en artikelen krijgen geen
// losse iconen, maar de mascotte zelf met een uitdrukking die bij het
// onderwerp past. Slaperig bij slaap, overspannen bij burn-out, een
// zweetdruppel bij stress. De tekening blijft de originele zittende vlieger
// (MascotteVlieger, staat "wolken"); alleen het gezicht en een enkel attribuut
// erbij zijn nieuw, in dezelfde dunne inktlijn, zodat het één hand blijft.
//
// Techniek: de originele ogen en mond worden afgedekt met de vliegerkleur
// (accentCoral, dezelfde tint als het lijf in die pose) en daaroverheen komt
// het nieuwe gezicht. Het frame van de pose is 129 bij 99; de ogen staan op
// (52,40) en (71,40), de mond rond (59,52).

import { View } from "react-native";
import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import { palette } from "../tokens/tokens.ts";

import { MascotteVlieger } from "./MascotteVlieger.tsx";

const W = 129;
const H = 99;

export type Uitdrukking =
  | "slaperig"
  | "gestrest"
  | "overspannen"
  | "somber"
  | "bang"
  | "piekerend"
  | "energiek"
  | "in-balans"
  | "ontspannen"
  | "standvastig";

/** Onderwerp uit de bibliotheek van MIND naar een uitdrukking. */
export const UITDRUKKING_PER_ONDERWERP: Record<string, Uitdrukking> = {
  Slaap: "slaperig",
  Stress: "gestrest",
  Somberheid: "somber",
  Angst: "bang",
  Piekeren: "piekerend",
  Energie: "energiek",
  Balans: "in-balans",
  Ontspanning: "ontspannen",
  Grenzen: "standvastig",
};

/** Een enkel artikel dat sterker is dan zijn onderwerp. */
export const UITDRUKKING_PER_SLUG: Record<string, Uitdrukking> = {
  "burn-out": "overspannen",
};

// De kaartkleur die bij een onderwerp hoort: dezelfde kleurfamilie als de
// vlieger, een stap lichter dan het lijf, zodat de vlieger op zijn eigen
// kaart staat en het rooster per onderwerp een eigen tint krijgt. Sinds
// 13 september 2026 (Stijn: "flets"): de kaarten stonden allemaal in zand
// of coral-50 en waren op het creme vel nauwelijks van elkaar te
// onderscheiden. Waar lijf en familie te dicht bij elkaar liggen (piekeren,
// balans, ontspanning) staat de vlieger op een koele of warme buurtint.
const KAARTKLEUR: Record<Uitdrukking, string> = {
  slaperig: palette.purple100,
  gestrest: palette.coral100,
  overspannen: palette.yellow200,
  somber: palette.primary100,
  bang: palette.violet100,
  piekerend: palette.primary50,
  energiek: palette.yellow200,
  "in-balans": palette.lime100,
  ontspannen: palette.violet50,
  standvastig: palette.primary100,
};

// De gekozen stand van een onderwerpchip: dezelfde familie, twee stappen
// dieper dan de kaart, zodat een aangevinkt onderwerp zijn kleur houdt en
// toch duidelijk "aan" staat (Stijn, 13 september 2026: in petrol viel niet
// op welke je had aangevinkt).
const CHIPKLEUR_GEKOZEN: Record<Uitdrukking, string> = {
  slaperig: palette.purple300,
  gestrest: palette.coral400,
  overspannen: palette.yellow500,
  somber: palette.primary300,
  bang: palette.violet400,
  piekerend: palette.primary200,
  energiek: palette.yellow500,
  "in-balans": palette.lime400,
  ontspannen: palette.violet300,
  standvastig: palette.primary300,
};

/** De gekozen chipkleur bij een onderwerp; zonder onderwerp de merkkleur-tint. */
export function chipKleurGekozenVoor(onderwerp?: string, slug?: string): string {
  const gekozen = uitdrukkingVoor(onderwerp, slug);
  return gekozen ? CHIPKLEUR_GEKOZEN[gekozen] : palette.primary200;
}

/** De kaartkleur bij een onderwerp of slug; zonder onderwerp de zandkaart. */
export function kaartKleurVoor(onderwerp?: string, slug?: string): string {
  const gekozen = uitdrukkingVoor(onderwerp, slug);
  return gekozen ? KAARTKLEUR[gekozen] : palette.yellow100;
}

export type Lijn = { d: string; dik?: number; vul?: boolean };

// Per uitdrukking een eigen tint uit het palet (lijf en schaduw), zodat het
// rooster niet één kleur is. Koel en gedempt voor de zware onderwerpen,
// warm en licht voor de lichte. Stijn, 1 september 2026.
const KLEUR: Record<Uitdrukking, { lijf: string; schaduw: string }> = {
  slaperig: { lijf: palette.purple200, schaduw: palette.purple400 },
  gestrest: { lijf: palette.accentCoral, schaduw: palette.coral600 },
  overspannen: { lijf: palette.yellow600, schaduw: palette.yellow700 },
  somber: { lijf: palette.primary300, schaduw: palette.primary500 },
  bang: { lijf: palette.violet300, schaduw: palette.violet500 },
  piekerend: { lijf: palette.purple100, schaduw: palette.purple300 },
  energiek: { lijf: palette.accentYellow, schaduw: palette.yellow600 },
  "in-balans": { lijf: palette.lime200, schaduw: palette.lime500 },
  ontspannen: { lijf: palette.primary100, schaduw: palette.primary300 },
  standvastig: { lijf: palette.primary500, schaduw: palette.primary700 },
};

// Gezichten en attributen, als paden in het frame van 129 bij 99.
export const OGEN = {
  open: ["M52.5 37.5 v5.5", "M71.5 37.5 v5.5"],
  dicht: ["M49.5 40 q3 2.6 6 0", "M68.5 40 q3 2.6 6 0"],
  blij: ["M49.5 41.5 q3 -3.4 6 0", "M68.5 41.5 q3 -3.4 6 0"],
  omhoog: ["M52.5 35 v4.5", "M71.5 35 v4.5"],
  // Moe: half dichte ogen, een vlakke lijn met een klein oogwit eronder.
  moe: ["M49.5 40 h6", "M68.5 40 h6", "M50.5 42.5 q2 1.6 4 0", "M69.5 42.5 q2 1.6 4 0"],
  // Dichtgeknepen, tegen kou of wind in (check-in, 17 september 2026).
  knijp: ["M49.5 37.5 l5.5 2.5 l-5.5 2.5", "M74.5 37.5 l-5.5 2.5 l5.5 2.5"],
};
export const MOND = {
  glimlach: "M54.5 50.5 q5 5.5 10 0",
  breed: "M53 49.5 q6.5 8 13 0",
  vlak: "M55 52.5 h9",
  verdrietig: "M54.5 54.5 q5 -5 10 0",
  golvend: "M53.5 52.5 q2.5 -3 5 0 t5 0",
  klein: "M56.5 52 q3 3 6 0",
};

/** Een gezicht voor de zittende vlieger: ogen, mond en een enkel attribuut. */
export type Gezicht = { ogen: string[]; rondeOgen?: boolean; mond?: string; kleineMond?: boolean; extra: Lijn[] };

const UITDRUKKINGEN: Record<Uitdrukking, Gezicht> = {
  slaperig: {
    ogen: OGEN.dicht,
    mond: MOND.klein,
    extra: [
      { d: "M86 24 h5 l-5 5 h5" },
      { d: "M95 12 h7 l-7 7 h7", dik: 1.6 },
    ],
  },
  gestrest: {
    ogen: [],
    rondeOgen: true,
    mond: MOND.golvend,
    extra: [
      { d: "M82 26 q-2.6 4.5 0 6.5 q2.6 -2 0 -6.5 Z", vul: true },
      { d: "M103 26 q-2.5 6 0 12" },
      { d: "M108 24 q-3 7.5 0 15" },
    ],
  },
  overspannen: {
    ogen: OGEN.moe,
    mond: MOND.klein,
    // Stoom die traag omhoog kringelt: uitgeblust, niet boos.
    extra: [
      { d: "M86 20 q-3 -4 0 -8 q3 -4 0 -8" },
      { d: "M94 18 q-3 -4 0 -8 q3 -4 0 -8" },
    ],
  },
  somber: {
    ogen: OGEN.open,
    mond: MOND.verdrietig,
    extra: [{ d: "M75.5 45 q-2.2 4 0 6 q2.2 -2 0 -6 Z", vul: true }],
  },
  bang: {
    ogen: [],
    rondeOgen: true,
    kleineMond: true,
    extra: [
      { d: "M8 30 q-2.5 6 0 12" },
      { d: "M103 30 q2.5 6 0 12" },
    ],
  },
  piekerend: {
    ogen: OGEN.omhoog,
    mond: MOND.golvend,
    extra: [
      { d: "M81 29 a1.6 1.6 0 1 0 0.01 0" },
      { d: "M87 22 a2.3 2.3 0 1 0 0.01 0" },
      { d: "M96 13 a3.4 3.4 0 1 0 0.01 0" },
    ],
  },
  energiek: {
    ogen: OGEN.blij,
    mond: MOND.breed,
    extra: [
      { d: "M90 10 l4 4 M94 10 l-4 4" },
      { d: "M104 26 v6 M101 29 h6" },
      { d: "M8 34 l3 3 M11 34 l-3 3" },
    ],
  },
  "in-balans": {
    ogen: OGEN.open,
    mond: MOND.glimlach,
    extra: [
      { d: "M100 20 a2 2 0 1 0 0.01 0" },
      { d: "M12 44 a2 2 0 1 0 0.01 0" },
    ],
  },
  ontspannen: {
    ogen: OGEN.dicht,
    mond: MOND.glimlach,
    extra: [
      { d: "M70 56 q2 -1.5 4 0 t4 0" },
      { d: "M72 60 q2 -1.5 4 0 t4 0" },
    ],
  },
  standvastig: {
    ogen: OGEN.open,
    mond: MOND.vlak,
    extra: [
      { d: "M48.5 33 l8 2", dik: 1.8 },
      { d: "M75.5 33 l-8 2", dik: 1.8 },
    ],
  },
};

export type VliegerOnderwerpProps = {
  /** Onderwerp uit de bibliotheek (Slaap, Stress, ...). Onbekend: het gewone gezicht. */
  onderwerp?: string;
  /** Slug van het artikel, voor een enkele uitzondering zoals burn-out. */
  slug?: string;
  /** Rechtstreeks een uitdrukking, bijvoorbeeld voor de kitchen sink. */
  uitdrukking?: Uitdrukking;
  hoogte?: number;
  /** Eén vaste kleur in plaats van de kleur van de uitdrukking: de mascotte van de onboarding. */
  kleur?: { lijf: string; schaduw: string };
};

export function uitdrukkingVoor(onderwerp?: string, slug?: string): Uitdrukking | undefined {
  if (slug && UITDRUKKING_PER_SLUG[slug]) return UITDRUKKING_PER_SLUG[slug];
  if (onderwerp && UITDRUKKING_PER_ONDERWERP[onderwerp]) return UITDRUKKING_PER_ONDERWERP[onderwerp];
  return undefined;
}

export function VliegerOnderwerp({ onderwerp, slug, uitdrukking, hoogte = 56, kleur: eigenKleur }: VliegerOnderwerpProps) {
  const gekozen = uitdrukking ?? uitdrukkingVoor(onderwerp, slug);
  if (!gekozen) return <MascotteVlieger state="wolken" hoogte={hoogte} />;
  return <VliegerMetGezicht gezicht={UITDRUKKINGEN[gekozen]} kleur={eigenKleur ?? KLEUR[gekozen]} hoogte={hoogte} label={"Vlieger, " + gekozen} />;
}

export type VliegerMetGezichtProps = {
  gezicht: Gezicht;
  kleur: { lijf: string; schaduw: string };
  hoogte?: number;
  /** Wat een schermlezer voorleest. */
  label: string;
};

/**
 * De zittende vlieger met een eigen gezicht. VliegerOnderwerp kiest het
 * gezicht per onderwerp; de check-in kiest het per weerwoord, zodat de
 * vlieger laat zien welk weer je aanwijst (Stijn, 17 september 2026).
 */
export function VliegerMetGezicht({ gezicht: g, kleur, hoogte = 56, label }: VliegerMetGezichtProps) {
  const schaal = hoogte / H;

  return (
    <View style={{ width: W * schaal, height: H * schaal }} accessibilityLabel={label}>
      <MascotteVlieger state="wolken" hoogte={hoogte} kleur={kleur} />
      <Svg width={W * schaal} height={H * schaal} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", left: 0, top: 0 }}>
        {/* Het originele gezicht afdekken met de lijfkleur. */}
        <Circle cx={52.5} cy={40} r={4.4} fill={kleur.lijf} />
        <Circle cx={71.5} cy={40} r={4.4} fill={kleur.lijf} />
        <Ellipse cx={59.5} cy={52} rx={7.5} ry={5.2} fill={kleur.lijf} />
        {/* Ogen */}
        {g.rondeOgen ? (
          <>
            <Circle cx={52.5} cy={40} r={2.7} fill={palette.baseInk} />
            <Circle cx={71.5} cy={40} r={2.7} fill={palette.baseInk} />
          </>
        ) : (
          g.ogen.map((d) => <Path key={d} d={d} stroke={palette.baseInk} strokeWidth={2.4} strokeLinecap="round" fill="none" />)
        )}
        {/* Mond */}
        {g.kleineMond ? (
          <Circle cx={59.5} cy={52.5} r={2.3} stroke={palette.baseInk} strokeWidth={1.6} fill="none" />
        ) : g.mond ? (
          <Path d={g.mond} stroke={palette.baseInk} strokeWidth={1.8} strokeLinecap="round" fill="none" />
        ) : null}
        {/* Attributen */}
        {g.extra.map((l) => (
          <Path
            key={l.d}
            d={l.d}
            stroke={palette.baseInk}
            strokeWidth={l.dik ?? 1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={l.vul ? palette.baseInk : "none"}
          />
        ))}
      </Svg>
    </View>
  );
}
