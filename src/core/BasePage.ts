import { Page } from "playwright";
import { Guid } from "guid-typescript";
import * as logins from '../data/logins.json';
import * as search from '../data/search.json';
import { addAttach, addMsg } from "jest-html-reporters/helper";

export class BasePage {
    defaultScreenshotDirectory: string;
    page: Page;
    td_logins = () => logins
    td_search = () => search
    constructor(page) {
        this.page = page;
        this.defaultScreenshotDirectory = 'C:/Temp';
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async fill(locator: string, text: string) {
        await page.fill(locator, text);
    }

    async press(locator: string, key: string) {
        await page.press(locator, key);
    }

    async text(locator: string) {
        return await page.textContent(locator)
    }

    async screenshot(fullPage: boolean) {
        await page.screenshot({ path: this.defaultScreenshotDirectory + '/pw_ss_' + Guid.create() + '.png', fullPage: fullPage });

    }

    async elementScreenshot(locator: string) {
        const elementHandle = await page.$(locator);
        await elementHandle.screenshot({ path: this.defaultScreenshotDirectory + '/pw_ss_' + Guid.create() + '.png' });

    }

    async attachScreenshot(screenshotName: string) {
        await addAttach(await this.page.screenshot(), screenshotName);
    }

    async attachScreenshotWithNoName() {
        await addAttach(await this.page.screenshot(), 'screenshot');
    }

    async log(message: string) {
        addMsg(message);
    }

    async screenshotBase64() {
        const buffer = await page.screenshot();
        return buffer.toString('base64');
    }


}