// Account verwijderen
//
// Verplicht in de app zelf (App Store-richtlijn 5.1.1(v)). Wat er gebeurt
// volgt docs/datamodel.md: het account gaat weg via delete_own_account(), de
// profielrij en de sessies gaan mee via de cascade, en de anonieme bijdragen
// aan het landelijke beeld blijven omdat er niets in staat dat naar een
// persoon wijst. Dat laatste staat hier in de uitleg, niet in een foutmelding.
//
// Volgorde: eerst de server, dan het toestel. Andersom zou een mislukte
// servercall een gebruiker achterlaten met een account dat hij niet meer kan
// bereiken maar dat wel bestaat.

import { useRouter } from "expo-router";
import { useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { TerugNaarVorige } from "@/components/TerugNaarVorige";
import { getSupabase } from "@/features/backend/client";
import { wisAlleLokaleData } from "@/features/profiel/instellingen";

export default function AccountVerwijderen() {
  const router = useRouter();
  const [bevestigen, zetBevestigen] = useState(false);
  const [bezig, zetBezig] = useState(false);
  const [melding, zetMelding] = useState<string | null>(null);

  const verwijder = async () => {
    zetBezig(true);
    zetMelding(null);

    const client = getSupabase();
    if (client) {
      const { data } = await client.auth.getSession().catch(() => ({ data: { session: null } }));
      if (data.session) {
        const { error } = await client.rpc("delete_own_account");
        if (error) {
          zetBezig(false);
          zetMelding(
            "Het verwijderen is niet gelukt. Controleer je verbinding en probeer het opnieuw. Er is nog niets gewist."
          );
          return;
        }
      }
      // De sessie is aan de serverkant al weg; dit ruimt alleen het toestel op.
      await client.auth.signOut({ scope: "local" }).catch(() => undefined);
    }

    await wisAlleLokaleData();
    zetBezig(false);
    router.dismissAll();
    router.replace("/welkom");
  };

  return (
    <ScreenCanvas state="default" terugKnop={<TerugNaarVorige />}>
      <AppText rol="h1">Account verwijderen</AppText>

      <Card tone="white">
        <AppText rol="body">
          Als je je account verwijdert, verdwijnen je account en je profiel van de server. Alles wat
          op je telefoon is opgeslagen wordt gewist.
        </AppText>
        <AppText rol="bodySmall" kleur="secondary">
          Je eerdere check-ins tellen anoniem mee in het landelijke weerbericht. Daar staat niets in dat
          naar jou wijst, dus die aantallen kunnen niet worden teruggehaald of verwijderd.
        </AppText>
      </Card>

      {!bevestigen ? (
        <Button label="Verwijder mijn account" variant="secondary" fullWidth onPress={() => zetBevestigen(true)} />
      ) : (
        <Card tone="outline">
          <AppText rol="h3">Weet je het zeker?</AppText>
          <AppText rol="bodySmall" kleur="secondary">Dit kan niet ongedaan worden gemaakt.</AppText>
          <Button label="Ja, verwijder alles" fullWidth bezig={bezig} onPress={verwijder} />
          <Button label="Nee, toch niet" variant="link" fullWidth onPress={() => zetBevestigen(false)} />
        </Card>
      )}

      {melding ? (
        <Card tone="outline">
          <AppText rol="bodySmall" kleur="secondary">{melding}</AppText>
        </Card>
      ) : null}

      <Button label="Terug" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
