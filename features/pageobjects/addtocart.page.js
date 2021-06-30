
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class AddToCartPage {
    /**
     * define selectors using getter methods
     */
    get FirstProduct () { return $("(//a[@class='product_img_link']/img)[1]") }

    get productDetails () { return $("//div[contains(@class,'layer_cart_product')]/h2") }
    
    get addtocart () { return $("(//span[text()='Add to cart'])[1]") }
    
    get checkout () { return $("//a[@title='Proceed to checkout']") }
    
    get productTitle(){return $("//span[@id='layer_cart_product_title']")}

    async checkoutproduct(){
        await (await this.FirstProduct).scrollIntoView();
        await browser.pause(5000)
        await (await this.FirstProduct).moveTo();
        await browser.pause(5000)
        await (await this.addtocart).click();
        await browser.pause(5000)
        await (await this.checkout).click();       
        await browser.pause(5000)
    }

}

export default new AddToCartPage();

