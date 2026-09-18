// Een link naar buiten openen, op één manier.
//
// Tot 18 september 2026 riep elk scherm zelf Linking.openURL aan, zonder
// opvang: een link gooide je de app uit naar de browser, en ging het mis, dan
// gebeurde er niets. Nu:
//
// - Een webadres opent in het venster van het systeem binnen de app (Safari
//   View Controller op iOS, Custom Tabs op Android). Met "Gereed" sta je
//   terug op de pagina waar je was. De app ziet niet wat je daar doet en er
//   wordt niets gelogd.
// - Lukt het niet, dan zegt de app dat, met het adres erbij om over te nemen.
//
// Niet voor de kanalen van de Hulplijn: bellen, WhatsApp en mail moeten de
// eigen app van het toestel openen. Die lopen via features/hulplijn/kanalen.ts.

import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { Alert } from "react-native";

import { colors } from "@mind/ui";

import { useVertaling, type Woordenboek } from "@/features/i18n/taal";
import { meet } from "@/features/meten/meet";

const nl = {
  titel: "Deze link opent nu niet",
  uitleg: "Je kunt het adres zelf overnemen in je browser:",
  sluiten: "Sluiten",
} as const;
const teksten: Woordenboek<typeof nl> = {
  nl,
  en: {
    titel: "This link won't open right now",
    uitleg: "You can type the address into your browser yourself:",
    sluiten: "Close",
  },
};

const isWebadres = (url: string): boolean => /^https?:\/\//i.test(url);

// Alleen het domein telt mee in de gebruikstotalen, nooit het hele adres.
const domeinVan = (url: string): string | null => /^https?:\/\/(?:www\.)?([^/?#:]+)/i.exec(url)?.[1]?.toLowerCase() ?? null;

/** Opent een link. Geeft terug of het lukte; meldt zelf niets. */
export async function openLink(url: string | null | undefined): Promise<boolean> {
  if (!url) return false;
  try {
    if (isWebadres(url)) {
      const domein = domeinVan(url);
      if (domein) meet({ naam: "external_link_opened", item: domein });
      await WebBrowser.openBrowserAsync(url, { controlsColor: colors.brandDefault, dismissButtonStyle: "done" });
    } else {
      await Linking.openURL(url);
    }
    return true;
  } catch {
    return false;
  }
}

/** Voor schermen: opent een link en zegt het in gewone taal als dat niet lukt. */
export function useOpenLink(): (url: string | null | undefined) => void {
  const t = useVertaling(teksten);
  return (url) => {
    void openLink(url).then((gelukt) => {
      if (!gelukt && url) Alert.alert(t("titel"), t("uitleg") + "\n\n" + url, [{ text: t("sluiten") }]);
    });
  };
}
