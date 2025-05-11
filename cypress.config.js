import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      e2e: {
        baseUrl: "http://localhost:5173";
      }
      console.info("hey--> in config file");
      // implement node event listeners here
    },
  },
});
