/// <reference types="cypress" />
import SearchPage from "../../Pages/SearchPage";

describe("Search products test suite", () => {

  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Search products by typing and pressing ENTER test", () => {
    SearchPage.getSearch().type('tees{enter}');
    cy.wait(1000);
    cy.contains("3 Items").should("be.visible");
    });
});
