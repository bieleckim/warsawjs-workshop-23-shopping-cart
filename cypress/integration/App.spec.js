describe("App", () => {

    it("loads correctly", () => {
        cy
            .visit("/")
            .contains("Shop home");
    });

});
