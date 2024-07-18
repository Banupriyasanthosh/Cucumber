package org.stepdefinition;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.pojo.AmazonPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AmazonLogin extends BaseClass{
	
	@Given("To launch the chrome browser and hit the amazon url")
	public void to_launch_the_chrome_browser_and_hit_the_amazon_url() {
		
		//chromebrowser();
		launchUrl("https://www.amazon.in/");
		maxwindow();
		
	}
	@When("To click the sign in button")
	public void to_click_the_sign_in_button() {
		
		AmazonPojo a= new AmazonPojo();
		WebElement signin = a.getSignin();
		btnClick(signin);
				
	    
	}

	@When("To enter valid phNo in username field")
	public void to_enter_valid_phNo_in_username_field() {
		
		AmazonPojo a= new AmazonPojo();
		WebElement email = a.getEmail();
		fillTextBox(email, "9944789991");
	    
	}

	@When("To click the continue button")
	public void to_click_the_continue_button() {
		
		AmazonPojo a= new AmazonPojo();
		WebElement cont = a.getCont();
		btnClick(cont);
		
	    
	}

	@When("To enter valid password in password field")
	public void to_enter_valid_password_in_password_field() {
		
		AmazonPojo a= new AmazonPojo();
		
		Assert.assertTrue(false);
		WebElement pass = a.getPass();
		fillTextBox(pass, "santhoshbanu");
		
		Assert.assertEquals("123", pass.getAttribute("value"),"Check Password...");
	    
	}

	@When("To click the sign in link button")
	public void to_click_the_sign_in_link_button() {
		
		AmazonPojo a= new AmazonPojo();
		WebElement signinclk = a.getSigninclk();
		btnClick(signinclk);

	   
	}


	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		//closebrowser();
	   
	}
}
