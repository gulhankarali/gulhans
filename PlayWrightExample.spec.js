const { test, expect } = require('@playwright/test');
//const { Context } = require('selenium-webdriver/firefox');
test('basic test', async ({ page }) => {
await page.goto('https://github.com/login');
await page.fill('input[name="login"]', 'gulhan.karali@gmail.com');
await page.fill('input[name="password"]', 'Havva1946@');
await expect(page.locator('name=commit')).toBeVisible;
await page.click('input[name="commit"]');
await page.click('a[href="/gulhankarali/HomeWork"]');
await page.click('a[href="/gulhankarali/HomeWork/settings/branch_protection_rules/new?branch_name=main"]');

});
