import { expect, test } from '@playwright/test';

// test ("Verify the Browser actions",async ({page})=>{

//    await page.goto ("https://www.youtube.com/")

//    await expect (page).toHaveTitle("YouTube")
// })

// //global hooks

// test.afterAll ("after all",async ({})=>{
//     console.log("After all")
// })
//  test. beforeAll("befor all",async({})=>{
//     console.log("-----befor all--------")
//  })

//  test.beforeEach("After each",async({})=>{
//     console.log("===before each====")
//  })

//  test.afterEach("After each",async({})=>{
//     console.log("<<<<<After each>>>>>")
//  })

test("group1 test case", async ({ page }) => {
    page.setDefaultNavigationTimeout(45000)
    await page.goto("https://www.selenium.dev/")

    await page.setViewportSize({width:1210,height:1210})

    await expect(page).toHaveTitle("Selenium")
    await page.goto("https://www.youtube.com/")

    await expect(page).toHaveTitle("YouTube")

    await expect(page).toHaveURL("https://www.youtube.com/")

    await page.goto("https://www.youtube.com/watch?v=ziuIDwX18h4&list=PLUDwpEzHYYLtvMVjc-Va3RXLKtdB-ofc2")

    await page.reload()

    await page.goBack()

    await page.goForward()

    await page.close()
})
test.afterAll ("after all",async ({})=>{
    console.log("After all")
})
 test. beforeAll("befor all",async({})=>{
    console.log("-----befor all--------")
 })

 test.beforeEach("After each",async({})=>{
    console.log("===before each====")
 })

 test.afterEach("After each",async({})=>{
    console.log("<<<<<After each>>>>>")
 })


