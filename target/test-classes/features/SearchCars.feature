@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine.
  In order to validate that the search cars page is working fine, we will do the acceptance testing

  @Search-Cars-Positive
  Scenario: Validate Search Cars Page
    Given I am on the Home Page "https://www.carsguide.com.au/" of CarsGuide Website
    When I move to the menu
      | Menu     |
      | Buy+sell |
      | reviews  |
    And click on "Search Cars" link
    And select car make as "BMW" from AnyMake dropdown
    And select car model as "1 Series" from AnyModel dropdown
    And select location as "ACT - All" from AnyLocation dropdown
    And select Price as "$10,000" from Price dropdown
    And click on "Find My Next Car" button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series Under 10000 for Sale ACT | carsguide"
