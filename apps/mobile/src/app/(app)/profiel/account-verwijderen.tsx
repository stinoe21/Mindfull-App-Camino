// Account verwijderen
//
// Verplicht in de app zelf (App Store-richtlijn 5.1.1(v)). Wat er gebeurt
// volgt docs/datamodel.md: het account gaat weg, de profielrij gaat mee via
// de cascade, en de anonieme bijdragen aan het landelijke beeld blijven omdat
// er niets in staat dat naar een persoon wijst. Dat laatste staat hier in de
// uitleg, niet in een foutmelding.
//
// LET OP: de serverfunctie die het auth-account verwijdert bestaat nog niet
// (dat is een migratie, een eigen taak van de eigenaar). Tot die er is wist
// dit scherm alles op het toestel en logt het uit, en zegt het dat eerlijk.

import { useRouter } from "expo-router";
import { useState } from "react";

import { AppText } from "@mind/ui/components/AppText";
import { Button } from "@mind/ui/components/Button";
import { Card } from "@mind/ui/components/Card";
import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

import { getSupabase } from "@/features/backend/client";
import { wisAlleLokaleData } from "@/features/profiel/instellingen";

export default function AccountVerwijderen() {
  const router = useRouter();
  const [bevestigen, zetBevestigen] = useState(false);
  const [bezig, zetBezig] = useState(false);

  const verwijder = async () => {
    zetBezig(true);
    await getSupabase()?.auth.signOut().catch(() => undefined);
    await wisAlleLokaleData();
    zetBezig(false);
    router.dismissAll();
    router.replace("/welkom");
  };

  return (
    <ScreenCanvas state="default">
      <AppText rol="h1">Account verwijderen</AppText>

      <Card tone="white">
        <AppText rol="body">
          Als je je account verwijdert, verdwijnen je account en je profiel. Alles wat op je telefoon is
          opgeslagen wordt gewist.
        </AppText>
        <AppText rol="bodySmall" kleur="secondary">
          Je eerdere check-ins tellen anoniem mee in het landelijke weerbericht. Daar staat niets in dat
          naar jou wijst, dus die aantallen kunnen niet worden teruggehaald of verwijderd.
        </AppText>
        <AppText rol="bodySmall" kleur="secondary">
          In deze testversie wordt je serveraccount nog niet definitief verwijderd; dat volgt zodra de
          bijbehorende serverfunctie er is.
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

      <Button label="Terug" variant="link" onPress={() => router.back()} />
    </ScreenCanvas>
  );
}
