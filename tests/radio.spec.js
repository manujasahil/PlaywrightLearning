const {test,expect}= require('@playwright/test');

test("select radio", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//input[@type='radio']")).toHaveCount(2);

    await page.locator("#male").click();

    await expect(page.locator("#male")).toBeChecked();

    await page.waitForTimeout(3000);

})