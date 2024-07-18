package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {

	public static void generateJvmReport(String jsonFilePath) {
		
		//1.Mention the target folder location- File
		
		File f = new File("C:\\Users\\Lenovo\\eclipse-workspace2\\Cucumber\\JVM Report");
		
		//2.Add details to the report using Configuration class--addClassification()-m
		
		Configuration c = new Configuration(f, "Amazon&Facebook");
		
		c.addClassifications("Operating System", "Windows");
		c.addClassifications("WindowsVersion", "Windows Version 11");
		c.addClassifications("Browser Name", "Chrome");
		c.addClassifications("Browser Version", "124.063");
		
		//3.Add json file paths into List<String> (first complete 4th step then come back to 3rd step )
		
		List<String> li = new ArrayList<String>();
		li.add(jsonFilePath);
		
		//4.create object for ReportBuilder class and using the created object call generateReports() method.
		
		ReportBuilder r = new ReportBuilder(li, c);
		
		r.generateReports();
			
		
		
	}
	 

}
