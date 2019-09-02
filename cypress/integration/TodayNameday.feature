Feature: Today's nameday 
  
  Scenario: Get nameday for today
    Given I request nameday app
    Then The day is today
    And The month equals current month