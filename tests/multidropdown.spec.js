const {test, expect}= require('@playwright/test');

test("Handle multi select dropdown with select tag", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors',['Red','Blue']);

    await page.waitForTimeout(5000);

});