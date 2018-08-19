describe('Order', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('can add product to cart', () => {
        const productTitle = 'Minecraft';

        cy.addAProductToCart(productTitle);
        cy.contains('Cart').click();
        cy.contains(productTitle);
    });

    it('can make a order', () => {
        const productTitle = 'Mario Kart 8 Deluxe';
        const fullname = 'John Doe';
        const street = 'Sample Street 1';
        const city = 'Sample City';
        const country = 'Poland';
        const deliveryMethod = 'Courier Express';

        cy.addAProductToCart(productTitle);
        cy.contains('Cart').click();
        cy.contains('Next').click();

        cy.fillDeliveryAddressForm(fullname, street, city, country);

        cy.contains('Next').click();

        cy.selectPreferredDeliveryMethod(deliveryMethod);

        cy.contains('Next').click();
        cy.contains('Order #1 has been placed');
        cy.contains(productTitle);
        cy.contains(fullname);
        cy.contains(street);
        cy.contains(city);
        cy.contains(country);
        cy.contains(deliveryMethod);
    });

    it('can add multiple products to cart', () => {
        const products = ['Minecraft', 'Mario Kart 8 Deluxe', 'Joy-Con Pair'];

        products.forEach((product) => {
            cy.addAProductToCart(product);
        });

        cy.contains('Cart').click();

        products.forEach((product) => {
            cy.contains(product);
        });
    });

    it('can increase quantity in the cart', () => {
        const productTitle = 'Minecraft';
        cy.addAProductToCart(productTitle);
        cy.contains('Cart').click();
        cy.getTotalPriceForProductInCart(productTitle).then((price) => {
            const priceBeforeIncrease = parseFloat(price.text());
            cy.increaseProductQuantityInCart(productTitle);

            cy.getTotalPriceForProductInCart(productTitle).then((price) => {
                const priceAfterIncrease = parseFloat(price.text());
                expect(priceAfterIncrease).to.eq(priceBeforeIncrease * 2);
            });
        });
    });
});
