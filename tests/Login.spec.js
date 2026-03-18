const {test,expect}= require('@playwright/test');

test("Login success", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.locator("//input[@class='xkp9Hl ZvCKfk']").fill("9466853343");

    await page.getByText('Request OTP').click();




});