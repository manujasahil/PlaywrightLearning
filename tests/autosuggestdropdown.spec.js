const {test, expect}= require('@playwright/test');

test("Auto suggest dropdown", async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#srcinput').fill('Delhi');
    await page.waitForTimeout(5000);

    const options =await page.$$("//div[contains(@class,'leftContent')]/div[1]")

    for(let option of options){

        const value = await option.textContent();
        //console.log(value);
        if(value.includes('Delhi Airport')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})