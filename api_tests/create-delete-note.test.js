const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("Create note endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Create note test", async () => {
    const requestBody = {
      title: "faker.airline.airplane()",
      description: "faker.airline.airport()",
      category: "Home",
    };

    await spec()
      .post(baseUrl + "/notes")
      .withBody(requestBody)
      .withHeaders("x-auth-token", "1d05ea0c9d9043f9810e24b098b46aa274d80884f8b84f64b62d177d1c20a33c")
      .expectStatus(200)
      .expectBodyContains("Note successfully created");
  });
});

describe("Delete note by ID test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Delete note by ID test", async () => {
    await spec()
      .delete(baseUrl + "/notes/{id}")
      .withHeaders("x-auth-token", "1d05ea0c9d9043f9810e24b098b46aa274d80884f8b84f64b62d177d1c20a33c")
      .withPathParams("id", "64765c39a8f9c70211262df0")
      .expectStatus(200)
      .expectBodyContains("Note successfully deleted");
  });
});
