
it("Home page should have the correct title", async () => {
    await page.goto("https://www.carlrippon.com/");
    expect(await page.title()).toBe("All posts | Building SPAs");
  });