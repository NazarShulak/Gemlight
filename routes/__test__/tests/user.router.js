const request = require("supertest");
const app = require("../../../app");


module.exports = () => {
    describe("POST /api/users ", () => {

        describe('given data is correct', () => {
            test('It should return user object with status of 201', async () => {
                const response = await request(app).post("/api/users").send({
                    name: 'test',
                    age: 20,
                    email: 'test@test.co',
                    password: 'test12345'
                });

                expect(response.statusCode).toBe(201);
                expect(response.body).toMatchSnapshot({
                    user_id: expect.any(Number),
                    name: 'test',
                    age: 20,
                    email: 'test@test.co',
                    password: expect.any(String)
                });
            });

            describe('When given data is duplicate', () => {
                test('Should respond with status code of 409', async () => {
                    const response = await request(app).post("/api/users").send({
                        name: 'test',
                        age: 20,
                        email: 'test@test.co',
                        password: 'test12345'
                    });

                    expect(response.statusCode).toBe(409);
                });
            });

            describe('missing some input data', () => {
                test('Should respond with status code of 500', async () => {
                    const response = await request(app).post("/api/users").send({
                        name: 'test',
                        age: 20,
                    });

                    expect(expect(response.statusCode).toBe(500));
                });
            });
        });

        describe("GET /api/users ", () => {
            test("It should respond with an array of users", async () => {
                const response = await request(app).get("/api/users");

                expect(response.body).toMatchSnapshot([{
                    user_id: expect.any(Number),
                    name: expect.any(String),
                    age: expect.any(Number),
                    email: expect.any(String),
                    password: expect.any(String)
                }]);

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
    })
}
