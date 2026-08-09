import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
// package.json is not in darkroom-ui exports — resolve via the package entry
const darkroomVersion = (
  JSON.parse(
    readFileSync(join(dirname(require.resolve("darkroom-ui")), "..", "package.json"), "utf8"),
  ) as { version: string }
).version;

export default defineConfig({
  define: {
    __DARKROOM_VERSION__: JSON.stringify(`v${darkroomVersion}`),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(root, "src"),
    },
  },
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
});
