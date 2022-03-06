
/// <reference types="Cypress" />


describe("registration test", () => {

    beforeEach('visit register page', () => {
        cy.visit('/register');
        cy.url().should('contain', '/register');
    })

   
  it("visit register page", () => {
    cy.visit("/register");
    cy.url().should("contains", "/register");
  });

  it("register without first name", () => {
    cy.visit("/register");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register without last name", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register with invalid email", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register with invalid password confirmation", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });

  it("register withhout checking terms and conditions", () => {
    cy.visit("/register");
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get("button").click();
  });

  it("register with valid data", () => {
    cy.get("#first-name").type("ime");
    cy.get("#last-name").type("prezime");
    cy.get("#email").type("test+@mail.com");
    cy.get("#password").type("Test12345!");
    cy.get("#password-confirmation").type("Test12345!");
    cy.get(":checkbox").check();
    cy.get("button").click();
  });
});