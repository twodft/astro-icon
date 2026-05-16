import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import type { IntegrationOptions } from "../typings/integration";
import { createPlugin } from "./vite-plugin-astro-icon.js";

export default function createIntegration(opts: IntegrationOptions = {}): AstroIntegration {
  const componentsEntry = fileURLToPath(new URL("../components/index.ts", import.meta.url));

  return {
    name: "astro-icon",
    hooks: {
      "astro:config:setup"({ updateConfig, config, logger }) {
        const external = config.output === "static" ? ["@iconify-json/*"] : undefined;
        const { root, output } = config;
        updateConfig({
          vite: {
            plugins: [createPlugin(opts, { root, output, logger })],
            resolve: {
              // Cloudflare's workerd dev pipeline can prebundle bare package
              // imports before Vite virtual modules are available.
              alias: {
                "@dallay/astro-icon/components": componentsEntry,
              },
            },
            ssr: {
              external,
              noExternal: ["@dallay/astro-icon"],
            },
          },
        });
      },
    },
  };
}
