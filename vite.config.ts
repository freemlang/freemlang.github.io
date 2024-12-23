import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const basePath = import.meta.dirname;
const rootPath = path.resolve(basePath, "src");
const publicPath = path.resolve(basePath, "public");
const distPath = path.resolve(basePath, "dist");

export default defineConfig({
  plugins: [
    svelte({
      preprocess: vitePreprocess(),
    }),
    tsconfigPaths(),
  ],
  root: rootPath,
  publicDir: publicPath,
  build: {
    outDir: distPath,
    emptyOutDir: true,
  },
});
