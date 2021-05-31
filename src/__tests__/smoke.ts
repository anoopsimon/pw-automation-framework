import {SearchPage } from "../models/SearchPage";

function getPage<T>(type: { new (args:any): T }, args): T {
    return new type(args);
}

/**To verify Search functionality in Bing. */
it("Verify Bing Search", async () => 
{  
    const searchPage = getPage(SearchPage,page);
    var appUrl='https://www.bing.com/';
    await searchPage.navigate(appUrl);
    await searchPage.search();
    await searchPage.verifyResult();

});
