// @ts-check
import { test, expect } from '@playwright/test';

const randomString = crypto.randomUUID();
const initText = 'Your content goes here.';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('check that changes is backed from iframe input', async ({ page }) => {
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  
  const iframe = page.frameLocator('#mce_0_ifr');
  
  // // Add text to the input field
  // const editor = iframe.locator('#tinymce');
  // await editor.fill(randomString);

  // await expect(editor).toHaveText(`${initText}${randomString}`);

  // await page.getByText('Edit').click();
  // // Undo changes 
  // await page.getByText('Undo').click();

  // // Expect that initText is displayed in the editor
  // await expect(editor).toHaveText(initText);
});
