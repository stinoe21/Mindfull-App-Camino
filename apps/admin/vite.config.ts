// Het beheer van MIND: een statische site, zonder server. Alles wat het kan
// staat als functie in de database, zie docs/datamodel.md ("admin_users").

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: { port: 5180 },
});
