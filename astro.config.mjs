import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://attimo-oil.com",
  output: "static",
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@astro": path.resolve(__dirname, "src/astro"),
      },
    },
    ssr: {
      noExternal: ["lucide-react", "@radix-ui/*", "embla-carousel-react", "sonner", "vaul", "cmdk"],
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
