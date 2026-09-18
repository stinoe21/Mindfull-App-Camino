// Het deelbeeld: wat iemand deelt als hij zijn weer of de quote deelt.
//
// Besluit Stijn, 18 september 2026: delen blijft, "als je dat zelf wilt", en
// het moet mooi zijn: een beeld dat je over een eigen foto in je verhaal kunt
// zetten, zoals de stickers van Strava. Daarom drie vormen:
//
// - "licht": doorzichtige achtergrond, witte letters. Voor op een donkere foto.
// - "donker": doorzichtige achtergrond, inktzwarte letters. Voor op een lichte foto.
// - "kaart": een zandkaart met ronde hoeken. Voor een gewoon bericht, waar een
//   doorzichtig plaatje op wit of zwart terechtkomt en er kaal uitziet.
//
// Dit component tekent alleen. Het vastleggen en delen staat in deel.ts, het
// scherm eromheen in app/delen.tsx. Alles komt uit de tokens en de bestaande
// vliegers; er is geen nieuw beeld verzonnen. De naam van de app staat er
// klein onder, zonder MIND: geen credits in de interface (Stijn, 10 september).

import { forwardRef } from "react";
import { View } from "react-native";

import { colors, palette, radius, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";

import { WEER_NAMEN } from "@/features/weer/teksten";
import { WeerVlieger } from "@/features/weer/WeerVlieger";

import type { WeatherCode } from "@mind/types";

export type DeelInhoud = { soort: "weer"; weerbeeld: WeatherCode } | { soort: "quote"; tekst: string; auteur: string };
export type DeelVorm = "licht" | "donker" | "kaart";

export const DEEL_VORMEN: DeelVorm[] = ["licht", "donker", "kaart"];

/** De breedte van het beeld in punten; vastgelegd wordt het op de pixeldichtheid van het toestel. */
export const STICKER_BREEDTE = 300;

type Props = {
  inhoud: DeelInhoud;
  vorm: DeelVorm;
  /** De regels die per taal verschillen. */
  overline: string;
  appNaam: string;
};

export const DeelSticker = forwardRef<View, Props>(function DeelSticker({ inhoud, vorm, overline, appNaam }, ref) {
  const tekstKleur = vorm === "licht" ? colors.textOnprimary : colors.textPrimary;
  const zachtKleur = vorm === "licht" ? colors.textOnprimary : vorm === "kaart" ? colors.textSecondary : colors.textPrimary;
  return (
    <View
      ref={ref}
      // Zonder dit vouwt React Native de View weg en valt er niets vast te leggen.
      collapsable={false}
      style={{
        width: STICKER_BREEDTE,
        alignItems: "center",
        gap: space[3],
        paddingVertical: space[6],
        paddingHorizontal: space[5],
        // Alleen de kaart heeft een vlak; de andere twee zijn doorzichtig.
        backgroundColor: vorm === "kaart" ? palette.yellow100 : "transparent",
        borderRadius: vorm === "kaart" ? radius.lg : 0,
      }}
    >
      {inhoud.soort === "weer" ? (
        <>
          <WeerVlieger weerbeeld={inhoud.weerbeeld} hoogte={132} />
          <View style={{ alignItems: "center", gap: space[1] }}>
            <AppText rol="labelOverline" style={{ color: zachtKleur }} allowFontScaling={false}>{overline}</AppText>
            <AppText rol="h1" centreer style={{ color: tekstKleur }} allowFontScaling={false}>{WEER_NAMEN[inhoud.weerbeeld]}</AppText>
          </View>
        </>
      ) : (
        <View style={{ alignItems: "center", gap: space[1] }}>
          <AppText rol="display" style={{ color: vorm === "licht" ? colors.textOnprimary : palette.purple300, marginBottom: -space[4] }} allowFontScaling={false}>
            {"“"}
          </AppText>
          <AppText rol="quote" centreer style={{ color: tekstKleur }} allowFontScaling={false}>{inhoud.tekst}</AppText>
          <View style={{ marginTop: space[2] }}>
            <AppText rol="labelCaption" centreer style={{ color: zachtKleur }} allowFontScaling={false}>{inhoud.auteur}</AppText>
          </View>
        </View>
      )}
      <AppText rol="labelButton" style={{ color: zachtKleur }} allowFontScaling={false}>{appNaam}</AppText>
    </View>
  );
});
