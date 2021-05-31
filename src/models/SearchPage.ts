import { Page } from "playwright";
import { BasePage } from "../core/BasePage";
import { addAttach } from "jest-html-reporters/helper";
export class SearchPage extends BasePage {
  page: Page;
  constructor(page) {
    super(page);
    this.page = page;
  }
  async navigate(url: string) {
    await this.goto(url);
  }
  async search() {
    var searchTerm = this.td_search().searchTerms[0];
    console.log('Search ' + searchTerm);
    await this.fill('#sb_form_q', searchTerm);
    await this.press('#sb_form_q', 'Enter');
    await this.screenshot(true);
  }

  async verifyResult() {
    let resultsLocator = '.sb_count';
    const content = await this.text(resultsLocator);
    expect(content).toContain('results');
    await this.elementScreenshot(resultsLocator);
    await this.screenshot(true);
    await addAttach(await this.page.screenshot(), "Screenshot");

  }
}

