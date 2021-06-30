
import Page from './page';
/**
 * Personal Information Page containing mandatory field selectors and methods 
 */
class PersonalInfoPage extends Page {
    /**
     * selectors using getter methods
     */
    get personalInfo () { return $("//h3[contains(text(),'Your personal information')]") }

    get title () { return $("//input[@id='id_gender1']") }

    get FirstName () { return $("//input[@id='customer_firstname']") }

    get LastName () { return $("//input[@id='customer_lastname']") }

    get password () { return $("//input[@id='passwd']") }

    get dobDay () { return $("//select[@id='days']") }

    get dobMonth () { return $("//select[@id='months']") }

    get dobYear () { return $("//select[@id='years']") }

    get addFirstName () { return $("//input[@id='firstname']") }

    get addLastName () { return $("//input[@id='lastname']") }

    get address () { return $("//input[@id='address1']") }

    get city () { return $("//input[@id='city']") }

    get state () { return $("//select[@id='id_state']") }

    get postcode () { return $("//input[@id='postcode']") }

    get country () { return $("//select[@id='id_country']") }

    get mobileNum () { return $("//input[@id='phone_mobile']") }

    get alias () { return $("//input[@id='alias']") }

    get register () { return $("//button[@id='submitAccount']") }
    
    get verifyUser () { return $("//a[@class='account']/span") }
    
    get verifyloggedinUser () { return $("//span[text()='testing lastname']") }
    
    async enterPersonalInfo () {
        await (await this.title).click();
        await (await this.FirstName).setValue('Test');
        await (await this.LastName).setValue('Account');
        await (await this.password).setValue('qwerty@12345');
        await (await this.dobDay).selectByAttribute("value", "13");
        await (await this.dobMonth).selectByAttribute("value", "12");
        await (await this.dobYear).selectByAttribute("value", "1990");
        await (await this.address).setValue('6 Sylvan Way,');
        await (await this.city).setValue('Parsippany');
        await (await this.state).selectByAttribute("value", "30");
        await (await this.postcode).setValue('07054');
        await (await this.country).selectByAttribute("value", "21");
        await (await this.mobileNum).setValue('+1 551-945-1849');
        await (await this.register).click();
    }
 
    
}


export default new PersonalInfoPage();

