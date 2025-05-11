import { defineConfig } from "cypress";

export default defineConfig({
  // baseUrl:"http://127.0.0.1:5500/index.html",
  e2e: {
    // baseUrl:"http://127.0.0.1:5500/index.html",
    baseUrl:"https://gouravsh4225.github.io/v2-portfolio/",
    setupNodeEvents(on, config) {
        // baseUrl: "https://gouravsh4225.github.io/v2-portfolio/";
        // baseUrl: "http://127.0.0.1:5500/index.html";
      }
  },
});
