import {SearchPage } from "../models/SearchPage";
import {TestData } from "../core/TestData";


/**To verify Search functionality in Bing. */
it("Verify Bing Search", async () => 
{
  
    var searchTerm = new TestData().search().searchTerms[0];
    const searchPage = new SearchPage(page);
    await searchPage.navigate('https://www.bing.com/');
    await searchPage.search(searchTerm);
    await searchPage.verifyResult();

});
