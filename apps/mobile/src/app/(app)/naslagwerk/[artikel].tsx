// Artikel
//
// Een artikel uit de psychipedia had tot 17 september 2026 een eigen pagina:
// de hele tekst onder elkaar met een knop naar wijzijnmind.nl. Elk artikel
// uit de bibliotheek hoort inmiddels bij een onderwerp van Houvast, dat
// dezelfde uitleg toont in het sjabloon (uitleg, tips, meer info). Deze
// route stuurt daarom door naar dat onderwerp, zodat een oude link blijft
// werken en er geen tweede vorm van dezelfde tekst bestaat (Stijn: "best wel
// wat artikelen zitten nog in de oude stijl").

import { Redirect, useLocalSearchParams, useRouter } from "expo-router";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { houvastVoorArtikel } from "@/features/content/houvast";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";

const nl = {
  nietGevonden: "Artikel niet gevonden",
  nietGevondenUitleg: "Dit artikel bestaat niet of is verplaatst.",
  terugNaslagwerk: "Terug naar Houvast",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    nietGevonden: "Article not found",
    nietGevondenUitleg: "This article doesn't exist or has been moved.",
    terugNaslagwerk: "Back to Houvast",
  },
};

export default function Artikel() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { artikel: slug } = useLocalSearchParams<{ artikel: string }>();
  const onderwerp = slug ? houvastVoorArtikel(slug) : undefined;

  if (onderwerp) return <Redirect href={{ pathname: "/naslagwerk/houvast/[onderwerp]", params: { onderwerp: onderwerp.slug } }} />;

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <AppText rol="h1">{t("nietGevonden")}</AppText>
      <AppText rol="body" kleur="secondary">{t("nietGevondenUitleg")}</AppText>
      <Button label={t("terugNaslagwerk")} variant="secondary" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
