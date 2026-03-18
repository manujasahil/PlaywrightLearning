const {test, expect}= require('@playwright/test');

test("Homepage screenshot", async ({page})=>{
    await page.goto("https://demoblaze.com/index.html")

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})
})

test("Fullpage screenshot", async ({page})=>{
    await page.goto("https://demoblaze.com/index.html")

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png', fullPage:true})
})

test.only("Element screenshot", async ({page})=>{
    await page.goto("https://demoblaze.com/index.html")

    await page.locator('//div[@id="tbodyid"]').screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})
})