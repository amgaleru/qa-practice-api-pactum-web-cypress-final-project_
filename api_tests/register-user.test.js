const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("Register user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Register user successfully test", async () => {
    const requestBody = {
      name: "practice",
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await spec()
      .post(baseUrl + "/users/register")
      .withBody(requestBody)
      .expectStatus(201)
      .expectBodyContains("User account created");
  });

  it("Unsuccessfully register user test", async () => {
    const requestBody = {
      email: "ana@ana.com",
      password: "pisica12345",
    };

    await spec()
      .post(baseUrl + "/users/register")
      .withBody(requestBody)
      .expectStatus(400)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
