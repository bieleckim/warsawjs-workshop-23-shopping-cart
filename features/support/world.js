const { Before, After } = require("cucumber");
const Nightmare = require("nightmare");
const { HomePage } = require("./page-objects/home-page");

function getNightmareOptions(withDevTools) {
  const baseOptions = {
    show: true
  };

  if (withDevTools) {
    baseOptions.openDevTools = {
      mode: "detach"
    };
  }

  return baseOptions;
}

Before(function() {
  this.nightmare = new Nightmare(getNightmareOptions(false));
  this.homePage = new HomePage(this.nightmare);
});

After(function() {
  return new Promise(resolve => {
    this.nightmare.end().then(resolve);
  }).then(() => {
    this.homePage = null;
    this.nightmare = null;
  });
});
