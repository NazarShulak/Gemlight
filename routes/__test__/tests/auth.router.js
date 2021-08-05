const request = require("supertest");
const app = require("../../../app");
const { testHelpers: { dbTokensCheck } } = require('../../../helpers');

module.exports = () => {
    describe("POST /auth/local ", () => {
        test("It should respond with an object of user and status code 200", async () => {
            const response = await request(app).post("/auth/local").send({
                email: 'test@test.co',
                password: 'test12345'
            });

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    userId: expect.any(Number),
                    accessToken: expect.any(String),
                    refreshToken: expect.any(String),
                    expireAt: expect.any(Number)
                })
            )

            expect(await dbTokensCheck(response.body.accessToken, response.body.refreshToken)).toBe(true);
        });
    });
};

