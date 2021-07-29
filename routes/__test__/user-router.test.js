const request = require("supertest");
const app = require("../../app");
const { not } = require("joi");


describe("GET /api/users ", () => {
    test("It should respond with an array of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    // user_id: 1,
                    // name: 'test',
                    // age: 23,
                    // email: 'test@add.co'
                })]))
        expect(response.statusCode).toBe(200);
    });
});

describe("POST /api/users ", () => {

    describe('given data is correct', () => {
        test('It should return user object with status of 200', async () => {
            const response = await request(app).post("/api/users").send({
                name: 'jest-test',
                age: 20,
                email: 'jest@test.co',
                password: 'jest12345'
            });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty(['user_id', 'name', 'age', 'email', 'password']);
        });
    });

    describe('missing some input data', async () => {
        test('Should respond with status code of 400', async () => {
            const response = await request(app).post("/api/users").send({
                name: 'jest-test',
                age: 20,
            });

            expect(expect(response.statusCode).toBe(400));
        });
    });
});

