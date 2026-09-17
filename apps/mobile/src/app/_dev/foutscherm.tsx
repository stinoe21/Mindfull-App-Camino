// Voorbeeld van het foutscherm, zodat het te bekijken is zonder de app echt
// te laten crashen. Alleen in ontwikkelbuilds, zie _layout.tsx hiernaast.

import { useRouter } from "expo-router";

import { Foutscherm } from "@/features/systeem/Foutscherm";

export default function FoutschermVoorbeeld() {
  const router = useRouter();
  return <Foutscherm error={new Error("voorbeeld van een fout")} retry={async () => router.back()} />;
}
