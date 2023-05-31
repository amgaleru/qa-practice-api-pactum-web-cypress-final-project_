class RegisterUserPage {
  getFirstName() {
    return cy.get("#firstname");
  }

  getLastName() {
    return cy.get("#lastname");
  }

  getEmail() {
    return cy.get("#email_address");
  }

  getPassword() {
    return cy.get("#password");
  }

  getConfirmPassword() {
    return cy.get('#password-confirmation');
  }

  getRegisterBtn() {
    return cy.get("button").contains("Create an Account");

}

}
export default new RegisterUserPage();
