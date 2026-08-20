// Metro in een monorepo. Zonder dit vindt de bundler packages/ui niet, want hij
// kijkt standaard alleen binnen apps/mobile.
//
// Gedeeld bestand: wijzigen doet de eigenaar, in een eigen PR.

const { getDefaultConfig } = require("expo/metro-config");
const path = require("node:path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Kijk ook naar bestanden buiten apps/mobile, anders ziet Metro een wijziging
//    in packages/ui niet en blijft de oude versie in de bundel staan.
config.watchFolders = [workspaceRoot];

// 2. Zoek dependencies eerst lokaal, daarna in de root. npm workspaces hijst het
//    meeste naar boven, dus zonder de tweede map ontbreekt bijna alles.
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// 3. Alleen deze twee mappen, niet omhoog blijven lopen. Anders pakt Metro bij
//    toeval een package uit een map boven de repo.
config.resolver.disableHierarchicalLookup = true;

// 4. De lettertypes zitten in packages/ui/assets/fonts en worden met require()
//    geladen. Zonder .ttf in deze lijst bundelt Metro ze niet mee.
if (!config.resolver.assetExts.includes("ttf")) {
  config.resolver.assetExts.push("ttf");
}

module.exports = config;
