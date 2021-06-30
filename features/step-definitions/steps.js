import { Given, When, Then } from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';
import MyAccountPage from '../pageobjects/myaccount.page'
import PersonalInfoPage from '../pageobjects/personal.page'
import AddToCartPage from '../pageobjects/addtocart.page'
import ShoppingCartPage from '../pageobjects/shoppingcart.page'

Given(/^I am on the home page$/, async () => {
    await browser.url('http://automationpractice.com/index.php')
    await browser.maximizeWindow()
});

When(/^I click on the sign in button$/, async () => {
    await HomePage.signInClick()
    await browser.pause(10000)
});

Then(/^I should navigate to the My Accounts page$/, async () => {
    await expect(MyAccountPage.createAnAccount).toBeExisting();
});

Given(/^I am on the my account page$/, async () => {
    await expect(MyAccountPage.createAnAccount).toBeExisting();
    await browser.pause(10000)
});

When(/^I enter the emailID and click on the Create an Account button$/, async () => {
    await MyAccountPage.enterEmailID()
    await MyAccountPage.clickCreateAnAccount()
    await browser.pause(10000)
});

Then(/^I should navigate to the personal information page$/, async () => {
    await expect(PersonalInfoPage.personalInfo).toBeExisting();
});

Given(/^I am on the personal information page$/, async () => {
    await expect(PersonalInfoPage.personalInfo).toBeExisting();
});

When(/^User enters the mandatory fields and click on Register button$/, async () => {
    await PersonalInfoPage.enterPersonalInfo();
});

Then(/^The user should be registered and logged in successfully$/, async () => {
    await expect(PersonalInfoPage.verifyloggedinUser).toBeExisting();
});

Given(/^User is logged in and on home page$/, async () => {
    await expect(PersonalInfoPage.verifyloggedinUser).toBeExisting();
    await MyAccountPage.clickHome();
});

When(/^User views the product and clicks on add to cart$/, async () => {
    await AddToCartPage.checkoutproduct();
    await expect(ShoppingCartPage.shoppingCartSummary).toBeExisting();
});

Then(/^The user should be able to complete the purchase$/, async () => {
    await ShoppingCartPage.proceedToCheckoutButton();
    await expect(ShoppingCartPage.orderSuccessMsg).toBeExisting();
});