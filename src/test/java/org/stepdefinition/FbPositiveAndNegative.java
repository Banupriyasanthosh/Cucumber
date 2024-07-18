package org.stepdefinition;

import org.base.BaseClass;

import org.openqa.selenium.WebElement;
import org.pojo.LoginPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

//scenario outline

public class FbPositiveAndNegative extends BaseClass{
	
	@Given("Launch the chrome browser and give the facebook url")
	public void launch_the_chrome_browser_and_give_the_facebook_url() {
		
	// chromebrowser();
	 launchUrl("https://www.facebook.com/");
	 maxwindow();
		
	}

	@When("To enter the invalid email {string} in the username field")
	public void to_enter_the_invalid_email_in_the_username_field(String email) {
		
	LoginPojo l= new LoginPojo();
	WebElement txtEmail = l.getTxtEmail();
		fillTextBox(txtEmail, email);
	}

	@When("To enter the invalid password {string} in password field")
	public void to_enter_the_invalid_password_in_password_field(String pass) {
		
		LoginPojo l= new LoginPojo();
		WebElement txtPass = l.getTxtPass();
		fillTextBox(txtPass, pass);
		
	   	}
	
	@When("To click the Log in button")
	public void to_click_the_Log_in_button() {
		
		LoginPojo l= new LoginPojo();
		WebElement btnLogin = l.getBtnLogin();
		btnClick(btnLogin);
	   
	    	}

	@Then("To close the login browser")
	public void to_close_the_login_browser() {
		
		//closebrowser();
	    	}


}
