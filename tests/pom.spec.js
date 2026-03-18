const {test, expect}= require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');

test('pom testing', async ({page})=>{

    const login=new LoginPage(page);
    await login.goToApplication();
    await login.LoginToApplication('pavanol','test@123');
    const home=new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await home.goToCart();
    

})