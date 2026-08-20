// ESLint, flat config. Gedeeld bestand: wijzigen doet de eigenaar.
//
// Naast de standaardregels van Expo staan hier de twee regels die CLAUDE.md
// sectie 6 belooft: geen hardcoded designwaarden.
//
// Ze zijn met opzet niet even streng.
//
//   mind/geen-hardcoded-kleur   fout        kleur en typografie
//   mind/maat-buiten-de-schaal  waarschuwing losse spacing en radii
//
// Waarom dat verschil: het ontwerp zit zelf niet volledig op de 4px-schaal.
// HERKOMST.md noemt 14, 18 en 28 als bewuste tussenmaten, en het spoor van de
// slider is 314 bij 4. Een maat een fout maken zou betekenen dat mensen de regel
// uitzetten, en dan vangt hij ook de kleuren niet meer. Kleur en typografie
// hebben die uitzondering niet: daar is elke afwijking een fout.

const expo = require("eslint-config-expo/flat");

// Een stringwaarde die een kleur is: #abc, #aabbcc, rgb(), rgba(), hsl(), hsla().
const KLEURWAARDE = /^\s*(#[0-9a-fA-F]{3,8}|rgba?\s*\(|hsla?\s*\()/;

const KLEUR_PROPS = new Set([
  "color",
  "backgroundColor",
  "borderColor",
  "borderTopColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderRightColor",
  "shadowColor",
  "tintColor",
  "placeholderTextColor",
  "textDecorationColor",
]);

// Typografie komt altijd uit `type`, als geheel. Eén rol is één echte snit, en
// een los fontWeight erbovenop laat Android een vetdruk namaken.
const TYPO_PROPS = new Set([
  "fontFamily",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "lineHeight",
  "letterSpacing",
]);

const MAAT_PROPS = new Set([
  "padding",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingHorizontal",
  "paddingVertical",
  "margin",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginHorizontal",
  "marginVertical",
  "gap",
  "rowGap",
  "columnGap",
  "borderRadius",
]);

const naamVan = (key) =>
  key.type === "Identifier" ? key.name : key.type === "Literal" ? String(key.value) : null;

const mind = {
  rules: {
    "geen-hardcoded-kleur": {
      meta: {
        type: "problem",
        docs: { description: "Kleur en typografie komen uit packages/ui/tokens." },
        schema: [],
        messages: {
          kleur:
            'Hardcoded kleur. Gebruik een token: import { colors } from "@mind/ui". ' +
            "Staat de kleur die je nodig hebt er niet bij, meld dat dan. Zelf invullen niet.",
          typo:
            "Hardcoded {{prop}}. Typografie komt uit `type` in @mind/ui, en als geheel: " +
            "style={...type.body}. Zet er nooit los een fontWeight of fontStyle bij, want " +
            "dan maakt Android de vetdruk na en klopt het beeld niet meer met het ontwerp.",
        },
      },
      create(context) {
        return {
          Property(node) {
            const prop = naamVan(node.key);
            if (!prop) return;
            const waarde = node.value;
            if (waarde.type !== "Literal") return;
            const isString = typeof waarde.value === "string";
            const isGetal = typeof waarde.value === "number";

            if (isString && (KLEUR_PROPS.has(prop) || KLEURWAARDE.test(waarde.value))) {
              context.report({ node: waarde, messageId: "kleur" });
            } else if (TYPO_PROPS.has(prop) && (isString || isGetal)) {
              context.report({ node: waarde, messageId: "typo", data: { prop } });
            }
          },
        };
      },
    },

    "maat-buiten-de-schaal": {
      meta: {
        type: "suggestion",
        docs: { description: "Spacing en radii komen van de schaal, tenzij het ontwerp anders zegt." },
        schema: [],
        messages: {
          maat:
            "Losse maat {{waarde}} bij {{prop}}. Zit hij op de schaal, gebruik dan space of " +
            "radius uit @mind/ui. Is dit een bewuste maat uit het ontwerp, zet er dan een " +
            "regel commentaar bij met de bron, zodat de volgende hem niet weghaalt.",
        },
      },
      create(context) {
        return {
          Property(node) {
            const prop = naamVan(node.key);
            if (!prop || !MAAT_PROPS.has(prop)) return;
            const waarde = node.value;
            if (waarde.type !== "Literal" || typeof waarde.value !== "number") return;
            if (waarde.value === 0) return;
            context.report({
              node: waarde,
              messageId: "maat",
              data: { prop, waarde: String(waarde.value) },
            });
          },
        };
      },
    },
  },
};

module.exports = [
  ...expo,

  {
    ignores: [
      "node_modules/**",
      "**/node_modules/**",
      "apps/*/.expo/**",
      "dist/**",
      // De export uit Claude Design: React DOM, specificatie en geen code die wij
      // draaien. Zie packages/ui/README.md.
      "packages/ui/reference/**",
      // De tokens zijn de bron van de waarden, daar horen ze dus wel te staan.
      "packages/ui/tokens/**",
    ],
  },

  {
    // De aliassen @/ en @mind/* staan in apps/mobile/tsconfig.json. Zonder deze
    // resolver ziet eslint-plugin-import ze niet en meldt hij elke import af.
    settings: {
      "import/resolver": {
        typescript: {
          project: ["apps/mobile/tsconfig.json"],
        },
      },
    },
  },

  {
    files: ["apps/**/*.{ts,tsx}", "packages/ui/components/**/*.{ts,tsx}"],
    plugins: { mind },
    rules: {
      "mind/geen-hardcoded-kleur": "error",
      "mind/maat-buiten-de-schaal": "warn",
    },
  },
];
