package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.pojo.LoginPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FacebookLogin extends BaseClass {
	
	@Given("To launch the chrome browser and hit the facebook url")
	public void to_launch_the_chrome_browser_and_hit_the_facebook_url() {
		
		//chromebrowser();
		launchUrl("https://www.facebook.com/");
		maxwindow();
	    
	}

	@When("To enter valid email in username field")
	public void to_enter_valid_email_in_username_field(io.cucumber.datatable.DataTable d) {
	
		//One dimensional Map

		Map<String, String> mp= d.asMap(String.class, String.class);
	
		Assert.assertTrue("Check Email...",false);
		
		LoginPojo l=new LoginPojo();
		WebElement txtEmail = l.getTxtEmail();
		fillTextBox(txtEmail, "banugold13@gmail.com");
	    
	}

	@When("To enter invalid password in password field")
	public void to_enter_invalid_password_in_password_field(io.cucumber.datatable.DataTable d) {
		
		//Two dimensional Map
		
		List<Map<String, String>> mp = d.asMaps();
		
		LoginPojo l= new LoginPojo();
		WebElement txtPass = l.getTxtPass();
		fillTextBox(txtPass, "123456");
	    
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		LoginPojo l= new LoginPojo();
		WebElement btnLogin = l.getBtnLogin();
		btnClick(btnLogin);
	    
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		//closebrowser();
	    
	}



}
