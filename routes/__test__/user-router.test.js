const request = require("supertest");
const app = require("../../app");


describe("GET /api/users ", () => {
    test("It should respond with an array of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    user_id: 1,
                    name:'test',
                    age:23,
                    email:'test@add.co'
                })]))
        expect(response.statusCode).toBe(200);
    });
});

