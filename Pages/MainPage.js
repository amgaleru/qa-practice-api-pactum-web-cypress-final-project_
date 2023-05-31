class MainPage {
  getRegisterPage() {
    return cy.get("a[href='https://magento.softwaretestingboard.com/customer/account/create/']");
  }
}
export default new MainPage();
