package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UsedCarSearchLocators {
	
	@FindBy(how=How.XPATH,using = "//*[@id='models']")
	public WebElement carModelDropdown;
	
	@FindBy(how=How.LINK_TEXT,using = "Used")
	public WebElement usedCarsLink;
	
	@FindBy(how=How.XPATH,using = "//*[@id='makes']")
	public WebElement carMakeDropdown;
		
	@FindBy(how=How.XPATH,using = "//*[@id='locations']")
	public WebElement selectLocationDropdown;
	
	@FindBy(how=How.XPATH,using = "//*[@id='priceTo']")
	public WebElement priceToDropdown;
		
	@FindBy(how=How.XPATH,using = "//*[@id='search-submit']")
	public WebElement findMyNextCarButton;

}
