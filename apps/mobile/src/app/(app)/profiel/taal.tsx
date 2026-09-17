// Profiel: taal
//
// De interfacetaal (issue #47): Nederlands of Engels, en Nederlands is de
// standaard (17 september 2026). De inhoud van onderwerpen, gidsen en
// challenges blijft Nederlands, zie docs/scope.md.

import { AppText } from "@mind/ui/components/AppText";

import { TAAL_KEUZES, useTaal, useVertaling, type Taal, type Woordenboek } from "@/features/i18n/taal";
import { InstellingenGroep, InstellingenRij } from "@/features/profiel/InstellingenRij";
import { KeuzePagina } from "@/features/profiel/KeuzePagina";

const nl = {
  titel: "Taal",
  uitleg: "Onderwerpen, gidsen en challenges blijven Nederlands.",
  groep: "Interface",
  nederlands: "Nederlands",
  engels: "English",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: { titel: "Language", uitleg: "Topics, guides and challenges remain in Dutch.", groep: "Interface", nederlands: "Nederlands", engels: "English" },
};
const LABEL: Record<Taal, "nederlands" | "engels"> = { nl: "nederlands", en: "engels" };

export default function ProfielTaal() {
  const t = useVertaling(teksten);
  const { taal: keuze, kiesTaal } = useTaal();

  return (
    <KeuzePagina titel={t("titel")} uitleg={t("uitleg")}>
      <InstellingenGroep titel={t("groep")}>
        {TAAL_KEUZES.map((optie, i) => (
          <InstellingenRij
            key={optie}
            label={t(LABEL[optie])}
            onPress={() => kiesTaal(optie)}
            laatste={i === TAAL_KEUZES.length - 1}
            rechts={
              <AppText rol="body" kleur={keuze === optie ? "primary" : "secondary"} accessibilityLabel={keuze === optie ? "gekozen" : undefined}>
                {keuze === optie ? "✓" : " "}
              </AppText>
            }
          />
        ))}
      </InstellingenGroep>
    </KeuzePagina>
  );
}
