exports.HomePage=class HomePage{
    constructor(page){
        this.page=page;
        this.productList="//div[@id='tbodyid']/div/div/div/h4/a";
        this.addToCart="//a[normalize-space()='Add to cart']";
        this.linkCart="#cartur";
    }

    async addProductToCart(productName){
        const products=await this.page.$$(this.productList);
        for(const product of products){
            if(productName === await product.textContent()){
                await product.click();
                break;
            }
        }

        await this.page.on('dialog',async dialog=>{
            await dialog.click();
        })

        await this.page.locator(this.addToCart).click();
    }

    async goToCart(){
        await this.page.locator(this.linkCart).click();
    }
}