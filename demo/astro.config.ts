import cloudflare from "@astrojs/cloudflare";
import icon from "@dallay/astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [icon()],
});
