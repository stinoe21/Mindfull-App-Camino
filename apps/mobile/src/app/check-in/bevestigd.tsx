// Check-in bevestigd
//
// Dit tussenscherm is vervallen na de feedback van Mind van 27 augustus 2026:
// na de check-in zie je direct je uitkomst, zonder extra klik. De route blijft
// bestaan als doorverwijzing, zodat oude paden nergens stranden. De
// bevestigingstekst en de meldingen staan nu op het uitkomstscherm.

import { Redirect, useLocalSearchParams } from "expo-router";

export default function CheckInBevestigd() {
  const { melding } = useLocalSearchParams<{ melding?: string }>();
  return <Redirect href={{ pathname: "/check-in/uitkomst", params: melding ? { melding } : {} }} />;
}
