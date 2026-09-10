// Quote van de dag
//
// De pagina achter de quote op Home (Stijn, 10 september 2026: "misschien tof
// als er wat meer wordt genoemd over de quote als je erop klikt"). De quote
// groot op het vel, daaronder wat hij kan betekenen en wie het zei, en de
// deelknop. De teksten staan bij de quote zelf in data/quotes.ts; dit scherm
// verzint niets. Het staat in de tabs zodat de navigatiepil blijft, maar is
// geen tab: de balk toont alleen de vijf vaste bestemmingen.

import { Share, View } from "react-native";

import { palette, space } from "@mind/ui";
import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { quoteVanVandaag } from "@/features/content/data/quotes";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  overline: "QUOTE VAN DE DAG",
  betekenis: "Wat het kan betekenen",
  over: "Wie het zei",
  deel: "Deel deze quote",
  deelNaschrift: "Quote van de dag uit Weer MIND.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    overline: "QUOTE OF THE DAY",
    betekenis: "What it can mean",
    over: "Who said it",
    deel: "Share this quote",
    deelNaschrift: "Quote of the day from Weer MIND.",
  },
};

export default function QuotePagina() {
  const t = useVertaling(teksten);
  const quote = quoteVanVandaag();

  const deel = () => {
    Share.share({ message: "“" + quote.tekst + "”\n" + quote.auteur + "\n\n" + t("deelNaschrift") });
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />} metNavRuimte>
      <View style={{ alignItems: "center", paddingHorizontal: space[3], gap: space[1] }}>
        <AppText rol="labelOverline" kleur="brand">{t("overline")}</AppText>
        {/* Zelfde ornament als op Home: het openingsteken hangt hoog in zijn
            regel, dus de quote wordt eronder omhoog getrokken. */}
        <AppText rol="display" style={{ color: palette.purple300, marginBottom: -space[4] }} accessibilityElementsHidden>
          {"“"}
        </AppText>
        <AppText rol="quote" centreer>
          {quote.tekst}
        </AppText>
        <View style={{ marginTop: space[2] }}>
          <AppText rol="labelCaption" kleur="secondary" centreer>
            {quote.auteur}
          </AppText>
        </View>
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("betekenis")}</AppText>
        <AppText rol="body">{quote.betekenis}</AppText>
      </View>

      <View style={{ gap: space[2] }}>
        <AppText rol="h3">{t("over")}</AppText>
        <AppText rol="body">{quote.over}</AppText>
      </View>

      <Button label={t("deel")} fullWidth onPress={deel} />
    </ScreenCanvas>
  );
}
