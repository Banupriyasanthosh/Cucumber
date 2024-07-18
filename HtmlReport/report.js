$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Lenovo/eclipse-workspace2/Cucumber/src/test/resources/FeatureFiles/Amazon.feature");
formatter.feature({
  "name": "To validate login functionality of Amazon application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login with valid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the amazon url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.to_launch_the_chrome_browser_and_hit_the_amazon_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter valid phNo in username field",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.to_enter_valid_phNo_in_username_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter valid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_enter_valid_password_in_password_field()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdefinition.AmazonLogin.to_enter_valid_password_in_password_field(AmazonLogin.java:56)\r\n\tat ✽.To enter valid password in password field(file:/C:/Users/Lenovo/eclipse-workspace2/Cucumber/src/test/resources/FeatureFiles/Amazon.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click the sign in link button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_sign_in_link_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:/C:/Users/Lenovo/eclipse-workspace2/Cucumber/src/test/resources/FeatureFiles/FacebookLogin.feature");
formatter.feature({
  "name": "To validate login functionality of Facebook application",
  "description": "//scenario outline",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLogin.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter valid email in username field",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookLogin.to_enter_valid_email_in_username_field(DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [To enter valid email in username field] is defined with 1 parameters at \u0027org.stepdefinition.FacebookLogin.to_enter_valid_email_in_username_field(DataTable) in file:/C:/Users/Lenovo/eclipse-workspace2/Cucumber/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: To enter valid email in username field\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To enter invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLogin.to_enter_invalid_password_in_password_field(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLogin.to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookLogin.to_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "To validate login with invalid username and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.step({
  "name": "To enter the invalid email \"\u003cemail\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "name": "To enter the invalid password \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "To click the Log in button",
  "keyword": "And "
});
formatter.step({
  "name": "To close the login browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "java123@gmail.com",
        "java"
      ]
    },
    {
      "cells": [
        "selenium12@gmail.com",
        "selenium"
      ]
    },
    {
      "cells": [
        "testng123@gmail.com",
        "testng"
      ]
    },
    {
      "cells": [
        "cucumber@gmail.com",
        "cucumber"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "To validate login with invalid username and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLogin.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid email \"java123@gmail.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_email_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid password \"java\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_click_the_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the login browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_close_the_login_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login with invalid username and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLogin.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid email \"selenium12@gmail.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_email_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid password \"selenium\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_click_the_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the login browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_close_the_login_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login with invalid username and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLogin.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid email \"testng123@gmail.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_email_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid password \"testng\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_click_the_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the login browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_close_the_login_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To validate login with invalid username and invalid password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLogin.to_launch_the_chrome_browser_and_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid email \"cucumber@gmail.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_email_in_the_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the invalid password \"cucumber\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_enter_the_invalid_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Log in button",
  "keyword": "And "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_click_the_Log_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the login browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbPositiveAndNegative.to_close_the_login_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});