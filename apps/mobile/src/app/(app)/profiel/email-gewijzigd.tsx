// De link uit de mail over het nieuwe e-mailadres opent de app hier.
//
// Met "secure email change" komen er twee mails: naar het oude en het nieuwe
// adres. De eerste link die je opent komt hier zonder code aan (Supabase
// wacht nog op de andere), de tweede met een code. Die code wisselen we in,
// zodat de sessie het nieuwe adres kent. Lukt dat niet, dan is het adres bij
// Supabase meestal toch gewijzigd; het scherm zegt in beide gevallen hetzelfde.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";

import { wisselCodeIn } from "@/features/auth/accountHerstel";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "E-mailadres",
  uitleg: "Bedankt voor het bevestigen.",
  tekst: "Kreeg je twee mails, op je oude en op je nieuwe adres? Dan geldt je nieuwe adres zodra je de link in beide hebt geopend. Onder Profiel zie je met welk adres je bent ingelogd.",
  knop: "Naar Profiel",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Email address",
    uitleg: "Thank you for confirming.",
    tekst: "Did you get two emails, at your old and your new address? Then your new address counts once you have opened the link in both. Under Profile you can see which address you are logged in with.",
    knop: "To Profile",
  },
};

export default function EmailGewijzigd() {
  const router = useRouter();
  const t = useVertaling(teksten);
  const { code } = useLocalSearchParams<{ code?: string }>();

  useEffect(() => {
    if (typeof code === "string") void wisselCodeIn(code);
  }, [code]);

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <AppText rol="body">{t("tekst")}</AppText>
      <Button label={t("knop")} fullWidth onPress={() => router.replace("/profiel")} />
    </KeuzePagina>
  );
}
