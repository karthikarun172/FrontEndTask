import { defineConfig } from "vitest/config"; // ✅ FIXED
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FrontEndTask/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts", // ✅ this is the setup file for jest-dom
  },
});
