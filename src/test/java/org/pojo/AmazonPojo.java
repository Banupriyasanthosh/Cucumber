package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.github.dockerjava.api.model.Driver;

public class AmazonPojo extends BaseClass{
	
	public AmazonPojo() {
		PageFactory.initElements(driver, this);
		
	}
	
	
	@FindBy(xpath="//span[@id='nav-link-accountList-nav-line-1']")
    private WebElement signin;
	
	@FindBy(id="ap_email")
	private WebElement Email;
	
	@FindBy(xpath="//input[@id='continue']")
	private WebElement cont;
	
	@FindBy(xpath="//input[@type='password']")
	private WebElement pass;
	
	@FindBy(xpath="//input[@id='signInSubmit']")
	private WebElement signinclk;

	public WebElement getSignin() {
		return signin;
	}

	public WebElement getEmail() {
		return Email;
	}

	public WebElement getCont() {
		return cont;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getSigninclk() {
		return signinclk;
	}

	
	
}



