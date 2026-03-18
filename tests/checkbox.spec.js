const {test, expect}=require('@playwright/test');

test("select checkbox", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");

    await page.getByRole('link', { name: 'Checkboxes' }).click();
    const checkbox = page.locator('//input[1]');

    await expect(checkbox).not.toBeChecked();

    await page.locator("//input[1]").click();

    const checkbox2 = page.locator('//input[2]');

    await expect(checkbox).toBeChecked();
    await expect(checkbox2).toBeChecked();

    await page.waitForTimeout(3000);

    await expect(page.locator('input[type="checkbox"]')).toHaveCount(2);



});