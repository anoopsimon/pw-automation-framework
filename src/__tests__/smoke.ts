import {SearchPage } from "../models/SearchPage";

/**To verify Search functionality in Bing. */
it("Verify Bing Search", async () => 
{
  
    const searchPage = new SearchPage(page);
    await searchPage.navigate('https://www.bing.com/');
    await searchPage.search('i am learning playwright');
    await searchPage.verifyResult();
});
