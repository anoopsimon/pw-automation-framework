import {SearchPage } from "../models/SearchPage";
import * as search from '../data/search.json';

function getPage<T>(type: { new (args:any): T }, args): T {
    return new type(args);
}

/**To verify Search functionality in Bing. */
it.each(search.searchTermCoding)("Verify Bing Search", async (data) => 
{  
//     const searchPage = getPage(SearchPage,page);
//     var appUrl='https://www.bing.com/';
//     await searchPage.navigate(appUrl);
//     await searchPage.search(data);
//    await searchPage.verifyResult();
});
