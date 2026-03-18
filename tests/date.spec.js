const {test, expect}= require('@playwright/test');

test("select date from datepicker", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#datepicker').click();

    const date ="15";
    const month ="April"
    const year ="2026"

    while(true){
         const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth==month && currentYear==year){
            break;
        }
        await page.locator('[title="Next"]').click();
    }

    const dates= await page.$$('.ui-state-default')

    for(const dt of dates){
        if(await dt.textContent==date){
            await dt.click();
        }
    }

    await page.waitForTimeout(3000);

})
