const {test, expect}= require('@playwright/test');

test("select date from datepicker", async({page})=>{
    await page.goto('https://demo.opencart.com/')

   const desktop= await page.locator("//a[normalize-space()='Desktops']")
   const macbook= await page.locator("//a[normalize-space()='Mac (1)']")

   //for mouse hove
   await desktop.hover();
   await macbook.hover();

   //for right click
   await desktop.click({button:'right'})

   //for double click
   await desktop.dblclick();

   //Approach 1 for drag and drop

   await desktop.hover();
   await page.mouse.down();

    await macbook.hover();
   await page.mouse.up();

   //Approach 2 for drag an drop

   await desktop.dragTo(macbook)


})