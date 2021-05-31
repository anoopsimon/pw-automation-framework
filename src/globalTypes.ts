import { Browser, Page } from "playwright";
import { TestData } from "./core/TestData";

declare global 
{
  const page: Page;
  const browser: Browser;
  const browserName: string;
  const testData: TestData;
}

export default global;
