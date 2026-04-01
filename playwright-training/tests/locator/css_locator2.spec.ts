import { expect, test } from '@playwright/test'

test("css locator", async ({ page }) => {
    //Go to google.com
    await page.goto("https://www.google.com/");

    //Verify the title
    await expect(page).toHaveTitle("Google");

    //navigate to another page
    await page.goto("https://www.youtube.com/")

    //verify the Title
    await expect(page).toHaveURL("https://www.youtube.com/")

    //Go to back page
    await page.goBack();

        //Go to Forward page
    await page.goForward();

    //Reload the page
    await page.reload();

    //claer cookies
    await page.close();



})

//global hooks

test.afterAll("use after all",async({})=>{
    console.log("Used After all")
})

test.beforeEach("use after all",async({})=>{
    console.log("Used before each")
})
test.beforeAll("use after all",async({})=>{
    console.log("Used before all")
})
test.afterEach("use after all",async({})=>{
    console.log("Used After each")
})
