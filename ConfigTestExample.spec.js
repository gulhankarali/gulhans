const { expect } = require('@playwright/test');
import { test } from './myTests';

test('New test', async ({ page, person }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText(person);
});