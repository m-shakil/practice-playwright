// @ts-check
import { test, expect } from '@playwright/test';

const successfulMessage = 'Congratulations! You must have the proper credentials.';

// Set httpCredentials
test.use({
  httpCredentials: {
    username: 'admin',
    password: 'admin'
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
});

test('basic auth works', async ({ page }) => {
  await page.locator('[href="/basic_auth"]').click();
  
  // Verify that successfulMessage is displayed
  const message = await page.locator('//*[@class="example"]//p').innerText();
  expect(message).toEqual(successfulMessage);
});
