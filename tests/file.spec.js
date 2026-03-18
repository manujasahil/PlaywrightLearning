const {test, expect}= require('@playwright/test');

test("select file upload", async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator("#filesToUpload").setInputFiles('tests/uploadFiles/Employment letter.pdf')

    await page.waitForTimeout(3000);
})