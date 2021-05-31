import * as logins from '../data/logins.json';
import * as search from '../data/search.json';

export class TestData
{
constructor()
{

}

logins()
{
    console.log(logins[0].username);
    return logins;
}

search()
{
    console.log(search.searchTerms);
    return search;
}

}
