/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import MainPage from "../../Pages/MainPage";
import RegisterUserPage from "../../Pages/RegisterUserPage";

describe("Register user test suite", () => {

  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
  });

  it("Register successfully with a new user positive test", () => {
    MainPage.getRegisterPage();
    RegisterUserPage.getFirstName().type("Ana");
    RegisterUserPage.getLastName().type("Maria");
    RegisterUserPage.getEmail().type(faker.internet.email());
    RegisterUserPage.getPassword().type("Pisica123");
    RegisterUserPage.getConfirmPassword().type("Pisica123");
    RegisterUserPage.getRegisterBtn().click();
    cy.wait(1000);
      cy.contains(
        "Thank you for registering with Main Website Store."
      ).should("be.visible");
  });

});
