exports.LoginPage=class LoginPage {

    constructor(page){
        this.page=page;
        this.login="#login2";
        this.username="#loginusername";
        this.password="#loginpassword";
        this.loginButton="//button[normalize-space()='Log in']";
    }

    async goToApplication(){
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async LoginToApplication(user,pass){
        await this.page.locator(this.login).click()
        await this.page.locator(this.username).fill(user)
        await this.page.locator(this.password).fill(pass)
        await this.page.locator(this.loginButton).click()
    }
}