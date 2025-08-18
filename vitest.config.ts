/// <reference types="vitest/config" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "postcss.config.js",
        "tailwind.config.js",
        "src/App.tsx",
        "src/i18n.ts",
        "src/main.tsx",
        "**/node_modules/**",
        "**/dist/**",
        "**/*.d.ts",
        "**/*.interfaces.ts",
        "src/redux/*",
        "src/shared/constants.ts",
        "src/services/*",
      ],
    },
  },
});
