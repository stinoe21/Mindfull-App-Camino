// Houvast: de compacte kennislaag van de app, per onderwerp één pagina
// (Stijn, 10 september 2026, docs/scope.md). De data staat in data/houvast.ts
// en wordt gegenereerd door scripts/gen-houvast.mjs; hier alleen het opzoeken.
//
// Sinds 17 september 2026 (Stijn: "best wel wat artikelen zitten nog in de
// oude stijl") hebben ook de losse gidsen van MIND (voor naasten, ADHD,
// autisme, PTSS, ...) de vorm van een onderwerp: uitleg, tips, meer info.
// Dat gebeurt hier, bij het opzoeken, en niet in de gegenereerde data: een
// gids van MIND is al een rij tips onder koppen, dus elke kop wordt een tip
// en wat ervoor staat is de uitleg. Er verandert geen woord aan de tekst.

import type { InhoudBlok } from "./InhoudBlokken.tsx";
import { GIDSEN, type Gids } from "./data/gidsen.ts";
import { HOUVAST, type Houvast, type HouvastTip } from "./data/houvast.ts";

/**
 * Een onderwerp zoals de pagina het toont: uit Houvast, of een losse gids in
 * dezelfde vorm. Een losse gids heeft meestal geen familie uit de bibliotheek.
 */
export type Onderwerp = Omit<Houvast, "onderwerp"> & { onderwerp?: string };

export type Sectie = { kop?: string; blokken: InhoudBlok[] };

/** Blokken opknippen in secties: per kop één, met een eventuele kopvrije eerste sectie. */
export function secties(blokken: InhoudBlok[]): Sectie[] {
  const uit: Sectie[] = [];
  let huidig: Sectie = { blokken: [] };
  for (const b of blokken) {
    if (b.kop) {
      if (huidig.kop || huidig.blokken.length) uit.push(huidig);
      huidig = { kop: b.kop, blokken: [] };
    } else {
      huidig.blokken.push(b);
    }
  }
  if (huidig.kop || huidig.blokken.length) uit.push(huidig);
  return uit;
}

// Koppen aan het begin van een gids die uitleg zijn en geen tip ("Over
// autisme", "PTSS in het kort", "Wat is ...?"), en koppen die in de app geen
// doel hebben, net als in scripts/gen-houvast.mjs.
const ACHTERGROND = [/\?$/, /in het kort$/i, /^over /i, /^waarom /i];
const VERVALT = [/^meer lezen/i, /^lees meer/i];

// MIND schrijft een enkele kop in hoofdletters ("BLIJF ER NIET MEE RONDLOPEN!");
// op een kaart staat die als gewone zin. "Tip 1:" vervalt, de app nummert zelf.
function tipKop(kop: string): string {
  const zonderNummer = kop.replace(/^tip\s*\d+:\s*/i, "");
  const schreeuwt = zonderNummer === zonderNummer.toUpperCase() && /[A-Z]{4}/.test(zonderNummer);
  return schreeuwt ? zonderNummer.charAt(0) + zonderNummer.slice(1).toLowerCase() : zonderNummer;
}

/** Een losse gids in de vorm van een onderwerp: de aanloop als uitleg, elke kop daarna als tip. */
export function onderwerpUitGids(gids: Gids): Onderwerp {
  const alle = secties(gids.blokken).filter((s) => !s.kop || !VERVALT.some((p) => p.test(s.kop ?? "")));
  // Een kop zonder tekst eronder ("TIPS OM TE PRATEN OVER JE KLACHTEN") is
  // een tussentitel: alles ervoor is uitleg. Anders loopt de uitleg tot de
  // eerste kop die een tip is.
  const tussentitel = alle.findIndex((s) => s.kop && !s.blokken.length);
  let grens = tussentitel;
  if (grens < 0) {
    grens = 0;
    while (grens < alle.length && (!alle[grens].kop || ACHTERGROND.some((p) => p.test(alle[grens].kop ?? "")))) grens++;
  }
  const meer = alle.slice(0, grens).flatMap((s) => (s.kop ? [{ kop: s.kop }, ...s.blokken] : s.blokken));
  const tips: HouvastTip[] = alle
    .slice(grens)
    .filter((s) => s.kop && s.blokken.length)
    .map((s) => ({ kop: tipKop(s.kop ?? ""), blokken: s.blokken }));
  return {
    slug: gids.slug,
    titel: gids.titel.charAt(0).toUpperCase() + gids.titel.slice(1),
    onderwerp: gids.onderwerp,
    kort: gids.intro,
    meer,
    tips,
    gids: { slug: gids.slug, titel: gids.titel, url: gids.url, aanmeld: gids.aanmeld },
  };
}

