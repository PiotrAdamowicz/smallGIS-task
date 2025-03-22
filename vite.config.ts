import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true,
    environment: "happy-dom"
  }
});
