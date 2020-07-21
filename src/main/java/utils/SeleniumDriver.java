package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {
	
	private static SeleniumDriver seleniumDriver;
	
	//initialize WebDriver	
	private static WebDriver driver;
	
	private static WebDriverWait waitDriver;
	public final static int TIMEOUT = 30;
	public final static int PAGELOAD_TIMEOUT = 50;
	
	//Why private
	//Everytime we create instance of SeleniumDriver anywhere, it shouldnt create chromedriver everytime
	//Singleton PAttern
	private SeleniumDriver() {
		
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		waitDriver = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGELOAD_TIMEOUT, TimeUnit.SECONDS);
		
	}
	
	public static void openPage(String url) {
		driver.get(url);
	}
	
	public static WebDriver getDriver() {
		return driver;
	}
	
	public static void setUpDriver() {
		
		if (seleniumDriver == null) {
			seleniumDriver = new SeleniumDriver();			
		}
	}
	
	public static void tearDown() {
		
		if (driver !=null) {
			driver.close();
			driver.quit();
		}
		seleniumDriver = null;
	}
	
	
}
