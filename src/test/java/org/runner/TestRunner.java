package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)

@CucumberOptions(features = {"C:\\Users\\Lenovo\\eclipse-workspace2\\Cucumber\\src\\test\\resources\\FeatureFiles\\Amazon.feature",
"C:\\Users\\Lenovo\\eclipse-workspace2\\Cucumber\\src\\test\\resources\\FeatureFiles\\FacebookLogin.feature"},
glue= "org.stepdefinition",plugin= {"html:HtmlReport","junit:JUnitReport\\junit.xml","json:jsonreport\\jsreport.json"})

 
public class TestRunner {
	
	@AfterClass
	
	public static void aft() {
		
		JVMReport.generateJvmReport("C:\\Users\\Lenovo\\eclipse-workspace2\\Cucumber\\jsonreport\\jsreport.json");
		

	}
	

}		
                                    