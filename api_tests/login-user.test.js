const { spec, request } = require("pactum");

const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("Login user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Login user successfully test", async () => {
    const requestBody = {
      email: "123@expandtesting.com",
      password: "pisica",
    };

    await spec()
      .post(baseUrl + "/users/login")
      .withBody(requestBody)
      .expectStatus(200)
      .expectBodyContains("Login successful");
  });

  it("Login user unsuccessfully test", async () => {
    await spec()
      .post(baseUrl + "/users/login")
      .withBody({
        email: "peter@klaven",
      })
      .expectStatus(400);
  });
});
