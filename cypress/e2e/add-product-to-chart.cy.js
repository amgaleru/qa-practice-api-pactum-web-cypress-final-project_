/// <reference types="cypress" />

describe("Add products to chart test suite", () => {

  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Add products to chart test", () => {
    cy.get('#ui-id-8').click();
    cy.wait(1000);
    cy.get('a[href="https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html"]').click();

    });
});
