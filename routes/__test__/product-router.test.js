const request = require("supertest");
const app = require("../../app");

describe("GET /api/product ", () => {
    test("It should respond with an array of products and status code 200", async () => {
        const response = await request(app).get("/api/product");

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({})
            ]));

        expect(response.statusCode).toBe(200);
    });
});

describe("GET /api/product/:id ", () => {
    test("It should respond with an object of product and status code 200", async () => {
        const response = await request(app).get("/api/product/100");

        expect(response.body).toEqual(
            expect.objectContaining({}));

        expect(response.statusCode).toBe(200);
    });
});
