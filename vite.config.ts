import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/phonebook/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
  },
  css: {
    modules: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
