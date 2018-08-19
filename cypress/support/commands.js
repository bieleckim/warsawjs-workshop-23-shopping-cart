
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
    return cy
        .contains(productTitle)
        .parents('.ant-list-item')
        .find('.ant-list-item-action li div');
});

Cypress.Commands.add('getValidationErrorForTextField', (textFieldSelector) => {
    return cy
        .get(textFieldSelector)
        .parents('.ant-form-item-control')
        .find('.ant-form-explain');
});

Cypress.Commands.add('getProductPriceFromProductList', (productTitle) => {
    return cy
        .contains(productTitle)
        .parents('.ant-card-meta-detail')
        .find('.ant-card-meta-description').then((description) => {
            const descriptionText = description.text();
            return new  Cypress.Promise((resolve, reject) => {
                resolve(parseFloat(descriptionText.split(' ')[1].split('zł')[0]));
            });
        });
});

Cypress.Commands.add('getOrderTotalPrice', () => {
    return cy
        .contains('Your order total')
        .then((orderTotal) => {
            const orderTotalText = orderTotal.text();
            return new  Cypress.Promise((resolve, reject) => {
                resolve(parseFloat(orderTotalText.split(' ')[3].split('zł')[0]));
            });
        });
});
