// playwright.config.js
//const { devices } = require('@playwright/test');
import { devices } from '@playwright/test';
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./",
  fullyParalel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  retries:1,
  use: {
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
//      testMatch: '/.*Config*.spec.ts/',
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
      testIgnore: '/.*Playwright*.spec.ts/',
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 14'],
    },
  ],
};

module.exports = config;