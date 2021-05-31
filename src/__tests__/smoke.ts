import {SearchPage } from "../models/SearchPage";
import {TestData } from "../core/TestData";


/**To verify Search functionality in Bing. */
it("Verify Bing Search", async () => 
{  
    var searchTerm = new TestData().search().searchTerms[0];
    var appUrl='https://www.bing.com/';
    const searchPage = new SearchPage(page);
    await searchPage.navigate(appUrl);
    await searchPage.search(searchTerm);
    await searchPage.verifyResult();

});
