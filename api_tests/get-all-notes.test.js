const { spec, request } = require("pactum");

const getNotesSchema = require("../data/response/get-notes-response-schema.json");

const baseUrl = "https://practice.expandtesting.com/notes/api";

describe("Get all notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get all notes test", async () => {
    await spec()
      .get(baseUrl + "/notes")
      .expectStatus(200)
      .expectBodyContains("Notes successfully retrieved")
      .withHeaders("x-auth-token", "1d05ea0c9d9043f9810e24b098b46aa274d80884f8b84f64b62d177d1c20a33c")
      .expectJsonSchema(getNotesSchema);
  });
});
