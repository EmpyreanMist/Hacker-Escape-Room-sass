const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:5501',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
