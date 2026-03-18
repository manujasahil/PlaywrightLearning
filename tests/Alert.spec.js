const {test, expect}= require('@playwright/test');

test.skip("Handle Alert", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    })

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000);

});

test.skip("Handle Confirm box", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.dismiss();
    })

    await page.locator('#confirmBtn').click();
    await expect(page.locator('#demo')).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000);

});

test("Handle Promt box", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept("John");
    })

    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText("Hello John! How are you today?")
    await page.waitForTimeout(3000);

});
