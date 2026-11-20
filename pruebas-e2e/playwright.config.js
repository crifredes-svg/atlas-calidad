// Configuración de Playwright para Atlas
const { defineConfig, devices } = require("@playwright/test");

// En tu PC usa Microsoft Edge (ya instalado) para no descargar Chromium; en CI usa Chromium normal
const canalLocal = process.env.CI ? {} : { channel: "msedge" };

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3351",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "computador", use: { ...devices["Desktop Chrome"], ...canalLocal } },
    { name: "celular", use: { ...devices["Pixel 7"], ...canalLocal } },
  ],
});