// Schrijft de lijst onderwerpen voor het beheer (apps/admin) uit de content
// van de app. Het beheer biedt MIND alleen onderwerpen aan die de app kent;
// een tip bij een onbekend onderwerp zou nergens in beeld komen.
//
// Draaien na een wijziging in de onderwerpen:  node scripts/gen-admin-onderwerpen.mjs
// De test features/content/beheerOnderwerpen.test.ts faalt als dit vergeten is.

import { writeFileSync } from "node:fs";

import { HOUVAST } from "../apps/mobile/src/features/content/data/houvast.ts";

const lijst = HOUVAST.map((h) => ({ slug: h.slug, titel: h.titel, groep: h.onderwerp, tips: h.tips.length })).sort((a, b) => a.titel.localeCompare(b.titel, "nl"));

const bestand = `// GEGENEREERD BESTAND. Niet met de hand wijzigen.
// Bron: de onderwerpen in apps/mobile/src/features/content/data/houvast.ts.
// Opnieuw genereren: node scripts/gen-admin-onderwerpen.mjs

export type BeheerOnderwerp = { slug: string; titel: string; groep: string; tips: number };

export const ONDERWERPEN: BeheerOnderwerp[] = ${JSON.stringify(lijst, null, 2)};
`;

writeFileSync(new URL("../apps/admin/src/lib/onderwerpen.ts", import.meta.url), bestand);
console.log(`${lijst.length} onderwerpen geschreven`);
