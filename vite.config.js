import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
const _plugins = [react(), eslint()];
_plugins.unshift(MillionLint.vite());
export default defineConfig({
  plugins: _plugins,
});
