// Profiel: e-mailadres wijzigen
//
// Supabase mailt een bevestigingslink; pas daarna geldt het nieuwe adres. Zie
// features/auth/accountWijzigen.ts.

import { useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { TextField } from "@mind/ui/components/TextField";

import { lijktOpEmail } from "@/features/auth/accountHerstel";
import { wijzigEmail, type WijzigEmailUitkomst } from "@/features/auth/accountWijzigen";
import { useSessie } from "@/features/auth/sessie";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "E-mailadres",
  uitleg: "Waarmee je inlogt.",
  nu: "Nu: {email}",
  nieuw: "Nieuw e-mailadres",
  knop: "Stuur bevestiging",
  vulEmail: "Vul een geldig e-mailadres in.",
  verstuurd:
    "We hebben een bevestiging gestuurd naar {email}. Staat er ook een mail op je huidige adres, open dan de link in beide, op deze telefoon. Tot die tijd blijft je huidige adres gelden.",
  zelfde: "Dat is je huidige e-mailadres.",
  nietBruikbaar: "Dit e-mailadres kan niet gebruikt worden. Kies een ander adres.",
  geenSessie: "Je bent niet ingelogd. Log opnieuw in en probeer het dan nog eens.",
  geenVerbinding: "Geen verbinding. Probeer het zo opnieuw.",
  teVaak: "Dat was te vaak achter elkaar. Probeer het over een paar minuten opnieuw.",
  mislukt: "Het wijzigen lukte niet. Probeer het later opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Email address",
    uitleg: "What you log in with.",
    nu: "Now: {email}",
    nieuw: "New email address",
    knop: "Send confirmation",
    vulEmail: "Enter a valid email address.",
    verstuurd:
      "We sent a confirmation to {email}. If there is also an email at your current address, open the link in both, on this phone. Until then your current address stays in use.",
    zelfde: "That is your current email address.",
    nietBruikbaar: "This email address cannot be used. Choose another address.",
    geenSessie: "You are not logged in. Log in again and try once more.",
    geenVerbinding: "No connection. Try again in a moment.",
    teVaak: "That was too often in a row. Try again in a few minutes.",
    mislukt: "Changing it didn't work. Try again later.",
  },
};

type Melding = WijzigEmailUitkomst | "vulEmail";

export default function ProfielEmail() {
  const t = useVertaling(teksten);
  const { email: huidig } = useSessie();
  const [nieuw, zetNieuw] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<Melding | null>(null);

  const wijzig = async () => {
    if (!lijktOpEmail(nieuw)) return zetMelding("vulEmail");
    zetBezig(true);
    const uitkomst = await wijzigEmail(nieuw);
    zetBezig(false);
    zetMelding(uitkomst);
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      {huidig ? <AppText rol="body" kleur="secondary">{t("nu").replace("{email}", huidig)}</AppText> : null}
      <TextField
        value={nieuw}
        onChangeText={zetNieuw}
        placeholder={t("nieuw")}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        accessibilityLabel={t("nieuw")}
      />
      <Button label={t("knop")} variant={melding === "verstuurd" ? "secondary" : "primary"} fullWidth bezig={bezig} onPress={wijzig} />
      {melding ? (
        <AppText rol="bodySmall" kleur="secondary" accessibilityLiveRegion="polite">
          {t(melding).replace("{email}", nieuw.trim())}
        </AppText>
      ) : null}
    </KeuzePagina>
  );
}
