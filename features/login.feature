Feature: The Automation Practice site E2E flow

  Scenario: As a new user, I want to signin to the application

    Given I am on the home page
    When I click on the sign in button
    Then I should navigate to the My Accounts page  

  Scenario: As a new user, I want to create a new account

    Given I am on the my account page
    When I enter the emailID and click on the Create an Account button
    Then I should navigate to the personal information page     

  Scenario: To register, the user has to provide his/her personal information

    Given I am on the personal information page
    When User enters the mandatory fields and click on Register button
    Then The user should be registered and logged in successfully   

  Scenario: To add a product to cart

    Given User is logged in and on home page
    When User views the product and clicks on add to cart
    Then The user should be able to complete the purchase     