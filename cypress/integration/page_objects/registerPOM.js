export default class registerPage {
    get firstName() {
      return cy.get("input[id='first-name']");
    }
  
    get LastName() {
      return cy.get("input[id='last-name']");
    }

    get email() {
        return cy.get("input[id='email']");
    }

    get password() {
        return cy.get("input[id='password]");
    }

    get confirmPassword() {
        return cy.get("input[id='password-confirmation]");
    }
    get terms() {
        return cy.get("input[type='checkbox']");
    }
  
    get submitBtn() {
      return cy.get("button[class='btn btn-custom");
    }
  
    register(firstName, lastName, email, password, confirmPassword) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email);
        this.password.type(password);
        this.confirmPassword.type(confirmPassword)
        this.terms.click(isNaN);
        this.submitBtn.click();
    }
  }
  
  export const registerPage = new registerPage();