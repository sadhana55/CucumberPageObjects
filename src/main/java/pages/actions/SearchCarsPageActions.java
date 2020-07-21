package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.SearchCarsPageLocators;
import utils.SeleniumDriver;

public class SearchCarsPageActions {

	SearchCarsPageLocators searchCarsPageLocators = null;

	public SearchCarsPageActions() {

		this.searchCarsPageLocators = new SearchCarsPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), searchCarsPageLocators);
	}

	public void selectCarMake(String carBrand) {

		Select selectCarMake = new Select(searchCarsPageLocators.carMakeDropdown);
		selectCarMake.selectByVisibleText(carBrand);

	}

	public void selectCarModel(String carModel) {

		Select selectCarMake = new Select(searchCarsPageLocators.carModelDropdown);
		selectCarMake.selectByVisibleText(carModel);

	}

	public void selectCarLocation(String carLocation) {

		Select selectCarMake = new Select(searchCarsPageLocators.selectLocationDropdown);
		selectCarMake.selectByVisibleText(carLocation);

	}
	
	public void selectCarPrice(String carPrice) {

		Select selectCarMake = new Select(searchCarsPageLocators.priceToDropdown);
		selectCarMake.selectByVisibleText(carPrice);

	}
	
	public void clickOnFindMyNextCarBtn() {

		searchCarsPageLocators.findMyNextCarButton.click();

	}

}
