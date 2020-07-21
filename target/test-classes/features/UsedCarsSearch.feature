@Used-Search-Cars
Feature: Acceptance testing to validate Used Search cars page is working fine.
  In order to validate that the Used search cars page is working fine, we will do the acceptance testing

  @Used-Search-Cars-Positive
  Scenario: Validate Used Search Cars Page
    Given I am on the Home Page "https://www.carsguide.com.au/" of CarsGuide Website
    When I move to the menu
      | Menu     |
      | Buy+sell |
      | reviews  |
    And click on "Used" link on Used Search Car page
    And select car make as "Audi" from AnyMake dropdown on Used Search Car page
    And select car model on Used Search Car page
    |car model |
    |A3        |
    |A4        |
    |A5				 |
    And select location as "ACT - All" from AnyLocation dropdown on Used Search Car page
    And select Price as "$15,000" from Price dropdown on Used Search Car page
    And click on "Find My Next Car" button on Used Search Car page
    Then I should see list of searched cars on Used Search Car page
    And the page title should be "Used Audi A3 Under 15000 for Sale ACT | carsguide"
