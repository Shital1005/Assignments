//Syntax 1: //tagName[@attribute='value']
//Syntax 2: //tagName[text()='value']

/****************************************************/
/****************LEVEL 2- contains , starts-with*****/
/****************************************************/
//Syntax 3: //tagName[contains(@attribute,'value')]
//Syntax 4: //tagName[starts-with(@attribute,'value')]
//Syntax 5: //tagName[contains(text(),'value')]
//Syntax 6: //tagName[starts-with(text(),'value')]

/****************************************************/
/****LEVEL 3- Combine multiple attributes using AND**/
/****************************************************/
//Syntax 7: //tagName[@attribute1='value' and @attribute2='value' and text()='value']

/****************************************************/
/****LEVEL 4- Advanced Xpath With Relationships******/
/****************************************************/

//Syntax 8: referenceElementXpath/relationship::targetElementXpath



// import{test ,expect} from '@playwright/test'

// test ("Practise for xpath locators",async({page})=>{

//     //Launch the URL https://accounts.creatio.com/login
//     await page.goto("https://app.creatio.com")
    
//     //Verify the title of Page
//     await expect(page).toHaveTitle("studio creatio free")

//     //Verify the URL
//     await expect(page).toHaveURL("https://app.creatio.com")

//     //Locate the textbox 
//     const loginbutton= page.locator('//crt-button[@class="login-button"]//button[@type="button"]')

//     await loginbutton.waitFor({ state: 'visible' });

//     await loginbutton.click()
// })

