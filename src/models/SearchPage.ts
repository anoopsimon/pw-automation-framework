import { Page } from "playwright";
import { BasePage } from "../core/BasePage";

export class SearchPage extends BasePage
{
    page: Page;
    constructor(page) {
    super(page);
      this.page = page;
    }
    async navigate() {
      await this.goto('https://www.bing.com/');
    }
    async search(text) {        
        await this.fill('#sb_form_q',text);
        await this.press('#sb_form_q','Enter');     
    }
  }

