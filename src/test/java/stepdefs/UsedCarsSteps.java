package stepdefs;

import java.util.List;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.SearchCarsPageActions;
import pages.actions.UsedCarSearchPageActions;

public class UsedCarsSteps {

	
	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();	
	UsedCarSearchPageActions usedCarSearchPageActions = new UsedCarSearchPageActions();

	
	@And("^click on \"([^\"]*)\" link on Used Search Car page$")
	public void click_on_link_on_Used_Search_Car_page(String arg1) throws Throwable {
	    
		carsGuideHomePageActions.clickOnUsedCarsSearchMenu();
		
	}

	@And("^select car make as \"([^\"]*)\" from AnyMake dropdown on Used Search Car page$")
	public void select_car_make_as_from_AnyMake_dropdown_on_Used_Search_Car_page(String carBrand) throws Throwable {
		usedCarSearchPageActions.selectCarMake(carBrand);
		
	}

	@And("^select car model on Used Search Car page$")
	public void select_car_model_on_Used_Search_Car_page(List<String>	list) throws Throwable {
		String carModel = list.get(1);
		usedCarSearchPageActions.selectCarModel(carModel);
	    
	}

	@And("^select location as \"([^\"]*)\" from AnyLocation dropdown on Used Search Car page$")
	public void select_location_as_from_AnyLocation_dropdown_on_Used_Search_Car_page(String carLocation) throws Throwable {
	    
		usedCarSearchPageActions.selectCarLocation(carLocation);
	    
	}

	@And("^select Price as \"([^\"]*)\" from Price dropdown on Used Search Car page$")
	public void select_Price_as_from_Price_dropdown_on_Used_Search_Car_page(String carPrice) throws Throwable {
		usedCarSearchPageActions.selectCarPrice(carPrice);
	}

	@And("^click on \"([^\"]*)\" button on Used Search Car page$")
	public void click_on_button_on_Used_Search_Car_page(String arg1) throws Throwable {
	   
		usedCarSearchPageActions.clickOnFindMyNextCarBtn();
	}

	@Then("^I should see list of searched cars on Used Search Car page$")
	public void i_should_see_list_of_searched_cars_on_Used_Search_Car_page() throws Throwable {
	    
		System.out.println("Used Cars List Populated");
	}

}
