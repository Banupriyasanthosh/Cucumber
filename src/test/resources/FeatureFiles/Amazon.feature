
Feature: To validate login functionality of Amazon application

@smoke @Regression
Scenario: To validate login with valid username and valid password

Given To launch the chrome browser and hit the amazon url

When To click the sign in button

When To enter valid phNo in username field

And To click the continue button

And To enter valid password in password field

And To click the sign in link button
  
Then To close the chrome browser
 
