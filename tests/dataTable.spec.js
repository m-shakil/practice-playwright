// @ts-check
import { test, expect } from '@playwright/test';

const expectedSum = 251;
const currencySign = '$';

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test('sum of Due values should be correct', async ({ page }) => {
  await page.locator('[href="/tables"]').click();

  // get Due column elements
  await page.locator('#table1').waitFor();
  const dueItems = page.locator('//*[@id="table1"]//td[4]');
  const count = await dueItems.count();
  
  let actualSum = 0;

  for (let i = 0; i < count; i++) {
    // get value in the column
    let itemText = await dueItems.nth(i).innerText();
    // increase actualSum with value without currencySign
    actualSum += +itemText.replace(currencySign, '').trim();
  }

  expect(actualSum).toEqual(expectedSum);
});
