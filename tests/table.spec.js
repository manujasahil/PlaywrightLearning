const {test, expect}= require('@playwright/test');

test.skip("select data from table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const rows = await table.locator('tbody tr')

    const matchedRow= rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'

    })

    await matchedRow.locator('input').check();
    await page.waitForTimeout(3000);
})

test.only("print data from table from all pages", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const rows = await table.locator('tbody tr')

    const pages = await page.locator('.pagination li a')

    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }

        for(let i=0;i<await rows.count();i++){
                const row=rows.nth(i)
                const tds = row.locator('td')
                for(let j=0;j<await tds.count()-1;j++){
                    console.log(await tds.nth(j).textContent());
                }
          await page.waitForTimeout(3000);      
        }
    }
    await page.waitForTimeout(3000);
})