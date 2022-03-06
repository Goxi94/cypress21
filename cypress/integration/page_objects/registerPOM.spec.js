// <reference types="cypress" />
import { registerPage } from '../page_objects/loginPOM';
describe("Register test POM", () => {

  beforeEach("Visit app", () => {
    cy.visit("/register");
  });

  it("Empty First Name", () => {
    registerPage.register('', 'QA', 'goran@qa.com', 'Test12345!', 'Test12345!')
  });

  it("Only Spaces in First Name", () => {
      registerPage.register('    ', 'QA', )
  })

  it("Special Characters in First Name", () => {
      registerPage.register('$#!%$#^%#@!%!{]];]', ' ')
  })

});