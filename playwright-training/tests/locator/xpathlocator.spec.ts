import { test } from '@playwright/test';

//Syntax 1: //tagName[@attribute='value']
//Syntax 2: //tagName[text()='value']
//Syntax 3: //tagName[contains(@attribute,'value')]
//Syntax 4: //tagName[starts-with(@attribute,'value')]
//Syntax 5: //tagName[contains(text(),'value')]
//Syntax 6: //tagName[starts-with(text(),'value')]
//Syntax 7: //tagName[@attribute1='value' and @attribute2='value' and text()='value']
//Syntax 8: referenceElementXpath/relationship::targetElementXpath


test("Xpath Locator", async ({ page }) => {
    await page.goto("https://accounts.creatio.com/login/alm")
    //To Locate the Creatio logo by using syantx 1
    await page.locator('//img[@alt="logo"]')

    // to locate the This website uses cookies by using syantx 2
    await page.locator('//div[text()=("This website uses cookies")]')

    //To Locate  the Creatio logo by using syantx 3
    await page.locator('//img[contains(@alt,"log")]')

    //to locate the Necessary button by using syantx 3
    await page.locator('//input[contains(@name=Endpoint)]')

    //to locate the cookiesbot.com by using synatx 3
    await page.locator('//a[contains(@href,"cookiebot.com/en")]')

    //to locate the cookiesbot.com by using synatx 4
    await page.locator('//a[starts-with(@aria-label,"Cookiebot ")]')

    //to locate the This website uses cookies by using synatx 5
    await page.locator('//div[contains(text(),"This website uses cookies")]')

    //to locate the This website uses cookies by using synatx 6
    await page.locator('//div[starts-with(text(),"This ")]')

    //to loacte the This website uses cookies by using syntax 7
    await page.locator('//div[@class="CybotCookiebotDialogBodyContentHeading" and text()="This website uses cookies"]')
})