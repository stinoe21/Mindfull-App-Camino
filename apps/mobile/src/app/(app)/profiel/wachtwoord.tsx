// Profiel: wachtwoord wijzigen
//
// Eerst het huidige wachtwoord, dan het nieuwe. Zie
// features/auth/accountWijzigen.ts voor het waarom.

import { useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { TextField } from "@mind/ui/components/TextField";

import { MIN_WACHTWOORD } from "@/features/auth/accountHerstel";
import { wijzigWachtwoord, type WijzigWachtwoordUitkomst } from "@/features/auth/accountWijzigen";
import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "Wachtwoord",
  uitleg: "Kies een nieuw wachtwoord.",
  huidig: "Je huidige wachtwoord",
  nieuw: "Nieuw, minstens {n} tekens",
  nieuwLabel: "Nieuw wachtwoord, minstens {n} tekens",
  toon: "Toon wachtwoord",
  verberg: "Verberg wachtwoord",
  knop: "Wijzig wachtwoord",
  vulHuidig: "Vul je huidige wachtwoord in.",
  teKort: "Kies een nieuw wachtwoord van minstens {n} tekens.",
  ok: "Je wachtwoord is gewijzigd.",
  huidigFout: "Je huidige wachtwoord klopt niet.",
  zelfde: "Dat is je huidige wachtwoord. Kies een ander.",
  teZwak: "Dit wachtwoord is te makkelijk te raden. Kies een ander.",
  geenSessie: "Je bent niet ingelogd. Log opnieuw in en probeer het dan nog eens.",
  geenVerbinding: "Geen verbinding. Probeer het zo opnieuw.",
  teVaak: "Dat was te vaak achter elkaar. Probeer het over een paar minuten opnieuw.",
  mislukt: "Het wijzigen lukte niet. Probeer het later opnieuw.",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "Password",
    uitleg: "Choose a new password.",
    huidig: "Your current password",
    nieuw: "New, at least {n} characters",
    nieuwLabel: "New password, at least {n} characters",
    toon: "Show password",
    verberg: "Hide password",
    knop: "Change password",
    vulHuidig: "Enter your current password.",
    teKort: "Choose a new password of at least {n} characters.",
    ok: "Your password has been changed.",
    huidigFout: "Your current password is not correct.",
    zelfde: "That is your current password. Choose another.",
    teZwak: "This password is too easy to guess. Choose another.",
    geenSessie: "You are not logged in. Log in again and try once more.",
    geenVerbinding: "No connection. Try again in a moment.",
    teVaak: "That was too often in a row. Try again in a few minutes.",
    mislukt: "Changing it didn't work. Try again later.",
  },
};

type Melding = WijzigWachtwoordUitkomst | "vulHuidig" | "teKort";

export default function ProfielWachtwoord() {
  const t = useVertaling(teksten);
  const [huidig, zetHuidig] = useState("");
  const [nieuw, zetNieuw] = useState("");
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<Melding | null>(null);

  const wijzig = async () => {
    if (!huidig) return zetMelding("vulHuidig");
    if (nieuw.length < MIN_WACHTWOORD) return zetMelding("teKort");
    zetBezig(true);
    const uitkomst = await wijzigWachtwoord(huidig, nieuw);
    zetBezig(false);
    zetMelding(uitkomst);
    if (uitkomst === "ok") {
      zetHuidig("");
      zetNieuw("");
    }
  };

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <TextField
        value={huidig}
        onChangeText={zetHuidig}
        placeholder={t("huidig")}
        autoCapitalize="none"
        autoComplete="current-password"
        textContentType="password"
        wachtwoord
        toonLabel={t("toon")}
        verbergLabel={t("verberg")}
        accessibilityLabel={t("huidig")}
      />
      <TextField
        value={nieuw}
        onChangeText={zetNieuw}
        placeholder={t("nieuw").replace("{n}", String(MIN_WACHTWOORD))}
        autoCapitalize="none"
        autoComplete="new-password"
        textContentType="newPassword"
        wachtwoord
        toonLabel={t("toon")}
        verbergLabel={t("verberg")}
        accessibilityLabel={t("nieuwLabel").replace("{n}", String(MIN_WACHTWOORD))}
      />
      <Button label={t("knop")} fullWidth bezig={bezig} onPress={wijzig} />
      {melding ? (
        <AppText rol="bodySmall" kleur="secondary" accessibilityLiveRegion="polite">
          {t(melding).replace("{n}", String(MIN_WACHTWOORD))}
        </AppText>
      ) : null}
    </KeuzePagina>
  );
}
