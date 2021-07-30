const request = require("supertest");
const app = require("../../app");

module.exports = () => {
    describe("POST /auth/local ", () => {
        test("It should respond with an object of user and status code 200", async () => {
            const response = await request(app).post("/auth/local").send({
                email: 'test@add.co',
                password: 'test12345'
            });

            expect(response.body).toEqual({});
            expect(response.statusCode).toBe(200);
        });
    });
};

