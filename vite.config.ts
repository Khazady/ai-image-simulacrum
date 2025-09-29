import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/ai-image-simulacrum/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
