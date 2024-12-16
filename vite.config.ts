import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  plugins: [
    svelte({
      preprocess: vitePreprocess(),
    }),
  ],
  root: path.resolve("src"),
  publicDir: path.resolve("public"),
});
