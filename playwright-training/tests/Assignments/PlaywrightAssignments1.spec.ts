// Assignment - 1
// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
// 2.verify application logo is displayed
// 3.Verify application caption displayed as "Experience the difference"
// 4.Enter invalid username
// 5.Enter empty Password
// 6.Click on login button
// 7.Verify the error message "Please enter a username and password."
// 8.Click on admin page link
// 9.select the option "soap" from dba mode radio button
// 10.Scroll to element dropdown
// 11.Select the option web service from the dropdown
// 12.click on submit button
// 13.verify submission is successful by validating success message
// 14.Click on services page link
// 15.wait for service page
// 16.Scroll down till bookstore services table
// 17.get total rows of books store services table
// 18.get total columns of books store services table
// 19.Print table data (row wise and column wise data)

import { expect, test } from '@playwright/test';
test("Verify end to end flow for PARA bank", async ({ page }) => {


    //step- 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    // Step-2.verify application logo is displayed

    const Logo = await page.locator("img.logo")
    await expect(Logo).toBeVisible()
    console.log("Logo is visible on application")

    // Step-3.Verify application caption displayed as "Experience the difference"
    const caption = await page.locator('p.caption')
    const expectedCaption = 'Experience the difference'
    const actualCaption = await 'Experience the difference'
    await expect(actualCaption).toBe(expectedCaption)
    console.log("Expected caption getting print properly")

    // Step-4.Enter invalid username
    const username = await page.locator('input[name="username"]')
    await username.clear
    await username.fill("Invalid User")
    console.log("Enter Invalid User name in User name textbox")

    // Step-5.Enter empty Password
    const Password = await page.locator('input[name="password"]')
    await Password.fill('')
    console.log("Enter empty password")

    //Step- 6.Click on login button
    const loginbutton = await page.locator('input[value="Log In"]')
    await loginbutton.click()
    console.log("Click on login button")

    // 7.Verify the error message "Please enter a username and password."
    const harderror = await page.locator('p[class=error]')
    const actualHardError = "Please enter a username and password."
    const ExpectedHardError = await "Please enter a username and password."
    await expect(actualHardError).toBe(ExpectedHardError)
    console.log("Verify the Error ,Please enter a username and password.")

    // Step-8.Click on admin page link

    const AdminLink = await page.locator('ul.leftmenu>li>a[href="admin.htm"]')
    await AdminLink.click()
    console.log("Click on admin page link")

    // Step-9.select the option "soap" from dba mode radio button
    const Radiobutton = await page.locator('input#accessMode1')
    await Radiobutton.check()
    console.log("Click on radio button SOAP")

    // Step-10.Scroll to element dropdown
    const LoanProvider = await page.locator('select#loanProvider')
    await LoanProvider.screenshot()
    console.log("Scroll the element")

    // Step-11.Select the option web service from the dropdown

    await LoanProvider.selectOption({ label: 'Web Service' })
    console.log("Select DDL AS Web service")

    //Step- 12.click on submit button

    const submitbutton = await page.locator('input[value=Submit]')
    await submitbutton.click()
    console.log("Click on Submit record")

    // Stpe-13.verify submission is successful by validating success message
    const submitmessage = await page.locator('//div[@id="rightPanel"]//p//b')

    const expetedmessage = await "Settings saved successfully."
    const actualmessage = await "Settings saved successfully."

    await expect(actualmessage).toBe(expetedmessage)

    console.log("Submit message to be verified")

    // Step-14.Click on services page link

    const ServicePage= await page.locator(' //ul[@class="leftmenu"]//a[text()="Services"]')
    await ServicePage.click ()

    console.log('Click on Service page link')

    // Step-15.wait for service page
    const bookstoreddl =await page.locator('//span[text()="Bookstore services:"]')
    await expect(bookstoreddl).toBeVisible()
    console.log("Wait for Service page loading")
    
    // step-16.Scroll down till bookstore services table
    await bookstoreddl.scrollIntoViewIfNeeded()
    console.log("Scroll down upto bookstore Dropdown value")
    

})


