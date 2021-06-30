
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ShoppingCartPage {
    /**
     * define selectors using getter methods
     */
    get shoppingCartSummary () { return $("//h1[@id='cart_title']") }

    get productname () { return $("//td[2]/p[1]/a") }

    get proceedToCheckout () { return $("//span[text()='Proceed to checkout']") }
    
    get proceesAddress () { return $("//button[@name='processAddress']") }
    
    get proceesCarrier () { return $("//button[@name='processCarrier']") }
    
    get termsAndConds () { return $("//input[@id='cgv' and @type='checkbox']") }
    
    get payByCheque () { return $("//a[@title='Pay by check.']") }
    
    get orderConfirm () { return $("//span[text()='I confirm my order']") }
    
    get orderSuccessMsg () { return $("//p[@class='alert alert-success']") }
    
    async proceedToCheckoutButton () {
        await (await this.proceedToCheckout).scrollIntoView();
        await (await this.proceedToCheckout).click();
        await (await this.proceesAddress).click();
        await browser.pause(5000)
        await (await this.termsAndConds).scrollIntoView();
        await (await this.termsAndConds).click();
        await (await this.proceesCarrier).click();
        await browser.pause(5000)
        await (await this.payByCheque).click();
        await browser.pause(5000)
        await (await this.orderConfirm).click();

    }

}

export default new ShoppingCartPage();

