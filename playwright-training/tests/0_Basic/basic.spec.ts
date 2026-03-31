 import {test} from '@playwright/test';
 
 test ('launch the application', async({page})=>{
    await page.goto ("www.google.com")
 })