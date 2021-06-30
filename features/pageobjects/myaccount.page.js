
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class MyAccountPage {
    /**
     * define selectors using getter methods
     */
    get createAnAccount () { return $("//h3[contains(text(),'Create an account')]") }

    get EmailID () { return $("//input[@id='email_create']") }

    get createAnAccountButton () { return $("//button[@id='SubmitCreate']") }

    get homeLogo () { return $("//div[@id='header_logo']") }
    
    async enterEmailID () {
        let iRandomNumber = Math.random() * (1000 - 10 + 1) + 10
        console.log(iRandomNumber)
        let strEmailID = 'WdioTest'+iRandomNumber+'@gmail.com';
        console.log(strEmailID)
        await (await this.EmailID).setValue(strEmailID);
    }

    async clickCreateAnAccount () {
        await (await this.createAnAccountButton).click();
    }

    async clickHome () {
        await (await this.homeLogo).click();
    }    
}

export default new MyAccountPage();

