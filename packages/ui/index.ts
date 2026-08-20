// Het enige importpunt van het design system.
//
//   import { colors, type, space, radius } from "@mind/ui";
//
// Componentcode gebruikt `colors` (de semantische laag), niet `palette`.
// Zie packages/ui/README.md voor waarom dat onderscheid bestaat.

// Met de .ts erbij en niet zonder: app.config.ts wordt door Node geladen en niet
// door Metro, en Node lost een import zonder extensie niet op.
export * from "./tokens/tokens.ts";
