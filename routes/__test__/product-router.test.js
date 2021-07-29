const request = require("supertest");
const app = require("../../app");
const Sequelize = require("sequelize");

describe("GET /api/product ", () => {
    test("It should respond with an array of products and status code 200", async () => {
        const response = await request(app).get("/api/product");

        expect(response.statusCode).toBe(200);
    });
});

// describe("GET /api/product/:id ", () => {
//     test("It should respond with an object of product and status code 200", async () => {
//         const response = await request(app).get("/api/product/100");
//
//         expect(response.body).toEqual({});
//
//         expect(response.statusCode).toBe(200);
//     });
// });

describe("DELETE /api/product ", () => {
    test("It should respond with status code 204", async () => {
        const response = await request(app).delete("/api/product").send({
            user_id: 1
        });

        expect(response.body).toBe('Successfully deleted');
        expect(response.statusCode).toBe(204);
    });
});

describe("GET /api/product/check/:name ", () => {
    test("It should respond with status code 200", async () => {
        const response = await request(app).get("/api/product/check/:name").send('car');

        expect(response.body).toBe('Unique');
        expect(response.statusCode).toBe(200);
    });
});

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
    });
});
