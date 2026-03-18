const {test, expect}= require('@playwright/test');

test("Handle dropdown with select tag", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //selectoption is method to handle dropdown with select tag

    //await page.locator("#country").selectOption({label:"India"}); //using select  by label;

    //await page.locator("#country").selectOption("India"); //using select by text

    //await page.locator("#country").selectOption({value:"uk"});//using select by value

    await page.selectOption("#country","India");
    await page.waitForTimeout(10000);


})

test("Handle dropdown without select tag", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const options =await page.$$('#country option')

    for(const option of options){

        let value= await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption('#country',value);
            break;
        }
    }

    await page.waitForTimeout(10000);

})