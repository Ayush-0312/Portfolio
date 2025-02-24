import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "three/examples/js/libs/stats.min": path.resolve(__dirname, "src/libs/stats.min.js"),
    },
  },
});
