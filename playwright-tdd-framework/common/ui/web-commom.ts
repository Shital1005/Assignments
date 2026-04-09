import { Page, Locator, expect } from '@playwright/test'

export class webcommon {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    //commomn method to generate webelement locator
    async element(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }

    //Common method to luanch the application
    async LaunchApplication(url: string, title?: string): Promise<void> {
        await this.page.goto(url);
        if (title) {
            await expect(this.page).toHaveTitle(title)
        }
    }
    //common Method to scroll down
    async scrolltoelement(locator: string): Promise<void> {
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();

    }
    //common method  to click element
    async clickelemnt(locator: string): Promise<void> {
        const element = await this.element(locator);
        await this.scrolltoelement(locator)
        await element.click();
    }

    //common method  to doubleclick element
    async doubleclick(locator: string): Promise<void> {
        const element = await this.element(locator);
        await this.scrolltoelement(locator)
        await element.dblclick()
    }
    //common method  to right click on mouse
    async rightclick(locator: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.click({ button: "right" })
    }

    //common method to mouse hoover
    async mouseHoover(locator: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.hover()
    }
    //common method to force click
    async forceclick(locator: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.click({ force: true })
    }
    //common method to clear the text box
    async cleartext(locator: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.clear()
    }
    //common method to type text into text  element
    async typetext(locator: string, text: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.fill(text)

    }
    //common method to get the text entered in textbox
    async getText(locator: string): Promise<string> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.inputValue()
    }
    //Common method to select option from dropdown
    async selectoption(locator: string, option: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.selectOption(option)
    }
    //common metod to press a key on element
    async presskey(locator: string, key: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.press(key)
    }
    //common method to get a attribute value
    async getAttributeValue(locator: string, value: string): Promise<string | null> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.getAttribute(value)
    }

    //common method to get the text from an element
    async getTextElement(locator: string): Promise<string> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.textContent() || ""
    }

    //common method for file upload
    async fileupload(locator: string, filepath: string): Promise<void> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        await element.setInputFiles(filepath)
    }
    //common method for element is visible
    async isElementVisible(locator: string): Promise<Boolean> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.isVisible()
    }

    //common method for element is disable
    async isElementDisable(locator: string): Promise<Boolean> {
        const element = await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.isEnabled()
    }
 //common method for element is Disappered
    async isElementDisappeared(locator:string):Promise<Boolean>{
        const element =await this.element(locator)
        await this.scrolltoelement(locator)
        return await element.isHidden()
    }
    //common method for screenshot
    async getScreenshots(path:string):Promise<void>{
     await this.page.screenshot({path})
    }
}