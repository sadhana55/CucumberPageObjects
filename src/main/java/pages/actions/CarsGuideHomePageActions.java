package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuideHomePageLocators;
import utils.SeleniumDriver;

public class CarsGuideHomePageActions {
		
	CarsGuideHomePageLocators carsGuideHomePageLocators = null;
	
	public CarsGuideHomePageActions() {
		
		this.carsGuideHomePageLocators = new CarsGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuideHomePageLocators);
	}
	
	public void moveToBuySellCarsMenu() {
		
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(carsGuideHomePageLocators.buysellCarsLink).perform();
		
	}
	
	public void clickOnSearchCarsMenu() {
		//moveToBuySellCarsMenu
		carsGuideHomePageLocators.searchCarsLink.click();
		
	}
	
	public void clickOnUsedCarsSearchMenu() {
		//moveToBuySellCarsMenu
		carsGuideHomePageLocators.usedCarsLink.click();
		
	}
	public void moveToSellCarsMenu() {
		//moveToBuySellCarsMenu
		carsGuideHomePageLocators.sellMyCarLink.click();
	}
	
}
