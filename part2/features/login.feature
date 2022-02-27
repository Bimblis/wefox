Feature: Lego Shop

  Scenario Outline: As a user, I want to buy a Lego item
    Given I am on the "legoHome" page with 'en-us'
    And I go to the store
    And I accept cookies
    When I select "newItems" shop category
    And I filter by age of "4+"
    And I filter by price of "0-25"
    Then I check the number of displayed items is 18
    When I select the first item
    And I add "1" item to the bag
    And I navigate to the bag
    Then I check the item data is correct