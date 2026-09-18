// Het ene onderdeel dat in de root layout staat. Het tekent niets.
//
// Drie dingen, allemaal zonder dat een scherm er iets van weet:
//   1. elke schermweergave tellen, op het routepatroon en nooit op het pad
//      met de waarde erin;
//   2. tellen dat de app geopend is, één keer per dag, week en maand;
//   3. de tellers van afgesloten dagen versturen, bij het starten met een
//      sessie en als de app naar de achtergrond gaat.
//
// Zie docs/datamodel.md, sectie "Gebruikstotalen".

import { useSegments } from "expo-router";
import { useEffect } from "react";
import { AppState, type AppStateStatus } from "react-native";

import { useSessie } from "@/features/auth/sessie";

import { meet, meetGeopend } from "./meet.ts";
import { bewaarNu } from "./opslag.ts";
import { routePatroon } from "./tellers.ts";
import { verzendMetingen } from "./verzend.ts";

export function Meten() {
  const patroon = routePatroon(useSegments());
  const { stand } = useSessie();

  useEffect(() => {
    if (patroon) meet({ naam: "screen_viewed", item: patroon });
  }, [patroon]);

  useEffect(() => {
    void meetGeopend();
    const volgApp = (toestand: AppStateStatus) => {
      if (toestand === "active") void meetGeopend();
      else void bewaarNu().then(verzendMetingen);
    };
    const luisteraar = AppState.addEventListener("change", volgApp);
    return () => luisteraar.remove();
  }, []);

  useEffect(() => {
    if (stand === "ingelogd") void verzendMetingen();
  }, [stand]);

  return null;
}
