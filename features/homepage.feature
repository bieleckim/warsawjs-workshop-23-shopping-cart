Feature: Home Page test

    Ensure the application will load and render

    Scenario: Load the page
        Given a page exists
        When I load the page
        Then "Shop" should be displayed