const app = require("../../../app");
const request = require("supertest");
const { testHelpers: { passwordCheck, dbValueCheck } } = require('../../../helpers');

module.exports = () => {
    describe("POST /api/users ", () => {

        describe('given data is correct', () => {
            test('It should return user object with status of 201', async () => {
                const name = 'test';
                const email = 'test@test.co';
                const password = 'test12345';

                const response = await request(app).post("/api/users").send({ name, email, password });

                expect(response.statusCode).toBe(201);
                expect(response.body).toEqual(
                    expect.objectContaining({
                        user_id: expect.any(Number),
                        name,
                        email,
                        password: expect.any(String)
                    }));


                expect(await dbValueCheck(name, email)).toBe(true);
                expect(await passwordCheck(password, response.body.password)).toBe(true);

            });

            test('It should return second user object with status of 201', async () => {
                const response = await request(app).post("/api/users").send({
                    name: 'test2',
                    email: 'test2@test.co',
                    password: 'test12345'
                });

                expect(response.statusCode).toBe(201);
                expect(response.body).toEqual(
                    expect.objectContaining({
                        user_id: expect.any(Number),
                        name: 'test2',
                        email: 'test2@test.co',
                        password: expect.any(String)
                    }));

                expect(await passwordCheck('test12345', response.body.password)).toBe(true);
            });

            describe('When given data is duplicate', () => {
                test('Should respond with status code of 409', async () => {
                    const response = await request(app).post("/api/users").send({
                        name: 'test',
                        email: 'test@test.co',
                        password: 'test12345'
                    });

                    expect(response.statusCode).toBe(409);
                });
            });

            describe('missing some input data', () => {
                test('Should respond with status code of 400', async () => {
                    const response = await request(app).post("/api/users").send({
                        name: 'test',
                    });

                    expect(expect(response.statusCode).toBe(400));
                });
            });
        });

    });

    describe("GET /api/users ", () => {
        test("It should respond with an array of users", async () => {
            const response = await request(app).get("/api/users");

            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        user_id: expect.any(Number),
                        name: expect.any(String),
                        email: expect.any(String),
                        password: expect.any(String)
                    })
                ])
            );

            expect(response.statusCode).toBe(200);
        });
    });


    // describe("DELETE /api/users/:user_id ", () => {
    //     test("It should respond with status code of 204", async () => {
    //         const response = await request(app).delete("/api/users/1").set('Authorization', '');
    //
    //         expect(response.statusCode).toBe(204);
    //     });
    // });
};
