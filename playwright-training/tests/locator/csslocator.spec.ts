import {expect, test} from '@playwright/test'


//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute='value']
//Syntax 4: tagName[attribute*='value'] //* means contains
//Syntax 5: tagName[attribute^='value'] //^ means starts-with
//Syntax 6: tagName[attribute$='value'] //$ means ends-with
//Syntax 7: tagName[attribute1='value'][attribute2='value']
//Syntax 8: Advanced CSS selector with relationships => ancestor > parent > child


test ("CSS LOCATOR", async ({page})=>{

    //launch the Application
 await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=7BE0E7ACF18A658E84D590F93E0A0169')

//Verify the title
 await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking")
 
//Locate The SOAP EndPoint Text box by using Syantx 1
 await page.locator('input#soapEndpoint')

 //Locate the Thresold Text box by using syantx 2
  await page.locator('input.inputSmall');

  //Locate The SOAP Endpoint text Box By Using Syantx 3

  await page.locator('input[name="soapEndpoint"]');

  //Locate the OpenAPI by using Syntax 4
  await page.locator('a[href*="api-docs"]');

//Locate the OpenAPI By using Synatx 5
await page.locator('a[href^="api"]')

//Locat the openAPI By Using Synatx 5

await page.locator('a[href^="api"]')

//Locate the OpenAPI By using synatx 6
await page.locator('a[href$="html"]')

//Locate the INIT Button by using syntax 7
await page.locator('button[type=submit][value=INIT]')

//Locate the admin page by using synatx 8
await page.locator('ul[class=leftmenu]>li>a[href="admin.htm"]')

})