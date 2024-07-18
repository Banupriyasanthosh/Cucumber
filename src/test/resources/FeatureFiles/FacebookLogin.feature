
Feature: To validate login functionality of Facebook application

//scenario outline

@sanity @smoke
Scenario: To validate login with valid username and invalid password

Given To launch the chrome browser and hit the facebook url

When To enter valid email in username field

And To enter invalid password in password field

And To click the login button

Then To close the browser

@Regression
Scenario Outline:

To validate login with invalid username and invalid password

Given To launch the chrome browser and hit the facebook url

When To enter the invalid email "<email>" in the username field

And To enter the invalid password "<password>" in password field

And To click the Log in button

Then To close the login browser

Examples:
|email                  |password|
|java123@gmail.com      |java    |
|selenium12@gmail.com   |selenium|
|testng123@gmail.com    |testng  |
|cucumber@gmail.com     |cucumber|