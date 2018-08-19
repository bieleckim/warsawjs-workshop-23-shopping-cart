const { Given, When, Then } = require("cucumber");
let expect = require("chai").expect;

Given("a page exists", function() {
  return this.homePage.setHost("http://localhost:3000");
});

When("I load the page", function() {
  return this.homePage.loadPage();
});

Then("{string} should be displayed", function(message) {
  return this.homePage
    .getHeaderMessage()
    .end()
    .then(result => {
      expect(result.message).to.equal(message);
    });
});
