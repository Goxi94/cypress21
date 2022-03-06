/// <reference types="cypress" />
const Locators = require('../fixtures/Locators.json')
const{faker} = require('@faker-js/faker');
describe("login test", () => {

    let userData = {
        radomname: faker.name.firstname(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.Password()
    }

    before("visit app", () => {
        cy.visit("/");
      });
        
    });
it("Login with valid credentials", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    //cy.get('a[href="/login"]').click();
   // cy.get('.nav-link').eq(1).click();
  // cy.get(Locators.CommonElements.emailField).type("zxcv@zxcv.com");
   // cy.get(Locators.CommonElements.passwordField).type("zxcvzxcvzxcv123");
  //  cy.get(Locators.CommonElements.submitBtn).click();
    // logout
  //  cy.get(Locators.Header.button).should('have.length', 4);
   // cy.get(Locators).eq(3).click();
});
