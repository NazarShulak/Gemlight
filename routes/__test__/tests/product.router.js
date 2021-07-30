const request = require("supertest");
const app = require("../../../app");


module.exports = () => {
    describe("POST /api/product ", () => {
        test("It should respond with status code of 201", async () => {
            const response = await request(app).post("/api/product").send({
                productId: 100,
                userId: 1,
                title: 'book',
                description: 'Old book',
                price: 1000,
                quantity: 1
            });

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    productId: 100,
                    userId: 1,
                    title: 'book',
                    description: 'Old book',
                    price: 1000,
                    quantity: 1
                }))
        });
    });

    describe("GET /api/product ", () => {
        test("It should respond with an array of products and status code of 200", async () => {
            const response = await request(app).get("/api/product");

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        productId: expect.any(Number),
                        userId: expect.any(Number),
                        title: expect.any(String),
                        description: expect.any(String),
                        price: expect.any(Number),
                        quantity: expect.any(Number)
                    })
                ])
            )
        });
    });


    describe("GET /api/product/:id ", () => {
        test("It should respond with an object of product and status code of 200", async () => {
            const response = await request(app).get("/api/product/100");

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    productId: expect.any(Number),
                    userId: expect.any(Number),
                    title: expect.any(String),
                    description: expect.any(String),
                    price: expect.any(Number),
                    quantity: expect.any(Number)
                })
            );
        });
    });

    describe("PUT /api/product/:id ", () => {
        test("It should respond with an object of updated product and status code of 201", async () => {
            const response = await request(app).put("/api/product/100").send({
                productId: 100,
                userId: 1,
                title: 'updated book',
                description: 'Old book',
                price: 100,
                quantity: 2
            });

            expect(response.statusCode).toBe(201);
        });
    });


    describe("GET /api/product/check/:name ", () => {
        test("It should respond with status code of 200", async () => {
            const response = await request(app).get("/api/product/check/:name").send('car');

            expect(response.body).toBe('Unique');
            expect(response.statusCode).toBe(200);
        });
    });

    describe("POST /api/product/:id/review ", () => {
        test("It should respond with object of review and status code of 201", async () => {
            const response = await request(app).post("/api/product/100/review").send({
                userId: 1,
                reviewBody: 'Very nice ancient book'
            });

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    userId: 1,
                    productId: '100',
                    reviewBody: expect.any(String)
                })
            )
        });
    });

    describe("GET /api/product/:id/review ", () => {
        test("It should respond with array of reviews and status code of 201", async () => {
            const response = await request(app).get("/api/product/100/review");

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    userId: expect.any(Number),
                    productId: 100,
                    reviewBody: expect.any(String)
                })
            )
        });
    });

    describe("DELETE /api/product ", () => {
        test("It should respond with status code 204", async () => {
            const response = await request(app).delete("/api/product").send({
                userId: 1,
            });

            expect(response.statusCode).toBe(204);
        });
    });
};
