class HomePage {
  constructor(nightmare) {
    this.nightmare = nightmare;
  }

  setHost(host) {
    this.host = host;
  }

  loadPage() {
    const path = `${this.host}`;

    return this.nightmare.goto(path).wait(".ant-menu");
  }

  getHeaderMessage() {
    return this.nightmare.evaluate(selector => {
      const element = document.querySelector(selector);

      return {
        message: element.innerText
      };
    }, ".ant-layout-header .ant-menu-item a");
  }
}

module.exports = {
  HomePage
};
