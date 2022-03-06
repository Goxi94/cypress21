// <reference types="cypress" />
import { loginPage } from '../page_objects/loginPOM';
describe("login test POM", () => {

  before("visit app", () => {
    cy.visit("/login");
  });

  it("login with valid credentials", () => {
    loginPage.login('filip.nedovic@vivifyideas.com', 'Test12345!')
  });

});