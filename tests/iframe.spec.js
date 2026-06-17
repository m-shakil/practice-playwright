// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FramesPage from './pages/FramePages/FramesPage.js';
import IFramePage from './pages/FramePages/IFramePage.js';
import MainPage from './pages/MainPage.js';

const defaultInputText = 'Your content goes here.';
const randomString = crypto.randomUUID();

test('interact with text in iFrame', async ({ customBrowser: browser }) => {
  const mainPage = new MainPage(browser.page);
  await mainPage.clickNavigationLink('Frames');

  const framesPage = new FramesPage(browser.page);
  await framesPage.clickIframeButton();

  // Implement missed steps
  const iframePage = new IFramePage(browser.page);
  await iframePage.typeIntoEditor(randomString);
  expect(await iframePage.getFrameText()).toEqual(`${defaultInputText}${randomString}`);

  await iframePage.undoChanges();
  expect(await iframePage.getFrameText()).toEqual(defaultInputText);
});
