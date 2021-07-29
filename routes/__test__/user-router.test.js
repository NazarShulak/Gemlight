const request = require("supertest");
const app = require("../../app");


describe("GET /api/users ", () => {
    test("It should respond with an array of users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({}
                )]));
        expect(response.statusCode).toBe(200);
    });
});

describe("POST /api/users ", () => {

    describe('given data is correct', () => {
        test('It should return user object with status of 200', async () => {
            const response = await request(app).post("/api/users").send({
                name: 'jes',
                age: 20,
                email: 'jet@est.co',
                password: 'jest12345'
            });

            expect(response.statusCode).toBe(200);
        });
    });

    describe('When given data is duplicate', () => {
        test('Should respond with status code of 409', async () => {
            const response = await request(app).post("/api/users").send({
                name: 'jest',
                age: 20,
                email: 'jest@est.co',
                password: 'jest12345'
            });

            expect(response.statusCode).toBe(409);
        });
    });

    describe('missing some input data', () => {
        test('Should respond with status code of 500', async () => {
            const response = await request(app).post("/api/users").send({
                name: 'jest-test',
                age: 20,
            });

            expect(expect(response.statusCode).toBe(500));
        });
    });
});

// describe("DELETE /api/users/:user_id ", () => {
//     test("It should respond with status code of", async () => {
//         const response = await request(app).get("/api/users");
//
//         expect(response.statusCode).toBe(200);
//     });
// });