// De gidsen die niet al bij een onderwerp van Houvast horen.
const LOSSE_GIDSEN: Onderwerp[] = GIDSEN.filter((g) => !HOUVAST.some((h) => h.gids?.slug === g.slug || h.slug === g.slug)).map(onderwerpUitGids);

/** Het onderwerp bij een slug: uit Houvast, of anders de losse gids met die slug. */
export function houvastVoor(slug: string | undefined): Onderwerp | undefined {
  return HOUVAST.find((h) => h.slug === slug) ?? LOSSE_GIDSEN.find((g) => g.slug === slug);
}

/** Alle onderwerpen binnen een onderwerp van de bibliotheek (Slaap, Stress, ...). */
export function houvastBijOnderwerp(onderwerp: string): Houvast[] {
  return HOUVAST.filter((h) => h.onderwerp === onderwerp);
}

/** Het onderwerp waar een online gids bij hoort, zodat een gids in de app op zijn onderwerp opent. */
export function houvastVoorGids(gidsSlug: string): Houvast | undefined {
  return HOUVAST.find((h) => h.gids?.slug === gidsSlug);
}

// Artikelen (psychipedia) die onder een andere naam een onderwerp zijn.
const ONDERWERP_PER_ARTIKEL: Record<string, string> = {
  "bewegen-en-mentale-gezondheid": "bewegen",
  assertiviteit: "nee-zeggen",
};

/** Het onderwerp waar een artikel uit de psychipedia bij hoort. */
export function houvastVoorArtikel(artikelSlug: string): Houvast | undefined {
  const slug = ONDERWERP_PER_ARTIKEL[artikelSlug] ?? artikelSlug;
  return HOUVAST.find((h) => h.slug === slug);
}

/** Om en om per onderwerp, zodat twee buren in een rij nooit hetzelfde onderwerp hebben zolang er keus is. */
function omEnOm(lijst: Houvast[]): Houvast[] {
  const perOnderwerp = new Map<string, Houvast[]>();
  for (const h of lijst) perOnderwerp.set(h.onderwerp, [...(perOnderwerp.get(h.onderwerp) ?? []), h]);
  const groepen = [...perOnderwerp.values()];
  const uit: Houvast[] = [];
  for (let ronde = 0; uit.length < lijst.length; ronde++) {
    for (const groep of groepen) if (groep[ronde]) uit.push(groep[ronde]);
  }
  return uit;
}

/**
 * De rij op Home: de gekozen onderwerpen voorop, en binnen beide delen om en
 * om per onderwerp. Met alleen "voorkeuren voorop" stonden Stress, Burn-out en
 * Werkstress naast elkaar, drie keer bijna dezelfde koraalrode vlieger
 * (Stijn, 17 september 2026).
 */
export function houvastVoorHome(voorkeuren: string[]): Houvast[] {
  const gekozen = HOUVAST.filter((h) => voorkeuren.includes(h.onderwerp));
  const rest = HOUVAST.filter((h) => !voorkeuren.includes(h.onderwerp));
  return [...omEnOm(gekozen), ...omEnOm(rest)];
}
