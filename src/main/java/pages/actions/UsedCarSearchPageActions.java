package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedCarSearchLocators;
import utils.SeleniumDriver;

public class UsedCarSearchPageActions {
	
	UsedCarSearchLocators usedCarSearchLocators=null;
	
	
	public UsedCarSearchPageActions() {
		
		this.usedCarSearchLocators = new UsedCarSearchLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedCarSearchLocators);
	}
	public void selectCarMake(String carBrand) {

		Select selectCarMake = new Select(usedCarSearchLocators.carMakeDropdown);
		selectCarMake.selectByVisibleText(carBrand);

	}
	public void selectCarModel(String carModel) {

		Select selectCarMake = new Select(usedCarSearchLocators.carModelDropdown);
		selectCarMake.selectByVisibleText(carModel);

	}
	public void selectCarLocation(String carLocation) {

		Select selectCarMake = new Select(usedCarSearchLocators.selectLocationDropdown);
		selectCarMake.selectByVisibleText(carLocation);

	}
	
	public void selectCarPrice(String carPrice) {

		Select selectCarMake = new Select(usedCarSearchLocators.priceToDropdown);
		selectCarMake.selectByVisibleText(carPrice);

	}
	
	public void clickOnFindMyNextCarBtn() {

		usedCarSearchLocators.findMyNextCarButton.click();

	}
	

}
