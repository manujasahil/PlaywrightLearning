const {test, expect}= require('@playwright/test');

test("Handle frame", async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frames = await page.frames();
    console.log(frames.length);

    const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill('[name="mytext1"]','Sahil')
    await page.waitForTimeout(2000);
});