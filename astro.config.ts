// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://next-mountain-ventures-llc.github.io/treetrimming_1",
  base: process.env.NODE_ENV === "production" ? "/treetrimming_1" : "/",

  // Required for GitHub Pages
  output: "static",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Image optimization settings
  image: {
    // Allow remote images from WordPress API
    remotePatterns: [{ protocol: "http" }, { protocol: "https" }],
  },
});
