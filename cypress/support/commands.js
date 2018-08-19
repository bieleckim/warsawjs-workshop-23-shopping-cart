
Cypress.Commands.add('addAProductToCart', (productTitle) => {
    cy
        .contains(productTitle)
        .parents('.ant-card')
        .find('.ant-btn')
        .click();
});

Cypress.Commands.add('fillDeliveryAddressForm', (fullname, street, city, country) => {
    cy
        .get('#fullname')
        .type(fullname);

    cy
        .get('#street')
        .type(street);

    cy
        .get('#city')
        .type(city);

    cy
        .get('.ant-cascader-picker-label')
        .click();

    cy
        .contains(country)
        .click();
});


Cypress.Commands.add('selectPreferredDeliveryMethod', (deliveryMethod) => {
    cy
        .get('.ant-select-selection__rendered')
        .click();

    cy
        .contains(deliveryMethod)
        .click();
});

Cypress.Commands.add('increaseProductQuantityInCart', (productTitle) => {
    cy
        .contains(productTitle)
        .parents('.ant-list-item')
        .find('.anticon-plus')
        .parent('button')
        .click();
});

Cypress.Commands.add('getTotalPriceForProductInCart', (productTitle) => {
    return new Cypress.Promise((resolve, reject) => {
        cy
            .contains(productTitle)
            .parents('.ant-list-item')
            .find('.ant-list-item-action li div')
            .then((elementWithTotalPrice) => {
                resolve(elementWithTotalPrice.text());
            });
    });
});
