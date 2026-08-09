import { createRequire } from "node:module";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);
const darkroomVersion = (
  require("darkroom-ui/package.json") as { version: string }
).version;

export default defineConfig({
  define: {
    __DARKROOM_VERSION__: JSON.stringify(`v${darkroomVersion}`),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
});
