package org.base;


import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Window;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.time.Duration;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.ScreenshotException;

import com.github.dockerjava.api.model.Frame;
import com.sun.org.apache.bcel.internal.generic.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	public static Actions a;
	public static Alert b;
	public static JavascriptExecutor js;
	public static TakesScreenshot ts;
	public static WebElement value;
	public static FileUtils fileUtils;
	public static org.openqa.selenium.support.ui.Select s;
	public static Select dropdown;
	public static Frame f;

	
	
	public static void chromebrowser() {
	
		WebDriverManager.chromedriver().setup();
		 driver = new ChromeDriver();
	}
		
		public static void closebrowser() {
	driver.close();
			
		}
		
		public static String pageTitle() {//Every time to call, if void it does not return anything, so the method of return type has been changed to string
			String title = driver.getTitle();
			return title;

		}
		
		public static String pageUrl() {//Every time to call, if void it does not return anything, so the method of return type has been changed to string
			String url = driver.getCurrentUrl();
            return url;
			
		}
		public static void maxwindow() {
			driver.manage().window().maximize();

		}
		public static void launchUrl(String url) {
			driver.get(url);

		}
		
		public static void fillTextBox(WebElement element,String value) {
		element.sendKeys(value);	

		}
		
		public static void btnClick(WebElement ele) {
			ele.click();	

		}
		//Actions
		
		public static void moveToElement(WebElement element) {
			 a = new Actions(driver);
			
			a.moveToElement(element).perform();

		}
		//DragandDrop
		public static void dragAndDrop(WebElement src,WebElement des) {
			a.dragAndDrop(src, des).perform();
		
		}
		
		public static void doubleclick(WebElement click) {
		a.doubleClick().perform();

		}
		
		public static void contextclick(WebElement conclick) {
			a.contextClick().perform();

		}
		//Robot Class
		public static void paste() throws AWTException {
		
			Robot r = new Robot();
			r.keyPress(KeyEvent.VK_CONTROL);
			r.keyPress(KeyEvent.VK_V);
			
			r.keyRelease(KeyEvent.VK_CONTROL);
			r.keyRelease(KeyEvent.VK_V);
			
		}
		//Alert
	public static void gettext() {
	 b = driver.switchTo().alert();

		String text = b.getText();
		System.out.println(text);
	}	
	
	public static void dismiss() {
		b.dismiss();

	}
	
	public static void accept() {
		b.accept();
		

	}
	//Javascript Executor
	public static void sendkey(WebElement element,String value) {
		js=(JavascriptExecutor)driver;
		js.executeScript(value, element);	

	}
	public static void click(WebElement element,String value) {
		js.executeScript(value, element);

	}
	
	public static void getattribute(WebElement element,String value) {
		Object attribute=js.executeScript(value, element);
		System.out.println(attribute);
		
	}
	//Takescreenshot
	public static void screenshot() throws IOException {
		
ts= (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
File des = new File("value");
FileUtils.copyFile(src, des);
		
	}
	//Windowshandle
	public static void getwindowhandle() {
		String parentId = driver.getWindowHandle();
		System.out.println(parentId);
	}
	
	public static void getwindowshandle() {
		Set<String> allId = driver.getWindowHandles();
System.out.println(allId);
	}
	
	//Selection Class
	public static void selectbyvalue(String value1) {
		s.selectByValue(value1);	
	
	}
	public static void Selectbyvisibletext(String text) {
		s.selectByVisibleText(text);

	}
	public static void selectbyindex(int index) {
		s.selectByIndex(index);

	}
	public static void getoption() {
	List<WebElement> options = s.getOptions();

	System.out.println(options.size());
	}
	
	public static void deselectbyvalue(String value) {
		s.deselectByValue(value);

	}
	public static void deselectbyvisibletext(String text) {
		s.deselectByVisibleText(text);

	}
	
	public static void deselectbyindex(int index) {
s.deselectByIndex(index);

	}
	//Scrollup
	public static void Scrollup(WebElement element,String value) {
		js.executeScript(value, element);

	}
	public static void Scrolldown(WebElement element,String value) {
		js.executeScript(value, element);

	}
	public static void ismultiply() {
		boolean multiple = s.isMultiple();
		System.out.println(multiple);

	}
	public static void getfirstselect() {
	WebElement firstSelectedOpt = s.getFirstSelectedOption();
System.out.println(firstSelectedOpt.getText());
	}
	public static void deselect() {
	s.deselectAll();

	}
	public static void getallselect() {
		List<WebElement> allSelectedOpt = s.getAllSelectedOptions();
		for (WebElement allopt : allSelectedOpt) {
			System.out.println(allopt);		
		}
	}
	//Frames
	public static void framesindex(int index) {
		driver.switchTo().frame(index);

	}
	public static void frameid(String id) {
		driver.switchTo().frame(id);

	}
	public static void framename(String name) {
		driver.switchTo().frame(name);

	}
	
	public static void frameelement(WebElement element) {
		driver.switchTo().frame(element);

	}
		public static void WindowURL(String URL) {
	driver.switchTo().window(URL);
		}
		public static void WindowTitle(String Title) {
			driver.switchTo().window(Title);

		}
		public static void wondowsid(String windowsid) {
			driver.switchTo().window(windowsid);

		}
		//Thread
		public static void thread(long millis) throws InterruptedException {
			Thread.sleep(millis);

		}
		public static void wait(long time,TimeUnit unit) {
			driver.manage().timeouts().implicitlyWait(time, unit);
			
			//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		}
		//dateandTime
		
		public static void getDateAndTime() {
			java.util.Date d = new java.util.Date();
			System.out.println(d);

		}


		}
			
	
	
	
	
	
		

