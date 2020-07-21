$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working fine.",
  "description": "In order to validate that the search cars page is working fine, we will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 6333630400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Home Page \"https://www.carsguide.com.au/\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "Buy+sell"
      ],
      "line": 10
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select car make as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select car model as \"1 Series\" from AnyModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select location as \"ACT - All\" from AnyLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select Price as \"$10,000\" from Price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on \"Find My Next Car\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the page title should be \"Bmw 1 Series Under 10000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 3999676700,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 2741609200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 1211902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_car_make_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 1968210400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_car_model_as_from_AnyModel_dropdown(String)"
});
formatter.result({
  "duration": 1374537800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_AnyLocation_dropdown(String)"
});
formatter.result({
  "duration": 230237000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_Price_as_from_Price_dropdown(String)"
});
formatter.result({
  "duration": 203351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find My Next Car",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_button(String)"
});
formatter.result({
  "duration": 7960560600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 144100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 10000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 259898600,
  "status": "passed"
});
formatter.after({
  "duration": 1149213600,
  "status": "passed"
});
formatter.uri("UsedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Used Search cars page is working fine.",
  "description": "In order to validate that the Used search cars page is working fine, we will do the acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 5864108400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Used Search Cars Page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Home Page \"https://www.carsguide.com.au/\" of CarsGuide Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 9
    },
    {
      "cells": [
        "Buy+sell"
      ],
      "line": 10
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on \"Used\" link on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select car make as \"Audi\" from AnyMake dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select car model on Used Search Car page",
  "rows": [
    {
      "cells": [
        "car model"
      ],
      "line": 15
    },
    {
      "cells": [
        "A3"
      ],
      "line": 16
    },
    {
      "cells": [
        "A4"
      ],
      "line": 17
    },
    {
      "cells": [
        "A5"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select location as \"ACT - All\" from AnyLocation dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select Price as \"$15,000\" from Price dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on \"Find My Next Car\" button on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see list of searched cars on Used Search Car page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the page title should be \"Used Audi A3 Under 15000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_Website(String)"
});
formatter.result({
  "duration": 3218279000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 2852443300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 10
    }
  ],
  "location": "UsedCarsSteps.click_on_link_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 2692675000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "UsedCarsSteps.select_car_make_as_from_AnyMake_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 270587200,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.select_car_model_on_Used_Search_Car_page(String\u003e)"
});
formatter.result({
  "duration": 779349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "UsedCarsSteps.select_location_as_from_AnyLocation_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 198690300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 17
    }
  ],
  "location": "UsedCarsSteps.select_Price_as_from_Price_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 186266400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find My Next Car",
      "offset": 10
    }
  ],
  "location": "UsedCarsSteps.click_on_button_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 3252733400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_should_see_list_of_searched_cars_on_Used_Search_Car_page()"
});
formatter.result({
  "duration": 275600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A3 Under 15000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 1314215200,
  "status": "passed"
});
formatter.after({
  "duration": 834995700,
  "status": "passed"
});
});