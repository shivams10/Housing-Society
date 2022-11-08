const request = require("supertest");
const app = require(".");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZmlyc3RuYW1lIjoiU2FyaXRhIiwibGFzdG5hbWUiOiJTaHVrbGEiLCJjb250YWN0IjoiOTg5ODk4OTg5OCIsImVtYWlsIjoic2FyaXRhQGdtYWlsLmNvbSIsImlzYWRtaW4iOjEsImlkIjozLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5WlhOMWJIUWlPbnNpWm1seWMzUnVZVzFsSWpvaVUyRnlhWFJoSWl3aWJHRnpkRzVoYldVaU9pSlRhSFZyYkdFaUxDSmpiMjUwWVdOMElqb2lPVGc1T0RrNE9UZzVPQ0lzSW1WdFlXbHNJam9pYzJGeWFYUmhRR2R0WVdsc0xtTnZiU0lzSW1sellXUnRhVzRpT2pFc0ltbGtJam96TENKMGIydGxiaUk2SW1WNVNtaGlSMk5wVDJsS1NWVjZTVEZPYVVselNXNVNOV05EU1RaSmEzQllWa05LT1M1bGVVcDVXbGhPTVdKSVVXbFBibk5wV20xc2VXTXpVblZaVnpGc1NXcHZhVlV5Um5saFdGSm9TV2wzYVdKSFJucGtSelZvWWxkVmFVOXBTbFJoU0ZaeVlrZEZhVXhEU21waU1qVXdXVmRPTUVscWIybFBWR2MxVDBSck5FOVVaelZQUTBselNXMVdkRmxYYkhOSmFtOXBZekpHZVdGWVVtaFJSMlIwV1Zkc2MweHRUblppVTBselNXMXNlbGxYVW5SaFZ6UnBUMnBGYzBsdGJHdEphbTk2VEVOS01HSXlkR3hpYVVrMlltNVdjMkpJTUhOSmJXeG9aRU5KTmsxVVdUSk9la0Y0VDBSRk1FNXBkMmxhV0doM1NXcHZlRTVxWTNkT2FrVTBUVlJSTW1aUkxrMW9TV3RMYUVWNFdubGhjRTVwUVdoM1gyOXJOVmgxUWsxbWRIRkhOVEZyTFMxcVlqbExlREZ0UmpRaWZTd2lhV0YwSWpveE5qWTNNREU0TVRVeExDSmxlSEFpT2pFMk56QTJNVGd4TlRGOS5vVGtVWGpaRWxPLW83Vm5zS2V5TnBPOHNaSlFVWUIwVzBFMzhYaml0anJvIn0sImlhdCI6MTY2NzAxODE1MiwiZXhwIjoxNjcwNjE4MTUyfQ.Pk7Ulb0zgTQkLiIIpfOtQQJIbaOw_W8kfhVLXGc1JPU";

describe("Testing that fetching of all users data is working properly", () => {
  it("tests /api/users endpoints", async () => {
    const response = await request(app)
      .get("/api/users")
      .auth(token, { type: "bearer" });
    expect(response.statusCode).toBe(200);
    expect(typeof response.body == "object").toBe(true);
    expect(response.body.data).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
    expect(response.body.data[0]).toEqual({
      id: 2,
      firstname: "Manoj",
      lastname: "Shukla",
      contact: "9898989898",
      email: "manoj@gmail.com",
      password: "$2b$10$0tVE1xA7gp55rKZNC.131u.ryva2O1SaQ04Y043TGOeurBzkrm5/S",
      isadmin: 1,
    });
  });
});

describe("Testing that single user route is working properly", () => {
  it("tests /api/users/:id", async () => {
    const response = await request(app).get("/api/user/2");
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual({
      id: 2,
      firstname: "Manoj",
      lastname: "Shukla",
      contact: "9898989898",
      email: "manoj@gmail.com",
      password: "$2b$10$0tVE1xA7gp55rKZNC.131u.ryva2O1SaQ04Y043TGOeurBzkrm5/S",
      isadmin: 1,
    });
  });
});

describe("Testing that fetching of resources data is working properly", () => {
  it("tests /api/resources endpoints", async () => {
    const response = await request(app)
      .get("/api/resources")
      .auth(token, { type: "bearer" });
    expect(response.statusCode).toBe(200);
    expect(typeof response.body == "object").toBe(true);
    expect(response.body.data).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
    expect(response.body.data[0]).toEqual({
      id: 1,
      resource_name: "Hall",
      status: 1,
    });
  });
});

describe("Testing that single resource route is working properly", () => {
  it("tests /api/resources/:id", async () => {
    const response = await request(app).get("/api/resources/2");
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual({
      id: 2,
      resource_name: "Swimming Pool",
      status: 1,
    });
  });
});
