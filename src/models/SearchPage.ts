import { Page } from "playwright";
import { BasePage } from "../core/BasePage";
export class SearchPage extends BasePage {
  page: Page;

  constructor(page:Page) 
  {
    super(page);
    this.page = page;
  }
  async navigate(url: string) {
    await this.goto(url);
  }

  /**
   * Search in bing search page using a search term and capture screenshot.
   * @param searchTerm 
   */
  async search(searchTerm:string) {
    this.log('Search in Bing using term => ' + searchTerm);
    await this.fill('#sb_form_q', searchTerm);
    await this.press('#sb_form_q', 'Enter');
    await this.screenshot(true);
  }

  /**
   * Verify that the search result displayed.
   */
  async verifyResult() {
    let resultsLocator = '.sb_count';
    const content = await this.text(resultsLocator);
    expect(content).toContain('results');
    await this.elementScreenshot(resultsLocator);
    await this.screenshot(true);
    await this.attachScreenshot('Search Result');
    await this.log('Verification passed for search term ');

  }
}

