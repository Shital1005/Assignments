import {expect, test} from '@playwright/test';

test ("verify the browser actions", async ({page})=> {
 await page.goto("https://www.google.com/");

 await page.setViewportSize({width:1200,height:1210});

await expect(page).toHaveTitle("Google");


await page.goto("https://playwright.dev/");

await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

await page.goBack ();

await page.goForward();

await page.reload();

await page.goto("https://www.youtube.com/")

await expect(page).toHaveTitle("YouTube")
await page.goForward();
await page.goBack();
await page.reload();
await page.close()

})